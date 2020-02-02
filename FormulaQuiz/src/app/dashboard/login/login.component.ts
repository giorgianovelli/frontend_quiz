import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../api/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  logIn(email, password) {
    return this.authService.loginWithUsernameAndPassword(email, password).subscribe();
  }

}
