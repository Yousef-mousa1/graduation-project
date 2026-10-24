import { ICONS } from '../../model/icons';
import { Feature, Step, TrustItem } from '../../model/landing';

export const TRUST_ITEMS: readonly TrustItem[] = [
  { icon: ICONS.shield, title: 'Zero-Log', note: 'Ephemeral sessions only' },
  { icon: ICONS.bolt, title: 'Real-Time', note: '<240ms triage latency' },
  { icon: ICONS.lock, title: 'AES-256', note: 'End-to-end telemetry' },
];

export const FEATURES: readonly Feature[] = [
  {
    tone: 'teal',
    icon: ICONS.database,
    title: 'Breach Check',
    chip: '14.8B Vault',
    text: 'Verify credentials against aggregated underground breach vaults using k-Anonymity encryption that never transmits your plaintext passphrases.',
    panelLabel: 'Leak Repository Ingestion',
    panelValue: 'Synced 4m ago',
    bar: 84,
    footIcon: ICONS.lock,
    foot: '0 Plaintext exposure risk',
  },
  {
    tone: 'violet',
    icon: ICONS.fileCheck,
    title: 'Link & File Scan',
    chip: 'Cloud Sandbox',
    text: 'Execute payloads in disposable virtualized environments. Deconstruct typosquatting URLs, weaponized PDFs, macros, and zero-day downloaders.',
    panelLabel: 'Active Threat Sandbox',
    panelValue: 'Isolated Enclave',
    bar: null,
    footIcon: ICONS.activity,
    foot: 'Static & Dynamic Heuristic Engine',
  },
  {
    tone: 'orange',
    icon: ICONS.key,
    title: 'Password Coach',
    chip: 'Entropy High',
    text: 'Synthesize zero-knowledge passphrases with maximum algorithmic entropy, calculated cracking resistance, and tailored memorization patterns.',
    panelLabel: 'Entropy Score (NIST SP 800-63B)',
    panelValue: '112 bits',
    bar: 96,
    footIcon: ICONS.key,
    foot: 'Zero-storage cryptographic generation',
  },
];

export const STEPS: readonly Step[] = [
  {
    tone: 'teal',
    num: '01',
    icon: ICONS.login,
    title: 'Paste or Upload',
    text: 'Forward an SMS excerpt, drop a binary file hash, paste a questionable shortlink, or prompt with an email address directly into chat.',
    foot: 'Multi-format ingestion supported',
  },
  {
    tone: 'violet',
    num: '02',
    icon: ICONS.cpu,
    title: 'AI Analyzes',
    text: 'Our local neural models evaluate syntax anomalies, reputation databases, domain age, and heuristic signature patterns concurrently in milliseconds.',
    foot: 'Zero outbound data retention',
  },
  {
    tone: 'orange',
    num: '03',
    icon: ICONS.checkCircle,
    title: 'Get Your Report',
    text: 'Receive an authoritative verdict accompanied by concrete remediation guidance: safe blocking rules, credentials rotation, and alert notifications.',
    foot: 'Instant actionable mitigation',
  },
];
