import { PasswordStrength, ProfileFact } from '../../model/account';
import { ICONS } from '../../model/icons';

export const PROFILE_FACTS: readonly ProfileFact[] = [
  { label: 'Assigned group', value: 'SecOps Incident Triage' },
  { label: 'Region', value: 'US-East (N. Virginia)', icon: ICONS.globe },
  { label: 'Last sync', value: '3 minutes ago', icon: ICONS.clock },
];

export const PASSWORD_STRENGTH: PasswordStrength = {
  label: 'Strong (98 bits)',
  levels: ['Weak', 'Medium', 'Strong'],
  active: 3,
};

export const PASSWORD_RULES: readonly string[] = [
  'At least 12 characters',
  'Alphanumeric & Symbols',
  'No common dictionary word',
  'Distinct from last 5 keys',
];
