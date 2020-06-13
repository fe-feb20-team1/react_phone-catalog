(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{20:function(e,t,a){e.exports=a(36)},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(17),r=a.n(l),s=a(3),o=(a(25),a(26),function(){return c.a.createElement("nav",{className:"nav"},c.a.createElement("ul",{className:"nav__list"},c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.c,{to:"/",exact:!0,className:"nav__link",activeClassName:"nav__link--active"},"home")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.c,{to:"/phones",className:"nav__link",activeClassName:"nav__link--active"},"phones")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.c,{to:"/tablets",className:"nav__link",activeClassName:"nav__link--active"},"tablets")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.c,{to:"/accessories",className:"nav__link",activeClassName:"nav__link--active"},"accessories"))))}),m=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"header"},c.a.createElement(s.c,{to:"/",className:"header__logo"},c.a.createElement("img",{src:"./img/logo.svg",alt:"logo",className:"logo"})),c.a.createElement(o,null),c.a.createElement("div",{className:"header__icons"},c.a.createElement(s.c,{to:"/favourites",className:"header__favourites header__icon",activeClassName:"header__link--active"}),c.a.createElement(s.c,{to:"/cart",className:"header__cart header__icon",activeClassName:"header__link--active"}))))},i=a(1),u=a(8),_=function(e){var t=e.url,a=e.width,n=e.index;return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{key:n,className:"slider__img",style:{transform:"translateX(".concat(a,"px)")},src:t,alt:"Android phone"}))},E=["https://photo2.tinhte.vn/data/attachment-files/2020/02/4907291_cover_galaxy_S20-top5.jpg","https://cdn.tmobile.com/content/dam/t-mobile/ntm/generic/pattern-abstract/full/bg-heroFull-multiple_phones_aerial.desktop.jpg","https://i-cdn.phonearena.com/images/article/122958-two/Samsung-collaborates-with-premium-brand-Kvadrat-for-sustainable-Galaxy-S20-Plus-phone-cases.jpg"],p=(a(32),[0,1,2]),h=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(0),s=Object(u.a)(r,2),o=s[0],m=s[1],i=-1040*(E.length-1),h=0,v=function(){a===i||2===o||2===h?(l(0),m(0),h=0):(l(-1040*(o+1)),m(h+=1))};Object(n.useEffect)((function(){l(0-1040*o)}),[o]),Object(n.useEffect)((function(){var e=setInterval(v,2400);return function(){return clearInterval(e)}}),[]);return c.a.createElement("div",{className:"slider"},c.a.createElement("div",{className:"slider__wrapper"},c.a.createElement("button",{type:"button",onClick:function(){a===i?(l(a+1040),m(o<2?o-1:0)):(l(0),m(0))},className:"slider__btn prev"}," "),c.a.createElement("div",{className:"slider__container"},E.map((function(e,t){return c.a.createElement(_,{key:e,url:e,width:a,index:t})}))),c.a.createElement("button",{type:"button",onClick:v,className:"slider__btn next"}," ")),c.a.createElement("div",{className:"slider__dots"},p.map((function(e){return c.a.createElement("button",{key:e,type:"button",className:e===o?"dot active":"dot",onClick:function(){return m(e)}}," ")}))))},v=a(19),d=(a(33),function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(1),s=Object(u.a)(r,2),o=s[0],m=s[1],i=Object(n.useState)([1,2,3,4,5,6,7,8]),_=Object(u.a)(i,2),E=_[0],p=_[1];return c.a.createElement("section",{className:"hot-prices"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"hot-prices__header"},c.a.createElement("h2",null,"Hot prices"),c.a.createElement("div",{className:"hot-prices__buttons"},c.a.createElement("button",{type:"button",className:"hot-prices__arrow",onClick:function(){m(o-1),l(a+288)}}),c.a.createElement("button",{type:"button",className:"hot-prices__arrow hot-prices__arrow--right",onClick:function(){l(-288*o),m(o+1),p([].concat(Object(v.a)(E.slice(1)),[E[0]])),console.log(E)}}))),c.a.createElement("div",{className:"hot-prices__cards",style:{gridTemplateColumns:"repeat(".concat(E.length,", 272px)")}},E.map((function(e){return c.a.createElement("div",{className:"hot-prices__card card",style:{transform:"translateX(".concat(a,"px)")}},e)})))))}),f=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(h,null),c.a.createElement(d,null))},N=function(){return c.a.createElement("main",{className:"main"},c.a.createElement("div",{className:"container"},c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",exact:!0,component:function(){return c.a.createElement(f,null)}}),c.a.createElement(i.a,{path:"/phones",component:function(){return c.a.createElement("h1",null,"Phones")}}),c.a.createElement(i.a,{path:"/tablets",component:function(){return c.a.createElement("h1",null,"Tablets")}}),c.a.createElement(i.a,{path:"/accessories",component:function(){return c.a.createElement("h1",null,"Accessories")}}))))},b=(a(34),function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"container"},c.a.createElement(s.c,{to:"/home",className:"footer__logo"},c.a.createElement("img",{src:"./img/logo.svg",alt:"logo",className:"logo"})),c.a.createElement("div",{className:"footer__links"},c.a.createElement(s.c,{to:"/github",className:"footer__github footer__link"},"github"),c.a.createElement(s.c,{to:"/contacts",className:"footer__contacts footer__link"},"contacts"),c.a.createElement(s.c,{to:"/rights",className:"footer__rights footer__link"},"rights")),c.a.createElement("div",{className:"footer__back-to-top"},c.a.createElement("div",{className:"footer__text"},"Back to top"),c.a.createElement(s.b,{to:"/top",className:"footer__button"},c.a.createElement("img",{src:"./img/back-to-top.svg",alt:"back-to-top",className:"footer__button"})))))}),g=(a(35),function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m,null),c.a.createElement(N,null),c.a.createElement(b,null))});r.a.render(c.a.createElement(s.a,null,c.a.createElement(g,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.28cb355d.chunk.js.map