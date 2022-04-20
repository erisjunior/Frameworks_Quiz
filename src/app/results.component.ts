import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IQuestion } from './question.component';

@Component({
  selector: 'app-results',
  template: `
    <div>
      <div class="results-box">
        <div *ngFor="let question of questions; let i = index">
          <h3>Questão {{ i + 1 }}</h3>
          <p>{{ question.statement }}: {{ question.answers[answersIndexes[i]] }}</p>
        </div>
      </div>
      <app-button (click)="reset.emit()">
        Reinicia
      </app-button>
    </div>
  `,
  styles: [`
    .results-box {
      background: #F0F0F0;
      border: 1px solid #AAAAAA;
      border-radius: 10px;
      padding: 22px 23px 19px;
      width: fit-content;

      margin-bottom: 10px;
    }

    .results-box div {
      margin-bottom: 12px;
    }

    .results-box p, h3 {
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
    }

    .results-box h3 {
      font-weight: bold;
    }
  `]
})
export class ResultsComponent {
  @Input() questions: IQuestion[] = [];
  @Input() answersIndexes: number[] = [];
  @Output() reset = new EventEmitter<number>()
}
