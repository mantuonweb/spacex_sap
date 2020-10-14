import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadHomes, setHomeFilter } from "./store/actions/home.actions";
import { State } from "./store/reducers/home.reducer";
import {
  selectMissionWithFilter,
  selectMissionLoading,
  selectErrorStatus
} from "./store/selectors/home.selectors";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  limit = 100;
  filters: any = {};
  rowData$;
  selectLoading$;
  error$;
  constructor(private store: Store<State>) {
    this.rowData$ = this.store.select(selectMissionWithFilter);
    this.error$ = this.store.select(selectErrorStatus);
    this.selectLoading$ = this.store.select(selectMissionLoading);
  }
  ngOnInit(): void {
    this.dispatchLoadMission();
  }
  dispatchLoadMission() {
    this.store.dispatch(
      loadHomes({
        ...this.filters,
        limit: this.limit
      })
    );
  }
  onFilterChange(filters) {
    this.filters = filters;
    this.store.dispatch(
      setHomeFilter({
        filterText: `${this.filters.launch}${this.filters.land}${
          this.filters.year
        }`
      })
    );
    this.dispatchLoadMission();
  }
}
