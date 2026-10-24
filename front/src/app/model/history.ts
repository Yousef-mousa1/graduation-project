export type ScanKind = 'file' | 'email' | 'password' | 'link';
export type ScanStatus = 'safe' | 'suspicious' | 'malicious';
export type StatTone = 'default' | 'safe' | 'warning' | 'danger';

export interface KindMeta {
  label: string;
  icon: string;
}

export interface ScanBadge {
  label: string;
  danger?: boolean;
}

export interface ScanRecord {
  kind: ScanKind;
  item: string;
  badge?: ScanBadge;
  date: string;
  status: ScanStatus;
}

export interface HistoryStat {
  label: string;
  value: string;
  icon: string;
  tone: StatTone;
}
