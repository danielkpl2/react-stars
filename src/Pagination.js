import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { getStars, getAdditionalNames, resourceURIs } from './Util.js';

class Pagination extends Component {
	constructor(props){
    	super(props);
    	this.handlePageChange = this.handlePageChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.handleSizeChange = this.handleSizeChange.bind(this);
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
	render(){
		return(
			<div style={{textAlign: "center", display: "flex", alignItems: "center", justifyContent: "space-between", width: "516px", fontWeight: "bold"}}>
				<span style={{margin: "5px", flexGrow: "1", width: "100%"}}>Found: {this.props.context.state.starResource.prop("page").totalElements}</span>
				<span style={{margin: "5px", flexGrow: "1", width: "100%"}}>
					Page: 
					<Form onSubmit={this.handleSubmit} style={{display: "inline-block"}}>
						<input
							class="pagination-input"
							type="number" min="1"
							max={Math.ceil(parseInt(this.props.context.state.starResource.prop("page").totalElements)/parseInt(this.props.context.state.starResource.prop("page").size))}
							onChange={this.handlePageChange}
							value={this.props.context.state.page}
							></input>
					</Form>
				</span>
				<span style={{margin: "5px", flexGrow: "1", width: "100%"}}>
					<span>Limit: <Form onSubmit={this.handleSubmit} style={{display: "inline-block"}}>
						<input
							class="pagination-input"
							type="number"
							onChange={this.handleSizeChange}
							value={this.props.context.state.size}></input>
					</Form></span>
					
				</span>
				<span style={{flexGrow: "1", width: "100%"}}>
					
				</span>
			</div>
			)
	}
}

export default Pagination;