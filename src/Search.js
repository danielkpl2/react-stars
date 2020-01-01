import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';


class Search extends Component {

render(){
	const { handleSearchBy, handleSearchChange, hangleSearchOptionChange, reset } = this.props.context;
	const { search, searchBy, error } = this.props.context.state;
	return(
		<div className="form-inline" style={{width: "516px"}}>
		<div style={{width: "100%", textAlign: "left"}}>
			<Form onSubmit={handleSearchBy} style={{display: "flex"}}>
	      <Form.Control
	        name="search"
	        placeholder="Search By"
	        type="text"
	        style={{margin: "5px", "opacity": "0.8", flexGrow: "1", width: "100%"}}
	        value={search}
	        onChange={handleSearchChange}
	          >
	      </Form.Control>
	      <Form.Control 
	      	as="select"
	      	value={searchBy}
	      	onChange={hangleSearchOptionChange}
	      	style={{margin: "5px", "opacity": "0.8", flexGrow: "1", width: "100%"}}
	      	>
	        <option value="name">Name</option>
	        <option value="planet-count">Planet Count</option>
	        <option value="distance">Distance</option>
	      </Form.Control>
	      <Button
	        variant="success"
	        type="submit"
	        style={{flexGrow: "1", width: "100%"}}
	        
	        >
	        Search
	      </Button>
	      <Button
	        variant="success"
	        type="button"
	        onClick={reset}
	        style={{flexGrow: "1", width: "100%"}}
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