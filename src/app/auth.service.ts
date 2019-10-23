import { LoadingService } from './../../../loginapi/src/app/loading/loading.service';
import { MenuController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({providedIn: 'root'})
export class AuthService {

  private resp;
  public perfil;
  private webservice;
  private key='kwk8o4ggo4cgssw84kwk8cg8o0sc0sc004o44wc4';

  constructor(private http: HttpClient, private router: Router, private menuCtrl: MenuController, private loader: LoadingService) { 
    //this.webservice="http://localhost/rest/public/api/";
    this.webservice="https://socialhealthy.000webhostapp.com/api";
  }

  public getToken() {
    return sessionStorage.getItem('currentUser');
  }

  public setToken(data: any) {
    return sessionStorage.setItem('currentUser', data);
  }

  public isAuth() {
    const a = this.getToken();
    if (a !== '' && a != null && a !== undefined) {
      
      return true;
    }
    
    return false;
  }
 
  public authUser(email: string, password: string): Observable<any> {
    this.loader.show();
                    
    const dados = {
      'email': email,
      'password': password, 
      'X-API-KEY': this.key
    }

    var headers =  new HttpHeaders({ 
        'Content-Type': 'text/plain'
    });

    this.http.post(this.webservice + '/login', dados, { observe: 'response', headers: headers})
      .pipe(
        catchError((err, caught) => {
          this.loader.hide();
          if (err.status === 401) {
            alert("Usuário ou senha inválida!");
            return throwError(err.statusText);
          } else { 
            alert("Erro ao efetuar a operação");
            console.log(err);
            console.log(caught);
          }
          return throwError(err.statusText);
        }),
        map(data => {
          this.resp = data;
          if(this.resp.body.status) {
            this.setToken(this.resp.body.status); 
            this.menuCtrl.enable(true,'menu-sidebar');
            this.router.navigate(['']);
            this.loader.hide();
          }else{
            alert('Token Não Gerado!');
            this.loader.hide();
            console.log(data.body);
          }
        })

      ).subscribe();

    return this.resp;
  }

  getPerfil(){
    var headers =  new HttpHeaders({ 
      'Content-Type': 'text/plain'
    });
    return this.http.post(this.webservice + '/login/perfil',[], { observe: 'response', headers:headers})
      .pipe(
        catchError((err, caught) => {
          if (err.status === 401) {
            alert("Usuário ou senha inválida!");
            return throwError(err.statusText);
          } else {
            alert("Erro ao efetuar a operação");
            console.log(err);
            console.log(caught);
          }
          return throwError(err.statusText);
        }),
        map(data => {
          this.resp = data;
          if (this.resp.body.status) { 
            this.perfil=this.resp.body.message;
          } else {
            alert('Erro ao obter perfil!');
            console.log(data.body);
          }
        })

      ).toPromise();

   // return this.perfil;
  }
  
  logoff(){
    //this.menuCtrl.enable(false,'menu-sidebar');
    sessionStorage.removeItem('currentUser');
  }
}
