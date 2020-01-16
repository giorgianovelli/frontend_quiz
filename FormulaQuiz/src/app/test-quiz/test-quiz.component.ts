import { Component, OnInit } from '@angular/core';
import {TestQuizService} from '../api/test-quiz.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-test-quiz',
  templateUrl: './test-quiz.component.html',
  styleUrls: ['./test-quiz.component.scss']
})
export class TestQuizComponent implements OnInit {

  constructor(private quizService: TestQuizService) { }

  ngOnInit() {
    this.refreshScore();
    this.refreshQuestions();
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

}
