"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1191],{"../plugins/home/src/components/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomHomepageGrid:()=>CustomHomepageGrid.S,HomepageCompositionRoot:()=>HomepageCompositionRoot,VisitListener:()=>VisitListener});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("../node_modules/react-router/dist/index.js");const HomepageCompositionRoot=props=>{const outlet=(0,dist.P1)();var _props_children;const children=null!==(_props_children=props.children)&&void 0!==_props_children?_props_children:outlet;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children})};try{HomepageCompositionRoot.displayName="HomepageCompositionRoot",HomepageCompositionRoot.__docgenInfo={description:"",displayName:"HomepageCompositionRoot",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/home/src/components/HomepageCompositionRoot.tsx#HomepageCompositionRoot"]={docgenInfo:HomepageCompositionRoot.__docgenInfo,name:"HomepageCompositionRoot",path:"../plugins/home/src/components/HomepageCompositionRoot.tsx#HomepageCompositionRoot"})}catch(__react_docgen_typescript_loader_error){}var CustomHomepageGrid=__webpack_require__("../plugins/home/src/components/CustomHomepage/CustomHomepageGrid.tsx"),VisitsApi=__webpack_require__("../plugins/home/src/api/VisitsApi.ts"),useApi=__webpack_require__("../packages/core-plugin-api/src/apis/system/useApi.tsx"),ref=__webpack_require__("../packages/catalog-model/src/entity/ref.ts");const VisitListener=({children,toEntityRef,visitName})=>{const visitsApi=(0,useApi.gf)(VisitsApi.y),{pathname}=(0,dist.zy)(),toEntityRefImpl=null!=toEntityRef?toEntityRef:(({rootPath="catalog",stringifyEntityRefImpl=ref.U2}={})=>({pathname})=>{const result=new RegExp(`^/${rootPath}/(?<namespace>[^/]+)/(?<kind>[^/]+)/(?<name>[^/]+)`).exec(pathname);if(!result||!(null==result?void 0:result.groups))return;const entity={namespace:result.groups.namespace,kind:result.groups.kind,name:result.groups.name};return stringifyEntityRefImpl(entity)})(),visitNameImpl=null!=visitName?visitName:(({rootPath="catalog",document=__webpack_require__.g.document}={})=>({pathname})=>{let result=new RegExp(`^/${rootPath}/(?<namespace>[^/]+)/(?<kind>[^/]+)/(?<name>[^/]+)`).exec(pathname);return result&&(null==result?void 0:result.groups)?result.groups.name:(result=RegExp("^\\/(?<name>[^\\/]+)$").exec(pathname),result&&(null==result?void 0:result.groups)?result.groups.name:document.title)})();return(0,react.useEffect)((()=>{const requestId=requestAnimationFrame((()=>{visitsApi.save({visit:{name:visitNameImpl({pathname}),pathname,entityRef:toEntityRefImpl({pathname})}})}));return()=>cancelAnimationFrame(requestId)}),[visitsApi,pathname,toEntityRefImpl,visitNameImpl]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children})};try{VisitListener.displayName="VisitListener",VisitListener.__docgenInfo={description:"",displayName:"VisitListener",props:{toEntityRef:{defaultValue:null,description:"",name:"toEntityRef",required:!1,type:{name:"({ pathname }: { pathname: string; }) => string"}},visitName:{defaultValue:null,description:"",name:"visitName",required:!1,type:{name:"({ pathname }: { pathname: string; }) => string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/home/src/components/VisitListener.tsx#VisitListener"]={docgenInfo:VisitListener.__docgenInfo,name:"VisitListener",path:"../plugins/home/src/components/VisitListener.tsx#VisitListener"})}catch(__react_docgen_typescript_loader_error){}}}]);