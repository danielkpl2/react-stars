import React, { Component } from 'react';
import { createClient } from "hal-rest-client";
import './App.scss';
import Starlist from './Starlist.js';
import Star from './Star.js';
import Orbits from './Orbits.js';
import spinner from './spinner.gif';
import { Button } from 'react-bootstrap';

import { getStars, getAdditionalNames } from './Util.js';
import YouTube from 'react-youtube';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      starResource: null,
      stars: null,
      headings: [],
      loading: true,
      currentStar: null,
      currentStarIndex: 0,
      planets: null,
      planetHeadings: [],
      search: "",
      searchDistance: "",
      searchBy: "name",
      next: null,
      prev: null,
      first: null,
      last: null,
      names: "",
      error: "",
      ready: false,
      // ready: true,
      yt: null,
      mute: false,
      fullScreen: false,
      noVideo: false

    }
    //this.stars_uri = "http://webdevelopertest.playfusionservices.com/webapptest/stars?page=0&size=20";
    
    this.reset = this.reset.bind(this);
    this.handleStarClick = this.handleStarClick.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchByName = this.handleSearchByName.bind(this);
    this.handleSearchByPlanetCount = this.handleSearchByPlanetCount.bind(this);
    this.handleSearchByDistance = this.handleSearchByDistance.bind(this);
    this.hangleSearchOptionChange = this.hangleSearchOptionChange.bind(this);
    this.handleSearchBy = this.handleSearchBy.bind(this);
    this._onPlay = this._onPlay.bind(this);
    this._onReady = this._onReady.bind(this);
    this.mute = this.mute.bind(this);
    this.fullScreen = this.fullScreen.bind(this);
    this.noVideo = this.noVideo.bind(this);
    
  }

  handleSearchBy(e){
    e.preventDefault();
    switch(this.state.searchBy){
      case "name": this.handleSearchByName(); break;
      case "planet-count": this.handleSearchByPlanetCount(); break;
      case "distance": this.handleSearchByDistance(); break;
      default: break;
    }

  }

  hangleSearchOptionChange(event){
    this.setState({
      searchBy: event.target.value
    })
  }

  async handleStarClick(key){
    try{
      const planets = await this.state.stars[key].link("planets").fetch();
      const names = await getAdditionalNames(this.state.stars[key].link("additionalNames"));
      //console.log(names);
      this.setState({
        currentStar: this.state.stars[key],
        currentStarIndex: key,
        planets: planets.prop("planets"),
        names: names
      })
    } catch {
      console.log("Error in hangle star click");
    }
    
  }


  handleSearchChange(event){
    this.setState({
      search: event.target.value
    })
  }

  async handleSearchByName(){
    try {
      const searchResource = await this.client.fetchResource("alternateNames/search");
      const result = await searchResource.link("findByNameLike").fetch({name: '%' + this.state.search + '%'});
      const stars = await getStars(result);
      const names = stars[0].props.additionalNames;
      //const names = await getAdditionalNames(stars[0].link("additionalNames"));
      const planets = await stars[0].link("planets").fetch();

      this.setState({
          starResource: result,
          stars: stars,
          currentStar: stars[0],
          currentStarIndex: 0,
          next: result.link("next"),
          prev: result.link("prev"),
          first: result.link("first"),
          last: result.link("last"),
          names: names,
          planets: planets.prop("planets"),
          //searchResult: true

        })
    } catch {
      console.log("Error in search by name");
      this.setState({
        error: "Error in search by name"
      })
    }
    

  }

  async handleSearchByPlanetCount(){
    try{
        const searchResource = await this.client.fetchResource("stars/search");

        const result = await searchResource.link("findByNumberOfPlanetsGreaterThan").fetch({numberOfPlanets: this.state.search, page: 0, size: 20, sort: "numberOfPlanets,asc"});

        //console.log(result);
        const stars = result.prop("stars");
        const names = await getAdditionalNames(stars[0].link("additionalNames"));
        const planets = await stars[0].link("planets").fetch();  
        this.setState({
          starResource: result,
          stars: stars,
          currentStar: stars[0],
          currentStarIndex: 0,
          next: result.link("next"),
          prev: result.link("prev"),
          first: result.link("first"),
          last: result.link("last"),
          search: "",
          names: names,
          planets: planets.prop("planets")

        })
      } catch {
        console.log("Error in search by planet count");
        this.setState({
          error: "Error in search by planet count"
        })
      }
    

    

  }

  async handleSearchByDistance(){
    try{
      const searchResource = await this.client.fetchResource("stars/search");
      const result = await searchResource.link("findByDistanceLessThanEqualOrderByDistance").fetch({distance: this.state.search, page: 0, size: 20});
      const stars = result.prop("stars");
      const names = await getAdditionalNames(stars[0].link("additionalNames"));
      const planets = await stars[0].link("planets").fetch();

      this.setState({
          starResource: result,
          stars: stars,
          currentStar: stars[0],
          currentStarIndex: 0,
          next: result.link("next"),
          prev: result.link("prev"),
          first: result.link("first"),
          last: result.link("last"),
          search: "",
          names: names,
          planets: planets.prop("planets")


        })
    } catch {
      console.log("Error in search by distance");
      this.setState({
          error: "Error in search by distance"
        })
    }
    
  }

  async reset(){
    try {
      this.client = createClient("http://webdevelopertest.playfusionservices.com/webapptest", {"headers": {"Access-Control-Allow-Origin": "*"}});
    
      const starResource  = await this.client.fetchResource("/stars?page=0&size=20&sort=numberOfPlanets,desc");
      const firstStar = starResource.prop("stars")[0];
      const planets = await firstStar.link("planets").fetch();
      const names = await getAdditionalNames(firstStar.link("additionalNames"));

      const stars = starResource.prop("stars");
      
      const originalHeadings = Object.keys(starResource.prop("stars")[0].props);
      const planetHeadings = Object.keys(planets.prop("planets")[0].props);
      const headings = ["name", "distance", "radius", "numberOfPlanets"];
      this.setState({
        starResource: starResource,
        stars: stars,
        headings: headings,
        originalHeadings: originalHeadings,
        currentStar: firstStar,
        currentStarIndex: 0,
        planets: planets.prop("planets"),
        planetHeadings: planetHeadings,
        next: starResource.link("next"),
        prev: starResource.link("prev"),
        first: starResource.link("first"),
        last: starResource.link("last"),
        names: names,
        error: "",
        search: "",
        searchBy: "name",


      })
    } catch {
      console.log("Error at start up");
      this.setState({
          error: "Error at start up"
        })
    }
  }

  async componentDidMount(){

    document.addEventListener("mousemove", (e) => {
      //creating variables for perspective animation.
      //left var starts at 25 in the centre of the screen and decreases to 0 as mouse is moved to the left
      //right var starts at -25 in the centre of the screen and increases to 0 as mouse is moved to the right
      var offsetX = 25;
      var offsetY = 5;

      var width = document.documentElement.clientWidth;
      var height = document.documentElement.clientHeight;
      var halfWidth = width / 2;
      var halfHeight = height / 2;
      // var center = -(halfWidth - e.clientX);
      var centerX = e.clientX - halfWidth;
      var centerY = e.clientY - halfHeight;

      var offsetscaledX = (offsetX * centerX) / halfWidth;
      var offsetscaledY = (offsetY * centerY) / halfHeight;

      var leftvar = offsetX + offsetscaledX;
      var rightvar = offsetscaledX - offsetX;

      if(leftvar > offsetX) leftvar = offsetX;
      if(rightvar < -offsetX) rightvar = -offsetX;

      document.documentElement.style.setProperty('--leftvar', leftvar+"deg");
      document.documentElement.style.setProperty('--rightvar', rightvar+"deg");
      document.documentElement.style.setProperty('--leftoffset', leftvar+"px");
      document.documentElement.style.setProperty('--rightoffset', rightvar+"px");
      document.documentElement.style.setProperty('--offsetscaledY', -offsetscaledY+"deg");



    });

    this.reset();

    

  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    //event.target.pauseVideo();
    event.target.setVolume(50);
    this.setState({yt: event.target})
    console.log(event.target);
  }
  _onPlay(event) {
    // access to player in all event handlers via event.target
    //event.target.pauseVideo();
    //event.target.setVolume(50);
    console.log("playing");
    this.setState({ready: true});
  }

  mute(){
    if(this.state.mute){
      this.state.yt.unMute();
      this.setState({mute: false});
    } else {
      this.state.yt.mute();
      this.setState({mute: true});
    }
    
  }

  fullScreen(){
    const elem = document.documentElement;
    // console.log(elem);
    if(this.state.fullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
      }
      this.setState({fullScreen: false});
    } else {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
      }  
      this.setState({fullScreen: true});
    }
    
  }

  noVideo(){
    if(this.state.noVideo){
      this.setState({noVideo: false});
    } else {
      this.setState({noVideo: true, ready: true});
    }
  }



  render(){
    const opts = {
      height: '100%',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        origin: "localhost:3000",
        controls: 0,
        showinfo: 0,
        autohide: 1,
        modestbranding: 1,
        loop: 1
      },

    }
    return (
    <div>
    <div style={{display: this.state.ready ? "block" : "none"}}>
      <div style={{position: "fixed", top: "5px", right: "5px", zIndex: "99"}}>
        <Button onClick={this.noVideo}>No video</Button>
        <Button onClick={this.mute}>{this.state.mute ? "Unmute" : "Mute"}</Button>
        <Button onClick={this.fullScreen}>Full Screen</Button>
      </div>
      {this.state.noVideo ? '' : (
          <YouTube
            videoId="bZNFRIwlQxQ"
            opts={opts}
            onReady={this._onReady} 
            onPlay={this._onPlay}
            className="video-wrapper"


          />
        ) }
      
    </div>
    <div>
    {this.state.ready ? (
      <div className="App container-fluid">
      <div className="row">
        <div className="col-sm" style={{"padding": "60px", paddingTop: "0px"}}>
          <Starlist context={this} />
        </div>
        <div className="col-sm" style={{"padding": "60px", paddingTop: "0px", "textAlign": "left"}}>
          <Star context={this} />
        </div>
      </div>

      <Orbits context={this} />
      </div>
      ) : (
      <div className="loading">
        <img style={{left: "50%", top: "50%", position: "absolute", marginLeft: "-50px", marginTop: "-50px"}} alt='' src={spinner} height="100" width="100" />
        <Button style={{left: "50%", top: "55%", position: "absolute", marginLeft: "-44px"}} onClick={this.noVideo}>No video</Button></div>
      
      )}

    </div>
    </div>
      
    
  );
  }
  
}

export default App;
