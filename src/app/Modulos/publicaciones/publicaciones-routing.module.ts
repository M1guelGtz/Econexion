import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from '../login/registro/registro.component';
import { DashboardComponent } from '../usuarios/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'eventos',
    component: RegistroComponent
  },
  {
    path: 'foros',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicacionesRoutingModule { }
