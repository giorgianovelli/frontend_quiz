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
  postLog = {
    email: 'giorgia@gmail.com',
    password_hash: 'giorgia'
  };
  postSign = {
    email: 'registrazione3@gmail.com',
    nome: 'registrazione',
    password_hash: 'provareg'
  }

  constructor(private http: HttpClient) { }

  getScore() {
    return this.http.get(this.url);
  }

  getQuestions() {
    return this.http.get(`${this.url}/match`);
  }
  // POST registrazione, log in, partita
  /*postLogIn() {
    return this.http.post(`${this.url}/login`, this.postLog, this.httpOptions );
  }*/

  postSignUp() {
    return this.http.post(`${this.url}/signup`, this.postSign, this.httpOptions);
  }

  /*logOut() {
    return this.http.get(`${this.url}/logout`);
  }*/
}
