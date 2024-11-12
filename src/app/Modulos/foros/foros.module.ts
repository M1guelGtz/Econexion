import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForosRoutingModule } from './foros-routing.module';
import { ForosComponent } from './foros/foros.component';
import { FormforosComponent } from './formforos/formforos.component';
import { CardforosComponent } from './cardforos/cardforos.component';


@NgModule({
  declarations: [
    ForosComponent,
    FormforosComponent,
    CardforosComponent
  ],
  imports: [
    CommonModule,
    ForosRoutingModule
  ]
})
export class ForosModule { }
