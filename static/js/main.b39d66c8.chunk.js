(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(15),r=a.n(l),o=a(2),s=(a(22),a(23),function(){return c.a.createElement("nav",{className:"nav"},c.a.createElement("ul",{className:"nav__list"},c.a.createElement("li",{className:"nav__item"},c.a.createElement(o.c,{to:"/",exact:!0,className:"nav__link",activeClassName:"nav__link--active"},"home")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(o.c,{to:"/phones",className:"nav__link",activeClassName:"nav__link--active"},"phones")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(o.c,{to:"/tablets",className:"nav__link",activeClassName:"nav__link--active"},"tablets")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(o.c,{to:"/accessories",className:"nav__link",activeClassName:"nav__link--active"},"accessories"))))}),m=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"header"},c.a.createElement(o.c,{to:"/",className:"header__logo"},c.a.createElement("img",{src:"./img/logo.svg",alt:"logo",className:"logo"})),c.a.createElement(s,null),c.a.createElement("div",{className:"header__icons"},c.a.createElement(o.c,{to:"/favourites",className:"header__favourites header__icon",activeClassName:"header__link--active"}),c.a.createElement(o.c,{to:"/cart",className:"header__cart header__icon",activeClassName:"header__link--active"}))))},i=a(1),u=a(12),_=function(e){var t=e.url,a=e.width,n=e.index;return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{key:n,className:"slider__img",style:{transform:"translateX(".concat(a,"px)")},src:t,alt:"Android phone"}))},E=["https://photo2.tinhte.vn/data/attachment-files/2020/02/4907291_cover_galaxy_S20-top5.jpg","https://cdn.tmobile.com/content/dam/t-mobile/ntm/generic/pattern-abstract/full/bg-heroFull-multiple_phones_aerial.desktop.jpg","https://i-cdn.phonearena.com/images/article/122958-two/Samsung-collaborates-with-premium-brand-Kvadrat-for-sustainable-Galaxy-S20-Plus-phone-cases.jpg"],d=(a(29),[0,1,2]),v=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(0),o=Object(u.a)(r,2),s=o[0],m=o[1],i=-1040*(E.length-1),v=0,p=function(){a===i||2===s||2===v?(l(0),m(0),v=0):(l(-1040*(s+1)),m(v+=1))};Object(n.useEffect)((function(){l(0-1040*s)}),[s]),Object(n.useEffect)((function(){var e=setInterval(p,2400);return function(){return clearInterval(e)}}),[]);return c.a.createElement("div",{className:"slider"},c.a.createElement("div",{className:"slider__wrapper"},c.a.createElement("button",{type:"button",onClick:function(){a===i?(l(a+1040),m(s<2?s-1:0)):(l(0),m(0))},className:"slider__btn prev"}," "),c.a.createElement("div",{className:"slider__container"},E.map((function(e,t){return c.a.createElement(_,{key:e,url:e,width:a,index:t})}))),c.a.createElement("button",{type:"button",onClick:p,className:"slider__btn next"}," ")),c.a.createElement("div",{className:"slider__dots"},d.map((function(e){return c.a.createElement("button",{key:e,type:"button",className:e===s?"dot active":"dot",onClick:function(){return m(e)}}," ")}))))},p=(a(30),function(e){var t=e.title,a=e.backgroundColor,n=e.src,l=e.modelsCount,r="category__img-background--".concat(n);return c.a.createElement("div",{className:"category__block"},c.a.createElement(o.c,{to:n},c.a.createElement("div",{className:r,style:{backgroundColor:a}})),c.a.createElement("div",{className:"category__description"},c.a.createElement(o.c,{to:n},c.a.createElement("h2",null,t)),c.a.createElement("p",null,"".concat(l," models"))))}),f=[{title:"Mobile Phones",backgroundColor:"#FCDBC1",src:"phones",modelsCount:95},{title:"Tablets",backgroundColor:"#8D8D92",src:"tablets",modelsCount:24},{title:"Accessories",backgroundColor:"#973D5F",src:"accessories",modelsCount:100}],h=(a(31),function(){return c.a.createElement("section",{className:"categories"},c.a.createElement("h1",null,"Shop by category"),c.a.createElement("div",{className:"categories__wrapper"},f.map((function(e){return c.a.createElement(p,e)}))))}),g=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(v,null),c.a.createElement(h,null))},N=function(){return c.a.createElement("main",{className:"main"},c.a.createElement("div",{className:"container"},c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",exact:!0,component:function(){return c.a.createElement(g,null)}}),c.a.createElement(i.a,{path:"/phones",component:function(){return c.a.createElement("h1",null,"Phones")}}),c.a.createElement(i.a,{path:"/tablets",component:function(){return c.a.createElement("h1",null,"Tablets")}}),c.a.createElement(i.a,{path:"/accessories",component:function(){return c.a.createElement("h1",null,"Accessories")}}))))},b=(a(32),function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"container"},c.a.createElement(o.c,{to:"/home",className:"footer__logo"},c.a.createElement("img",{src:"./img/logo.svg",alt:"logo",className:"logo"})),c.a.createElement("div",{className:"footer__links"},c.a.createElement(o.c,{to:"/github",className:"footer__github footer__link"},"github"),c.a.createElement(o.c,{to:"/contacts",className:"footer__contacts footer__link"},"contacts"),c.a.createElement(o.c,{to:"/rights",className:"footer__rights footer__link"},"rights")),c.a.createElement("div",{className:"footer__back-to-top"},c.a.createElement("div",{className:"footer__text"},"Back to top"),c.a.createElement(o.b,{to:"/top",className:"footer__button"},c.a.createElement("img",{src:"./img/back-to-top.svg",alt:"back-to-top",className:"footer__button"})))))}),k=(a(33),function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m,null),c.a.createElement(N,null),c.a.createElement(b,null))});r.a.render(c.a.createElement(o.a,null,c.a.createElement(k,null)),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.b39d66c8.chunk.js.map