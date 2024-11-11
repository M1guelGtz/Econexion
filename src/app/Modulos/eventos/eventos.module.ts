import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { CardEventosComponent } from './card-eventos/card-eventos.component';
import { EventosComponent } from './eventos/eventos.component';
import { FormEventosComponent } from './form-eventos/form-eventos.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [
    CardEventosComponent,
    EventosComponent,
    FormEventosComponent
  ],
  imports: [
    CommonModule,
    EventosRoutingModule,
    SharedModuleModule
  ]
})
export class EventosModule { }
