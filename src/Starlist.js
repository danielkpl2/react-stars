import React, { Component } from 'react';
import { Table, Badge } from 'react-bootstrap';
import Search from './Search.js';
import Buttons from './Buttons.js';
import spinner from './spinner.gif';

class Starlist extends Component {

	render(){
		return(
			<div>
			{this.props.context.state.stars != null ? 
        (
          <div className="wrapper">

            <div className="inner-left" id="inner-left">
            <h2 style={{textAlign: "left"}}>Star Systems</h2>

            <Search context={this.props.context} />
            <div className="form-inline">
              <Buttons context={this.props.context} />
            </div>
          <Table id="stars-table" striped bordered hover variant="dark" style={{width: "500px"}}>
            <thead>

              <tr>
              {typeof this.props.context.state.stars[0] !== 'undefined' && this.props.context.state.stars[0].props.additionalNames ? <><th>Star names</th><th>Canonical name</th></> : <th>Star Name</th>}
                <th>Distance (Light Years)</th>
                <th>Radius (Solar Radii)</th>
                <th>Number of Planets</th>
              </tr>
            </thead>
            <tbody>

          {this.props.context.state.stars.map((value, key) => 
            <tr key={key} className={this.props.context.state.currentStarIndex===key ? "table-active" : ""} onClick={() => this.props.context.handleStarClick(key)}>
               {this.props.context.state.stars[key].props.additionalNames ? <td>{
                value.props.additionalNames.map(name =>
                  <Badge variant={name === value.props.matchedName ? "success" : "primary"} key={name} style={{marginRight: "2px"}}>{name}</Badge>
                  )
              }</td> : null}
               {this.props.context.state.headings.map(heading => 
                  <td key={heading}>{value.props[heading]}</td>
                )}
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