import React, { useState } from 'react';
import LogInForm from './LogInForm';
import logo from '../../../images/adani.png';
import { useDispatch } from 'react-redux';
import { history } from '../../../redux/store';
import { loginError, loginSuccess } from '../../../redux/actions/authActions';
import Loading from '../Loading';
import firebase from '../../../config/firebase';

const LoginCard = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSubmitFireBase = ({ email, password }) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        dispatch(loginSuccess({ name: res.user.email, uid: res.user.uid }));
        setLoading(false);
        history.push('/home');
      })
      .catch(error => {
        setLoading(false);
        dispatch(loginError(error));
        setError(error.message);
      });
  };

  return loading ? (
    <Loading loading={loading} />
  ) : (
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
