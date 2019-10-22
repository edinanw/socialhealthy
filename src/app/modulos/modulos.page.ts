import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.page.html',
  styleUrls: ['./modulos.page.scss'],
})
export class ModulosPage implements OnInit {

  public perfil;
  public modulosPerfil1=[
    {'id':1,'nome':'Modulo 1','img':'','icon':'airplane','link':'/modulo1'},
    {'id':2,'nome':'Modulo 2','img':'','icon':'apps','link':'/modulo2'},
    {'id':3,'nome':'Modulo 3','img':'','icon':'analytics','link':'/modulo3'},
    {'id':4,'nome':'Modulo 4','img':'','icon':'american-football','link':'/modulo4'},
  ];

  public modulosPerfil2=[
    {'id':1,'nome':'Modulo 1','img':'','icon':'logo-android','link':'/modulo1'},
    {'id':2,'nome':'Modulo 2','img':'','icon':'logo-apple','link':'/modulo2'},
    {'id':3,'nome':'Modulo 3','img':'','icon':'md-at','link':'/modulo3'},
    {'id':4,'nome':'Modulo 4','img':'','icon':'md-basketball','link':'/modulo4'},
    {'id':5,'nome':'Modulo 5','img':'','icon':'md-beer','link':'/modulo5'},
    {'id':6,'nome':'Modulo 6','img':'','icon':'md-bicycle','link':'/modulo6'},
  ];
  
  constructor(private auth: AuthService, private router: Router) { 
    this.auth.getPerfil().finally(()=>{
      this.perfil=this.auth.perfil;
    });
  }

  ngOnInit() { }

  abrirModulo(link){
      this.router.navigate([link]);
  }

  modulos(){
    if(this.perfil==1){
      return this.modulosPerfil1
    }else if(this.perfil==2){
      return this.modulosPerfil2;
    }

    return [];
  }
}
