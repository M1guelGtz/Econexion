import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Modulos/login/login/login.component';
import { RegistroComponent } from './Modulos/login/registro/registro.component';
import { NotFoundComponent } from './Modulos/not-found/not-found.component';
import { LayoutComponent } from './Modulos/publicaciones/layout/layout.component';
import { DashboardComponent } from './Modulos/usuarios/dashboard/dashboard.component';

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
    path: 'publicaciones', // Nueva ruta para las publicaciones
    component: LayoutComponent
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
