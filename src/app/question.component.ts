import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface IQuestion {
  statement: string;
  answers: string[];
}

@Component({
  selector: 'app-question',
  template: `
    <div class="question-container">
      <div class="question-box">
        <p>Questão {{ questionIndex + 1 }} de {{ questions.length }}</p>
        <h3>{{ questions[questionIndex].statement }}</h3>
        <div>
          <app-button
            *ngFor="let answer of questions[questionIndex].answers; let i = index"
            [focused]="currentAnswer === i"
            (click)="setCurrentAnswer(i)">
            {{ answer }}
          </app-button>
        </div>
      </div>
      <app-button [disabled]="!currentAnswer && currentAnswer !== 0" (click)="handleConfirm()">
        Confirmar resposta
      </app-button>
    </div>
  `,
  styles: [`
    .question-box {
      background: #F0F0F0;
      border: 1px solid #AAAAAA;
      border-radius: 10px;
      padding: 24px 22px 25px 23px;
      width: fit-content;

      margin-bottom: 10px;
    }

    .question-box p {
      font-style: italic;
      font-size: 12px;
      line-height: 15px;
      margin-bottom: 9px;
    }

    .question-box h3 {
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 28px;
    }

    .question-box app-button {
      margin-right: 21px;
    }
  `]
})
export class QuestionComponent {
  @Input() questions: IQuestion[] = [];
  @Input() questionIndex: number = 0;
  @Output() confirm = new EventEmitter<number>();

  currentAnswer: number | null = null;

  setCurrentAnswer = (answerIndex: number) => {
    console.log('setCurrentAnswer', answerIndex);
    this.currentAnswer = answerIndex;
  }

  handleConfirm = () => {
    console.log(this.questions, this.questionIndex)
    if (!this.currentAnswer && this.currentAnswer !== 0) return;

    this.confirm.emit(this.currentAnswer);
    this.currentAnswer = null;
  }
}
