import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }
  private email = '';
  private senha = '';

  ngOnInit() {
   
  }

  logar() {
    this.auth.authUser(this.email, this.senha);
  }
  
}
