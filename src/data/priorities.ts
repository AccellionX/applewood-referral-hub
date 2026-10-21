import type { PriorityItem } from "@/lib/types";

export const priorities: PriorityItem[] = [
  {
    id: "pr1",
    title:
      "Hospital discharge referral from UCHealth planner, tour not scheduled (2 days)",
    priority: "High",
    href: "/partners?partner=p1",
    partnerId: "p1",
  },
  {
    id: "pr2",
    title:
      "Martinez family toured Highlands Cottage yesterday, follow-up not sent",
    priority: "Action needed",
    href: "/tours",
  },
  {
    id: "pr3",
    title: "No contact with Sunrise Hospice in 41 days",
    priority: "Suggested",
    href: "/partners?partner=p2",
    partnerId: "p2",
  },
  {
    id: "pr4",
    title: "Placement agent sent 2 referrals this quarter, send thank-you",
    priority: "Suggested",
    href: "/partners?partner=p3",
    partnerId: "p3",
  },
];
