import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home/home.page';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { PerfilPage } from './perfil/perfil.page';
import { ModulosPage } from './modulos/modulos.page';
import { Modulo1Page } from './modulo1/modulo1.page';
import { Modulo2Page } from './modulo2/modulo2.page';
import { Modulo3Page } from './modulo3/modulo3.page';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full',canActivate: [AuthGuard]},
  {path: 'home', component: HomePage, canActivate: [AuthGuard]},
  {path: 'perfil', component: PerfilPage, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'logoff', component: LoginComponent},
  {path: 'modulos', component:ModulosPage},
  {path: 'modulo1', component:Modulo1Page },
  {path: 'modulo2', component:Modulo2Page },
  {path: 'modulo3', component:Modulo3Page },
  {path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }