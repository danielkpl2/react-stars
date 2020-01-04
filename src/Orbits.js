
//animation: https://codepen.io/ogab/pen/rjVZQj
import React, { Component } from 'react';
import { tempToRGB } from './Util.js';

class Orbits extends Component {

	render(){
		const { planets, currentStar } = this.props.context.state;

    var starRadius = planets ? currentStar.props.radius : null;
    if(starRadius > 1.5) starRadius = 1.5;
		return(
			<div>
			{planets ? (
				<div>
					<div id="star" style={{
						backgroundColor: tempToRGB(currentStar.props.temperature, 0.7),
						width: starRadius ? starRadius*695510 / 4000 + "px" : "100px",
						height: starRadius ? starRadius*695510 / 4000 + "px" : "100px",
						marginLeft: starRadius ? "-" + starRadius*695510 / 4000 / 2 + "px" : "-50px",
						marginTop: starRadius ? "-" + starRadius*695510 / 4000 / 2 + "px" : "-50px",
						

					}}></div>
					<div id="planets">

						{planets.map((planet, key) => 
							<div id={"planet"+key} key={key} className="planet" style={{
								marginLeft: 150+50*(key+1)+"px",
								transformOrigin: -(150+50*(key+1))+"px",
								animation: "circle " + (10 + Math.random()*12) + "s infinite linear",
								backgroundColor: tempToRGB(planet.props.temperature, 0.7),
								width: planet.props.radius ? planet.props.radius*69911 / 4000 + "px": "25px",
								height: planet.props.radius ? planet.props.radius*69911 / 4000 + "px": "25px"
							 }}>

							 </div>	
							)}
					</div>
				</div>
				) : ''}
				
			</div>
			)
	}

}

export default Orbits;