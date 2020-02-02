import { Component, OnInit } from '@angular/core';
import {QuizService} from '../../api/quiz.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private quizService: QuizService) { }

  ngOnInit() {
  }

  signup(email, name, password) {
    return this.quizService.postSignUp(email, name, password).subscribe();
  }

}
