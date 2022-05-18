import { Component, Input } from '@angular/core';
import tabsData from './data/tabs';

export interface ITab {
  id: number;
  title: string;
  text: string;
}

@Component({
  selector: 'app-tabs',
  template: `
    <div class="tabs-container">
      <app-button
        *ngFor="let tab of tabs; let i = index"
        [focused]="currentTab === i"
        (click)="currentTab = i">
        {{ tab.title }}
      </app-button>
      <div class="tabs-box">
        {{ tabs[currentTab].text }}
      </div>
    </div>
  `,
  styles: [`
    .tabs-container {
      width: 100%;
      height: 100%;
      margin: 58px 52px;
    }

    .tabs-container app-button {
      margin-right: 22px;
    }

    .tabs-container .tabs-box {
      margin-top: 19px;
      background: #F0F0F0;
      border: 1px solid #AAAAAA;
      border-radius: 10px;
      width: fit-content;
      padding: 26px 23px;

      min-width: 500px;
      max-width: 700px;
      min-height: 130px;

      font-size: 20px;
      line-height: 24px;
    }
  `]
})
export class TabsComponent {
  @Input() tabs: ITab[] = tabsData;
  currentTab = 0;
}
