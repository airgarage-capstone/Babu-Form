import React, { Component } from 'react';
import './Cards.css';


class Cards extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			Spotname: props.Spotname,
			address: props.address,
			city: props.city,
			state: props.state,
			pricePerMonth: props.pricePerMonth,
			allowAutoBook: props.allowAutoBook,
			quantity: props.quantity,
			spotPhotopUpload: require('./house-driveway.png')

		}
	}
	
	render() {
		return(
		//<div className="Info">
			<div className = 'cards1'>
				<img src = {this.state.spotPhotopUpload} alt = "house-driveway"/>
				
				<div id="block1">
				<h2>Spot name: </h2>
				<br1>{this.state.Spotname}</br1>
				</div>
				
				<div id="block2">
				<h2>address: </h2>
				<br1>{this.state.address}</br1>
				</div>
				
				<div id="block3">
				<h2>city: </h2>
				<br1>{this.state.city}</br1>
				</div>
				
				<div id="block4">
				<h2>state: </h2>
				<br1>{this.state.state}</br1>
				</div>
				
				<div id="block5">
				<h2>Price Per Month: </h2>
				<br1>{this.state.pricePerMonth  }</br1>
				</div>
				
				
				<div id="block6">
				<h2>Auto Book: </h2>
				<br1>{this.state.allowAutoBook  }</br1>
				</div>
				
				<div id="block7">
				<h2>Quantity: </h2>
				<br1>{this.state.quantity }</br1>
				</div>
				
				
			</div>
        //</div>    
		);
	}
	
}	


export default Cards;