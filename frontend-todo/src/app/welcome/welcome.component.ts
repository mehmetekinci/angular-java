import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WelcomeDataService } from "../services/data/welcome-data.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
})
export class WelcomeComponent implements OnInit {
  welcomeMessageFromService: string = "";
  errorMessageFromService: string = "";
  name: string = "";

  constructor(
    private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService
  ) {}

  ngOnInit() {
    console.log(this.route.snapshot.params["name"]);
    this.name = this.route.snapshot.params["name"];
  }
  getWelcomeMessage() {
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      (response) => this.handelSuccessFullResponse(response),
      (error) => this.handelErrorResponse(error)
    );
    // console.log(this.welcomeDataService.executeHelloWorldBeanService());
  }
  getWelcomeMessageWithPath() {
    this.welcomeDataService
      .executeHelloWorldServiceWithPath(this.name)
      .subscribe(
        (response) => this.handelSuccessFullResponse(response),
        (error) => this.handelErrorResponse(error)
      );
    // console.log(this.welcomeDataService.executeHelloWorldBeanService());
  }

  handelSuccessFullResponse(response) {
    this.welcomeMessageFromService = response.message;
    this.errorMessageFromService = "";

    console.log(response.message);
  }

  handelErrorResponse(error) {
    this.errorMessageFromService = error.error.message;
    this.welcomeMessageFromService = "";
  }
}
