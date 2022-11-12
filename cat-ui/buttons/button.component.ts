import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type IButtonType = 'button' | 'submit' | 'reset';
export type IButtonStyle = 'filled' | 'elevated';

@Component({
  selector: 'cat-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() type: IButtonType = 'button';
  @Input() bsStyle: IButtonStyle = 'filled';
  @Input() disabled: boolean = false;

  constructor() {}
}
