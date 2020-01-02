import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { getStars, getAdditionalNames, resourceURIs, sortOptions } from './Util.js';

class Pagination extends Component {
	constructor(props){
    	super(props);
    	this.handlePageChange = this.handlePageChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.handleSizeChange = this.handleSizeChange.bind(this);
    	this.handleSortChange = this.handleSortChange.bind(this);
    	// this.handleSizeSubmit = this.handleSizeSubmit.bind(this);
	}

	

	handlePageChange(event){
		this.props.context.setState({
      page: event.target.value
    })
	}

	handleSubmit(event){
		event.preventDefault();
		switch(this.props.context.state.resourceURI){
			case resourceURIs.nameSearch: this.props.context.handleSearchByName(); break;
			case resourceURIs.stars: this.props.context.paginate(); break;
			case resourceURIs.planetCountSearch: this.props.context.handleSearchByPlanetCount(); break;
			case resourceURIs.distance: this.props.context.handleSearchByDistance(); break;
			default: this.props.context.paginate(); break;
		}
	}

	handleSizeChange(event){
		this.props.context.setState({
      size: event.target.value
    })
	}

	handleSortChange(event){
		
		this.props.context.setState({
      sort: event.target.value
    })	
	}

	render(){
		var options = [];
		
		switch(this.props.context.state.searchBy){
			case "": options = sortOptions; break;
			case "planet-count": options = sortOptions; break;
			case "distance": options = sortOptions; break;
			case "name" : options = [
					{"name": "Name Descending", "value": "name,desc"},
					{"name": "Name Ascending", "value": "name,asc"},
			]; break;
		}

		return(
			<div style={{textAlign: "center", display: "flex", alignItems: "center", justifyContent: "space-between", width: "516px", fontWeight: "bold"}}>
				<span style={{margin: "auto", flexGrow: "1", width: "100%"}}>Found: {this.props.context.state.starResource.prop("page").totalElements}</span>
				<span style={{margin: "auto", flexGrow: "1", width: "100%"}}>
					Page: 
					<Form onSubmit={this.handleSubmit} style={{display: "inline-block"}}>
						<input
							className="pagination-input"
							type="number" min="1"
							max={Math.ceil(parseInt(this.props.context.state.starResource.prop("page").totalElements)/parseInt(this.props.context.state.starResource.prop("page").size))}
							onChange={this.handlePageChange}
							value={this.props.context.state.page}
							></input>
					</Form>
				</span>
				<span style={{margin: "auto", flexGrow: "1", width: "100%"}}>
					<span>Limit: <Form onSubmit={this.handleSubmit} style={{display: "inline-block"}}>
						<input
							className="pagination-input"
							type="number"
							onChange={this.handleSizeChange}
							value={this.props.context.state.size}></input>
					</Form></span>
					
				</span>
				<span style={{margin: "auto", opacity: "0.8", flexGrow: "1", width: "100%"}}>
					 <Form.Control 
	      		as="select"
	      		onChange={this.handleSortChange}
	      		value={this.props.context.state.sort}
	      		style={{margin: "auto", opacity: "0.8", flexGrow: "1", width: "100%"}}>
	      		>
	      			{options.map((option, key) => 
	      				<option key={key} value={option.value}>{option.name}</option>
	      			)}
	      			
	      		</Form.Control>
				</span>
			</div>
			)
	}
}

export default Pagination;

