
//animation: https://codepen.io/ogab/pen/rjVZQj
import React, { Component } from 'react';
import ct from "color-temperature";
import { tempToRGB } from './Util.js';

class Orbits extends Component {

	render(){
		const rgb = (temp) => {
      if(temp==null) return;
      var color = ct.colorTemperature2rgb(temp);
      var red = color.red ? color.red : 0;
      var green = color.green ? color.green : 0;
      var blue = color.blue ? color.blue : 0;
      return "rgba("+red+","+green+","+blue+",0.9)";
    }
    var starRadius = this.props.context.state.planets ? this.props.context.state.currentStar.props.radius : null;
    if(starRadius > 2) starRadius = 2;
		return(
			<div>
			{this.props.context.state.planets ? (
				<div>
					<div id="star" style={{
						backgroundColor: rgb(this.props.context.state.currentStar.props.temperature),
						width: starRadius ? starRadius*695510 / 4000 + "px" : "100px",
						height: starRadius ? starRadius*695510 / 4000 + "px" : "100px",
						marginLeft: starRadius ? "-" + starRadius*695510 / 4000 / 2 + "px" : "-50px",
						marginTop: starRadius ? "-" + starRadius*695510 / 4000 / 2 + "px" : "-50px",
						

					}}></div>
					<div id="planets">

						{this.props.context.state.planets.map((planet, key) => 
							<div key={key} className="planet" style={{
								marginLeft: 150+50*(key+1)+"px",
								transformOrigin: -(150+50*(key+1))+"px",
								animation: "circle " + (6 + Math.random()*12) + "s infinite linear",
								backgroundColor: tempToRGB(planet.props.temperature, 0.9),
								width: planet.props.radius ? planet.props.radius*69911 / 4000 + "px": "25px",
								height: planet.props.radius ? planet.props.radius*69911 / 4000 + "px": "25px"
							 }}> </div>	
							)}
					</div>
				</div>
				) : ''}
				
			</div>
			)
	}

}

export default Orbits;