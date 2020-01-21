import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Credentials, IdentityService} from '../core/identity.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:5000';
  postLog = {
    email: 'giorgia@gmail.com',
    password: 'giorgia'
  };
  constructor(
    private http: HttpClient,
    private identityService: IdentityService) { }

  /*checkToken() {
    return this.cookieService.check('token');
  }*/

  getToken() {
    return this.identityService.get().access_token;
  }

  loginWithUsernameAndPassword(email: string, password: string) { // TODO usare parametri
    return this.http.post<any>(`${this.url}/login`,
      this.postLog,
    ).pipe(
        tap((user: Credentials) => {
          this.identityService.set(user);
        })
    );
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return this.identityService.isLogged();
  }

}
