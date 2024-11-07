import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionesRoutingModule } from './publicaciones-routing.module';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    PublicacionesComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    PublicacionesRoutingModule
  ]
})
export class PublicacionesModule { }
