"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[682],{57412:function(e,t,a){a.d(t,{Z:function(){return S}});var n=a(63366),i=a(87462),r=a(67294),o=a(86010),s=a(70917),c=a(94780),d=a(80702),u=a(41796),l=a(81719),h=a(78884),m=a(34867),g=a(1588);function p(e){return(0,m.Z)("MuiSkeleton",e)}(0,g.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var v=a(85893);let f=["animation","className","component","height","style","variant","width"],Z=e=>e,b,x,y,j,k=e=>{let{classes:t,variant:a,animation:n,hasChildren:i,width:r,height:o}=e;return(0,c.Z)({root:["root",a,n,i&&"withChildren",i&&!r&&"fitContent",i&&!o&&"heightAuto"]},p,t)},w=(0,s.F4)(b||(b=Z`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),A=(0,s.F4)(x||(x=Z`
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
`)),C=(0,l.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver(e,t){let{ownerState:a}=e;return[t.root,t[a.variant],!1!==a.animation&&t[a.animation],a.hasChildren&&t.withChildren,a.hasChildren&&!a.width&&t.fitContent,a.hasChildren&&!a.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{let a=(0,d.Wy)(e.shape.borderRadius)||"px",n=(0,d.YL)(e.shape.borderRadius);return(0,i.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,u.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${a}/${Math.round(n/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>"pulse"===e.animation&&(0,s.iv)(y||(y=Z`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),w),({ownerState:e,theme:t})=>"wave"===e.animation&&(0,s.iv)(j||(j=Z`
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
    `),A,(t.vars||t).palette.action.hover)),P=r.forwardRef(function(e,t){let a=(0,h.Z)({props:e,name:"MuiSkeleton"}),{animation:r="pulse",className:s,component:c="span",height:d,style:u,variant:l="text",width:m}=a,g=(0,n.Z)(a,f),p=(0,i.Z)({},a,{animation:r,component:c,variant:l,hasChildren:Boolean(g.children)}),Z=k(p);return(0,v.jsx)(C,(0,i.Z)({as:c,ref:t,className:(0,o.Z)(Z.root,s),ownerState:p},g,{style:(0,i.Z)({width:m,height:d},u)}))});var S=P},1784:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(58545),i=a(13882),r=a(83946);function o(e,t){(0,i.Z)(2,arguments);var a=(0,r.Z)(t);return(0,n.Z)(e,-a)}},33511:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(83946),i=a(61973),r=a(13882);function o(e,t){(0,r.Z)(2,arguments);var a=(0,n.Z)(t);return(0,i.Z)(e,-a)}},45352:function(e,t,a){a.d(t,{n:function(){return u}});var n=a(51438),i=a(52951),r=a(7069),o=a(88330),s=a(1784),c=a(33511),d=new Date,u=new(function(){function e(){(0,n.Z)(this,e)}return(0,i.Z)(e,[{key:"getCustomers",value:function(e){return Promise.resolve([{id:"5e887ac47eed253091be10cb",avatar:"/static/mock-images/avatars/avatar-carson_darrin.png",city:"Cleveland",country:"USA",currency:"$",email:"carson.darrin@melsoft.co.za",hasAcceptedMarketing:!0,isProspect:!1,isReturning:!0,name:"Carson Darrin",state:"Ohio",totalAmountSpent:300,totalOrders:3,updatedAt:(0,r.Z)((0,o.Z)(d,7),1).getTime()},{id:"5e887b209c28ac3dd97f6db5",avatar:"/static/mock-images/avatars/avatar-fran_perez.png",city:"Atlanta",country:"USA",currency:"$",email:"fran.perez@melsoft.co.za",hasAcceptedMarketing:!0,isProspect:!0,isReturning:!1,name:"Fran Perez",state:"Georgia",totalAmountSpent:0,totalOrders:0,updatedAt:(0,r.Z)((0,o.Z)(d,1),2).getTime()},{id:"5e887b7602bdbc4dbb234b27",avatar:"/static/mock-images/avatars/avatar-jie_yan_song.png",city:"North Canton",country:"USA",currency:"$",email:"jie.yan.song@melsoft.co.za",hasAcceptedMarketing:!1,isProspect:!1,isReturning:!1,name:"Jie Yan Song",state:"Ohio",totalAmountSpent:5600,totalOrders:6,updatedAt:(0,r.Z)((0,o.Z)(d,4),2).getTime()},{id:"5e86809283e28b96d2d38537",avatar:"/static/mock-images/avatars/avatar-anika_visser.png",city:"Madrid",country:"Spain",currency:"$",email:"anika.visser@melsoft.co.za",hasAcceptedMarketing:!0,isProspect:!1,isReturning:!0,name:"Anika Visser",state:"Madrid",totalAmountSpent:500,totalOrders:1,updatedAt:(0,r.Z)((0,o.Z)(d,11),2).getTime()},{id:"5e86805e2bafd54f66cc95c3",avatar:"/static/mock-images/avatars/avatar-miron_vitold.png",city:"San Diego",country:"USA",currency:"$",email:"miron.vitold@melsoft.co.za",hasAcceptedMarketing:!0,isProspect:!0,isReturning:!1,name:"Miron Vitold",totalAmountSpent:0,totalOrders:0,state:"California",updatedAt:(0,r.Z)((0,o.Z)(d,7),3).getTime()},{id:"5e887a1fbefd7938eea9c981",avatar:"/static/mock-images/avatars/avatar-penjani_inyene.png",city:"Berkeley",country:"USA",currency:"$",email:"penjani.inyene@melsoft.co.za",hasAcceptedMarketing:!1,isProspect:!0,isReturning:!1,name:"Penjani Inyene",state:"California",totalAmountSpent:0,totalOrders:0,updatedAt:(0,r.Z)((0,o.Z)(d,5),4).getTime()},{id:"5e887d0b3d090c1b8f162003",avatar:"/static/mock-images/avatars/avatar-omar_darboe.png",currency:"$",email:"omar.darobe@melsoft.co.za",hasAcceptedMarketing:!0,isProspect:!1,isReturning:!1,city:"Carson City",country:"USA",name:"Omar Darobe",state:"Nevada",totalAmountSpent:100,totalOrders:4,updatedAt:(0,r.Z)((0,o.Z)(d,15),4).getTime()},{id:"5e88792be2d4cfb4bf0971d9",avatar:"/static/mock-images/avatars/avatar-siegbert_gottfried.png",city:"Los Angeles",country:"USA",currency:"$",email:"siegbert.gottfried@melsoft.co.za",hasAcceptedMarketing:!0,isProspect:!1,isReturning:!0,name:"Siegbert Gottfried",state:"California",totalAmountSpent:1e3,totalOrders:2,updatedAt:(0,r.Z)((0,o.Z)(d,2),5).getTime()},{id:"5e8877da9a65442b11551975",avatar:"/static/mock-images/avatars/avatar-iulia_albu.png",city:"Murray",country:"USA",email:"iulia.albu@melsoft.co.za",hasAcceptedMarketing:!0,isProspect:!0,isReturning:!1,name:"Iulia Albu",state:"Utah",totalAmountSpent:0,totalOrders:0,updatedAt:(0,r.Z)((0,o.Z)(d,8),6).getTime()},{id:"5e8680e60cba5019c5ca6fda",avatar:"/static/mock-images/avatars/avatar-nasimiyu_danai.png",city:"Salt Lake City",country:"USA",currency:"$",email:"nasimiyu.danai@melsoft.co.za",hasAcceptedMarketing:!1,isProspect:!1,isReturning:!0,name:"Nasimiyu Danai",state:"Utah",totalAmountSpent:200,totalOrders:7,updatedAt:(0,r.Z)((0,o.Z)(d,1),9).getTime()},])}},{key:"getCustomer",value:function(e){return Promise.resolve({id:"5e86805e2bafd54f66cc95c3",address1:"Street John Wick, no. 7",address2:"House #25",avatar:"/static/mock-images/avatars/avatar-miron_vitold.png",balance:0,city:"San Diego",country:"USA",currency:"$",email:"miron.vitold@melsoft.co.za",hasDiscount:!1,isVerified:!0,name:"Miron Vitold",phone:"+55 748 327 439",state:"New York",vatRate:19,zipCode:"240355"})}},{key:"getCustomerEmails",value:function(e){return Promise.resolve([{id:"5ece2ce3613486d95ffaea58",createdAt:(0,r.Z)((0,o.Z)((0,s.Z)(d,34),5),3).getTime(),description:"Order confirmation"},{id:"5ece2ce8cebf7ad1d100c0cd",createdAt:(0,r.Z)((0,o.Z)((0,s.Z)(d,49),11),4).getTime(),description:"Order confirmation"},])}},{key:"getCustomerInvoices",value:function(e){return Promise.resolve([{id:"528651571NT",issueDate:d.getTime(),status:"paid",amount:1358.75},{id:"311658671JR",issueDate:d.getTime(),status:"unpaid",amount:1451.75},])}},{key:"getCustomerLogs",value:function(e){return Promise.resolve([{id:"5ece2cfeb6e2ac847bba11ce",createdAt:(0,r.Z)((0,s.Z)((0,c.Z)(d,56),2),2).getTime(),description:"Purchase",ip:"84.234.243.42",method:"POST",route:"/api/purchase",status:200},{id:"5ece2d02510484b2952e1e05",createdAt:(0,r.Z)((0,s.Z)((0,c.Z)(d,56),2),2).getTime(),description:"Purchase",ip:"84.234.243.42",method:"POST",route:"/api/purchase",status:522},{id:"5ece2d08e2748e4e9788901a",createdAt:(0,r.Z)((0,s.Z)((0,c.Z)(d,23),8),2).getTime(),description:"Cart remove",ip:"84.234.243.42",method:"DELETE",route:"/api/products/d65654e/remove",status:200},{id:"5ece2d0c47214e342c2d7f28",createdAt:(0,r.Z)((0,s.Z)((0,c.Z)(d,54),20),2).getTime(),description:"Cart add",ip:"84.234.243.42",method:"GET",route:"/api/products/d65654e/add",status:200},{id:"5ece2d11e4060a97b2b57623",createdAt:(0,r.Z)((0,s.Z)((0,c.Z)(d,16),34),2).getTime(),description:"Cart add",ip:"84.234.243.42",method:"GET",route:"/api/products/c85727f/add",status:200},{id:"5ece2d16cf6d53d8e33656af",createdAt:(0,r.Z)((0,s.Z)((0,c.Z)(d,30),54),2).getTime(),description:"View product",ip:"84.234.243.42",method:"GET",route:"/api/products/c85727f",status:200},{id:"5ece2d1b2ec5071be9286a96",createdAt:(0,r.Z)((0,s.Z)((0,c.Z)(d,40),56),2).getTime(),description:"Get products",ip:"84.234.243.42",method:"GET",route:"/api/products",status:200},{id:"5ece2d22e68d5498917e47bc",createdAt:(0,r.Z)((0,s.Z)((0,c.Z)(d,5),57),2).getTime(),description:"Login",ip:"84.234.243.42",method:"POST",route:"/api/authentication/login",status:200},])}}]),e}())},90026:function(e,t,a){a.d(t,{N:function(){return A}});var n=a(26042),i=a(69396),r=a(99534),o=a(29815),s=a(85893),c=a(67294),d=a(45697),u=a.n(d),l=a(61953),h=a(75158),m=a(54225),g=a(90244),p=a(93978),v=a(69417),f=a(5605),Z=a(39807),b=a(29630),x=a(25650),y=a(34547),j=a(57412),k=a(68346),w=function(){return(0,s.jsxs)(v.Z,{children:[(0,s.jsx)(f.Z,{padding:"checkbox",children:(0,s.jsx)(j.Z,{variant:"square",animation:"wave",width:20,height:20,sx:{marginLeft:"10px"}})}),(0,s.jsx)(f.Z,{children:(0,s.jsx)(l.Z,{sx:{alignItems:"center",display:"flex"},children:(0,s.jsx)(l.Z,{sx:{ml:1},children:(0,s.jsx)(k.Z,{color:"inherit",variant:"subtitle2",children:(0,s.jsx)(j.Z,{variant:"square",animation:"wave",width:200,height:20})})})})}),(0,s.jsx)(f.Z,{children:(0,s.jsx)(j.Z,{variant:"rectangular",animation:"wave",width:200,height:20})}),(0,s.jsx)(f.Z,{children:(0,s.jsx)(j.Z,{variant:"rectangular",animation:"wave",width:30,height:20})}),(0,s.jsx)(f.Z,{children:(0,s.jsx)(b.Z,{color:"success.main",variant:"subtitle2",children:(0,s.jsx)(j.Z,{variant:"rectangular",animation:"wave",width:40,height:20})})}),(0,s.jsx)(f.Z,{children:(0,s.jsx)(l.Z,{sx:{display:"flex",justifyContent:"end"},children:(0,s.jsx)(j.Z,{variant:"rectangular",animation:"wave",align:"right",width:70,height:20})})})]})},A=function(e){var t=e.competency,a=e.competencyCount,d=e.onPageChange,u=e.onRowsPerPageChange,j=e.page,k=e.rowsPerPage,A=e.loading,C=(0,r.Z)(e,["competency","competencyCount","onPageChange","onRowsPerPageChange","page","rowsPerPage","loading"]),P=(0,c.useState)([]),S=P[0],R=P[1];console.log("loading",A),(0,c.useEffect)(function(){S.length&&R([])},[t]);var T=function(e){R(e.target.checked?t.map(function(e){return e.id}):[])},M=function(e,t){S.includes(t)?R(function(e){return e.filter(function(e){return e!==t})}):R(function(e){return(0,o.Z)(e).concat([t])})},z=S.length>0,O=S.length>0&&S.length<t.length,$=S.length===(null==t?void 0:t.length);return(0,s.jsxs)("div",(0,i.Z)((0,n.Z)({},C),{children:[(0,s.jsxs)(l.Z,{sx:{backgroundColor:function(e){return"dark"===e.palette.mode?"neutral.800":"neutral.100"},display:z?"block":"none",px:2,py:.5},children:[(0,s.jsx)(h.Z,{checked:$,indeterminate:O,onChange:T}),(0,s.jsx)(m.Z,{size:"small",sx:{ml:2},children:"Delete"}),(0,s.jsx)(m.Z,{size:"small",sx:{ml:2},children:"Edit"})]}),(0,s.jsx)(y.L,{children:(0,s.jsxs)(g.Z,{sx:{minWidth:700},children:[(0,s.jsx)(p.Z,{sx:{visibility:z?"collapse":"visible"},children:(0,s.jsxs)(v.Z,{children:[(0,s.jsx)(f.Z,{padding:"checkbox",children:(0,s.jsx)(h.Z,{checked:$,indeterminate:O,onChange:T})}),(0,s.jsx)(f.Z,{children:"Title"}),(0,s.jsx)(f.Z,{children:"Message"}),(0,s.jsx)(f.Z,{children:"Descritpion"}),(0,s.jsx)(f.Z,{children:"Enabled"}),(0,s.jsx)(f.Z,{children:"Status"})]})}),(0,s.jsxs)(Z.Z,{children:[A&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(w,{}),(0,s.jsx)(w,{}),(0,s.jsx)(w,{}),(0,s.jsx)(w,{})]}),null==t?void 0:t.map(function(e){var t=S.includes(e.id);return(0,s.jsxs)(v.Z,{hover:!0,selected:t,children:[(0,s.jsx)(f.Z,{padding:"checkbox",children:(0,s.jsx)(h.Z,{checked:t,onChange:function(t){return M(t,e.id)},value:t})}),(0,s.jsx)(f.Z,{children:"".concat(e.title)}),(0,s.jsx)(f.Z,{children:e.message}),(0,s.jsx)(f.Z,{children:e.descritpion}),(0,s.jsx)(f.Z,{children:(0,s.jsx)(b.Z,{color:"success.main",variant:"subtitle2",children:e.enabled?"true":"false"})}),(0,s.jsx)(f.Z,{children:e.status})]},e.id)})]})]})}),(0,s.jsx)(x.Z,{component:"div",count:a,onPageChange:d,onRowsPerPageChange:u,page:j,rowsPerPage:k,rowsPerPageOptions:[5,10,25]})]}))};A.propTypes={competency:u().array.isRequired,competencyCount:u().number.isRequired,onPageChange:u().func.isRequired,onRowsPerPageChange:u().func,page:u().number.isRequired,rowsPerPage:u().number.isRequired}},46723:function(e,t,a){a.d(t,{s:function(){return i}});var n=a(67294),i=function(){var e=(0,n.useRef)(!1);return(0,n.useEffect)(function(){return e.current=!0,function(){e.current=!1}},[]),(0,n.useCallback)(function(){return e.current},[])}},84747:function(e,t,a){a.d(t,{U:function(){return i}});var n=a(85893),i=(0,a(58175).Z)((0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Download")},21392:function(e,t,a){a.d(t,{v:function(){return i}});var n=a(85893),i=(0,a(58175).Z)((0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",clipRule:"evenodd"})}),"Plus")},2248:function(e,t,a){a.d(t,{g:function(){return i}});var n=a(85893),i=(0,a(58175).Z)((0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})}),"Upload")},828:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(13375),i=a(91566);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||(0,n.Z)(e,t)||(0,i.Z)(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);