import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  catchError,
  map,
  withLatestFrom,
  filter,
  exhaustMap,
  tap
} from "rxjs/operators";
import { of } from "rxjs";

import * as HomeActions from "../actions/home.actions";
import { HomeService } from "../../services/home.service";
import { State } from "../reducers/home.reducer";
import { Store } from "@ngrx/store";
import { selectMissionWithFilter } from "../selectors/home.selectors";
import { resetLoadingStatus } from "../actions/home.actions";

@Injectable()
export class HomeEffects {
  loadMissions$ = createEffect(() => {
    let actionData = {
      land: undefined,
      launch: undefined,
      limit: undefined,
      year: undefined
    };
    return this.actions$.pipe(
      ofType(HomeActions.loadHomes),
      tap(action => {
        actionData = action;
      }),
      withLatestFrom(this.store.select(selectMissionWithFilter)),
      filter(([_, mission]) => {
        let status = !mission.length;
        !status && this.store.dispatch(resetLoadingStatus());
        return status;
      }),
      exhaustMap(() => {
        return this.homeService
          .getCaurses(
            actionData.limit,
            actionData.launch,
            actionData.land,
            actionData.year
          )
          .pipe(
            map(missions => {
              let { land, launch, limit, year } = { ...actionData };
              let filters = { land, launch, limit, year };
              return HomeActions.loadHomesSuccess({ missions, filters });
            }),
            catchError(error => {
              console.log(error);
              return of(HomeActions.loadHomesFailure({ error }));
            })
          );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private homeService: HomeService,
    private store: Store<State>
  ) {}
}
