(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9650],{57158:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/competency/suggestions",function(){return n(23262)}])},23262:function(e,t,n){"use strict";n.r(t);var r=n(47568),a=n(26042),s=n(69396),l=n(828),i=n(20414),o=n(85893),u=n(67294),c=n(9008),d=n.n(c),p=n(61953),f=n(36336),h=n(79072),v=n(29630),x=n(54225),g=n(49837),m=n(92383),j=n(18661),Z=n(44373),b=n(67836),y=n(9041);n(45352);var w=n(98875),P=n(31772),C=n(90026),_=n(46723),S=n(84747);n(21392);var k=n(97169),A=n(2248),E=n(38682),R=n(31644);n(41664);var M=[{label:"All",value:"all"},{label:"Accepts Marketing",value:"hasAcceptedMarketing"},{label:"Prospect",value:"isProspect"},{label:"Returning",value:"isReturning"},],I=[{label:"Last update (newest)",value:"updatedAt|desc"},{label:"Last update (oldest)",value:"updatedAt|asc"},{label:"Total orders (highest)",value:"totalOrders|desc"},{label:"Total orders (lowest)",value:"totalOrders|asc"},],L=function(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0},N=function(e,t){var n,r,a=(0,l.Z)(t.split("|"),2),s=a[0],i="desc"===(n=a[1])?function(e,t){return L(e,t,s)}:function(e,t){return-L(e,t,s)},o=null==e?void 0:e.map(function(e,t){return[e,t]});return null==o||o.sort(function(e,t){var n=i(e[0],t[0]);return 0!==n?n:e[1]-t[1]}),null==o?void 0:o.map(function(e){return e[0]})},q=function(){var e,t=(0,_.s)(),n=(0,u.useRef)(null),l=(0,u.useState)([]),c=l[0],w=l[1],P=(0,u.useState)("all"),L=P[0],q=P[1],O=(0,u.useState)(0),T=O[0],z=O[1],W=(0,u.useState)(10),B=W[0],D=W[1],G=(0,u.useState)(I[0].value),U=G[0],X=G[1],F=(0,u.useState)(!1),K=F[0],V=F[1],H=(0,u.useState)({query:"",hasAcceptedMarketing:void 0,isProspect:void 0,isReturning:void 0}),J=H[0],Q=H[1];(0,u.useEffect)(function(){E.w.push({event:"page_view"})},[]);var Y=(e=(0,r.Z)(function(){var e;return(0,i.__generator)(this,function(t){switch(t.label){case 0:return e=[],[4,R.U.get("Competency/getCompetencySuggestions",{}).then(function(t){e=t.data}).catch(function(e){console.log(e,"error")})];case 1:return t.sent(),[2,e]}})}),function(){return e.apply(this,arguments)}),$=(0,u.useCallback)((0,r.Z)(function(){var e,n;return(0,i.__generator)(this,function(r){switch(r.label){case 0:V(!0),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,Y()];case 2:return e=r.sent(),t()&&w(e),[3,4];case 3:return n=r.sent(),console.error(n),[3,4];case 4:return V(!1),[2]}})}),[t]);(0,u.useEffect)(function(){$()},[]);var ee,et,en,er,ea,es=function(e,t){var n=(0,s.Z)((0,a.Z)({},J),{hasAcceptedMarketing:void 0,isProspect:void 0,isReturning:void 0});"all"!==t&&(n[t]=!0),Q(n),q(t)},el=function(e){e.preventDefault(),Q(function(e){var t;return(0,s.Z)((0,a.Z)({},e),{query:null===(t=n.current)||void 0===t?void 0:t.value})})},ei=function(e){X(e.target.value)},eo=function(e,t){z(t)},eu=function(e){D(parseInt(e.target.value,10))},ec=null==c?void 0:c.filter(function(e){if(J.query){var t=!1;if(["email","name"].forEach(function(n){e[n].toLowerCase().includes(J.query.toLowerCase())&&(t=!0)}),!t)return!1}return(!J.hasAcceptedMarketing||!!e.hasAcceptedMarketing)&&(!J.isProspect||!!e.isProspect)&&(!J.isReturning||!!e.isReturning)}),ed=null==(en=N(ec,U))?void 0:en.slice(T*B,T*B+B);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d(),{children:(0,o.jsx)("title",{children:"Dashboard: Competency List | Material Kit Pro"})}),(0,o.jsx)(p.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,o.jsxs)(f.Z,{maxWidth:"xl",children:[(0,o.jsxs)(p.Z,{sx:{mb:4},children:[(0,o.jsx)(h.ZP,{container:!0,justifyContent:"space-between",spacing:3,children:(0,o.jsx)(h.ZP,{item:!0,children:(0,o.jsx)(v.Z,{variant:"h4",children:"Competency Suggestions"})})}),(0,o.jsxs)(p.Z,{sx:{m:-1,mt:3},children:[(0,o.jsx)(x.Z,{startIcon:(0,o.jsx)(A.g,{fontSize:"small"}),sx:{m:1},children:"Import"}),(0,o.jsx)(x.Z,{startIcon:(0,o.jsx)(S.U,{fontSize:"small"}),sx:{m:1},children:"Export"})]})]}),(0,o.jsxs)(g.Z,{children:[(0,o.jsx)(m.Z,{indicatorColor:"primary",onChange:es,scrollButtons:"auto",sx:{px:3},textColor:"primary",value:L,variant:"scrollable",children:M.map(function(e){return(0,o.jsx)(j.Z,{label:e.label,value:e.value},e.value)})}),(0,o.jsx)(Z.Z,{}),(0,o.jsxs)(p.Z,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap",m:-1.5,p:3},children:[(0,o.jsx)(p.Z,{component:"form",onSubmit:el,sx:{flexGrow:1,m:1.5},children:(0,o.jsx)(b.Z,{defaultValue:"",fullWidth:!0,inputProps:{ref:n},InputProps:{startAdornment:(0,o.jsx)(y.Z,{position:"start",children:(0,o.jsx)(k.o,{fontSize:"small"})})},placeholder:"Search Competency"})}),(0,o.jsx)(b.Z,{label:"Sort By",name:"sort",onChange:ei,select:!0,SelectProps:{native:!0},sx:{m:1.5},value:U,children:I.map(function(e){return(0,o.jsx)("option",{value:e.value,children:e.label},e.value)})})]}),(0,o.jsx)(C.N,{competency:ed,competencyCount:null==ec?void 0:ec.length,onPageChange:eo,onRowsPerPageChange:eu,rowsPerPage:B,page:T,loading:K})]})]})})]})};q.getLayout=function(e){return(0,o.jsx)(w.a,{children:(0,o.jsx)(P.c,{children:e})})},t.default=q}},function(e){e.O(0,[7760,8576,512,7836,6049,539,3837,6755,1557,3958,100,912,4215,8863,682,9774,2888,179],function(){return e(e.s=57158)}),_N_E=e.O()}]);