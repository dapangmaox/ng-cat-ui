import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type ButtonType = 'submit' | 'button' | 'reset';

@Component({
  selector: 'cat-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() type: ButtonType = 'button';
  @Input() disabled: boolean;

  constructor() {}
}
