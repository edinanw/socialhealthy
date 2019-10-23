import { ModulosPage } from './../modulos/modulos.page';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public ano=new Date().getFullYear();
  public acesso;
  public root=ModulosPage;
  
  constructor(private auth: AuthService) {
    this.acesso=auth.getPerfil();
  }

}
