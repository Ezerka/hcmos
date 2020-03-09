import axios from '../../../config/axios';
import firebase from '../../../config/firebase';
import {
  loginUserLoading,
  loginUserError,
  loginUserSuccess
} from '../../../redux/actions/authActions';
import { history } from '../../../redux/store';

export const loginUser = (email, password) => async dispatch => {
  dispatch(loginUserLoading());
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(async res => {
      // const user = await axios({});
      dispatch(loginUserSuccess({ name: res.user.email, uid: res.user.uid }));
      history.push('/home');
    })
    .catch(error => {
      console.error(error.message);
      dispatch(loginUserError(error.message));
    });
};
