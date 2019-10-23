import { Platform, MenuController } from '@ionic/angular';
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
  
  constructor(private auth: AuthService,private platform: Platform, private menuCtrl: MenuController) {
    this.acesso=auth.getPerfil();
  }
 
  ionViewDidEnter(){
    if(this.auth.isAuth()){
      this.menuCtrl.enable(true,'menu-sidebar');  
    }
  }

  ionViewCanLeave(){
   this.platform.backButton.subscribeWithPriority(9999,()=>{
    document.addEventListener('backbutton', function (event) {
      event.preventDefault();
      event.stopPropagation();
    }, false);
    return false; 
   });
  }

}
