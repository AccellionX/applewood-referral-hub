"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Building2,
  Handshake,
  LayoutDashboard,
  MessageSquareHeart,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { href: "/", label: "Overview", icon: LayoutDashboard },
  { href: "/partners", label: "Referral Partners", icon: Handshake },
  { href: "/tours", label: "Tour Follow-up", icon: MessageSquareHeart },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between gap-2 px-3 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)] text-white">
              <Building2 className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold tracking-tight text-[var(--foreground)]">
                Applewood Our House
              </p>
              <p className="hidden text-[11px] text-[var(--muted)] sm:block">
                Referral & Admissions Hub
              </p>
            </div>
          </div>
          <Badge
            variant="secondary"
            className="shrink-0 rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-2 py-1 text-[10px] font-medium text-[var(--muted)] sm:px-3 sm:text-[11px]"
          >
            <span className="sm:hidden">Demo</span>
            <span className="hidden sm:inline">Demo · Sample data only</span>
          </Badge>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1440px] gap-0 px-0 lg:gap-8 lg:px-8">
        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-56 shrink-0 border-r border-[var(--border)] bg-white/60 py-6 lg:block">
          <nav className="flex flex-col gap-1 px-3">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-[var(--primary-soft)] text-[var(--primary)]"
                      : "text-[var(--muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--foreground)]"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        <div className="min-w-0 flex-1">
          <nav className="scrollbar-none flex gap-1 overflow-x-auto border-b border-[var(--border)] bg-white px-3 py-2 sm:px-4 lg:hidden">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium",
                    active
                      ? "bg-[var(--primary-soft)] text-[var(--primary)]"
                      : "text-[var(--muted)]"
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <main className="px-3 py-5 sm:px-6 sm:py-6 lg:px-0 lg:py-8 lg:pr-2">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
