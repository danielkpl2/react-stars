import React, { Component } from 'react';
import { Table, Badge } from 'react-bootstrap';
import Search from './Search.js';
import Buttons from './Buttons.js';
import spinner from './spinner.gif';
import { HoverSound } from './Util.js';

class Starlist extends Component {
	constructor(props){
		super(props);
		this.onMouseEnter = this.onMouseEnter.bind(this);
	}

	// onMouseEnter(event){
	onMouseEnter(event){
		//document.getElementById("audio"+key).play();
		//console.log(audio);
		// var a = audio.play();
		//console.log(a);
		// console.log(event.currentTarget);
		event.currentTarget.lastChild.firstElementChild.play().then(() => {

		}).catch(error => {

		});

	}
	render(){
		const { stars, currentStarIndex, loadingSearch } = this.props.context.state;
		// const columnWidth = typeof stars[0] !== 'undefined' && stars[0].props.additionalNames ? 100 : 125;
		return(
			<div>
			{stars != null ? 
        (
          <div className="wrapper">

            <div className="inner-left" id="inner-left">
            <h2 style={{textAlign: "left"}}>Star Systems {loadingSearch ? <img style={{verticalAlign: "text-bottom"}} alt='' src={spinner} height="30" width="30" /> : ''}</h2>
            <Search context={this.props.context} />
            <div className="form-inline">
              <Buttons context={this.props.context} />
            </div>
          <Table id="stars-table" striped bordered hover variant="dark" style={{width: "516px", borderSpacing: "0"}}>
            <thead>

              <tr>
              {typeof stars[0] !== 'undefined' && stars[0].props.additionalNames ? 
              <><th className="width175">Star Names</th><th className="width75">Canonical name</th></>
               : <th className="width125">Star Name</th>}
                <th className={stars[0].props.additionalNames ? "width75" : "width125"}>Distance (Light Years)</th>
                <th className={stars[0].props.additionalNames ? "width100" : "width125"}>Radius (Solar Radii)</th>
                <th className={stars[0].props.additionalNames ? "width91" : "width141"}>Number of Planets</th>
              </tr>
            </thead>
            <tbody>

          
        		{stars.map((value, key) => 
		          <tr onMouseEnter={this.onMouseEnter} key={key} className={currentStarIndex===key ? "table-active" : ""} onClick={() => this.props.context.handleStarClick(key)}>
		             {stars[key].props.additionalNames ? <td className="width175">{
		              value.props.additionalNames.map(name =>
		                <Badge variant={name === value.props.matchedName ? "success" : "primary"} key={name} style={{marginRight: "2px"}}>{name}</Badge>
		                )
		            }</td> : null}
		             
		             <td className={stars[key].props.additionalNames ? "width75" : "width125"}>{value.props["name"] || "?"}</td>
		             <td className={stars[key].props.additionalNames ? "width75" : "width125"}>{value.props["distance"] || "?"}</td>
		             <td className={stars[key].props.additionalNames ? "width100" : "width125"}>{value.props["radius"] || "?"}</td>
		             <td className={stars[key].props.additionalNames ? "width75" : "width125"}>{value.props["numberOfPlanets"] || "?"}</td>
		             <HoverSound />
		          </tr>

            )}

          	
          

          </tbody>
          </Table>
          </div>
          </div>

          
        ) : <img alt='' src={spinner} height="30" width="30" />}
			</div>

			)
	}
}

export default Starlist;