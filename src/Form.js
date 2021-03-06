import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './Form.css';


class Form extends Component {
   
	constructor(props) {
    super(props);
    this.state = {
			email: '',
			password: '',
			
	}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}
   
	handleChange(event) {
		this.setState({[event.target.name]: event.target.value});
	}
	
	handleSubmit(event) {
		
	console.log(this.state);
    event.preventDefault();
	
	alert(
	'Email was entered: ' + this.state.email +
	'\nPassword was entered: ' + this.state.password 
	);
	
    event.preventDefault();
	console.log(this.state);
	
	
	    const user = {
			username: this.state.email,
			password: this.state.password
		}

		axios.post('http://staging.airgara.ge/api/auth/', user)
		.then(res => {
				alert('Logged in')
			})
	
	
	}
   
  
	render() {
		
        return (
            <div className="Forms">
				<h1>Welcome To AirGarage</h1>
                <h1>Login Form</h1>
				
				<form onSubmit={this.handleSubmit}>
					
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


export default Form;
