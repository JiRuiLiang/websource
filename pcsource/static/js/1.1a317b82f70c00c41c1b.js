webpackJsonp([1],{QaUj:function(e,t){},QjVY:function(e,t){},Rmja:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("TIfe");var s=a("Tnm7"),n=a("NYxO"),r=a("ytf2"),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e};function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function s(n,r){try{var i=t[n](r),o=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(o).then(function(e){s("next",e)},function(e){s("throw",e)});e(o)}("next")})}}var c={props:{value:{type:Boolean,default:!1},address:{type:String,default:function(){return""}},name:{type:String,default:function(){return""}}},data:function(){return{dialogVisible:this.value,balance:0,price:""}},watch:{value:function(e){var t=this;this.dialogVisible=e,this.price="",Object(r.b)(),this.$nextTick(o(regeneratorRuntime.mark(function e(){var a,n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.address),a=new web3.eth.Contract(JSON.parse(s.t),t.address),e.next=4,a.methods.balanceOf(t.mateMaskToken).call().catch(function(e){if(e)return n=0,!1});case 4:return n=e.sent,e.next=7,a.methods.decimals().call();case 7:r=e.sent,t.balance=t.$util.fromWei(n,r,4);case 9:case"end":return e.stop()}},e,t)})))},price:function(e){e&&(e=(e+"").match(/^\d*(\.?\d{0,4})/g)[0]||null,this.price=e,parseFloat(this.price)>parseFloat(this.balance)&&(this.price=this.balance))}},computed:i({},Object(n.c)({language:function(e){return e.app.language},mateMaskToken:function(e){return e.app.mateMaskToken}})),mounted:function(){var e=this;return o(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},t,e)}))()},methods:{getTitle:function(){return this.$t("message.stake_1")+this.name+this.$t("message.stake_2")},handleClose:function(e){this.$emit("input",!1)},onConfirm:function(){var e=this;return o(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(parseFloat(e.price)){t.next=2;break}return t.abrupt("return");case 2:e.$emit("STAKE",e.price);case 3:case"end":return t.stop()}},t,e)}))()}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{title:e.getTitle(),visible:e.dialogVisible,"append-to-body":"",center:"","lock-scroll":"",width:"500px","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"txt1"},[e._v(e._s(e.mateMaskToken))]),e._v(" "),a("div",{staticClass:"txt1"},[e._v(e._s(e.name)+" "+e._s(e.$t("message.stake_3"))+"："+e._s(e.balance))]),e._v(" "),a("div",{staticClass:"input-div"},[a("div",{staticClass:"desc"},[e._v(e._s(e.$t("message.stake_4"))+" "+e._s(e.name)+" "+e._s(e.$t("message.stake_5")))]),e._v(" "),a("el-input",{model:{value:e.price,callback:function(t){e.price=t},expression:"price"}})],1),e._v(" "),a("div",{staticClass:"tips"}),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticClass:"btn3",attrs:{disabled:e.price<=0},on:{click:e.onConfirm}},[e._v("\n              "+e._s(e.$t("message.stake_24"))+"\n          ")])],1)])],1)},staticRenderFns:[]};var u=a("VU/8")(c,l,!1,function(e){a("TTZC")},"data-v-027867fc",null).exports,d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e};var v={props:{value:{type:Boolean,default:!1},balanceOf:{type:Number,default:0},earned:{type:Number,default:0}},data:function(){return{dialogVisible:this.value,sSellOrder:null,sSellSig:null}},watch:{value:function(e){this.dialogVisible=e}},computed:d({},Object(n.c)({mateMaskToken:function(e){return e.app.mateMaskToken}}),{price:function(){return(parseFloat(this.balanceOf)+parseFloat(this.earned)).toFixed(4)}}),methods:{handleClose:function(e){this.$emit("input",!1)},onConfirm:function(){var e,t=this;return(e=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$emit("WITHDRAW",!0);case 1:case"end":return e.stop()}},e,t)}),function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function s(n,r){try{var i=t[n](r),o=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(o).then(function(e){s("next",e)},function(e){s("throw",e)});e(o)}("next")})})()}}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{title:e.$t("message.stake_6"),visible:e.dialogVisible,"append-to-body":"",center:"","lock-scroll":"",width:"500px","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"txt1"},[e._v(e._s(e.mateMaskToken))]),e._v(" "),a("div",{staticClass:"txt1"},[e._v(e._s(e.$t("message.stake_7"))+"："+e._s(e.balanceOf))]),e._v(" "),a("div",{staticClass:"txt1"},[e._v(e._s(e.$t("message.stake_8"))+"："+e._s(e.earned))]),e._v(" "),a("div",{staticClass:"input-div"},[a("div",{staticClass:"desc"},[e._v(e._s(e.$t("message.stake_9")))]),e._v(" "),a("el-input",{attrs:{disabled:!0},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}})],1),e._v(" "),a("div",{staticClass:"tips"},[e._v(e._s(e.$t("message.stake_10")))]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("div",{staticClass:"btn",on:{click:e.onConfirm}},[e._v("\n              "+e._s(e.$t("message.stake_23"))+"\n          ")])])])],1)},staticRenderFns:[]};var p=a("VU/8")(v,f,!1,function(e){a("wM4b")},"data-v-cc3fb2c2",null).exports,h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e};var m={props:{value:{type:Boolean,default:!1},balanceOf:{type:Number,default:0},earned:{type:Number,default:0}},data:function(){return{dialogVisible:this.value,sSellOrder:null,sSellSig:null}},watch:{value:function(e){this.dialogVisible=e}},computed:h({},Object(n.c)({mateMaskToken:function(e){return e.app.mateMaskToken}}),{price:function(){return parseFloat(this.earned).toFixed(4)}}),methods:{handleClose:function(e){this.$emit("input",!1)},onConfirm:function(){var e,t=this;return(e=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$emit("HARVEST",!0);case 1:case"end":return e.stop()}},e,t)}),function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function s(n,r){try{var i=t[n](r),o=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(o).then(function(e){s("next",e)},function(e){s("throw",e)});e(o)}("next")})})()}}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{title:e.$t("message.stake_49"),visible:e.dialogVisible,"append-to-body":"",center:"","lock-scroll":"",width:"500px","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"txt1"},[e._v(e._s(e.mateMaskToken))]),e._v(" "),a("div",{staticClass:"txt1"},[e._v(e._s(e.$t("message.stake_7"))+"："+e._s(e.balanceOf))]),e._v(" "),a("div",{staticClass:"txt1"},[e._v(e._s(e.$t("message.stake_8"))+"："+e._s(e.earned))]),e._v(" "),a("div",{staticClass:"input-div"},[a("div",{staticClass:"desc"},[e._v(e._s(e.$t("message.stake_52")))]),e._v(" "),a("el-input",{attrs:{disabled:!0},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}})],1),e._v(" "),a("div",{staticClass:"tips"},[e._v(e._s(e.$t("message.stake_53")))]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("div",{staticClass:"btn",on:{click:e.onConfirm}},[e._v("\n              "+e._s(e.$t("message.stake_50"))+"\n          ")])])])],1)},staticRenderFns:[]};var g=a("VU/8")(m,_,!1,function(e){a("QjVY")},"data-v-029d1488",null).exports,b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e};function k(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function s(n,r){try{var i=t[n](r),o=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(o).then(function(e){s("next",e)},function(e){s("throw",e)});e(o)}("next")})}}var w={components:{stake:u,WithDraw:p,Harvest:g},props:{dataInfo:{type:Array,default:function(){return[]}},poolAbi:{type:String,default:function(){return""}},haveHarvest:{type:Boolean,default:function(){return!1}}},data:function(){return{showWithDraw:!1,showHarvest:!1,showStake:!1,isRequest:!1,time:0,timeId:null,address:"",abi:"",contract:null,rewardRate:0,totalSupply:0,balanceOf:0,earned:0,realRate:0,inviteAddress:"",isStart:!0,isInviteError:!1}},watch:{mateMaskToken:function(){this.initData()}},computed:b({},Object(n.c)({mateMaskToken:function(e){return e.app.mateMaskToken},chainObj:function(e){return e.app.chainObj},cashDic:function(e){return e.app.cashDic},sBTC:function(e){return e.app.BTCUSDT},sETH:function(e){return e.app.ETHUSDT},sBRD:function(e){return e.app.BRDBTC},sNEAR:function(e){return e.app.NERAUSDT},BNBUSDT:function(e){return e.app.BNBUSDT}}),{canWithDraw:function(){return!(this.earned+this.balanceOf)},canHarvest:function(){return!this.earned},curChain:function(){return"undefined"!=typeof web3&&this.chainObj&&this.chainObj[web3.currentProvider.chainId]?this.chainObj[web3.currentProvider.chainId]:{}}}),mounted:function(){if(this.inviteAddress=this.$route.params.address,this.inviteAddress)try{this.inviteAddress=window.atob(this.inviteAddress),-1===this.inviteAddress.indexOf("NE")?(this.inviteAddress=s.c,this.$message.error(this.$t("message.invite_err")),this.isInviteError=!0):this.inviteAddress=this.inviteAddress.substring(2)}catch(e){this.$message.error(this.$t("message.invite_err")),this.isInviteError=!0}else this.inviteAddress=s.c;var e=(new Date).getTime();this.isStart=1e3*parseInt(this.dataInfo[4])<e,window.addEventListener("START-TIME",this.onInit)},beforeDestroy:function(){window.removeEventListener("START-TIME",this.onInit)},methods:{getDoll:function(){if(!this.dataInfo.length)return 0;if(!this.sNEAR)return 0;var e="";switch(this.dataInfo.length&&(e=this.dataInfo[0]),e){case"ETH":case"WETH":return(parseFloat(this.sETH.c)*parseFloat(this.totalSupply)).toFixed(2);case"BRD":return(parseFloat(this.sBRD.c)*parseFloat(this.sBTC.c)*parseFloat(this.totalSupply)).toFixed(2);case"NERA":case"ERAT":return(parseFloat(this.sNEAR.c)*parseFloat(this.totalSupply)).toFixed(2);default:return""}},getOpenAndEndTime:function(){return this.$util.formatTimeToStr(1e3*parseInt(this.dataInfo[4]),"yyyy-MM-dd hh:mm")+" - "+this.$util.formatTimeToStr(1e3*parseInt(this.dataInfo[5]),"yyyy-MM-dd hh:mm")},getOpenTime:function(){return this.$util.formatTimeBySecond(1e3*parseInt(this.dataInfo[4]))},getTimeLeft:function(){return this.$t("message.stake_25")+(60-this.time)+this.$t("message.stake_26")},onStake:function(){this.isStart&&(this.isInviteError?this.$message.error(this.$t("message.invite_err")):this.showStake=!0)},onInit:function(){this.contract=new web3.eth.Contract(JSON.parse(this.poolAbi),this.dataInfo[6]),this.refresh()},getIcon:function(e){return this.dataInfo&&this.dataInfo.length?s.f[this.dataInfo[e].toLowerCase()]:""},withDraw:function(){var e=this;return k(regeneratorRuntime.mark(function t(){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.$event.$emit("SHOW-LOADING",!0),t.next=3,web3.eth.getGasPrice();case 3:return a=t.sent,console.log("推荐gas费==="+a),t.next=7,e.contract.methods.withdrawAndGetReward().send({from:e.mateMaskToken,gasPrice:a},function(t,a){if(t)return e.$message.error(e.$t("message.stake_11")),e.$event.$emit("SHOW-LOADING",!1),!1;e.showWithDraw=!1,e.$message(e.$t("message.stake_12"))});case 7:e.$message.success(e.$t("message.stake_13")),e.refresh(),e.$event.$emit("SHOW-LOADING",!1);case 10:case"end":return t.stop()}},t,e)}))()},harvest:function(){var e=this;return k(regeneratorRuntime.mark(function t(){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.$event.$emit("SHOW-LOADING",!0),t.next=3,web3.eth.getGasPrice();case 3:return a=t.sent,console.log("推荐gas费==="+a),t.next=7,e.contract.methods.getReward().send({from:e.mateMaskToken,gasPrice:a},function(t,a){if(t)return e.$message.error(e.$t("message.stake_54")),e.$event.$emit("SHOW-LOADING",!1),!1;e.showHarvest=!1,e.$message(e.$t("message.stake_55"))});case 7:e.$message.success(e.$t("message.stake_56")),e.refresh(),e.$event.$emit("SHOW-LOADING",!1);case 10:case"end":return t.stop()}},t,e)}))()},stake:function(e){var t=this;return k(regeneratorRuntime.mark(function a(){var n,r,i,o;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.$event.$emit("SHOW-LOADING",!0),a.next=3,web3.eth.getGasPrice();case 3:return n=a.sent,console.log("推荐gas费==="+n),r=new web3.eth.Contract(JSON.parse(s.t),t.dataInfo[2]),a.next=8,r.methods.decimals().call();case 8:return i=a.sent,e=t.$util.toWei(e,i),a.next=12,r.methods.allowance(t.mateMaskToken,t.dataInfo[6]).call();case 12:if("0"!=(o=a.sent)){a.next=20;break}return console.log("跳转ERC20授权!"),a.next=17,r.methods.approve(t.dataInfo[6],"1000000000000000000000000000000000000000000").send({from:t.mateMaskToken,gasPrice:n},function(e,a){if(e)return Vue.prototype.$event.$emit("SHOW-LOADING",!1),console.log("授权报错"),Vue.prototype.$message.error(i18n.t("message.assets_lang_90")),t.$event.$emit("SHOW-LOADING",!1),!1});case 17:return a.next=19,r.methods.allowance(t.mateMaskToken,t.dataInfo[6]).call();case 19:o=a.sent;case 20:if("0"!=o){a.next=26;break}return console.log("ERC20未授权!"),t.$event.$emit("SHOW-LOADING",!1),a.abrupt("return",!1);case 26:console.log("ERC20已授权!");case 27:return a.next=30,t.contract.methods.stake(e,t.inviteAddress).send({from:t.mateMaskToken,gasPrice:n},function(e,a){if(e)return t.$message.error(t.$t("message.stake_14")),t.$event.$emit("SHOW-LOADING",!1),!1;t.showStake=!1,t.$message(t.$t("message.stake_15"))});case 30:t.$message.success(t.$t("message.stake_16")),t.refresh(),t.$event.$emit("SHOW-LOADING",!1);case 33:case"end":return a.stop()}},a,t)}))()},startTime:function(){var e=this;clearInterval(this.timeId),this.timeId=setInterval(function(){e.time++,e.time>=60&&(clearInterval(e.timeId),e.refresh())},1e3)},initData:function(){var e=this;return k(regeneratorRuntime.mark(function t(){var a,n,r,i,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.contract&&e.dataInfo&&e.dataInfo.length){t.next=2;break}return t.abrupt("return");case 2:return a=new web3.eth.Contract(JSON.parse(s.t),e.dataInfo[2]),n=new web3.eth.Contract(JSON.parse(s.t),e.dataInfo[3]),t.next=6,a.methods.decimals().call();case 6:return r=t.sent,t.next=9,n.methods.decimals().call();case 9:if(i=t.sent,!e.mateMaskToken){t.next=19;break}return t.next=13,e.contract.methods.balanceOf(e.mateMaskToken).call();case 13:return e.balanceOf=t.sent,e.balanceOf=parseFloat(e.$util.fromWei(e.balanceOf,r,4)),t.next=17,e.contract.methods.earned(e.mateMaskToken).call();case 17:e.earned=t.sent,e.earned=parseFloat(parseFloat(e.$util.fromWei(e.earned,i,4)).toFixed(4));case 19:return t.next=21,e.contract.methods.getRewardRate().call();case 21:return e.rewardRate=t.sent,e.rewardRate=parseFloat(e.$util.fromWei(e.rewardRate,i,4)),t.next=25,e.contract.methods.totalSupply().call();case 25:return e.totalSupply=t.sent,e.totalSupply=parseFloat(parseFloat(e.$util.fromWei(e.totalSupply,r,4)).toFixed(4)),o=e.totalSupply?e.totalSupply:1,e.realRate=(31536e5*e.rewardRate/o).toFixed(2),t.abrupt("return",!0);case 30:case"end":return t.stop()}},t,e)}))()},refresh:function(){var e=this;return k(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isRequest){t.next=2;break}return t.abrupt("return");case 2:return e.isRequest=!0,t.next=5,e.initData();case 5:e.isRequest=!1,e.time=0,e.startTime();case 8:case"end":return t.stop()}},t,e)}))()}}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"item-div"},[a("div",{staticClass:"pool"},[e._v("Pool #"+e._s(e.dataInfo&&e.dataInfo[7]))]),e._v(" "),a("el-tooltip",{attrs:{effect:"light","visible-arrow":!1,content:e.getTimeLeft(),placement:"bottom-end"}},[a("div",{staticClass:"time-circle",on:{click:e.refresh}},[a("el-progress",{attrs:{type:"circle","stroke-width":2,"show-text":!1,width:20,percentage:100*e.time/60}})],1)])],1),e._v(" "),a("el-row",{staticClass:"top"},[a("el-col",{staticClass:"B2B-time",attrs:{span:8}},[a("div",{staticClass:"coin-container"},[a("div",{staticClass:"coin"},[a("img",{attrs:{src:e.getIcon(2),alt:""}}),e._v(" "),a("div",[e._v(e._s(e.dataInfo[0]))])]),e._v(" "),a("div",{staticClass:"line"}),e._v(" "),a("div",{staticClass:"coin"},[a("img",{attrs:{src:e.getIcon(3),alt:""}}),e._v(" "),a("div",[e._v(e._s(e.dataInfo[1]))])])]),e._v(" "),a("div",{staticClass:"start-time"},[e._v("\n          "+e._s(e.getOpenAndEndTime())+"\n        ")])]),e._v(" "),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"txt1"},[e._v(e._s(e.$t("message.stake_8")))]),e._v(" "),a("div",{staticClass:"txt2"},[e._v(e._s(e.earned))])]),e._v(" "),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"txt1"},[e._v(e._s(e.$t("message.stake_7")))]),e._v(" "),a("div",{staticClass:"txt2"},[e._v(e._s(e.balanceOf))])]),e._v(" "),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"txt1"},[e._v(e._s(e.$t("message.stake_19")))]),e._v(" "),a("div",{staticClass:"txt2"},[e._v(e._s(e.realRate)+" %")])]),e._v(" "),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"txt1"},[e._v(e._s(e.$t("message.stake_20")))]),e._v(" "),a("div",{staticClass:"txt2"},[e._v(e._s(e.totalSupply))]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:parseFloat(e.getDoll()),expression:"parseFloat(getDoll())"}],staticClass:"txt4"},[e._v("($"+e._s(e.getDoll())+")")])])],1),e._v(" "),a("div",{staticClass:"botton"},[a("el-row",{attrs:{type:"flex"}},[a("div",{staticClass:"item"},[a("div",{staticClass:"item-container"},[a("div",{staticClass:"item-title"},[e._v(e._s(e.$t("message.stake_17"))+" "+e._s(e.dataInfo[1]))]),e._v(" "),a("div",{staticClass:"txt-btn"},[a("div",{staticClass:"txt2"},[e._v("\n                "+e._s(parseFloat(e.earned.toFixed(4)))+"\n              ")]),e._v(" "),a("div",{staticClass:"btn-list"},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.haveHarvest,expression:"haveHarvest"}],staticClass:"btn4",attrs:{disabled:e.canHarvest},on:{click:function(t){e.showHarvest=!0}}},[e._v("\n                  "+e._s(e.$t("message.stake_50"))+"\n                ")]),e._v(" "),a("el-button",{staticClass:"btn3",attrs:{disabled:e.canWithDraw},on:{click:function(t){e.showWithDraw=!0}}},[e._v("\n                  "+e._s(e.$t("message.stake_23"))+"\n                ")])],1)])])]),e._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"item-container"},[a("div",{staticClass:"item-title"},[e._v(e._s(e.$t("message.stake_21")))]),e._v(" "),e.mateMaskToken?a("div",{staticClass:"txt-btn"},[a("div",{staticClass:"txt3 line1hidden"},[e._v("\n                "+e._s(e.mateMaskToken)+"\n              ")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isStart,expression:"isStart"}],staticClass:"btn btn-stake",on:{click:e.onStake}},[e._v(e._s(e.$t("message.stake_24")))]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isStart,expression:"!isStart"}],staticClass:"open-time"},[e._v(e._s(e.$t("message.stake_36"))+" "+e._s(e.getOpenTime()))])]):a("div",{staticClass:"btn btn-connect",on:{click:function(t){return e.$router.push("/metamask")}}},[e._v("\n              "+e._s(e.$t("message.stake_22"))+"\n            ")])])])])],1)],1),e._v(" "),a("with-draw",{attrs:{earned:e.earned,balanceOf:e.balanceOf},on:{WITHDRAW:e.withDraw},model:{value:e.showWithDraw,callback:function(t){e.showWithDraw=t},expression:"showWithDraw"}}),e._v(" "),a("stake",{attrs:{address:e.dataInfo[2],name:e.dataInfo[0]},on:{STAKE:e.stake},model:{value:e.showStake,callback:function(t){e.showStake=t},expression:"showStake"}}),e._v(" "),a("harvest",{attrs:{earned:e.earned,balanceOf:e.balanceOf},on:{HARVEST:e.harvest},model:{value:e.showHarvest,callback:function(t){e.showHarvest=t},expression:"showHarvest"}})],1)},staticRenderFns:[]};function C(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function $(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function s(n,r){try{var i=t[n](r),o=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(o).then(function(e){s("next",e)},function(e){s("throw",e)});e(o)}("next")})}}var O={data:function(){return{showWithDraw:!1,showStake:!1,isRequest:!1,address:"",address2:"",abi:"",poolAbi:"",poolAbi2:"",contract:null,contract2:null,list:[],list2:[],noList:!1}},watch:{mateMaskToken:function(){}},components:{StakeItem:a("VU/8")(w,x,!1,function(e){a("sWKC")},"data-v-3757d566",null).exports},computed:(Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e})({},Object(n.c)({mateMaskToken:function(e){return e.app.mateMaskToken},chainObj:function(e){return e.app.chainObj}}),{curChain:function(){return"undefined"!=typeof web3&&this.chainObj&&this.chainObj[web3.currentProvider.chainId]?this.chainObj[web3.currentProvider.chainId]:{}},getChainId:function(){return"undefined"!=typeof web3?this.$t("message.stake_48")+web3.currentProvider.chainId+")":{}}}),mounted:function(){var e=this;return $(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.initConfig();case 2:case"end":return t.stop()}},t,e)}))()},beforeDestroy:function(){clearInterval(this.timeId)},methods:{toInvite:function(){var e=this;return $(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.mateMaskToken){t.next=3;break}return e.$router.push("/metamask"),t.abrupt("return");case 3:e.$router.push("/invite-staking");case 4:case"end":return t.stop()}},t,e)}))()},initConfig:function(){var e=this;return $(regeneratorRuntime.mark(function t(){var a,n,i,o,c,l,u,d,v,f,p,h,m,_,g,b,k,w;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.$util.getChainKey(),t.next=3,e.$api.GetSystemConfig({sAppId:a,sKey1:"ERC20"});case 3:return n=t.sent,Object(s.l)(n.vList),t.next=7,e.$api.GetSystemConfig({sAppId:a,sKey1:"Stake"});case 7:for(i=t.sent,o=i.vList,c=!0,l=!1,u=void 0,t.prev=12,d=o[Symbol.iterator]();!(c=(v=d.next()).done);c=!0)"dataAbi"===(f=v.value).sKey2?e.abi=f.sValue:"stakeAddress"===f.sKey2?e.address=f.sValue:"poorAbi"===f.sKey2?e.poolAbi=f.sValue:"stakeAddress2"===f.sKey2?e.address2=f.sValue:"poorAbi2"===f.sKey2&&(e.poolAbi2=f.sValue);t.next=20;break;case 16:t.prev=16,t.t0=t.catch(12),l=!0,u=t.t0;case 20:t.prev=20,t.prev=21,!c&&d.return&&d.return();case 23:if(t.prev=23,!l){t.next=26;break}throw u;case 26:return t.finish(23);case 27:return t.finish(20);case 28:if(Object(r.b)(),p=[],h=[],m=0,_=0,e.abi){t.next=36;break}return e.noList=!0,t.abrupt("return");case 36:return e.contract=new web3.eth.Contract(JSON.parse(e.abi),e.address),t.next=39,e.contract.methods.getPoolsLength().call();case 39:m=t.sent,m=parseInt(m),g=0;case 42:if(!(g<m)){t.next=51;break}return t.next=45,e.contract.methods.getPoolInfo(g).call();case 45:b=t.sent,b=[].concat(C(b),[g+1]),p.push(b);case 48:g++,t.next=42;break;case 51:return t.next=53,e.disposalRealList(p);case 53:if(e.list=t.sent,!e.address2){t.next=73;break}return e.contract2=new web3.eth.Contract(JSON.parse(e.abi),e.address2),t.next=58,e.contract2.methods.getPoolsLength().call();case 58:_=t.sent,_=parseInt(_),k=0;case 61:if(!(k<_)){t.next=70;break}return t.next=64,e.contract2.methods.getPoolInfo(k).call();case 64:w=t.sent,w=[].concat(C(w),[k+1+m]),h.push(w);case 67:k++,t.next=61;break;case 70:return t.next=72,e.disposalRealList(h);case 72:e.list2=t.sent;case 73:e.noList=!(parseFloat(m)+parseFloat(_)),e.$nextTick(function(){var e=new CustomEvent("START-TIME");window.dispatchEvent(e)});case 75:case"end":return t.stop()}},t,e,[[12,16,20,28],[21,,23,27]])}))()},disposalRealList:function(e){var t=this;return $(regeneratorRuntime.mark(function a(){var s,n,r,i,o,c,l,u,d,v,f,p,h,m,_,g,b,k;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:for(s=(new Date).getTime()/1e3,n=[],r=[],i=!0,o=!1,c=void 0,a.prev=6,l=e[Symbol.iterator]();!(i=(u=l.next()).done);i=!0)d=u.value,parseFloat(d[5])<=s?r.push(d):n.push(d);a.next=14;break;case 10:a.prev=10,a.t0=a.catch(6),o=!0,c=a.t0;case 14:a.prev=14,a.prev=15,!i&&l.return&&l.return();case 17:if(a.prev=17,!o){a.next=20;break}throw c;case 20:return a.finish(17);case 21:return a.finish(14);case 22:n.sort(function(e,t){return s<parseFloat(e[4])?1e17:parseFloat(t[4])-parseFloat(e[4])}),r.sort(function(e,t){return parseFloat(t[4])-parseFloat(e[4])}),v=[],f=!0,p=!1,h=void 0,a.prev=28,m=r[Symbol.iterator]();case 30:if(f=(_=m.next()).done){a.next=40;break}return g=_.value,b=new web3.eth.Contract(JSON.parse(t.poolAbi),g[6]),a.next=35,b.methods.totalSupply().call();case 35:k=a.sent,parseFloat(k)&&v.push(g);case 37:f=!0,a.next=30;break;case 40:a.next=46;break;case 42:a.prev=42,a.t1=a.catch(28),p=!0,h=a.t1;case 46:a.prev=46,a.prev=47,!f&&m.return&&m.return();case 49:if(a.prev=49,!p){a.next=52;break}throw h;case 52:return a.finish(49);case 53:return a.finish(46);case 54:return a.abrupt("return",[].concat(n,v));case 55:case"end":return a.stop()}},a,t,[[6,10,14,22],[15,,17,21],[28,42,46,54],[47,,49,53]])}))()}}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"staking"},[a("div",{staticClass:"title"},[e._v(e._s(e.$t("message.stake_18")))]),e._v(" "),a("div",{staticClass:"header"},[e.curChain.chainId?a("div",{staticClass:"chain-info"},[a("img",{attrs:{src:e.curChain.icon,alt:""}}),e._v(" "),a("div",{staticClass:"name"},[e._v(e._s(e.curChain.name))])]):a("div",[e._v("\n      "+e._s(e.getChainId)+"\n    ")]),e._v(" "),a("div",{staticClass:"invite-btn",on:{click:e.toInvite}},[a("i",{staticClass:"iconfont icon-yaoqing1"}),e._v("\n      "+e._s(e.$t("message.stake_27"))+"...\n    ")])]),e._v(" "),e._l(e.list2,function(t,s){return a("stake-item",{key:s+e.list.length,attrs:{haveHarvest:!0,dataInfo:t,poolAbi:e.poolAbi2}})}),e._v(" "),e._l(e.list,function(t,s){return a("stake-item",{key:s,attrs:{haveHarvest:!1,dataInfo:t,poolAbi:e.poolAbi}})}),e._v(" "),e.noList?a("div",{staticClass:"staking-empty"},[a("i",{staticClass:"el-icon-document"}),e._v(" "),a("div",{staticClass:"error-tips"},[e._v(e._s(e.$t("message.stake_47")))])]):e._e()],2)},staticRenderFns:[]};var I=a("VU/8")(O,y,!1,function(e){a("bgS/"),a("QaUj")},"data-v-1a825f44",null);t.default=I.exports},TTZC:function(e,t){},"bgS/":function(e,t){},sWKC:function(e,t){},wM4b:function(e,t){}});