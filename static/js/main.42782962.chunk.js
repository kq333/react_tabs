(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{11:function(t,e,c){},13:function(t,e,c){"use strict";c.r(e);var n=c(3),i=c.n(n),a=c(4),d=c(1),s=(c(9),c(10),c(11),c(0)),o=function(t){var e,c=t.tabs,n=t.selectedTabId,i=t.onTabClick;return Object(s.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(s.jsx)("div",{className:"tabs is-boxed",children:Object(s.jsx)("ul",{children:c.map((function(t){return Object(s.jsx)("li",{className:n===t.id?"is-active":"","data-cy":"Tab",children:Object(s.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){return e=t.id,void i(e);var e},children:t.title})},t.id)}))})}),Object(s.jsx)("div",{className:"block","data-cy":"TabContent",children:null===(e=c.find((function(t){return t.id===n})))||void 0===e?void 0:e.content})]})},b=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],l=function(){var t=Object(d.useState)(b[0].id),e=Object(a.a)(t,2),c=e[0],n=e[1],i=b.find((function(t){return t.id===c}));return Object(s.jsxs)("div",{className:"section",children:[Object(s.jsx)("h1",{className:"title",children:"Selected tab is ".concat(null===i||void 0===i?void 0:i.title)}),Object(s.jsx)(o,{tabs:b,selectedTabId:c,onTabClick:function(t){c!==t&&n(t)}})]})};i.a.render(Object(s.jsx)(l,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.42782962.chunk.js.map