import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionesRoutingModule } from './publicaciones-routing.module';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { LayoutComponent } from './layout/layout.component';
import { CardPublicacionComponent } from './card-publicacion/card-publicacion.component';


@NgModule({
  declarations: [
    PublicacionesComponent,
    LayoutComponent,
    CardPublicacionComponent
  ],
  imports: [
    CommonModule,
    PublicacionesRoutingModule
  ]
})
export class PublicacionesModule { }
