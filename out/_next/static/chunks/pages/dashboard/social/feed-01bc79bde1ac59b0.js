(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6783],{36336:function(e,t,r){"use strict";r.d(t,{Z:function(){return _}});var i=r(63366),n=r(87462),a=r(67294),s=r(86010),o=r(28320),d=r(34867),u=r(94780),c=r(29628),l=r(70182);let h=(0,l.ZP)();var x=r(66500),m=r(85893);let p=["className","component","disableGutters","fixed","maxWidth","classes"],f=(0,x.Z)(),b=h("div",{name:"MuiContainer",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,t[`maxWidth${(0,o.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),g=e=>(0,c.Z)({props:e,name:"MuiContainer",defaultTheme:f}),v=(e,t)=>{let r=e=>(0,d.Z)(t,e),{classes:i,fixed:n,disableGutters:a,maxWidth:s}=e,c={root:["root",s&&`maxWidth${(0,o.Z)(String(s))}`,n&&"fixed",a&&"disableGutters"]};return(0,u.Z)(c,r,i)};var Z=r(36622),k=r(81719),j=r(78884);let W=function(e={}){let{createStyledComponent:t=b,useThemeProps:r=g,componentName:o="MuiContainer"}=e,d=t(({theme:e,ownerState:t})=>(0,n.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,r)=>{let i=e.breakpoints.values[r];return 0!==i&&(t[e.breakpoints.up(r)]={maxWidth:`${i}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>(0,n.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})),u=a.forwardRef(function(e,t){let a=r(e),{className:u,component:c="div",disableGutters:l=!1,fixed:h=!1,maxWidth:x="lg"}=a,f=(0,i.Z)(a,p),b=(0,n.Z)({},a,{component:c,disableGutters:l,fixed:h,maxWidth:x}),g=v(b,o);return(0,m.jsx)(d,(0,n.Z)({as:c,ownerState:b,className:(0,s.Z)(g.root,u),ref:t},f))});return u}({createStyledComponent:(0,k.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,t[`maxWidth${(0,Z.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,j.Z)({props:e,name:"MuiContainer"})});var _=W},17725:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/social/feed",function(){return r(72352)}])},72352:function(e,t,r){"use strict";r.r(t);var i=r(47568),n=r(20414),a=r(85893),s=r(67294),o=r(9008),d=r.n(o),u=r(61953),c=r(36336),l=r(29630),h=r(73477),x=r(98875),m=r(31772),p=r(39716),f=r(15021),b=r(46723),g=r(38682),v=function(){var e=(0,b.s)(),t=(0,s.useState)([]),r=t[0],o=t[1];(0,s.useEffect)(function(){g.w.push({event:"page_view"})},[]);var x=(0,s.useCallback)((0,i.Z)(function(){var t,r;return(0,n.__generator)(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,h.B.getFeed()];case 1:return t=i.sent(),e()&&o(t),[3,3];case 2:return r=i.sent(),console.error(r),[3,3];case 3:return[2]}})}),[e]);return(0,s.useEffect)(function(){x()},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d(),{children:(0,a.jsx)("title",{children:"Dashboard: Social Feed | Material Kit Pro"})}),(0,a.jsx)(u.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,a.jsxs)(c.Z,{maxWidth:"lg",children:[(0,a.jsxs)(u.Z,{sx:{mb:3},children:[(0,a.jsx)(l.Z,{color:"textSecondary",variant:"overline",children:"Social Feed"}),(0,a.jsx)(l.Z,{variant:"h4",children:"Here's what your connections posted"})]}),(0,a.jsx)(p.L,{}),r.map(function(e){return(0,a.jsx)(u.Z,{sx:{mt:3},children:(0,a.jsx)(f.d,{authorAvatar:e.author.avatar,authorName:e.author.name,comments:e.comments,createdAt:e.createdAt,isLiked:e.isLiked,likes:e.likes,media:e.media,message:e.message})},e.id)})]})})]})};v.getLayout=function(e){return(0,a.jsx)(x.a,{children:(0,a.jsx)(m.c,{children:e})})},t.default=v}},function(e){e.O(0,[7760,8576,512,7836,6049,3837,6755,1557,3958,1797,8863,4971,9774,2888,179],function(){return e(e.s=17725)}),_N_E=e.O()}]);