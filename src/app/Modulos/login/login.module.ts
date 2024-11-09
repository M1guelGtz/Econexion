import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistroFormComponent } from './registro-form/registro-form.component';
import { RegistroComponent } from './registro/registro.component';
import { AlertaComponent } from './alerta/alerta.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    RegistroComponent,
    RegistroFormComponent,
    AlertaComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    AlertaComponent
  ]
})
export class LoginModule { }
