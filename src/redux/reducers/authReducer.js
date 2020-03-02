import { AUTHENTICATE, AUTHENTICATE_ERROR_AUTH } from '../actions/authActions';
import { history } from '../store';

const initialState = {
  name: 'Ashfaq Nisar',
  avatar:
    'https://avatars2.githubusercontent.com/u/20638539?s=400&u=6aee861b862353e9b7384eb500d39adec471f633&v=4',
  uid: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        name: action.user.name,
        avatar: action.user.avatar,
        uid: action.user.uid
      };
    case AUTHENTICATE_ERROR_AUTH:
      return { error: action.error };
    case 'SIGNOUT-SUCCESS':
      history.push('/login');
      return { ...state };
    default:
      return state;
  }
}
