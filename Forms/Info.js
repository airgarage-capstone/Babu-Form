import React, { Component } from 'react';
import logo from './logo.svg';
import './Info.css';

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
			profile: ''
			
	}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}
   
	handleChange(event) {
		this.setState({[event.target.name]: event.target.value});
	}
	
	handleSubmit(event) {
	
	alert(
	'FirstName was entered: ' + this.state.FirstName + 
	'\nLastName was entered: ' + this.state.LastName +
	'\nEmail was entered: ' + this.state.email +
	'\nPassword was entered: ' + this.state.password +
	'\nProfile was entered: ' + this.state.profile
	);
	
    event.preventDefault();
	console.log(this.state);
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
					
                    <label>Profile: {' '} </label><br />
                         <label>
                         <input 
						 type="text" 
						 name="profile" 
						 value = {this.state.profile}
						 onChange = {this.handleChange}
						 />
						 <br />
					</label>
					
					<label>
					<br />
						Account Type: </label><br />
							<select ref="category">
							{categoryOptions}
							</select>
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


export default Info;
