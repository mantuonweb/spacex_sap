import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "spx-launches",
  templateUrl: "./launches.component.html",
  styleUrls: ["./launches.component.scss"]
})
export class LaunchesComponent implements OnInit {
  limitUpper = 15;
  @Input("launches") launches$: any;
  constructor() {}

  ngOnInit() {}
}
