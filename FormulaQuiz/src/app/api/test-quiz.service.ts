import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';

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

  constructor(private http: HttpClient, private auth: AuthService) { }

  getScore() {
    return this.http.get(this.url);
  }

  getQuestions() {
    return this.http.get(`${this.url}/match`);
  }
  getProtected() {
    return this.http.get(`${this.url}/protected`);
  }
  postSignUp() {
    return this.http.post(`${this.url}/signup`, this.postSign, this.httpOptions);
  }

  /*logOut() {
    return this.http.get(`${this.url}/logout`);
  }*/
}
