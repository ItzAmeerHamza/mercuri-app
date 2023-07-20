(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5340],{19604:function(e,t,r){"use strict";r.d(t,{Z:function(){return R}});var n,a=r(63366),s=r(87462),o=r(67294),i=r(86010),l=r(94780),c=r(41796),d=r(81719),u=r(78884),h=r(36622),m=r(70918),p=r(34867),f=r(1588);function x(e){return(0,p.Z)("MuiAlert",e)}let v=(0,f.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var Z=r(80562),g=r(58175),j=r(85893),y=(0,g.Z)((0,j.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),C=(0,g.Z)((0,j.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),b=(0,g.Z)((0,j.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),S=(0,g.Z)((0,j.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),I=r(96903);let w=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],A=e=>{let{variant:t,color:r,severity:n,classes:a}=e,s={root:["root",`${t}${(0,h.Z)(r||n)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return(0,l.Z)(s,x,a)},_=(0,d.ZP)(m.Z,{name:"MuiAlert",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,t[r.variant],t[`${r.variant}${(0,h.Z)(r.color||r.severity)}`]]}})(({theme:e,ownerState:t})=>{let r="light"===e.palette.mode?c._j:c.$n,n="light"===e.palette.mode?c.$n:c._j,a=t.color||t.severity;return(0,s.Z)({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},a&&"standard"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${a}Color`]:r(e.palette[a].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${a}StandardBg`]:n(e.palette[a].light,.9),[`& .${v.icon}`]:e.vars?{color:e.vars.palette.Alert[`${a}IconColor`]}:{color:"dark"===e.palette.mode?e.palette[a].main:e.palette[a].light}},a&&"outlined"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${a}Color`]:r(e.palette[a].light,.6),border:`1px solid ${(e.vars||e).palette[a].light}`,[`& .${v.icon}`]:e.vars?{color:e.vars.palette.Alert[`${a}IconColor`]}:{color:"dark"===e.palette.mode?e.palette[a].main:e.palette[a].light}},a&&"filled"===t.variant&&(0,s.Z)({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${a}FilledColor`],backgroundColor:e.vars.palette.Alert[`${a}FilledBg`]}:{backgroundColor:"dark"===e.palette.mode?e.palette[a].dark:e.palette[a].main,color:e.palette.getContrastText("dark"===e.palette.mode?e.palette[a].dark:e.palette[a].main)}))}),M=(0,d.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),U=(0,d.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),E=(0,d.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),T={success:(0,j.jsx)(y,{fontSize:"inherit"}),warning:(0,j.jsx)(C,{fontSize:"inherit"}),error:(0,j.jsx)(b,{fontSize:"inherit"}),info:(0,j.jsx)(S,{fontSize:"inherit"})},k=o.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiAlert"}),{action:o,children:l,className:c,closeText:d="Close",color:h,icon:m,iconMapping:p=T,onClose:f,role:x="alert",severity:v="success",variant:g="standard"}=r,y=(0,a.Z)(r,w),C=(0,s.Z)({},r,{color:h,severity:v,variant:g}),b=A(C);return(0,j.jsxs)(_,(0,s.Z)({role:x,elevation:0,ownerState:C,className:(0,i.Z)(b.root,c),ref:t},y,{children:[!1!==m?(0,j.jsx)(M,{ownerState:C,className:b.icon,children:m||p[v]||T[v]}):null,(0,j.jsx)(U,{ownerState:C,className:b.message,children:l}),null!=o?(0,j.jsx)(E,{ownerState:C,className:b.action,children:o}):null,null==o&&f?(0,j.jsx)(E,{ownerState:C,className:b.action,children:(0,j.jsx)(Z.Z,{size:"small","aria-label":d,title:d,color:"inherit",onClick:f,children:n||(n=(0,j.jsx)(I.Z,{fontSize:"small"}))})}):null]}))});var R=k},49837:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(87462),a=r(63366),s=r(67294),o=r(86010),i=r(94780),l=r(81719),c=r(78884),d=r(70918),u=r(34867),h=r(1588);function m(e){return(0,u.Z)("MuiCard",e)}(0,h.Z)("MuiCard",["root"]);var p=r(85893);let f=["className","raised"],x=e=>{let{classes:t}=e;return(0,i.Z)({root:["root"]},m,t)},v=(0,l.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),Z=s.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiCard"}),{className:s,raised:i=!1}=r,l=(0,a.Z)(r,f),d=(0,n.Z)({},r,{raised:i}),u=x(d);return(0,p.jsx)(v,(0,n.Z)({className:(0,o.Z)(u.root,s),elevation:i?8:void 0,ref:t,ownerState:d},l))});var g=Z},96903:function(e,t,r){"use strict";r(67294);var n=r(58175),a=r(85893);t.Z=(0,n.Z)((0,a.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},47206:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/teams/members/edit",function(){return r(69545)}])},46723:function(e,t,r){"use strict";r.d(t,{s:function(){return a}});var n=r(67294),a=function(){var e=(0,n.useRef)(!1);return(0,n.useEffect)(function(){return e.current=!0,function(){e.current=!1}},[]),(0,n.useCallback)(function(){return e.current},[])}},69545:function(e,t,r){"use strict";r.r(t);var n=r(47568),a=r(20414),s=r(85893),o=r(67294),i=r(9008),l=r.n(i),c=r(61953),d=r(36336),u=r(79072),h=r(29630),m=r(54225),p=r(49837),f=r(55343),x=r(58316),v=r(53442),Z=r(31538),g=r(98875),j=r(31772),y=r(46723),C=r(38682),b=r(31644),S=r(11163),I=r(74231),w=r(82580),A=r(32631),_=r(70754),M=r(19604),U=r(89731),E=r(41664),T=r.n(E),k=r(36788),R=function(){var e=(0,y.s)();(0,o.useRef)(null),(0,S.useRouter)(),(0,U.a)().register;var t=(0,o.useState)(!1);t[0],t[1];var r,i,g=(0,o.useState)(!1),j=g[0],E=g[1],R=(0,o.useState)(!1),$=R[0],z=R[1],N=(0,o.useState)([]),L=N[0],W=N[1],P=(0,o.useState)([]),F=P[0],H=P[1],O=(0,w.TA)({initialValues:{applicationUserId:"",companyteamId:1,submit:null},validationSchema:I.Ry({applicationUserId:I.Z_().max(255).required("User is required"),companyteamId:I.Rx().required("Company is required")}),onSubmit:(r=(0,n.Z)(function(t,r){var n,s;return(0,a.__generator)(this,function(a){switch(a.label){case 0:z(!0),delete(n=t).submit,a.label=1;case 1:return a.trys.push([1,3,,4]),[4,b.U.post("Team/addUserToCompanyTeam",t).then(function(e){200===e.status&&E(!0)})];case 2:return a.sent(),[3,4];case 3:return s=a.sent(),console.error(s),e()&&(r.setStatus({success:!1}),r.setErrors({submit:s.message}),r.setSubmitting(!1)),[3,4];case 4:return z(!1),[2]}})}),function(e,t){return r.apply(this,arguments)})});(0,o.useEffect)(function(){C.w.push({event:"page_view"})},[]);var V,q=(i=(0,n.Z)(function(){var e;return(0,a.__generator)(this,function(t){switch(t.label){case 0:return e=[],[4,b.U.get("Team/getTeamsForCompany?companyId=1",{}).then(function(t){e=t.data}).catch(function(e){console.log(e,"error")})];case 1:return t.sent(),[2,e]}})}),function(){return i.apply(this,arguments)}),B=(0,o.useCallback)((0,n.Z)(function(){var t,r;return(0,a.__generator)(this,function(n){switch(n.label){case 0:z(!0),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,D()];case 2:return t=n.sent(),e()&&H(t),[3,4];case 3:return r=n.sent(),console.error(r),[3,4];case 4:return z(!1),[2]}})}),[e]),D=(V=(0,n.Z)(function(){var e;return(0,a.__generator)(this,function(t){switch(t.label){case 0:return e=[],[4,b.U.get("User/getUsersForCompany?companyId=1",{}).then(function(t){e=t.data}).catch(function(e){console.log(e,"error")})];case 1:return t.sent(),[2,e]}})}),function(){return V.apply(this,arguments)}),X=(0,o.useCallback)((0,n.Z)(function(){var t,r;return(0,a.__generator)(this,function(n){switch(n.label){case 0:z(!0),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,q()];case 2:return t=n.sent(),e()&&W(t),[3,4];case 3:return r=n.sent(),console.error(r),[3,4];case 4:return z(!1),[2]}})}),[e]);return(0,o.useEffect)(function(){X(),B()},[]),(0,o.useEffect)(function(){B()},[O.values.companyId]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l(),{children:(0,s.jsx)("title",{children:"Dashboard: Edit User to Company Team"})}),(0,s.jsx)(c.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,s.jsxs)(d.Z,{maxWidth:"xl",children:[(0,s.jsx)(c.Z,{sx:{mb:4},children:(0,s.jsxs)(u.ZP,{container:!0,justifyContent:"space-between",spacing:3,children:[(0,s.jsx)(u.ZP,{item:!0,children:(0,s.jsx)(h.Z,{variant:"h4",children:"Edit User to Company Team"})}),(0,s.jsx)(u.ZP,{item:!0,children:(0,s.jsx)(T(),{href:"/dashboard/teams/members",children:(0,s.jsx)(m.Z,{variant:"contained",children:"Cancel"})})})]})}),(0,s.jsx)(c.Z,{sx:{justifyContent:"center",width:"100%"},children:(0,s.jsx)(p.Z,{sx:{maxWidth:"sm",margin:"0px auto"},children:(0,s.jsxs)(d.Z,{sx:{py:{xs:"20px",md:"40px"}},children:[(0,s.jsxs)(c.Z,{sx:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,s.jsx)(T(),{href:"/",passHref:!0,children:(0,s.jsx)("a",{children:(0,s.jsx)(k.T,{sx:{height:40,width:40}})})}),(0,s.jsx)(h.Z,{variant:"h4",children:"Edit User to Company Team"}),(0,s.jsx)(h.Z,{color:"textSecondary",sx:{mt:2},variant:"body2",children:"Edit User to company team on the internal platform"})]}),(0,s.jsxs)("form",{noValidate:!0,children:[(0,s.jsxs)(f.Z,{fullWidth:!0,margin:"normal",children:[(0,s.jsx)(x.Z,{id:"demo-simple-select-helper-label",children:"Select a Team"}),(0,s.jsx)(v.Z,{autoFocus:!0,error:Boolean(O.touched.companyteamId&&O.errors.companyteamId),fullWidth:!0,helperText:O.touched.companyteamId&&O.errors.companyteamId,value:O.values.companyteamId,label:"Select a Team",margin:"normal",name:"companyteamId",onChange:O.handleChange,children:L.map(function(e,t){return(0,s.jsx)(Z.Z,{value:e.id,children:e.teamName},t)})})]}),(0,s.jsxs)(f.Z,{fullWidth:!0,margin:"normal",children:[(0,s.jsx)(x.Z,{id:"demo-simple-select-helper-label",children:"Select a User"}),(0,s.jsx)(v.Z,{autoFocus:!0,error:Boolean(O.touched.applicationUserId&&O.errors.applicationUserId),fullWidth:!0,helperText:O.touched.applicationUserId&&O.errors.applicationUserId,value:O.values.applicationUserId,label:"Select a User",margin:"normal",name:"applicationUserId",onChange:O.handleChange,children:F.map(function(e,t){return(0,s.jsx)(Z.Z,{value:e.userId,children:"".concat(e.title," ").concat(e.firstName," ").concat(e.lastname," ")},t)})})]}),O.errors.submit&&(0,s.jsx)(c.Z,{sx:{mt:3},children:(0,s.jsx)(A.Z,{error:!0,children:O.errors.submit})}),(0,s.jsx)(c.Z,{sx:{mt:2},children:(0,s.jsx)(m.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:$,children:"Edit User to Company Team"})}),$&&(0,s.jsx)(c.Z,{sx:{display:"flex",justifyContent:"center",mt:2},children:(0,s.jsx)(_.Z,{})}),j&&(0,s.jsx)(c.Z,{sx:{mt:2},children:(0,s.jsx)(M.Z,{severity:"info",children:(0,s.jsx)("div",{children:(0,s.jsx)("b",{children:" Company Team Edited Successfully "})})})})]})]})})})]})})]})};R.getLayout=function(e){return(0,s.jsx)(g.a,{children:(0,s.jsx)(j.c,{children:e})})},t.default=R}},function(e){e.O(0,[7760,8576,512,7836,6049,539,3837,6755,1557,3958,939,551,8863,9774,2888,179],function(){return e(e.s=47206)}),_N_E=e.O()}]);