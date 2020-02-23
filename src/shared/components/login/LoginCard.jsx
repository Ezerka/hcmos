import React from 'react';
// import { useAuth0 } from "../auth/withAuth0";
// import Loading from "../Loading";
import LogInForm from './LogInForm';
import logo from '../../../images/adani.png';

const handleSubmit = values => {
  console.log('The values are', values);
};

const LoginCard = () => {
  // const { loading } = useAuth0();
  // if (loading) {
  //   return <Loading loading={loading} />;
  // }
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
        <LogInForm onSubmit={handleSubmit} form="log_in_form" />
      </div>
    </div>
  );
};

export default LoginCard;
