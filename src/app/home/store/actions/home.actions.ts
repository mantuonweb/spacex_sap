import { createAction, props } from "@ngrx/store";

export const loadHomes = createAction(
  "[Missions] Load Missions",
  props<{ year: number; land: boolean; launch: boolean; limit: number }>()
);

export const loadHomesSuccess = createAction(
  "[Missions] Load Missions Success",
  props<{ missions: any; filters: any }>()
);

export const loadHomesFailure = createAction(
  "[Missions] Load Missions Failure",
  props<{ error: any }>()
);
export const setHomeFilter = createAction(
  "[Missions] Set Missions Filters",
  props<{ filterText: string }>()
);
export const resetLoadingStatus = createAction(
  "[Missions] Reset Loading Status"
);
