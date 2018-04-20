import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './Info.css';
import 'react-day-picker/lib/style.css';

/*
			<br />
                <form>
                    <label>
                        Password: {' '} 
                         <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>


*/

class Info extends Component {
   
	constructor(props) {
    super(props);
    this.state = {
			FirstName: '',
			LastName:  '',
			email: '',
			password: '',
			profile: '',
			phone: '',
			dob: '',
			accountType: ''
			
	}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}
   
	handleChange(event) {
		this.setState({[event.target.name]: event.target.value});
	}
	
	handleSubmit(event) {
		
		event.preventDefault();
	
		const user = {
			first_name: this.state.FirstName,
			last_name: this.state.LastName,
			username: this.state.email,
			password: this.state.password,
			accountType: this.state.accountType,
			phone: this.state.phone,
			dob:this.state.dob
		}
		
		axios.post('http://staging.airgara.ge/api/register/', user)
	.then(res => { 

	alert("Welcome to AirGarage " + res.data.FirstName + " " + res.data.LastName);
	})
	
	.catch(error =>{
	
	console.log(error)
	
	})
	
	}
	
	static defaultProps = {
		categories: ['Find Parking', 'List a spot', 'Both']
	}
  

	render() {
		
		let categoryOptions = this.props.categories.map(category => {
			return <option key={category} value={category}>{category}</option>
		});
		
		
        return (
            <div className="Info">
				<h1>Welcome To AirGarage</h1>
                <h1>Sign Up Form</h1>
				
				<form onSubmit={this.handleSubmit}>
					
					<label>FirstName: {' '} </label><br />
					<label>
                         <input 
						 type="text" 
						 name="FirstName" 
						 value = {this.state.FirstName}
						 onChange = {this.handleChange}
						 />
						 <br />
					</label>
					<br />
				
                    <label>LastName: {' '} </label><br />
                         <label>
                         <input 
						 type="text" 
						 name="LastName" 
						 value = {this.state.LastName}
						 onChange = {this.handleChange}
						 />
						 <br />
					</label>
					<br />
					
					
                    <label>Email: {' '} </label><br />
                         <label>
                         <input 
						 type="text" 
						 name="email" 
						 value = {this.state.email}
						 onChange = {this.handleChange}
						 />
						 <br />
					</label>
					<br />
					
                    <label>Password: {' '} </label><br />
                         <label>
                         <input 
						 type="text" 
						 name="password" 
						 value = {this.state.password}
						 onChange = {this.handleChange}
						 />
						 <br />
					</label>
					<br />
					
					
					<label>Phone: {' '} </label><br />
                         <label>
                         <input 
						 type="text" 
						 name="phone" 
						 value = {this.state.phone}
						 onChange = {this.handleChange}
						 />
						 <br />
					</label>
					
					<label>Data Of Birth: {' '} </label><br />
                         <label>
                         <input 
						 type="text" 
						 name="dob" 
						 value = {this.state.dob}
						 onChange = {this.handleChange}
						 />
						 <br />
					</label>
					
					<br />
                    <label>
                            <select name="accountType" onChange={this.handleChange}>
                            <option value="" selected disabled>Pick Account Type</option>
                            <option value="Find parking">Find Parking</option>
                            <option  value="List a spot">List a Spot</option>
                            <option  value="Both">Both</option>
                        </select>
                    </label> <br />  <br />
					
					
					<label>
					<br />
						Submit:
						<input type="submit" value="Submit" />
					</label>
				</form>
            </div>
			
        );
    }
}


export default Info;
