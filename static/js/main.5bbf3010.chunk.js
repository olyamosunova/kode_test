(this.webpackJsonpkode_test=this.webpackJsonpkode_test||[]).push([[0],{55:function(e,t,c){},57:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},79:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(21),r=c.n(s),i=(c(55),c(19)),o=c.n(i),j=c(24),l=c(4),d=c(5),u=c(17),b=(c(57),c(29)),O=c(16),m="NO_AUTH",h="AUTH",f="\u041f\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e.",p="\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c.",x="\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043a\u043e\u0434",v="LOGIN",g="CODE",_=c(1),N=function(e){var t=e.isAuthorizationSuccess,c=e.submitForm,n=e.handleChange,a=e.errors;return Object(_.jsxs)("form",{className:"form",onSubmit:c,children:[!t&&Object(_.jsx)("p",{className:"form__error",children:p}),Object(_.jsxs)("div",{className:"form__block",children:[Object(_.jsxs)("label",{className:a.login&&"is-invalid",children:[Object(_.jsx)("span",{children:"Login"}),Object(_.jsx)("input",{name:"login",type:"text",placeholder:"Enter login",onChange:n})]}),a.login&&Object(_.jsx)("div",{className:"form__block-error",children:a.login})]}),Object(_.jsxs)("div",{className:"form__block",children:[Object(_.jsxs)("label",{className:a.password&&"is-invalid",children:[Object(_.jsx)("span",{children:"Login"}),Object(_.jsx)("input",{name:"password",type:"password",placeholder:"Enter password",onChange:n})]}),a.password&&Object(_.jsx)("div",{className:"form__block-error",children:a.password})]}),Object(_.jsx)("button",{className:"button",type:"submit",children:"Log in"})]})},S=(c(59),function(e){var t=e.handleChange,c=e.submitForm,n=e.errors;return Object(_.jsxs)("form",{className:"form",onSubmit:c,children:[Object(_.jsxs)("div",{className:"form__block",children:[Object(_.jsxs)("label",{className:n.code&&"is-invalid",children:[Object(_.jsx)("span",{children:"Code from SMS"}),Object(_.jsx)("input",{name:"code",type:"text",placeholder:"Enter code",onChange:t})]}),n.code&&Object(_.jsx)("div",{className:"form__block-error",children:n.code})]}),Object(_.jsx)("button",{className:"button",type:"submit",children:"Send"})]})}),k=function(e){var t=e.onLoginFormSubmit,c=e.onCodeFormSubmit,a=e.serverError,s=Object(n.useState)(!0),r=Object(l.a)(s,2),i=r[0],d=r[1],u=Object(n.useState)(!1),m=Object(l.a)(u,2),h=m[0],p=m[1],k=Object(n.useState)({fields:{},errors:{}}),y=Object(l.a)(k,2),w=y[0],C=y[1];Object(n.useEffect)((function(){a&&C(Object(O.a)(Object(O.a)({},w),{},{errors:{}}))}),[a]);var E=function(e){var t={},c=!0;switch(e){case v:w.fields.login||(c=!1,t.login=f),w.fields.password||(c=!1,t.password=f);break;case g:w.fields.code||(c=!1,t.code=f)}return C(Object(O.a)(Object(O.a)({},w),{},{errors:t})),c},F=function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!E(g)){e.next=6;break}return e.next=4,c(w.fields.login,w.fields.code);case 4:e.sent||C(Object(O.a)(Object(O.a)({},w),{},{errors:{code:x}}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(e){var t=w.fields;t[e.target.name]=e.target.value,C({fields:t,errors:Object(O.a)(Object(O.a)({},w.errors),{},Object(b.a)({},e.target.name,null))})};return Object(_.jsx)("div",{className:"auth",children:Object(_.jsxs)("div",{className:"container",children:[a&&Object(_.jsxs)("p",{className:"text-danger",children:["\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430: ",a]}),h?Object(_.jsx)(S,{handleChange:L,submitForm:F,errors:w.errors}):Object(_.jsx)(N,{isAuthorizationSuccess:i,handleChange:L,submitForm:function(e){e.preventDefault(),E(v)&&(t(w.fields)?(p(!0),alert("Valid SMS code: 123456")):d(!1))},errors:w.errors})]})})},y=(c(60),c(20)),w=c.n(y),C=c(107),E=(c(79),function(){return Object(_.jsx)("div",{className:"loader",children:Object(_.jsx)(C.a,{color:"primary"})})}),F=(c(83),c(28)),L=c.n(F),z=function(e){var t=e.title,c=void 0===t?"Type":t,a=e.items,s=void 0===a?[]:a,r=e.onSelect,i=Object(n.useState)(!1),o=Object(l.a)(i,2),j=o[0],d=o[1],u=Object(n.useState)(""),b=Object(l.a)(u,2),O=b[0],m=b[1],h=Object(n.useState)(s),f=Object(l.a)(h,2),p=f[0],x=f[1],v=Object(n.useRef)(),g=Object(n.useRef)();Object(n.useEffect)((function(){document.addEventListener("click",(function(e){g.current&&!g.current.contains(e.target)&&d(!1)}))}),[]),Object(n.useEffect)((function(){x(s),v.current.value=""}),[j]);return Object(_.jsxs)("div",{ref:g,className:L()("select my-5",{"select--open":j}),children:[Object(_.jsx)("div",{className:"select__header",onClick:function(){d(!j)},children:Object(_.jsx)("span",{children:O||c})}),Object(_.jsxs)("div",{className:"select__body",children:[Object(_.jsx)("div",{className:"select__search",children:Object(_.jsx)("input",{ref:v,onInput:function(e){return function(e){var t=e.target.value.toLowerCase(),c=s.filter((function(e){return e.toLowerCase().indexOf(t)>-1}));x(""!==t?c:s)}(e)},placeholder:"Type something..."})}),Object(_.jsx)("div",{className:"select__list",children:p.map((function(e){return Object(_.jsx)("a",{className:L()("select__item",{"select__item--active":e===O}),onClick:function(){return m(O===(t=e)?"":t),d(!1),void r(O===t?"":t);var t},children:e},e)}))})]})]})},I=(c(84),c(109)),T=(c(85),function(e){var t,c=e.className,n=e.card;return Object(_.jsxs)("div",{className:L()(c,{"card-item":!0}),children:[Object(_.jsx)("div",{className:"card-item__image",children:Object(_.jsx)("img",{src:null===(t=n.images)||void 0===t?void 0:t.small,alt:n.name})}),Object(_.jsxs)("div",{className:"card-item__info",children:[Object(_.jsx)("p",{children:n.name}),Object(_.jsxs)("p",{children:[" ",n.artist]})]}),Object(_.jsx)("div",{className:"card-item__controls",children:Object(_.jsx)(u.b,{to:"/cards/".concat(n.id),className:"card-item__button",children:"Go to detail page"})})]})}),A=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),r=Object(l.a)(s,2),i=r[0],o=r[1],j=Object(n.useState)([]),d=Object(l.a)(j,2),u=d[0],b=d[1],O=Object(n.useState)(!1),m=Object(l.a)(O,2),h=m[0],f=m[1],p=Object(n.useState)(""),x=Object(l.a)(p,2),v=x[0],g=x[1],N=Object(n.useState)(""),S=Object(l.a)(N,2),k=S[0],y=S[1],C=Object(n.useState)(c),F=Object(l.a)(C,2),L=F[0],A=F[1],B=Object(n.useState)(0),M=Object(l.a)(B,2),D=M[0],P=M[1],q=Object(n.useState)(1),G=Object(l.a)(q,2),H=G[0],J=G[1];Object(n.useEffect)((function(){w.a.get("https://api.pokemontcg.io/v2/types").then((function(e){o(e.data.data)})).catch((function(e){console.error(e)})),w.a.get("https://api.pokemontcg.io/v2/subtypes").then((function(e){b(e.data.data)})).catch((function(e){console.error(e)})),w.a.get("https://api.pokemontcg.io/v2/cards",{params:{pageSize:4}}).then((function(e){a(e.data.data),A(e.data.data),P(Math.round(e.data.totalCount/e.data.pageSize))})).catch((function(e){console.error(e)})).finally((function(){return f(!0)}))}),[]),Object(n.useEffect)((function(){var e=v&&k?"types:".concat(v," subtypes:").concat(k):v?"types:".concat(v):k&&"subtypes:".concat(k);w.a.get("https://api.pokemontcg.io/v2/cards",{params:{pageSize:4,q:e}}).then((function(e){A(e.data.data),P(Math.round(e.data.totalCount/e.data.pageSize)),J(1)})).catch((function(){A([]),P(0),J(1)}))}),[v,k]),Object(n.useEffect)((function(){var e=v&&k?"types:".concat(v," subtypes:").concat(k):v?"types:".concat(v):k&&"subtypes:".concat(k);w.a.get("https://api.pokemontcg.io/v2/cards",{params:{pageSize:4,page:H,q:e}}).then((function(e){a(e.data.data),A(e.data.data)})).catch((function(e){console.error(e)}))}),[H]);return Object(_.jsx)(_.Fragment,{children:h?Object(_.jsxs)("div",{className:"cards",children:[Object(_.jsxs)("div",{className:"cards__filter",children:[i.length&&Object(_.jsx)(z,{title:"Type",items:i,onSelect:function(e){g(e)}}),u.length&&Object(_.jsx)(z,{title:"Subtype",items:u,onSelect:function(e){y(e)}})]}),Object(_.jsxs)("div",{className:"cards__wrapper",children:[Object(_.jsxs)("div",{className:"cards__list",children:[L.map((function(e){return Object(_.jsx)(T,{className:"cards__item",card:e},e.id)})),!L.length&&Object(_.jsx)("p",{children:"Pokemons not found by this filter"})]}),D>1&&Object(_.jsx)(I.a,{page:H,onChange:function(e,t){e.preventDefault(),J(t)},count:D,showFirstButton:!0,showLastButton:!0})]})]}):Object(_.jsx)(E,{})})},B=(c(88),function(e){var t=e.isBackLink,c=void 0!==t&&t,n=Object(d.g)();return Object(_.jsx)("header",{className:"header",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:"header__nav",children:[c&&Object(_.jsx)("button",{type:"button",onClick:function(){n.goBack()},children:"< Back"}),Object(_.jsx)(u.b,{className:"ml-auto",to:"/logout",children:"Logout"})]})})})}),M=function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(B,{}),Object(_.jsx)("main",{children:Object(_.jsx)("div",{className:"container",children:Object(_.jsx)(A,{})})})]})},D=(c(89),function(){var e,t=Object(d.h)().cardId,c=Object(n.useState)({}),a=Object(l.a)(c,2),s=a[0],r=a[1],i=Object(n.useState)(!1),o=Object(l.a)(i,2),j=o[0],u=o[1];return Object(n.useEffect)((function(){w.a.get("https://api.pokemontcg.io/v2/cards/".concat(t)).then((function(e){r(e.data.data),u(!0)})).catch((function(e){console.error(e)}))}),[]),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(B,{isBackLink:!0}),Object(_.jsx)(_.Fragment,{children:j?Object(_.jsx)("main",{children:Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:"card-detail",children:[Object(_.jsx)("p",{className:"card-detail__title",children:s.name}),Object(_.jsx)("div",{className:"card-detail__block",children:Object(_.jsx)("div",{className:"card-detail__image",children:Object(_.jsx)("img",{src:null===(e=s.images)||void 0===e?void 0:e.large,alt:s.name})})}),Object(_.jsxs)("div",{className:"card-detail__block",children:[Object(_.jsxs)("div",{className:"card-detail__info",children:[Object(_.jsxs)("p",{children:["Pokemon name: ",Object(_.jsx)("b",{children:s.name})]}),Object(_.jsxs)("p",{children:["Supertype: ",Object(_.jsx)("b",{children:s.supertype})]}),Object(_.jsxs)("p",{children:["Types: ",Object(_.jsx)("b",{children:s.types.join(", ")})]}),Object(_.jsxs)("p",{children:["Subtypes: ",Object(_.jsx)("b",{children:s.subtypes.join(", ")})]})]}),Object(_.jsx)("div",{className:"card-detail__info",children:Object(_.jsx)("ul",{children:s.attacks.map((function(e){return Object(_.jsx)("li",{children:Object(_.jsx)("b",{children:e.name})},e.name)}))})}),Object(_.jsx)("p",{className:"card-detail__description",children:s.flavorText})]})]})})}):Object(_.jsx)(E,{})})]})}),P=function(){var e=Object(n.useState)(localStorage.getItem("pokemonAuthorization")?h:m),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),r=Object(l.a)(s,2),i=r[0],b=r[1],O=function(e){var t=e.login,c=e.password;return"kode@kode.ru"===t&&"Enk0deng"===c},f=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,c=new Promise((function(e,t){setTimeout((function(){e({data:"123456"})}),250)})),e.next=4,c.then((function(e){t=e.data,b(null)})).catch((function(e){console.error(e),b(e)}));case 4:return e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(j.a)(o.a.mark((function e(t,c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(c);case 2:if(e.sent!==c){e.next=7;break}return localStorage.setItem("pokemonAuthorization",t),a(h),e.abrupt("return",!0);case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),x=function(){return Object(_.jsx)(k,{onLoginFormSubmit:O,onCodeFormSubmit:p,serverError:i})};return Object(_.jsx)("div",{className:"app",children:Object(_.jsx)(u.a,{children:Object(_.jsxs)(d.d,{children:[Object(_.jsx)(d.b,{exact:!0,path:"/",render:function(){return c!==h?Object(_.jsx)(d.a,{to:"/login"}):Object(_.jsx)(d.a,{to:"/cards"})}}),Object(_.jsx)(d.b,{exact:!0,path:"/login",render:function(){return c!==h?Object(_.jsx)(x,{}):Object(_.jsx)(d.a,{to:"/cards"})}}),Object(_.jsx)(d.b,{exact:!0,path:"/logout",render:function(){return localStorage.removeItem("pokemonAuthorization"),a(m),Object(_.jsx)(d.a,{to:"/"})}}),Object(_.jsx)(d.b,{exact:!0,path:"/cards",render:function(){return c!==h?Object(_.jsx)(d.a,{to:"/login"}):Object(_.jsx)(M,{})}}),Object(_.jsx)(d.b,{exact:!0,path:"/cards/:cardId",render:function(){return c!==h?Object(_.jsx)(d.a,{to:"/login"}):Object(_.jsx)(D,{})}})]})})})};r.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(P,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.5bbf3010.chunk.js.map