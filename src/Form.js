import React, {Component} from 'react';
import CustomInput from './CustomInput';
import './Form.css';

class Form extends Component {
  state = {
    firstNameValid: '',
    lastNameValid: '',
    phoneValid: '',
    ageValid: ''
  }

  onHandleChangeFirstName = (value) => {
    this.setState({
      firstNameValid: /^[a-zA-Z]+$/.test(value)
    });
    this.props.handleChangeFirstName(value);
  }

  onHandleChangeLastName = (value) => {
    this.setState({
      lastNameValid: /^[a-zA-Z]+$/.test(value)
    });
    this.props.handleChangeLastName(value);
  }

  onHandleChangePhone = (value) => {
    this.setState({
      phoneValid: /^\+[0-9]{12}$/.test(value)
    });
    this.props.handleChangePhone(value);
  }

  onHandleChangeAge = (value) => {
    this.setState({
      ageValid: value < 100 && /^\d+$/.test(value)
    });
    this.props.handleChangeAge(value);
  }

  onHandleSubmit = (e) => {
    e.preventDefault();
    
    this.setState({
      firstNameValid: '',
      lastNameValid: '',
      phoneValid: '',
      ageValid: ''
    });
    this.props.handleSubmit();
  }

  render() {
    const {
      firstName,
      lastName,
      phone,
      age,
    } = this.props;
    const {
      firstNameValid,
      lastNameValid,
      phoneValid,
      ageValid,
    } = this.state;

    const disableButton = !(firstNameValid && lastNameValid  && phoneValid && ageValid);
    const classNameButton = disableButton ? 'form-button-disabled' : 'form-button-active'
    const validFirstName = firstNameValid === '' ? '' : firstNameValid ? 'valid-form' : 'invalid-form';
    const validFirstNameLabel = firstNameValid ? 'valid-form-label' : 'invalid-form-label';
    const validLastName = lastNameValid === '' ? '' : lastNameValid ? 'valid-form' : 'invalid-form';
    const validLastNameLabel = lastNameValid ? 'valid-form-label' : 'invalid-form-label';
    const validPhone = phoneValid === '' ? '' : phoneValid ? 'valid-form' : 'invalid-form';
    const validPhoneLabel = phoneValid ? 'valid-form-label' : 'invalid-form-label';
    const validAge = ageValid === '' ? '' : ageValid ? 'valid-form' : 'invalid-form';
    const validAgeLabel = ageValid ? 'valid-form-label' : 'invalid-form-label';

    return (
      <div className="container-form">
        <div className="container-form__header">
          adding new user
        </div>
        <div className="container-form__content">
          <form>
              <CustomInput
                type="text"
                onChangeValue={this.onHandleChangeFirstName}
                placeholder="First Name"
                value={firstName}
                className={`form-group__input ${validFirstName}`}
                classNameLabel={`form-group__label ${validFirstNameLabel}`}
              />
              <CustomInput
                type="text"
                onChangeValue={this.onHandleChangeLastName}
                placeholder="Last Name"
                value={lastName}
                className={`form-group__input ${validLastName}`}
                classNameLabel={`form-group__label ${validLastNameLabel}`}
              />
              <CustomInput
                type="text"
                onChangeValue={this.onHandleChangePhone}
                placeholder="Phone"
                value={phone}
                className={`form-group__input ${validPhone}`}
                classNameLabel={`form-group__label ${validPhoneLabel}`}
              />
              <CustomInput
                type="number"
                onChangeValue={this.onHandleChangeAge}
                placeholder="Age"
                value={age}
                className={`form-group__input ${validAge}`}
                classNameLabel={`form-group__label ${validAgeLabel}`}
              />
              <div className={classNameButton}>
                <input type="submit"
                  className="form-button-size"
                  value="Submit"
                  onClick={this.onHandleSubmit}
                  disabled={disableButton}
                />
              </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form
