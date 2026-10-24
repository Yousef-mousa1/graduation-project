import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ChatComposerComponent } from '../../components/chat-composer/chat-composer';
import { ICONS } from '../../model/icons';
import { DETECTED_ISSUES, REPORT_ATTRIBUTES, RISK_SCORE } from './file-analysis-content';

const GAUGE_RADIUS = 70;
const GAUGE_CIRCUMFERENCE = 2 * Math.PI * GAUGE_RADIUS;

@Component({
  selector: 'app-file-analysis',
  imports: [ChatComposerComponent],
  templateUrl: './file-analysis.html',
  styleUrl: './file-analysis.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileAnalysisComponent {
  protected readonly icons = ICONS;
  protected readonly score = RISK_SCORE;
  protected readonly attributes = REPORT_ATTRIBUTES;
  protected readonly issues = DETECTED_ISSUES;

  protected readonly gaugeRadius = GAUGE_RADIUS;
  protected readonly gaugeDash = `${(RISK_SCORE / 100) * GAUGE_CIRCUMFERENCE} ${GAUGE_CIRCUMFERENCE}`;
}
