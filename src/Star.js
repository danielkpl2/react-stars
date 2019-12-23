import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import spinner from './spinner.gif';
import Planets from './Planets.js';
import { tempToRGB } from './Util.js';

class Star extends Component {

	render(){

		return(
			<div>
			{this.props.context.state.currentStar != null ? (
        <div className="wrapper" style={{display: "inlineBlock"}}>
          <div className="inner-right" id="inner-right">
            <h2 style={{textAlign: "right"}}>{this.props.context.state.currentStar.props.name}</h2>
            <Table striped bordered hover variant="dark" style={{width: "500px", float: "right"}}>
              
              <tbody>
                
                <tr><td className="list-label">Other names: </td><td>{this.props.context.state.names.map((name, i) => <span key={i}>{name}{this.props.context.state.names.length-1 !== i ? ", " : ""}</span>)}</td></tr>
                <tr><td className="list-label">Radius (km): </td><td>{this.props.context.state.currentStar.props.radius ? (parseFloat(this.props.context.state.currentStar.props.radius) * 695510).toFixed(2) : "unknown"}</td></tr>
                <tr><td className="list-label">Age (billions of years): </td><td>{this.props.context.state.currentStar.props.age ? this.props.context.state.currentStar.props.age : "unknown"}</td></tr>
                <tr><td className="list-label">Temperature (kelvin): </td>
                <td style={{backgroundColor: tempToRGB(this.props.context.state.currentStar.props.temperature, 0.5)}}>
                <span className="temperature-pill">{this.props.context.state.currentStar.props.temperature}</span>
                </td></tr>
                <tr><td className="list-label">Mass (Solar masses): </td><td>{this.props.context.state.currentStar.props.mass ? this.props.context.state.currentStar.props.mass : "unknown"}</td></tr>
                <tr><td className="list-label">Distance (light years): </td><td>{this.props.context.state.currentStar.props.distance ? this.props.context.state.currentStar.props.distance : "unknown"}</td></tr>
                <tr><td className="list-label">Number of planets: </td><td>{this.props.context.state.currentStar.props.numberOfPlanets}</td></tr>
              </tbody>
            </Table>
            
            <div style={{float: "right"}}>
            <Planets context={this.props.context} />

            
            
            </div>
          </div>
        </div>

        ) : <img alt='' src={spinner} height="30" width="30" />}
			</div>
			)
	}
}

export default Star;