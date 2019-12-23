import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import moment from 'moment';
import { tempToRGB } from './Util.js';

class Planets extends Component {

	render(){
		return(
		<div>
		{this.props.context.state.planets ? (
			<div>
			<h2 style={{"textAlign": "right"}}>Planets</h2>
      <Table striped bordered hover variant="dark" style={{width: "800px"}}>
	      <thead><tr>
	      	<th>Name</th>
	      	<th>Radius (km)</th>
	      	<th>Age</th>
	      	<th>Temperature (kelvin)</th>
	      	<th>Mass (Jupyter masses)</th>
	      	<th>Discovery Method</th>
	      	<th>Description</th>
	      	<th style={{width: "90px"}}>Discovery Date</th>
	      	</tr></thead>
	      	<tbody>
			      {this.props.context.state.planets.map((planet, key) => 
		          <tr key={key}>
		            <td>{planet.prop("name")}</td>
		            <td>{planet.prop("radius") ? (parseFloat(planet.prop("radius")) * 69911).toFixed(2) : "unknown"}</td>
		            <td>{planet.prop("age") ? planet.prop("age") : ''}</td>
		            <td style={{backgroundColor: tempToRGB(planet.prop("temperature"), 0.5)}}>{planet.prop("temperature") ? <span className="temperature-pill">{planet.prop("temperature")}</span> : "unknown"}</td>
		            <td>{planet.prop("mass") ? parseFloat(planet.prop("mass")).toFixed(4) : "unknown"}</td>
		            <td>{planet.prop("discoveryMethod")}</td>
		            <td>{planet.prop("description")}</td>
		            <td>{moment(planet.prop("discoveryDate")).format("YYYY-MM-DD")}</td>
		          </tr>
			        
			      )}
	      </tbody>
	    </Table>
	    </div>
			) : ''}
		</div>
			
		
		)
	}

}

export default Planets;