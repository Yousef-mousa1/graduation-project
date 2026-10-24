import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ICONS } from '../../model/icons';

@Component({
  selector: 'app-chat-composer',
  templateUrl: './chat-composer.html',
  styleUrl: './chat-composer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComposerComponent {
  readonly placeholder = input('Paste text, a link, or ask anything...');
  readonly note = input('SecureIQ can make mistakes. Verify important results.');

  protected readonly icons = ICONS;

  /** Visual only for now. Will send the message once the backend is connected. */
  protected onSubmit(event: Event): void {
    event.preventDefault();
  }
}
