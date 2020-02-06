import { Injectable } from '@angular/core';

export interface Answer {
  userAnswer: string;
}

@Injectable({
  providedIn: 'root'
})
export class SaveGameService {

  key = 'answer';

  constructor() { }

  get() {
    return JSON.parse(localStorage.getItem(this.key));
  }

  set(value: Answer) {
    localStorage.setItem(this.key, JSON.stringify(value));
  }

  appendToStorage(value: Answer) {
    let old = localStorage.getItem(this.key);
    if (old === null) {
      old = '';
    }
    localStorage.setItem(this.key, JSON.stringify(`${old} ${value}`));
  }

  remove() {
    localStorage.removeItem(this.key);
  }
}
