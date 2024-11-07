import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  constructor(private _router: Router){}
  IniciarSesion(){
    this._router.navigate(["/dashboard"])
    console.log('Iniciar Sesion');
  }
}
