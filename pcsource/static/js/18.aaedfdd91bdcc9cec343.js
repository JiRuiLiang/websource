webpackJsonp([18],{"7Nvl":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("LoaF"),o=n("NYxO"),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function i(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function r(o,a){try{var i=e[o](a),s=i.value}catch(t){return void n(t)}if(!i.done)return Promise.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)});t(s)}("next")})}}var s={name:"nft",components:{EraxCollection2:r.a},computed:a({},Object(o.b)(["token"])),data:function(){return{vItems:[],iPageNo:0,iPageNum:8,iTotal:0,busy:!1}},mounted:function(){this.getWalletItemList(),window.addEventListener("scroll",this.handleLoad)},methods:{handleLoad:function(){var t=this;return i(regeneratorRuntime.mark(function e(){var n,r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=document.documentElement.scrollTop||document.body.scrollTop,r=document.documentElement.clientHeight||document.body.clientHeight,o=document.documentElement.scrollHeight||document.body.scrollHeight,!(n+r>=o-200)||t.busy){e.next=10;break}if(t.busy=!0,!(t.vItems.length<t.iTotal)){e.next=9;break}return t.iPageNo++,e.next=9,t.getWalletItemList();case 9:t.busy=!1;case 10:case"end":return e.stop()}},e,t)}))()},getWalletItemList:function(){var t=this;return i(regeneratorRuntime.mark(function e(){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={sWallet:t.token,iSort:1,iPageNo:t.iPageNo,iPageNum:t.iPageNum},e.next=3,t.$api.GetWalletItemList(n);case 3:r=e.sent,t.iTotal=r.iTotal,t.vItems=t.vItems.concat(r.vItems);case 6:case"end":return e.stop()}},e,t)}))()}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"erax-collection-list"},[this.vItems.length>0?this._l(this.vItems,function(t,n){return e("EraxCollection2",{key:n,staticClass:"erax-collection",attrs:{editable:!1,collection:t,width:285}})}):e("div",{staticClass:"erax-sv-empty"},[e("img",{attrs:{src:n("2igd"),alt:""}})])],2)},staticRenderFns:[]};var u=n("VU/8")(s,c,!1,function(t){n("V9PV")},"data-v-1566a810",null);e.default=u.exports},V9PV:function(t,e){}});