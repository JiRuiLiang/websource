webpackJsonp([10],{"2j0+":function(t,e,s){"use strict";var n=s("qsok"),i={name:"ElCurrencyType",props:{typeCy:{type:String,default:"eth"}},data:function(){return{currency:{eth:"Ξ"}}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-tooltip",{attrs:{effect:"dark",content:"ETH",placement:"top"}},[e("span",[this._v(this._s(this.currency[this.typeCy]))])])},staticRenderFns:[]};var a=s("VU/8")(i,r,!1,function(t){s("Cpsb")},"data-v-ae5954e2",null).exports,o={name:"ElProduct",props:{productInfo:{type:Object,default:function(){}},onEdit:{type:Function,default:function(){}}},components:{iMedia:n.a,ElCurrencyType:a},computed:{styleColor:function(){var t=this.productInfo.time;switch(!0){case t>=86400:return"#0dad00";case t>=3600&&t<86400:return"#f7931a";case t<3600:return"#ff0000";default:return""}}},filters:{formatTime:function(t){return(Math.floor(t/3600)<10?"0"+Math.floor(t/3600):Math.floor(t/3600))+":"+(Math.floor(t/60%60)<10?"0"+Math.floor(t/60%60):Math.floor(t/60%60))+":"+(Math.floor(t%60)<10?"0"+Math.floor(t%60):Math.floor(t%60))}},data:function(){return{interval:null}},mounted:function(){var t=this;this.interval=setInterval(function(){t.productInfo.time--},1e3)},beforedestroy:function(){clearInterval(this.interval)}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-card",{staticClass:"item",attrs:{shadow:"hover"}},[s("div",{staticClass:"item-a"},[s("div",{staticClass:"item-a-1"},[s("i",{staticClass:"fas fa-heart"}),t._v(" "+t._s(t.productInfo.iLikes))]),t._v(" "),t.productInfo.time&&t.productInfo.time>0?s("div",{staticClass:"item-a-2",style:{background:t.styleColor}},[t._v("\n        "+t._s(t._f("formatTime")(t.productInfo.time))+"\n      ")]):t._e()]),t._v(" "),s("div",{staticClass:"img-box"},[s("iMedia",{staticClass:"img",attrs:{url:t.productInfo.sDataUrl}}),t._v(" "),s("i",{staticClass:"far fa-edit erax-edit",on:{click:function(e){return e.stopPropagation(),t.onEdit(t.productInfo)}}})],1),t._v(" "),s("div",{staticClass:"item-b"},[s("div",{staticClass:"item-b-1"},[s("span",[t._v("店铺名称")]),t._v(" "),s("span",[t._v("价格")])]),t._v(" "),s("div",{staticClass:"item-b-2"},[s("span",{attrs:{title:t.productInfo.sName}},[t._v(t._s(t.productInfo.sName))]),t._v(" "),s("span",[s("ElCurrencyType",{attrs:{"type-cy":t.productInfo.stCurrent&&t.productInfo.stCurrent.sCurrency}}),t._v(" "),t._v("\n          "+t._s(parseFloat(t.productInfo.stCurrent&&t.productInfo.stCurrent.dPrice)))],1)])])])},staticRenderFns:[]};var l=s("VU/8")(o,c,!1,function(t){s("d/3h")},"data-v-58f1a0d2",null);e.a=l.exports},Cpsb:function(t,e){},cf7x:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("WBHA"),i=s.n(n),r=s("2j0+"),a=s("NYxO"),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},c={name:"ElSelect",props:{title:{type:String,required:!0},list:{type:Array,required:!0},value:{type:Array,retried:!0},multiple:{type:Boolean,default:!1}},data:function(){return{isMouseOver:!1,selectVal:this.value,showTitle:this.title}},computed:o({},Object(a.b)(["lang"])),watch:{value:function(t){this.selectVal=t},title:function(t){this.showTitle=t},lang:function(t){this.multiple||(this.showTitle=this.$t(this.list[this.selectVal[0]-1].sDictText))}},mounted:function(){},methods:{onMouseOver:function(){this.isMouseOver=!0},onMouseLeave:function(){this.isMouseOver=!1},onClear:function(){this.$emit("input",[]),this.multiple||(this.showTitle=this.title),this.$emit("callBack",{})},handleSelect:function(t){if(this.multiple){for(var e in this.selectVal)if(this.selectVal[e]===t.iDictSort)return this.$delete(this.selectVal,e),this.$emit("input",this.selectVal),void this.$emit("callBack",{});this.selectVal.push(t.iDictSort),this.$emit("input",this.selectVal)}else{if(-1!==this.selectVal.indexOf(t.iDictSort))return;this.selectVal=[],this.selectVal.push(t.iDictSort),this.showTitle=this.$t(t.sDictText),this.$emit("input",this.selectVal)}this.$emit("callBack",{})}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:["erax-select",{active:t.selectVal.length>0}],on:{mouseover:t.onMouseOver,mouseleave:t.onMouseLeave}},[s("div",{staticClass:"erax-el-input"},[s("span",{staticClass:"erax-el-title"},[s("i",{class:["el-icon-arrow-"+(t.isMouseOver?"up":"down"),"erax-el-icon"]}),t._v(t._s(t.showTitle)+"\n    ")]),t._v(" "),t.selectVal.length>0?s("i",{staticClass:"el-icon-circle-close erax-el-icon-close",on:{click:t.onClear}}):t._e()]),t._v(" "),s("div",{staticClass:"erax-options"},t._l(t.list,function(e,n){return s("div",{key:n,class:["erax-option",{select:t.selectVal.includes(e.iDictSort)}],on:{click:function(s){return t.handleSelect(e)}}},[t._v(t._s(t.$t(e.sDictText))+"\n    ")])}),0)])},staticRenderFns:[]};var u=s("VU/8")(c,l,!1,function(t){s("ztfS")},"data-v-3a88ac04",null).exports,d=s("LoaF"),h=s("6Ezz"),v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t};function p(t){if(Array.isArray(t)){for(var e=0,s=Array(t.length);e<t.length;e++)s[e]=t[e];return s}return Array.from(t)}function f(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,s){return function n(i,r){try{var a=e[i](r),o=a.value}catch(t){return void s(t)}if(!a.done)return Promise.resolve(o).then(function(t){n("next",t)},function(t){n("throw",t)});t(o)}("next")})}}var m={name:"collection-explore",components:{countTo:i.a,ElSelect:u,ElProduct:r.a,EraxCollection2:d.a,search:h.a},data:function(){return{eraxBanners:[],bannerIndex:0,value1:"",selectStatus:[],selectCollections:[],selectSort:[],isFixed:!1,typeActive:0,sortTitle:this.$t("message.Explore_04"),isFinished:!1,sChainId:"",iPageNo:0,iPageNum:24,iTotal:100,busy:!1,list:[],shopSort:"",eraxStatusType:[],eraxSortType:[],eraxExploreItem:[],collectionsList:[],curCollectionId:0,showToTop:!1}},computed:v({},Object(a.b)(["searchTxt","lang","token"]),Object(a.c)({iCategory:function(t){return t.app.iCategory}})),watch:{token:function(t){return t},selectSort:function(){},sChainId:function(){this.handleResearch()},iCategory:function(t){this.GetHomeData(t),this.selectCollections=[],this.getExploreCollectionList(),this.handleResearch()},searchTxt:function(t,e){t!==e&&this.handleResearch()}},mounted:function(){var t=this;return f(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return window.addEventListener("scroll",t.handleScroll),e.next=3,t.GetHomeData();case 3:return e.next=5,t.getDictData(13);case 5:return t.eraxStatusType=e.sent,e.next=8,t.getDictData(11);case 8:return t.eraxSortType=e.sent,t.selectSort=[parseInt(t.eraxSortType[1].sDictValue)],t.sortTitle=t.$t(t.eraxSortType[1].sDictText),e.next=13,t.getExploreCollectionList();case 13:return e.next=15,t.handleResearch();case 15:window.addEventListener("scroll",t.handleLoad);case 16:case"end":return e.stop()}},e,t)}))()},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("scroll",this.handleLoad),this.$store.commit("app/changeData",{key:"iCategory",val:0})},methods:{toTop:function(){this.$util.tweenToTop()},onReset:function(){this.sChainId="",this.curCollectionId="",this.getExploreItemList()},getItemList:function(t){var e=t.vCollections;return void 0===t.showMore&&this.$set(t,"showMore",!1),void 0===t.hasMore&&this.$set(t,"hasMore",!1),t.showMore?t.vCollections:t.vCollections.length>10?(this.$set(t,"hasMore",!0),this.$set(t,"showMore",!1),e=t.vCollections.slice(0,10)):e},selectCollect:function(t){this.curCollectionId=t,this.handleResearch()},GetHomeData:function(t){var e=this;return f(regeneratorRuntime.mark(function s(){var n;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.$api.GetHomeData({});case 2:n=s.sent,console.log(t),s.t0=t,s.next=1===s.t0?7:2===s.t0?7:3===s.t0?7:4===s.t0?7:5===s.t0?7:6===s.t0?7:7===s.t0?7:99===s.t0?9:100===s.t0?11:13;break;case 7:return e.eraxBanners=n.vBanners.filter(function(e){return e.iSort>=200+10*t&&e.iSort<=209+10*t}),s.abrupt("break",15);case 9:return e.eraxBanners=n.vBanners.filter(function(t){return t.iSort>=280&&t.iSort<=289}),s.abrupt("break",15);case 11:return e.eraxBanners=n.vBanners.filter(function(t){return t.iSort>=290&&t.iSort<=299}),s.abrupt("break",15);case 13:return e.eraxBanners=n.vBanners.filter(function(t){return t.iSort>=200&&t.iSort<=209}),s.abrupt("break",15);case 15:case"end":return s.stop()}},s,e)}))()},handleResearch:function(){var t=this;return f(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.isFinished=!1,t.list=[],t.iPageNo=0,e.next=5,t.getExploreItemList();case 5:case"end":return e.stop()}},e,t)}))()},handleLoad:function(){var t=this;return f(regeneratorRuntime.mark(function e(){var s,n,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isFinished){e.next=2;break}return e.abrupt("return");case 2:if(s=document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.clientHeight||document.body.clientHeight,i=document.documentElement.scrollHeight||document.body.scrollHeight,!(s+n>=i-300)||t.busy){e.next=11;break}return t.busy=!0,t.iPageNo++,e.next=10,t.getExploreItemList();case 10:t.busy=!1;case 11:case"end":return e.stop()}},e,t)}))()},getDictData:function(t){var e=this;return f(regeneratorRuntime.mark(function s(){var n;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.$api.GetDictData({iDictType:t});case 2:return n=s.sent,s.abrupt("return",n.vDictData.map(function(t){return v({},t,{sDictText:"message."+(n.sDictType+t.iDictSort)})}));case 4:case"end":return s.stop()}},s,e)}))()},getExploreCollectionList:function(){var t=this;return f(regeneratorRuntime.mark(function e(){var s,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.GetExploreFullMenu({});case 2:s=e.sent,n=s.vMenus,t.collectionsList=n.filter(function(t){return t.vCollections.length});case 5:case"end":return e.stop()}},e,t)}))()},showMore:function(t){this.$set(t,"showMore",!t.showMore)},getExploreItemList:function(){var t=this;return f(regeneratorRuntime.mark(function e(){var s,n,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.curCollectionId?[t.curCollectionId]:[],n={iPageNo:t.iPageNo,iPageNum:t.iPageNum,vSearchKey:t.searchTxt?[t.searchTxt.trim()]:[""],vStatus:t.selectStatus,vCollections:s,iSort:t.selectSort.length>0?+t.selectSort.join():0,sWallet:t.token,sChainId:t.sChainId,iCategory:t.iCategory},e.next=4,t.$api.ExploreItemList(n);case 4:(i=e.sent).vItems.length<t.iPageNum&&(t.isFinished=!0),t.list=[].concat(p(t.list),p(i.vItems)),t.iTotal=i.iTotal;case 8:case"end":return e.stop()}},e,t)}))()},onCarouselChange:function(){},handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.showToTop=t>=window.innerHeight}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"erax-explore"}},[n("div",{staticClass:"erax-layout"},[n("div",{staticClass:"explore-title"},[t._v(t._s(t.$t("message.market_2")))]),t._v(" "),n("div",{staticClass:"chain-select"},[n("div",{staticClass:"chain-title"},[n("i",{staticClass:"iconfont icon-lianjie1"}),t._v(" "),n("span",{staticClass:"chain"},[t._v(t._s(t.$t("message.market_3")))])]),t._v(" "),n("div",{staticClass:"option-item option-item1",class:""===t.sChainId?"select-option":"",on:{click:function(e){t.sChainId=""}}},[n("div",[t._v("All Network")])]),t._v(" "),n("div",{staticClass:"option-item option-item2",class:"0x1"===t.sChainId?"select-option":"",on:{click:function(e){t.sChainId="0x1"}}},[n("img",{attrs:{src:"https://cdn.erax.io/user/20210810/cc54088d36548ccc90f3cfeb988d75b9.png",alt:""}}),t._v(" "),n("div",[t._v("Ethereum Network")])]),t._v(" "),n("div",{staticClass:"option-item option-item3",class:"0x38"===t.sChainId?"select-option":"",on:{click:function(e){t.sChainId="0x38"}}},[n("img",{attrs:{src:"https://cdn.erax.io/user/20210810/40c9d2a4af2af4ab268c9df13fa836a4.png",alt:""}}),t._v(" "),n("div",[t._v("BSC Network")])]),t._v(" "),n("div",{staticClass:"reset-btn",on:{click:t.onReset}},[n("div",[t._v(t._s(t.$t("message.market_4")))]),t._v(" "),n("i",{staticClass:"iconfont icon-qingling"})])]),t._v(" "),n("div",{staticClass:"collection-list"},[n("div",{staticClass:"list-container"},t._l(t.collectionsList,function(e,s){return n("div",{key:s,staticClass:"collection-item"},[n("div",{staticClass:"left"},[n("img",{attrs:{src:e.stMenu.sIconImg,alt:""}}),t._v(" "),n("div",[t._v(t._s(t.$t("message.collection_category"+e.stMenu.iId)))])]),t._v(" "),n("div",{staticClass:"right-container"},[n("div",{staticClass:"right"},t._l(t.getItemList(e),function(e,s){return n("div",{key:s,staticClass:"option-item",class:e.iCollectionId===t.curCollectionId?"select-option":"",on:{click:function(s){return t.selectCollect(e.iCollectionId)}}},[t._v("\n                "+t._s(e.sCollectionName)+"\n              ")])}),0),t._v(" "),e.hasMore?n("div",{staticClass:"more",on:{click:function(s){return t.showMore(e)}}},[n("span",[t._v(t._s(t.$t("message.market_1")))]),t._v(" "),e.showMore?n("i",{staticClass:"el-icon-caret-top"}):n("i",{staticClass:"el-icon-caret-bottom"})]):t._e()])])}),0)]),t._v(" "),n("div",{staticClass:"erax-explore-content"},[n("div",{class:["erax-search-box",{fixed:t.isFixed}]},[n("div",{class:["erax-search-bar"]},[n("search"),t._v(" "),n("el-select",{staticStyle:{width:"386px"},attrs:{title:t.$t("message.Explore_02"),multiple:"",list:t.eraxStatusType},on:{callBack:t.handleResearch},model:{value:t.selectStatus,callback:function(e){t.selectStatus=e},expression:"selectStatus"}}),t._v(" "),n("el-select",{staticStyle:{width:"386px"},attrs:{title:t.sortTitle,list:t.eraxSortType},on:{callBack:t.handleResearch},model:{value:t.selectSort,callback:function(e){t.selectSort=e},expression:"selectSort"}})],1)]),t._v(" "),t.list.length?n("div",{staticClass:"erax-collections"},t._l(t.list,function(t,e){return n("EraxCollection2",{key:e,staticClass:"erax-collection",attrs:{editable:!1,collection:t,width:285}})}),1):n("div",{staticClass:"erax-explore-empty"},[n("img",{attrs:{src:s("Q/Ms"),alt:""}}),t._v(" "),n("div",[t._v(t._s(t.$t("message.market_5")))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.busy,expression:"busy"}],staticClass:"loading-tips"},[t._v("------ "+t._s(t.$t("message.loading_tips_1"))+" ------")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isFinished&&t.list.length,expression:"isFinished && list.length"}],staticClass:"loading-tips"},[t._v("------ "+t._s(t.$t("message.loading_tips_2"))+" ------")])])]),t._v(" "),t.showToTop?n("div",{staticClass:"toTop",on:{click:t.toTop}},[n("div",{staticClass:"icon"})]):t._e()])},staticRenderFns:[]};var C=s("VU/8")(m,x,!1,function(t){s("wiM2")},"data-v-962b5b44",null);e.default=C.exports},"d/3h":function(t,e){},wiM2:function(t,e){},ztfS:function(t,e){}});