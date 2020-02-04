import { Component, OnInit } from '@angular/core';
import {QuizService} from '../../api/quiz.service';
import {FormGroup, FormControl} from '@angular/forms';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm = new FormGroup({
    emailAddress: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private quizService: QuizService) { }

  ngOnInit() {
  }
  signup(email, name, password) {
    return this.quizService.postSignUp(email, name, password)
      .pipe(
        tap(console.log)
      )
      .subscribe();
  }
  onSubmit() {
    console.warn(this.registerForm.value);
    this.signup(this.registerForm.value.emailAddress, this.registerForm.value.name, this.registerForm.value.password);
  }
}
