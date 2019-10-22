import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public appPages = [
    {
      title: 'Início',
      url: '/',
      icon: 'home'
    },
    {
      title: 'Perfil',
      url: '/perfil',
      icon: 'person'
    },
    {
      title: 'Conversas',
      url: '/conversas',
      icon: 'chatboxes'
    },
    {
      title: 'Privacidade e Termos',
      url: '/privacidade',
      icon: 'ios-contacts'
    },
    {
      title: 'Configurações',
      url: '/config',
      icon: 'settings'
    },
    {
      title: 'Sair',
      url: '/logoff',
      icon: 'log-out'
    }
  ];

  ngOnInit(){}

  constructor(public menuCtrl: MenuController) { }
 
  openMenu() {
    this.menuCtrl.open(); 
  }
 
  closeMenu() {
    this.menuCtrl.close();
  }
 
  toggleMenu() {
    this.menuCtrl.toggle();
  }
 
}
