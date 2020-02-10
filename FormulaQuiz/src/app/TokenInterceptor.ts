import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {AuthService} from './api/auth.service';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService, public router: Router) {}

  // handle your auth error or rethrow
  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401) {
      this.router.navigateByUrl('/login'); // TODO
      return of(err.message);
    }
    if (err.status === 400) {
      window.alert(err.error);
      this.router.navigateByUrl('/signup'); // TODO
      return of(err.message);
    }
    return throwError(err);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isLoggedIn()) {
      request = request.clone({
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.auth.getToken()}`
        })
      });
    }
    // return next.handle(request);
    return next.handle(request).pipe(catchError(x => this.handleAuthError(x)));
  }

}
