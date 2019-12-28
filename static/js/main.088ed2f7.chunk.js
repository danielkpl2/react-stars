(this["webpackJsonpreact-stars"]=this["webpackJsonpreact-stars"]||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/spinner.95eeac79.gif"},35:function(e,t,a){e.exports=a.p+"static/media/mouse-over.dd1e3047.wav"},40:function(e,t,a){e.exports=a(86)},45:function(e,t,a){},68:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(32),l=a.n(s),c=(a(45),a(1)),i=a.n(c),o=a(8),u=a(9),p=a(12),d=a(10),h=a(6),m=a(11),f=a(33),E=(a(68),a(87)),y=a(88),v=a(89),x=a(90),b=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.context,t=e.handleSearchBy,a=e.handleSearchChange,n=e.hangleSearchOptionChange,s=e.reset,l=this.props.context.state,c=l.search,i=l.searchBy,o=l.error;return r.a.createElement("div",null,r.a.createElement("div",{className:"form-inline"},r.a.createElement(v.a,{onSubmit:t},r.a.createElement(v.a.Control,{name:"search",placeholder:"Search By",type:"text",style:{width:"120px",margin:"5px",opacity:"0.8"},value:c,onChange:a}),r.a.createElement(v.a.Control,{as:"select",value:i,onChange:n,style:{width:"150px",margin:"5px",opacity:"0.8"}},r.a.createElement("option",{value:"name"},"Name"),r.a.createElement("option",{value:"planet-count"},"Planet Count"),r.a.createElement("option",{value:"distance"},"Distance")),r.a.createElement(x.a,{variant:"success",type:"submit",style:{width:"100px"}},"Search"),r.a.createElement(x.a,{variant:"success",type:"button",onClick:s,style:{width:"100px"}},"Reset"))),r.a.createElement("div",{style:{textAlign:"left",margin:"5px"}},o))}}]),t}(n.Component),g=a(35),k=a.n(g);function w(e){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=[],e.prop("alternateNames").forEach((function(e){t.push(e.link("star").fetch())})),a.next=4,i.a.awrap(Promise.all(t).then((function(t){return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t.forEach((function(a,n){t[n].props.matchedName=e.prop("alternateNames")[n].prop("name")})),a.abrupt("return",t);case 2:case"end":return a.stop()}}))})).then((function(e){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=[],e.forEach((function(e){t.push(e.link("additionalNames").fetch())})),a.next=4,i.a.awrap(Promise.all(t).then((function(t){return t.forEach((function(t,a){var n=[];t.prop("alternateNames").forEach((function(e){n.push(e.prop("name"))})),e[a].props.additionalNames=n})),e})));case 4:return a.abrupt("return",a.sent);case 5:case"end":return a.stop()}}))})));case 4:return a.abrupt("return",a.sent);case 5:case"end":return a.stop()}}))}function S(e){var t,a;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(e.fetch());case 2:return t=n.sent,a=[],t.prop("alternateNames").forEach((function(e){a.push(e.prop("name"))})),n.abrupt("return",a);case 6:case"end":return n.stop()}}))}function N(e,t){if(null!=e){var n=a(73).colorTemperature2rgb(e);return"rgba("+(n.red?n.red:0)+","+(n.green?n.green:0)+","+(n.blue?n.blue:0)+","+t+")"}}function O(){return r.a.createElement("td",{style:{display:"none"}},r.a.createElement("audio",{type:"audio/wav"},r.a.createElement("source",{src:k.a})))}var C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleButton=a.handleButton.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"handleButton",value:function(e){var t=this;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:this.props.context.setState({loadingSearch:!0},(function(){var a,n,r,s;return i.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,i.a.awrap(t.props.context.state[e].fetch());case 3:if(a=l.sent,n=null,null!=a.prop("stars")){l.next=11;break}return l.next=8,i.a.awrap(w(a));case 8:n=l.sent,l.next=12;break;case 11:n=a.prop("stars");case 12:return l.next=14,i.a.awrap(n[0].link("planets").fetch());case 14:return r=l.sent,l.next=17,i.a.awrap(S(n[0].link("additionalNames")));case 17:s=l.sent,t.props.context.setState({starResource:a,stars:n,names:s,currentStar:n[0],currentStarIndex:0,planets:r.prop("planets"),next:a.link("next"),prev:a.link("prev"),first:a.link("first"),last:a.link("last"),loadingSearch:!1}),l.next=25;break;case 21:l.prev=21,l.t0=l.catch(0),console.log("Error pressing button "+e),t.setState({error:"Error pressing button "+e,loadingSearch:!1});case 25:case"end":return l.stop()}}),null,null,[[0,21]])}));case 1:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,null!=this.props.context.state.starResource?r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(x.a,{disabled:null==this.props.context.state.first,type:"button",onClick:function(){return e.handleButton("first")}},"First"),r.a.createElement(x.a,{disabled:null==this.props.context.state.prev,type:"button",onClick:function(){return e.handleButton("prev")}},"Previous"),r.a.createElement(x.a,{disabled:null==this.props.context.state.next,type:"button",onClick:function(){return e.handleButton("next")}},"Next"),r.a.createElement(x.a,{disabled:null==this.props.context.state.last,type:"button",onClick:function(){return e.handleButton("last")}},"Last"),r.a.createElement("div",{style:{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"space-between",width:"220px",fontWeight:"bold"}},r.a.createElement("span",{style:{margin:"5px"}},"Found: ",this.props.context.state.starResource.prop("page").totalElements),r.a.createElement("span",{style:{margin:"5px"}},"Page: ",parseInt(this.props.context.state.starResource.prop("page").number)+1),r.a.createElement("span",{style:{margin:"5px"}},"Limit: ",this.props.context.state.starResource.prop("page").size))):"")}}]),t}(n.Component),j=a(14),B=a.n(j),F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).onMouseEnter=a.onMouseEnter.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onMouseEnter",value:function(e){e.currentTarget.lastChild.firstElementChild.play().then((function(){})).catch((function(e){}))}},{key:"render",value:function(){var e=this,t=this.props.context.state,a=t.stars,n=t.currentStarIndex,s=t.loadingSearch;return r.a.createElement("div",null,null!=a?r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"inner-left",id:"inner-left"},r.a.createElement("h2",{style:{textAlign:"left"}},"Star Systems ",s?r.a.createElement("img",{style:{verticalAlign:"text-bottom"},alt:"",src:B.a,height:"30",width:"30"}):""),r.a.createElement(b,{context:this.props.context}),r.a.createElement("div",{className:"form-inline"},r.a.createElement(C,{context:this.props.context})),r.a.createElement(E.a,{id:"stars-table",striped:!0,bordered:!0,hover:!0,variant:"dark",style:{width:"516px",borderSpacing:"0"}},r.a.createElement("thead",null,r.a.createElement("tr",null,"undefined"!==typeof a[0]&&a[0].props.additionalNames?r.a.createElement(r.a.Fragment,null,r.a.createElement("th",{className:"width175"},"Star Names"),r.a.createElement("th",{className:"width75"},"Canonical name")):r.a.createElement("th",{className:"width125"},"Star Name"),r.a.createElement("th",{className:a[0].props.additionalNames?"width75":"width125"},"Distance (Light Years)"),r.a.createElement("th",{className:a[0].props.additionalNames?"width100":"width125"},"Radius (Solar Radii)"),r.a.createElement("th",{className:a[0].props.additionalNames?"width91":"width141"},"Number of Planets"))),r.a.createElement("tbody",null,a.map((function(t,s){return r.a.createElement("tr",{onMouseEnter:e.onMouseEnter,key:s,className:n===s?"table-active":"",onClick:function(){return e.props.context.handleStarClick(s)}},a[s].props.additionalNames?r.a.createElement("td",{className:"width175"},t.props.additionalNames.map((function(e){return r.a.createElement(y.a,{variant:e===t.props.matchedName?"success":"primary",key:e,style:{marginRight:"2px"}},e)}))):null,r.a.createElement("td",{className:a[s].props.additionalNames?"width75":"width125"},t.props.name||"?"),r.a.createElement("td",{className:a[s].props.additionalNames?"width75":"width125"},t.props.distance||"?"),r.a.createElement("td",{className:a[s].props.additionalNames?"width100":"width125"},t.props.radius||"?"),r.a.createElement("td",{className:a[s].props.additionalNames?"width75":"width125"},t.props.numberOfPlanets||"?"),r.a.createElement(O,null))})))))):r.a.createElement("img",{alt:"",src:B.a,height:"30",width:"30"}))}}]),t}(n.Component),M=a(36),R=a.n(M),P=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onMouseEnter",value:function(e){e.currentTarget.lastChild.firstElementChild.play().then((function(){})).catch((function(e){}))}},{key:"render",value:function(){var e=this,t=this.props.context.state.planets;return r.a.createElement("div",null,t?r.a.createElement("div",null,r.a.createElement("h2",{style:{textAlign:"right"}},"Planets"),r.a.createElement(E.a,{id:"planets-table",striped:!0,bordered:!0,hover:!0,variant:"dark",style:{width:"866px"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"width100"},"Name"),r.a.createElement("th",{className:"width75"},"Radius (km)"),r.a.createElement("th",{className:"width50"},"Age"),r.a.createElement("th",{className:"width100"},"Temperature (kelvin)"),r.a.createElement("th",{className:"width75"},"Mass (Jupyter masses)"),r.a.createElement("th",{className:"width75"},"Discovery Method"),r.a.createElement("th",{className:"width275"},"Description"),r.a.createElement("th",{className:"width116"},"Discovery Date"))),r.a.createElement("tbody",null,t.map((function(t,a){return r.a.createElement("tr",{onMouseEnter:e.onMouseEnter,key:a},r.a.createElement("td",{className:"width100"},t.prop("name")||"?"),r.a.createElement("td",{className:"width75"},t.prop("radius")?(69911*parseFloat(t.prop("radius"))).toFixed(2):"?"),r.a.createElement("td",{className:"width50"},t.prop("age")||"?"),r.a.createElement("td",{className:"width100",style:{backgroundColor:N(t.prop("temperature"),.5)}},t.prop("temperature")?r.a.createElement("span",{className:"temperature-pill"},t.prop("temperature")):"unknown"),r.a.createElement("td",{className:"width75"},t.prop("mass")?parseFloat(t.prop("mass")).toFixed(4):"?"),r.a.createElement("td",{className:"width75"},t.prop("discoveryMethod")||"?"),r.a.createElement("td",{className:"width275"},t.prop("description")||"?"),r.a.createElement("td",{className:"width100"},R()(t.prop("discoveryDate")).format("YYYY-MM-DD")),r.a.createElement(O,null))}))))):"")}}]),t}(n.Component),D=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onMouseEnter",value:function(e){e.currentTarget.lastChild.firstElementChild.play().then((function(){})).catch((function(e){}))}},{key:"render",value:function(){var e=this.props.context.state,t=e.currentStar,a=e.names;return r.a.createElement("div",null,null!=t?r.a.createElement("div",{className:"wrapper",style:{display:"inline-block"}},r.a.createElement("div",{className:"inner-right",id:"inner-right"},r.a.createElement("h2",{style:{textAlign:"right"}},t.props.name),r.a.createElement(E.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",style:{width:"400px",float:"right"}},r.a.createElement("tbody",null,r.a.createElement("tr",{onMouseEnter:this.onMouseEnter},r.a.createElement("td",{className:"list-label"},"Other names: "),r.a.createElement("td",null,a.map((function(e,t){return r.a.createElement("span",{key:t},e,a.length-1!==t?", ":"")}))),r.a.createElement(O,null)),r.a.createElement("tr",{onMouseEnter:this.onMouseEnter},r.a.createElement("td",{className:"list-label"},"Radius (km): "),r.a.createElement("td",null,t.props.radius?(695510*parseFloat(t.props.radius)).toFixed(2):"unknown"),r.a.createElement(O,null)),r.a.createElement("tr",{onMouseEnter:this.onMouseEnter},r.a.createElement("td",{className:"list-label"},"Age (billions of years): "),r.a.createElement("td",null,t.props.age||"unknown"),r.a.createElement(O,null)),r.a.createElement("tr",{onMouseEnter:this.onMouseEnter},r.a.createElement("td",{className:"list-label"},"Temperature (kelvin): "),r.a.createElement("td",{style:{backgroundColor:N(t.props.temperature,.5)}},t.props.temperature?r.a.createElement("span",{className:"temperature-pill"},t.props.temperature):"unknown"),r.a.createElement(O,null)),r.a.createElement("tr",{onMouseEnter:this.onMouseEnter},r.a.createElement("td",{className:"list-label"},"Mass (Solar masses): "),r.a.createElement("td",null,t.props.mass||"unknown"),r.a.createElement(O,null)),r.a.createElement("tr",{onMouseEnter:this.onMouseEnter},r.a.createElement("td",{className:"list-label"},"Distance (light years): "),r.a.createElement("td",null,t.props.distance||"unknown"),r.a.createElement(O,null)),r.a.createElement("tr",{onMouseEnter:this.onMouseEnter},r.a.createElement("td",{className:"list-label"},"Number of planets: "),r.a.createElement("td",null,t.props.numberOfPlanets||"unknown"),r.a.createElement(O,null)))),r.a.createElement("div",{style:{float:"right"}},r.a.createElement(P,{context:this.props.context})))):r.a.createElement("img",{alt:"",src:B.a,height:"30",width:"30"}))}}]),t}(n.Component),I=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.context.state,t=e.planets,a=e.currentStar,n=t?a.props.radius:null;return n>2&&(n=2),r.a.createElement("div",null,t?r.a.createElement("div",null,r.a.createElement("div",{id:"star",style:{backgroundColor:N(a.props.temperature,.7),width:n?695510*n/4e3+"px":"100px",height:n?695510*n/4e3+"px":"100px",marginLeft:n?"-"+695510*n/4e3/2+"px":"-50px",marginTop:n?"-"+695510*n/4e3/2+"px":"-50px"}}),r.a.createElement("div",{id:"planets"},t.map((function(e,t){return r.a.createElement("div",{key:t,className:"planet",style:{marginLeft:150+50*(t+1)+"px",transformOrigin:-(150+50*(t+1))+"px",animation:"circle "+(10+12*Math.random())+"s infinite linear",backgroundColor:N(e.props.temperature,.7),width:e.props.radius?69911*e.props.radius/4e3+"px":"25px",height:e.props.radius?69911*e.props.radius/4e3+"px":"25px"}})})))):"")}}]),t}(n.Component),L=a(37),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={starResource:null,stars:null,headings:[],loading:!0,currentStar:null,currentStarIndex:0,planets:null,planetHeadings:[],search:"",searchDistance:"",searchBy:"name",next:null,prev:null,first:null,last:null,names:"",error:"",ready:!1,yt:null,mute:!1,fullScreen:!1,noVideo:!1,loadingSearch:!1},a.reset=a.reset.bind(Object(h.a)(a)),a.handleStarClick=a.handleStarClick.bind(Object(h.a)(a)),a.handleSearchChange=a.handleSearchChange.bind(Object(h.a)(a)),a.handleSearchByName=a.handleSearchByName.bind(Object(h.a)(a)),a.handleSearchByPlanetCount=a.handleSearchByPlanetCount.bind(Object(h.a)(a)),a.handleSearchByDistance=a.handleSearchByDistance.bind(Object(h.a)(a)),a.hangleSearchOptionChange=a.hangleSearchOptionChange.bind(Object(h.a)(a)),a.handleSearchBy=a.handleSearchBy.bind(Object(h.a)(a)),a._onPlay=a._onPlay.bind(Object(h.a)(a)),a._onReady=a._onReady.bind(Object(h.a)(a)),a.mute=a.mute.bind(Object(h.a)(a)),a.fullScreen=a.fullScreen.bind(Object(h.a)(a)),a.noVideo=a.noVideo.bind(Object(h.a)(a)),a.onFullScreenChange=a.onFullScreenChange.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleSearchBy",value:function(e){switch(e.preventDefault(),this.state.searchBy){case"name":this.handleSearchByName();break;case"planet-count":this.handleSearchByPlanetCount();break;case"distance":this.handleSearchByDistance()}}},{key:"hangleSearchOptionChange",value:function(e){this.setState({searchBy:e.target.value})}},{key:"handleStarClick",value:function(e){var t=this;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:this.setState({loadingSearch:!0},(function(){var a,n;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.a.awrap(t.state.stars[e].link("planets").fetch());case 3:return a=r.sent,r.next=6,i.a.awrap(S(t.state.stars[e].link("additionalNames")));case 6:n=r.sent,t.setState({currentStar:t.state.stars[e],currentStarIndex:e,planets:a.prop("planets"),names:n,loadingSearch:!1}),r.next=14;break;case 10:r.prev=10,r.t0=r.catch(0),console.log("Error in hangle star click"),t.setState({error:"Error in hangle star click",loadingSearch:!1});case 14:case"end":return r.stop()}}),null,null,[[0,10]])}));case 1:case"end":return a.stop()}}),null,this)}},{key:"handleSearchChange",value:function(e){this.setState({search:e.target.value})}},{key:"handleSearchByName",value:function(){var e=this;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({loadingSearch:!0},(function(){var t,a,n,r,s;return i.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,i.a.awrap(e.client.fetchResource("alternateNames/search"));case 3:return t=l.sent,l.next=6,i.a.awrap(t.link("findByNameLike").fetch({name:"%"+e.state.search+"%"}));case 6:return a=l.sent,l.next=9,i.a.awrap(w(a));case 9:return n=l.sent,r=n[0].props.additionalNames,l.next=13,i.a.awrap(n[0].link("planets").fetch());case 13:s=l.sent,e.setState({starResource:a,stars:n,currentStar:n[0],currentStarIndex:0,next:a.link("next"),prev:a.link("prev"),first:a.link("first"),last:a.link("last"),names:r,planets:s.prop("planets"),loadingSearch:!1}),l.next=21;break;case 17:l.prev=17,l.t0=l.catch(0),console.log("Error in search by name"),e.setState({error:"Error in search by name",loadingSearch:!1});case 21:case"end":return l.stop()}}),null,null,[[0,17]])}));case 1:case"end":return t.stop()}}),null,this)}},{key:"handleSearchByPlanetCount",value:function(){var e=this;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({loadingSearch:!0},(function(){var t,a,n,r,s;return i.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,i.a.awrap(e.client.fetchResource("stars/search"));case 3:return t=l.sent,l.next=6,i.a.awrap(t.link("findByNumberOfPlanetsGreaterThan").fetch({numberOfPlanets:e.state.search,page:0,size:20,sort:"numberOfPlanets,asc"}));case 6:return a=l.sent,n=a.prop("stars"),l.next=10,i.a.awrap(S(n[0].link("additionalNames")));case 10:return r=l.sent,l.next=13,i.a.awrap(n[0].link("planets").fetch());case 13:s=l.sent,e.setState({starResource:a,stars:n,currentStar:n[0],currentStarIndex:0,next:a.link("next"),prev:a.link("prev"),first:a.link("first"),last:a.link("last"),search:"",names:r,planets:s.prop("planets"),loadingSearch:!1}),l.next=21;break;case 17:l.prev=17,l.t0=l.catch(0),console.log("Error in search by planet count"),e.setState({error:"Error in search by planet count",loadingSearch:!1});case 21:case"end":return l.stop()}}),null,null,[[0,17]])}));case 1:case"end":return t.stop()}}),null,this)}},{key:"handleSearchByDistance",value:function(){var e=this;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({loadingSearch:!0},(function(){var t,a,n,r,s;return i.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,i.a.awrap(e.client.fetchResource("stars/search"));case 3:return t=l.sent,l.next=6,i.a.awrap(t.link("findByDistanceLessThanEqualOrderByDistance").fetch({distance:e.state.search,page:0,size:20}));case 6:return a=l.sent,n=a.prop("stars"),l.next=10,i.a.awrap(S(n[0].link("additionalNames")));case 10:return r=l.sent,l.next=13,i.a.awrap(n[0].link("planets").fetch());case 13:s=l.sent,e.setState({starResource:a,stars:n,currentStar:n[0],currentStarIndex:0,next:a.link("next"),prev:a.link("prev"),first:a.link("first"),last:a.link("last"),search:"",names:r,planets:s.prop("planets"),loadingSearch:!1}),l.next=21;break;case 17:l.prev=17,l.t0=l.catch(0),console.log("Error in search by distance"),e.setState({error:"Error in search by distance",loadingSearch:!1});case 21:case"end":return l.stop()}}),null,null,[[0,17]])}));case 1:case"end":return t.stop()}}),null,this)}},{key:"reset",value:function(){var e=this;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({loadingSearch:!0},(function(){var t,a,n,r,s,l,c,o;return i.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,e.client=Object(f.createClient)("http://webdevelopertest.playfusionservices.com/webapptest",{headers:{"Access-Control-Allow-Origin":"*"}}),u.next=4,i.a.awrap(e.client.fetchResource("/stars?page=0&size=20&sort=numberOfPlanets,desc"));case 4:return t=u.sent,a=t.prop("stars")[0],u.next=8,i.a.awrap(a.link("planets").fetch());case 8:return n=u.sent,u.next=11,i.a.awrap(S(a.link("additionalNames")));case 11:r=u.sent,s=t.prop("stars"),l=Object.keys(t.prop("stars")[0].props),c=Object.keys(n.prop("planets")[0].props),o=["name","distance","radius","numberOfPlanets"],e.setState({starResource:t,stars:s,headings:o,originalHeadings:l,currentStar:a,currentStarIndex:0,planets:n.prop("planets"),planetHeadings:c,next:t.link("next"),prev:t.link("prev"),first:t.link("first"),last:t.link("last"),names:r,error:"",search:"",searchBy:"name",loadingSearch:!1}),u.next=23;break;case 19:u.prev=19,u.t0=u.catch(0),console.log("Error at start up"),e.setState({error:"Error at start up",loadingSearch:!1});case 23:case"end":return u.stop()}}),null,null,[[0,19]])}));case 1:case"end":return t.stop()}}),null,this)}},{key:"componentDidMount",value:function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:document.addEventListener("mousemove",(function(e){var t=document.documentElement.clientWidth/2,a=document.documentElement.clientHeight/2,n=25*(e.clientX-t)/t,r=5*(e.clientY-a)/a,s=25+n,l=n-25;s>25&&(s=25),l<-25&&(l=-25),document.documentElement.style.setProperty("--leftvar",s+"deg"),document.documentElement.style.setProperty("--rightvar",l+"deg"),document.documentElement.style.setProperty("--leftoffset",s+"px"),document.documentElement.style.setProperty("--rightoffset",l+"px"),document.documentElement.style.setProperty("--offsetscaledY",-r+"deg")})),document.addEventListener("fullscreenchange",this.onFullScreenChange,!1),document.addEventListener("webkitfullscreenchange",this.onFullScreenChange,!1),document.addEventListener("mozfullscreenchange",this.onFullScreenChange,!1),this.reset();case 5:case"end":return e.stop()}}),null,this)}},{key:"onFullScreenChange",value:function(){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement?this.setState({fullScreen:!0}):this.setState({fullScreen:!1})}},{key:"_onReady",value:function(e){e.target.setVolume(10),this.setState({yt:e.target})}},{key:"_onPlay",value:function(e){this.setState({ready:!0})}},{key:"mute",value:function(){this.state.mute?(this.state.yt.unMute(),this.setState({mute:!1})):(this.state.yt.mute(),this.setState({mute:!0}))}},{key:"fullScreen",value:function(){var e=document.documentElement;this.state.fullScreen?document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}},{key:"noVideo",value:function(){this.state.noVideo?this.setState({noVideo:!1}):this.setState({noVideo:!0,ready:!0})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{display:this.state.ready?"block":"none"}},r.a.createElement("div",{style:{position:"fixed",top:"5px",right:"5px",zIndex:"99"}},r.a.createElement(x.a,{onClick:this.noVideo},"No video"),r.a.createElement(x.a,{onClick:this.mute},this.state.mute?"Unmute":"Mute"),r.a.createElement(x.a,{onClick:this.fullScreen},"Full Screen")),this.state.noVideo?"":r.a.createElement(L.a,{videoId:"bZNFRIwlQxQ",opts:{height:"100%",width:"100%",playerVars:{autoplay:1,origin:"localhost:3000",controls:0,showinfo:0,autohide:1,modestbranding:1,loop:1}},onReady:this._onReady,onPlay:this._onPlay,className:"video-wrapper"})),r.a.createElement("div",null,this.state.ready?r.a.createElement("div",{className:"App container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm",style:{padding:"60px",paddingTop:"0px"}},r.a.createElement(F,{context:this})),r.a.createElement("div",{className:"col-sm",style:{padding:"60px",paddingTop:"0px",textAlign:"left"}},r.a.createElement(D,{context:this}))),r.a.createElement(I,{context:this})):r.a.createElement("div",{className:"loading"},r.a.createElement("img",{style:{left:"50%",top:"50%",position:"absolute",marginLeft:"-50px",marginTop:"-50px"},alt:"",src:B.a,height:"100",width:"100"}),r.a.createElement(x.a,{style:{left:"50%",top:"55%",position:"absolute",marginLeft:"-44px"},onClick:this.noVideo},"No video"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.088ed2f7.chunk.js.map