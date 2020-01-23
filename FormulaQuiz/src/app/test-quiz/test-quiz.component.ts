import { Component, OnInit } from '@angular/core';
import {TestQuizService} from '../api/test-quiz.service';
import {tap} from 'rxjs/operators';
import {AuthService} from '../api/auth.service';
import {concat} from 'rxjs';

@Component({
  selector: 'app-test-quiz',
  templateUrl: './test-quiz.component.html',
  styleUrls: ['./test-quiz.component.scss']
})
export class TestQuizComponent implements OnInit {
  // loading = true;

  constructor(private quizService: TestQuizService, private authService: AuthService) { }

  ngOnInit() {
    // this.loading = true;
    this.refreshScore();
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
      ).subscribe();
  }

  logIn() {
    return this.authService.loginWithUsernameAndPassword('giorgia@gmail.com', 'giorgia')
      .subscribe();
  }

  /*signUp() {
    return this.quizService.postSignUp()
      .pipe(
        tap(console.log)
      ).subscribe();
  }*/

  getProtected() {
    return this.quizService.getProtected()
      .pipe(
        tap(console.log)
      ).subscribe();
  }


  saveMatch() {
    return this.quizService.saveMatch()
      .pipe(
        tap(console.log)
      ).subscribe();
  }

  logOut() {
    return this.authService.logout();
  }

}
