export const AUTHENTICATE = 'AUTHENTICATE';
export const AUTHENTICATE_ERROR_AUTH = 'AUTHENTICATE_ERROR_AUTH';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function auth({ name, avatar, uid }) {
  return {
    type: AUTHENTICATE,
    user: { name, avatar, uid }
  };
}
export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  };
}
export function loginError() {
  return {
    type: LOGIN_ERROR
  };
}

export function authError(error) {
  return {
    type: AUTHENTICATE_ERROR_AUTH,
    error
  };
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    getFirebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: 'SIGNOUT-SUCCESS' });
      });
  };
};
