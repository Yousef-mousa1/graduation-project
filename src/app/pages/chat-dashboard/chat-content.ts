import { ICONS } from '../../model/icons';
import { QuickAction, TelemetryStat } from '../../model/chat';

export const TELEMETRY_STATS: readonly TelemetryStat[] = [
  { icon: ICONS.target, label: 'Threat intel', value: 'Synchronized' },
  { icon: ICONS.cpu, label: 'Sandbox', value: 'Ready (Isolated)' },
  { icon: ICONS.database, label: 'Signatures', value: '2.4M Verified' },
];

export const QUICK_ACTIONS: readonly QuickAction[] = [
  { icon: ICONS.mail, title: 'Check Email Breach', hint: 'Query compromised hashes' },
  { icon: ICONS.key, title: 'Check Password', hint: 'Entropy & dictionary audit' },
  { icon: ICONS.link, title: 'Scan a Link', hint: 'Phishing & redirect analysis' },
  { icon: ICONS.fileText, title: 'Analyze a File', hint: 'PDF, Executables, Office docs' },
];
