import { Component, OnChanges } from "@angular/core";

@Component({
  selector: "pm-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"],
})
export class StarComponent implements OnChanges {
  rating: number = 4;
  cropWdith: number = 75;

  ngOnChanges(): void {
    this.cropWdith = (this.rating * 75) / 5;
  }
}
