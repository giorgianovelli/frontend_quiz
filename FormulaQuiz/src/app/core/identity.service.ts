import { Injectable } from '@angular/core';


export interface Credentials {
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  key = 'credentials';

  constructor() { }

  get(): Credentials {
    return JSON.parse(localStorage.getItem(this.key));
  }

  set(value: Credentials) {
    localStorage.setItem(this.key, JSON.stringify(value));
  }

  isLogged() {
    return localStorage.getItem(this.key);
  }

  clear() {
    localStorage.removeItem(this.key);
  }

}
