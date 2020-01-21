import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TestQuizComponent } from './test-quiz/test-quiz.component';
import {AuthService} from './api/auth.service';
import {CookieService} from 'ngx-cookie-service';
import {TokenInterceptor} from './TokenInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    TestQuizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
