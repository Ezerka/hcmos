import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import MailRuIcon from 'mdi-react/MailRuIcon';
import CallIcon from 'mdi-react/PhoneIcon';
import { Button, Alert } from 'reactstrap';
import PropTypes from 'prop-types';
import validate from '../../../containers/Form/FormValidation/components/validate';

const renderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error }
}) => (
  <div className="form__form-group-input-wrap">
    <input {...input} placeholder={placeholder} type={type} />
    {touched && error && (
      <span className="form__form-group-error">{error}</span>
    )}
  </div>
);

class RegisterForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
  };

  static defaultProps = {
    errorMessage: ''
  };

  state = {
    showPassword: false
  };

  showPassword(e) {
    e.preventDefault();
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  }

  render() {
    const { handleSubmit, errorMessage } = this.props;
    const { showPassword } = this.state;

    return (
      <form className="form" onSubmit={handleSubmit}>
        <Alert color="danger" isOpen={!!errorMessage}>
          {errorMessage}
        </Alert>
        <div className="form__form-group">
          <span className="form__form-group-label">Username</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <AccountOutlineIcon />
            </div>
            <Field
              name="name"
              component={renderField}
              type="text"
              placeholder="Name"
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">E-mail</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <MailRuIcon />
            </div>
            <Field
              name="email"
              component={renderField}
              type="email"
              placeholder="example@mail.com"
              required
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Phone Number</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <CallIcon />
            </div>
            <Field
              name="number"
              component={renderField}
              type="phone"
              placeholder="9999999999"
              required
            />
          </div>
        </div>
        <div className="form__form-group form__form-group--forgot">
          <span className="form__form-group-label">Password</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <KeyVariantIcon />
            </div>
            <Field
              name="password"
              component={renderField}
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              required
            />
            <button
              type="button"
              className={`form__form-group-button${
                showPassword ? ' active' : ''
              }`}
              onClick={e => this.showPassword(e)}
            >
              <EyeIcon />
            </button>
          </div>
        </div>
        <div className="account__btns register__btns">
          <Button type="submit" color="primary" className="account__btn">
            Sign Up
          </Button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'register_form',
  validate // a unique identifier for this form
})(RegisterForm);
