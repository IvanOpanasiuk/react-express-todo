(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(t,e,n){t.exports=n(26)},,,,,,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(8),i=n.n(r),c=(n(16),n(6)),d=n(9),l=n(1),u=n(2),s=n(4),h=n(3),f=n(5),m=(n(18),a.a.createContext("")),p=m.Consumer,b=m.Provider,v=(n(20),function(t){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props.el;return a.a.createElement(p,null,function(e){var n=e.handleDeleteTodo,o=e.handleToggleDone;return a.a.createElement("div",{style:{textDecoration:t.done?"line-through":""},className:"todo-main"},a.a.createElement("span",null,t.text),a.a.createElement("button",{className:"todo__button-delete",onClick:function(){return n(t._id)}},"X"),a.a.createElement("button",{onClick:function(){return o(t._id)},className:"todo__button-done"},t.done?"to do":"done"))})}}]),e}(o.Component)),j=(n(22),function(t){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"todolist-main"},a.a.createElement(p,null,function(t){var e=t.state.todos;return e?e.map(function(t){return a.a.createElement(v,{key:t._id,el:t})}):a.a.createElement("div",null,"Loading ...")}))}}]),e}(o.Component)),g=(n(24),function(t){function e(){var t,n;Object(l.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(a)))).handelSubmit=function(t){t&&"submit"===t.type&&t.preventDefault()},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement(p,null,function(t){var e=t.state,n=t.handleChange,o=t.handleSubmit;return a.a.createElement("form",{className:"todo-form-main",onSubmit:o},a.a.createElement("input",{name:"newtodo",value:e.newtodo,onChange:n,placeholder:"new todo ... "}),a.a.createElement("button",{onClick:o},"add todo"))})}}]),e}(o.Component)),O=function(t){function e(){var t,n;Object(l.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[],newtodo:""},n.handleChange=function(t){n.setState(Object(d.a)({},t.target.name,t.target.value))},n.addTodo=function(t){n.setState({todos:[t].concat(Object(c.a)(n.state.todos))})},n.handleSubmit=function(t){t.preventDefault(),n.handleSetTodo({text:n.state.newtodo,done:!1}),n.setState({newtodo:""})},n.handleToggleDone=function(t){var e=!n.state.todos.filter(function(e){return e._id===t})[0].done;n.handleUpdateText(t,e)},n.handleEditText=function(t){fetch("/api/updateTodo/".concat(t)).then(function(t){return t.json()}).then(function(t){return n.setState({todos:t.data})})},n.handleSetTodo=function(t){fetch("/api/setTodo",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(t){return t.json()}).then(function(t){n.setState({todos:[t.data].concat(Object(c.a)(n.state.todos))})})},n.handleDeleteTodo=function(t){fetch("/api/deleteTodo",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t})}).then(function(t){return t.json()}).then(function(e){var o=n.state.todos.filter(function(e){return e._id!==t});n.setState({todos:o})})},n.handleUpdateText=function(t,e){fetch("/api/updateTodo",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,done:e})}).then(function(t){return t.json()}).then(function(t){var e=n.state.todos.map(function(e){return e._id===t.result._id?(e.done=!t.result.done,e):e});n.setState({todos:e})})},n.handleGetAllTodos=function(){fetch("/api/getTodos").then(function(t){return t.json()}).then(function(t){n.setState({todos:t.data})})},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.handleGetAllTodos()}},{key:"render",value:function(){var t=this.state;return a.a.createElement("div",null,a.a.createElement(b,{value:{state:t,handleDeleteTodo:this.handleDeleteTodo,handleChange:this.handleChange,handleSubmit:this.handleSubmit,handleToggleDone:this.handleToggleDone}},a.a.createElement(g,null),a.a.createElement(j,null)))}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[10,2,1]]]);
//# sourceMappingURL=main.c5b19236.chunk.js.map