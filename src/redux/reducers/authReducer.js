import {
  AUTHENTICATE_ERROR_AUTH,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT
} from '../actions/authActions';
import { history } from '../store';

const initialState = {
  name: 'User',
  avatar: '',
  uid: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        avatar: action.payload.avatar,
        uid: action.payload.uid
      };
    case LOGIN_ERROR:
      return { error: action.payload.error };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
