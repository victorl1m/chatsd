
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},S=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||S).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.3",E=function(e,t){return new E.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}E.fn=E.prototype={jquery:f,constructor:E,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=E.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return E.each(this,e)},map:function(n){return this.pushStack(E.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(E.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(E.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||E.isPlainObject(n)?n:{},i=!1,a[t]=E.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},E.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?E.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=t[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,S,y,s,c,v,E="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,S)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=E)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{if(d.cssSupportsSelector&&!CSS.supports("selector(:is("+c+"))"))throw new Error;return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===E&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[E]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,S=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.cssSupportsSelector=ce(function(){return CSS.supports("selector(*)")&&C.querySelectorAll(":is(:jqfake)")&&!CSS.supports("selector(:is(*,:jqfake))")}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=E,!C.getElementsByName||!C.getElementsByName(E).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&S)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+E+"'></a><select id='"+E+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+E+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+E+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),d.cssSupportsSelector||y.push(":has"),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&S&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!S):void 0;return void 0!==r?r:d.attributes||!S?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[E]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[E]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=S?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[E]||(e[E]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[E]&&(y=Ce(y)),v&&!v[E]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Se(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[E]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Se(e.slice(s,n)),n<r&&Se(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Se(t[n]))[E]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!S);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&S&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!S,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=E.split("").sort(j).join("")===E,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);E.find=d,E.expr=d.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=d.uniqueSort,E.text=d.getText,E.isXMLDoc=d.isXML,E.contains=d.contains,E.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&E(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=E.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?E.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?E.grep(e,function(e){return e===n!==r}):"string"!=typeof n?E.grep(e,function(e){return-1<i.call(n,e)!==r}):E.filter(n,e,r)}E.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n);return 1<r?E.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?E(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:S,!0)),N.test(r[1])&&E.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=S.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this)}).prototype=E.fn,D=E(S);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&E(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(E(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(r,i){E.fn[r]=function(e,t){var n=E.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=E.filter(t,n)),1<this.length&&(H[r]||E.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},E.each(e.match(P)||[],function(e,t){n[t]=!0}),n):E.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){E.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return E.each(arguments,function(e,t){var n;while(-1<(n=E.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<E.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},E.extend({Deferred:function(e){var o=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return E.Deferred(function(r){E.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(E.Deferred.getStackHook&&(t.stackTrace=E.Deferred.getStackHook()),C.setTimeout(t))}}return E.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?E.extend(e,a):a}},s={};return E.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=E.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){C.setTimeout(function(){throw e})};var F=E.Deferred();function $(){S.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),E.ready()}E.fn.ready=function(e){return F.then(e)["catch"](function(e){E.readyException(e)}),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0)!==e&&0<--E.readyWait||F.resolveWith(S,[E])}}),E.ready.then=F.then,"complete"===S.readyState||"loading"!==S.readyState&&!S.documentElement.doScroll?C.setTimeout(E.ready):(S.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(E(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=E.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||E.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!E.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}E.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),E.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),E.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){E.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:E.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?E.queue(this[0],t):void 0===n?this:this.each(function(){var e=E.queue(this,t,n);E._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&E.dequeue(this,t)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=E.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=S.documentElement,ie=function(e){return E.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return E.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===E.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return E.css(e,t,"")},u=s(),l=n&&n[3]||(E.cssNumber[t]?"":"px"),c=e.nodeType&&(E.cssNumber[t]||"px"!==l&&+u)&&te.exec(E.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)E.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,E.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=E.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}E.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?E(this).show():E(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=S.createDocumentFragment().appendChild(S.createElement("div")),(fe=S.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?E.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))E.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+E.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;E.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<E.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return S.activeElement}catch(e){}}()==("focus"===t)}function Se(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Se(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return E().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n)})}function Ee(e,i,o){o?(Y.set(e,i,!1),E.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(E.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:E.event.trigger(E.extend(r[0],E.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&E.event.add(e,i,we)}E.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(re,i),n.guid||(n.guid=E.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof E&&E.event.triggered!==e.type?E.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=E.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=E.event.special[d]||{},c=E.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),E.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=E.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||E.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)E.event.remove(e,d+t[l],n,r,!0);E.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=E.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=E.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=E.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<E(i,this).index(l):E.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(E.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},function(t,e){E.event.special[t]={setup:function(){return Ee(this,t,Ce),!1},trigger:function(){return Ee(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){E.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||E.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),E.fn.extend({on:function(e,t,n,r){return Se(this,e,t,n,r)},one:function(e,t,n,r){return Se(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){E.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)E.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=E.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=E.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=E.clone(u,!0,!0),s&&E.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,E.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&E.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?E._evalUrl&&!u.noModule&&E._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}E.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;E.inArray(this,n)<0&&(E.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){E.fn[e]=function(e){for(var t,n=[],r=E(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),E(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace($e,"$1")||void 0),""!==a||ie(e)||(a=E.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=S.createElement("div"),l=S.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,E.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=S.createElement("table"),t=S.createElement("tr"),n=S.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=S.createElement("div").style,Xe={};function Ve(e){var t=E.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=E.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=E.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=E.css(e,"border"+ne[a]+"Width",!0,i))):(u+=E.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=E.css(e,"border"+ne[a]+"Width",!0,i):s+=E.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===E.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===E.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===E.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=E.cssHooks[t]||E.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=E.cssHooks[t]||E.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],function(e,u){E.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===E.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=E.css(e,u)),Je(0,t,s)}}}),E.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(i,o){E.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(E.cssHooks[i+o].set=Je)}),E.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=E.css(e,t[a],!1,r);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,1<arguments.length)}}),((E.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||!E.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=et.prototype.init,E.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===S.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,E.fx.interval),E.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=E.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:E.extend({},e),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=E.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=E.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(E._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return E.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),E.fx.timer(E.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}E.Animation=E.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=E._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,E.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||E.style(e,r)}if((u=!E.isEmptyObject(t))||!E.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=E.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=E.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===E.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)E.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),E.speed=function(e,t,n){var r=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return E.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in E.fx.speeds?r.duration=E.fx.speeds[r.duration]:r.duration=E.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue)},r},E.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=E.isEmptyObject(t),o=E.speed(e,n,r),a=function(){var e=ft(this,E.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=E.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||E.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=E.timers,o=n?n.length:0;for(t.finish=!0,E.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),E.each(["toggle","show","hide"],function(e,r){var i=E.fn[r];E.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),E.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){E.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||E.fx.stop(),tt=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){nt||(nt=!0,st())},E.fx.stop=function(){nt=null},E.fx.speeds={slow:600,fast:200,_default:400},E.fn.delay=function(r,e){return r=E.fx&&E.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=S.createElement("input"),it=S.createElement("select").appendChild(S.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=S.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return B(this,E.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||E.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}E.fn.extend({prop:function(e,t){return B(this,E.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){E(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=E(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;E.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,E(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=E.map(t,function(e){return null==e?"":e+""})),(r=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=E.valHooks[t.type]||E.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:yt(E.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=E(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=E.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<E.inArray(E.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<E.inArray(E(e).val(),t)}},v.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};E.extend(E.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||S],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||S,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+E.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[E.expando]?e:new E.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:E.makeArray(t,[e]),c=E.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||S)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),E.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),E.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(r,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}}),v.focusin||E.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){E.event.simulate(r,e.target,E.event.fix(e))};E.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},St=/\?/;E.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||E.error("Invalid XML: "+(n?E.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Et=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))E.each(e,function(e,t){r||Et.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}E.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!E(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=S.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,E.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=E.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&E.extend(!0,e,r),e}Wt.href=Tt.href,E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,E.ajaxSettings),t):Bt(E.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=E.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?E(v):E.event,x=E.Deferred(),b=E.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=S.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=E.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=E.event&&y.global)&&0==E.active++&&E.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(St.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(St.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(E.lastModified[f]&&T.setRequestHeader("If-Modified-Since",E.lastModified[f]),E.etag[f]&&T.setRequestHeader("If-None-Match",E.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<E.inArray("script",y.dataTypes)&&E.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(E.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(E.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--E.active||E.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],function(e,i){E[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),E.ajax(E.extend({url:e,type:i,dataType:r,data:t,success:n},E.isPlainObject(e)&&e))}}),E.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),E._evalUrl=function(e,t,n){return E.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){E.globalEval(e,t,n)}})},E.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){E(this).wrapInner(n.call(this,e))}):this.each(function(){var e=E(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){E(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=E.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,E.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),E.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),E.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=E("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),S.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||E.expando+"_"+Ct.guid++;return this[e]=!0,e}}),E.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||E.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?E(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=S.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=S.implementation.createHTMLDocument("")).createElement("base")).href=S.location.href,t.head.appendChild(r)):t=S),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&E(o).remove(),E.merge([],i.childNodes)));var r,i,o},E.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&E.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?E("<div>").append(E.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},E.expr.pseudos.animated=function(t){return E.grep(E.timers,function(e){return t===e.elem}).length},E.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=E.css(e,"position"),c=E(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=E.css(e,"top"),u=E.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,E.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},E.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===E.css(e,"position"))e=e.offsetParent;return e||re})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;E.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),E.each(["top","left"],function(e,n){E.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?E(e).position()[n]+"px":t})}),E.each({Height:"height",Width:"width"},function(a,s){E.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){E.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?E.css(e,t,i):E.style(e,t,n,i)},s,n?e:void 0,n)}})}),E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){E.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;E.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||E.guid++,i},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=A,E.isFunction=m,E.isWindow=x,E.camelCase=X,E.type=w,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},E.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return E});var Yt=C.jQuery,Qt=C.$;return E.noConflict=function(e){return C.$===E&&(C.$=Qt),e&&C.jQuery===E&&(C.jQuery=Yt),E},"undefined"==typeof e&&(C.jQuery=C.$=E),E});

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,(function(){"use strict";const t="transitionend",e=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,((t,e)=>`#${CSS.escape(e)}`))),t),i=e=>{e.dispatchEvent(new Event(t))},n=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),s=t=>n(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(e(t)):null,o=t=>{if(!n(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),i=t.closest("details:not([open])");if(!i)return e;if(i!==t){const e=t.closest("summary");if(e&&e.parentNode!==i)return!1;if(null===e)return!1}return e},r=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),a=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?a(t.parentNode):null},l=()=>{},c=t=>{t.offsetHeight},h=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,d=[],u=()=>"rtl"===document.documentElement.dir,f=t=>{var e;e=()=>{const e=h();if(e){const i=t.NAME,n=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=n,t.jQueryInterface)}},"loading"===document.readyState?(d.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of d)t()})),d.push(e)):e()},p=(t,e=[],i=t)=>"function"==typeof t?t(...e):i,m=(e,n,s=!0)=>{if(!s)return void p(e);const o=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const n=Number.parseFloat(e),s=Number.parseFloat(i);return n||s?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(n)+5;let r=!1;const a=({target:i})=>{i===n&&(r=!0,n.removeEventListener(t,a),p(e))};n.addEventListener(t,a),setTimeout((()=>{r||i(n)}),o)},g=(t,e,i,n)=>{const s=t.length;let o=t.indexOf(e);return-1===o?!i&&n?t[s-1]:t[0]:(o+=i?1:-1,n&&(o=(o+s)%s),t[Math.max(0,Math.min(o,s-1))])},_=/[^.]*(?=\..*)\.|.*/,b=/\..*/,v=/::\d+$/,y={};let w=1;const A={mouseenter:"mouseover",mouseleave:"mouseout"},E=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function T(t,e){return e&&`${e}::${w++}`||t.uidEvent||w++}function C(t){const e=T(t);return t.uidEvent=e,y[e]=y[e]||{},y[e]}function O(t,e,i=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===i))}function x(t,e,i){const n="string"==typeof e,s=n?i:e||i;let o=D(t);return E.has(o)||(o=t),[n,s,o]}function k(t,e,i,n,s){if("string"!=typeof e||!t)return;let[o,r,a]=x(e,i,n);if(e in A){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r=t(r)}const l=C(t),c=l[a]||(l[a]={}),h=O(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&s);const d=T(r,e.replace(_,"")),u=o?function(t,e,i){return function n(s){const o=t.querySelectorAll(e);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return N(s,{delegateTarget:r}),n.oneOff&&I.off(t,s.type,e,i),i.apply(r,[s])}}(t,i,r):function(t,e){return function i(n){return N(n,{delegateTarget:t}),i.oneOff&&I.off(t,n.type,e),e.apply(t,[n])}}(t,r);u.delegationSelector=o?i:null,u.callable=r,u.oneOff=s,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function L(t,e,i,n,s){const o=O(e[i],n,s);o&&(t.removeEventListener(i,o,Boolean(s)),delete e[i][o.uidEvent])}function S(t,e,i,n){const s=e[i]||{};for(const[o,r]of Object.entries(s))o.includes(n)&&L(t,e,i,r.callable,r.delegationSelector)}function D(t){return t=t.replace(b,""),A[t]||t}const I={on(t,e,i,n){k(t,e,i,n,!1)},one(t,e,i,n){k(t,e,i,n,!0)},off(t,e,i,n){if("string"!=typeof e||!t)return;const[s,o,r]=x(e,i,n),a=r!==e,l=C(t),c=l[r]||{},h=e.startsWith(".");if(void 0===o){if(h)for(const i of Object.keys(l))S(t,l,i,e.slice(1));for(const[i,n]of Object.entries(c)){const s=i.replace(v,"");a&&!e.includes(s)||L(t,l,r,n.callable,n.delegationSelector)}}else{if(!Object.keys(c).length)return;L(t,l,r,o,s?i:null)}},trigger(t,e,i){if("string"!=typeof e||!t)return null;const n=h();let s=null,o=!0,r=!0,a=!1;e!==D(e)&&n&&(s=n.Event(e,i),n(t).trigger(s),o=!s.isPropagationStopped(),r=!s.isImmediatePropagationStopped(),a=s.isDefaultPrevented());let l=new Event(e,{bubbles:o,cancelable:!0});return l=N(l,i),a&&l.preventDefault(),r&&t.dispatchEvent(l),l.defaultPrevented&&s&&s.preventDefault(),l}};function N(t,e={}){for(const[i,n]of Object.entries(e))try{t[i]=n}catch(e){Object.defineProperty(t,i,{configurable:!0,get:()=>n})}return t}const P=new Map,j={set(t,e,i){P.has(t)||P.set(t,new Map);const n=P.get(t);n.has(e)||0===n.size?n.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>P.has(t)&&P.get(t).get(e)||null,remove(t,e){if(!P.has(t))return;const i=P.get(t);i.delete(e),0===i.size&&P.delete(t)}};function M(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function F(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const H={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${F(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${F(e)}`)},getDataAttributes(t){if(!t)return{};const e={},i=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const n of i){let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=M(t.dataset[n])}return e},getDataAttribute:(t,e)=>M(t.getAttribute(`data-bs-${F(e)}`))};class ${static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=n(e)?H.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof i?i:{},...n(e)?H.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[s,o]of Object.entries(e)){const e=t[s],r=n(e)?"element":null==(i=e)?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(o).test(r))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${o}".`)}var i}}class W extends ${constructor(t,e){super(),(t=s(t))&&(this._element=t,this._config=this._getConfig(e),j.set(this._element,this.constructor.DATA_KEY,this))}dispose(){j.remove(this._element,this.constructor.DATA_KEY),I.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){m(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return j.get(s(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.3.0-alpha1"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const B=t=>{let i=t.getAttribute("data-bs-target");if(!i||"#"===i){let e=t.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),i=e&&"#"!==e?e.trim():null}return e(i)},z={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const i=[];let n=t.parentNode.closest(e);for(;n;)i.push(n),n=n.parentNode.closest(e);return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!r(t)&&o(t)))},getSelectorFromElement(t){const e=B(t);return e&&z.findOne(e)?e:null},getElementFromSelector(t){const e=B(t);return e?z.findOne(e):null},getMultipleElementsFromSelector(t){const e=B(t);return e?z.find(e):[]}},R=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,n=t.NAME;I.on(document,i,`[data-bs-dismiss="${n}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),r(this))return;const s=z.getElementFromSelector(this)||this.closest(`.${n}`);t.getOrCreateInstance(s)[e]()}))};class q extends W{static get NAME(){return"alert"}close(){if(I.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),I.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=q.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}R(q,"close"),f(q);const V='[data-bs-toggle="button"]';class K extends W{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=K.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}I.on(document,"click.bs.button.data-api",V,(t=>{t.preventDefault();const e=t.target.closest(V);K.getOrCreateInstance(e).toggle()})),f(K);const Q={endCallback:null,leftCallback:null,rightCallback:null},X={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Y extends ${constructor(t,e){super(),this._element=t,t&&Y.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return Q}static get DefaultType(){return X}static get NAME(){return"swipe"}dispose(){I.off(this._element,".bs.swipe")}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),p(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=40)return;const e=t/this._deltaX;this._deltaX=0,e&&p(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(I.on(this._element,"pointerdown.bs.swipe",(t=>this._start(t))),I.on(this._element,"pointerup.bs.swipe",(t=>this._end(t))),this._element.classList.add("pointer-event")):(I.on(this._element,"touchstart.bs.swipe",(t=>this._start(t))),I.on(this._element,"touchmove.bs.swipe",(t=>this._move(t))),I.on(this._element,"touchend.bs.swipe",(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const U="next",G="prev",J="left",Z="right",tt="slid.bs.carousel",et="carousel",it="active",nt={ArrowLeft:Z,ArrowRight:J},st={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},ot={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class rt extends W{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=z.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===et&&this.cycle()}static get Default(){return st}static get DefaultType(){return ot}static get NAME(){return"carousel"}next(){this._slide(U)}nextWhenVisible(){!document.hidden&&o(this._element)&&this.next()}prev(){this._slide(G)}pause(){this._isSliding&&i(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?I.one(this._element,tt,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void I.one(this._element,tt,(()=>this.to(t)));const i=this._getItemIndex(this._getActive());if(i===t)return;const n=t>i?U:G;this._slide(n,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&I.on(this._element,"keydown.bs.carousel",(t=>this._keydown(t))),"hover"===this._config.pause&&(I.on(this._element,"mouseenter.bs.carousel",(()=>this.pause())),I.on(this._element,"mouseleave.bs.carousel",(()=>this._maybeEnableCycle()))),this._config.touch&&Y.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const t of z.find(".carousel-item img",this._element))I.on(t,"dragstart.bs.carousel",(t=>t.preventDefault()));const t={leftCallback:()=>this._slide(this._directionToOrder(J)),rightCallback:()=>this._slide(this._directionToOrder(Z)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new Y(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=nt[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=z.findOne(".active",this._indicatorsElement);e.classList.remove(it),e.removeAttribute("aria-current");const i=z.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(it),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),n=t===U,s=e||g(this._getItems(),i,n,this._config.wrap);if(s===i)return;const o=this._getItemIndex(s),r=e=>I.trigger(this._element,e,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(r("slide.bs.carousel").defaultPrevented)return;if(!i||!s)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=s;const l=n?"carousel-item-start":"carousel-item-end",h=n?"carousel-item-next":"carousel-item-prev";s.classList.add(h),c(s),i.classList.add(l),s.classList.add(l),this._queueCallback((()=>{s.classList.remove(l,h),s.classList.add(it),i.classList.remove(it,h,l),this._isSliding=!1,r(tt)}),i,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return z.findOne(".active.carousel-item",this._element)}_getItems(){return z.find(".carousel-item",this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return u()?t===J?G:U:t===J?U:G}_orderToDirection(t){return u()?t===G?J:Z:t===G?Z:J}static jQueryInterface(t){return this.each((function(){const e=rt.getOrCreateInstance(this,t);if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)}))}}I.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",(function(t){const e=z.getElementFromSelector(this);if(!e||!e.classList.contains(et))return;t.preventDefault();const i=rt.getOrCreateInstance(e),n=this.getAttribute("data-bs-slide-to");return n?(i.to(n),void i._maybeEnableCycle()):"next"===H.getDataAttribute(this,"slide")?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())})),I.on(window,"load.bs.carousel.data-api",(()=>{const t=z.find('[data-bs-ride="carousel"]');for(const e of t)rt.getOrCreateInstance(e)})),f(rt);const at="show",lt="collapse",ct="collapsing",ht='[data-bs-toggle="collapse"]',dt={parent:null,toggle:!0},ut={parent:"(null|element)",toggle:"boolean"};class ft extends W{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const i=z.find(ht);for(const t of i){const e=z.getSelectorFromElement(t),i=z.find(e).filter((t=>t===this._element));null!==e&&i.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return dt}static get DefaultType(){return ut}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t!==this._element)).map((t=>ft.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;if(I.trigger(this._element,"show.bs.collapse").defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(lt),this._element.classList.add(ct),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(ct),this._element.classList.add(lt,at),this._element.style[e]="",I.trigger(this._element,"shown.bs.collapse")}),this._element,!0),this._element.style[e]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(I.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,c(this._element),this._element.classList.add(ct),this._element.classList.remove(lt,at);for(const t of this._triggerArray){const e=z.getElementFromSelector(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(ct),this._element.classList.add(lt),I.trigger(this._element,"hidden.bs.collapse")}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(at)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=s(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(ht);for(const e of t){const t=z.getElementFromSelector(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=z.find(":scope .collapse .collapse",this._config.parent);return z.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle("collapsed",!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const i=ft.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t]()}}))}}I.on(document,"click.bs.collapse.data-api",ht,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();for(const t of z.getMultipleElementsFromSelector(this))ft.getOrCreateInstance(t,{toggle:!1}).toggle()})),f(ft);var pt="top",mt="bottom",gt="right",_t="left",bt="auto",vt=[pt,mt,gt,_t],yt="start",wt="end",At="clippingParents",Et="viewport",Tt="popper",Ct="reference",Ot=vt.reduce((function(t,e){return t.concat([e+"-"+yt,e+"-"+wt])}),[]),xt=[].concat(vt,[bt]).reduce((function(t,e){return t.concat([e,e+"-"+yt,e+"-"+wt])}),[]),kt="beforeRead",Lt="read",St="afterRead",Dt="beforeMain",It="main",Nt="afterMain",Pt="beforeWrite",jt="write",Mt="afterWrite",Ft=[kt,Lt,St,Dt,It,Nt,Pt,jt,Mt];function Ht(t){return t?(t.nodeName||"").toLowerCase():null}function $t(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Wt(t){return t instanceof $t(t).Element||t instanceof Element}function Bt(t){return t instanceof $t(t).HTMLElement||t instanceof HTMLElement}function zt(t){return"undefined"!=typeof ShadowRoot&&(t instanceof $t(t).ShadowRoot||t instanceof ShadowRoot)}const Rt={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},s=e.elements[t];Bt(s)&&Ht(s)&&(Object.assign(s.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?s.removeAttribute(t):s.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],s=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});Bt(n)&&Ht(n)&&(Object.assign(n.style,o),Object.keys(s).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};function qt(t){return t.split("-")[0]}var Vt=Math.max,Kt=Math.min,Qt=Math.round;function Xt(){var t=navigator.userAgentData;return null!=t&&t.brands?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function Yt(){return!/^((?!chrome|android).)*safari/i.test(Xt())}function Ut(t,e,i){void 0===e&&(e=!1),void 0===i&&(i=!1);var n=t.getBoundingClientRect(),s=1,o=1;e&&Bt(t)&&(s=t.offsetWidth>0&&Qt(n.width)/t.offsetWidth||1,o=t.offsetHeight>0&&Qt(n.height)/t.offsetHeight||1);var r=(Wt(t)?$t(t):window).visualViewport,a=!Yt()&&i,l=(n.left+(a&&r?r.offsetLeft:0))/s,c=(n.top+(a&&r?r.offsetTop:0))/o,h=n.width/s,d=n.height/o;return{width:h,height:d,top:c,right:l+h,bottom:c+d,left:l,x:l,y:c}}function Gt(t){var e=Ut(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function Jt(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&zt(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Zt(t){return $t(t).getComputedStyle(t)}function te(t){return["table","td","th"].indexOf(Ht(t))>=0}function ee(t){return((Wt(t)?t.ownerDocument:t.document)||window.document).documentElement}function ie(t){return"html"===Ht(t)?t:t.assignedSlot||t.parentNode||(zt(t)?t.host:null)||ee(t)}function ne(t){return Bt(t)&&"fixed"!==Zt(t).position?t.offsetParent:null}function se(t){for(var e=$t(t),i=ne(t);i&&te(i)&&"static"===Zt(i).position;)i=ne(i);return i&&("html"===Ht(i)||"body"===Ht(i)&&"static"===Zt(i).position)?e:i||function(t){var e=/firefox/i.test(Xt());if(/Trident/i.test(Xt())&&Bt(t)&&"fixed"===Zt(t).position)return null;var i=ie(t);for(zt(i)&&(i=i.host);Bt(i)&&["html","body"].indexOf(Ht(i))<0;){var n=Zt(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}(t)||e}function oe(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function re(t,e,i){return Vt(t,Kt(e,i))}function ae(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function le(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}const ce={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,n=t.name,s=t.options,o=i.elements.arrow,r=i.modifiersData.popperOffsets,a=qt(i.placement),l=oe(a),c=[_t,gt].indexOf(a)>=0?"height":"width";if(o&&r){var h=function(t,e){return ae("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:le(t,vt))}(s.padding,i),d=Gt(o),u="y"===l?pt:_t,f="y"===l?mt:gt,p=i.rects.reference[c]+i.rects.reference[l]-r[l]-i.rects.popper[c],m=r[l]-i.rects.reference[l],g=se(o),_=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,b=p/2-m/2,v=h[u],y=_-d[c]-h[f],w=_/2-d[c]/2+b,A=re(v,w,y),E=l;i.modifiersData[n]=((e={})[E]=A,e.centerOffset=A-w,e)}},effect:function(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&Jt(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function he(t){return t.split("-")[1]}var de={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ue(t){var e,i=t.popper,n=t.popperRect,s=t.placement,o=t.variation,r=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,h=t.roundOffsets,d=t.isFixed,u=r.x,f=void 0===u?0:u,p=r.y,m=void 0===p?0:p,g="function"==typeof h?h({x:f,y:m}):{x:f,y:m};f=g.x,m=g.y;var _=r.hasOwnProperty("x"),b=r.hasOwnProperty("y"),v=_t,y=pt,w=window;if(c){var A=se(i),E="clientHeight",T="clientWidth";A===$t(i)&&"static"!==Zt(A=ee(i)).position&&"absolute"===a&&(E="scrollHeight",T="scrollWidth"),(s===pt||(s===_t||s===gt)&&o===wt)&&(y=mt,m-=(d&&A===w&&w.visualViewport?w.visualViewport.height:A[E])-n.height,m*=l?1:-1),s!==_t&&(s!==pt&&s!==mt||o!==wt)||(v=gt,f-=(d&&A===w&&w.visualViewport?w.visualViewport.width:A[T])-n.width,f*=l?1:-1)}var C,O=Object.assign({position:a},c&&de),x=!0===h?function(t){var e=t.x,i=t.y,n=window.devicePixelRatio||1;return{x:Qt(e*n)/n||0,y:Qt(i*n)/n||0}}({x:f,y:m}):{x:f,y:m};return f=x.x,m=x.y,l?Object.assign({},O,((C={})[y]=b?"0":"",C[v]=_?"0":"",C.transform=(w.devicePixelRatio||1)<=1?"translate("+f+"px, "+m+"px)":"translate3d("+f+"px, "+m+"px, 0)",C)):Object.assign({},O,((e={})[y]=b?m+"px":"",e[v]=_?f+"px":"",e.transform="",e))}const fe={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,n=i.gpuAcceleration,s=void 0===n||n,o=i.adaptive,r=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:qt(e.placement),variation:he(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,ue(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,ue(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}};var pe={passive:!0};const me={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,n=t.options,s=n.scroll,o=void 0===s||s,r=n.resize,a=void 0===r||r,l=$t(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,pe)})),a&&l.addEventListener("resize",i.update,pe),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,pe)})),a&&l.removeEventListener("resize",i.update,pe)}},data:{}};var ge={left:"right",right:"left",bottom:"top",top:"bottom"};function _e(t){return t.replace(/left|right|bottom|top/g,(function(t){return ge[t]}))}var be={start:"end",end:"start"};function ve(t){return t.replace(/start|end/g,(function(t){return be[t]}))}function ye(t){var e=$t(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function we(t){return Ut(ee(t)).left+ye(t).scrollLeft}function Ae(t){var e=Zt(t),i=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+s+n)}function Ee(t){return["html","body","#document"].indexOf(Ht(t))>=0?t.ownerDocument.body:Bt(t)&&Ae(t)?t:Ee(ie(t))}function Te(t,e){var i;void 0===e&&(e=[]);var n=Ee(t),s=n===(null==(i=t.ownerDocument)?void 0:i.body),o=$t(n),r=s?[o].concat(o.visualViewport||[],Ae(n)?n:[]):n,a=e.concat(r);return s?a:a.concat(Te(ie(r)))}function Ce(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Oe(t,e,i){return e===Et?Ce(function(t,e){var i=$t(t),n=ee(t),s=i.visualViewport,o=n.clientWidth,r=n.clientHeight,a=0,l=0;if(s){o=s.width,r=s.height;var c=Yt();(c||!c&&"fixed"===e)&&(a=s.offsetLeft,l=s.offsetTop)}return{width:o,height:r,x:a+we(t),y:l}}(t,i)):Wt(e)?function(t,e){var i=Ut(t,!1,"fixed"===e);return i.top=i.top+t.clientTop,i.left=i.left+t.clientLeft,i.bottom=i.top+t.clientHeight,i.right=i.left+t.clientWidth,i.width=t.clientWidth,i.height=t.clientHeight,i.x=i.left,i.y=i.top,i}(e,i):Ce(function(t){var e,i=ee(t),n=ye(t),s=null==(e=t.ownerDocument)?void 0:e.body,o=Vt(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=Vt(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+we(t),l=-n.scrollTop;return"rtl"===Zt(s||i).direction&&(a+=Vt(i.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(ee(t)))}function xe(t){var e,i=t.reference,n=t.element,s=t.placement,o=s?qt(s):null,r=s?he(s):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(o){case pt:e={x:a,y:i.y-n.height};break;case mt:e={x:a,y:i.y+i.height};break;case gt:e={x:i.x+i.width,y:l};break;case _t:e={x:i.x-n.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?oe(o):null;if(null!=c){var h="y"===c?"height":"width";switch(r){case yt:e[c]=e[c]-(i[h]/2-n[h]/2);break;case wt:e[c]=e[c]+(i[h]/2-n[h]/2)}}return e}function ke(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=void 0===n?t.placement:n,o=i.strategy,r=void 0===o?t.strategy:o,a=i.boundary,l=void 0===a?At:a,c=i.rootBoundary,h=void 0===c?Et:c,d=i.elementContext,u=void 0===d?Tt:d,f=i.altBoundary,p=void 0!==f&&f,m=i.padding,g=void 0===m?0:m,_=ae("number"!=typeof g?g:le(g,vt)),b=u===Tt?Ct:Tt,v=t.rects.popper,y=t.elements[p?b:u],w=function(t,e,i,n){var s="clippingParents"===e?function(t){var e=Te(ie(t)),i=["absolute","fixed"].indexOf(Zt(t).position)>=0&&Bt(t)?se(t):t;return Wt(i)?e.filter((function(t){return Wt(t)&&Jt(t,i)&&"body"!==Ht(t)})):[]}(t):[].concat(e),o=[].concat(s,[i]),r=o[0],a=o.reduce((function(e,i){var s=Oe(t,i,n);return e.top=Vt(s.top,e.top),e.right=Kt(s.right,e.right),e.bottom=Kt(s.bottom,e.bottom),e.left=Vt(s.left,e.left),e}),Oe(t,r,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(Wt(y)?y:y.contextElement||ee(t.elements.popper),l,h,r),A=Ut(t.elements.reference),E=xe({reference:A,element:v,strategy:"absolute",placement:s}),T=Ce(Object.assign({},v,E)),C=u===Tt?T:A,O={top:w.top-C.top+_.top,bottom:C.bottom-w.bottom+_.bottom,left:w.left-C.left+_.left,right:C.right-w.right+_.right},x=t.modifiersData.offset;if(u===Tt&&x){var k=x[s];Object.keys(O).forEach((function(t){var e=[gt,mt].indexOf(t)>=0?1:-1,i=[pt,mt].indexOf(t)>=0?"y":"x";O[t]+=k[i]*e}))}return O}function Le(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?xt:l,h=he(n),d=h?a?Ot:Ot.filter((function(t){return he(t)===h})):vt,u=d.filter((function(t){return c.indexOf(t)>=0}));0===u.length&&(u=d);var f=u.reduce((function(e,i){return e[i]=ke(t,{placement:i,boundary:s,rootBoundary:o,padding:r})[qt(i)],e}),{});return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}const Se={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0===r||r,l=i.fallbackPlacements,c=i.padding,h=i.boundary,d=i.rootBoundary,u=i.altBoundary,f=i.flipVariations,p=void 0===f||f,m=i.allowedAutoPlacements,g=e.options.placement,_=qt(g),b=l||(_!==g&&p?function(t){if(qt(t)===bt)return[];var e=_e(t);return[ve(t),e,ve(e)]}(g):[_e(g)]),v=[g].concat(b).reduce((function(t,i){return t.concat(qt(i)===bt?Le(e,{placement:i,boundary:h,rootBoundary:d,padding:c,flipVariations:p,allowedAutoPlacements:m}):i)}),[]),y=e.rects.reference,w=e.rects.popper,A=new Map,E=!0,T=v[0],C=0;C<v.length;C++){var O=v[C],x=qt(O),k=he(O)===yt,L=[pt,mt].indexOf(x)>=0,S=L?"width":"height",D=ke(e,{placement:O,boundary:h,rootBoundary:d,altBoundary:u,padding:c}),I=L?k?gt:_t:k?mt:pt;y[S]>w[S]&&(I=_e(I));var N=_e(I),P=[];if(o&&P.push(D[x]<=0),a&&P.push(D[I]<=0,D[N]<=0),P.every((function(t){return t}))){T=O,E=!1;break}A.set(O,P)}if(E)for(var j=function(t){var e=v.find((function(e){var i=A.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return T=e,"break"},M=p?3:1;M>0&&"break"!==j(M);M--);e.placement!==T&&(e.modifiersData[n]._skip=!0,e.placement=T,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function De(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function Ie(t){return[pt,gt,mt,_t].some((function(e){return t[e]>=0}))}const Ne={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,n=e.rects.reference,s=e.rects.popper,o=e.modifiersData.preventOverflow,r=ke(e,{elementContext:"reference"}),a=ke(e,{altBoundary:!0}),l=De(r,n),c=De(a,s,o),h=Ie(l),d=Ie(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":d})}},Pe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.offset,o=void 0===s?[0,0]:s,r=xt.reduce((function(t,i){return t[i]=function(t,e,i){var n=qt(t),s=[_t,pt].indexOf(n)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[_t,gt].indexOf(n)>=0?{x:a,y:r}:{x:r,y:a}}(i,e.rects,o),t}),{}),a=r[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=r}},je={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=xe({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},Me={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0!==r&&r,l=i.boundary,c=i.rootBoundary,h=i.altBoundary,d=i.padding,u=i.tether,f=void 0===u||u,p=i.tetherOffset,m=void 0===p?0:p,g=ke(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:h}),_=qt(e.placement),b=he(e.placement),v=!b,y=oe(_),w="x"===y?"y":"x",A=e.modifiersData.popperOffsets,E=e.rects.reference,T=e.rects.popper,C="function"==typeof m?m(Object.assign({},e.rects,{placement:e.placement})):m,O="number"==typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),x=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,k={x:0,y:0};if(A){if(o){var L,S="y"===y?pt:_t,D="y"===y?mt:gt,I="y"===y?"height":"width",N=A[y],P=N+g[S],j=N-g[D],M=f?-T[I]/2:0,F=b===yt?E[I]:T[I],H=b===yt?-T[I]:-E[I],$=e.elements.arrow,W=f&&$?Gt($):{width:0,height:0},B=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},z=B[S],R=B[D],q=re(0,E[I],W[I]),V=v?E[I]/2-M-q-z-O.mainAxis:F-q-z-O.mainAxis,K=v?-E[I]/2+M+q+R+O.mainAxis:H+q+R+O.mainAxis,Q=e.elements.arrow&&se(e.elements.arrow),X=Q?"y"===y?Q.clientTop||0:Q.clientLeft||0:0,Y=null!=(L=null==x?void 0:x[y])?L:0,U=N+K-Y,G=re(f?Kt(P,N+V-Y-X):P,N,f?Vt(j,U):j);A[y]=G,k[y]=G-N}if(a){var J,Z="x"===y?pt:_t,tt="x"===y?mt:gt,et=A[w],it="y"===w?"height":"width",nt=et+g[Z],st=et-g[tt],ot=-1!==[pt,_t].indexOf(_),rt=null!=(J=null==x?void 0:x[w])?J:0,at=ot?nt:et-E[it]-T[it]-rt+O.altAxis,lt=ot?et+E[it]+T[it]-rt-O.altAxis:st,ct=f&&ot?function(t,e,i){var n=re(t,e,i);return n>i?i:n}(at,et,lt):re(f?at:nt,et,f?lt:st);A[w]=ct,k[w]=ct-et}e.modifiersData[n]=k}},requiresIfExists:["offset"]};function Fe(t,e,i){void 0===i&&(i=!1);var n,s,o=Bt(e),r=Bt(e)&&function(t){var e=t.getBoundingClientRect(),i=Qt(e.width)/t.offsetWidth||1,n=Qt(e.height)/t.offsetHeight||1;return 1!==i||1!==n}(e),a=ee(e),l=Ut(t,r,i),c={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(o||!o&&!i)&&(("body"!==Ht(e)||Ae(a))&&(c=(n=e)!==$t(n)&&Bt(n)?{scrollLeft:(s=n).scrollLeft,scrollTop:s.scrollTop}:ye(n)),Bt(e)?((h=Ut(e,!0)).x+=e.clientLeft,h.y+=e.clientTop):a&&(h.x=we(a))),{x:l.left+c.scrollLeft-h.x,y:l.top+c.scrollTop-h.y,width:l.width,height:l.height}}function He(t){var e=new Map,i=new Set,n=[];function s(t){i.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!i.has(t)){var n=e.get(t);n&&s(n)}})),n.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||s(t)})),n}var $e={placement:"bottom",modifiers:[],strategy:"absolute"};function We(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function Be(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,s=e.defaultOptions,o=void 0===s?$e:s;return function(t,e,i){void 0===i&&(i=o);var s,r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},$e,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,h={state:a,setOptions:function(i){var s="function"==typeof i?i(a.options):i;d(),a.options=Object.assign({},o,a.options,s),a.scrollParents={reference:Wt(t)?Te(t):t.contextElement?Te(t.contextElement):[],popper:Te(e)};var r,c,u=function(t){var e=He(t);return Ft.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((r=[].concat(n,a.options.modifiers),c=r.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(c).map((function(t){return c[t]}))));return a.orderedModifiers=u.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,s=t.effect;if("function"==typeof s){var o=s({state:a,name:e,instance:h,options:n});l.push(o||function(){})}})),h.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,i=t.popper;if(We(e,i)){a.rects={reference:Fe(e,se(i),"fixed"===a.options.strategy),popper:Gt(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var s=a.orderedModifiers[n],o=s.fn,r=s.options,l=void 0===r?{}:r,d=s.name;"function"==typeof o&&(a=o({state:a,options:l,name:d,instance:h})||a)}else a.reset=!1,n=-1}}},update:(s=function(){return new Promise((function(t){h.forceUpdate(),t(a)}))},function(){return r||(r=new Promise((function(t){Promise.resolve().then((function(){r=void 0,t(s())}))}))),r}),destroy:function(){d(),c=!0}};if(!We(t,e))return h;function d(){l.forEach((function(t){return t()})),l=[]}return h.setOptions(i).then((function(t){!c&&i.onFirstUpdate&&i.onFirstUpdate(t)})),h}}var ze=Be(),Re=Be({defaultModifiers:[me,je,fe,Rt]}),qe=Be({defaultModifiers:[me,je,fe,Rt,Pe,Se,Me,ce,Ne]});const Ve=Object.freeze(Object.defineProperty({__proto__:null,popperGenerator:Be,detectOverflow:ke,createPopperBase:ze,createPopper:qe,createPopperLite:Re,top:pt,bottom:mt,right:gt,left:_t,auto:bt,basePlacements:vt,start:yt,end:wt,clippingParents:At,viewport:Et,popper:Tt,reference:Ct,variationPlacements:Ot,placements:xt,beforeRead:kt,read:Lt,afterRead:St,beforeMain:Dt,main:It,afterMain:Nt,beforeWrite:Pt,write:jt,afterWrite:Mt,modifierPhases:Ft,applyStyles:Rt,arrow:ce,computeStyles:fe,eventListeners:me,flip:Se,hide:Ne,offset:Pe,popperOffsets:je,preventOverflow:Me},Symbol.toStringTag,{value:"Module"})),Ke="dropdown",Qe="ArrowUp",Xe="ArrowDown",Ye="click.bs.dropdown.data-api",Ue="keydown.bs.dropdown.data-api",Ge="show",Je='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Ze=`${Je}.show`,ti=".dropdown-menu",ei=u()?"top-end":"top-start",ii=u()?"top-start":"top-end",ni=u()?"bottom-end":"bottom-start",si=u()?"bottom-start":"bottom-end",oi=u()?"left-start":"right-start",ri=u()?"right-start":"left-start",ai={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},li={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class ci extends W{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=z.next(this._element,ti)[0]||z.prev(this._element,ti)[0]||z.findOne(ti,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return ai}static get DefaultType(){return li}static get NAME(){return Ke}toggle(){return this._isShown()?this.hide():this.show()}show(){if(r(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!I.trigger(this._element,"show.bs.dropdown",t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const t of[].concat(...document.body.children))I.on(t,"mouseover",l);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ge),this._element.classList.add(Ge),I.trigger(this._element,"shown.bs.dropdown",t)}}hide(){if(r(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!I.trigger(this._element,"hide.bs.dropdown",t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))I.off(t,"mouseover",l);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ge),this._element.classList.remove(Ge),this._element.setAttribute("aria-expanded","false"),H.removeDataAttribute(this._menu,"popper"),I.trigger(this._element,"hidden.bs.dropdown",t)}}_getConfig(t){if("object"==typeof(t=super._getConfig(t)).reference&&!n(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${Ke.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(void 0===Ve)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=this._parent:n(this._config.reference)?t=s(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=qe(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Ge)}_getPlacement(){const t=this._parent;if(t.classList.contains("dropend"))return oi;if(t.classList.contains("dropstart"))return ri;if(t.classList.contains("dropup-center"))return"top";if(t.classList.contains("dropdown-center"))return"bottom";const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?ii:ei:e?si:ni}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(H.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...p(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:e}){const i=z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((t=>o(t)));i.length&&g(i,e,t===Xe,!i.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=ci.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return;const e=z.find(Ze);for(const i of e){const e=ci.getInstance(i);if(!e||!1===e._config.autoClose)continue;const n=t.composedPath(),s=n.includes(e._menu);if(n.includes(e._element)||"inside"===e._config.autoClose&&!s||"outside"===e._config.autoClose&&s)continue;if(e._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:e._element};"click"===t.type&&(o.clickEvent=t),e._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i="Escape"===t.key,n=[Qe,Xe].includes(t.key);if(!n&&!i)return;if(e&&!i)return;t.preventDefault();const s=this.matches(Je)?this:z.prev(this,Je)[0]||z.next(this,Je)[0]||z.findOne(Je,t.delegateTarget.parentNode),o=ci.getOrCreateInstance(s);if(n)return t.stopPropagation(),o.show(),void o._selectMenuItem(t);o._isShown()&&(t.stopPropagation(),o.hide(),s.focus())}}I.on(document,Ue,Je,ci.dataApiKeydownHandler),I.on(document,Ue,ti,ci.dataApiKeydownHandler),I.on(document,Ye,ci.clearMenus),I.on(document,"keyup.bs.dropdown.data-api",ci.clearMenus),I.on(document,Ye,Je,(function(t){t.preventDefault(),ci.getOrCreateInstance(this).toggle()})),f(ci);const hi=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",di=".sticky-top",ui="padding-right",fi="margin-right";class pi{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,ui,(e=>e+t)),this._setElementAttributes(hi,ui,(e=>e+t)),this._setElementAttributes(di,fi,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,ui),this._resetElementAttributes(hi,ui),this._resetElementAttributes(di,fi)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const n=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+n)return;this._saveInitialAttribute(t,e);const s=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(s))}px`)}))}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&H.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=H.getDataAttribute(t,e);null!==i?(H.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)}))}_applyManipulationCallback(t,e){if(n(t))e(t);else for(const i of z.find(t,this._element))e(i)}}const mi="show",gi="mousedown.bs.backdrop",_i={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},bi={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class vi extends ${constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return _i}static get DefaultType(){return bi}static get NAME(){return"backdrop"}show(t){if(!this._config.isVisible)return void p(t);this._append();const e=this._getElement();this._config.isAnimated&&c(e),e.classList.add(mi),this._emulateAnimation((()=>{p(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(mi),this._emulateAnimation((()=>{this.dispose(),p(t)}))):p(t)}dispose(){this._isAppended&&(I.off(this._element,gi),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=s(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),I.on(t,gi,(()=>{p(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){m(t,this._getElement(),this._config.isAnimated)}}const yi=".bs.focustrap",wi="backward",Ai={autofocus:!0,trapElement:null},Ei={autofocus:"boolean",trapElement:"element"};class Ti extends ${constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Ai}static get DefaultType(){return Ei}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),I.off(document,yi),I.on(document,"focusin.bs.focustrap",(t=>this._handleFocusin(t))),I.on(document,"keydown.tab.bs.focustrap",(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,I.off(document,yi))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=z.focusableChildren(e);0===i.length?e.focus():this._lastTabNavDirection===wi?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?wi:"forward")}}const Ci="hidden.bs.modal",Oi="show.bs.modal",xi="modal-open",ki="show",Li="modal-static",Si={backdrop:!0,focus:!0,keyboard:!0},Di={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Ii extends W{constructor(t,e){super(t,e),this._dialog=z.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new pi,this._addEventListeners()}static get Default(){return Si}static get DefaultType(){return Di}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||I.trigger(this._element,Oi,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(xi),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){this._isShown&&!this._isTransitioning&&(I.trigger(this._element,"hide.bs.modal").defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(ki),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated())))}dispose(){for(const t of[window,this._dialog])I.off(t,".bs.modal");this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new vi({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ti({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=z.findOne(".modal-body",this._dialog);e&&(e.scrollTop=0),c(this._element),this._element.classList.add(ki),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,I.trigger(this._element,"shown.bs.modal",{relatedTarget:t})}),this._dialog,this._isAnimated())}_addEventListeners(){I.on(this._element,"keydown.dismiss.bs.modal",(t=>{if("Escape"===t.key)return this._config.keyboard?(t.preventDefault(),void this.hide()):void this._triggerBackdropTransition()})),I.on(window,"resize.bs.modal",(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),I.on(this._element,"mousedown.dismiss.bs.modal",(t=>{I.one(this._element,"click.dismiss.bs.modal",(e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(xi),this._resetAdjustments(),this._scrollBar.reset(),I.trigger(this._element,Ci)}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(I.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;"hidden"===e||this._element.classList.contains(Li)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(Li),this._queueCallback((()=>{this._element.classList.remove(Li),this._queueCallback((()=>{this._element.style.overflowY=e}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const t=u()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!i&&t){const t=u()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=Ii.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}I.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(t){const e=z.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),I.one(e,Oi,(t=>{t.defaultPrevented||I.one(e,Ci,(()=>{o(this)&&this.focus()}))}));const i=z.findOne(".modal.show");i&&Ii.getInstance(i).hide(),Ii.getOrCreateInstance(e).toggle(this)})),R(Ii),f(Ii);const Ni="show",Pi="showing",ji="hiding",Mi=".offcanvas.show",Fi="hidePrevented.bs.offcanvas",Hi="hidden.bs.offcanvas",$i={backdrop:!0,keyboard:!0,scroll:!1},Wi={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Bi extends W{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return $i}static get DefaultType(){return Wi}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||I.trigger(this._element,"show.bs.offcanvas",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||(new pi).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Pi),this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Ni),this._element.classList.remove(Pi),I.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:t})}),this._element,!0))}hide(){this._isShown&&(I.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(ji),this._backdrop.hide(),this._queueCallback((()=>{this._element.classList.remove(Ni,ji),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new pi).reset(),I.trigger(this._element,Hi)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=Boolean(this._config.backdrop);return new vi({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():I.trigger(this._element,Fi)}:null})}_initializeFocusTrap(){return new Ti({trapElement:this._element})}_addEventListeners(){I.on(this._element,"keydown.dismiss.bs.offcanvas",(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():I.trigger(this._element,Fi))}))}static jQueryInterface(t){return this.each((function(){const e=Bi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}I.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(t){const e=z.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),r(this))return;I.one(e,Hi,(()=>{o(this)&&this.focus()}));const i=z.findOne(Mi);i&&i!==e&&Bi.getInstance(i).hide(),Bi.getOrCreateInstance(e).toggle(this)})),I.on(window,"load.bs.offcanvas.data-api",(()=>{for(const t of z.find(Mi))Bi.getOrCreateInstance(t).show()})),I.on(window,"resize.bs.offcanvas",(()=>{for(const t of z.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&Bi.getOrCreateInstance(t).hide()})),R(Bi),f(Bi);const zi=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Ri=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,qi=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Vi=(t,e)=>{const i=t.nodeName.toLowerCase();return e.includes(i)?!zi.has(i)||Boolean(Ri.test(t.nodeValue)||qi.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(i)))},Ki={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Qi={allowList:Ki,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Xi={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Yi={entry:"(string|element|function|null)",selector:"(string|element)"};class Ui extends ${constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Qi}static get DefaultType(){return Xi}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[e,i]of Object.entries(this._config.content))this._setContent(t,i,e);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},Yi)}_setContent(t,e,i){const o=z.findOne(i,t);o&&((e=this._resolvePossibleFunction(e))?n(e)?this._putElementInTemplate(s(e),o):this._config.html?o.innerHTML=this._maybeSanitize(e):o.textContent=e:o.remove())}_maybeSanitize(t){return this._config.sanitize?function(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const n=(new window.DOMParser).parseFromString(t,"text/html"),s=[].concat(...n.body.querySelectorAll("*"));for(const t of s){const i=t.nodeName.toLowerCase();if(!Object.keys(e).includes(i)){t.remove();continue}const n=[].concat(...t.attributes),s=[].concat(e["*"]||[],e[i]||[]);for(const e of n)Vi(e,s)||t.removeAttribute(e.nodeName)}return n.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return p(t,[this])}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}const Gi=new Set(["sanitize","allowList","sanitizeFn"]),Ji="fade",Zi="show",tn=".modal",en="hide.bs.modal",nn="hover",sn="focus",on={AUTO:"auto",TOP:"top",RIGHT:u()?"left":"right",BOTTOM:"bottom",LEFT:u()?"right":"left"},rn={allowList:Ki,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},an={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class ln extends W{constructor(t,e){if(void 0===Ve)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return rn}static get DefaultType(){return an}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),I.off(this._element.closest(tn),en,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const t=I.trigger(this._element,this.constructor.eventName("show")),e=(a(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!e)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:n}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(n.append(i),I.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(i),i.classList.add(Zi),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))I.on(t,"mouseover",l);this._queueCallback((()=>{I.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1}),this.tip,this._isAnimated())}hide(){if(this._isShown()&&!I.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(Zi),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))I.off(t,"mouseover",l);this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this._isHovered=null,this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),I.trigger(this._element,this.constructor.eventName("hidden")))}),this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Ji,Zi),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(Ji),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Ui({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Ji)}_isShown(){return this.tip&&this.tip.classList.contains(Zi)}_createPopper(t){const e=p(this._config.placement,[this,t,this._element]),i=on[e.toUpperCase()];return qe(this._element,t,this._getPopperConfig(i))}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return p(t,[this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]};return{...e,...p(this._config.popperConfig,[e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if("click"===e)I.on(this._element,this.constructor.eventName("click"),this._config.selector,(t=>{this._initializeOnDelegatedTarget(t).toggle()}));else if("manual"!==e){const t=e===nn?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=e===nn?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");I.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?sn:nn]=!0,e._enter()})),I.on(this._element,i,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?sn:nn]=e._element.contains(t.relatedTarget),e._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},I.on(this._element.closest(tn),en,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=H.getDataAttributes(this._element);for(const t of Object.keys(e))Gi.has(t)&&delete e[t];return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:s(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,i]of Object.entries(this._config))this.constructor.Default[e]!==i&&(t[e]=i);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each((function(){const e=ln.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}f(ln);const cn={...ln.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},hn={...ln.DefaultType,content:"(null|string|element|function)"};class dn extends ln{static get Default(){return cn}static get DefaultType(){return hn}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=dn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}f(dn);const un="click.bs.scrollspy",fn="active",pn="[href]",mn={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},gn={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class _n extends W{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return mn}static get DefaultType(){return gn}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=s(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,"string"==typeof t.threshold&&(t.threshold=t.threshold.split(",").map((t=>Number.parseFloat(t)))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(I.off(this._config.target,un),I.on(this._config.target,un,pn,(t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,n=e.offsetTop-this._element.offsetTop;if(i.scrollTo)return void i.scrollTo({top:n,behavior:"smooth"});i.scrollTop=n}})))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),i=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},n=(this._rootElement||document.documentElement).scrollTop,s=n>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=n;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const t=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&t){if(i(o),!n)return}else s||t||i(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=z.find(pn,this._config.target);for(const e of t){if(!e.hash||r(e))continue;const t=z.findOne(e.hash,this._element);o(t)&&(this._targetLinks.set(e.hash,e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(fn),this._activateParents(t),I.trigger(this._element,"activate.bs.scrollspy",{relatedTarget:t}))}_activateParents(t){if(t.classList.contains("dropdown-item"))z.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(fn);else for(const e of z.parents(t,".nav, .list-group"))for(const t of z.prev(e,".nav-link, .nav-item > .nav-link, .list-group-item"))t.classList.add(fn)}_clearActiveClass(t){t.classList.remove(fn);const e=z.find("[href].active",t);for(const t of e)t.classList.remove(fn)}static jQueryInterface(t){return this.each((function(){const e=_n.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}I.on(window,"load.bs.scrollspy.data-api",(()=>{for(const t of z.find('[data-bs-spy="scroll"]'))_n.getOrCreateInstance(t)})),f(_n);const bn="ArrowLeft",vn="ArrowRight",yn="ArrowUp",wn="ArrowDown",An="active",En="fade",Tn="show",Cn='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',On=`.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Cn}`;class xn extends W{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),I.on(this._element,"keydown.bs.tab",(t=>this._keydown(t))))}static get NAME(){return"tab"}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?I.trigger(e,"hide.bs.tab",{relatedTarget:t}):null;I.trigger(t,"show.bs.tab",{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){t&&(t.classList.add(An),this._activate(z.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),I.trigger(t,"shown.bs.tab",{relatedTarget:e})):t.classList.add(Tn)}),t,t.classList.contains(En)))}_deactivate(t,e){t&&(t.classList.remove(An),t.blur(),this._deactivate(z.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),I.trigger(t,"hidden.bs.tab",{relatedTarget:e})):t.classList.remove(Tn)}),t,t.classList.contains(En)))}_keydown(t){if(![bn,vn,yn,wn].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=[vn,wn].includes(t.key),i=g(this._getChildren().filter((t=>!r(t))),t.target,e,!0);i&&(i.focus({preventScroll:!0}),xn.getOrCreateInstance(i).show())}_getChildren(){return z.find(On,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const t of e)this._setInitialAttributesOnChild(t)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=z.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`#${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains("dropdown"))return;const n=(t,n)=>{const s=z.findOne(t,i);s&&s.classList.toggle(n,e)};n(".dropdown-toggle",An),n(".dropdown-menu",Tn),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(An)}_getInnerElement(t){return t.matches(On)?t:z.findOne(On,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=xn.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}I.on(document,"click.bs.tab",Cn,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),r(this)||xn.getOrCreateInstance(this).show()})),I.on(window,"load.bs.tab",(()=>{for(const t of z.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))xn.getOrCreateInstance(t)})),f(xn);const kn="hide",Ln="show",Sn="showing",Dn={animation:"boolean",autohide:"boolean",delay:"number"},In={animation:!0,autohide:!0,delay:5e3};class Nn extends W{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return In}static get DefaultType(){return Dn}static get NAME(){return"toast"}show(){I.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(kn),c(this._element),this._element.classList.add(Ln,Sn),this._queueCallback((()=>{this._element.classList.remove(Sn),I.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this.isShown()&&(I.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add(Sn),this._queueCallback((()=>{this._element.classList.add(kn),this._element.classList.remove(Sn,Ln),I.trigger(this._element,"hidden.bs.toast")}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ln),super.dispose()}isShown(){return this._element.classList.contains(Ln)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){I.on(this._element,"mouseover.bs.toast",(t=>this._onInteraction(t,!0))),I.on(this._element,"mouseout.bs.toast",(t=>this._onInteraction(t,!1))),I.on(this._element,"focusin.bs.toast",(t=>this._onInteraction(t,!0))),I.on(this._element,"focusout.bs.toast",(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=Nn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return R(Nn),f(Nn),{Alert:q,Button:K,Carousel:rt,Collapse:ft,Dropdown:ci,Modal:Ii,Offcanvas:Bi,Popover:dn,ScrollSpy:_n,Tab:xn,Toast:Nn,Tooltip:ln}}));
!function(t,i){"function"==typeof define&&define.amd?define(["jquery"],(function(e){return i(t,e)})):"object"==typeof module&&module.exports?module.exports=i(t,require("jquery")):t.jQueryBridget=i(t,t.jQuery)}(window,(function(t,i){"use strict";var e=Array.prototype.slice,n=t.console,o=void 0===n?function(){}:function(t){n.error(t)};function s(n,s,h){function a(t,i,e){var s,r="$()."+n+'("'+i+'")';return t.each((function(t,a){var d=h.data(a,n);if(d){var u=d[i];if(u&&"_"!=i.charAt(0)){var l=u.apply(d,e);s=void 0===s?l:s}else o(r+" is not a valid method")}else o(n+" not initialized. Cannot call methods, i.e. "+r)})),void 0!==s?s:t}function d(t,i){t.each((function(t,e){var o=h.data(e,n);o?(o.option(i),o._init()):(o=new s(e,i),h.data(e,n,o))}))}(h=h||i||t.jQuery)&&(s.prototype.option||(s.prototype.option=function(t){h.isPlainObject(t)&&(this.options=h.extend(!0,this.options,t))}),h.fn[n]=function(t){if("string"==typeof t){var i=e.call(arguments,1);return a(this,t,i)}return d(this,t),this},r(h))}function r(t){!t||t&&t.bridget||(t.bridget=s)}return r(i||t.jQuery),s})),
function(t,i){"object"==typeof module&&module.exports?module.exports=i():t.getSize=i()}(window,(function(){function t(t){let i=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(i)&&i}let i=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];i.length;return function(e){if("string"==typeof e&&(e=document.querySelector(e)),!(e&&"object"==typeof e&&e.nodeType))return;let n=getComputedStyle(e);if("none"==n.display)return function(){let t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0};return i.forEach((i=>{t[i]=0})),t}();let o={};o.width=e.offsetWidth,o.height=e.offsetHeight;let s=o.isBorderBox="border-box"==n.boxSizing;i.forEach((t=>{let i=n[t],e=parseFloat(i);o[t]=isNaN(e)?0:e}));let r=o.paddingLeft+o.paddingRight,h=o.paddingTop+o.paddingBottom,a=o.marginLeft+o.marginRight,d=o.marginTop+o.marginBottom,u=o.borderLeftWidth+o.borderRightWidth,l=o.borderTopWidth+o.borderBottomWidth,c=t(n.width);!1!==c&&(o.width=c+(s?0:r+u));let p=t(n.height);return!1!==p&&(o.height=p+(s?0:h+l)),o.innerWidth=o.width-(r+u),o.innerHeight=o.height-(h+l),o.outerWidth=o.width+a,o.outerHeight=o.height+d,o}})),function(t,i){"object"==typeof module&&module.exports?module.exports=i():t.EvEmitter=i()}("undefined"!=typeof window?window:this,(function(){function t(){}let i=t.prototype;return i.on=function(t,i){if(!t||!i)return this;let e=this._events=this._events||{},n=e[t]=e[t]||[];return n.includes(i)||n.push(i),this},i.once=function(t,i){if(!t||!i)return this;this.on(t,i);let e=this._onceEvents=this._onceEvents||{};return(e[t]=e[t]||{})[i]=!0,this},i.off=function(t,i){let e=this._events&&this._events[t];if(!e||!e.length)return this;let n=e.indexOf(i);return-1!=n&&e.splice(n,1),this},i.emitEvent=function(t,i){let e=this._events&&this._events[t];if(!e||!e.length)return this;e=e.slice(0),i=i||[];let n=this._onceEvents&&this._onceEvents[t];for(let o of e){n&&n[o]&&(this.off(t,o),delete n[o]),o.apply(this,i)}return this},i.allOff=function(){return delete this._events,delete this._onceEvents,this},t})),
function(t,i){"object"==typeof module&&module.exports?module.exports=i(t,require("ev-emitter")):t.Unidragger=i(t,t.EvEmitter)}("undefined"!=typeof window?window:this,(function(t,i){function e(){}let n,o,s=e.prototype=Object.create(i.prototype);s.handleEvent=function(t){let i="on"+t.type;this[i]&&this[i](t)},"ontouchstart"in t?(n="touchstart",o=["touchmove","touchend","touchcancel"]):t.PointerEvent?(n="pointerdown",o=["pointermove","pointerup","pointercancel"]):(n="mousedown",o=["mousemove","mouseup"]),s.touchActionValue="none",s.bindHandles=function(){this._bindHandles("addEventListener",this.touchActionValue)},s.unbindHandles=function(){this._bindHandles("removeEventListener","")},s._bindHandles=function(i,e){this.handles.forEach((o=>{o[i](n,this),o[i]("click",this),t.PointerEvent&&(o.style.touchAction=e)}))},s.bindActivePointerEvents=function(){o.forEach((i=>{t.addEventListener(i,this)}))},s.unbindActivePointerEvents=function(){o.forEach((i=>{t.removeEventListener(i,this)}))},s.withPointer=function(t,i){i.pointerId==this.pointerIdentifier&&this[t](i,i)},s.withTouch=function(t,i){let e;for(let t of i.changedTouches)t.identifier==this.pointerIdentifier&&(e=t);e&&this[t](i,e)},s.onmousedown=function(t){this.pointerDown(t,t)},s.ontouchstart=function(t){this.pointerDown(t,t.changedTouches[0])},s.onpointerdown=function(t){this.pointerDown(t,t)};const r=["TEXTAREA","INPUT","SELECT","OPTION"],h=["radio","checkbox","button","submit","image","file"];return s.pointerDown=function(t,i){let e=r.includes(t.target.nodeName),n=h.includes(t.target.type),o=!e||n;!this.isPointerDown&&!t.button&&o&&(this.isPointerDown=!0,this.pointerIdentifier=void 0!==i.pointerId?i.pointerId:i.identifier,this.pointerDown(t,i),this.bindActivePointerEvents(),this.emitEvent("pointerDown",[t,i]))},s.onmousemove=function(t){this.pointerMove(t,t)},s.onpointermove=function(t){this.withPointer("pointerMove",t)},s.ontouchmove=function(t){this.withTouch("pointerMove",t)},s.pointerMove=function(t,i){let e={x:i.pageX-this.pointerDownPointer.pageX,y:i.pageY-this.pointerDownPointer.pageY};this.emitEvent("pointerMove",[t,i,e]),!this.isDragging&&this.hasDragStarted(e)&&this.dragStart(t,i),this.isDragging&&this.dragMove(t,i,e)},s.hasDragStarted=function(t){return Math.abs(t.x)>3||Math.abs(t.y)>3},s.dragStart=function(t,i){this.isDragging=!0,this.isPreventingClicks=!0,this.emitEvent("dragStart",[t,i])},s.dragMove=function(t,i,e){this.emitEvent("dragMove",[t,i,e])},s.onmouseup=function(t){this.pointerUp(t,t)},s.onpointerup=function(t){this.withPointer("pointerUp",t)},s.ontouchend=function(t){this.withTouch("pointerUp",t)},s.pointerUp=function(t,i){this.pointerDone(),this.emitEvent("pointerUp",[t,i]),this.isDragging?this.dragEnd(t,i):this.staticClick(t,i)},s.dragEnd=function(t,i){this.isDragging=!1,setTimeout((()=>delete this.isPreventingClicks)),this.emitEvent("dragEnd",[t,i])},s.pointerDone=function(){this.isPointerDown=!1,delete this.pointerIdentifier,this.unbindActivePointerEvents(),this.emitEvent("pointerDone")},s.onpointercancel=function(t){this.withPointer("pointerCancel",t)},s.ontouchcancel=function(t){this.withTouch("pointerCancel",t)},s.pointerCancel=function(t,i){this.pointerDone(),this.emitEvent("pointerCancel",[t,i])},s.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},s.staticClick=function(t,i){let e="mouseup"==t.type;e&&this.isIgnoringMouseUp||(this.emitEvent("staticClick",[t,i]),e&&(this.isIgnoringMouseUp=!0,setTimeout((()=>{delete this.isIgnoringMouseUp}),400)))},e})),
function(t,i){"object"==typeof module&&module.exports?module.exports=i(t,require("get-size"),require("unidragger")):t.Draggabilly=i(t,t.getSize,t.Unidragger)}("undefined"!=typeof window?window:this,(function(t,i,e){let n=t.jQuery;function o(t,i){this.element="string"==typeof t?document.querySelector(t):t,n&&(this.$element=n(this.element)),this.options={},this.option(i),this._create()}let s=o.prototype=Object.create(e.prototype);s.option=function(t){this.options={...this.options,...t}};const r=["relative","absolute","fixed"];s._create=function(){this.position={},this._getPosition(),this.startPoint={x:0,y:0},this.dragPoint={x:0,y:0},this.startPosition={...this.position};let t=getComputedStyle(this.element);r.includes(t.position)||(this.element.style.position="relative"),this.on("pointerDown",this.handlePointerDown),this.on("pointerUp",this.handlePointerUp),this.on("dragStart",this.handleDragStart),this.on("dragMove",this.handleDragMove),this.on("dragEnd",this.handleDragEnd),this.setHandles(),this.enable()},s.setHandles=function(){let{handle:t}=this.options;"string"==typeof t?this.handles=this.element.querySelectorAll(t):"object"==typeof t&&t.length?this.handles=t:t instanceof HTMLElement?this.handles=[t]:this.handles=[this.element]};const h=["dragStart","dragMove","dragEnd"];let a=s.emitEvent;function d(t,i,e){return i?(e=e||"round",Math[e](t/i)*i):t}s.emitEvent=function(i,e){if(!this.isEnabled&&h.includes(i))return;a.call(this,i,e);let n,o=t.jQuery;if(!o||!this.$element)return;let s=e;e&&e[0]instanceof Event&&([n,...s]=e);let r=o.Event(n);r.type=i,this.$element.trigger(r,s)},s._getPosition=function(){let t=getComputedStyle(this.element),i=this._getPositionCoord(t.left,"width"),e=this._getPositionCoord(t.top,"height");this.position.x=isNaN(i)?0:i,this.position.y=isNaN(e)?0:e,this._addTransformPosition(t)},s._getPositionCoord=function(t,e){if(t.includes("%")){let n=i(this.element.parentNode);return n?parseFloat(t)/100*n[e]:0}return parseInt(t,10)},s._addTransformPosition=function(t){let i=t.transform;if(!i.startsWith("matrix"))return;let e=i.split(","),n=i.startsWith("matrix3d")?12:4,o=parseInt(e[n],10),s=parseInt(e[n+1],10);this.position.x+=o,this.position.y+=s},s.handlePointerDown=function(t,i){this.isEnabled&&(this.pointerDownPointer={pageX:i.pageX,pageY:i.pageY},t.preventDefault(),document.activeElement.blur(),this.bindActivePointerEvents(t),this.element.classList.add("is-pointer-down"))},s.handleDragStart=function(){this.isEnabled&&(this._getPosition(),this.measureContainment(),this.startPosition.x=this.position.x,this.startPosition.y=this.position.y,this.setLeftTop(),this.dragPoint.x=0,this.dragPoint.y=0,this.element.classList.add("is-dragging"),this.animate())},s.measureContainment=function(){let t=this.getContainer();if(!t)return;let e=i(this.element),n=i(t),{borderLeftWidth:o,borderRightWidth:s,borderTopWidth:r,borderBottomWidth:h}=n,a=this.element.getBoundingClientRect(),d=t.getBoundingClientRect(),u=o+s,l=r+h,c=this.relativeStartPosition={x:a.left-(d.left+o),y:a.top-(d.top+r)};this.containSize={width:n.width-u-c.x-e.width,height:n.height-l-c.y-e.height}},s.getContainer=function(){let t=this.options.containment;if(t)return t instanceof HTMLElement?t:"string"==typeof t?document.querySelector(t):this.element.parentNode},s.handleDragMove=function(t,i,e){if(!this.isEnabled)return;let n=e.x,o=e.y,s=this.options.grid,r=s&&s[0],h=s&&s[1];n=d(n,r),o=d(o,h),n=this.containDrag("x",n,r),o=this.containDrag("y",o,h),n="y"==this.options.axis?0:n,o="x"==this.options.axis?0:o,this.position.x=this.startPosition.x+n,this.position.y=this.startPosition.y+o,this.dragPoint.x=n,this.dragPoint.y=o},s.containDrag=function(t,i,e){if(!this.options.containment)return i;let n="x"==t?"width":"height",o=d(-this.relativeStartPosition[t],e,"ceil"),s=this.containSize[n];return s=d(s,e,"floor"),Math.max(o,Math.min(s,i))},s.handlePointerUp=function(){this.element.classList.remove("is-pointer-down")},s.handleDragEnd=function(){this.isEnabled&&(this.element.style.transform="",this.setLeftTop(),this.element.classList.remove("is-dragging"))},s.animate=function(){this.isDragging&&(this.positionDrag(),requestAnimationFrame((()=>this.animate())))},s.setLeftTop=function(){let{x:t,y:i}=this.position;this.element.style.left=`${t}px`,this.element.style.top=`${i}px`},s.positionDrag=function(){let{x:t,y:i}=this.dragPoint;this.element.style.transform=`translate3d(${t}px, ${i}px, 0)`},s.setPosition=function(t,i){this.position.x=t,this.position.y=i,this.setLeftTop()},s.enable=function(){this.isEnabled||(this.isEnabled=!0,this.bindHandles())},s.disable=function(){this.isEnabled&&(this.isEnabled=!1,this.isDragging&&this.dragEnd(),this.unbindHandles())};const u=["transform","left","top","position"];return s.destroy=function(){this.disable(),u.forEach((t=>{this.element.style[t]=""})),this.unbindHandles(),this.$element&&this.$element.removeData("draggabilly")},s._init=function(){},n&&n.bridget&&n.bridget("draggabilly",o),o}));

;window.Modernizr=function(a,b,c){function t(a){i.cssText=a}function u(a,b){return t(prefixes.join(a+";")+(b||""))}function v(a,b){return typeof a===b}function w(a,b){return!!~(""+a).indexOf(b)}function x(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:v(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l={},m={},n={},o=[],p=o.slice,q,r={}.hasOwnProperty,s;!v(r,"undefined")&&!v(r.call,"undefined")?s=function(a,b){return r.call(a,b)}:s=function(a,b){return b in a&&v(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=p.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(p.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(p.call(arguments)))};return e}),l.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c};for(var y in l)s(l,y)&&(q=y.toLowerCase(),e[q]=l[y](),o.push((e[q]?"":"no-")+q));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)s(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},t(""),h=j=null,e._version=d,e}(this,this.document);
var lhcError = {
log: function (message, filename, lineNumber, stack, column) {
var e;
e = {};
e.message = message || "";
e.location = location && location.href ? location.href : "";
e.message += "\n" + window.navigator.userAgent;
e.file = filename || "";
e.line = lineNumber || "";
e.column = column || "";
e.stack = stack ? JSON.stringify(stack) : "";
e.stack = e.stack.replace(/(\r\n|\n|\r)/gm, "");
var xhr = new XMLHttpRequest();
xhr.open("POST", WWW_DIR_JAVASCRIPT + '/audit/logjserror', true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send("data=" + encodeURIComponent(JSON.stringify(e)));
}
}
window.addEventListener('error', function (e) {
if (lhcError && (e.filename.indexOf('js_static') !== -1 || e.filename.indexOf('compiledtemplates') !== -1 || e.filename.indexOf('defaulttheme') !== -1)) {
lhcError.log(e.message, e.filename, e.lineNumber || e.lineno, e.error.stack, e.colno);
}
})
try {
function csrfSafeMethod(method) {
return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
};
$.ajaxSetup({
crossDomain: false, // obviates need for sameOrigin test
cache: false,
beforeSend: function (xhr, settings) {
if (!csrfSafeMethod(settings.type)) {
xhr.setRequestHeader("X-CSRFToken", confLH.csrf_token);
}
}
});
$.postJSON = function (url, data, callback) {
return $.post(url, data, callback, "json");
};
var LHCCallbacks = {};
function lh() {
this.wwwDir = WWW_DIR_JAVASCRIPT;
this.addmsgurl = "chat/addmsgadmin/";
this.syncadmin = "chat/syncadmin/";
this.closechatadmin = "chat/closechatadmin/";
this.deletechatadmin = "chat/deletechatadmin/";
this.syncadmininterfaceurl = "chat/syncadmininterface/";
this.accepttransfer = "chat/accepttransfer/";
this.trasnsferuser = "chat/transferuser/";
this.channel = null;
this.disableremember = false;
this.operatorTyping = false;
this.forceBottomScroll = false;
this.appendSyncArgument = '';
this.nodeJsMode = false;
this.previous_chat_id = 0;
this.gmaps_loaded = false;
this.disableSync = false;
this.chat_id = null;
this.hash = null;
this.soundIsPlaying = false;
this.soundPlayedTimes = 0;
this.last_message_id = 0;
this.isSinchronizing = false;
this.isWidgetMode = false;
this.isEmbedMode = false;
this.syncroRequestSend = false;
this.currentMessageText = '';
this.setSynchronizationRequestSend = function (status) {
this.syncroRequestSend = status;
};
this.chatsSynchronising = [];
this.chatsSynchronisingMsg = [];
this.notificationsArray = [];
this.speechHandler = false;
this.underMessageAdd = false;
this.closeWindowOnChatCloseDelete = false;
this.userTimeout = false;
this.lastOnlineSyncTimeout = false;
this.setwwwDir = function (wwwdir) {
this.wwwDir = wwwdir;
};
this.setDisableRemember = function (value) {
this.disableremember = value;
};
this.setSynchronizationStatus = function (status) {
this.underMessageAdd = status;
};
this.startCoBrowse = function (chat_id) {
popupWindow = window.open(this.wwwDir + 'cobrowse/browse/' + chat_id, 'chatwindow-cobrowse-chat-id-' + chat_id, "menubar=1,resizable=1,width=800,height=650");
if (popupWindow !== null) {
popupWindow.focus();
}
return false;
};
this.tabIconContent = 'face';
this.tabIconClass = 'icon-user-status material-icons icon-user-online';
this.audio = typeof window.Audio !== "undefined" ? new Audio() : null;
if (this.audio !== null) {
this.audio.autoplay = 'autoplay';
}
this.reloadTab = function (chat_id, tabs, nick, internal) {
$('#ntab-chat-' + chat_id).text(nick);
if ($('#CSChatMessage-' + chat_id).length != 0) {
$('#CSChatMessage-' + chat_id).unbind('keydown', function () { });
$('#CSChatMessage-' + chat_id).unbind('keyup', function () { });
}
this.removeSynchroChat(chat_id, true);
this.removeBackgroundChat(chat_id);
this.hideNotification(chat_id);
var inst = this;
$.get(this.wwwDir + 'chat/adminchat/' + chat_id + '/(remember)/true', function (data) {
$('#chat-id-' + chat_id).html(data);
$('#CSChatMessage-' + chat_id).focus();
inst.rememberTab(chat_id);
inst.addQuateHandler(chat_id);
inst.loadMainData(chat_id);
ee.emitEvent('chatTabLoaded', [chat_id]);
ee.emitEvent('chatStartTab', [chat_id, { name: nick, focus: true }]);
!internal && inst.channel && inst.channel.postMessage({ 'action': 'reload_chat', 'args': { 'nick': nick, 'chat_id': parseInt(chat_id) } });
});
}
this.loadMainData = function (chat_id) {
var _that = this;
$.getJSON(this.wwwDir + 'chat/loadmaindata/' + chat_id, {}, function (data) {
$.each(data.items, function (index, dataElement) {
var el = $(dataElement.selector);
if (typeof dataElement.attr !== 'undefined') {
$.each(dataElement.attr, function (attr, data) {
if (attr == 'text') {
el.text(data);
} else {
el.attr(attr, data);
}
});
}
if (typeof dataElement.action !== 'undefined') {
if (dataElement.action == 'hide') {
el.hide();
} else if (dataElement.action == 'keyup') {
el.bind('keyup', dataElement.event_data.a + '+' + dataElement.event_data.b, function () {
var pdata = {
msg: '!' + dataElement.event_data.cmd
};
$.postJSON(_that.wwwDir + _that.addmsgurl + chat_id, pdata, function (data) {
if (LHCCallbacks.addmsgadmin) {
LHCCallbacks.addmsgadmin(chat_id);
};
ee.emitEvent('chatAddMsgAdmin', [chat_id]);
if (data.r != '') {
$('#messagesBlock-' + chat_id).append(data.r).scrollTop($("#messagesBlock-" + chat_id).prop("scrollHeight")).find('.pending-storage').remove();
};
if (data.hold_removed === true) {
$('#hold-action-' + chat_id).removeClass('btn-outline-info');
} else if (data.hold_added === true) {
$('#hold-action-' + chat_id).addClass('btn-outline-info');
}
if (data.update_status === true) {
_that.updateVoteStatus(chat_id);
}
_that.syncadmincall();
return true;
});
});
} else if (dataElement.action == 'show') {
el.show();
} else if (dataElement.action == 'remove') {
el.remove();
} else if (dataElement.action == 'event') {
ee.emitEvent(dataElement.event_name, dataElement.event_value);
} else if (dataElement.action == 'click') {
if (confLH.no_scroll_bottom !== 1) {
el.attr('auto-scroll', 1);
}
el.click();
}
}
});
ee.emitEvent('mainChatDataLoaded', [chat_id, data]);
}).fail(function () {
});
}
this.getSelectedText = function () {
var text = '';
var selection;
if (window.getSelection) {
selection = window.getSelection();
text = selection.toString();
} else if (document.selection && document.selection.type !== 'Control') {
selection = document.selection.createRange();
text = selection.text;
}
return {
selection: selection,
text: text
};
}
this.popoverShown = false;
this.popoverShownNow = false
this.selection = null;
this.mouseContextMenu = function (e) {
if (e.which == 3 && typeof $(this).attr('id') !== 'undefined') {
$('.popover-copy').popover('dispose');
var selected = e.data.that.getSelectedText();
var hasSelection = false;
if (selected.text.length && (e.data.that.selection === null || e.data.that.selection.text !== selected.text)) {
hasSelection = true;
e.data.that.selection = selected;
}
var msgId = $(this).attr('id').replace('msg-', '');
var isOwner = ($('#CSChatMessage-' + e.data.chat_id).attr('disable-edit') !== "true" && (
$(this).attr('data-op-id') == confLH.user_id ||
($('#CSChatMessage-' + e.data.chat_id).attr('edit-op') === "true" && parseInt($(this).attr('data-op-id')) > 0) ||
($('#CSChatMessage-' + e.data.chat_id).attr('edit-vis') === "true" && parseInt($(this).attr('data-op-id')) === 0)
)
);
var quoteParams = {
placement: 'right',
trigger: 'manual',
animation: false,
html: true,
container: '#chat-id-' + e.data.chat_id,
template: '<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-body"></div></div>',
content: function () {
return '<a href="#" id="copy-popover-' + e.data.chat_id + '" ><i class="material-icons">&#xE244;</i>' + confLH.transLation.quote + '</a>' + (isOwner ? '<br/><a href="#" id="edit-popover-' + e.data.chat_id + '" ><i class="material-icons">edit</i>' + confLH.transLation.edit + '</a>' : '') + '<br/><a href="#" id="ask-help-popover-' + e.data.chat_id + '" ><i class="material-icons">supervisor_account</i>' + confLH.transLation.ask_help + '</a>' + (hasSelection ? '<br/><a href="#" id="copy-text-popover-' + e.data.chat_id + '" ><i class="material-icons">content_copy</i>' + confLH.transLation.copy + ' (Ctrl+C)</a>' : '') + (!hasSelection ? '<br/><a href="#" id="copy-all-text-popover-' + e.data.chat_id + '" ><i class="material-icons">content_copy</i>' + confLH.transLation.copy + ' (Ctrl+C)</a><br/><a href="#" id="copy-group-text-popover-' + e.data.chat_id + '" ><i class="material-icons">content_copy</i>' + confLH.transLation.copy_group + '</a>' : '') + (!hasSelection ? '<br/><a href="#" id="translate-msg-' + e.data.chat_id + '" ><i class="material-icons">language</i>' + confLH.transLation.translate + '</a>' : '');
}
}
var containerPopover = $('#messagesBlock-' + e.data.chat_id + ' > #msg-' + msgId + ' > .msg-body');
if (containerPopover.length == 0) return;
ee.emitEvent('quoteActionRight', [quoteParams, e.data.chat_id, msgId]);
containerPopover.popover(quoteParams).popover('show').addClass('popover-copy');
$('#copy-popover-' + e.data.chat_id).click(function (event) {
event.stopPropagation();
event.preventDefault();
$.getJSON(e.data.that.wwwDir + 'chat/quotemessage/' + msgId, function (data) {
data.msg && e.data.that.insertTextToMessageArea(e.data.chat_id, data.msg);
e.data.that.hidePopover();
});
});
$('#ask-help-popover-' + e.data.chat_id).click(function (event) {
event.stopPropagation();
event.preventDefault();
$.getJSON(e.data.that.wwwDir + 'chat/quotemessage/' + msgId, function (data) {
if (!$('#private-chat-tab-link-' + e.data.chat_id).attr('private-loaded')) {
$('#private-chat-tab-link-' + e.data.chat_id).attr('private-loaded', true).click();
(new bootstrap.Tab(document.querySelector('#private-chat-tab-link-' + e.data.chat_id))).show();
ee.emitEvent('privateChatStart', [e.data.chat_id, { 'default_message': data.msg }]);
} else {
$('#private-chat-tab-link-' + e.data.chat_id).attr('private-loaded', true).click();
(new bootstrap.Tab(document.querySelector('#private-chat-tab-link-' + e.data.chat_id))).show();
ee.emitEvent('groupChatPrefillMessage', [e.data.chat_id, data.msg]);
}
e.data.that.hidePopover();
});
});
!hasSelection && $('#translate-msg-' + e.data.chat_id).click(function (event) {
event.stopPropagation();
event.preventDefault();
lhc.methodCall('lhc.translation', 'translateMessageVisitor', { 'msg_id': msgId, 'chat_id': e.data.chat_id });
e.data.that.hidePopover();
});
!hasSelection && $('#copy-all-text-popover-' + e.data.chat_id).click(function (event) {
event.stopPropagation();
event.preventDefault();
$.getJSON(e.data.that.wwwDir + 'chat/quotemessage/' + msgId, function (data) {
var txtdom = $('#CSChatMessage-' + e.data.chat_id);
var originalAreaText = txtdom.val();
txtdom.val(data.msg);
txtdom.select();
document.execCommand("copy");
txtdom.val(originalAreaText);
e.data.that.hidePopover();
});
});
!hasSelection && $('#copy-group-text-popover-' + e.data.chat_id).click(function (event) {
event.stopPropagation();
event.preventDefault();
$.getJSON(e.data.that.wwwDir + 'chat/quotemessage/' + msgId + '/(type)/group', function (data) {
var txtdom = $('#CSChatMessage-' + e.data.chat_id);
var originalAreaText = txtdom.val();
txtdom.val(data.msg);
txtdom.select();
document.execCommand("copy");
txtdom.val(originalAreaText);
e.data.that.hidePopover();
});
});
isOwner && $('#edit-popover-' + e.data.chat_id).click(function (event) {
event.stopPropagation();
event.preventDefault();
$.getJSON(e.data.that.wwwDir + 'chat/editprevious/' + e.data.chat_id + '/' + msgId, function (data) {
if (data.error == 'f') {
var textArea = $('#CSChatMessage-' + e.data.chat_id);
textArea.val(data.msg).attr('data-msgid', data.id).addClass('edit-mode');
$('#msg-' + data.id).addClass('edit-mode');
textArea.focus();
} else {
alert(data.error);
}
});
e.data.that.hidePopover();
});
hasSelection && $('#copy-text-popover-' + e.data.chat_id).click(function (event) {
event.stopPropagation();
event.preventDefault();
var textToCopy = e.data.that.getSelectedTextPlain();
var txtdom = $('#CSChatMessage-' + e.data.chat_id);
var originalAreaText = txtdom.val();
txtdom.val(textToCopy);
txtdom.select();
document.execCommand("copy");
txtdom.val(originalAreaText);
e.data.that.hidePopover();
});
e.data.that.popoverShown = true;
e.data.that.popoverShownNow = false;
return false;
}
}
this.insertTextToMessageArea = function (chat_id, msg) {
var textArea = $('#CSChatMessage-' + chat_id);
var textAreaVal = textArea.val().replace(/^\s*\n/g, "");
textArea.val((textAreaVal != '' ? textAreaVal + '[quote]' + msg + '[/quote]' : '[quote]' + msg + '[/quote]') + "\n").focus();
var ta = textArea[0];
var maxrows = 30;
var lh = ta.clientHeight / ta.rows;
while (ta.scrollHeight > ta.clientHeight && !window.opera && ta.rows < maxrows) {
ta.style.overflow = 'hidden';
ta.rows += 1;
}
if (ta.scrollHeight > ta.clientHeight) ta.style.overflow = 'auto';
}
this.mouseClicked = function (e) {
selected = e.data.that.getSelectedText();
$('.popover-copy').popover('dispose');
if (selected.text.length && (e.data.that.selection === null || e.data.that.selection.text !== selected.text)) {
e.data.that.selection = selected;
var quoteParams = {
placement: 'right',
trigger: 'manual',
animation: false,
html: true,
container: '#chat-id-' + e.data.chat_id,
template: '<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-body"></div></div>',
content: function () { return '<a href="#" id="copy-popover-' + e.data.chat_id + '" ><i class="material-icons">&#xE244;</i>' + confLH.transLation.quote + '</a>'; }
}
var placement = typeof $(this).attr('id') !== 'undefined' ? '#messagesBlock-' + e.data.chat_id + ' > #msg-' + $(this).attr('id').replace('msg-', '') + ' > .msg-body' : this;
var containerPopover = $(placement);
if (containerPopover.length == 0) return;
ee.emitEvent('quoteAction', [quoteParams, e.data.chat_id]);
containerPopover.popover(quoteParams).popover('show').addClass('popover-copy');
$('#copy-popover-' + e.data.chat_id).click(function () {
lhinst.quateSelection(e.data.chat_id);
});
e.data.that.popoverShown = true;
e.data.that.popoverShownNow = true;
} else {
e.data.that.selection = null;
}
}
this.addQuateHandler = function (chat_id) {
this.popoverShown = false;
$('#messagesBlock-' + chat_id + ' > .message-row:not([qt])')
.on('mouseup', { chat_id: chat_id, that: this }, lhinst.mouseClicked)
.on('contextmenu', { chat_id: chat_id, that: this }, lhinst.mouseContextMenu).attr('qt', 1);
}
this.getSelectedTextPlain = function () {
var textToPaste = this.selection.text.replace(/[\uD7AF\uD7C7-\uD7CA\uD7FC-\uF8FF\uFA6E\uFA6F\uFADA]/g, '');
textToPaste = textToPaste.replace(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}(.*)/gm, '');
textToPaste = textToPaste.replace(/^[0-9]{2}:[0-9]{2}:[0-9]{2}(.*)/gm, '');
textToPaste = textToPaste.replace(/^\s*\n/gm, "");
textToPaste = textToPaste.replace(/^ /gm, "");
return textToPaste;
}
this.quateSelection = function (chat_id) {
$('.popover-copy').popover('dispose');
var textToPaste = this.getSelectedTextPlain();
window.textreplace = textToPaste;
this.insertTextToMessageArea(chat_id, textToPaste);
this.popoverShown = false;
};
this.hidePopover = function () {
if (this.popoverShownNow === true) {
this.popoverShownNow = false;
} else {
if (this.popoverShown === true) {
this.popoverShown = false;
$('.popover-copy').popover('dispose');
}
}
};
this.addTab = function (tabs, url, name, chat_id, focusTab, position) {
if (tabs.find('#chat-tab-link-' + chat_id).length > 0) {
return;
}
var hideTabs = confLH.new_dashboard && confLH.hide_tabs && document.getElementById('tabs-dashboard') !== null ? ' d-none' : '';
var contentLi = '<li role="presentation" id="chat-tab-li-' + chat_id + '" class="nav-item' + hideTabs + '"><a class="nav-link chat-nav-item" href="#chat-id-' + chat_id + '" id="chat-tab-link-' + chat_id + '" aria-controls="chat-id-' + chat_id + '" role="tab" data-bs-toggle="tab"><i id="msg-send-status-' + chat_id + '" class="material-icons send-status-icon icon-user-online">send</i><i id="user-chat-status-' + chat_id + '" class="chat-tab-content ' + this.tabIconClass + '">' + this.tabIconContent + '</i><span class="ntab" id="ntab-chat-' + chat_id + '">' + name.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</span><span onclick="return lhinst.removeDialogTab(' + chat_id + ',$(\'#tabs\'),true)" class="material-icons icon-close-chat">close</span></a></li>';
if (typeof position === 'undefined' || parseInt(position) == 0) {
tabs.find('> ul').append(contentLi);
} else {
tabs.find('> ul > li:eq(' + (position - 1) + ')').after(contentLi);
};
$('#chat-tab-link-' + chat_id).click(function () {
lhinst.previous_chat_id > 0 && $('#unread-separator-' + lhinst.previous_chat_id).remove();
lhinst.previous_chat_id = chat_id;
setTimeout(function () {
$('#CSChatMessage-' + chat_id).focus();
}, 2);
var inst = $(this);
setTimeout(function () {
inst.find('.msg-nm').remove();
var scrollNeeded = false;
if (inst.hasClass('has-pm')) {
scrollNeeded = true;
inst.removeClass('has-pm');
}
if (scrollNeeded == true) {
$('#messagesBlock-' + chat_id).prop('scrollTop', $('#messagesBlock-' + chat_id).prop('scrollHeight'));
}
}, 500);
ee.emitEvent('chatTabClicked', [chat_id, inst]);
});
var hash = window.location.hash.replace('#/', '#');
var inst = this;
$.get(url, function (data) {
if (data == '') {
inst.removeDialogTab(chat_id, tabs, true);
return;
}
if (typeof focusTab === 'undefined' || focusTab === true || hash == '#chat-id-' + chat_id) {
tabs.find('> ul > li > a.active').removeClass("active");
tabs.find('> ul > #chat-tab-li-' + chat_id + ' > a').addClass("active");
tabs.find('> div.tab-content > div.active').removeClass('active');
tabs.find('> div.tab-content').append('<div role="tabpanel" class="tab-pane active chat-tab-pane" id="chat-id-' + chat_id + '"></div>');
window.location.hash = '#/chat-id-' + chat_id;
tabs.addClass('chat-tab-selected');
} else {
tabs.find('> div.tab-content').append('<div role="tabpanel" class="tab-pane chat-tab-pane" id="chat-id-' + chat_id + '"></div>');
}
$('#chat-id-' + chat_id).html(data);
if (typeof focusTab === 'undefined' || focusTab === true || hash == '#chat-id-' + chat_id) {
$('#CSChatMessage-' + chat_id).focus();
}
if (inst.disableremember == false) {
inst.rememberTab(chat_id);
}
inst.addQuateHandler(chat_id);
inst.loadMainData(chat_id);
ee.emitEvent('chatTabLoaded', [chat_id]);
});
};
this.rememberTab = function (chat_id) {
if (localStorage) {
try {
chat_id = parseInt(chat_id);
var achat_id = localStorage.getItem('achat_id');
var achat_id_array = new Array();
if (achat_id !== null) {
var achat_id_array = achat_id.split(',').map(Number);
}
if (achat_id_array.indexOf(chat_id) === -1) {
achat_id_array.push(chat_id);
}
localStorage.setItem('achat_id', achat_id_array.join(','));
} catch (e) {
console.log(e);
}
}
};
this.forgetChat = function (chat_id, listId) {
if (localStorage) {
try {
chat_id = parseInt(chat_id);
var achat_id = localStorage.getItem(listId);
var achat_id_array = new Array();
if (achat_id !== null) {
achat_id_array = achat_id.split(',').map(Number);
}
if (achat_id_array.indexOf(chat_id) !== -1) {
achat_id_array.splice(achat_id_array.indexOf(chat_id), 1);
}
localStorage.setItem(listId, achat_id_array.join(','));
} catch (e) {
console.log(e);
}
}
};
this.attachTabNavigator = function () {
$('#tabs > ul.nav > li > a').click(function () {
$(this).find('.msg-nm').remove();
$(this).removeClass('has-pm');
});
};
this.holdAction = function (chat_id, inst) {
var textArea = $("#CSChatMessage-" + chat_id);
if (textArea.is("[readonly]")) {
return;
}
var _this = this;
$.postJSON(this.wwwDir + 'chat/holdaction/' + chat_id, { 'sel': inst.hasClass('btn-outline-info'), 'op': inst.attr('data-type') }, function (data) {
if (data.error == false) {
if (data.hold == true) {
inst.addClass('btn-outline-info');
if (inst.attr('data-type') == 'usr') {
$('#hold-action-' + chat_id).removeClass('btn-outline-info');
} else {
$('#hold-action-usr-' + chat_id).removeClass('btn-outline-info');
}
} else {
inst.removeClass('btn-outline-info');
}
if (data.msg != '') {
$('#messagesBlock-' + chat_id).append(data.msg).scrollTop($("#messagesBlock-" + chat_id).prop("scrollHeight"));
}
_this.syncadmincall();
} else {
alert(data.msg);
}
});
},
this.copyContent = function (inst) {
var textArea = document.createElement("textarea");
textArea.value = inst.attr('data-copy');
textArea.style.top = "0";
textArea.style.left = "0";
textArea.style.position = "fixed";
document.body.appendChild(textArea);
textArea.focus();
textArea.select();
try {
var successful = document.execCommand('copy');
} catch (err) {
alert('Oops, unable to copy');
}
document.body.removeChild(textArea);
inst.tooltip({
trigger: 'click',
placement: 'top'
});
function setTooltip(message) {
inst.tooltip('hide')
.attr('data-original-title', message)
.tooltip('show');
}
function hideTooltip() {
setTimeout(function () {
inst.tooltip('hide');
}, 1000);
}
setTooltip(inst.attr('data-success'));
hideTooltip();
},
this.copyMessages = function (inst) {
$('#chat-copy-messages').select();
document.execCommand("copy");
inst.tooltip({
trigger: 'click',
placement: 'top'
});
function setTooltip(message) {
inst.tooltip('hide')
.attr('data-original-title', message)
.tooltip('show');
}
function hideTooltip() {
setTimeout(function () {
inst.tooltip('hide');
}, 3000);
}
setTooltip(inst.attr('data-success'));
hideTooltip();
return false;
},
this.removeDialogTabGroup = function (chat_id, tabs) {
ee.emitEvent('unloadGroupChat', [chat_id]);
var location = this.smartTabFocus(tabs, chat_id);
};
this.addGroupTab = function (tabs, name, chat_id, background) {
if (tabs.find('#chat-tab-link-' + chat_id).length > 0) {
tabs.find('> ul > li > a.active').removeClass("active");
tabs.find('> ul > li#chat-tab-li-' + chat_id + ' > a').addClass("active");
tabs.find('> div.tab-content > div.active').removeClass('active');
tabs.find('> div.tab-content > #chat-id-' + chat_id).addClass('active');
ee.emitEvent('groupChatTabClicked', [chat_id]);
return;
}
var contentLi = '<li role="presentation" id="chat-tab-li-' + chat_id + '" class="nav-item"><a class="nav-link" href="#chat-id-' + chat_id + '" id="chat-tab-link-' + chat_id + '" aria-controls="chat-id-' + chat_id + '" role="tab" data-bs-toggle="tab"><i id="msg-send-status-' + chat_id + '" class="material-icons send-status-icon icon-user-online">send</i><i class="whatshot blink-ani d-none text-warning material-icons">whatshot</i><i id="user-chat-status-' + chat_id + '" class="' + this.tabIconClass + '">group</i><span class="ntab" id="ntab-chat-' + chat_id + '">' + name.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</span><span onclick="return lhinst.removeDialogTabGroup(\'' + chat_id + '\',$(\'#tabs\'),true)" class="material-icons icon-close-chat">close</span></a></li>';
tabs.find('> ul').append(contentLi);
var hash = window.location.hash.replace('#/', '#');
var inst = this;
if (background !== true) {
tabs.find('> ul > li > a.active').removeClass("active");
tabs.find('> ul > #chat-tab-li-' + chat_id + ' > a').addClass("active");
tabs.find('> div.tab-content > div.active').removeClass('active');
tabs.find('> div.tab-content').append('<div role="tabpanel" class="tab-pane chat-tab-pane active" id="chat-id-' + chat_id + '"></div>');
} else {
tabs.find('> div.tab-content').append('<div role="tabpanel" class="tab-pane chat-tab-pane" id="chat-id-' + chat_id + '"></div>');
}
ee.emitEvent('groupChatTabLoaded', [chat_id]);
$('#chat-tab-link-' + chat_id).click(function () {
ee.emitEvent('groupChatTabClicked', [chat_id.replace('gc', '')]);
});
};
this.startGroupChat = function (chat_id, tabs, name, background) {
this.addGroupTab(tabs, name, 'gc' + chat_id, background);
}
this.hideShowAction = function (options) {
var messagesBlock = $('#messagesBlock-' + options['chat_id']);
var needScroll = (messagesBlock.prop('scrollTop') + messagesBlock.height() + 30) > messagesBlock.prop('scrollHeight')
var msg = $('#message-more-' + options['id']);
if (msg.hasClass('hide')) {
msg.removeClass('hide');
options['hide_show'] == false ? $('#hide-show-action-' + options['id']).remove() : $('#hide-show-action-' + options['id']).text(options['hide_text']);
} else {
msg.addClass('hide');
if (options['hide_show'] == true) {
$('#hide-show-action-' + options['id']).text(options['show_text']);
}
}
needScroll && messagesBlock.scrollTop(messagesBlock.prop('scrollHeight'));
}
this.buttonAction = function (inst, payload) {
var row = inst.closest('.message-row');
$.getJSON(this.wwwDir + 'chat/abstractclick/' + row.attr('id').replace('msg-', '') + '/' + payload, function (data) {
if (data.error) {
alert(data.error);
} else if (data.replace_id && data.html) {
var messagesBlock = $('#messagesBlock-' + data.chat_id);
var needScroll = (messagesBlock.prop('scrollTop') + messagesBlock.height() + 30) > messagesBlock.prop('scrollHeight');
$(data.replace_id).replaceWith(data.html);
lhinst.addQuateHandler(data.chat_id);
needScroll && messagesBlock.scrollTop(messagesBlock.prop('scrollHeight'));
} else if (data.modal) {
lhc.revealModal({ 'url': WWW_DIR_JAVASCRIPT + data.modal });
}
});
}
this.startChat = function (chat_id, tabs, name, focusTab, position) {
this.removeBackgroundChat(chat_id);
this.hideNotification(chat_id);
$('#sub-tabs').length > 0 && $('#sub-tabs a[href=\'#sub-tabs-open\']').tab('show');
if (this.chatUnderSynchronization(chat_id) == false) {
var focusTabAction = typeof focusTab !== 'undefined' ? focusTab : true;
var rememberAppend = this.disableremember == false ? '/(remember)/true' : '';
this.addTab(tabs, this.wwwDir + 'chat/adminchat/' + chat_id + rememberAppend, name, chat_id, focusTabAction, position);
var inst = this;
setTimeout(function () {
inst.syncadmininterfacestatic();
}, 1000);
} else {
tabs.find('> ul > li > a.active').removeClass("active");
tabs.find('> ul > li#chat-tab-li-' + chat_id + ' > a').addClass("active");
tabs.find('> div.tab-content > div.active').removeClass('active');
tabs.find('> div.tab-content > #chat-id-' + chat_id).addClass('active');
window.location.hash = '#/chat-id-' + chat_id;
}
ee.emitEvent('chatStartTab', [chat_id, { name: name, focus: (typeof focusTab !== 'undefined' ? focusTab : true), position: position }]);
};
this.backgroundChats = [];
this.startChatBackground = function (chat_id, tabs, name, backgroundType) {
if (this.chatUnderSynchronization(chat_id) == false) {
this.backgroundChats.push(parseInt(chat_id));
var rememberAppend = this.disableremember == false ? '/(remember)/true' : '';
if (!backgroundType) {
backgroundType = 'background';
}
this.addTab(tabs, this.wwwDir + 'chat/adminchat/' + chat_id + rememberAppend + '/(arg)/' + backgroundType, name, chat_id, false);
ee.emitEvent('chatStartBackground', [chat_id, { name: name }]);
return true;
}
return false;
};
this.protectCSFR = function () {
$('a.csfr-required').click(function (event) {
var inst = $(this);
if (!inst.attr('data-secured')) {
inst.attr('href', inst.attr('href') + '/(csfr)/' + confLH.csrf_token);
inst.attr('data-secured', 1);
}
if (inst.hasClass('csfr-post') && !inst.hasClass('csfr-post-executed')) {
event.preventDefault();
event.stopPropagation();
inst.addClass('csfr-post-executed');
if (!inst.attr('data-trans') || confirm(confLH.transLation[inst.attr('data-trans')])) {
$.post(inst.attr('href'), function () {
document.location.reload();
}).fail(function () {
document.location.reload();
});
} else {
setTimeout(function () {
inst.removeClass('csfr-post-executed');
}, 500);
}
}
});
};
this.addSynchroChat = function (chat_id, message_id) {
this.chatsSynchronising.push(chat_id);
this.chatsSynchronisingMsg.push(chat_id + ',' + message_id);
if (LHCCallbacks.addSynchroChat) {
LHCCallbacks.addSynchroChat(chat_id, message_id);
}
};
this.removeSynchroChat = function (chat_id, passive) {
var j = 0;
while (j < this.chatsSynchronising.length) {
if (this.chatsSynchronising[j] == chat_id) {
this.chatsSynchronising.splice(j, 1);
this.chatsSynchronisingMsg.splice(j, 1);
} else { j++; }
};
this.forgetChat(chat_id, 'achat_id');
if (passive !== true) {
ee.emitEvent('removeSynchroChat', [chat_id]);
}
if (LHCCallbacks.removeSynchroChat) {
LHCCallbacks.removeSynchroChat(chat_id);
}
};
this.is_typing = false;
this.typing_timeout = null;
this.operatorTypingCallback = function (chat_id) {
var www_dir = this.wwwDir;
var inst = this;
if (inst.is_typing == false) {
inst.is_typing = true;
clearTimeout(inst.typing_timeout);
if (inst.nodeJsMode == true) {
inst.typing_timeout = setTimeout(function () { inst.typingStoppedOperator(chat_id); }, 3000);
ee.emitEvent('operatorTyping', [{ 'chat_id': chat_id, 'status': true }]);
} else {
$.getJSON(www_dir + 'chat/operatortyping/' + chat_id + '/true', {}, function (data) {
inst.typing_timeout = setTimeout(function () { inst.typingStoppedOperator(chat_id); }, 3000);
if (LHCCallbacks.initTypingMonitoringAdmin) {
LHCCallbacks.initTypingMonitoringAdmin(chat_id, true);
}
}).fail(function () {
inst.typing_timeout = setTimeout(function () { inst.typingStoppedOperator(chat_id); }, 3000);
});
}
} else {
clearTimeout(inst.typing_timeout);
inst.typing_timeout = setTimeout(function () { inst.typingStoppedOperator(chat_id); }, 3000);
}
};
this.initTypingMonitoringAdmin = function (chat_id) {
var inst = this;
jQuery('#CSChatMessage-' + chat_id).bind('keyup', function (evt) {
inst.operatorTypingCallback(chat_id);
});
};
this.remarksTimeout = null;
this.saveRemarks = function (chat_id) {
clearTimeout(this.remarksTimeout);
$('#remarks-status-' + chat_id).addClass('text-warning');
$('#main-user-info-remarks-' + chat_id + ' .alert').remove();
var inst = this;
this.remarksTimeout = setTimeout(function () {
$.postJSON(inst.wwwDir + 'chat/saveremarks/' + chat_id, { 'data': $('#ChatRemarks-' + chat_id).val() }, function (data) {
if (data.error == 'false') {
$('#remarks-status-' + chat_id).removeClass('text-warning');
} else {
$('#main-user-info-remarks-' + chat_id).prepend(data.result);
}
});
}, 500);
};
this.reaction = function (inst) {
$.postJSON(this.wwwDir + 'chat/reaction/' + inst.attr('data-msg-id'), { 'identifier': inst.attr('data-identifier'), 'data': + inst.attr('data-value') }, function (data) {
if (data.error == 'false') {
$('#reaction-message-info-' + inst.attr('data-msg-id')).remove();
$('#reaction-message-' + inst.attr('data-msg-id')).replaceWith(data.result);
} else {
alert(data.result);
}
});
}
this.saveNotes = function (chat_id) {
clearTimeout(this.remarksTimeout);
$('#remarks-status-online-' + chat_id).addClass('text-warning');
var inst = this;
this.remarksTimeout = setTimeout(function () {
$.postJSON(inst.wwwDir + 'chat/saveonlinenotes/' + chat_id, { 'data': $('#OnlineRemarks-' + chat_id).val() }, function (data) {
$('#remarks-status-online-' + chat_id).removeClass('text-warning');
});
}, 500);
};
this.surveyShowed = false;
this.typingStoppedOperator = function (chat_id) {
var inst = this;
if (inst.is_typing == true) {
if (lhinst.nodeJsMode == true) {
inst.is_typing = false;
ee.emitEvent('operatorTyping', [{ 'chat_id': chat_id, 'status': false }]);
} else {
$.getJSON(this.wwwDir + 'chat/operatortyping/' + chat_id + '/false', {}, function (data) {
inst.is_typing = false;
if (LHCCallbacks.initTypingMonitoringAdmin) {
LHCCallbacks.initTypingMonitoringAdmin(chat_id, false);
};
}).fail(function () {
inst.is_typing = false;
});
}
}
};
this.refreshFootPrint = function (inst) {
inst.addClass('disabled');
$.get(this.wwwDir + 'chat/chatfootprint/' + inst.attr('rel'), {}, function (data) {
$('#footprint-' + inst.attr('rel')).html(data);
inst.removeClass('disabled');
});
};
this.makeAbstractRequest = function (chat_id, inst) {
$.get(inst.attr('href'), function (data) {
lhinst.syncadmininterfacestatic();
if (LHCCallbacks.userRedirectedSurvey) {
LHCCallbacks.userRedirectedSurvey(chat_id);
};
});
return false;
};
this.refreshOnlineUserInfo = function (inst) {
inst.addClass('disabled');
$.get(this.wwwDir + 'chat/refreshonlineinfo/' + inst.attr('rel'), {}, function (data) {
$('#online-user-info-' + inst.attr('rel')).html(data);
inst.removeClass('disabled');
});
};
this.processCollapse = function (chat_id) {
if ($('#chat-main-column-' + chat_id + ' .collapse-right').text() == 'chevron_right') {
$('#chat-right-column-' + chat_id).hide();
$('#chat-main-column-' + chat_id).removeClass('col-xl-8').addClass('col-xl-12');
$('#chat-main-column-' + chat_id + ' .collapse-right').text('chevron_left');
try {
if (localStorage) {
localStorage.setItem('lhc_rch', 1);
}
} catch (e) { }
} else {
$('#chat-right-column-' + chat_id).show();
$('#chat-main-column-' + chat_id).removeClass('col-xl-12').addClass('col-xl-8');
$('#chat-main-column-' + chat_id + ' .collapse-right').text('chevron_right');
try {
if (localStorage) {
localStorage.removeItem('lhc_rch');
}
} catch (e) { }
};
};
this.chatUnderSynchronization = function (chat_id) {
var j = 0;
while (j < this.chatsSynchronising.length) {
if (this.chatsSynchronising[j] == chat_id) {
return true;
} else { j++; }
}
return false;
};
this.getChatIndex = function (chat_id) {
var j = 0;
while (j < this.chatsSynchronising.length) {
if (this.chatsSynchronising[j] == chat_id) {
return j;
} else { j++; }
}
return false;
};
this.closeActiveChatDialog = function (chat_id, tabs, hidetab) {
var that = this;
ee.emitEvent('angularSyncDisabled', [true]);
$.postJSON(this.wwwDir + this.closechatadmin + chat_id, function (data) {
ee.emitEvent('angularSyncDisabled', [false]);
if (data.error == false) {
ee.emitEvent('angularLoadChatList');
} else {
alert(data.result);
}
}).fail(function (jqXHR, textStatus, errorThrown) {
ee.emitEvent('angularSyncDisabled', [false]);
console.dir(jqXHR);
});
if ($('#CSChatMessage-' + chat_id).length != 0) {
$('#CSChatMessage-' + chat_id).unbind('keydown', function () { });
$('#CSChatMessage-' + chat_id).unbind('keyup', function () { });
};
if (!!window.postMessage && window.opener) {
window.opener.postMessage("lhc_ch:chatclosed:" + chat_id, '*');
};
that.channel && that.channel.postMessage({ 'action': 'close_chat', 'args': { 'chat_id': chat_id } });
that.removeSynchroChat(chat_id);
if (hidetab == true) {
var location = that.smartTabFocus(tabs, chat_id);
setTimeout(function () {
window.location.hash = location;
}, 500);
if (that.closeWindowOnChatCloseDelete == true) {
window.close();
}
};
if (LHCCallbacks.chatClosedCallback) {
LHCCallbacks.chatClosedCallback(chat_id);
};
};
this.smartTabFocus = function (tabs, chat_id, params) {
var index = tabs.find('> ul > #chat-tab-li-' + chat_id).index();
if (!params) { params = {}; }
var navigationDirection = (params.up == true || typeof params.up == 'undefined') ? 1 : -1;
if (!params['keep']) {
tabs.find('> ul > #chat-tab-li-' + chat_id).remove();
tabs.find('#chat-id-' + chat_id).remove();
} else {
tabs.find('> ul > li > a.active').removeClass('active');
}
var linkTab = tabs.find('> ul > li:eq(' + (index - navigationDirection) + ')');
if (linkTab.attr('id') !== undefined) {
var link = linkTab.find('> a');
} else {
linkTabRight = tabs.find('> ul > li:eq(' + (index) + ')');
if (linkTabRight.length > 0) {
var link = linkTabRight.find('> a');
} else {
var link = linkTab.find('> a');
}
}
if (!tabs.find('> ul > li > a.active').length) {
var moveLeft = true;
var navigator = 1;
while (moveLeft) {
if (!link.hasClass('non-focus')) {
moveLeft = false;
} else {
moveLeft = true;
var prevElement = link.parent().prev();
if (prevElement.find(' > a').length) {
link = prevElement.find(' > a');
}
}
}
link.tab('show');
if (link.attr('id') !== undefined) {
var new_chat_id = link.attr('href').replace('#chat-id-', '');
this.removeBackgroundChat(new_chat_id);
this.hideNotification(new_chat_id);
if (!params['keep']) {
ee.emitEvent('chatTabFocused', [new_chat_id]);
}
}
}
if (link.attr('href') !== undefined) {
return link.attr('href').replace('#', '#/');
} else {
return '#';
}
};
this.startChatCloseTabNewWindow = function (chat_id, tabs, name) {
window.open(this.wwwDir + 'chat/single/' + chat_id, 'chatwindow-chat-id-' + chat_id, "menubar=1,resizable=1,width=800,height=650");
this.smartTabFocus(tabs, chat_id);
if (this.closeWindowOnChatCloseDelete == true) {
window.close();
};
this.removeSynchroChat(chat_id);
this.syncadmininterfacestatic();
return false;
};
this.removeDialogTab = function (chat_id, tabs, hidetab) {
this.channel && this.chatUnderSynchronization(chat_id) === true && this.channel.postMessage({ 'action': 'close_chat', 'args': { 'chat_id': chat_id } });
if ($('#CSChatMessage-' + chat_id).length != 0) {
$('#CSChatMessage-' + chat_id).unbind('keydown', function () { });
$('#CSChatMessage-' + chat_id).unbind('keyup', function () { });
}
this.removeSynchroChat(chat_id);
if (hidetab == true) {
var location = this.smartTabFocus(tabs, chat_id);
setTimeout(function () {
window.location.hash = location;
}, 500);
if (this.closeWindowOnChatCloseDelete == true) {
window.close();
};
};
this.syncadmininterfacestatic();
};
this.removeActiveDialogTag = function (tabs) {
if (this.closeWindowOnChatCloseDelete == true) {
window.close();
};
};
this.deleteChat = function (chat_id, tabs, hidetab) {
if (confirm(confLH.transLation.delete_confirm)) {
var that = this;
$.postJSON(this.wwwDir + this.deletechatadmin + chat_id, function (data) {
if (data.error == true) {
alert(data.result);
} else {
if ($('#CSChatMessage-' + chat_id).length != 0) {
$('#CSChatMessage-' + chat_id).unbind('keydown', function () { });
$('#CSChatMessage-' + chat_id).unbind('keyup', function () { });
}
that.removeSynchroChat(chat_id);
if (hidetab == true) {
var location = that.smartTabFocus(tabs, chat_id);
setTimeout(function () {
window.location.hash = location;
}, 500);
if (that.closeWindowOnChatCloseDelete == true) {
window.close();
}
};
if (LHCCallbacks.chatDeletedCallback) {
LHCCallbacks.chatDeletedCallback(chat_id);
};
that.syncadmininterfacestatic();
}
}).fail(function (jqXHR, textStatus, errorThrown) {
console.dir(jqXHR);
alert('getJSON request failed! ' + textStatus + ':' + errorThrown + ':' + jqXHR.responseText);
});
}
};
this.rejectPendingChat = function (chat_id, tabs) {
var that = this;
$.postJSON(this.wwwDir + this.deletechatadmin + chat_id, {}, function (data) {
that.syncadmininterfacestatic();
}).fail(function (jqXHR, textStatus, errorThrown) {
console.dir(jqXHR);
alert('getJSON request failed! ' + textStatus + ':' + errorThrown + ':' + jqXHR.responseText);
});
};
this.startChatNewWindowArchive = function (archive_id, chat_id, name) {
var popupWindow = window.open(this.wwwDir + 'chatarchive/viewarchivedchat/' + archive_id + '/' + chat_id + '/(mode)/popup', 'chatwindow-chat-id-' + chat_id, "menubar=1,resizable=1,width=800,height=650");
if (popupWindow !== null) {
popupWindow.focus();
ee.emitEvent('chatStartOpenWindowArchive', [archive_id, chat_id]);
}
};
this.speechToText = function (chat_id) {
if (this.speechHandler == false) {
this.speechHandler = new LHCSpeechToText();
}
this.speechHandler.listen({ 'chat_id': chat_id });
};
this.startChatTransfer = function (chat_id, tabs, name, transfer_id, background) {
var inst = this;
$.getJSON(this.wwwDir + this.accepttransfer + transfer_id, {}, function (data) {
if ($('#chat-tab-link-' + chat_id).length == 0) {
if (background) {
inst.removeSynchroChat(chat_id);
inst.startChatBackground(chat_id, tabs, name)
} else {
inst.startChat(chat_id, tabs, name);
}
} else {
inst.updateVoteStatus(chat_id);
}
if (LHCCallbacks.operatorAcceptedTransfer) {
LHCCallbacks.operatorAcceptedTransfer(chat_id);
};
}).fail(function () {
inst.startChat(chat_id, tabs, name);
});
};
this.startChatNewWindowTransfer = function (chat_id, name, transfer_id) {
$.getJSON(this.wwwDir + this.accepttransfer + transfer_id, {}, function (data) {
if (LHCCallbacks.operatorAcceptedTransfer) {
LHCCallbacks.operatorAcceptedTransfer(chat_id);
};
});
return this.startChatNewWindow(chat_id, name);
};
this.startChatNewWindowTransferByTransfer = function (chat_id, nt, background) {
var inst = this;
$.ajax({
type: "GET",
url: this.wwwDir + this.accepttransfer + chat_id + '/(mode)/chat',
cache: false,
dataType: 'json'
}).done(function (data) {
if ($('#tabs').length > 0) {
if (typeof background !== 'undefined' && background === true) {
inst.startChatBackground(data.chat_id, $('#tabs'), nt);
} else {
window.focus();
inst.startChat(data.chat_id, $('#tabs'), nt);
}
} else {
inst.startChatNewWindow(data.chat_id, '');
}
if (LHCCallbacks.operatorAcceptedTransfer) {
LHCCallbacks.operatorAcceptedTransfer(data.chat_id);
};
});
this.syncadmininterfacestatic();
return false;
};
this.switchLang = function (form, lang) {
var languageAppend = '<input type="hidden" value="' + lang + '" name="switchLang" />';
form.append(languageAppend);
form.submit();
return false;
};
this.sendLinkToMail = function (embed_code, file_id) {
var val = window.parent.$('#MailMessage').val();
window.parent.$('#MailMessage').val(((val != '') ? val + "\n" : val) + embed_code);
$('#embed-button-' + file_id).addClass('btn-success');
};
this.sendLinkToEditor = function (chat_id, embed_code, file_id) {
var val = window.parent.$('#CSChatMessage-' + chat_id).val();
window.parent.$('#CSChatMessage-' + chat_id).val(((val != '') ? val + "\n" : val) + embed_code);
$('#embed-button-' + file_id).addClass('btn-success');
};
this.sendLinkToGeneralEditor = function (embed_code, file_id, params) {
var editor = window.parent.$('.embed-into');
if (editor.length == 0) {
editor = window.opener.$('.embed-into');
};
if (typeof params !== 'undefined' && typeof params['replace'] !== `undefined` && params['replace'] == true) {
editor.val(embed_code);
} else {
var val = editor.val();
editor.val(((val != '') ? val + "\n" : val) + embed_code);
}
$('#embed-button-' + file_id).addClass('btn-success');
};
this.hideOnTransferHappen = function (chat_id) {
var inst = this;
var intervalChecker = setInterval(function () {
if (parseInt(confLH.user_id) != parseInt($('#chat-owner-' + chat_id).attr('user-id'))) {
if ($('#tabs').length > 0) {
inst.removeDialogTab(chat_id, $('#tabs'), true);
inst.channel && inst.channel.postMessage({ 'action': 'close_chat', 'args': { 'chat_id': parseInt(chat_id) } });
}
clearInterval(intervalChecker);
}
}, 1000);
};
this.hideTransferModal = function (chat_id) {
var inst = this;
setTimeout(function () {
$('#myModal').modal('hide');
if ($('#tabs').length > 0) {
inst.hideOnTransferHappen(chat_id);
}
}, 1000);
};
this.transferChat = function (chat_id) {
var inst = this;
var user_id = $('[name=TransferTo' + chat_id + ']:checked').val();
$.postJSON(this.wwwDir + this.trasnsferuser + chat_id + '/' + user_id, { 'type': 'user' }, function (data) {
if (data.error == 'false') {
$('#transfer-block-' + data.chat_id).html(data.result);
inst.hideTransferModal(chat_id);
};
});
};
this.changeOwner = function (chat_id) {
var inst = this;
var user_id = $('#id_new_user_id').val();
$.postJSON(this.wwwDir + this.trasnsferuser + chat_id + '/' + user_id, { 'type': 'change_owner' }, function (data) {
if (data.error == 'false') {
$('#transfer-block-' + data.chat_id).html(data.result);
inst.hideTransferModal(chat_id);
};
});
};
this.changeDep = function (chat_id) {
var inst = this;
var user_id = $('#id_new_dep_id').val();
$.postJSON(this.wwwDir + this.trasnsferuser + chat_id + '/' + user_id, { 'type': 'change_dep' }, function (data) {
if (data.error == 'false') {
$('#transfer-block-' + data.chat_id).html(data.result);
$('#myModal').modal('hide');
inst.updateVoteStatus(chat_id);
};
});
};
this.chooseSurvey = function (chat_id) {
var survey_id = $('[name=SurveyItem' + chat_id + ']:checked').val();
$.postJSON(this.wwwDir + "survey/choosesurvey/" + chat_id + '/' + survey_id, function (data) {
if (data.error == 'false') {
$('#survey-block-' + data.chat_id).html(data.result);
};
});
};
this.redirectContact = function (chat_id, message) {
if (typeof message === 'undefined' || confirm(message)) {
$.postJSON(this.wwwDir + 'chat/redirectcontact/' + chat_id, function (data) {
lhinst.syncadmininterfacestatic();
if (LHCCallbacks.userRedirectedContact) {
LHCCallbacks.userRedirectedContact(chat_id);
};
});
}
};
this.redirectToURL = function (chat_id) {
lhc.revealModal({ 'url': WWW_DIR_JAVASCRIPT + 'chat/singleaction/' + chat_id + '/redirecttourl' });
};
this.redirectToURLOnline = function (online_user_id, trans) {
var url = prompt(trans, "");
if (url != null) {
lhinst.addRemoteOnlineCommand(online_user_id, 'lhc_chat_redirect:' + url.replace(new RegExp(':', 'g'), '__SPLIT__'));
lhinst.addExecutionCommand(online_user_id, 'lhc_cobrowse_multi_command__lhc_chat_redirect:' + url.replace(new RegExp(':', 'g'), '__SPLIT__'));
}
};
this.transferChatDep = function (chat_id) {
var inst = this;
var user_id = $('[name=DepartamentID' + chat_id + ']:checked').val();
$.postJSON(this.wwwDir + this.trasnsferuser + chat_id + '/' + user_id, { 'type': 'dep' }, function (data) {
if (data.error == 'false') {
$('#transfer-block-' + data.chat_id).html(data.result);
inst.hideTransferModal(chat_id);
};
});
};
this.chatTabsOpen = function () {
window.open(this.wwwDir + 'chat/chattabs/', 'chatwindows', "menubar=1,resizable=1,width=800,height=650");
return false;
};
this.explicitClose = false;
this.sendCannedMessage = function (chat_id, link_inst) {
if ($('#id_CannedMessage-' + chat_id).val() > 0) {
link_inst.addClass('secondary');
var delayMiliseconds = parseInt($('#id_CannedMessage-' + chat_id).find(':selected').attr('data-delay')) * 1000;
var www_dir = this.wwwDir;
var inst = this;
if (inst.is_typing == false) {
inst.is_typing = true;
clearTimeout(inst.typing_timeout);
if (LHCCallbacks.initTypingMonitoringAdminInform) {
LHCCallbacks.initTypingMonitoringAdminInform({ 'chat_id': chat_id, 'status': true });
};
$.getJSON(www_dir + 'chat/operatortyping/' + chat_id + '/true', {}, function (data) {
if (LHCCallbacks.initTypingMonitoringAdmin) {
LHCCallbacks.initTypingMonitoringAdmin(chat_id, true);
};
inst.typing_timeout = setTimeout(function () { inst.typingStoppedOperator(chat_id); link_inst.removeClass('secondary'); }, (delayMiliseconds > 3000 ? delayMiliseconds : 3000));
}).fail(function () {
inst.typing_timeout = setTimeout(function () { inst.typingStoppedOperator(chat_id); }, 3000);
});
} else {
clearTimeout(inst.typing_timeout);
inst.typing_timeout = setTimeout(function () { inst.typingStoppedOperator(chat_id); }, 3000);
link_inst.removeClass('secondary');
};
if (delayMiliseconds > 0) {
setTimeout(function () {
var pdata = {
msg: $('#id_CannedMessage-' + chat_id).find(':selected').attr('data-msg')
};
if ($('#CSChatMessage-' + chat_id).attr('mode-write')) {
pdata.mode_write = $('#CSChatMessage-' + chat_id).attr('mode-write');
}
$('#CSChatMessage-' + chat_id).val('');
$.postJSON(www_dir + inst.addmsgurl + chat_id, pdata, function (data) {
if (LHCCallbacks.addmsgadmin) {
LHCCallbacks.addmsgadmin(chat_id);
};
ee.emitEvent('chatAddMsgAdmin', [chat_id]);
lhinst.syncadmincall();
return true;
});
}, delayMiliseconds);
} else {
var pdata = {
msg: $('#id_CannedMessage-' + chat_id).find(':selected').attr('data-msg')
};
if ($('#CSChatMessage-' + chat_id).attr('mode-write')) {
pdata.mode_write = $('#CSChatMessage-' + chat_id).attr('mode-write');
}
$('#CSChatMessage-' + chat_id).val('');
$.postJSON(this.wwwDir + this.addmsgurl + chat_id, pdata, function (data) {
if (LHCCallbacks.addmsgadmin) {
LHCCallbacks.addmsgadmin(chat_id);
};
ee.emitEvent('chatAddMsgAdmin', [chat_id]);
lhinst.syncadmincall();
return true;
});
}
};
return false;
};
this.theme = null;
this.chatStatus = null;
this.survey = null;
this.isBlinking = false;
this.startBlinking = function () {
if (this.isBlinking == false) {
var inst = this;
var newExcitingAlerts = (function () {
var oldTitle = document.title;
var msg = "!!! " + document.title;
var timeoutId;
var blink = function () { document.title = document.title == msg ? ' ' : msg; };
var clear = function () {
clearInterval(timeoutId);
document.title = oldTitle;
window.onmousemove = null;
timeoutId = null;
inst.isBlinking = false;
};
return function () {
if (!timeoutId) {
timeoutId = setInterval(blink, 1000);
window.onmousemove = clear;
}
};
}());
newExcitingAlerts();
this.isBlinking = true;
};
};
this.playNewMessageSound = function () {
if (Modernizr.audio && this.audio !== null) {
this.audio.src = Modernizr.audio.ogg ? WWW_DIR_JAVASCRIPT_FILES + '/new_message.ogg?v=3' :
Modernizr.audio.mp3 ? WWW_DIR_JAVASCRIPT_FILES + '/new_message.mp3?v=3' : WWW_DIR_JAVASCRIPT_FILES + '/new_message.wav?v=3';
this.audio.load();
};
if (!$("textarea[name=ChatMessage]").is(":focus")) {
this.startBlinking();
};
};
this.playInvitationSound = function () {
if (Modernizr.audio && this.audio !== null) {
this.audio.src = Modernizr.audio.ogg ? WWW_DIR_JAVASCRIPT_FILES + '/invitation.ogg' :
Modernizr.audio.mp3 ? WWW_DIR_JAVASCRIPT_FILES + '/invitation.mp3' : WWW_DIR_JAVASCRIPT_FILES + '/invitation.wav';
this.audio.load();
}
};
this.playPreloadSound = function () {
if (Modernizr.audio && this.audio !== null) {
this.audio.src = Modernizr.audio.ogg ? WWW_DIR_JAVASCRIPT_FILES + '/silence.ogg' :
Modernizr.audio.mp3 ? WWW_DIR_JAVASCRIPT_FILES + '/silence.mp3' : WWW_DIR_JAVASCRIPT_FILES + '/silence.wav';
this.audio.load();
}
};
this.scrollLoading = false;
this.scrollPending = false;
this.loadPreviousMessages = function (inst, noScroll) {
if (this.scrollLoading == false) {
this.scrollLoading = true;
var _that = this;
$.getJSON(this.wwwDir + 'chat/loadpreviousmessages/' + inst.attr('chat-id') + '/' + inst.attr('message-id') + '/(initial)/' + inst.attr('data-initial') + '/(original)/' + inst.attr('chat-original-id'), function (data) {
if (data.error == false) {
inst.attr('data-initial', 0);
var msg = $('#messagesBlock-' + inst.attr('chat-original-id'));
msg.prepend(data.result);
if (inst.attr('auto-scroll') == 1) {
inst.attr('auto-scroll', 0);
msg.scrollTop(msg.prop('scrollHeight'));
} else if (!noScroll) {
var elm = document.getElementById('scroll-to-chat-' + inst.attr('chat-id') + '-' + inst.attr('message-id'));
if (elm) {
msg[0].scrollTop = elm.offsetTop;
}
}
if (data.has_messages == true) {
inst.attr('message-id', data.message_id);
inst.attr('chat-id', data.chat_id);
_that.scrollLoading = false;
if (_that.scrollPending == true) {
_that.scrollPending = false;
_that.loadPreviousMessages(inst, noScroll);
}
} else {
inst.remove();
_that.scrollLoading = false;
_that.scrollPending = false;
}
} else {
_that.scrollLoading = false;
_that.scrollPending = false;
}
});
} else {
this.scrollPending = true;
}
};
this.hidenicknamesstatus = null;
this.onScrollAdmin = function (chat_id) {
var messageBlock = $('#messagesBlock-' + chat_id);
var scrollHeight = messageBlock.prop("scrollHeight");
var isAtTheBottom = Math.abs((scrollHeight - messageBlock.prop("scrollTop")) - messageBlock.prop("clientHeight"));
if (isAtTheBottom > 20) {
$('#scroll-button-admin-' + chat_id).removeClass('d-none');
} else {
$('#scroll-button-admin-' + chat_id).addClass('d-none').find('> button').text($('#scroll-button-admin-' + chat_id + ' > button').attr('data-default'));
}
}
this.scrollToTheBottomMessage = function (chat_id) {
var unreadSeparator = $('#unread-separator-' + chat_id);
if (unreadSeparator.length > 0) {
unreadSeparator[0].scrollIntoView();
setTimeout(function () {
unreadSeparator.remove();
}, 1000);
} else {
var messagesBlock = $('#messagesBlock-' + chat_id);
messagesBlock.scrollTop(messagesBlock.prop('scrollHeight'));
}
}
this.syncadmincall = function () {
if (this.chatsSynchronising.length > 0) {
if (this.underMessageAdd == false && this.syncroRequestSend == false) {
this.syncroRequestSend = true;
$.postJSON(this.wwwDir + this.syncadmin, { 'chats[]': this.chatsSynchronisingMsg }, function (data) {
if (typeof data.error_url !== 'undefined') {
document.location.replace(data.error_url);
}
try {
if (data.error == 'false') {
if (data.result != 'false') {
var playSound = false
$.each(data.result, function (i, item) {
var messageBlock = $('#messagesBlock-' + item.chat_id);
var scrollHeight = messageBlock.prop("scrollHeight");
var isAtTheBottom = Math.abs((scrollHeight - messageBlock.prop("scrollTop")) - messageBlock.prop("clientHeight"));
messageBlock.find('.pending-storage').slice(0, item.mn).remove();
var mainElement = $('#chat-tab-link-' + item.chat_id);
var needUnreadSeparator = !focused;
if (!mainElement.hasClass('active')) {
if (mainElement.find('span.msg-nm').length > 0) {
var totalMsg = (parseInt(mainElement.find('span.msg-nm').attr('rel')) + item.mn);
mainElement.find('span.msg-nm').html(' (' + totalMsg + ')').attr('rel', totalMsg);
} else {
needUnreadSeparator = true;
mainElement.append('<span rel="' + item.mn + '" class="msg-nm"> (' + item.mn + ')</span>');
mainElement.addClass('has-pm');
}
}
if (isAtTheBottom > 20) {
needUnreadSeparator = true;
$('#scroll-button-admin-' + item.chat_id + ' > button').text($('#scroll-button-admin-' + item.chat_id + ' > button').attr('data-new'));
}
if (needUnreadSeparator == true && document.getElementById('unread-separator-' + item.chat_id) === null) {
item.content = item.content.replace('<span class="usr-tit', '<div id="unread-separator-' + item.chat_id + '" class="new-msg-holder border-bottom border-danger text-center"><span class="new-msg bg-danger text-white d-inline-block fs12 rounded-top">' + confLH.transLation.new + '</span></div><span class="usr-tit');
}
messageBlock.append(item.content);
messageBlock.find('.pending-storage').appendTo(messageBlock);
lhinst.addQuateHandler(item.chat_id);
if (isAtTheBottom < 20) {
messageBlock.scrollTop(scrollHeight);
}
lhinst.updateChatLastMessageID(item.chat_id, item.message_id);
if (playSound == false && data.uw == 'false' && (typeof item.ignore === 'undefined' || typeof item.ignore === false)) {
playSound = true;
}
if (data.uw == 'false') {
ee.emitEvent('angularActionHappened', [{ 'type': 'user_wrote', 'chat_id': item.chat_id, 'msg': item.msg, 'nick': item.nck }]);
}
if (confLH.new_message_browser_notification == 1 && data.uw == 'false' && (typeof item.ignore === 'undefined' || typeof item.ignore === false)) {
lhinst.showNewMessageNotification(item.chat_id, item.msg, item.nck);
};
if (item.msfrom > 0) {
if ($('#msg-' + item.msfrom).attr('data-op-id') != item.msop) {
$('#msg-' + item.msfrom).next().addClass('operator-changes');
}
}
ee.emitEvent('eventSyncAdmin', [item, i]);
});
if (confLH.new_message_sound_admin_enabled == 1 && data.uw == 'false' && playSound == true) {
lhinst.playNewMessageSound();
};
};
if (data.result_status != 'false') {
var groupTabs = $('#group-chats-status').hasClass('chat-active');
$.each(data.result_status, function (i, item) {
var typingIndicator = $('#user-is-typing-' + item.chat_id);
if (item.tp == 'true') {
if (lhinst.nodeJsMode == false) {
typingIndicator.html(item.tx);
}
if (typingIndicator.css('visibility') == 'hidden') {
typingIndicator.css('visibility', 'visible');
}
} else {
if (lhinst.nodeJsMode == false) {
typingIndicator.css('visibility', 'hidden');
}
};
$('#last-msg-chat-' + item.chat_id).text(item.lmsg);
var userChatStatus = $('#user-chat-status-' + item.chat_id);
var wasOnline = userChatStatus.hasClass('icon-user-online');
$('#chat-duration-' + item.chat_id).text(item.cdur);
userChatStatus.removeClass('icon-user-online icon-user-away icon-user-pageview');
$('#msg-send-status-' + item.chat_id).removeClass('icon-user-online icon-user-offline');
if (item.us == 0) {
userChatStatus.addClass('icon-user-online');
} else if (item.us == 2) {
userChatStatus.addClass('icon-user-away');
} else if (item.us == 3) {
userChatStatus.addClass('icon-user-pageview');
}
if (groupTabs == true) {
if (wasOnline == true && item.us != 0 || (lhinst.hidenicknamesstatus != groupTabs && item.us != 0)) {
$('#ntab-chat-' + item.chat_id).hide();
} else if (wasOnline == false && item.us == 0 || (lhinst.hidenicknamesstatus != groupTabs && item.us == 0)) {
$('#ntab-chat-' + item.chat_id).show();
}
} else if (lhinst.hidenicknamesstatus != groupTabs) {
$('#ntab-chat-' + item.chat_id).show();
}
var statusel = $('#chat-id-' + item.chat_id + '-mds');
if (statusel.attr('data-chat-status') != item.cs || statusel.attr('data-chat-user') != item.co) {
lhinst.updateVoteStatus(item.chat_id);
}
if (item.um == 1) {
statusel.addClass('chat-unread');
$('#msg-send-status-' + item.chat_id).addClass('icon-user-offline');
} else {
$('#msg-send-status-' + item.chat_id).addClass('icon-user-online');
statusel.removeClass('chat-unread');
}
if (item.lp !== false) {
statusel.attr('title', item.lp + ' s.');
} else {
statusel.attr('title', '');
}
if (typeof item.oad != 'undefined' && item.oad == 1) {
$('#lhc_sync_operation').remove();
var th = document.getElementsByTagName('head')[0];
var s = document.createElement('script');
s.setAttribute('id', 'lhc_sync_operation');
s.setAttribute('type', 'text/javascript');
s.setAttribute('src', WWW_DIR_JAVASCRIPT + 'chat/loadoperatorjs/(type)/chat/(id)/' + item.chat_id);
th.appendChild(s);
};
});
};
if (data.cg) {
$.each(data.cg, function (i, item) {
return lhinst.removeDialogTab(item, $('#tabs'), true);
});
}
lhinst.hidenicknamesstatus = groupTabs;
clearTimeout(lhinst.userTimeout);
lhinst.userTimeout = setTimeout(chatsyncadmin, confLH.chat_message_sinterval);
ee.emitEvent('chatAdminSync', [data]);
};
} catch (err) {
clearTimeout(lhinst.userTimeout);
lhinst.userTimeout = setTimeout(chatsyncadmin, confLH.chat_message_sinterval);
};
lhinst.setSynchronizationRequestSend(false);
if (LHCCallbacks.syncadmincall) {
LHCCallbacks.syncadmincall(lhinst, data);
};
}).fail(function () {
clearTimeout(lhinst.userTimeout);
lhinst.userTimeout = setTimeout(chatsyncadmin, confLH.chat_message_sinterval);
lhinst.setSynchronizationRequestSend(false);
});
} else {
clearTimeout(lhinst.userTimeout);
lhinst.userTimeout = setTimeout(chatsyncadmin, confLH.chat_message_sinterval);
}
} else {
this.isSinchronizing = false;
}
};
this.updateVoteStatus = function (chat_id, internal) {
var that = this;
$.getJSON(this.wwwDir + 'chat/updatechatstatus/' + chat_id, {}, function (data) {
$('#main-user-info-tab-' + chat_id).html(data.result);
$('#messagesBlock-' + chat_id + ' span.vis-tit').each(function (i) {
var cache = $(this).children();
$(this).text(' ' + data.nick).prepend(cache);
});
$('#ntab-chat-' + chat_id).text(data.nick);
ee.emitEvent('chatTabInfoReload', [chat_id]);
!internal && that.channel && that.channel.postMessage({ 'action': 'update_chat', 'args': { 'chat_id': parseInt(chat_id) } });
});
};
this.updateChatLastMessageID = function (chat_id, message_id) {
this.chatsSynchronisingMsg[this.getChatIndex(chat_id)] = chat_id + ',' + message_id;
};
this.requestNotificationPermission = function () {
if (window.webkitNotifications) {
window.webkitNotifications.requestPermission();
} else if (window.Notification) {
Notification.requestPermission(function (permission) { });
} else {
alert('Notification API in your browser is not supported.');
}
};
this.playNewChatAudio = function (sound) {
clearTimeout(this.soundIsPlaying);
this.soundPlayedTimes++;
if (Modernizr.audio && this.audio !== null) {
this.audio.src = Modernizr.audio.ogg ? WWW_DIR_JAVASCRIPT_FILES + '/' + sound + '.ogg?v=4' :
Modernizr.audio.mp3 ? WWW_DIR_JAVASCRIPT_FILES + '/' + sound + '.mp3?v=4' : WWW_DIR_JAVASCRIPT_FILES + '/' + sound + '.wav?v=4';
this.audio.load();
if (confLH.repeat_sound > this.soundPlayedTimes) {
var inst = this;
this.soundIsPlaying = setTimeout(function () { inst.playNewChatAudio(sound); }, confLH.repeat_sound_delay * 1000);
}
};
};
this.focusChanged = function (status) {
if (confLH.new_message_browser_notification == 1 && status == true) {
if (window.webkitNotifications || window.Notification) {
var inst = this;
$.each(this.chatsSynchronising, function (index, chat_id) {
if (typeof inst.notificationsArrayMessages[chat_id] !== 'undefined') {
if (window.webkitNotifications) {
inst.notificationsArrayMessages[chat_id].cancel();
} else {
inst.notificationsArrayMessages[chat_id].close();
}
delete inst.notificationsArrayMessages[chat_id];
}
});
}
}
if (parseInt(this.chat_id) > 0) {
this.scheduleSync();
}
};
this.notificationsArrayMessages = [];
this.showNewMessageNotification = function (chat_id, message, nick) {
try {
if (window.Notification && focused == false && window.Notification.permission == 'granted') {
if (typeof this.notificationsArrayMessages[chat_id] !== 'undefined') {
this.notificationsArrayMessages[chat_id].close();
delete this.notificationsArrayMessages[chat_id];
};
var notification = new Notification(nick, { icon: WWW_DIR_JAVASCRIPT_FILES_NOTIFICATION + '/notification.png', body: message });
var _that = this;
notification.onclick = function () {
window.focus();
notification.close();
delete _that.notificationsArrayMessages[chat_id];
};
notification.onclose = function () {
if (typeof _that.notificationsArrayMessages[chat_id] !== 'undefined') {
delete _that.notificationsArrayMessages[chat_id];
};
};
this.notificationsArrayMessages[chat_id] = notification;
this.scheduleNewMessageClose(notification, chat_id);
}
} catch (err) {
console.log(err);
};
};
this.scheduleNewMessageClose = function (notification, chat_id) {
var _that = this;
setTimeout(function () {
if (window.webkitNotifications) {
notification.cancel();
} else {
notification.close();
};
if (typeof _that.notificationsArrayMessages[chat_id] !== 'undefined') {
delete _that.notificationsArrayMessages[chat_id];
};
}, 10 * 1000);
};
this.playSoundNewAction = function (identifier, chat_id, nick, message, nt) {
if (this.backgroundChats.indexOf(parseInt(chat_id)) != -1) {
return;
}
ee.emitEvent('angularActionHappened', [{ 'type': identifier, 'chat_id': chat_id, 'msg': message, 'nick': nick }]);
if (confLH.new_chat_sound_enabled == 1 && (confLH.sn_off == 1 || $('#online-offline-user').text() == 'flash_on') && (identifier == 'active_chats' || identifier == 'bot_chats' || identifier == 'pending_chat' || identifier == 'transfer_chat' || identifier == 'unread_chat' || identifier == 'pending_transfered')) {
this.soundPlayedTimes = 0;
this.playNewChatAudio(identifier == 'active_chats' ? 'alert' : 'new_chat');
};
if (!$("textarea[name=ChatMessage]").is(":focus") && (confLH.sn_off == 1 || $('#online-offline-user').text() == 'flash_on') && (identifier == 'subject_chats' || identifier == 'active_chats' || identifier == 'bot_chats' || identifier == 'pending_chat' || identifier == 'transfer_chat' || identifier == 'unread_chat' || identifier == 'pending_transfered')) {
this.startBlinking();
};
if (identifier == 'subject_chats') {
this.soundPlayedTimes = 0;
this.playNewChatAudio('subject_chat');
}
var inst = this;
if ((identifier == 'subject_chats' || identifier == 'active_chats' || identifier == 'pending_chat' || identifier == 'transfer_chat' || identifier == 'unread_chat' || identifier == 'bot_chats' || identifier == 'pending_transfered') && (confLH.sn_off == 1 || $('#online-offline-user').text() == 'flash_on') && window.Notification && window.Notification.permission == 'granted') {
var notification = new Notification(nick, { icon: WWW_DIR_JAVASCRIPT_FILES_NOTIFICATION + '/notification.png', body: message, requireInteraction: true });
notification.onclick = function () {
if (identifier == 'subject_chats' || identifier == 'active_chats' || identifier == 'pending_chat' || identifier == 'unread_chat' || identifier == 'pending_transfered' || identifier == 'bot_chats') {
if ($('#tabs').length > 0) {
window.focus();
inst.startChat(chat_id, $('#tabs'), nt);
} else {
inst.startChatNewWindow(chat_id, 'ChatRequest');
}
} else {
inst.startChatNewWindowTransferByTransfer(chat_id, nt);
};
notification.close();
};
if (identifier != 'pending_transfered') {
if (this.notificationsArray[chat_id] !== 'undefined') {
notification.close();
}
this.notificationsArray[chat_id] = notification;
};
};
if (identifier == 'transfer_chat' && confLH.accept_chats) {
inst.startChatNewWindowTransferByTransfer(chat_id, nt, true);
} else if (identifier == 'transfer_chat' && confLH.show_alert_transfer == 1) {
if (confirm(confLH.transLation.transfered + "\n\n" + message)) {
inst.startChatNewWindowTransferByTransfer(chat_id, nt);
}
}
if (confLH.show_alert == 1) {
if (confirm(confLH.transLation.new_chat + "\n\n" + message)) {
if (identifier == 'pending_chat' || identifier == 'unread_chat' || identifier == 'pending_transfered' || identifier == 'bot_chats') {
if ($('#tabs').length > 0) {
window.focus();
inst.startChat(chat_id, $('#tabs'), nt);
} else {
inst.startChatNewWindow(chat_id, 'ChatRequest');
}
} else {
inst.startChatNewWindowTransferByTransfer(chat_id, nt);
};
};
};
};
this.syncadmininterfacestatic = function () {
try {
ee.emitEvent('angularLoadChatList');
} catch (err) {
};
};
this.addingUserMessage = false;
this.addUserMessageQueue = [];
this.addDelayedTimeout = null;
this.addmsgadmin = function (chat_id, message) {
$('#unread-separator-' + chat_id).remove();
var textArea = $("#CSChatMessage-" + chat_id);
if (textArea.is("[readonly]")) {
return;
}
var pdata = {
msg: message || textArea.val()
};
if (textArea.attr('meta-msg')) {
pdata.meta_msg = textArea.attr('meta-msg');
textArea.removeAttr('meta-msg');
}
if (textArea.attr('mode-write')) {
pdata.mode_write = textArea.attr('mode-write');
}
if (pdata.msg == '') {
return;
}
if (this.speechHandler !== false) {
this.speechHandler.messageSend();
};
message || textArea.val('');
var placeholerOriginal = textArea.attr('placeholder');
textArea.attr('placeholder', confLH.transLation.sending || 'Sending...');
if (textArea.hasClass('edit-mode')) {
pdata.msgid = textArea.attr('data-msgid');
$.postJSON(this.wwwDir + 'chat/updatemsg/' + chat_id, pdata, function (data) {
textArea.attr('placeholder', placeholerOriginal);
if (data.error == 'f') {
textArea.removeClass('edit-mode');
textArea.removeAttr('data-msgid');
$('#msg-' + pdata.msgid).replaceWith(data.msg);
if (LHCCallbacks.addmsgadmin) {
LHCCallbacks.addmsgadmin(chat_id);
};
ee.emitEvent('chatAddMsgAdmin', [chat_id]);
lhinst.addQuateHandler(chat_id);
return true;
}
});
} else {
var inst = this;
var messagesBlock = $('#messagesBlock-' + chat_id);
message || messagesBlock.append("<div class=\"message-row message-admin pending-storage\"><div class=\"msg-body\"><span class=\"material-icons lhc-spin\">autorenew</span>" + $("<div>").text(pdata.msg).html() + "</div></div>");
messagesBlock.scrollTop(messagesBlock.prop('scrollHeight'));
if (this.addingUserMessage == false) {
this.addingUserMessage = true;
var hasSubjects = false;
if (textArea.attr('subjects_ids')) {
pdata.subjects_ids = textArea.attr('subjects_ids');
textArea.removeAttr('subjects_ids');
hasSubjects = true;
}
if (textArea.attr('canned_id')) {
pdata.canned_id = textArea.attr('canned_id');
textArea.removeAttr('canned_id');
}
if (textArea.attr('whisper')) {
pdata.whisper = 1;
}
$.postJSON(this.wwwDir + this.addmsgurl + chat_id, pdata, function (data) {
textArea.removeAttr('readonly').attr('placeholder', placeholerOriginal);
if (data.error == 'false') {
if (LHCCallbacks.addmsgadmin) {
LHCCallbacks.addmsgadmin(chat_id);
};
ee.emitEvent('chatAddMsgAdmin', [chat_id]);
if (data.r != '') {
$('#messagesBlock-' + chat_id).append(data.r).scrollTop($("#messagesBlock-" + chat_id).prop("scrollHeight")).find('.pending-storage').remove();
};
if (data.hold_removed === true) {
$('#hold-action-' + chat_id).removeClass('btn-outline-info');
} else if (data.hold_added === true) {
$('#hold-action-' + chat_id).addClass('btn-outline-info');
}
if (hasSubjects == true || data.update_status === true) {
inst.updateVoteStatus(chat_id);
}
lhinst.syncadmincall();
} else {
if (typeof data.token !== 'undefined') {
confLH.csrf_token = data.token;
}
textArea.attr('placeholder', placeholerOriginal).val((textArea.val() + ' ' + pdata.msg).trim());
$('.pending-storage').first().remove();
var escaped = '<div style="margin:10px 10px 30px 10px;" class="alert alert-warning" role="alert">' + $("<div>").text(data.r).html() + '</div>';
$('#messagesBlock-' + chat_id).append(escaped).scrollTop($("#messagesBlock-" + chat_id).prop("scrollHeight"));
}
inst.addingUserMessage = false;
if (inst.addUserMessageQueue.length > 0) {
var elementAdd = inst.addUserMessageQueue.shift()
inst.addmsgadmin(elementAdd.chat_id, elementAdd.msg);
}
return true;
}).fail(function (respose) {
textArea.attr('placeholder', placeholerOriginal).val(textArea.val() + ' ' + pdata.msg);
var escaped = '<div style="margin:10px 10px 30px 10px;" class="alert alert-warning" role="alert">' + $("<div>").text('You have weak internet connection or the server has problems. Try to refresh the page or send the message again.' + (typeof respose.status !== 'undefined' ? ' Error code [' + respose.status + ']' : '') + (typeof respose.responseText !== 'undefined' ? respose.responseText : '')).html() + '</div>';
$('#messagesBlock-' + chat_id).append(escaped).scrollTop($("#messagesBlock-" + chat_id).prop("scrollHeight"));
$('.pending-storage').first().remove();
inst.addingUserMessage = false;
if (inst.addUserMessageQueue.length > 0) {
var elementAdd = inst.addUserMessageQueue.shift()
inst.addmsgadmin(elementAdd.chat_id, elementAdd.msg);
}
});
} else {
textArea.attr('placeholder', placeholerOriginal);
this.addUserMessageQueue.push({ 'chat_id': chat_id, 'msg': pdata.msg });
}
}
};
this.editPrevious = function (chat_id) {
var textArea = $('#CSChatMessage-' + chat_id);
if (textArea.val() == '' && textArea.attr('disable-edit') !== "true") {
$.getJSON(this.wwwDir + 'chat/editprevious/' + chat_id, function (data) {
if (data.error == 'f') {
textArea.val(data.msg);
textArea.attr('data-msgid', data.id);
textArea.addClass('edit-mode');
$('#msg-' + data.id).addClass('edit-mode');
if (LHCCallbacks.editPrevious) {
LHCCallbacks.editPrevious(chat_id, data);
}
}
});
}
};
this.afterAdminChatInit = function (chat_id) {
if (LHCCallbacks.afterAdminChatInit) {
LHCCallbacks.afterAdminChatInit(chat_id);
}
};
this.getInputSelection = function (elem) {
if (typeof elem != "undefined") {
s = elem[0].selectionStart;
e = elem[0].selectionEnd;
return elem.val().substring(s, e);
} else {
return '';
}
}
this.handleBBCode = function (inst) {
var str = $(inst.attr('data-selector')).val();
var elem = $(inst.attr('data-selector'));
if (typeof elem != "undefined") {
var s = elem[0].selectionStart, e = elem[0].selectionEnd;
var selection = str.substring(s, e);
} else {
var selection = '';
}
var bbcodeend = typeof inst.attr("data-bbcode-end") !== 'undefined' ? inst.attr("data-bbcode-end") : inst.attr("data-bbcode");
if (selection.length > 0) {
$(inst.attr('data-selector')).val(str.substr(0, s) + "[" + inst.attr("data-bbcode") + "]" + selection + "[/" + bbcodeend + "]" + str.substring(e));
} else {
$(inst.attr('data-selector')).val(str + "[" + inst.attr("data-bbcode") + "]" + "[/" + bbcodeend + "]");
}
return false;
}
this.addAdminChatFinished = function (chat_id, last_message_id, arg) {
var _that = this;
var $textarea = jQuery('#CSChatMessage-' + chat_id);
var cannedMessageSuggest = new LHCCannedMessageAutoSuggest({ 'chat_id': chat_id, 'uppercase_enabled': confLH.auto_uppercase });
var colorPickerDom = document.getElementById('color-picker-chat-' + chat_id);
if (colorPickerDom !== null) {
var colorP = new ColorPicker({
dom: document.getElementById('color-picker-chat-' + chat_id),
value: '#0F0'
});
colorP.addEventListener('change', function (colorItem) {
$('#color-apply-' + chat_id).attr('data-bbcode', 'color=' + colorP.getValue('hex'));
});
$('.downdown-menu-color-' + chat_id).on('click', function (e) {
if ($(this).parent().is(".show")) {
var target = $(e.target);
if (target.hasClass("keepopen") || target.parents(".keepopen").length) {
return false;
} else {
return true;
}
}
});
$('.downdown-menu-color-' + chat_id + ' .color-item').on('click', function () {
colorP.setValue($(this).attr('data-color'));
});
}
$textarea.bind('click', function (evt) {
$('.dropdown-menu-main').removeClass('show').find('> .dropdown-menu').removeClass('show');
$('#CSChatMessage-' + chat_id).focus();
if (!$('#chat-tab-link-' + chat_id).hasClass('active')) {
$('#chat-tab-link-' + chat_id).click();
(new bootstrap.Tab(document.querySelector('#chat-tab-link-' + chat_id))).show();
}
});
$('#dropdown-menu-main-action-' + chat_id).click(function () {
$(this).parent().toggleClass('show');
$(this).parent().find('> div.dropdown-menu').toggleClass('show');
});
$textarea.bind('keydown', 'return', function (evt) {
_that.addmsgadmin(chat_id);
ee.emitEvent('afterAdminMessageSent', [chat_id]);
$textarea[0].rows = $textarea.attr('data-rows-default');
return false;
});
$textarea.bind('keyup', 'up', function (evt) {
_that.editPrevious(chat_id);
});
$textarea.bind('keyup', function (evt) {
if ($textarea.val() == '') {
$textarea.removeAttr('subjects_ids');
$textarea.removeAttr('canned_id');
$textarea.removeAttr('content_modified');
}
if ($textarea.val() == '' && evt.altKey && (evt.which == 38 || evt.which == 40)) {
if (confLH.new_dashboard == true) {
ee.emitEvent('activateNextTab', [chat_id, (evt.which == 38 ? true : false)]);
} else {
if (evt.which == 38) {
var tab = lhinst.smartTabFocus($('#tabs'), chat_id, { keep: true, up: true });
} else {
var tab = lhinst.smartTabFocus($('#tabs'), chat_id, { keep: true, up: false });
}
var parts = tab.split('chat-id-');
if (parts[1] && !isNaN(parts[1])) {
$('#chat-tab-link-' + parts[1]).click();
(new bootstrap.Tab(document.querySelector('#chat-tab-link-' + parts[1]))).show();
}
}
return;
}
var ta = $textarea[0];
if ((evt.which == 38 || evt.which == 8 || evt.which == 46) && ta.value.split(/\r\n|\r|\n/).length <= ta.rows && parseInt($textarea.attr('data-rows-default')) <= ta.value.split(/\r\n|\r|\n/).length) {
ta.rows = ta.value.split(/\r\n|\r|\n/).length;
}
var maxrows = 30;
var lh = ta.clientHeight / ta.rows;
while (ta.scrollHeight > ta.clientHeight && !window.opera && ta.rows < maxrows) {
ta.style.overflow = 'hidden';
ta.rows += 1;
}
if (ta.scrollHeight > ta.clientHeight) ta.style.overflow = 'auto';
if ($textarea.val() != '') {
$textarea.attr('content_modified', true);
}
});
$messageBlock = $('#messagesBlock-' + chat_id);
$messageBlock.css('height', this.getLocalValue('lhc_mheight', confLH.defaultm_hegiht));
$messageBlock.data('resized', false);
$messageBlock.data('y', $messageBlock.outerHeight());
$messageBlock.bind('mouseup mousemove', function (event) {
var $this = jQuery(this);
if ($this.outerHeight() != $this.data('y')) {
if ($this.data('resized') == false) {
$this.css('height', '1px');
$this.data('resized', true)
}
if (this.resize_timeout) {
clearTimeout(this.resize_timeout);
}
this.resize_timeout = setTimeout(function () {
_that.setLocalValue('lhc_mheight', $this.outerHeight());
$this.data('y', $this.outerHeight());
}, 100);
}
});
if (confLH.scroll_load == 1) {
$messageBlock[0].oldScrollTop = $messageBlock[0].scrollTop;
$messageBlock.bind('scroll', function (event) {
var $this = jQuery(this);
if ($this[0].oldScrollTop > $this[0].scrollTop && $this[0].scrollTop < 300 && $('#load-prev-btn-' + chat_id).length == 1) {
_that.loadPreviousMessages($('#load-prev-btn-' + chat_id), true);
}
$this[0].oldScrollTop = $this[0].scrollTop;
});
}
this.initTypingMonitoringAdmin(chat_id);
this.afterAdminChatInit(chat_id);
this.addSynchroChat(chat_id, last_message_id);
confLH.no_scroll_bottom !== 1 && $messageBlock.prop('scrollTop', $messageBlock.prop('scrollHeight'));
this.startSyncAdmin();
if (arg === null || typeof arg !== 'object' || arg.indexOf('background') === -1) {
this.hideNotification(chat_id);
} else {
$('#chat-tab-link-' + chat_id).click(function () {
_that.removeBackgroundChat(parseInt(chat_id));
_that.hideNotification(parseInt(chat_id));
});
}
try {
if (localStorage) {
if (localStorage.getItem('lhc_rch') == 1) {
this.processCollapse(chat_id);
}
}
} catch (e) { };
$('#chat-tab-items-' + chat_id + ' > li > a').click(function () {
ee.emitEvent('adminChatTabSubtabClicked', [chat_id, $(this)]);
});
$('#chat-write-button-' + chat_id).click(function () {
$('#CSChatMessage-' + chat_id).show().focus().removeAttr("whisper").removeClass('bg-light').attr('placeholder', $(this).attr('data-plc'));
$(this).removeClass('btn-outline-secondary').addClass('btn-outline-primary');
$('#chat-preview-button-' + chat_id + ',#chat-whisper-button-' + chat_id).removeClass('btn-outline-primary').addClass('btn-outline-secondary');
$('#chat-preview-container-' + chat_id).hide();
$('#chat-join-as-container-' + chat_id).removeClass('hide');
});
$('#chat-preview-button-' + chat_id).click(function () {
$('#chat-preview-container-' + chat_id).html('...').show();
$('#CSChatMessage-' + chat_id).hide();
$(this).removeClass('btn-outline-secondary').addClass('btn-outline-primary');
$('#chat-join-as-container-' + chat_id).addClass('hide');
$('#chat-write-button-' + chat_id + ',#chat-whisper-button-' + chat_id).removeClass('btn-outline-primary').addClass('btn-outline-secondary');
jQuery.post(WWW_DIR_JAVASCRIPT + 'chat/previewmessage', { msg_body: true, 'msg': $('#CSChatMessage-' + chat_id).val() }, function (data) {
$('#chat-preview-container-' + chat_id).html(data);
});
});
$('#chat-whisper-button-' + chat_id).click(function () {
$('#CSChatMessage-' + chat_id).show().focus().attr('whisper', '1').addClass('bg-light').attr('placeholder', $(this).attr('data-plc'));
$('#chat-preview-container-' + chat_id).hide();
$(this).removeClass('btn-outline-secondary').addClass('btn-outline-primary');
$('#chat-write-button-' + chat_id + ',#chat-preview-button-' + chat_id).removeClass('btn-outline-primary').addClass('btn-outline-secondary');
$('#chat-join-as-container-' + chat_id).addClass('hide');
});
$('#chat-join-as-' + chat_id).click(function () {
$('#chat-join-as-container-' + chat_id).addClass('hide mode-chosen');
$('chat-write-button-' + chat_id).attr('data-plc', $('#chat-mode-selected-' + chat_id).find(":selected").attr('data-plc'));
$('#CSChatMessage-' + chat_id).attr('placeholder', $('#chat-mode-selected-' + chat_id).find(":selected").attr('data-plc'));
$('#CSChatMessage-' + chat_id).attr('mode-write', $('#chat-mode-selected-' + chat_id).val()).focus();
});
$('#chat-impersonate-option-' + chat_id).click(function () {
$('#chat-write-button-' + chat_id).click();
$('#chat-join-as-container-' + chat_id).removeClass('hide mode-chosen');
});
ee.emitEvent('adminChatLoaded', [chat_id, last_message_id, arg]);
};
this.removeBackgroundChat = function (chat_id) {
var index = this.backgroundChats.indexOf(parseInt(chat_id));
if (index !== -1) {
delete this.backgroundChats[index];
};
};
this.getLocalValue = function (variable, defaultValue) {
try {
if (localStorage) {
var value = localStorage.getItem(variable);
if (value !== null) {
return value;
} else {
return defaultValue;
}
}
} catch (e) { }
return defaultValue;
};
this.setLocalValue = function (key, val) {
try {
if (localStorage) {
localStorage.setItem(key, val);
}
} catch (e) { }
};
this.hideNotification = function (chat_id) {
chat_id = parseInt(chat_id);
if (typeof this.notificationsArray[chat_id] !== 'undefined' && this.backgroundChats.indexOf(chat_id) == -1) {
this.notificationsArray[chat_id].close();
delete this.notificationsArray[chat_id];
};
clearTimeout(this.soundIsPlaying);
}
this.showMyPermissions = function (user_id) {
$.get(this.wwwDir + 'permission/getpermissionsummary/' + user_id, function (data) {
$('#permissions-summary').html(data);
});
};
this.updateMessageRowAdmin = function (chat_id, msgid) {
$.getJSON(this.wwwDir + 'chat/getmessageadmin/' + chat_id + '/' + msgid, function (data) {
if (data.error == 'f') {
var messagesBlock = $('#messagesBlock-' + chat_id);
var needScroll = (messagesBlock.prop('scrollTop') + messagesBlock.height() + 30) > messagesBlock.prop('scrollHeight');
$('#msg-' + msgid).replaceWith(data.msg);
lhinst.addQuateHandler(chat_id);
$('#msg-' + msgid).addClass('msg-updated');
setTimeout(function () {
$('#msg-' + msgid).removeClass('msg-updated');
}, 2000);
needScroll && messagesBlock.scrollTop(messagesBlock.prop('scrollHeight'));
}
});
};
this.startSyncAdmin = function () {
if (this.isSinchronizing == false) {
this.isSinchronizing = true;
this.syncadmincall();
}
};
this.disableChatSoundAdmin = function (inst) {
if (inst.prop('tagName') != 'I') {
inst = inst.find('> i.material-icons');
}
if (inst.text() == 'volume_off') {
$.post(this.wwwDir + 'user/setsettingajax/chat_message/1');
confLH.new_message_sound_admin_enabled = 1;
inst.text('volume_up');
} else {
$.post(this.wwwDir + 'user/setsettingajax/chat_message/0');
confLH.new_message_sound_admin_enabled = 0;
inst.text('volume_off');
}
return false;
};
this.disableNewChatSoundAdmin = function (inst) {
if (inst.prop('tagName') != 'I') {
inst = inst.find('> i.material-icons');
}
if (inst.text() == 'volume_off') {
$.post(this.wwwDir + 'user/setsettingajax/new_chat_sound/1');
confLH.new_chat_sound_enabled = 1;
inst.text('volume_up');
} else {
$.post(this.wwwDir + 'user/setsettingajax/new_chat_sound/0');
confLH.new_chat_sound_enabled = 0;
inst.text('volume_off');
}
return false;
};
this.changeUserSettings = function (attr, value) {
$.post(this.wwwDir + 'user/setsettingajax/' + attr + '/' + value);
};
this.changeUserSettingsIndifferent = function (attr, value) {
$.post(this.wwwDir + 'user/setsettingajax/' + attr + '/' + encodeURIComponent(value == '' ? '__empty__' : value) + '/(indifferent)/true');
};
this.changeStatusAction = function (form, chat_id) {
var inst = this;
$.postJSON(form.attr('action'), form.serialize(), function (data) {
if (data.error == 'false') {
$('#myModal').modal('hide');
inst.updateVoteStatus(chat_id);
if (data.is_owner === true) {
$('#CSChatMessage-' + chat_id).attr('placeholder', '');
$('#CSChatMessage-' + chat_id).focus();
}
} else {
alert(data.result);
}
});
return false;
};
this.submitModalForm = function (form, idElement) {
var inst = this;
$('#modal-in-progress').removeClass('hide');
$('.modal-submit-disable').addClass('disabled').attr('disabled', "disabled");
$.ajax({
url: form.attr("action"),
type: form.attr("method"),
data: new FormData(form[0]),
processData: false,
contentType: false,
success: function (data, status) {
$('#modal-in-progress').addClass('hide');
$('.modal-submit-disable').removeClass('disabled').attr('disabled', "disabled");
var idElementDetermined = idElement ? '#' + idElement : '#myModal';
if (!idElement) {
var styleOriginal = $('#myModal > .modal-dialog')[0].style.cssText;
}
$(idElementDetermined).html(data);
if (!idElement && $('#myModal > .modal-dialog').length > 0) {
$('#myModal > .modal-dialog')[0].style.cssText = styleOriginal;
} else {
$(idElementDetermined).html('<div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-body">' + data + '</div></div></div>');
}
},
error: function (xhr, desc, err) {
alert('An error has accoured! ' + xhr.responseText);
}
});
return false;
};
this.pendingMessagesToStore = [];
this.setSubject = function (inst, chat_id) {
$('#subject-message-' + chat_id).text('...');
$.postJSON(this.wwwDir + 'chat/subject/' + chat_id + '/(subject)/' + inst.val() + '/(status)/' + inst.is(':checked'), { 'update': true }, function (data) {
lhinst.updateVoteStatus(chat_id);
$('#subject-message-' + chat_id).text(data.message);
});
}
this.deleteChatfile = function (file_id) {
$.postJSON(this.wwwDir + 'file/deletechatfile/' + file_id, function (data) {
if (data.error == 'false') {
$('#file-id-' + file_id).remove();
} else {
alert(data.result);
}
});
};
this.updateChatFiles = function (chat_id) {
$.postJSON(this.wwwDir + 'file/chatfileslist/' + chat_id, function (data) {
$('#chat-files-list-' + chat_id).html(data.result);
});
};
this.updateOnlineFiles = function (online_user_id) {
$.postJSON(this.wwwDir + 'file/onlinefileslist/' + online_user_id, function (data) {
$('#online-user-files-list-' + online_user_id).html(data.result);
});
};
this.updateOnlineFilesUser = function (online_user_vid) {
$.postJSON(this.wwwDir + 'file/useronlinefileslist/' + online_user_vid, function (data) {
$('#user-online-files-list').html(data.result);
});
};
this.addFileUpload = function (data_config) {
$('#fileupload-' + data_config.chat_id).fileupload({
url: this.wwwDir + 'file/uploadfileadmin/' + data_config.chat_id,
dataType: 'json',
add: function (e, data) {
var uploadErrors = [];
var acceptFileTypes = data_config.ft_op;
if (!(acceptFileTypes.test(data.originalFiles[0]['type']) || acceptFileTypes.test(data.originalFiles[0]['name']))) {
uploadErrors.push(data_config.ft_msg);
};
if (data.originalFiles[0]['size'] > data_config.fs) {
uploadErrors.push(data_config.fs_msg);
};
if (uploadErrors.length > 0) {
alert(uploadErrors.join("\n"));
} else {
data.submit();
};
},
done: function (e, data) {
var response = data.response();
if (response != undefined && response.result != undefined && response.result.error == 'true' && response.result.error_msg != undefined) {
alert(response.result.error_msg);
} else {
lhinst.updateChatFiles(data_config.chat_id);
var txtArea = $('#CSChatMessage-' + data_config.chat_id);
var txtValue = jQuery.trim(txtArea.val());
txtArea.val(txtValue + (txtValue != '' ? "\n" : "") + response.result.msg + "\n");
}
if (LHCCallbacks.addFileUpload) {
LHCCallbacks.addFileUpload(data_config.chat_id);
}
},
dropZone: $('#CSChatMessage-' + data_config.chat_id),
pasteZone: $('#CSChatMessage-' + data_config.chat_id),
progressall: function (e, data) {
var progress = parseInt(data.loaded / data.total * 100, 10);
$('#user-is-typing-' + data_config.chat_id).css('visibility', 'visible');
$('#user-is-typing-' + data_config.chat_id).html(progress + '%');
}
}).prop('disabled', !$.support.fileInput)
.parent().addClass($.support.fileInput ? undefined : 'disabled');
};
this.addExecutionCommand = function (online_user_id, operation) {
$.postJSON(this.wwwDir + 'chat/addonlineoperation/' + online_user_id, { 'operation': operation }, function (data) {
if (LHCCallbacks.addExecutionCommand) {
LHCCallbacks.addExecutionCommand(online_user_id);
};
});
if (operation == 'lhc_screenshot') {
$('#user-screenshot-container').html('').addClass('screenshot-pending');
var inst = this;
setTimeout(function () {
inst.updateScreenshotOnline(online_user_id);
}, 15000);
};
};
this.addRemoteCommand = function (chat_id, operation) {
$.postJSON(this.wwwDir + 'chat/addoperation/' + chat_id, { 'operation': operation }, function (data) {
if (LHCCallbacks.addRemoteCommand) {
LHCCallbacks.addRemoteCommand(chat_id);
};
if (data.error == 'true' && data.errors != null) {
alert(data.errors.join("\n"));
}
});
if (operation == 'lhc_screenshot') {
$('#user-screenshot-container').html('').addClass('screenshot-pending');
var inst = this;
setTimeout(function () {
inst.updateScreenshot(chat_id);
}, 5000);
};
};
this.addRemoteOnlineCommand = function (online_user_id, operation) {
$.postJSON(this.wwwDir + 'chat/addonlineoperationiframe/' + online_user_id, { 'operation': operation }, function (data) {
if (LHCCallbacks.addRemoteOnlineCommand) {
LHCCallbacks.addRemoteOnlineCommand(online_user_id);
};
});
};
this.updateScreenshot = function (chat_id) {
$('#user-screenshot-container').html('').addClass('screenshot-pending');
$.get(this.wwwDir + 'chat/checkscreenshot/' + chat_id, function (data) {
$('#user-screenshot-container-' + chat_id).html(data);
$('#user-screenshot-container-' + chat_id).removeClass('screenshot-pending');
});
};
this.updateScreenshotOnline = function (online_id) {
$('#user-screenshot-container').html('').addClass('screenshot-pending');
$.get(this.wwwDir + 'chat/checkscreenshotonline/' + online_id, function (data) {
$('#user-screenshot-container-' + online_id).html(data);
$('#user-screenshot-container-' + online_id).removeClass('screenshot-pending');
});
};
this.delayQueue = [];
this.delayed = false;
this.intervalPending = null;
this.gmaps_loading = false;
this.queue_render = [];
this.showMessageLocation = function (id, lat, lon) {
var myLatLng = { lat: lat, lng: lon };
if (this.gmaps_loaded == true) {
var map = new google.maps.Map(document.getElementById('msg-location-' + id), {
zoom: 13,
center: myLatLng
});
var marker = new google.maps.Marker({
position: myLatLng,
map: map,
title: lat + "," + lon
});
} else {
if (this.gmaps_loading == false) {
this.gmaps_loading = true;
var po = document.createElement('script'); po.type = 'text/javascript';
po.async = true;
po.src = 'https://maps.googleapis.com/maps/api/js?key=' + confLH.gmaps_api_key + "&callback=chatMapLoaded";
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(po, s);
lhinst.queue_render.push({ 'id': id, 'lat': lat, 'lon': lon });
} else {
lhinst.queue_render.push({ 'id': id, 'lat': lat, 'lon': lon });
}
}
}
this.startChatNewWindow = function (chat_id, name) {
var popupWindow = window.open(this.wwwDir + 'chat/single/' + chat_id, 'chatwindow-chat-id-' + chat_id, "menubar=1,resizable=1,width=800,height=650");
if (popupWindow !== null) {
popupWindow.focus();
var inst = this;
setTimeout(function () {
inst.syncadmininterfacestatic();
history.pushState({}, '', '#chatlist');
document.location.hash = '#chatlist';
}, 1000);
ee.emitEvent('chatStartOpenWindow', [chat_id]);
}
};
this.setCloseWindowOnEvent = function (value) {
this.closeWindowOnChatCloseDelete = value;
};
this.zoomImage = function (e) {
lhc.revealModal({ 'url': e.src + '?modal=true' })
}
}
function chatMapLoaded() {
if (lhinst.queue_render.length > 0) {
lhinst.gmaps_loaded = true;
var i = lhinst.queue_render.pop();
var myLatLng = { lat: i.lat, lng: i.lon };
var map = new google.maps.Map(document.getElementById('msg-location-' + i.id), {
zoom: 13,
center: myLatLng
});
var marker = new google.maps.Marker({
position: myLatLng,
map: map,
title: i.lat + "," + i.lon
});
if (lhinst.queue_render.length > 0) {
chatMapLoaded();
}
}
}
var lhinst = new lh();
lhinst.playPreloadSound();
function preloadSound() {
lhinst.playPreloadSound();
jQuery(document).off("click", preloadSound);
jQuery(document).off("touchstart", preloadSound);
}
jQuery(document).on("click", preloadSound);
jQuery(document).on("touchstart", preloadSound);
jQuery(document).on("click", function () {
lhinst.hidePopover();
});
function gMapsCallback() {
lhinst.gmaps_loaded = true;
var $mapCanvas = $('#map_canvas');
var map = new google.maps.Map($mapCanvas[0], {
zoom: GeoLocationData.zoom,
center: new google.maps.LatLng(GeoLocationData.lat, GeoLocationData.lng),
mapTypeId: google.maps.MapTypeId.ROADMAP,
disableDefaultUI: true,
options: {
zoomControl: true,
scrollwheel: true,
streetViewControl: true
}
});
var locationSet = false;
var processing = false;
var pendingProcess = false;
var pendingProcessTimeout = false;
google.maps.event.addListener(map, 'idle', showMarkers);
var mapTabSection = $('#map-activator');
function showMarkers() {
if (processing == false) {
if (mapTabSection.hasClass('active')) {
processing = true;
$.ajax({
url: WWW_DIR_JAVASCRIPT + 'chat/jsononlineusers' + (parseInt($('#id_department_map_id').val()) > 0 ? '/(department)/' + parseInt($('#id_department_map_id').val()) : '') + (parseInt($('#maxRows').val()) > 0 ? '/(maxrows)/' + parseInt($('#maxRows').val()) : '') + (parseInt($('#userTimeout').val()) > 0 ? '/(timeout)/' + parseInt($('#userTimeout').val()) : ''),
dataType: "json",
error: function () {
clearTimeout(pendingProcessTimeout);
pendingProcessTimeout = setTimeout(function () {
showMarkers();
}, 10000);
},
success: function (response) {
bindMarkers(response);
processing = false;
clearTimeout(pendingProcessTimeout);
if (pendingProcess == true) {
pendingProcess = false;
showMarkers();
} else {
pendingProcessTimeout = setTimeout(function () {
showMarkers();
}, 10000);
}
}
});
} else {
pendingProcessTimeout = setTimeout(function () {
showMarkers();
}, 10000);
}
} else {
pendingProcess = true;
}
};
var markers = [];
var markersObjects = [];
var infoWindow = new google.maps.InfoWindow({ content: 'Loading...' });
function bindMarkers(mapData) {
$(mapData.result).each(function (i, e) {
if ($.inArray(e.Id, markers) == -1) {
var latLng = new google.maps.LatLng(e.Latitude, e.Longitude);
var marker = new google.maps.Marker({ position: latLng, icon: e.icon, map: map });
google.maps.event.addListener(marker, 'click', function () {
lhc.revealModal({ 'url': WWW_DIR_JAVASCRIPT + 'chat/getonlineuserinfo/' + e.Id })
});
marker.setVisible(true);
marker.setAnimation(google.maps.Animation.DROP);
markersObjects[e.Id] = marker;
markers.push(e.Id);
clearTimeout(markersObjects[e.Id].timeOutMarker);
markersObjects[e.Id].timeOutMarker = setTimeout(function () {
markers.splice($.inArray(e.Id, markers), 1);
google.maps.event.clearInstanceListeners(markersObjects[e.Id]);
markersObjects[e.Id].setMap(null);
markersObjects[e.Id] = null;
}, parseInt($('#markerTimeout option:selected').val()) * 1000);
} else {
markersObjects[e.Id].setIcon(e.icon);
clearTimeout(markersObjects[e.Id].timeOutMarker);
markersObjects[e.Id].timeOutMarker = setTimeout(function () {
markers.splice($.inArray(e.Id, markers), 1);
google.maps.event.clearInstanceListeners(markersObjects[e.Id]);
markersObjects[e.Id].setMap(null);
markersObjects[e.Id] = null;
}, parseInt($('#markerTimeout option:selected').val()) * 1000);
}
});
};
$('#id_department_map_id').change(function () {
showMarkers();
lhinst.changeUserSettingsIndifferent('omap_depid', $(this).val());
});
$('#markerTimeout').change(function () {
showMarkers();
lhinst.changeUserSettingsIndifferent('omap_mtimeout', $(this).val());
});
$('#map-activator').click(function () {
setTimeout(function () {
google.maps.event.trigger(map, 'resize');
if (locationSet == false) {
locationSet = true;
map.setCenter(new google.maps.LatLng(GeoLocationData.lat, GeoLocationData.lng));
}
}, 500);
showMarkers();
});
};
var focused = true;
window.onfocus = window.onblur = function (e) {
focused = (e || event).type === "focus";
lhinst.focusChanged(focused);
};
window.lhcSelector = null;
$(document).ready(function () {
lhinst.protectCSFR();
})
function chatsyncadmin() {
lhinst.syncadmincall();
}
} catch (e) {
if (lhcError) lhcError.log(e.message, "lh.js", e.lineNumber || e.line, e.stack); else throw Error("lhc : " + e.message);
}
function chatsyncuser(){lhinst.syncusercall()}function chatsyncuserpending(){lhinst.chatsyncuserpending()}lhinst.addmsgurluser="chat/addmsguser/",lhinst.addmsgurluserchatbox="chatbox/addmsguser/",lhinst.syncuser="chat/syncuser/",lhinst.userclosechaturl="chat/userclosechat/",lhinst.checkchatstatus="chat/checkchatstatus/",lhinst.checkChatStatusTimeout=null,lhinst.addmsguserchatbox=function(e){var t=!1,s={msg:$("#CSChatMessage").val(),nick:$("#CSChatNick").val()},i=1==this.isWidgetMode?"/(mode)/widget":"";$("#CSChatMessage").val("");var a=this;$.postJSON(this.wwwDir+this.addmsgurluserchatbox+this.chat_id+"/"+this.hash+i+this.appendSyncArgument,s,(function(e){"f"==e.error?(LHCCallbacks.addmsguserchatbox&&LHCCallbacks.addmsguserchatbox(a,{chat_id:a.chat_id,data:e}),a.syncusercall()):alert(e.or)})),t!=$("#CSChatNick").val()&&window.postMessage&&parent&&(parent.postMessage("lhc_chb:nick:"+$("#CSChatNick").val(),"*"),t=$("#CSChatNick").val())},lhinst.updateMessageRow=function(e){var t=1==this.isWidgetMode?"/(mode)/widget":"";$.getJSON(this.wwwDir+"chat/getmessage/"+this.chat_id+"/"+this.hash+"/"+e+t,(function(t){"f"==t.error&&($("#msg-"+e).replaceWith(t.msg),$("#msg-"+e).addClass("bg-success"),setTimeout((function(){$("#msg-"+e).removeClass("bg-success")}),2e3))}))},lhinst.addmsguser=function(e){LHCCallbacks.addmsguserbefore&&LHCCallbacks.addmsguserbefore(this);var t=$("#CSChatMessage"),s={msg:t.val()},i=1==this.isWidgetMode?"/(mode)/widget":"";t.val("");var a=this;$("#lhc-mic-icon").length>0&&($("#lhc-send-icon").hide(),$("#lhc-mic-icon").show(),$("#voice-control-message").hide());try{ee.emitEvent("messageSend",[{chat_id:this.chat_id,hash:this.hash,msg:s.msg}]),sessionStorage&&sessionStorage.setItem("lhc_ttxt","")}catch(e){}if(t.hasClass("edit-mode"))s.msgid=t.attr("data-msgid"),$.postJSON(this.wwwDir+"chat/updatemsguser/"+this.chat_id+"/"+this.hash+i,s,(function(e){if("f"==e.error)return t.removeClass("edit-mode"),t.removeAttr("data-msgid"),$("#msg-"+s.msgid).replaceWith(e.msg),!0}));else{var n=$("#messagesBlock");n.append('<div class="message-row response pending-storage"><div class="msg-body">'+$("<div>").text(s.msg).html()+"</div></div>"),n.scrollTop(n.prop("scrollHeight")),0==this.addingUserMessage&&0==this.addUserMessageQueue.length?(this.addingUserMessage=!0,$.postJSON(this.wwwDir+this.addmsgurluser+this.chat_id+"/"+this.hash+i,s,(function(e){if("f"==e.error)LHCCallbacks.addmsguser&&LHCCallbacks.addmsguser(a,e),a.syncusercall();else{$(".pending-storage").remove(),$("#CSChatMessage").val(s.msg);var t=$("#id-operator-typing");t.html(e.r),t.css("visibility","visible"),setTimeout((function(){0==a.operatorTyping&&$("#id-operator-typing").css("visibility","hidden")}),3e3)}a.addingUserMessage=!1})).fail((function(e){$("#CSChatMessage").val(t.val()+" "+s.msg);var i=$("#id-operator-typing");i.html("You have weak internet connection or the server has problems. Try to send the message again."),i.css("visibility","visible"),setTimeout((function(){0==a.operatorTyping&&$("#id-operator-typing").html("").css("visibility","hidden")}),5e3),$(".pending-storage").remove(),a.addingUserMessage=!1,a.addUserMessageQueue.length>0&&a.addDelayedMessage()}))):(this.addUserMessageQueue.push({retries:0,pdata:s,url:this.wwwDir+this.addmsgurluser+this.chat_id+"/"+this.hash+i}),clearTimeout(this.addDelayedTimeout),this.addDelayedTimeout=setTimeout((function(){a.addDelayedMessage()}),50))}},lhinst.addMessagesToStore=function(e){for(var t=1==this.isWidgetMode?"/(mode)/widget":"",s=e.length,i=0;i<s;i++)this.addUserMessageQueue.push({retries:0,pdata:{msg:e[i]},url:this.wwwDir+this.addmsgurluser+this.chat_id+"/"+this.hash+t});this.addDelayedMessage()},lhinst.addDelayedMessage=function(){var e=this;if(0==this.addingUserMessage){if(this.addUserMessageQueue.length>0){var t=this.addUserMessageQueue.shift();this.addingUserMessage=!0;var s=[];s.push(t.pdata.msg);for(var i=this.addUserMessageQueue.length,a=0;a<i;a++)s.push(this.addUserMessageQueue[a].pdata.msg);this.addUserMessageQueue=[],$.postJSON(t.url,{msg:s.join("[[msgitm]]")},(function(t){"f"==t.error&&(LHCCallbacks.addmsguser&&LHCCallbacks.addmsguser(e,t),e.syncusercall()),e.addingUserMessage=!1,e.addUserMessageQueue.length>0&&(clearTimeout(e.addDelayedTimeout),e.addDelayedMessage())})).fail((function(){e.addingUserMessage=!1}))}}else clearTimeout(this.addDelayedTimeout),this.addDelayedTimeout=setTimeout((function(){e.addDelayedMessage()}),50)},lhinst.switchToOfflineForm=function(){var e=$("#form-start-chat");return e.attr("action",$("#form-start-chat").attr("action")+"/(switchform)/true/(offline)/true/(leaveamessage)/true/(department)/"+$("#id_DepartamentID").val()),e.submit(),!1},lhinst.disableChatSoundUser=function(e){return"volume_off"==e.find("> i").text()?(confLH.new_message_sound_user_enabled=1,e.find("> i").text("volume_up")):(confLH.new_message_sound_user_enabled=0,e.find("> i").text("volume_off")),window.postMessage&&parent&&("volume_off"==e.find("> i").text()?parent.postMessage("lhc_ch:s:0","*"):parent.postMessage("lhc_ch:s:1","*")),!1},lhinst.prestartChat=function(e,t){if(0==t.find(".form-protected").length){if(1!=t.attr("lhc-captcha-submitted"))t.attr("lhc-captcha-submitted",1),t.find('input[type="submit"]').attr("disabled","disabled"),$.getJSON(this.wwwDir+"captcha/captchastring/form/"+e,(function(s){t.append('<input type="hidden" value="'+e+'" name="captcha_'+s.result+'" /><input type="hidden" value="'+e+'" name="tscaptcha" /><input type="hidden" class="form-protected" value="1" />'),t.submit()})),1==(s=1==t.attr("key-up-started"))&&(jQuery("<div/>",{class:"message-row response",text:$("#id_Question").val()}).appendTo("#messagesBlock").prepend('<span class="usr-tit vis-tit">'+visitorTitle+"</span>"),$("#messagesBlock").scrollTop($("#messagesBlock").prop("scrollHeight")),this.pendingMessagesToStore.push($("#id_Question").val()),$("#id_Question").val(""));else $("#messagesBlock").length>0&&(jQuery("<div/>",{class:"message-row response",text:$("#id_Question").val()}).appendTo("#messagesBlock").prepend('<span class="usr-tit vis-tit">'+visitorTitle+"</span>"),$("#messagesBlock").scrollTop($("#messagesBlock").prop("scrollHeight"))),this.pendingMessagesToStore.push($("#id_Question").val()),$("#id_Question").val("");return!1}if(1==t.find("#hasFormExtraField").length)return!0;if(1!=t.attr("lhc-form-submitted")){t.attr("lhc-form-submitted",1);var s,i=this;1==(s=1==t.attr("key-up-started"))&&t.append('<input type="hidden" value="1" name="keyUpStarted" />'),$.post(t.attr("action"),t.serialize(),(function(e){var t=$("#id_Question").val();try{sessionStorage&&sessionStorage.setItem("lhc_ttxt",t)}catch(e){}$("head > script");var s=$("head"),a=[];$("head > script").each((function(){var e=$(this);void 0!==e.attr("src")&&a.push(e.attr("src"))})),$("<div>").html(e).find("> script").each((function(){var e=$(this);void 0===e.attr("src")?s.append(e):-1==a.indexOf(e.attr("src"))&&s.append('<script src="'+e.attr("src")+'"><\/script>')})),paramsDocument="<script>lhinst.addMessagesToStore("+JSON.stringify(i.pendingMessagesToStore)+")<\/script>",$("#widget-layout").html($("<div>").html(e).find("#widget-layout").html()),$("#widget-layout-js").html($("<div>").html(e).find("#widget-layout-js").html()+paramsDocument)})),0==s&&$("#id_Question").val("")}else $("#messagesBlock").length>0&&(jQuery("<div/>",{class:"message-row response",text:$("#id_Question").val()}).appendTo("#messagesBlock").prepend('<span class="usr-tit vis-tit">'+visitorTitle+"</span>"),$("#messagesBlock").scrollTop($("#messagesBlock").prop("scrollHeight"))),this.pendingMessagesToStore.push($("#id_Question").val()),$("#id_Question").val("");return!1},lhinst.addCaptcha=function(e,t){return 0!=t.find(".form-protected").length||(t.find('input[type="submit"]').attr("disabled","disabled"),$.getJSON(this.wwwDir+"captcha/captchastring/form/"+e,(function(s){t.append('<input type="hidden" value="'+e+'" name="captcha_'+s.result+'" /><input type="hidden" value="'+e+'" name="tscaptcha" /><input type="hidden" class="form-protected" value="1" />'),t.submit()})),!1)},lhinst.addCaptchaSubmit=function(e,t){return 0==t.find(".form-protected").length&&(t.find('input[type="submit"]').attr("disabled","disabled"),t.find("#ChatSendButtonContainer").remove(),t.find("#id_Question").attr("readonly","readonly"),"undefined"!=typeof formSubmitted&&(formSubmitted=!0),$.getJSON(this.wwwDir+"captcha/captchastring/form/"+e,(function(s){if(t.append('<input type="hidden" value="'+e+'" name="captcha_'+s.result+'" /><input type="hidden" value="'+e+'" name="tscaptcha" /><input type="hidden" class="form-protected" value="1" />'),window.FormData)try{var i=new FormData(t[0]),a=new XMLHttpRequest;a.addEventListener("readystatechange",(function(e){var t,s;try{s=e.target.readyState,e.target.responseText,t=e.target.status}catch(e){return}4==s&&"200"==t&&e.target.responseText&&(-1==a.getResponseHeader("Content-Type").indexOf("application/json")?$("#widget-content-body").html(e.target.responseText):location.replace(jQuery.parseJSON(e.target.responseText).location))}),!1);var n=t.attr("action");""!=n?a.open("POST",n+"/(ajaxmode)/true",!0):a.open("POST",document.location+"&ajaxmode=true",!0),a.send(i)}catch(e){return!1}else t.submit()})),!1)},lhinst.addFileUserUploadOnline=function(e,t){var s=this;$("#fileuploadonline").fileupload({url:this.wwwDir+"file/uploadfileonline/"+e.online_user_vid,dataType:"json",add:function(t,s){var i=[],a=e.ft_us;a.test(s.originalFiles[0].type)||a.test(s.originalFiles[0].name)||i.push(e.ft_msg),s.originalFiles[0].size>e.fs&&i.push(e.fs_msg),i.length>0?alert(i.join("\n")):s.submit()},done:function(i,a){s.updateOnlineFilesUser(e.online_user_vid),t&&t(e.online_user_vid)},progressall:function(e,t){var s=parseInt(t.loaded/t.total*100,10);$("#upload-status-user-online").html(s+"%")}}).prop("disabled",!$.support.fileInput).parent().addClass($.support.fileInput?void 0:"disabled")},lhinst.addFileUploadOnlineUser=function(e,t){var s=this;$("#fileupload-online-user-"+e.online_user_id).fileupload({url:this.wwwDir+"file/uploadfileadminonlineuser/"+e.online_user_id,dataType:"json",add:function(t,s){var i=[],a=e.ft_op;a.test(s.originalFiles[0].type)||a.test(s.originalFiles[0].name)||i.push(e.ft_msg),s.originalFiles[0].size>e.fs&&i.push(e.fs_msg),i.length>0?alert(i.join("\n")):s.submit()},done:function(i,a){t&&t(e.online_user_id),s.updateOnlineFiles(e.online_user_id)},dropZone:$("#drop-zone-online-user-"+e.online_user_id),progressall:function(t,s){var i=parseInt(s.loaded/s.total*100,10);$("#upload-status-admin-"+e.online_user_id).html(i+"%")}}).prop("disabled",!$.support.fileInput).parent().addClass($.support.fileInput?void 0:"disabled")},lhinst.eNick=function(){lhc.revealModal({url:WWW_DIR_JAVASCRIPT+"chat/editnick/"+this.chat_id+"/"+this.hash})},lhinst.enableVisitorEditor=function(){$("#ChatMessageContainer").removeClass("hide"),$("#CSChatMessage").focus()},lhinst.disableVisitorEditor=function(){$("#ChatMessageContainer").addClass("hide")},lhinst.buttonClicked=function(e,t,s,i){null==s.attr("data-no-change")&&(s.attr("disabled","disabled"),s.prepend('<i class="material-icons lhc-spin">loop</i>'));var a=$("#messagesBlock"),n=a.prop("scrollHeight");a.scrollTop(n),this.syncroRequestSend=!0,clearTimeout(this.userTimeout),$.get(this.wwwDir+"genericbot/buttonclicked/"+this.chat_id+"/"+this.hash,{payload:e,id:t,processed:void 0===i||0==i},(function(e){void 0!==i&&!1!==i||$(".meta-message-"+t).remove();var s=a.prop("scrollHeight");a.scrollTop(s),lhinst.forceBottomScroll=!0,lhinst.syncroRequestSend=!1,lhinst.enableVisitorEditor(),lhinst.syncusercall()})).fail((function(){lhinst.syncroRequestSend=!1,lhinst.enableVisitorEditor(),lhinst.syncusercall()})),lhinst.focusUserText()},lhinst.editGenericStep=function(e,t){var s=$("#messagesBlock"),i=s.prop("scrollHeight");s.scrollTop(i),this.syncroRequestSend=!0,clearTimeout(this.userTimeout),$.get(this.wwwDir+"genericbot/buttonclicked/"+this.chat_id+"/"+this.hash+"/(type)/editgenericstep",{payload:e,id:t},(function(e){var t=s.prop("scrollHeight");s.scrollTop(t),lhinst.forceBottomScroll=!0,lhinst.syncroRequestSend=!1,lhinst.enableVisitorEditor(),lhinst.syncusercall()})).fail((function(){lhinst.syncroRequestSend=!1,lhinst.enableVisitorEditor(),lhinst.syncusercall()})),lhinst.focusUserText()},lhinst.updateTriggerClicked=function(e,t,s,i){null==s.attr("data-no-change")&&(s.attr("disabled","disabled"),s.prepend('<i class="material-icons lhc-spin">loop</i>'));var a=$("#messagesBlock"),n=a.prop("scrollHeight");a.scrollTop(n),this.syncroRequestSend=!0,clearTimeout(this.userTimeout),$.get(this.wwwDir+"genericbot/buttonclicked/"+this.chat_id+"/"+this.hash+"/(type)/triggerclicked",{payload:e,id:t,processed:void 0===i||0==i},(function(e){void 0!==i&&!1!==i||$(".meta-message-"+t).remove();var s=a.prop("scrollHeight");a.scrollTop(s),lhinst.forceBottomScroll=!0,lhinst.syncroRequestSend=!1,lhinst.enableVisitorEditor(),lhinst.syncusercall()})).fail((function(){lhinst.syncroRequestSend=!1,lhinst.enableVisitorEditor(),lhinst.syncusercall()})),lhinst.focusUserText()},lhinst.updateChatClicked=function(e,t,s,i){null==s.attr("data-no-change")&&(s.attr("disabled","disabled"),s.prepend('<i class="material-icons lhc-spin">loop</i>'));var a=$("#messagesBlock"),n=a.prop("scrollHeight");a.scrollTop(n),lhinst.syncroRequestSend=!0,clearTimeout(this.userTimeout),$.get(this.wwwDir+"genericbot/updatebuttonclicked/"+this.chat_id+"/"+this.hash,{payload:e,id:t,processed:void 0===i||0==i},(function(e){void 0!==i&&!1!==i||$(".meta-message-"+t).remove();var s=a.prop("scrollHeight");a.scrollTop(s),lhinst.forceBottomScroll=!0,lhinst.syncroRequestSend=!1,lhinst.enableVisitorEditor(),lhinst.syncusercall()})).fail((function(){lhinst.syncroRequestSend=!1,lhinst.enableVisitorEditor(),lhinst.syncusercall()})),lhinst.focusUserText()},lhinst.dropdownClicked=function(e,t){null==t.attr("data-no-change")&&(t.attr("disabled","disabled"),t.prepend('<i class="material-icons lhc-spin">loop</i>'));var s=$("#messagesBlock"),i=s.prop("scrollHeight");s.scrollTop(i),""!=$("#generic_list-"+e).val()?(this.syncroRequestSend=!0,clearTimeout(this.userTimeout),$.get(this.wwwDir+"genericbot/buttonclicked/"+this.chat_id+"/"+this.hash+"/(type)/valueclicked",{payload:$("#id_generic_list-"+e).val(),id:e},(function(t){$(".meta-message-"+e).remove();var i=s.prop("scrollHeight");s.scrollTop(i),lhinst.forceBottomScroll=!0,lhinst.syncroRequestSend=!1,lhinst.enableVisitorEditor(),lhinst.syncusercall()})).fail((function(){lhinst.syncroRequestSend=!1,lhinst.enableVisitorEditor(),lhinst.syncusercall()})),lhinst.focusUserText()):alert("Please choose!")},lhinst.focusUserText=function(){$("#CSChatMessage").focus()},lhinst.unhideDelayed=function(e){var t=$("#messagesBlock > #msg-"+e);t.nextUntil(".meta-hider").removeClass("hide"),t.remove();var s=$("#messagesBlock"),i=s.prop("scrollHeight");if(s.find(".meta-auto-hide").hide(),s.find(".message-row").last().find(".meta-auto-hide").show(),i=s.prop("scrollHeight"),s.find(".pending-storage").remove(),s.scrollTop(i+2e3),this.delayQueue.length>0){var a=lhinst.delayQueue.pop();setTimeout((function(){lhinst.unhideDelayed(a.id)}),1e3*a.delay),$("#msg-"+a.id).removeClass("hide"),$("#msg-"+a.id+" .msg-body").removeClass("hide")}else lhinst.delayed=!1},lhinst.chatsyncuserpending=function(){var e=1==this.isWidgetMode?"/(mode)/widget":"",t=null!==this.theme?"/(theme)/"+this.theme:"";clearTimeout(this.checkChatStatusTimeout);var s=this;$.getJSON(this.wwwDir+this.checkchatstatus+this.chat_id+"/"+this.hash+e+t,{},(function(e){ee.emitEvent("checkChatStatus",[s.chat_id,e]),s.chatStatus=e.status,"false"==e.error&&("false"==e.activated?("false"!=e.result&&$("#status-chat").html(e.result),""!=e.ru&&document.location.replace(e.ru),s.checkChatStatusTimeout=setTimeout(chatsyncuserpending,confLH.chat_message_sinterval)):($("#status-chat").html(e.result),e.closed&&1==e.closed&&(ee.emitEvent("chatClosedCheckStatus",[s.chat_id]),s.isWidgetMode&&"undefined"!=typeof parent&&window.location!==window.parent.location?parent.postMessage("lhc_chat_closed","*"):s.chatClosed())))})).fail((function(){setTimeout(chatsyncuserpending,confLH.chat_message_sinterval)}))},lhinst.setTheme=function(e){this.theme=e},lhinst.setSurvey=function(e){this.survey=e},lhinst.voteAction=function(e){var t=this.chat_id;$.postJSON(this.wwwDir+"chat/voteaction/"+this.chat_id+"/"+this.hash+"/"+e.attr("data-id"),{},(function(e){"false"==e.error&&(LHCCallbacks.uservoted&&LHCCallbacks.uservoted(t),0==e.status?($(".up-vote-action").removeClass("up-voted"),$(".down-vote-action").removeClass("down-voted")):1==e.status?($(".up-vote-action").addClass("up-voted"),$(".down-vote-action").removeClass("down-voted")):2==e.status&&($(".up-vote-action").removeClass("up-voted"),$(".down-vote-action").addClass("down-voted")))}))},lhinst.sendemail=function(){$.postJSON(this.wwwDir+"chat/sendchat/"+this.chat_id+"/"+this.hash,{csfr_token:confLH.csrf_token,email:$('input[name="UserEmail"]').val()},(function(e){"false"==e.error?$("#myModal").modal("hide"):($("#user-action .alert-box").remove(),$("#user-action").prepend(e.result))}))},lhinst.closeWindow=function(){null!==this.survey&&0==this.surveyShowed?(this.surveyShowed=!0,this.chatClosed()):(window.open("","_self",""),window.close(),parent.postMessage("lhc_chat_closed_explicit","*"))},lhinst.setLastUserMessageID=function(e){this.last_message_id=e},lhinst.setChatID=function(e){this.chat_id=e},lhinst.setCloseWindowOnEvent=function(e){this.closeWindowOnChatCloseDelete=e},lhinst.setWidgetMode=function(e){this.isWidgetMode=e},lhinst.setEmbedMode=function(e){this.isEmbedMode=e},lhinst.setSyncUserURL=function(e){this.syncuser=e},lhinst.editPreviousUser=function(){var e=$("#CSChatMessage");""==e.val()&&$.getJSON(this.wwwDir+"chat/editprevioususer/"+this.chat_id+"/"+this.hash,(function(t){"f"==t.error&&(e.val(t.msg),e.attr("data-msgid",t.id),e.addClass("edit-mode"),$("#msg-"+t.id).addClass("edit-mode"),LHCCallbacks.editPreviousUser&&LHCCallbacks.editPreviousUser(t))}))},lhinst.addFileUserUpload=function(e){$("#fileupload").fileupload({url:this.wwwDir+"file/uploadfile/"+e.chat_id+"/"+e.hash,dataType:"json",add:function(t,s){var i=[],a=e.ft_us;a.test(s.originalFiles[0].type)||a.test(s.originalFiles[0].name)||i.push(e.ft_msg),s.originalFiles[0].size>e.fs&&i.push(e.fs_msg),i.length>0?alert(i.join("\n")):s.submit()},done:function(t,s){var i=s.response();null!=i&&null!=i.result&&"true"==i.result.error&&null!=i.result.error_msg&&alert(i.result.error_msg),LHCCallbacks.addFileUserUpload&&LHCCallbacks.addFileUserUpload(e.chat_id)},progressall:function(e,t){var s=parseInt(t.loaded/t.total*100,10);$("#id-operator-typing").css("visibility","visible"),$("#id-operator-typing").html(s+"%")}}).prop("disabled",!$.support.fileInput).parent().addClass($.support.fileInput?void 0:"disabled")},lhinst.setChatHash=function(e){this.hash=e},lhinst.updateUserSyncInterface=function(e,t){try{if("false"==t.error)if("true"!=t.blocked){if("false"!=t.result&&"true"==t.status){var s=$("#messagesBlock"),i=s.prop("scrollHeight"),a=Math.abs(i-s.prop("scrollTop")-s.prop("clientHeight"));i=s.prop("scrollHeight"),s.find(".pending-storage").remove(),s.append(t.result),s.find(".meta-auto-hide").hide(),s.find(".message-row").last().find(".meta-auto-hide").show(),(a<20||1==e.forceBottomScroll)&&(e.forceBottomScroll=!1,s.scrollTop(i+2e3)),1==confLH.new_message_sound_user_enabled&&"false"==t.uw&&e.playNewMessageSound(),e.last_message_id>0&&($("#msg-"+e.last_message_id).attr("data-op-id")==t.msop&&$("#msg-"+e.last_message_id+" > .usr-tit").text()===$("#msg-"+t.message_id+" > .usr-tit").text()||$("#msg-"+e.last_message_id).next().addClass("operator-changes")),e.last_message_id=t.message_id,"false"==t.uw&&e.isWidgetMode&&"undefined"!=typeof parent&&parent.postMessage("lhc_newopmsg","*")}else"true"!=t.status&&$("#status-chat").html(t.status);if(e.userTimeout=setTimeout(chatsyncuser,confLH.chat_message_sinterval),"t"==t.cs&&e.chatsyncuserpending(),""!=t.ott&&"f"!=t.ott){var n=$("#id-operator-typing");n.text(t.ott),n.css("visibility","visible"),e.operatorTyping=!0}else"f"==t.ott&&(e.operatorTyping=!1,$("#id-operator-typing").css("visibility","hidden"));""!=t.op&&e.executeRemoteCommands(t.op)}else $("#status-chat").html(t.status),$("#ChatMessageContainer").remove(),$("#ChatSendButtonContainer").remove(),$("#id-operator-typing").css("visibility","hidden"),e.operatorTyping=!1,void 0!==t.op&&""!=t.op&&e.executeRemoteCommands(t.op),t.closed&&1==t.closed&&(ee.emitEvent("chatClosedSyncUser",[e.chat_id]),e.isWidgetMode&&"undefined"!=typeof parent&&window.location!==window.parent.location?parent.postMessage("lhc_chat_closed"+(void 0!==t.closed_arg?":"+t.closed_arg:""),"*"):(void 0!==t.closed_arg&&e.parseCloseArgs(t.closed_arg.split(":")),e.chatClosed()))}catch(t){e.userTimeout=setTimeout(chatsyncuser,confLH.chat_message_sinterval)}e.syncroRequestSend=!1},lhinst.parseCloseArgs=function(e){var t=e.length/2;for(i=0;i<t;i++){var s=e[2*i],a=e[2*i+1];"survey_id"==s&&(this.survey=a)}},lhinst.chatClosed=function(){if(null!==this.survey){var e=1==this.isWidgetMode?"/(mode)/widget":"",t=1==this.operatorTyping?"/(ot)/t":"",s=null!==this.theme?"/(theme)/"+this.theme:"",i=1==this.isEmbedMode?"/(modeembed)/embed":"",a=1==this.isWidgetMode?"fillwidget":"fill",n=1==this.explicitClose?"/(eclose)/t":"";return document.location.replace(this.wwwDir+"survey/"+a+"/(survey)/"+this.survey+"/(chatid)/"+this.chat_id+"/(hash)/"+this.hash+e+t+s+i+n),!0}return!1},lhinst.syncusercall=function(){var e=this;if(0==this.syncroRequestSend){clearTimeout(this.userTimeout),this.syncroRequestSend=!0;var t=1==this.isWidgetMode?"/(mode)/widget":"",s=1==this.operatorTyping?"/(ot)/t":"",i=null!==this.theme?"/(theme)/"+this.theme:"",a=1==this.isEmbedMode?"/(modeembed)/embed":"";$.getJSON(this.wwwDir+this.syncuser+this.chat_id+"/"+this.last_message_id+"/"+this.hash+t+s+i+a,{},(function(t){e.updateUserSyncInterface(e,t),LHCCallbacks.syncusercall&&LHCCallbacks.syncusercall(e,t),ee.emitEvent("syncUserCall",[e,t])})).fail((function(){e.syncroRequestSend=!1,e.userTimeout=setTimeout(chatsyncuser,confLH.chat_message_sinterval)}))}},lhinst.scheduleSync=function(){this.syncroRequestSend=!1,clearTimeout(this.userTimeout),this.userTimeout=setTimeout(chatsyncuser,confLH.chat_message_sinterval)},lhinst.executeRemoteCommands=function(operations){var inst=this;$.each(operations,(function(i,item){if(-1!=item.indexOf("lhinst."))try{eval(item)}catch(e){console.log(e)}else if(-1!=item.indexOf("lhc_ui_refresh")){var option=item.split(":")[1];1==option?lhinst.enableFileUpload():lhinst.disableFileUpload()}else inst.isWidgetMode?parent.postMessage(item,"*"):window.opener&&window.opener.postMessage(item,"*")}))},lhinst.disableFileUpload=function(){$("#fileupload").fileupload("destroy"),$("#ChatMessageContainer .dropdown-menu .flex-row .file-uploader").remove()},lhinst.startChatNewWindow=function(e,t){var s=window.open(this.wwwDir+"chat/single/"+e,"chatwindow-chat-id-"+e,"menubar=1,resizable=1,width=800,height=650");if(null!==s){s.focus();var i=this;setTimeout((function(){i.syncadmininterfacestatic()}),1e3),ee.emitEvent("chatStartOpenWindow",[e])}},lhinst.userclosedchat=function(){LHCCallbacks.userleftchatNotification&&LHCCallbacks.userleftchatNotification(this.chat_id),$.ajax({type:"GET",url:this.wwwDir+this.userclosechaturl+this.chat_id+"/"+this.hash,cache:!1})},lhinst.userclosedchatembed=function(){window.postMessage&&"undefined"!=typeof parent&&window.location!==window.parent.location?parent.postMessage("lhc_chat_closed_explicit","*"):0==this.chatClosed()&&window.close()},lhinst.continueChatFromSurvey=function(e){return this.isWidgetMode&&"undefined"!=typeof parent&&window.location!==window.parent.location?$.postJSON(this.wwwDir+"survey/backtochat/"+this.chat_id+"/"+this.hash+"/"+e,(function(e){e.closed?lhinst.userclosedchatembed():parent.postMessage("lhc_continue_chat","*")})):this.chatClosed(),!1},lhinst.explicitChatCloseByUser=function(){return this.explicitClose=!0,ee.emitEvent("endedChat",[]),this.isWidgetMode&&"undefined"!=typeof parent&&window.location!==window.parent.location?parent.postMessage("lhc_chat_closed_explicit","*"):0==this.chatClosed()&&window.close(),!1},lhinst.restoreWidget=function(e){window.postMessage&&window.opener&&(window.opener.postMessage("lhc_ch:hash:"+e,"*"),window.opener.postMessage("lhc_ch:hash_resume:"+e,"*"),window.opener.postMessage("lhc_open_restore","*"),window.close())},lhinst.userclosedchatandbrowser=function(){LHCCallbacks.userleftchatNotification&&LHCCallbacks.userleftchatNotification(this.chat_id),$.get(this.wwwDir+this.userclosechaturl+this.chat_id+"/"+this.hash+"/(eclose)/t",(function(e){lhinst.closeWindow()}))},lhinst.afterUserChatInit=function(){LHCCallbacks.afterUserChatInit&&LHCCallbacks.afterUserChatInit()},lhinst.sendHTML=function(e,t){"undefined"!=typeof parent&&window.location!==window.parent.location&&parent.postMessage("lhc_html_snippet:"+e+":"+t.type+"_"+t.id,"*")},lhinst.setDelay=function(e){var t=e.id,s=e.duration,i=e.delay,a=e.untill_message;i>0&&$("#msg-"+t).addClass("hide"),1==a&&$("#msg-"+t).nextUntil("message-admin").length>0||setTimeout((function(){if(0==lhinst.delayed){if(1==a)clearInterval(lhinst.intervalPending),lhinst.intervalPending=setInterval((function(){if($("#msg-"+t).nextUntil("message-admin").length>0)lhinst.unhideDelayed(t),$("#messagesBlock > #msg-"+t).remove(),clearInterval(lhinst.intervalPending);else if(!$("#msg-"+t).hasClass("meta-hider")){$("#msg-"+t).addClass("meta-hider message-row-typing"),$("#msg-"+t).removeClass("hide"),$("#msg-"+t+" .msg-body").removeClass("hide");var e=$("#messagesBlock"),s=e.prop("scrollHeight");e.find(".meta-auto-hide").hide(),e.find(".message-row").last().find(".meta-auto-hide").show(),s=e.prop("scrollHeight"),e.find(".pending-storage").remove(),e.scrollTop(s+2e3)}}),500);else if(lhinst.delayed=!0,$("#msg-"+t).addClass("meta-hider message-row-typing").nextUntil("meta-hider").addClass("hide"),setTimeout((function(){lhinst.unhideDelayed(t)}),1e3*s),$("#msg-"+t).removeClass("hide"),$("#msg-"+t+" .msg-body").removeClass("hide"),i>0){var e=$("#messagesBlock"),n=e.prop("scrollHeight");e.find(".meta-auto-hide").hide(),e.find(".message-row").last().find(".meta-auto-hide").show(),n=e.prop("scrollHeight"),e.find(".pending-storage").remove(),e.scrollTop(n+2e3)}}else lhinst.delayQueue.push({id:t,delay:s})}),1e3*i)},lhinst.enableFileUpload=function(){$.getJSON(this.wwwDir+"file/fileoptions/"+this.chat_id+"/"+this.hash,(function(e){$("#ChatMessageContainer .dropdown-menu .flex-row").prepend(e.html),e.options.ft_us=new RegExp("(.|/)("+e.options.ft_us+")$","i"),lhinst.addFileUserUpload(e.options)}))},lhinst.chooseFile=function(){document.getElementById("fileupload")&&document.getElementById("fileupload").click()},lhinst.executeExtension=function(e,t){if(null===document.getElementById("ext-"+e)){var s=document.getElementsByTagName("head")[0],i=document.createElement("script"),a=new Date;i.setAttribute("type","text/javascript"),i.setAttribute("src",WWW_DIR_LHC_WEBPACK_ADMIN.replace("/design/defaulttheme/js/admin/dist/","")+"/extension/"+e+"/design/"+e+"theme/js/"+e+".legacy.js?v="+a.getFullYear()+a.getMonth()+a.getDate()),i.setAttribute("id","ext-"+e),s.appendChild(i),i.onreadystatechange=i.onload=function(){ee.emitEvent(e+".init",[t])}}else ee.emitEvent(e+".init",[t])},lhinst.initTypingMonitoringUser=function(e){var t=this.wwwDir,s=this;try{sessionStorage&&sessionStorage.getItem("lhc_ttxt")&&""!=sessionStorage.getItem("lhc_ttxt")&&jQuery("#CSChatMessage").val(sessionStorage.getItem("lhc_ttxt"))}catch(e){}var i=!1;""!=jQuery("#CSChatMessage").val()?($("#lhc-send-icon").show(),$("#lhc-mic-icon").hide()):$("#lhc-mic-icon").length>0&&($("#lhc-send-icon").hide(),$("#lhc-mic-icon").show(),i=!0),jQuery("#CSChatMessage").bind("keyup",(function(a){try{sessionStorage&&sessionStorage.setItem("lhc_ttxt",$(this).val())}catch(e){}var n=$(this)[0];n.style.height="5px",1==i&&(""!=$(this).val()?($("#lhc-send-icon").show(),$("#lhc-mic-icon").hide(),$("#voice-control-message").hide()):($("#lhc-send-icon").hide(),$("#lhc-mic-icon").show()));var o=n.scrollHeight+3;if(o>48&&(o+=10,n.style.overflowY=o>90?"auto":"hidden"),n.style.height=o+"px",0==s.is_typing)clearTimeout(s.typing_timeout),LHCCallbacks.initTypingMonitoringUserInform?(s.typing_timeout=setTimeout((function(){ee.emitEvent("visitorTypingStopped",[{chat_id:e,hash:s.hash}])}),3e3),ee.emitEvent("visitorTyping",[{chat_id:e,hash:s.hash,status:!0,msg:$(this).val()}])):(s.is_typing=!0,$.postJSON(t+"chat/usertyping/"+e+"/"+s.hash+"/true",{msg:$(this).val()},(function(t){s.typing_timeout=setTimeout((function(){s.typingStoppedUser(e)}),3e3),LHCCallbacks.initTypingMonitoringUser&&ee.emitEvent("initVisitorTyping",[e,!0])})).fail((function(){s.typing_timeout=setTimeout((function(){s.typingStoppedUser(e)}),3e3)})));else{clearTimeout(s.typing_timeout),s.typing_timeout=setTimeout((function(){s.typingStoppedUser(e)}),3e3);var l=$(this).val();s.currentMessageText!=l&&Math.abs(s.currentMessageText.length-l.length)>6&&(s.currentMessageText=l,LHCCallbacks.initTypingMonitoringUserInform?ee.emitEvent("visitorTyping",[{chat_id:e,hash:s.hash,status:!0,msg:$(this).val()}]):$.postJSON(t+"chat/usertyping/"+e+"/"+s.hash+"/true",{msg:l},(function(t){LHCCallbacks.initTypingMonitoringUser&&ee.emitEvent("initVisitorTyping",[e,!0])})))}}))},lhinst.typingStoppedUser=function(e){var t=this;1==t.is_typing&&(LHCCallbacks.typingStoppedUserInform?(t.is_typing=!1,ee.emitEvent("visitorTypingStopped",[{chat_id:e,hash:this.hash,status:!1}])):$.getJSON(this.wwwDir+"chat/usertyping/"+e+"/"+this.hash+"/false",{},(function(s){t.is_typing=!1,LHCCallbacks.initTypingMonitoringUser&&ee.emitEvent("initVisitorTyping",[e,!1])})).fail((function(){t.is_typing=!1})))},this.afterChatWidgetInit=function(){LHCCallbacks.afterChatWidgetInit&&LHCCallbacks.afterChatWidgetInit()};
!function(t){function e(e){if("string"==typeof e.data&&(e.data={keys:e.data}),e.data&&e.data.keys&&"string"==typeof e.data.keys){var a=e.handler,s=e.data.keys.toLowerCase().split(" ");e.handler=function(e){if(this===e.target||!(t.hotkeys.options.filterInputAcceptingElements&&t.hotkeys.textInputTypes.test(e.target.nodeName)||t.hotkeys.options.filterContentEditable&&t(e.target).attr("contenteditable")||t.hotkeys.options.filterTextInputs&&t.inArray(e.target.type,t.hotkeys.textAcceptingInputTypes)>-1)){var n="keypress"!==e.type&&t.hotkeys.specialKeys[e.which],i=String.fromCharCode(e.which).toLowerCase(),r="",o={};t.each(["alt","ctrl","shift"],function(t,a){e[a+"Key"]&&n!==a&&(r+=a+"+")}),e.metaKey&&!e.ctrlKey&&"meta"!==n&&(r+="meta+"),e.metaKey&&"meta"!==n&&r.indexOf("alt+ctrl+shift+")>-1&&(r=r.replace("alt+ctrl+shift+","hyper+")),n?o[r+n]=!0:(o[r+i]=!0,o[r+t.hotkeys.shiftNums[i]]=!0,"shift+"===r&&(o[t.hotkeys.shiftNums[i]]=!0));for(var p=0,l=s.length;l>p;p++)if(o[s[p]])return a.apply(this,arguments)}}}}t.hotkeys={version:"0.2.0",specialKeys:{8:"backspace",9:"tab",10:"return",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",59:";",61:"=",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},shiftNums:{"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"},textAcceptingInputTypes:["text","password","number","email","url","range","date","month","week","time","datetime","datetime-local","search","color","tel"],textInputTypes:/textarea|input|select/i,options:{filterInputAcceptingElements:!0,filterTextInputs:!0,filterContentEditable:!0}},t.each(["keydown","keyup","keypress"],function(){t.event.special[this]={add:e}})}(jQuery||this.jQuery||window.jQuery);
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}((function(e,t){var i=0,n=Array.prototype.slice,r=e.cleanData;e.cleanData=function(t){for(var i,n=0;null!=(i=t[n]);n++)try{e(i).triggerHandler("remove")}catch(e){}r(t)},e.widget=function(t,i,n){var r,o,s,a,l={},p=t.split(".")[0];t=t.split(".")[1],r=p+"-"+t,n||(n=i,i=e.Widget),e.expr[":"][r.toLowerCase()]=function(t){return!!e.data(t,r)},e[p]=e[p]||{},o=e[p][t],s=e[p][t]=function(e,t){if(!this._createWidget)return new s(e,t);arguments.length&&this._createWidget(e,t)},e.extend(s,o,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),(a=new i).options=e.widget.extend({},a.options),e.each(n,(function(t,n){var r,o;e.isFunction(n)?l[t]=(r=function(){return i.prototype[t].apply(this,arguments)},o=function(e){return i.prototype[t].apply(this,e)},function(){var e,t=this._super,i=this._superApply;return this._super=r,this._superApply=o,e=n.apply(this,arguments),this._super=t,this._superApply=i,e}):l[t]=n})),s.prototype=e.widget.extend(a,{widgetEventPrefix:o?a.widgetEventPrefix:t},l,{constructor:s,namespace:p,widgetName:t,widgetFullName:r}),o?(e.each(o._childConstructors,(function(t,i){var n=i.prototype;e.widget(n.namespace+"."+n.widgetName,s,i._proto)})),delete o._childConstructors):i._childConstructors.push(s),e.widget.bridge(t,s)},e.widget.extend=function(i){for(var r,o,s=n.call(arguments,1),a=0,l=s.length;a<l;a++)for(r in s[a])o=s[a][r],s[a].hasOwnProperty(r)&&o!==t&&(e.isPlainObject(o)?i[r]=e.isPlainObject(i[r])?e.widget.extend({},i[r],o):e.widget.extend({},o):i[r]=o);return i},e.widget.bridge=function(i,r){var o=r.prototype.widgetFullName||i;e.fn[i]=function(s){var a="string"==typeof s,l=n.call(arguments,1),p=this;return s=!a&&l.length?e.widget.extend.apply(null,[s].concat(l)):s,a?this.each((function(){var n,r=e.data(this,o);return r?e.isFunction(r[s])&&"_"!==s.charAt(0)?(n=r[s].apply(r,l))!==r&&n!==t?(p=n&&n.jquery?p.pushStack(n.get()):n,!1):void 0:e.error("no such method '"+s+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+s+"'")})):this.each((function(){var t=e.data(this,o);t?t.option(s||{})._init():e.data(this,o,new r(s,this))})),p}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,n){n=e(n||this.defaultElement||this)[0],this.element=e(n),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),n!==this&&(e.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===n&&this.destroy()}}),this.document=e(n.style?n.ownerDocument:n.document||n),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,n){var r,o,s,a=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(a={},r=i.split("."),i=r.shift(),r.length){for(o=a[i]=e.widget.extend({},this.options[i]),s=0;s<r.length-1;s++)o[r[s]]=o[r[s]]||{},o=o[r[s]];if(i=r.pop(),n===t)return o[i]===t?null:o[i];o[i]=n}else{if(n===t)return this.options[i]===t?null:this.options[i];a[i]=n}return this._setOptions(a),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,i,n){var r,o=this;"boolean"!=typeof t&&(n=i,i=t,t=!1),n?(i=r=e(i),this.bindings=this.bindings.add(i)):(n=i,i=this.element,r=this.widget()),e.each(n,(function(n,s){function a(){if(t||!0!==o.options.disabled&&!e(this).hasClass("ui-state-disabled"))return("string"==typeof s?o[s]:s).apply(o,arguments)}"string"!=typeof s&&(a.guid=s.guid=s.guid||a.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),p=l[1]+o.eventNamespace,u=l[2];u?r.delegate(u,p,a):i.bind(p,a)}))},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){var i=this;return setTimeout((function(){return("string"==typeof e?i[e]:e).apply(i,arguments)}),t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,n){var r,o,s=this.options[t];if(n=n||{},(i=e.Event(i)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(r in o)r in i||(i[r]=o[r]);return this.element.trigger(i,n),!(e.isFunction(s)&&!1===s.apply(this.element[0],[i].concat(n))||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},(function(t,i){e.Widget.prototype["_"+t]=function(n,r,o){"string"==typeof r&&(r={effect:r});var s,a=r?!0===r||"number"==typeof r?i:r.effect||i:t;"number"==typeof(r=r||{})&&(r={duration:r}),s=!e.isEmptyObject(r),r.complete=o,r.delay&&n.delay(r.delay),s&&e.effects&&e.effects.effect[a]?n[t](r):a!==t&&n[a]?n[a](r.duration,r.easing,o):n.queue((function(i){e(this)[t](),o&&o.call(n[0]),i()}))}}))})),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e(window.jQuery)}((function(e){"use strict";var t=0;e.ajaxTransport("iframe",(function(i){if(i.async){var n,r,o,s=i.initialIframeSrc||"javascript:false;";return{send:function(a,l){(n=e('<form style="display:none;"></form>')).attr("accept-charset",i.formAcceptCharset),o=/\?/.test(i.url)?"&":"?","DELETE"===i.type?(i.url=i.url+o+"_method=DELETE",i.type="POST"):"PUT"===i.type?(i.url=i.url+o+"_method=PUT",i.type="POST"):"PATCH"===i.type&&(i.url=i.url+o+"_method=PATCH",i.type="POST"),r=e('<iframe src="'+s+'" name="iframe-transport-'+(t+=1)+'"></iframe>').bind("load",(function(){var t,o=e.isArray(i.paramName)?i.paramName:[i.paramName];r.unbind("load").bind("load",(function(){var t;try{if(!(t=r.contents()).length||!t[0].firstChild)throw new Error}catch(e){t=void 0}l(200,"success",{iframe:t}),e('<iframe src="'+s+'"></iframe>').appendTo(n),window.setTimeout((function(){n.remove()}),0)})),n.prop("target",r.prop("name")).prop("action",i.url).prop("method",i.type),i.formData&&e.each(i.formData,(function(t,i){e('<input type="hidden"/>').prop("name",i.name).val(i.value).appendTo(n)})),i.fileInput&&i.fileInput.length&&"POST"===i.type&&(t=i.fileInput.clone(),i.fileInput.after((function(e){return t[e]})),i.paramName&&i.fileInput.each((function(t){e(this).prop("name",o[t]||i.paramName)})),n.append(i.fileInput).prop("enctype","multipart/form-data").prop("encoding","multipart/form-data")),n.submit(),t&&t.length&&i.fileInput.each((function(i,n){var r=e(t[i]);e(n).prop("name",r.prop("name")),r.replaceWith(n)}))})),n.append(r).appendTo(document.body)},abort:function(){r&&r.unbind("load").prop("src",s),n&&n.remove()}}}})),e.ajaxSetup({converters:{"iframe text":function(t){return t&&e(t[0].body).text()},"iframe json":function(t){return t&&e.parseJSON(e(t[0].body).text())},"iframe html":function(t){return t&&e(t[0].body).html()},"iframe xml":function(t){var i=t&&t[0];return i&&e.isXMLDoc(i)?i:e.parseXML(i.XMLDocument&&i.XMLDocument.xml||e(i.body).html())},"iframe script":function(t){return t&&e.globalEval(e(t[0].body).text())}}})})),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","jquery.ui.widget"],e):e(window.jQuery)}((function(e){"use strict";e.support.fileInput=!(new RegExp("(Android (1\\.[0156]|2\\.[01]))|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1\\.0|2\\.[05]|3\\.0))").test(window.navigator.userAgent)||e('<input type="file">').prop("disabled")),e.support.xhrFileUpload=!(!window.ProgressEvent||!window.FileReader),e.support.xhrFormDataFileUpload=!!window.FormData,e.support.blobSlice=window.Blob&&(Blob.prototype.slice||Blob.prototype.webkitSlice||Blob.prototype.mozSlice),e.widget("blueimp.fileupload",{options:{dropZone:e(document),pasteZone:e(document),fileInput:void 0,replaceFileInput:!0,paramName:void 0,singleFileUploads:!0,limitMultiFileUploads:void 0,sequentialUploads:!1,limitConcurrentUploads:void 0,forceIframeTransport:!1,redirect:void 0,redirectParamName:void 0,postMessage:void 0,multipart:!0,maxChunkSize:void 0,uploadedBytes:void 0,recalculateProgress:!0,progressInterval:100,bitrateInterval:500,autoUpload:!0,messages:{uploadedBytes:"Uploaded bytes exceed file size"},i18n:function(t,i){return t=this.messages[t]||t.toString(),i&&e.each(i,(function(e,i){t=t.replace("{"+e+"}",i)})),t},formData:function(e){return e.serializeArray()},add:function(t,i){if(t.isDefaultPrevented())return!1;(i.autoUpload||!1!==i.autoUpload&&e(this).fileupload("option","autoUpload"))&&i.process().done((function(){i.submit()}))},processData:!1,contentType:!1,cache:!1},_specialOptions:["fileInput","dropZone","pasteZone","multipart","forceIframeTransport"],_blobSlice:e.support.blobSlice&&function(){var e=this.slice||this.webkitSlice||this.mozSlice;return e.apply(this,arguments)},_BitrateTimer:function(){this.timestamp=Date.now?Date.now():(new Date).getTime(),this.loaded=0,this.bitrate=0,this.getBitrate=function(e,t,i){var n=e-this.timestamp;return(!this.bitrate||!i||n>i)&&(this.bitrate=(t-this.loaded)*(1e3/n)*8,this.loaded=t,this.timestamp=e),this.bitrate}},_isXHRUpload:function(t){return!t.forceIframeTransport&&(!t.multipart&&e.support.xhrFileUpload||e.support.xhrFormDataFileUpload)},_getFormData:function(t){var i;return"function"==typeof t.formData?t.formData(t.form):e.isArray(t.formData)?t.formData:"object"===e.type(t.formData)?(i=[],e.each(t.formData,(function(e,t){i.push({name:e,value:t})})),i):[]},_getTotal:function(t){var i=0;return e.each(t,(function(e,t){i+=t.size||1})),i},_initProgressObject:function(t){var i={loaded:0,total:0,bitrate:0};t._progress?e.extend(t._progress,i):t._progress=i},_initResponseObject:function(e){var t;if(e._response)for(t in e._response)e._response.hasOwnProperty(t)&&delete e._response[t];else e._response={}},_onProgress:function(t,i){if(t.lengthComputable){var n,r=Date.now?Date.now():(new Date).getTime();if(i._time&&i.progressInterval&&r-i._time<i.progressInterval&&t.loaded!==t.total)return;i._time=r,n=Math.floor(t.loaded/t.total*(i.chunkSize||i._progress.total))+(i.uploadedBytes||0),this._progress.loaded+=n-i._progress.loaded,this._progress.bitrate=this._bitrateTimer.getBitrate(r,this._progress.loaded,i.bitrateInterval),i._progress.loaded=i.loaded=n,i._progress.bitrate=i.bitrate=i._bitrateTimer.getBitrate(r,n,i.bitrateInterval),this._trigger("progress",e.Event("progress",{delegatedEvent:t}),i),this._trigger("progressall",e.Event("progressall",{delegatedEvent:t}),this._progress)}},_initProgressListener:function(t){var i=this,n=t.xhr?t.xhr():e.ajaxSettings.xhr();n.upload&&(e(n.upload).bind("progress",(function(e){var n=e.originalEvent;e.lengthComputable=n.lengthComputable,e.loaded=n.loaded,e.total=n.total,i._onProgress(e,t)})),t.xhr=function(){return n})},_isInstanceOf:function(e,t){return Object.prototype.toString.call(t)==="[object "+e+"]"},_initXHRData:function(t){var i,n=this,r=t.files[0],o=t.multipart||!e.support.xhrFileUpload,s=t.paramName[0];t.headers=e.extend({},t.headers),t.contentRange&&(t.headers["Content-Range"]=t.contentRange),o&&!t.blob&&this._isInstanceOf("File",r)||(t.headers["Content-Disposition"]='attachment; filename="'+encodeURI(r.name)+'"'),o?e.support.xhrFormDataFileUpload&&(t.postMessage?(i=this._getFormData(t),t.blob?i.push({name:s,value:t.blob}):e.each(t.files,(function(e,n){i.push({name:t.paramName[e]||s,value:n})}))):(n._isInstanceOf("FormData",t.formData)?i=t.formData:(i=new FormData,e.each(this._getFormData(t),(function(e,t){i.append(t.name,t.value)}))),t.blob?i.append(s,t.blob,r.name):e.each(t.files,(function(e,r){(n._isInstanceOf("File",r)||n._isInstanceOf("Blob",r))&&i.append(t.paramName[e]||s,r,r.name)}))),t.data=i):(t.contentType=r.type,t.data=t.blob||r),t.blob=null},_initIframeSettings:function(t){var i=e("<a></a>").prop("href",t.url).prop("host");t.dataType="iframe "+(t.dataType||""),t.formData=this._getFormData(t),t.redirect&&i&&i!==location.host&&t.formData.push({name:t.redirectParamName||"redirect",value:t.redirect})},_initDataSettings:function(e){this._isXHRUpload(e)?(this._chunkedUpload(e,!0)||(e.data||this._initXHRData(e),this._initProgressListener(e)),e.postMessage&&(e.dataType="postmessage "+(e.dataType||""))):this._initIframeSettings(e)},_getParamName:function(t){var i=e(t.fileInput),n=t.paramName;return n?e.isArray(n)||(n=[n]):(n=[],i.each((function(){for(var t=e(this),i=t.prop("name")||"files[]",r=(t.prop("files")||[1]).length;r;)n.push(i),r-=1})),n.length||(n=[i.prop("name")||"files[]"])),n},_initFormSettings:function(t){t.form&&t.form.length||(t.form=e(t.fileInput.prop("form")),t.form.length||(t.form=e(this.options.fileInput.prop("form")))),t.paramName=this._getParamName(t),t.url||(t.url=t.form.prop("action")||location.href),t.type=(t.type||"string"===e.type(t.form.prop("method"))&&t.form.prop("method")||"").toUpperCase(),"POST"!==t.type&&"PUT"!==t.type&&"PATCH"!==t.type&&(t.type="POST"),t.formAcceptCharset||(t.formAcceptCharset=t.form.attr("accept-charset"))},_getAJAXSettings:function(t){var i=e.extend({},this.options,t);return this._initFormSettings(i),this._initDataSettings(i),i},_getDeferredState:function(e){return e.state?e.state():e.isResolved()?"resolved":e.isRejected()?"rejected":"pending"},_enhancePromise:function(e){return e.success=e.done,e.error=e.fail,e.complete=e.always,e},_getXHRPromise:function(t,i,n){var r=e.Deferred(),o=r.promise();return i=i||this.options.context||o,!0===t?r.resolveWith(i,n):!1===t&&r.rejectWith(i,n),o.abort=r.promise,this._enhancePromise(o)},_addConvenienceMethods:function(t,i){var n=this,r=function(t){return e.Deferred().resolveWith(n,t).promise()};i.process=function(t,o){return(t||o)&&(i._processQueue=this._processQueue=(this._processQueue||r([this])).pipe((function(){return i.errorThrown?e.Deferred().rejectWith(n,[i]).promise():r(arguments)})).pipe(t,o)),this._processQueue||r([this])},i.submit=function(){return"pending"!==this.state()&&(i.jqXHR=this.jqXHR=!1!==n._trigger("submit",e.Event("submit",{delegatedEvent:t}),this)&&n._onSend(t,this)),this.jqXHR||n._getXHRPromise()},i.abort=function(){return this.jqXHR?this.jqXHR.abort():(this.errorThrown="abort",n._getXHRPromise())},i.state=function(){return this.jqXHR?n._getDeferredState(this.jqXHR):this._processQueue?n._getDeferredState(this._processQueue):void 0},i.progress=function(){return this._progress},i.response=function(){return this._response}},_getUploadedBytes:function(e){var t=e.getResponseHeader("Range"),i=t&&t.split("-"),n=i&&i.length>1&&parseInt(i[1],10);return n&&n+1},_chunkedUpload:function(t,i){t.uploadedBytes=t.uploadedBytes||0;var n,r,o=this,s=t.files[0],a=s.size,l=t.uploadedBytes,p=t.maxChunkSize||a,u=this._blobSlice,d=e.Deferred(),c=d.promise();return!(!(this._isXHRUpload(t)&&u&&(l||p<a))||t.data)&&(!!i||(l>=a?(s.error=t.i18n("uploadedBytes"),this._getXHRPromise(!1,t.context,[null,"error",s.error])):(r=function(){var i=e.extend({},t),c=i._progress.loaded;i.blob=u.call(s,l,l+p,s.type),i.chunkSize=i.blob.size,i.contentRange="bytes "+l+"-"+(l+i.chunkSize-1)+"/"+a,o._initXHRData(i),o._initProgressListener(i),n=(!1!==o._trigger("chunksend",null,i)&&e.ajax(i)||o._getXHRPromise(!1,i.context)).done((function(n,s,p){l=o._getUploadedBytes(p)||l+i.chunkSize,c+i.chunkSize-i._progress.loaded&&o._onProgress(e.Event("progress",{lengthComputable:!0,loaded:l-i.uploadedBytes,total:l-i.uploadedBytes}),i),t.uploadedBytes=i.uploadedBytes=l,i.result=n,i.textStatus=s,i.jqXHR=p,o._trigger("chunkdone",null,i),o._trigger("chunkalways",null,i),l<a?r():d.resolveWith(i.context,[n,s,p])})).fail((function(e,t,n){i.jqXHR=e,i.textStatus=t,i.errorThrown=n,o._trigger("chunkfail",null,i),o._trigger("chunkalways",null,i),d.rejectWith(i.context,[e,t,n])}))},this._enhancePromise(c),c.abort=function(){return n.abort()},r(),c)))},_beforeSend:function(e,t){0===this._active&&(this._trigger("start"),this._bitrateTimer=new this._BitrateTimer,this._progress.loaded=this._progress.total=0,this._progress.bitrate=0),this._initResponseObject(t),this._initProgressObject(t),t._progress.loaded=t.loaded=t.uploadedBytes||0,t._progress.total=t.total=this._getTotal(t.files)||1,t._progress.bitrate=t.bitrate=0,this._active+=1,this._progress.loaded+=t.loaded,this._progress.total+=t.total},_onDone:function(t,i,n,r){var o=r._progress.total,s=r._response;r._progress.loaded<o&&this._onProgress(e.Event("progress",{lengthComputable:!0,loaded:o,total:o}),r),s.result=r.result=t,s.textStatus=r.textStatus=i,s.jqXHR=r.jqXHR=n,this._trigger("done",null,r)},_onFail:function(e,t,i,n){var r=n._response;n.recalculateProgress&&(this._progress.loaded-=n._progress.loaded,this._progress.total-=n._progress.total),r.jqXHR=n.jqXHR=e,r.textStatus=n.textStatus=t,r.errorThrown=n.errorThrown=i,this._trigger("fail",null,n)},_onAlways:function(e,t,i,n){this._trigger("always",null,n)},_onSend:function(t,i){i.submit||this._addConvenienceMethods(t,i);var n,r,o,s,a=this,l=a._getAJAXSettings(i),p=function(){return a._sending+=1,l._bitrateTimer=new a._BitrateTimer,n=n||((r||!1===a._trigger("send",e.Event("send",{delegatedEvent:t}),l))&&a._getXHRPromise(!1,l.context,r)||a._chunkedUpload(l)||e.ajax(l)).done((function(e,t,i){a._onDone(e,t,i,l)})).fail((function(e,t,i){a._onFail(e,t,i,l)})).always((function(e,t,i){if(a._onAlways(e,t,i,l),a._sending-=1,a._active-=1,l.limitConcurrentUploads&&l.limitConcurrentUploads>a._sending)for(var n=a._slots.shift();n;){if("pending"===a._getDeferredState(n)){n.resolve();break}n=a._slots.shift()}0===a._active&&a._trigger("stop")}))};return this._beforeSend(t,l),this.options.sequentialUploads||this.options.limitConcurrentUploads&&this.options.limitConcurrentUploads<=this._sending?(this.options.limitConcurrentUploads>1?(o=e.Deferred(),this._slots.push(o),s=o.pipe(p)):(this._sequence=this._sequence.pipe(p,p),s=this._sequence),s.abort=function(){return r=[void 0,"abort","abort"],n?n.abort():(o&&o.rejectWith(l.context,r),p())},this._enhancePromise(s)):p()},_onAdd:function(t,i){var n,r,o,s,a=this,l=!0,p=e.extend({},this.options,i),u=p.limitMultiFileUploads,d=this._getParamName(p);if((p.singleFileUploads||u)&&this._isXHRUpload(p))if(!p.singleFileUploads&&u)for(o=[],n=[],s=0;s<i.files.length;s+=u)o.push(i.files.slice(s,s+u)),(r=d.slice(s,s+u)).length||(r=d),n.push(r);else n=d;else o=[i.files],n=[d];return i.originalFiles=i.files,e.each(o||i.files,(function(r,s){var p=e.extend({},i);return p.files=o?s:[s],p.paramName=n[r],a._initResponseObject(p),a._initProgressObject(p),a._addConvenienceMethods(t,p),l=a._trigger("add",e.Event("add",{delegatedEvent:t}),p)})),l},_replaceFileInput:function(t){var i=t.clone(!0);e("<form></form>").append(i)[0].reset(),t.after(i).detach(),e.cleanData(t.unbind("remove")),this.options.fileInput=this.options.fileInput.map((function(e,n){return n===t[0]?i[0]:n})),t[0]===this.element[0]&&(this.element=i)},_handleFileTreeEntry:function(t,i){var n=this,r=e.Deferred(),o=function(e){e&&!e.entry&&(e.entry=t),r.resolve([e])};return i=i||"",t.isFile?t._file?(t._file.relativePath=i,r.resolve(t._file)):t.file((function(e){e.relativePath=i,r.resolve(e)}),o):t.isDirectory?t.createReader().readEntries((function(e){n._handleFileTreeEntries(e,i+t.name+"/").done((function(e){r.resolve(e)})).fail(o)}),o):r.resolve([]),r.promise()},_handleFileTreeEntries:function(t,i){var n=this;return e.when.apply(e,e.map(t,(function(e){return n._handleFileTreeEntry(e,i)}))).pipe((function(){return Array.prototype.concat.apply([],arguments)}))},_getDroppedFiles:function(t){var i=(t=t||{}).items;return i&&i.length&&(i[0].webkitGetAsEntry||i[0].getAsEntry)?this._handleFileTreeEntries(e.map(i,(function(e){var t;return e.webkitGetAsEntry?((t=e.webkitGetAsEntry())&&(t._file=e.getAsFile()),t):e.getAsEntry()}))):e.Deferred().resolve(e.makeArray(t.files)).promise()},_getSingleFileInputFiles:function(t){var i,n,r=(t=e(t)).prop("webkitEntries")||t.prop("entries");if(r&&r.length)return this._handleFileTreeEntries(r);if((i=e.makeArray(t.prop("files"))).length)void 0===i[0].name&&i[0].fileName&&e.each(i,(function(e,t){t.name=t.fileName,t.size=t.fileSize}));else{if(!(n=t.prop("value")))return e.Deferred().resolve([]).promise();i=[{name:n.replace(/^.*\\/,"")}]}return e.Deferred().resolve(i).promise()},_getFileInputFiles:function(t){return t instanceof e&&1!==t.length?e.when.apply(e,e.map(t,this._getSingleFileInputFiles)).pipe((function(){return Array.prototype.concat.apply([],arguments)})):this._getSingleFileInputFiles(t)},_onChange:function(t){var i=this,n={fileInput:e(t.target),form:e(t.target.form)};this._getFileInputFiles(n.fileInput).always((function(r){n.files=r,i.options.replaceFileInput&&i._replaceFileInput(n.fileInput),!1!==i._trigger("change",e.Event("change",{delegatedEvent:t}),n)&&i._onAdd(t,n)}))},_onPaste:function(t){var i=t.originalEvent&&t.originalEvent.clipboardData&&t.originalEvent.clipboardData.items,n={files:[]};i&&i.length&&(e.each(i,(function(e,t){var i=t.getAsFile&&t.getAsFile();i&&n.files.push(i)})),!1!==this._trigger("paste",e.Event("paste",{delegatedEvent:t}),n)&&this._onAdd(t,n))},_onDrop:function(t){t.dataTransfer=t.originalEvent&&t.originalEvent.dataTransfer;var i=this,n=t.dataTransfer,r={};n&&n.files&&n.files.length&&(t.preventDefault(),this._getDroppedFiles(n).always((function(n){r.files=n,!1!==i._trigger("drop",e.Event("drop",{delegatedEvent:t}),r)&&i._onAdd(t,r)})))},_onDragOver:function(t){t.dataTransfer=t.originalEvent&&t.originalEvent.dataTransfer;var i=t.dataTransfer;i&&-1!==e.inArray("Files",i.types)&&!1!==this._trigger("dragover",e.Event("dragover",{delegatedEvent:t}))&&(t.preventDefault(),i.dropEffect="copy")},_initEventHandlers:function(){this._isXHRUpload(this.options)&&(this._on(this.options.dropZone,{dragover:this._onDragOver,drop:this._onDrop}),this._on(this.options.pasteZone,{paste:this._onPaste})),e.support.fileInput&&this._on(this.options.fileInput,{change:this._onChange})},_destroyEventHandlers:function(){this._off(this.options.dropZone,"dragover drop"),this._off(this.options.pasteZone,"paste"),this._off(this.options.fileInput,"change")},_setOption:function(t,i){var n=-1!==e.inArray(t,this._specialOptions);n&&this._destroyEventHandlers(),this._super(t,i),n&&(this._initSpecialOptions(),this._initEventHandlers())},_initSpecialOptions:function(){var t=this.options;void 0===t.fileInput?t.fileInput=this.element.is('input[type="file"]')?this.element:this.element.find('input[type="file"]'):t.fileInput instanceof e||(t.fileInput=e(t.fileInput)),t.dropZone instanceof e||(t.dropZone=e(t.dropZone)),t.pasteZone instanceof e||(t.pasteZone=e(t.pasteZone))},_getRegExp:function(e){var t=e.split("/"),i=t.pop();return t.shift(),new RegExp(t.join("/"),i)},_isRegExpOption:function(t,i){return"url"!==t&&"string"===e.type(i)&&/^\/.*\/[igm]{0,3}$/.test(i)},_initDataAttributes:function(){var t=this,i=this.options;e.each(e(this.element[0].cloneNode(!1)).data(),(function(e,n){t._isRegExpOption(e,n)&&(n=t._getRegExp(n)),i[e]=n}))},_create:function(){this._initDataAttributes(),this._initSpecialOptions(),this._slots=[],this._sequence=this._getXHRPromise(!0),this._sending=this._active=0,this._initProgressObject(this),this._initEventHandlers()},active:function(){return this._active},progress:function(){return this._progress},add:function(t){var i=this;t&&!this.options.disabled&&(t.fileInput&&!t.files?this._getFileInputFiles(t.fileInput).always((function(e){t.files=e,i._onAdd(null,t)})):(t.files=e.makeArray(t.files),this._onAdd(null,t)))},send:function(t){if(t&&!this.options.disabled){if(t.fileInput&&!t.files){var i,n,r=this,o=e.Deferred(),s=o.promise();return s.abort=function(){return n=!0,i?i.abort():(o.reject(null,"abort","abort"),s)},this._getFileInputFiles(t.fileInput).always((function(e){n||(e.length?(t.files=e,i=r._onSend(null,t).then((function(e,t,i){o.resolve(e,t,i)}),(function(e,t,i){o.reject(e,t,i)}))):o.reject())})),this._enhancePromise(s)}if(t.files=e.makeArray(t.files),t.files.length)return this._onSend(null,t)}return this._getXHRPromise(!1,t&&t.context)}})}));
(()=>{var e,t={},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,a),i.exports}a.m=t,a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>e+"-"+{49:"17da6e0481308a506f8c",482:"7477c143b6347b9d7192",737:"e713d3764f6d18a742c4"}[e]+".js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},a.l=(t,r,n,i)=>{if(e[t])e[t].push(r);else{var o,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==t){o=u;break}}o||(l=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.src=t),e[t]=[r];var s=(r,a)=>{o.onerror=o.onload=null,clearTimeout(v);var n=e[t];if(delete e[t],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(a))),r)return r(a)},v=setTimeout(s.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=s.bind(null,o.onerror),o.onload=s.bind(null,o.onload),l&&document.head.appendChild(o)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="/",(()=>{var e={179:0};a.f.j=(t,r)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise(((r,a)=>n=e[t]=[r,a]));r.push(n[2]=i);var o=a.p+a.u(t),l=new Error;a.l(o,(r=>{if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",l.name="ChunkLoadError",l.type=i,l.request=o,n[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,i,[o,l,c]=r,d=0;if(o.some((t=>0!==e[t]))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);c&&c(a)}for(t&&t(r);d<o.length;d++)i=o[d],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),a.p=window.WWW_DIR_LHC_WEBPACK,function(){var e=0,t=0;function r(r){!r.altKey||38!=r.which&&40!=r.which||(40==r.which?t>0&&$("#preview-item-"+t).click():e>0&&$("#preview-item-"+e).click())}a.g.lhc={previewChat:function(a,n){var i="",o="";e=0,t=0,n&&(i=void 0!==n.getAttribute("data-keyword")?n.getAttribute("data-keyword"):"",n.classList.contains("preview-list")&&($(".preview-list").removeClass("bg-current"),$(n).addClass("bg-current")),o=this.attachNavigator(a,n)),this.revealModal({url:WWW_DIR_JAVASCRIPT+"chat/previewchat/"+a+"?keyword="+(i||"")+o,showcallback:function(){document.addEventListener("keyup",r)},hidecallback:function(){document.removeEventListener("keyup",r)}})},attachNavigator:function(a,n){var i="";return void 0!==n.getAttribute("data-list-navigate")&&($(".chat-row-tr.bg-light").removeClass("bg-light"),$("#chat-row-tr-"+a).addClass("bg-light"),e=$(n).parent().parent().prevAll("tr:not(.ignore-row)").first().attr("data-chat-id"),t=$(n).parent().parent().nextAll("tr:not(.ignore-row)").first().attr("data-chat-id"),e&&(i="&prevId="+e,document.addEventListener("keyup",r)),t&&(i=i+"&nextId="+t,document.addEventListener("keyup",r))),i},previewChatArchive:function(a,n,i){var o="",l="";e=0,t=0,i&&(o=void 0!==i.getAttribute("data-keyword")?i.getAttribute("data-keyword"):"",i.classList.contains("preview-list")&&($(".preview-list").removeClass("bg-current"),$(i).addClass("bg-current")),l=this.attachNavigator(n,i)),this.revealModal({url:WWW_DIR_JAVASCRIPT+"chatarchive/previewchat/"+a+"/"+n+"?keyword="+(o||"")+l,showcallback:function(){document.addEventListener("keyup",r)},hidecallback:function(){document.removeEventListener("keyup",r)}})},revealModal:function(e){a.e(737).then(function(){var t=a(737);t.initializeModal(),t.revealModal(e)}.bind(null,a)).catch(a.oe)},methodCall:function(e,t,r){Promise.all([a.e(49),a.e(482)]).then((function(){(function(){a(482)("./"+e+".js")[t](r)}).apply(null,[])})).catch(a.oe)}}}()})();

!function(e){"use strict";function t(){}function n(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function r(e){return function(){return this[e].apply(this,arguments)}}function i(e){return"function"==typeof e||e instanceof RegExp||!(!e||"object"!=typeof e)&&i(e.listener)}var s=t.prototype,o=e.EventEmitter;s.getListeners=function(e){var t,n,r=this._getEvents();if(e instanceof RegExp){t={};for(n in r)r.hasOwnProperty(n)&&e.test(n)&&(t[n]=r[n])}else t=r[e]||(r[e]=[]);return t},s.flattenListeners=function(e){var t,n=[];for(t=0;t<e.length;t+=1)n.push(e[t].listener);return n},s.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},s.addListener=function(e,t){if(!i(t))throw new TypeError("listener must be a function");var r,s=this.getListenersAsObject(e),o="object"==typeof t;for(r in s)s.hasOwnProperty(r)&&-1===n(s[r],t)&&s[r].push(o?t:{listener:t,once:!1});return this},s.on=r("addListener"),s.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},s.once=r("addOnceListener"),s.defineEvent=function(e){return this.getListeners(e),this},s.defineEvents=function(e){for(var t=0;t<e.length;t+=1)this.defineEvent(e[t]);return this},s.removeListener=function(e,t){var r,i,s=this.getListenersAsObject(e);for(i in s)s.hasOwnProperty(i)&&-1!==(r=n(s[i],t))&&s[i].splice(r,1);return this},s.off=r("removeListener"),s.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},s.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},s.manipulateListeners=function(e,t,n){var r,i,s=e?this.removeListener:this.addListener,o=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(r=n.length;r--;)s.call(this,t,n[r]);else for(r in t)t.hasOwnProperty(r)&&(i=t[r])&&("function"==typeof i?s.call(this,r,i):o.call(this,r,i));return this},s.removeEvent=function(e){var t,n=typeof e,r=this._getEvents();if("string"===n)delete r[e];else if(e instanceof RegExp)for(t in r)r.hasOwnProperty(t)&&e.test(t)&&delete r[t];else delete this._events;return this},s.removeAllListeners=r("removeEvent"),s.emitEvent=function(e,t){var n,r,i,s,o=this.getListenersAsObject(e);for(s in o)if(o.hasOwnProperty(s))for(n=o[s].slice(0),i=0;i<n.length;i++)r=n[i],!0===r.once&&this.removeListener(e,r.listener),r.listener.apply(this,t||[])===this._getOnceReturnValue()&&this.removeListener(e,r.listener);return this},s.trigger=r("emitEvent"),s.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},s.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},s._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},s._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return e.EventEmitter=o,t},"function"==typeof define&&define.amd?define(function(){return t}):"object"==typeof module&&module.exports?module.exports=t:e.EventEmitter=t}("undefined"!=typeof window?window:this||{});
var ee = new EventEmitter();
var notificationsLHC = {
sendNotification : function() {
if (!!window.postMessage && typeof(parent) !== 'undefined') {
parent.postMessage('lhc_notification:just_testing', '*');
}
}
}
