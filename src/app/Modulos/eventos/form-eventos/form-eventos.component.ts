import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-eventos',
  templateUrl: './form-eventos.component.html',
  styleUrl: './form-eventos.component.css'
})
export class FormEventosComponent {
  constructor(private router: Router) {}

  crearEvento() {
    // Lógica para guardar el evento
    console.log('Evento creado');
    this.router.navigate(['/eventos']); // Redirigir a la ruta /eventos
  }

  cancelar() {
    this.router.navigate(['/eventos']); // Redirigir a la ruta /eventos
  }
}

