(window.webpackJsonp=window.webpackJsonp||[]).push([["vendors~cxtmenu"],{"./node_modules/cytoscape-cxtmenu/cytoscape-cxtmenu.js":
/*!*************************************************************!*\
  !*** ./node_modules/cytoscape-cxtmenu/cytoscape-cxtmenu.js ***!
  \*************************************************************/
/*! no static exports found */function(t,e,n){var i;i=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";var i=n(2),a=n(1),o=n(3),d=o.removeEles,r=o.setStyles,l=o.createElement,s=o.getPixelRatio,c=o.getOffset;t.exports=function(t){var e=a({},i,t),n=this,o=n.container(),u=void 0,p={options:e,handlers:[],container:l({class:"cxtmenu"})},h=p.container,g=l(),f=l({tag:"canvas"}),m=[],v=f.getContext("2d"),x=100,P=2*(x+e.activePadding),b=void 0,y=void 0;function S(t,e){E.drawBg=[t,e]}function w(t,n){v.globalCompositeOperation="source-over",v.clearRect(0,0,P,P),v.fillStyle=e.fillColor;for(var i=2*Math.PI/m.length,a=Math.PI/2,o=a+i,d=0;d<m.length;d++){var r=m[d];r.fillColor&&(v.fillStyle=r.fillColor),v.beginPath(),v.moveTo(t+e.activePadding,t+e.activePadding),v.arc(t+e.activePadding,t+e.activePadding,t,2*Math.PI-a,2*Math.PI-o,!0),v.closePath(),v.fill(),a+=i,o+=i,v.fillStyle=e.fillColor}v.globalCompositeOperation="destination-out",v.strokeStyle="white",v.lineWidth=e.separatorWidth,o=(a=Math.PI/2)+i;for(var l=0;l<m.length;l++){var s=t*Math.cos(a),c=t*Math.sin(a);v.beginPath(),v.moveTo(t+e.activePadding,t+e.activePadding),v.lineTo(t+e.activePadding+s,t+e.activePadding-c),v.closePath(),v.stroke(),a+=i,o+=i}v.fillStyle="white",v.globalCompositeOperation="destination-out",v.beginPath(),v.arc(t+e.activePadding,t+e.activePadding,n+e.spotlightPadding,0,2*Math.PI,!0),v.closePath(),v.fill(),v.globalCompositeOperation="source-over"}function M(t,n,i,a,o){var d=2*Math.PI/m.length,r=Math.PI/2,l=r+d;r+=d*b,l+=d*b,v.fillStyle=e.activeFillColor,v.strokeStyle="black",v.lineWidth=1,v.beginPath(),v.moveTo(i+e.activePadding,i+e.activePadding),v.arc(i+e.activePadding,i+e.activePadding,i+e.activePadding,2*Math.PI-r,2*Math.PI-l,!0),v.closePath(),v.fill(),v.fillStyle="white",v.globalCompositeOperation="destination-out";var s=i+e.activePadding+t/i*(o+e.spotlightPadding-e.indicatorSize/4),c=i+e.activePadding+n/i*(o+e.spotlightPadding-e.indicatorSize/4),u=Math.PI/4-a;v.translate(s,c),v.rotate(u);var p=e.indicatorSize>o+e.spotlightPadding?o+e.spotlightPadding:e.indicatorSize;v.beginPath(),v.fillRect(-p/2,-p/2,p,p),v.closePath(),v.fill(),v.rotate(-u),v.translate(-s,-c),v.beginPath(),v.arc(i+e.activePadding,i+e.activePadding,o+e.spotlightPadding,0,2*Math.PI,!0),v.closePath(),v.fill(),v.globalCompositeOperation="source-over"}function R(){var t=s(),e=P,n=P;f.width=e*t,f.height=n*t,f.style.width=e+"px",f.style.height=n+"px",v.setTransform(1,0,0,1,0,0),v.scale(t,t)}o.insertBefore(h,o.firstChild),h.appendChild(g),g.appendChild(f),r(h,{position:"absolute",zIndex:e.zIndex,userSelect:"none",pointerEvents:"none"}),["mousedown","mousemove","mouseup","contextmenu"].forEach((function(t){h.addEventListener(t,(function(t){return t.preventDefault(),!1}))})),r(g,{display:"none",width:P+"px",height:P+"px",position:"absolute",zIndex:1,marginLeft:-e.activePadding+"px",marginTop:-e.activePadding+"px",userSelect:"none"}),f.width=P,f.height=P;var C=!0,E={},I=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return setTimeout(t,16)};R(),function t(){E.drawBg&&w.apply(null,E.drawBg),E.drawCommands&&M.apply(null,E.drawCommands),E={},C&&I(t)}();var O,T,F,z,N,k,j,L,A=void 0,q=void 0,W=void 0,B={on:function(t,e,i){var a=i;return"core"===e&&(a=function(t){if(t.cyTarget===n||t.target===n)return i.apply(this,[t])}),p.handlers.push({events:t,selector:e,fn:a}),"core"===e?n.on(t,a):n.on(t,e,a),this}};function H(){C=!1,function(){for(var t=p.handlers,e=0;e<t.length;e++){var i=t[e];"core"===i.selector?n.off(i.events,i.fn):n.off(i.events,i.selector,i.fn)}window.removeEventListener("resize",R)}(),h.remove()}return O=void 0,T=!1,F=void 0,z=void 0,N=void 0,k=void 0,j=void 0,L=function(){O&&u.grabify(),z&&n.userZoomingEnabled(!0),N&&n.userPanningEnabled(!0),k&&n.boxSelectionEnabled(!0)},window.addEventListener("resize",R),B.on("resize",(function(){R()})).on(e.openMenuEvents,e.selector,(function(t){u=this;var i=this,a=this===n;if(T&&(g.style.display="none",T=!1,L()),"function"==typeof e.commands){var s=e.commands(u);s.then?s.then((function(t){m=t,p()})):(m=s,p())}else m=e.commands,p();function p(){if(m&&0!==m.length){z=n.userZoomingEnabled(),n.userZoomingEnabled(!1),N=n.userPanningEnabled(),n.userPanningEnabled(!1),k=n.boxSelectionEnabled(),n.boxSelectionEnabled(!1),(O=u.grabbable&&u.grabbable())&&u.ungrabify();var s=void 0,p=void 0,h=void 0;!a&&i&&i.isNode instanceof Function&&i.isNode()&&!i.isParent()&&!e.atMouse?(s=i.renderedPosition(),p=i.renderedOuterWidth(),i.renderedOuterHeight(),h=p/2,h=!e.adaptativeNodeSpotlightRadius&&e.minSpotlightRadius?Math.max(h,e.minSpotlightRadius):h,h=!e.adaptativeNodeSpotlightRadius&&e.maxSpotlightRadius?Math.min(h,e.maxSpotlightRadius):h):(s=t.renderedPosition||t.cyRenderedPosition,h=(p=1)/2,h=e.minSpotlightRadius?Math.max(h,e.minSpotlightRadius):h,h=e.maxSpotlightRadius?Math.min(h,e.maxSpotlightRadius):h),y=c(o),A=s.x,q=s.y,x=p/2+(e.menuRadius instanceof Function?e.menuRadius(u):Number(e.menuRadius)),P=2*(x+e.activePadding),R(),r(g,{width:P+"px",height:P+"px",display:"block",left:s.x-x+"px",top:s.y-x+"px"}),function(t,n){d(".cxtmenu-item",g);for(var i=2*Math.PI/m.length,a=Math.PI/2,o=a+i,s=0;s<m.length;s++){var c=m[s],u=(a+o)/2,p=(t+n)/2*Math.cos(u),h=(t+n)/2*Math.sin(u),f=1*Math.abs((t-n)*Math.cos(u)),v=1*Math.abs((t-n)*Math.sin(u));f=Math.max(f,v);var x=l({class:"cxtmenu-item"});r(x,{color:e.itemColor,cursor:"default",display:"table","text-align":"center",position:"absolute","text-shadow":"-1px -1px 2px "+e.itemTextShadowColor+", 1px -1px 2px "+e.itemTextShadowColor+", -1px 1px 2px "+e.itemTextShadowColor+", 1px 1px 1px "+e.itemTextShadowColor,left:"50%",top:"50%","min-height":f+"px",width:f+"px",height:f+"px",marginLeft:p-f/2+"px",marginTop:-h-f/2+"px"});var P=l({class:"cxtmenu-content"});c.content instanceof HTMLElement?P.appendChild(c.content):P.innerHTML=c.content,r(P,{width:f+"px",height:f+"px","vertical-align":"middle",display:"table-cell"}),r(P,c.contentStyle||{}),!0!==c.disabled&&!1!==c.enabled||P.setAttribute("class","cxtmenu-content cxtmenu-disabled"),g.appendChild(x),x.appendChild(P),a+=i,o+=i}}(x,h),S(x,h),b=void 0,T=!0,j=t}}})).on("cxtdrag tapdrag",e.selector,F=function(t){if(T){t.preventDefault();var n=t.originalEvent,i=n.touches&&n.touches.length>0,a=(i?n.touches[0].pageX:n.pageX)-window.pageXOffset,o=(i?n.touches[0].pageY:n.pageY)-window.pageYOffset;b=void 0;var d=a-y.left-A,r=o-y.top-q;0===d&&(d=.01);var l=Math.sqrt(d*d+r*r),s=(r*r-l*l-d*d)/(-2*l*d),c=Math.acos(s),p=void 0;if(u&&u.isNode instanceof Function&&u.isNode()&&!u.isParent()&&!e.atMouse?(p=u.renderedOuterWidth(),W=p/2,W=!e.adaptativeNodeSpotlightRadius&&e.minSpotlightRadius?Math.max(W,e.minSpotlightRadius):W,W=!e.adaptativeNodeSpotlightRadius&&e.maxSpotlightRadius?Math.min(W,e.maxSpotlightRadius):W):(W=(p=1)/2,W=e.minSpotlightRadius?Math.max(W,e.minSpotlightRadius):W,W=e.maxSpotlightRadius?Math.min(W,e.maxSpotlightRadius):W),x=p/2+(e.menuRadius instanceof Function?e.menuRadius(u):Number(e.menuRadius)),l<W+e.spotlightPadding||"number"==typeof e.outsideMenuCancel&&l>x+e.activePadding+e.outsideMenuCancel)S(x,W);else{S(x,W);var h=d*x/l,g=r*x/l;r>0&&(c=Math.PI+Math.abs(c-Math.PI));for(var f=2*Math.PI/m.length,v=Math.PI/2,P=v+f,w=0;w<m.length;w++){var M=m[w],R=v<=c&&c<=P||v<=c+2*Math.PI&&c+2*Math.PI<=P;if(!0!==M.disabled&&!1!==M.enabled||(R=!1),R){b=w;break}v+=f,P+=f}!function(t,e,n,i,a){E.drawCommands=[t,e,n,i,a]}(h,g,x,c,W)}}}).on("tapdrag",F).on("cxttapend tapend",(function(){if(g.style.display="none",void 0!==b){var t=m[b].select;t&&(t.apply(u,[u,j]),b=void 0)}T=!1,L()})),{destroy:function(){H()}}}},function(t,e,n){"use strict";t.exports=null!=Object.assign?Object.assign.bind(Object):function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return n.filter((function(t){return null!=t})).forEach((function(e){Object.keys(e).forEach((function(n){return t[n]=e[n]}))})),t}},function(t,e,n){"use strict";t.exports={menuRadius:function(t){return 100},selector:"node",commands:[],fillColor:"rgba(0, 0, 0, 0.75)",activeFillColor:"rgba(1, 105, 217, 0.75)",activePadding:20,indicatorSize:24,separatorWidth:3,spotlightPadding:4,adaptativeNodeSpotlightRadius:!1,minSpotlightRadius:24,maxSpotlightRadius:38,openMenuEvents:"cxttapstart taphold",itemColor:"white",itemTextShadowColor:"transparent",zIndex:9999,atMouse:!1,outsideMenuCancel:!1}},function(t,e,n){"use strict";var i=function(t,e){for(var n=Object.keys(e),i=0,a=n.length;i<a;i++)t.style[n[i]]=e[n[i]]};t.exports={removeEles:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document,n=e.querySelectorAll(t),i=0;i<n.length;i++){var a=n[i];a.parentNode.removeChild(a)}},setStyles:i,createElement:function(t){t=t||{};var e=document.createElement(t.tag||"div");return e.className=t.class||"",t.style&&i(e,t.style),e},getPixelRatio:function(){return window.devicePixelRatio||1},getOffset:function(t){var e=t.getBoundingClientRect();return{left:e.left+document.body.scrollLeft+parseFloat(getComputedStyle(document.body)["padding-left"])+parseFloat(getComputedStyle(document.body)["border-left-width"]),top:e.top+document.body.scrollTop+parseFloat(getComputedStyle(document.body)["padding-top"])+parseFloat(getComputedStyle(document.body)["border-top-width"])}}}},function(t,e,n){"use strict";var i=n(0),a=function(t){t&&t("core","cxtmenu",i)};"undefined"!=typeof cytoscape&&a(cytoscape),t.exports=a}])},t.exports=i()}}]);
//# sourceMappingURL=vendors~cxtmenu.bundle.js.map