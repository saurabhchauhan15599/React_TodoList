(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{14:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(7),a=c.n(s),r=(c(5),c(8)),d=c(6),o=c(0),l=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"todo-style",children:[Object(o.jsx)("i",{className:"fa fa-times","aria-hidden":"true",onClick:function(){e.onSelect(e.id)}}),Object(o.jsx)("li",{children:e.text})]})})},j=function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)([]),a=Object(d.a)(s,2),j=a[0],u=a[1],b=function(e){console.log("deldeted"),u((function(t){return t.filter((function(t,c){return c!==e}))}))};return Object(o.jsx)("div",{className:"container container-fluid",children:Object(o.jsxs)("div",{className:"main-todo ",children:[Object(o.jsx)("div",{className:"heading-todo",children:Object(o.jsx)("h2",{children:"To-Do List"})}),Object(o.jsxs)("div",{className:"add-items",children:[Object(o.jsx)("input",{type:"text",className:"add-list",placeholder:"enter item",required:!0,onChange:function(e){i(e.target.value)}}),Object(o.jsx)("button",{className:"select-items btn btn-danger",onClick:function(){u((function(e){return[].concat(Object(r.a)(e),[c])}))},children:"+"})]}),Object(o.jsx)("div",{className:"show-list",children:Object(o.jsx)("ol",{children:j.map((function(e,t){return Object(o.jsx)(l,{id:t,text:e,onSelect:b},t)}))})})]})})};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root"))},5:function(e,t,c){}},[[14,1,2]]]);
//# sourceMappingURL=main.4191506b.chunk.js.map