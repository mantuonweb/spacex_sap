import { Component, Input, OnInit } from "@angular/core";
import { fromEvent } from "rxjs";
import { debounceTime } from "rxjs/operators";
@Component({
  selector: "spx-launches",
  templateUrl: "./launches.component.html",
  styleUrls: ["./launches.component.scss"]
})
export class LaunchesComponent implements OnInit {
  limitUpper = 15;
  offsetHeight = 20;
  @Input("launches") launches$: any;
  constructor() {}
  ngOnInit() {
    const scroll$ = fromEvent(document, "scroll").pipe(debounceTime(300));
    const el = document.querySelector("body");
    scroll$.subscribe(e => {
      if (this.hasReachedBottom()) {
        this.limitUpper = Math.min(this.limitUpper + 10, 100);
      }
    });
  }

  hasReachedBottom() {
    let docEle = document.documentElement;
    return (
      Math.ceil(docEle.scrollTop + docEle.clientHeight + this.offsetHeight) >=
      Math.ceil(docEle.scrollHeight)
    );
  }
}
