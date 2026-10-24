import { ChangeDetectionStrategy, Component, ElementRef, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ICONS } from '../../model/icons';
import { UserSummary } from '../../model/user';

@Component({
  selector: 'app-user-menu',
  imports: [RouterLink],
  templateUrl: './user-menu.html',
  styleUrl: './user-menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:click)': 'closeOnOutsideClick($event)',
    '(keydown.escape)': 'close()',
  },
})
export class UserMenuComponent {
  readonly user = input.required<UserSummary>();

  protected readonly icons = ICONS;
  protected readonly open = signal(false);

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  protected toggle(): void {
    this.open.update((isOpen) => !isOpen);
  }

  protected close(): void {
    this.open.set(false);
  }

  protected closeOnOutsideClick(event: MouseEvent): void {
    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.close();
    }
  }
}
