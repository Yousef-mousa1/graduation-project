import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ICONS } from '../../model/icons';
import {
  FILTERS,
  HISTORY_STATS,
  KIND_META,
  PAGES,
  SCAN_RECORDS,
  TOTAL_SCANS,
} from './history-content';

@Component({
  selector: 'app-history',
  templateUrl: './history.html',
  styleUrl: './history.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryComponent {
  protected readonly icons = ICONS;
  protected readonly stats = HISTORY_STATS;
  protected readonly filters = FILTERS;
  protected readonly pages = PAGES;
  protected readonly kinds = KIND_META;
  protected readonly records = SCAN_RECORDS;
  protected readonly totalScans = TOTAL_SCANS;
}
