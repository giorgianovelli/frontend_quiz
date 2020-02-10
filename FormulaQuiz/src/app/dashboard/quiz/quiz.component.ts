import { Component, OnInit } from '@angular/core';
import {QuizService} from '../../api/quiz.service';
import {finalize, switchMap, tap} from 'rxjs/operators';
import {Quiz} from '../../dto/quiz';
import {ActivatedRoute, Router} from '@angular/router';
import {of} from 'rxjs';
import {AuthService} from '../../api/auth.service';

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
  questionKey = 'questions';
  endTime: number;
  sessionTime: number;

  constructor(
    private quizService: QuizService,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.quizService.clearAnswers('answers');
    this.startTime = this.getTime();
    this.userAnswers = [];
    this.loading = true;
    this.questionNum = 0;
    this.activatedRoute.queryParams.pipe(
      tap((params) => this.questionNum = params.step),
      switchMap(() => this.getQuestions()),
    ).subscribe((questions) => {
      this.loading = false;
      this.quizData = questions;
      this.dataLength = questions.length;
    });
  }

  getTime() {
    return Math.floor(Date.now() / 1000);
  }
  getQuestions() {
    return of(localStorage.getItem(this.questionKey)).pipe(
      switchMap((questions) => {
        return questions ? of(JSON.parse(questions)) :
        this.quizService.getQuestions()
          .pipe(
            tap(data => {
              localStorage.setItem(this.questionKey, JSON.stringify(data));
              console.log(data);
              // this.dataLength = this.quizData.length;
            })
          );
      })
    );
  }
  onNext() {
    // this.userAnswers.push(this.radioValue);
    this.quizService.saveAnswer('answers', this.radioValue, Number(this.activatedRoute.snapshot.queryParams.step)); // TODO
    this.radioValue = '';
    this.router.navigate([`/quiz`], { queryParams: {step: Number(this.activatedRoute.snapshot.queryParams.step) + 1}});
  }
  onSubmit() {
    /*
    domande in quizData ok
    tempo di gioco in sessionTime ok
    risposte esatte date dall'utente in rightAnswers ok
     */

    this.endTime = this.getTime();
    this.sessionTime = this.endTime - this.startTime;
    this.userAnswers = this.quizService.getAnswers('answers');
    console.log(this.userAnswers);
    let i = 0;
    for (const value of this.quizData) {
      if (value.rightAnswer === this.userAnswers[i]) {
        this.rightAnswers.push(this.userAnswers[i]);
      }
      i++;
    }
    this.quizService.saveMatch(this.quizData, this.rightAnswers, this.sessionTime)
      .pipe(
        tap(console.log))
      .subscribe(() => {
        localStorage.clear();
        this.router.navigateByUrl('/signup');
      });
    // console.log(this.rightAnswers);
    // console.log(this.sessionTime);
    // console.log(this.quizService.getAnswer());  TODO
    // localStorage.removeItem(this.questionKey);
    // this.router.navigate(['signup']);
  }
}
