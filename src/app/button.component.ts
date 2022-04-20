import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      [disabled]="disabled"
      [class]="focused ? 'button--focused' : ''"
      (click)="click.emit()">
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    button {
      background: #CCCCCC;
      border: 1px solid #777777;
      border-radius: 3px;

      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;

      min-width: 112px;

      padding: 5px 20px;

      cursor: pointer;
    }

    .button--focused {
      font-weight: 700;
      background: #AAAAAA;
    }
  `]
})
export class ButtonComponent {
  @Input() focused!: boolean;
  @Input() disabled!: boolean;
  @Output() click = new EventEmitter<number>();
}
