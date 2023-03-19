import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.scss"],
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router, public authService: AuthService) {}

  ngOnInit() {
    this.authService.logout();
    setTimeout(() => {
      this.router.navigate(["login"]);
    }, 5000);
  }
}
