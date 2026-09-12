"use strict";var w=function(n,r){return function(){try{return r||n((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var d=w(function(p,c){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=require('@stdlib/assert-is-function/dist'),y=require('@stdlib/assert-is-iterator-like/dist'),o=require('@stdlib/symbol-iterator/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist');function m(n,r,t,f){var u,a,i;if(!y(n))throw new TypeError(v('1tL46',n));if(!s(r))throw new TypeError(v('1tL2H',r));if(!s(t))throw new TypeError(v('1tL3N',t));return i=-1,u={},l(u,"next",g),l(u,"return",h),o&&s(n[o])&&l(u,o,q),u;function g(){var e;return i+=1,a?{done:!0}:(e=n.next(),e.done?(a=!0,e):(e=e.value,t.call(f,e,i),r(e,i)===!1?(a=!0,{done:!0}):{value:e,done:!1}))}function h(e){return a=!0,arguments.length?{value:e,done:!0}:{done:!0}}function q(){return m(n[o](),r,t,f)}}c.exports=m
});var b=d();module.exports=b;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
