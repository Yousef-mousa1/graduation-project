export type ValueTone = 'default' | 'danger' | 'warning';

export interface ReportAttribute {
  label: string;
  value: string;
  tone: ValueTone;
}

export interface DetectedIssue {
  icon: string;
  title: string;
  detail: string;
  highlight?: boolean;
}
