import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID,NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { doLoginsFailure, doLoginsSuccess } from './store/actions/login.actions';
import { State } from './store/reducers/login.reducer';
import { selectIsLoggedIn } from './store/selectors/login.selectors';
declare const gapi;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isBrowser: any;
  chechLoginStatue$

  constructor(@Inject(PLATFORM_ID) platformId: Object, private store: Store<State>, private router: Router,private _ngZone: NgZone) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.chechLoginStatue$ = this.store.select(selectIsLoggedIn).subscribe((loggedIn) => {
      if (loggedIn) {
        this._ngZone.run(() => {
          this.router.navigate(['./home']);
        });
        // this.router.navigate(['./home']);
      }
    });
    if (this.isBrowser) {
      setTimeout(() => {
        gapi.signin2.render('spax-signin2', {
          'scope': 'profile email',
          'width': 240,
          'height': 50,
          'longtitle': true,
          'theme': 'dark',
          'onsuccess': this.onSuccess.bind(this),
          'onfailure': this.onFailure.bind(this)
        });
      }, 0)
    }
  }
  signInWithGoogle() {

  }
  onSuccess(googleUser) {
    let user = {
      name: googleUser.getBasicProfile().getName(),
      image: googleUser.getBasicProfile().getImageUrl(),
      email: googleUser.getBasicProfile().getEmail()
    }
    this.store.dispatch(doLoginsSuccess({ userData: user }));
  }
  onFailure(e) {
    this.store.dispatch(doLoginsFailure({ error: e }));
  }

}
