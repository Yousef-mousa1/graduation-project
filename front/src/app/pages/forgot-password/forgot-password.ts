import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AuthLayoutComponent } from '../../layouts/auth-layout/auth-layout';
import { ICONS } from '../../model/icons';

@Component({
  selector: 'app-forgot-password',
  imports: [RouterLink, AuthLayoutComponent],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordComponent {
  protected readonly icons = ICONS;

  /** UI only for now. Will call the auth service once the backend is connected. */
  protected onSubmit(event: Event): void {
    event.preventDefault();
  }
}
