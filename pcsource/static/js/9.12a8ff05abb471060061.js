webpackJsonp([9],{"2j0+":function(t,e,n){"use strict";var i=n("qsok"),s={name:"ElCurrencyType",props:{typeCy:{type:String,default:"eth"}},data:function(){return{currency:{eth:"Ξ"}}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-tooltip",{attrs:{effect:"dark",content:"ETH",placement:"top"}},[e("span",[this._v(this._s(this.currency[this.typeCy]))])])},staticRenderFns:[]};var a=n("VU/8")(s,r,!1,function(t){n("Cpsb")},"data-v-ae5954e2",null).exports,o={name:"ElProduct",props:{productInfo:{type:Object,default:function(){}},onEdit:{type:Function,default:function(){}}},components:{iMedia:i.a,ElCurrencyType:a},computed:{styleColor:function(){var t=this.productInfo.time;switch(!0){case t>=86400:return"#0dad00";case t>=3600&&t<86400:return"#f7931a";case t<3600:return"#ff0000";default:return""}}},filters:{formatTime:function(t){return(Math.floor(t/3600)<10?"0"+Math.floor(t/3600):Math.floor(t/3600))+":"+(Math.floor(t/60%60)<10?"0"+Math.floor(t/60%60):Math.floor(t/60%60))+":"+(Math.floor(t%60)<10?"0"+Math.floor(t%60):Math.floor(t%60))}},data:function(){return{interval:null}},mounted:function(){var t=this;this.interval=setInterval(function(){t.productInfo.time--},1e3)},beforedestroy:function(){clearInterval(this.interval)}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{staticClass:"item",attrs:{shadow:"hover"}},[n("div",{staticClass:"item-a"},[n("div",{staticClass:"item-a-1"},[n("i",{staticClass:"fas fa-heart"}),t._v(" "+t._s(t.productInfo.iLikes))]),t._v(" "),t.productInfo.time&&t.productInfo.time>0?n("div",{staticClass:"item-a-2",style:{background:t.styleColor}},[t._v("\n        "+t._s(t._f("formatTime")(t.productInfo.time))+"\n      ")]):t._e()]),t._v(" "),n("div",{staticClass:"img-box"},[n("iMedia",{staticClass:"img",attrs:{url:t.productInfo.sDataUrl}}),t._v(" "),n("i",{staticClass:"far fa-edit erax-edit",on:{click:function(e){return e.stopPropagation(),t.onEdit(t.productInfo)}}})],1),t._v(" "),n("div",{staticClass:"item-b"},[n("div",{staticClass:"item-b-1"},[n("span",[t._v("店铺名称")]),t._v(" "),n("span",[t._v("价格")])]),t._v(" "),n("div",{staticClass:"item-b-2"},[n("span",{attrs:{title:t.productInfo.sName}},[t._v(t._s(t.productInfo.sName))]),t._v(" "),n("span",[n("ElCurrencyType",{attrs:{"type-cy":t.productInfo.stCurrent&&t.productInfo.stCurrent.sCurrency}}),t._v(" "),t._v("\n          "+t._s(parseFloat(t.productInfo.stCurrent&&t.productInfo.stCurrent.dPrice)))],1)])])])},staticRenderFns:[]};var l=n("VU/8")(o,c,!1,function(t){n("d/3h")},"data-v-58f1a0d2",null);e.a=l.exports},Cpsb:function(t,e){},cf7x:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("WBHA"),s=n.n(i),r=n("2j0+"),a=n("NYxO"),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},c={name:"ElSelect",props:{title:{type:String,required:!0},list:{type:Array,required:!0},value:{type:Array,retried:!0},multiple:{type:Boolean,default:!1}},data:function(){return{isMouseOver:!1,selectVal:this.value,showTitle:this.title}},computed:o({},Object(a.b)(["lang"])),watch:{value:function(t){this.selectVal=t},title:function(t){this.showTitle=t},lang:function(t){this.multiple||(this.showTitle=this.$t(this.list[this.selectVal[0]-1].sDictText))}},mounted:function(){},methods:{onMouseOver:function(){this.isMouseOver=!0},onMouseLeave:function(){this.isMouseOver=!1},onClear:function(){this.$emit("input",[]),this.multiple||(this.showTitle=this.title),this.$emit("callBack",{})},handleSelect:function(t){if(this.multiple){for(var e in this.selectVal)if(this.selectVal[e]===t.iDictSort)return this.$delete(this.selectVal,e),this.$emit("input",this.selectVal),void this.$emit("callBack",{});this.selectVal.push(t.iDictSort),this.$emit("input",this.selectVal)}else{if(-1!==this.selectVal.indexOf(t.iDictSort))return;this.selectVal=[],this.selectVal.push(t.iDictSort),this.showTitle=this.$t(t.sDictText),this.$emit("input",this.selectVal)}this.$emit("callBack",{})}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["erax-select",{active:t.selectVal.length>0}],on:{mouseover:t.onMouseOver,mouseleave:t.onMouseLeave}},[n("div",{staticClass:"erax-el-input"},[n("span",{staticClass:"erax-el-title"},[n("i",{class:["el-icon-arrow-"+(t.isMouseOver?"up":"down"),"erax-el-icon"]}),t._v(t._s(t.showTitle)+"\n    ")]),t._v(" "),t.selectVal.length>0?n("i",{staticClass:"el-icon-circle-close erax-el-icon-close",on:{click:t.onClear}}):t._e()]),t._v(" "),n("div",{staticClass:"erax-options"},t._l(t.list,function(e,i){return n("div",{key:i,class:["erax-option",{select:t.selectVal.includes(e.iDictSort)}],on:{click:function(n){return t.handleSelect(e)}}},[t._v(t._s(t.$t(e.sDictText))+"\n    ")])}),0)])},staticRenderFns:[]};var u=n("VU/8")(c,l,!1,function(t){n("ztfS")},"data-v-3a88ac04",null).exports,h=n("LoaF"),d=n("6Ezz"),v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function p(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function i(s,r){try{var a=e[s](r),o=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(o).then(function(t){i("next",t)},function(t){i("throw",t)});t(o)}("next")})}}var f={name:"collection-explore",components:{countTo:s.a,ElSelect:u,ElProduct:r.a,EraxCollection2:h.a,search:d.a},data:function(){return{eraxBanners:[],bannerIndex:0,value1:"",selectStatus:[],selectCollections:[],selectSort:[],isFixed:!1,typeActive:0,sortTitle:this.$t("message.Explore_04"),isFinished:!1,sChainId:"",iPageNo:0,iPageNum:12,iTotal:100,busy:!1,list:[],shopSort:"",eraxStatusType:[],eraxSortType:[],eraxExploreItem:[],collectionsList:[],curCollectionId:0}},computed:v({},Object(a.b)(["searchTxt","lang","token"]),Object(a.c)({iCategory:function(t){return t.app.iCategory}})),watch:{token:function(t){return t},selectSort:function(){},sChainId:function(){this.getExploreItemList()},iCategory:function(t){this.GetHomeData(t),this.isFinished=!1,this.selectCollections=[],this.getExploreCollectionList(),this.list=[],this.iPageNo=0,this.getExploreItemList()},searchTxt:function(t,e){t!==e&&(this.isFinished=!1,this.list=[],this.iPageNo=0,this.getExploreItemList())}},mounted:function(){var t=this;return p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return window.addEventListener("scroll",t.handleScroll),e.next=3,t.GetHomeData();case 3:return e.next=5,t.getDictData(13);case 5:return t.eraxStatusType=e.sent,e.next=8,t.getDictData(11);case 8:return t.eraxSortType=e.sent,t.selectSort=[parseInt(t.eraxSortType[1].sDictValue)],t.sortTitle=t.$t(t.eraxSortType[1].sDictText),e.next=13,t.getExploreCollectionList();case 13:return e.next=15,t.handleResearch();case 15:window.addEventListener("scroll",t.handleLoad);case 16:case"end":return e.stop()}},e,t)}))()},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("scroll",this.handleLoad),this.$store.commit("app/changeData",{key:"iCategory",val:0})},methods:{onReset:function(){this.sChainId="",this.curCollectionId="",this.getExploreItemList()},getItemList:function(t){var e=t.vCollections;return void 0===t.showMore&&this.$set(t,"showMore",!1),void 0===t.hasMore&&this.$set(t,"hasMore",!1),t.showMore?t.vCollections:t.vCollections.length>10?(this.$set(t,"hasMore",!0),this.$set(t,"showMore",!1),e=t.vCollections.slice(0,10)):e},selectCollect:function(t){this.curCollectionId=t,this.getExploreItemList()},GetHomeData:function(t){var e=this;return p(regeneratorRuntime.mark(function n(){var i;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$api.GetHomeData({});case 2:i=n.sent,console.log(t),n.t0=t,n.next=1===n.t0?7:2===n.t0?7:3===n.t0?7:4===n.t0?7:5===n.t0?7:6===n.t0?7:7===n.t0?7:99===n.t0?9:100===n.t0?11:13;break;case 7:return e.eraxBanners=i.vBanners.filter(function(e){return e.iSort>=200+10*t&&e.iSort<=209+10*t}),n.abrupt("break",15);case 9:return e.eraxBanners=i.vBanners.filter(function(t){return t.iSort>=280&&t.iSort<=289}),n.abrupt("break",15);case 11:return e.eraxBanners=i.vBanners.filter(function(t){return t.iSort>=290&&t.iSort<=299}),n.abrupt("break",15);case 13:return e.eraxBanners=i.vBanners.filter(function(t){return t.iSort>=200&&t.iSort<=209}),n.abrupt("break",15);case 15:case"end":return n.stop()}},n,e)}))()},handleResearch:function(){var t=this;return p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.isFinished=!1,t.list=[],t.iPageNo=0,e.next=5,t.getExploreItemList();case 5:case"end":return e.stop()}},e,t)}))()},onPageChange:function(t){var e=this;return p(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.iPageNo=t-1,n.next=3,e.getExploreItemList();case 3:case"end":return n.stop()}},n,e)}))()},handleLoad:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var n,i,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return");case 3:if(n=document.documentElement.scrollTop||document.body.scrollTop,i=document.documentElement.clientHeight||document.body.clientHeight,s=document.documentElement.scrollHeight||document.body.scrollHeight,!(n+i>=s-300)||t.busy){e.next=12;break}return t.busy=!0,t.iPageNo++,e.next=11,t.getExploreItemList();case 11:t.busy=!1;case 12:case"end":return e.stop()}},e,t)}))()},getDictData:function(t){var e=this;return p(regeneratorRuntime.mark(function n(){var i;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$api.GetDictData({iDictType:t});case 2:return i=n.sent,n.abrupt("return",i.vDictData.map(function(t){return v({},t,{sDictText:"message."+(i.sDictType+t.iDictSort)})}));case 4:case"end":return n.stop()}},n,e)}))()},getExploreCollectionList:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var n,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.GetExploreFullMenu({});case 2:n=e.sent,i=n.vMenus,t.collectionsList=i.filter(function(t){return t.vCollections.length});case 5:case"end":return e.stop()}},e,t)}))()},showMore:function(t){this.$set(t,"showMore",!t.showMore)},getExploreItemList:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var n,i,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.curCollectionId?[t.curCollectionId]:[],i={iPageNo:t.iPageNo,iPageNum:t.iPageNum,vSearchKey:t.searchTxt?[t.searchTxt.trim()]:[""],vStatus:t.selectStatus,vCollections:n,iSort:t.selectSort.length>0?+t.selectSort.join():0,sWallet:t.token,sChainId:t.sChainId,iCategory:t.iCategory},e.next=4,t.$api.ExploreItemList(i);case 4:(s=e.sent).vItems.length<t.iPageNum&&(t.isFinished=!0),t.list=s.vItems,t.iTotal=s.iTotal;case 8:case"end":return e.stop()}},e,t)}))()},onCarouselChange:function(){},handleScroll:function(){}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"erax-explore"}},[i("div",{staticClass:"erax-layout"},[i("div",{staticClass:"explore-title"},[t._v(t._s(t.$t("message.market_2")))]),t._v(" "),i("div",{staticClass:"chain-select"},[i("div",{staticClass:"chain-title"},[i("i",{staticClass:"iconfont icon-lianjie1"}),t._v(" "),i("span",{staticClass:"chain"},[t._v(t._s(t.$t("message.market_3")))])]),t._v(" "),i("div",{staticClass:"option-item option-item1",class:""===t.sChainId?"select-option":"",on:{click:function(e){t.sChainId=""}}},[i("div",[t._v("All Network")])]),t._v(" "),i("div",{staticClass:"option-item option-item2",class:"0x1"===t.sChainId?"select-option":"",on:{click:function(e){t.sChainId="0x1"}}},[i("img",{attrs:{src:"https://cdn.erax.io/user/20210810/cc54088d36548ccc90f3cfeb988d75b9.png",alt:""}}),t._v(" "),i("div",[t._v("Ethereum Network")])]),t._v(" "),i("div",{staticClass:"option-item option-item3",class:"0x38"===t.sChainId?"select-option":"",on:{click:function(e){t.sChainId="0x38"}}},[i("img",{attrs:{src:"https://cdn.erax.io/user/20210810/40c9d2a4af2af4ab268c9df13fa836a4.png",alt:""}}),t._v(" "),i("div",[t._v("BSC Network")])]),t._v(" "),i("div",{staticClass:"reset-btn",on:{click:t.onReset}},[i("div",[t._v(t._s(t.$t("message.market_4")))]),t._v(" "),i("i",{staticClass:"iconfont icon-qingling"})])]),t._v(" "),i("div",{staticClass:"collection-list"},[i("div",{staticClass:"list-container"},t._l(t.collectionsList,function(e,n){return i("div",{key:n,staticClass:"collection-item"},[i("div",{staticClass:"left"},[i("img",{attrs:{src:e.stMenu.sIconImg,alt:""}}),t._v(" "),i("div",[t._v(t._s(t.$t("message.collection_category"+e.stMenu.iId)))])]),t._v(" "),i("div",{staticClass:"right-container"},[i("div",{staticClass:"right"},t._l(t.getItemList(e),function(e,n){return i("div",{key:n,staticClass:"option-item",class:e.iCollectionId===t.curCollectionId?"select-option":"",on:{click:function(n){return t.selectCollect(e.iCollectionId)}}},[t._v("\n                "+t._s(e.sCollectionName)+"\n              ")])}),0),t._v(" "),e.hasMore?i("div",{staticClass:"more",on:{click:function(n){return t.showMore(e)}}},[i("span",[t._v(t._s(t.$t("message.market_1")))]),t._v(" "),e.showMore?i("i",{staticClass:"el-icon-caret-top"}):i("i",{staticClass:"el-icon-caret-bottom"})]):t._e()])])}),0)]),t._v(" "),i("div",{staticClass:"erax-explore-content"},[i("div",{class:["erax-search-box",{fixed:t.isFixed}]},[i("div",{class:["erax-search-bar"]},[i("search"),t._v(" "),i("el-select",{staticStyle:{width:"386px"},attrs:{title:t.$t("message.Explore_02"),multiple:"",list:t.eraxStatusType},on:{callBack:t.handleResearch},model:{value:t.selectStatus,callback:function(e){t.selectStatus=e},expression:"selectStatus"}}),t._v(" "),i("el-select",{staticStyle:{width:"386px"},attrs:{title:t.sortTitle,list:t.eraxSortType},on:{callBack:t.handleResearch},model:{value:t.selectSort,callback:function(e){t.selectSort=e},expression:"selectSort"}})],1)]),t._v(" "),t.list.length?i("div",{staticClass:"erax-collections"},t._l(t.list,function(t,e){return i("EraxCollection2",{key:e,staticClass:"erax-collection",attrs:{editable:!1,collection:t,width:285}})}),1):i("div",{staticClass:"erax-explore-empty"},[i("img",{attrs:{src:n("Q/Ms"),alt:""}}),t._v(" "),i("div",[t._v(t._s(t.$t("message.market_5")))])])])]),t._v(" "),i("el-pagination",{attrs:{background:"","hide-on-single-page":!0,layout:"prev, pager, next","page-size":t.iPageNum,total:t.iTotal},on:{"current-change":t.onPageChange}})],1)},staticRenderFns:[]};var g=n("VU/8")(f,m,!1,function(t){n("dsqt")},"data-v-45484c09",null);e.default=g.exports},"d/3h":function(t,e){},dsqt:function(t,e){},ztfS:function(t,e){}});