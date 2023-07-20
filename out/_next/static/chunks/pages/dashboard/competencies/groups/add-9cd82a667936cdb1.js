(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9545],{19604:function(e,t,r){"use strict";r.d(t,{Z:function(){return E}});var n,i=r(63366),o=r(87462),a=r(67294),s=r(86010),l=r(94780),c=r(41796),d=r(81719),u=r(78884),h=r(36622),p=r(70918),x=r(34867),m=r(1588);function f(e){return(0,x.Z)("MuiAlert",e)}let v=(0,m.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var Z=r(80562),g=r(58175),j=r(85893),C=(0,g.Z)((0,j.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),y=(0,g.Z)((0,j.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),b=(0,g.Z)((0,j.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),A=(0,g.Z)((0,j.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),S=r(96903);let M=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],w=e=>{let{variant:t,color:r,severity:n,classes:i}=e,o={root:["root",`${t}${(0,h.Z)(r||n)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return(0,l.Z)(o,f,i)},_=(0,d.ZP)(p.Z,{name:"MuiAlert",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,t[r.variant],t[`${r.variant}${(0,h.Z)(r.color||r.severity)}`]]}})(({theme:e,ownerState:t})=>{let r="light"===e.palette.mode?c._j:c.$n,n="light"===e.palette.mode?c.$n:c._j,i=t.color||t.severity;return(0,o.Z)({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},i&&"standard"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${i}Color`]:r(e.palette[i].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${i}StandardBg`]:n(e.palette[i].light,.9),[`& .${v.icon}`]:e.vars?{color:e.vars.palette.Alert[`${i}IconColor`]}:{color:"dark"===e.palette.mode?e.palette[i].main:e.palette[i].light}},i&&"outlined"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${i}Color`]:r(e.palette[i].light,.6),border:`1px solid ${(e.vars||e).palette[i].light}`,[`& .${v.icon}`]:e.vars?{color:e.vars.palette.Alert[`${i}IconColor`]}:{color:"dark"===e.palette.mode?e.palette[i].main:e.palette[i].light}},i&&"filled"===t.variant&&(0,o.Z)({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${i}FilledColor`],backgroundColor:e.vars.palette.Alert[`${i}FilledBg`]}:{backgroundColor:"dark"===e.palette.mode?e.palette[i].dark:e.palette[i].main,color:e.palette.getContrastText("dark"===e.palette.mode?e.palette[i].dark:e.palette[i].main)}))}),$=(0,d.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),k=(0,d.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),z=(0,d.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),R={success:(0,j.jsx)(C,{fontSize:"inherit"}),warning:(0,j.jsx)(y,{fontSize:"inherit"}),error:(0,j.jsx)(b,{fontSize:"inherit"}),info:(0,j.jsx)(A,{fontSize:"inherit"})},L=a.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiAlert"}),{action:a,children:l,className:c,closeText:d="Close",color:h,icon:p,iconMapping:x=R,onClose:m,role:f="alert",severity:v="success",variant:g="standard"}=r,C=(0,i.Z)(r,M),y=(0,o.Z)({},r,{color:h,severity:v,variant:g}),b=w(y);return(0,j.jsxs)(_,(0,o.Z)({role:f,elevation:0,ownerState:y,className:(0,s.Z)(b.root,c),ref:t},C,{children:[!1!==p?(0,j.jsx)($,{ownerState:y,className:b.icon,children:p||x[v]||R[v]}):null,(0,j.jsx)(k,{ownerState:y,className:b.message,children:l}),null!=a?(0,j.jsx)(z,{ownerState:y,className:b.action,children:a}):null,null==a&&m?(0,j.jsx)(z,{ownerState:y,className:b.action,children:(0,j.jsx)(Z.Z,{size:"small","aria-label":d,title:d,color:"inherit",onClick:m,children:n||(n=(0,j.jsx)(S.Z,{fontSize:"small"}))})}):null]}))});var E=L},49837:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(87462),i=r(63366),o=r(67294),a=r(86010),s=r(94780),l=r(81719),c=r(78884),d=r(70918),u=r(34867),h=r(1588);function p(e){return(0,u.Z)("MuiCard",e)}(0,h.Z)("MuiCard",["root"]);var x=r(85893);let m=["className","raised"],f=e=>{let{classes:t}=e;return(0,s.Z)({root:["root"]},p,t)},v=(0,l.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),Z=o.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiCard"}),{className:o,raised:s=!1}=r,l=(0,i.Z)(r,m),d=(0,n.Z)({},r,{raised:s}),u=f(d);return(0,x.jsx)(v,(0,n.Z)({className:(0,a.Z)(u.root,o),elevation:s?8:void 0,ref:t,ownerState:d},l))});var g=Z},96903:function(e,t,r){"use strict";r(67294);var n=r(58175),i=r(85893);t.Z=(0,n.Z)((0,i.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},9890:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/competencies/groups/add",function(){return r(65072)}])},46723:function(e,t,r){"use strict";r.d(t,{s:function(){return i}});var n=r(67294),i=function(){var e=(0,n.useRef)(!1);return(0,n.useEffect)(function(){return e.current=!0,function(){e.current=!1}},[]),(0,n.useCallback)(function(){return e.current},[])}},65072:function(e,t,r){"use strict";r.r(t);var n=r(47568),i=r(20414),o=r(85893),a=r(67294),s=r(9008),l=r.n(s),c=r(61953),d=r(36336),u=r(79072),h=r(29630),p=r(54225),x=r(49837),m=r(67836),f=r(98875),v=r(31772),Z=r(46723),g=r(38682),j=r(31644),C=r(11163),y=r(74231),b=r(82580),A=r(32631),S=r(70754),M=r(19604),w=r(89731),_=r(41664),$=r.n(_),k=r(36788),z=function(){var e=(0,Z.s)();(0,a.useRef)(null),(0,C.useRouter)(),(0,w.a)().register;var t=(0,a.useState)(!1);t[0],t[1];var r,s=(0,a.useState)(!1),f=s[0],v=s[1],_=(0,a.useState)(!1),z=_[0],R=_[1],L=(0,b.TA)({initialValues:{title:"",submit:null},validationSchema:y.Ry({title:y.Z_().max(255).required("Title is required")}),onSubmit:(r=(0,n.Z)(function(t,r){var n,o;return(0,i.__generator)(this,function(i){switch(i.label){case 0:R(!0),delete(n=t).submit,i.label=1;case 1:return i.trys.push([1,3,,4]),[4,j.U.post("Competency/addCompetencyGroup",t).then(function(e){200===e.status&&v(!0)})];case 2:return i.sent(),[3,4];case 3:return o=i.sent(),console.error(o),e()&&(r.setStatus({success:!1}),r.setErrors({submit:o.message}),r.setSubmitting(!1)),[3,4];case 4:return R(!1),[2]}})}),function(e,t){return r.apply(this,arguments)})});return(0,a.useEffect)(function(){g.w.push({event:"page_view"})},[]),(0,a.useEffect)(function(){},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l(),{children:(0,o.jsx)("title",{children:"Dashboard: Add Competency Group"})}),(0,o.jsx)(c.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,o.jsxs)(d.Z,{maxWidth:"xl",children:[(0,o.jsx)(c.Z,{sx:{mb:4},children:(0,o.jsxs)(u.ZP,{container:!0,justifyContent:"space-between",spacing:3,children:[(0,o.jsx)(u.ZP,{item:!0,children:(0,o.jsx)(h.Z,{variant:"h4",children:"Add Competency Group"})}),(0,o.jsx)(u.ZP,{item:!0,children:(0,o.jsx)($(),{href:"/dashboard/competencies/groups",children:(0,o.jsx)(p.Z,{variant:"contained",children:"Cancel"})})})]})}),(0,o.jsx)(c.Z,{sx:{justifyContent:"center",width:"100%"},children:(0,o.jsx)(x.Z,{sx:{maxWidth:"sm",margin:"0px auto"},children:(0,o.jsxs)(d.Z,{sx:{py:{xs:"20px",md:"40px"}},children:[(0,o.jsxs)(c.Z,{sx:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,o.jsx)($(),{href:"/",passHref:!0,children:(0,o.jsx)("a",{children:(0,o.jsx)(k.T,{sx:{height:40,width:40}})})}),(0,o.jsx)(h.Z,{variant:"h4",children:"Add Competency Group"}),(0,o.jsx)(h.Z,{color:"textSecondary",sx:{mt:2},variant:"body2",children:"Add competency group on the internal platform"})]}),(0,o.jsxs)("form",{noValidate:!0,onSubmit:L.handleSubmit,children:[(0,o.jsx)(m.Z,{autoFocus:!0,error:Boolean(L.touched.title&&L.errors.title),fullWidth:!0,helperText:L.touched.title&&L.errors.title,label:"Title",margin:"normal",name:"title",onBlur:L.handleBlur,onChange:L.handleChange,value:L.values.title}),L.errors.submit&&(0,o.jsx)(c.Z,{sx:{mt:3},children:(0,o.jsx)(A.Z,{error:!0,children:L.errors.submit})}),(0,o.jsx)(c.Z,{sx:{mt:2},children:(0,o.jsx)(p.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:z,children:"Add Competency Group"})}),z&&(0,o.jsx)(c.Z,{sx:{display:"flex",justifyContent:"center",mt:2},children:(0,o.jsx)(S.Z,{})}),f&&(0,o.jsx)(c.Z,{sx:{mt:2},children:(0,o.jsx)(M.Z,{severity:"info",children:(0,o.jsx)("div",{children:(0,o.jsx)("b",{children:" Competency Group Added Successfully "})})})})]})]})})})]})})]})};z.getLayout=function(e){return(0,o.jsx)(f.a,{children:(0,o.jsx)(v.c,{children:e})})},t.default=z}},function(e){e.O(0,[7760,8576,512,7836,6049,539,3837,6755,1557,3958,939,551,8863,9774,2888,179],function(){return e(e.s=9890)}),_N_E=e.O()}]);