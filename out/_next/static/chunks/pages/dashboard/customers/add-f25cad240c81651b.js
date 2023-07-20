(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1896],{19604:function(e,r,a){"use strict";a.d(r,{Z:function(){return $}});var l,t=a(63366),n=a(87462),o=a(67294),s=a(86010),i=a(94780),d=a(41796),u=a(81719),c=a(78884),h=a(36622),m=a(70918),x=a(34867),f=a(1588);function p(e){return(0,x.Z)("MuiAlert",e)}let v=(0,f.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var g=a(80562),Z=a(58175),j=a(85893),b=(0,Z.Z)((0,j.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),C=(0,Z.Z)((0,j.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),y=(0,Z.Z)((0,j.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),N=(0,Z.Z)((0,j.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),w=a(96903);let A=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],B=e=>{let{variant:r,color:a,severity:l,classes:t}=e,n={root:["root",`${r}${(0,h.Z)(a||l)}`,`${r}`],icon:["icon"],message:["message"],action:["action"]};return(0,i.Z)(n,p,t)},S=(0,u.ZP)(m.Z,{name:"MuiAlert",slot:"Root",overridesResolver(e,r){let{ownerState:a}=e;return[r.root,r[a.variant],r[`${a.variant}${(0,h.Z)(a.color||a.severity)}`]]}})(({theme:e,ownerState:r})=>{let a="light"===e.palette.mode?d._j:d.$n,l="light"===e.palette.mode?d.$n:d._j,t=r.color||r.severity;return(0,n.Z)({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},t&&"standard"===r.variant&&{color:e.vars?e.vars.palette.Alert[`${t}Color`]:a(e.palette[t].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${t}StandardBg`]:l(e.palette[t].light,.9),[`& .${v.icon}`]:e.vars?{color:e.vars.palette.Alert[`${t}IconColor`]}:{color:"dark"===e.palette.mode?e.palette[t].main:e.palette[t].light}},t&&"outlined"===r.variant&&{color:e.vars?e.vars.palette.Alert[`${t}Color`]:a(e.palette[t].light,.6),border:`1px solid ${(e.vars||e).palette[t].light}`,[`& .${v.icon}`]:e.vars?{color:e.vars.palette.Alert[`${t}IconColor`]}:{color:"dark"===e.palette.mode?e.palette[t].main:e.palette[t].light}},t&&"filled"===r.variant&&(0,n.Z)({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${t}FilledColor`],backgroundColor:e.vars.palette.Alert[`${t}FilledBg`]}:{backgroundColor:"dark"===e.palette.mode?e.palette[t].dark:e.palette[t].main,color:e.palette.getContrastText("dark"===e.palette.mode?e.palette[t].dark:e.palette[t].main)}))}),T=(0,u.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,r)=>r.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),M=(0,u.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,r)=>r.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),_=(0,u.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,r)=>r.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),R={success:(0,j.jsx)(b,{fontSize:"inherit"}),warning:(0,j.jsx)(C,{fontSize:"inherit"}),error:(0,j.jsx)(y,{fontSize:"inherit"}),info:(0,j.jsx)(N,{fontSize:"inherit"})},W=o.forwardRef(function(e,r){let a=(0,c.Z)({props:e,name:"MuiAlert"}),{action:o,children:i,className:d,closeText:u="Close",color:h,icon:m,iconMapping:x=R,onClose:f,role:p="alert",severity:v="success",variant:Z="standard"}=a,b=(0,t.Z)(a,A),C=(0,n.Z)({},a,{color:h,severity:v,variant:Z}),y=B(C);return(0,j.jsxs)(S,(0,n.Z)({role:p,elevation:0,ownerState:C,className:(0,s.Z)(y.root,d),ref:r},b,{children:[!1!==m?(0,j.jsx)(T,{ownerState:C,className:y.icon,children:m||x[v]||R[v]}):null,(0,j.jsx)(M,{ownerState:C,className:y.message,children:i}),null!=o?(0,j.jsx)(_,{ownerState:C,className:y.action,children:o}):null,null==o&&f?(0,j.jsx)(_,{ownerState:C,className:y.action,children:(0,j.jsx)(g.Z,{size:"small","aria-label":u,title:u,color:"inherit",onClick:f,children:l||(l=(0,j.jsx)(w.Z,{fontSize:"small"}))})}):null]}))});var $=W},96903:function(e,r,a){"use strict";a(67294);var l=a(58175),t=a(85893);r.Z=(0,l.Z)((0,t.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},30065:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/customers/add",function(){return a(63266)}])},63266:function(e,r,a){"use strict";a.r(r);var l=a(47568),t=a(20414),n=a(85893),o=a(67294),s=a(9008),i=a.n(s),d=a(61953),u=a(36336),c=a(79072),h=a(29630),m=a(54225),x=a(49837),f=a(67836),p=a(55343),v=a(58316),g=a(53442),Z=a(31538),j=a(75158);a(45352);var b=a(98875),C=a(31772);a(9868);var y=a(46723);a(84747),a(21392),a(97169),a(2248);var N=a(38682);a(31644);var w=a(11163),A=a(74231),B=a(82580),S=a(32631),T=a(70754),M=a(19604),_=a(89731),R=a(41664),W=a.n(R),$=a(36788),k=function(){(0,y.s)(),(0,o.useRef)(null),(0,w.useRouter)();var e=(0,_.a)().register,r=(0,o.useState)(!1);r[0],r[1];var a,s=(0,o.useState)(!1),b=s[0],C=s[1],R=(0,o.useState)(!1),k=R[0],z=R[1],L=(0,B.TA)({initialValues:{email:"",password:"",title:"",firstName:"",lastName:"",mobile:"",officeTel:"",enabled:!1,companyId:1,username:"",userRole:1,submit:null},validationSchema:A.Ry({email:A.Z_().email("Must be a valid email").max(255).required("Email is required"),title:A.Z_().max(255).required("Title is required"),firstName:A.Z_().max(255).required("First Name is required"),lastName:A.Z_().max(255).required("Last Name is required"),username:A.Z_().max(255).required("Username is required"),mobile:A.Z_().max(255).required("Mobile no is required"),password:A.Z_().min(7).max(255).required("Password is required")}),onSubmit:(a=(0,l.Z)(function(r,a){var l,n;return(0,t.__generator)(this,function(a){return z(!0),delete(l=r).submit,e(l)?C(!0):C(!1),z(!1),[2]})}),function(e,r){return a.apply(this,arguments)})});return(0,o.useEffect)(function(){N.w.push({event:"page_view"})},[]),(0,o.useEffect)(function(){},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i(),{children:(0,n.jsx)("title",{children:"Dashboard: Add User"})}),(0,n.jsx)(d.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,n.jsxs)(u.Z,{maxWidth:"xl",children:[(0,n.jsx)(d.Z,{sx:{mb:4},children:(0,n.jsxs)(c.ZP,{container:!0,justifyContent:"space-between",spacing:3,children:[(0,n.jsx)(c.ZP,{item:!0,children:(0,n.jsx)(h.Z,{variant:"h4",children:"Add User"})}),(0,n.jsx)(c.ZP,{item:!0,children:(0,n.jsx)(W(),{href:"/dashboard/customers",children:(0,n.jsx)(m.Z,{variant:"contained",children:"Cancel"})})})]})}),(0,n.jsx)(d.Z,{sx:{justifyContent:"center",width:"100%"},children:(0,n.jsx)(x.Z,{sx:{maxWidth:"sm",margin:"0px auto"},children:(0,n.jsxs)(u.Z,{sx:{py:{xs:"20px",md:"40px"}},children:[(0,n.jsxs)(d.Z,{sx:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,n.jsx)(W(),{href:"/",passHref:!0,children:(0,n.jsx)("a",{children:(0,n.jsx)($.T,{sx:{height:40,width:40}})})}),(0,n.jsx)(h.Z,{variant:"h4",children:"Add User"}),(0,n.jsx)(h.Z,{color:"textSecondary",sx:{mt:2},variant:"body2",children:"Add user on the internal platform"})]}),(0,n.jsxs)("form",{noValidate:!0,onSubmit:L.handleSubmit,children:[(0,n.jsx)(f.Z,{autoFocus:!0,error:Boolean(L.touched.title&&L.errors.title),fullWidth:!0,helperText:L.touched.title&&L.errors.title,label:"Title",margin:"normal",name:"title",onBlur:L.handleBlur,onChange:L.handleChange,value:L.values.title}),(0,n.jsx)(f.Z,{autoFocus:!0,error:Boolean(L.touched.firstName&&L.errors.firstName),fullWidth:!0,helperText:L.touched.firstName&&L.errors.firstName,label:"First Name",margin:"normal",name:"firstName",onBlur:L.handleBlur,onChange:L.handleChange,value:L.values.firstName}),(0,n.jsx)(f.Z,{autoFocus:!0,error:Boolean(L.touched.lastName&&L.errors.lastName),fullWidth:!0,helperText:L.touched.lastName&&L.errors.lastName,label:"Last Name",margin:"normal",name:"lastName",onBlur:L.handleBlur,onChange:L.handleChange,value:L.values.lastName}),(0,n.jsx)(f.Z,{autoFocus:!0,error:Boolean(L.touched.username&&L.errors.username),fullWidth:!0,helperText:L.touched.username&&L.errors.username,label:"Username",margin:"normal",name:"username",onBlur:L.handleBlur,onChange:L.handleChange,value:L.values.username}),(0,n.jsx)(f.Z,{autoFocus:!0,error:Boolean(L.touched.email&&L.errors.email),fullWidth:!0,helperText:L.touched.email&&L.errors.email,label:"Email",margin:"normal",name:"email",type:"email",onBlur:L.handleBlur,onChange:L.handleChange,value:L.values.email}),(0,n.jsx)(f.Z,{error:Boolean(L.touched.password&&L.errors.password),fullWidth:!0,helperText:L.touched.password&&L.errors.password,label:"Password",margin:"normal",name:"password",onBlur:L.handleBlur,onChange:L.handleChange,type:"password",value:L.values.password}),(0,n.jsx)(f.Z,{autoFocus:!0,error:Boolean(L.touched.mobile&&L.errors.mobile),fullWidth:!0,helperText:L.touched.mobile&&L.errors.mobile,label:"Mobile No",margin:"normal",name:"mobile",onBlur:L.handleBlur,onChange:L.handleChange,value:L.values.mobile}),(0,n.jsx)(f.Z,{autoFocus:!0,error:Boolean(L.touched.officeTel&&L.errors.officeTel),fullWidth:!0,helperText:L.touched.officeTel&&L.errors.officeTel,label:"Office Tel",margin:"normal",name:"officeTel",onBlur:L.handleBlur,onChange:L.handleChange,value:L.values.officeTel}),(0,n.jsxs)(p.Z,{fullWidth:!0,margin:"normal",children:[(0,n.jsx)(v.Z,{id:"demo-simple-select-helper-label",children:"User Role"}),(0,n.jsxs)(g.Z,{autoFocus:!0,error:Boolean(L.touched.userRole&&L.errors.userRole),fullWidth:!0,helperText:L.touched.userRole&&L.errors.userRole,value:L.values.userRole,label:"Role",margin:"normal",name:"userRole",onChange:L.handleChange,children:[(0,n.jsx)(Z.Z,{value:1,children:"Director"}),(0,n.jsx)(Z.Z,{value:2,children:"Coach"}),(0,n.jsx)(Z.Z,{value:3,children:"Coachee"})]})]}),(0,n.jsxs)(d.Z,{sx:{alignItems:"center",display:"flex",ml:-1,mt:2},children:[(0,n.jsx)(j.Z,{checked:L.values.enabled,name:"enabled",onChange:L.handleChange}),(0,n.jsx)(h.Z,{color:"textSecondary",variant:"body2",children:"Enabled"})]}),L.errors.submit&&(0,n.jsx)(d.Z,{sx:{mt:3},children:(0,n.jsx)(S.Z,{error:!0,children:L.errors.submit})}),(0,n.jsx)(d.Z,{sx:{mt:2},children:(0,n.jsx)(m.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:k,children:"Add User"})}),k&&(0,n.jsx)(d.Z,{sx:{display:"flex",justifyContent:"center",mt:2},children:(0,n.jsx)(T.Z,{})}),b&&(0,n.jsx)(d.Z,{sx:{mt:2},children:(0,n.jsx)(M.Z,{severity:"info",children:(0,n.jsx)("div",{children:(0,n.jsx)("b",{children:" User added successfully "})})})})]})]})})})]})})]})};k.getLayout=function(e){return(0,n.jsx)(b.a,{children:(0,n.jsx)(C.c,{children:e})})},r.default=k}},function(e){e.O(0,[7760,8576,512,7836,6049,539,3837,6755,1557,3958,100,939,551,2077,912,8863,6808,9774,2888,179],function(){return e(e.s=30065)}),_N_E=e.O()}]);