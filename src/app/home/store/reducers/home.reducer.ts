import { createReducer, on } from "@ngrx/store";
import { AppState } from "./../../../store/reducers";
import * as HomeActions from "../actions/home.actions";

export const homeFeatureKey = "home";
export interface Missions {
  filter: string;
  list: Array<any>;
}
export interface State extends AppState {
  loading?: boolean;
  filterText?: string;
  error: any;
  list: Array<Missions>;
}

export const initialState: State = {
  loading: false,
  list: [],
  error: null,
  filterText: ""
};

export const reducer = createReducer(
  initialState,

  on(HomeActions.loadHomes, state => {
    return {
      ...state,
      loading: true
    };
  }),
  on(HomeActions.loadHomesSuccess, (state, action) => {
    let newList = formatMission(state.list, action);
    let actionfilters = action.filters;
    let filterText = `${actionfilters.launch}${actionfilters.land}${
      actionfilters.year
    }`;
    return {
      ...state,
      loading: false,
      filterText,
      list: newList,
      error: null
    };
  }),
  on(HomeActions.loadHomesFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      loading: false
    };
  }),
  on(HomeActions.resetLoadingStatus, state => {
    return {
      ...state,
      loading: false
    };
  }),
  on(HomeActions.setHomeFilter, (state, action) => {
    return {
      ...state,
      filterText: action.filterText
    };
  })
);

function formatMission(list, action) {
  let actionfilters = action.filters;
  let filterText = `${actionfilters.launch}${actionfilters.land}${
    actionfilters.year
  }`;
  let newList = list;
  let newitem = {
    filterText,
    list: action.missions
  };
  if (
    !list.find(item => {
      return item.filterText === filterText;
    })
  ) {
    newList = [...newList, newitem];
  }
  if (list.length == 0) {
    newList = [newitem];
  }
  return newList;
}
