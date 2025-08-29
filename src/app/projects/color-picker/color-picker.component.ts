import { Component } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  standalone: false,
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.scss'
})
export class ColorPickerComponent {
  color: string = '#FFFFFF';

  handleColorChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.color = input.value;
  }
}
