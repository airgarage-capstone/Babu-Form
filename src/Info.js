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
   
	static defaultProps = {
		categories: ['Find Parking', 'List a spot', 'Both']
	}
  
	render() {
		
		let categoryOptions = this.props.categories.map(category => {
			return <option key={category} value={category}>{category}</option>
		});
		
	
        return (
            <div className="Info">
                <form>
                    <label>FirstName: {' '} </label><br />
                         <input type="text" name="Fname" />
                </form>
				<br />
                <form>
                    <label>
                        LastName: {' '} </label><br />
                         <input type="text" name="Lname" />
                </form>
				<br />
                <form>
                    <label>
                        Email: {' '} </label><br />
                         <input type="text" name="emailAdd" />
                </form>
				<br />
                <form>
                    <label>
                        Password: {' '} </label><br />
                         <input type="text" name="Pass" />
                </form>
				<br />
                <form>
                    <label>
                        Profile: {' '} </label><br />
                         <input type="text" name="Username" />
                </form>
				<br />
                <form>
					<label>
						Account Type: </label><br />
							<select ref="category">
							{categoryOptions}
							</select>
				</form>
				<br />
                <form>
					<label>
						Submit:
						<input type="submit" value="Submit" />
					</label>
				</form>
            </div>
			
        );
    }
}


export default Info;
