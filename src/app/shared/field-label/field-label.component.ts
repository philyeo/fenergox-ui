import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field-label',
  templateUrl: './field-label.component.html',
  styleUrls: ['./field-label.component.css']
})
export class FieldLabelComponent {

  @Input() tooltip: string;
  @Input() label: string;
  @Input() value: any;
  @Input() withBorderBottom = true;
  @Input() type;

  format(text: string) {
    return text ? text : 'Not Set';
  }
  
}
