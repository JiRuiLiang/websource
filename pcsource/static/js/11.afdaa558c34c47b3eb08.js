webpackJsonp([11],{"2AnY":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("TQvf"),i=a.n(s),n=a("NYxO"),r=a("WBHA"),o=a.n(r),l=a("oFuF"),c=(a("ytf2"),a("c2Ch"),a("TIfe")),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t};function d(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){return function s(i,n){try{var r=e[i](n),o=r.value}catch(t){return void a(t)}if(!r.done)return Promise.resolve(o).then(function(t){s("next",t)},function(t){s("throw",t)});t(o)}("next")})}}var m={components:{countTo:o.a},name:"user",data:function(){return{copySuccess:!1,balanceShow:!1,isShow:!1,activeName:"erac",activeRecord:"wa",eraxInfo:{},tabsList:[{to:"/accounts/erac",label:"message.Accounts_41"},{to:"/accounts/nft",label:"message.Accounts_42"},{to:"/accounts/favorite",label:"message.Accounts_05"},{to:"/accounts/follow",label:"message.Accounts_06"}],recordGold:[{time:"2021-04-18",prise:5124,totalPrise:15372},{time:"2021-04-18",prise:5124,totalPrise:15372},{time:"2021-04-18",prise:534,totalPrise:15372}],recordAirdrop:[{time:"2021-04-18",mission:"首次分享",prise:5124,totalPrise:153762},{time:"2021-04-19",mission:"首次分享",prise:5124,totalPrise:153372},{time:"2021-04-20",mission:"首次分享",prise:524,totalPrise:15372},{time:"2021-04-21",mission:"首次分享",prise:524,totalPrise:15372},{time:"2021-04-22",mission:"首次分享",prise:524,totalPrise:153572},{time:"2021-04-23",mission:"首次分享",prise:524,totalPrise:15372},{time:"2021-04-24",mission:"首次分享",prise:54,totalPrise:155472},{time:"2021-04-25",mission:"首次分享",prise:54,totalPrise:15372}]}},computed:u({},Object(n.b)(["token","userInfo"]),Object(n.c)({})),filters:{cutWallet:function(t){return l.a.cutStrMid(t,24)}},watch:{},mounted:function(){var t=this;return d(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.getEraxNftList(),t.initCopy(),e.next=4,c.a.GetUserInfo();case 4:t.isShow=!0;case 5:case"end":return e.stop()}},e,t)}))()},methods:{getUserExten:function(){var t,e=this;this.$api.GetUserExten({iIdle:0}).then(function(t){e.userINfo=t.stUserExtenInfo}).catch((t=d(regeneratorRuntime.mark(function t(a){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.DAPPLogin();case 2:t.sent,-1106!==a.iRspCode&&e.getUserExten();case 4:case"end":return t.stop()}},t,e)})),function(e){return t.apply(this,arguments)}))},goEdit:function(){var t=this;return d(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.DAPPLogin();case 2:e.sent&&t.$router.push({name:"userEdit"});case 4:case"end":return e.stop()}},e,t)}))()},getEraxNftList:function(){var t=this;this.$api.GetUserEraxNftList({iPageNo:0,iPageNum:18,sWallet:this.token}).then(function(e){t.eraxInfo=e,0===e.iEraxTotal&&t.$delete(t.tabsList,0)})},initCopy:function(t){var e=this,a=document.getElementById("erax-copy-btn");new i.a(a).on("success",function(t){e.copySuccess=!0,setTimeout(function(){e.copySuccess=!1},2e3)})},signNonce:function(){var t=this;return d(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"erax-user"},[s("div",{staticClass:"erax-bg"},[s("div",{staticClass:"erax-user-info"},[s("div",{staticClass:"erax-user-info-a"},[s("div",{staticClass:"erax-user-box"},[t.userInfo.sAvatar?s("img",{staticClass:"erax-user-img",attrs:{src:t.userInfo.sAvatar,alt:""}}):s("img",{staticClass:"erax-user-img",attrs:{src:a("SSeM"),alt:""}})]),t._v(" "),s("div",{staticClass:"erax-user-details"},[s("h2",{staticClass:"erax-user-name"},[t._v("Hello, "+t._s(t.userInfo.sNickName||"Unnamed")+"!")]),t._v(" "),s("div",{staticClass:"erax-user-wallet"},[t._v("\n            "+t._s(t._f("cutWallet")(t.token))+"\n            "),s("i",{staticClass:"far fa-copy btn-copy",attrs:{id:"erax-copy-btn","data-clipboard-action":"copy","data-clipboard-text":t.token}}),t._v(" "),t.copySuccess?s("div",{staticClass:"erax-tag-success"},[s("i",{staticClass:"el-icon-circle-check icon"}),t._v(" "+t._s(t.$t("message.Accounts_01"))+"\n            ")]):t._e()]),t._v(" "),s("div",[s("el-button",{staticClass:"erax-el-btn",attrs:{icon:"el-icon-edit"},on:{click:t.goEdit}})],1)])]),t._v(" "),s("div",{staticClass:"erax-user-balance"},[s("div",{staticClass:"erax-balance"},[s("h2",{staticClass:"erax-balance-title"},[t._v(t._s(t.$t("message.Accounts_02")))]),t._v(" "),s("p",{staticClass:"erax-balance-total"},[t._v(t._s(t.eraxInfo.iEraxTotal))]),t._v(" "),s("p",{staticClass:"erax-balance-des"},[t._v(t._s(t.$t("message.Erac_03"))+"："+t._s(t.eraxInfo.iValueTotal))])]),t._v(" "),s("div",{staticClass:"border"}),t._v(" "),s("div",{ref:"eraxBalance",staticClass:"erax-balance"},[s("h2",{staticClass:"erax-balance-title"},[t._v(t._s(t.$t("message.Accounts_03")))]),t._v(" "),s("p",{staticClass:"erax-balance-total"},[s("span",[t._v("--")]),t._v(" "),t._e()]),t._v(" "),s("p",{staticClass:"erax-balance-des"},[t._v(t._s(t.$t("message.Erac_04"))+"："+t._s(t._f("filterThousands")(t.eraxInfo.iSpeedTotal)))]),t._v(" "),s("div",{class:["erax-balance-record",{show:t.balanceShow}]},[s("el-tabs",{staticClass:"erax-el-tabs",model:{value:t.activeRecord,callback:function(e){t.activeRecord=e},expression:"activeRecord"}},[s("el-tab-pane",{attrs:{label:t.$t("message.Accounts_16"),name:"wa"}},[s("el-table",{staticClass:"erax-user-table",staticStyle:{width:"100%"},attrs:{data:t.recordGold,"max-height":"360"}},[s("el-table-column",{attrs:{align:"center",prop:"time",label:t.$t("message.Accounts_17")}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"prise",label:t.$t("message.Accounts_18")}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"totalPrise",label:t.$t("message.Accounts_19")}})],1)],1),t._v(" "),s("el-tab-pane",{attrs:{label:t.$t("message.Accounts_20"),name:"tou"}},[s("el-table",{staticClass:"erax-user-table",staticStyle:{width:"100%"},attrs:{data:t.recordAirdrop,"max-height":"360"}},[s("el-table-column",{attrs:{width:"70",align:"center",prop:"time",label:t.$t("message.Accounts_17")}}),t._v(" "),s("el-table-column",{attrs:{width:"68",align:"center",prop:"mission",label:t.$t("message.Accounts_21")}}),t._v(" "),s("el-table-column",{attrs:{align:"center",prop:"prise",label:t.$t("message.Accounts_18")}}),t._v(" "),s("el-table-column",{attrs:{"min-width":"48",align:"center",prop:"totalPrise",label:t.$t("message.Accounts_19")}})],1)],1)],1)],1)])])])]),t._v(" "),s("div",{staticClass:"erax-user-content"},[s("div",{staticClass:"erax-layout"},[s("ul",{staticClass:"erax-tabs"},t._l(t.tabsList,function(e,a){return s("router-link",{key:a,class:["erax-tabs-item",{active:t.$route.path===e.to}],attrs:{tag:"li",to:e.to}},[t._v("\n          "+t._s(t.$t(e.label))+"\n        ")])}),1),t._v(" "),s("div",{staticStyle:{padding:"40px 0"}},[t.isShow?s("router-view"):t._e()],1)])])])},staticRenderFns:[]};var f=a("VU/8")(m,p,!1,function(t){a("aS+Y")},"data-v-d5b7408c",null);e.default=f.exports},WBHA:function(t,e,a){var s;s=function(){return function(t){function e(s){if(a[s])return a[s].exports;var i=a[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,s){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,a){var s=a(4)(a(1),a(5),null,null);t.exports=s.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,a,s){return a*(1-Math.pow(2,-10*t/s))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,s.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,s.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,s.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,s.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,s.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),a=e[0],s=e.length>1?this.decimal+e[1]:"",i=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;i.test(a);)a=a.replace(i,"$1"+this.separator+"$2");return this.prefix+a+s+this.suffix}},destroyed:function(){(0,s.cancelAnimationFrame)(this.rAF)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){return t&&t.__esModule?t:{default:t}}(a(0));e.default=s.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",s.default)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=0,i="webkit moz ms o".split(" "),n=void 0,r=void 0;if("undefined"==typeof window)e.requestAnimationFrame=n=function(){},e.cancelAnimationFrame=r=function(){};else{e.requestAnimationFrame=n=window.requestAnimationFrame,e.cancelAnimationFrame=r=window.cancelAnimationFrame;for(var o=void 0,l=0;l<i.length&&(!n||!r);l++)o=i[l],e.requestAnimationFrame=n=n||window[o+"RequestAnimationFrame"],e.cancelAnimationFrame=r=r||window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];n&&r||(e.requestAnimationFrame=n=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-s)),i=window.setTimeout(function(){t(e+a)},a);return s=e+a,i},e.cancelAnimationFrame=r=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=n,e.cancelAnimationFrame=r},function(t,e){t.exports=function(t,e,a,s){var i,n=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(i=t,n=t.default);var o="function"==typeof n?n.options:n;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),a&&(o._scopeId=a),s){var l=Object.create(o.computed||null);Object.keys(s).forEach(function(t){var e=s[t];l[t]=function(){return e}}),o.computed=l}return{esModule:i,exports:n,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},t.exports=s()},"aS+Y":function(t,e){}});