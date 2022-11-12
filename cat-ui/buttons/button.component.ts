import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type ButtonType = 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text';

@Component({
  selector: 'cat-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() type: ButtonType = 'elevated';
  @Input() disabled: boolean = false;

  constructor() {}
}
