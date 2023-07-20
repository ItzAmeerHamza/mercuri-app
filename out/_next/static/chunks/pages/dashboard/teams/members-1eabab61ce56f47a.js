(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1794],{57412:function(e,t,a){"use strict";a.d(t,{Z:function(){return S}});var n=a(63366),r=a(87462),i=a(67294),s=a(86010),o=a(70917),c=a(94780),u=a(80702),l=a(41796),d=a(81719),m=a(78884),h=a(34867),p=a(1588);function g(e){return(0,h.Z)("MuiSkeleton",e)}(0,p.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var f=a(85893);let v=["animation","className","component","height","style","variant","width"],Z=e=>e,x,b,j,y,w=e=>{let{classes:t,variant:a,animation:n,hasChildren:r,width:i,height:s}=e;return(0,c.Z)({root:["root",a,n,r&&"withChildren",r&&!i&&"fitContent",r&&!s&&"heightAuto"]},g,t)},A=(0,o.F4)(x||(x=Z`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),k=(0,o.F4)(b||(b=Z`
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
`)),C=(0,d.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver(e,t){let{ownerState:a}=e;return[t.root,t[a.variant],!1!==a.animation&&t[a.animation],a.hasChildren&&t.withChildren,a.hasChildren&&!a.width&&t.fitContent,a.hasChildren&&!a.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{let a=(0,u.Wy)(e.shape.borderRadius)||"px",n=(0,u.YL)(e.shape.borderRadius);return(0,r.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,l.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${a}/${Math.round(n/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>"pulse"===e.animation&&(0,o.iv)(j||(j=Z`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),A),({ownerState:e,theme:t})=>"wave"===e.animation&&(0,o.iv)(y||(y=Z`
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
    `),k,(t.vars||t).palette.action.hover)),P=i.forwardRef(function(e,t){let a=(0,m.Z)({props:e,name:"MuiSkeleton"}),{animation:i="pulse",className:o,component:c="span",height:u,style:l,variant:d="text",width:h}=a,p=(0,n.Z)(a,v),g=(0,r.Z)({},a,{animation:i,component:c,variant:d,hasChildren:Boolean(p.children)}),Z=w(g);return(0,f.jsx)(C,(0,r.Z)({as:c,ref:t,className:(0,s.Z)(Z.root,o),ownerState:g},p,{style:(0,r.Z)({width:h,height:u},l)}))});var S=P},1784:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var n=a(58545),r=a(13882),i=a(83946);function s(e,t){(0,r.Z)(2,arguments);var a=(0,i.Z)(t);return(0,n.Z)(e,-a)}},33511:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var n=a(83946),r=a(61973),i=a(13882);function s(e,t){(0,i.Z)(2,arguments);var a=(0,n.Z)(t);return(0,r.Z)(e,-a)}},12158:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/teams/members",function(){return a(58620)}])},45352:function(e,t,a){"use strict";a.d(t,{n:function(){return l}});var n=a(51438),r=a(52951),i=a(7069),s=a(88330),o=a(1784),c=a(33511),u=new Date,l=new(function(){function e(){(0,n.Z)(this,e)}return(0,r.Z)(e,[{key:"getCustomers",value:function(e){return Promise.resolve([{id:"5e887ac47eed253091be10cb",avatar:"/static/mock-images/avatars/avatar-carson_darrin.png",city:"Cleveland",country:"USA",currency:"$",email:"carson.darrin@melsoft.co.za",hasAcceptedMarketing:!0,isProspect:!1,isReturning:!0,name:"Carson Darrin",state:"Ohio",totalAmountSpent:300,totalOrders:3,updatedAt:(0,i.Z)((0,s.Z)(u,7),1).getTime()},{id:"5e887b209c28ac3dd97f6db5",avatar:"/static/mock-images/avatars/avatar-fran_perez.png",city:"Atlanta",country:"USA",currency:"$",email:"fran.perez@melsoft.co.za",hasAcceptedMarketing:!0,isProspect:!0,isReturning:!1,name:"Fran Perez",state:"Georgia",totalAmountSpent:0,totalOrders:0,updatedAt:(0,i.Z)((0,s.Z)(u,1),2).getTime()},{id:"5e887b7602bdbc4dbb234b27",avatar:"/static/mock-images/avatars/avatar-jie_yan_song.png",city:"North Canton",country:"USA",currency:"$",email:"jie.yan.song@melsoft.co.za",hasAcceptedMarketing:!1,isProspect:!1,isReturning:!1,name:"Jie Yan Song",state:"Ohio",totalAmountSpent:5600,totalOrders:6,updatedAt:(0,i.Z)((0,s.Z)(u,4),2).getTime()},{id:"5e86809283e28b96d2d38537",avatar:"/static/mock-images/avatars/avatar-anika_visser.png",city:"Madrid",country:"Spain",currency:"$",email:"anika.visser@melsoft.co.za",hasAcceptedMarketing:!0,isProspect:!1,isReturning:!0,name:"Anika Visser",state:"Madrid",totalAmountSpent:500,totalOrders:1,updatedAt:(0,i.Z)((0,s.Z)(u,11),2).getTime()},{id:"5e86805e2bafd54f66cc95c3",avatar:"/static/mock-images/avatars/avatar-miron_vitold.png",city:"San Diego",country:"USA",currency:"$",email:"miron.vitold@melsoft.co.za",hasAcceptedMarketing:!0,isProspect:!0,isReturning:!1,name:"Miron Vitold",totalAmountSpent:0,totalOrders:0,state:"California",updatedAt:(0,i.Z)((0,s.Z)(u,7),3).getTime()},{id:"5e887a1fbefd7938eea9c981",avatar:"/static/mock-images/avatars/avatar-penjani_inyene.png",city:"Berkeley",country:"USA",currency:"$",email:"penjani.inyene@melsoft.co.za",hasAcceptedMarketing:!1,isProspect:!0,isReturning:!1,name:"Penjani Inyene",state:"California",totalAmountSpent:0,totalOrders:0,updatedAt:(0,i.Z)((0,s.Z)(u,5),4).getTime()},{id:"5e887d0b3d090c1b8f162003",avatar:"/static/mock-images/avatars/avatar-omar_darboe.png",currency:"$",email:"omar.darobe@melsoft.co.za",hasAcceptedMarketing:!0,isProspect:!1,isReturning:!1,city:"Carson City",country:"USA",name:"Omar Darobe",state:"Nevada",totalAmountSpent:100,totalOrders:4,updatedAt:(0,i.Z)((0,s.Z)(u,15),4).getTime()},{id:"5e88792be2d4cfb4bf0971d9",avatar:"/static/mock-images/avatars/avatar-siegbert_gottfried.png",city:"Los Angeles",country:"USA",currency:"$",email:"siegbert.gottfried@melsoft.co.za",hasAcceptedMarketing:!0,isProspect:!1,isReturning:!0,name:"Siegbert Gottfried",state:"California",totalAmountSpent:1e3,totalOrders:2,updatedAt:(0,i.Z)((0,s.Z)(u,2),5).getTime()},{id:"5e8877da9a65442b11551975",avatar:"/static/mock-images/avatars/avatar-iulia_albu.png",city:"Murray",country:"USA",email:"iulia.albu@melsoft.co.za",hasAcceptedMarketing:!0,isProspect:!0,isReturning:!1,name:"Iulia Albu",state:"Utah",totalAmountSpent:0,totalOrders:0,updatedAt:(0,i.Z)((0,s.Z)(u,8),6).getTime()},{id:"5e8680e60cba5019c5ca6fda",avatar:"/static/mock-images/avatars/avatar-nasimiyu_danai.png",city:"Salt Lake City",country:"USA",currency:"$",email:"nasimiyu.danai@melsoft.co.za",hasAcceptedMarketing:!1,isProspect:!1,isReturning:!0,name:"Nasimiyu Danai",state:"Utah",totalAmountSpent:200,totalOrders:7,updatedAt:(0,i.Z)((0,s.Z)(u,1),9).getTime()},])}},{key:"getCustomer",value:function(e){return Promise.resolve({id:"5e86805e2bafd54f66cc95c3",address1:"Street John Wick, no. 7",address2:"House #25",avatar:"/static/mock-images/avatars/avatar-miron_vitold.png",balance:0,city:"San Diego",country:"USA",currency:"$",email:"miron.vitold@melsoft.co.za",hasDiscount:!1,isVerified:!0,name:"Miron Vitold",phone:"+55 748 327 439",state:"New York",vatRate:19,zipCode:"240355"})}},{key:"getCustomerEmails",value:function(e){return Promise.resolve([{id:"5ece2ce3613486d95ffaea58",createdAt:(0,i.Z)((0,s.Z)((0,o.Z)(u,34),5),3).getTime(),description:"Order confirmation"},{id:"5ece2ce8cebf7ad1d100c0cd",createdAt:(0,i.Z)((0,s.Z)((0,o.Z)(u,49),11),4).getTime(),description:"Order confirmation"},])}},{key:"getCustomerInvoices",value:function(e){return Promise.resolve([{id:"528651571NT",issueDate:u.getTime(),status:"paid",amount:1358.75},{id:"311658671JR",issueDate:u.getTime(),status:"unpaid",amount:1451.75},])}},{key:"getCustomerLogs",value:function(e){return Promise.resolve([{id:"5ece2cfeb6e2ac847bba11ce",createdAt:(0,i.Z)((0,o.Z)((0,c.Z)(u,56),2),2).getTime(),description:"Purchase",ip:"84.234.243.42",method:"POST",route:"/api/purchase",status:200},{id:"5ece2d02510484b2952e1e05",createdAt:(0,i.Z)((0,o.Z)((0,c.Z)(u,56),2),2).getTime(),description:"Purchase",ip:"84.234.243.42",method:"POST",route:"/api/purchase",status:522},{id:"5ece2d08e2748e4e9788901a",createdAt:(0,i.Z)((0,o.Z)((0,c.Z)(u,23),8),2).getTime(),description:"Cart remove",ip:"84.234.243.42",method:"DELETE",route:"/api/products/d65654e/remove",status:200},{id:"5ece2d0c47214e342c2d7f28",createdAt:(0,i.Z)((0,o.Z)((0,c.Z)(u,54),20),2).getTime(),description:"Cart add",ip:"84.234.243.42",method:"GET",route:"/api/products/d65654e/add",status:200},{id:"5ece2d11e4060a97b2b57623",createdAt:(0,i.Z)((0,o.Z)((0,c.Z)(u,16),34),2).getTime(),description:"Cart add",ip:"84.234.243.42",method:"GET",route:"/api/products/c85727f/add",status:200},{id:"5ece2d16cf6d53d8e33656af",createdAt:(0,i.Z)((0,o.Z)((0,c.Z)(u,30),54),2).getTime(),description:"View product",ip:"84.234.243.42",method:"GET",route:"/api/products/c85727f",status:200},{id:"5ece2d1b2ec5071be9286a96",createdAt:(0,i.Z)((0,o.Z)((0,c.Z)(u,40),56),2).getTime(),description:"Get products",ip:"84.234.243.42",method:"GET",route:"/api/products",status:200},{id:"5ece2d22e68d5498917e47bc",createdAt:(0,i.Z)((0,o.Z)((0,c.Z)(u,5),57),2).getTime(),description:"Login",ip:"84.234.243.42",method:"POST",route:"/api/authentication/login",status:200},])}}]),e}())},51448:function(e,t,a){"use strict";a.d(t,{G:function(){return o}});var n=a(85893),r=a(69417),i=a(5605),s=a(57412),o=function(e){var t=e.total;return(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(i.Z,{padding:"checkbox",children:(0,n.jsx)(s.Z,{variant:"square",animation:"wave",width:20,height:20,sx:{marginLeft:"10px"}})}),t.map(function(e,t){return(0,n.jsx)(i.Z,{children:(0,n.jsx)(s.Z,{variant:"rectangular",animation:"wave",width:"100%",height:20})},t)})]})}},46723:function(e,t,a){"use strict";a.d(t,{s:function(){return r}});var n=a(67294),r=function(){var e=(0,n.useRef)(!1);return(0,n.useEffect)(function(){return e.current=!0,function(){e.current=!1}},[]),(0,n.useCallback)(function(){return e.current},[])}},84747:function(e,t,a){"use strict";a.d(t,{U:function(){return r}});var n=a(85893),r=(0,a(58175).Z)((0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Download")},61616:function(e,t,a){"use strict";a.d(t,{f:function(){return r}});var n=a(85893),r=(0,a(58175).Z)((0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[(0,n.jsx)("path",{d:"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"}),(0,n.jsx)("path",{fillRule:"evenodd",d:"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",clipRule:"evenodd"})]}),"PencilAlt")},21392:function(e,t,a){"use strict";a.d(t,{v:function(){return r}});var n=a(85893),r=(0,a(58175).Z)((0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",clipRule:"evenodd"})}),"Plus")},2248:function(e,t,a){"use strict";a.d(t,{g:function(){return r}});var n=a(85893),r=(0,a(58175).Z)((0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})}),"Upload")},58620:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return et}});var n=a(47568),r=a(26042),i=a(69396),s=a(828),o=a(20414),c=a(85893),u=a(67294),l=a(9008),d=a.n(l),m=a(61953),h=a(36336),p=a(79072),g=a(29630),f=a(54225),v=a(49837),Z=a(92383),x=a(18661),b=a(44373),j=a(67836),y=a(9041);a(45352);var w=a(98875),A=a(31772),k=a(46723),C=a(84747),P=a(21392),S=a(97169),R=a(2248),T=a(38682),M=a(31644),_=a(41664),z=a.n(_),O=a(99534),E=a(29815),L=a(45697),N=a.n(L),$=a(75158),U=a(90244),D=a(93978),G=a(69417),I=a(5605),q=a(39807),V=a(80562),B=a(25650),F=a(34547),W=a(51448),H=a(61616),X=function(e){var t=e.member,a=e.memberCount,n=e.onPageChange,s=e.onRowsPerPageChange,o=e.page,l=e.rowsPerPage,d=e.loading,h=(0,O.Z)(e,["member","memberCount","onPageChange","onRowsPerPageChange","page","rowsPerPage","loading"]),p=(0,u.useState)([]),v=p[0],Z=p[1];(0,u.useEffect)(function(){v.length&&Z([])},[t]);var x=function(e){Z(e.target.checked?t.map(function(e){return e.id}):[])},b=function(e,t){v.includes(t)?Z(function(e){return e.filter(function(e){return e!==t})}):Z(function(e){return(0,E.Z)(e).concat([t])})},j=v.length>0,y=v.length>0&&v.length<t.length,w=v.length===(null==t?void 0:t.length);return(0,c.jsxs)("div",(0,i.Z)((0,r.Z)({},h),{children:[(0,c.jsxs)(m.Z,{sx:{backgroundColor:function(e){return"dark"===e.palette.mode?"neutral.800":"neutral.100"},display:j?"block":"none",px:2,py:.5},children:[(0,c.jsx)($.Z,{checked:w,indeterminate:y,onChange:x}),(0,c.jsx)(f.Z,{size:"small",sx:{ml:2},children:"Delete"}),(0,c.jsx)(f.Z,{size:"small",sx:{ml:2},children:"Edit"})]}),(0,c.jsx)(F.L,{children:(0,c.jsxs)(U.Z,{sx:{minWidth:700},children:[(0,c.jsx)(D.Z,{sx:{visibility:j?"collapse":"visible"},children:(0,c.jsxs)(G.Z,{children:[(0,c.jsx)(I.Z,{padding:"checkbox",children:(0,c.jsx)($.Z,{checked:w,indeterminate:y,onChange:x})}),(0,c.jsx)(I.Z,{children:"ID"}),(0,c.jsx)(I.Z,{children:"Team Name"}),(0,c.jsx)(I.Z,{children:"Coach Name"}),(0,c.jsx)(I.Z,{children:"Coachee Name"}),(0,c.jsx)(I.Z,{children:"Enabled"}),(0,c.jsx)(I.Z,{align:"right",children:"Actions"})]})}),(0,c.jsxs)(q.Z,{children:[d&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(W.G,{total:[1,2,3,4,5]}),(0,c.jsx)(W.G,{total:[1,2,3,4,5]}),(0,c.jsx)(W.G,{total:[1,2,3,4,5]}),(0,c.jsx)(W.G,{total:[1,2,3,4,5]})]}),null==t?void 0:t.map(function(e,t){var a=v.includes(e.id);return(0,c.jsxs)(G.Z,{hover:!0,selected:a,children:[(0,c.jsx)(I.Z,{padding:"checkbox",children:(0,c.jsx)($.Z,{checked:a,onChange:function(t){return b(t,e.id)},value:a})}),(0,c.jsx)(I.Z,{children:"".concat(t+1)}),(0,c.jsx)(I.Z,{children:"".concat(e.teamName)}),(0,c.jsx)(I.Z,{children:"".concat(e.coachName)}),(0,c.jsx)(I.Z,{children:"".concat(e.teamMemberName)}),(0,c.jsx)(I.Z,{children:(0,c.jsx)(g.Z,{color:"success.main",variant:"subtitle2",children:e.enabled?"true":"false"})}),(0,c.jsx)(I.Z,{align:"right",children:(0,c.jsx)(z(),{href:{pathname:"/dashboard/teams/members/edit",query:(0,r.Z)({},e)},children:(0,c.jsx)(V.Z,{component:"a",children:(0,c.jsx)(H.f,{fontSize:"small"})})})})]},e.id)})]})]})}),(0,c.jsx)(B.Z,{component:"div",count:a,onPageChange:n,onRowsPerPageChange:s,page:o,rowsPerPage:l,rowsPerPageOptions:[5,10,25]})]}))};X.propTypes={member:N().array.isRequired,memberCount:N().number.isRequired,onPageChange:N().func.isRequired,onRowsPerPageChange:N().func,page:N().number.isRequired,rowsPerPage:N().number.isRequired};var J=[{label:"All",value:"all"},{label:"Accepts Marketing",value:"hasAcceptedMarketing"},{label:"Prospect",value:"isProspect"},{label:"Returning",value:"isReturning"},],Y=[{label:"Last update (newest)",value:"updatedAt|desc"},{label:"Last update (oldest)",value:"updatedAt|asc"},{label:"Total orders (highest)",value:"totalOrders|desc"},{label:"Total orders (lowest)",value:"totalOrders|asc"},],K=function(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0},Q=function(e,t){var a,n,r=(0,s.Z)(t.split("|"),2),i=r[0],o="desc"===(a=r[1])?function(e,t){return K(e,t,i)}:function(e,t){return-K(e,t,i)},c=null==e?void 0:e.map(function(e,t){return[e,t]});return null==c||c.sort(function(e,t){var a=o(e[0],t[0]);return 0!==a?a:e[1]-t[1]}),null==c?void 0:c.map(function(e){return e[0]})},ee=function(){var e,t=(0,k.s)(),a=(0,u.useRef)(null),s=(0,u.useState)([]),l=s[0],w=s[1],A=(0,u.useState)("all"),_=A[0],O=A[1],E=(0,u.useState)(0),L=E[0],N=E[1],$=(0,u.useState)(10),U=$[0],D=$[1],G=(0,u.useState)(Y[0].value),I=G[0],q=G[1],V=(0,u.useState)(!1),B=V[0],F=V[1],W=(0,u.useState)({query:"",hasAcceptedMarketing:void 0,isProspect:void 0,isReturning:void 0}),H=W[0],K=W[1];(0,u.useEffect)(function(){T.w.push({event:"page_view"})},[]);var ee=(e=(0,n.Z)(function(){var e;return(0,o.__generator)(this,function(t){switch(t.label){case 0:return e=[],[4,M.U.get("Team/getTeamMembersForCompany?companyId=1",{}).then(function(t){e=t.data}).catch(function(e){console.log(e,"error")})];case 1:return t.sent(),[2,e]}})}),function(){return e.apply(this,arguments)}),et=(0,u.useCallback)((0,n.Z)(function(){var e,a;return(0,o.__generator)(this,function(n){switch(n.label){case 0:F(!0),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,ee()];case 2:return e=n.sent(),t()&&w(e),[3,4];case 3:return a=n.sent(),console.error(a),[3,4];case 4:return F(!1),[2]}})}),[t]);(0,u.useEffect)(function(){et()},[]);var ea,en,er,ei,es,eo=function(e,t){var a=(0,i.Z)((0,r.Z)({},H),{hasAcceptedMarketing:void 0,isProspect:void 0,isReturning:void 0});"all"!==t&&(a[t]=!0),K(a),O(t)},ec=function(e){e.preventDefault(),K(function(e){var t;return(0,i.Z)((0,r.Z)({},e),{query:null===(t=a.current)||void 0===t?void 0:t.value})})},eu=function(e){q(e.target.value)},el=function(e,t){N(t)},ed=function(e){D(parseInt(e.target.value,10))},em=null==l?void 0:l.filter(function(e){if(H.query){var t=!1;if(["email","name"].forEach(function(a){e[a].toLowerCase().includes(H.query.toLowerCase())&&(t=!0)}),!t)return!1}return(!H.hasAcceptedMarketing||!!e.hasAcceptedMarketing)&&(!H.isProspect||!!e.isProspect)&&(!H.isReturning||!!e.isReturning)}),eh=null==(er=Q(em,I))?void 0:er.slice(L*U,L*U+U);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d(),{children:(0,c.jsx)("title",{children:"Dashboard: Member List | Material Kit Pro"})}),(0,c.jsx)(m.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,c.jsxs)(h.Z,{maxWidth:"xl",children:[(0,c.jsxs)(m.Z,{sx:{mb:4},children:[(0,c.jsxs)(p.ZP,{container:!0,justifyContent:"space-between",spacing:3,children:[(0,c.jsx)(p.ZP,{item:!0,children:(0,c.jsx)(g.Z,{variant:"h4",children:"Team Members"})}),(0,c.jsx)(p.ZP,{item:!0,children:(0,c.jsx)(z(),{href:"/dashboard/teams/members/add",children:(0,c.jsx)(f.Z,{startIcon:(0,c.jsx)(P.v,{fontSize:"small"}),variant:"contained",children:"Add"})})})]}),(0,c.jsxs)(m.Z,{sx:{m:-1,mt:3},children:[(0,c.jsx)(f.Z,{startIcon:(0,c.jsx)(R.g,{fontSize:"small"}),sx:{m:1},children:"Import"}),(0,c.jsx)(f.Z,{startIcon:(0,c.jsx)(C.U,{fontSize:"small"}),sx:{m:1},children:"Export"})]})]}),(0,c.jsxs)(v.Z,{children:[(0,c.jsx)(Z.Z,{indicatorColor:"primary",onChange:eo,scrollButtons:"auto",sx:{px:3},textColor:"primary",value:_,variant:"scrollable",children:J.map(function(e){return(0,c.jsx)(x.Z,{label:e.label,value:e.value},e.value)})}),(0,c.jsx)(b.Z,{}),(0,c.jsxs)(m.Z,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap",m:-1.5,p:3},children:[(0,c.jsx)(m.Z,{component:"form",onSubmit:ec,sx:{flexGrow:1,m:1.5},children:(0,c.jsx)(j.Z,{defaultValue:"",fullWidth:!0,inputProps:{ref:a},InputProps:{startAdornment:(0,c.jsx)(y.Z,{position:"start",children:(0,c.jsx)(S.o,{fontSize:"small"})})},placeholder:"Search Member"})}),(0,c.jsx)(j.Z,{label:"Sort By",name:"sort",onChange:eu,select:!0,SelectProps:{native:!0},sx:{m:1.5},value:I,children:Y.map(function(e){return(0,c.jsx)("option",{value:e.value,children:e.label},e.value)})})]}),(0,c.jsx)(X,{member:eh,memberCount:null==em?void 0:em.length,onPageChange:el,onRowsPerPageChange:ed,rowsPerPage:U,page:L,loading:B})]})]})})]})};ee.getLayout=function(e){return(0,c.jsx)(w.a,{children:(0,c.jsx)(A.c,{children:e})})};var et=ee},828:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var n=a(13375),r=a(91566);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||(0,n.Z)(e,t)||(0,r.Z)(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[7760,8576,512,7836,6049,539,3837,6755,1557,3958,100,912,4215,8863,9774,2888,179],function(){return e(e.s=12158)}),_N_E=e.O()}]);