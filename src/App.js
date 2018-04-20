import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Form from './Form';
import Info	from './Info';
import Cards from './Cards';

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <Info></Info>
		<Form></Form>
		
		
      </div>
    );
  }
}

export default App;
 <h1>Welcome To AirGarage</h1>