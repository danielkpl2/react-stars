import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { getStars, getAdditionalNames, resourceURIs } from './Util.js';

class Buttons extends Component {
	constructor(props){
    	super(props);
    	this.handleButton = this.handleButton.bind(this);
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
			    loadingSearch: false,
			    page: result.prop("page").number+1,
			    size: result.prop("page").size,
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
			<div className="form-inline" style={{width: "516px"}}>
			{this.props.context.state.starResource != null ? (
				<div style={{display: "flex", width: "100%"}}>
					<Button style={{flexGrow: "1"}} disabled={this.props.context.state.first == null ? true: false} type="button" onClick={() => this.handleButton("first")}>First</Button>
					<Button style={{flexGrow: "1"}} disabled={this.props.context.state.prev == null ? true: false} type="button" onClick={() => this.handleButton("prev")}>Back</Button>
					<Button style={{flexGrow: "1"}} disabled={this.props.context.state.next == null ? true: false} type="button" onClick={() => this.handleButton("next")}>Next</Button>
					<Button style={{flexGrow: "1"}} disabled={this.props.context.state.last == null ? true: false} type="button" onClick={() => this.handleButton("last")}>Last</Button>
					
				</div>
				) : ''
			}
				
			</div>)
	}
}

export default Buttons;