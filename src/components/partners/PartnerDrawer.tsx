"use client";

import { useEffect, useState } from "react";
import { Copy, Mail, Phone, RefreshCw, Send, Sparkles } from "lucide-react";
import { toast } from "sonner";
import type { Partner } from "@/lib/types";
import { getPartnerStatus, statusStyles } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface PartnerDrawerProps {
  partner: Partner | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onMarkSent: (partnerId: string) => void;
}

export function PartnerDrawer({
  partner,
  open,
  onOpenChange,
  onMarkSent,
}: PartnerDrawerProps) {
  const [draft, setDraft] = useState("");
  const [displayed, setDisplayed] = useState("");
  const [loading, setLoading] = useState(false);
  const [streaming, setStreaming] = useState(false);

  useEffect(() => {
    setDraft("");
    setDisplayed("");
    setLoading(false);
    setStreaming(false);
  }, [partner?.id]);

  useEffect(() => {
    if (!draft) {
      setDisplayed("");
      return;
    }
    setStreaming(true);
    setDisplayed("");
    let i = 0;
    const id = window.setInterval(() => {
      i += 3;
      setDisplayed(draft.slice(0, i));
      if (i >= draft.length) {
        window.clearInterval(id);
        setStreaming(false);
      }
    }, 16);
    return () => window.clearInterval(id);
  }, [draft]);

  async function generateDraft() {
    if (!partner) return;
    setLoading(true);
    setDraft("");
    try {
      const res = await fetch("/api/draft", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "partner_checkin",
          context: {
            partnerId: partner.id,
            partnerName: partner.name,
            organization: partner.organization,
            type: partner.type,
            lastContactDays: partner.lastContactDays,
            detailForAi: partner.detailForAi,
          },
        }),
      });
      const data = await res.json();
      setDraft(data.email || data.fallback || "Unable to draft right now.");
    } catch {
      setDraft(
        `Hi ${partner.name.split(" ")[0]},\n\nJust a warm check-in from Applewood Our House. Grateful for our partnership and happy to help whenever a family needs a small-home memory care option.\n\nWarmly,\nTiffany\nSales & Admissions Director`,
      );
    } finally {
      setLoading(false);
    }
  }

  async function copyDraft() {
    if (!displayed) return;
    await navigator.clipboard.writeText(displayed);
    toast.success("Copied to clipboard");
  }

  function markSent() {
    if (!partner) return;
    onMarkSent(partner.id);
    toast.success("Marked as sent. Status set to Warm");
    onOpenChange(false);
  }

  const status = partner ? getPartnerStatus(partner.lastContactDays) : "Warm";

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="overflow-y-auto">
        {partner && (
          <>
            <SheetHeader>
              <SheetTitle>{partner.name}</SheetTitle>
              <SheetDescription>{partner.organization}</SheetDescription>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-2.5 py-0.5 text-[11px] text-[var(--muted)]">
                  {partner.type}
                </span>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${statusStyles(status)}`}
                >
                  {status} · {partner.lastContactDays}d ago
                </span>
              </div>
            </SheetHeader>

            <div className="space-y-6 px-4 py-5 sm:px-6">
              <div className="space-y-2 text-sm">
                <p className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                  Contact
                </p>
                <p className="flex items-start gap-2 break-all text-[var(--foreground)]">
                  <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--muted)]" />
                  {partner.email}
                </p>
                <p className="flex items-center gap-2 text-[var(--foreground)]">
                  <Phone className="h-3.5 w-3.5 shrink-0 text-[var(--muted)]" />
                  {partner.phone}
                </p>
              </div>

              <Separator />

              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                  Referral history
                </p>
                <ol className="space-y-4 border-l border-[var(--border)] pl-4">
                  {partner.history.map((event) => (
                    <li key={event.date + event.title} className="relative">
                      <span className="absolute -left-[1.3rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-[var(--primary)]" />
                      <p className="text-xs text-[var(--muted)]">
                        {event.date}
                      </p>
                      <p className="text-sm font-medium">{event.title}</p>
                      <p className="text-sm text-[var(--muted)]">
                        {event.detail}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              <Separator />

              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                  Notes
                </p>
                <p className="rounded-xl bg-[var(--surface-muted)] p-3 text-sm leading-relaxed text-[var(--foreground)]">
                  {partner.notes}
                </p>
              </div>

              <Button
                className="w-full"
                size="lg"
                onClick={generateDraft}
                disabled={loading}
              >
                <Sparkles className="h-4 w-4" />
                {loading ? "Drafting…" : "Draft check-in with AI"}
              </Button>

              {(loading || displayed) && (
                <div className="space-y-3 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                    Draft email
                  </p>
                  {loading && !displayed ? (
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-[90%]" />
                      <Skeleton className="h-4 w-[75%]" />
                      <Skeleton className="h-4 w-[80%]" />
                    </div>
                  ) : (
                    <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-[var(--foreground)]">
                      {displayed}
                      {streaming && (
                        <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-[var(--primary)] align-middle" />
                      )}
                    </pre>
                  )}

                  {displayed && !streaming && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      <Button variant="outline" size="sm" onClick={copyDraft}>
                        <Copy className="h-3.5 w-3.5" />
                        Copy
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={generateDraft}
                        disabled={loading}
                      >
                        <RefreshCw className="h-3.5 w-3.5" />
                        Regenerate
                      </Button>
                      <Button size="sm" variant="accent" onClick={markSent}>
                        <Send className="h-3.5 w-3.5" />
                        Mark as sent
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
