import { Action, createReducer, on } from '@ngrx/store';
import { AppState } from '../../../store/reducers';
import * as LoginActions from '../actions/login.actions';

export const loginFeatureKey = 'login';

export interface State extends AppState {
  userData?: any;
  error?:any;
}

export const initialState: State = {
  userData: null,
};


export const reducer = createReducer(
  initialState,

  on(LoginActions.doLogin, state => state),
  on(LoginActions.doLoginsSuccess, (state, action) => {
   return {
    ...state,
    userData:action.userData
   }
  }),
  on(LoginActions.doLoginsFailure, (state, action) => {
    return {
      ...state,
      error:action.error
    }
  }),

);

