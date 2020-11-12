(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/components/component.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/component.module.ts ***!
  \************************************************/
/*! exports provided: CommonComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonComponentsModule", function() { return CommonComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _launch_launch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./launch/launch.component */ "./src/app/components/launch/launch.component.ts");
/* harmony import */ var _launches_launches_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./launches/launches.component */ "./src/app/components/launches/launches.component.ts");
/* harmony import */ var _launch_filter_launch_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./launch-filter/launch-filter.component */ "./src/app/components/launch-filter/launch-filter.component.ts");






class CommonComponentsModule {
}
CommonComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CommonComponentsModule });
CommonComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CommonComponentsModule_Factory(t) { return new (t || CommonComponentsModule)(); }, providers: [], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommonComponentsModule, { declarations: [_launch_launch_component__WEBPACK_IMPORTED_MODULE_2__["LaunchComponent"], _launches_launches_component__WEBPACK_IMPORTED_MODULE_3__["LaunchesComponent"], _launch_filter_launch_filter_component__WEBPACK_IMPORTED_MODULE_4__["LaunchFilterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_launch_launch_component__WEBPACK_IMPORTED_MODULE_2__["LaunchComponent"], _launches_launches_component__WEBPACK_IMPORTED_MODULE_3__["LaunchesComponent"], _launch_filter_launch_filter_component__WEBPACK_IMPORTED_MODULE_4__["LaunchFilterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [],
                declarations: [_launch_launch_component__WEBPACK_IMPORTED_MODULE_2__["LaunchComponent"], _launches_launches_component__WEBPACK_IMPORTED_MODULE_3__["LaunchesComponent"], _launch_filter_launch_filter_component__WEBPACK_IMPORTED_MODULE_4__["LaunchFilterComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_launch_launch_component__WEBPACK_IMPORTED_MODULE_2__["LaunchComponent"], _launches_launches_component__WEBPACK_IMPORTED_MODULE_3__["LaunchesComponent"], _launch_filter_launch_filter_component__WEBPACK_IMPORTED_MODULE_4__["LaunchFilterComponent"]],
                entryComponents: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/launch-filter/launch-filter.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/launch-filter/launch-filter.component.ts ***!
  \*********************************************************************/
/*! exports provided: LaunchFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaunchFilterComponent", function() { return LaunchFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { "active": a0 }; };
function LaunchFilterComponent_div_6_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LaunchFilterComponent_div_6_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const year_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onYearFilter(year_r1.right); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r2.isYearActive(year_r1.right)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](year_r1.right);
} }
function LaunchFilterComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LaunchFilterComponent_div_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const year_r1 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onYearFilter(year_r1.left); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LaunchFilterComponent_div_6_button_4_Template, 2, 4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r0.isYearActive(year_r1.left)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](year_r1.left);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", year_r1.right);
} }
class LaunchFilterComponent {
    constructor() {
        this.years = [];
        this.filters = {
            year: undefined,
            land: undefined,
            launch: undefined
        };
        this.onFilterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getYears();
    }
    getYears() {
        let years = [];
        let curYear = new Date().getFullYear();
        for (let y = 2006; y <= curYear; y++) {
            years.push(y);
        }
        let arrLen = years.length;
        for (let i = 0; i < arrLen; i = i + 2) {
            this.years.push({
                left: years[i],
                right: 1 + i < arrLen ? years[1 + i] : undefined
            });
        }
    }
    ngOnInit() {
        if (this.filters) {
            this.year = this.filters.year;
            this.isLand = this.filters.land;
            this.isSuccessful = this.filters.launch;
        }
    }
    onYearFilter(year) {
        if (year === this.year) {
            this.year = undefined;
        }
        else {
            this.year = year;
        }
        this.filters = Object.assign(Object.assign({}, this.filters), { year: this.year });
        this.onFilterChange.emit(this.filters);
    }
    onSuccessfulLaunch(isSuccessful) {
        if (isSuccessful === this.isSuccessful) {
            this.isSuccessful = undefined;
        }
        else {
            this.isSuccessful = isSuccessful;
        }
        this.filters = Object.assign(Object.assign({}, this.filters), { launch: this.isSuccessful });
        this.onFilterChange.emit(this.filters);
    }
    onSuccessfulLand(isLand) {
        if (isLand === this.isLand) {
            this.isLand = undefined;
        }
        else {
            this.isLand = isLand;
        }
        this.filters = Object.assign(Object.assign({}, this.filters), { land: this.isLand });
        this.onFilterChange.emit(this.filters);
    }
    isYearActive(year) {
        return this.year === year;
    }
}
LaunchFilterComponent.ɵfac = function LaunchFilterComponent_Factory(t) { return new (t || LaunchFilterComponent)(); };
LaunchFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LaunchFilterComponent, selectors: [["spx-launch-filter"]], inputs: { filters: "filters" }, outputs: { onFilterChange: "filter-change" }, decls: 23, vars: 13, consts: [[1, "card"], [1, "card-title", "title-text"], [1, "card-body"], [1, "filter-title", "text-center"], [4, "ngFor", "ngForOf"], [1, "clearfix", "filter-action"], ["type", "button", 1, "btn", "btn-success", "first", "float-left", 3, "ngClass", "click"], ["type", "button", 1, "btn", "btn-success", "second", "float-right", 3, "ngClass", "click"], ["type", "button", "class", "btn btn-success second float-right", 3, "ngClass", "click", 4, "ngIf"]], template: function LaunchFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Launch Year ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LaunchFilterComponent_div_6_Template, 5, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Successful Launch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LaunchFilterComponent_Template_button_click_11_listener() { return ctx.onSuccessfulLaunch(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "True");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LaunchFilterComponent_Template_button_click_13_listener() { return ctx.onSuccessfulLaunch(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "False");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Successful landing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LaunchFilterComponent_Template_button_click_19_listener() { return ctx.onSuccessfulLand(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "True");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LaunchFilterComponent_Template_button_click_21_listener() { return ctx.onSuccessfulLand(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "False");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.years);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.isSuccessful === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.isSuccessful === false));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.isLand === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.isLand === false));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".filter-action[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.filter-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #C5E09B;\n  color: black;\n  border: 0;\n  padding: 2px 15px;\n}\n.filter-action[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], .filter-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  background-color: #50770B;\n  color: black;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 1px;\n}\n.filter-title[_ngcontent-%COMP%] {\n  padding-bottom: 2px;\n  border-bottom: 1px solid #757575;\n  margin: 10px 20px;\n  font-size: 0.8rem;\n}\n@media only screen and (max-width: 700px) {\n  body[_ngcontent-%COMP%] {\n    background-color: lightblue;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px;\n  }\n}\n@media only screen and (min-width: 701px) and (max-width: 1024px) {\n  body[_ngcontent-%COMP%] {\n    background-color: lightblue;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    width: 180px;\n    padding: 10px;\n  }\n}\n@media only screen and (min-width: 1025px) {\n  body[_ngcontent-%COMP%] {\n    background-color: lightblue;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    width: 180px;\n    padding: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXVuY2gtZmlsdGVyL0Q6XFwyMDIwXFxMZWFybmluZ1xcU1NSXFwxL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYXVuY2gtZmlsdGVyXFxsYXVuY2gtZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xhdW5jaC1maWx0ZXIvbGF1bmNoLWZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7QURBRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFLQSxpQkFBQTtBQ0ZKO0FERkk7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNJTjtBRENBO0VBQ0UsWUFBQTtBQ0VGO0FEQUE7RUFDRSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0dGO0FEQUE7RUFDRTtJQUNFLDJCQUFBO0VDR0Y7O0VEREE7SUFDRSxXQUFBO0lBQVcsYUFBQTtFQ0tiO0FBQ0Y7QURIQTtFQUNFO0lBQ0UsMkJBQUE7RUNLRjs7RURIQTtJQUNHLGdCQUFBO0lBQ0QsWUFBQTtJQUFZLGFBQUE7RUNPZDtBQUNGO0FETEE7RUFDRTtJQUNFLDJCQUFBO0VDT0Y7O0VETEE7SUFDRyxnQkFBQTtJQUNELFlBQUE7SUFBWSxhQUFBO0VDU2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF1bmNoLWZpbHRlci9sYXVuY2gtZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlci1hY3Rpb257XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzVFMDlCO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBib3JkZXI6MDtcclxuICAgICYuYWN0aXZlLCY6YWN0aXZle1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA3NzBCO1xyXG4gICAgICBjb2xvcjpibGFjaztcclxuICAgIH1cclxuICAgIHBhZGRpbmc6IDJweCAxNXB4O1xyXG4gIH1cclxufVxyXG4uY2FyZC1ib2R5e1xyXG4gIHBhZGRpbmc6MXB4XHJcbn1cclxuLmZpbHRlci10aXRsZSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzc1NzU3NTtcclxuICBtYXJnaW46MTBweCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgfVxyXG4gIC5jYXJke1xyXG4gICAgd2lkdGg6MTAwJTtwYWRkaW5nOjEwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAxcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICB9XHJcbiAgLmNhcmR7XHJcbiAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHdpZHRoOjE4MHB4O3BhZGRpbmc6MTBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICB9XHJcbiAgLmNhcmR7XHJcbiAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHdpZHRoOjE4MHB4O3BhZGRpbmc6MTBweDtcclxuICB9XHJcbn0iLCIuZmlsdGVyLWFjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uZmlsdGVyLWFjdGlvbiBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzVFMDlCO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMnB4IDE1cHg7XG59XG4uZmlsdGVyLWFjdGlvbiBidXR0b24uYWN0aXZlLCAuZmlsdGVyLWFjdGlvbiBidXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwNzcwQjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMXB4O1xufVxuXG4uZmlsdGVyLXRpdGxlIHtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3NTc1NzU7XG4gIG1hcmdpbjogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gIH1cblxuICAuY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDFweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gIH1cblxuICAuY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICB9XG5cbiAgLmNhcmQge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LaunchFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "spx-launch-filter",
                templateUrl: "./launch-filter.component.html",
                styleUrls: ["./launch-filter.component.scss"]
            }]
    }], function () { return []; }, { filters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["filters"]
        }], onFilterChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["filter-change"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/launch/launch.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/launch/launch.component.ts ***!
  \*******************************************************/
/*! exports provided: LaunchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaunchComponent", function() { return LaunchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function LaunchComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LaunchComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const id_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](id_r2);
} }
class LaunchComponent {
    constructor() {
        this.loading = true;
    }
    ngOnInit() {
    }
    onLoad() {
        this.loading = false;
    }
}
LaunchComponent.ɵfac = function LaunchComponent_Factory(t) { return new (t || LaunchComponent)(); };
LaunchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LaunchComponent, selectors: [["spx-launch"]], inputs: { launch: "launch" }, decls: 27, vars: 10, consts: [[1, "card"], [1, "img-container", "text-center"], ["style", "min-height:216px", 4, "ngIf"], [1, "card-img-top", 3, "hidden", "src", "load"], [1, "card-body"], [1, "card-title", "title-text", 3, "title"], [1, "mission-ids"], [4, "ngFor", "ngForOf"], [1, "value-text"], [2, "min-height", "216px"], ["src", "data:image/svg+xml;base64,PCEtLSBCeSBTYW0gSGVyYmVydCAoQHNoZXJiKSwgZm9yIGV2ZXJ5b25lLiBNb3JlIEAgaHR0cDovL2dvby5nbC83QUp6YkwgLS0+Cjxzdmcgd2lkdGg9IjM4IiBoZWlnaHQ9IjM4IiB2aWV3Qm94PSIwIDAgMzggMzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjguMDQyJSIgeTE9IjAlIiB4Mj0iNjUuNjgyJSIgeTI9IjIzLjg2NSUiIGlkPSJhIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwMCIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjAlIi8+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMDAiIHN0b3Atb3BhY2l0eT0iLjYzMSIgb2Zmc2V0PSI2My4xNDYlIi8+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMDAiIG9mZnNldD0iMTAwJSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMSkiPgogICAgICAgICAgICA8cGF0aCBkPSJNMzYgMThjMC05Ljk0LTguMDYtMTgtMTgtMTgiIGlkPSJPdmFsLTIiIHN0cm9rZT0idXJsKCNhKSIgc3Ryb2tlLXdpZHRoPSIyIj4KICAgICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtCiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIgogICAgICAgICAgICAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgICAgICAgICAgICBmcm9tPSIwIDE4IDE4IgogICAgICAgICAgICAgICAgICAgIHRvPSIzNjAgMTggMTgiCiAgICAgICAgICAgICAgICAgICAgZHVyPSIwLjlzIgogICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgICAgICAgICA8L3BhdGg+CiAgICAgICAgICAgIDxjaXJjbGUgZmlsbD0iIzAwMCIgY3g9IjM2IiBjeT0iMTgiIHI9IjEiPgogICAgICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0KICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iCiAgICAgICAgICAgICAgICAgICAgdHlwZT0icm90YXRlIgogICAgICAgICAgICAgICAgICAgIGZyb209IjAgMTggMTgiCiAgICAgICAgICAgICAgICAgICAgdG89IjM2MCAxOCAxOCIKICAgICAgICAgICAgICAgICAgICBkdXI9IjAuOXMiCiAgICAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICAgICAgICAgIDwvY2lyY2xlPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==", 2, "margin-top", "96px"]], template: function LaunchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LaunchComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function LaunchComponent_Template_img_load_3_listener() { return ctx.onLoad(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Mission ids:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LaunchComponent_li_11_Template, 3, 1, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Launch year:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Successful Launch:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Successful Landing:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.loading)("src", ctx.launch.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("alt", ctx.launch.missionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.launch.missionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.launch.missionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.launch.missionId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.launch.launchYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.launch.isSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.launch.launchLanding);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".card[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  margin: 20px;\n  background-color: #f2f2f2;\n}\n\n.title-text[_ngcontent-%COMP%] {\n  color: #485298;\n}\n\n.value-text[_ngcontent-%COMP%] {\n  color: #747cae;\n  margin-left: 5px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n\n.mission-ids[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n@media only screen and (max-width: 700px) {\n  body[_ngcontent-%COMP%] {\n    background-color: lightblue;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .card[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media only screen and (min-width: 701px) and (max-width: 1024px) {\n  body[_ngcontent-%COMP%] {\n    background-color: lightblue;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .card[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media only screen and (min-width: 1025px) {\n  body[_ngcontent-%COMP%] {\n    background-color: lightblue;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .card[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXVuY2gvRDpcXDIwMjBcXExlYXJuaW5nXFxTU1JcXDEvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxhdW5jaFxcbGF1bmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xhdW5jaC9sYXVuY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNFRjs7QURBQTtFQUNFLGNBQUE7QUNHRjs7QUREQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0lGOztBREZBO0VBQ0UsY0FBQTtBQ0tGOztBREhBO0VBQ0UsU0FBQTtBQ01GOztBREpBO0VBQ0U7SUFDRSwyQkFBQTtFQ09GOztFRExBO0lBQ0UsV0FBQTtFQ1FGO0VEUEU7SUFDRSxXQUFBO0VDU0o7QUFDRjs7QUROQTtFQUNFO0lBQ0UsMkJBQUE7RUNRRjs7RUROQTtJQUNFLFdBQUE7RUNTRjtFRFJFO0lBQ0UsV0FBQTtFQ1VKO0FBQ0Y7O0FEUEE7RUFDRTtJQUNFLDJCQUFBO0VDU0Y7O0VEUEE7SUFDRSxXQUFBO0VDVUY7RURURTtJQUNFLFdBQUE7RUNXSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXVuY2gvbGF1bmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5pbWctY29udGFpbmVyIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxufVxyXG4udGl0bGUtdGV4dCB7XHJcbiAgY29sb3I6ICM0ODUyOTg7XHJcbn1cclxuLnZhbHVlLXRleHQge1xyXG4gIGNvbG9yOiAjNzQ3Y2FlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLmNhcmQtYm9keSB7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbn1cclxuLm1pc3Npb24taWRzIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gIH1cclxuICAuY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5jYXJkLWltZy10b3Age1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDFweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gIH1cclxuICAuY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5jYXJkLWltZy10b3Age1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICB9XHJcbiAgLmNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAuY2FyZC1pbWctdG9wIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5jYXJkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1nLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxuLnRpdGxlLXRleHQge1xuICBjb2xvcjogIzQ4NTI5ODtcbn1cblxuLnZhbHVlLXRleHQge1xuICBjb2xvcjogIzc0N2NhZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4ubWlzc2lvbi1pZHMge1xuICBtYXJnaW46IDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICB9XG5cbiAgLmNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jYXJkIC5jYXJkLWltZy10b3Age1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY2FyZCAuY2FyZC1pbWctdG9wIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICB9XG5cbiAgLmNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jYXJkIC5jYXJkLWltZy10b3Age1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LaunchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'spx-launch',
                templateUrl: './launch.component.html',
                styleUrls: ['./launch.component.scss']
            }]
    }], function () { return []; }, { launch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["launch"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/launches/launches.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/launches/launches.component.ts ***!
  \***********************************************************/
/*! exports provided: LaunchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaunchesComponent", function() { return LaunchesComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _launch_launch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../launch/launch.component */ "./src/app/components/launch/launch.component.ts");







function LaunchesComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "spx-launch", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const launch_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("launch", launch_r1);
} }
class LaunchesComponent {
    constructor(platformId) {
        this.limitUpper = 15;
        this.offsetHeight = 20;
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(platformId);
    }
    ngOnInit() {
        if (this.isBrowser) {
            const scroll$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, "scroll").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300));
            const el = document.querySelector("body");
            scroll$.subscribe(e => {
                if (this.hasReachedBottom()) {
                    this.limitUpper = Math.min(this.limitUpper + 10, 100);
                }
            });
            this.launches$.subscribe(() => {
                this.limitUpper = 15;
            });
        }
    }
    hasReachedBottom() {
        let docEle = document.documentElement;
        return (Math.ceil(docEle.scrollTop + docEle.clientHeight + this.offsetHeight) >=
            Math.ceil(docEle.scrollHeight));
    }
}
LaunchesComponent.ɵfac = function LaunchesComponent_Factory(t) { return new (t || LaunchesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])); };
LaunchesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LaunchesComponent, selectors: [["spx-launches"]], inputs: { launches$: ["launches", "launches$"] }, decls: 4, vars: 7, consts: [[1, "flex-container", "wrap"], [4, "ngFor", "ngForOf"], [1, "d-flex", "launch-item", "flex-item", "has-right-margin", 3, "launch"]], template: function LaunchesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LaunchesComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, ctx.launches$), 0, ctx.limitUpper));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _launch_launch_component__WEBPACK_IMPORTED_MODULE_4__["LaunchComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["AsyncPipe"]], styles: [".flex-container[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  -ms-box-orient: horizontal;\n  display: -moz-flex;\n  display: flex;\n}\n\n.nowrap[_ngcontent-%COMP%] {\n  flex-wrap: nowrap;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n.wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: gold;\n}\n\n.wrap-reverse[_ngcontent-%COMP%] {\n  flex-wrap: wrap-reverse;\n}\n\n@media only screen and (max-width: 700px) {\n  body[_ngcontent-%COMP%] {\n    background-color: lightblue;\n  }\n\n  .has-right-margin[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-top: 10px;\n  }\n\n  .flex-item[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media only screen and (min-width: 701px) and (max-width: 1024px) {\n  body[_ngcontent-%COMP%] {\n    background-color: lightblue;\n  }\n\n  .has-right-margin[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    margin-top: 10px;\n  }\n\n  .flex-item[_ngcontent-%COMP%] {\n    width: calc(100% * (1 / 2) - 10px - 1px);\n  }\n}\n\n@media only screen and (min-width: 1025px) {\n  body[_ngcontent-%COMP%] {\n    background-color: lightblue;\n  }\n\n  .has-right-margin[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    margin-top: 10px;\n  }\n\n  .flex-item[_ngcontent-%COMP%] {\n    width: calc(100% * (1 / 4) - 10px - 1px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXVuY2hlcy9EOlxcMjAyMFxcTGVhcm5pbmdcXFNTUlxcMS9zcmNcXGFwcFxcY29tcG9uZW50c1xcbGF1bmNoZXNcXGxhdW5jaGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xhdW5jaGVzL2xhdW5jaGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUVBLDBCQUFBO0VBSUEsa0JBQUE7RUFFQSxhQUFBO0FDQUY7O0FER0E7RUFFRSxpQkFBQTtBQ0FGOztBREdBO0VBRUUsZUFBQTtBQ0FGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUVFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLDJCQUFBO0VDQ0Y7O0VEQ0E7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUNFRjs7RURBQTtJQUNFLFdBQUE7RUNHRjtBQUNGOztBRERBO0VBQ0U7SUFDRSwyQkFBQTtFQ0dGOztFRERBO0lBQ0Usa0JBQUE7SUFDQSxnQkFBQTtFQ0lGOztFREZBO0lBQ0Usd0NBQUE7RUNLRjtBQUNGOztBREhBO0VBQ0U7SUFDRSwyQkFBQTtFQ0tGOztFREhBO0lBQ0Usa0JBQUE7SUFDQSxnQkFBQTtFQ01GOztFREpBO0lBQ0Usd0NBQUE7RUNPRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXVuY2hlcy9sYXVuY2hlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCBzaWx2ZXI7XHJcbiAgLW1zLWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubm93cmFwIHtcclxuICAtd2Via2l0LWZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG59XHJcblxyXG4ud3JhcCB7XHJcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbi53cmFwIGxpIHtcclxuICBiYWNrZ3JvdW5kOiBnb2xkO1xyXG59XHJcblxyXG4ud3JhcC1yZXZlcnNlIHtcclxuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xyXG4gIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgfVxyXG4gIC5oYXMtcmlnaHQtbWFyZ2luIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC5mbGV4LWl0ZW0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAxcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICB9XHJcbiAgLmhhcy1yaWdodC1tYXJnaW4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgLmZsZXgtaXRlbSB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlICogKDEgLyAyKSAtIDEwcHggLSAxcHgpO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gIH1cclxuICAuaGFzLXJpZ2h0LW1hcmdpbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICAuZmxleC1pdGVtIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKiAoMSAvIDQpIC0gMTBweCAtIDFweCk7XHJcbiAgfVxyXG59XHJcbiIsIi5mbGV4LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgLW1zLWJveC1vcmllbnQ6IGhvcml6b250YWw7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC1tb3otZmxleDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubm93cmFwIHtcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG5cbi53cmFwIHtcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLndyYXAgbGkge1xuICBiYWNrZ3JvdW5kOiBnb2xkO1xufVxuXG4ud3JhcC1yZXZlcnNlIHtcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcbiAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICB9XG5cbiAgLmhhcy1yaWdodC1tYXJnaW4ge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5cbiAgLmZsZXgtaXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAxcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICB9XG5cbiAgLmhhcy1yaWdodC1tYXJnaW4ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5cbiAgLmZsZXgtaXRlbSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAqICgxIC8gMikgLSAxMHB4IC0gMXB4KTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICB9XG5cbiAgLmhhcy1yaWdodC1tYXJnaW4ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5cbiAgLmZsZXgtaXRlbSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAqICgxIC8gNCkgLSAxMHB4IC0gMXB4KTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LaunchesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "spx-launches",
                templateUrl: "./launches.component.html",
                styleUrls: ["./launches.component.scss"]
            }]
    }], function () { return [{ type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }] }]; }, { launches$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ["launches"]
        }] }); })();


/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");





const routes = [{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_actions_home_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/actions/home.actions */ "./src/app/home/store/actions/home.actions.ts");
/* harmony import */ var _store_selectors_home_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/selectors/home.selectors */ "./src/app/home/store/selectors/home.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/home.service */ "./src/app/home/services/home.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_launch_filter_launch_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/launch-filter/launch-filter.component */ "./src/app/components/launch-filter/launch-filter.component.ts");
/* harmony import */ var _components_launches_launches_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/launches/launches.component */ "./src/app/components/launches/launches.component.ts");









function HomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No records found\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error in loading Records");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(store, homeService) {
        this.store = store;
        this.homeService = homeService;
        this.limit = 100;
        this.filters = {};
        this.rowData$ = this.store.select(_store_selectors_home_selectors__WEBPACK_IMPORTED_MODULE_2__["selectMissionWithFilter"]);
        this.error$ = this.store.select(_store_selectors_home_selectors__WEBPACK_IMPORTED_MODULE_2__["selectErrorStatus"]);
        this.selectLoading$ = this.store.select(_store_selectors_home_selectors__WEBPACK_IMPORTED_MODULE_2__["selectMissionLoading"]);
        this.filters = this.homeService.getState();
        console.log(this.filters);
    }
    ngOnInit() {
        this.dispatchLoadMission();
    }
    dispatchLoadMission() {
        this.store.dispatch(Object(_store_actions_home_actions__WEBPACK_IMPORTED_MODULE_1__["loadHomes"])(Object.assign(Object.assign({}, this.filters), { limit: this.limit })));
    }
    onFilterChange(filters) {
        this.filters = filters;
        this.store.dispatch(Object(_store_actions_home_actions__WEBPACK_IMPORTED_MODULE_1__["setHomeFilter"])({
            filterText: `${this.filters.launch}${this.filters.land}${this.filters.year}`
        }));
        this.dispatchLoadMission();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 16, vars: 17, consts: [["class", "text-center loader", 4, "ngIf"], [1, "clearfix"], [1, "filter", "float-sm-left"], [1, "filter"], [3, "filters", "filter-change"], [1, "mission", "float-sm-right"], [3, "launches"], ["class", "no-record-found", 4, "ngIf"], ["class", "error-in-records", 4, "ngIf"], [1, "text-center", "loader"], ["role", "status", 1, "spinner-border", "text-info"], [1, "sr-only"], [1, "no-record-found"], [1, "error-in-records"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "spx-launch-filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter-change", function HomeComponent_Template_spx_launch_filter_filter_change_5_listener($event) { return ctx.onFilterChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "spx-launches", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_div_9_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_div_13_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
    } if (rf & 2) {
        var tmp_3_0 = null;
        const currVal_3 = ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, ctx.rowData$)) == null ? null : tmp_3_0.length) == 0 && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, ctx.selectLoading$) && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 11, ctx.error$);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 5, ctx.selectLoading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filters", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("launches", ctx.rowData$);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 13, ctx.error$) && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 15, ctx.selectLoading$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_launch_filter_launch_filter_component__WEBPACK_IMPORTED_MODULE_6__["LaunchFilterComponent"], _components_launches_launches_component__WEBPACK_IMPORTED_MODULE_7__["LaunchesComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".loader[_ngcontent-%COMP%] {\n  top: calc(50% - 20px);\n  position: absolute;\n  left: calc(50% - 20px);\n  z-index: 100;\n}\n\n.error-in-records[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n}\n\n@media only screen and (max-width: 700px) {\n  body[_ngcontent-%COMP%] {\n    background-color: lightblue;\n  }\n\n  .filter[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .mission[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .no-record-found[_ngcontent-%COMP%], .error-in-records[_ngcontent-%COMP%] {\n    margin: auto;\n    margin-top: 20px;\n    text-align: center;\n  }\n}\n\n@media only screen and (min-width: 701px) and (max-width: 1024px) {\n  body[_ngcontent-%COMP%] {\n    background-color: lightblue;\n  }\n\n  .filter[_ngcontent-%COMP%] {\n    width: 180px;\n  }\n\n  .mission[_ngcontent-%COMP%] {\n    width: calc(100vw - 225px);\n  }\n\n  .no-record-found[_ngcontent-%COMP%], .error-in-records[_ngcontent-%COMP%] {\n    position: absolute;\n    text-align: center;\n    top: calc(50vh - 20px);\n    left: calc(50vw - 20px);\n  }\n}\n\n@media only screen and (min-width: 1025px) {\n  body[_ngcontent-%COMP%] {\n    background-color: lightblue;\n  }\n\n  .filter[_ngcontent-%COMP%] {\n    width: 180px;\n  }\n\n  .mission[_ngcontent-%COMP%] {\n    width: calc(100vw - 250px);\n  }\n\n  .no-record-found[_ngcontent-%COMP%], .error-in-records[_ngcontent-%COMP%] {\n    position: absolute;\n    text-align: center;\n    top: calc(50vh - 20px);\n    left: calc(50vw - 20px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcMjAyMFxcTGVhcm5pbmdcXFNTUlxcMS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVFO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FER0E7RUFDRTtJQUNFLDJCQUFBO0VDQUY7O0VERUE7SUFDRSxXQUFBO0VDQ0Y7O0VEQ0E7SUFDRSxXQUFBO0VDRUY7O0VEQUE7O0lBRUUsWUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RUNHRjtBQUNGOztBRERBO0VBQ0U7SUFDRSwyQkFBQTtFQ0dGOztFRERBO0lBQ0UsWUFBQTtFQ0lGOztFREZBO0lBQ0UsMEJBQUE7RUNLRjs7RURIQTs7SUFFRSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtFQ01GO0FBQ0Y7O0FESkE7RUFDRTtJQUNFLDJCQUFBO0VDTUY7O0VESkE7SUFDRSxZQUFBO0VDT0Y7O0VETEE7SUFDRSwwQkFBQTtFQ1FGOztFRE5BOztJQUVFLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0VDU0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXIge1xyXG4gIHRvcDogY2FsYyg1MCUgLSAyMHB4KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSAyMHB4KTtcclxuICB6LWluZGV4OiAxMDA7XHJcbn1cclxuLmVycm9yLWluLXJlY29yZHMge1xyXG4gIHNwYW4ge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gIH1cclxuICAuZmlsdGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAubWlzc2lvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLm5vLXJlY29yZC1mb3VuZCxcclxuICAuZXJyb3ItaW4tcmVjb3JkcyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgfVxyXG4gIC5maWx0ZXIge1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gIH1cclxuICAubWlzc2lvbiB7XHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDIyNXB4KTtcclxuICB9XHJcbiAgLm5vLXJlY29yZC1mb3VuZCxcclxuICAuZXJyb3ItaW4tcmVjb3JkcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0b3A6IGNhbGMoNTB2aCAtIDIwcHgpO1xyXG4gICAgbGVmdDogY2FsYyg1MHZ3IC0gMjBweCk7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgfVxyXG4gIC5maWx0ZXIge1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gIH1cclxuICAubWlzc2lvbiB7XHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDI1MHB4KTtcclxuICB9XHJcbiAgLm5vLXJlY29yZC1mb3VuZCxcclxuICAuZXJyb3ItaW4tcmVjb3JkcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0b3A6IGNhbGMoNTB2aCAtIDIwcHgpO1xyXG4gICAgbGVmdDogY2FsYyg1MHZ3IC0gMjBweCk7XHJcbiAgfVxyXG59XHJcbiIsIi5sb2FkZXIge1xuICB0b3A6IGNhbGMoNTAlIC0gMjBweCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogY2FsYyg1MCUgLSAyMHB4KTtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uZXJyb3ItaW4tcmVjb3JkcyBzcGFuIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICB9XG5cbiAgLmZpbHRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubWlzc2lvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubm8tcmVjb3JkLWZvdW5kLFxuLmVycm9yLWluLXJlY29yZHMge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDFweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gIH1cblxuICAuZmlsdGVyIHtcbiAgICB3aWR0aDogMTgwcHg7XG4gIH1cblxuICAubWlzc2lvbiB7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyMjVweCk7XG4gIH1cblxuICAubm8tcmVjb3JkLWZvdW5kLFxuLmVycm9yLWluLXJlY29yZHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdG9wOiBjYWxjKDUwdmggLSAyMHB4KTtcbiAgICBsZWZ0OiBjYWxjKDUwdncgLSAyMHB4KTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICB9XG5cbiAgLmZpbHRlciB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG5cbiAgLm1pc3Npb24ge1xuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjUwcHgpO1xuICB9XG5cbiAgLm5vLXJlY29yZC1mb3VuZCxcbi5lcnJvci1pbi1yZWNvcmRzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRvcDogY2FsYyg1MHZoIC0gMjBweCk7XG4gICAgbGVmdDogY2FsYyg1MHZ3IC0gMjBweCk7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-home",
                templateUrl: "./home.component.html",
                styleUrls: ["./home.component.scss"]
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _services_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/reducers/home.reducer */ "./src/app/home/store/reducers/home.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _store_effects_home_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/effects/home.effects */ "./src/app/home/store/effects/home.effects.ts");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/home.service */ "./src/app/home/services/home.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/component.module */ "./src/app/components/component.module.ts");















class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, providers: [_services_home_service__WEBPACK_IMPORTED_MODULE_8__["HomeService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
            // ng generate @ngrx/schematics:feature home/store/Home -m home/home.module.ts --group
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature(_store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_5__["homeFeatureKey"], _store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_5__["reducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_store_effects_home_effects__WEBPACK_IMPORTED_MODULE_7__["HomeEffects"]]),
            _components_component_module__WEBPACK_IMPORTED_MODULE_11__["CommonComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsFeatureModule"], _components_component_module__WEBPACK_IMPORTED_MODULE_11__["CommonComponentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [_services_home_service__WEBPACK_IMPORTED_MODULE_8__["HomeService"]],
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
                    // ng generate @ngrx/schematics:feature home/store/Home -m home/home.module.ts --group
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature(_store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_5__["homeFeatureKey"], _store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_5__["reducer"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_store_effects_home_effects__WEBPACK_IMPORTED_MODULE_7__["HomeEffects"]]),
                    _components_component_module__WEBPACK_IMPORTED_MODULE_11__["CommonComponentsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
                ],
                entryComponents: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/services/home.service.ts":
/*!***********************************************!*\
  !*** ./src/app/home/services/home.service.ts ***!
  \***********************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_session_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/session-storage */ "./src/app/services/session-storage.ts");








class HomeService {
    constructor(http, sessionStorage) {
        this.http = http;
        this.sessionStorage = sessionStorage;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
        this.hydratedState = "FILTER_STATE";
    }
    getCaurses(pageSize = 10, launch, land, year) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.append("limit", pageSize.toString());
        if (launch != undefined) {
            params = params.append("launch_success", launch.toString());
        }
        if (land != undefined) {
            params = params.append("land_success", land.toString());
        }
        if (year != undefined) {
            params = params.append("launch_year", year.toString());
        }
        return this.http.get(`${this.url}`, { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((launches) => {
            return launches.map(launch => {
                return this.mapToUIModel(launch, land);
            });
        }));
    }
    mapToUIModel(launch, land) {
        return {
            missionId: launch.mission_id,
            missionName: launch.mission_name,
            isSuccess: launch.launch_success,
            launchYear: launch.launch_year,
            icon: launch.links.mission_patch_small,
            launchLanding: Boolean(land || launch.launch_landing)
        };
    }
    saveCourse(course) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(course).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000));
    }
    editCourse(course) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(course).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000));
    }
    hydarateFilter(filter) {
        let { launch, land, year } = filter;
        this.sessionStorage.setItem(this.hydratedState, JSON.stringify({ launch, land, year }));
    }
    getState() {
        let sessionFilter = this.sessionStorage.getItem(this.hydratedState);
        let sessionFilterJSON = {};
        try {
            sessionFilterJSON = JSON.parse(sessionFilter);
        }
        catch (_a) { }
        return sessionFilterJSON;
    }
}
HomeService.ɵfac = function HomeService_Factory(t) { return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_session_storage__WEBPACK_IMPORTED_MODULE_5__["SessionStorageService"])); };
HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeService, factory: HomeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: src_app_services_session_storage__WEBPACK_IMPORTED_MODULE_5__["SessionStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/store/actions/home.actions.ts":
/*!****************************************************!*\
  !*** ./src/app/home/store/actions/home.actions.ts ***!
  \****************************************************/
/*! exports provided: loadHomes, loadHomesSuccess, loadHomesFailure, setHomeFilter, resetLoadingStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHomes", function() { return loadHomes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHomesSuccess", function() { return loadHomesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHomesFailure", function() { return loadHomesFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHomeFilter", function() { return setHomeFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetLoadingStatus", function() { return resetLoadingStatus; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const loadHomes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Missions] Load Missions", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadHomesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Missions] Load Missions Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadHomesFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Missions] Load Missions Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setHomeFilter = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Missions] Set Missions Filters", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const resetLoadingStatus = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Missions] Reset Loading Status");


/***/ }),

/***/ "./src/app/home/store/effects/home.effects.ts":
/*!****************************************************!*\
  !*** ./src/app/home/store/effects/home.effects.ts ***!
  \****************************************************/
/*! exports provided: HomeEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeEffects", function() { return HomeEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _actions_home_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/home.actions */ "./src/app/home/store/actions/home.actions.ts");
/* harmony import */ var _selectors_home_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../selectors/home.selectors */ "./src/app/home/store/selectors/home.selectors.ts");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/home.service */ "./src/app/home/services/home.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");











class HomeEffects {
    constructor(actions$, homeService, store) {
        this.actions$ = actions$;
        this.homeService = homeService;
        this.store = store;
        this.loadMissions$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            let actionData = {
                land: undefined,
                launch: undefined,
                limit: undefined,
                year: undefined
            };
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_home_actions__WEBPACK_IMPORTED_MODULE_4__["loadHomes"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(action => {
                actionData = action;
                this.homeService.hydarateFilter(action);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.store.select(_selectors_home_selectors__WEBPACK_IMPORTED_MODULE_5__["selectMissionWithFilter"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(([_, mission]) => {
                let status = !mission.length;
                !status && this.store.dispatch(Object(_actions_home_actions__WEBPACK_IMPORTED_MODULE_4__["resetLoadingStatus"])());
                return status;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(() => {
                return this.homeService
                    .getCaurses(actionData.limit, actionData.launch, actionData.land, actionData.year)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(missions => {
                    let { land, launch, limit, year } = Object.assign({}, actionData);
                    let filters = { land, launch, limit, year };
                    return _actions_home_actions__WEBPACK_IMPORTED_MODULE_4__["loadHomesSuccess"]({ missions, filters });
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
                    console.log(error);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_home_actions__WEBPACK_IMPORTED_MODULE_4__["loadHomesFailure"]({ error }));
                }));
            }));
        });
    }
}
HomeEffects.ɵfac = function HomeEffects_Factory(t) { return new (t || HomeEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_home_service__WEBPACK_IMPORTED_MODULE_6__["HomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"])); };
HomeEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeEffects, factory: HomeEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_home_service__WEBPACK_IMPORTED_MODULE_6__["HomeService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/store/reducers/home.reducer.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/store/reducers/home.reducer.ts ***!
  \*****************************************************/
/*! exports provided: homeFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeFeatureKey", function() { return homeFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _actions_home_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/home.actions */ "./src/app/home/store/actions/home.actions.ts");


const homeFeatureKey = "home";
const initialState = {
    loading: false,
    list: [],
    error: null,
    filterText: ""
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_home_actions__WEBPACK_IMPORTED_MODULE_1__["loadHomes"], state => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_home_actions__WEBPACK_IMPORTED_MODULE_1__["loadHomesSuccess"], (state, action) => {
    let newList = formatMission(state.list, action);
    let actionfilters = action.filters;
    let filterText = `${actionfilters.launch}${actionfilters.land}${actionfilters.year}`;
    return Object.assign(Object.assign({}, state), { loading: false, filterText, list: newList, error: null });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_home_actions__WEBPACK_IMPORTED_MODULE_1__["loadHomesFailure"], (state, action) => {
    return Object.assign(Object.assign({}, state), { error: action.error, loading: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_home_actions__WEBPACK_IMPORTED_MODULE_1__["resetLoadingStatus"], state => {
    return Object.assign(Object.assign({}, state), { loading: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_home_actions__WEBPACK_IMPORTED_MODULE_1__["setHomeFilter"], (state, action) => {
    return Object.assign(Object.assign({}, state), { filterText: action.filterText });
}));
function formatMission(list, action) {
    let actionfilters = action.filters;
    let filterText = `${actionfilters.launch}${actionfilters.land}${actionfilters.year}`;
    let newList = list;
    let newitem = {
        filterText,
        list: action.missions
    };
    if (!list.find(item => {
        return item.filterText === filterText;
    })) {
        newList = [...newList, newitem];
    }
    if (list.length == 0) {
        newList = [newitem];
    }
    return newList;
}


/***/ }),

/***/ "./src/app/home/store/selectors/home.selectors.ts":
/*!********************************************************!*\
  !*** ./src/app/home/store/selectors/home.selectors.ts ***!
  \********************************************************/
/*! exports provided: selectHomeState, selectMissionLoading, selectErrorStatus, selectMission, selectMissionWithFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectHomeState", function() { return selectHomeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMissionLoading", function() { return selectMissionLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectErrorStatus", function() { return selectErrorStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMission", function() { return selectMission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMissionWithFilter", function() { return selectMissionWithFilter; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _reducers_home_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/home.reducer */ "./src/app/home/store/reducers/home.reducer.ts");


const selectHomeState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_1__["homeFeatureKey"]);
const selectMissionLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectHomeState, state => {
    return state.loading;
});
const selectErrorStatus = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectHomeState, state => {
    return state.error;
});
const selectMission = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectHomeState, state => {
    return state.list;
});
const selectMissionWithFilter = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectHomeState, state => {
    let list = state.list.find((item) => {
        return item.filterText === state.filterText;
    });
    return list ? list.list : [];
});


/***/ }),

/***/ "./src/app/services/session-storage.ts":
/*!*********************************************!*\
  !*** ./src/app/services/session-storage.ts ***!
  \*********************************************/
/*! exports provided: SessionStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionStorageService", function() { return SessionStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");



class SessionStorage {
    clear() { }
    getItem(key) { return undefined; }
    key(index) { return undefined; }
    removeItem(key) { }
    setItem(key, value) { }
}
class SessionStorageService {
    constructor() {
        this.storage = new SessionStorage();
        _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"].isBrowser.subscribe(isBrowser => {
            if (isBrowser) {
                this.storage = sessionStorage;
            }
        });
    }
    clear() {
        this.storage.clear();
    }
    getItem(key) {
        return this.storage.getItem(key);
    }
    key(index) {
        return this.storage.key(index);
    }
    removeItem(key) {
        return this.storage.removeItem(key);
    }
    setItem(key, value) {
        return this.storage.setItem(key, value);
    }
}
SessionStorageService.ɵfac = function SessionStorageService_Factory(t) { return new (t || SessionStorageService)(); };
SessionStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SessionStorageService, factory: SessionStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map