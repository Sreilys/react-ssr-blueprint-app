!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-dom/server")},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),u=n(0),i=n.n(u),l=n(2);var c=()=>i.a.createElement("div",null,i.a.createElement("div",null,"I'm the VERY VERY BEST home component"),i.a.createElement("button",{onClick:()=>console.log("Hi there!")},"Press me!"));const a=o()();a.use(o.a.static("public")),a.get("/",(e,t)=>{t.send(`\n    <html>\n      <head></head>\n      <body>\n        <div id="root">${Object(l.renderToString)(i.a.createElement(c,null))}</div>\n        <script src="bundle.js"><\/script>\n      </body>\n    </html>\n  `)}),a.listen(3e3,()=>{console.log("Listening on prot 3000")})}]);