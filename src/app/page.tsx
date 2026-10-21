import { KpiCards } from "@/components/overview/KpiCards";
import { PrioritiesList } from "@/components/overview/PrioritiesList";
import { InquiriesChart } from "@/components/overview/InquiriesChart";

export default function OverviewPage() {
  return (
    <div className="space-y-5 sm:space-y-6">
      <div className="animate-fade-in">
        <h1 className="text-xl font-semibold tracking-tight text-[var(--foreground)] sm:text-2xl">
          Overview
        </h1>
        <p className="mt-1 text-sm text-[var(--muted)]">
          Applewood Our House · five small memory care homes across the Denver
          metro
        </p>
      </div>

      <KpiCards />

      <div className="grid gap-5 sm:gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <PrioritiesList />
        </div>
        <div className="lg:col-span-2">
          <InquiriesChart />
        </div>
      </div>
    </div>
  );
}
