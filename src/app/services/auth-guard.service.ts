import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router : Router,
    private AuthService: AuthService) { }

  canActivate(){
    if(this.AuthService.isloggedin()) return true;
    this.router.navigate(['/login']);
    return false;
  }
}
