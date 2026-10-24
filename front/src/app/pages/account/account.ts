import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PasswordInputComponent } from '../../components/password-input/password-input';
import { ICONS } from '../../model/icons';
import { PASSWORD_RULES, PASSWORD_STRENGTH, PROFILE_FACTS } from './account-content';

@Component({
  selector: 'app-account',
  imports: [RouterLink, PasswordInputComponent],
  templateUrl: './account.html',
  styleUrl: './account.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent {
  protected readonly icons = ICONS;
  protected readonly facts = PROFILE_FACTS;
  protected readonly strength = PASSWORD_STRENGTH;
  protected readonly rules = PASSWORD_RULES;

  /** Visual only for now. Will call the account service once the backend is connected. */
  protected onSubmit(event: Event): void {
    event.preventDefault();
  }
}
