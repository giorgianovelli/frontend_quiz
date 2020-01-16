import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestQuizService {
  private url = 'http://localhost:5000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  postData = {
    email: 'giorgia@gmail.com',
    password_hash: 'giorgia'
  };

  constructor(private http: HttpClient) { }

  getScore() {
    return this.http.get(this.url);
  }

  getQuestions() {
    return this.http.get(`${this.url}/match`);
  }
  // POST registrazione, log in, partita
  postLogIn() {
    return this.http.post(`${this.url}/login`, this.postData, this.httpOptions );
  }
}
