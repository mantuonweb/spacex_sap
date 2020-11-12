import { createAction, props } from '@ngrx/store';

export const doLogin = createAction(
  '[Login] Do Login'
);

export const doLoginsSuccess = createAction(
  '[Login] Load Do Success',
  props<{ userData: any }>()
);

export const doLoginsFailure = createAction(
  '[Login] Load Do Failure',
  props<{ error: any }>()
);
