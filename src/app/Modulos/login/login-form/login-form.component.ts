import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URL_API_ } from '../../../../environment';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  constructor(private _router: Router, private fb: FormBuilder){
    this.loginFormulario = this.fb.group({
      usuario: [''],
      contra: ['']
    });
  }
  alerta: boolean = false
  ojo:boolean=false
  password:string = "password"
  loginFormulario: FormGroup;
  IniciarSesion(){
    if (this.loginFormulario.valid) {
      console.log(this.loginFormulario.value);
      this._router.navigate(["/dashboard"])
      console.log('Iniciar Sesion');
      console.log(URL_API_.apiUrl)
    }
  }
  eye(){
    this.password == "password" ? this.password="text": this.password="password"
    this.ojo=!this.ojo
  }
}
