(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{17:function(e,a,t){e.exports=t(31)},22:function(e,a,t){},23:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(15),r=t.n(c),s=t(5),m=(t(22),t(23),function(){return l.a.createElement("nav",{className:"nav"},l.a.createElement("ul",{className:"nav__list"},l.a.createElement("li",{className:"nav__item"},l.a.createElement(s.b,{to:"/",exact:!0,className:"nav__link",activeClassName:"nav__link--active"},"home")),l.a.createElement("li",{className:"nav__item"},l.a.createElement(s.b,{to:"/phones",className:"nav__link",activeClassName:"nav__link--active"},"phones")),l.a.createElement("li",{className:"nav__item"},l.a.createElement(s.b,{to:"/tablets",className:"nav__link",activeClassName:"nav__link--active"},"tablets")),l.a.createElement("li",{className:"nav__item"},l.a.createElement(s.b,{to:"/accessories",className:"nav__link",activeClassName:"nav__link--active"},"accessories"))))}),i=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"header"},l.a.createElement(s.b,{to:"/home",className:"header__logo"},l.a.createElement("img",{src:"./img/logo.svg",alt:"logo",className:"logo"})),l.a.createElement(m,null),l.a.createElement("div",{className:"header__icons"},l.a.createElement(s.b,{to:"/favourites",className:"header__favourites header__icon",activeClassName:"header__link--active"}),l.a.createElement(s.b,{to:"/cart",className:"header__cart header__icon",activeClassName:"header__link--active"}))))},o=t(1),u=t(12),_=function(e){var a=e.url,t=e.width,n=e.index;return l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{key:n,className:"slider__img",style:{transform:"translateX(".concat(t,"px)")},src:a,alt:"Android phone"}))},E=(t(29),["https://photo2.tinhte.vn/data/attachment-files/2020/02/4907291_cover_galaxy_S20-top5.jpg","https://cdn.tmobile.com/content/dam/t-mobile/ntm/generic/pattern-abstract/full/bg-heroFull-multiple_phones_aerial.desktop.jpg","https://i-cdn.phonearena.com/images/article/122958-two/Samsung-collaborates-with-premium-brand-Kvadrat-for-sustainable-Galaxy-S20-Plus-phone-cases.jpg"]),v=[0,1,2],p=function(){var e=Object(n.useState)(0),a=Object(u.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(0),s=Object(u.a)(r,2),m=s[0],i=s[1],o=-1040*(E.length-1),p=0,d=function(){t===o||2===m||2===p?(c(0),i(0),p=0):(c(-1040*(m+1)),i(p+=1))};Object(n.useEffect)((function(){c(0-1040*m)}),[m]),Object(n.useEffect)((function(){var e=setInterval(d,2e3);return function(){return clearInterval(e)}}),[]);return l.a.createElement("div",{className:"slider"},l.a.createElement("div",{className:"slider__wrapper"},l.a.createElement("button",{type:"button",onClick:function(){t===o?(c(t+1040),i(m<2?m-1:0)):(c(0),i(0))},className:"slider__btn prev"}," "),l.a.createElement("div",{className:"slider__container"},E.map((function(e,a){return l.a.createElement(_,{key:e,url:e,width:t,index:a})}))),l.a.createElement("button",{type:"button",onClick:d,className:"slider__btn next"}," ")),l.a.createElement("div",{className:"slider__dots"},v.map((function(e){return l.a.createElement("button",{key:e,type:"button",className:e===m?"dot active":"dot",onClick:function(){return i(e)}}," ")}))))},d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null))},h=function(){return l.a.createElement("main",{className:"main"},l.a.createElement("div",{className:"container"},l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",exact:!0,component:function(){return l.a.createElement(d,null)}}),l.a.createElement(o.a,{path:"/phones",component:function(){return l.a.createElement("h1",null,"Phones")}}),l.a.createElement(o.a,{path:"/tablets",component:function(){return l.a.createElement("h1",null,"Tablets")}}),l.a.createElement(o.a,{path:"/accessories",component:function(){return l.a.createElement("h1",null,"Accessories")}}))))},f=(t(30),function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i,null),l.a.createElement(h,null))});r.a.render(l.a.createElement(s.a,null,l.a.createElement(f,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.6510a3d3.chunk.js.map