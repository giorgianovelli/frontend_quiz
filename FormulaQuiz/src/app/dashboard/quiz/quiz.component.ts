import { Component, OnInit } from '@angular/core';
import {QuizService} from '../../api/quiz.service';
import {finalize, tap} from 'rxjs/operators';
import {Quiz} from '../../dto/quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  quizData: Quiz[] = [];
  dataLength = 0;
  questionNum = 0;
  loading = true;
  userAnswers = [];
  radioValue: string = '';
  rightAnswers: string[] = [];
  startTime: number;
  endTime: number;
  sessionTime: number;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizService.clearAnswers();
    this.startTime = this.getTime();
    this.userAnswers = [];
    this.loading = true;
    this.questionNum = 0;
    this.getQuestions()
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe();
  }

  getTime() {
    return Math.floor(Date.now() / 1000);
  }
  getQuestions() {
    return this.quizService.getQuestions()
      .pipe(
        tap(console.log),
        tap(data => this.quizData = data),
        tap(_ => this.dataLength = this.quizData.length)
      );
  }
  onNext() {
    this.quizService.saveAnswer(this.radioValue);
    this.userAnswers.push(this.radioValue);
    this.radioValue = '';
    this.questionNum = this.questionNum + 1;
  }
  onSubmit() {
    /*
    domande in quizData ok
    tempo di gioco in sessionTime ok
    risposte esatte date dall'utente in rightAnswers ok
     */
    this.endTime = this.getTime();
    this.sessionTime = this.endTime - this.startTime;
    let i = 0;
    for (const value of this.quizData) {
      if (value.rightAnswer === this.userAnswers[i]) {
        this.rightAnswers.push(this.userAnswers[i]);
      }
      i++;
    }
    this.quizService.saveMatch(this.quizData, this.rightAnswers, this.sessionTime)
      .pipe(tap(console.log))
      .subscribe();
    console.log(this.rightAnswers);
    console.log(this.sessionTime);
    console.log(this.quizService.getAnswer()); // TODO

  }
}
