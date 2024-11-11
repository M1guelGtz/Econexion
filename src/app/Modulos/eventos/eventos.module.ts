import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { CardEventosComponent } from './card-eventos/card-eventos.component';
import { EventosComponent } from './eventos/eventos.component';
import { FormEventosComponent } from './form-eventos/form-eventos.component';


@NgModule({
  declarations: [
    CardEventosComponent,
    EventosComponent,
    FormEventosComponent
  ],
  imports: [
    CommonModule,
    EventosRoutingModule
  ]
})
export class EventosModule { }
