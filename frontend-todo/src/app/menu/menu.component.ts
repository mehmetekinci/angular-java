import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth/auth.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  public isUserLoggedIn: boolean = this.authService.isUserLoggedIn();
  constructor(public authService: AuthService) {}

  ngOnInit() {}
}
