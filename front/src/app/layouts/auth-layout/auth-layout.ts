import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ICONS } from '../../model/icons';

const PANEL_POINTS: readonly string[] = [
  'Instant breach checks with global heuristic feeds',
  'AI-powered automated threat analysis and triaging',
  'Your passwords and keys are never stored raw',
];

@Component({
  selector: 'app-auth-layout',
  imports: [RouterLink],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent {
  /** Optional: pages that need a custom header project their own. */
  readonly heading = input('');
  readonly subheading = input('');

  protected readonly icons = ICONS;
  protected readonly points = PANEL_POINTS;
  protected readonly year = new Date().getFullYear();
}
