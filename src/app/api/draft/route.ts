import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import type { DraftRequest, TourFollowupResult } from "@/lib/types";
import {
  defaultPartnerCheckin,
  defaultTourFollowup,
  partnerCheckinFallbacks,
  tourFollowupFallbacks,
} from "@/data/fallbacks";

const SYSTEM_PROMPT = `You are an assistant for the Sales & Admissions Director of Applewood Our House, a small family-owned residential memory care provider with five homes in the Denver metro area. Tone is warm, human, concise, and never pushy. Never invent medical details beyond what is given. All names in prompts are fictional demo data. Never use em dashes; use commas, periods, or hyphens instead.`;

function getPartnerFallback(partnerId?: string) {
  if (partnerId && partnerCheckinFallbacks[partnerId]) {
    return partnerCheckinFallbacks[partnerId];
  }
  return defaultPartnerCheckin;
}

function getTourFallback(tourNoteId?: string): TourFollowupResult {
  if (tourNoteId && tourFollowupFallbacks[tourNoteId]) {
    return tourFollowupFallbacks[tourNoteId];
  }
  return defaultTourFollowup;
}

function parseTourJson(text: string): TourFollowupResult | null {
  try {
    const cleaned = text.replace(/```json\n?|\n?```/g, "").trim();
    const parsed = JSON.parse(cleaned) as TourFollowupResult;
    if (
      !Array.isArray(parsed.summary) ||
      typeof parsed.familyText !== "string" ||
      !Array.isArray(parsed.tasks) ||
      !["Hot", "Warm", "Nurture"].includes(parsed.leadScore) ||
      typeof parsed.reason !== "string"
    ) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

async function callAnthropic(userPrompt: string): Promise<string | null> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return null;

  try {
    const client = new Anthropic({ apiKey });
    const message = await client.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userPrompt }],
    });

    const block = message.content.find((b) => b.type === "text");
    return block && block.type === "text" ? block.text : null;
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  let body: DraftRequest;
  try {
    body = (await request.json()) as DraftRequest;
  } catch {
    return NextResponse.json(
      {
        error: "Invalid JSON",
        email: defaultPartnerCheckin,
        result: defaultTourFollowup,
      },
      { status: 200 },
    );
  }

  const { mode, context } = body;

  if (mode === "partner_checkin") {
    const fallback = getPartnerFallback(context?.partnerId);
    const prompt = `Draft a short, warm, personal check-in email (under 120 words) to ${context?.partnerName} at ${context?.organization} (${context?.type}). Last contact: ${context?.lastContactDays} days ago. Context: ${context?.detailForAi}. Mention a specific past referral or detail. No salesy tone. Sign as "Tiffany, Sales & Admissions Director". Return only the email body.`;

    const text = await callAnthropic(prompt);
    return NextResponse.json({
      email: text?.trim() || fallback,
      usedFallback: !text,
    });
  }

  if (mode === "tour_followup") {
    const fallback = getTourFallback(context?.tourNoteId);
    const prompt = `From these tour notes, return STRICT JSON only (no markdown) with this shape:
{"summary": string[] (4-5 bullets covering family, needs, concerns, timeline, decision factors), "familyText": string (under 60 words, warm text message referencing something specific, proposing a next step), "tasks": [{"task": string, "owner": string, "due": string}] (3-4 items), "leadScore": "Hot"|"Warm"|"Nurture", "reason": string (one line)}

Tour notes:
${context?.notes}`;

    const text = await callAnthropic(prompt);
    const parsed = text ? parseTourJson(text) : null;
    return NextResponse.json({
      result: parsed || fallback,
      usedFallback: !parsed,
    });
  }

  return NextResponse.json({
    email: defaultPartnerCheckin,
    result: defaultTourFollowup,
    usedFallback: true,
  });
}
