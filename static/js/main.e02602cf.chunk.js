(this["webpackJsonpreact-hooks-intro"]=this["webpackJsonpreact-hooks-intro"]||[]).push([[0],{13:function(e,t,o){},14:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),c=o(6),r=o.n(c),l=(o(13),o(4)),d=o(7),u=o(1),i=function(e,t){switch(t.type){case"ADD_TODO":return Object(u.a)(Object(u.a)({},e),{},{todos:[].concat(Object(d.a)(e.todos),[t.payload])});case"COMPLETE_TODO":return Object(u.a)(Object(u.a)({},e),{},{todos:e.todos.map((function(e){return e.id===t.payload?Object(u.a)(Object(u.a)({},e),{},{isCompleted:!0}):e}))});case"DELETE_TODO":return Object(u.a)(Object(u.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==t.payload}))});default:return e}},s={todos:[{id:1,text:"Learn about React",isCompleted:!1},{id:2,text:"Clean room",isCompleted:!1},{id:3,text:"Go todo app",isCompleted:!1}]},m=Object(n.createContext)(s),p=function(e){var t=e.children,o=Object(n.useReducer)(i,s),c=Object(l.a)(o,2),r=c[0],d=c[1];return a.a.createElement(m.Provider,{value:{todos:r.todos,completeTodo:function(e){d({type:"COMPLETE_TODO",payload:e})},addTodo:function(e){d({type:"ADD_TODO",payload:e})},deleteTodo:function(e){d({type:"DELETE_TODO",payload:e})}}},t)},O=function(){var e=Object(n.useContext)(m),t=Object(n.useContext)(m).completeTodo,o=Object(n.useContext)(m).deleteTodo;return console.log("Context",e),a.a.createElement(a.a.Fragment,null,e.todos.map((function(e){return a.a.createElement("div",{style:{textDecoration:e.isCompleted?"line-through":""},className:"todo"},e.text,a.a.createElement("div",{className:"button-container"},a.a.createElement("button",{className:"button-complete",onClick:function(){return t(e.id)}},a.a.createElement("img",{src:"./checked.png"})),a.a.createElement("button",{className:"button-delete",onClick:function(){return o(e.id)}},a.a.createElement("img",{src:"./x.png"}))))})))},b=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),o=t[0],c=t[1],r=Object(n.useContext)(m).addTodo;return a.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),o){var t={id:Math.floor(1e8*Math.random()),text:o,isCompleted:!1};r(t),c("")}}},a.a.createElement("input",{type:"text",className:"input",value:o,onChange:function(e){return c(e.target.value)},placeholder:"Add todo..."}))};var E=function(){return a.a.createElement(p,null,a.a.createElement("div",{className:"app"},a.a.createElement("div",{className:"todo-list"},a.a.createElement(b,null),a.a.createElement(O,null))))};r.a.render(a.a.createElement(E,null),document.getElementById("root"))},8:function(e,t,o){e.exports=o(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.e02602cf.chunk.js.map