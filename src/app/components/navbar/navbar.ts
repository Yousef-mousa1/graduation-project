import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';


import { ICONS } from '../../model/icons';
import { SectionLink } from '../../model/link';

const SECTION_LINKS: readonly SectionLink[] = [
  { label: 'Features', fragment: 'features' },
  { label: 'How It Works', fragment: 'how-it-works' },
];

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  protected readonly icons = ICONS;
  protected readonly sections = SECTION_LINKS;
}
