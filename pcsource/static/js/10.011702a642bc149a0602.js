webpackJsonp([10],{UbyM:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("NYxO"),s=a("ytf2"),i=a("Tnm7"),r=a("bu39"),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t};function o(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){return function n(s,i){try{var r=e[s](i),c=r.value}catch(t){return void a(t)}if(!r.done)return Promise.resolve(c).then(function(t){n("next",t)},function(t){n("throw",t)});t(c)}("next")})}}var l={components:{LoadingPop:r.a},data:function(){return{price:"",balance:0,list:[],toChain:{},showPop:!1,constractChainObj:{},curConstractChain:{},receive:0,charge:0,BridgeABI:"",chainInfoData:{},showLoading:!1,curSelect:null,loadingData:{type:0,isBridge:!0}}},watch:{price:function(t){t&&(t=(t+"").match(/^\d*(\.?\d{0,4})/g)[0]||null,this.price=t,parseFloat(this.price)>parseFloat(this.balance)&&(this.price=this.balance),this.receive=(this.price-this.charge).toFixed(4),this.receive<0&&(this.receive=0))},mateMaskToken:function(){this.initConfig()}},computed:c({},Object(n.c)({mateMaskToken:function(t){return t.app.mateMaskToken},chainObj:function(t){return t.app.chainObj},configData:function(t){return t.app.configData}}),{bridgeList:function(){var t=this.configData.bridge_asset;if(t){var e=t.split("|"),a=[],n=!0,s=!1,i=void 0;try{for(var r,c=e[Symbol.iterator]();!(n=(r=c.next()).done);n=!0){var o=r.value;if(o){var l=o.split(",");if(l.length){var d={};d.desc=l[0],d.icon=l[1],d.api=l[2],a.push(d)}}}}catch(t){s=!0,i=t}finally{try{!n&&c.return&&c.return()}finally{if(s)throw i}}return a}return[]},curChain:function(){return"undefined"!=typeof web3&&this.chainObj&&this.chainObj[web3.currentProvider.chainId]?this.chainObj[web3.currentProvider.chainId]:{}},getShowList:function(){var t=[];if("undefined"!=typeof web3&&this.list.length){var e=!0,a=!1,n=void 0;try{for(var s,i=this.list[Symbol.iterator]();!(e=(s=i.next()).done);e=!0){var r="0x"+s.value.chainId.toString(16);r!==this.curChain.chainId&&t.push(this.chainObj[r])}}catch(t){a=!0,n=t}finally{try{!e&&i.return&&i.return()}finally{if(a)throw n}}}return t}}),mounted:function(){Object(s.b)(),this.bridgeList.length&&(this.curSelect=this.bridgeList[0]),this.initConfig()},methods:{selectBridge:function(t){this.curSelect=t,this.initConfig()},toSwitch:function(){var t=this;return o(regeneratorRuntime.mark(function e(){var a,n,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=window.ethereum){e.next=3;break}return e.abrupt("return");case 3:if(n=t.toChain.chainId,s=t.chainInfoData[n]){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,a.request({method:"wallet_addEthereumChain",params:s}).catch();case 9:e.sent;case 10:case"end":return e.stop()}},e,t)}))()},initConfig:function(){var t=this;return o(regeneratorRuntime.mark(function e(){var a,n,s,i,r,c,o,l,d;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.price="",t.balance=0,e.next=4,t.GetAddChainData();case 4:return e.next=6,t.$axios.get(t.curSelect.api+"/public/getConfList");case 6:for(a=e.sent,t.list=a,n=!0,s=!1,i=void 0,e.prev=11,r=t.list[Symbol.iterator]();!(n=(c=r.next()).done);n=!0)o=c.value,t.constractChainObj["0x"+o.chainId.toString(16)]=o;e.next=19;break;case 15:e.prev=15,e.t0=e.catch(11),s=!0,i=e.t0;case 19:e.prev=19,e.prev=20,!n&&r.return&&r.return();case 22:if(e.prev=22,!s){e.next=25;break}throw i;case 25:return e.finish(22);case 26:return e.finish(19);case 27:if(t.constractChainObj[web3.currentProvider.chainId]){e.next=30;break}return t.$message.error(t.$t("message.bridge_35")),e.abrupt("return");case 30:return e.next=32,t.$api.GetSystemConfig({sAppId:"Erax-dev",sKey1:"bridge"});case 32:l=e.sent,d=l.vList,t.BridgeABI=d[0].sValue,t.curConstractChain=t.constractChainObj[web3.currentProvider.chainId],t.updateBalance(),t.$nextTick(function(){if(t.getShowList.length){t.$set(t,"toChain",t.getShowList[0]),t.toChain=t.getShowList[0];var e=t.constractChainObj[t.toChain.chainId];t.charge=parseFloat(parseFloat(e.fee).toFixed(4))}});case 38:case"end":return e.stop()}},e,t,[[11,15,19,27],[20,,22,26]])}))()},updateBalance:function(){var t=this;return o(regeneratorRuntime.mark(function e(){var a,n,s,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.mateMaskToken||!i.t){e.next=11;break}return(a=t.curConstractChain.neraAddress)||(a=t.curConstractChain.address),n=new web3.eth.Contract(JSON.parse(i.t),a),e.next=6,n.methods.balanceOf(t.mateMaskToken).call().catch(function(t){if(t)return s=0,!1});case 6:return s=e.sent,e.next=9,n.methods.decimals().call();case 9:r=e.sent,t.balance=t.$util.fromWei(s,r,4);case 11:case"end":return e.stop()}},e,t)}))()},GetAddChainData:function(){var t=this;return o(regeneratorRuntime.mark(function e(){var a,n,s,i,r,c,o,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.GetSystemConfig({sAppId:"Erax-dev",sKey1:"ChainData"});case 2:for(a=e.sent,n=a.vList,t.chainInfoData={},s=!0,i=!1,r=void 0,e.prev=8,c=n[Symbol.iterator]();!(s=(o=c.next()).done);s=!0)l=o.value,t.chainInfoData[l.sKey2]=JSON.parse(l.sValue);e.next=16;break;case 12:e.prev=12,e.t0=e.catch(8),i=!0,r=e.t0;case 16:e.prev=16,e.prev=17,!s&&c.return&&c.return();case 19:if(e.prev=19,!i){e.next=22;break}throw r;case 22:return e.finish(19);case 23:return e.finish(16);case 24:case"end":return e.stop()}},e,t,[[8,12,16,24],[17,,19,23]])}))()},selectChain:function(t){this.toChain=t,this.showPop=!1},transfer:function(){var t=this;return o(regeneratorRuntime.mark(function e(){var a,n,s,r,c,o,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loadingData.type=1,t.loadingData.scan=t.chainObj["0x"+t.curConstractChain.chainId.toString(16)],t.showLoading=!0,a=t.curConstractChain.neraAddress||t.curConstractChain.address,n=new web3.eth.Contract(JSON.parse(i.t),a),e.next=7,web3.eth.getGasPrice();case 7:if(s=e.sent,console.log("推荐gas费==="+s),"ETH"!=t.curConstractChain.code){e.next=27;break}return e.next=12,n.methods.allowance(t.mateMaskToken,t.curConstractChain.address).call();case 12:if("0"!=(r=e.sent)){e.next=20;break}return console.log("跳转ERC20授权!"),e.next=17,n.methods.approve(t.curConstractChain.address,"1000000000000000000000000000000000000000000").send({from:t.mateMaskToken,gasPrice:s},function(e,a){if(e)return t.showLoading=!1,console.log("授权报错"),Vue.prototype.$message.error(i18n.t("message.assets_lang_90")),t.showLoading=!1,!1});case 17:return e.next=19,n.methods.allowance(t.mateMaskToken,t.curConstractChain.address).call();case 19:r=e.sent;case 20:if("0"!=r){e.next=26;break}return console.log("ERC20未授权!"),t.showLoading=!1,e.abrupt("return",!1);case 26:console.log("ERC20已授权!");case 27:return c=new web3.eth.Contract(JSON.parse(t.BridgeABI),t.curConstractChain.address),o=0,e.next=31,n.methods.decimals().call();case 31:return l=e.sent,o=t.$util.toWei(t.price,l),e.next=35,c.methods.swapIn(o,t.toChain.chainId).send({from:t.mateMaskToken,gasPrice:s},function(e,a){if(e)return t.showLoading=!1,!1;t.loadingData.type=2,t.loadingData.txId=a,t.showStake=!1,t.$axios.post(t.curSelect.api+"/swapIn/swapIn",{txId:a,userAddress:t.mateMaskToken,amount:t.price,chainId:parseInt(t.toChain.chainId,16),fromChainId:t.curConstractChain.chainId})});case 35:t.showLoading=!1,t.price="",t.receive=0,t.updateBalance();case 39:case"end":return e.stop()}},e,t)}))()},getChainName:function(){return this.toChain.chainId&&this.chainObj?this.chainObj[this.toChain.chainId].name:""}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nera-bridge"},[a("div",{staticClass:"bridge-container"},[a("div",{staticClass:"title"},[t._v(t._s(t.curSelect&&t.curSelect.desc)+" "+t._s(t.$t("message.bridge_1")))]),t._v(" "),a("div",{staticClass:"flex-sb"},[a("div",{staticClass:"coin-div"},[a("span",{staticClass:"txt1"},[t._v(t._s(t.$t("message.bridge_2")))]),t._v(" "),a("div",{staticClass:"bridge-list"},t._l(t.bridgeList,function(e,n){return a("div",{key:n,staticClass:"bridge-list-item",class:t.curSelect&&t.curSelect.desc===e.desc?"select-birdge":"",on:{click:function(a){return t.selectBridge(e)}}},[a("img",{attrs:{src:e.icon,alt:""}}),t._v(" "),a("div",[t._v(t._s(e.desc))])])}),0)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.mateMaskToken,expression:"mateMaskToken"}],staticClass:"txt3",on:{click:function(e){return t.$router.push({path:"/bridge-history",query:{api:t.curSelect.api}})}}},[t._v("\n        "+t._s(t.$t("message.bridge_14"))+" "),a("i",{staticClass:"el-icon-arrow-right"})])]),t._v(" "),a("div",{staticClass:"nera-bridge-swap"},[a("div",{staticClass:"select-item"},[a("img",{attrs:{src:t.curChain.icon,alt:""}}),t._v(" "),a("span",[t._v(t._s(t.curChain.name))])]),t._v(" "),t._m(0),t._v(" "),a("el-popover",{attrs:{placement:"bottom-end",title:t.$t("message.bridge_28"),width:"328",trigger:"click","popper-class":"option-pop","visible-arrow":!1},model:{value:t.showPop,callback:function(e){t.showPop=e},expression:"showPop"}},[t._l(t.getShowList,function(e,n){return a("div",{key:n,staticClass:"chain-option",class:t.toChain.chainId===e.chainId?"select-option":"",on:{click:function(a){return t.selectChain(e)}}},[a("img",{attrs:{src:e.icon,alt:""}}),t._v(" "),a("span",[t._v(t._s(e.name))]),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:t.toChain.chainId===e.chainId,expression:"toChain.chainId === item.chainId"}],staticClass:"iconfont icon-gou"})])}),t._v(" "),a("div",{staticClass:"select-item",attrs:{slot:"reference"},slot:"reference"},[a("img",{attrs:{src:t.toChain.icon,alt:""}}),t._v(" "),a("span",[t._v(t._s(t.toChain.name))]),t._v(" "),a("i",{staticClass:"fas fa-chevron-right"})])],2)],1),t._v(" "),a("div",{staticClass:"notice"},[a("div",[t._v("\n        "+t._s(t.$t("message.bridge_26"))+" "+t._s(t.getChainName())+" "+t._s(t.$t("message.bridge_3"))+"\n      ")]),t._v(" "),a("div",[t._v("\n        "+t._s(t.$t("message.bridge_4"))+"\n        "),a("div",{staticClass:"bridge-btn add",on:{click:t.toSwitch}},[t._v(t._s(t.$t("message.bridge_27")))]),t._v("\n        "+t._s(t.$t("message.bridge_5"))+"\n      ")])]),t._v(" "),a("div",{staticClass:"nera-balance"},[a("span",{staticClass:"balance-title"},[t._v(t._s(t.curSelect&&t.curSelect.desc)+" "+t._s(t.$t("message.bridge_6"))+": ")]),a("span",{staticClass:"balance"},[t._v(t._s(t._f("filterThousands")(t.balance)))])]),t._v(" "),a("div",[a("div",{staticClass:"amount"},[t._v(t._s(t.$t("message.bridge_7")))]),t._v(" "),a("el-input",{staticClass:"input-with-select",attrs:{type:"number"},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1),t._v(" "),a("el-row",[a("el-col",{staticClass:"cost-item",attrs:{span:12}},[a("span",{staticClass:"cost1"},[t._v(t._s(t.$t("message.bridge_8"))+" ≈ ")]),t._v(" "),a("span",{staticClass:"txt2"},[t._v(t._s(t.receive))]),a("img",{attrs:{src:t.curSelect&&t.curSelect.icon,alt:""}}),a("span",{staticClass:"txt2"},[t._v(t._s(t.curSelect&&t.curSelect.desc))])]),t._v(" "),a("el-col",{staticClass:"cost-item",attrs:{span:12}},[a("span",{staticClass:"cost2"},[t._v(t._s(t.toChain.name)+" Gas ≈ ")]),t._v(" "),a("span",{staticClass:"txt2"},[t._v(t._s(t.charge))]),a("img",{attrs:{src:t.curSelect&&t.curSelect.icon,alt:""}}),a("span",{staticClass:"txt2"},[t._v(t._s(t.curSelect&&t.curSelect.desc))])])],1),t._v(" "),a("div",{staticClass:"address"},[a("span",{staticClass:"address-txt1"},[t._v(t._s(t.$t("message.bridge_9"))+": ")]),a("span",{staticClass:"address-txt2"},[t._v(t._s(t.mateMaskToken))])]),t._v(" "),t.mateMaskToken?a("el-button",{staticClass:"transfer",attrs:{disabled:t.price<=0||t.receive<5||!t.curConstractChain.chainId},on:{click:t.transfer}},[t._v("\n      "+t._s(t.$t("message.bridge_16"))+"\n    ")]):a("div",{staticClass:"bridge-btn btn-connect",on:{click:function(e){return t.$router.push("/metamask")}}},[t._v("\n      "+t._s(t.$t("message.bridge_15"))+"\n    ")]),t._v(" "),a("div",{staticClass:"tips"},[a("div",{staticClass:"tips-title desc"},[t._v(t._s(t.$t("message.bridge_10")))]),t._v(" "),a("div",{staticClass:"desc"},[t._v("1. "+t._s(t.$t("message.bridge_11"))+" "+t._s(parseFloat((t.charge+5).toFixed(4)))+" "+t._s(t.curSelect&&t.curSelect.desc)+".")]),t._v(" "),a("div",{staticClass:"desc"},[t._v("2. "+t._s(t.$t("message.bridge_12"))+" "+t._s(t.balance)+" "+t._s(t.curSelect&&t.curSelect.desc)+".")]),t._v(" "),a("div",{staticClass:"desc"},[t._v("\n        3. "+t._s(t.$t("message.bridge_13"))+"\n      ")])])],1),t._v(" "),a("loading-pop",{attrs:{dataInfo:t.loadingData},model:{value:t.showLoading,callback:function(e){t.showLoading=e},expression:"showLoading"}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"exchange"},[e("i",{staticClass:"iconfont icon-shuangjiantou"})])}]};var u=a("VU/8")(l,d,!1,function(t){a("l5bM"),a("pfiK")},"data-v-614a69e2",null);e.default=u.exports},bu39:function(t,e,a){"use strict";var n=a("NYxO"),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},i={props:{value:{type:Boolean,default:!1},dataInfo:{type:Object,default:function(){}}},data:function(){return{dialogVisible:this.value}},mounted:function(){},watch:{value:function(t){this.dialogVisible=t},dataInfo:{handler:function(t,e){this.checkShowClose()},deep:!0}},computed:s({},Object(n.c)({mateMaskToken:function(t){return t.app.mateMaskToken}})),methods:{toScan:function(){window.open(this.dataInfo.scan.scanUrl+this.dataInfo.txId)},checkShowClose:function(){var t=this;this.$nextTick(function(){var e=document.getElementsByClassName("el-dialog__headerbtn")[0];1===t.dataInfo.type?e.style.display="none":e.style.display="block"})},getTitle:function(){return this.dataInfo.isBridge?2==this.dataInfo.type?this.$t("message.bridge_32"):this.$t("message.bridge_29"):this.$t("message.ido_18")},getDesc:function(){return this.dataInfo.isBridge?2==this.dataInfo.type?this.$t("message.bridge_33"):this.dataInfo.scan&&this.dataInfo.scan.name+" "+this.$t("message.bridge_30"):this.$t("message.ido_17")},getScanBtn:function(){return 2==this.dataInfo.type?this.$t("message.bridge_31")+this.dataInfo.scan.scan+this.$t("message.bridge_34"):""},handleClose:function(t){this.$emit("input",!1)}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-dialog",{attrs:{visible:t.dialogVisible,"append-to-body":"",center:"","lock-scroll":"","close-on-click-modal":!1,width:"467px",top:"40vh","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("div",{staticClass:"loading-pop-container"},[t.dataInfo&&1===t.dataInfo.type?n("img",{attrs:{src:a("3s4B"),alt:""}}):n("img",{attrs:{src:a("16RD"),alt:""}}),t._v(" "),n("div",{staticClass:"loading-title"},[t._v(t._s(t.getTitle()))]),t._v(" "),n("div",{staticClass:"loading-desc"},[t._v(t._s(t.getDesc()))]),t._v(" "),n("div",{staticClass:"loading-btn",on:{click:t.toScan}},[t._v(t._s(t.getScanBtn()))])])])],1)},staticRenderFns:[]};var c=a("VU/8")(i,r,!1,function(t){a("d81P")},"data-v-4ede7c30",null);e.a=c.exports},d81P:function(t,e){},l5bM:function(t,e){},pfiK:function(t,e){}});