import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionesRoutingModule } from './publicaciones-routing.module';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { LayoutComponent } from './layout/layout.component';
import { CardPublicacionComponent } from './card-publicacion/card-publicacion.component';
import { LoginModule } from '../login/login.module';
import { FormpublicacionComponent } from './formpublicacion/formpublicacion.component';



@NgModule({
  declarations: [
    PublicacionesComponent,
    LayoutComponent,
    CardPublicacionComponent,
    FormpublicacionComponent
  ],
  imports: [
    CommonModule,
    PublicacionesRoutingModule,
    LoginModule

  ]
})
export class PublicacionesModule { }
