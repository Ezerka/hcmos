import React, { useState } from 'react';
// import { useAuth0 } from "../auth/withAuth0";
// import Loading from "../Loading";
import LogInForm from './LogInForm';
import logo from '../../../images/adani.png';
import * as firebase from 'firebase';
import { useDispatch } from 'react-redux';
import { history } from '../../../redux/store';
import {
  auth,
  authError,
  loginSuccess
} from '../../../redux/actions/authActions';

const LoginCard = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const onSubmitFireBase = ({ username, password }) => {
    event.preventDefault();
    console.log(username, password);
    setError('');
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(res => {
        dispatch(auth({ name: res.user.email, uid: res.user.uid }));
        history.push('/home');
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div className="account__wrapper">
      <div className="account__card">
        <div className="account__head">
          <div className="account__title text-center">
            <img
              style={{ align: 'center', width: '50%' }}
              src={logo}
              alt="Logo"
            />
            <span className="account__logo" />
          </div>
        </div>
        <LogInForm
          onSubmit={onSubmitFireBase}
          errorMessage={error}
          form="log_in_form"
        />
      </div>
    </div>
  );
};

export default LoginCard;
