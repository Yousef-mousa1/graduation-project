import { HistoryStat, KindMeta, ScanKind, ScanRecord } from '../../model/history';
import { ICONS } from '../../model/icons';

export const TOTAL_SCANS = 34;

export const HISTORY_STATS: readonly HistoryStat[] = [
  { label: 'Total scanned', value: String(TOTAL_SCANS), icon: ICONS.scanSearch, tone: 'default' },
  { label: 'Confirmed safe', value: '24', icon: ICONS.shieldCheck, tone: 'safe' },
  { label: 'Suspicious items', value: '6', icon: ICONS.warning, tone: 'warning' },
  { label: 'Malicious blocked', value: '4', icon: ICONS.fileWarning, tone: 'danger' },
];

export const FILTERS: readonly string[] = ['All', 'Emails', 'Passwords', 'Links', 'Files'];

export const PAGES: readonly number[] = [1, 2, 3, 4];

export const KIND_META: Record<ScanKind, KindMeta> = {
  file: { label: 'File', icon: ICONS.fileText },
  email: { label: 'Email', icon: ICONS.mail },
  password: { label: 'Password', icon: ICONS.key },
  link: { label: 'Link', icon: ICONS.link },
};

export const SCAN_RECORDS: readonly ScanRecord[] = [
  {
    kind: 'file',
    item: 'invoice_urgent.pdf',
    badge: { label: 'PDF' },
    date: 'Oct 24, 2026 • 14:32',
    status: 'suspicious',
  },
  {
    kind: 'email',
    item: 'Suspicious Bank Alert - Security Verification',
    badge: { label: 'Phish', danger: true },
    date: 'Oct 24, 2026 • 11:15',
    status: 'malicious',
  },
  {
    kind: 'password',
    item: 'Master corporate credentials check',
    date: 'Oct 23, 2026 • 19:40',
    status: 'safe',
  },
  {
    kind: 'link',
    item: 'https://secure-login-chase-update81.com',
    date: 'Oct 23, 2026 • 16:05',
    status: 'malicious',
  },
  {
    kind: 'file',
    item: 'Q3_Financial_Summary.xlsx',
    badge: { label: 'XLSX' },
    date: 'Oct 22, 2026 • 10:20',
    status: 'safe',
  },
  {
    kind: 'email',
    item: 'alex.mercer@corp-defense.io breach inquiry',
    date: 'Oct 21, 2026 • 18:50',
    status: 'safe',
  },
  {
    kind: 'link',
    item: 'https://cdn-dl-updater.xyz/patch.bin',
    date: 'Oct 20, 2026 • 09:12',
    status: 'suspicious',
  },
  {
    kind: 'password',
    item: 'Vault entropy & leak audit',
    date: 'Oct 19, 2026 • 15:30',
    status: 'safe',
  },
];
