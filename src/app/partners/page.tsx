import { Suspense } from "react";
import { PartnersView } from "@/components/partners/PartnersView";
import { Skeleton } from "@/components/ui/skeleton";

function PartnersFallback() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-64" />
      <Skeleton className="h-10 w-80" />
      <Skeleton className="h-72 w-full" />
    </div>
  );
}

export default function PartnersPage() {
  return (
    <Suspense fallback={<PartnersFallback />}>
      <PartnersView />
    </Suspense>
  );
}
