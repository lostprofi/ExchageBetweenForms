(this["webpackJsonpform-react-int"]=this["webpackJsonpform-react-int"]||[]).push([[0],{18:function(e,t,a){e.exports=a(32)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(15),m=a.n(c),u=a(7),r=(a(23),a(8)),o=a(5),i=(a(24),function(e){var t=e;return l.a.createElement("form",{className:"formIn",onSubmit:t.onSubmit},l.a.createElement("h1",null,"Input form"),l.a.createElement("input",{className:"formIn__input",name:"FirstName",type:"text",placeholder:"First name",onChange:t.onChange,value:t.value}),l.a.createElement("input",{className:"formIn__input",name:"SecondName",type:"text",placeholder:"Second name",onChange:t.onChange,value:t.value}),l.a.createElement("input",{className:"formIn__input",name:"e-mail",type:"e-mail",placeholder:"e-mail",onChange:t.onChange,value:t.value}),l.a.createElement("input",{className:"formIn__input formIn__input_submit",type:"submit",value:"Submit"}))}),s=(a(25),function(e){var t=e;return l.a.createElement("form",{className:"formOut"},l.a.createElement("h1",null,"Output form"),l.a.createElement("p",null,"First name:"," ".concat(t.text[0].value)),l.a.createElement("p",null,"Last name:"," ".concat(t.text[1].value)),l.a.createElement("p",null,"e-mail:"," ".concat(t.text[2].value)),l.a.createElement("p",null,t.text[3]))}),p=(a(26),function(){var e=Object(n.useState)({value:""}),t=Object(r.a)(e,2),a=t[0],c=t[1],m=Object(n.useState)({value:""}),p=Object(r.a)(m,2),v=p[0],E=p[1],f=Object(n.useState)({value:""}),h=Object(r.a)(f,2),_=h[0],b=h[1],N=Object(n.useState)(""),g=Object(r.a)(N,2),C=g[0],d=g[1],O=Object(n.useState)([{value:""},{value:""},{value:""}]),S=Object(r.a)(O,2),j=S[0],x=S[1];return l.a.createElement("div",{className:"wrapper"},l.a.createElement("ul",{className:"nav"},l.a.createElement("li",{className:"nav__list"},l.a.createElement(u.b,{to:"/",className:"nav__link"},"Home")),l.a.createElement("li",{className:"nav__list"},l.a.createElement(u.b,{to:"/input",className:"nav__link"},"Input form")),l.a.createElement("li",{className:"nav__list"},l.a.createElement(u.b,{to:"/output",className:"nav__link"},"Output form"))),l.a.createElement("div",{className:"container"},l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/",render:function(){return l.a.createElement("h1",{className:"header"},C)}}),l.a.createElement(o.a,{path:"/input"},l.a.createElement(i,{onChange:function(e){var t=e.target.name,a=e.target.value;"FirstName"===t?c({value:a}):"SecondName"===t?E({value:a}):"e-mail"===t&&b({value:a})},onSubmit:function(e){e.preventDefault();var t=new Date,n=t.getUTCDate()<10?"0".concat(t.getUTCDate()):t.getUTCDate(),l=t.getUTCMonth()<10?"0".concat(t.getUTCMonth()+1):t.getUTCMonth(),c=t.getUTCFullYear(),m="".concat(n,".").concat(l,".").concat(c);x([a,v,_,m]),d("Hello, ".concat(a.value,"!"))}})),l.a.createElement(o.a,{path:"/output"},l.a.createElement(s,{text:j})))))});m.a.render(l.a.createElement(u.a,null,l.a.createElement(p,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e865d033.chunk.js.map