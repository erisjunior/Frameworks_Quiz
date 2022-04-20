import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button.component';
import { QuestionComponent } from './question.component';
import { QuizComponent } from './quiz.component';
import { ResultsComponent } from './results.component';
import { TabsComponent } from './tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    QuizComponent,
    ResultsComponent,
    QuestionComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
