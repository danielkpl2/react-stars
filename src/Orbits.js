
//animation: https://codepen.io/ogab/pen/rjVZQj
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tempToRGB } from './Util.js';

const mapStateToProps = state => ({planets: state.planets, currentStar: state.currentStar})
const mapDispatchToProps = {}

class Orbits extends Component {
  render() {
    const { planets, currentStar } = this.props;
    
    if (planets) {
      //make the biggest planet 35px and scale the rest
      var planetRadii = planets.map(planet => {
        return parseFloat(planet.props.radius);
      })
      var max = planetRadii.reduce((max, radius) => {
        if (isNaN(radius)) return max;
        return Math.max(max, radius);
      })
      var scalingFactor = 35 / max;
      var scaledPlanetRadii = planetRadii.map(radius => {
        return radius * scalingFactor;
      })
      var starRadius = currentStar.props.radius;
      if (starRadius > 1.5) starRadius = 1.5;
    }

    return (
      <div >
        {planets ? (
          <div>
            <div id="star" style={{
              backgroundColor: tempToRGB(currentStar.props.temperature, 0.7),
              width: starRadius ? starRadius * 695510 / 4000 + "px" : "100px",
              height: starRadius ? starRadius * 695510 / 4000 + "px" : "100px",
              marginLeft: starRadius ? "-" + starRadius * 695510 / 4000 / 2 + "px" : "-50px",
              marginTop: starRadius ? "-" + starRadius * 695510 / 4000 / 2 + "px" : "-50px",


            }}></div>
            <div id="planets">

              {planets.map((planet, key) =>
                <div id={"planet" + key} key={key} className="planet"
                  style={{
                    marginLeft: 150 + 50 * (key + 1) + "px",
                    transformOrigin: -(150 + 50 * (key + 1)) + "px",
                    animation: "circle " + (10 + Math.random() * 12) + "s infinite linear",
                    backgroundColor: tempToRGB(planet.props.temperature, 0.7),
                    width: scaledPlanetRadii[key] ? scaledPlanetRadii[key] + "px" : "25px",
                    height: scaledPlanetRadii[key] ? scaledPlanetRadii[key] + "px" : "25px",
                    marginTop: scaledPlanetRadii[key] ? -scaledPlanetRadii[key] / 2 + "px" : "-12.5px"
                  }}>
                </div>
              )}
            </div>
            <div className='labels'>
              {planets.map((planet, key) =>
                <div id={"label" + key} key={key} className="label badge">{planet.prop("name") || "?"}</div>
              )}
            </div>
          </div>
        ) : ''}

      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Orbits);