import { Component } from "@angular/core";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"],
})
export class HomepageComponent {
  clicked: boolean = false;
  inputData: String = "";
  url: String = "";

  showDescription(): void {
    if (this.inputData.trim().length > 0) {
      this.clicked = true;
      this.url = this.inputData;
    } else {
      this.clicked = false;
    }
  }
}
