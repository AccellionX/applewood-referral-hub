export type PartnerType =
  | "Hospital discharge planner"
  | "Hospice"
  | "Placement agent"
  | "Elder law attorney"
  | "Geriatric care manager"
  | "Neurologist office"
  | "Social worker"
  | "Senior living advisor";

export type PartnerStatus = "Warm" | "Cooling" | "Cold";

export type PriorityLevel = "High" | "Action needed" | "Suggested";

export type LeadScore = "Hot" | "Warm" | "Nurture";

export interface ReferralEvent {
  date: string;
  title: string;
  detail: string;
}

export interface Partner {
  id: string;
  name: string;
  organization: string;
  type: PartnerType;
  email: string;
  phone: string;
  referrals90d: number;
  lastContactDays: number;
  notes: string;
  history: ReferralEvent[];
  detailForAi: string;
}

export interface PriorityItem {
  id: string;
  title: string;
  priority: PriorityLevel;
  href: string;
  partnerId?: string;
}

export interface TourNote {
  id: string;
  label: string;
  notes: string;
}

export interface CrmTask {
  task: string;
  owner: string;
  due: string;
}

export interface TourFollowupResult {
  summary: string[];
  familyText: string;
  tasks: CrmTask[];
  leadScore: LeadScore;
  reason: string;
}

export type DraftMode = "partner_checkin" | "tour_followup";

export interface DraftRequest {
  mode: DraftMode;
  context: {
    partnerId?: string;
    partnerName?: string;
    organization?: string;
    type?: string;
    lastContactDays?: number;
    detailForAi?: string;
    notes?: string;
    tourNoteId?: string;
  };
}
