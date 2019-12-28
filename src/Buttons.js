import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { getStars, getAdditionalNames } from './Util.js';

class Buttons extends Component {
	constructor(props){
    	super(props);
    	this.handleButton = this.handleButton.bind(this);
	}

	componentDidMount(){

	}

	async handleButton(button){
		this.props.context.setState({loadingSearch: true}, async () => {
			try {
				const result = await this.props.context.state[button].fetch();
				var stars = null;
				if(result.prop("stars") == null) {
					stars = await getStars(result);
				} else {
					stars = result.prop("stars");
				}
				//console.log("handle button stars");
				// console.log(result);
				const planets = await stars[0].link("planets").fetch();
				const names = await getAdditionalNames(stars[0].link("additionalNames"));
				this.props.context.setState({
					starResource: result,
					stars: stars,
					names: names,
					currentStar: stars[0],
					currentStarIndex: 0,
					planets: planets.prop("planets"),
					next: result.link("next"),
				    prev: result.link("prev"),
				    first: result.link("first"),
				    last: result.link("last"),
				    loadingSearch: false
				})
			} catch {
				console.log("Error pressing button " + button);
				this.setState({
          error: "Error pressing button " + button,
          loadingSearch: false
        })
			}
			
		});
		
	}

	render(){
		return(
			<div>
			{this.props.context.state.starResource != null ? (
				<div style={{display: "flex"}}>
					<Button disabled={this.props.context.state.first == null ? true: false} type="button" onClick={() => this.handleButton("first")}>First</Button>
					<Button disabled={this.props.context.state.prev == null ? true: false} type="button" onClick={() => this.handleButton("prev")}>Previous</Button>
					<Button disabled={this.props.context.state.next == null ? true: false} type="button" onClick={() => this.handleButton("next")}>Next</Button>
					<Button disabled={this.props.context.state.last == null ? true: false} type="button" onClick={() => this.handleButton("last")}>Last</Button>
					<div style={{textAlign: "center", display: "flex", alignItems: "center", justifyContent: "space-between", width: "220px", fontWeight: "bold"}}>
						<span style={{margin: "5px"}}>Found: {this.props.context.state.starResource.prop("page").totalElements}</span>
						<span style={{margin: "5px"}}>Page: {parseInt(this.props.context.state.starResource.prop("page").number)+1}</span>
						<span style={{margin: "5px"}}>Limit: {this.props.context.state.starResource.prop("page").size}</span>
					</div>
				</div>
				) : ''
			}
				
			</div>)
	}
}

export default Buttons;