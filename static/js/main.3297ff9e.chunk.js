(this["webpackJsonpform-react-int"]=this["webpackJsonpform-react-int"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(3),u=a.n(l),r=(a(9),a(1)),m=(a(10),function(e){var t=e;return c.a.createElement("form",{className:"formIn",onSubmit:t.onSubmit},c.a.createElement("h1",null,"Input form"),c.a.createElement("input",{className:"formIn__input",name:"FirstName",type:"text",placeholder:"First name",onChange:t.onChange,value:t.value}),c.a.createElement("input",{className:"formIn__input",name:"SecondName",type:"text",placeholder:"Second name",onChange:t.onChange,value:t.value}),c.a.createElement("input",{className:"formIn__input",name:"e-mail",type:"e-mail",placeholder:"e-mail",onChange:t.onChange,value:t.value}),c.a.createElement("input",{className:"formIn__input formIn__input_submit",type:"submit",value:"Submit"}))}),o=(a(11),function(e){var t=e;return c.a.createElement("form",{className:"formOut"},c.a.createElement("h1",null,"Output form"),c.a.createElement("p",null,"First name:"," ".concat(t.text[0].value)),c.a.createElement("p",null,"Last name:"," ".concat(t.text[1].value)),c.a.createElement("p",null,"e-mail:"," ".concat(t.text[2].value)),c.a.createElement("p",null,t.text[3]))}),i=(a(12),function(){var e=Object(n.useState)({value:""}),t=Object(r.a)(e,2),a=t[0],l=t[1],u=Object(n.useState)({value:""}),i=Object(r.a)(u,2),s=i[0],p=i[1],v=Object(n.useState)({value:""}),f=Object(r.a)(v,2),h=f[0],E=f[1],b=Object(n.useState)(""),g=Object(r.a)(b,2),C=g[0],N=g[1],d=Object(n.useState)([{value:""},{value:""},{value:""}]),O=Object(r.a)(d,2),S=O[0],_=O[1];return c.a.createElement("div",{className:"wrapper"},c.a.createElement("h1",{className:"header"},C),c.a.createElement("div",{className:"container"},c.a.createElement(m,{onChange:function(e){var t=e.target.name,a=e.target.value;"FirstName"===t?l({value:a}):"SecondName"===t?p({value:a}):"e-mail"===t&&E({value:a})},onSubmit:function(e){e.preventDefault();var t=new Date,n=t.getUTCDate()<10?"0".concat(t.getUTCDate()):t.getUTCDate(),c=t.getUTCMonth()<10?"0".concat(t.getUTCMonth()+1):t.getUTCMonth(),l=t.getUTCFullYear(),u="".concat(n,".").concat(c,".").concat(l);_([a,s,h,u]),N("Hello, ".concat(a.value,"!"))}}),c.a.createElement(o,{text:S})))});u.a.render(c.a.createElement(i,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.3297ff9e.chunk.js.map