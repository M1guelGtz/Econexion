import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginFormComponent } from './login-form/login-form.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroFormComponent } from './registro-form/registro-form.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    RegistroComponent,
    RegistroFormComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
