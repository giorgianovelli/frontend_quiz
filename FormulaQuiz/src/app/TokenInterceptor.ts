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
      // navigate /delete cookies or whatever
      this.router.navigateByUrl('/login');
      // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream
      // consumers to have to handle it as well.
      return of(err.message); // or EMPTY may be appropriate here
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
    console.log('req: ' + request);
    return next.handle(request).pipe(catchError(x => this.handleAuthError(x)));
  }

}
