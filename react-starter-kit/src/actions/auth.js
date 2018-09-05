/* eslint-disable import/prefer-default-export */

import _ from 'lodash';

import {
  LOGOUT_AUTH,
  LOGOUT_AUTH_SUCCESS,
  LOGOUT_AUTH_FAIL,
  SAVE_AUTH,
} from '../constants';

export function isAuthLoaded(globalState) {
  return globalState.auth && !_.isEmpty(globalState.auth.user);
}

export function logout() {
  return {
    types: [LOGOUT_AUTH, LOGOUT_AUTH_SUCCESS, LOGOUT_AUTH_FAIL],
    promise: fetch =>
      fetch('/api/auth/logout', {
        method: 'POST',
      }),
  };
}

export function saveAuth(user) {
  return {
    type: SAVE_AUTH,
    payload: user,
  };
}

export function loadAuth() {
  return async (dispatch, getState, { fetch }) =>
    fetch('/api/auth', {
      method: 'GET',
    })
      .then(res =>
        res.json().then(resJson => {
          if (!res.ok) {
            throw new Error(resJson);
          }
          return resJson;
        }),
      )
      .catch(console.error)
      .then(user => !_.isEmpty(user) && dispatch(saveAuth(user)));
}
