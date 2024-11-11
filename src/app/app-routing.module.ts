import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Modulos/login/login/login.component';
import { RegistroComponent } from './Modulos/login/registro/registro.component';
import { NotFoundComponent } from './Modulos/not-found/not-found.component';
import { LayoutComponent } from './Modulos/publicaciones/layout/layout.component';
import { DashboardComponent } from './Modulos/usuarios/dashboard/dashboard.component';
import { PublicacionesComponent } from './Modulos/publicaciones/publicaciones/publicaciones.component';
import path from 'path';
import { FormpublicacionComponent } from './Modulos/publicaciones/formpublicacion/formpublicacion.component';
import { EventosComponent } from './Modulos/eventos/eventos/eventos.component';
import { FormEventosComponent } from './Modulos/eventos/form-eventos/form-eventos.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'publicaciones', 
    component: PublicacionesComponent
  },
  {
  path : 'Formpublicaciones',
    component : FormpublicacionComponent
  },
  {
    path : 'eventos',
      component : EventosComponent
    },
    {
      path :'formeventos',
        component : FormEventosComponent
      },

  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
