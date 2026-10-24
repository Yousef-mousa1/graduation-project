import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

import { ICONS } from '../../model/icons';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.html',
  styleUrl: './password-input.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordInputComponent {
  readonly inputId = input.required<string>();
  readonly name = input('password');
  readonly placeholder = input('••••••••••');
  readonly autocomplete = input('current-password');
  /** Optional icon path shown at the start of the field. */
  readonly startIcon = input<string | null>(null);

  protected readonly icons = ICONS;
  protected readonly visible = signal(false);

  protected toggle(): void {
    this.visible.update((value) => !value);
  }
}