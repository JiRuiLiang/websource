webpackJsonp([9],{MucH:function(t,e){},Q9RT:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("LoaF");var i={components:{EraxCollection2:s.a},data:function(){return{list:[]}},mounted:function(){this.GetSimilarItem()},methods:{toCollection:function(t){this.$router.push({name:"collection",query:{id:t.iCollectionId}})},GetSimilarItem:function(){var t,e=this;return(t=regeneratorRuntime.mark(function t(){var n,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$api.GetZeroFeeCollectionList({});case 2:n=t.sent,s=n.vData,e.list=s;case 5:case"end":return t.stop()}},t,e)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function s(i,a){try{var r=e[i](a),o=r.value}catch(t){return void n(t)}if(!r.done)return Promise.resolve(o).then(function(t){s("next",t)},function(t){s("throw",t)});t(o)}("next")})})()}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("el-row",{attrs:{type:"flex",justify:"space-between"}},[n("div",{staticClass:"title"},[n("i",{staticClass:"iconfont icon-dianpu"}),n("div",[t._v(t._s(t.$t("message.assets_lang_164")))])])]),t._v(" "),n("el-row",{staticClass:"list",attrs:{type:"flex"}},t._l(t.list,function(e,s){return n("div",{key:s,staticClass:"item",on:{click:function(n){return t.toCollection(e)}}},[e.sFeaturedImg?n("img",{staticClass:"feature",attrs:{src:e.sFeaturedImg,alt:""}}):n("div",{staticClass:"feature feature1"}),t._v(" "),n("img",{staticClass:"avatar",attrs:{src:e.sLogoImg,alt:""}}),t._v(" "),n("div",{staticClass:"name"},[t._v(t._s(e.sCollectionName))]),t._v(" "),n("div",{staticClass:"desc line4hidden",domProps:{innerHTML:t._s(e.sDescription)}}),t._v(" "),n("div",{staticClass:"count"},[t._v(t._s(e.ItemCount)+" item")])])}),0)],1)},staticRenderFns:[]};var r=n("VU/8")(i,a,!1,function(t){n("n+PH")},"data-v-50e4cc27",null).exports;var o={components:{EraxCollection2:s.a},data:function(){return{list:[]}},mounted:function(){this.GetSimilarItem()},methods:{toCollection:function(){this.$router.push("/explore")},GetSimilarItem:function(){var t,e=this;return(t=regeneratorRuntime.mark(function t(){var n,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$api.GetZeroFeeItemList({});case 2:n=t.sent,s=n.vData,e.list=s;case 5:case"end":return t.stop()}},t,e)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function s(i,a){try{var r=e[i](a),o=r.value}catch(t){return void n(t)}if(!r.done)return Promise.resolve(o).then(function(t){s("next",t)},function(t){s("throw",t)});t(o)}("next")})})()}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("el-row",{attrs:{type:"flex",justify:"space-between"}},[n("div",{staticClass:"title"},[n("i",{staticClass:"iconfont icon-zuixinshangjiacu"}),n("div",[t._v(t._s(t.$t("message.assets_lang_163")))])]),t._v(" "),n("div",{staticClass:"btn",on:{click:t.toCollection}},[t._v(t._s(t.$t("message.assets_lang_148"))+" ...")])]),t._v(" "),n("el-row",{staticClass:"list",attrs:{type:"flex"}},t._l(t.list,function(t,e){return n("EraxCollection2",{key:e,attrs:{width:"285",showTitle:!0,collection:t,editable:!1}})}),1)],1)},staticRenderFns:[]};var l={components:{ItemList:n("VU/8")(o,c,!1,function(t){n("MucH")},"data-v-5628f836",null).exports,CollectionList:r}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zero-fee"},[e("div",{staticClass:"container"},[e("img",{attrs:{src:n("GM7e"),alt:""}}),this._v(" "),e("div",{staticClass:"desc"},[this._v(this._s(this.$t("message.assets_lang_162")))]),this._v(" "),e("el-divider"),this._v(" "),e("item-list",{staticClass:"item-list"}),this._v(" "),e("collection-list")],1)])},staticRenderFns:[]};var v=n("VU/8")(l,u,!1,function(t){n("lq78")},"data-v-78053e72",null);e.default=v.exports},lq78:function(t,e){},"n+PH":function(t,e){}});