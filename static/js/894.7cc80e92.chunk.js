"use strict";(self.webpackChunkmy_films=self.webpackChunkmy_films||[]).push([[894],{2894:function(t,e,i){i.r(e),i.d(e,{default:function(){return h}});var n=i(9439),s=i(7689),l=i(4420),r=i(2791),u=i(2580),c="DetailsFilm_allDivDetFilm__XqvsX",a="DetailsFilm_firstDivDetInf__g-d-V",o="DetailsFilm_imgDetFilm__-yycS",d="DetailsFilm_divPInfManBut__LVspe",f="DetailsFilm_divPInfDetInf__lz9r+",p="DetailsFilm_nameCatDitInf__b8xir",v=i(5720),m=i(184),h=function(){var t,e,i=(0,l.v9)(u.D5),h=(0,s.TH)(),_=(0,r.useState)(null!==(t=null===(e=h.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/"),x=(0,n.Z)(_,1)[0],y=(0,s.UO)().filmId,B=(0,l.v9)(u.KE).find((function(t){return t.id===y})),j=(0,r.useRef)(null),F=(0,r.useRef)(null),g=(0,r.useRef)(null);return(0,r.useEffect)((function(){var t=i<=1e3?i:1e3,e=2.3;if(F.current&&g.current){var n=F.current,s=g.current;n.style.width=t/1.15+"px",n.style.height=t/e+"px",n.style.padding=t/46+"px",n.style.gap=t/46+"px",s.style.width=t/(1.5*e)+"px",s.style.height=t/e+"px"}if(j.current){var l=j.current,r=function(t){"Escape"===t.key&&u()},u=function(){document.removeEventListener("keydown",r),l.removeEventListener("click",a),window.location.href=x},a=function(t){t.target.classList.contains(c)&&u()};l.addEventListener("click",a)}})),(0,m.jsx)("div",{ref:j,className:c,children:(0,m.jsx)("div",{ref:F,className:a,children:B&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("img",{ref:g,className:o,src:B.image,alt:B.title}),(0,m.jsxs)("div",{className:d,children:[(0,m.jsxs)("div",{className:f,children:[(0,m.jsxs)("p",{children:[(0,m.jsx)("span",{className:p,children:"Description: "}),B.description]}),(0,m.jsxs)("p",{children:[(0,m.jsx)("span",{className:p,children:"Actors: "}),B.actors.join(", ")]}),(0,m.jsxs)("p",{children:[(0,m.jsx)("span",{className:p,children:"Director: "}),B.director]}),(0,m.jsxs)("p",{children:[(0,m.jsx)("span",{className:p,children:"Genre: "}),B.genre.join(", ")]}),(0,m.jsxs)("p",{children:[(0,m.jsx)("span",{className:p,children:"Rating: "}),B.rating]})]}),(0,m.jsx)("div",{children:(0,m.jsx)(v.V,{film:B,coef:"1.5"})})]})]})})})}},5720:function(t,e,i){i.d(e,{V:function(){return p}});var n=i(3433),s=i(2791),l=i(4420),r=i(2580),u=i(1087),c={ulButActIt:"ManipButs_ulButActIt__4Oyy0",butActIt:"ManipButs_butActIt__7fb3D",notPlayButPlay:"ManipButs_notPlayButPlay__f-HM6",isPlayButPlay:"ManipButs_isPlayButPlay__vldpW",notFavBut:"ManipButs_notFavBut__z8K6x",isFavBut:"ManipButs_isFavBut__uVQo7",notSelBut:"ManipButs_notSelBut__PA6Pk",isSelBut:"ManipButs_isSelBut__u1Ts5",detBut:"ManipButs_detBut__VBo5a"},a=i(8992),o=i(3628),d=i(781),f=i(184),p=function(t){var e=t.film,i=t.coef,p=(0,l.I0)(),v=(0,l.v9)(r.D5),m=(0,l.v9)(a.$Q),h=(0,l.v9)(a.tT),_=(0,l.v9)(a.eA),x=(0,l.v9)(a.Wu),y=m.some((function(t){return t.id===e.id})),B=h.some((function(t){return t.id===e.id})),j=_.some((function(t){return t.id===e.id})),F=(0,s.useRef)(null),g=(0,s.useRef)(null),D=(0,s.useRef)(null),b=(0,s.useRef)(null),P=(0,s.useRef)(null);return(0,s.useEffect)((function(){var t=v<=1e3?v:1e3;if(F.current&&g.current&&D.current&&b.current&&P.current){var e=F.current,n=g.current,s=D.current,l=b.current,r=P.current;e.style.gap=t/(40*i)+"px",r.style.width=t/(13*i)+"px",r.style.height=t/(13*i)+"px",l.style.width=t/(13*i)+"px",l.style.height=t/(13*i)+"px",n.style.width=t/(13*i)+"px",n.style.height=t/(13*i)+"px",s.style.width=t/(13*i)+"px",s.style.height=t/(13*i)+"px"}})),(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("ul",{ref:F,className:c.ulButActIt,children:[(0,f.jsx)("li",{children:(0,f.jsx)("button",{ref:g,id:e._id,className:[c.butActIt,y?c.isPlayButPlay:c.notPlayButPlay].join(" "),type:"button",onClick:function(){var t=document.querySelector(".listFilmsForGap").scrollLeft;p((0,d.B)(t));var i=[];i=y?m.filter((function(t){return t.id!==e.id})):[].concat((0,n.Z)(m),[e]);var s={id:x,played:i};p((0,o.ug)(s))},children:"Play"})}),(0,f.jsx)("li",{children:(0,f.jsx)("button",{ref:b,type:"button",className:[c.butActIt,B?c.isSelBut:c.notSelBut].join(" "),onClick:function(){var t=document.querySelector(".listFilmsForGap").scrollLeft;p((0,d.B)(t));var i=[];i=B?h.filter((function(t){return t.id!==e.id})):[].concat((0,n.Z)(h),[e]);var s={id:x,selected:i};p((0,o.pM)(s))},children:"Selected"})}),(0,f.jsx)("li",{children:(0,f.jsx)("button",{ref:P,id:e._id,className:[c.butActIt,j?c.isFavBut:c.notFavBut].join(" "),type:"button",onClick:function(){var t=document.querySelector(".listFilmsForGap").scrollLeft;p((0,d.B)(t));var i=[];i=j?_.filter((function(t){return t.id!==e.id})):[].concat((0,n.Z)(_),[e]);var s={id:x,favorite:i};p((0,o.R3)(s))},children:"Favorite"})}),(0,f.jsx)("li",{children:(0,f.jsx)(u.rU,{to:"/films/".concat(e.id),state:{from:window.location.href},children:(0,f.jsx)("button",{ref:D,type:"button",className:[c.butActIt,c.detBut].join(" "),children:"Details"})})})]})})}}}]);
//# sourceMappingURL=894.7cc80e92.chunk.js.map