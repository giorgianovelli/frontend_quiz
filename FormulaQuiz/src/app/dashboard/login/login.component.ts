import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../api/auth.service';
import {FormGroup, FormControl} from '@angular/forms';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    emailAddress: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService) { }
  ngOnInit() {
  }

  logIn(email, password) {
    return this.authService.loginWithUsernameAndPassword(email, password)
      .pipe(
        tap(console.log)
      )
      .subscribe();
  }

  onSubmit() {
    console.warn(this.loginForm.value.emailAddress);
    this.logIn(this.loginForm.value.emailAddress, this.loginForm.value.password);
  }
}
