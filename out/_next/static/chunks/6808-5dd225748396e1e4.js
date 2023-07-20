"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6808],{57412:function(e,t,a){a.d(t,{Z:function(){return R}});var i=a(63366),n=a(87462),r=a(67294),s=a(86010),o=a(70917),c=a(94780),d=a(80702),l=a(41796),u=a(81719),h=a(78884),m=a(34867),g=a(1588);function p(e){return(0,m.Z)("MuiSkeleton",e)}(0,g.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var v=a(85893);let f=["animation","className","component","height","style","variant","width"],Z=e=>e,x,b,j,w,y=e=>{let{classes:t,variant:a,animation:i,hasChildren:n,width:r,height:s}=e;return(0,c.Z)({root:["root",a,i,n&&"withChildren",n&&!r&&"fitContent",n&&!s&&"heightAuto"]},p,t)},k=(0,o.F4)(x||(x=Z`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),A=(0,o.F4)(b||(b=Z`
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
`)),C=(0,u.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver(e,t){let{ownerState:a}=e;return[t.root,t[a.variant],!1!==a.animation&&t[a.animation],a.hasChildren&&t.withChildren,a.hasChildren&&!a.width&&t.fitContent,a.hasChildren&&!a.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{let a=(0,d.Wy)(e.shape.borderRadius)||"px",i=(0,d.YL)(e.shape.borderRadius);return(0,n.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,l.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${a}/${Math.round(i/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>"pulse"===e.animation&&(0,o.iv)(j||(j=Z`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),k),({ownerState:e,theme:t})=>"wave"===e.animation&&(0,o.iv)(w||(w=Z`
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
    `),A,(t.vars||t).palette.action.hover)),P=r.forwardRef(function(e,t){let a=(0,h.Z)({props:e,name:"MuiSkeleton"}),{animation:r="pulse",className:o,component:c="span",height:d,style:l,variant:u="text",width:m}=a,g=(0,i.Z)(a,f),p=(0,n.Z)({},a,{animation:r,component:c,variant:u,hasChildren:Boolean(g.children)}),Z=y(p);return(0,v.jsx)(C,(0,n.Z)({as:c,ref:t,className:(0,s.Z)(Z.root,o),ownerState:p},g,{style:(0,n.Z)({width:m,height:d},l)}))});var R=P},1784:function(e,t,a){a.d(t,{Z:function(){return s}});var i=a(58545),n=a(13882),r=a(83946);function s(e,t){(0,n.Z)(2,arguments);var a=(0,r.Z)(t);return(0,i.Z)(e,-a)}},33511:function(e,t,a){a.d(t,{Z:function(){return s}});var i=a(83946),n=a(61973),r=a(13882);function s(e,t){(0,r.Z)(2,arguments);var a=(0,i.Z)(t);return(0,n.Z)(e,-a)}},45352:function(e,t,a){a.d(t,{n:function(){return l}});var i=a(51438),n=a(52951),r=a(7069),s=a(88330),o=a(1784),c=a(33511),d=new Date,l=new(function(){function e(){(0,i.Z)(this,e)}return(0,n.Z)(e,[{key:"getCustomers",value:function(e){return Promise.resolve([{id:"5e887ac47eed253091be10cb",avatar:"/static/mock-images/avatars/avatar-carson_darrin.png",city:"Cleveland",country:"USA",currency:"$",email:"carson.darrin@melsoft.co.za",hasAcceptedMarketing:!0,isProspect:!1,isReturning:!0,name:"Carson Darrin",state:"Ohio",totalAmountSpent:300,totalOrders:3,updatedAt:(0,r.Z)((0,s.Z)(d,7),1).getTime()},{id:"5e887b209c28ac3dd97f6db5",avatar:"/static/mock-images/avatars/avatar-fran_perez.png",city:"Atlanta",country:"USA",currency:"$",email:"fran.perez@melsoft.co.za",hasAcceptedMarketing:!0,isProspect:!0,isReturning:!1,name:"Fran Perez",state:"Georgia",totalAmountSpent:0,totalOrders:0,updatedAt:(0,r.Z)((0,s.Z)(d,1),2).getTime()},{id:"5e887b7602bdbc4dbb234b27",avatar:"/static/mock-images/avatars/avatar-jie_yan_song.png",city:"North Canton",country:"USA",currency:"$",email:"jie.yan.song@melsoft.co.za",hasAcceptedMarketing:!1,isProspect:!1,isReturning:!1,name:"Jie Yan Song",state:"Ohio",totalAmountSpent:5600,totalOrders:6,updatedAt:(0,r.Z)((0,s.Z)(d,4),2).getTime()},{id:"5e86809283e28b96d2d38537",avatar:"/static/mock-images/avatars/avatar-anika_visser.png",city:"Madrid",country:"Spain",currency:"$",email:"anika.visser@melsoft.co.za",hasAcceptedMarketing:!0,isProspect:!1,isReturning:!0,name:"Anika Visser",state:"Madrid",totalAmountSpent:500,totalOrders:1,updatedAt:(0,r.Z)((0,s.Z)(d,11),2).getTime()},{id:"5e86805e2bafd54f66cc95c3",avatar:"/static/mock-images/avatars/avatar-miron_vitold.png",city:"San Diego",country:"USA",currency:"$",email:"miron.vitold@melsoft.co.za",hasAcceptedMarketing:!0,isProspect:!0,isReturning:!1,name:"Miron Vitold",totalAmountSpent:0,totalOrders:0,state:"California",updatedAt:(0,r.Z)((0,s.Z)(d,7),3).getTime()},{id:"5e887a1fbefd7938eea9c981",avatar:"/static/mock-images/avatars/avatar-penjani_inyene.png",city:"Berkeley",country:"USA",currency:"$",email:"penjani.inyene@melsoft.co.za",hasAcceptedMarketing:!1,isProspect:!0,isReturning:!1,name:"Penjani Inyene",state:"California",totalAmountSpent:0,totalOrders:0,updatedAt:(0,r.Z)((0,s.Z)(d,5),4).getTime()},{id:"5e887d0b3d090c1b8f162003",avatar:"/static/mock-images/avatars/avatar-omar_darboe.png",currency:"$",email:"omar.darobe@melsoft.co.za",hasAcceptedMarketing:!0,isProspect:!1,isReturning:!1,city:"Carson City",country:"USA",name:"Omar Darobe",state:"Nevada",totalAmountSpent:100,totalOrders:4,updatedAt:(0,r.Z)((0,s.Z)(d,15),4).getTime()},{id:"5e88792be2d4cfb4bf0971d9",avatar:"/static/mock-images/avatars/avatar-siegbert_gottfried.png",city:"Los Angeles",country:"USA",currency:"$",email:"siegbert.gottfried@melsoft.co.za",hasAcceptedMarketing:!0,isProspect:!1,isReturning:!0,name:"Siegbert Gottfried",state:"California",totalAmountSpent:1e3,totalOrders:2,updatedAt:(0,r.Z)((0,s.Z)(d,2),5).getTime()},{id:"5e8877da9a65442b11551975",avatar:"/static/mock-images/avatars/avatar-iulia_albu.png",city:"Murray",country:"USA",email:"iulia.albu@melsoft.co.za",hasAcceptedMarketing:!0,isProspect:!0,isReturning:!1,name:"Iulia Albu",state:"Utah",totalAmountSpent:0,totalOrders:0,updatedAt:(0,r.Z)((0,s.Z)(d,8),6).getTime()},{id:"5e8680e60cba5019c5ca6fda",avatar:"/static/mock-images/avatars/avatar-nasimiyu_danai.png",city:"Salt Lake City",country:"USA",currency:"$",email:"nasimiyu.danai@melsoft.co.za",hasAcceptedMarketing:!1,isProspect:!1,isReturning:!0,name:"Nasimiyu Danai",state:"Utah",totalAmountSpent:200,totalOrders:7,updatedAt:(0,r.Z)((0,s.Z)(d,1),9).getTime()},])}},{key:"getCustomer",value:function(e){return Promise.resolve({id:"5e86805e2bafd54f66cc95c3",address1:"Street John Wick, no. 7",address2:"House #25",avatar:"/static/mock-images/avatars/avatar-miron_vitold.png",balance:0,city:"San Diego",country:"USA",currency:"$",email:"miron.vitold@melsoft.co.za",hasDiscount:!1,isVerified:!0,name:"Miron Vitold",phone:"+55 748 327 439",state:"New York",vatRate:19,zipCode:"240355"})}},{key:"getCustomerEmails",value:function(e){return Promise.resolve([{id:"5ece2ce3613486d95ffaea58",createdAt:(0,r.Z)((0,s.Z)((0,o.Z)(d,34),5),3).getTime(),description:"Order confirmation"},{id:"5ece2ce8cebf7ad1d100c0cd",createdAt:(0,r.Z)((0,s.Z)((0,o.Z)(d,49),11),4).getTime(),description:"Order confirmation"},])}},{key:"getCustomerInvoices",value:function(e){return Promise.resolve([{id:"528651571NT",issueDate:d.getTime(),status:"paid",amount:1358.75},{id:"311658671JR",issueDate:d.getTime(),status:"unpaid",amount:1451.75},])}},{key:"getCustomerLogs",value:function(e){return Promise.resolve([{id:"5ece2cfeb6e2ac847bba11ce",createdAt:(0,r.Z)((0,o.Z)((0,c.Z)(d,56),2),2).getTime(),description:"Purchase",ip:"84.234.243.42",method:"POST",route:"/api/purchase",status:200},{id:"5ece2d02510484b2952e1e05",createdAt:(0,r.Z)((0,o.Z)((0,c.Z)(d,56),2),2).getTime(),description:"Purchase",ip:"84.234.243.42",method:"POST",route:"/api/purchase",status:522},{id:"5ece2d08e2748e4e9788901a",createdAt:(0,r.Z)((0,o.Z)((0,c.Z)(d,23),8),2).getTime(),description:"Cart remove",ip:"84.234.243.42",method:"DELETE",route:"/api/products/d65654e/remove",status:200},{id:"5ece2d0c47214e342c2d7f28",createdAt:(0,r.Z)((0,o.Z)((0,c.Z)(d,54),20),2).getTime(),description:"Cart add",ip:"84.234.243.42",method:"GET",route:"/api/products/d65654e/add",status:200},{id:"5ece2d11e4060a97b2b57623",createdAt:(0,r.Z)((0,o.Z)((0,c.Z)(d,16),34),2).getTime(),description:"Cart add",ip:"84.234.243.42",method:"GET",route:"/api/products/c85727f/add",status:200},{id:"5ece2d16cf6d53d8e33656af",createdAt:(0,r.Z)((0,o.Z)((0,c.Z)(d,30),54),2).getTime(),description:"View product",ip:"84.234.243.42",method:"GET",route:"/api/products/c85727f",status:200},{id:"5ece2d1b2ec5071be9286a96",createdAt:(0,r.Z)((0,o.Z)((0,c.Z)(d,40),56),2).getTime(),description:"Get products",ip:"84.234.243.42",method:"GET",route:"/api/products",status:200},{id:"5ece2d22e68d5498917e47bc",createdAt:(0,r.Z)((0,o.Z)((0,c.Z)(d,5),57),2).getTime(),description:"Login",ip:"84.234.243.42",method:"POST",route:"/api/authentication/login",status:200},])}}]),e}())},9868:function(e,t,a){a.d(t,{g:function(){return T}});var i=a(26042),n=a(69396),r=a(99534),s=a(29815),o=a(85893),c=a(67294),d=a(41664),l=a.n(d);a(92077);var u=a(45697),h=a.n(u),m=a(61953),g=a(75158),p=a(54225),v=a(90244),f=a(93978),Z=a(69417),x=a(5605),b=a(39807),j=a(72347),w=a(29630),y=a(80562),k=a(25650);a(18785);var A=a(61616),C=a(34547),P=a(57412),R=a(68346),S=function(){return(0,o.jsxs)(Z.Z,{children:[(0,o.jsx)(x.Z,{padding:"checkbox",children:(0,o.jsx)(P.Z,{variant:"square",animation:"wave",width:20,height:20,sx:{marginLeft:"10px"}})}),(0,o.jsx)(x.Z,{children:(0,o.jsxs)(m.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,o.jsx)(P.Z,{variant:"circular",animation:"wave",width:45,height:45}),(0,o.jsx)(m.Z,{sx:{ml:1},children:(0,o.jsx)(l(),{href:"/dashboard/customers/1",passHref:!0,children:(0,o.jsx)(R.Z,{color:"inherit",variant:"subtitle2",children:(0,o.jsx)(P.Z,{variant:"square",animation:"wave",width:200,height:40})})})})]})}),(0,o.jsx)(x.Z,{children:(0,o.jsx)(P.Z,{variant:"rectangular",animation:"wave",width:200,height:20})}),(0,o.jsx)(x.Z,{children:(0,o.jsx)(P.Z,{variant:"rectangular",animation:"wave",width:30,height:20})}),(0,o.jsx)(x.Z,{children:(0,o.jsx)(w.Z,{color:"success.main",variant:"subtitle2",children:(0,o.jsx)(P.Z,{variant:"rectangular",animation:"wave",width:40,height:20})})}),(0,o.jsx)(x.Z,{children:(0,o.jsx)(m.Z,{sx:{display:"flex",justifyContent:"end"},children:(0,o.jsx)(P.Z,{variant:"rectangular",animation:"wave",align:"right",width:70,height:20})})})]})},T=function(e){var t=e.customers,d=e.customersCount,u=e.onPageChange,h=e.onRowsPerPageChange,P=e.page,R=e.rowsPerPage,T=e.loading,M=(0,r.Z)(e,["customers","customersCount","onPageChange","onRowsPerPageChange","page","rowsPerPage","loading"]),z=(0,c.useState)([]),O=z[0],$=z[1];(0,c.useEffect)(function(){O.length&&$([])},[t]);var _=function(e){$(e.target.checked?t.map(function(e){return e.id}):[])},U=function(e,t){O.includes(t)?$(function(e){return e.filter(function(e){return e!==t})}):$(function(e){return(0,s.Z)(e).concat([t])})},E=O.length>0,L=O.length>0&&O.length<t.length,D=O.length===(null==t?void 0:t.length);return(0,o.jsxs)("div",(0,n.Z)((0,i.Z)({},M),{children:[(0,o.jsxs)(m.Z,{sx:{backgroundColor:function(e){return"dark"===e.palette.mode?"neutral.800":"neutral.100"},display:E?"block":"none",px:2,py:.5},children:[(0,o.jsx)(g.Z,{checked:D,indeterminate:L,onChange:_}),(0,o.jsx)(p.Z,{size:"small",sx:{ml:2},children:"Delete"}),(0,o.jsx)(p.Z,{size:"small",sx:{ml:2},children:"Edit"})]}),(0,o.jsx)(C.L,{children:(0,o.jsxs)(v.Z,{sx:{minWidth:700},children:[(0,o.jsx)(f.Z,{sx:{visibility:E?"collapse":"visible"},children:(0,o.jsxs)(Z.Z,{children:[(0,o.jsx)(x.Z,{padding:"checkbox",children:(0,o.jsx)(g.Z,{checked:D,indeterminate:L,onChange:_})}),(0,o.jsx)(x.Z,{children:"Name"}),(0,o.jsx)(x.Z,{children:"Username"}),(0,o.jsx)(x.Z,{children:"Contact No."}),(0,o.jsx)(x.Z,{children:"Enabled"}),(0,o.jsx)(x.Z,{align:"right",children:"Actions"})]})}),(0,o.jsxs)(b.Z,{children:[T&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(S,{}),(0,o.jsx)(S,{}),(0,o.jsx)(S,{}),(0,o.jsx)(S,{})]}),null==t?void 0:t.map(function(e){var t=O.includes(e.id);return(0,o.jsxs)(Z.Z,{hover:!0,selected:t,children:[(0,o.jsx)(x.Z,{padding:"checkbox",children:(0,o.jsx)(g.Z,{checked:t,onChange:function(t){return U(t,e.id)},value:t})}),(0,o.jsx)(x.Z,{children:(0,o.jsxs)(m.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,o.jsx)(j.Z,{src:a(74580),sx:{height:42,width:42}}),(0,o.jsxs)(m.Z,{sx:{ml:1},children:["".concat(e.firstName," ").concat(e.lastname),(0,o.jsx)(w.Z,{color:"textSecondary",variant:"body2",children:e.email})]})]})}),(0,o.jsx)(x.Z,{children:e.username}),(0,o.jsx)(x.Z,{children:e.mobile}),(0,o.jsx)(x.Z,{children:(0,o.jsx)(w.Z,{color:"success.main",variant:"subtitle2",children:e.enabled?"true":"false"})}),(0,o.jsx)(x.Z,{align:"right",children:(0,o.jsx)(l(),{href:{pathname:"/dashboard/customers/edit",query:(0,i.Z)({},e)},children:(0,o.jsx)(y.Z,{component:"a",children:(0,o.jsx)(A.f,{fontSize:"small"})})})})]},e.id)})]})]})}),(0,o.jsx)(k.Z,{component:"div",count:d,onPageChange:u,onRowsPerPageChange:h,page:P,rowsPerPage:R,rowsPerPageOptions:[5,10,25]})]}))};T.propTypes={customers:h().array.isRequired,customersCount:h().number.isRequired,onPageChange:h().func.isRequired,onRowsPerPageChange:h().func,page:h().number.isRequired,rowsPerPage:h().number.isRequired}},46723:function(e,t,a){a.d(t,{s:function(){return n}});var i=a(67294),n=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)(function(){return e.current=!0,function(){e.current=!1}},[]),(0,i.useCallback)(function(){return e.current},[])}},18785:function(e,t,a){a.d(t,{o:function(){return n}});var i=a(85893),n=(0,a(58175).Z)((0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})}),"ArrowRight")},84747:function(e,t,a){a.d(t,{U:function(){return n}});var i=a(85893),n=(0,a(58175).Z)((0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Download")},61616:function(e,t,a){a.d(t,{f:function(){return n}});var i=a(85893),n=(0,a(58175).Z)((0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[(0,i.jsx)("path",{d:"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"}),(0,i.jsx)("path",{fillRule:"evenodd",d:"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",clipRule:"evenodd"})]}),"PencilAlt")},21392:function(e,t,a){a.d(t,{v:function(){return n}});var i=a(85893),n=(0,a(58175).Z)((0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",clipRule:"evenodd"})}),"Plus")},2248:function(e,t,a){a.d(t,{g:function(){return n}});var i=a(85893),n=(0,a(58175).Z)((0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})}),"Upload")}}]);