import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  username: string = "memo";
  password: string = "";
  errorMessage: string = "Invalid credentials";
  invalidLogin: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  handleLogin() {
    console.log("username", this.username, "password", this.password);
    if (this.authService.authUser(this.username, this.password)) {
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
