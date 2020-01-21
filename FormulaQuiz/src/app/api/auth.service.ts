import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:5000';
  postLog = {
    email: 'giorgia@gmail.com',
    password: 'giorgia'
  };

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  /*checkToken() {
    return this.cookieService.check('token');
  }*/

  getToken() {
    return this.cookieService.get('token');
  }

  loginWithUsernameAndPassword(email: string, password: string) { // TODO usare parametri
    return this.http.post<any>(`${this.url}/login`,
      this.postLog,
      {
        // headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
      }
      ).pipe(map(user => {
        if (user && user.token) {
          this.cookieService.set('token', user.token);
        }
        return user;
    }));
  }

  logout() {
    this.cookieService.delete('token');
  }

  isLoggedIn() {
    return this.cookieService.check('token');
  }

}
