import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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

  postMatch;

  constructor(private http: HttpClient) { }

  getScore() {
    return this.http.get(this.url);
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

  saveMatch() {
    return this.http.post(`${this.url}/match`, this.postMatch , this.httpOptions );
  }
}
