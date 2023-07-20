(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6310],{19604:function(e,r,t){"use strict";t.d(r,{Z:function(){return E}});var s,n=t(63366),l=t(87462),a=t(67294),i=t(86010),o=t(94780),d=t(41796),u=t(81719),c=t(78884),h=t(36622),m=t(70918),x=t(34867),p=t(1588);function f(e){return(0,x.Z)("MuiAlert",e)}let j=(0,p.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var v=t(80562),Z=t(58175),g=t(85893),b=(0,Z.Z)((0,g.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),y=(0,Z.Z)((0,g.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),C=(0,Z.Z)((0,g.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),w=(0,Z.Z)((0,g.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),S=t(96903);let N=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],A=e=>{let{variant:r,color:t,severity:s,classes:n}=e,l={root:["root",`${r}${(0,h.Z)(t||s)}`,`${r}`],icon:["icon"],message:["message"],action:["action"]};return(0,o.Z)(l,f,n)},_=(0,u.ZP)(m.Z,{name:"MuiAlert",slot:"Root",overridesResolver(e,r){let{ownerState:t}=e;return[r.root,r[t.variant],r[`${t.variant}${(0,h.Z)(t.color||t.severity)}`]]}})(({theme:e,ownerState:r})=>{let t="light"===e.palette.mode?d._j:d.$n,s="light"===e.palette.mode?d.$n:d._j,n=r.color||r.severity;return(0,l.Z)({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},n&&"standard"===r.variant&&{color:e.vars?e.vars.palette.Alert[`${n}Color`]:t(e.palette[n].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${n}StandardBg`]:s(e.palette[n].light,.9),[`& .${j.icon}`]:e.vars?{color:e.vars.palette.Alert[`${n}IconColor`]}:{color:"dark"===e.palette.mode?e.palette[n].main:e.palette[n].light}},n&&"outlined"===r.variant&&{color:e.vars?e.vars.palette.Alert[`${n}Color`]:t(e.palette[n].light,.6),border:`1px solid ${(e.vars||e).palette[n].light}`,[`& .${j.icon}`]:e.vars?{color:e.vars.palette.Alert[`${n}IconColor`]}:{color:"dark"===e.palette.mode?e.palette[n].main:e.palette[n].light}},n&&"filled"===r.variant&&(0,l.Z)({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${n}FilledColor`],backgroundColor:e.vars.palette.Alert[`${n}FilledBg`]}:{backgroundColor:"dark"===e.palette.mode?e.palette[n].dark:e.palette[n].main,color:e.palette.getContrastText("dark"===e.palette.mode?e.palette[n].dark:e.palette[n].main)}))}),B=(0,u.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,r)=>r.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),P=(0,u.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,r)=>r.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),T=(0,u.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,r)=>r.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),R={success:(0,g.jsx)(b,{fontSize:"inherit"}),warning:(0,g.jsx)(y,{fontSize:"inherit"}),error:(0,g.jsx)(C,{fontSize:"inherit"}),info:(0,g.jsx)(w,{fontSize:"inherit"})},q=a.forwardRef(function(e,r){let t=(0,c.Z)({props:e,name:"MuiAlert"}),{action:a,children:o,className:d,closeText:u="Close",color:h,icon:m,iconMapping:x=R,onClose:p,role:f="alert",severity:j="success",variant:Z="standard"}=t,b=(0,n.Z)(t,N),y=(0,l.Z)({},t,{color:h,severity:j,variant:Z}),C=A(y);return(0,g.jsxs)(_,(0,l.Z)({role:f,elevation:0,ownerState:y,className:(0,i.Z)(C.root,d),ref:r},b,{children:[!1!==m?(0,g.jsx)(B,{ownerState:y,className:C.icon,children:m||x[j]||R[j]}):null,(0,g.jsx)(P,{ownerState:y,className:C.message,children:o}),null!=a?(0,g.jsx)(T,{ownerState:y,className:C.action,children:a}):null,null==a&&p?(0,g.jsx)(T,{ownerState:y,className:C.action,children:(0,g.jsx)(v.Z,{size:"small","aria-label":u,title:u,color:"inherit",onClick:p,children:s||(s=(0,g.jsx)(S.Z,{fontSize:"small"}))})}):null]}))});var E=q},96903:function(e,r,t){"use strict";t(67294);var s=t(58175),n=t(85893);r.Z=(0,s.Z)((0,n.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},78216:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/customers/edit",function(){return t(87770)}])},87770:function(e,r,t){"use strict";t.r(r);var s=t(47568),n=t(20414),l=t(85893),a=t(67294),i=t(9008),o=t.n(i),d=t(61953),u=t(36336),c=t(79072),h=t(29630),m=t(54225),x=t(49837),p=t(67836),f=t(75158);t(45352);var j=t(98875),v=t(31772);t(9868);var Z=t(46723);t(84747),t(21392),t(97169),t(2248);var g=t(38682),b=t(31644),y=t(11163),C=t(74231),w=t(82580),S=t(32631),N=t(70754),A=t(19604),_=t(89731),B=t(41664),P=t.n(B),T=t(36788),R=function(){var e=(0,Z.s)();(0,a.useRef)(null);var r=(0,y.useRouter)();(0,_.a)().register;var t=(0,a.useState)(!1);t[0],t[1];var i,j,v,B=(0,a.useState)(!1),R=B[0],q=B[1],E=(0,a.useState)(!1),M=E[0],z=E[1],k=(0,w.TA)({initialValues:{userId:r.query.userId,employeeNumber:"",email:r.query.email,title:r.query.title,firstName:r.query.firstName,lastName:r.query.username,mobile:r.query.mobile,officeTel:r.query.officeTel,enabled:!0,companyId:1,username:r.query.username,submit:null},validationSchema:C.Ry({email:C.Z_().email("Must be a valid email").max(255).required("Email is required"),title:C.Z_().max(255).required("Title is required"),firstName:C.Z_().max(255).required("First Name is required"),lastName:C.Z_().max(255).required("Last Name is required"),username:C.Z_().max(255).required("Username is required"),mobile:C.Z_().max(255).required("Mobile no is required")}),onSubmit:(i=(0,s.Z)(function(r,t){var s,l;return(0,n.__generator)(this,function(n){switch(n.label){case 0:z(!0),delete(s=r).submit,delete s.password,delete s.userRole,console.log(s),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,b.U.post("User/editUser",r).then(function(e){200===e.status&&q(!0)})];case 2:return n.sent(),[3,4];case 3:return l=n.sent(),console.error(l),e()&&(t.setStatus({success:!1}),t.setErrors({submit:l.message}),t.setSubmitting(!1)),[3,4];case 4:return z(!1),[2]}})}),function(e,r){return i.apply(this,arguments)})}),I=(0,w.TA)({initialValues:{userId:r.query.userId,password:"",submit:null},validationSchema:C.Ry({password:C.Z_().min(7).max(255).required("Password is required")}),onSubmit:(j=(0,s.Z)(function(r,t){var s,l;return(0,n.__generator)(this,function(n){switch(n.label){case 0:z(!0),delete(s=r).submit,console.log(s),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,b.U.post("User/updatePassword",r).then(function(e){200===e.status&&q(!0)})];case 2:return n.sent(),[3,4];case 3:return l=n.sent(),console.error(l),e()&&(t.setStatus({success:!1}),t.setErrors({submit:l.message}),t.setSubmitting(!1)),[3,4];case 4:return z(!1),[2]}})}),function(e,r){return j.apply(this,arguments)})});(0,a.useEffect)(function(){g.w.push({event:"page_view"})},[]),(0,a.useEffect)(function(){},[]);var W,L=(v=(0,s.Z)(function(t){var s,l;return(0,n.__generator)(this,function(n){switch(n.label){case 0:z(!0),s={userId:r.query.userId,userRole:t},console.log(s),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,b.U.post("User/addRole",s).then(function(e){200===e.status&&q(!0)})];case 2:return n.sent(),[3,4];case 3:return l=n.sent(),console.error(l),e()&&(helpers.setStatus({success:!1}),helpers.setErrors({submit:l.message}),helpers.setSubmitting(!1)),[3,4];case 4:return z(!1),[2]}})}),function(e){return v.apply(this,arguments)}),U=(W=(0,s.Z)(function(t){var s,l;return(0,n.__generator)(this,function(n){switch(n.label){case 0:z(!0),s={userId:r.query.userId,userRole:t},console.log(s),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,b.U.post("User/removeRole",s).then(function(e){200===e.status&&q(!0)})];case 2:return n.sent(),[3,4];case 3:return l=n.sent(),console.error(l),e()&&(helpers.setStatus({success:!1}),helpers.setErrors({submit:l.message}),helpers.setSubmitting(!1)),[3,4];case 4:return z(!1),[2]}})}),function(e){return W.apply(this,arguments)});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o(),{children:(0,l.jsx)("title",{children:"Dashboard: Edit User"})}),(0,l.jsx)(d.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,l.jsxs)(u.Z,{maxWidth:"xl",children:[(0,l.jsx)(d.Z,{sx:{mb:4},children:(0,l.jsxs)(c.ZP,{container:!0,justifyContent:"space-between",spacing:3,children:[(0,l.jsx)(c.ZP,{item:!0,children:(0,l.jsx)(h.Z,{variant:"h4",children:"Edit User"})}),(0,l.jsx)(c.ZP,{item:!0,children:(0,l.jsx)(P(),{href:"/dashboard/customers",children:(0,l.jsx)(m.Z,{variant:"contained",children:"Cancel"})})})]})}),(0,l.jsx)(d.Z,{sx:{justifyContent:"center",width:"100%"},children:(0,l.jsxs)(x.Z,{sx:{maxWidth:"sm",margin:"0px auto"},children:[(0,l.jsxs)(u.Z,{sx:{py:{xs:"20px",md:"40px"}},children:[(0,l.jsxs)(d.Z,{sx:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,l.jsx)(P(),{href:"/",passHref:!0,children:(0,l.jsx)("a",{children:(0,l.jsx)(T.T,{sx:{height:40,width:40}})})}),(0,l.jsx)(h.Z,{variant:"h4",children:"Edit User"}),(0,l.jsx)(h.Z,{color:"textSecondary",sx:{mt:2},variant:"body2",children:"Edit user on the internal platform"})]}),(0,l.jsxs)("form",{noValidate:!0,onSubmit:k.handleSubmit,children:[(0,l.jsx)(p.Z,{autoFocus:!0,error:Boolean(k.touched.title&&k.errors.title),fullWidth:!0,helperText:k.touched.title&&k.errors.title,label:"Title",margin:"normal",name:"title",onBlur:k.handleBlur,onChange:k.handleChange,value:k.values.title}),(0,l.jsx)(p.Z,{autoFocus:!0,error:Boolean(k.touched.firstName&&k.errors.firstName),fullWidth:!0,helperText:k.touched.firstName&&k.errors.firstName,label:"First Name",margin:"normal",name:"firstName",onBlur:k.handleBlur,onChange:k.handleChange,value:k.values.firstName}),(0,l.jsx)(p.Z,{autoFocus:!0,error:Boolean(k.touched.lastName&&k.errors.lastName),fullWidth:!0,helperText:k.touched.lastName&&k.errors.lastName,label:"Last Name",margin:"normal",name:"lastName",onBlur:k.handleBlur,onChange:k.handleChange,value:k.values.lastName}),(0,l.jsx)(p.Z,{autoFocus:!0,error:Boolean(k.touched.employeeNumber&&k.errors.employeeNumber),fullWidth:!0,helperText:k.touched.employeeNumber&&k.errors.employeeNumber,label:"Employee Number",margin:"normal",name:"employeeNumber",onBlur:k.handleBlur,onChange:k.handleChange,value:k.values.employeeNumber}),(0,l.jsx)(p.Z,{autoFocus:!0,error:Boolean(k.touched.email&&k.errors.email),fullWidth:!0,helperText:k.touched.email&&k.errors.email,label:"Email",margin:"normal",name:"email",type:"email",onBlur:k.handleBlur,onChange:k.handleChange,value:k.values.email}),(0,l.jsx)(p.Z,{autoFocus:!0,error:Boolean(k.touched.mobile&&k.errors.mobile),fullWidth:!0,helperText:k.touched.mobile&&k.errors.mobile,label:"Mobile No",margin:"normal",name:"mobile",onBlur:k.handleBlur,onChange:k.handleChange,value:k.values.mobile}),(0,l.jsx)(p.Z,{autoFocus:!0,error:Boolean(k.touched.officeTel&&k.errors.officeTel),fullWidth:!0,helperText:k.touched.officeTel&&k.errors.officeTel,label:"Office Tel",margin:"normal",name:"officeTel",onBlur:k.handleBlur,onChange:k.handleChange,value:k.values.officeTel}),(0,l.jsxs)(d.Z,{sx:{alignItems:"center",display:"flex",ml:-1,mt:2},children:[(0,l.jsx)(f.Z,{checked:k.values.enabled,name:"enabled",onChange:k.handleChange}),(0,l.jsx)(h.Z,{color:"textSecondary",variant:"body2",children:"Enabled"})]}),k.errors.submit&&(0,l.jsx)(d.Z,{sx:{mt:3},children:(0,l.jsx)(S.Z,{error:!0,children:k.errors.submit})}),(0,l.jsx)(d.Z,{sx:{mt:2},children:(0,l.jsx)(m.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:M,children:"Edit User"})}),M&&(0,l.jsx)(d.Z,{sx:{display:"flex",justifyContent:"center",mt:2},children:(0,l.jsx)(N.Z,{})}),R&&(0,l.jsx)(d.Z,{sx:{mt:2},children:(0,l.jsx)(A.Z,{severity:"info",children:(0,l.jsx)("div",{children:(0,l.jsx)("b",{children:" User added successfully "})})})})]}),(0,l.jsxs)("form",{noValidate:!0,onSubmit:I.handleSubmit,children:[(0,l.jsx)(p.Z,{error:Boolean(I.touched.password&&I.errors.password),fullWidth:!0,helperText:I.touched.password&&I.errors.password,label:"Password",margin:"normal",name:"password",onBlur:I.handleBlur,onChange:I.handleChange,type:"password",value:I.values.password}),I.errors.submit&&(0,l.jsx)(d.Z,{sx:{mt:3},children:(0,l.jsx)(S.Z,{error:!0,children:I.errors.submit})}),(0,l.jsx)(d.Z,{sx:{mt:2},children:(0,l.jsx)(m.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:M,children:"Update Password"})}),M&&(0,l.jsx)(d.Z,{sx:{display:"flex",justifyContent:"center",mt:2},children:(0,l.jsx)(N.Z,{})}),R&&(0,l.jsx)(d.Z,{sx:{mt:2},children:(0,l.jsx)(A.Z,{severity:"info",children:(0,l.jsx)("div",{children:(0,l.jsx)("b",{children:" Password updated successfully "})})})})]})]}),(0,l.jsxs)(d.Z,{sx:{paddingLeft:4,paddingRight:4,paddingTop:0,paddingBottom:4},children:[(0,l.jsx)(h.Z,{color:"textSecondary",sx:{mb:1},variant:"body2",children:"User Roles"}),(0,l.jsxs)(c.ZP,{container:!0,direction:"row",justifyContent:"start",alignItems:"center",mb:1,children:[(0,l.jsx)(c.ZP,{item:!0,xs:3,children:(0,l.jsx)(h.Z,{color:"textSecondary",variant:"body2",children:"Coach"})}),(0,l.jsx)(c.ZP,{item:!0,xs:3,children:(0,l.jsx)(m.Z,{size:"small",variant:"contained",disabled:M,onClick:function(){return L(2)},children:"Add Role"})}),(0,l.jsx)(c.ZP,{item:!0,xs:3,children:(0,l.jsx)(m.Z,{size:"small",variant:"contained",disabled:M,onClick:function(){return U(2)},children:"Delete Role"})})]}),(0,l.jsxs)(c.ZP,{container:!0,direction:"row",justifyContent:"start",alignItems:"center",mb:1,children:[(0,l.jsx)(c.ZP,{item:!0,xs:3,children:(0,l.jsx)(h.Z,{color:"textSecondary",variant:"body2",children:"Coachee"})}),(0,l.jsx)(c.ZP,{item:!0,xs:3,children:(0,l.jsx)(m.Z,{size:"small",variant:"contained",disabled:M,onClick:function(){return L(3)},children:"Add Role"})}),(0,l.jsx)(c.ZP,{item:!0,xs:3,children:(0,l.jsx)(m.Z,{size:"small",variant:"contained",disabled:M,onClick:function(){return U(3)},children:"Delete Role"})})]}),(0,l.jsxs)(c.ZP,{container:!0,direction:"row",justifyContent:"start",alignItems:"center",children:[(0,l.jsx)(c.ZP,{item:!0,xs:3,children:(0,l.jsx)(h.Z,{color:"textSecondary",variant:"body2",children:"Director"})}),(0,l.jsx)(c.ZP,{item:!0,xs:3,children:(0,l.jsx)(m.Z,{size:"small",variant:"contained",disabled:M,onClick:function(){return L(1)},children:"Add Role"})}),(0,l.jsx)(c.ZP,{item:!0,xs:3,children:(0,l.jsx)(m.Z,{size:"small",variant:"contained",disabled:M,onClick:function(){return U(1)},children:"Delete Role"})})]})]})]})})]})})]})};R.getLayout=function(e){return(0,l.jsx)(j.a,{children:(0,l.jsx)(v.c,{children:e})})},r.default=R}},function(e){e.O(0,[7760,8576,512,7836,6049,539,3837,6755,1557,3958,100,939,551,2077,912,8863,6808,9774,2888,179],function(){return e(e.s=78216)}),_N_E=e.O()}]);