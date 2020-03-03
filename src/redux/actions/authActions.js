export const AUTHENTICATE_ERROR_AUTH = 'AUTHENTICATE_ERROR_AUTH';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

export const loginSuccess = response => {
  return {
    type: LOGIN_SUCCESS,
    payload: response
  };
};
export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    payload: error
  };
}

export function authError(error) {
  return {
    type: AUTHENTICATE_ERROR_AUTH,
    error
  };
}

export const signOutUser = () => {
  return {
    type: LOGOUT
  };
};
