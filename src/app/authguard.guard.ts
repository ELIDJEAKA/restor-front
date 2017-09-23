import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserServer } from './server/user.server';


@Injectable()
export class AuthguardGuard implements CanActivate {
  constructor(public userServer: UserServer,private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(localStorage.getItem('user')===null){
        this.router.navigate(['/sign-in'])
        return false;
      }else{
        
        return true;
      }
  }
}
