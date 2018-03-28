import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Form from './Form';
import Info	from './Info';
import Cards from './Cards';

class App extends Component {
  
  state = {
		cardSpots:[]
		
	}
  
  componentDidMount(){
	axios.get('https://airgara.ge/api/spots/')
	.then(res => {
			const cardSpots = res.data;
			this.setState({cardSpots});
		
	})
  }
  
  render() {
    return (
      <div className="App">
        <Info></Info>
		<Form></Form>
		<br1></br1>
		{this.state.cardSpots.map(cardSpot => <Cards
			
			Spotname = {cardSpot.name}
			address = {cardSpot.address.address_line1}
			city = {cardSpot.address.city}
			state = {cardSpot.address.state}
			pricePerMonth = {cardSpot.price}
			allowAutoBook = {cardSpot.auto_book}
			quantity = {cardSpot.quantity}
			
		/>)}
		
      </div>
    );
  }
}

export default App;
 <h1>Welcome To AirGarage</h1>