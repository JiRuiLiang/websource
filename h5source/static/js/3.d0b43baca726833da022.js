webpackJsonp([3],{"7fuk":function(t,s,a){t.exports=a.p+"static/img/L1.6861b1a.png"},CWEc:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("Xxa5"),l=a.n(i),n=a("exGp"),e=a.n(n),_=a("Dd8w"),v=a.n(_),o=a("NYxO"),c={components:{},name:"Nft",data:function(){return{list:[],nameAry:[this.$t("message.lang_26"),this.$t("message.lang_27"),this.$t("message.lang_28"),this.$t("message.lang_29"),this.$t("message.lang_30"),this.$t("message.lang_31"),this.$t("message.lang_32"),this.$t("message.lang_33"),this.$t("message.lang_34")]}},computed:v()({},Object(o.b)({language:function(t){return t.app.language}})),watch:{language:function(t){this.nameAry=[this.$t("message.lang_26"),this.$t("message.lang_27"),this.$t("message.lang_28"),this.$t("message.lang_29"),this.$t("message.lang_30"),this.$t("message.lang_31"),this.$t("message.lang_32"),this.$t("message.lang_33"),this.$t("message.lang_34")]}},mounted:function(){this.getEraxNftLevel()},destroyed:function(){},methods:{getEraxNftLevel:function(){var t=this;return e()(l.a.mark(function s(){var a,i;return l.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.$api.GetEraxNftLevel();case 2:a=s.sent,i=a.vNftLevels,t.list=i;case 5:case"end":return s.stop()}},s,t)}))()},toDetail:function(t){t&&this.$router.push({name:"nftdetail",query:{level:t.iLevel}})},getColor:function(t){return t?t.iRemainder/t.iCount<=.5?"#CA0022":"#000000":""}}},g={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"nft"},[i("div",{staticClass:"bannerDiv"},[i("img",{staticClass:"banner",attrs:{src:a("P8ec"),alt:""}}),t._v(" "),i("div",{staticClass:"title"},[t._v("ERAC"+t._s(t.$t("message.lang_37")))]),t._v(" "),i("div",{staticClass:"line"})]),t._v(" "),i("div",{staticClass:"list"},[i("div",{attrs:{"data-aos":"zoom-in","data-aos-delay":"150"}},[i("div",{staticClass:"item",on:{click:function(s){return s.stopPropagation(),t.toDetail(t.list.length&&t.list[8])}}},[i("img",{attrs:{src:a("X1Ze"),alt:""}}),t._v(" "),i("div",{staticClass:"box"},[i("div",{staticClass:"desc"},[i("div",{staticClass:"name"},[t._v(t._s(t.nameAry[8]))]),t._v(" "),i("div",{staticClass:"num"},[i("span",[t._v(t._s(t.$t("message.lang_41"))+"：")]),i("span",{staticClass:"txt1"},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[8].iCount))+" ")])]),t._v(" "),i("div",{staticClass:"num"},[i("span",[t._v(t._s(t.$t("message.lang_42"))+"：")]),i("span",{staticClass:"txt2",style:{color:t.getColor(t.list[8])}},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[8].iRemainder))+"\n              ")])]),t._v(" "),i("div",{staticClass:"value"},[i("span",[t._v(t._s(t.$t("message.lang_38"))+"：")]),i("span",{staticClass:"txt1"},[t._v(t._s(t.list.length&&t.list[8].iValue))])]),t._v(" "),i("div",{staticClass:"coin"},[i("span",[t._v(t._s(t.$t("message.lang_39"))+"：")]),i("span",{staticClass:"txt1"},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[8].iMiningSpeed)))])])])])])]),t._v(" "),i("div",{staticClass:"sline"}),t._v(" "),i("div",{staticClass:"list_item2"},[i("div",{attrs:{"data-aos":"zoom-in","data-aos-delay":"300"}},[i("div",{staticClass:"item item1",on:{click:function(s){return s.stopPropagation(),t.toDetail(t.list.length&&t.list[7])}}},[i("img",{attrs:{src:a("RRpj"),alt:""}}),t._v(" "),i("div",{staticClass:"box box1"},[i("div",{staticClass:"desc"},[i("div",{staticClass:"name name1"},[t._v(t._s(t.nameAry[7]))]),t._v(" "),i("div",{staticClass:"num"},[i("span",[t._v(t._s(t.$t("message.lang_41"))+"：")]),i("span",{staticClass:"txt1"},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[7].iCount))+"\n                ")])]),t._v(" "),i("div",{staticClass:"num"},[i("span",[t._v(t._s(t.$t("message.lang_42"))+"：")]),i("span",{staticClass:"txt2",style:{color:t.getColor(t.list[7])}},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[7].iRemainder))+"\n                ")])]),t._v(" "),i("div",{staticClass:"value"},[i("span",[t._v(t._s(t.$t("message.lang_38"))+"：")]),i("span",{staticClass:"txt1"},[t._v(t._s(t.list.length&&t.list[7].iValue))])]),t._v(" "),i("div",{staticClass:"coin"},[i("span",[t._v(t._s(t.$t("message.lang_39"))+"：")]),i("span",{staticClass:"txt1"},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[7].iMiningSpeed)))])])])])])]),t._v(" "),i("div",{attrs:{"data-aos":"zoom-in","data-aos-delay":"300"}},[i("div",{staticClass:"item",on:{click:function(s){return s.stopPropagation(),t.toDetail(t.list.length&&t.list[6])}}},[i("img",{attrs:{src:a("sZha"),alt:""}}),t._v(" "),i("div",{staticClass:"box box2"},[i("div",{staticClass:"desc"},[i("div",{staticClass:"name name2"},[t._v(t._s(t.nameAry[6]))]),t._v(" "),i("div",{staticClass:"num"},[i("span",[t._v(t._s(t.$t("message.lang_41"))+"：")]),i("span",{staticClass:"txt1"},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[6].iCount))+"\n                ")])]),t._v(" "),i("div",{staticClass:"num"},[i("span",[t._v(t._s(t.$t("message.lang_42"))+"：")]),i("span",{staticClass:"txt2",style:{color:t.getColor(t.list[6])}},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[6].iRemainder))+"\n                ")])]),t._v(" "),i("div",{staticClass:"value"},[i("span",[t._v(t._s(t.$t("message.lang_38"))+"：")]),i("span",{staticClass:"txt1"},[t._v(t._s(t.list.length&&t.list[6].iValue))])]),t._v(" "),i("div",{staticClass:"coin"},[i("span",[t._v(t._s(t.$t("message.lang_39"))+"：")]),i("span",{staticClass:"txt1"},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[6].iMiningSpeed)))])])])])])])]),t._v(" "),i("div",{staticClass:"sline"}),t._v(" "),i("div",{staticClass:"list_item2"},[i("div",{attrs:{"data-aos":"zoom-in","data-aos-delay":"300"}},[i("div",{staticClass:"item item1",on:{click:function(s){return s.stopPropagation(),t.toDetail(t.list.length&&t.list[5])}}},[i("img",{attrs:{src:a("VwUt"),alt:""}}),t._v(" "),i("div",{staticClass:"box box1"},[i("div",{staticClass:"desc"},[i("div",{staticClass:"name name3"},[t._v(t._s(t.nameAry[5]))]),t._v(" "),i("div",{staticClass:"num"},[i("span",[t._v(t._s(t.$t("message.lang_41"))+"：")]),i("span",{staticClass:"txt1"},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[5].iCount))+"\n                ")])]),t._v(" "),i("div",{staticClass:"num"},[i("span",[t._v(t._s(t.$t("message.lang_42"))+"：")]),i("span",{staticClass:"txt2",style:{color:t.getColor(t.list[5])}},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[5].iRemainder))+"\n                ")])]),t._v(" "),i("div",{staticClass:"value"},[i("span",[t._v(t._s(t.$t("message.lang_38"))+"：")]),i("span",{staticClass:"txt1"},[t._v(t._s(t.list.length&&t.list[5].iValue))])]),t._v(" "),i("div",{staticClass:"coin"},[i("span",[t._v(t._s(t.$t("message.lang_39"))+"：")]),i("span",{staticClass:"txt1"},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[5].iMiningSpeed)))])])])])])]),t._v(" "),i("div",{attrs:{"data-aos":"zoom-in","data-aos-delay":"300"}},[i("div",{staticClass:"item",on:{click:function(s){return s.stopPropagation(),t.toDetail(t.list.length&&t.list[4])}}},[i("img",{attrs:{src:a("Idz8"),alt:""}}),t._v(" "),i("div",{staticClass:"box box2"},[i("div",{staticClass:"desc"},[i("div",{staticClass:"name name3"},[t._v(t._s(t.nameAry[4]))]),t._v(" "),i("div",{staticClass:"num"},[i("span",[t._v(t._s(t.$t("message.lang_41"))+"：")]),i("span",{staticClass:"txt1"},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[6].iCount))+"\n                ")])]),t._v(" "),i("div",{staticClass:"num"},[i("span",[t._v(t._s(t.$t("message.lang_42"))+"：")]),i("span",{staticClass:"txt2",style:{color:t.getColor(t.list[4])}},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[4].iRemainder))+"\n                ")])]),t._v(" "),i("div",{staticClass:"value"},[i("span",[t._v(t._s(t.$t("message.lang_38"))+"：")]),i("span",{staticClass:"txt1"},[t._v(t._s(t.list.length&&t.list[4].iValue))])]),t._v(" "),i("div",{staticClass:"coin"},[i("span",[t._v(t._s(t.$t("message.lang_39"))+"：")]),i("span",{staticClass:"txt1"},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[4].iMiningSpeed)))])])])])])])]),t._v(" "),i("div",{staticClass:"sline"}),t._v(" "),i("div",{staticClass:"list_item2"},[i("div",{attrs:{"data-aos":"zoom-in","data-aos-delay":"300"}},[i("div",{staticClass:"item item1",on:{click:function(s){return s.stopPropagation(),t.toDetail(t.list.length&&t.list[3])}}},[i("img",{attrs:{src:a("WKUq"),alt:""}}),t._v(" "),i("div",{staticClass:"box box1"},[i("div",{staticClass:"desc"},[i("div",{staticClass:"name name3"},[t._v(t._s(t.nameAry[3]))]),t._v(" "),i("div",{staticClass:"num"},[i("span",[t._v(t._s(t.$t("message.lang_41"))+"：")]),i("span",{staticClass:"txt1"},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[3].iCount))+"\n                ")])]),t._v(" "),i("div",{staticClass:"num"},[i("span",[t._v(t._s(t.$t("message.lang_42"))+"：")]),i("span",{staticClass:"txt2",style:{color:t.getColor(t.list[3])}},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[3].iRemainder))+"\n                ")])]),t._v(" "),i("div",{staticClass:"value"},[i("span",[t._v(t._s(t.$t("message.lang_38"))+"：")]),i("span",{staticClass:"txt1"},[t._v(t._s(t.list.length&&t.list[3].iValue))])]),t._v(" "),i("div",{staticClass:"coin"},[i("span",[t._v(t._s(t.$t("message.lang_39"))+"：")]),i("span",{staticClass:"txt1"},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[3].iMiningSpeed)))])])])])])]),t._v(" "),i("div",{attrs:{"data-aos":"zoom-in","data-aos-delay":"300"}},[i("div",{staticClass:"item",on:{click:function(s){return s.stopPropagation(),t.toDetail(t.list.length&&t.list[2])}}},[i("img",{attrs:{src:a("lLmW"),alt:""}}),t._v(" "),i("div",{staticClass:"box box2"},[i("div",{staticClass:"desc"},[i("div",{staticClass:"name name3"},[t._v(t._s(t.nameAry[2]))]),t._v(" "),i("div",{staticClass:"num"},[i("span",[t._v(t._s(t.$t("message.lang_41"))+"：")]),i("span",{staticClass:"txt1"},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[2].iCount))+"\n                ")])]),t._v(" "),i("div",{staticClass:"num"},[i("span",[t._v(t._s(t.$t("message.lang_42"))+"：")]),i("span",{staticClass:"txt2",style:{color:t.getColor(t.list[2])}},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[2].iRemainder))+"\n                ")])]),t._v(" "),i("div",{staticClass:"value"},[i("span",[t._v(t._s(t.$t("message.lang_38"))+"：")]),i("span",{staticClass:"txt1"},[t._v(t._s(t.list.length&&t.list[2].iValue))])]),t._v(" "),i("div",{staticClass:"coin"},[i("span",[t._v(t._s(t.$t("message.lang_39"))+"：")]),i("span",{staticClass:"txt1"},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[2].iMiningSpeed)))])])])])])])]),t._v(" "),i("div",{staticClass:"sline"}),t._v(" "),i("div",{staticClass:"list_item2"},[i("div",{attrs:{"data-aos":"zoom-in","data-aos-delay":"300"}},[i("div",{staticClass:"item item1",on:{click:function(s){return s.stopPropagation(),t.toDetail(t.list.length&&t.list[1])}}},[i("img",{attrs:{src:a("OEmZ"),alt:""}}),t._v(" "),i("div",{staticClass:"box box1"},[i("div",{staticClass:"desc"},[i("div",{staticClass:"name name3"},[t._v(t._s(t.nameAry[1]))]),t._v(" "),i("div",{staticClass:"num"},[i("span",[t._v(t._s(t.$t("message.lang_41"))+"：")]),i("span",{staticClass:"txt1"},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[3].iCount))+"\n                ")])]),t._v(" "),i("div",{staticClass:"num"},[i("span",[t._v(t._s(t.$t("message.lang_42"))+"：")]),i("span",{staticClass:"txt2",style:{color:t.getColor(t.list[1])}},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[1].iRemainder))+"\n                ")])]),t._v(" "),i("div",{staticClass:"value"},[i("span",[t._v(t._s(t.$t("message.lang_38"))+"：")]),i("span",{staticClass:"txt1"},[t._v(t._s(t.list.length&&t.list[1].iValue))])]),t._v(" "),i("div",{staticClass:"coin"},[i("span",[t._v(t._s(t.$t("message.lang_39"))+"：")]),i("span",{staticClass:"txt1"},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[1].iMiningSpeed)))])])])])])]),t._v(" "),i("div",{attrs:{"data-aos":"zoom-in","data-aos-delay":"300"}},[i("div",{staticClass:"item",on:{click:function(s){return s.stopPropagation(),t.toDetail(t.list.length&&t.list[0])}}},[i("img",{attrs:{src:a("7fuk"),alt:""}}),t._v(" "),i("div",{staticClass:"box box2"},[i("div",{staticClass:"desc"},[i("div",{staticClass:"name name3"},[t._v(t._s(t.nameAry[0]))]),t._v(" "),i("div",{staticClass:"num"},[i("span",[t._v(t._s(t.$t("message.lang_41"))+"：")]),i("span",{staticClass:"txt1"},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[0].iCount))+"\n                ")])]),t._v(" "),i("div",{staticClass:"num"},[i("span",[t._v(t._s(t.$t("message.lang_42"))+"：")]),i("span",{staticClass:"txt2",style:{color:t.getColor(t.list[0])}},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[0].iRemainder))+"\n                ")])]),t._v(" "),i("div",{staticClass:"value"},[i("span",[t._v(t._s(t.$t("message.lang_38"))+"：")]),i("span",{staticClass:"txt1"},[t._v(t._s(t.list.length&&t.list[0].iValue))])]),t._v(" "),i("div",{staticClass:"coin"},[i("span",[t._v(t._s(t.$t("message.lang_39"))+"：")]),i("span",{staticClass:"txt1"},[t._v(t._s(t.$util.thousandthFormat(t.list.length&&t.list[0].iMiningSpeed)))])])])])])])])]),t._v(" "),i("div",{staticClass:"tips"},[i("img",{staticClass:"bg",attrs:{src:a("I65L"),alt:""}}),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"title"},[t._v("ERAC "+t._s(t.$t("message.lang_46"))+"：")]),t._v(" "),i("div",{staticClass:"desc"},[i("div",{staticClass:"option"},[i("div",[t._v("1、")]),t._v(" "),i("div",[t._v(t._s(t.$t("message.lang_47")))])]),t._v(" "),i("div",{staticClass:"option"},[i("div",[t._v("2、")]),t._v(" "),i("div",[t._v(t._s(t.$t("message.lang_48")))])]),t._v(" "),i("div",{staticClass:"option"},[i("div",[t._v("3、")]),t._v(" "),i("div",[t._v(t._s(t.$t("message.lang_49")))])]),t._v(" "),i("div",{staticClass:"option"},[i("div",[t._v("4、")]),t._v(" "),i("div",[t._v(t._s(t.$t("message.lang_50")))])]),t._v(" "),i("div",{staticClass:"option"},[i("div",[t._v("5、")]),t._v(" "),i("div",[t._v(t._s(t.$t("message.lang_51")))])]),t._v(" "),i("div",{staticClass:"option"},[i("div",[t._v("6、")]),t._v(" "),i("div",[t._v(t._s(t.$t("message.lang_52")))])])])])])])},staticRenderFns:[]};var d=a("VU/8")(c,g,!1,function(t){a("sJKy")},"data-v-e631541c",null);s.default=d.exports},I65L:function(t,s,a){t.exports=a.p+"static/img/footer.ac5bdc2.png"},Idz8:function(t,s,a){t.exports=a.p+"static/img/L5.876ca73.png"},OEmZ:function(t,s,a){t.exports=a.p+"static/img/L2.a03c0db.png"},P8ec:function(t,s,a){t.exports=a.p+"static/img/header.84a3f42.png"},RRpj:function(t,s,a){t.exports=a.p+"static/img/L8.b8e3d15.png"},VwUt:function(t,s,a){t.exports=a.p+"static/img/L6.a081b41.png"},WKUq:function(t,s,a){t.exports=a.p+"static/img/L4.9a0ace4.png"},X1Ze:function(t,s,a){t.exports=a.p+"static/img/L9.0e3f236.png"},lLmW:function(t,s,a){t.exports=a.p+"static/img/L3.9320a49.png"},sJKy:function(t,s){},sZha:function(t,s,a){t.exports=a.p+"static/img/L7.d9fdd6a.png"}});