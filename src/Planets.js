import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import moment from 'moment';
import { tempToRGB, HoverSound } from './Util.js';

const mapStateToProps = state => ({...state})
const mapDispatchToProps = {}

class Planets extends Component {
	constructor(props){
		super(props);
		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
	}

	onMouseEnter(event, key){
		this.interval = setInterval(function() {

			var top = document.getElementById("planet"+key).getBoundingClientRect().top;
			var right = document.getElementById("planet"+key).getBoundingClientRect().right;
			var label = document.getElementById("label"+key);

			label.style.top = top + "px";
			label.style.left = right + "px";
			label.style.display = 'block';
		 }, 50);

		event.currentTarget.lastChild.firstElementChild.play().then(() => {

		}).catch(error => {
			
		});
	}

	onMouseLeave(event, key){
		var label = document.getElementById("label"+key);
		label.style.display = 'none';
		clearInterval(this.interval);
	}

	render(){
		const { planets } = this.props;
		return(
		<div>
		{planets ? (
			<div>
			<h2 style={{"textAlign": "right"}}>Planets</h2>
      <Table id="planets-table" striped bordered hover variant="dark" style={{width: "866px"}}>
	      <thead><tr>
	      	<th className="width100">Name</th>
	      	<th className="width75">Radius (km)</th>
	      	<th className="width50">Age</th>
	      	<th className="width100">Temperature (kelvin)</th>
	      	<th className="width75">Mass (Jupyter masses)</th>
	      	<th className="width75">Discovery Method</th>
	      	<th className="width275">Description</th>
	      	<th className="width116">Discovery Date</th>
	      	</tr></thead>
	      	<tbody>
			      {planets.map((planet, key) => 
		          <tr onMouseEnter={(event)=>this.onMouseEnter(event, key)} onMouseLeave={(event)=>this.onMouseLeave(event, key)} key={key}>
		            <td className="width100">{planet.prop("name") || "?"}</td>
		            <td className="width75">{planet.prop("radius") ? (parseFloat(planet.prop("radius")) * 69911).toFixed(2) : "?"}</td>
		            <td className="width50">{planet.prop("age") || '?'}</td>
		            <td className="width100" style={{backgroundColor: tempToRGB(planet.prop("temperature"), 0.5)}}>{planet.prop("temperature") ? <span className="temperature-pill">{planet.prop("temperature")}</span> : "unknown"}</td>
		            <td className="width75">{planet.prop("mass") ? parseFloat(planet.prop("mass")).toFixed(4) : "?"}</td>
		            <td className="width75">{planet.prop("discoveryMethod") || "?" }</td>
		            <td className="width275">{planet.prop("description") || "?"}</td>
		            <td className="width100">{moment(planet.prop("discoveryDate")).format("YYYY-MM-DD")}</td>
		            <td style={{ display: "none" }}><HoverSound /></td>
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

export default connect(mapStateToProps, mapDispatchToProps)(Planets);