"use strict";var w=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var d=w(function(p,c){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=require('@stdlib/assert-is-function/dist'),y=require('@stdlib/assert-is-iterator-like/dist'),o=require('@stdlib/symbol-iterator/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist');function m(n,e,u,f){var t,a,i;if(!y(n))throw new TypeError(v('null46',n));if(!s(e))throw new TypeError(v('null2H',e));if(!s(u))throw new TypeError(v('null3N',u));return i=-1,t={},l(t,"next",g),l(t,"return",h),o&&s(n[o])&&l(t,o,q),t;function g(){var r;return i+=1,a?{done:!0}:(r=n.next(),r.done?(a=!0,r):(r=r.value,u.call(f,r,i),e(r,i)===!1?(a=!0,{done:!0}):{value:r,done:!1}))}function h(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function q(){return m(n[o](),e,u,f)}}c.exports=m
});var b=d();module.exports=b;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
