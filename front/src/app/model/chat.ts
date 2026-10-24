export interface ChatSummary {
  title: string;
  /** Route of the conversation. Chats without a path are not clickable yet. */
  path?: string;
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
