import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { setTheme } from "ngx-bootstrap/utils";
import { AppState } from "./store/reducers";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  isLoggedIn$;
  constructor(private store: Store<AppState>, private router: Router) {
    setTheme("bs4");
  }
  ngOnInit() {
  }
}
