"use client";

import { useMemo, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { partners as initialPartners } from "@/data/partners";
import type { Partner, PartnerStatus, PartnerType } from "@/lib/types";
import { cn, getPartnerStatus, statusStyles } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { PartnerDrawer } from "./PartnerDrawer";

const TYPES: Array<PartnerType | "All"> = [
  "All",
  "Hospital discharge planner",
  "Hospice",
  "Placement agent",
  "Elder law attorney",
  "Geriatric care manager",
  "Neurologist office",
  "Social worker",
  "Senior living advisor",
];

const STATUSES: Array<PartnerStatus | "All"> = [
  "All",
  "Warm",
  "Cooling",
  "Cold",
];

export function PartnersView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [rows, setRows] = useState<Partner[]>(initialPartners);
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<PartnerType | "All">("All");
  const [statusFilter, setStatusFilter] = useState<PartnerStatus | "All">(
    "All"
  );
  const [selected, setSelected] = useState<Partner | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const partnerId = searchParams.get("partner");
    if (!partnerId) return;
    const match = rows.find((p) => p.id === partnerId);
    if (match) {
      setSelected(match);
      setOpen(true);
    }
  }, [searchParams, rows]);

  const filtered = useMemo(() => {
    return rows.filter((p) => {
      const status = getPartnerStatus(p.lastContactDays);
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.organization.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q);
      const matchesType = typeFilter === "All" || p.type === typeFilter;
      const matchesStatus = statusFilter === "All" || status === statusFilter;
      return matchesQuery && matchesType && matchesStatus;
    });
  }, [rows, query, typeFilter, statusFilter]);

  function openPartner(partner: Partner) {
    setSelected(partner);
    setOpen(true);
    router.replace(`/partners?partner=${partner.id}`, { scroll: false });
  }

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      router.replace("/partners", { scroll: false });
    }
  }

  function markSent(partnerId: string) {
    setRows((prev) =>
      prev.map((p) => (p.id === partnerId ? { ...p, lastContactDays: 0 } : p))
    );
    setSelected((prev) =>
      prev && prev.id === partnerId ? { ...prev, lastContactDays: 0 } : prev
    );
  }

  return (
    <div className="space-y-5 sm:space-y-6">
      <div className="animate-fade-in">
        <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Referral Partners
        </h1>
        <p className="mt-1 text-sm text-[var(--muted)]">
          Stay warm with the sources who send families your way
        </p>
      </div>

      <div className="animate-fade-in animate-delay-1 space-y-3">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]" />
          <Input
            className="pl-9"
            placeholder="Search name or organization…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="scrollbar-none -mx-3 flex gap-2 overflow-x-auto px-3 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          {TYPES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTypeFilter(t)}
              className={cn(
                "shrink-0 rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                typeFilter === t
                  ? "border-[var(--primary)] bg-[var(--primary-soft)] text-[var(--primary)]"
                  : "border-[var(--border)] bg-white text-[var(--muted)] hover:bg-[var(--surface-muted)]"
              )}
            >
              {t === "All" ? "All types" : t}
            </button>
          ))}
        </div>

        <div className="scrollbar-none -mx-3 flex gap-2 overflow-x-auto px-3 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          {STATUSES.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setStatusFilter(s)}
              className={cn(
                "shrink-0 rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                statusFilter === s
                  ? "border-[var(--primary)] bg-[var(--primary-soft)] text-[var(--primary)]"
                  : "border-[var(--border)] bg-white text-[var(--muted)] hover:bg-[var(--surface-muted)]"
              )}
            >
              {s === "All" ? "All statuses" : s}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile card list */}
      <div className="animate-fade-in animate-delay-2 space-y-3 md:hidden">
        {filtered.length === 0 ? (
          <Card className="p-8 text-center text-sm text-[var(--muted)]">
            No partners match your filters.
          </Card>
        ) : (
          filtered.map((p) => {
            const status = getPartnerStatus(p.lastContactDays);
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => openPartner(p)}
                className="w-full rounded-2xl border border-[var(--border)] bg-white p-4 text-left shadow-[0_1px_2px_rgba(28,45,38,0.04)] transition-colors active:bg-[var(--primary-soft)]/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-medium text-[var(--foreground)]">
                      {p.name}
                    </p>
                    <p className="mt-0.5 text-xs leading-snug text-[var(--muted)]">
                      {p.organization}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${statusStyles(status)}`}
                  >
                    {status}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[var(--muted)]">
                  <span>{p.type}</span>
                  <span>{p.referrals90d} referrals (90d)</span>
                  <span>
                    {p.lastContactDays === 0
                      ? "Today"
                      : `${p.lastContactDays}d ago`}
                  </span>
                </div>
              </button>
            );
          })
        )}
      </div>

      {/* Desktop table */}
      <Card className="animate-fade-in animate-delay-2 hidden overflow-hidden md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="border-b border-[var(--border)] bg-[var(--surface-muted)]/50 text-xs uppercase tracking-wide text-[var(--muted)]">
              <tr>
                <th className="px-4 py-3 font-medium">Name + organization</th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium">Referrals (90d)</th>
                <th className="px-4 py-3 font-medium">Last contact</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-12 text-center text-[var(--muted)]"
                  >
                    No partners match your filters.
                  </td>
                </tr>
              ) : (
                filtered.map((p) => {
                  const status = getPartnerStatus(p.lastContactDays);
                  return (
                    <tr
                      key={p.id}
                      onClick={() => openPartner(p)}
                      className="cursor-pointer border-b border-[var(--border)] last:border-0 transition-colors hover:bg-[var(--primary-soft)]/40"
                    >
                      <td className="px-4 py-3.5">
                        <p className="font-medium text-[var(--foreground)]">
                          {p.name}
                        </p>
                        <p className="text-xs text-[var(--muted)]">
                          {p.organization}
                        </p>
                      </td>
                      <td className="px-4 py-3.5 text-[var(--muted)]">
                        {p.type}
                      </td>
                      <td className="px-4 py-3.5 font-medium">
                        {p.referrals90d}
                      </td>
                      <td className="px-4 py-3.5 text-[var(--muted)]">
                        {p.lastContactDays === 0
                          ? "Today"
                          : `${p.lastContactDays} days ago`}
                      </td>
                      <td className="px-4 py-3.5">
                        <span
                          className={`inline-flex rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${statusStyles(status)}`}
                        >
                          {status}
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </Card>

      <PartnerDrawer
        partner={selected}
        open={open}
        onOpenChange={handleOpenChange}
        onMarkSent={markSent}
      />
    </div>
  );
}
