import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class Search extends Component {

render(){
	return(
		<div>
		<div className="form-inline">
			<Form onSubmit={this.props.context.handleSearchBy}>
	      <Form.Control
	        name="search"
	        placeholder="Search By"
	        type="text"
	        style={{width: "120px", marginRight: "5px"}}
	        value={this.props.context.state.search}
	        onChange={this.props.context.handleSearchChange}
	          >
	      </Form.Control>
	      <Form.Control as="select" value={this.props.context.state.searchBy} onChange={this.props.context.hangleSearchOptionChange}>
	        <option value="name">Name</option>
	        <option value="planet-count">Planet Count</option>
	        <option value="distance">Distance</option>
	      </Form.Control>
	      <Button
	        variant="success"
	        type="submit"
	        
	        >
	        Search
	      </Button>
	      <Button
	        variant="success"
	        type="button"
	        onClick={this.props.context.reset}
	        >
	        Reset
	      </Button>
	    </Form>
    </div>
    <div style={{textAlign: 'left'}}>{this.props.context.state.error}</div>
    </div>
		)
}

}

export default Search;