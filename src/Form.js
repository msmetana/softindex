import React, {Component} from 'react';
import CustomInput from './CustomInput';
import './Form.css';


class Form extends Component {
  state = {
    firstName: '',
    lastName: '',
    phone: '',
    age: ''
  }

  handleChangeFirstName = (value) => {
    this.setState({
      firstName: value
    });
  }
  handleChangeLastName = (value) => {
    this.setState({
      lastName: value
    });
  }
  handleChangePhone = (value) => {
    this.setState({
      phone: value
    });
  }
  handleChangeAge = (value) => {
    this.setState({
      age: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    const {
      firstName,
      lastName,
      phone,
      age
    } = this.state

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
                className="form-group__input"
                classNameLabel="form-group__label"
              />
              <CustomInput
                type="text"
                onChangeValue={this.handleChangeLastName}
                placeholder="Last Name"
                value={lastName}
                className="form-group__input"
                classNameLabel="form-group__label"
              />
              <CustomInput
                type="text"
                onChangeValue={this.handleChangePhone}
                placeholder="Phone"
                value={phone}
                className="form-group__input"
                classNameLabel="form-group__label"
              />
              <CustomInput
                type="number"
                onChangeValue={this.handleChangeAge}
                placeholder="Age"
                value={age}
                className="form-group__input"
                classNameLabel="form-group__label"
              />
              <div className="form-button">
                <input type="submit" value="Submit" onClick={this.handleSubmit}/>
              </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form
