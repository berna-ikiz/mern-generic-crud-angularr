import { AuthserviceService } from './../services/authservice.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private Auth:AuthserviceService, private router: Router) {};

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('token',this.Auth.Authdata.token)
      console.log('data',this.Auth.Authdata)

      if(localStorage.getItem('jwt')) {
          return true;
      }else{
          return false;
      }
  }



}
