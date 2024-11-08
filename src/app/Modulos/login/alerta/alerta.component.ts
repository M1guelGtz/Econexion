import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent {
  @Input() mensaje: string = '';
  @Output() cerrar = new EventEmitter<void>(); 

 mostrar : boolean = true;
  cerrarAlerta() {
this.mostrar = false;
this.cerrar.emit();
  }
}
