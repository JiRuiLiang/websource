webpackJsonp([30],{CWEc:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("ytf2"),i=e("Tnm7"),n=e("NYxO"),l=e("WBHA"),r=e.n(l),o=(e("XLwt"),Object.assign||function(t){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t});function c(t){return function(){var s=t.apply(this,arguments);return new Promise(function(t,e){return function a(i,n){try{var l=s[i](n),r=l.value}catch(t){return void e(t)}if(!l.done)return Promise.resolve(r).then(function(t){a("next",t)},function(t){a("throw",t)});t(r)}("next")})}}var v={components:{countTo:r.a},name:"Nft",data:function(){return{list:[],TotalMintAmount:"180000000.000000",TotalERAC:1e4,eracValue:0,neraValue:0,TotalMinted:0,BonusUsdt:0,iPageNo:0,iPageNum:20,iRemain:0,iOwnerCount:0,iTotal:0,startVal:0,endVal:0,nameAry:[this.$t("message.lang_26"),this.$t("message.lang_27"),this.$t("message.lang_28"),this.$t("message.lang_29"),this.$t("message.lang_30"),this.$t("message.lang_31"),this.$t("message.lang_32"),this.$t("message.lang_33"),this.$t("message.lang_34")],mintTimeID:null,tableData:[],showNext:!0}},computed:o({},Object(n.c)({language:function(t){return t.app.language},cashDic:function(t){return t.app.cashDic},BTCUSDT:function(t){return t.app.BTCUSDT},ETHUSDT:function(t){return t.app.ETHUSDT},BRDBTC:function(t){return t.app.BRDBTC},NERAUSDT:function(t){return t.app.NERAUSDT},BNBUSDT:function(t){return t.app.BNBUSDT}})),watch:{language:function(t){this.nameAry=[this.$t("message.lang_26"),this.$t("message.lang_27"),this.$t("message.lang_28"),this.$t("message.lang_29"),this.$t("message.lang_30"),this.$t("message.lang_31"),this.$t("message.lang_32"),this.$t("message.lang_33"),this.$t("message.lang_34")]},TotalMinted:function(t,s){if(!s)return this.startVal=t,this.endVal=t,t;this.startVal=s,this.endVal=t}},mounted:function(){this.getEraxNftLevel(),this.calcTotalMint(),this.startCalc(),this.getNftOwenerList(),this.getBonus()},beforeDestroy:function(){clearInterval(this.mintTimeID)},methods:{getCoinKey:function(t){var s=!0,e=!1,a=void 0;try{for(var i,n=this.cashDic[Symbol.iterator]();!(s=(i=n.next()).done);s=!0){var l=i.value;if(l.sDictValue.toLowerCase()===t.toLowerCase())return l.sDictText}}catch(t){e=!0,a=t}finally{try{!s&&n.return&&n.return()}finally{if(e)throw a}}},getUSDT:function(t,s){switch(t){case"ETH":case"WETH":return(this.ETHUSDT.c*parseFloat(s)).toFixed(2);case"BRD":return this.BRDBTC&&this.BTCUSDT?(this.BRDBTC.c*this.BTCUSDT.c*parseFloat(s)).toFixed(2):"";case"NERA":case"ERAT":return(this.NERAUSDT.c*parseFloat(s)).toFixed(2);default:return 0}},startCalc:function(){this.mintTimeID=setInterval(this.calcTotalMint,5e3)},lastPage:function(){this.iPageNo&&(this.iPageNo--,this.getNftOwenerList())},nextPage:function(){(this.iPageNo+1)*this.iPageNum>=this.iTotal||(this.iPageNo++,this.getNftOwenerList())},getNftOwenerList:function(){var t=this;return c(regeneratorRuntime.mark(function s(){var e;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.$api.GetNftOwnerList({iPageNo:t.iPageNo,iPageNum:t.iPageNum});case 2:e=s.sent,t.iRemain=e.iRemain,t.iOwnerCount=e.iOwnerCount,t.iTotal=e.iOwnerCount,t.tableData=[],t.$nextTick(function(){t.tableData=e.vOwnerWallet}),t.showNext=e.vOwnerWallet===t.iPageNum,t.eracValue=parseFloat(((t.TotalERAC-t.iRemain)/t.TotalERAC*100).toFixed(2));case 10:case"end":return s.stop()}},s,t)}))()},calcTotalMint:function(){var t=(new Date).getTime()/1e3-1618502400;this.TotalMinted=parseFloat((219540/86400*t).toFixed(6)),this.TotalMinted>=parseFloat(this.TotalMintAmount)&&(this.TotalMinted=parseFloat(this.TotalMintAmount),clearInterval(this.mintTimeID)),this.neraValue=parseFloat((this.TotalMinted/parseInt(this.TotalMintAmount)*100).toFixed(2))},getEraxNftLevel:function(){var t=this;return c(regeneratorRuntime.mark(function s(){var e,a;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.$api.GetEraxNftLevel();case 2:e=s.sent,a=e.vNftLevels,t.list=a;case 5:case"end":return s.stop()}},s,t)}))()},getBonus:function(){var t=this;return c(regeneratorRuntime.mark(function s(){var e,n,l,r,o,c,v,u,_,g,d,m;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t.BonusUsdt=0,Object(a.b)(),e=new web3.eth.Contract(JSON.parse(i.d),i.e),s.next=5,e.methods.getTokenList().call();case 5:return n=s.sent,s.next=8,e.methods.getTotalFeeETH().call();case 8:l=s.sent,t.BonusUsdt+=parseFloat(t.getUSDT("ETH",parseFloat(l)/1e18)),r=!0,o=!1,c=void 0,s.prev=13,v=n[Symbol.iterator]();case 15:if(r=(u=v.next()).done){s.next=26;break}return _=u.value,s.next=19,e.methods.getTotalFeeToken(_).call();case 19:g=s.sent,d=t.getCoinKey(_),m=t.getUSDT(d,parseFloat(g)/1e18),t.BonusUsdt+=parseFloat(m);case 23:r=!0,s.next=15;break;case 26:s.next=32;break;case 28:s.prev=28,s.t0=s.catch(13),o=!0,c=s.t0;case 32:s.prev=32,s.prev=33,!r&&v.return&&v.return();case 35:if(s.prev=35,!o){s.next=38;break}throw c;case 38:return s.finish(35);case 39:return s.finish(32);case 40:case"end":return s.stop()}},s,t,[[13,28,32,40],[33,,35,39]])}))()},toDetail:function(t){this.$router.push({name:"nftdetail",query:{level:t.iLevel}})},getColor:function(t){return t?t.iRemainder/t.iCount<=.5?"#CA0022":"#000000":""}}},u={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"nft"},[t._m(0),t._v(" "),a("div",{staticClass:"title"},[t._v("ERAC DAO")]),t._v(" "),a("div",{staticClass:"line"}),t._v(" "),a("div",{staticClass:"dao-container"},[a("div",{staticClass:"list"},t._l(t.list,function(s,e){return a("div",{key:e,staticClass:"item",class:"item"+e,on:{click:function(s){return s.stopPropagation(),t.toDetail(t.list.length&&t.list[8-e])}}},[a("img",{attrs:{src:t.list[8-e].sLevelImg,alt:""}}),t._v(" "),a("div",{staticClass:"box"},[a("div",{staticClass:"desc"},[a("div",{staticClass:"name"},[t._v(t._s(t.nameAry[8-e]))]),t._v(" "),a("div",{staticClass:"num"},[a("span",[t._v(t._s(t.$t("message.lang_41"))+"：")]),a("span",{staticClass:"txt1"},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[8-e].iCount))+" ")]),t._v("\n              | "),a("span",[t._v(t._s(t.$t("message.lang_42"))+"：")]),a("span",{staticClass:"txt2",style:{color:t.getColor(t.list[8-e])}},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[8-e].iRemainder))+"\n                ")])]),t._v(" "),a("div",{staticClass:"value"},[a("span",[t._v(t._s(t.$t("message.lang_38"))+"：")]),a("span",{staticClass:"txt1"},[t._v(t._s(t.list.length&&t.list[8-e].iValue))])]),t._v(" "),a("div",{staticClass:"coin"},[a("span",[t._v(t._s(t.$t("message.lang_39"))+"：")]),a("span",{staticClass:"txt1"},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[8-e].iMiningSpeed)))])])])])])}),0),t._v(" "),a("div",{staticClass:"right"},[a("div",{staticClass:"top"},[a("div",{staticClass:"top-top"},[a("div",{staticClass:"left"},[a("div",{staticClass:"block block1"},[a("div",{staticClass:"txt1"},[t._v(t._s(t.$util.format(t.TotalERAC)))]),t._v(" "),a("div",{staticClass:"txt2"},[t._v(t._s(t.$t("message.dao_1")))])]),t._v(" "),a("div",{staticClass:"top-left-bottom"},[a("div",{staticClass:"block block3"},[a("div",{staticClass:"txt1"},[t._v(t._s(t.$util.format(t.iRemain)))]),t._v(" "),a("div",{staticClass:"txt2"},[t._v(t._s(t.$t("message.dao_2")))])]),t._v(" "),a("div",{staticClass:"block block3"},[a("div",{staticClass:"txt1"},[t._v(t._s(t.$util.format(t.iOwnerCount)))]),t._v(" "),a("div",{staticClass:"txt2"},[t._v(t._s(t.$t("message.dao_6")))])])])]),t._v(" "),a("div",{staticClass:"right"},[a("div",{staticClass:"block block2"},[a("div",{staticClass:"txt1"},[t._v(t._s(t.$util.format(t.TotalMintAmount)))]),t._v(" "),a("div",{staticClass:"txt2"},[t._v(t._s(t.$t("message.dao_3")))])]),t._v(" "),a("div",{staticClass:"top-left-bottom"},[a("div",{staticClass:"block block4"},[a("countTo",{staticClass:"txt1",attrs:{decimals:6,startVal:t.startVal,endVal:t.endVal,duration:3e3}}),t._v(" "),a("div",{staticClass:"txt2"},[t._v(t._s(t.$t("message.dao_4")))])],1),t._v(" "),a("div",{staticClass:"block block4"},[a("div",{staticClass:"txt1"},[t._v(t._s(t.$util.format(parseFloat(t.BonusUsdt.toFixed(6)))))]),t._v(" "),a("div",{staticClass:"txt2"},[t._v(t._s(t.$t("message.dao_5")))])])])])]),t._v(" "),a("div",{staticClass:"progress1"},[a("el-progress",{attrs:{"stroke-width":40,"show-text":!1,percentage:t.eracValue}}),t._v(" "),a("div",{staticClass:"progress-point"},[a("img",{attrs:{src:e("gLdA"),alt:""}}),t._v(" "),a("div",[t._v("ERAC")]),t._v(" "),a("div",{staticClass:"pv1"},[t._v(t._s(t.eracValue+"%"))])])],1),t._v(" "),a("div",{staticClass:"progress2"},[a("el-progress",{attrs:{"stroke-width":40,"show-text":!1,percentage:t.neraValue}}),t._v(" "),a("div",{staticClass:"progress-point"},[a("img",{attrs:{src:e("bXVC"),alt:""}}),t._v(" "),a("div",[t._v(t._s(t.$t("message.dao_11")))]),t._v(" "),a("div",{staticClass:"pv2"},[t._v(t._s(t.neraValue+"%"))])])],1)]),t._v(" "),a("div",{staticClass:"bottom"},[a("div",{staticClass:"bottom-title"},[t._v(t._s(t.$t("message.dao_7")))]),t._v(" "),a("el-table",{attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"iNo",label:t.$t("message.transactions_3"),align:"center",width:"180"}}),t._v(" "),a("el-table-column",{staticClass:"table-padding",attrs:{prop:"sWallet",align:"center",label:t.$t("message.dao_8")},scopedSlots:t._u([{key:"default",fn:function(s){var e=s.row;return a("div",{},[a("span",{staticClass:"sWallet"},[t._v(t._s(e.sWallet))])])}}])}),t._v(" "),a("el-table-column",{staticClass:"table-padding",attrs:{prop:"address1",align:"center",width:"70",label:" "}})],1),t._v(" "),a("div",{staticClass:"bottom-footer"},[t.iPageNo?a("el-button",{staticClass:"btn1",attrs:{type:"primary"},on:{click:t.lastPage}},[t._v(t._s(t.$t("message.dao_9")))]):t._e(),t._v(" "),t.showNext?a("el-button",{staticClass:"btn2",attrs:{type:"success"},on:{click:t.nextPage}},[t._v(t._s(t.$t("message.dao_10")))]):t._e()],1)],1)])]),t._v(" "),a("div",{staticClass:"tips"},[a("div",{staticClass:"title"},[t._v("ERAC "+t._s(t.$t("message.lang_46"))+"：")]),t._v(" "),a("div",{staticClass:"desc"},[a("div",[t._v(t._s(t.$t("message.lang_47")))]),t._v(" "),a("div",[t._v(t._s(t.$t("message.lang_48")))]),t._v(" "),a("div",[t._v(t._s(t.$t("message.lang_49")))]),t._v(" "),a("div",[t._v(t._s(t.$t("message.lang_50")))]),t._v(" "),a("div",[t._v(t._s(t.$t("message.lang_51")))]),t._v(" "),a("div",[t._v(t._s(t.$t("message.lang_52")))])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"bannerDiv"},[s("img",{staticClass:"banner",attrs:{src:e("NZVX"),alt:""}})])}]};var _=e("VU/8")(v,u,!1,function(t){e("ffqb")},"data-v-52ae90bc",null);s.default=_.exports},ffqb:function(t,s){}});