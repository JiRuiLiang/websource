webpackJsonp([14],{"/tKO":function(t,e){},A1g3:function(t,e,n){"use strict";var s=n("Tnm7"),a=n("NYxO"),r=(n("ytf2"),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t});function i(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function s(a,r){try{var i=e[a](r),o=i.value}catch(t){return void n(t)}if(!i.done)return Promise.resolve(o).then(function(t){s("next",t)},function(t){s("throw",t)});t(o)}("next")})}}var o={props:{value:{type:Boolean,default:!1},detail:{type:Object,default:function(){}}},data:function(){return{dialogVisible:this.value,state:1}},watch:{value:function(t){var e=this;this.dialogVisible=t,t?setTimeout(function(){e.state=2},2400):setTimeout(function(){e.state=1},1e3)}},computed:r({},Object(a.c)({language:function(t){return t.app.language},mateMaskToken:function(t){return t.app.mateMaskToken},totalCurrencyDic:function(t){return t.app.totalCurrencyDic}})),mounted:function(){var t=this;return i(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()},methods:{getCashName:function(){var t=s.c+"&"+ethereum.chainId,e="",n=!0,a=!1,r=void 0;try{for(var i,o=this.totalCurrencyDic[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var c=i.value;if(c.sDictValue===t){e=c.sDictText;break}}}catch(t){a=!0,r=t}finally{try{!n&&o.return&&o.return()}finally{if(a)throw r}}return e},handleClose:function(t){this.$emit("input",!1)},onConfirm:function(){var t=this;return i(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$emit("CALLBACK");case 1:case"end":return e.stop()}},e,t)}))()}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-dialog",{attrs:{title:" ",visible:t.dialogVisible,"append-to-body":"",center:"",top:"20vh","lock-scroll":"",width:"600px","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[1===t.state?s("div",{staticClass:"info"},[s("img",{attrs:{src:n("+Qtw"),alt:""}})]):s("div",{staticClass:"detail"},[s("div",{staticClass:"desc"},[t._v(t._s(t.$t("message.ebox_11")))]),t._v(" "),s("img",{attrs:{src:t.detail.simgurl,alt:""}}),t._v(" "),1!==t.state?s("el-button",{staticClass:"btn3",on:{click:t.onConfirm}},[t._v("\n            "+t._s(t.$t("message.ebox_10"))+"\n        ")]):t._e()],1)])],1)},staticRenderFns:[]};var u=n("VU/8")(o,c,!1,function(t){n("INW1")},"data-v-7bcb83f0",null);e.a=u.exports},INW1:function(t,e){},"Sh/Q":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("NYxO"),a=n("A1g3"),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t};function i(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function s(a,r){try{var i=e[a](r),o=i.value}catch(t){return void n(t)}if(!i.done)return Promise.resolve(o).then(function(t){s("next",t)},function(t){s("throw",t)});t(o)}("next")})}}var o={components:{BwitterBuyEboxOpenResult:a.a},data:function(){return{activeName:"1",lockList:[],openList:[],showOpenBox:!1,openResult:{}}},computed:r({},Object(s.c)({metamaskToken:function(t){return t.app.mateMaskToken},chainObj:function(t){return t.app.chainObj},configData:function(t){return t.app.configData}})),mounted:function(){this.updateList()},methods:{toConstractAddress:function(t){var e=this.chainObj[ethereum.chainId];window.open(e.scanUrl+t.shash)},getTokenId:function(t){return"0x"+parseInt(t.stokenid).toString(16)},updateList:function(){var t=this;return i(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.metamaskToken){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$axios.get("/public/getNotOpenedByAddress?address="+t.metamaskToken);case 4:return t.lockList=e.sent,e.next=7,t.$axios.get("/public/getOpenedByAddress?address="+t.metamaskToken);case 7:t.openList=e.sent;case 8:case"end":return e.stop()}},e,t)}))()},openBox:function(t){var e=this;return i(regeneratorRuntime.mark(function n(){var s,a,r,i,o,c;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e.metamaskToken){n.next=2;break}return n.abrupt("return");case 2:return s=t.stokenid,n.next=5,e.$axios.get("/public/getByTokenId?id="+s);case 5:if(n.sent){n.next=9;break}return e.$message.error(e.$t("message.ebox_9")),n.abrupt("return");case 9:return n.next=11,web3.eth.personal.sign(s,e.metamaskToken,function(t,e){if(t)return console.log("签名报错"),!1});case 11:return a=n.sent,r=a.substring(2),i="0x"+r.substring(0,64),o="0x"+r.substring(64,128),c="0x"+r.substring(128,130),n.next=18,e.$axios.post("/public/openBox",{r:i,s:o,v:c,tokenId:s});case 18:e.openResult=n.sent,e.$nextTick(function(){e.showOpenBox=!0}),e.updateList();case 21:case"end":return n.stop()}},n,e)}))()}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"my-ebox"},[s("div",{staticClass:"ebox-title"},[t._v(t._s(t.$t("message.ebox_5")))]),t._v(" "),s("div",{staticClass:"line"}),t._v(" "),s("div",{staticClass:"back"},[s("div",{staticClass:"back-container",on:{click:function(e){return t.$router.back()}}},[s("span",[t._v("< "+t._s(t.$t("message.notice_22")))])])]),t._v(" "),s("div",{staticClass:"container"},[s("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:t.$t("message.ebox_6"),name:"1"}},[t.lockList.length?s("div",{staticClass:"list"},t._l(t.lockList,function(e,n){return s("div",{key:n,staticClass:"item",class:(n+1)%3?"addPadding":""},[s("img",{attrs:{src:"https://cdn.erax.io/user/20210914/550985ca2dace815c25a07963ebadf0b.png",alt:""}}),t._v(" "),s("div",{staticClass:"open",on:{click:function(n){return t.openBox(e)}}},[t._v(t._s(t.$t("message.ebox_8")))])])}),0):s("div",{staticClass:"erax-explore-empty"},[s("img",{attrs:{src:n("Q/Ms"),alt:""}}),t._v(" "),s("div",[t._v(t._s(t.$t("message.ebox_12")))])])]),t._v(" "),s("el-tab-pane",{attrs:{label:t.$t("message.ebox_7"),name:"2"}},[t.openList.length?s("div",{staticClass:"list1"},t._l(t.openList,function(e,n){return s("div",{key:n,staticClass:"item1",class:(n+1)%3?"addPadding1":""},[s("el-image",{attrs:{"preview-src-list":[e.simgurl],src:e.simgurl,alt:""}}),t._v(" "),s("div",{staticClass:"item1-desc",on:{click:function(n){return t.toConstractAddress(e)}}},[s("div",[t._v("TokenId:")]),s("div",{staticClass:"item1-link"},[t._v(t._s(t.getTokenId(e)))])]),t._v(" "),s("div",{staticClass:"item1-desc"},[s("div",[t._v(t._s(t.$t("message.assets_lang_87")))]),s("div",{staticClass:"address"},[t._v(t._s(t._f("filterCutStrMid")(e.saddress,24)))])])],1)}),0):s("div",{staticClass:"erax-explore-empty"},[s("img",{attrs:{src:n("Q/Ms"),alt:""}}),t._v(" "),s("div",[t._v(t._s(t.$t("message.ebox_12")))])])])],1)],1),t._v(" "),s("bwitter-buy-ebox-open-result",{attrs:{detail:t.openResult},on:{CALLBACK:function(e){t.showOpenBox=!1}},model:{value:t.showOpenBox,callback:function(e){t.showOpenBox=e},expression:"showOpenBox"}})],1)},staticRenderFns:[]};var u=n("VU/8")(o,c,!1,function(t){n("/tKO")},"data-v-4e75ce86",null);e.default=u.exports}});