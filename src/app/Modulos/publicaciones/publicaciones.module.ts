import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicacionesRoutingModule } from './publicaciones-routing.module';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { LayoutComponent } from '../shared-module/layout/layout.component';
import { CardPublicacionComponent } from './card-publicacion/card-publicacion.component';
import { LoginModule } from '../login/login.module';
import { FormpublicacionComponent } from './formpublicacion/formpublicacion.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';



@NgModule({
  declarations: [
    PublicacionesComponent,
    CardPublicacionComponent,
    FormpublicacionComponent
  ],
  imports: [
    CommonModule,
    PublicacionesRoutingModule,
    LoginModule,
    SharedModuleModule

  ]
})
export class PublicacionesModule { }
