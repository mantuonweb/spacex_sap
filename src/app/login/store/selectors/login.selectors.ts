import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLogin from '../reducers/login.reducer';

export const selectLoginState = createFeatureSelector<fromLogin.State>(
  fromLogin.loginFeatureKey
);

export const selectLoginUser = createSelector(
  selectLoginState,
  state => {
    return state.userData;
  }
);

export const selectIsLoggedIn = createSelector(selectLoginUser, user => {
  return Boolean(user);
})
