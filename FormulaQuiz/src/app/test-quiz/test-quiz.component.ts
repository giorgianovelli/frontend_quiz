import { Component, OnInit } from '@angular/core';
import {TestQuizService} from '../api/test-quiz.service';
import {finalize, tap} from 'rxjs/operators';
import {concat, merge, pipe} from 'rxjs';

@Component({
  selector: 'app-test-quiz',
  templateUrl: './test-quiz.component.html',
  styleUrls: ['./test-quiz.component.scss']
})
export class TestQuizComponent implements OnInit {
  loading = true;

  constructor(private quizService: TestQuizService) { }

  ngOnInit() {
    this.loading = true;
    this.refreshScore();
    this.refreshQuestions();
    /*concat(
      this.logIn(),
      this.hello()
      ).pipe(
      finalize(() => this.loading = false)
    ).subscribe();*/
    // this.signUp();
    this.logIn();
  }

  refreshScore() {
    return this.quizService.getScore()
      .pipe(
        tap(console.log)
      )
      .subscribe();
  }

  refreshQuestions() {
    return this.quizService.getQuestions()
      .pipe(
        tap(console.log)
      )
      .subscribe();
  }

  logIn() {
    return this.quizService.postLogIn()
      .pipe(
        tap(console.log)
      ).subscribe();
  }

  signUp() {
    return this.quizService.postSignUp()
      .pipe(
        tap(console.log)
      ).subscribe();
  }

  hello() {
    return this.quizService.hello()
      .pipe(
        tap(console.log)
      ).subscribe();
  }

  logOut() {
    return this.quizService.logOut()
      .pipe(
        tap(console.log)
      ).subscribe();
  }

}
