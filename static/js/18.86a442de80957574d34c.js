(window.webpackJsonp=window.webpackJsonp||[]).push([[18,60],{"+7+g":function(t,e,a){"use strict";a("teir")},"+azT":function(t,e,a){},"1B2B":function(t,e,a){"use strict";a("+azT")},AuOC:function(t,e,a){"use strict";a("KPEg")},HfcX:function(t,e,a){"use strict";var n={name:"searchChannel",data:function(){return{formObj:{}}},props:{showChange:{type:Boolean,default:!1},mixinChannelType:{type:Array,default:function(){return[]}},mixinUserInOutType:{type:Array,default:function(){return[]}}},methods:{changeView:function(){this.$emit("changeView")},clearUp:function(){this.formObj={},this.$emit("clearUp")},searchAction:function(){this.$emit("searchAction",this.formObj)}}},o=(a("+7+g"),a("KHd+")),l=Object(o.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"searchBox"},[a("el-form",{staticClass:"formWrap",attrs:{model:t.formObj,inline:"","label-width":"90px"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchAction.apply(null,arguments)}}},[a("el-form-item",{attrs:{label:"通道:"}},[a("el-input",{attrs:{placeholder:"请输入通道名称"},model:{value:t.formObj.channelName,callback:function(e){t.$set(t.formObj,"channelName",e)},expression:"formObj.channelName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"出入境类型:"}},[a("el-select",{attrs:{placeholder:"请选择出入境类型"},model:{value:t.formObj.ioType,callback:function(e){t.$set(t.formObj,"ioType",e)},expression:"formObj.ioType"}},t._l(t.mixinUserInOutType,(function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"通道类型:"}},[a("el-select",{attrs:{placeholder:"请选择车辆类型"},model:{value:t.formObj.channelType,callback:function(e){t.$set(t.formObj,"channelType",e)},expression:"formObj.channelType"}},t._l(t.mixinChannelType,(function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),a("el-form-item",{staticClass:"hideBorder"},[a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-search"},on:{click:t.searchAction}},[t._v("搜索")]),t._v(" "),a("el-button",{attrs:{type:"info",size:"small",icon:"el-icon-delete"},on:{click:t.clearUp}},[t._v("清空")])],1),t._v(" "),t.showChange?a("div",{staticClass:"qiehuan"},[a("Icon",{attrs:{icon:"icon-qiehuan",tip:"切换视图",iconFontSize:"20"},nativeOn:{click:function(e){return t.changeView.apply(null,arguments)}}})],1):t._e()],1)],1)}),[],!1,null,"a2b37f88",null);e.a=l.exports},KPEg:function(t,e,a){},"LL/t":function(t,e,a){},S8LQ:function(t,e,a){"use strict";a.r(e);var n=a("pw7G"),o=a("HfcX"),l=a("sutq"),i={name:"watchCar",data:function(){return{input1:{},tableData:[],tableSocket:null,dialogPassVisible:!1,pageSize:20,pageNow:1,addRoadRecord:{},pages:1,totalNum:1,justLook:!1,addDisabled:!0,socket:"",isNewAdd:!1}},mounted:function(){this.getTableData()},methods:{getFontState:function(t){var e=this.mixinDriveType.filter((function(e,a){return e.value===t}));return e&&e.length?e[0].label:""},getCarType:function(t){var e=this.mixIncarOption2.filter((function(e,a){return e.value===t}));return e&&e.length?e[0].label:""},searchAction:function(t){this.input1=t,this.pageNow=1,this.getTableData()},getIoType:function(t){var e=this.mixinCarIoType.filter((function(e,a){return e.value===t}));return e&&e.length?e[0].label:""},filterChannel:function(t,e){return e.channelId===t},filterChannelType:function(t,e){return e.channelType===t},getChannelName:function(t){try{return this.mixinALlChannelGuid.filter((function(e){return e.value===t}))[0].label}catch(t){return""}},editSuccess:function(t){var e=this;this.tableData.forEach((function(a,n){a.guid===t.guid&&e.$set(e.tableData,n,t)}))},addCallBack:function(){this.tableData.length<this.pageSize&&this.getTableData()},deleteOne:function(t){var e=this;this.$confirm("确定删除？","确认信息",{distinguishCancelAndClose:!0,confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){e.$request.deleteCamera([t.guid]).then((function(a){e.$message({message:"删除成功!",type:"success"});var n=[];e.tableData.forEach((function(e,a){e!==t&&n.push(e)})),e.tableData=n}))})).catch((function(t){}))},filterTag:function(t,e){return e.type===t},clearUp:function(){this.input1={},this.pageNow=1,this.getTableData()},handleCurrentChange:function(){this.getTableData()},handleClickShow:function(t){this.addRoadRecord=this.copySimple(t),this.justLook=!1,this.dialogPassVisible=!0},delData:function(t){var e=[];for(var a in t)e.push({label:t[a],text:t[a],value:a});return e},getTableData:function(){var t=this;this.$request.getWatchEquipments({data:this.input1,current:this.pageNow,size:this.pageSize}).then((function(e){t.tableData=e.data.data,t.totalNum=e.data.total,t.pages=e.data.pages,t.tableSocket=new l.a({wsUrl:t.$getWebsockedUrl("ChannelState.ws/","refreshToken"),getDataCallBack:t.getSocketMessageDiy}),t.tableSocket.initSocket()}))},getSocketMessageDiy:function(t){if(t&&t.data&&(t.data.indexOf("{")>=0||t.data.indexOf("[")>=0)){var e=JSON.parse(t.data);this.updateTable(e)}},updateTable:function(t){var e=this;this.tableData.forEach((function(a,n){if(t.channelNo===a.channelNo){var o=e.copySimple(a),l=t.data;for(var i in a)for(var r in l)i===r&&(o[i]=l[r]);e.$set(e.tableData,n,o),e.dialogPassVisible&&e.tableData.forEach((function(t,a){t.channelNo===e.addRoadRecord.channelNo&&(e.addRoadRecord=e.copySimple(t))}))}}))},addNewCamera:function(){this.addRoadRecord={},this.isNewAdd=!0,this.justLook=!1,this.dialogPassVisible=!0},editCallback:function(){this.dialogPassVisible=!1},update:function(t){var e=this;this.tableData.forEach((function(a,n){a.channelNo===t.channelNo&&e.$set(e.tableData,n,t)}))}},destroyed:function(){this.tableSocket&&this.tableSocket.destroyedSocket()},components:{Edit:n.default,SearchEquipment:o.a}},r=(a("1B2B"),a("KHd+")),s=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("SearchEquipment",{attrs:{mixinUserInOutType:t.mixinUserInOutType,mixinChannelType:t.mixinChannelType},on:{searchAction:t.searchAction,clearUp:t.clearUp}}),t._v(" "),a("div",{},[a("div",{staticClass:"dataTable"},[a("el-table",{ref:"tableAutoMaxHeight",attrs:{data:t.tableData,"max-height":t.tableMaxHeight,size:"small"}},[a("el-table-column",{attrs:{prop:"channelName",label:"通道",sortable:"",width:"170"}}),t._v(" "),a("el-table-column",{attrs:{prop:"channelOpenState",label:"通道状态",sortable:"",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("Tag",{attrs:{type:e.row.channelOpenState?"success":""}},[t._v(t._s(e.row.channelOpenState?"开启":"关闭"))])]}}])}),t._v(" "),t.mixinAreaTree&&t.mixinAreaTree.length?a("el-table-column",{attrs:{prop:"portOneLevelId",label:"所属区域",sortable:"","min-width":t.$siteMinWidth},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(t.$getSite(e.row.portOneLevelId,e.row.portTwoLevelId,t.mixinAreaTree))+"\n          ")]}}],null,!1,1178152487)}):t._e(),t._v(" "),a("el-table-column",{attrs:{prop:"frontBlocker",label:"前升降柱",sortable:"",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.frontBlocker?"升起":"降落")+"\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"backBlocker",label:"后升降柱",sortable:"",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.backBlocker?"升起":"降落")+"\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"frontStrobe",label:"前道闸",sortable:"",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.frontStrobe?"已开启":"已关闭")+"\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"backStrobe",label:"后道闸",sortable:"",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.backStrobe?"已开启":"已关闭")+"\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"firstLoop",label:"入口地感",sortable:"",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.firstLoop?"已开启":"无信号")+"\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"frontLoop",label:"前地感",sortable:"",width:"170"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.frontLoop?"已开启":"无信号")+"\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"middleLoop",label:"中地感",sortable:"",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n             "+t._s(e.row.middleLoop?"已开启":"无信号")+"\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"backLoop",label:"后地感",sortable:"",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.backLoop?"已开启":"无信号")+"\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"strobeLoop",label:"\t道闸地感",sortable:"",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n             "+t._s(e.row.strobeLoop?"已开启":"无信号")+"\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"channelNo",label:"通道号",sortable:"",width:"170"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ioType",label:"出入境类型",sortable:"",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(t.$getName(e.row.ioType,t.mixinUserInOutType))+"\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"channelType",label:"通道类型",filters:t.mixinChannelType,"filter-method":t.filterChannelType,"filter-placement":"bottom-end",sortable:"",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n              "+t._s(t.$getName(e.row.channelType,t.mixinChannelType))+"\n            ")]}}])}),t._v(" "),t.$showColumn(["edit"])?a("el-table-column",{attrs:{align:"center",fixed:"right",label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("Icon",{directives:[{name:"stat",rawName:"v-stat",value:"edit",expression:"'edit'"}],attrs:{icon:"icon-caozuo",tip:"操作设备"},nativeOn:{click:function(a){return t.handleClickShow(e.row)}}})]}}],null,!1,2454620515)}):t._e()],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.pageNow,"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.totalNum},on:{"size-change":t.$handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.pageNow=e},"update:current-page":function(e){t.pageNow=e}}})],1)]),t._v(" "),t.dialogPassVisible?a("Edit",{attrs:{addRoadRecord:t.addRoadRecord,dialogVisible:t.dialogPassVisible,carOptions:t.mixIncarOption2,channelType:t.mixinChannelType},on:{addCallBack:t.addCallBack,update:t.update,editCallback:t.editCallback}}):t._e()],1)}),[],!1,null,"943f6fe4",null);e.default=s.exports},"cf+X":function(t,e,a){"use strict";a("LL/t")},nIjN:function(t,e,a){},oVfF:function(t,e,a){"use strict";a("nIjN")},pw7G:function(t,e,a){"use strict";a.r(e);var n={name:"switchButton",model:{prop:"isEnabled",event:"change"},props:{isEnabled:{default:!0,type:Boolean},color:{type:String,default:"#939fff"}},methods:{toggle:function(){this.$emit("change",!this.isEnabled)}}},o=(a("oVfF"),a("KHd+")),l=Object(o.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"switch-button-control"},[a("div",{staticClass:"switch-button",class:{enabled:t.isEnabled},style:{"--color":t.color},on:{click:t.toggle}},[a("div",{staticClass:"button"}),t._v(" "),a("span",{class:t.isEnabled?"buttonLeftText buttonText":"buttonRightText buttonText"},[t._t("name")],2)]),t._v(" "),a("div",{staticClass:"switch-button-label"},[t._t("default")],2)])}),[],!1,null,"bfed3898",null).exports,i={name:"edit",props:{addRoadRecord:{type:Object,default:{}},dialogVisible:{type:Boolean,default:!1}},data:function(){return{switch1:{checked:"升起",unchecked:"降落"},option1:[{label:"降落",value:!1},{label:"升起",value:!0}],option2:[{label:"无信号",value:!1},{label:"已开启",value:!0}],option3:[{label:"关闭",value:!1},{label:"开启",value:!0}],visible:this.dialogVisible,formData:this.addRoadRecord}},mounted:function(){},methods:{reStart:function(t,e){var a=this;this.$confirm("确定重启"+t+"？","确认信息",{distinguishCancelAndClose:!0,confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){var t=[{deviceName:e,operateType:2}];a.$request.restartEquipments({channelNo:a.formData.channelNo,deviceList:t}).then((function(t){a.$message({type:"success",message:"提交重启命令成功!"})}))})).catch((function(t){}))},closeCallback:function(){this.$emit("editCallback")},submitForm:function(){this.doAction()},doAction:function(){var t=this,e=[];for(var a in this.formData)"frontLoop"!==a&&"middleLoop"!==a&&"strobeLoop"!==a&&e.push({deviceName:a,operateType:!0===this.formData[a]?"1":"0"});this.$request.restartEquipments({channelNo:this.formData.channelNo,deviceList:e}).then((function(e){t.$message({type:"success",message:"提交成功!"}),t.$emit("update",t.formData),t.closeCallback()}))}},components:{SwitchButton:l}},r=(a("cf+X"),a("AuOC"),Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{"close-on-click-modal":!1,title:"操作",width:"700px",visible:t.visible,"destroy-on-close":""},on:{"update:visible":function(e){t.visible=e},close:t.closeCallback}},[a("el-form",{staticClass:"editWatchEquimentForm",attrs:{inline:"",size:"small","label-width":"100px"}},[a("el-form-item",{attrs:{label:"前地感:"}},[a("el-button",{staticClass:"restartBtn",attrs:{type:"text"},on:{click:function(e){return t.reStart("前地感","frontLoop")}}},[t._v("点击重启")])],1),t._v(" "),a("el-form-item",{attrs:{label:"中地感:"}},[a("el-button",{staticClass:"restartBtn",attrs:{type:"text"},on:{click:function(e){return t.reStart("中地感","middleLoop")}}},[t._v("点击重启")])],1),t._v(" "),a("el-form-item",{attrs:{label:"道闸地感:"}},[a("el-button",{staticClass:"restartBtn",attrs:{type:"text"},on:{click:function(e){return t.reStart("道闸地感","strobeLoop")}}},[t._v("点击重启")])],1)],1),t._v(" "),a("div",{staticClass:"line"}),t._v(" "),a("el-form",{staticClass:"editWatchEquimentForm",attrs:{model:t.formData,inline:"",size:"small","label-width":"100px"}},[a("el-form-item",{attrs:{label:"前升降柱:"}},[a("SwitchButton",{model:{value:t.formData.frontBlocker,callback:function(e){t.$set(t.formData,"frontBlocker",e)},expression:"formData.frontBlocker"}},[a("template",{slot:"name"},[t._v("\n            "+t._s(t.formData.frontBlocker?"升起":"降落")+"\n          ")])],2)],1),t._v(" "),a("el-form-item",{attrs:{label:"后升降柱:"}},[a("SwitchButton",{model:{value:t.formData.backBlocker,callback:function(e){t.$set(t.formData,"backBlocker",e)},expression:"formData.backBlocker"}},[a("template",{slot:"name"},[t._v("\n            "+t._s(t.formData.backBlocker?"升起":"降落")+"\n          ")])],2)],1),t._v(" "),a("el-form-item",{attrs:{label:"前道闸:"}},[a("SwitchButton",{model:{value:t.formData.frontStrobe,callback:function(e){t.$set(t.formData,"frontStrobe",e)},expression:"formData.frontStrobe"}},[a("template",{slot:"name"},[t._v("\n            "+t._s(t.formData.frontStrobe?"开启":"关闭")+"\n          ")])],2)],1),t._v(" "),a("el-form-item",{attrs:{label:"后道闸:"}},[a("SwitchButton",{model:{value:t.formData.backStrobe,callback:function(e){t.$set(t.formData,"backStrobe",e)},expression:"formData.backStrobe"}},[a("template",{slot:"name"},[t._v("\n            "+t._s(t.formData.backStrobe?"开启":"关闭")+"\n          ")])],2)],1),t._v(" "),a("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("提交并重启")]),t._v(" "),a("el-button",{attrs:{type:"info"},on:{click:t.closeCallback}},[t._v("取消")])],1)],1)],1)}),[],!1,null,"6d00033f",null));e.default=r.exports},teir:function(t,e,a){}}]);