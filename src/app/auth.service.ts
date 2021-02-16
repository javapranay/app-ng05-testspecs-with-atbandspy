import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated = false;
  constructor() { }

  // isAuthenticated(): boolean{
  //   return !!localStorage.getItem('token');
  // }
  isAuthenticated() {
    return this.authenticated;
  }
}
