(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{25:function(e,t,a){e.exports=a(46)},34:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),l=a.n(r),o=a(11),s=a(3),i=(a(34),a(35),function(){return c.a.createElement("nav",{className:"nav"},c.a.createElement("ul",{className:"nav__list"},c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.c,{to:"/",exact:!0,className:"nav__link",activeClassName:"nav__link--active"},"home")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.c,{to:"/phones",className:"nav__link",activeClassName:"nav__link--active"},"phones")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.c,{to:"/tablets",className:"nav__link",activeClassName:"nav__link--active"},"tablets")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.c,{to:"/accessories",className:"nav__link",activeClassName:"nav__link--active"},"accessories"))))}),m=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"header"},c.a.createElement(s.c,{to:"/",className:"header__logo"},c.a.createElement("img",{src:"./img/logo.svg",alt:"logo",className:"logo"})),c.a.createElement(i,null),c.a.createElement("div",{className:"header__icons"},c.a.createElement(s.c,{to:"/favourites",className:"header__favourites header__icon",activeClassName:"header__link--active"}),c.a.createElement(s.c,{to:"/cart",className:"header__cart header__icon",activeClassName:"header__link--active"}))))},u=a(2),_=a(8),d=function(e){var t=e.url,a=e.width,n=e.index;return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{key:n,className:"slider__img",style:{transform:"translateX(".concat(a,"px)")},src:t,alt:"Android phone"}))},p=["https://photo2.tinhte.vn/data/attachment-files/2020/02/4907291_cover_galaxy_S20-top5.jpg","https://cdn.tmobile.com/content/dam/t-mobile/ntm/generic/pattern-abstract/full/bg-heroFull-multiple_phones_aerial.desktop.jpg","https://i-cdn.phonearena.com/images/article/122958-two/Samsung-collaborates-with-premium-brand-Kvadrat-for-sustainable-Galaxy-S20-Plus-phone-cases.jpg"],E=(a(37),[0,1,2]),f=function(){var e=Object(n.useState)(0),t=Object(_.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(0),o=Object(_.a)(l,2),s=o[0],i=o[1],m=-1040*(p.length-1),u=0,f=function(){a===m||2===s||2===u?(r(0),i(0),u=0):(r(-1040*(s+1)),i(u+=1))};Object(n.useEffect)((function(){r(0-1040*s)}),[s]),Object(n.useEffect)((function(){var e=setInterval(f,2400);return function(){return clearInterval(e)}}),[]);return c.a.createElement("div",{className:"slider"},c.a.createElement("div",{className:"slider__wrapper"},c.a.createElement("button",{type:"button",onClick:function(){a===m?(r(a+1040),i(s<2?s-1:0)):(r(0),i(0))},className:"slider__btn prev"}," "),c.a.createElement("div",{className:"slider__container"},p.map((function(e,t){return c.a.createElement(d,{key:e,url:e,width:a,index:t})}))),c.a.createElement("button",{type:"button",onClick:f,className:"slider__btn next"}," ")),c.a.createElement("div",{className:"slider__dots"},E.map((function(e){return c.a.createElement("button",{key:e,type:"button",className:e===s?"dot active":"dot",onClick:function(){return i(e)}}," ")}))))},h=(a(38),a(39),a(40),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"button"},"Add to card"),c.a.createElement("button",{className:"button__favourites"}))}),v=function(e){var t=e.good,a=e.width;return c.a.createElement("div",{className:"hot-prices__card card",style:{transform:"translateX(".concat(a,"px)")}},c.a.createElement("img",{src:t.imageUrl,className:"card__image",alt:t.name}),c.a.createElement("h5",{className:"card__title"},t.name),c.a.createElement("span",{className:"card__new-price"},"$799"),c.a.createElement("span",{className:"card__old-price"},"$",t.price),c.a.createElement("div",{className:"card__info"},c.a.createElement("div",{className:"card__info-title"},"Screen"),c.a.createElement("div",{className:"card__info-text"},t.screen),c.a.createElement("div",{className:"card__info-title"},"Capacity"),c.a.createElement("div",{className:"card__info-text"},t.capacity),c.a.createElement("div",{className:"card__info-title"},"Ram"),c.a.createElement("div",{className:"card__info-text"},t.ram)),c.a.createElement(h,null))},N=a(10),b=a(24),g=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return!0;case"FINISH_LOADING":return!1;default:return e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FINISH_LOADING":return t.goods;default:return e}},y=function(e){return e.goods},j=Object(N.combineReducers)({loading:g,goods:k}),O=Object(N.createStore)(j,Object(b.composeWithDevTools)()),C=function(){var e=Object(n.useState)(0),t=Object(_.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(1),s=Object(_.a)(l,2),i=s[0],m=s[1],u=Object(n.useState)(4),d=Object(_.a)(u,2),p=d[0],E=d[1],f=Object(o.c)(y);return c.a.createElement("section",{className:"hot-prices"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"hot-prices__header"},c.a.createElement("h2",null,"Hot prices"),c.a.createElement("div",{className:"hot-prices__buttons"},c.a.createElement("button",{type:"button",className:"hot-prices__arrow",onClick:function(){E(p-1),r(a+288),m(i-1)},disabled:4===p}),c.a.createElement("button",{type:"button",className:"hot-prices__arrow hot-prices__arrow--right",onClick:function(){E(p+1),r(-288*i),m(i+1)},disabled:p===f.length}))),c.a.createElement("div",{className:"hot-prices__cards",style:{gridTemplateColumns:"repeat(".concat(f.length,", 272px)")}},f.map((function(e){return c.a.createElement(v,{good:e,width:a,key:e.id})})))))},w=(a(41),function(e){var t=e.title,a=e.backgroundColor,n=e.src,r=e.modelsCount,l="category__img-background--".concat(n);return c.a.createElement("div",{className:"category__block"},c.a.createElement(s.c,{to:n},c.a.createElement("div",{className:l,style:{backgroundColor:a}})),c.a.createElement("div",{className:"category__description"},c.a.createElement(s.c,{to:n},c.a.createElement("h2",null,t)),c.a.createElement("p",null,"".concat(r," models"))))}),x=[{title:"Mobile Phones",backgroundColor:"#FCDBC1",src:"phones",modelsCount:95},{title:"Tablets",backgroundColor:"#8D8D92",src:"tablets",modelsCount:24},{title:"Accessories",backgroundColor:"#973D5F",src:"accessories",modelsCount:100}],S=(a(42),function(){return c.a.createElement("section",{className:"categories"},c.a.createElement("h1",null,"Shop by category"),c.a.createElement("div",{className:"categories__wrapper"},x.map((function(e){return c.a.createElement(w,e)}))))}),I=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(f,null),c.a.createElement(C,null),c.a.createElement(S,null))},A=function(){return c.a.createElement("main",{className:"main"},c.a.createElement("div",{className:"container"},c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/",exact:!0,component:function(){return c.a.createElement(I,null)}}),c.a.createElement(u.a,{path:"/phones",component:function(){return c.a.createElement("h1",null,"Phones")}}),c.a.createElement(u.a,{path:"/tablets",component:function(){return c.a.createElement("h1",null,"Tablets")}}),c.a.createElement(u.a,{path:"/accessories",component:function(){return c.a.createElement("h1",null,"Accessories")}}))))},D=(a(43),function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"container"},c.a.createElement(s.c,{to:"/home",className:"footer__logo"},c.a.createElement("img",{src:"./img/logo.svg",alt:"logo",className:"logo"})),c.a.createElement("div",{className:"footer__links"},c.a.createElement(s.c,{to:"/github",className:"footer__github footer__link"},"github"),c.a.createElement(s.c,{to:"/contacts",className:"footer__contacts footer__link"},"contacts"),c.a.createElement(s.c,{to:"/rights",className:"footer__rights footer__link"},"rights")),c.a.createElement("div",{className:"footer__back-to-top"},c.a.createElement("div",{className:"footer__text"},"Back to top"),c.a.createElement(s.b,{to:"/top",className:"footer__button"},c.a.createElement("img",{src:"./img/back-to-top.svg",alt:"back-to-top",className:"footer__button"})))))}),F=a(13),T=a.n(F),G=a(20),L="https://mate-academy.github.io/react_phone-catalog/api";function H(e){return R.apply(this,arguments)}function R(){return(R=Object(G.a)(T.a.mark((function e(t){var a,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=Object(G.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("".concat(L,"/products.json"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a(45);var P=function(){var e=Object(o.b)();return Object(n.useEffect)((function(){e({type:"START_LOADING"}),function(){return B.apply(this,arguments)}().then((function(t){return e({type:"FINISH_LOADING",goods:t})}))}),[]),c.a.createElement("div",{className:"App"},c.a.createElement(m,null),c.a.createElement(A,null),c.a.createElement(D,null))};l.a.render(c.a.createElement(o.a,{store:O},c.a.createElement(s.a,null,c.a.createElement(P,null))),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.57b0a734.chunk.js.map