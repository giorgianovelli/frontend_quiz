import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestQuizService {
  private url = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getScore() {
    return this.http.get(this.url);
  }

  getQuestions() {
    return this.http.get(`${this.url}/match`);
  }
}
