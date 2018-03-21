import React, { Component } from 'react';
import './Cards.css';


class Cards extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			Spotname: '',
			notes: '',
			restrictions: '',
			pricePerMonth: '',
			organizationName: '',
			allowAutoBook: '',
			quantity: '',
			spotPhotopUpload: require('./house-driveway.png')

		}
	}
	
	render() {
		return(
		<div className="Info">
			<div className = 'cards1'>
				<img src = {this.state.spotPhotopUpload} alt = "house-driveway"/>
				<div>
				<h2>Location: </h2>
				<br1>{this.state.Spotname = "Babu"}</br1>
				</div>
				
				<div>
				<h2>Notes: </h2>
				<br1>{this.state.notes  = "Large Space, shady"}</br1>
				</div>
				
				<div>
				<h2>Restrictions: </h2>
				<br1>{this.state.restrictions  = "Mondays-Wednesday"}</br1>
				</div>
				
				<div>
				<h2>Price Per Month: </h2>
				<br1>{this.state.pricePerMonth  = "$25"}</br1>
				</div>
				
				<div>
				<h2>Organization Name: </h2>
				<br1>{this.state.organizationName  = "Bob's house"}</br1>
				</div>
				
				<div>
				<h2>Quantity: </h2>
				<br1>{this.state.allowAutoBook  = "Yes"}</br1>
				</div>
				
				<div>
				<h2>Quantity: </h2>
				<br1>{this.state.quantity  = "2 Cars"}</br1>
				</div>
				
				
			</div>
        </div>    
		);
	}
	
}	


export default Cards;