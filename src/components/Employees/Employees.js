import React, { Component } from 'react';
import axios from 'axios';
import './Employees.css';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  avatar: '',
};
export default class Employees extends Component {
  state = {
    data: [],
    isOpen: false,
    firstName: initialState.firstName,
    lastName: initialState.lastName,
    email: initialState.email,
    avatar: initialState.avatar,
  };

  componentDidMount() {
    axios.get('https://reqres.in/api/users?per_page=12').then((res) => {
      const data = res.data.data;
      this.setState({ data });
    });
  }

  deleteEmployee = (e) => {
    this.setState({
      data: this.state.data.filter((contact) => contact.id !== e),
    });
  };
  openForm = () => {
    this.setState({
      isOpen: true,
    });
  };
  handleCancel = () => {
    this.setState({
      isOpen: false,
      firstName: initialState.firstName,
      lastName: initialState.lastName,
      email: initialState.email,
      avatar: initialState.avatar,
    });
  };

  addEmployee = (imgURL, firstName, lastName, email) => {
    this.setState({
      data: [
        ...this.state.data,
        {
          id: this.state.data.length + 1,
          avatar: imgURL,
          email: email,
          first_name: firstName,
          last_name: lastName,
        },
      ],
      isOpen: false,
      firstName: initialState.firstName,
      lastName: initialState.lastName,
      email: initialState.email,
      avatar: initialState.avatar,
    });
  };

  onChangeFirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  onChangeLastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };
  onChangeImgURL = (e) => {
    this.setState({
      avatar: e.target.value,
    });
  };
  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  render() {
    const { data, isOpen, firstName, lastName, email, avatar } = this.state;
    return (
      <div>
        {isOpen && (
          <div className='wr-addEmployee'>
            <div className='formAddEmployee'>
              <div className='addEmployee'>
                <div className='cross' onClick={this.handleCancel}>
                  <i class='fa fa-times' aria-hidden='true' />
                </div>
                <input
                  type='text'
                  placeholder='imgURL'
                  value={avatar}
                  onChange={this.onChangeImgURL}
                ></input>
                <input
                  type='text'
                  placeholder='First Name'
                  value={firstName}
                  onChange={this.onChangeFirstName}
                ></input>
                <input
                  type='text'
                  placeholder='Last Name'
                  value={lastName}
                  onChange={this.onChangeLastName}
                ></input>
                <input
                  type='email'
                  placeholder='Email'
                  value={email}
                  onChange={this.onChangeEmail}
                ></input>
                <button
                  onClick={() =>
                    this.addEmployee(avatar, firstName, lastName, email)
                  }
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
        <h1>
          Employee{' '}
          <i class='fa fa-plus' aria-hidden='true' onClick={this.openForm}></i>
        </h1>

        <div className='list-employees'>
          {data.map((person) => (
            <div className='employee'>
              <img src={person.avatar} alt='avatar' />

              <div className='info'>
                {`${person.first_name} ${person.last_name}`}
                <div>{person.email}</div>
                <div onClick={() => this.deleteEmployee(person.id)}>
                  <i className='fa fa-trash' aria-hidden='true' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
