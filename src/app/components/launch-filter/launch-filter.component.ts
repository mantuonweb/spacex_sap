import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "spx-launch-filter",
  templateUrl: "./launch-filter.component.html",
  styleUrls: ["./launch-filter.component.scss"]
})
export class LaunchFilterComponent implements OnInit {
  years = [];
  isSuccessful;
  year;
  isLand;
  @Input("filters") filters = {
    year: undefined,
    land: undefined,
    launch: undefined
  };
  @Output("filter-change") onFilterChange = new EventEmitter<any>();
  constructor() {
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
    } else {
      this.year = year;
    }
    this.filters = {
      ...this.filters,
      year: this.year
    };
    this.onFilterChange.emit(this.filters);
  }
  onSuccessfulLaunch(isSuccessful) {
    if (isSuccessful === this.isSuccessful) {
      this.isSuccessful = undefined;
    } else {
      this.isSuccessful = isSuccessful;
    }
    this.filters = {
      ...this.filters,
      launch: this.isSuccessful
    };
    this.onFilterChange.emit(this.filters);
  }
  onSuccessfulLand(isLand) {
    if (isLand === this.isLand) {
      this.isLand = undefined;
    } else {
      this.isLand = isLand;
    }
    this.filters = {
      ...this.filters,
      land: this.isLand
    };
    this.onFilterChange.emit(this.filters);
  }
  isYearActive(year) {
    return this.year === year;
  }
}
