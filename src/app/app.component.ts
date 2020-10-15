import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { setTheme } from "ngx-bootstrap/utils";
import { BehaviorSubject } from 'rxjs';
import { AppState } from "./store/reducers";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  isLoggedIn$;
  static isBrowser = new BehaviorSubject<boolean>(null);
  constructor(private store: Store<AppState>, private router: Router,@Inject(PLATFORM_ID) private platformId: any) {
    setTheme("bs4");
    AppComponent.isBrowser.next(isPlatformBrowser(platformId));
  }
  ngOnInit() {
  }
}
