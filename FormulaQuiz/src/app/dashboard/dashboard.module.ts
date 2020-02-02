import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {LoginComponent} from './login/login.component';
import {QuizComponent} from './quiz/quiz.component';
import {SignupComponent} from './signup/signup.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    QuizComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
