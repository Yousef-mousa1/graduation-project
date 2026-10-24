import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ChatComposerComponent } from '../../components/chat-composer/chat-composer';
import { ICONS } from '../../model/icons';
import { QUICK_ACTIONS, TELEMETRY_STATS } from './chat-content';

@Component({
  selector: 'app-chat-dashboard',
  imports: [ChatComposerComponent],
  templateUrl: './chat-dashboard.html',
  styleUrl: './chat-dashboard.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatDashboardComponent {
  protected readonly icons = ICONS;
  protected readonly stats = TELEMETRY_STATS;
  protected readonly quickActions = QUICK_ACTIONS;
}
