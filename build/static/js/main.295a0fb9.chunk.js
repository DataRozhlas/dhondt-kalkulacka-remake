(this["webpackJsonpdhondt-kalkulacka-remake"]=this["webpackJsonpdhondt-kalkulacka-remake"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),l=n(3),s=n.n(l),j=n(4),o=function(e){var t=e.onChange;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("label",{htmlFor:"volby",children:"Vyberte volby do sn\u011bmovny "}),Object(a.jsxs)("select",{name:"volby",id:"volby",onChange:t,children:[Object(a.jsx)("option",{value:"2017",children:"2017"}),Object(a.jsx)("option",{value:"2013",children:"2013"}),Object(a.jsx)("option",{value:"2010",children:"2010"}),Object(a.jsx)("option",{value:"2006",children:"2006"}),Object(a.jsx)("option",{value:"2002",children:"2002"}),Object(a.jsx)("option",{value:"1998",children:"1998"}),Object(a.jsx)("option",{value:"1996",children:"1996"})]})]})},i=function(e){var t=e.text;return Object(a.jsx)("caption",{children:t})};i.defaultProps={text:"Tabulka"};var d=i,b=function(e){var t=e.text;return Object(a.jsx)("th",{children:t})},u=function(e){var t=e.data;return Object(a.jsx)("thead",{children:Object(a.jsx)("tr",{children:t.map((function(e,t){return Object(a.jsx)(b,{text:e},t)}))})})},O=function(e){var t=e.text;return Object(a.jsx)("td",{children:t})},S=function(e){var t=e.data;return Object(a.jsx)("tr",{children:t.map((function(e,t){return Object(a.jsx)(O,{text:e},t)}))})},h=function(e){var t=e.data;return Object(a.jsx)("tbody",{children:t.map((function(e,t){return Object(a.jsx)(S,{data:e},t)}))})},x=[["ANO",1500113,29.64,78,2017],["ODS",572962,11.32,25,2017],["Pir\xe1ti",546393,10.79,22,2017],["SPD",538574,10.64,22,2017],["KS\u010cM",393100,7.76,15,2017],["\u010cSSD",368347,7.27,15,2017],["KDU-\u010cSL",293643,5.8,10,2017],["TOP 09",268811,5.31,7,2017],["STAN",262157,5.18,6,2017],["\u010cSSD",1016829,20.45,50,2013],["ANO",927240,18.65,47,2013],["KS\u010cM",741044,14.91,33,2013],["TOP 09",596357,11.99,26,2013],["ODS",384174,7.72,16,2013],["\xdasvit",342339,6.88,14,2013],["KDU-\u010cSL",336970,6.78,14,2013],["\u010cSSD",1155267,22.08,56,2010],["ODS",1057792,20.22,53,2010],["TOP 09",873833,16.7,41,2010],["KS\u010cM",589765,11.27,26,2010],["V\u011bci ve\u0159ejn\xe9",569127,10.88,24,2010],["ODS",1892475,35.38,81,2006],["\u010cSSD",1728827,32.32,74,2006],["KS\u010cM",685328,12.81,26,2006],["KDU-\u010cSL",386706,7.22,13,2006],["Zelen\xed",336487,6.29,6,2006],["\u010cSSD",1440279,30.2,70,2002],["ODS",1166975,24.47,58,2002],["KS\u010cM",882653,18.51,41,2002],["Koalice",680671,14.21,31,2002],["\u010cSSD",1928660,32.31,74,1998],["ODS",1656011,27.74,63,1998],["KS\u010cM",658550,11.03,24,1998],["KDU-\u010cSL",537013,9,20,1998],["Unie svobody",513596,8.6,19,1998],["ODS",1794560,29.62,68,1996],["\u010cSSD",1602250,26.44,61,1996],["KS\u010cM",626136,10.33,22,1996],["KDU-\u010cSL",489349,8.08,18,1996],["SPR-RS\u010c",485072,8.01,18,1996],["ODA",385369,6.36,13,1996]],p=["Strana","Hlas\u016f na mand\xe1t","Mand\xe1t\u016f","Hlas\u016f","Procent hlas\u016f"],v=function(){var e=Object(c.useState)(2017),t=Object(j.a)(e,2),n=t[0],r=t[1],l=x.filter((function(e){return e[4]===n})).map((function(e){var t=[];return t.push(e[0]),t.push(Math.floor(e[1]/e[3]).toLocaleString("cs")),t.push(e[3].toLocaleString("cs")),t.push(e[1].toLocaleString("cs")),t.push("".concat(e[2].toLocaleString("cs")," %")),t})),s=[0,"50 000"];l.forEach((function(e){s=e[1].replace(/\s/g,"")<s[1].replace(/\s/g,"")?e:s}));var i=[0,"0"];return l.forEach((function(e){i=e[1].replace(/\s/g,"")>i[1].replace(/\s/g,"")?e:i})),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{children:Object(a.jsx)(o,{onChange:function(e){r(Number(e.target.value))}})}),Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:Object(a.jsxs)("strong",{children:["Jeden hlas pro ",s[0]," m\u011bl"," ",(i[1].replace(/\s/g,"")/s[1].replace(/\s/g,"")).toFixed(2),"\xd7 v\u011bt\u0161\xed v\xe1hu ne\u017e hlas pro ",i[0],"."]})})}),Object(a.jsxs)("table",{className:"table table--striped",children:[Object(a.jsx)(d,{text:"Kolik hlas\u016f pot\u0159ebovaly strany, aby z\xedskaly jeden poslaneck\xfd mand\xe1t"}),Object(a.jsx)(u,{data:p}),Object(a.jsx)(h,{data:l})]})]})},D=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("table",{className:"table table--striped",children:[Object(a.jsx)(d,{text:"Volby 2017: O kolik mand\xe1t\u016f v\xedc nebo m\xed\u0148 by jim p\u0159inesla jedna kandid\xe1tka pro celou republiku"}),Object(a.jsx)(u,{data:["Strana","Mand\xe1t\u016f skute\u010dn\u011b","Mand\xe1t\u016f, kdyby byl jen jeden volebn\xed kraj","Rozd\xedl"]}),Object(a.jsx)(h,{data:[["ANO","78","64","-14"],["ODS","25","24","-1"],["Pir\xe1ti","22","23","+1"],["SPD","22","23","+1"],["KS\u010cM","15","17","+2"],["\u010cSSD","15","15","0"],["KDU-\u010cSL","10","12","+2"],["TOP 09","6","11","+5"],["STAN","6","11","+5"]]})]})})};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("tabulkaHlasu")),s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("tabulka1Kraj"))}},[[10,1,2]]]);
//# sourceMappingURL=main.295a0fb9.chunk.js.map