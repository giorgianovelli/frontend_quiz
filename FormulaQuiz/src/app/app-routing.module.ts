import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestQuizComponent} from './test-quiz/test-quiz.component';


const routes: Routes = [
  {
    path: '',
    component: TestQuizComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
