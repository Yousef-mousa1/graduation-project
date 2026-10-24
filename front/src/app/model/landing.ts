export type Tone = 'teal' | 'violet' | 'orange';

export interface TrustItem {
  icon: string;
  title: string;
  note: string;
}

export interface Feature {
  tone: Tone;
  icon: string;
  title: string;
  chip: string;
  text: string;
  panelLabel: string;
  panelValue: string;
  /** Progress in percent. `null` renders the segmented meter instead. */
  bar: number | null;
  footIcon: string;
  foot: string;
}

export interface Step {
  tone: Tone;
  num: string;
  icon: string;
  title: string;
  text: string;
  foot: string;
}
