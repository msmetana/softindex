import React, {Component} from 'react';
import CustomInput from './CustomInput';
import './Form.css';


class Form extends Component {
  state = {
    firstName: '',
    lastName: '',
    phone: '',
    age: '',
    firstNameValid: '',
    lastNameValid: '',
    phoneValid: '',
    ageValid: ''
  }

  handleChangeFirstName = (value) => {
    this.setState({
      firstName: value,
      firstNameValid: /^[a-zA-Z]+$/.test(value)
    });
  }
  handleChangeLastName = (value) => {
    this.setState({
      lastName: value,
      lastNameValid: /^[a-zA-Z]+$/.test(value)
    });
  }
  handleChangePhone = (value) => {
    this.setState({
      phone: value,
      phoneValid: /^\+[0-9]{3}$/.test(value)
    });
  }
  handleChangeAge = (value) => {
    this.setState({
      age: value,
      ageValid: value < 100 && /^\d+$/.test(value)
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      phone: '',
      age: '',
      firstNameValid: '',
      lastNameValid: '',
      phoneValid: '',
      ageValid: ''
    });
  }

  render() {
    const {
      firstName,
      lastName,
      phone,
      age,
      firstNameValid,
      lastNameValid,
      phoneValid,
      ageValid
    } = this.state

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
          Creating new form
        </div>
        <div className="container-form__content">
          <form>
              <CustomInput
                type="text"
                onChangeValue={this.handleChangeFirstName}
                placeholder="First Name"
                value={firstName}
                className={`form-group__input ${validFirstName}`}
                classNameLabel={`form-group__label ${validFirstNameLabel}`}
              />
              <CustomInput
                type="text"
                onChangeValue={this.handleChangeLastName}
                placeholder="Last Name"
                value={lastName}
                className={`form-group__input ${validLastName}`}
                classNameLabel={`form-group__label ${validLastNameLabel}`}
              />
              <CustomInput
                type="text"
                onChangeValue={this.handleChangePhone}
                placeholder="Phone"
                value={phone}
                className={`form-group__input ${validPhone}`}
                classNameLabel={`form-group__label ${validPhoneLabel}`}
              />
              <CustomInput
                type="number"
                onChangeValue={this.handleChangeAge}
                placeholder="Age"
                value={age}
                className={`form-group__input ${validAge}`}
                classNameLabel={`form-group__label ${validAgeLabel}`}
              />
              <div className={classNameButton}>
                <input type="submit"
                  className="form-button-size"
                  value="Submit"
                  onClick={this.handleSubmit}
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
