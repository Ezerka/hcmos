import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import * as firebase from 'firebase/app';
import RegisterForm from '../../../shared/components/login/RegisterForm';
import logo from '../../../images/adani.png';
import { auth, authError } from '../../../redux/actions/authActions';

class Register extends PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func
    }).isRequired
  };

  state = {
    error: ''
  };

  registerFireBase = user => {
    const { history } = this.props;
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(() => {
        history.push('/login');
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <div className="account account--not-photo">
        <div className="account__wrapper">
          <div className="account__card">
            <div className="account__head">
              <div className="account__title text-center">
                <span className="account__logo">
                  <img
                    style={{ align: 'center', width: '50%' }}
                    src={logo}
                    alt="Logo"
                  />
                </span>
                <h3 className="account__subhead subheading  text-center">
                  Create an account
                </h3>
              </div>
            </div>
            <RegisterForm
              onSubmit={this.registerFireBase}
              errorMessage={error}
            />
            <div className="account__have-account">
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
