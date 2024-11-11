import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-eventos',
  templateUrl: './card-eventos.component.html',
  styleUrls: ['./card-eventos.component.css']
})
export class CardEventosComponent {
  @Input() evento: any;
}
