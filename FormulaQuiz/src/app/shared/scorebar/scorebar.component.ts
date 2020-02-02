import { Component, OnInit } from '@angular/core';
import {finalize, tap} from 'rxjs/operators';
import {QuizService} from '../../api/quiz.service';
import {Score} from '../../dto/score';

@Component({
  selector: 'app-scorebar',
  templateUrl: './scorebar.component.html',
  styleUrls: ['./scorebar.component.scss']
})
export class ScorebarComponent implements OnInit {
  standing: Score[] = [];
  loading = true;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.loading = true;
    this.refreshScore()
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe();
  }

  refreshScore() {
    return this.quizService.getScore()
      .pipe(
        tap(console.log),
        tap(res => this.standing = res)
      );
  }

}
