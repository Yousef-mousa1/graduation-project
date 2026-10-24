import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { UserMenuComponent } from '../../components/user-menu/user-menu';
import { ICONS } from '../../model/icons';
import { PLACEHOLDER_USER, RECENT_CHATS } from './app-shell-content';

@Component({
  selector: 'app-shell',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, UserMenuComponent],
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppShellComponent {
  protected readonly icons = ICONS;
  protected readonly user = PLACEHOLDER_USER;
  protected readonly recentChats = RECENT_CHATS;
}
