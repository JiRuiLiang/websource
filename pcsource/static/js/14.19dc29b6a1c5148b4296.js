webpackJsonp([14],{MQPO:function(e,t){},NvvV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("JrLM");function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(a,s){try{var c=t[a](s),i=c.value}catch(e){return void n(e)}if(!c.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}("next")})}}var s={name:"metamask",data:function(){return{installed:!1}},mounted:function(){var e=this;return a(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(window.ethereum){t.next=3;break}return e.installed=!1,t.abrupt("return");case 3:e.installed=window.ethereum.isMetaMask;case 4:case"end":return t.stop()}},t,e)}))()},methods:{handleSign:function(){var e=this;return a(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(r.a)();case 2:t.sent&&(n=e.$route.query.redirect||"index",e.$router.push({name:n}));case 4:case"end":return t.stop()}},t,e)}))()}}},c={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"erax-locked"}},[r("h2",{staticClass:"erax-locked-title"},[e._v(e._s(e.$t("message.Accounts_33")))]),e._v(" "),r("p",{staticClass:"erax-locked-des"},[e._v(e._s(e.$t("message.Accounts_31")))]),e._v(" "),r("img",{staticClass:"erax-locked-img",attrs:{src:n("CvFD"),height:"241",width:"260"}}),e._v(" "),e.installed?r("el-button",{staticClass:"erax-locked-btn",on:{click:e.handleSign}},[e._v(e._s(e.$t("message.Accounts_40")))]):r("el-button",{staticClass:"erax-locked-btn"},[e._v(e._s(e.$t("message.Accounts_34")))]),e._v(" "),r("a",{staticClass:"erax-locked-help",attrs:{href:""}},[e._v(e._s(e.$t("message.Accounts_35")))])],1)},staticRenderFns:[]};var i=n("VU/8")(s,c,!1,function(e){n("MQPO")},"data-v-631ecffa",null);t.default=i.exports}});