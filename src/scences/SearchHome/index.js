import React, { Component } from 'react';
import NavBar from '../../components/NavBar/index';
import MainContainer from '../../components/MainContainer/index';

class SearchHome extends Component {

	handleClick(){
		alert('ok');
	}

	render() {
        return (
            <div>
            	<NavBar />
            	<MainContainer />
            </div>
        )
    }
}


export default SearchHome;