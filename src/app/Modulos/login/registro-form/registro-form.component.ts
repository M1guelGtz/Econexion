import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrl: './registro-form.component.css'
})
export class RegistroFormComponent {
  constructor (private _router: Router){}

  registrarUsuario(){
    this._router.navigate(["/login"])
    console.log('Usuario registrado');
  }
}
