(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{172:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return configureStore});var redux__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11),redux_thunk__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(32),_reducers_root_reducer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(34),redux_logger__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(33),redux_logger__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_3__);function configureStore(initialState){return Object(redux__WEBPACK_IMPORTED_MODULE_0__.d)(_reducers_root_reducer__WEBPACK_IMPORTED_MODULE_2__.a,initialState,Object(redux__WEBPACK_IMPORTED_MODULE_0__.a)(redux_thunk__WEBPACK_IMPORTED_MODULE_1__.a,redux_logger__WEBPACK_IMPORTED_MODULE_3___default.a))}},173:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return configureStore});var redux__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11),redux_logger__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(33),redux_logger__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__),redux_thunk__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(32),_reducers_root_reducer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(34);function configureStore(initialState){return Object(redux__WEBPACK_IMPORTED_MODULE_0__.d)(_reducers_root_reducer__WEBPACK_IMPORTED_MODULE_3__.a,initialState,Object(redux__WEBPACK_IMPORTED_MODULE_0__.a)(redux_thunk__WEBPACK_IMPORTED_MODULE_2__.a,redux_logger__WEBPACK_IMPORTED_MODULE_1___default.a))}},174:function(module,exports,__webpack_require__){},175:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"favicon.ico"},177:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),react_dom=__webpack_require__(27),react_dom_default=__webpack_require__.n(react_dom),react_hot_loader=__webpack_require__(70),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),es=__webpack_require__(15),react_router_dom=__webpack_require__(30),config_service=__webpack_require__(31),config_service_default=__webpack_require__.n(config_service),react_router=__webpack_require__(13),moment=__webpack_require__(66),moment_default=__webpack_require__.n(moment),isEmpty=__webpack_require__(45),isEmpty_default=__webpack_require__.n(isEmpty),redux_entity=__webpack_require__(12),Icon=__webpack_require__(4);class Entity_Entity extends react.Component{constructor(props){super(props),this.deleteEntity=this.deleteEntity.bind(this),this.resetEntity=this.resetEntity.bind(this)}componentDidMount(){this.props.runFetchEntityOnMount&&this.props.fetchEntity()}deleteEntity(){const _this$props=this.props,name=_this$props.name;(0,_this$props.deleteEntity)(name)}resetEntity(){const _this$props2=this.props,name=_this$props2.name;(0,_this$props2.resetEntity)(name,Date.now())}renderContent(name,entity){const append=this.props.append,isFetching=entity.isFetching,data=entity.data,error=entity.error;if(error)return react_default.a.createElement("div",{className:"m-top--small m-bottom--small"},react_default.a.createElement(Icon.a,{icon:"exclamation-triangle",className:"has-text-danger"})," Failed to fetch ",react_default.a.createElement("code",null,name)," due to ",react_default.a.createElement("code",{className:"has-text-danger"},error.toString()));if(isFetching)return react_default.a.createElement("div",{className:"m-top--small m-bottom--small"},"Fetching fresh data!");if(isEmpty_default()(data))return react_default.a.createElement("div",{className:"m-top--small m-bottom--small"},"Entity ",react_default.a.createElement("code",null,name)," is reset.");const action=append?"Appending to ":"Fetch for ",message=append?react_default.a.createElement("span",null," took ",react_default.a.createElement("code",null,data.delay,"s")):null;return react_default.a.createElement("div",{className:"m-top--small m-bottom--small"},react_default.a.createElement(Icon.a,{icon:"check",className:"has-text-success"})," ",action,react_default.a.createElement("code",null,name),message,react_default.a.createElement("span",null,"@ ",react_default.a.createElement("code",null,moment_default()(data.lastUpdated).format("LTS"))))}fetchButton(isFetching){return react_default.a.createElement("p",{key:"Fetch",className:"control"},react_default.a.createElement("a",{className:"button is-info ".concat(isFetching?"is-loading":""),onClick:this.props.fetchEntity},react_default.a.createElement("span",{className:"icon"},react_default.a.createElement(Icon.a,{icon:"download"})),react_default.a.createElement("span",null,"Fetch")))}resetButton(isFetching){const onClick=isFetching?()=>{}:this.resetEntity;return react_default.a.createElement("p",{key:"Reset",className:"control"},react_default.a.createElement("a",{className:"button",disabled:isFetching,onClick},react_default.a.createElement("span",{className:"icon"},react_default.a.createElement(Icon.a,{icon:"history"})),react_default.a.createElement("span",null,"Reset")))}deleteButton(isFetching){const onClick=isFetching?()=>{}:this.deleteEntity;return react_default.a.createElement("p",{key:"Delete",className:"control"},react_default.a.createElement("a",{className:"button is-danger",disabled:isFetching,onClick},react_default.a.createElement("span",{className:"icon"},react_default.a.createElement(Icon.a,{icon:"trash"})),react_default.a.createElement("span",null,"Delete")))}render(){const _this$props3=this.props,name=_this$props3.name,entity=_this$props3.entity;if(isEmpty_default()(entity))return react_default.a.createElement(react.Fragment,null,react_default.a.createElement(NoEntity,{name}),this.fetchButton());const isFetching=entity.isFetching;return react_default.a.createElement("div",null,this.renderContent(name,entity),react_default.a.createElement("div",{className:"field has-addons"},this.fetchButton(isFetching),this.resetButton(isFetching),this.deleteButton(isFetching)))}}const NoEntity=_ref=>{let name=_ref.name;return react_default.a.createElement("div",{className:"m-top--small m-bottom--small"},react_default.a.createElement(Icon.a,{icon:"exclamation-triangle",className:"has-text-danger"})," Entity ",react_default.a.createElement("code",null,name)," does not exist on ",react_default.a.createElement("code",null,"entities"))};NoEntity.propTypes={name:prop_types_default.a.string.isRequired},Entity_Entity.propTypes={name:prop_types_default.a.string.isRequired,append:prop_types_default.a.bool,entity:prop_types_default.a.shape({isFetching:prop_types_default.a.bool,lastUpdated:prop_types_default.a.number,data:prop_types_default.a.oneOfType([prop_types_default.a.string,prop_types_default.a.number,prop_types_default.a.object,prop_types_default.a.array]),error:prop_types_default.a.oneOfType([prop_types_default.a.object,prop_types_default.a.string])}),runFetchEntityOnMount:prop_types_default.a.bool,fetchEntity:prop_types_default.a.func.isRequired,resetEntity:prop_types_default.a.func.isRequired,deleteEntity:prop_types_default.a.func.isRequired};var redux_entity_Entity=Object(es.b)(null,{resetEntity:redux_entity.resetEntity,deleteEntity:redux_entity.deleteEntity})(Entity_Entity),Flex=__webpack_require__(18),app_const=__webpack_require__(5),axios=__webpack_require__(67);const instance=__webpack_require__.n(axios).a.create({baseURL:config_service_default.a.getBaseUrl(),timeout:4e3});var ajax_service={request:options=>instance.request(options)};const _request=(method,url,data,options)=>{const defaultOptions={method,url,responseType:"json"};data&&(defaultOptions.data=JSON.stringify(data),defaultOptions.headers={"Content-Type":"application/json"});let requestOptions=defaultOptions;return options&&(requestOptions=Object.assign(defaultOptions,options)),new Promise((resolve,reject)=>{ajax_service.request(requestOptions).then(response=>{resolve(response.data)}).catch(error=>{error?error.message||(error.message="".concat(error.status," ").concat(error.statusText)):error=new Error("An unknown error occurred"),reject(error)})})};var data_access_service={get:(url,options)=>_request("GET",url,null,options),post:(url,data,options)=>_request("POST",url,data,options)};function _getShortDelay(){return function _getRandomDelayBetween(min,max,roundTo){return Number(Math.random()*(max-min)+min).toFixed(roundTo)}(1,3,2)}var example_domain_service={getFoo:()=>data_access_service.get("/foo"),getFakePromise:doReject=>new Promise((resolve,reject)=>{const delay=_getShortDelay();setTimeout(()=>{doReject?reject(new Error("Fake Error!")):resolve({delay})},1e3*delay)})};const ReduxEntity=_ref=>{let entities=_ref.entities,fetchFoo=_ref.fetchFoo,fetchBar=_ref.fetchBar,fetchBaz=_ref.fetchBaz;const getLoadEntityThunk=key=>{switch(key){case app_const.a.FOO:return fetchFoo;case app_const.a.BAR:return fetchBar;case app_const.a.BAZ:return fetchBaz}};return react_default.a.createElement(Flex.a,{column:!0,className:"notification is-light m-top--small"},Object.keys(app_const.a).map((key,index)=>{const entityKey=app_const.a[key];return react_default.a.createElement(redux_entity_Entity,{key:index,name:entityKey,append:entityKey===app_const.a.BAR,runFetchEntityOnMount:!0,entity:entities[entityKey],fetchEntity:getLoadEntityThunk(entityKey)})}))};ReduxEntity.propTypes={entities:prop_types_default.a.object.isRequired,fetchFoo:prop_types_default.a.func.isRequired,fetchBar:prop_types_default.a.func.isRequired,fetchBaz:prop_types_default.a.func.isRequired};var redux_entity_ReduxEntity=Object(es.b)(state=>({entities:state.entities}),{fetchFoo:function thunks_fetchFoo(){return Object(redux_entity.loadEntity)(app_const.a.FOO,example_domain_service.getFakePromise())},fetchBar:function thunks_fetchBar(){return Object(redux_entity.loadEntity)(app_const.a.BAR,example_domain_service.getFakePromise(),{append:!0})},fetchBaz:function thunks_fetchBaz(){return Object(redux_entity.loadEntity)(app_const.a.BAZ,example_domain_service.getFakePromise(!0).catch(error=>{console.error(error)}))}})(ReduxEntity),isObject=__webpack_require__(28),isObject_default=__webpack_require__.n(isObject);const stringifyErrors=obj=>{if(obj)for(let prop in obj)obj.hasOwnProperty(prop)&&obj[prop]&&"object"==typeof obj[prop]&&(obj[prop]instanceof Error?obj[prop]=obj[prop].toString():stringifyErrors(obj[prop]))},getContestAsString=content=>(stringifyErrors(content),isObject_default()(content)?JSON.stringify(content,null,2):content);class ReduxState_ReduxState extends react_default.a.Component{render(){return react_default.a.createElement("pre",{className:"m-top--small"},getContestAsString(this.props.state).split("\n").map((line,index)=>react_default.a.createElement("div",{key:index,className:"line"},line)))}}ReduxState_ReduxState.propTypes={state:prop_types_default.a.object.isRequired};var examples_ReduxState=Object(es.b)(state=>({state}))(ReduxState_ReduxState),react_tabify=__webpack_require__(24),lib=__webpack_require__(35),lib_default=__webpack_require__.n(lib);const AsyncIncrement=lib_default()({loader:()=>__webpack_require__.e(4).then(__webpack_require__.bind(null,180)),loading:()=>react_default.a.createElement(Icon.a,{icon:"cog fa-spin"})}),AsyncDecrement=lib_default()({loader:()=>__webpack_require__.e(3).then(__webpack_require__.bind(null,181)),loading:()=>react_default.a.createElement(Icon.a,{icon:"cog fa-spin"})}),AsyncReset=lib_default()({loader:()=>__webpack_require__.e(5).then(__webpack_require__.bind(null,182)),loading:()=>react_default.a.createElement(Icon.a,{icon:"cog fa-spin"})}),AsyncTabbedRouter=_ref=>{let location=_ref.location,history=_ref.history;return react_default.a.createElement("div",{className:"notification m-top--small"},react_default.a.createElement(react_tabify.Tabs,{id:"router-example-tabs",activeKey:location.pathname,onSelect:eventKey=>history.push(eventKey)},react_default.a.createElement(react_tabify.Tab,{eventKey:"/",label:"Increment"},react_default.a.createElement(react_router.a,{exact:!0,path:"/",component:AsyncIncrement})),react_default.a.createElement(react_tabify.Tab,{eventKey:"/decrement",label:"Decrement"},react_default.a.createElement(react_router.a,{path:"/decrement",component:AsyncDecrement})),react_default.a.createElement(react_tabify.Tab,{eventKey:"/reset",label:"Reset"},react_default.a.createElement(react_router.a,{path:"/reset",component:AsyncReset}))))};AsyncTabbedRouter.propTypes={location:prop_types_default.a.instanceOf(Object),history:prop_types_default.a.instanceOf(Object)};var router_AsyncTabbedRouter=AsyncTabbedRouter,logo=__webpack_require__(69),logo_default=__webpack_require__.n(logo);const URL_GH="http://www.github.com/mikechabot/react-boilerplate",URL_NPM="https://www.npmjs.com/~mikechabot",NavBar=_ref=>{let url=_ref.url,label=_ref.label;return react_default.a.createElement("nav",{className:"navbar is-dark",role:"navigation","aria-label":"main navigation",style:{width:"100%"}},react_default.a.createElement("div",{className:"navbar-brand"},react_default.a.createElement("a",{href:url,className:"navbar-item is-size-3"},react_default.a.createElement("img",{src:logo_default.a,height:64,width:64}),react_default.a.createElement("span",null,label))),react_default.a.createElement("div",{className:"navbar-end"},react_default.a.createElement("div",{className:"navbar-item"},react_default.a.createElement("a",{className:"button is-dark",href:URL_NPM},react_default.a.createElement("span",{className:"icon is-small has-text-danger"},react_default.a.createElement(Icon.a,{icon:"npm",prefix:"fab",size:"fa-2x"})))),react_default.a.createElement("div",{className:"navbar-item"},react_default.a.createElement("a",{className:"button is-dark",href:URL_GH},react_default.a.createElement("span",{className:"icon is-small"},react_default.a.createElement(Icon.a,{icon:"github",prefix:"fab",size:"fa-2x"}))))))};NavBar.propTypes={url:prop_types_default.a.string.isRequired,label:prop_types_default.a.string.isRequired};var Navbar=NavBar;const GithubButton=_ref=>{let label=_ref.label,icon=_ref.icon,href=_ref.href,ariaLabel=_ref.ariaLabel;return react_default.a.createElement("div",{style:{margin:5}},react_default.a.createElement("a",{className:"github-button",href:"https://github.com/".concat(href),"data-icon":icon,"data-size":"large","data-show-count":!0,"aria-label":ariaLabel},label))};GithubButton.propTypes={label:prop_types_default.a.string.isRequired,icon:prop_types_default.a.string.isRequired,href:prop_types_default.a.string.isRequired,ariaLabel:prop_types_default.a.string.isRequired};var components_Footer=()=>react_default.a.createElement("footer",{className:"footer has-text-grey-light"},react_default.a.createElement("div",{className:"container"},react_default.a.createElement("div",{className:"content has-text-centered"},react_default.a.createElement("p",null,react_default.a.createElement("strong",{className:"has-text-grey-light"},react_default.a.createElement(Icon.a,{icon:"cloud"})," react-boilerplate")," by ",react_default.a.createElement("a",{href:"https://github.com/mikechabot",target:"_blank",rel:"noopener noreferrer"},"Mike Chabot"),".",react_default.a.createElement("br",null),"The ",react_default.a.createElement("a",{href:"https://github.com/mikechabot/react-boilerplate",target:"_blank",rel:"noopener noreferrer"},"source code")," is licensed under ",react_default.a.createElement("a",{href:"https://github.com/mikechabot/react-boilerplate/blob/master/LICENSE"},"MIT"),"."),react_default.a.createElement(Flex.a,{hAlignCenter:!0},react_default.a.createElement(GithubButton,{label:"Star",icon:"octicon-star",href:"mikechabot/react-boilerplate",ariaLabel:"Star mikechabot/react-boilerplate on GitHub"}),react_default.a.createElement(GithubButton,{label:"Fork",icon:"octicon-repo-forked",href:"mikechabot/react-boilerplate/fork",ariaLabel:"Fork mikechabot/react-boilerplate on GitHub"}),react_default.a.createElement(GithubButton,{label:"Watch",icon:"octicon-eye",href:"mikechabot/react-boilerplate/subscription",ariaLabel:"Watch mikechabot/react-boilerplate on GitHub"})))));const App_URL_REDUX_ENTITY="https://github.com/mikechabot/redux-entity",App_URL_REACT_ROUTER="https://github.com/ReactTraining/react-router",App_URL_BOILERPLATE="http://www.github.com/mikechabot/react-boilerplate",ColumnBody=_ref=>{let title=_ref.title,subtitle=_ref.subtitle,icon=_ref.icon,body=_ref.body;return react_default.a.createElement(react.Fragment,null,react_default.a.createElement("div",null,react_default.a.createElement("h1",{className:"title"},react_default.a.createElement(Icon.a,{icon,className:"has-text-info"})," ",title),react_default.a.createElement("h2",{className:"subtitle "},react_default.a.createElement(Icon.a,{icon:"angle-right"})," ",subtitle)),body)},Body=_ref2=>{let location=_ref2.location,history=_ref2.history;return react_default.a.createElement("section",{className:"hero"},react_default.a.createElement("div",{className:"hero-body"},react_default.a.createElement("div",{className:"container"},react_default.a.createElement("div",{className:"columns"},react_default.a.createElement("div",{className:"column"},react_default.a.createElement(ColumnBody,{icon:"link",title:"Router",subtitle:react_default.a.createElement("span",null,"Utilizes ",react_default.a.createElement("a",{href:App_URL_REACT_ROUTER},"react-router")," v4 for client-side routing"),body:react_default.a.createElement(router_AsyncTabbedRouter,{location,history})}))),react_default.a.createElement("div",{className:"columns"},react_default.a.createElement("div",{className:"column"},react_default.a.createElement(ColumnBody,{icon:"sitemap",title:"State Management",subtitle:react_default.a.createElement("span",null,"Utilizes ",react_default.a.createElement("a",{href:App_URL_REDUX_ENTITY},"redux-entity")," for domain entity management"),body:react_default.a.createElement(redux_entity_ReduxEntity,null)})),react_default.a.createElement("div",{className:"column"},react_default.a.createElement(ColumnBody,{icon:"tree",title:"State Tree",subtitle:react_default.a.createElement("span",null,"Open devtools to view dispatched actions"),body:react_default.a.createElement(examples_ReduxState,null)}))))))},App=_ref3=>{let location=_ref3.location,history=_ref3.history;return react_default.a.createElement(Flex.a,{column:!0,height:"100%",width:"100%",justifyContent:"space-between"},react_default.a.createElement("div",null,react_default.a.createElement(Navbar,{url:App_URL_BOILERPLATE,label:"react-boilerplate"})),react_default.a.createElement(Body,{location,history}),react_default.a.createElement(components_Footer,null))};ColumnBody.propTypes={title:prop_types_default.a.string.isRequired,subtitle:prop_types_default.a.node.isRequired,icon:prop_types_default.a.string.isRequired,body:prop_types_default.a.node.isRequired},App.propTypes={location:prop_types_default.a.instanceOf(Object),history:prop_types_default.a.instanceOf(Object)},Body.propTypes={location:prop_types_default.a.instanceOf(Object),history:prop_types_default.a.instanceOf(Object)};var components_App=Object(react_router.d)(App);function Root(_ref){let store=_ref.store;return react_default.a.createElement(es.a,{store},react_default.a.createElement(react_router_dom.a,{basename:config_service_default.a.getPublicBasename()},react_default.a.createElement(components_App,null)))}Root.propTypes={store:prop_types_default.a.object};var node_service=__webpack_require__(43),configure_store=__webpack_require__.n(node_service).a.isProduction()?__webpack_require__(172).default:__webpack_require__(173).default;__webpack_require__(174),__webpack_require__(175);const Bootstrap_store=configure_store(app_const.b);react_dom_default.a.render(react_default.a.createElement(react_hot_loader.AppContainer,null,react_default.a.createElement(Root,{store:Bootstrap_store})),document.getElementById("example-app"))},18:function(module,__webpack_exports__,__webpack_require__){"use strict";var glamorous__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(29);const ALLOWED_FLEX_PROPS=["alignContent","alignItems","alignSelf","background","backgroundColor","border","borderRadius","boxShadow","color","flex","flexBasis","flexFlow","flexGrow","flexShrink","flexWrap","fontSize","height","justifyContent","margin","maxHeight","maxWidth","minHeight","minWidth","overflow","overflowX","overflowY","padding","width"];function _getExplicitStyles(props,propKeys){if(!propKeys)throw new Error("Missing required propKeys");if(!Array.isArray(propKeys))throw new Error("propKeys must be an Array");return propKeys.map(prop=>null!==props[prop]&&void 0!==props[prop]?{[prop]:props[prop]}:null).filter(rule=>rule)}const Flex=glamorous__WEBPACK_IMPORTED_MODULE_0__.default.div({display:"flex"},props=>{const implicit=[];return props.column&&implicit.push({flexDirection:"column "}),props.hAlignCenter&&implicit.push(props.column?{alignItems:"center"}:{justifyContent:"center"}),props.vAlignCenter&&implicit.push(props.column?{justifyContent:"center"}:{alignItems:"center"}),[...implicit,..._getExplicitStyles(props,ALLOWED_FLEX_PROPS)]});__webpack_exports__.a=Flex},26:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",function(){return INCREMENT_COUNTER}),__webpack_require__.d(__webpack_exports__,"a",function(){return DECREMENT_COUNTER}),__webpack_require__.d(__webpack_exports__,"c",function(){return RESET_COUNTER});const INCREMENT_COUNTER="INCREMENT_COUNTER",DECREMENT_COUNTER="DECREMENT_COUNTER",RESET_COUNTER="RESET_COUNTER"},31:function(module,exports,__webpack_require__){"use strict";const DomainObjectService=__webpack_require__(80),NodeUtils=__webpack_require__(43);module.exports={getConfig:()=>({example:{port:3060,baseUrl:"http://localhost:3020/",publicBasename:"react-boilerplate/"}}),getProperty(key){if(!key)throw new Error("Key cannot be null/undefined");return DomainObjectService.getPropertyValue(this.getConfig(),key)},getRequiredProperty(key){const value=this.getProperty(key);if(value)return value;if(!NodeUtils.isTest())throw new Error('Missing required property: "'.concat(key,'"'))},getPort(){return this.getRequiredProperty("example.port")},getBasePath(){return this.getRequiredProperty("example.basePath")},getBaseUrl(){return this.getRequiredProperty("example.baseUrl")},getPublicBasename(){return NodeUtils.isGhPages()?this.getRequiredProperty("example.publicBasename"):"/"}}},34:function(module,__webpack_exports__,__webpack_require__){"use strict";var redux=__webpack_require__(11),redux_entity=__webpack_require__(12),app_const=__webpack_require__(5),types=__webpack_require__(26);var reducers_counter=function counter(){let state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:app_const.b.counter;switch((arguments.length>1?arguments[1]:void 0).type){case types.b:return state+1;case types.a:return state-1;case types.c:return app_const.b.counter;default:return state}};__webpack_exports__.a=Object(redux.c)({entities:redux_entity.entities,counter:reducers_counter})},4:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);const Icon=_ref=>{let icon=_ref.icon,prefix=_ref.prefix,className=_ref.className,_ref$size=_ref.size,size=void 0===_ref$size?"fa-1x":_ref$size,iconPrefix=prefix||"fa";return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"".concat(iconPrefix," fa-").concat(icon," ").concat(className||""," ").concat(size)}))};Icon.propTypes={icon:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,prefix:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,size:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string},__webpack_exports__.a=Icon},43:function(module,exports,__webpack_require__){"use strict";let svc;module.exports=svc={getNodeEnv:function getNodeEnv(){return Object({NODE_ENV:"gh-pages",APP_CONFIG:{example:{port:3060,baseUrl:"http://localhost:3020/",publicBasename:"react-boilerplate/"}}})},getNodeEnvByKey:function getNodeEnvByKey(key){if(!key)throw new Error("Key cannot be null/undefined");return Object({NODE_ENV:"gh-pages",APP_CONFIG:{example:{port:3060,baseUrl:"http://localhost:3020/",publicBasename:"react-boilerplate/"}}})[key]},getNodeEnvMode:function getNodeEnvMode(){return svc.getNodeEnvByKey("NODE_ENV")||"test"},isProduction:function isProduction(){return"production"===svc.getNodeEnvMode()},isDevelopment:function isDevelopment(){return"development"===svc.getNodeEnvMode()},isGhPages:function isGhPages(){return"gh-pages"===svc.getNodeEnvMode()},isTest:function isTest(){return!svc.getNodeEnvMode()||"test"===svc.getNodeEnvMode()}}},5:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return ENTITY_KEY}),__webpack_require__.d(__webpack_exports__,"b",function(){return INITIAL_STATE});const ENTITY_KEY={FOO:"foo",BAR:"bar",BAZ:"baz"},INITIAL_STATE={entities:{[ENTITY_KEY.FOO]:{},[ENTITY_KEY.BAR]:{},[ENTITY_KEY.BAZ]:{}},counter:0}},69:function(module,exports){module.exports="data:image/png;base64,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"},80:function(module,exports,__webpack_require__){"use strict";let common=__webpack_require__(81);module.exports={getPropertyValue:function getPropertyValue(obj,propName){let prop;if(common.__hasValue(obj)&&common.__hasValue(propName)){prop=obj;const propNames=propName.split(".");for(let i=0;i<propNames.length&&(prop=prop[propNames[i]],common.__hasValue(prop));i++);}return prop}}},81:function(module,exports){module.exports={__hasValue:function __hasValue(val){return null!=val}}}},[[177,1,2]]]);