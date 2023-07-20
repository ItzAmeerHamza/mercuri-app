(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8621],{19604:function(e,t,r){"use strict";r.d(t,{Z:function(){return $}});var n,a=r(63366),o=r(87462),s=r(67294),l=r(86010),i=r(94780),c=r(41796),d=r(81719),u=r(78884),m=r(36622),h=r(70918),p=r(34867),f=r(1588);function x(e){return(0,p.Z)("MuiAlert",e)}let v=(0,f.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var Z=r(80562),g=r(58175),j=r(85893),y=(0,g.Z)((0,j.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),C=(0,g.Z)((0,j.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),b=(0,g.Z)((0,j.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),I=(0,g.Z)((0,j.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),A=r(96903);let S=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],w=e=>{let{variant:t,color:r,severity:n,classes:a}=e,o={root:["root",`${t}${(0,m.Z)(r||n)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return(0,i.Z)(o,x,a)},_=(0,d.ZP)(h.Z,{name:"MuiAlert",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,t[r.variant],t[`${r.variant}${(0,m.Z)(r.color||r.severity)}`]]}})(({theme:e,ownerState:t})=>{let r="light"===e.palette.mode?c._j:c.$n,n="light"===e.palette.mode?c.$n:c._j,a=t.color||t.severity;return(0,o.Z)({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},a&&"standard"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${a}Color`]:r(e.palette[a].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${a}StandardBg`]:n(e.palette[a].light,.9),[`& .${v.icon}`]:e.vars?{color:e.vars.palette.Alert[`${a}IconColor`]}:{color:"dark"===e.palette.mode?e.palette[a].main:e.palette[a].light}},a&&"outlined"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${a}Color`]:r(e.palette[a].light,.6),border:`1px solid ${(e.vars||e).palette[a].light}`,[`& .${v.icon}`]:e.vars?{color:e.vars.palette.Alert[`${a}IconColor`]}:{color:"dark"===e.palette.mode?e.palette[a].main:e.palette[a].light}},a&&"filled"===t.variant&&(0,o.Z)({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${a}FilledColor`],backgroundColor:e.vars.palette.Alert[`${a}FilledBg`]}:{backgroundColor:"dark"===e.palette.mode?e.palette[a].dark:e.palette[a].main,color:e.palette.getContrastText("dark"===e.palette.mode?e.palette[a].dark:e.palette[a].main)}))}),M=(0,d.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),N=(0,d.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),k=(0,d.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),T={success:(0,j.jsx)(y,{fontSize:"inherit"}),warning:(0,j.jsx)(C,{fontSize:"inherit"}),error:(0,j.jsx)(b,{fontSize:"inherit"}),info:(0,j.jsx)(I,{fontSize:"inherit"})},R=s.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiAlert"}),{action:s,children:i,className:c,closeText:d="Close",color:m,icon:h,iconMapping:p=T,onClose:f,role:x="alert",severity:v="success",variant:g="standard"}=r,y=(0,a.Z)(r,S),C=(0,o.Z)({},r,{color:m,severity:v,variant:g}),b=w(C);return(0,j.jsxs)(_,(0,o.Z)({role:x,elevation:0,ownerState:C,className:(0,l.Z)(b.root,c),ref:t},y,{children:[!1!==h?(0,j.jsx)(M,{ownerState:C,className:b.icon,children:h||p[v]||T[v]}):null,(0,j.jsx)(N,{ownerState:C,className:b.message,children:i}),null!=s?(0,j.jsx)(k,{ownerState:C,className:b.action,children:s}):null,null==s&&f?(0,j.jsx)(k,{ownerState:C,className:b.action,children:(0,j.jsx)(Z.Z,{size:"small","aria-label":d,title:d,color:"inherit",onClick:f,children:n||(n=(0,j.jsx)(A.Z,{fontSize:"small"}))})}):null]}))});var $=R},49837:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(87462),a=r(63366),o=r(67294),s=r(86010),l=r(94780),i=r(81719),c=r(78884),d=r(70918),u=r(34867),m=r(1588);function h(e){return(0,u.Z)("MuiCard",e)}(0,m.Z)("MuiCard",["root"]);var p=r(85893);let f=["className","raised"],x=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"]},h,t)},v=(0,i.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),Z=o.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiCard"}),{className:o,raised:l=!1}=r,i=(0,a.Z)(r,f),d=(0,n.Z)({},r,{raised:l}),u=x(d);return(0,p.jsx)(v,(0,n.Z)({className:(0,s.Z)(u.root,o),elevation:l?8:void 0,ref:t,ownerState:d},i))});var g=Z},96903:function(e,t,r){"use strict";r(67294);var n=r(58175),a=r(85893);t.Z=(0,n.Z)((0,a.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},77417:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/teams/groups/add",function(){return r(34538)}])},46723:function(e,t,r){"use strict";r.d(t,{s:function(){return a}});var n=r(67294),a=function(){var e=(0,n.useRef)(!1);return(0,n.useEffect)(function(){return e.current=!0,function(){e.current=!1}},[]),(0,n.useCallback)(function(){return e.current},[])}},34538:function(e,t,r){"use strict";r.r(t);var n=r(47568),a=r(20414),o=r(85893),s=r(67294),l=r(9008),i=r.n(l),c=r(61953),d=r(36336),u=r(79072),m=r(29630),h=r(54225),p=r(49837),f=r(67836),x=r(55343),v=r(58316),Z=r(53442),g=r(31538),j=r(98875),y=r(31772),C=r(46723),b=r(38682),I=r(31644),A=r(11163),S=r(74231),w=r(82580),_=r(32631),M=r(70754),N=r(19604),k=r(89731),T=r(41664),R=r.n(T),$=r(36788),z=function(){var e=(0,C.s)();(0,s.useRef)(null),(0,A.useRouter)(),(0,k.a)().register;var t=(0,s.useState)(!1);t[0],t[1];var r,l,j=(0,s.useState)(!1),y=j[0],T=j[1],z=(0,s.useState)(!1),U=z[0],E=z[1],L=(0,s.useState)([]),W=L[0],P=L[1],B=(0,s.useState)([]),F=B[0],q=B[1],H=(0,w.TA)({initialValues:{teamName:"",applicationUserId:"",companyId:1,submit:null},validationSchema:S.Ry({teamName:S.Z_().max(255).required("Team Name is required"),applicationUserId:S.Z_().max(255).required("User is required"),companyId:S.Rx().required("Company is required")}),onSubmit:(r=(0,n.Z)(function(t,r){var n,o;return(0,a.__generator)(this,function(a){switch(a.label){case 0:E(!0),delete(n=t).submit,a.label=1;case 1:return a.trys.push([1,3,,4]),[4,I.U.post("Team/addCompanyTeam",t).then(function(e){200===e.status&&T(!0)})];case 2:return a.sent(),[3,4];case 3:return o=a.sent(),console.error(o),e()&&(r.setStatus({success:!1}),r.setErrors({submit:o.message}),r.setSubmitting(!1)),[3,4];case 4:return E(!1),[2]}})}),function(e,t){return r.apply(this,arguments)})});(0,s.useEffect)(function(){b.w.push({event:"page_view"})},[]);var O,V=(l=(0,n.Z)(function(){var e;return(0,a.__generator)(this,function(t){switch(t.label){case 0:return e=[],[4,I.U.get("Company/getCompanies",{}).then(function(t){e=t.data}).catch(function(e){console.log(e,"error")})];case 1:return t.sent(),[2,e]}})}),function(){return l.apply(this,arguments)}),D=(0,s.useCallback)((0,n.Z)(function(){var t,r;return(0,a.__generator)(this,function(n){switch(n.label){case 0:E(!0),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,X()];case 2:return t=n.sent(),e()&&q(t),[3,4];case 3:return r=n.sent(),console.error(r),[3,4];case 4:return E(!1),[2]}})}),[e]),X=(O=(0,n.Z)(function(){var e;return(0,a.__generator)(this,function(t){switch(t.label){case 0:return e=[],[4,I.U.get("User/getUsersForCompany?companyId=".concat(H.values.companyId),{}).then(function(t){e=t.data}).catch(function(e){console.log(e,"error")})];case 1:return t.sent(),[2,e]}})}),function(){return O.apply(this,arguments)}),G=(0,s.useCallback)((0,n.Z)(function(){var t,r;return(0,a.__generator)(this,function(n){switch(n.label){case 0:E(!0),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,V()];case 2:return t=n.sent(),e()&&P(t),[3,4];case 3:return r=n.sent(),console.error(r),[3,4];case 4:return E(!1),[2]}})}),[e]);return(0,s.useEffect)(function(){G(),D()},[]),(0,s.useEffect)(function(){D()},[H.values.companyId]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i(),{children:(0,o.jsx)("title",{children:"Dashboard: Add Company Team"})}),(0,o.jsx)(c.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,o.jsxs)(d.Z,{maxWidth:"xl",children:[(0,o.jsx)(c.Z,{sx:{mb:4},children:(0,o.jsxs)(u.ZP,{container:!0,justifyContent:"space-between",spacing:3,children:[(0,o.jsx)(u.ZP,{item:!0,children:(0,o.jsx)(m.Z,{variant:"h4",children:"Add Company Team"})}),(0,o.jsx)(u.ZP,{item:!0,children:(0,o.jsx)(R(),{href:"/dashboard/teams/groups",children:(0,o.jsx)(h.Z,{variant:"contained",children:"Cancel"})})})]})}),(0,o.jsx)(c.Z,{sx:{justifyContent:"center",width:"100%"},children:(0,o.jsx)(p.Z,{sx:{maxWidth:"sm",margin:"0px auto"},children:(0,o.jsxs)(d.Z,{sx:{py:{xs:"20px",md:"40px"}},children:[(0,o.jsxs)(c.Z,{sx:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,o.jsx)(R(),{href:"/",passHref:!0,children:(0,o.jsx)("a",{children:(0,o.jsx)($.T,{sx:{height:40,width:40}})})}),(0,o.jsx)(m.Z,{variant:"h4",children:"Add Company Team"}),(0,o.jsx)(m.Z,{color:"textSecondary",sx:{mt:2},variant:"body2",children:"Add company team on the internal platform"})]}),(0,o.jsxs)("form",{noValidate:!0,onSubmit:H.handleSubmit,children:[(0,o.jsx)(f.Z,{autoFocus:!0,error:Boolean(H.touched.teamName&&H.errors.teamName),fullWidth:!0,helperText:H.touched.teamName&&H.errors.teamName,label:"Team Name",margin:"normal",name:"teamName",onBlur:H.handleBlur,onChange:H.handleChange,value:H.values.teamName}),(0,o.jsxs)(x.Z,{fullWidth:!0,margin:"normal",children:[(0,o.jsx)(v.Z,{id:"demo-simple-select-helper-label",children:"Company Id"}),(0,o.jsx)(Z.Z,{autoFocus:!0,error:Boolean(H.touched.companyId&&H.errors.companyId),fullWidth:!0,helperText:H.touched.companyId&&H.errors.companyId,value:H.values.companyId,label:"Company Id",margin:"normal",name:"companyId",onChange:H.handleChange,children:W.map(function(e,t){return(0,o.jsx)(g.Z,{value:e.companyId,children:e.companyName},t)})})]}),(0,o.jsxs)(x.Z,{fullWidth:!0,margin:"normal",children:[(0,o.jsx)(v.Z,{id:"demo-simple-select-helper-label",children:"User"}),(0,o.jsx)(Z.Z,{autoFocus:!0,error:Boolean(H.touched.applicationUserId&&H.errors.applicationUserId),fullWidth:!0,helperText:H.touched.applicationUserId&&H.errors.applicationUserId,value:H.values.applicationUserId,label:"User Id",margin:"normal",name:"applicationUserId",onChange:H.handleChange,children:F.map(function(e,t){return(0,o.jsx)(g.Z,{value:e.userId,children:"".concat(e.title," ").concat(e.firstName," ").concat(e.lastname," ")},t)})})]}),H.errors.submit&&(0,o.jsx)(c.Z,{sx:{mt:3},children:(0,o.jsx)(_.Z,{error:!0,children:H.errors.submit})}),(0,o.jsx)(c.Z,{sx:{mt:2},children:(0,o.jsx)(h.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:U,children:"Add Company Team"})}),U&&(0,o.jsx)(c.Z,{sx:{display:"flex",justifyContent:"center",mt:2},children:(0,o.jsx)(M.Z,{})}),y&&(0,o.jsx)(c.Z,{sx:{mt:2},children:(0,o.jsx)(N.Z,{severity:"info",children:(0,o.jsx)("div",{children:(0,o.jsx)("b",{children:" Company Team Added Successfully "})})})})]})]})})})]})})]})};z.getLayout=function(e){return(0,o.jsx)(j.a,{children:(0,o.jsx)(y.c,{children:e})})},t.default=z}},function(e){e.O(0,[7760,8576,512,7836,6049,539,3837,6755,1557,3958,939,551,8863,9774,2888,179],function(){return e(e.s=77417)}),_N_E=e.O()}]);