/*! For license information please see 3883aa8c.b1ceca01.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[549346],{331201:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(824246),o=r(511151);const a={id:"plugin-catalog-backend-module-msgraph.normalizeentityname",title:"normalizeEntityName()",description:"API reference for normalizeEntityName()"},u=void 0,c={id:"reference/plugin-catalog-backend-module-msgraph.normalizeentityname",title:"normalizeEntityName()",description:"API reference for normalizeEntityName()",source:"@site/../docs/reference/plugin-catalog-backend-module-msgraph.normalizeentityname.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-msgraph.normalizeentityname",permalink:"/docs/reference/plugin-catalog-backend-module-msgraph.normalizeentityname",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-msgraph.normalizeentityname.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-msgraph.normalizeentityname",title:"normalizeEntityName()",description:"API reference for normalizeEntityName()"}},i={},s=[{value:"Parameters",id:"parameters",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-msgraph"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.normalizeentityname",children:(0,n.jsx)(t.code,{children:"normalizeEntityName"})})]}),"\n",(0,n.jsx)(t.p,{children:"Takes an input string and cleans it up to become suitable as an entity name."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"function normalizeEntityName(name: string): string;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"string"})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,a={},s=null,l=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)u.call(t,n)&&!i.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:l,props:a,_owner:c.current}}t.Fragment=a,t.jsx=s,t.jsxs=s},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),i=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,h={};function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}function g(){}function _(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var v=_.prototype=new g;v.constructor=_,y(v,b.prototype),v.isPureReactComponent=!0;var j=Array.isArray,x=Object.prototype.hasOwnProperty,k={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var o,a={},u=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=""+t.key),t)x.call(t,o)&&!E.hasOwnProperty(o)&&(a[o]=t[o]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var s=Array(i),l=0;l<i;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===a[o]&&(a[o]=i[o]);return{$$typeof:r,type:e,key:u,ref:c,props:a,_owner:k.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var R=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,a,u){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case n:i=!0}}if(i)return u=u(i=e),e=""===a?"."+C(i,0):a,j(u)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),$(u,t,o,"",(function(e){return e}))):null!=u&&(w(u)&&(u=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(R,"$&/")+"/")+e)),t.push(u)),1;if(i=0,a=""===a?".":a+":",j(e))for(var s=0;s<e.length;s++){var l=a+C(c=e[s],s);i+=$(c,t,o,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(c=e.next()).done;)i+=$(c=c.value,t,o,l=a+C(c,s++),u);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function O(e,t,r){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var z={current:null},N={transition:null},I={ReactCurrentDispatcher:z,ReactCurrentBatchConfig:N,ReactCurrentOwner:k};t.Children={map:O,forEach:function(e,t,r){O(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=o,t.Profiler=u,t.PureComponent=_,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),a=e.key,u=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,c=k.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)x.call(t,s)&&!E.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==i?i[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){i=Array(s);for(var l=0;l<s;l++)i[l]=arguments[l+2];o.children=i}return{$$typeof:r,type:e.type,key:a,ref:u,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=N.transition;N.transition={};try{e()}finally{N.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return z.current.useCallback(e,t)},t.useContext=function(e){return z.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return z.current.useDeferredValue(e)},t.useEffect=function(e,t){return z.current.useEffect(e,t)},t.useId=function(){return z.current.useId()},t.useImperativeHandle=function(e,t,r){return z.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return z.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return z.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return z.current.useMemo(e,t)},t.useReducer=function(e,t,r){return z.current.useReducer(e,t,r)},t.useRef=function(e){return z.current.useRef(e)},t.useState=function(e){return z.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return z.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return z.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>c,ah:()=>a});var n=r(667294);const o=n.createContext({});function a(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const u={};function c({components:e,children:t,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||u:a(e),n.createElement(o.Provider,{value:c},t)}}}]);