import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {
  
  constructor(private router: Router, private auth: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if(sessionStorage.getItem('currentUser')){
      return true;
    }

    this.router.navigateByUrl('/login', { queryParams: { returnUrl: state }});

    return false;

  }

}
