(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");





const routes = [{ path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }];
class LoginRoutingModule {
}
LoginRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginRoutingModule });
LoginRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginRoutingModule_Factory(t) { return new (t || LoginRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_actions_login_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/actions/login.actions */ "./src/app/login/store/actions/login.actions.ts");
/* harmony import */ var _store_selectors_login_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/selectors/login.selectors */ "./src/app/login/store/selectors/login.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class LoginComponent {
    constructor(platformId, store, router, _ngZone) {
        this.store = store;
        this.router = router;
        this._ngZone = _ngZone;
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(platformId);
    }
    ngOnInit() {
        this.chechLoginStatue$ = this.store.select(_store_selectors_login_selectors__WEBPACK_IMPORTED_MODULE_3__["selectIsLoggedIn"]).subscribe((loggedIn) => {
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
            }, 0);
        }
    }
    signInWithGoogle() {
    }
    onSuccess(googleUser) {
        let user = {
            name: googleUser.getBasicProfile().getName(),
            image: googleUser.getBasicProfile().getImageUrl(),
            email: googleUser.getBasicProfile().getEmail()
        };
        this.store.dispatch(Object(_store_actions_login_actions__WEBPACK_IMPORTED_MODULE_2__["doLoginsSuccess"])({ userData: user }));
    }
    onFailure(e) {
        this.store.dispatch(Object(_store_actions_login_actions__WEBPACK_IMPORTED_MODULE_2__["doLoginsFailure"])({ error: e }));
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 0, consts: [[2, "margin", "auto", "text-align", "center"], ["id", "spax-signin2", "data-onsuccess", "onSignIn", 1, "g-signin2", 2, "position", "absolute", "display", "inline-block", "top", "50%", "left", "calc(50% - 120px)"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _store_reducers_login_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/reducers/login.reducer */ "./src/app/login/store/reducers/login.reducer.ts");








class LoginModule {
}
LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginModule_Factory(t) { return new (t || LoginModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature(_store_reducers_login_reducer__WEBPACK_IMPORTED_MODULE_5__["loginFeatureKey"], _store_reducers_login_reducer__WEBPACK_IMPORTED_MODULE_5__["reducer"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreFeatureModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature(_store_reducers_login_reducer__WEBPACK_IMPORTED_MODULE_5__["loginFeatureKey"], _store_reducers_login_reducer__WEBPACK_IMPORTED_MODULE_5__["reducer"])
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/login/store/actions/login.actions.ts":
/*!******************************************************!*\
  !*** ./src/app/login/store/actions/login.actions.ts ***!
  \******************************************************/
/*! exports provided: doLogin, doLoginsSuccess, doLoginsFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doLogin", function() { return doLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doLoginsSuccess", function() { return doLoginsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doLoginsFailure", function() { return doLoginsFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const doLogin = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Login] Do Login');
const doLoginsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Login] Load Do Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const doLoginsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Login] Load Do Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/login/store/reducers/login.reducer.ts":
/*!*******************************************************!*\
  !*** ./src/app/login/store/reducers/login.reducer.ts ***!
  \*******************************************************/
/*! exports provided: loginFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFeatureKey", function() { return loginFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _actions_login_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/login.actions */ "./src/app/login/store/actions/login.actions.ts");


const loginFeatureKey = 'login';
const initialState = {
    userData: null,
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_login_actions__WEBPACK_IMPORTED_MODULE_1__["doLogin"], state => state), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_login_actions__WEBPACK_IMPORTED_MODULE_1__["doLoginsSuccess"], (state, action) => {
    return Object.assign(Object.assign({}, state), { userData: action.userData });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_login_actions__WEBPACK_IMPORTED_MODULE_1__["doLoginsFailure"], (state, action) => {
    return Object.assign(Object.assign({}, state), { error: action.error });
}));


/***/ }),

/***/ "./src/app/login/store/selectors/login.selectors.ts":
/*!**********************************************************!*\
  !*** ./src/app/login/store/selectors/login.selectors.ts ***!
  \**********************************************************/
/*! exports provided: selectLoginState, selectLoginUser, selectIsLoggedIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoginState", function() { return selectLoginState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoginUser", function() { return selectLoginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsLoggedIn", function() { return selectIsLoggedIn; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _reducers_login_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/login.reducer */ "./src/app/login/store/reducers/login.reducer.ts");


const selectLoginState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_reducers_login_reducer__WEBPACK_IMPORTED_MODULE_1__["loginFeatureKey"]);
const selectLoginUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectLoginState, state => {
    return state.userData;
});
const selectIsLoggedIn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectLoginUser, user => {
    return Boolean(user);
});


/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map