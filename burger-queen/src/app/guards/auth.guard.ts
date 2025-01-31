import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: UserService,
               private router : Router){}

  canActivate () :boolean {
    if(this.auth.authUser()){
      return true;
    } else {
      this.router.navigate(['/login'])
      return false;
    } 
  }

}