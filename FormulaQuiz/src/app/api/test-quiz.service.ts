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
  postMatch = {
    domande: [
      {
        testo: 'quanto fa 7*4?',
        giusta: '28',
        risposte: ['28', '21', '35']
      }
    ],
    risposte_corrette: '28',
    punteggio: '100',
    durata_sessione: '15',
    stato_partita: 'terminata'
  }

  constructor(private http: HttpClient) { }

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

  saveMatch() {
    return this.http.post(`${this.url}/match`, this.postMatch , this.httpOptions );
  }

  /*logOut() {
    return this.http.get(`${this.url}/logout`);
  }*/
}
