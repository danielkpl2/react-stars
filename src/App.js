import React, { Component } from 'react';
import { createClient } from "hal-rest-client";
import './App.scss';
import Starlist from './Starlist.js';
import Star from './Star.js';
import Orbits from './Orbits.js';
import spinner from './spinner.gif';
import { Button } from 'react-bootstrap';
import { resourceURIs } from './Util.js';
import { getStars, getAdditionalNames } from './Util.js';
import YouTube from 'react-youtube';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      starResource: null,
      resourceURI: resourceURIs.stars,
      page: 1,
      size: 20,
      sort: "numberOfPlanets,desc",
      stars: null,
      headings: [],
      loading: true,
      currentStar: null,
      currentStarIndex: 0,
      planets: null,
      planetHeadings: [],
      search: "",
      searchBy: "",
      next: null,
      prev: null,
      first: null,
      last: null,
      names: "",
      error: "",
      ready: false,
      yt: null,
      mute: false,
      fullScreen: false,
      noVideo: false,
      loadingSearch: false

    }
    
    this.reset = this.reset.bind(this);
    this.handleStarClick = this.handleStarClick.bind(this);
    this.handleSearchByName = this.handleSearchByName.bind(this);
    this.handleSearchByPlanetCount = this.handleSearchByPlanetCount.bind(this);
    this.handleSearchByDistance = this.handleSearchByDistance.bind(this);
    this.handleSearchBy = this.handleSearchBy.bind(this);
    this.onPlay = this.onPlay.bind(this);
    this.onReady = this.onReady.bind(this);
    this.mute = this.mute.bind(this);
    this.fullScreen = this.fullScreen.bind(this);
    this.noVideo = this.noVideo.bind(this);
    this.onFullScreenChange = this.onFullScreenChange.bind(this);
    
  }

  handleSearchBy(e){
    e.preventDefault();
    switch(this.state.searchBy){
      case "name": this.handleSearchByName(); break;
      case "planet-count": this.handleSearchByPlanetCount(); break;
      case "distance": this.handleSearchByDistance(); break;
      case "": this.reset(); break;
      default: break;
    }

  }

  

  async handleStarClick(key){
    this.setState({loadingSearch: true}, async () => {
      try{
        const planetsPromise = this.state.stars[key].link("planets").fetch();
        const namesPromise = getAdditionalNames(this.state.stars[key].link("additionalNames"));
        Promise.all([planetsPromise, namesPromise]).then(response => {
          const planets = response[0];
          const names = response[1];
          this.setState({
            currentStar: this.state.stars[key],
            currentStarIndex: key,
            planets: planets.prop("planets"),
            names: names,
            loadingSearch: false
          })
        })
        
      } catch {
        console.log("Error in handle star click");
        this.setState({
          error: "Error in handle star click",
          loadingSearch: false
        })
      }
    });
  }


  

  async handleSearchByName(){
    this.setState({loadingSearch: true}, async () => {
      try {
      const searchResource = await this.client.fetchResource("alternateNames/search");
      const result = await searchResource.link("findByNameLike").fetch({
        name: '%' + this.state.search + '%',
        page: parseInt(this.state.page)-1,
        size: this.state.size,
        sort: this.state.sort //can only be sorted by name

      });
      console.log(result);
      const stars = await getStars(result);
      const names = stars[0].props.additionalNames;
      const planets = await stars[0].link("planets").fetch();

      this.setState({
          starResource: result,
          resourceURI: resourceURIs.nameSearch,
          stars: stars,
          currentStar: stars[0],
          currentStarIndex: 0,
          next: result.link("next"),
          prev: result.link("prev"),
          first: result.link("first"),
          last: result.link("last"),
          names: names,
          planets: planets.prop("planets"),
          loadingSearch: false
        })
      } catch {
        console.log("Error in search by name");
        this.setState({
          error: "Error in search by name",
          loadingSearch: false
        })
      }
    });
  }

  async handleSearchByPlanetCount(){
    this.setState({loadingSearch: true}, async () => {
      try{
        const searchResource = await this.client.fetchResource("stars/search");
        const result = await searchResource.link("findByNumberOfPlanetsGreaterThan").fetch({
          numberOfPlanets: this.state.search,
          page: parseInt(this.state.page)-1,
          size: this.state.size,
          sort: this.state.sort
        });
        const stars = result.prop("stars");
        const namesPromise = getAdditionalNames(stars[0].link("additionalNames"));
        const planetsPromise = stars[0].link("planets").fetch();  
        Promise.all([planetsPromise, namesPromise]).then(response => {
          const planets = response[0];
          const names = response[1];
          this.setState({
            starResource: result,
            resourceURI: resourceURIs.planetCountSearch,
            stars: stars,
            currentStar: stars[0],
            currentStarIndex: 0,
            next: result.link("next"),
            prev: result.link("prev"),
            first: result.link("first"),
            last: result.link("last"),
            names: names,
            planets: planets.prop("planets"),
            loadingSearch: false

          })
        })
        
      } catch {
        console.log("Error in search by planet count");
        this.setState({
          error: "Error in search by planet count",
          loadingSearch: false
        })
      }
    });
  }

  async handleSearchByDistance(){
    this.setState({loadingSearch: true}, async () => {
      try{
        const searchResource = await this.client.fetchResource("stars/search");
        const result = await searchResource.link("findByDistanceLessThanEqualOrderByDistance").fetch({
          distance: this.state.search,
          page: parseInt(this.state.page)-1,
          size: this.state.size,
          sort: this.state.sort
        });
        const stars = result.prop("stars");
        const namesPromise = getAdditionalNames(stars[0].link("additionalNames"));
        const planetsPromise = stars[0].link("planets").fetch();

        Promise.all([planetsPromise, namesPromise]).then(response => {
          const planets = response[0];
          const names = response[1];
          this.setState({
            starResource: result,
            resourceURI: resourceURIs.distance,
            stars: stars,
            currentStar: stars[0],
            currentStarIndex: 0,
            next: result.link("next"),
            prev: result.link("prev"),
            first: result.link("first"),
            last: result.link("last"),
            names: names,
            planets: planets.prop("planets"),
            loadingSearch: false
          })
        })

        
      } catch {
        console.log("Error in search by distance");
        this.setState({
            error: "Error in search by distance",
            loadingSearch: false
          })
      }
    });
    
    
  }

  async paginate(){
    this.setState({loadingSearch: true}, async () => {
      try {
        const starResource = await this.client.fetchResource(this.state.resourceURI+"?page="+(parseInt(this.state.page)-1)+"&size="+this.state.size+"&sort="+this.state.sort);
        const firstStar = starResource.prop("stars")[0];
        const originalHeadings = Object.keys(starResource.prop("stars")[0].props);
        const headings = ["name", "distance", "radius", "numberOfPlanets"];
        const planetsPromise = firstStar.link("planets").fetch();
        const namesPromise =  getAdditionalNames(firstStar.link("additionalNames"));
        const stars = starResource.prop("stars");
        Promise.all([planetsPromise, namesPromise]).then(response => {
          const planets = response[0];
          const names = response[1];
          // const planetHeadings = Object.keys(planets.prop("planets")[0].props);
        
          this.setState({
            starResource: starResource,
            stars: stars,
            headings: headings,
            originalHeadings: originalHeadings,
            currentStar: firstStar,
            currentStarIndex: 0,
            planets: planets.prop("planets"),
            // planetHeadings: planetHeadings,
            next: starResource.link("next"),
            prev: starResource.link("prev"),
            first: starResource.link("first"),
            last: starResource.link("last"),
            names: names,
            error: "",
            searchBy: "",
            loadingSearch: false,
            page: starResource.prop("page").number+1,
            size: starResource.prop("page").size


          })
        })

 
        
      } catch {
        console.log("Error at paginate");
        this.setState({
            error: "Error at paginate",
            loadingSearch: false
          })
      }
    });
  }

  async reset(){
    this.setState({loadingSearch: true}, async () => {
      try {
        this.client = createClient("http://webdevelopertest.playfusionservices.com/webapptest", {"headers": {"Access-Control-Allow-Origin": "*"}});
      
        const starResource = await this.client.fetchResource(resourceURIs.stars+"?page="+(parseInt(this.state.page)-1)+"&size="+this.state.size+"&sort="+this.state.sort);
        const firstStar = starResource.prop("stars")[0];
        const stars = starResource.prop("stars");
        const originalHeadings = Object.keys(starResource.prop("stars")[0].props);
        const headings = ["name", "distance", "radius", "numberOfPlanets"];

        const planetsPromise = firstStar.link("planets").fetch();

        const namesPromise = getAdditionalNames(firstStar.link("additionalNames"));

        Promise.all([planetsPromise, namesPromise]).then(response => {
          const planets = response[0];
          const names = response[1];
          const planetHeadings = Object.keys(planets.prop("planets")[0].props);
        
          this.setState({
            starResource: starResource,
            resourceURI: resourceURIs.stars,
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
            searchBy: "",
            loadingSearch: false,
            page: starResource.prop("page").number+1,
            size: starResource.prop("page").size

          })
        });

        
        
        
        
      } catch {
        console.log("Error at start up");
        this.setState({
            error: "Error at start up",
            loadingSearch: false
          })
      }
    });
    
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

    document.addEventListener("fullscreenchange", this.onFullScreenChange, false);
    document.addEventListener("webkitfullscreenchange", this.onFullScreenChange, false);
    document.addEventListener("mozfullscreenchange", this.onFullScreenChange, false);

    this.reset();
  }

  onFullScreenChange() {
    var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;

    // if in fullscreen mode fullscreenElement won't be null
    if(fullscreenElement) {
      this.setState({fullScreen: true});
    } else {
      this.setState({fullScreen: false});
    }
  }

  onReady(event) {
    event.target.setVolume(10);
    this.setState({yt: event.target})
  }
  onPlay(event) {
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
      // this.setState({fullScreen: false});
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
      // this.setState({fullScreen: true});
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
            onReady={this.onReady} 
            onPlay={this.onPlay}
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
