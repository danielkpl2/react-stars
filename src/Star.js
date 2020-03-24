import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import spinner from './spinner.gif';
import Planets from './Planets.js';
import { tempToRGB, HoverSound } from './Util.js';

const mapStateToProps = state => ({...state})
const mapDispatchToProps = {}

class Star extends Component {

	onMouseEnter(event) {
		event.currentTarget.lastChild.firstElementChild.play().then(() => {

		}).catch(error => {

		});

	}

	render() {
		const { currentStar, names } = this.props;

		return (
			<div>
				{currentStar != null ? (
					<div className="wrapper-right" style={{ display: "inline-block" }}>
						<div className="inner-right" id="inner-right">
							<h2 style={{ alignSelf: 'flex-end' }}>{currentStar.props.name}</h2>
							<Table striped bordered hover variant="dark" style={{ width: "400px", alignSelf: 'flex-end' }}>
								<tbody>
									<tr onMouseEnter={this.onMouseEnter}>
										<td className="list-label">Other names: </td>
										<td>{names.map((name, i) => <span key={i}>{name}{names.length - 1 !== i ? ", " : ""}</span>)}</td>
										<td style={{ display: "none" }}><HoverSound /></td>
									</tr>
									<tr onMouseEnter={this.onMouseEnter}>
										<td className="list-label">Radius (km): </td>
										<td>{currentStar.props.radius ? (parseFloat(currentStar.props.radius) * 695510).toFixed(2) : "unknown"}</td>
										<td style={{ display: "none" }}><HoverSound /></td>
									</tr>
									<tr onMouseEnter={this.onMouseEnter}>
										<td className="list-label">Age (billions of years): </td>
										<td>{currentStar.props.age || "unknown"}</td>
										<td style={{ display: "none" }}><HoverSound /></td>
									</tr>
									<tr onMouseEnter={this.onMouseEnter}>
										<td className="list-label">Temperature (kelvin): </td>
										<td style={{ backgroundColor: tempToRGB(currentStar.props.temperature, 0.5) }}>
											{currentStar.props.temperature ? (<span className="temperature-pill">{currentStar.props.temperature}</span>) : "unknown"}
										</td>
										<td style={{ display: "none" }}><HoverSound /></td>
									</tr>
									<tr onMouseEnter={this.onMouseEnter}>
										<td className="list-label">Mass (Solar masses): </td>
										<td>{currentStar.props.mass || "unknown"}</td>
										<td style={{ display: "none" }}><HoverSound /></td>
									</tr>
									<tr onMouseEnter={this.onMouseEnter}>
										<td className="list-label">Distance (light years): </td>
										<td>{currentStar.props.distance || "unknown"}</td>
										<td style={{ display: "none" }}><HoverSound /></td>
									</tr>
									<tr onMouseEnter={this.onMouseEnter}>
										<td className="list-label">Number of planets: </td>
										<td>{currentStar.props.numberOfPlanets || "unknown"}</td>
										<td style={{ display: "none" }}><HoverSound /></td>
									</tr>
								</tbody>
							</Table>

							<div style={{ display: "inline-block", alignSelf: 'flex-end' }}>
								<Planets />
							</div>
						</div>
					</div>

				) : <img alt='' src={spinner} height="30" width="30" />}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Star);