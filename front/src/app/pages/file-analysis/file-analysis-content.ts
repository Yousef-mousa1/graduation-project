import { DetectedIssue, ReportAttribute } from '../../model/analysis';
import { ICONS } from '../../model/icons';

export const RISK_SCORE = 78;

export const REPORT_ATTRIBUTES: readonly ReportAttribute[] = [
  { label: 'MIME type', value: 'application/pdf', tone: 'default' },
  { label: 'AV hits', value: '41 / 68 Engines', tone: 'danger' },
  { label: 'Sandbox exit', value: 'Evasion Attempt', tone: 'warning' },
];

export const DETECTED_ISSUES: readonly DetectedIssue[] = [
  {
    icon: ICONS.target,
    title: 'Embedded Macro redirecting to malicious external IP',
    detail: 'Destination: 194.26.29.112:8443 (Known Command & Control Node)',
    highlight: true,
  },
  {
    icon: ICONS.database,
    title: 'Typosquatted domain simulating corporate billing portal',
    detail: 'Target URL: https://acct-auth.invoicex-corp.com/login?token=x492',
  },
  {
    icon: ICONS.terminal,
    title: 'Hidden payload execution vector',
    detail: 'Base64 obfuscated JavaScript trigger inside PDF catalog stream dictionary.',
  },
];
