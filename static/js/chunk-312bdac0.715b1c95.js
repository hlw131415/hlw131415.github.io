(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-312bdac0"],{4196:function(e,t,n){},"80b7":function(e,t,n){"use strict";n("4196")},d791:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return m})),n.d(t,"f",(function(){return w})),n.d(t,"e",(function(){return u}));var a=n("b775"),i=n("4328"),s=n.n(i),o=n("ed08"),c=n("01ea");function l(e){return Object(a["a"])({url:"/client/package/page",method:"get",params:e})}function d(e){return Object(a["a"])({url:"/client/package/activate",method:"put",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:s.a.stringify(e)})}function r(e){return Object(a["a"])({url:"/client/package/upgrade/".concat(e),method:"get",responseType:"blob"})}function m(e){return Object(o["b"])(c["a"],"/client/package/downClient/".concat(e))}function w(e){return Object(a["a"])({url:"/client/package/upload",method:"post",headers:{"Content-Type":"multipart/form-data"},data:e})}function u(){return Object(a["a"])({url:"/client/package/new/name",method:"get"})}},eb16:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mac_win"},[e._m(0),e._m(1),n("div",{staticClass:"downlist"},[e._m(2),n("div",{staticClass:"divflex"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.winname,expression:"winname"}],staticClass:"divflexitem"},[n("img",{attrs:{src:"/static/img/windows.png"}}),n("div",[n("p",{staticClass:"p1"},[e._v(e._s(e.winname)+" V"+e._s(e.winreleass)+" "+e._s(e.winupdateTime)+"更新")]),n("p",{staticClass:"p2"},[e._v("支持: Windows7、Windows8、Windows10")])]),n("div",{staticClass:"btndown",on:{click:e.getWin}},[e._v("下载")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.macname,expression:"macname"}],staticClass:"divflexitem"},[n("img",{attrs:{src:"/static/img/apple.png"}}),n("div",[n("p",{staticClass:"p1"},[e._v(e._s(e.macname)+" V"+e._s(e.macreleass)+" "+e._s(e.macupdateTime)+"更新")]),n("p",{staticClass:"p2"},[e._v("支持: macOSX 10.10及以上版本")])]),n("div",{staticClass:"btndown",on:{click:e.getMac}},[e._v("下载")])])]),e._m(3),n("div",{staticClass:"tybdown"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.winofflinename,expression:"winofflinename"}]},[n("p",{staticClass:"p3"},[e._v(e._s(e.winofflinename)+" V"+e._s(e.winofflinenamereleass)+" "+e._s(e.winofflinenameupdateTime)+"更新")]),n("p",{staticClass:"p4"},[e._v("支持：Windows7、Windows8、Windows10 注意：需要联系商务代表提供离线数据包")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.winofflinename,expression:"winofflinename"}],staticClass:"clcdown"},[n("a",{on:{click:e.getWinOffLine}},[e._v("点击下载")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.winremotename,expression:"winremotename"}]},[n("p",{staticClass:"p3"},[e._v(e._s(e.winremotename)+" V"+e._s(e.winremotereleass)+" "+e._s(e.winremoteupdateTime)+"更新")]),n("p",{staticClass:"p4"},[e._v("支持：Windows7、Windows8、Windows10")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.winremotename,expression:"winremotename"}],staticClass:"clcdown"},[n("a",{on:{click:e.getWinRemote}},[e._v("点击下载")])])])])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"head"},[n("img",{attrs:{src:"/static/img/logo.png"}}),n("p",[e._v("BIMGO设计云")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bgimg"},[n("div",{staticClass:"text"},[n("p",[e._v("BIMGO设计云客户端")]),n("p",[e._v(" BIMGO设计云工作站帮助企业将数字化业务核心生产资料集中到企业云端数字资产集中管理、安全可控 "),n("br"),e._v("助力企业业务升级、降本增效，驱动数字资产产生更大价值 ")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{staticClass:"cro"}),n("span",{staticClass:"txt"},[e._v("客户端下载")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{staticClass:"cro"}),n("span",{staticClass:"txt"},[e._v("体验版及相关下载")])])}],s=n("1da1"),o=(n("96cf"),n("d3b7"),n("159b"),n("fb6a"),n("d791")),c=n("b775");function l(){return Object(c["a"])({url:"/client/package/clientList",method:"get"})}var d={data:function(){return{winname:"",winreleass:"",winupdateTime:"",winId:"",macname:"",macreleass:"",macupdateTime:"",macId:"",winofflinename:"",winofflinenamereleass:"",winofflinenameupdateTime:"",winofflineId:"",winremotename:"",winremotereleass:"",winremoteupdateTime:"",winremoteId:""}},created:function(){this.downloadClientCenter()},methods:{downloadDefaultEXE:function(e){console.log(e);var t=e||window._URL_.WINDOW_EXE_PATH,n=document.createElement("a");n.style.display="none",n.href=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)},downloadClientCenter:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=[],t.next=3,l();case 3:a=t.sent,a.data.forEach((function(e){n.push(e)})),n.forEach((function(t){switch(t.clientVersionCode){case"Windows":e.winname=t.clientVersionName,e.winreleass=t.releases,e.winupdateTime=t.updateTime.slice(0,10),e.winId=t.id;break;case"Mac":e.macname=t.clientVersionName,e.macreleass=t.releases,e.macupdateTime=t.updateTime.slice(0,10),e.macId=t.id;break;case"Windows_Offline":e.winofflinename=t.clientVersionName,e.winofflinenamereleass=t.releases,e.winofflinenameupdateTime=t.updateTime.slice(0,10),e.winofflineId=t.id;break;case"Windows_Remotely":e.winremotename=t.clientVersionName,e.winremotereleass=t.releases,e.winremoteupdateTime=t.updateTime.slice(0,10),e.winremoteId=t.id;break;default:console.log("我是default")}}));case 6:case"end":return t.stop()}}),t)})))()},getWin:function(){var e=this.winId;try{e?(this.downloadFileURL=Object(o["c"])(e),this.downloadDefaultEXE(this.downloadFileURL)):this.downloadDefaultEXE()}catch(t){this.downloadDefaultEXE()}},getWinRemote:function(){var e=this.winremoteId;try{e?(this.downloadFileURL=Object(o["c"])(e),this.downloadDefaultEXE(this.downloadFileURL)):this.downloadDefaultEXE()}catch(t){this.downloadDefaultEXE()}},getWinOffLine:function(){var e=this.winofflineId;try{e?(this.downloadFileURL=Object(o["c"])(e),this.downloadDefaultEXE(this.downloadFileURL)):this.downloadDefaultEXE()}catch(t){this.downloadDefaultEXE()}},getMac:function(){var e=this.macId;try{e?(this.downloadFileURL=Object(o["c"])(e),this.downloadDefaultEXE(this.downloadFileURL)):this.downloadDefaultEXE()}catch(t){this.downloadDefaultEXE()}}}},r=d,m=(n("80b7"),n("2877")),w=Object(m["a"])(r,a,i,!1,null,null,null);t["default"]=w.exports}}]);