import React from 'react';
// import { useAuth0 } from "../auth/withAuth0";
// import Loading from "../Loading";
import LogInForm from './LogInForm';
import logo from '../../../shared/img/logo/logo.svg';

const LoginCard = () => {
  // const { loading } = useAuth0();
  // if (loading) {
  //   return <Loading loading={loading} />;
  // }
  return (
    <div className="account__wrapper">
      <div className="account__card">
        <div className="account__head">
          <h3 className="account__title text-center">
            <img
              style={{ align: 'center', width: '50%' }}
              src={logo}
              alt="Logo"
            />
            <span className="account__logo" />
          </h3>
        </div>
        <LogInForm onSubmin form="log_in_form" />
      </div>
    </div>
  );
};

export default LoginCard;
