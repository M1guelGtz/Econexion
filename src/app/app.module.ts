import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './Modulos/login/login.module';
import { NotFoundComponent } from './Modulos/not-found/not-found.component';
import { UsuariosRoutingModule } from './Modulos/usuarios/usuarios-routing.module';
import { UsuariosModule } from './Modulos/usuarios/usuarios.module';
import { PublicacionesModule } from './Modulos/publicaciones/publicaciones.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    UsuariosModule,
    UsuariosRoutingModule,
    ReactiveFormsModule,
    PublicacionesModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
