webpackJsonp([17],{Xd8F:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("TQvf"),n=s.n(a),i=s("NYxO"),r={props:{dataInfo:{type:Object,default:function(){}},poolAbi:{type:String,default:function(){return""}}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reward-item"},[s("div",{staticClass:"title"},[s("img",{attrs:{src:t.dataInfo.icon,alt:""}}),t._v(" "),s("div",[t._v(t._s(t.dataInfo.name))])]),t._v(" "),s("el-row",{staticClass:"list"},[s("el-col",{attrs:{span:12}},[s("div",{staticClass:"txt"},[s("span",{staticClass:"txt1"},[t._v(t._s(t.$t("message.stake_31")))]),s("span",{staticClass:"txt2"},[t._v(t._s(t._f("filterThousands")(t.dataInfo.inviteNum)))])]),t._v(" "),s("div",{staticClass:"txt"},[s("span",{staticClass:"txt1"},[t._v(t._s(t.$t("message.stake_32")))]),s("span",{staticClass:"txt2"},[t._v(t._s(t._f("filterThousands")(t.dataInfo.activeNum)))])]),t._v(" "),s("div",{staticClass:"txt"},[s("span",{staticClass:"txt1"},[t._v(t._s(t.$t("message.stake_33")))]),s("span",{staticClass:"txt2"},[t._v(t._s(t.dataInfo.inviteRate)+"%")])])]),t._v(" "),s("el-col",{attrs:{span:12}},[s("div",{staticClass:"txt"},[s("span",{staticClass:"txt1"},[t._v(t._s(t.$t("message.stake_34")))]),s("span",{staticClass:"txt2"},[t._v(t._s(t._f("filterThousands")(t.dataInfo.InviterReward)))])]),t._v(" "),s("div",{staticClass:"txt"},[s("span",{staticClass:"txt1"},[t._v(t._s(t.$t("message.stake_35")))]),s("span",{staticClass:"txt2"},[t._v(t._s(t._f("filterThousands")(t.dataInfo.noGet)))])])])],1)],1)},staticRenderFns:[]};var o=s("VU/8")(r,c,!1,function(t){s("ZKCW")},"data-v-0d795c82",null).exports,l=s("Tnm7"),v=s("ytf2");function u(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,s){return function a(n,i){try{var r=e[n](i),c=r.value}catch(t){return void s(t)}if(!r.done)return Promise.resolve(c).then(function(t){a("next",t)},function(t){a("throw",t)});t(c)}("next")})}}var d={components:{RewardItem:o},data:function(){return{list:[],detailList:[],poolAbi:"",abi:"",address:"",isRequest:!1}},computed:(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a])}return t})({},Object(i.c)({mateMaskToken:function(t){return t.app.mateMaskToken}})),watch:{mateMaskToken:function(){this.initConfig()}},mounted:function(){var t=this;this.initConfig(),this.$nextTick(function(){t.initCopy()})},methods:{getUrl:function(){return window.location.origin+"/staking?address="+this.mateMaskToken},initCopy:function(){var t=this,e=document.getElementById("copyBtn"),s=new n.a(e);s.on("success",function(){t.$message.success(t.$t("message.lang_62"))}),s.on("error",function(t){})},initConfig:function(){var t=this;return u(regeneratorRuntime.mark(function e(){var s,a,n,i,r,c,o,u,d,_,f,p;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isRequest){e.next=2;break}return e.abrupt("return");case 2:return t.isRequest=!0,t.list=[],t.detailList=[],e.next=7,t.$api.GetSystemConfig({sAppId:"Erax-dev",sKey1:"ERC20"});case 7:return s=e.sent,Object(l.k)(s.vList),e.next=11,t.$api.GetSystemConfig({sAppId:"Erax-dev",sKey1:"Stake"});case 11:for(a=e.sent,n=a.vList,i=!0,r=!1,c=void 0,e.prev=16,o=n[Symbol.iterator]();!(i=(u=o.next()).done);i=!0)"dataAbi"===(d=u.value).sKey2?t.abi=d.sValue:"stakeAddress"===d.sKey2?t.address=d.sValue:"poorAbi"===d.sKey2&&(t.poolAbi=d.sValue);e.next=24;break;case 20:e.prev=20,e.t0=e.catch(16),r=!0,c=e.t0;case 24:e.prev=24,e.prev=25,!i&&o.return&&o.return();case 27:if(e.prev=27,!r){e.next=30;break}throw c;case 30:return e.finish(27);case 31:return e.finish(24);case 32:return Object(v.b)(),t.contract=new web3.eth.Contract(JSON.parse(t.abi),t.address),e.next=36,t.contract.methods.getPoolsLength().call();case 36:_=e.sent,f=0;case 38:if(!(f<_)){e.next=46;break}return e.next=41,t.contract.methods.getPoolInfo(f).call();case 41:p=e.sent,t.list.push(p);case 43:f++,e.next=38;break;case 46:t.updateList();case 47:case"end":return e.stop()}},e,t,[[16,20,24,32],[25,,27,31]])}))()},updateList:function(){var t=this;return u(regeneratorRuntime.mark(function e(){var s,a,n,i,r,c,o,v,u,d,_,f,p,m,k;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.mateMaskToken||!t.list.length){e.next=65;break}s=!0,a=!1,n=void 0,e.prev=4,i=t.list[Symbol.iterator]();case 6:if(s=(r=i.next()).done){e.next=51;break}return c=r.value,o=new web3.eth.Contract(JSON.parse(t.poolAbi),c[6]),v=new web3.eth.Contract(JSON.parse(l.s),c[3]),e.next=12,v.methods.decimals().call();case 12:return u=e.sent,(d={}).name=c[1],d.icon=l.f[c[3].toLowerCase()],e.next=18,o.methods.getAccountCountOfInviter(t.mateMaskToken).call();case 18:return d.inviteNum=e.sent,e.next=21,o.methods.getActiveAccountCountOfInviter(t.mateMaskToken).call();case 21:return d.activeNum=e.sent,e.next=24,o.methods.getInviterReward(t.mateMaskToken).call();case 24:return d.InviterReward=e.sent,e.next=27,o.methods.getInviteRate(t.mateMaskToken).call();case 27:return d.inviteRate=e.sent,e.next=30,o.methods.getAccountCountOfInviter(t.mateMaskToken).call();case 30:_=e.sent,f=0,p=0;case 33:if(!(p<_)){e.next=44;break}return e.next=36,o.methods.getAccountOfInviter(t.mateMaskToken,p).call();case 36:return m=e.sent,e.next=39,o.methods.earned(m).call();case 39:k=e.sent,f+=parseFloat(t.$util.fromWei(k,u,4));case 41:p++,e.next=33;break;case 44:f=f/100*parseFloat(d.inviteRate),d.InviterReward=parseFloat(t.$util.fromWei(d.InviterReward+"",u,4)).toFixed(4),d.noGet=f.toFixed(4),t.detailList.push(d);case 48:s=!0,e.next=6;break;case 51:e.next=57;break;case 53:e.prev=53,e.t0=e.catch(4),a=!0,n=e.t0;case 57:e.prev=57,e.prev=58,!s&&i.return&&i.return();case 60:if(e.prev=60,!a){e.next=63;break}throw n;case 63:return e.finish(60);case 64:return e.finish(57);case 65:t.isRequest=!1;case 66:case"end":return e.stop()}},e,t,[[4,53,57,65],[58,,60,64]])}))()}}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"invite-staking"},[s("div",{staticClass:"title"},[t._v(t._s(t.$t("message.stake_28")))]),t._v(" "),s("i",{staticClass:"iconfont icon-shuaxing",on:{click:function(e){return t.initConfig()}}}),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"main-container"},[s("div",{staticClass:"top"},[s("div",{staticClass:"tips"},[s("div",{staticClass:"txt11"},[t._v(t._s(t.$t("message.stake_37")))]),t._v(" "),s("div",{staticClass:"txt22"},[s("span",{staticClass:"level"},[t._v(t._s(t.$t("message.stake_38")))]),t._v(" "+t._s(t.$t("message.stake_44")))]),t._v(" "),s("div",{staticClass:"txt22"},[s("span",{staticClass:"level"},[t._v(t._s(t.$t("message.stake_39")))]),t._v(" "+t._s(t.$t("message.stake_45")))]),t._v(" "),s("div",{staticClass:"txt22"},[s("span",{staticClass:"level"},[t._v(t._s(t.$t("message.stake_40")))]),t._v(" "+t._s(t.$t("message.stake_46")))]),t._v(" "),s("div",{staticClass:"tipsl tipsl1"},[t._v(t._s(t.$t("message.stake_41")))]),t._v(" "),s("div",{staticClass:"tipsl"},[t._v(t._s(t.$t("message.stake_42")))]),t._v(" "),s("div",{staticClass:"tipsl"},[t._v(t._s(t.$t("message.stake_43")))])]),t._v(" "),s("div",{staticClass:"invite-url"},[s("div",{staticClass:"url"},[s("span",{staticClass:"desc"},[t._v(t._s(t.$t("message.stake_29"))+":")]),t._v(" "),s("span",{staticClass:"link"},[t._v(t._s(t.getUrl()))]),t._v(" "),s("i",{staticClass:"iconfont icon-fuzhi",attrs:{id:"copyBtn","data-clipboard-action":"copy","data-clipboard-text":t.getUrl()}})])])]),t._v(" "),s("div",{staticClass:"desc reward"},[t._v(t._s(t.$t("message.stake_30"))+":")]),t._v(" "),s("div",{staticClass:"bottom"},t._l(t.detailList,function(t,e){return s("reward-item",{key:e,attrs:{dataInfo:t}})}),1)])])])},staticRenderFns:[]};var f=s("VU/8")(d,_,!1,function(t){s("aWRN")},"data-v-58b0a930",null);e.default=f.exports},ZKCW:function(t,e){},aWRN:function(t,e){}});