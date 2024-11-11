import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from '../login/registro/registro.component';
import { DashboardComponent } from '../usuarios/dashboard/dashboard.component';
import { FormpublicacionComponent } from './formpublicacion/formpublicacion.component';

const routes: Routes = [
  {
    path: 'eventos',
    component: RegistroComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicacionesRoutingModule { }
