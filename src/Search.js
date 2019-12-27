import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class Search extends Component {

render(){
	const { handleSearchBy, handleSearchChange, hangleSearchOptionChange, reset } = this.props.context;
	const { search, searchBy, error } = this.props.context.state;
	return(
		<div>
		<div className="form-inline">
			<Form onSubmit={handleSearchBy}>
	      <Form.Control
	        name="search"
	        placeholder="Search By"
	        type="text"
	        style={{width: "120px", margin: "5px", "opacity": "0.8"}}
	        value={search}
	        onChange={handleSearchChange}
	          >
	      </Form.Control>
	      <Form.Control 
	      	as="select"
	      	value={searchBy}
	      	onChange={hangleSearchOptionChange}
	      	style={{width: "150px", margin: "5px", "opacity": "0.8"}}
	      	>
	        <option value="name">Name</option>
	        <option value="planet-count">Planet Count</option>
	        <option value="distance">Distance</option>
	      </Form.Control>
	      <Button
	        variant="success"
	        type="submit"
	        style={{width: "100px"}}
	        
	        >
	        Search
	      </Button>
	      <Button
	        variant="success"
	        type="button"
	        onClick={reset}
	        style={{width: "100px"}}
	        >
	        Reset
	      </Button>
	    </Form>
    </div>
    <div style={{textAlign: 'left', margin: '5px'}}>{error}</div>
    </div>
		)
}

}

export default Search;