import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { priorities } from "@/data/priorities";
import { priorityStyles } from "@/lib/utils";

export function PrioritiesList() {
  return (
    <Card className="animate-fade-in animate-delay-2">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-[var(--accent)]" />
          <CardTitle>Today&apos;s priorities</CardTitle>
        </div>
        <p className="text-sm text-[var(--muted)]">
          AI-prioritized actions for Sales & Admissions
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        {priorities.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-3 rounded-2xl border border-[var(--border)] bg-[var(--background)]/60 p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <span
                className={`w-fit rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${priorityStyles(item.priority)}`}
              >
                {item.priority}
              </span>
              <p className="text-sm font-medium leading-snug text-[var(--foreground)]">
                {item.title}
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full shrink-0 sm:w-auto"
            >
              <Link href={item.href}>
                Open
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
