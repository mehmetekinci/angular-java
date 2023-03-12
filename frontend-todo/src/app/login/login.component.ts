import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = 'memo';
  password: string = '';
  errorMessage: string = 'Invalid credentials'
  invalidLogin: boolean = false;


  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

  handleLogin() {
    console.log("username", this.username, "password", this.password);
    if (this.username === 'memo' && this.password === 'dummy') {
      this.router.navigate(["welcome", this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
  handleChanges() {
    // if (this.username === 'memo' && this.password === 'dummy') {
    //   this.invalidLogin = false;
    // } else {
    //   this.invalidLogin = true;
    // }
  }

}
