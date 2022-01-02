import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isLoggedIn(){
    return localStorage.getItem('Token') !== null;
  }

  public logout(){
    localStorage.removeItem('Token');
  }
}
