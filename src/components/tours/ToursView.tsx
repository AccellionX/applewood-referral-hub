"use client";

import { useState } from "react";
import {
  CheckSquare,
  Copy,
  Flame,
  MessageSquare,
  Sparkles,
  FileText,
} from "lucide-react";
import { toast } from "sonner";
import { tourNotes } from "@/data/tours";
import type { TourFollowupResult } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

function leadScoreStyles(score: string) {
  switch (score) {
    case "Hot":
      return "bg-rose-50 text-rose-700 border-rose-200";
    case "Warm":
      return "bg-amber-50 text-amber-800 border-amber-200";
    default:
      return "bg-sky-50 text-sky-700 border-sky-200";
  }
}

export function ToursView() {
  const [noteIndex, setNoteIndex] = useState(0);
  const [notes, setNotes] = useState(tourNotes[0].notes);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TourFollowupResult | null>(null);

  function loadAnother() {
    const next = (noteIndex + 1) % tourNotes.length;
    setNoteIndex(next);
    setNotes(tourNotes[next].notes);
    setResult(null);
  }

  async function generate() {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/draft", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "tour_followup",
          context: {
            notes,
            tourNoteId: tourNotes[noteIndex].id,
          },
        }),
      });
      const data = await res.json();
      setResult(data.result as TourFollowupResult);
    } catch {
      toast.error("Something went wrong. Using a safe fallback.");
      setResult({
        summary: [
          "Family toured an Applewood home for a loved one with memory care needs",
          "Safety, routine, and personal attention are top priorities",
          "Comparing communities and weighing timing/cost",
          "Follow-up materials and a clear next step will help",
        ],
        familyText:
          "Thank you for touring with us today. It was a pleasure learning what matters most for your family. Happy to send next steps whenever you're ready.",
        tasks: [
          { task: "Send follow-up email", owner: "Tiffany", due: "Today" },
          { task: "Share pricing", owner: "Tiffany", due: "Tomorrow" },
          { task: "Offer second tour", owner: "Admissions", due: "This week" },
        ],
        leadScore: "Warm",
        reason: "Engaged tour; follow-up will clarify timeline.",
      });
    } finally {
      setLoading(false);
    }
  }

  async function copyText(label: string, text: string) {
    await navigator.clipboard.writeText(text);
    toast.success(`${label} copied`);
  }

  return (
    <div className="space-y-5 sm:space-y-6">
      <div className="animate-fade-in">
        <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Tour Follow-up
        </h1>
        <p className="mt-1 text-sm text-[var(--muted)]">
          Turn messy tour notes into a summary, family text, and CRM tasks
        </p>
      </div>

      <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
        <Card className="animate-fade-in animate-delay-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-4 w-4 shrink-0 text-[var(--primary)]" />
              Tour notes
            </CardTitle>
            <p className="text-sm text-[var(--muted)]">
              {tourNotes[noteIndex].label}
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="min-h-[220px] leading-relaxed sm:min-h-[340px]"
            />
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <Button
                className="w-full sm:w-auto"
                onClick={generate}
                disabled={loading || !notes.trim()}
              >
                <Sparkles className="h-4 w-4" />
                {loading ? "Generating…" : "Generate follow-up"}
              </Button>
              <Button
                className="w-full sm:w-auto"
                variant="outline"
                onClick={loadAnother}
                disabled={loading}
              >
                Load another example
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="animate-fade-in animate-delay-2 space-y-4">
          {!result && !loading && (
            <Card className="border-dashed">
              <CardContent className="flex min-h-[200px] flex-col items-center justify-center gap-2 p-6 text-center sm:min-h-[340px] sm:p-8">
                <MessageSquare className="h-8 w-8 text-[var(--border)]" />
                <p className="text-sm font-medium text-[var(--foreground)]">
                  Follow-up will appear here
                </p>
                <p className="max-w-xs text-sm text-[var(--muted)]">
                  Generate to get a tour summary, family text message, CRM
                  tasks, and lead score.
                </p>
              </CardContent>
            </Card>
          )}

          {loading && (
            <div className="space-y-4">
              <Skeleton className="h-8 w-32" />
              <Skeleton className="h-40 w-full" />
              <Skeleton className="h-28 w-full" />
              <Skeleton className="h-36 w-full" />
            </div>
          )}

          {result && !loading && (
            <>
              <div
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium",
                  leadScoreStyles(result.leadScore),
                )}
              >
                <Flame className="h-3.5 w-3.5" />
                Lead score: {result.leadScore}
              </div>
              <p className="text-sm text-[var(--muted)]">{result.reason}</p>

              <Card>
                <CardHeader className="flex-row items-start justify-between gap-3 space-y-0">
                  <CardTitle className="text-base">Tour summary</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      copyText(
                        "Summary",
                        result.summary.map((s) => `• ${s}`).join("\n"),
                      )
                    }
                  >
                    <Copy className="h-3.5 w-3.5" />
                    Copy
                  </Button>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {result.summary.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-relaxed text-[var(--foreground)]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex-row items-start justify-between gap-3 space-y-0">
                  <CardTitle className="text-base">
                    Family text message
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyText("Text message", result.familyText)}
                  >
                    <Copy className="h-3.5 w-3.5" />
                    Copy
                  </Button>
                </CardHeader>
                <CardContent>
                  <p className="rounded-xl bg-[var(--accent-soft)] p-4 text-sm leading-relaxed text-[var(--foreground)]">
                    {result.familyText}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex-row items-start justify-between gap-3 space-y-0">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <CheckSquare className="h-4 w-4 text-[var(--primary)]" />
                    CRM tasks
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      copyText(
                        "Tasks",
                        result.tasks
                          .map((t) => `☐ ${t.task} - ${t.owner} - ${t.due}`)
                          .join("\n"),
                      )
                    }
                  >
                    <Copy className="h-3.5 w-3.5" />
                    Copy
                  </Button>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {result.tasks.map((task) => (
                      <li
                        key={task.task}
                        className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--background)]/70 px-3 py-2.5"
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-[var(--border)] bg-white" />
                        <div>
                          <p className="text-sm font-medium">{task.task}</p>
                          <p className="text-xs text-[var(--muted)]">
                            {task.owner} · {task.due}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
