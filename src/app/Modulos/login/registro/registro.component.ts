import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  constructor(private _title : Title){}
  
  ngOnInit(): void {
    this._title.setTitle('Econexion | Registro')
  }
}
