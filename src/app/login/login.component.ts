import { MenuController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private route: Router , private menuCtrl: MenuController) { }
  
  private email = '';
  private senha = '';

  ngOnInit() {
    if(this.auth.isAuth()){
        this.route.navigateByUrl('');
    }

   if(this.route.url=='/logoff'){
     this.deslogar();
     return;
    }
    
   if(this.route.url=='/login'){
    this.menuCtrl.enable(false);  
   }
   
  }

  logar() {
    this.auth.authUser(this.email, this.senha);
  }

  deslogar(){
    this.auth.logoff();
    this.route.navigateByUrl('');
  }
  
}
