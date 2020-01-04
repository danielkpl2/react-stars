import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { sortOptions } from './Util.js';


class Search extends Component {

	constructor(props){
		super(props);
		this.handleSortChange = this.handleSortChange.bind(this);
		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.hangleSearchOptionChange = this.hangleSearchOptionChange.bind(this);
	}

	handleSearchChange(event){
    this.props.context.setState({
      search: event.target.value
    })
  }

  hangleSearchOptionChange(event){
    this.props.context.setState({
      searchBy: event.target.value
    })
  }


handleSortChange(event){
		
		this.props.context.setState({
      sort: event.target.value
    })	
	}

render(){
	const { handleSearchBy } = this.props.context;
	const { search, searchBy } = this.props.context.state;

	var options = [];
		
	switch(this.props.context.state.searchBy){
		case "": options = sortOptions; break;
		case "planet-count": options = sortOptions; break;
		case "distance": options = sortOptions; break;
		case "name" : options = [
				{"name": "Name ↓", "value": "name,desc"},
				{"name": "Name ↑", "value": "name,asc"},
		]; break;
		default: options = sortOptions; break;
	}


	return(
		<div className="form-inline" style={{width: "516px"}}>
		<div style={{width: "100%", textAlign: "left"}}>
			<Form onSubmit={handleSearchBy} style={{display: "flex"}}>
	      <Form.Control
	        name="search"
	        placeholder="Search By"
	        type="text"
	        style={{margin: "5px", "opacity": "0.8", width: "119px"}}
	        value={search}
	        onChange={this.handleSearchChange}
	          >
	      </Form.Control>
	      <Form.Control 
	      	as="select"
	      	value={searchBy}
	      	onChange={this.hangleSearchOptionChange}
	      	style={{margin: "5px", "opacity": "0.8", width: "119px"}}
	      	>
	      	<option value="">--</option>
	        <option value="name">Name</option>
	        <option value="planet-count">Planet No.</option>
	        <option value="distance">Distance</option>
	      </Form.Control>
	      <Form.Control 
      		as="select"
      		onChange={this.handleSortChange}
      		value={this.props.context.state.sort}
      		style={{margin: "5px", opacity: "0.8", width: "50%"}}>
      		>
      			{options.map((option, key) => 
      				<option key={key} value={option.value}>{option.name}</option>
      			)}
      			
      		</Form.Control>
	      
	    </Form>
    </div>
    	
    </div>
		)
}

}

export default Search;