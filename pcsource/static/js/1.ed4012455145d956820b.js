webpackJsonp([1],{"0aNw":function(t,e){},Ewah:function(t,e){},bbBE:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Tnm7"),r=n("NYxO"),s=n("ytf2"),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};function i(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function a(r,s){try{var o=e[r](s),i=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(i).then(function(t){a("next",t)},function(t){a("throw",t)});t(i)}("next")})}}var c={props:{value:{type:Boolean,default:!1},list:{type:Array,default:function(){return[]}}},data:function(){return{dialogVisible:this.value}},watch:{value:function(t){this.dialogVisible=t}},computed:o({},Object(r.c)({language:function(t){return t.app.language},mateMaskToken:function(t){return t.app.mateMaskToken}})),mounted:function(){var t=this;return i(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()},methods:{handleClose:function(t){this.$emit("input",!1)},onConfirm:function(){var t=this;return i(regeneratorRuntime.mark(function e(){var n,a,r,s,o,i,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(n=0,a=!0,r=!1,s=void 0,e.prev=4,o=t.list[Symbol.iterator]();!(a=(i=o.next()).done);a=!0)c=i.value,n+=parseFloat(c.value);e.next=12;break;case 8:e.prev=8,e.t0=e.catch(4),r=!0,s=e.t0;case 12:e.prev=12,e.prev=13,!a&&o.return&&o.return();case 15:if(e.prev=15,!r){e.next=18;break}throw s;case 18:return e.finish(15);case 19:return e.finish(12);case 20:if(n){e.next=23;break}return t.$message.error("没有分红"),e.abrupt("return");case 23:t.$emit("BONUS");case 24:case"end":return e.stop()}},e,t,[[4,8,12,20],[13,,15,19]])}))()}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-dialog",{attrs:{title:" ",visible:t.dialogVisible,"append-to-body":"",center:"",top:"40vh","lock-scroll":"",width:"400px","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[t._l(t.list,function(e,a){return n("div",{key:a,staticClass:"amount",class:a>0?"":"pink"},[n("div",{staticClass:"amount-title"},[t._v(t._s(e.name)+" Bonus")]),t._v(" "),n("div",{staticClass:"amount-value"},[t._v(t._s(t._f("filterThousands")(e.value))+" "+t._s(e.name))])])}),t._v(" "),n("el-button",{staticClass:"btn3",on:{click:t.onConfirm}},[t._v("\n          Withdraw Bonus\n      ")])],2)],1)},staticRenderFns:[]};var l=n("VU/8")(c,u,!1,function(t){n("qaD4")},"data-v-006941f2",null).exports,d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};function m(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function a(r,s){try{var o=e[r](s),i=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(i).then(function(t){a("next",t)},function(t){a("throw",t)});t(i)}("next")})}}var p={props:{value:{type:Boolean,default:!1},amount:{type:String,default:function(){return""}},tokenName:{type:String,default:function(){return""}}},data:function(){return{dialogVisible:this.value}},watch:{value:function(t){this.dialogVisible=t}},computed:d({},Object(r.c)({language:function(t){return t.app.language},mateMaskToken:function(t){return t.app.mateMaskToken}})),mounted:function(){var t=this;return m(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()},methods:{handleClose:function(t){this.$emit("input",!1)},onConfirm:function(){var t=this;return m(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$emit("CLAIM");case 1:case"end":return e.stop()}},e,t)}))()}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-dialog",{attrs:{title:" ",visible:t.dialogVisible,"append-to-body":"",center:"",top:"40vh","lock-scroll":"",width:"400px","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("div",{staticClass:"amount"},[n("div",{staticClass:"amount-title"},[t._v(t._s(t.$t("message.ido_1")))]),t._v(" "),n("div",{staticClass:"amount-value"},[t._v(t._s(t._f("filterThousands")(t.amount))+" "+t._s(t.tokenName))])]),t._v(" "),n("el-button",{staticClass:"btn3",on:{click:t.onConfirm}},[t._v("\n          Claim\n      ")])],1)],1)},staticRenderFns:[]};var v=n("VU/8")(p,h,!1,function(t){n("hXZW")},"data-v-5ec9f6c4",null).exports,f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};function g(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function a(r,s){try{var o=e[r](s),i=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(i).then(function(t){a("next",t)},function(t){a("throw",t)});t(i)}("next")})}}var _={props:{value:{type:Boolean,default:!1},amount:{type:String,default:function(){return""}},tokenName:{type:String,default:function(){return""}}},data:function(){return{dialogVisible:this.value}},watch:{value:function(t){this.dialogVisible=t}},computed:f({},Object(r.c)({language:function(t){return t.app.language},mateMaskToken:function(t){return t.app.mateMaskToken}})),mounted:function(){var t=this;return g(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()},methods:{handleClose:function(t){this.$emit("input",!1)},onConfirm:function(){var t=this;return g(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$emit("REMAIN");case 1:case"end":return e.stop()}},e,t)}))()}}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-dialog",{attrs:{title:" ",visible:t.dialogVisible,"append-to-body":"",center:"",top:"40vh","lock-scroll":"",width:"400px","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("div",{staticClass:"amount"},[n("div",{staticClass:"amount-title"},[t._v(t._s(t.$t("message.ido_1")))]),t._v(" "),n("div",{staticClass:"amount-value"},[t._v(t._s(t._f("filterThousands")(t.amount))+" "+t._s(t.tokenName))])]),t._v(" "),n("el-button",{staticClass:"btn3",on:{click:t.onConfirm}},[t._v("\n          Withdraw Remain\n      ")])],1)],1)},staticRenderFns:[]};var b=n("VU/8")(_,k,!1,function(t){n("Ewah")},"data-v-718533ac",null).exports,w=n("bu39"),C=n("TQvf"),x=n.n(C),P=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};function y(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function a(r,s){try{var o=e[r](s),i=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(i).then(function(t){a("next",t)},function(t){a("throw",t)});t(i)}("next")})}}var S={components:{WithdrawRemain:b,WithdrawBouns:l,LoadingPop:w.a,WithdrawClaim:v},data:function(){return{input:"",curSelect:{},showRemain:!1,showBouns:!1,showClaim:!1,curPool:null,poolIndex:0,list:[],poolAbi:"",tokenPoolAbi:"",IdoWhiteList:"",poolAddress:"",timeId:null,tokenPoolContract:null,leftExchange:0,showLoading:!1,claimAmount:0,loadingData:{type:0},inviteAddress:a.c,isShowApprove:!1,leftPercent:0,exchangeTokenAry:[],maxValue:0,canExchanValue:0,maxBuyTimes:0,curBuyTimes:0,bounsList:[],minimum:0,maximum:0}},computed:P({},Object(r.c)({mateMaskToken:function(t){return t.app.mateMaskToken},chainObj:function(t){return t.app.chainObj},language:function(t){return t.app.language}}),{poolStatus:function(){return this.curPool?this.curPool.poolStatus:3}}),watch:{mateMaskToken:function(){window.location.reload()},curSelect:function(){this.input="",this.calcMax(),this.checkApprove()},input:function(t){t?(parseFloat(t)>this.maximum&&this.maximum>0&&(t=this.maximum+""),parseFloat(t)>parseFloat(this.maxValue)&&(t=this.maxValue+""),t=t.match(/^\d*(\.?\d{0,4})/g)[0]||null,this.input=t,this.canExchanValue=(parseFloat(this.input)/parseFloat(this.curSelect.realPrice)).toFixed(4)):this.canExchanValue=0}},mounted:function(){var t=this;return y(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Object(s.b)(),t.poolIndex=parseInt(t.$route.params.pIdx),t.poolIndex||(t.poolIndex=0),e.next=5,t.initData();case 5:t.timewait();case 6:case"end":return e.stop()}},e,t)}))()},beforeDestroy:function(){clearInterval(this.timeId)},methods:{clickShowClaim:function(){var t=this;return y(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.mateMaskToken){e.next=3;break}return t.$router.push("/metamask"),e.abrupt("return",!1);case 3:return e.next=5,t.tokenPoolContract.methods.getIDOTokenAmount(t.mateMaskToken).call();case 5:if(n=e.sent,parseFloat(n)){e.next=9;break}return t.$message.error("未购买或已领取"),e.abrupt("return");case 9:return e.next=11,t.getRealNumByAddress(n,t.curPool.tokenContractAddress);case 11:t.claimAmount=e.sent,t.claimAmount=t.claimAmount.toString(),t.showClaim=!0;case 14:case"end":return e.stop()}},e,t)}))()},getPlaceholder:function(){return this.minimum&&this.maximum?this.minimum+"-"+this.maximum:"0.00"},getRealNumByAddress:function(t,e){var n=this;return y(regeneratorRuntime.mark(function r(){var s,o;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return s=new web3.eth.Contract(JSON.parse(a.t),e),r.next=3,s.methods.decimals().call();case 3:return o=r.sent,r.abrupt("return",n.$util.fromWei(t,o,2));case 5:case"end":return r.stop()}},r,n)}))()},clickShowRemain:function(){var t=this;return y(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.mateMaskToken){e.next=3;break}return t.$router.push("/metamask"),e.abrupt("return",!1);case 3:return e.next=5,t.tokenPoolContract.methods.getFunAddress().call();case 5:if(n=e.sent,t.mateMaskToken.toLowerCase()==n.toLowerCase()){e.next=9;break}return t.$message.error("仅项目方可操作"),e.abrupt("return");case 9:t.showRemain=!0;case 10:case"end":return e.stop()}},e,t)}))()},clickShowBouns:function(){var t=this;return y(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()},initCopy:function(){var t=this,e=document.getElementById("copyBtn"),n=new x.a(e);n.on("success",function(){t.$message.success(t.$t("message.lang_62"))}),n.on("error",function(t){})},toApprove:function(){var t=this;return y(regeneratorRuntime.mark(function e(){var n,r,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.checkCanBuyAndApprove();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return n=new web3.eth.Contract(JSON.parse(a.t),t.curSelect.tokenAddress),e.next=8,n.methods.allowance(t.mateMaskToken,t.curPool.tokenPoolContractAddress).call();case 8:if(r=e.sent,parseInt(r)){e.next=22;break}return e.next=12,web3.eth.getGasPrice();case 12:return s=e.sent,console.log("推荐gas费==="+s),t.loadingData.type=1,t.loadingData.scan=t.chainObj[t.curPool.sChainId],t.showLoading=!0,e.next=19,n.methods.approve(t.curPool.tokenPoolContractAddress,"1000000000000000000000000000000000000000000").send({from:t.mateMaskToken,gasPrice:s},function(e,n){if(e)return t.showLoading=!1,!1;t.loadingData.type=2,t.loadingData.txId=n});case 19:console.log("收到授权通知"),t.showLoading=!1,t.isShowApprove=!1;case 22:case"end":return e.stop()}},e,t)}))()},toBuyNow:function(){var t=this;return y(regeneratorRuntime.mark(function e(){var n,r,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.checkCanBuyAndApprove();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:if(!t.isShowApprove){e.next=8;break}return t.$message.error(t.$t("message.ido_24")),e.abrupt("return");case 8:if(parseFloat(t.input)){e.next=10;break}return e.abrupt("return");case 10:if(!(parseFloat(t.input)<t.minimum&&t.minimum)){e.next=13;break}return t.$message.error(t.$t("message.ido_29")+t.minimum),e.abrupt("return");case 13:if(!parseInt(t.maxBuyTimes)){e.next=20;break}return e.next=16,t.tokenPoolContract.methods.getBuyTimes(t.mateMaskToken).call();case 16:if(t.curBuyTimes=e.sent,!(parseInt(t.curBuyTimes)>=parseInt(t.maxBuyTimes))){e.next=20;break}return t.$message.error(t.$t("message.ido_30").replace("{0}",t.maxBuyTimes)),e.abrupt("return");case 20:if(!(parseFloat(t.canExchanValue)>parseFloat(t.leftExchange))){e.next=23;break}return t.$message.error(t.$t("message.ido_31")),e.abrupt("return");case 23:return t.loadingData.type=1,t.loadingData.scan=t.chainObj[t.curPool.sChainId],t.showLoading=!0,n=new web3.eth.Contract(JSON.parse(a.t),t.curSelect.tokenAddress),e.next=29,n.methods.decimals().call();case 29:return r=e.sent,s=t.$util.toWei(t.input,r),e.next=33,t.tokenPoolContract.methods.buy(s).send({from:t.mateMaskToken},function(e,n){if(e)return t.showLoading=!1,!1;t.loadingData.type=2,t.loadingData.txId=n});case 33:t.showLoading=!1,t.input="",t.updateLeftCount(),t.updateClaimNum(),t.calcMax();case 38:case"end":return e.stop()}},e,t)}))()},checkApprove:function(){var t=this;return y(regeneratorRuntime.mark(function e(){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.curSelect){e.next=2;break}return e.abrupt("return");case 2:return n=new web3.eth.Contract(JSON.parse(a.t),t.curSelect.tokenAddress),e.next=5,n.methods.allowance(t.mateMaskToken,t.curPool.tokenPoolContractAddress).call();case 5:r=e.sent,t.isShowApprove=!parseInt(r);case 7:case"end":return e.stop()}},e,t)}))()},getUrl:function(){var t=window.btoa("NE"+this.mateMaskToken);return window.location.origin+"/ido-detail/"+this.poolIndex+"/"+t},checkCanBuyAndApprove:function(){var t=this;return y(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.mateMaskToken){e.next=3;break}return t.$router.push("/metamask"),e.abrupt("return",!1);case 3:if(t.curPool){e.next=5;break}return e.abrupt("return",!1);case 5:if(t.leftExchange){e.next=8;break}return t.$message.error(t.$t("message.ido_25")),e.abrupt("return",!1);case 8:return e.next=10,t.getWhiteListContract();case 10:if(e.sent){e.next=13;break}return e.abrupt("return",!1);case 13:if(1!==t.curPool.poolStatus){e.next=16;break}return t.$message.error(t.$t("message.ido_26")),e.abrupt("return",!1);case 16:if(3!==t.curPool.poolStatus){e.next=19;break}return t.$message.error(t.$t("message.ido_27")),e.abrupt("return",!1);case 19:return e.abrupt("return",!0);case 20:case"end":return e.stop()}},e,t)}))()},getWhiteListContract:function(){var t=this;return y(regeneratorRuntime.mark(function e(){var n,r,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.tokenPoolContract.methods.getWhiteListContract().call();case 2:if((n=e.sent)!==a.c){e.next=5;break}return e.abrupt("return",!0);case 5:return r=new web3.eth.Contract(JSON.parse(t.IdoWhiteList),n),e.next=8,r.methods.isInWhiteList(t.mateMaskToken).call();case 8:return(s=e.sent)||t.$message.error(t.$t("message.ido_28")),e.abrupt("return",s);case 11:case"end":return e.stop()}},e,t)}))()},calcMax:function(){var t=this;return y(regeneratorRuntime.mark(function e(){var n,r,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.mateMaskToken){e.next=3;break}return t.maxValue=0,e.abrupt("return");case 3:return n=new web3.eth.Contract(JSON.parse(a.t),t.curSelect.tokenAddress),e.next=6,n.methods.balanceOf(t.mateMaskToken).call();case 6:return r=e.sent,e.next=9,n.methods.decimals().call();case 9:s=e.sent,t.maxValue=t.$util.fromWei(r,s);case 11:case"end":return e.stop()}},e,t)}))()},selectBridge:function(t){this.curSelect=t},getSummary:function(){return this.curPool?"en"===this.language?this.curPool.sSummary_en:this.curPool.sSummary_ch:""},getDescription:function(){return this.curPool?"en"===this.language?this.curPool.sDescription_en:this.curPool.sDescription_ch:""},initData:function(){var t=this;return y(regeneratorRuntime.mark(function e(){var n,r,o,i,c,u,l,d,m,p,h,v,f,g,_,k,b,w,C,x,P,y,S,T,$,I;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$util.getChainKey(),e.next=3,t.$api.GetSystemConfig({sAppId:n,sKey1:"IDO"});case 3:if(r=e.sent,(o=r.vList)&&o.length){e.next=8;break}return t.$message.error(t.$t("message.bridge_35")),e.abrupt("return");case 8:for(i=!0,c=!1,u=void 0,e.prev=11,l=o[Symbol.iterator]();!(i=(d=l.next()).done);i=!0)"IdoPoolFactoryAbi"===(m=d.value).sKey2&&(t.poolAbi=m.sValue),"IdoPoolFactoryAddress"===m.sKey2&&(t.poolAddress=m.sValue),"IdoTokenPoolAbi"===m.sKey2&&(t.tokenPoolAbi=m.sValue),"IdoWhiteList"===m.sKey2&&(t.IdoWhiteList=m.sValue);e.next=19;break;case 15:e.prev=15,e.t0=e.catch(11),c=!0,u=e.t0;case 19:e.prev=19,e.prev=20,!i&&l.return&&l.return();case 22:if(e.prev=22,!c){e.next=25;break}throw u;case 25:return e.finish(22);case 26:return e.finish(19);case 27:return e.next=29,t.$api.GetSystemConfig({sAppId:n,sKey1:"IDOData"});case 29:return p=e.sent,h=p.vList,Object(s.b)(),v=new web3.eth.Contract(JSON.parse(t.poolAbi),t.poolAddress),e.next=35,v.methods.getPoolInfo(t.poolIndex).call();case 35:return f=e.sent,g={},g=h[t.poolIndex]?JSON.parse(h[t.poolIndex].sValue):JSON.parse(h[0].sValue),_={tokenPoolName:f[0],tokenContractAddress:f[1],poolStartTime:f[2],poolEndTime:f[3],poolTotalAmounts:f[4],tokenPoolContractAddress:f[5]},k=Object.assign(g,_),e.next=42,t.getAmount(k);case 42:return k.poolTotalAmounts=e.sent,k.sDescription_en=k.sDescription_en.replace(/<br>/g,"\n"),k.sDescription_ch=k.sDescription_ch.replace(/<br>/g,"\n"),t.curPool=k,console.log(t.curPool),t.tokenPoolContract=new web3.eth.Contract(JSON.parse(t.tokenPoolAbi),f[5]),t.updateLeftCount(),e.next=51,t.tokenPoolContract.methods.getPrice().call();case 51:return b=e.sent,w={},C=b[0],x=b[1],P=new web3.eth.Contract(JSON.parse(a.t),t.curPool.tokenContractAddress),y=new web3.eth.Contract(JSON.parse(a.t),C),e.next=59,y.methods.name().call();case 59:return S=e.sent,e.next=62,P.methods.decimals().call();case 62:return T=e.sent,$=t.$util.fromWei(x,T,6),$=parseFloat((1/parseFloat($)).toFixed(6)),w.name=S,w.realPrice=$,w.priceStr=$+" "+S,w.tokenAddress=C,t.curSelect=w,e.next=72,t.tokenPoolContract.methods.getMinAndMaxBuyOnce().call();case 72:return I=e.sent,e.next=75,t.getRealNumByAddress(I[0],C);case 75:return t.minimum=e.sent,e.next=78,t.getRealNumByAddress(I[1],C);case 78:return t.maximum=e.sent,e.next=81,t.tokenPoolContract.methods.getMaxBuyNumber().call();case 81:t.maxBuyTimes=e.sent,t.updateClaimNum();case 83:case"end":return e.stop()}},e,t,[[11,15,19,27],[20,,22,26]])}))()},updateClaimNum:function(){var t=this;return y(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.mateMaskToken){e.next=7;break}return e.next=3,t.tokenPoolContract.methods.getRecord(t.mateMaskToken).call();case 3:return n=e.sent,e.next=6,t.getRealNumByAddress(n,t.curPool.tokenContractAddress);case 6:t.claimAmount=e.sent;case 7:case"end":return e.stop()}},e,t)}))()},updateLeftCount:function(){var t=this;return y(regeneratorRuntime.mark(function e(){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new web3.eth.Contract(JSON.parse(a.t),t.curPool.tokenContractAddress),e.next=3,n.methods.decimals().call();case 3:return r=e.sent,e.next=6,t.tokenPoolContract.methods.getTotalSupply().call();case 6:t.leftExchange=e.sent,t.leftExchange=t.$util.fromWei(t.leftExchange,r),t.leftPercent=(parseInt(t.curPool.poolTotalAmounts)-parseInt(t.leftExchange))/parseInt(t.curPool.poolTotalAmounts)*100;case 9:case"end":return e.stop()}},e,t)}))()},getSupport:function(){},getPriceStr:function(){return this.curSelect?this.curSelect.priceStr:""},getChain:function(t){return"undefined"!=typeof web3&&this.chainObj&&this.chainObj[t]?this.chainObj[t]:{}},getTimeStr:function(t){var e=0;if(!this.curPool)return"";e="start"===t?this.curPool.poolStartTime:this.curPool.poolEndTime,e=1e3*parseInt(e);var n=new Date(e);return(n.getUTCHours()+100).toString().substring(1)+":"+(n.getUTCMinutes()+100).toString().substring(1)},getTimeDesc:function(t){var e=0;return this.curPool?(e="start"===t?this.curPool.poolStartTime:this.curPool.poolEndTime,e=1e3*parseInt(e),new Date(e).getUTCHours()>=12?"PM":"AM"):""},getTimeDateStr:function(t){var e=0;if(!this.curPool)return"";e="start"===t?this.curPool.poolStartTime:this.curPool.poolEndTime,e=1e3*parseInt(e);var n=new Date(e);return n.getUTCFullYear()+"."+(n.getUTCMonth()+101).toString().substring(1)+"."+(n.getUTCDate()+100).toString().substring(1)},getAmount:function(t){var e=this;return y(regeneratorRuntime.mark(function n(){var r,s,o;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=0,s=new web3.eth.Contract(JSON.parse(a.t),t.tokenContractAddress),n.next=4,s.methods.decimals().call();case 4:return o=n.sent,r=e.$util.fromWei(t.poolTotalAmounts,o),n.abrupt("return",r);case 7:case"end":return n.stop()}},n,e)}))()},timewait:function(){var t=this;clearInterval(this.timeId),this.timeId=setInterval(function(){if(t.curPool){var e=(new Date).getTime()/1e3,n=parseInt(t.curPool.poolStartTime),a=parseInt(t.curPool.poolEndTime),r=2;r=e<n?1:e>a?3:2,t.$set(t.curPool,"poolStatus",r)}},1e3)},getStatus:function(t){switch(t){case 1:return this.$t("message.ido_3");case 2:return this.$t("message.ido_2");case 3:return this.$t("message.ido_4")}},getBtnDesc:function(t){switch(t.poolStatus){case 1:return this.$t("message.ido_6");case 2:return this.$t("message.ido_5");case 3:return this.$t("message.ido_6")}},toUrl:function(t){t&&window.open(t)},remain:function(){var t=this;return y(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("点击remain"),t.loadingData.type=1,t.loadingData.scan=t.chainObj[t.curPool.sChainId],t.showLoading=!0,e.next=6,t.tokenPoolContract.methods.withdraw().send({from:t.mateMaskToken},function(e,n){if(e)return t.showLoading=!1,!1;t.loadingData.type=2,t.loadingData.txId=n});case 6:t.showLoading=!1,t.showRemain=!1;case 8:case"end":return e.stop()}},e,t)}))()},bouns:function(){var t=this;return y(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("点击bouns"),t.loadingData.type=1,t.loadingData.scan=t.chainObj[t.curPool.sChainId],t.showLoading=!0,e.next=6,t.tokenPoolContract.methods.getReward().send({from:t.mateMaskToken},function(e,n){if(e)return t.showLoading=!1,!1;t.loadingData.type=2,t.loadingData.txId=n});case 6:t.showLoading=!1,t.showBouns=!1;case 8:case"end":return e.stop()}},e,t)}))()},claim:function(){var t=this;return y(regeneratorRuntime.mark(function e(){var n,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("点击Claim"),e.next=3,t.tokenPoolContract.methods.getReleaseTime().call();case 3:if(n=e.sent,a=(new Date).getTime(),!(1e3*parseInt(n)<=a)){e.next=15;break}return t.loadingData.type=1,t.loadingData.scan=t.chainObj[t.curPool.sChainId],t.showLoading=!0,e.next=11,t.tokenPoolContract.methods.releaseIDOToken().send({from:t.mateMaskToken},function(e,n){if(e)return t.showLoading=!1,!1;t.loadingData.type=2,t.loadingData.txId=n});case 11:t.showLoading=!1,t.showClaim=!1,e.next=16;break;case 15:t.$message.error("未到领取时间");case 16:case"end":return e.stop()}},e,t)}))()}}},T={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"white-bg"},[a("div",{staticClass:"ido-detail"},[a("div",{staticClass:"back"},[a("div",{staticClass:"back-container",on:{click:function(e){return t.$router.back()}}},[a("span",[t._v("< "+t._s(t.$t("message.notice_22")))])])]),t._v(" "),a("div",{staticClass:"ido-container"},[a("div",{staticClass:"item"},[a("div",{staticClass:"item-container"},[a("div",{staticClass:"left"},[a("div",{staticClass:"status-sign"},[a("div",{staticClass:"sign-item"},[a("div",{staticClass:"sign-item"},[a("img",{directives:[{name:"show",rawName:"v-show",value:t.curPool&&1==t.curPool.poolStatus,expression:"curPool && curPool.poolStatus == 1"}],attrs:{src:n("uXOr"),alt:""}}),t._v(" "),a("img",{directives:[{name:"show",rawName:"v-show",value:t.curPool&&2==t.curPool.poolStatus,expression:"curPool && curPool.poolStatus == 2"}],attrs:{src:n("R2lP"),alt:""}}),t._v(" "),a("img",{directives:[{name:"show",rawName:"v-show",value:t.curPool&&3==t.curPool.poolStatus,expression:"curPool && curPool.poolStatus == 3"}],attrs:{src:n("zvc6"),alt:""}}),t._v(" "),a("div",{staticClass:"sign-desc"},[t._v("\n                    "+t._s(t.getStatus(t.curPool&&t.curPool.poolStatus))+"\n                  ")])])])]),t._v(" "),a("img",{attrs:{src:t.curPool&&t.curPool.sLogoUrl,alt:""}})]),t._v(" "),a("div",{staticClass:"right"},[a("div",{staticClass:"top-div"},[a("div",{staticClass:"ido-name"},[t._v(t._s(t.curPool&&t.curPool.sName))]),t._v(" "),a("div",{staticClass:"chain-info"},[a("img",{attrs:{src:t.getChain(t.curPool&&t.curPool.sChainId).icon,alt:""}}),t._v(" "),a("div",[t._v(t._s(t.getChain(t.curPool&&t.curPool.sChainId).name))])]),t._v(" "),a("div",{staticClass:"desc line2hidden"},[t._v("\n                "+t._s(t.getSummary())+"\n              ")]),t._v(" "),a("div",{staticClass:"amount-container"},[a("div",{staticClass:"amount color1"},[a("div",{staticClass:"amount-title"},[t._v(t._s(t.$t("message.ido_1")))]),t._v(" "),a("div",{staticClass:"amount-value"},[t._v("\n                    "+t._s(t._f("filterThousands")(t.curPool&&t.curPool.poolTotalAmounts))+"\n                    "+t._s(t.curPool&&t.curPool.tokenPoolName)+"\n                  ")])])]),t._v(" "),a("div",{staticClass:"amount-container"},[a("div",{staticClass:"amount color2"},[a("div",{staticClass:"amount-title"},[t._v(t._s(t.$t("message.ido_7")))]),t._v(" "),a("div",{staticClass:"amount-value"},[t._v(t._s(t.curSelect.name))])])]),t._v(" "),a("div",{staticClass:"amount-container"},[a("div",{staticClass:"amount color3"},[a("div",{staticClass:"amount-title"},[t._v(t._s(t.$t("message.ido_8")))]),t._v(" "),a("div",{staticClass:"amount-value"},[t._v(t._s(t.getPriceStr()))])])]),t._v(" "),a("div",{staticClass:"time-container"},[a("div",{staticClass:"time-item time-item1"},[a("span",{staticClass:"time-desc"},[t._v(t._s(t.$t("message.ido_9")))]),a("span",{staticClass:"date"},[t._v(t._s(t.getTimeDateStr("start"))),a("span",{staticClass:"date time"},[t._v(t._s(t.getTimeStr("start")))])]),a("span",{staticClass:"Sign"},[t._v(t._s(t.getTimeDesc("start"))+" UTC")])]),t._v(" "),a("div",{staticClass:"time-item"},[a("span",{staticClass:"time-desc"},[t._v(t._s(t.$t("message.ido_10")))]),a("span",{staticClass:"date date2"},[t._v(t._s(t.getTimeDateStr("end"))),a("span",{staticClass:"date date2 time"},[t._v(t._s(t.getTimeStr("end")))])]),a("span",{staticClass:"Sign"},[t._v(t._s(t.getTimeDesc("end"))+" UTC")])])])])])])]),t._v(" "),t.curPool&&t.curPool.URL?a("div",{staticClass:"ido-links"},t._l(t.curPool.URL,function(e,n){return a("div",{key:n,staticClass:"ido-link-item",on:{click:function(n){return t.toUrl(e)}}},[t._v("\n          "+t._s(n)+"\n        ")])}),0):t._e(),t._v(" "),a("div",{staticClass:"ido-progress"},[a("div",{staticClass:"progress-desc"},[a("span",{staticClass:"progress-desc-txt1"},[t._v(t._s(t.$t("message.ido_11"))+":")]),a("span",{staticClass:"progress-desc-txt2"},[t._v(t._s(t.leftPercent.toFixed(2))+"%")])]),t._v(" "),a("el-progress",{attrs:{"show-text":!1,"stroke-width":44,color:"#44DF84",percentage:t.leftPercent,status:"success"}})],1),t._v(" "),3!==t.poolStatus?a("div",{staticClass:"ido-controller"},[a("div",{staticClass:"balance-div"},[a("span",{staticClass:"value-desc"},[t._v(t._s(t.$t("message.ido_13"))+":")]),a("span",{staticClass:"value-font"},[t._v(t._s(t._f("filterThousands")(t.maxValue))+" "+t._s(t.curSelect&&t.curSelect.name))])]),t._v(" "),a("div",{staticClass:"controller-container"},[a("div",{staticClass:"controller-left"},[a("el-input",{attrs:{type:"number",placeholder:t.getPlaceholder()},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t._v(" "),a("div",{staticClass:"input-control"},[a("div",{staticClass:"max-btn",on:{click:function(e){t.input=t.maxValue+""}}},[t._v(t._s(t.$t("message.ido_19")))]),t._v(" "),a("div",{staticClass:"line"}),t._v(" "),a("div",{staticClass:"ido-coin-div"},[a("span",{staticClass:"txt2"},[t._v(t._s(t.curSelect&&t.curSelect.name||""))])])])],1),t._v(" "),a("div",{staticClass:"controller-right"},[t.isShowApprove?a("div",{staticClass:"Approve shake-shake",on:{click:t.toApprove}},[a("i",{staticClass:"iconfont icon-shouquan"}),t._v(" "+t._s(t.$t("message.ido_14"))+"\n            ")]):t._e(),t._v(" "),a("div",{staticClass:"buy-now shake-shake",on:{click:t.toBuyNow}},[a("i",{staticClass:"iconfont icon-gouwuche"}),t._v(t._s(t.$t("message.ido_15"))+"\n            ")])])]),t._v(" "),a("div",{staticClass:"value-font margin-10"},[t._v("≈ "+t._s(t.canExchanValue)+" "+t._s(t.curPool&&t.curPool.sName))])]):t._e(),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"invite-url"},[a("div",{staticClass:"url"},[a("span",{staticClass:"desc"},[t._v(t._s(t.$t("message.stake_29"))+":")]),t._v(" "),a("span",{staticClass:"link"},[t._v(t._s(t.getUrl()))]),t._v(" "),a("i",{staticClass:"iconfont icon-fuzhi",attrs:{id:"copyBtn","data-clipboard-action":"copy","data-clipboard-text":t.getUrl()}})])]),t._v(" "),a("div",{staticClass:"bought-amount"},[a("span",{staticClass:"bought-amount-desc"},[t._v(t._s(t.$t("message.ido_16"))+":")]),t._v(" "),a("span",{staticClass:"bought-amount-value"},[t._v(t._s(t.claimAmount)+" "+t._s(t.curPool&&t.curPool.sName))])]),t._v(" "),a("div",{staticClass:"html-desc",domProps:{innerHTML:t._s(t.getDescription())}}),t._v(" "),t.curPool&&t.curPool.sImgUrl?a("img",{staticClass:"html-img",attrs:{src:t.curPool&&t.curPool.sImgUrl,alt:""}}):t._e()]),t._v(" "),a("loading-pop",{attrs:{dataInfo:t.loadingData},model:{value:t.showLoading,callback:function(e){t.showLoading=e},expression:"showLoading"}})],1)])},staticRenderFns:[]};var $=n("VU/8")(S,T,!1,function(t){n("xd3T"),n("0aNw")},"data-v-22040f2b",null);e.default=$.exports},bu39:function(t,e,n){"use strict";var a=n("NYxO"),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},s={props:{value:{type:Boolean,default:!1},dataInfo:{type:Object,default:function(){}}},data:function(){return{dialogVisible:this.value}},mounted:function(){},watch:{value:function(t){this.dialogVisible=t},dataInfo:{handler:function(t,e){this.checkShowClose()},deep:!0}},computed:r({},Object(a.c)({mateMaskToken:function(t){return t.app.mateMaskToken}})),methods:{toScan:function(){window.open(this.dataInfo.scan.scanUrl+this.dataInfo.txId)},checkShowClose:function(){var t=this;this.$nextTick(function(){var e=document.getElementsByClassName("el-dialog__headerbtn")[0];1===t.dataInfo.type?e.style.display="none":e.style.display="block"})},getTitle:function(){return this.dataInfo.isBridge?2==this.dataInfo.type?this.$t("message.bridge_32"):this.$t("message.bridge_29"):this.$t("message.ido_18")},getDesc:function(){return this.dataInfo.isBridge?2==this.dataInfo.type?this.$t("message.bridge_33"):this.dataInfo.scan&&this.dataInfo.scan.name+" "+this.$t("message.bridge_30"):this.$t("message.ido_17")},getScanBtn:function(){return 2==this.dataInfo.type?this.$t("message.bridge_31")+this.dataInfo.scan.scan+this.$t("message.bridge_34"):""},handleClose:function(t){this.$emit("input",!1)}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{visible:t.dialogVisible,"append-to-body":"",center:"","lock-scroll":"","close-on-click-modal":!1,width:"467px",top:"40vh","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"loading-pop-container"},[t.dataInfo&&1===t.dataInfo.type?a("img",{attrs:{src:n("3s4B"),alt:""}}):a("img",{attrs:{src:n("16RD"),alt:""}}),t._v(" "),a("div",{staticClass:"loading-title"},[t._v(t._s(t.getTitle()))]),t._v(" "),a("div",{staticClass:"loading-desc"},[t._v(t._s(t.getDesc()))]),t._v(" "),a("div",{staticClass:"loading-btn",on:{click:t.toScan}},[t._v(t._s(t.getScanBtn()))])])])],1)},staticRenderFns:[]};var i=n("VU/8")(s,o,!1,function(t){n("d81P")},"data-v-4ede7c30",null);e.a=i.exports},d81P:function(t,e){},hXZW:function(t,e){},qaD4:function(t,e){},xd3T:function(t,e){}});