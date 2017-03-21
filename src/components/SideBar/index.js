import React, { Component } from 'react';

class SideBar extends Component {

	handleChangeSort(e){
		let sort = e.target.value;
		this.props.onSortChange(sort);
	}

	handleChangePosted(e){

		let posted = e.target.value;
		this.props.onPostedChange(posted);
	}

	handleChangeDistance(e){

		let distance = e.target.value;
		this.props.onDistanceChange(distance);
	}

	handleChangeSite(e){
		let checkedStatus = [];
		let checkedIndeed;
		let checkedZipRecruiter;
		let checkedJob2Careers;

		if(e.target.checked){
			checkedIndeed = false;
		}else{
			checkedIndeed = true;
		}

		if(this.state.checked[1]){
			checkedZipRecruiter = false;
		}else{
			checkedZipRecruiter = true;
		}

		if(this.state.checked[2]){
			checkedJob2Careers = false;
		}else{
			checkedJob2Careers = true;
		}

		checkedStatus = [checkedIndeed, checkedZipRecruiter, checkedJob2Careers];

		this.props.onChangeSite(checkedStatus);
	}

	render(){

		return (

			<div className="col-sm-3">

				<div className="well">

					<p>
						<b>Partner Sites</b>
					</p>

					<div className="checkbox">
					    <label>
					        <input type="checkbox" 
					        		data-key='0'
					        		checked={this.props.checked[0]} 
					        		onChange={this.handleChangeSite}/> 
					        	Indeed
					    </label>
					    <label>
					        <input type="checkbox" 
					        		data-key='1'
					        		checked={this.props.checked[1]} 
					        		onChange={this.handleChangeSite}/> 
					        	ZipRecruiter
					    </label>
					    <label>
					        <input type="checkbox"
					        		data-key='2'
					        		checked={this.props.checked[2]} 
					        		onChange={this.handleChangeSite}/>  
					        	Jobs2Careers
					    </label>
					</div>

				</div>

			    <div className="well">

			        <p><b>Sort By</b></p>
			        <select className="selectpicker" onChange={this.handleChangeSort}>
			          <option>Relevance</option>
			          <option>Date</option>
			        </select>

			    </div>

			    <div className="well">
			        <p><b>Posted</b></p>
		            <select className="selectpicker" onChange={this.handleChangePosted}>
		                 <option> AnyTime </option>
		                 <option> Within 1 Day </option>
		                 <option> Within 3 Day </option>
		                 <option> Within 7 Day </option>
		                 <option> Within 15 Day </option>
		            </select>
			    </div>

			    <div className="well">
			        <p><b>Distance</b></p>
		                <select className="selectpicker" onChange={this.handleChangeDistance}>
		                     <option> Anywhere </option>
		                     <option> Within 5 Miles </option>
		                     <option> Within 10 Miles </option>
		                     <option> Within 15 Miles </option>
		                     <option> Within 25 Miles </option>
		                     <option> Within 50 Miles </option>
		                     <option> Within 100 Miles </option>
		                </select>
			    </div>
			</div>	
		);
	}

}

export default SideBar;
