(this.webpackJsonpdarshan1=this.webpackJsonpdarshan1||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(6),i=(n(19),n(2)),s=n(9),a=n(0),j=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];function j(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"Card",children:[Object(a.jsx)("img",{src:e.animeImg,width:"200px",height:"200px",alt:"Img"}),Object(a.jsx)("h2",{children:e.animeTitle}),Object(a.jsx)(s.a,{variant:"primary",href:e.episodeUrl,children:"Watch Now"})]})})}return Object(c.useEffect)((function(){fetch("https://gogoanime.consumet.org/recent-release").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"yo Whats up!!"}),Object(a.jsx)("div",{className:"Container",children:n.map((function(e){return Object(a.jsx)(j,{animeImg:e.animeImg,animeTitle:e.animeTitle,episodeNum:e.episodeNum,episodeUrl:e.episodeUrl})}))})]})};function o(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Helllo this is Darshan"}),";",Object(a.jsx)("h1",{children:"Google Seacrh Console Has Been Added"}),Object(a.jsx)(j,{})]})}var h=document.getElementById("root");Object(r.createRoot)(h).render(Object(a.jsx)(c.StrictMode,{children:Object(a.jsx)(o,{})}))}},[[21,1,2]]]);
//# sourceMappingURL=main.1b2ffa2a.chunk.js.map