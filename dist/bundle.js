!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,n){"use strict";function r(e,t,n,r){var o,a,i,s,c;e&&(o=n.attacks[e].attack[0],a=n.attacks[e].attack[1],c=randomBetween(o,a),i=n.attacks[e].name,s=n.attacks[e].dubRageRequired,r.health-=c,n.dubRage-=s,document.getElementById("p1_health").innerHTML=n.health,document.getElementById("p2_health").innerHTML=r.health,console.log(n.name+" uses "+i),console.log(n.name+" does "+c+" damage to "+r.name),console.log(r.name+" health is now "+r.health)),t&&(c=0),console.log(n.name+" turn over"),console.log(""),r.health<=0&&console.log(r.name+" is dead, game over... "+n.name+" won!")}Object.defineProperty(t,"__esModule",{value:!0}),t.initMove=r},function(e,t,n){var r=n(5);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(6)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";function r(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([a]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){"use strict";e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var a;return a=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")"})}},function(e,t,n){"use strict";var r=n(0);n(1),document.addEventListener("DOMContentLoaded",function(){function e(e,c){console.log("Round: "+a),i=0,s=1,console.log(n),console.log(o),(0,r.initMove)(e,c,n,o);var u=["attackMove","defenceMove"];switch(u[Math.floor(Math.random()*u.length)]){case"attackMove":var l=[];Object.keys(o.attacks).forEach(function(e,t){l.push(e)});for(var f=t(l),d=f.length,p=0;p<d;p++){var h=f[p];if(o.dubRage>=n.attacks[h].dubRageRequired){e=h,(0,r.initMove)(e,c,o,n);break}}break;case"defenceMove":console.log(o.name+" uses defence.")}n.dubRage+=20,o.dubRage+=20,console.log("Round Finished"),console.log("--------------"),a++,i=1,s=0}function t(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}return e}var n,o,a=1,i=1,s=0,c={Simula:{name:"Simula",health:100,attacks:{defaultAttack:{name:"Standard Attack",attack:[10,14],dubRageRequired:0},special1:{name:"Nasssty frog synths",attack:[25,30],dubRageRequired:50}},dubRage:0},Noisia:{name:"Noisia",health:300,attacks:{defaultAttack:{name:"Standard Attack",attack:[10,14],dubRageRequired:0},special1:{name:"Diplodoucus",attack:[25,30],dubRageRequired:100}},dubRage:0}};n=c.Simula,o=c.Noisia,document.getElementById("p1_name").innerHTML=n.name,document.getElementById("p2_name").innerHTML=o.name,document.getElementById("p1_health").innerHTML=n.health,document.getElementById("p2_health").innerHTML=o.health,document.getElementById("defaultAttack").onclick=function(){1===i&&e("defaultAttack","")},document.getElementById("special1").onclick=function(){1===i&&(n.dubRage>=n.attacks.special1.dubRageRequired?e("special1",""):console.log("You dont have enough Dub Rage for this move."))}})},function(e,t,n){t=e.exports=n(2)(void 0),t.push([e.i,".main{background:red}",""])},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=h[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(l(r.parts[a],t))}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(l(r.parts[a],t));h[r.id]={id:r.id,refs:1,parts:i}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],s=a[1],c=a[2],u=a[3],l={css:s,media:c,sourceMap:u};r[i]?r[i].parts.push(l):n.push(r[i]={id:i,parts:[l]})}return n}function a(e,t){var n=v(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=y[y.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",u(t,e.attrs),a(e,t),t}function c(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",u(t,e.attrs),a(e,t),t}function u(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function l(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var u=b++;n=g||(g=s(t)),r=f.bind(null,n,u,!1),o=f.bind(null,n,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=p.bind(null,n,t),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=d.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=k(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function d(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=R(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}var h={},m=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),v=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),g=null,b=0,y=[],R=n(3);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=m()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var a=[],i=0;i<n.length;i++){var s=n[i],c=h[s.id];c.refs--,a.push(c)}if(e){r(o(e,t),t)}for(var i=0;i<a.length;i++){var c=a[i];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete h[c.id]}}}};var k=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()}]);