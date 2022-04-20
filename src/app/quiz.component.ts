import { Component } from '@angular/core';
import questionsData from './data/questions';

@Component({
  selector: 'app-quiz',
  template: `
    <div class="quiz-container">
      <h1>Quiz</h1>
      <app-results
        *ngIf="showResults; else QuestionBlock"
        [questions]="questions"
        [answersIndexes]="answers"
        (reset)="handleReset()"
      ></app-results>
      <ng-template #QuestionBlock>
        <app-question
          [questions]="questions"
          [questionIndex]="currentQuestion"
          (confirm)="handleQuestionConfirm($event)"
        ></app-question>
      </ng-template>
    </div>
  `,
  styles: [`
    .quiz-container {
      width: 100%;
      height: 100%;
      margin: 40px 78px;
    }

    .quiz-container > h1 {
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 39px;
      margin-bottom: 10px;
    }
  `]
})
export class QuizComponent {
  questions = questionsData;

  currentQuestion = 0;
  showResults = false;
  answers: number[] = [];

  handleQuestionConfirm = (answerIndex: number) => {
    this.answers[this.currentQuestion] = answerIndex;
    this.currentQuestion++;

    if (this.currentQuestion === this.questions.length) {
      this.showResults = true;
    }
  }

  handleReset = () => {
    this.currentQuestion = 0;
    this.showResults = false;
    this.answers = [];
  }
}
