webpackJsonp([1],{"1hce":function(t,a){},"7gcq":function(t,a){},Kqe3:function(t,a,e){"use strict";var s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"erax-collection-item",style:t.styleBox},[e("img",{staticClass:"erax-collection-img",style:t.styleImg,attrs:{src:"http://192.168.80.202/user/20210425/3e038ee51ce1c3670504cdfea5debfb0.png",alt:""}}),t._v(" "),e("div",{staticClass:"erax-collection-content"},[e("div",{staticClass:"a"},[e("div",{staticClass:"erax-collection-info"},[e("div",{staticClass:"aa"},[t._m(0),t._v(" "),e("el-button",{staticClass:"aa-2"},[t._v("收藏")])],1),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),e("p",{staticClass:"a-1"},[t._v("2020 四月物语")]),t._v(" "),e("p",{staticClass:"a-2"},[t._v("店铺名-3W")])]),t._v(" "),t._m(3)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"aa-1"},[a("img",{staticClass:"aa-1-1",attrs:{src:"http://192.168.80.202/user/20210425/651f8e824aa8f25efe486208e07dc528.jpeg",alt:""}}),this._v(" "),a("div",{staticClass:"aa-1-2"},[a("p",{staticClass:"aa-1-2-1"},[this._v("店铺名-3W")]),this._v(" "),a("p",{staticClass:"aa-1-2-2"},[this._v("@教授")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"bb"},[a("div",{staticClass:"bb-1"},[a("p",{staticClass:"bb-1-1"},[this._v("1")]),this._v(" "),a("p",{staticClass:"bb-1-2"},[this._v("作品")])]),this._v(" "),a("div",{staticClass:"bb-1"},[a("p",{staticClass:"bb-1-1"},[this._v("8")]),this._v(" "),a("p",{staticClass:"bb-1-2"},[this._v("收藏")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"cc"},[a("img",{staticClass:"cc-1",attrs:{src:"http://192.168.80.202/user/20210425/651f8e824aa8f25efe486208e07dc528.jpeg",alt:""}}),this._v(" "),a("img",{staticClass:"cc-1",attrs:{src:"http://192.168.80.202/user/20210425/651f8e824aa8f25efe486208e07dc528.jpeg",alt:""}}),this._v(" "),a("img",{staticClass:"cc-1",attrs:{src:"http://192.168.80.202/user/20210425/651f8e824aa8f25efe486208e07dc528.jpeg",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"b"},[a("p",{staticClass:"b-1"},[this._v("价格")]),this._v(" "),a("p",{staticClass:"b-2"},[this._v("Ξ 0.11")]),this._v(" "),a("p",{staticClass:"b-3"},[a("i",{staticClass:"fas fa-hourglass-end"}),this._v(" 还剩3天")])])}]};var i=e("VU/8")({name:"EraxCollection",props:{width:{default:386}},computed:{styleBox:function(){return{width:this.width+"px",height:this.width+88+"px"}},styleImg:function(){return{width:this.width+"px",height:this.width+"px"}}}},s,!1,function(t){e("7gcq")},"data-v-69354104",null);a.a=i.exports},eerB:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("Kqe3"),i=e("NYxO"),r=e("LoaF");e("eOoE");function n(t){return function(){var a=t.apply(this,arguments);return new Promise(function(t,e){return function s(i,r){try{var n=a[i](r),c=n.value}catch(t){return void e(t)}if(!n.done)return Promise.resolve(c).then(function(t){s("next",t)},function(t){s("throw",t)});t(c)}("next")})}}var c={name:"Index",data:function(){return{bannerNavIndex:0,eraxBanners:[],eraxArtistBanner:[],eraxHotItem:[],eraxHotCollection:[],artistIndex:0,isMarketShow:!1,marketList:[{title:"BTC/USDT",field:"btc"},{title:"ETH/USDT",field:"eth"},{title:"NERA/USDT",field:"nera"},{title:"BRD/BTC",field:"brd"}],partnerList:[{title:"BRD",src:e("2uN1"),url:"https://brd.com"},{title:"Metamask",src:e("TRu7"),url:"https://metamask.io"},{title:"AWS",src:e("oq86"),url:"https://aws.amazon.com"},{title:"Twitter",src:e("0RCW"),url:"https://twitter.com"}],marketData:{btc:{},eth:{},brd:{},nera:{}},SymbolTickData:[]}},computed:(Object.assign||function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t})({},Object(i.c)({BTCUSDT:function(t){return t.app.BTCUSDT},ETHUSDT:function(t){return t.app.ETHUSDT},BRDBTC:function(t){return t.app.BRDBTC},NERAUSDT:function(t){return t.app.NERAUSDT}})),watch:{BTCUSDT:function(t,a){this.$set(this.marketData,"btc",this.toUSD(t,a))},ETHUSDT:function(t,a){this.$set(this.marketData,"eth",this.toUSD(t,a))},NERAUSDT:function(t,a){this.$set(this.marketData,"nera",this.toUSD(t,a))},BRDBTC:function(t,a){this.$set(this.marketData,"brd",this.toUSD(t,a))}},components:{EraxCollection:s.a,EraxCollection2:r.a},mounted:function(){var t=this;return n(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t.getHomeData(),t.$api.GetSymbolTick({vSymbol:["btcusdt@miniTicker","ethusdt@miniTicker","brdbtc@miniTicker","nerausdt@miniTicker"]}).then(function(a){a.vSymbolTick.forEach(function(a){t.$store.dispatch("app/changeData",{key:a.s,val:a})})}).catch(function(t){});case 2:case"end":return a.stop()}},a,t)}))()},methods:{getHomeData:function(){var t=this;return n(regeneratorRuntime.mark(function a(){var e;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$api.GetHomeData({});case 2:e=a.sent,t.eraxBanners=e.vBanners.filter(function(t){return t.iSort<=99}),t.eraxArtistBanner=e.vBanners.filter(function(t){return t.iSort>=100&&t.iSort<=199}),t.eraxHotCollection=e.vBanners.filter(function(t){return t.iSort>=300&&t.iSort<=399}),t.eraxHotItem=e.vHotItem.slice(0,3).map(function(t){return t.stItem});case 7:case"end":return a.stop()}},a,t)}))()},handleLeft:function(){this.$refs.elArtist.prev()},handleRight:function(){this.$refs.elArtist.next()},toUSD:function(t,a){if(t)return{c:parseFloat(t.c),x:a.c-t.c>0,s:((t.c-t.o)/t.o*100).toFixed(2)}},onCarouselChange:function(t){this.bannerNavIndex=t},handleBannerOver:function(t,a){this.bannerNavIndex=a,this.$refs.elCarousel.setActiveItem(t.id)}}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"erax-index"}},[t._e(),t._v(" "),e("div",{attrs:{id:"erax-banner"}},[e("el-carousel",{ref:"elCarousel",attrs:{height:"100%",arrow:"never",interval:5e3,"initial-index":t.bannerNavIndex,autoplay:!0},on:{change:t.onCarouselChange}},t._l(t.eraxBanners,function(t,a){return e("el-carousel-item",{key:a,attrs:{name:t.id}},[e("div",{staticClass:"erax-banner-bg",style:{backgroundImage:"url("+t.sBannerImg+")"}},[e("a",{attrs:{href:t.sURL}},[e("div",{staticClass:"erax-banner-box",style:{backgroundImage:"url("+t.sBannerImg+")"}})])])])}),1)],1),t._v(" "),e("div",{attrs:{id:"erax-artist"}},[e("i",{staticClass:"fas fa-chevron-left arrow",on:{click:t.handleLeft}}),t._v(" "),e("el-carousel",{ref:"elArtist",staticClass:"erax-artist-swiper",attrs:{height:"100%","indicator-position":"none",arrow:"never","initial-index":t.artistIndex,autoplay:!1}},t._l(t.eraxArtistBanner,function(t,a){return e("el-carousel-item",{key:a,attrs:{name:""+a}},[e("a",{staticClass:"erax-artist-a",attrs:{target:"_blank",href:t.sURL}},[e("div",{staticClass:"erax-artist-bg",style:{backgroundImage:"url("+t.sBannerImg+")"}})])])}),1),t._v(" "),e("i",{staticClass:"fas fa-chevron-right arrow",on:{click:t.handleRight}})],1),t._v(" "),e("div",{attrs:{id:"erax-nft"}},[e("div",{staticClass:"erax-layout"},[e("div",{staticClass:"erax-container-header"},[e("h1",{staticClass:"erax-header-title"},[t._v(t._s(t.$t("message.Home_01")))]),t._v(" "),e("router-link",{staticClass:"erax-header-more",attrs:{to:{path:"/explore"}}},[t._v(t._s(t.$t("message.Home_02")))])],1),t._v(" "),e("div",{staticClass:"erax-content"},t._l(t.eraxHotItem,function(t,a){return e("EraxCollection2",{key:a,staticClass:"erax-item",attrs:{width:"382",editable:!1,collection:t}})}),1)])]),t._v(" "),e("div",{attrs:{id:"erax-special"}},[e("div",{staticClass:"erax-layout"},[e("div",{staticClass:"erax-container-header"},[e("h1",{staticClass:"erax-header-title"},[t._v(t._s(t.$t("message.Home_03")))])]),t._v(" "),e("div",{staticClass:"erax-content"},t._l(t.eraxHotCollection,function(t,a){return e("a",{key:a,attrs:{href:t.sURL}},[e("div",{staticClass:"erax-item"},[e("div",{staticClass:"erax-item-scale",style:"background-image: url("+t.sBannerImg+")"})])])}),0)])]),t._v(" "),e("div",{attrs:{id:"erax-py-nft"}},[e("div",{staticClass:"erax-layout"},[e("h1",{staticClass:"erax-title"},[t._v(t._s(t.$t("message.Home_08")))]),t._v(" "),e("div",{staticClass:"erax-content"},[e("div",{staticClass:"erax-item"},[e("h2",{staticClass:"erax-item-tile"},[t._v(t._s(t.$t("message.Home_09")))]),t._v(" "),e("p",{staticClass:"erax-item-des"},[t._v(t._s(t.$t("message.Home_13")))])]),t._v(" "),e("div",{staticClass:"erax-item"},[e("h2",{staticClass:"erax-item-tile"},[t._v(t._s(t.$t("message.Home_10")))]),t._v(" "),e("p",{staticClass:"erax-item-des"},[t._v(t._s(t.$t("message.Home_14")))])]),t._v(" "),e("div",{staticClass:"erax-item"},[e("h2",{staticClass:"erax-item-tile"},[t._v(t._s(t.$t("message.Home_11")))]),t._v(" "),e("p",{staticClass:"erax-item-des"},[t._v(t._s(t.$t("message.Home_15")))])]),t._v(" "),e("div",{staticClass:"erax-item"},[e("h2",{staticClass:"erax-item-tile"},[t._v(t._s(t.$t("message.Home_12")))]),t._v(" "),e("p",{staticClass:"erax-item-des"},[t._v(t._s(t.$t("message.Home_16")))])])])])]),t._v(" "),e("div",{attrs:{id:"erax-brd"}},[e("div",{staticClass:"erax-layout"},[e("div",{staticClass:"erax-content"},[e("div",{staticClass:"a"},[e("div",{staticClass:"a-1"},[e("h1",{staticClass:"a-1-1"},[t._v(t._s(t.$t("message.Home_04")))]),t._v(" "),e("h1",{staticClass:"a-1-2"},[t._v(t._s(t.$t("message.Home_17")))])]),t._v(" "),e("p",{staticClass:"a-2"},[t._v(t._s(t.$t("message.Home_05")))]),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])])]),t._v(" "),e("div",{attrs:{id:"erax-market"}},[e("div",{staticClass:"erax-layout"},[e("div",{staticClass:"erax-content"},t._l(t.marketList,function(a,s){return e("div",{key:s,staticClass:"erax-item"},[e("div",{staticClass:"a"},[e("p",{staticClass:"a-1"},[t._v(t._s(a.title))]),t._v(" "),e("p",{staticClass:"a-2",style:{color:t.marketData[a.field].s<0?"red":"green"}},[t.marketData[a.field].s>0?[t._v("+")]:t._e(),t._v(t._s(t.marketData[a.field].s)+"%\n            ")],2)]),t._v(" "),e("p",{staticClass:"b",style:{color:t.marketData[a.field].x?"red":"green"}},[t._v("$ "+t._s(t.marketData[a.field].c))])])}),0)])]),t._v(" "),e("div",{attrs:{id:"erax-partner"}},[e("div",{staticClass:"erax-layout"},[e("div",{staticClass:"erax-container-header"},[e("h1",{staticClass:"erax-header-title"},[t._v(t._s(t.$t("message.Home_18")))])]),t._v(" "),e("div",{staticClass:"erax-content"},t._l(t.partnerList,function(t,a){return e("div",{key:a,staticClass:"erax-item"},[e("a",{attrs:{target:"_blank",href:t.url}},[e("img",{staticClass:"under",attrs:{src:t.src,alt:""}})])])}),0)])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"erax-nav-bar"},[e("li",{staticClass:"erax-nav-item"},[t._v("新品")]),t._v(" "),e("li",{staticClass:"erax-nav-item"},[t._v("艺术")]),t._v(" "),e("li",{staticClass:"erax-nav-item"},[t._v("虚拟世界")]),t._v(" "),e("li",{staticClass:"erax-nav-item"},[t._v("交易卡")]),t._v(" "),e("li",{staticClass:"erax-nav-item"},[t._v("收藏品")]),t._v(" "),e("li",{staticClass:"erax-nav-item"},[t._v("效用")]),t._v(" "),e("li",{staticClass:"erax-nav-item"},[t._v("...")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"a-3"},[a("a",{attrs:{target:"_blank",href:"https://apps.apple.com/app/breadwallet/id885251393"}},[a("img",{staticClass:"a-3-1",attrs:{src:e("FVG1")}})]),this._v(" "),a("a",{attrs:{target:"_blank",href:"https://play.google.com/store/apps/details?id=com.breadwallet"}},[a("img",{staticClass:"a-3-1",attrs:{src:e("toht")}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"b"},[a("img",{attrs:{src:e("RXFv")}})])}]};var o=e("VU/8")(c,l,!1,function(t){e("1hce")},"data-v-35cd15b5",null);a.default=o.exports}});