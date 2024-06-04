/*! For license information please see 0a8ac982.537a6c4c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[303158],{889502:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(824246),o=t(511151);const i={id:"provider",title:"VMware Cloud Authentication Provider",sidebar_label:"VMware Cloud",description:"Adding VMware Cloud as an authentication provider in Backstage"},a=void 0,s={id:"auth/vmware-cloud/provider",title:"VMware Cloud Authentication Provider",description:"Adding VMware Cloud as an authentication provider in Backstage",source:"@site/../docs/auth/vmware-cloud/provider.md",sourceDirName:"auth/vmware-cloud",slug:"/auth/vmware-cloud/provider",permalink:"/docs/auth/vmware-cloud/provider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/vmware-cloud/provider.md",tags:[],version:"current",frontMatter:{id:"provider",title:"VMware Cloud Authentication Provider",sidebar_label:"VMware Cloud",description:"Adding VMware Cloud as an authentication provider in Backstage"},sidebar:"docs",previous:{title:"OneLogin",permalink:"/docs/auth/onelogin/provider"},next:{title:"Sign-in Identities and Resolvers",permalink:"/docs/auth/identity-resolver"}},c={},l=[{value:"Create an OAuth App in the VMware Cloud Console",id:"create-an-oauth-app-in-the-vmware-cloud-console",level:2},{value:"Install the provider in the backend",id:"install-the-provider-in-the-backend",level:2},{value:"New backend system",id:"new-backend-system",level:3},{value:"Old backend system",id:"old-backend-system",level:3},{value:"Add to Sign-in Page",id:"add-to-sign-in-page",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Resolvers",id:"resolvers",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Backstage comes with an auth provider module to allow users to sign-in with\ntheir VMware Cloud account. This page describes some actions within the VMware\nCloud Console and within a Backstage app required to enable this capability."}),"\n",(0,r.jsx)(n.h2,{id:"create-an-oauth-app-in-the-vmware-cloud-console",children:"Create an OAuth App in the VMware Cloud Console"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Log in to the ",(0,r.jsx)(n.a,{href:"https://console.cloud.vmware.com",children:"VMware Cloud Console"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Navigate to ",(0,r.jsx)(n.a,{href:"https://console.cloud.vmware.com/csp/gateway/portal/#/consumer/usermgmt/oauth-apps",children:"Identity & Access Management > OAuth Apps"}),"\nand click the ",(0,r.jsx)(n.a,{href:"https://console.cloud.vmware.com/csp/gateway/portal/#/consumer/usermgmt/oauth-apps/owned-apps/view",children:"Owned Apps"}),"\ntab -- if you are not an Organization Owner or Administrator but only a\nMember, you will not see this nav entry unless the ",(0,r.jsx)(n.strong,{children:"Developer"})," check box is\nselected for your role (see the ",(0,r.jsx)(n.a,{href:"https://docs.vmware.com/en/VMware-Cloud-services/services/Using-VMware-Cloud-Services/GUID-C11D3AAC-267C-4F16-A0E3-3EDF286EBE53.html#organization-roles-and-permissions-0",children:"Organization roles and permissions"}),"\ndocs for details)."]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Create App"}),", choose 'Web/Mobile app' and click ",(0,r.jsx)(n.strong,{children:"Continue"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Use default settings except:\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"App Name"})," and ",(0,r.jsx)(n.code,{children:"App Description"})," of your choosing."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Redirect URIs"}),": ",(0,r.jsx)(n.code,{children:"${baseUrl}/api/auth/vmwareCloudServices/handler/frame"}),"\nwhere ",(0,r.jsx)(n.code,{children:"baseUrl"})," is the URL where your Backstage backend can be reached;\nnote that VMware Cloud does not support the combination of an ",(0,r.jsx)(n.code,{children:"http://"}),"\nscheme and a ",(0,r.jsx)(n.code,{children:"localhost"})," hostname, so when testing locally it may help to\nset your backend base URL to ",(0,r.jsx)(n.code,{children:"http://127.0.0.1:7007"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Refresh Token"}),": check ",(0,r.jsx)(n.code,{children:"Issue refresh token"}),"; refresh tokens are required\nto prevent forcing users to re-login when they refresh their browser."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Define Scopes"}),": check ",(0,r.jsx)(n.code,{children:"OpenID"})," at the bottom."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Take note of the ",(0,r.jsx)(n.code,{children:"App ID"})," in the resulting modal; this is the client ID to be\nused by Backstage."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"install-the-provider-in-the-backend",children:"Install the provider in the backend"}),"\n",(0,r.jsx)(n.h3,{id:"new-backend-system",children:"New backend system"}),"\n",(0,r.jsxs)(n.p,{children:["Apps using the ",(0,r.jsx)(n.a,{href:"/docs/backend-system/",children:"new backend system"}),",\ncan enable the VMware Cloud provider with a small modification like:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"import { createBackend } from '@backstage/backend-defaults';\n\nconst backend = createBackend();\nbackend.add(import('@backstage/plugin-auth-backend'));\n/* highlight-add-start */\nbackend.add(\n  import('@backstage/plugin-auth-backend-module-vmware-cloud-provider'),\n);\n/* highlight-add-end */\nbackend.start();\n"})}),"\n",(0,r.jsx)(n.h3,{id:"old-backend-system",children:"Old backend system"}),"\n",(0,r.jsx)(n.p,{children:"This provider was added after the migration of the auth-backend plugin to the\nnew backend system, so no default provider factory was added. Because of this,\nthe installation procedure for old-style backends is slightly more involved:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/auth.ts"',children:"import {\n  DEFAULT_NAMESPACE,\n  stringifyEntityRef,\n} from '@backstage/catalog-model';\nimport {\n  createRouter,\n  providers,\n  defaultAuthProviderFactories,\n} from '@backstage/plugin-auth-backend';\nimport { Router } from 'express';\nimport { PluginEnvironment } from '../types';\n/* highlight-add-start */\nimport {\n  commonSignInResolvers,\n  createOAuthProviderFactory,\n} from '@backstage/plugin-auth-node';\nimport {\n  vmwareCloudAuthenticator,\n} from '@backstage/plugin-auth-backend-module-vmware-cloud-provider';\n/* highlight-add-end */\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  return await createRouter({\n    logger: env.logger,\n    config: env.config,\n    database: env.database,\n    discovery: env.discovery,\n    tokenManager: env.tokenManager,\n    providerFactories: {\n      ...defaultAuthProviderFactories,\n      /* highlight-add-start */\n      vmwareCloudServices: createOAuthProviderFactory({\n        authenticator: vmwareCloudAuthenticator,\n        signInResolver:\n          commonSignInResolvers.emailLocalPartMatchingUserEntityName(),\n      }),\n      /* highlight-add-end */\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the above, ",(0,r.jsx)(n.code,{children:"commonSignInResolvers.emailLocalPartMatchingUserEntityName()"}),"\ncan be replaced with a more suitable resolver for the app in question."]}),"\n",(0,r.jsx)(n.h2,{id:"add-to-sign-in-page",children:"Add to Sign-in Page"}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"/docs/auth/#sign-in-configuration",children:"Sign-In Configuration"})," docs for\ngeneral guidance, but as an example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:"/* highlight-add-start */\nimport { vmwareCloudAuthApiRef } from '@backstage/core-plugin-api';\nimport { SignInPage } from '@backstage/core-components';\n/* highlight-add-end */\n\nconst app = createApp({\n  /* highlight-add-start */\n  components: {\n    SignInPage: props => (\n      <SignInPage\n        {...props}\n        provider={{\n          id: 'vmware-cloud-auth-provider',\n          title: 'VMware Cloud',\n          message: 'Sign in using VMware Cloud',\n          apiRef: vmwareCloudAuthApiRef,\n        }}\n      />\n    ),\n  },\n  /* highlight-add-end */\n  // ..\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Add the following to your ",(0,r.jsx)(n.code,{children:"app-config.yaml"})," under the root ",(0,r.jsx)(n.code,{children:"auth"})," configuration:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"auth:\n  session:\n    secret: your session secret\n  environment: development\n  providers:\n    vmwareCloudServices:\n      development:\n        clientId: ${APP_ID}\n        organizationId: ${ORG_ID}\n        signIn:\n          resolvers:\n            # typically you would pick one of these\n            - resolver: emailMatchingUserEntityProfileEmail\n            - resolver: emailLocalPartMatchingUserEntityName\n            - resolver: vmwareCloudSignInResolvers\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Where ",(0,r.jsx)(n.code,{children:"APP_ID"})," refers to the ID retrieved when creating the OAuth App, and\n",(0,r.jsx)(n.code,{children:"ORG_ID"})," is the ",(0,r.jsx)(n.a,{href:"https://docs.vmware.com/en/VMware-Cloud-services/services/Using-VMware-Cloud-Services/GUID-CF9E9318-B811-48CF-8499-9419997DC1F8.html#view-the-organization-id-1",children:"long ID of the Organization"}),"\nin VMware Cloud for which you wish to enable sign-in."]}),"\n",(0,r.jsxs)(n.p,{children:["Note that VMware Cloud requires OAuth Apps to use\n",(0,r.jsx)(n.a,{href:"https://oauth.net/2/pkce/",children:"PKCE"})," when performing authorization code flows; the\nlibrary used by this provider requires the use of Express session middleware to\ndo this. Therefore the value ",(0,r.jsx)(n.code,{children:"your session secret"})," under ",(0,r.jsx)(n.code,{children:"auth.session.secret"}),"\nshould be replaced with a long, complex and unique string which will act as a\nkey for signing session cookies set by Backstage."]}),"\n",(0,r.jsx)(n.h3,{id:"resolvers",children:"Resolvers"}),"\n",(0,r.jsx)(n.p,{children:"This provider includes several resolvers out of the box that you can use:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"emailMatchingUserEntityProfileEmail"}),": Matches the email address from the auth provider with the User entity that has a matching ",(0,r.jsx)(n.code,{children:"spec.profile.email"}),". If no match is found it will throw a ",(0,r.jsx)(n.code,{children:"NotFoundError"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"emailLocalPartMatchingUserEntityName"}),": Matches the ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Email_address#Local-part",children:"local part"})," of the email address from the auth provider with the User entity that has a matching ",(0,r.jsx)(n.code,{children:"name"}),". If no match is found it will throw a ",(0,r.jsx)(n.code,{children:"NotFoundError"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"vmwareCloudSignInResolvers"}),": Matches the email address from the auth provider with the User entity that has a matching ",(0,r.jsx)(n.code,{children:"spec.profile.email"}),". If no match is found it will sign in the user without associating with a catalog user."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Note",type:"note",children:(0,r.jsxs)(n.p,{children:["The resolvers will be tried in order, but will only be skipped if they throw a ",(0,r.jsx)(n.code,{children:"NotFoundError"}),"."]})}),"\n",(0,r.jsxs)(n.p,{children:["If these resolvers do not fit your needs you can build a custom resolver, this is covered in the ",(0,r.jsx)(n.a,{href:"/docs/auth/identity-resolver#building-custom-resolvers",children:"Building Custom Resolvers"})," section of the Sign-in Identities and Resolvers documentation."]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},371426:(e,n,t)=>{var r=t(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,i={},l=null,d=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,r)&&!c.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:l,ref:d,props:i,_owner:s.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||f}function y(){}function b(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||f}v.prototype.isReactComponent={},v.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var w=b.prototype=new y;w.constructor=b,m(w,v.prototype),w.isPureReactComponent=!0;var x=Array.isArray,k=Object.prototype.hasOwnProperty,j={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function _(e,n,r){var o,i={},a=null,s=null;if(null!=n)for(o in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(a=""+n.key),n)k.call(n,o)&&!C.hasOwnProperty(o)&&(i[o]=n[o]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:t,type:e,key:a,ref:s,props:i,_owner:j.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var E=/\/+/g;function A(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function R(e,n,o,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case t:case r:c=!0}}if(c)return a=a(c=e),e=""===i?"."+A(c,0):i,x(a)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),R(a,n,o,"",(function(e){return e}))):null!=a&&(S(a)&&(a=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+e)),n.push(a)),1;if(c=0,i=""===i?".":i+":",x(e))for(var l=0;l<e.length;l++){var d=i+A(s=e[l],l);c+=R(s,n,o,d,a)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(s=e.next()).done;)c+=R(s=s.value,n,o,d=i+A(s,l++),a);else if("object"===s)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}function I(e,n,t){if(null==e)return e;var r=[],o=0;return R(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function P(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var M={current:null},O={transition:null},V={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:O,ReactCurrentOwner:j};n.Children={map:I,forEach:function(e,n,t){I(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return I(e,(function(){n++})),n},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=v,n.Fragment=o,n.Profiler=a,n.PureComponent=b,n.StrictMode=i,n.Suspense=d,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=n){if(void 0!==n.ref&&(a=n.ref,s=j.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)k.call(n,l)&&!C.hasOwnProperty(l)&&(o[l]=void 0===n[l]&&void 0!==c?c[l]:n[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];o.children=c}return{$$typeof:t,type:e.type,key:i,ref:a,props:o,_owner:s}},n.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=_,n.createFactory=function(e){var n=_.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=S,n.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:P}},n.memo=function(e,n){return{$$typeof:u,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=O.transition;O.transition={};try{e()}finally{O.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return M.current.useCallback(e,n)},n.useContext=function(e){return M.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return M.current.useDeferredValue(e)},n.useEffect=function(e,n){return M.current.useEffect(e,n)},n.useId=function(){return M.current.useId()},n.useImperativeHandle=function(e,n,t){return M.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return M.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return M.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return M.current.useMemo(e,n)},n.useReducer=function(e,n,t){return M.current.useReducer(e,n,t)},n.useRef=function(e){return M.current.useRef(e)},n.useState=function(e){return M.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return M.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return M.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var r=t(667294);const o={},i=r.createContext(o);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);