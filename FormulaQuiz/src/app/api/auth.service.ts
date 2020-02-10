import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Credentials, IdentityService} from '../core/identity.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:5000';
  redirectUrl: string;

  constructor(
    private http: HttpClient,
    private identityService: IdentityService) { }

  getToken() {
    return this.identityService.get().access_token;
  }

  loginWithUsernameAndPassword(emailAddress: string, pwd: string) {
    return this.http.post<any>(`${this.url}/login`, {
      email: emailAddress,
      password: pwd
    }).pipe(
        tap((user: Credentials) => {
          this.identityService.set(user);
        })
    );
  }

  logout() {
    this.identityService.clear();
  }

  isLoggedIn() {
    return this.identityService.isLogged();
  }

}
