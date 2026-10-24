export interface ProfileFact {
  label: string;
  value: string;
  /** Icon path. Facts without an icon show a colored dot instead. */
  icon?: string;
}

export interface PasswordStrength {
  label: string;
  levels: readonly string[];
  /** How many levels are lit, starting from the first. */
  active: number;
}
