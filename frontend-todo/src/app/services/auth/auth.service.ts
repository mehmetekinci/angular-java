import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {}

  authUser(username: string, password: string) {
    console.log(this.isUserLoggedIn());
    if (username === "memo" && password === "dummy") {
      sessionStorage.setItem("authUser", username);
      console.log(this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    const username = sessionStorage.getItem("authUser");

    return !(username === null);
  }

  logout() {
    sessionStorage.removeItem("authUser");
  }
}
