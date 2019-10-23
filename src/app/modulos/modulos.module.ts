import { Modulo3Page } from './../modulo3/modulo3.page';
import { Modulo2Page } from './../modulo2/modulo2.page';
import { Modulo1Page } from './../modulo1/modulo1.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModulosPage } from './modulos.page';

const routes: Routes = [
  {
    path: '', 
    component: ModulosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ], 
  declarations: [ModulosPage, Modulo1Page, Modulo2Page, Modulo3Page],
  entryComponents:[ Modulo1Page, Modulo2Page, Modulo3Page]
  
})
export class ModulosPageModule {}
