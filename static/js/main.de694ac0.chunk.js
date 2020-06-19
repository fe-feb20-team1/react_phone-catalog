(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{26:function(e,t,a){},29:function(e,t,a){e.exports=a(54)},38:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),l=a.n(r),o=a(9),s=a(2),i=(a(38),a(39),function(){return c.a.createElement("nav",{className:"nav"},c.a.createElement("ul",{className:"nav__list"},c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.c,{to:"/",exact:!0,className:"nav__link",activeClassName:"nav__link--active"},"home")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.c,{to:"/phones",className:"nav__link",activeClassName:"nav__link--active"},"phones")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.c,{to:"/tablets",className:"nav__link",activeClassName:"nav__link--active"},"tablets")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.c,{to:"/accessories",className:"nav__link",activeClassName:"nav__link--active"},"accessories"))))}),m=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"header"},c.a.createElement(s.c,{to:"/",className:"header__logo"},c.a.createElement("img",{src:"./img/logo.svg",alt:"logo",className:"logo"})),c.a.createElement(i,null),c.a.createElement("div",{className:"header__icons"},c.a.createElement(s.c,{to:"/favourites",className:"header__favourites header__icon",activeClassName:"header__link--active"}),c.a.createElement(s.c,{to:"/cart",className:"header__cart header__icon",activeClassName:"header__link--active"}))))},u=a(3),_=a(4),d=function(e){var t=e.url,a=e.width,n=e.index;return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{key:n,className:"slider__img",style:{transform:"translateX(".concat(a,"px)")},src:t,alt:"Android phone"}))},p=["https://photo2.tinhte.vn/data/attachment-files/2020/02/4907291_cover_galaxy_S20-top5.jpg","https://cdn.tmobile.com/content/dam/t-mobile/ntm/generic/pattern-abstract/full/bg-heroFull-multiple_phones_aerial.desktop.jpg","https://i-cdn.phonearena.com/images/article/122958-two/Samsung-collaborates-with-premium-brand-Kvadrat-for-sustainable-Galaxy-S20-Plus-phone-cases.jpg"],E=(a(41),[0,1,2]),g=function(){var e=Object(n.useState)(0),t=Object(_.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(0),o=Object(_.a)(l,2),s=o[0],i=o[1],m=-1040*(p.length-1),u=0,g=function(){a===m||2===s||2===u?(r(0),i(0),u=0):(r(-1040*(s+1)),i(u+=1))};Object(n.useEffect)((function(){r(0-1040*s)}),[s]),Object(n.useEffect)((function(){var e=setInterval(g,2400);return function(){return clearInterval(e)}}),[]);return c.a.createElement("div",{className:"slider"},c.a.createElement("div",{className:"slider__wrapper"},c.a.createElement("button",{type:"button",onClick:function(){a===m?(r(a+1040),i(s<2?s-1:0)):(r(0),i(0))},className:"slider__btn prev"}," "),c.a.createElement("div",{className:"slider__container"},p.map((function(e,t){return c.a.createElement(d,{key:e,url:e,width:a,index:t})}))),c.a.createElement("button",{type:"button",onClick:g,className:"slider__btn next"}," ")),c.a.createElement("div",{className:"slider__dots"},E.map((function(e){return c.a.createElement("button",{key:e,type:"button",className:e===s?"dot active":"dot",onClick:function(){return i(e)}}," ")}))))},b=(a(42),a(43),a(44),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{type:"button",className:"button"},"Add to card"),c.a.createElement("button",{type:"button",className:"button__favourites"}))}),v=function(e){var t=e.good,a=e.width,n=void 0===a?0:a;return c.a.createElement("div",{className:"card",style:{transform:"translateX(".concat(n,"px)")}},c.a.createElement("img",{src:t.imageUrl,className:"card__image",alt:t.name}),c.a.createElement("h5",{className:"card__title"},t.name),c.a.createElement("span",{className:"card__new-price"},"$",t.discount>0?t.price-t.price/100*t.discount:t.price),t.discount>0&&c.a.createElement("span",{className:"card__old-price"},"$",t.price),c.a.createElement("div",{className:"card__info"},c.a.createElement("div",{className:"card__info-title"},"Screen"),c.a.createElement("div",{className:"card__info-text"},t.screen),c.a.createElement("div",{className:"card__info-title"},"Capacity"),c.a.createElement("div",{className:"card__info-text"},t.capacity),c.a.createElement("div",{className:"card__info-title"},"Ram"),c.a.createElement("div",{className:"card__info-text"},t.ram)),c.a.createElement(b,null))},N=function(e){var t=e.goods,a=Object(n.useState)(0),r=Object(_.a)(a,2),l=r[0],o=r[1],s=Object(n.useState)(1),i=Object(_.a)(s,2),m=i[0],u=i[1],d=Object(n.useState)(4),p=Object(_.a)(d,2),E=p[0],g=p[1];return c.a.createElement("section",{className:"hot-prices"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"hot-prices__header"},c.a.createElement("h2",{className:"hot-prices__title"},"Hot prices"),c.a.createElement("div",{className:"hot-prices__buttons"},c.a.createElement("button",{type:"button",className:"hot-prices__arrow",onClick:function(){g(E-1),o(l+288),u(m-1)},disabled:4===E}),c.a.createElement("button",{type:"button",className:"hot-prices__arrow hot-prices__arrow--right",onClick:function(){g(E+1),o(-288*m),u(m+1)},disabled:E===t.length}))),c.a.createElement("div",{className:"hot-prices__cards",style:{gridTemplateColumns:"repeat(".concat(t.length,", 272px)")}},t.map((function(e){return c.a.createElement(v,{good:e,width:l,key:e.id})})))))},f=(a(45),function(e){var t=e.title,a=e.backgroundColor,n=e.src,r=e.modelsCount,l="category__img-background--".concat(n);return c.a.createElement("div",{className:"category__block"},c.a.createElement(s.c,{to:n},c.a.createElement("div",{className:l,style:{backgroundColor:a}})),c.a.createElement("div",{className:"category__description"},c.a.createElement(s.c,{to:n},c.a.createElement("h2",null,t)),c.a.createElement("p",null,"".concat(r," models"))))}),h=[{title:"Mobile Phones",backgroundColor:"#FCDBC1",src:"phones",modelsCount:95},{title:"Tablets",backgroundColor:"#8D8D92",src:"tablets",modelsCount:24},{title:"Accessories",backgroundColor:"#973D5F",src:"accessories",modelsCount:100}],k=(a(46),function(){return c.a.createElement("section",{className:"categories"},c.a.createElement("h2",{className:"categories__title"},"Shop by category"),c.a.createElement("div",{className:"categories__wrapper"},h.map((function(e){return c.a.createElement(f,e)}))))}),y=(a(47),function(e){var t=e.goods,a=Object(n.useState)(0),r=Object(_.a)(a,2),l=r[0],o=r[1],s=Object(n.useState)(1),i=Object(_.a)(s,2),m=i[0],u=i[1],d=Object(n.useState)(4),p=Object(_.a)(d,2),E=p[0],g=p[1];return c.a.createElement("section",{className:"new-models"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"new-models__header"},c.a.createElement("h2",{className:"new-models__title"},"Hot prices"),c.a.createElement("div",{className:"new-models__buttons"},c.a.createElement("button",{type:"button",className:"new-models__arrow",onClick:function(){g(E-1),o(l+288),u(m-1)},disabled:4===E}),c.a.createElement("button",{type:"button",className:"new-models__arrow new-models__arrow--right",onClick:function(){g(E+1),o(-288*m),u(m+1)},disabled:E===t.length}))),c.a.createElement("div",{className:"new-models__cards",style:{gridTemplateColumns:"repeat(".concat(t.length,", 272px)")}},t.map((function(e){return c.a.createElement(v,{good:e,width:l,key:e.id})})))))}),w=a(23),O=a(11),j=a(28),C=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return!0;case"FINISH_LOADING":return!1;default:return e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FINISH_LOADING":return t.goods;default:return e}},x=function(e){return e.goods},I=Object(O.combineReducers)({loading:C,goods:S}),A=Object(O.createStore)(I,Object(j.composeWithDevTools)()),F=function(){var e=Object(o.c)(x),t=function(e){return Object(w.a)(e).filter((function(e){return e.price&&e.discount})).sort((function(e,t){var a=e.discount/100*e.price;return t.discount/100*t.price-a})).slice(0,8)}(e),a=function(e){return Object(w.a)(e).sort((function(e,t){return e.age-t.age})).slice(0,8)}(e);return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,null),c.a.createElement(N,{goods:t}),c.a.createElement(k,null),c.a.createElement(y,{goods:a}))},D=(a(48),a(49),function(e){var t=e.phone;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"breadcrumbs"},c.a.createElement(s.c,{to:"/",className:"breadcrumbs__home-icon"},c.a.createElement("img",{src:"./img/home.svg",alt:"home icon",className:"breadcrumbs__home"})),c.a.createElement("span",{className:"breadcrumbs__arrow"}),c.a.createElement(s.c,{to:"/phones",className:"breadcrumbs__page"},t)))}),T=(a(26),[{id:1,value:"Price: Low to Hight"},{id:2,value:"Goods: A to Z"},{id:3,value:"Goods: Z to A"},{id:4,value:"Newest"},{id:5,value:"Oldest"}]),G=[{id:1,value:4},{id:2,value:8},{id:3,value:12},{id:4,value:16}],H=function(){var e=Object(n.useState)(!1),t=Object(_.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(G[0].value),o=Object(_.a)(l,2),s=o[0],i=o[1];return c.a.createElement("div",{className:"sorting"},c.a.createElement("p",{className:"sorting__title"},"Items on page"),c.a.createElement("div",{className:"sorting__select sorting__select-page",role:"button",onClick:function(){return r(!a)}},c.a.createElement("p",{className:"sorting__option"},s),c.a.createElement("p",{className:a?"sorting__arrow sorting__arrow--up":"sorting__arrow"})),a&&c.a.createElement("ul",{className:"sorting__list sorting__list-page"},G.map((function(e){return c.a.createElement("li",{className:"sorting__item",key:e.id},c.a.createElement("button",{type:"button",className:"sorting__option",onClick:function(){return t=e.value,i(t),void r(!1);var t}},c.a.createElement("span",{className:"sorting__text"},e.value)))}))))},L=function(){var e=Object(n.useState)(!1),t=Object(_.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(T[0].value),o=Object(_.a)(l,2),s=o[0],i=o[1];return c.a.createElement("div",{className:"sorting__wrapper"},c.a.createElement("div",{className:"sorting"},c.a.createElement("p",{className:"sorting__title"},"Sort by"),c.a.createElement("div",{className:"sorting__select",role:"button",onClick:function(){return r(!a)}},c.a.createElement("p",{className:"sorting__option"},s),c.a.createElement("p",{className:a?"sorting__arrow sorting__arrow--up":"sorting__arrow"})),a&&c.a.createElement("ul",{className:"sorting__list"},T.map((function(e){return c.a.createElement("li",{className:"sorting__item",key:e.id},c.a.createElement("button",{type:"button",className:"sorting__option",onClick:function(){return t=e.value,i(t),void r(!1);var t}},c.a.createElement("span",{className:"sorting__text"},e.value)))})))),c.a.createElement(H,null))},P=(a(50),function(){return c.a.createElement("section",{className:"pagination"},c.a.createElement("ul",{className:"pagination__list"},c.a.createElement("li",{className:"pagination__item"},c.a.createElement("button",{type:"button",className:"pagination__arrow"})),[1,2,3,4].map((function(e){return c.a.createElement("li",{className:"pagination__item"},c.a.createElement("button",{type:"button",className:1===e?"pagination__button pagination__button--active":"pagination__button"},e))})),c.a.createElement("li",{className:"pagination__item"},c.a.createElement("button",{type:"button",className:"pagination__arrow pagination__arrow--right"}))))}),R=function(){var e=Object(o.c)(x);return c.a.createElement(c.a.Fragment,null,c.a.createElement(D,{phone:"Phones"}),c.a.createElement("h2",{className:"phone-page__title"},"Mobile Phones"),c.a.createElement("p",{className:"phone-page__subtitle"},"16 models"),c.a.createElement(L,null),c.a.createElement("div",{className:"phone-page__cards"},e.map((function(e){return c.a.createElement(v,{good:e,width:0,key:e.id})}))),c.a.createElement(P,null))},B=function(){return c.a.createElement("main",{className:"main"},c.a.createElement("div",{className:"container"},c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/",exact:!0,component:function(){return c.a.createElement(F,null)}}),c.a.createElement(u.a,{path:"/phones",component:function(){return c.a.createElement(R,null)}}),c.a.createElement(u.a,{path:"/tablets",component:function(){return c.a.createElement("h1",null,"Tablets")}}),c.a.createElement(u.a,{path:"/accessories",component:function(){return c.a.createElement("h1",null,"Accessories")}}))))},J=(a(51),function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"container"},c.a.createElement(s.c,{to:"/home",className:"footer__logo"},c.a.createElement("img",{src:"./img/logo.svg",alt:"logo",className:"logo"})),c.a.createElement("div",{className:"footer__links"},c.a.createElement(s.c,{to:"/github",className:"footer__github footer__link"},"github"),c.a.createElement(s.c,{to:"/contacts",className:"footer__contacts footer__link"},"contacts"),c.a.createElement(s.c,{to:"/rights",className:"footer__rights footer__link"},"rights")),c.a.createElement("div",{className:"footer__back-to-top"},c.a.createElement("div",{className:"footer__text"},"Back to top"),c.a.createElement(s.b,{to:"/top",className:"footer__button"},c.a.createElement("img",{src:"./img/back-to-top.svg",alt:"back-to-top",className:"footer__button"})))))}),M=a(14),X=a.n(M),Z=a(22),$="https://mate-academy.github.io/react_phone-catalog/api";function K(e){return U.apply(this,arguments)}function U(){return(U=Object(Z.a)(X.a.mark((function e(t){var a,n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return(W=Object(Z.a)(X.a.mark((function e(){var t;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K("".concat($,"/products.json"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a(53);var q=function(){var e=Object(o.b)();return Object(n.useEffect)((function(){e({type:"START_LOADING"}),function(){return W.apply(this,arguments)}().then((function(t){return e({type:"FINISH_LOADING",goods:t})}))}),[e]),c.a.createElement("div",{className:"App"},c.a.createElement(m,null),c.a.createElement(B,null),c.a.createElement(J,null))};l.a.render(c.a.createElement(o.a,{store:A},c.a.createElement(s.a,null,c.a.createElement(q,null))),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.de694ac0.chunk.js.map