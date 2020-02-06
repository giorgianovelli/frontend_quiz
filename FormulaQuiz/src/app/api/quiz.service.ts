import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SaveGameService} from '../core/save-game.service';
import {Observable} from 'rxjs';
import {Score} from '../dto/score';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private url = 'http://localhost:5000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private saveGame: SaveGameService) { }

  getScore(): Observable<Score> {
    return this.http.get<Score>(this.url);
  }

  getQuestions() {
    return this.http.get(`${this.url}/match`);
  }

  postSignUp(emailAddress, playerName, pwd) {
    return this.http.post(`${this.url}/signup`, {
      email: emailAddress,
      name: playerName,
      password: pwd
    },
      this.httpOptions);
  }

  saveMatch(sessionQuiz, sessionAnswers, sessionTime) {
    const postMatch = {
      questions: sessionQuiz,
      right_answers: sessionAnswers,
      time: sessionTime,
      state: 'ok'
    };
    return this.http.post(`${this.url}/match`, postMatch , this.httpOptions );
  }

  getAnswer() {
    return this.saveGame.get();
  }

  saveAnswer(data) {
    this.saveGame.appendToStorage(data);
  }

  clearAnswers() {
    this.saveGame.remove();
  }

}
