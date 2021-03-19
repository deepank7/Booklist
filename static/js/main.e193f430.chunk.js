(this.webpackJsonpbooklist=this.webpackJsonpbooklist||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),r=n(6),i=n.n(r),s=(n(12),n(3)),u=n(7),a=n(16),j=function(t,e){switch(e.type){case"ADD_BOOK":return[].concat(Object(u.a)(t),[{title:e.book.title,author:e.book.author,id:Object(a.a)()}]);case"REMOVE_BOOK":return t.filter((function(t){return t.id!==e.id}));default:return t}},b=n(0),l=Object(c.createContext)(),O=function(t){var e=Object(c.useReducer)(j,[],(function(){var t=localStorage.getItem("books");return t?JSON.parse(t):[]})),n=Object(s.a)(e,2),o=n[0],r=n[1];return Object(c.useEffect)((function(){localStorage.setItem("books",JSON.stringify(o))}),[o]),Object(b.jsx)(l.Provider,{value:{books:o,dispatch:r},children:t.children})},d=function(){var t=Object(c.useContext)(l).dispatch,e=Object(c.useState)(""),n=Object(s.a)(e,2),o=n[0],r=n[1],i=Object(c.useState)(""),u=Object(s.a)(i,2),a=u[0],j=u[1];return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({type:"ADD_BOOK",book:{title:o,author:a}}),r(""),j("")},children:[Object(b.jsx)("input",{type:"text",placeholder:"Book-title",value:o,required:!0,onChange:function(t){return r(t.target.value)}}),Object(b.jsx)("input",{type:"text",placeholder:"Book-author",value:a,required:!0,onChange:function(t){return j(t.target.value)}}),Object(b.jsx)("input",{type:"submit",value:"Add book"})]})},h=function(t){var e=t.book,n=Object(c.useContext)(l).dispatch;return Object(b.jsxs)("li",{onClick:function(){return n({type:"REMOVE_BOOK",id:e.id})},children:[Object(b.jsx)("div",{className:"title",children:e.title}),Object(b.jsx)("div",{className:"author",children:e.author})]})},x=function(){var t=Object(c.useContext)(l).books;return t.length?Object(b.jsx)("div",{className:"book-list",children:Object(b.jsx)("ul",{children:t.map((function(t){return Object(b.jsx)(h,{book:t},t.id)}))})}):Object(b.jsx)("div",{className:"empty",children:"No Books to read"})},f=function(){var t=Object(c.useContext)(l).books;return Object(b.jsxs)("div",{className:"navbar",children:[Object(b.jsx)("h1",{children:"Book Reading list"}),Object(b.jsxs)("p",{children:["Currently you have ",t.length," books"]})]})};var p=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(O,{children:[Object(b.jsx)(f,{}),Object(b.jsx)(x,{}),Object(b.jsx)(d,{})]})})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),r(t),i(t)}))};i.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),v()}},[[14,1,2]]]);
//# sourceMappingURL=main.e193f430.chunk.js.map