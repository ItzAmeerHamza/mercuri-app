(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7462],{44373:function(e,r,t){"use strict";var i=t(63366),n=t(87462),a=t(67294),o=t(86010),s=t(94780),l=t(41796),c=t(81719),d=t(78884),u=t(75741),h=t(85893);let f=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],p=e=>{let{absolute:r,children:t,classes:i,flexItem:n,light:a,orientation:o,textAlign:l,variant:c}=e;return(0,s.Z)({root:["root",r&&"absolute",c,a&&"light","vertical"===o&&"vertical",n&&"flexItem",t&&"withChildren",t&&"vertical"===o&&"withChildrenVertical","right"===l&&"vertical"!==o&&"textAlignRight","left"===l&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]},u.V,i)},m=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver(e,r){let{ownerState:t}=e;return[r.root,t.absolute&&r.absolute,r[t.variant],t.light&&r.light,"vertical"===t.orientation&&r.vertical,t.flexItem&&r.flexItem,t.children&&r.withChildren,t.children&&"vertical"===t.orientation&&r.withChildrenVertical,"right"===t.textAlign&&"vertical"!==t.orientation&&r.textAlignRight,"left"===t.textAlign&&"vertical"!==t.orientation&&r.textAlignLeft]}})(({theme:e,ownerState:r})=>(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},r.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},r.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,l.Fq)(e.palette.divider,.08)},"inset"===r.variant&&{marginLeft:72},"middle"===r.variant&&"horizontal"===r.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===r.variant&&"vertical"===r.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===r.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},r.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:e,ownerState:r})=>(0,n.Z)({},r.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:e,ownerState:r})=>(0,n.Z)({},r.children&&"vertical"===r.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:e})=>(0,n.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),x=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver(e,r){let{ownerState:t}=e;return[r.wrapper,"vertical"===t.orientation&&r.wrapperVertical]}})(({theme:e,ownerState:r})=>(0,n.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===r.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),g=a.forwardRef(function(e,r){let t=(0,d.Z)({props:e,name:"MuiDivider"}),{absolute:a=!1,children:s,className:l,component:c=s?"div":"hr",flexItem:u=!1,light:g=!1,orientation:v="horizontal",role:b="hr"!==c?"separator":void 0,textAlign:w="center",variant:j="fullWidth"}=t,y=(0,i.Z)(t,f),Z=(0,n.Z)({},t,{absolute:a,component:c,flexItem:u,light:g,orientation:v,role:b,textAlign:w,variant:j}),A=p(Z);return(0,h.jsx)(m,(0,n.Z)({as:c,className:(0,o.Z)(A.root,l),role:b,ref:r,ownerState:Z},y,{children:s?(0,h.jsx)(x,{className:A.wrapper,ownerState:Z,children:s}):null}))});r.Z=g},75741:function(e,r,t){"use strict";t.d(r,{V:function(){return a}});var i=t(34867),n=t(1588);function a(e){return(0,i.Z)("MuiDivider",e)}let o=(0,n.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);r.Z=o},17247:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authentication/password-reset",function(){return t(77042)}])},88986:function(e,r,t){"use strict";t.d(r,{U:function(){return f}});var i=t(85893),n=t(41664),a=t.n(n),o=t(61953),s=t(36336),l=t(21448),c=t(29630),d=t(68346),u=t(72389),h={Amplify:"/static/icons/amplify.svg",Auth0:"/static/icons/auth0.svg",Firebase:"/static/icons/firebase.svg",JWT:"/static/icons/jwt.svg"},f=function(){return(0,i.jsx)(o.Z,{sx:{backgroundColor:"background.paper",borderBottom:1,borderColor:"divider",py:1},children:(0,i.jsx)(s.Z,{maxWidth:"md",children:(0,i.jsxs)(o.Z,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap",justifyContent:"center"},children:[(0,i.jsx)(l.Z,{color:"primary",label:"NEW",sx:{mr:2},size:"small"}),(0,i.jsxs)(c.Z,{variant:"subtitle2",children:["Visit our"," ",(0,i.jsx)(a(),{href:"/docs/welcome",passHref:!0,children:(0,i.jsx)(d.Z,{variant:"subtitle2",children:"docs"})})," ","and find out how to switch between"]}),(0,i.jsxs)(o.Z,{sx:{alignItems:"center",display:"flex","& img":{height:30,m:1}},children:[(0,i.jsx)(u.Z,{title:"Amplify",children:(0,i.jsx)("img",{alt:"Amplify",src:h.Amplify})}),(0,i.jsx)(u.Z,{title:"Auth0",children:(0,i.jsx)("img",{alt:"Auth0",src:h.Auth0})}),(0,i.jsx)(u.Z,{title:"Firebase",children:(0,i.jsx)("img",{alt:"Firebase",src:h.Firebase})}),(0,i.jsx)(u.Z,{title:"JSON Web Token",children:(0,i.jsx)("img",{alt:"JWT",src:h.JWT})})]})]})})})}},33149:function(e,r,t){"use strict";t.d(r,{A:function(){return c}});var i=t(85893),n=t(67294),a=t(11163),o=t(45697),s=t.n(o),l=t(89731),c=function(e){var r=e.children,t=(0,l.a)(),o=(0,a.useRouter)(),s=(0,n.useState)(!1),c=s[0],d=s[1],u=o.query.disableGuard;return((0,n.useEffect)(function(){o.isReady&&(t.isAuthenticated&&"true"!==u?o.push("/dashboard").catch(console.error):d(!0))},[o.isReady]),c)?(0,i.jsx)(i.Fragment,{children:r}):null};c.propTypes={children:s().node}},89731:function(e,r,t){"use strict";t.d(r,{a:function(){return a}});var i=t(67294),n=t(91672),a=function(){return(0,i.useContext)(n.Vo)}},46723:function(e,r,t){"use strict";t.d(r,{s:function(){return n}});var i=t(67294),n=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)(function(){return e.current=!0,function(){e.current=!1}},[]),(0,i.useCallback)(function(){return e.current},[])}},77042:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return V}});var i=t(85893),n=t(67294),a=t(9008),o=t.n(a),s=t(41664),l=t.n(s),c=t(11163),d=t(61953),u=t(36336),h=t(29630),f=t(49837),p=t(44373),m=t(68346),x=t(33149),g=t(88986),v=t(47568),b=t(26042),w=t(69396),j=t(20414),y=t(74231),Z=t(82580),A=t(67836),C=t(32631),R=t(54225),W=t(89731),S=t(46723),B=function(e){var r,t=(0,S.s)(),a=(0,W.a)().passwordReset,o=(0,c.useRouter)(),s=(0,n.useRef)([]),l=(0,n.useState)(""),u=l[0],f=l[1],p=(0,Z.TA)({enableReinitialize:!0,initialValues:{code:["","","","","",""],email:u,password:"",passwordConfirm:"",submit:null},validationSchema:y.Ry({code:y.IX().of(y.Z_().required("Code is required")),email:y.Z_().email("Must be a valid email").max(255).required("Email is required"),password:y.Z_().min(7,"Must be at least 7 characters").max(255).required("Required"),passwordConfirm:y.Z_().oneOf([y.iH("password"),null],"Passwords must match").required("Required")}),onSubmit:(r=(0,v.Z)(function(e,r){var i;return(0,j.__generator)(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,a(e.email,e.code.join(""),e.password)];case 1:return n.sent(),t()&&o.push("/authentication/login").catch(console.error),[3,3];case 2:return i=n.sent(),console.error(i),t()&&(r.setStatus({success:!1}),r.setErrors({submit:i.message}),r.setSubmitting(!1)),[3,3];case 3:return[2]}})}),function(e,t){return r.apply(this,arguments)})});(0,n.useEffect)(function(){s.current=s.current.slice(0,6);var e=sessionStorage.getItem("username");e&&f(e)},[]);var m=function(e,r){if("Enter"===e.code){if(p.values.code[r]){p.setFieldValue("code[".concat(r,"]"),"");return}if(r>0){p.setFieldValue("code[".concat(r,"]"),""),s.current[r-1].focus();return}}Number.isInteger(parseInt(e.key,10))&&(p.setFieldValue("code[".concat(r,"]"),e.key),r<5&&s.current[r+1].focus())},x=function(e){var r=e.clipboardData.getData("text").split("");if(6===r.length){var t=!0;r.forEach(function(e){Number.isInteger(parseInt(e,10))||(t=!1)}),t&&(p.setFieldValue("code",r),s.current[5].focus())}};return(0,i.jsxs)("form",(0,w.Z)((0,b.Z)({noValidate:!0,onSubmit:p.handleSubmit},e),{children:[u?(0,i.jsx)(A.Z,{disabled:!0,fullWidth:!0,margin:"normal",value:u}):(0,i.jsx)(A.Z,{autoFocus:!0,error:Boolean(p.touched.email&&p.errors.email),fullWidth:!0,helperText:p.touched.email&&p.errors.email,label:"Email Address",margin:"normal",name:"email",onBlur:p.handleBlur,onChange:p.handleChange,type:"email",value:p.values.email}),(0,i.jsx)(h.Z,{color:"textSecondary",sx:{mb:2,mt:3},variant:"subtitle2",children:"Verification code"}),(0,i.jsx)(d.Z,{sx:{columnGap:"16px",display:"grid",gridTemplateColumns:"repeat(7, 1fr)",py:1},children:[1,2,3,4,5,6].map(function(e,r){return(0,i.jsx)(A.Z,{error:Boolean(Array.isArray(p.touched.code)&&6===p.touched.code.length&&p.errors.code),fullWidth:!0,inputRef:function(e){return s.current[r]=e},name:"code[".concat(r,"]"),onBlur:p.handleBlur,onKeyDown:function(e){return m(e,r)},onPaste:x,value:p.values.code[r],sx:{display:"inline-block",textAlign:"center","& .MuiInputBase-input":{textAlign:"center"}}},"code-".concat(r))})}),Boolean(Array.isArray(p.touched.code)&&6===p.touched.code.length&&p.errors.code)&&(0,i.jsx)(C.Z,{error:!0,sx:{mx:"14px"},children:Array.isArray(p.errors.code)&&p.errors.code.find(function(e){return void 0!==e})}),(0,i.jsx)(A.Z,{error:Boolean(p.touched.password&&p.errors.password),fullWidth:!0,helperText:p.touched.password&&p.errors.password,label:"Password",margin:"normal",name:"password",onBlur:p.handleBlur,onChange:p.handleChange,type:"password",value:p.values.password}),(0,i.jsx)(A.Z,{error:Boolean(p.touched.passwordConfirm&&p.errors.passwordConfirm),fullWidth:!0,helperText:p.touched.passwordConfirm&&p.errors.passwordConfirm,label:"Password Confirmation",margin:"normal",name:"passwordConfirm",onBlur:p.handleBlur,onChange:p.handleChange,type:"password",value:p.values.passwordConfirm}),p.errors.submit&&(0,i.jsx)(d.Z,{sx:{mt:3},children:(0,i.jsx)(C.Z,{error:!0,children:p.errors.submit})}),(0,i.jsx)(d.Z,{sx:{mt:3},children:(0,i.jsx)(R.Z,{disabled:p.isSubmitting,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Reset Password"})})]}))},T=t(36788),_=t(38682),k={Amplify:"/static/icons/amplify.svg",Auth0:"/static/icons/auth0.svg",Firebase:"/static/icons/firebase.svg",JWT:"/static/icons/jwt.svg"},I=function(){var e=(0,c.useRouter)(),r=(0,W.a)().platform,t=e.query.disableGuard;return(0,n.useEffect)(function(){_.w.push({event:"page_view"})},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o(),{children:(0,i.jsx)("title",{children:"Password Reset | Material Kit Pro"})}),(0,i.jsxs)(d.Z,{component:"main",sx:{backgroundColor:"background.default",display:"flex",flexDirection:"column",minHeight:"100vh"},children:[(0,i.jsx)(g.U,{}),(0,i.jsxs)(u.Z,{maxWidth:"sm",sx:{py:{xs:"60px",md:"120px"}},children:[(0,i.jsxs)(d.Z,{sx:{alignItems:"center",backgroundColor:function(e){return"dark"===e.palette.mode?"neutral.900":"neutral.100"},borderColor:"divider",borderRadius:1,borderStyle:"solid",borderWidth:1,display:"flex",flexWrap:"wrap",justifyContent:"space-between",mb:4,p:2,"& > img":{height:32,width:"auto",flexGrow:0,flexShrink:0}},children:[(0,i.jsxs)(h.Z,{color:"textSecondary",variant:"caption",children:["The app authenticates via ",r]}),(0,i.jsx)("img",{alt:"Auth platform",src:k[r]})]}),(0,i.jsxs)(f.Z,{elevation:16,sx:{p:4},children:[(0,i.jsxs)(d.Z,{sx:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,i.jsx)(l(),{href:"/",passHref:!0,children:(0,i.jsx)("a",{children:(0,i.jsx)(T.T,{sx:{height:40,width:40}})})}),(0,i.jsx)(h.Z,{variant:"h4",children:"Password Reset"}),(0,i.jsx)(h.Z,{color:"textSecondary",sx:{mt:2},variant:"body2",children:"Reset your account password using your code"})]}),(0,i.jsx)(d.Z,{sx:{flexGrow:1,mt:3},children:"Amplify"===r&&(0,i.jsx)(B,{})}),(0,i.jsx)(p.Z,{sx:{my:3}}),"Amplify"===r&&(0,i.jsx)("div",{children:(0,i.jsx)(l(),{href:t?"/authentication/password-recovery?disableGuard=".concat(t):"/authentication/password-recovery",passHref:!0,children:(0,i.jsx)(m.Z,{color:"textSecondary",variant:"body2",children:"Did you not receive the code?"})})})]})]})]})]})};I.getLayout=function(e){return(0,i.jsx)(x.A,{children:e})};var V=I}},function(e){e.O(0,[7760,8576,7836,939,551,6749,9774,2888,179],function(){return e(e.s=17247)}),_N_E=e.O()}]);