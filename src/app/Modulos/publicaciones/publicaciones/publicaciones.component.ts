import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

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

  constructor(private _title : Title) {}
  ngOnInit(): void {
    this._title.setTitle('Econexion | Publicaciones')
  }

  getCurrentDate(): string {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Enero es 0
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
