import { Component } from '@angular/core';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent {

  publicaciones = [
    {
      usuario: 'Nombre del usuario',
      fecha: this.getCurrentDate(),
      imagen: 'LOGO.png', 
      descripcion: 'Descripción'
    },
    {
      usuario: 'Nombre del usuario',
      fecha: this.getCurrentDate(),
      imagen: 'LOGO.png', 
      descripcion: 'RECOLECCIÓN DE BASURA'
    }
  ];

  constructor() {}

  getCurrentDate(): string {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Enero es 0
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
