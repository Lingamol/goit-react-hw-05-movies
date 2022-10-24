"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[885],{3885:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,a,o,i,c,s,p,u,l,d,h=t(5861),x=t(885),f=t(7757),v=t.n(f),g=t(7689),b=t(168),m=t(3721),Z=t(1087),w=t(71),j=m.Z.ul(r||(r=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  border-bottom: 1px solid black;\n\n  padding-top: 20px;\n  padding-bottom: 20px;\n  list-style: none;\n  margin: 0;\n  padding-left: 20px;\n"]))),k=m.Z.li(a||(a=(0,b.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),y=(0,m.Z)(Z.OL)(o||(o=(0,b.Z)(["\n  /* padding: 8px 16px;\n  border-radius: 4px; */\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n\n  &:hover {\n    color: #3f51b5;\n    /* background-color: #3f51b5; */\n  }\n"]))),_=(0,m.Z)(Z.rU)(i||(i=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid rgb(63, 81, 181);\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n  width: 100px;\n\n  &:hover {\n    color: white;\n    background-color: #3f51b5;\n  }\n  margin-bottom: 15px;\n"]))),G=m.Z.span(c||(c=(0,b.Z)(["\n  display: block;\n"]))),P=(0,m.Z)(w.Y1g)(s||(s=(0,b.Z)(["\n  width: 20px;\n  height: auto;\n\n  color: rgb(63, 81, 181);\n"]))),C=m.Z.h2(p||(p=(0,b.Z)(["\n  text-align: center;\n  font-weight: bold;\n  color: rgb(63, 81, 181);\n"]))),M=m.Z.p(u||(u=(0,b.Z)(["\n  padding-left: 10px;\n  margin: 0;\n  padding-top: 10px;\n  font-weight: bolder;\n  /* display: inline-block; */\n  border-top: 1px solid black;\n"]))),O=t(4390),S=t(2791),U=t(8349),B=m.Z.div(l||(l=(0,b.Z)(["\n  display: flex;\n  margin-bottom: 20px;\n"]))),I=m.Z.div(d||(d=(0,b.Z)(["\n  margin-right: 20px;\n"]))),q=t(184),A=function(n){var e=n.selectedMovie,t=e.poster,r=e.title,a=e.score,o=e.overview,i=e.genres;return(0,q.jsxs)(B,{children:[(0,q.jsx)(I,{children:(0,q.jsx)("img",{src:t,alt:r,width:"240",height:"320"})}),(0,q.jsxs)("div",{children:[(0,q.jsx)("h1",{children:r}),(0,q.jsxs)("p",{children:["User Score: ",a,"%"]}),(0,q.jsx)("h2",{children:"Overview"}),(0,q.jsx)("p",{children:o}),(0,q.jsx)("h3",{children:"Genres"}),(0,q.jsx)("p",{children:i})]})]})},E=function(){var n,e,t=(0,g.UO)().movieId,r=null!==(n=null===(e=(0,g.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/home",a=(0,S.useState)(null),o=(0,x.Z)(a,2),i=o[0],c=o[1];return(0,S.useEffect)((function(){function n(){return(n=(0,h.Z)(v().mark((function n(){var e;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,O.BG)(t);case 3:(e=n.sent)&&c({poster:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),title:e.title,score:Number.parseInt(10*e.vote_average),overview:e.overview,genres:e.genres.reduce((function(n,e){return n+(e.name+" ")}),"").trim()}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(C,{children:"Movie details"}),(0,q.jsxs)(_,{to:r,children:[(0,q.jsx)(P,{}),(0,q.jsx)(G,{children:" Go back"})]}),i&&(0,q.jsx)(A,{selectedMovie:i}),(0,q.jsx)(M,{children:"Additional information "}),(0,q.jsxs)(j,{children:[(0,q.jsx)(k,{children:(0,q.jsx)(y,{to:"cast",state:{from:r},children:"Cast"})}),(0,q.jsx)("li",{children:(0,q.jsx)(y,{to:"reviews",state:{from:r},children:"Reviews"})})]}),(0,q.jsx)(S.Suspense,{fallback:(0,q.jsx)(U.Z,{}),children:(0,q.jsx)(g.j3,{})})]})}},4390:function(n,e,t){t.d(e,{BG:function(){return p},GZ:function(){return u},gZ:function(){return c},vw:function(){return s}});var r=t(5861),a=t(7757),o=t.n(a),i=t(1044),c=function(){var n=(0,r.Z)(o().mark((function n(){var e,t,r,a,c=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:1,t="https://api.themoviedb.org/3/trending/movie/day?",r={api_key:"ec8ea0b4348914be2279bac7c8ca37c4",page:e},n.next=5,i.ZP.get(t,{params:r});case 5:return a=n.sent,n.abrupt("return",a.data);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e,t){var r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("search ",e),"https://api.themoviedb.org/3/search/movie",r={api_key:"ec8ea0b4348914be2279bac7c8ca37c4",query:e,page:t},n.next=5,i.ZP.get("https://api.themoviedb.org/3/search/movie",{params:r});case 5:return a=n.sent,n.abrupt("return",a.data);case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e),r={api_key:"ec8ea0b4348914be2279bac7c8ca37c4"},n.next=4,i.ZP.get(t,{params:r});case 4:return a=n.sent,n.abrupt("return",a.data);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(e,t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get(e,{params:t});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=885.2cd20c07.chunk.js.map