!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-multi-layered-choose",[],e):"object"==typeof exports?exports["vue-multi-layered-choose"]=e():t["vue-multi-layered-choose"]=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return t[r].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){n(1);var r=n(6)(n(7),n(8),"data-v-3074ba55",null);t.exports=r.exports},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);n(4)("6db5ebae",r,!0)},function(t,e,n){e=t.exports=n(3)(!1),e.push([t.id,'.nav[data-v-3074ba55]{border-bottom:1px solid gray;padding:10px;line-height:1.5em}.nav a[data-v-3074ba55]{color:#1e7eee}.nav a[data-v-3074ba55]:not(:last-child):hover{cursor:pointer}.nav a[data-v-3074ba55]:last-child{color:gray}.nav a[data-v-3074ba55]:not(:last-child):after{content:">";color:gray;margin-left:8px;margin-right:8px}ul.list[data-v-3074ba55]{padding-left:0;margin-top:0;margin-bottom:0}ul.list li[data-v-3074ba55]{font-size:1.2em;list-style:none;padding:10px 5px;border-bottom:1px solid gray;color:gray}ul.list li[enterable][data-v-3074ba55]:hover{cursor:pointer}ul.list li[data-v-3074ba55]:after{content:".";height:0;visibility:hidden;clear:both}.left[data-v-3074ba55]{float:left}.right[data-v-3074ba55]{float:right}',""])},function(t,e){function n(t,e){var n=t[1]||"",a=t[3];if(!a)return n;if(e&&"function"==typeof btoa){var o=r(a),i=a.sources.map(function(t){return"/*# sourceURL="+a.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}function r(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,"+e;return"/*# "+n+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<t.length;a++){var i=t[a];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=u[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(o(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(o(n.parts[a]));u[n.id]={id:n.id,refs:1,parts:i}}}}function a(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function o(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(m){var o=f++;r=p||(p=a()),e=i.bind(null,r,o,!1),n=i.bind(null,r,o,!0)}else r=a(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function i(t,e,n,r){var a=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,a);else{var o=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}function s(t,e){var n=e.css,r=e.media,a=e.sourceMap;if(r&&t.setAttribute("media",r),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document,c=n(5),u={},d=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var a=c(t,e);return r(a),function(e){for(var n=[],o=0;o<a.length;o++){var i=a[o],s=u[i.id];s.refs--,n.push(s)}e?(a=c(t,e),r(a)):a=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete u[s.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],r={},a=0;a<e.length;a++){var o=e[a],i=o[0],s=o[1],l=o[2],c=o[3],u={id:t+":"+a,css:s,media:l,sourceMap:c};r[i]?r[i].parts.push(u):n.push(r[i]={id:i,parts:[u]})}return n}},function(t,e){t.exports=function(t,e,n,r){var a,o=t=t||{},i=typeof t["default"];"object"!==i&&"function"!==i||(a=t,o=t["default"]);var s="function"==typeof o?o.options:o;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),r){var l=Object.create(s.computed||null);Object.keys(r).forEach(function(t){var e=r[t];l[t]=function(){return e}}),s.computed=l}return{esModule:a,exports:o,options:s}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{initialPathItems:{type:Array},contentItems:{type:Array},isEnterable:{type:Function},displayProp:{type:String}},data:function(){return{pathItems:this.initialPathItems}},computed:{},created:function(){},methods:{handleClickItem:function(t){if("employee"===t.type)this.$emit("on-choose-item",t);else{var e=this.pathItems.indexOf(t);e===-1?this.pathItems.push(t):this.pathItems.splice(e+1),this.$emit("on-enter-item",t)}}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"nav"},t._l(t.pathItems,function(e,r){return n("a",{key:r,on:{click:function(n){t.handleClickItem(e)}}},[t._v(t._s(e[t.displayProp]))])})),t._v(" "),n("ul",{staticClass:"list"},t._l(t.contentItems,function(e,r){return n("li",{key:r,attrs:{enterable:t.isEnterable(e)},on:{click:function(n){t.handleClickItem(e)}}},[n("span",{staticClass:"left"},[t._v(t._s(e[t.displayProp]))]),t._v(" "),t.isEnterable(e)?n("span",{staticClass:"right"},[t._v(" > ")]):t._e()])}))])},staticRenderFns:[]}}])});