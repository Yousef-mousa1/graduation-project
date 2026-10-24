import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ICONS } from '../../model/icons';
import { FEATURES, STEPS, TRUST_ITEMS } from './landing-content';

@Component({
  selector: 'app-secureiq-landing',
  imports: [RouterLink],
  templateUrl: './secureiq-landing.html',
  styleUrl: './secureiq-landing.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecureiqLandingComponent {
  protected readonly icons = ICONS;
  protected readonly trust = TRUST_ITEMS;
  protected readonly features = FEATURES;
  protected readonly steps = STEPS;
}
