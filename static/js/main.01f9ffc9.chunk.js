(this["webpackJsonptodos-react-app"]=this["webpackJsonptodos-react-app"]||[]).push([[0],{18:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),a=c(7),r=c.n(a),s=c(4),l=c(6),i=c(8),d=c(9),u=c(11),j=c(10),b=c(0),m=function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){var e=this,t=this.props,c=t.todo,n=t.index,o=t.completeTodo,a=t.removeTodo;return Object(b.jsxs)("div",{className:"alert alert-dismissible alert-secondary mt-2",children:[Object(b.jsxs)("div",{className:"form-check",children:[Object(b.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckChecked",checked:c.completed,onClick:function(){return o(n)}}),Object(b.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckDefault",style:{textDecoration:c.completed?"line-through":""},children:c.name})]}),Object(b.jsx)("button",{type:"button",className:"btn-close",onClick:function(){return a(e.props.index)}})]},n)}}]),c}(o.a.Component),p="todosApp.todos";var f=function(){Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem(p)||"[]");d(e)}),[]);var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],o=t[1],a=Object(n.useState)([]),r=Object(l.a)(a,2),i=r[0],d=r[1],u=Object(n.useRef)(null);Object(n.useEffect)((function(){localStorage.setItem(p,JSON.stringify(i))}),[i]);var j=function(e){var t=[].concat(Object(s.a)(i),[{name:e,completed:!1}]);d(t)},f=function(e){var t=Object(s.a)(i);t[e].completed=!t[e].completed,d(t)},h=function(e){var t=Object(s.a)(i);t.splice(e,1),d(t)};return Object(b.jsx)("div",{className:"container p-4",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(b.jsx)("div",{className:"card",children:Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("form",{onSubmit:function(e){var t;if(e.preventDefault(),""===c.trim())return u.current.placeholder="Please enter a task";j(c),o(""),null===(t=u.current)||void 0===t||t.focus()},children:[Object(b.jsx)("input",{type:"text",onChange:function(e){return o(e.target.value)},value:c,className:"form-control",ref:u,autoFocus:!0,placeholder:"Add Todo..."}),Object(b.jsx)("div",{className:"d-grid mt-2",children:Object(b.jsx)("button",{className:"btn btn-light",type:"submit",children:"Add task"})})]})})}),i.map((function(e,t){return Object(b.jsx)(m,{todo:e,index:t,completeTodo:f,removeTodo:h},t)}))]})})})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),o(e),a(e),r(e)}))};c(17);r.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),h()}},[[18,1,2]]]);
//# sourceMappingURL=main.01f9ffc9.chunk.js.map