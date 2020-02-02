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
  };
  postMatch = {
    domande: [
      {
        testo: 'Chi ha vinto il Gran Premio di Montecarlo del 2015?',
        giusta: 'Rosberg',
        risposte: ['Hamilton', 'Rosberg', 'Vettel']
      },
      {
        testo: 'Chi ha vinto il campionato del mondo nel 2007?',
        giusta: 'Raikkonen',
        risposte: ['Raikkonen', 'Hamilton', 'Massa']
      },
      {
        testo: 'Quale costruttore ha vinto il campionato del mondo nel 1998?',
        giusta: 'McLaren',
        risposte: ['Ferrari', 'Williams', 'McLaren']
      }
    ],
    risposte_corrette: [
      {
        testo: 'Chi ha vinto il Gran Premio di Montecarlo del 2015?',
        risposta: 'Rosberg',
      },
      {
        testo: 'Quale costruttore ha vinto il campionato del mondo nel 1998?',
        risposta: 'McLaren'
      }
    ],
    punteggio: '98',
    durata_sessione: '5',
    stato_partita: 'terminata'
  };


  constructor(private http: HttpClient) { }

  getScore() {
    return this.http.get(this.url);
  }

  getQuestions() {
    return this.http.get(`${this.url}/match`);
  }

  postSignUp() {
    return this.http.post(`${this.url}/signup`, this.postSign, this.httpOptions);
  }

  saveMatch() {
    return this.http.post(`${this.url}/match`, this.postMatch , this.httpOptions );
  }

}
