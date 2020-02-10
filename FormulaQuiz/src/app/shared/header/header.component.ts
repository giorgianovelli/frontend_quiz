import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../api/auth.service';
import {IdentityService} from '../../core/identity.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private identityService: IdentityService, private router: Router) { }

  ngOnInit() {
  }
  logout(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    return false;
  }
  onClick() {
    this.identityService.clear();
    this.router.navigateByUrl('/signup');
  }

}
