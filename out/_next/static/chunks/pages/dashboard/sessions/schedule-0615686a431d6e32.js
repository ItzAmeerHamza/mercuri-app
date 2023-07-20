(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2907],{57412:function(e,n,t){"use strict";t.d(n,{Z:function(){return R}});var r=t(63366),a=t(87462),i=t(67294),s=t(86010),o=t(70917),l=t(94780),u=t(80702),c=t(41796),d=t(81719),h=t(78884),f=t(34867),g=t(1588);function p(e){return(0,f.Z)("MuiSkeleton",e)}(0,g.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var v=t(85893);let x=["animation","className","component","height","style","variant","width"],m=e=>e,Z,j,w,b,C=e=>{let{classes:n,variant:t,animation:r,hasChildren:a,width:i,height:s}=e;return(0,l.Z)({root:["root",t,r,a&&"withChildren",a&&!i&&"fitContent",a&&!s&&"heightAuto"]},p,n)},P=(0,o.F4)(Z||(Z=m`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),y=(0,o.F4)(j||(j=m`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),S=(0,d.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver(e,n){let{ownerState:t}=e;return[n.root,n[t.variant],!1!==t.animation&&n[t.animation],t.hasChildren&&n.withChildren,t.hasChildren&&!t.width&&n.fitContent,t.hasChildren&&!t.height&&n.heightAuto]}})(({theme:e,ownerState:n})=>{let t=(0,u.Wy)(e.shape.borderRadius)||"px",r=(0,u.YL)(e.shape.borderRadius);return(0,a.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,c.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${t}/${Math.round(r/.6*10)/10}${t}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(e.vars||e).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})},({ownerState:e})=>"pulse"===e.animation&&(0,o.iv)(w||(w=m`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),P),({ownerState:e,theme:n})=>"wave"===e.animation&&(0,o.iv)(b||(b=m`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),y,(n.vars||n).palette.action.hover)),k=i.forwardRef(function(e,n){let t=(0,h.Z)({props:e,name:"MuiSkeleton"}),{animation:i="pulse",className:o,component:l="span",height:u,style:c,variant:d="text",width:f}=t,g=(0,r.Z)(t,x),p=(0,a.Z)({},t,{animation:i,component:l,variant:d,hasChildren:Boolean(g.children)}),m=C(p);return(0,v.jsx)(S,(0,a.Z)({as:l,ref:n,className:(0,s.Z)(m.root,o),ownerState:p},g,{style:(0,a.Z)({width:f,height:u},c)}))});var R=k},40007:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/sessions/schedule",function(){return t(56707)}])},46723:function(e,n,t){"use strict";t.d(n,{s:function(){return a}});var r=t(67294),a=function(){var e=(0,r.useRef)(!1);return(0,r.useEffect)(function(){return e.current=!0,function(){e.current=!1}},[]),(0,r.useCallback)(function(){return e.current},[])}},84747:function(e,n,t){"use strict";t.d(n,{U:function(){return a}});var r=t(85893),a=(0,t(58175).Z)((0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Download")},21392:function(e,n,t){"use strict";t.d(n,{v:function(){return a}});var r=t(85893),a=(0,t(58175).Z)((0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",clipRule:"evenodd"})}),"Plus")},2248:function(e,n,t){"use strict";t.d(n,{g:function(){return a}});var r=t(85893),a=(0,t(58175).Z)((0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})}),"Upload")},56707:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return V}});var r=t(47568),a=t(26042),i=t(69396),s=t(828),o=t(20414),l=t(85893),u=t(67294),c=t(9008),d=t.n(c),h=t(61953),f=t(36336),g=t(79072),p=t(29630),v=t(54225),x=t(49837),m=t(67836),Z=t(9041),j=t(98875),w=t(31772),b=t(46723),C=t(84747);t(21392);var P=t(97169),y=t(2248),S=t(38682),k=t(31644);t(41664);var R=t(99534),_=t(29815),E=t(45697),I=t.n(E),M=t(75158),A=t(90244),q=t(93978),L=t(69417),N=t(5605),T=t(39807),z=t(25650),D=t(34547),F=t(57412),W=function(e){var n=e.total;return(0,l.jsxs)(L.Z,{children:[(0,l.jsx)(N.Z,{padding:"checkbox",children:(0,l.jsx)(F.Z,{variant:"square",animation:"wave",width:20,height:20,sx:{marginLeft:"10px"}})}),n.map(function(e,n){return(0,l.jsx)(N.Z,{children:(0,l.jsx)(F.Z,{variant:"rectangular",animation:"wave",width:"100%",height:20})},n)})]})},$=function(e){var n=e.session,t=e.sessionCount,r=e.onPageChange,s=e.onRowsPerPageChange,o=e.page,c=e.rowsPerPage,d=e.loading,f=(0,R.Z)(e,["session","sessionCount","onPageChange","onRowsPerPageChange","page","rowsPerPage","loading"]),g=(0,u.useState)([]),p=g[0],x=g[1];(0,u.useEffect)(function(){p.length&&x([])},[n]);var m=function(e){x(e.target.checked?n.map(function(e){return e.id}):[])},Z=function(e,n){p.includes(n)?x(function(e){return e.filter(function(e){return e!==n})}):x(function(e){return(0,_.Z)(e).concat([n])})},j=p.length>0,w=p.length>0&&p.length<n.length,b=p.length===(null==n?void 0:n.length);return(0,l.jsxs)("div",(0,i.Z)((0,a.Z)({},f),{children:[(0,l.jsxs)(h.Z,{sx:{backgroundColor:function(e){return"dark"===e.palette.mode?"neutral.800":"neutral.100"},display:j?"block":"none",px:2,py:.5},children:[(0,l.jsx)(M.Z,{checked:b,indeterminate:w,onChange:m}),(0,l.jsx)(v.Z,{size:"small",sx:{ml:2},children:"Delete"}),(0,l.jsx)(v.Z,{size:"small",sx:{ml:2},children:"Edit"})]}),(0,l.jsx)(D.L,{children:(0,l.jsxs)(A.Z,{sx:{minWidth:700},children:[(0,l.jsx)(q.Z,{sx:{visibility:j?"collapse":"visible"},children:(0,l.jsxs)(L.Z,{children:[(0,l.jsx)(N.Z,{padding:"checkbox",children:(0,l.jsx)(M.Z,{checked:b,indeterminate:w,onChange:m})}),(0,l.jsx)(N.Z,{children:"ID"}),(0,l.jsx)(N.Z,{children:"Team Name"}),(0,l.jsx)(N.Z,{children:"Coach Name"}),(0,l.jsx)(N.Z,{children:"Session Date"})]})}),(0,l.jsxs)(T.Z,{children:[d&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(W,{total:[1,2,3,4]}),(0,l.jsx)(W,{total:[1,2,3,4]}),(0,l.jsx)(W,{total:[1,2,3,4]}),(0,l.jsx)(W,{total:[1,2,3,4]})]}),null==n?void 0:n.map(function(e){var n=p.includes(e.id);return(0,l.jsxs)(L.Z,{hover:!0,selected:n,children:[(0,l.jsx)(N.Z,{padding:"checkbox",children:(0,l.jsx)(M.Z,{checked:n,onChange:function(n){return Z(n,e.id)},value:n})}),(0,l.jsx)(N.Z,{children:"".concat(e.coachingSessionId)}),(0,l.jsx)(N.Z,{children:"".concat(e.teamName)}),(0,l.jsx)(N.Z,{children:"".concat(e.coacheeName)}),(0,l.jsx)(N.Z,{children:e.coahingSessionDateTime})]},e.id)})]})]})}),(0,l.jsx)(z.Z,{component:"div",count:t,onPageChange:r,onRowsPerPageChange:s,page:o,rowsPerPage:c,rowsPerPageOptions:[5,10,25]})]}))};$.propTypes={session:I().array.isRequired,sessionCount:I().number.isRequired,onPageChange:I().func.isRequired,onRowsPerPageChange:I().func,page:I().number.isRequired,rowsPerPage:I().number.isRequired};var B=[{label:"Last update (newest)",value:"updatedAt|desc"},{label:"Last update (oldest)",value:"updatedAt|asc"},{label:"Total orders (highest)",value:"totalOrders|desc"},{label:"Total orders (lowest)",value:"totalOrders|asc"},],O=function(e,n,t){return n[t]<e[t]?-1:n[t]>e[t]?1:0},X=function(e,n){var t,r,a=(0,s.Z)(n.split("|"),2),i=a[0],o="desc"===(t=a[1])?function(e,n){return O(e,n,i)}:function(e,n){return-O(e,n,i)},l=null==e?void 0:e.map(function(e,n){return[e,n]});return null==l||l.sort(function(e,n){var t=o(e[0],n[0]);return 0!==t?t:e[1]-n[1]}),null==l?void 0:l.map(function(e){return e[0]})},U=function(){var e=(0,b.s)(),n=(0,u.useRef)(null),t=(0,u.useState)([]),s=t[0],c=t[1],j=(0,u.useState)("all");j[0],j[1];var w,R=(0,u.useState)([]),_=R[0],E=R[1],I=(0,u.useState)(0),M=I[0],A=I[1],q=(0,u.useState)(10),L=q[0],N=q[1],T=(0,u.useState)(B[0].value),z=T[0],D=T[1],F=(0,u.useState)(!1),W=F[0],O=F[1],U=(0,u.useState)({query:"",hasAcceptedMarketing:void 0,isProspect:void 0,isReturning:void 0}),V=U[0],H=U[1];(0,u.useEffect)(function(){S.w.push({event:"page_view"})},[]);var G,K,Y=(w=(0,r.Z)(function(e){var n;return(0,o.__generator)(this,function(t){switch(t.label){case 0:return n=[],[4,k.U.get("CoachingSession/getCoachingSessionsForCoach?coachId=".concat(e),{}).then(function(e){n=e.data}).catch(function(e){console.log(e,"error")})];case 1:return t.sent(),[2,n]}})}),function(e){return w.apply(this,arguments)}),J=(G=(0,r.Z)(function(){var e;return(0,o.__generator)(this,function(n){switch(n.label){case 0:return e=[],[4,k.U.get("Team/getCoachesWithTeams?companyId=1",{}).then(function(n){E(e=n.data)}).catch(function(e){console.log(e,"error")})];case 1:return n.sent(),[2,e]}})}),function(){return G.apply(this,arguments)}),Q=(0,u.useCallback)((K=(0,r.Z)(function(n){var t,r;return(0,o.__generator)(this,function(a){switch(a.label){case 0:O(!0),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Y(n)];case 2:return t=a.sent(),e()&&c(t),[3,4];case 3:return r=a.sent(),console.error(r),[3,4];case 4:return O(!1),[2]}})}),function(e){return K.apply(this,arguments)}),[e]);(0,u.useEffect)(function(){J()},[]),(0,u.useEffect)(function(){_.length&&Q(_[1].coachId)},[_]);var ee,en,et,er,ea,ei=function(e){e.preventDefault(),H(function(e){var t;return(0,i.Z)((0,a.Z)({},e),{query:null===(t=n.current)||void 0===t?void 0:t.value})})},es=function(e){D(e.target.value)},eo=function(e,n){A(n)},el=function(e){N(parseInt(e.target.value,10))},eu=null==s?void 0:s.filter(function(e){if(V.query){var n=!1;if(["email","name"].forEach(function(t){e[t].toLowerCase().includes(V.query.toLowerCase())&&(n=!0)}),!n)return!1}return(!V.hasAcceptedMarketing||!!e.hasAcceptedMarketing)&&(!V.isProspect||!!e.isProspect)&&(!V.isReturning||!!e.isReturning)}),ec=null==(et=X(eu,z))?void 0:et.slice(M*L,M*L+L);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d(),{children:(0,l.jsx)("title",{children:"Dashboard: Scheduled Sessions | Material Kit Pro"})}),(0,l.jsx)(h.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,l.jsxs)(f.Z,{maxWidth:"xl",children:[(0,l.jsxs)(h.Z,{sx:{mb:4},children:[(0,l.jsx)(g.ZP,{container:!0,justifyContent:"space-between",spacing:3,children:(0,l.jsx)(g.ZP,{item:!0,children:(0,l.jsx)(p.Z,{variant:"h4",children:"Scheduled Sessions"})})}),(0,l.jsxs)(h.Z,{sx:{m:-1,mt:3},children:[(0,l.jsx)(v.Z,{startIcon:(0,l.jsx)(y.g,{fontSize:"small"}),sx:{m:1},children:"Import"}),(0,l.jsx)(v.Z,{startIcon:(0,l.jsx)(C.U,{fontSize:"small"}),sx:{m:1},children:"Export"})]})]}),(0,l.jsxs)(x.Z,{children:[(0,l.jsxs)(h.Z,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap",m:-1.5,p:3},children:[(0,l.jsx)(h.Z,{component:"form",onSubmit:ei,sx:{flexGrow:1,m:1.5},children:(0,l.jsx)(m.Z,{defaultValue:"",fullWidth:!0,inputProps:{ref:n},InputProps:{startAdornment:(0,l.jsx)(Z.Z,{position:"start",children:(0,l.jsx)(P.o,{fontSize:"small"})})},placeholder:"Search Session"})}),(0,l.jsx)(m.Z,{label:"Sort By",name:"sort",onChange:es,select:!0,SelectProps:{native:!0},sx:{m:1.5},value:z,children:B.map(function(e){return(0,l.jsx)("option",{value:e.value,children:e.label},e.value)})})]}),(0,l.jsx)($,{session:ec,sessionCount:null==eu?void 0:eu.length,onPageChange:eo,onRowsPerPageChange:el,rowsPerPage:L,page:M,loading:W})]})]})})]})};U.getLayout=function(e){return(0,l.jsx)(j.a,{children:(0,l.jsx)(w.c,{children:e})})};var V=U},828:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(13375),a=t(91566);function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||(0,r.Z)(e,n)||(0,a.Z)(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[7760,8576,512,7836,6049,539,3837,6755,1557,3958,100,912,8863,9774,2888,179],function(){return e(e.s=40007)}),_N_E=e.O()}]);