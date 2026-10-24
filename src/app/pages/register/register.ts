import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PasswordInputComponent } from '../../components/password-input/password-input';
import { AuthLayoutComponent } from '../../layouts/auth-layout/auth-layout';
import { ICONS } from '../../model/icons';

@Component({
  selector: 'app-register',
  imports: [RouterLink, AuthLayoutComponent, PasswordInputComponent],
  templateUrl: './register.html',
  styleUrl: './register.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  protected readonly icons = ICONS;

  /** UI only for now. Will call the auth service once the backend is connected. */
  protected onSubmit(event: Event): void {
    event.preventDefault();
  }
}
