import { AUTHENTICATE, AUTHENTICATE_ERROR_AUTH } from '../actions/authActions';

const initialState = {
  fullName: 'Ashfaq Nisar',
  avatar:
    'https://avatars2.githubusercontent.com/u/20638539?s=400&u=6aee861b862353e9b7384eb500d39adec471f633&v=4'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATE:
      return { fullName: action.user.name, avatar: action.user.avatar };
    case AUTHENTICATE_ERROR_AUTH:
      return { error: action.error };
    default:
      return state;
  }
}
