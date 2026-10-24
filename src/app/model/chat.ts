export interface ChatSummary {
  title: string;
  active?: boolean;
}

export interface TelemetryStat {
  icon: string;
  label: string;
  value: string;
}

export interface QuickAction {
  icon: string;
  title: string;
  hint: string;
}
