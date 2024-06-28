"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[5008],{"../plugins/home/src/homePageComponents/Toolkit/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Content:()=>Content,ContextProvider:()=>ContextProvider});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Link=__webpack_require__("../packages/core-components/src/components/Link/Link.tsx"),List=__webpack_require__("../node_modules/@material-ui/core/esm/List/List.js"),ListItemIcon=__webpack_require__("../node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js"),ListItemText=__webpack_require__("../node_modules/@material-ui/core/esm/ListItemText/ListItemText.js"),makeStyles=__webpack_require__("../node_modules/@material-ui/core/esm/styles/makeStyles.js"),react=__webpack_require__("./node_modules/react/index.js");const Context=(0,react.createContext)(void 0),ContextProvider=props=>{const{children,tools}=props,[toolsValue,_setTools]=react.useState(tools),value={tools:toolsValue};return(0,jsx_runtime.jsx)(Context.Provider,{value,children})};try{ContextProvider.displayName="ContextProvider",ContextProvider.__docgenInfo={description:"",displayName:"ContextProvider",props:{tools:{defaultValue:null,description:"",name:"tools",required:!0,type:{name:"Tool[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/home/src/homePageComponents/Toolkit/Context.tsx#ContextProvider"]={docgenInfo:ContextProvider.__docgenInfo,name:"ContextProvider",path:"../plugins/home/src/homePageComponents/Toolkit/Context.tsx#ContextProvider"})}catch(__react_docgen_typescript_loader_error){}try{Context.displayName="Context",Context.__docgenInfo={description:"Context lets components pass information deep down without explicitly\npassing props.\n\nCreated from {@link createContext}",displayName:"Context",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/home/src/homePageComponents/Toolkit/Context.tsx#Context"]={docgenInfo:Context.__docgenInfo,name:"Context",path:"../plugins/home/src/homePageComponents/Toolkit/Context.tsx#Context"})}catch(__react_docgen_typescript_loader_error){}const useStyles=(0,makeStyles.A)((theme=>({toolkit:{display:"flex",flexWrap:"wrap",textAlign:"center"},tool:{margin:theme.spacing(.5,1)},label:{marginTop:theme.spacing(1),width:"72px",fontSize:"0.9em",lineHeight:"1.25",overflowWrap:"break-word",color:theme.palette.text.secondary},icon:{width:"64px",height:"64px",borderRadius:"50px",justifyContent:"center",alignItems:"center",boxShadow:theme.shadows[1],backgroundColor:theme.palette.background.default}}))),Content=props=>{const classes=useStyles(),toolkit=react.useContext(Context);var _toolkit_tools;const tools=null!==(_toolkit_tools=null==toolkit?void 0:toolkit.tools)&&void 0!==_toolkit_tools?_toolkit_tools:props.tools;return(0,jsx_runtime.jsx)(List.A,{className:classes.toolkit,children:tools.map((tool=>(0,jsx_runtime.jsxs)(Link.N_,{to:tool.url,className:classes.tool,children:[(0,jsx_runtime.jsx)(ListItemIcon.A,{className:classes.icon,children:tool.icon}),(0,jsx_runtime.jsx)(ListItemText.A,{secondaryTypographyProps:{className:classes.label},secondary:tool.label})]},tool.url)))})};try{Content.displayName="Content",Content.__docgenInfo={description:"A component to display a list of tools for the user.",displayName:"Content",props:{tools:{defaultValue:null,description:"",name:"tools",required:!0,type:{name:"Tool[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/home/src/homePageComponents/Toolkit/Content.tsx#Content"]={docgenInfo:Content.__docgenInfo,name:"Content",path:"../plugins/home/src/homePageComponents/Toolkit/Content.tsx#Content"})}catch(__react_docgen_typescript_loader_error){}}}]);