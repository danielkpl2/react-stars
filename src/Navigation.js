import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { getStars, getAdditionalNames, HoverSound } from './Util.js';
import { changePage, setError, setLoadingSearch } from './reducer.js';


const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = {
  changePage, setError, setLoadingSearch
}

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
  }
  onMouseEnter(event) {
    // console.log(event.currentTarget);
    if(!event.currentTarget.disabled){
      event.currentTarget.lastChild.play().then(() => {

    }).catch(error => {

    });
    }
    

  }

  async handleButton(button) {
      this.props.setLoadingSearch(true);
      try {
        const result = await this.props[button].fetch();
        var stars = null;
        if (result.prop("stars") == null) {
          stars = await getStars(result);
        } else {
          stars = result.prop("stars");
        }
        const planets = await stars[0].link("planets").fetch();
        const names = await getAdditionalNames(stars[0].link("additionalNames"));
        
        this.props.changePage({
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
          page: result.prop("page").number + 1,
          size: result.prop("page").size,
        })
      } catch {
        console.log("Error pressing button " + button);
        this.props.setError({error: "Error pressing button " + button})
      }
  }

  render() {
    return (
      <div className="form-inline" style={{ width: "516px" }}>
        {this.props.starResource != null ? (
          <div style={{ display: "flex", width: "100%" }}>
            <Button onMouseEnter={this.onMouseEnter} style={{ width: "25%" }} disabled={this.props.first == null ? true : false} type="button" onClick={() => this.handleButton("first")}><span>First</span><HoverSound /></Button>
            <Button onMouseEnter={this.onMouseEnter} style={{ width: "25%" }} disabled={this.props.prev == null ? true : false} type="button" onClick={() => this.handleButton("prev")}><span>Back</span><HoverSound /></Button>
            <Button onMouseEnter={this.onMouseEnter} style={{ width: "25%" }} disabled={this.props.next == null ? true : false} type="button" onClick={() => this.handleButton("next")}><span>Next</span><HoverSound /></Button>
            <Button onMouseEnter={this.onMouseEnter} style={{ width: "25%" }} disabled={this.props.last == null ? true : false} type="button" onClick={() => this.handleButton("last")}><span>Last</span><HoverSound /></Button>

          </div>
        ) : ''
        }
      </div>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);