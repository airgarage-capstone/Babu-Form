import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Info	from './Info';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome To AirGarage</h1>
        <Form></Form>
		<Info></Info>
      </div>
    );
  }
}

export default App;
