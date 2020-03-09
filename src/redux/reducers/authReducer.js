import {
  LOGIN_USER_ERROR,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
  LOGOUT
} from '../actions/authActions';

const initialState = {
  name: '',
  custId: null,
  uid: null,
  loading: false,
  error: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_LOADING:
      return { loading: true };
    case LOGIN_USER_SUCCESS:
      return {
        name: action.payload.name,
        avatar: action.payload.avatar,
        uid: action.payload.uid,
        loading: false
      };
    case LOGIN_USER_ERROR:
      return { error: action.error };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
