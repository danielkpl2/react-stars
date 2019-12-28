import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import spinner from './spinner.gif';
import Planets from './Planets.js';
import { tempToRGB, HoverSound } from './Util.js';

class Star extends Component {

	onMouseEnter(event){
		event.currentTarget.lastChild.firstElementChild.play().then(() => {

		}).catch(error => {
			
		});

	}

	render(){
		const { currentStar, names } = this.props.context.state;
	
		return(
			<div>
			{currentStar != null ? (
        <div className="wrapper" style={{display: "inline-block"}}>
          <div className="inner-right" id="inner-right">
            <h2 style={{textAlign: "right"}}>{currentStar.props.name}</h2>
            <Table striped bordered hover variant="dark" style={{width: "400px", float: "right"}}>
              
              <tbody>
                
                <tr onMouseEnter={this.onMouseEnter}>
                	<td className="list-label">Other names: </td>
                	<td>{names.map((name, i) => <span key={i}>{name}{names.length-1 !== i ? ", " : ""}</span>)}</td>
                	<HoverSound />
                </tr>
                <tr onMouseEnter={this.onMouseEnter}>
                	<td className="list-label">Radius (km): </td>
                	<td>{currentStar.props.radius ? (parseFloat(currentStar.props.radius) * 695510).toFixed(2) : "unknown"}</td>
                	<HoverSound />
                </tr>
                <tr onMouseEnter={this.onMouseEnter}>
                	<td className="list-label">Age (billions of years): </td>
                	<td>{currentStar.props.age || "unknown"}</td>
                	<HoverSound />
                </tr>
                <tr onMouseEnter={this.onMouseEnter}>
                	<td className="list-label">Temperature (kelvin): </td>
                	<td style={{backgroundColor: tempToRGB(currentStar.props.temperature, 0.5)}}>
                	{currentStar.props.temperature ? (<span className="temperature-pill">{currentStar.props.temperature}</span>) : "unknown"}
                	</td>
                	<HoverSound />
                	</tr>
                <tr onMouseEnter={this.onMouseEnter}>
                	<td className="list-label">Mass (Solar masses): </td>
                	<td>{currentStar.props.mass || "unknown"}</td>
                	<HoverSound />
                </tr>
                <tr onMouseEnter={this.onMouseEnter}>
                	<td className="list-label">Distance (light years): </td>
                	<td>{currentStar.props.distance || "unknown"}</td>
                	<HoverSound />
                </tr>
                <tr onMouseEnter={this.onMouseEnter}>
                	<td className="list-label">Number of planets: </td>
                	<td>{currentStar.props.numberOfPlanets || "unknown"}</td>
                	<HoverSound />
                </tr>
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