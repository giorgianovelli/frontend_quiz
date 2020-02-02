import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from './api/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isLoggedIn()) {
      request = request.clone({
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.auth.getToken()}`
        })
      });
    }
    console.log('req: ' + request);
    return next.handle(request);
  }

}
