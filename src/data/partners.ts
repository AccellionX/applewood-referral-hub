import type { Partner } from "@/lib/types";

export const partners: Partner[] = [
  {
    id: "p1",
    name: "Rachel Nguyen",
    organization: "UCHealth University of Colorado Hospital",
    type: "Hospital discharge planner",
    email: "r.nguyen@uchealth-demo.example",
    phone: "(720) 555-0142",
    referrals90d: 3,
    lastContactDays: 2,
    notes:
      "Sent a discharge referral for a gentleman with mid-stage Alzheimer's two days ago. Family still deciding; tour not yet scheduled. Prefers weekday morning calls.",
    history: [
      {
        date: "Oct 19, 2026",
        title: "New discharge referral",
        detail:
          "Referred family evaluating memory care after hospital stay; wandering risk noted.",
      },
      {
        date: "Sep 8, 2026",
        title: "Successful placement",
        detail:
          "Helped place Mrs. Ortega at Highlands Cottage after a short-stay bridge.",
      },
      {
        date: "Jul 22, 2026",
        title: "Intro call",
        detail:
          "Met Tiffany at a Denver discharge planners lunch; exchanged cards.",
      },
    ],
    detailForAi:
      "Rachel sent a hospital discharge referral two days ago for a family that has not scheduled a tour yet. She previously helped place Mrs. Ortega at Highlands Cottage in September.",
  },
  {
    id: "p2",
    name: "Marcus Webb",
    organization: "Sunrise Hospice of Denver",
    type: "Hospice",
    email: "m.webb@sunrisehospice-demo.example",
    phone: "(303) 555-0198",
    referrals90d: 1,
    lastContactDays: 41,
    notes:
      "Quiet period since late summer. Last referral was a respite inquiry that did not convert. Appreciates brief, non-salesy check-ins.",
    history: [
      {
        date: "Sep 10, 2026",
        title: "Respite inquiry",
        detail:
          "Family needed short-term support; chose in-home hospice instead.",
      },
      {
        date: "Jun 3, 2026",
        title: "Tour shadow",
        detail:
          "Joined a family tour at Littleton Lodge; complimented the garden courtyard.",
      },
      {
        date: "Apr 15, 2026",
        title: "Coffee catch-up",
        detail:
          "Discussed evening agitation patterns families often ask about.",
      },
    ],
    detailForAi:
      "Marcus from Sunrise Hospice has not been contacted in 41 days. He last joined a family tour at Littleton Lodge in June and appreciated the garden courtyard.",
  },
  {
    id: "p3",
    name: "Elena Vargas",
    organization: "Front Range Senior Advisors",
    type: "Placement agent",
    email: "elena@frontrangesenior-demo.example",
    phone: "(720) 555-0167",
    referrals90d: 2,
    lastContactDays: 18,
    notes:
      "Sent two strong referrals this quarter. Both families valued small-home settings. A thank-you note would go a long way.",
    history: [
      {
        date: "Oct 2, 2026",
        title: "Referral, Chen family",
        detail:
          "Adult daughter touring for father; interested in Parker Place private room.",
      },
      {
        date: "Aug 14, 2026",
        title: "Referral, Brooks family",
        detail: "Placed at Aurora Home after comparing three communities.",
      },
      {
        date: "May 28, 2026",
        title: "Partnership review",
        detail: "Aligned on response-time expectations under 24 hours.",
      },
    ],
    detailForAi:
      "Elena sent two referrals this quarter, including the Chen family in early October who were interested in Parker Place. A warm thank-you for her partnership is overdue.",
  },
  {
    id: "p4",
    name: "David Klein, Esq.",
    organization: "Klein & Associates Elder Law",
    type: "Elder law attorney",
    email: "dklein@kleinelderlaw-demo.example",
    phone: "(303) 555-0111",
    referrals90d: 1,
    lastContactDays: 27,
    notes:
      "Cooling relationship. Last spoke about Medicaid timing questions for a prospective family. Likes concise emails with clear next steps.",
    history: [
      {
        date: "Sep 24, 2026",
        title: "Medicaid timing consult",
        detail: "Advised a family exploring private-pay bridge into Applewood.",
      },
      {
        date: "Jul 1, 2026",
        title: "CLE lunch",
        detail: "Tiffany presented on small-home memory care models.",
      },
      {
        date: "Mar 12, 2026",
        title: "Referral, Patel family",
        detail: "Daughter needed guidance on POA before touring Highlands.",
      },
    ],
    detailForAi:
      "David Klein last contacted us 27 days ago about Medicaid timing for a prospective family. He attended Tiffany's CLE lunch in July on small-home memory care.",
  },
  {
    id: "p5",
    name: "Priya Shah",
    organization: "Mile High Care Management",
    type: "Geriatric care manager",
    email: "priya@milehighcare-demo.example",
    phone: "(720) 555-0133",
    referrals90d: 4,
    lastContactDays: 9,
    notes:
      "Most active GCM partner. Focuses on families needing secured settings and structured evenings. Warm relationship.",
    history: [
      {
        date: "Oct 12, 2026",
        title: "Referral, Torres family",
        detail:
          "Son evaluating Cherry Creek House; concerned about sundowning.",
      },
      {
        date: "Sep 18, 2026",
        title: "Case conference",
        detail: "Discussed transition checklist for hospital-to-home moves.",
      },
      {
        date: "Aug 5, 2026",
        title: "Successful move-in",
        detail:
          "Client settled at Littleton Lodge; family sent a thank-you note.",
      },
    ],
    detailForAi:
      "Priya is a warm partner who referred the Torres family on Oct 12 for Cherry Creek House. She values structured evenings and secured settings for her clients.",
  },
  {
    id: "p6",
    name: "Dr. Helen Okonkwo (office)",
    organization: "Denver Neurology Associates",
    type: "Neurologist office",
    email: "referrals@denverneuro-demo.example",
    phone: "(303) 555-0175",
    referrals90d: 2,
    lastContactDays: 35,
    notes:
      "Practice manager prefers email. Families often arrive anxious about diagnosis progression. Cooling. Reconnect with something specific.",
    history: [
      {
        date: "Sep 16, 2026",
        title: "Referral packet",
        detail: "Sent two families exploring memory care after new diagnoses.",
      },
      {
        date: "Jun 20, 2026",
        title: "Office visit",
        detail: "Dropped off updated home capacity one-pagers.",
      },
      {
        date: "Feb 8, 2026",
        title: "Lunch & learn",
        detail: "Staff asked about wandering protocols and night staffing.",
      },
    ],
    detailForAi:
      "Denver Neurology Associates last sent referral packets in mid-September. We visited their office in June with capacity one-pagers; they previously asked about wandering protocols.",
  },
  {
    id: "p7",
    name: "James Ortiz",
    organization: "Swedish Medical Center, Case Management",
    type: "Social worker",
    email: "j.ortiz@swedish-demo.example",
    phone: "(303) 555-0188",
    referrals90d: 2,
    lastContactDays: 14,
    notes:
      "Responsive and practical. Often needs same-week tour availability for discharge timelines.",
    history: [
      {
        date: "Oct 7, 2026",
        title: "Urgent tour request",
        detail:
          "Family needed a same-week visit at Aurora Home before discharge.",
      },
      {
        date: "Aug 29, 2026",
        title: "Placement update",
        detail: "Confirmed a move-in at Parker Place after weekend tour.",
      },
      {
        date: "May 6, 2026",
        title: "Intro meeting",
        detail:
          "Met on the case management floor; reviewed Applewood's five-home model.",
      },
    ],
    detailForAi:
      "James recently needed a same-week tour at Aurora Home for a discharge timeline. He appreciates quick availability confirmations.",
  },
  {
    id: "p8",
    name: "Amanda Reeves",
    organization: "Nest Senior Living Advisors",
    type: "Senior living advisor",
    email: "amanda@nestadvisors-demo.example",
    phone: "(720) 555-0120",
    referrals90d: 3,
    lastContactDays: 6,
    notes:
      "Strong advocate for boutique homes over large campuses. Warm and engaged.",
    history: [
      {
        date: "Oct 15, 2026",
        title: "Referral, Whitaker family",
        detail:
          "Comparing Highlands Cottage with one larger community in Lone Tree.",
      },
      {
        date: "Sep 1, 2026",
        title: "Advisor roundtable",
        detail: "Shared feedback that families love Applewood's garden spaces.",
      },
      {
        date: "Jul 19, 2026",
        title: "Successful placement",
        detail: "Client moved into Cherry Creek House private suite.",
      },
    ],
    detailForAi:
      "Amanda referred the Whitaker family mid-October; they are comparing Highlands Cottage with a larger Lone Tree community. She often highlights our garden spaces to families.",
  },
  {
    id: "p9",
    name: "Carolyn Miles",
    organization: "ComfortCare Hospice",
    type: "Hospice",
    email: "c.miles@comfortcare-demo.example",
    phone: "(303) 555-0149",
    referrals90d: 0,
    lastContactDays: 48,
    notes:
      "Cold relationship. Last contact was a general education lunch. No recent referrals. Gentle re-introduction needed.",
    history: [
      {
        date: "Sep 3, 2026",
        title: "Education lunch",
        detail: "Discussed how small homes support hospice collaboration.",
      },
      {
        date: "May 21, 2026",
        title: "Inquiry only",
        detail: "Family asked about respite; stayed with in-home services.",
      },
      {
        date: "Jan 14, 2026",
        title: "First introduction",
        detail: "Tiffany introduced Applewood's five Denver-metro homes.",
      },
    ],
    detailForAi:
      "Carolyn from ComfortCare Hospice has not been contacted in 48 days. We last met at an education lunch in early September about how small homes support hospice collaboration.",
  },
  {
    id: "p10",
    name: "Brian Holt",
    organization: "Pathfinders Placement Group",
    type: "Placement agent",
    email: "brian@pathfinderspg-demo.example",
    phone: "(720) 555-0155",
    referrals90d: 1,
    lastContactDays: 19,
    notes:
      "Warm relationship. Sent one referral last month for a couple considering Aurora Home. Prefers text for quick updates.",
    history: [
      {
        date: "Sep 29, 2026",
        title: "Referral, Alvarez family",
        detail:
          "Couple touring Aurora; daughter lives out of state and joins by video.",
      },
      {
        date: "Jul 11, 2026",
        title: "Market check-in",
        detail: "Asked about private-room waitlists across all five homes.",
      },
      {
        date: "Apr 2, 2026",
        title: "Partnership kickoff",
        detail: "Agreed on shared CRM notes for warm handoffs.",
      },
    ],
    detailForAi:
      "Brian referred the Alvarez family in late September for Aurora Home; the daughter often joins tours by video from out of state. Last contact was 19 days ago.",
  },
];

export function getPartnerById(id: string): Partner | undefined {
  return partners.find((p) => p.id === id);
}
