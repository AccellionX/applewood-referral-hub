import { CalendarCheck2, DoorOpen, Handshake, Inbox } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { kpi } from "@/data/kpi";

const items = [
  {
    label: "New inquiries (30d)",
    value: String(kpi.newInquiries30d),
    hint: "Across all five homes",
    icon: Inbox,
  },
  {
    label: "Tours scheduled",
    value: String(kpi.toursScheduled),
    hint: `${kpi.inquiryToTourRate}% inquiry-to-tour`,
    icon: CalendarCheck2,
  },
  {
    label: "Partners needing attention",
    value: String(kpi.partnersNeedingAttention),
    hint: "Cooling or Cold status",
    icon: Handshake,
  },
  {
    label: "Open rooms",
    value: String(kpi.openRooms),
    hint: `Across ${kpi.totalHomes} homes`,
    icon: DoorOpen,
  },
];

export function KpiCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <Card
            key={item.label}
            className={`animate-fade-in overflow-hidden ${
              i === 0
                ? "animate-delay-1"
                : i === 1
                  ? "animate-delay-2"
                  : i === 2
                    ? "animate-delay-3"
                    : "animate-delay-4"
            }`}
          >
            <CardContent className="flex items-start justify-between gap-3 p-4 sm:p-5">
              <div className="min-w-0">
                <p className="text-sm text-[var(--muted)]">{item.label}</p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-[var(--muted)]">{item.hint}</p>
              </div>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--primary-soft)] text-[var(--primary)] sm:h-10 sm:w-10">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
