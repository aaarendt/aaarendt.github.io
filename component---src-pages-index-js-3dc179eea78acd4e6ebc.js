(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+1l7":function(e,t,n){e.exports=n.p+"static/altar1-c58740be086d8d42d03e761646ef302b.jpg"},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=n("q1tI"),o=r(a),i=r(n("Gytx"));function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function f(){s=e(u.map((function(e){return e.props}))),E.canUseDOM?t(s):n&&(s=n(s))}var E=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var l=a.prototype;return l.shouldComponentUpdate=function(e){return!i(e,this.props)},l.componentWillMount=function(){u.push(this),f()},l.componentDidUpdate=function(){f()},l.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),f()},l.render=function(){return o.createElement(r,this.props)},a}(a.Component);return l(E,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),l(E,"canUseDOM",c),E}}},Bl7J:function(e,t,n){"use strict";var r=n("dI71"),a=n("q1tI"),o=n.n(a),i=(n("wcMv"),function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement("section",{id:"header"},o.a.createElement("div",{className:"inner"},o.a.createElement("h1",null,"Male Journeys"),o.a.createElement("h2",null,"A Courage and Renewal Experience"),o.a.createElement("h3",null,"Retreats, wilderness hikes and online forums to support men's inner journey toward wholeness and community."),o.a.createElement("ul",{className:"actions"},o.a.createElement("li",null,o.a.createElement("a",{href:"#one",className:"button scrolly"},"Welcome")))))},t}(o.a.Component)),l=n("JwsL"),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={loading:"is-loading"},n}Object(r.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({loading:""})}),100)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},n.render=function(){var e=this.props.children;return o.a.createElement("div",{className:"body "+this.state.loading},o.a.createElement(i,null),e,o.a.createElement(l.a,null))},t}(o.a.Component);t.a=c},GlWg:function(e,t,n){e.exports=n.p+"static/AJA-2e48c7ff5dd55a5e7f1af1217a82e043.jpg"},Gytx:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var s=o[c];if(!l(s))return!1;var u=e[s],f=t[s];if(!1===(a=n?n.call(r,u,f,s):void 0)||void 0===a&&u!==f)return!1}return!0}},JwsL:function(e,t,n){"use strict";var r=n("dI71"),a=n("q1tI"),o=n.n(a),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement("section",{id:"footer"},o.a.createElement("ul",{className:"icons"},o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/aaarendt/aaarendt.github.io",className:"icon alt fa-github"},o.a.createElement("span",{className:"label"},"GitHub"))),o.a.createElement("li",null,o.a.createElement("a",{href:"mailto:malejourneys@gmail.com",className:"icon alt fa-envelope"},o.a.createElement("span",{className:"label"},"Email")))),o.a.createElement("ul",{className:"copyright"},o.a.createElement("li",null,"Design: ",o.a.createElement("a",{href:"http://html5up.net"},"HTML5 UP"))))},t}(o.a.Component);t.a=i},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("dI71"),a=n("q1tI"),o=n.n(a),i=n("TJpk"),l=n.n(i),c=n("Bl7J"),s=n("GlWg"),u=n.n(s),f=n("+1l7"),E=n.n(f),T=n("YOvL"),p=n.n(T),m=n("yO4Q"),d=n.n(m),A=n("pfr5"),h=n.n(A),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement(c.a,null,o.a.createElement(l.a,{title:"Male Journeys"}),o.a.createElement("section",{id:"one",className:"main style1"},o.a.createElement("div",{className:"grid-wrapper"},o.a.createElement("div",{className:"col-6"},o.a.createElement("header",{className:"major"},o.a.createElement("h2",null)),o.a.createElement("p",null,'"Self care is never a selfish act - it is simply good stewardship of the only gift I have, the gift I was put on earth to offer others. Anytime we can listen to true self, and give it the care it requires, we do so not only for ourselves, but for the many others whose lives we touch."'),o.a.createElement("p",null,o.a.createElement("em",null,"Parker Palmer"))),o.a.createElement("div",{className:"col-6"},o.a.createElement("span",{className:"image fit"},o.a.createElement("img",{src:d.a,alt:""}))))),o.a.createElement("section",{id:"two",className:"main style2"},o.a.createElement("div",{className:"grid-wrapper"},o.a.createElement("div",{className:"col-6"},o.a.createElement("ul",{className:"major-icons"},o.a.createElement("li",null,o.a.createElement("span",{className:"image fit"},o.a.createElement("img",{src:u.a,alt:"Anthony, Jeff and Aaron"}))))),o.a.createElement("div",{className:"col-6"},o.a.createElement("header",{className:"major"},o.a.createElement("h2",null,"About Us")),o.a.createElement("p",null,"Jeff Creswell is a ",o.a.createElement("a",{href:"http://www.couragerenewal.org/"},"Center for Courage and Renewal",o.a.createElement("sup",null,"©"))," facilitator mentored by activist and writer Parker Palmer. He is also an educational consultant."),o.a.createElement("p",null,"Anthony Arendt is a ",o.a.createElement("a",{href:"http://www.couragerenewal.org/"},"Center for Courage and Renewal",o.a.createElement("sup",null,"©"))," facilitator mentored by Jeff Creswell. He is also a research scientist at the University of Washington in Seattle."),o.a.createElement("p",null,"Aaron Bishop is an active outdoorsman and co-facilitator of several Courage and Renewal offerings. He works for Walmart as a Health and Wellness Director.")))),o.a.createElement("section",{id:"three",className:"main style1 special"},o.a.createElement("div",{className:"grid-wrapper"},o.a.createElement("div",{className:"col-12"},o.a.createElement("header",{className:"major"},o.a.createElement("h2",null,"Current Offerings"))),o.a.createElement("div",{className:"col-4"},o.a.createElement("span",{className:"image fit"},o.a.createElement("img",{src:E.a,alt:""})),o.a.createElement("h3",null,"Men's Retreats"),o.a.createElement("p",null,"Retreats (temporarily virtual) providing opportunties for reflection and finding our way in community."),o.a.createElement("ul",{className:"actions"},o.a.createElement("li",null,o.a.createElement("a",{href:"retreats",className:"button"},"More")))),o.a.createElement("div",{className:"col-4"},o.a.createElement("span",{className:"image fit"},o.a.createElement("img",{src:p.a,alt:""})),o.a.createElement("h3",null,"Wilderness Trips"),o.a.createElement("p",null,"Guided outdoor backpacking trips where we deepen our connection to our selves, each other and the natural world."),o.a.createElement("ul",{className:"actions"},o.a.createElement("li",null,o.a.createElement("a",{href:"wilderness",className:"button"},"More")))),o.a.createElement("div",{className:"col-4"},o.a.createElement("span",{className:"image fit"},o.a.createElement("img",{src:h.a,alt:""})),o.a.createElement("h3",null,"Online Communities"),o.a.createElement("p",null,"Short virtual conversations for men who have attended our previous retreats to stay connected."),o.a.createElement("ul",{className:"actions"},o.a.createElement("li",null,o.a.createElement("a",{href:"online",className:"button"},"More")))))),o.a.createElement("section",{id:"four",className:"main style2 special"},o.a.createElement("div",{className:"container"},o.a.createElement("header",{className:"major"},o.a.createElement("h2",null,"Contact Us")),o.a.createElement("p",null,"For more information, contact us via e-mail. We are glad to provide additional details about our offerings."),o.a.createElement("ul",{className:"actions uniform"},o.a.createElement("li",null,o.a.createElement("a",{href:"mailto:malejourneys@gmail.com",className:"button special"},"E-mail"))))))},t}(o.a.Component);t.default=y},TJpk:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=f(n("q1tI")),i=f(n("17x9")),l=f(n("8+s/")),c=f(n("bmMU")),s=n("v1p5"),u=n("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function E(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m,d,A,h=(0,l.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),y=(m=h,A=d=function(e){function t(){return T(this,t),p(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,o=e.newProps,i=e.newChildProps,l=e.nestedChildren;switch(a.type){case u.TAG_NAMES.TITLE:return r({},o,((t={})[a.type]=l,t.titleAttributes=r({},i),t));case u.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},i)});case u.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},i)})}return r({},o,((n={})[a.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=E(a,["children"]),l=(0,s.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=E(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(m,a)},a(t,null,[{key:"canUseDOM",set:function(e){m.canUseDOM=e}}]),t}(o.default.Component),d.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},d.defaultProps={defer:!0,encodeSpecialCharacters:!0},d.peek=m.peek,d.rewind=function(){var e=m.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},A);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},YOvL:function(e,t,n){e.exports=n.p+"static/sawtooths1-34037bae207a91abfaccd7e6b46024a6.jpg"},bmMU:function(e,t,n){"use strict";var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var l,c,s,u=r(t),f=r(n);if(u&&f){if((c=t.length)!=n.length)return!1;for(l=c;0!=l--;)if(!e(t[l],n[l]))return!1;return!0}if(u!=f)return!1;var E=t instanceof Date,T=n instanceof Date;if(E!=T)return!1;if(E&&T)return t.getTime()==n.getTime();var p=t instanceof RegExp,m=n instanceof RegExp;if(p!=m)return!1;if(p&&m)return t.toString()==n.toString();var d=a(t);if((c=d.length)!==a(n).length)return!1;for(l=c;0!=l--;)if(!o.call(n,d[l]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(l=c;0!=l--;)if(!("_owner"===(s=d[l])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("E9XD"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},pfr5:function(e,t,n){e.exports=n.p+"static/online-community-772e3a18980f00a4ae8aa90331fa59bc.png"},v1p5:function(e,t,n){(function(e){n("E9XD"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=c(n("q1tI")),i=c(n("YVoz")),l=n("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var s,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=d(e,l.TAG_NAMES.TITLE),n=d(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=d(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},E=function(e){return d(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},p=function(e,t){return t.filter((function(e){return void 0!==e[l.TAG_NAMES.BASE]})).map((function(e){return e[l.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},m=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],s=c.toLowerCase();-1===t.indexOf(s)||n===l.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===l.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==l.TAG_PROPERTIES.INNER_HTML&&c!==l.TAG_PROPERTIES.CSS_TEXT&&c!==l.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][u]&&(r[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),c=0;c<o.length;c++){var s=o[c],u=(0,i.default)({},a[s],r[s]);a[s]=u}return e}),[]).reverse()},d=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},A=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){A(e)}),0)}),h=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},b=null,g=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,f=e.styleTags,E=e.title,T=e.titleAttributes;N(l.TAG_NAMES.BODY,r),N(l.TAG_NAMES.HTML,a),R(E,T);var p={baseTag:O(l.TAG_NAMES.BASE,n),linkTags:O(l.TAG_NAMES.LINK,o),metaTags:O(l.TAG_NAMES.META,i),noscriptTags:O(l.TAG_NAMES.NOSCRIPT,c),scriptTags:O(l.TAG_NAMES.SCRIPT,u),styleTags:O(l.TAG_NAMES.STYLE,f)},m={},d={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(d[e]=p[e].oldTags)})),t&&t(),s(e,m,d)},_=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),N(l.TAG_NAMES.TITLE,t)},N=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===a.indexOf(s)&&a.push(s);var f=o.indexOf(s);-1!==f&&o.splice(f,1)}for(var E=o.length-1;E>=0;E--)n.removeAttribute(o[E]);a.length===o.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,i.join(","))}},O=function(e,t){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},P=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.REACT_TAG_MAP[n]||n]=e[n],t}),t)},M=function(e,t,n){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[l.HELMET_ATTRIBUTE]=!0,a=w(n,r),[o.default.createElement(l.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=P(n),o=_(t);return a?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+">"+u(o,r)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+u(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return w(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=l.REACT_TAG_MAP[e]||e;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+u(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===l.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){b&&S(b),e.defer?b=y((function(){g(e,(function(){b=null}))})):(g(e),b=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,f=e.title,E=void 0===f?"":f,T=e.titleAttributes;return{base:M(l.TAG_NAMES.BASE,t,r),bodyAttributes:M(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:M(l.ATTRIBUTE_NAMES.HTML,a,r),link:M(l.TAG_NAMES.LINK,o,r),meta:M(l.TAG_NAMES.META,i,r),noscript:M(l.TAG_NAMES.NOSCRIPT,c,r),script:M(l.TAG_NAMES.SCRIPT,s,r),style:M(l.TAG_NAMES.STYLE,u,r),title:M(l.TAG_NAMES.TITLE,{title:E,titleAttributes:T},r)}},t.reducePropsToState=function(e){return{baseTag:p([l.TAG_PROPERTIES.HREF],e),bodyAttributes:T(l.ATTRIBUTE_NAMES.BODY,e),defer:d(e,l.HELMET_PROPS.DEFER),encode:d(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(l.ATTRIBUTE_NAMES.HTML,e),linkTags:m(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:m(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:E(e),scriptTags:m(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:T(l.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=v}).call(this,n("yLpj"))},wcMv:function(e,t,n){},yO4Q:function(e,t,n){e.exports=n.p+"static/viewpoint-191facd70d33ab1afe4d3b53387f6ead.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-3dc179eea78acd4e6ebc.js.map