(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[909],{19604:function(e,t,r){"use strict";r.d(t,{Z:function(){return z}});var n,a=r(63366),o=r(87462),i=r(67294),s=r(86010),l=r(94780),c=r(41796),u=r(81719),d=r(78884),h=r(36622),p=r(70918),m=r(34867),f=r(1588);function x(e){return(0,m.Z)("MuiAlert",e)}let v=(0,f.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var Z=r(80562),g=r(58175),j=r(85893),y=(0,g.Z)((0,j.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),C=(0,g.Z)((0,j.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),b=(0,g.Z)((0,j.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),A=(0,g.Z)((0,j.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),S=r(96903);let w=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],_=e=>{let{variant:t,color:r,severity:n,classes:a}=e,o={root:["root",`${t}${(0,h.Z)(r||n)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return(0,l.Z)(o,x,a)},M=(0,u.ZP)(p.Z,{name:"MuiAlert",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,t[r.variant],t[`${r.variant}${(0,h.Z)(r.color||r.severity)}`]]}})(({theme:e,ownerState:t})=>{let r="light"===e.palette.mode?c._j:c.$n,n="light"===e.palette.mode?c.$n:c._j,a=t.color||t.severity;return(0,o.Z)({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},a&&"standard"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${a}Color`]:r(e.palette[a].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${a}StandardBg`]:n(e.palette[a].light,.9),[`& .${v.icon}`]:e.vars?{color:e.vars.palette.Alert[`${a}IconColor`]}:{color:"dark"===e.palette.mode?e.palette[a].main:e.palette[a].light}},a&&"outlined"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${a}Color`]:r(e.palette[a].light,.6),border:`1px solid ${(e.vars||e).palette[a].light}`,[`& .${v.icon}`]:e.vars?{color:e.vars.palette.Alert[`${a}IconColor`]}:{color:"dark"===e.palette.mode?e.palette[a].main:e.palette[a].light}},a&&"filled"===t.variant&&(0,o.Z)({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${a}FilledColor`],backgroundColor:e.vars.palette.Alert[`${a}FilledBg`]}:{backgroundColor:"dark"===e.palette.mode?e.palette[a].dark:e.palette[a].main,color:e.palette.getContrastText("dark"===e.palette.mode?e.palette[a].dark:e.palette[a].main)}))}),k=(0,u.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),P=(0,u.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),I=(0,u.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),R={success:(0,j.jsx)(y,{fontSize:"inherit"}),warning:(0,j.jsx)(C,{fontSize:"inherit"}),error:(0,j.jsx)(b,{fontSize:"inherit"}),info:(0,j.jsx)(A,{fontSize:"inherit"})},$=i.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiAlert"}),{action:i,children:l,className:c,closeText:u="Close",color:h,icon:p,iconMapping:m=R,onClose:f,role:x="alert",severity:v="success",variant:g="standard"}=r,y=(0,a.Z)(r,w),C=(0,o.Z)({},r,{color:h,severity:v,variant:g}),b=_(C);return(0,j.jsxs)(M,(0,o.Z)({role:x,elevation:0,ownerState:C,className:(0,s.Z)(b.root,c),ref:t},y,{children:[!1!==p?(0,j.jsx)(k,{ownerState:C,className:b.icon,children:p||m[v]||R[v]}):null,(0,j.jsx)(P,{ownerState:C,className:b.message,children:l}),null!=i?(0,j.jsx)(I,{ownerState:C,className:b.action,children:i}):null,null==i&&f?(0,j.jsx)(I,{ownerState:C,className:b.action,children:(0,j.jsx)(Z.Z,{size:"small","aria-label":u,title:u,color:"inherit",onClick:f,children:n||(n=(0,j.jsx)(S.Z,{fontSize:"small"}))})}):null]}))});var z=$},49837:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(87462),a=r(63366),o=r(67294),i=r(86010),s=r(94780),l=r(81719),c=r(78884),u=r(70918),d=r(34867),h=r(1588);function p(e){return(0,d.Z)("MuiCard",e)}(0,h.Z)("MuiCard",["root"]);var m=r(85893);let f=["className","raised"],x=e=>{let{classes:t}=e;return(0,s.Z)({root:["root"]},p,t)},v=(0,l.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),Z=o.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiCard"}),{className:o,raised:s=!1}=r,l=(0,a.Z)(r,f),u=(0,n.Z)({},r,{raised:s}),d=x(u);return(0,m.jsx)(v,(0,n.Z)({className:(0,i.Z)(d.root,o),elevation:s?8:void 0,ref:t,ownerState:u},l))});var g=Z},96903:function(e,t,r){"use strict";r(67294);var n=r(58175),a=r(85893);t.Z=(0,n.Z)((0,a.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},32921:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/competencies/parameters/add",function(){return r(91873)}])},46723:function(e,t,r){"use strict";r.d(t,{s:function(){return a}});var n=r(67294),a=function(){var e=(0,n.useRef)(!1);return(0,n.useEffect)(function(){return e.current=!0,function(){e.current=!1}},[]),(0,n.useCallback)(function(){return e.current},[])}},91873:function(e,t,r){"use strict";r.r(t);var n=r(47568),a=r(20414),o=r(85893),i=r(67294),s=r(9008),l=r.n(s),c=r(61953),u=r(36336),d=r(79072),h=r(29630),p=r(54225),m=r(49837),f=r(67836),x=r(55343),v=r(58316),Z=r(53442),g=r(31538),j=r(98875),y=r(31772),C=r(46723),b=r(38682),A=r(31644),S=r(11163),w=r(74231),_=r(82580),M=r(32631),k=r(70754),P=r(19604),I=r(89731),R=r(41664),$=r.n(R),z=r(36788),L=function(){var e=(0,C.s)();(0,i.useRef)(null),(0,S.useRouter)(),(0,I.a)().register;var t=(0,i.useState)(!1);t[0],t[1];var r,s,j=(0,i.useState)(!1),y=j[0],R=j[1],L=(0,i.useState)(!1),E=L[0],G=L[1],N=(0,i.useState)([]),W=N[0],T=N[1],B=(0,i.useState)([]),q=(B[0],B[1]),F=(0,_.TA)({initialValues:{title:"",descritpion:"",competencyGroupId:0,submit:null},validationSchema:w.Ry({title:w.Z_().max(255).required("Title is required"),descritpion:w.Z_().max(255).required("descritpion is required"),competencyGroupId:w.Rx().required("Competency Group is required")}),onSubmit:(r=(0,n.Z)(function(t,r){var n,o;return(0,a.__generator)(this,function(a){switch(a.label){case 0:G(!0),delete(n=t).submit,a.label=1;case 1:return a.trys.push([1,3,,4]),[4,A.U.post("Competency/addCompetencyParameter",t).then(function(e){200===e.status&&R(!0)})];case 2:return a.sent(),[3,4];case 3:return o=a.sent(),console.error(o),e()&&(r.setStatus({success:!1}),r.setErrors({submit:o.message}),r.setSubmitting(!1)),[3,4];case 4:return G(!1),[2]}})}),function(e,t){return r.apply(this,arguments)})});(0,i.useEffect)(function(){b.w.push({event:"page_view"})},[]);var H,O=(s=(0,n.Z)(function(){var e;return(0,a.__generator)(this,function(t){switch(t.label){case 0:return e=[],[4,A.U.get("Competency/getCompetencyGroups",{}).then(function(t){e=t.data}).catch(function(e){console.log(e,"error")})];case 1:return t.sent(),[2,e]}})}),function(){return s.apply(this,arguments)}),V=(0,i.useCallback)((0,n.Z)(function(){var t,r;return(0,a.__generator)(this,function(n){switch(n.label){case 0:G(!0),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,D()];case 2:return t=n.sent(),e()&&q(t),[3,4];case 3:return r=n.sent(),console.error(r),[3,4];case 4:return G(!1),[2]}})}),[e]),D=(H=(0,n.Z)(function(){var e;return(0,a.__generator)(this,function(t){switch(t.label){case 0:return e=[],[4,A.U.get("Competency/getCompetencyParameters",{}).then(function(t){e=t.data}).catch(function(e){console.log(e,"error")})];case 1:return t.sent(),[2,e]}})}),function(){return H.apply(this,arguments)}),U=(0,i.useCallback)((0,n.Z)(function(){var t,r;return(0,a.__generator)(this,function(n){switch(n.label){case 0:G(!0),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,O()];case 2:return t=n.sent(),e()&&T(t),[3,4];case 3:return r=n.sent(),console.error(r),[3,4];case 4:return G(!1),[2]}})}),[e]);return(0,i.useEffect)(function(){U(),V()},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l(),{children:(0,o.jsx)("title",{children:"Dashboard: Add Competency Parameter"})}),(0,o.jsx)(c.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,o.jsxs)(u.Z,{maxWidth:"xl",children:[(0,o.jsx)(c.Z,{sx:{mb:4},children:(0,o.jsxs)(d.ZP,{container:!0,justifyContent:"space-between",spacing:3,children:[(0,o.jsx)(d.ZP,{item:!0,children:(0,o.jsx)(h.Z,{variant:"h4",children:"Add Competency Parameter"})}),(0,o.jsx)(d.ZP,{item:!0,children:(0,o.jsx)($(),{href:"/dashboard/competencies/parameters",children:(0,o.jsx)(p.Z,{variant:"contained",children:"Cancel"})})})]})}),(0,o.jsx)(c.Z,{sx:{justifyContent:"center",width:"100%"},children:(0,o.jsx)(m.Z,{sx:{maxWidth:"sm",margin:"0px auto"},children:(0,o.jsxs)(u.Z,{sx:{py:{xs:"20px",md:"40px"}},children:[(0,o.jsxs)(c.Z,{sx:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,o.jsx)($(),{href:"/",passHref:!0,children:(0,o.jsx)("a",{children:(0,o.jsx)(z.T,{sx:{height:40,width:40}})})}),(0,o.jsx)(h.Z,{variant:"h4",children:"Add Competency Parameter"}),(0,o.jsx)(h.Z,{color:"textSecondary",sx:{mt:2},variant:"body2",children:"Add competency parameter on the internal platform"})]}),(0,o.jsxs)("form",{noValidate:!0,onSubmit:F.handleSubmit,children:[(0,o.jsx)(f.Z,{autoFocus:!0,error:Boolean(F.touched.title&&F.errors.title),fullWidth:!0,helperText:F.touched.title&&F.errors.title,label:"Title",margin:"normal",name:"title",onBlur:F.handleBlur,onChange:F.handleChange,value:F.values.title}),(0,o.jsx)(f.Z,{autoFocus:!0,error:Boolean(F.touched.descritpion&&F.errors.descritpion),fullWidth:!0,helperText:F.touched.descritpion&&F.errors.descritpion,label:"Descritpion",margin:"normal",name:"descritpion",onBlur:F.handleBlur,onChange:F.handleChange,value:F.values.descritpion}),(0,o.jsxs)(x.Z,{fullWidth:!0,margin:"normal",children:[(0,o.jsx)(v.Z,{id:"demo-simple-select-helper-label",children:"Competency Group"}),(0,o.jsx)(Z.Z,{autoFocus:!0,error:Boolean(F.touched.competencyGroupId&&F.errors.competencyGroupId),fullWidth:!0,helperText:F.touched.competencyGroupId&&F.errors.competencyGroupId,value:F.values.competencyGroupId,label:"Competency Group",margin:"normal",name:"competencyGroupId",onChange:F.handleChange,children:W.map(function(e,t){return(0,o.jsx)(g.Z,{value:e.id,children:e.title},t)})})]}),F.errors.submit&&(0,o.jsx)(c.Z,{sx:{mt:3},children:(0,o.jsx)(M.Z,{error:!0,children:F.errors.submit})}),(0,o.jsx)(c.Z,{sx:{mt:2},children:(0,o.jsx)(p.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:E,children:"Add Competency Parameter"})}),E&&(0,o.jsx)(c.Z,{sx:{display:"flex",justifyContent:"center",mt:2},children:(0,o.jsx)(k.Z,{})}),y&&(0,o.jsx)(c.Z,{sx:{mt:2},children:(0,o.jsx)(P.Z,{severity:"info",children:(0,o.jsx)("div",{children:(0,o.jsx)("b",{children:" Competency Parameter Added Successfully "})})})})]})]})})})]})})]})};L.getLayout=function(e){return(0,o.jsx)(j.a,{children:(0,o.jsx)(y.c,{children:e})})},t.default=L}},function(e){e.O(0,[7760,8576,512,7836,6049,539,3837,6755,1557,3958,939,551,8863,9774,2888,179],function(){return e(e.s=32921)}),_N_E=e.O()}]);