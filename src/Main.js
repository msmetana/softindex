import React, {Component} from 'react';
import Form from './Form';
import Table from './Table';

class Main extends Component {
  state = {
    users: JSON.parse(localStorage.getItem('items')),
    firstName: '',
    lastName: '',
    phone: '',
    age: ''
  }

  handleChangeFirstName = (value) => {
    this.setState({
      firstName: value,
    });
  }

  handleChangeLastName = (value) => {
    this.setState({
      lastName: value,
    });
  }

  handleChangePhone = (value) => {
    this.setState({
      phone: value,
    });
  }
  
  handleChangeAge = (value) => {
    this.setState({
      age: value,
    });
  }

  handleSubmit = (e) => {
    // localStorage.clear();
    let items = JSON.parse(localStorage.getItem('items'));

    if (items) {
      localStorage.setItem('items', JSON.stringify([
        ...items, [
          this.state.firstName,
          this.state.lastName,
          this.state.phone,
          this.state.age
        ]
      ]));
    } else {
      localStorage.setItem('items', JSON.stringify([
        [
          this.state.firstName,
          this.state.lastName,
          this.state.phone,
          this.state.age
        ],
      ]));
    }

    this.setState({
      firstName: '',
      lastName: '',
      phone: '',
      age: '',
    });
    this.updateUsers();
  }

  updateUsers = () => {
    this.setState({
      users: JSON.parse(localStorage.getItem('items')),
    });
  }

  handleRemoveUser = (key) => {
    let items = JSON.parse(localStorage.getItem('items'));

    localStorage.setItem('items', JSON.stringify(items.filter(function(value, index, arr){
        return index !== key;
      })
    ));
    this.updateUsers();
  }

  handleSort = (key, dir) => {
    let items = this.state.users;

    items.sort((a, b) => {
      if (key === 3) {
        return dir ? a[key] - b[key] : b[key] - a[key];
      }
      if (a[key] > b[key]) {
        return dir ? 1 : -1;
      }
      if (a[key] < b[key]) {
        return dir ? -1 : 1;
      }
      return 0;
    });
    localStorage.setItem('items', JSON.stringify(items));
    this.updateUsers();
  }

  render() {
    const {
      firstName,
      lastName,
      phone,
      age,
    } = this.state

    return (
      <React.Fragment>
        <Table
          users={this.state.users}
          onRemoveUser={this.handleRemoveUser}
          onSort={this.handleSort}
        />
        <Form
          firstName={firstName}
          lastName={lastName}
          phone={phone}
          age={age}
          handleSubmit={this.handleSubmit}
          handleChangeFirstName={this.handleChangeFirstName}
          handleChangeLastName={this.handleChangeLastName}
          handleChangePhone={this.handleChangePhone}
          handleChangeAge={this.handleChangeAge}
        />
      </React.Fragment>
    );
  }
}

export default Main
