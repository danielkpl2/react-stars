(this["webpackJsonpreact-stars"]=this["webpackJsonpreact-stars"]||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/spinner.95eeac79.gif"},34:function(e,t,a){e.exports=a.p+"static/media/mouse-over.dd1e3047.wav"},40:function(e,t,a){e.exports=a(86)},45:function(e,t,a){},68:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(32),l=a.n(s),c=(a(45),a(2)),i=a.n(c),o=a(8),u=a(9),p=a(12),h=a(10),d=a(6),m=a(11),f=a(33),E=(a(68),a(87)),y=a(88),g=a(89),v=a(34),b=a.n(v);function x(e){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=[],e.prop("alternateNames").forEach((function(e){t.push(e.link("star").fetch())})),a.abrupt("return",Promise.all(t).then((function(t){return t.forEach((function(a,n){t[n].props.matchedName=e.prop("alternateNames")[n].prop("name")})),t})).then((function(e){var t=[];return e.forEach((function(e){t.push(e.link("additionalNames").fetch())})),Promise.all(t).then((function(t){return t.forEach((function(t,a){var n=[];t.prop("alternateNames").forEach((function(e){n.push(e.prop("name"))})),e[a].props.additionalNames=n})),e}))})));case 3:case"end":return a.stop()}}))}function S(e){var t,a;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(e.fetch());case 2:return t=n.sent,a=[],t.prop("alternateNames").forEach((function(e){a.push(e.prop("name"))})),n.abrupt("return",a);case 6:case"end":return n.stop()}}))}function k(e,t){if(null!=e){var n=a(69).colorTemperature2rgb(e);return"rgba("+(n.red?n.red:0)+","+(n.green?n.green:0)+","+(n.blue?n.blue:0)+","+t+")"}}function w(){return r.a.createElement("td",{style:{display:"none"}},r.a.createElement("audio",{type:"audio/wav"},r.a.createElement("source",{src:b.a})))}var N={stars:"stars",nameSearch:"alternateNames/search/findByNameLike",planetCountSearch:"stars/search/findByNumberOfPlanetsGreaterThan",distance:"stars/search/findByDistanceLessThanEqualOrderByDistance"},O=[{name:"Name \u2193",value:"name,desc"},{name:"Name \u2191",value:"name,asc"},{name:"Radius \u2193",value:"radius,desc"},{name:"Radius \u2191",value:"radius,asc"},{name:"Age \u2193",value:"age,desc"},{name:"Age \u2191",value:"age,asc"},{name:"Temperature \u2193",value:"temperature,desc"},{name:"Temperature \u2191",value:"temperature,asc"},{name:"Mass \u2193",value:"mass,desc"},{name:"Mass \u2191",value:"mass,asc"},{name:"Distance \u2193",value:"distance,desc"},{name:"Distance \u2191",value:"distance,asc"},{name:"Number of Planets \u2193",value:"numberOfPlanets,desc"},{name:"Number of Planets \u2191",value:"numberOfPlanets,asc"}],C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleSortChange=a.handleSortChange.bind(Object(d.a)(a)),a.handleSearchChange=a.handleSearchChange.bind(Object(d.a)(a)),a.hangleSearchOptionChange=a.hangleSearchOptionChange.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleSearchChange",value:function(e){this.props.context.setState({search:e.target.value})}},{key:"hangleSearchOptionChange",value:function(e){this.props.context.setState({searchBy:e.target.value})}},{key:"handleSortChange",value:function(e){this.props.context.setState({sort:e.target.value})}},{key:"render",value:function(){var e=this.props.context.handleSearchBy,t=this.props.context.state,a=t.search,n=t.searchBy,s=[];switch(this.props.context.state.searchBy){case"":case"planet-count":case"distance":s=O;break;case"name":s=[{name:"Name \u2193",value:"name,desc"},{name:"Name \u2191",value:"name,asc"}];break;default:s=O}return r.a.createElement("div",{className:"form-inline",style:{width:"516px"}},r.a.createElement("div",{style:{width:"100%",textAlign:"left"}},r.a.createElement(g.a,{onSubmit:e,style:{display:"flex"}},r.a.createElement(g.a.Control,{name:"search",placeholder:"Search By",type:"text",style:{margin:"5px",opacity:"0.8",width:"119px"},value:a,onChange:this.handleSearchChange}),r.a.createElement(g.a.Control,{as:"select",value:n,onChange:this.hangleSearchOptionChange,style:{margin:"5px",opacity:"0.8",width:"119px"}},r.a.createElement("option",{value:""},"--"),r.a.createElement("option",{value:"name"},"Name"),r.a.createElement("option",{value:"planet-count"},"Planet No."),r.a.createElement("option",{value:"distance"},"Distance")),r.a.createElement(g.a.Control,{as:"select",onChange:this.handleSortChange,value:this.props.context.state.sort,style:{margin:"5px",opacity:"0.8",width:"50%"}},">",s.map((function(e,t){return r.a.createElement("option",{key:t,value:e.value},e.name)}))))))}}]),t}(n.Component),j=a(90),B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleButton=a.handleButton.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleButton",value:function(e){var t=this;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:this.props.context.setState({loadingSearch:!0},(function(){var a,n,r,s;return i.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,i.a.awrap(t.props.context.state[e].fetch());case 3:if(a=l.sent,n=null,null!=a.prop("stars")){l.next=11;break}return l.next=8,i.a.awrap(x(a));case 8:n=l.sent,l.next=12;break;case 11:n=a.prop("stars");case 12:return l.next=14,i.a.awrap(n[0].link("planets").fetch());case 14:return r=l.sent,l.next=17,i.a.awrap(S(n[0].link("additionalNames")));case 17:s=l.sent,t.props.context.setState({starResource:a,stars:n,names:s,currentStar:n[0],currentStarIndex:0,planets:r.prop("planets"),next:a.link("next"),prev:a.link("prev"),first:a.link("first"),last:a.link("last"),loadingSearch:!1,page:a.prop("page").number+1,size:a.prop("page").size}),l.next=25;break;case 21:l.prev=21,l.t0=l.catch(0),console.log("Error pressing button "+e),t.setState({error:"Error pressing button "+e,loadingSearch:!1});case 25:case"end":return l.stop()}}),null,null,[[0,21]])}));case 1:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"form-inline",style:{width:"516px"}},null!=this.props.context.state.starResource?r.a.createElement("div",{style:{display:"flex",width:"100%"}},r.a.createElement(j.a,{style:{width:"25%"},disabled:null==this.props.context.state.first,type:"button",onClick:function(){return e.handleButton("first")}},"First"),r.a.createElement(j.a,{style:{width:"25%"},disabled:null==this.props.context.state.prev,type:"button",onClick:function(){return e.handleButton("prev")}},"Back"),r.a.createElement(j.a,{style:{width:"25%"},disabled:null==this.props.context.state.next,type:"button",onClick:function(){return e.handleButton("next")}},"Next"),r.a.createElement(j.a,{style:{width:"25%"},disabled:null==this.props.context.state.last,type:"button",onClick:function(){return e.handleButton("last")}},"Last")):"")}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handlePageChange=a.handlePageChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleSizeChange=a.handleSizeChange.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handlePageChange",value:function(e){this.props.context.setState({page:e.target.value})}},{key:"handleSubmit",value:function(e){switch(e.preventDefault(),this.props.context.state.resourceURI){case N.nameSearch:this.props.context.handleSearchByName();break;case N.stars:this.props.context.paginate();break;case N.planetCountSearch:this.props.context.handleSearchByPlanetCount();break;case N.distance:this.props.context.handleSearchByDistance();break;default:this.props.context.paginate()}}},{key:"handleSizeChange",value:function(e){this.props.context.setState({size:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{style:{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"space-between",width:"516px",fontWeight:"bold"}},r.a.createElement("span",{style:{margin:"5px",width:"25%"}},"Found: ",this.props.context.state.starResource.prop("page").totalElements),r.a.createElement("span",{style:{margin:"5px",width:"25%"}},"Page:",r.a.createElement(g.a,{onSubmit:this.handleSubmit,style:{display:"inline-block"}},r.a.createElement("input",{className:"pagination-input",type:"number",min:"1",max:Math.ceil(parseInt(this.props.context.state.starResource.prop("page").totalElements)/parseInt(this.props.context.state.starResource.prop("page").size)),onChange:this.handlePageChange,value:this.props.context.state.page}))),r.a.createElement("span",{style:{margin:"5px",width:"25%"}},r.a.createElement("span",null,"Limit: ",r.a.createElement(g.a,{onSubmit:this.handleSubmit,style:{display:"inline-block"}},r.a.createElement("input",{className:"pagination-input",type:"number",onChange:this.handleSizeChange,value:this.props.context.state.size})))),r.a.createElement("span",{style:{margin:"5px",width:"25%"}},r.a.createElement(j.a,{variant:"success",type:"button",style:{margin:"0px",width:"100%"},onClick:this.props.context.handleSearchBy},"Search")))}}]),t}(n.Component),R=a(14),M=a.n(R),F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onMouseEnter=a.onMouseEnter.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onMouseEnter",value:function(e){e.currentTarget.lastChild.firstElementChild.play().then((function(){})).catch((function(e){}))}},{key:"render",value:function(){var e=this,t=this.props.context.state,a=t.stars,n=t.currentStarIndex,s=t.loadingSearch,l=t.error;return r.a.createElement("div",null,null!=a?r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"inner-left",id:"inner-left"},r.a.createElement("h2",{style:{textAlign:"left"}},"Star Systems ",s?r.a.createElement("img",{style:{verticalAlign:"text-bottom"},alt:"",src:M.a,height:"30",width:"30"}):""),r.a.createElement(C,{context:this.props.context}),r.a.createElement(P,{context:this.props.context}),r.a.createElement(B,{context:this.props.context}),r.a.createElement("div",{style:{textAlign:"left",margin:"5px"}},l),r.a.createElement(E.a,{id:"stars-table",striped:!0,bordered:!0,hover:!0,variant:"dark",style:{width:"516px",borderSpacing:"0"}},r.a.createElement("thead",null,r.a.createElement("tr",null,"undefined"!==typeof a[0]&&a[0].props.additionalNames?r.a.createElement(r.a.Fragment,null,r.a.createElement("th",{className:"width175"},"Star Names"),r.a.createElement("th",{className:"width75"},"Canonical name")):r.a.createElement("th",{className:"width125"},"Star Name"),r.a.createElement("th",{className:a[0].props.additionalNames?"width75":"width125"},"Distance (Light Years)"),r.a.createElement("th",{className:a[0].props.additionalNames?"width100":"width125"},"Radius (Solar Radii)"),r.a.createElement("th",{className:a[0].props.additionalNames?"width91":"width141"},"Number of Planets"))),r.a.createElement("tbody",null,a.map((function(t,s){return r.a.createElement("tr",{onMouseEnter:e.onMouseEnter,key:s,className:n===s?"table-active":"",onClick:function(){return e.props.context.handleStarClick(s)}},a[s].props.additionalNames?r.a.createElement("td",{className:"width175"},t.props.additionalNames.map((function(e,a){return r.a.createElement(y.a,{variant:e===t.props.matchedName?"success":"primary",key:a,style:{marginRight:"2px"}},e)}))):null,r.a.createElement("td",{className:a[s].props.additionalNames?"width75":"width125"},t.props.name||"?"),r.a.createElement("td",{className:a[s].props.additionalNames?"width75":"width125"},t.props.distance||"?"),r.a.createElement("td",{className:a[s].props.additionalNames?"width100":"width125"},t.props.radius||"?"),r.a.createElement("td",{className:a[s].props.additionalNames?"width75":"width125"},t.props.numberOfPlanets||"?"),r.a.createElement(w,null))})))))):r.a.createElement("img",{alt:"",src:M.a,height:"30",width:"30"}))}}]),t}(n.Component),z=a(36),I=a.n(z),D=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onMouseEnter",value:function(e,t){e.currentTarget.lastChild.firstElementChild.play().then((function(){})).catch((function(e){}))}},{key:"render",value:function(){var e=this,t=this.props.context.state.planets;return r.a.createElement("div",null,t?r.a.createElement("div",null,r.a.createElement("h2",{style:{textAlign:"right"}},"Planets"),r.a.createElement(E.a,{id:"planets-table",striped:!0,bordered:!0,hover:!0,variant:"dark",style:{width:"866px"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"width100"},"Name"),r.a.createElement("th",{className:"width75"},"Radius (km)"),r.a.createElement("th",{className:"width50"},"Age"),r.a.createElement("th",{className:"width100"},"Temperature (kelvin)"),r.a.createElement("th",{className:"width75"},"Mass (Jupyter masses)"),r.a.createElement("th",{className:"width75"},"Discovery Method"),r.a.createElement("th",{className:"width275"},"Description"),r.a.createElement("th",{className:"width116"},"Discovery Date"))),r.a.createElement("tbody",null,t.map((function(t,a){return r.a.createElement("tr",{onMouseEnter:function(t){return e.onMouseEnter(t,a)},key:a},r.a.createElement("td",{className:"width100"},t.prop("name")||"?"),r.a.createElement("td",{className:"width75"},t.prop("radius")?(69911*parseFloat(t.prop("radius"))).toFixed(2):"?"),r.a.createElement("td",{className:"width50"},t.prop("age")||"?"),r.a.createElement("td",{className:"width100",style:{backgroundColor:k(t.prop("temperature"),.5)}},t.prop("temperature")?r.a.createElement("span",{className:"temperature-pill"},t.prop("temperature")):"unknown"),r.a.createElement("td",{className:"width75"},t.prop("mass")?parseFloat(t.prop("mass")).toFixed(4):"?"),r.a.createElement("td",{className:"width75"},t.prop("discoveryMethod")||"?"),r.a.createElement("td",{className:"width275"},t.prop("description")||"?"),r.a.createElement("td",{className:"width100"},I()(t.prop("discoveryDate")).format("YYYY-MM-DD")),r.a.createElement(w,null))}))))):"")}}]),t}(n.Component),T=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onMouseEnter",value:function(e){e.currentTarget.lastChild.firstElementChild.play().then((function(){})).catch((function(e){}))}},{key:"render",value:function(){var e=this.props.context.state,t=e.currentStar,a=e.names;return r.a.createElement("div",null,null!=t?r.a.createElement("div",{className:"wrapper",style:{display:"inline-block"}},r.a.createElement("div",{className:"inner-right",id:"inner-right"},r.a.createElement("h2",{style:{textAlign:"right"}},t.props.name),r.a.createElement(E.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",style:{width:"400px",float:"right"}},r.a.createElement("tbody",null,r.a.createElement("tr",{onMouseEnter:this.onMouseEnter},r.a.createElement("td",{className:"list-label"},"Other names: "),r.a.createElement("td",null,a.map((function(e,t){return r.a.createElement("span",{key:t},e,a.length-1!==t?", ":"")}))),r.a.createElement(w,null)),r.a.createElement("tr",{onMouseEnter:this.onMouseEnter},r.a.createElement("td",{className:"list-label"},"Radius (km): "),r.a.createElement("td",null,t.props.radius?(695510*parseFloat(t.props.radius)).toFixed(2):"unknown"),r.a.createElement(w,null)),r.a.createElement("tr",{onMouseEnter:this.onMouseEnter},r.a.createElement("td",{className:"list-label"},"Age (billions of years): "),r.a.createElement("td",null,t.props.age||"unknown"),r.a.createElement(w,null)),r.a.createElement("tr",{onMouseEnter:this.onMouseEnter},r.a.createElement("td",{className:"list-label"},"Temperature (kelvin): "),r.a.createElement("td",{style:{backgroundColor:k(t.props.temperature,.5)}},t.props.temperature?r.a.createElement("span",{className:"temperature-pill"},t.props.temperature):"unknown"),r.a.createElement(w,null)),r.a.createElement("tr",{onMouseEnter:this.onMouseEnter},r.a.createElement("td",{className:"list-label"},"Mass (Solar masses): "),r.a.createElement("td",null,t.props.mass||"unknown"),r.a.createElement(w,null)),r.a.createElement("tr",{onMouseEnter:this.onMouseEnter},r.a.createElement("td",{className:"list-label"},"Distance (light years): "),r.a.createElement("td",null,t.props.distance||"unknown"),r.a.createElement(w,null)),r.a.createElement("tr",{onMouseEnter:this.onMouseEnter},r.a.createElement("td",{className:"list-label"},"Number of planets: "),r.a.createElement("td",null,t.props.numberOfPlanets||"unknown"),r.a.createElement(w,null)))),r.a.createElement("div",{style:{float:"right"}},r.a.createElement(D,{context:this.props.context})))):r.a.createElement("img",{alt:"",src:M.a,height:"30",width:"30"}))}}]),t}(n.Component),A=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.context.state,t=e.planets,a=e.currentStar,n=t?a.props.radius:null;return n>1.5&&(n=1.5),r.a.createElement("div",null,t?r.a.createElement("div",null,r.a.createElement("div",{id:"star",style:{backgroundColor:k(a.props.temperature,.7),width:n?695510*n/4e3+"px":"100px",height:n?695510*n/4e3+"px":"100px",marginLeft:n?"-"+695510*n/4e3/2+"px":"-50px",marginTop:n?"-"+695510*n/4e3/2+"px":"-50px"}}),r.a.createElement("div",{id:"planets"},t.map((function(e,t){return r.a.createElement("div",{id:"planet"+t,key:t,className:"planet",style:{marginLeft:150+50*(t+1)+"px",transformOrigin:-(150+50*(t+1))+"px",animation:"circle "+(10+12*Math.random())+"s infinite linear",backgroundColor:k(e.props.temperature,.7),width:e.props.radius?69911*e.props.radius/4e3+"px":"25px",height:e.props.radius?69911*e.props.radius/4e3+"px":"25px",marginTop:e.props.radius?69911*-e.props.radius/4e3/2+"px":"-12.5px"}})})))):"")}}]),t}(n.Component),L=a(37),V=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={starResource:null,resourceURI:N.stars,page:1,size:20,sort:"numberOfPlanets,desc",stars:null,headings:[],loading:!0,currentStar:null,currentStarIndex:0,planets:null,planetHeadings:[],search:"",searchBy:"",next:null,prev:null,first:null,last:null,names:"",error:"",ready:!1,yt:null,mute:!1,fullScreen:!1,noVideo:!1,loadingSearch:!1},a.reset=a.reset.bind(Object(d.a)(a)),a.handleStarClick=a.handleStarClick.bind(Object(d.a)(a)),a.handleSearchByName=a.handleSearchByName.bind(Object(d.a)(a)),a.handleSearchByPlanetCount=a.handleSearchByPlanetCount.bind(Object(d.a)(a)),a.handleSearchByDistance=a.handleSearchByDistance.bind(Object(d.a)(a)),a.handleSearchBy=a.handleSearchBy.bind(Object(d.a)(a)),a.onPlay=a.onPlay.bind(Object(d.a)(a)),a.onReady=a.onReady.bind(Object(d.a)(a)),a.mute=a.mute.bind(Object(d.a)(a)),a.fullScreen=a.fullScreen.bind(Object(d.a)(a)),a.noVideo=a.noVideo.bind(Object(d.a)(a)),a.onFullScreenChange=a.onFullScreenChange.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleSearchBy",value:function(e){switch(e.preventDefault(),this.state.searchBy){case"name":this.handleSearchByName();break;case"planet-count":this.handleSearchByPlanetCount();break;case"distance":this.handleSearchByDistance();break;case"":this.reset()}}},{key:"handleStarClick",value:function(e){var t=this;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:this.setState({loadingSearch:!0},(function(){var a,n;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:try{a=t.state.stars[e].link("planets").fetch(),n=S(t.state.stars[e].link("additionalNames")),Promise.all([a,n]).then((function(a){var n=a[0],r=a[1];t.setState({currentStar:t.state.stars[e],currentStarIndex:e,planets:n.prop("planets"),names:r,loadingSearch:!1})}))}catch(s){console.log("Error in handle star click"),t.setState({error:"Error in handle star click",loadingSearch:!1})}case 1:case"end":return r.stop()}}))}));case 1:case"end":return a.stop()}}),null,this)}},{key:"handleSearchByName",value:function(){var e=this;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({loadingSearch:!0},(function(){var t,a,n,r,s;return i.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,i.a.awrap(e.client.fetchResource("alternateNames/search"));case 3:return t=l.sent,l.next=6,i.a.awrap(t.link("findByNameLike").fetch({name:"%"+e.state.search+"%",page:parseInt(e.state.page)-1,size:e.state.size,sort:e.state.sort}));case 6:return a=l.sent,console.log(a),l.next=10,i.a.awrap(x(a));case 10:return n=l.sent,r=n[0].props.additionalNames,l.next=14,i.a.awrap(n[0].link("planets").fetch());case 14:s=l.sent,e.setState({starResource:a,resourceURI:N.nameSearch,stars:n,currentStar:n[0],currentStarIndex:0,next:a.link("next"),prev:a.link("prev"),first:a.link("first"),last:a.link("last"),names:r,planets:s.prop("planets"),loadingSearch:!1}),l.next=22;break;case 18:l.prev=18,l.t0=l.catch(0),console.log("Error in search by name"),e.setState({error:"Error in search by name",loadingSearch:!1});case 22:case"end":return l.stop()}}),null,null,[[0,18]])}));case 1:case"end":return t.stop()}}),null,this)}},{key:"handleSearchByPlanetCount",value:function(){var e=this;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({loadingSearch:!0},(function(){var t,a,n,r,s;return i.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,i.a.awrap(e.client.fetchResource("stars/search"));case 3:return t=l.sent,l.next=6,i.a.awrap(t.link("findByNumberOfPlanetsGreaterThan").fetch({numberOfPlanets:e.state.search,page:parseInt(e.state.page)-1,size:e.state.size,sort:e.state.sort}));case 6:a=l.sent,n=a.prop("stars"),r=S(n[0].link("additionalNames")),s=n[0].link("planets").fetch(),Promise.all([s,r]).then((function(t){var r=t[0],s=t[1];e.setState({starResource:a,resourceURI:N.planetCountSearch,stars:n,currentStar:n[0],currentStarIndex:0,next:a.link("next"),prev:a.link("prev"),first:a.link("first"),last:a.link("last"),names:s,planets:r.prop("planets"),loadingSearch:!1})})),l.next=17;break;case 13:l.prev=13,l.t0=l.catch(0),console.log("Error in search by planet count"),e.setState({error:"Error in search by planet count",loadingSearch:!1});case 17:case"end":return l.stop()}}),null,null,[[0,13]])}));case 1:case"end":return t.stop()}}),null,this)}},{key:"handleSearchByDistance",value:function(){var e=this;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({loadingSearch:!0},(function(){var t,a,n,r,s;return i.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,i.a.awrap(e.client.fetchResource("stars/search"));case 3:return t=l.sent,l.next=6,i.a.awrap(t.link("findByDistanceLessThanEqualOrderByDistance").fetch({distance:e.state.search,page:parseInt(e.state.page)-1,size:e.state.size,sort:e.state.sort}));case 6:a=l.sent,n=a.prop("stars"),r=S(n[0].link("additionalNames")),s=n[0].link("planets").fetch(),Promise.all([s,r]).then((function(t){var r=t[0],s=t[1];e.setState({starResource:a,resourceURI:N.distance,stars:n,currentStar:n[0],currentStarIndex:0,next:a.link("next"),prev:a.link("prev"),first:a.link("first"),last:a.link("last"),names:s,planets:r.prop("planets"),loadingSearch:!1})})),l.next=17;break;case 13:l.prev=13,l.t0=l.catch(0),console.log("Error in search by distance"),e.setState({error:"Error in search by distance",loadingSearch:!1});case 17:case"end":return l.stop()}}),null,null,[[0,13]])}));case 1:case"end":return t.stop()}}),null,this)}},{key:"paginate",value:function(){var e=this;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({loadingSearch:!0},(function(){var t,a,n,r,s,l,c;return i.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,i.a.awrap(e.client.fetchResource(e.state.resourceURI+"?page="+(parseInt(e.state.page)-1)+"&size="+e.state.size+"&sort="+e.state.sort));case 3:t=o.sent,a=t.prop("stars")[0],n=Object.keys(t.prop("stars")[0].props),r=["name","distance","radius","numberOfPlanets"],s=a.link("planets").fetch(),l=S(a.link("additionalNames")),c=t.prop("stars"),Promise.all([s,l]).then((function(s){var l=s[0],i=s[1];e.setState({starResource:t,stars:c,headings:r,originalHeadings:n,currentStar:a,currentStarIndex:0,planets:l.prop("planets"),next:t.link("next"),prev:t.link("prev"),first:t.link("first"),last:t.link("last"),names:i,error:"",searchBy:"",loadingSearch:!1,page:t.prop("page").number+1,size:t.prop("page").size})})),o.next=17;break;case 13:o.prev=13,o.t0=o.catch(0),console.log("Error at paginate"),e.setState({error:"Error at paginate",loadingSearch:!1});case 17:case"end":return o.stop()}}),null,null,[[0,13]])}));case 1:case"end":return t.stop()}}),null,this)}},{key:"reset",value:function(){var e=this;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({loadingSearch:!0},(function(){var t,a,n,r,s,l,c;return i.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,e.client=Object(f.createClient)("http://webdevelopertest.playfusionservices.com/webapptest",{headers:{"Access-Control-Allow-Origin":"*"}}),o.next=4,i.a.awrap(e.client.fetchResource(N.stars+"?page="+(parseInt(e.state.page)-1)+"&size="+e.state.size+"&sort="+e.state.sort));case 4:t=o.sent,a=t.prop("stars")[0],n=t.prop("stars"),r=Object.keys(t.prop("stars")[0].props),s=["name","distance","radius","numberOfPlanets"],l=a.link("planets").fetch(),c=S(a.link("additionalNames")),Promise.all([l,c]).then((function(l){var c=l[0],i=l[1],o=Object.keys(c.prop("planets")[0].props);e.setState({starResource:t,resourceURI:N.stars,stars:n,headings:s,originalHeadings:r,currentStar:a,currentStarIndex:0,planets:c.prop("planets"),planetHeadings:o,next:t.link("next"),prev:t.link("prev"),first:t.link("first"),last:t.link("last"),names:i,error:"",search:"",searchBy:"",loadingSearch:!1,page:t.prop("page").number+1,size:t.prop("page").size})})),o.next=18;break;case 14:o.prev=14,o.t0=o.catch(0),console.log("Error at start up"),e.setState({error:"Error at start up",loadingSearch:!1});case 18:case"end":return o.stop()}}),null,null,[[0,14]])}));case 1:case"end":return t.stop()}}),null,this)}},{key:"componentDidMount",value:function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:document.addEventListener("mousemove",(function(e){var t=document.documentElement.clientWidth/2,a=document.documentElement.clientHeight/2,n=25*(e.clientX-t)/t,r=5*(e.clientY-a)/a,s=25+n,l=n-25;s>25&&(s=25),l<-25&&(l=-25),document.documentElement.style.setProperty("--leftvar",s+"deg"),document.documentElement.style.setProperty("--rightvar",l+"deg"),document.documentElement.style.setProperty("--leftoffset",s+"px"),document.documentElement.style.setProperty("--rightoffset",l+"px"),document.documentElement.style.setProperty("--offsetscaledY",-r+"deg")})),document.addEventListener("fullscreenchange",this.onFullScreenChange,!1),document.addEventListener("webkitfullscreenchange",this.onFullScreenChange,!1),document.addEventListener("mozfullscreenchange",this.onFullScreenChange,!1),this.reset();case 5:case"end":return e.stop()}}),null,this)}},{key:"onFullScreenChange",value:function(){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement?this.setState({fullScreen:!0}):this.setState({fullScreen:!1})}},{key:"onReady",value:function(e){e.target.setVolume(10),this.setState({yt:e.target})}},{key:"onPlay",value:function(e){this.setState({ready:!0})}},{key:"mute",value:function(){this.state.mute?(this.state.yt.unMute(),this.setState({mute:!1})):(this.state.yt.mute(),this.setState({mute:!0}))}},{key:"fullScreen",value:function(){var e=document.documentElement;this.state.fullScreen?document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}},{key:"noVideo",value:function(){this.state.noVideo?this.setState({noVideo:!1}):this.setState({noVideo:!0,ready:!0})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{display:this.state.ready?"block":"none"}},r.a.createElement("div",{style:{position:"fixed",top:"5px",right:"5px",zIndex:"99"}},r.a.createElement(j.a,{onClick:this.noVideo},"No video"),r.a.createElement(j.a,{onClick:this.mute},this.state.mute?"Unmute":"Mute"),r.a.createElement(j.a,{onClick:this.fullScreen},"Full Screen")),this.state.noVideo?"":r.a.createElement(L.a,{videoId:"bZNFRIwlQxQ",opts:{height:"100%",width:"100%",playerVars:{autoplay:1,origin:"localhost:3000",controls:0,showinfo:0,autohide:1,modestbranding:1,loop:1}},onReady:this.onReady,onPlay:this.onPlay,className:"video-wrapper"})),r.a.createElement("div",null,this.state.ready?r.a.createElement("div",{className:"App container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm",style:{padding:"60px",paddingTop:"0px"}},r.a.createElement(F,{context:this})),r.a.createElement("div",{className:"col-sm",style:{padding:"60px",paddingTop:"0px",textAlign:"left"}},r.a.createElement(T,{context:this}))),r.a.createElement(A,{context:this})):r.a.createElement("div",{className:"loading"},r.a.createElement("img",{style:{left:"50%",top:"50%",position:"absolute",marginLeft:"-50px",marginTop:"-50px"},alt:"",src:M.a,height:"100",width:"100"}),r.a.createElement(j.a,{style:{left:"50%",top:"55%",position:"absolute",marginLeft:"-44px"},onClick:this.noVideo},"No video"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.9f8cc721.chunk.js.map