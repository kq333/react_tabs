(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{11:function(t,e,c){},13:function(t,e,c){"use strict";c.r(e);var n=c(4),a=c.n(n),i=c(2),s=c(1),b=(c(9),c(10),c(11),c(0)),d=function(t){var e=t.tabs,c=t.clickedContent,n=Object(s.useState)("tab-1"),a=Object(i.a)(n,2),d=a[0],o=a[1];return Object(b.jsx)("div",{className:"tabs is-boxed",children:Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)("li",{className:d===t.id?"is-active":"","data-cy":"Tab",children:Object(b.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){return e=t.id,o(e),void c(e);var e},children:t.id})},t.id)}))})})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],r=function(){var t=Object(s.useState)(o[0].title),e=Object(i.a)(t,2),c=e[0],n=e[1],a=Object(s.useState)(o[0].content),r=Object(i.a)(a,2),l=r[0],j=r[1];return Object(b.jsxs)("div",{className:"section",children:[Object(b.jsx)("h1",{className:"title",children:"Selected tab is ".concat(c)}),Object(b.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(b.jsx)(d,{tabs:o,clickedContent:function(t){var e=o.find((function(e){return e.id===t}));e&&(n(e.title),j(e.content))}}),Object(b.jsx)("div",{className:"block","data-cy":"TabContent",children:l})]})]})};a.a.render(Object(b.jsx)(r,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.62dc69f2.chunk.js.map