import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  eventos = [
    {
      id: 1,
      nombre: 'Evento 1',
      ubicacion: 'Ubicación 1',
      descripcion: 'Descripción del evento 1',
      organizador: 'Nombre Organizador 1',
      estatus: 'Terminado'
    },
    {
      id: 2,
      nombre: 'Evento 2',
      ubicacion: 'Ubicación 2',
      descripcion: 'Descripción del evento 2',
      organizador: 'Nombre Organizador 2',
      estatus: 'Disponible'
    }
  ];
}

