import type { TourFollowupResult } from "@/lib/types";

export const partnerCheckinFallbacks: Record<string, string> = {
  p1: `Hi Rachel,

I wanted to check in on the discharge referral you sent earlier this week. We're holding weekday morning tour times if the family is ready, and I'm happy to coordinate directly with them so it's easy on your end.

Also, Mrs. Ortega continues to settle nicely at Highlands Cottage. Grateful you trusted us with that placement.

Warmly,
Tiffany
Sales & Admissions Director
Applewood Our House`,

  p2: `Hi Marcus,

It's been a little while, and I hoped to reconnect. I still think about the Littleton Lodge tour you joined this summer. Families light up in that garden courtyard the same way you noticed.

If any of your hospice families are exploring a small-home setting, I'd welcome a brief catch-up at your convenience. No pressure at all.

Warmly,
Tiffany
Sales & Admissions Director
Applewood Our House`,

  p3: `Hi Elena,

I wanted to thank you for the two referrals you've sent this quarter, including the Chen family. Your introductions have been thoughtful and well-matched to our small homes.

If there's anything I can make easier on your side (faster availability updates, pricing packets, or second tours), just say the word.

Warmly,
Tiffany
Sales & Admissions Director
Applewood Our House`,

  p4: `Hi David,

Following up after our Medicaid timing conversation last month. If that family is still weighing a private-pay bridge, I'm glad to walk through options or join a short call with them.

It was a pleasure connecting at the CLE lunch this summer. Always happy to be a resource for your clients exploring memory care.

Warmly,
Tiffany
Sales & Admissions Director
Applewood Our House`,

  p5: `Hi Priya,

Thank you for introducing the Torres family. I've reached out about Cherry Creek House and noted their concerns around sundowning so we can speak specifically to evening routines on the tour.

You're always so clear about what your clients need. It makes the handoff feel personal. Let me know how else I can support.

Warmly,
Tiffany
Sales & Admissions Director
Applewood Our House`,

  p6: `Hello,

I wanted to reconnect with the Denver Neurology Associates team. Since we dropped off capacity updates this summer, a few private rooms have opened across our five small homes.

Happy to send a fresh one-pager or answer any questions your families have about secured settings and night staffing.

Warmly,
Tiffany
Sales & Admissions Director
Applewood Our House`,

  p7: `Hi James,

Just checking in after the same-week Aurora Home tour. I know discharge timelines move quickly. If another family needs a fast visit this week, text or email me and I'll confirm availability the same day.

Appreciate how clear you are about what families need before they leave the hospital.

Warmly,
Tiffany
Sales & Admissions Director
Applewood Our House`,

  p8: `Hi Amanda,

Thank you for sending the Whitaker family our way. I've noted they're comparing Highlands Cottage with the larger Lone Tree community, and I'll make sure we speak to the personal feel of our homes, including those garden spaces you often highlight.

Always grateful for your partnership.

Warmly,
Tiffany
Sales & Admissions Director
Applewood Our House`,

  p9: `Hi Carolyn,

It's been a while since our education lunch, and I hoped to say hello. We continue to partner closely with hospice teams across our five small homes, and I'd welcome a brief catch-up if helpful.

No agenda beyond staying connected for the families you support.

Warmly,
Tiffany
Sales & Admissions Director
Applewood Our House`,

  p10: `Hi Brian,

Checking in on the Alvarez family referral. We're glad to keep accommodating video tours for their daughter out of state. Just let me know if another visit would help.

Also happy to share an updated private-room snapshot across all five homes whenever useful.

Warmly,
Tiffany
Sales & Admissions Director
Applewood Our House`,
};

export const defaultPartnerCheckin = `Hi there,

I wanted to reach out with a brief, warm check-in from Applewood Our House. We value our partnership and are always glad to help when a family is exploring a small-home memory care setting in the Denver metro area.

If there's anything I can make easier (tour availability, pricing, or a quick call), I'm here.

Warmly,
Tiffany
Sales & Admissions Director
Applewood Our House`;

export const tourFollowupFallbacks: Record<string, TourFollowupResult> = {
  "tour-1": {
    summary: [
      "Adult daughter Sofia touring for father Luis (78, mid-stage Alzheimer's)",
      "Primary needs: secured setting for wandering risk; support with restless evenings",
      "Concerns: safety at night, private vs shared room cost",
      "Timeline: hopes to move within ~30 days (lease ends mid-November)",
      "Decision factors: smaller/quieter vs Willow Grove; loved the garden courtyard",
    ],
    familyText:
      "Hi Sofia, thank you for touring Highlands Cottage with us yesterday. I loved hearing about Luis and his gardening; that courtyard is waiting for morning coffee with him. I can send private-room pricing today and hold a follow-up visit this week if helpful.",
    tasks: [
      {
        task: "Send private room vs shared pricing sheet",
        owner: "Tiffany",
        due: "Tomorrow",
      },
      {
        task: "Email evening/wandering safety one-pager",
        owner: "Tiffany",
        due: "Tomorrow",
      },
      {
        task: "Offer second tour focused on garden & evenings",
        owner: "Tiffany",
        due: "Within 3 days",
      },
      {
        task: "Confirm mid-November room availability at Highlands",
        owner: "Admissions",
        due: "This week",
      },
    ],
    leadScore: "Hot",
    reason:
      "30-day move timeline, clear safety needs, and strong emotional connection to the garden.",
  },
  "tour-2": {
    summary: [
      "Son Kevin (Seattle) and wife touring for mother Mei; Kevin leaves Friday",
      "Needs: medication support, secured memory care, cultural familiarity with food",
      "Concerns: whether memory care is 'too soon'; Chinese food options",
      "Timeline: hopes to move in 2-3 weeks before Kevin travels again",
      "Decision factors: private suite near kitchen; written pricing and care-level explanation",
    ],
    familyText:
      "Hi Kevin, so glad you and your wife could tour Parker Place. I noted Mei's love of cooking smells and the private suite near the kitchen. I'll send pricing and a simple care-level overview today so you have everything before you fly out Friday.",
    tasks: [
      {
        task: "Send private suite pricing + care level sheet",
        owner: "Tiffany",
        due: "Today",
      },
      {
        task: "Note dietary/cultural food preferences for kitchen lead",
        owner: "Admissions",
        due: "Tomorrow",
      },
      {
        task: "Schedule Zoom follow-up before Kevin's Friday flight",
        owner: "Tiffany",
        due: "Within 2 days",
      },
      {
        task: "Confirm 2-3 week move-in window at Parker Place",
        owner: "Admissions",
        due: "This week",
      },
    ],
    leadScore: "Hot",
    reason:
      "Compressed travel timeline and active comparison. Needs written materials immediately.",
  },
  "tour-3": {
    summary: [
      "Daughter Jenna touring for father Robert (vascular dementia, sundowning)",
      "Needs: personal recognition by staff; support with evening agitation",
      "Concerns: husband skeptical about cost; comparing with larger Lone Tree campus",
      "Timeline: exploring over next ~60 days (not urgent)",
      "Decision factors: small-home feel, piano/living room, ability to bring recliner",
    ],
    familyText:
      "Hi Jenna, thank you for visiting Cherry Creek House. I loved that Robert might bring his recliner and enjoy the living room piano. I'll send our evening routine one-pager and would be glad to host a second tour when your husband can join.",
    tasks: [
      {
        task: "Send evening routine / sundowning one-pager",
        owner: "Tiffany",
        due: "Within 2 days",
      },
      {
        task: "Invite husband to second tour",
        owner: "Tiffany",
        due: "This week",
      },
      {
        task: "Confirm personal furniture (recliner) policy in writing",
        owner: "Admissions",
        due: "This week",
      },
      {
        task: "Add 30-day nurture check-in to CRM",
        owner: "Tiffany",
        due: "In 30 days",
      },
    ],
    leadScore: "Warm",
    reason:
      "Genuine interest but 60-day exploration window and a skeptical co-decision maker.",
  },
};

export const defaultTourFollowup: TourFollowupResult = {
  summary: [
    "Family toured an Applewood small home for a loved one with memory care needs",
    "Needs center on safety, personal attention, and daily routine support",
    "Concerns include timing, cost, and comparison with other communities",
    "Timeline and decision factors should be confirmed in follow-up",
  ],
  familyText:
    "Thank you for touring Applewood Our House with us. It was a pleasure meeting your family and learning what matters most for your loved one. I'm happy to send next-step details and answer any questions whenever you're ready.",
  tasks: [
    {
      task: "Send personalized follow-up email",
      owner: "Tiffany",
      due: "Today",
    },
    {
      task: "Share pricing and availability",
      owner: "Tiffany",
      due: "Tomorrow",
    },
    {
      task: "Schedule optional second visit",
      owner: "Admissions",
      due: "This week",
    },
  ],
  leadScore: "Warm",
  reason:
    "Engaged tour with follow-up needed to clarify timeline and priorities.",
};
