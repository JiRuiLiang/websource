webpackJsonp([5],{Fk8T:function(t,e){},J16W:function(t,e){},LI5x:function(t,e){},aARy:function(t,e){},"dG+J":function(t,e){},nU8l:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"ICarousel",props:{dataInfo:Array,title:String}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-carousel",{attrs:{interval:4e3,type:"card",height:"200px"}},t._l(t.dataInfo,function(e,s){return a("el-carousel-item",{key:s},[a("img",{attrs:{src:e.sFeaturedimage,alt:""}}),t._v(" "),a("h3",{staticClass:"medium"},[t._v(t._s(e.sCollectionName))])])}),1)},staticRenderFns:[]};var n=a("VU/8")(s,i,!1,function(t){a("t1pi")},null,null).exports,o={name:"Developers",components:{},data:function(){return{list:[{pic:a("rxgY"),lable:"Create your own marketplace",desc:"Build a beautiful marketplace for your ERC721 or ERC1155 assets for free, and earn revenue on every secondary sale of your items."},{pic:a("rxgY"),lable:"Pull market data from our digital asset API",desc:"Automatically show your users their own collectibles, and become an OpenSea affiliate to monetize your user base"},{pic:a("rxgY"),lable:"Collaborate with OpenSea Studios",desc:"Building a game? Need a blockchain-powered marketplace? We'll do the heavy lifting for you. Check out Ethmoji for an example."}]}},methods:{}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"developer"},[a("div",{staticClass:"txt1"},[t._v("OpenSea for Developers")]),t._v(" "),a("div",{staticClass:"txt2"},[t._v("Empowering developers and designers with easy-to-use, powerful tools")]),t._v(" "),a("div",{staticClass:"list"},t._l(t.list,function(e,s){return a("div",{key:s,staticClass:"item"},[a("el-image",{attrs:{src:e.pic,lazy:""}}),t._v(" "),a("div",{staticClass:"lable"},[t._v(t._s(e.lable))]),t._v(" "),a("div",{staticClass:"desc"},[t._v(t._s(e.desc))])],1)}),0),t._v(" "),a("el-button",{staticClass:"btn",attrs:{type:"primary"}},[t._v("LEARN MORE"),a("i",{staticClass:"el-icon--right"})])],1)},staticRenderFns:[]};var l=a("VU/8")(o,r,!1,function(t){a("aARy")},"data-v-52aaa122",null).exports,c={name:"HomeMenu",props:{dataInfo:Object},components:{},data:function(){return{tabs:["New","Art","Domain Names","Virtual Worlds","Trading Cards","Collectibles","Sports","Utility"],activeName:""}},methods:{onMouseEnter:function(t){this.$emit("SHOW_POP",t+1)},onMouseLeave:function(t){this.$emit("SHOW_POP",0)}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu"},[a("div",{staticClass:"options"},t._l(t.dataInfo.vMenus,function(e,s){return a("div",{key:s,staticClass:"item",on:{mouseenter:function(e){return t.onMouseEnter(s)},mouseleave:function(e){return t.onMouseLeave(s)}}},[t._v("\n            "+t._s(e.sName)+"\n        ")])}),0)])},staticRenderFns:[]};var v=a("VU/8")(c,u,!1,function(t){a("J16W")},"data-v-753aba5c",null).exports,d={name:"ListPicName",props:{dataInfo:Array,title:String},components:{},data:function(){return{list:["Browse","Activity","Rankings","Blog","Community","Create"]}},methods:{handleClick:function(){}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"listPN"},[a("div",{staticClass:"title"},[a("i",{staticClass:"el-icon-platform-eleme"}),t._v(" "),a("span",[t._v(t._s(t.title))])]),t._v(" "),a("div",{staticClass:"list"},t._l(t.dataInfo,function(e,s){return a("div",{key:s,staticClass:"item"},[a("el-image",{attrs:{src:e.sFeaturedimage,lazy:""}}),t._v(" "),a("div",[t._v(t._s(e.sCollectionName))])],1)}),0)])},staticRenderFns:[]};var p=a("VU/8")(d,m,!1,function(t){a("LI5x")},"data-v-1bc1f814",null).exports,f={name:"ListPicNamelPrice",props:{dataInfo:{type:Object,default:function(){return{}}},title:{type:String,default:""}},components:{},data:function(){return{list:["Browse","Activity","Rankings","Blog","Community","Create"]}},methods:{handleClick:function(){}}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"listPN"},[a("div",{staticClass:"title"},[a("div",[a("i",{staticClass:"el-icon-s-ticket"}),t._v(" "),a("span",[t._v(t._s(t.title))])]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"list"},t._l(t.dataInfo.vPageData,function(e,s){return a("div",{key:s,staticClass:"item"},[a("el-image",{attrs:{src:e.sItemDataUrl,lazy:""}}),t._v(" "),a("div",{staticClass:"desc"},[a("div",{staticClass:"flexbetween txt"},[a("span",[t._v(t._s(e.sItemName))]),t._v(" "),a("span",[t._v("Price")])]),t._v(" "),a("div",{staticClass:"flexbetween"},[a("span",[t._v(t._s(e.sCollectionName)+" #"+t._s(e.iItemId))]),t._v(" "),a("span",[t._v(t._s(e.sPaymentToken)+" "+t._s(e.dPayment))])])])],1)}),0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",[this._v("VIEW ALL")]),this._v(" "),e("i",{staticClass:"el-icon-arrow-right"})])}]};function h(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){return function s(i,n){try{var o=e[i](n),r=o.value}catch(t){return void a(t)}if(!o.done)return Promise.resolve(r).then(function(t){s("next",t)},function(t){s("throw",t)});t(r)}("next")})}}var C={components:{listOnlyPicName:p,ListPicNamePrice:a("VU/8")(f,_,!1,function(t){a("Fk8T")},"data-v-b6665a44",null).exports,Developers:l,ICarousel:n,HomeMenu:v},name:"Home",data:function(){return{isShowPop:0,isKeep:!1,keepTimeID:null,hidePopTimeId:null,homeMenu:{},homeData:{},popData:{}}},mounted:function(){this.initData()},methods:{initData:function(){var t=this;return h(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.GetHomeMenu();case 2:return t.homeMenu=e.sent,e.next=5,t.$api.GetHomeData();case 5:t.homeData=e.sent;case 6:case"end":return e.stop()}},e,t)}))()},checkETHIsLogin:function(){var t=this;return h(regeneratorRuntime.mark(function e(){var a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===window.ethereum){e.next=4;break}console.log("MetaMask is installed!"),e.next=6;break;case 4:return window.open("https://metamask.io/download.html"),e.abrupt("return");case 6:return e.next=8,window.ethereum.request({method:"eth_requestAccounts"});case 8:a=e.sent,console.log(a[0]),t.$store.commit("app/changeData",{key:"mateMaskToken",val:a[0]}),t.$router.push("/shop");case 12:case"end":return e.stop()}},e,t)}))()},showPop:function(t){var e=this;if(!t)return clearTimeout(this.hidePopTimeId),void(this.keepTimeID=setTimeout(function(){e.isKeep||(e.isShowPop=t)},500));clearTimeout(this.keepTimeID),this.hidePopTimeId=setTimeout(function(){e.isShowPop=t},500),this.popData=this.homeMenu.vMenus[t-1]},keepAlive:function(){this.isKeep=!0},hidePop:function(){this.isKeep=!1,this.isShowPop=0}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{staticClass:"header"},[a("h1",[t._v("The largest NFT marketplace")]),t._v(" "),a("h4",[t._v("Buy, sell, and discover rare digital items")]),t._v(" "),a("div",{staticClass:"home-buttons"},[a("el-button",{staticClass:"btn",attrs:{type:"primary"}},[t._v("Explore")]),t._v(" "),a("el-button",{staticClass:"btn",attrs:{type:"primary",plain:""},on:{click:t.checkETHIsLogin}},[t._v("Create")])],1)]),t._v(" "),a("home-menu",{attrs:{dataInfo:t.homeMenu},on:{SHOW_POP:t.showPop}}),t._v(" "),a("div",{staticClass:"container"},[a("i-carousel",{attrs:{dataInfo:t.homeData.vTrendings}}),t._v(" "),a("list-only-pic-name",{attrs:{dataInfo:t.homeData.vTrendings,title:"Trendings"}}),t._v(" "),a("list-pic-name-price",{attrs:{dataInfo:t.homeData.stCollectible,title:"Collectible"}}),t._v(" "),a("list-pic-name-price",{attrs:{dataInfo:t.homeData.stDigitalArt,title:"DigitalArt"}}),t._v(" "),a("list-pic-name-price",{attrs:{dataInfo:t.homeData.stVirtualWorlds,title:"VirtualWorlds"}}),t._v(" "),a("developers")],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowPop,expression:"isShowPop"}],staticClass:"popUp"},[a("div",{staticClass:"pop-body",on:{mouseenter:function(e){return e.stopPropagation(),t.keepAlive()},mouseleave:function(e){return t.hidePop()}}},[a("div",{staticClass:"left"},[a("i",{staticClass:"el-icon-platform-eleme"}),t._v(" "),a("div",{staticClass:"t1"},[t._v(t._s(t.popData.sName))]),t._v(" "),a("div",{staticClass:"t2"},[t._v(t._s(t.popData.sDesc))])]),t._v(" "),a("div",{staticClass:"right"},[a("div",[t._v("Top Collections")]),t._v(" "),t._l(t.popData.vTopCollections,function(e,s){return a("div",{key:s,staticClass:"item"},[a("div",[t._v(t._s(e.sCollectionName))])])})],2)])])],1)},staticRenderFns:[]};var g=a("VU/8")(C,y,!1,function(t){a("dG+J")},"data-v-3f91cbf5",null);e.default=g.exports},t1pi:function(t,e){}});