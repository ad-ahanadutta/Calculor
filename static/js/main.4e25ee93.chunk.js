(this.webpackJsonpcalculor=this.webpackJsonpcalculor||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),l=a(2),o=a.n(l),u=(a(9),a(3)),r=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1],o=function(e){l(a.concat(e.target.value))};return n.a.createElement("div",{className:"grid"},n.a.createElement("input",{type:"text",value:a,disabled:"disabled"}),n.a.createElement("div",{className:"calculator-buttons"},n.a.createElement("button",{onClick:function(){return l("")},className:"calc-button is-clear"},"C"),n.a.createElement("button",{onClick:function(){var e=a.slice(0,-1);l(e)},className:"calc-button"},n.a.createElement("i",{class:"fas fa-backspace"})),n.a.createElement("button",{onClick:o,value:"\xf7",className:"calc-button"},"\xf7"),n.a.createElement("button",{onClick:o,value:"7",className:"calc-button"},"7"),n.a.createElement("button",{onClick:o,value:"8",className:"calc-button"},"8"),n.a.createElement("button",{onClick:o,value:"9",className:"calc-button"},"9"),n.a.createElement("button",{onClick:o,value:"\xd7",className:"calc-button"},"\xd7"),n.a.createElement("button",{onClick:o,value:"4",className:"calc-button"},"4"),n.a.createElement("button",{onClick:o,value:"5",className:"calc-button"},"5"),n.a.createElement("button",{onClick:o,value:"6",className:"calc-button"},"6"),n.a.createElement("button",{onClick:o,value:"\u2212",className:"calc-button"},"\u2212"),n.a.createElement("button",{onClick:o,value:"1",className:"calc-button"},"1"),n.a.createElement("button",{onClick:o,value:"2",className:"calc-button"},"2"),n.a.createElement("button",{onClick:o,value:"3",className:"calc-button"},"3"),n.a.createElement("button",{onClick:o,value:"+",className:"calc-button"},"+"),n.a.createElement("button",{onClick:o,value:"0",className:"calc-button is-zero"},"0"),n.a.createElement("button",{onClick:o,value:".",className:"calc-button"},"."),n.a.createElement("button",{onClick:o,value:"%",className:"calc-button"},"\uff05"),n.a.createElement("button",{onClick:function(){var e={"\xf7":"/","\xd7":"*","\u2212":"-"},t=a.replace(/\xf7|\xd7|\u2212/gi,(function(t){return e[t]})),c="return ".concat(t,";"),n="";try{n=new Function(c)()}catch(o){n=!1}l(n?n.toString():"Syntax Error")},className:"calc-button is-equals"},"=")))},s=function(){return n.a.createElement(r,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.4e25ee93.chunk.js.map