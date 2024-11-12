import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-cardforos',
  templateUrl: './cardforos.component.html',
  styleUrl: './cardforos.component.css'
})
export class CardforosComponent {
  @Input() foros: any;
}
