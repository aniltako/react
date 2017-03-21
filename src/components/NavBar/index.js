import React, { Component } from 'react';

class NavBar extends Component {
	
	render(){
		return (
			<nav className="navbar navbar-inverse">
					<div className="container-fluid">
						 <div className="navbar-header">
 							 <img width="100" role="presentation" height="50" />
 							 <p>Search Jobs </p>
						 </div>
					</div>
			</nav> 
		);
	}

}


export default NavBar;