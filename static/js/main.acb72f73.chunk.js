(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(51)},22:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(6),s=a.n(c),r=(a(22),a(1)),o=a(2),i=a(4),u=a(3),h=a(5),m=a(16),f=a.n(m),p=(a(45),a(47),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).handleClick=function(){a.props.selectFlat(a.props.flat)},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.flat.price+this.props.flat.priceCurrency+" - "+this.props.flat.name,t={backgroundImage:"url('".concat(this.props.flat.imageUrl,"')")};return l.a.createElement("div",{className:"flat",onClick:this.handleClick},l.a.createElement("div",{className:"flat-picture",style:t}),l.a.createElement("div",{className:"flat-title"},e))}}]),t}(l.a.Component)),d=(a(49),function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="marker";return this.props.selected&&(e+=" selected"),l.a.createElement("div",{className:e},this.props.text,"\u20ac")}}]),t}(l.a.Component)),v="".concat("AIzaSyBLzBVES7Ka9CHrtb9YOQDnfgaYQVmCMMo"),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).selectFlat=function(e){console.log(e),a.setState({selectedFlat:e})},a.handleSearch=function(e){a.setState({search:e.target.value,flats:a.state.allFlats.filter(function(t){return new RegExp(e.target.value,"i").exec(t.name)})})},a.state={flats:[],allFlats:[],selectedFlat:null,search:""},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json").then(function(e){return e.json()}).then(function(t){e.setState({flats:t,allFlats:t})})}},{key:"render",value:function(){var e=this,t={lat:48.8566,lng:2.3522};return this.state.selectedFlat&&(t={lat:this.state.selectedFlat.lat,lng:this.state.selectedFlat.lng}),l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"search"},l.a.createElement("input",{type:"text",placeholder:"Search...",value:this.state.search,onChange:this.handleSearch})),l.a.createElement("div",{className:"flats"},this.state.flats.map(function(t){return l.a.createElement(p,{key:t.name,flat:t,selectFlat:e.selectFlat})}))),l.a.createElement("div",{className:"map"},l.a.createElement(f.a,{bootstrapURLKeys:{key:v},center:t,zoom:11},this.state.flats.map(function(t){return l.a.createElement(d,{key:t.name,lat:t.lat,lng:t.lng,text:t.price,selected:t===e.state.selectedFlat})}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.acb72f73.chunk.js.map