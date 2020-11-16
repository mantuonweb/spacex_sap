import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromHome from "../reducers/home.reducer";

export const selectHomeState = createFeatureSelector<fromHome.State>(
  fromHome.homeFeatureKey
);

export const selectMissionLoading = createSelector(
  selectHomeState,
  state => {
    return state.loading;
  }
);
export const selectErrorStatus = createSelector(
  selectHomeState,
  state => {
    return state.error;
  }
);
export const selectMission = createSelector(
  selectHomeState,
  state => {
    return state.list;
  }
);
export const selectMissionWithFilter = createSelector(
  selectHomeState,
  state => {
    let list = state.list.find((item: any) => {
      return item.filterText === state.filterText;
    });
    return list ? list.list : [];
  }
);

export const getSelectedMission = createSelector(
  selectHomeState,
  state => {
    let list = state.list.find((item: any) => {
      return item.filterText === state.filterText;
    });
    let tlist = list ? list.list : [];
    return tlist.find(item=>item.guid === state.selectedMission);
  }
);
