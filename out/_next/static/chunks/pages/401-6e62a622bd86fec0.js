(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1032],{36336:function(e,t,n){"use strict";n.d(t,{Z:function(){return W}});var i=n(63366),r=n(87462),a=n(67294),o=n(86010),s=n(28320),d=n(34867),u=n(94780),l=n(29628),c=n(70182);let h=(0,c.ZP)();var m=n(66500),p=n(85893);let x=["className","component","disableGutters","fixed","maxWidth","classes"],f=(0,m.Z)(),b=h("div",{name:"MuiContainer",slot:"Root",overridesResolver(e,t){let{ownerState:n}=e;return[t.root,t[`maxWidth${(0,s.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),v=e=>(0,l.Z)({props:e,name:"MuiContainer",defaultTheme:f}),g=(e,t)=>{let n=e=>(0,d.Z)(t,e),{classes:i,fixed:r,disableGutters:a,maxWidth:o}=e,l={root:["root",o&&`maxWidth${(0,s.Z)(String(o))}`,r&&"fixed",a&&"disableGutters"]};return(0,u.Z)(l,n,i)};var Z=n(36622),w=n(81719),k=n(78884);let y=function(e={}){let{createStyledComponent:t=b,useThemeProps:n=v,componentName:s="MuiContainer"}=e,d=t(({theme:e,ownerState:t})=>(0,r.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,n)=>{let i=e.breakpoints.values[n];return 0!==i&&(t[e.breakpoints.up(n)]={maxWidth:`${i}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>(0,r.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})),u=a.forwardRef(function(e,t){let a=n(e),{className:u,component:l="div",disableGutters:c=!1,fixed:h=!1,maxWidth:m="lg"}=a,f=(0,i.Z)(a,x),b=(0,r.Z)({},a,{component:l,disableGutters:c,fixed:h,maxWidth:m}),v=g(b,s);return(0,p.jsx)(d,(0,r.Z)({as:l,ownerState:b,className:(0,o.Z)(v.root,u),ref:t},f))});return u}({createStyledComponent:(0,w.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver(e,t){let{ownerState:n}=e;return[t.root,t[`maxWidth${(0,Z.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,k.Z)({props:e,name:"MuiContainer"})});var W=y},61225:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i,r=n(67294),a=n(34168),o=n(20539),s=n(63289);function d(e,t,n,i,a){let o="undefined"!=typeof window&&void 0!==window.matchMedia,[d,u]=r.useState(()=>a&&o?n(e).matches:i?i(e).matches:t);return(0,s.Z)(()=>{let t=!0;if(!o)return;let i=n(e),r=()=>{t&&u(i.matches)};return r(),i.addListener(r),()=>{t=!1,i.removeListener(r)}},[e,n,o]),d}let u=(i||(i=n.t(r,2))).useSyncExternalStore;function l(e,t,n,i){let a=r.useCallback(()=>t,[t]),o=r.useMemo(()=>{if(null!==i){let{matches:t}=i(e);return()=>t}return a},[a,e,i]),[s,d]=r.useMemo(()=>{if(null===n)return[a,()=>()=>{}];let t=n(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]},[a,n,e]),l=u(d,s,o);return l}function c(e,t={}){let n=(0,a.Z)(),i="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:r=!1,matchMedia:s=i?window.matchMedia:null,ssrMatchMedia:c=null,noSsr:h}=(0,o.Z)({name:"MuiUseMediaQuery",props:t,theme:n}),m="function"==typeof e?e(n):e;m=m.replace(/^@media( ?)/m,"");let p=(void 0!==u?l:d)(m,r,s,c,h);return p}},84721:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/401",function(){return n(27167)}])},27167:function(e,t,n){"use strict";n.r(t);var i=n(85893),r=n(67294),a=n(41664),o=n.n(a),s=n(9008),d=n.n(s),u=n(61225),l=n(61953),c=n(36336),h=n(29630),m=n(54225),p=n(62097),x=n(38682),f=function(){var e=(0,p.Z)(),t=(0,u.Z)(e.breakpoints.down("sm"));return(0,r.useEffect)(function(){x.w.push({event:"page_view"})},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d(),{children:(0,i.jsx)("title",{children:"Error: Authorization Required | Material Kit Pro"})}),(0,i.jsx)(l.Z,{component:"main",sx:{alignItems:"center",backgroundColor:"background.paper",display:"flex",flexGrow:1,py:"80px"},children:(0,i.jsxs)(c.Z,{maxWidth:"lg",children:[(0,i.jsx)(h.Z,{align:"center",variant:t?"h4":"h1",children:"401: Authorization required"}),(0,i.jsx)(h.Z,{align:"center",color:"textSecondary",sx:{mt:.5},variant:"subtitle2",children:"You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation."}),(0,i.jsx)(l.Z,{sx:{display:"flex",justifyContent:"center",mt:6},children:(0,i.jsx)(l.Z,{alt:"Under development",component:"img",src:"/static/error/error401_".concat(e.palette.mode,".svg"),sx:{height:"auto",maxWidth:"100%",width:400}})}),(0,i.jsx)(l.Z,{sx:{display:"flex",justifyContent:"center",mt:6},children:(0,i.jsx)(o(),{href:"/dashboard",passHref:!0,children:(0,i.jsx)(m.Z,{component:"a",variant:"outlined",children:"Back to Dashboard"})})})]})})]})};t.default=f}},function(e){e.O(0,[7760,9774,2888,179],function(){return e(e.s=84721)}),_N_E=e.O()}]);