import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  logged = false;
  username = '';
  password = '';

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
        this.logged = true;
    }
  }
  reload() {
    window.location.reload();
    window.location.href = 'http://localhost:4200/home  ';
  }
  login(): void {
    this.authService.login(this.username, this.password).subscribe(data => {

      localStorage.setItem('token', data.token);
      this.logged = true;

      this.username = '';
      this.password = '';
      this.reload();
    });
  }
  logout() {
    localStorage.removeItem('token');
    this.logged = false;
  }
}
