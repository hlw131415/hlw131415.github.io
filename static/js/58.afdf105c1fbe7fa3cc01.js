(window.webpackJsonp=window.webpackJsonp||[]).push([[58,66,86,87],{"1gTD":function(e,t,a){"use strict";a.r(t);var i={props:{disabledUpload:{type:Boolean,default:!1},value:{type:String,default:""}},data:function(){return{fileNow:this.value,dialogImageUrl:"",dialogVisible:!1,disabled:!1,file:null}},methods:{changeFile:function(e,t){var a=e.target.files[0];a&&(this.file=a,this.fileNow=URL.createObjectURL(a),this.$emit("input",URL.createObjectURL(a)))},handleRemove:function(e){console.log(e)},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},handleDownload:function(e){console.log(e)}}},l=(a("zg4R"),a("KHd+")),s=Object(l.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"uploadWrapComponey"},[this.fileNow?t("el-image",{staticClass:"imgView",attrs:{src:this.fileNow}}):t("div",{staticClass:"plusWrap"},[t("i",{staticClass:"el-icon-plus plus"})]),this._v(" "),this.disabledUpload?this._e():t("input",{ref:"files",staticClass:"uploadInput",attrs:{type:"file",accept:"image/*"},on:{change:this.changeFile}})],1)}),[],!1,null,"a5f2b1da",null);t.default=s.exports},JM6m:function(e,t,a){},b8yE:function(e,t,a){},gENv:function(e,t,a){"use strict";a.r(t);var i=a("1gTD"),l={name:"detail",props:{justLook:{type:Boolean,default:!1},doStatus:{type:Boolean,default:!1},changeStatus:{type:Boolean,default:!1},areaSelected:{type:Object,default:function(){}},options:{type:Array,default:function(){return[]}},dialogVisible:{type:Boolean,default:!1},parentId:"",isNewAdd:{type:Boolean,default:!0},selectedData:{type:Object,default:function(){}}},data:function(){var e=this;return{enable:[{label:"启用",value:"Y"},{label:"不启用",value:"N"}],ruleForm2:this.selectedData,noshowArae:!0,pickerOptionsStart:{disabledDate:function(t){var a=e.endTime;if(a)return t.getTime()>new Date(a).getTime()}},pickerOptionsEnd:{disabledDate:function(t){var a=e.startTime;if(a)return t.getTime()<new Date(a).getTime()||t.getTime()>Date.now()-864e5}},topId:"",pID:this.parentId,visible:this.dialogVisible,rules:{cname:this.$rules.validate("请输入月台名称"),code:this.$rules.validate("请输入通往区域"),type:this.$rules.validate("请选择车牌号"),ownName:this.$rules.validate("请输入姓名"),startTime:this.$rules.validate("请输入操作开始时间"),endTime:this.$rules.validate("请输入操作结束时间"),status:this.$rules.validate("请选择车辆类型"),man:this.$rules.validate("请输入出入境方式")}}},mounted:function(){},methods:{changeSite:function(){var e=this;setTimeout((function(){e.$refs.cascaderHandle.dropDownVisible=!1}))},changeTree:function(e){var t=this,a=[];!function e(i){return i.forEach((function(i,l){i.label=i.portName,i.value=i.guid,i.level-0==2&&(i.disabled=!0),t.ruleForm2.guid&&t.ruleForm2.guid===i.guid&&(i.disabled=!0),!1===i.isChange&&(i.disabled=!0),i.children&&i.children.length&&e(i.children),a.push(i)})),a}(e)},closeCallback:function(){this.$emit("editCallback")},submitForm:function(e){var t=this;if("Y"===e||"N"===e)return this.$message({type:"success",message:"操作成功！"}),this.ruleForm2.status="Y"===e?"审核通过":"审核不通过",this.$emit("editAction",this.ruleForm2),this.closeCallback(),!1;this.$refs.ruleForm.validate((function(e){e&&t.doAction()}))},doAction:function(){this.ruleForm2.guid?(this.$message({type:"success",message:"修改成功！"}),this.$emit("editAction",this.ruleForm2),this.closeCallback()):(this.ruleForm2.status="未审核",this.ruleForm2.man="admin",this.ruleForm2.operationMan="admin",this.ruleForm2.guid=(new Date).getTime(),this.$emit("addAction",this.ruleForm2),this.$message({type:"success",message:"添加成功！"}),this.closeCallback())},resetForm:function(e){this.$refs[e].resetFields()}},components:{Upload:i.default}},s=(a("jHIC"),a("KHd+")),o=Object(s.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{"close-on-click-modal":!e.ruleForm2.guid,width:"800px",visible:e.visible,"destroy-on-close":""},on:{"update:visible":function(t){e.visible=t},close:e.closeCallback}},[a("div",{staticClass:"dialogTitleDiy"},[e._v("\n"+e._s(e.ruleForm2.guid?e.ruleForm2.guid&&e.doStatus?"企业审核":e.ruleForm2.guid&&!e.justLook?"编辑企业":"企业详情":"添加企业")+"\n      ")]),e._v(" "),a("el-form",{ref:"ruleForm",staticClass:"addArea",attrs:{model:e.ruleForm2,"status-icon":"",rules:e.rules,disabled:e.doStatus||e.justLook,"label-width":"180px"}},[a("el-form-item",{attrs:{label:"月台名称",prop:"cname"}},[a("el-input",{attrs:{placeholder:"请输入月台名称"},model:{value:e.ruleForm2.cname,callback:function(t){e.$set(e.ruleForm2,"cname",t)},expression:"ruleForm2.cname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"报告编号",prop:"code"}},[a("el-input",{attrs:{placeholder:"请输入报告编号"},model:{value:e.ruleForm2.reportNo,callback:function(t){e.$set(e.ruleForm2,"reportNo",t)},expression:"ruleForm2.reportNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"车牌号",prop:"type"}},[a("el-input",{attrs:{placeholder:"请输入车牌号"},model:{value:e.ruleForm2.licensePlate,callback:function(t){e.$set(e.ruleForm2,"licensePlate",t)},expression:"ruleForm2.licensePlate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"消杀人员",prop:"ownName"}},[a("el-input",{attrs:{placeholder:"请输入消杀人员"},model:{value:e.ruleForm2.samplingOperator,callback:function(t){e.$set(e.ruleForm2,"samplingOperator",t)},expression:"ruleForm2.samplingOperator"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"货品名称",prop:"ownName"}},[a("el-input",{attrs:{placeholder:"请输入货品名称"},model:{value:e.ruleForm2.productName,callback:function(t){e.$set(e.ruleForm2,"productName",t)},expression:"ruleForm2.productName"}})],1),e._v(" "),a("el-form-item",{staticClass:"time",attrs:{label:"消杀开始时间",prop:"startTime"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择操作开始时间"},model:{value:e.ruleForm2.receiptTime,callback:function(t){e.$set(e.ruleForm2,"receiptTime",t)},expression:"ruleForm2.receiptTime"}})],1),e._v(" "),a("el-form-item",{staticClass:"time",attrs:{label:"消杀结束时间",prop:"endTime"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择操作结束时间"},model:{value:e.ruleForm2.samplingTime,callback:function(t){e.$set(e.ruleForm2,"samplingTime",t)},expression:"ruleForm2.samplingTime"}})],1)],1),e._v(" "),e.doStatus?a("div",{staticClass:"btns",staticStyle:{"text-align":"center"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("Y")}}},[e._v("通过")]),e._v(" "),a("el-button",{attrs:{type:"info"},on:{click:function(t){return e.submitForm("N")}}},[e._v("不通过")])],1):e._e(),e._v(" "),e.doStatus||e.justLook?e._e():a("div",{staticClass:"btns",staticStyle:{"text-align":"center"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v(e._s(e.ruleForm2.guid?"编辑":"新增"))]),e._v(" "),a("el-button",{attrs:{type:"info"},on:{click:e.closeCallback}},[e._v("取消")])],1)],1)}),[],!1,null,"93915d04",null);t.default=o.exports},gykg:function(e,t,a){"use strict";a.r(t);var i={name:"search",data:function(){return{areaLevel:[{value:"1",label:"1级"},{value:"2",label:"2级"}],searchPoint:{portName:"",portCode:"",guid:"",parentId:"",level:""}}},props:{options:{type:Array,default:[]}},methods:{clearUp:function(){console.log("clearUp"),this.searchPoint={portName:"",portCode:"",guid:"",parentId:"",level:""},this.$emit("clearUp")},searchAction:function(){this.$emit("searchAction",this.searchPoint)},addNewRole:function(){this.$emit("addNewRoom")}}},l=(a("vP+m"),a("KHd+")),s=Object(l.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page_container"},[a("div",{staticClass:"searchBox2 searchBox"},[a("el-form",{attrs:{inline:"",model:e.searchPoint,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"月台名称:"}},[a("el-input",{attrs:{placeholder:"请输入月台名称"},model:{value:e.searchPoint.cname,callback:function(t){e.$set(e.searchPoint,"cname",t)},expression:"searchPoint.cname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"车牌号:"}},[a("el-input",{attrs:{placeholder:"请输入车牌号"},model:{value:e.searchPoint.status,callback:function(t){e.$set(e.searchPoint,"status",t)},expression:"searchPoint.status"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"货车物品:"}},[a("el-input",{attrs:{placeholder:"请输入货车物品"},model:{value:e.searchPoint.productName,callback:function(t){e.$set(e.searchPoint,"productName",t)},expression:"searchPoint.productName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"消杀人员:"}},[a("el-input",{attrs:{placeholder:"请输入消杀人员"},model:{value:e.searchPoint.ownName,callback:function(t){e.$set(e.searchPoint,"ownName",t)},expression:"searchPoint.ownName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"查询时间:"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:e.searchPoint.time,callback:function(t){e.$set(e.searchPoint,"time",t)},expression:"searchPoint.time"}})],1),e._v(" "),a("div",[a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-search"},on:{click:e.searchAction}},[e._v("搜索")]),e._v(" "),a("FormButton",{attrs:{type:"clear"},on:{click:e.clearUp}},[e._v("清空")]),e._v(" "),a("FormButton",{attrs:{type:"add"},on:{click:e.addNewRole}},[e._v("添加")])],1)],1)],1)])}),[],!1,null,"4eef8e64",null);t.default=s.exports},jHIC:function(e,t,a){"use strict";a("xJp7")},r059:function(e,t,a){},roeT:function(e,t,a){"use strict";a("b8yE")},tUsg:function(e,t,a){"use strict";a.r(t);var i=a("gykg"),l=a("gENv"),s={name:"ManageDetail",data:function(){return{selectedData:{},dialogVisible:!1,options:[{value:"I",label:"启用"},{value:"O",label:"未开启"},{value:"P",label:"报警"},{value:"W",label:"可见"},{value:"X",label:"需要授权"}],input1:"",searchUser:"",selectList:"",dialogPassVisible:!1,tableData:[],totalNum:0,pageSize:localStorage.getItem("pageSize")-0||10,pageNow:1,searchUserOptions:[{label:"在线",text:"在线",value:"Online"},{label:"离线",text:"离线",value:"Offline"},{label:"锁定",text:"锁定",value:"Locked"}],doStatus:!1,areaTree:[],addDisabled:!1,addUserProp:{},addProp:{},justLook:!1,isNewAdd:!0,outTypes:[]}},created:function(){var e=this;setTimeout((function(){e.tableData=[{guid:134,cname:"全国/广西壮族自治区区域",code:"广西10066入境通道",type:"JTR1888",ownName:"张三",startTime:"2022-01-14 13:43:38",endTime:"2022-01-14 16:50:20",status:"启用",man:"入境"},{guid:1334,cname:"全国/广西壮族自治区区域",code:"广西10066入境通道",type:"JTR1888",ownName:"张三",startTime:"2022-01-14 13:43:38",endTime:"2022-01-14 16:50:20",status:"可见",man:"入境"},{guid:13342,cname:"全国/广西壮族自治区区域",code:"广西10066入境通道",type:"JTR1888",ownName:"张三",startTime:"2022-01-14 13:43:38",endTime:"2022-01-14 16:50:20",status:"未开启",man:"入境"}],e.totalNum=e.tableData.length}),300)},methods:{editAction:function(e){var t=this;this.tableData.forEach((function(a,i){a.guid===e.guid&&t.$set(t.tableData,i,e)}))},editCallback:function(){this.dialogVisible=!1,this.doStatus=!1,this.justLook=!1},addAction:function(e){console.log(e),this.tableData.unshift(e)},handleClickShenhe:function(e){this.selectedData=this.copySimple(e),this.dialogVisible=!0,this.doStatus=!0},handleClickShow2:function(e){this.selectedData=this.copySimple(e),this.dialogVisible=!0,this.justLook=!0},handleEdit:function(e){this.selectedData=this.copySimple(e),this.dialogVisible=!0},addNewRoom:function(){this.selectedData={},this.dialogVisible=!0},changeMenu:function(e,t,a){},filterType:function(e,t){return t.userState===e},handleOffline:function(e){var t=this;this.$confirm("确定强制用户"+e.userName+"下线？","确认信息",{distinguishCancelAndClose:!0,confirmButtonText:"确定",cancelButtonText:"取消",center:!0}).then((function(){t.$request.forceOfflineUser({userId:e.userId,onlineKey:e.onlineKey}).then((function(a){t.$message({message:a.data,type:"success"}),t.tableData.forEach((function(a,i){a===e&&t.tableData.splice(i,1)})),t.totalNum=t.totalNum-1}))})).catch((function(e){}))},handleUnlock:function(e){var t=this;this.$confirm("确定解锁？","确认信息",{distinguishCancelAndClose:!0,confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){t.$request.unlockOnlineUser({userId:e.userId}).then((function(e){t.$message({message:e.data,type:"success"}),t.getTableData()}))})).catch((function(e){}))},handleLock:function(e){var t=this;this.$confirm("确定锁定该用户并下线？","确认信息",{distinguishCancelAndClose:!0,confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){t.$request.lockOnlineUser({userId:e.userId}).then((function(a){t.$message({message:a.data,type:"success"}),t.tableData.forEach((function(a,i){a===e&&(t.tableData[i].userState="Locked")}))}))})).catch((function(e){}))},handleCurrentChange:function(e){this.pageNow=e,this.getTableData()},getTableData:function(){var e=this;this.$request.getOnlineUser({data:{userName:this.input1},size:this.pageSize,current:this.pageNow}).then((function(t){e.tableData=t.data.data,e.totalNum=t.data.total}))},filterTag:function(e,t){return t.inOutType===e},handleClickShow:function(e){this.justLook=!0,this.addProp=e,this.dialogPassVisible=!0},handleClickEdit:function(e){this.justLook=!1,this.addProp=e,this.dialogPassVisible=!0},handleClickDelete:function(e){var t=this;this.$confirm("确定删除？","确认信息",{distinguishCancelAndClose:!0,confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){var a=[];a.push(e.guid),t.$request.deleteUser(a).then((function(a){t.$message({message:"删除成功!",type:"success"});var i=[];t.tableData.forEach((function(t,a){t!==e&&i.push(t)})),t.tableData=i}))})).catch((function(e){}))},handleClickReset:function(e){var t=this;this.$confirm("确定重置"+e.userName+"的密码？","确认信息",{distinguishCancelAndClose:!0,confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){t.$request.resetPassword({account:e.account}).then((function(e){t.$message({message:"重置密码成功!",type:"success"})}))})).catch((function(e){}))},searchAction:function(e){this.input1=e,this.pageNow=1,this.getTableData()},clearUp:function(){this.input1="",this.searchUser="",this.pageNow=1,this.getTableData()}},components:{Search:i.default,Detail:l.default}},o=(a("roeT"),a("KHd+")),n=Object(o.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"manageWrap"},[a("Search",{attrs:{options:e.options},on:{searchAction:e.searchAction,clearUp:e.clearUp,addNewRoom:e.addNewRoom}}),e._v(" "),a("div",{},[a("div",{staticClass:"dataTable"},[a("el-table",{ref:"tableAutoMaxHeight",attrs:{size:"small","max-height":e.tableMaxHeight,data:e.tableData}},[a("el-table-column",{attrs:{prop:"cname",label:"月台名称","show-overflow-tooltip":"",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"code",label:"通往区域",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"车牌号",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"ownName",label:"姓名",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"startTime",label:"操作开始时间","show-overflow-tooltip":"",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"endTime",label:"操作结束时间","show-overflow-tooltip":"",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"车辆类型",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("Tag",{attrs:{type:"启用"===t.row.status?"success":"未开启"===t.row.status?"info":"warning"}},[e._v(e._s(t.row.status))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"man",label:"出入境方式",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return["未审核"===t.row.status?a("Icon",{directives:[{name:"stat",rawName:"v-stat",value:"shenhe",expression:"'shenhe'"}],attrs:{icon:"icon-shenhe",tip:"审核"},nativeOn:{click:function(a){return e.handleClickShenhe(t.row)}}}):e._e(),e._v(" "),a("Icon",{directives:[{name:"stat",rawName:"v-stat",value:"look",expression:"'look'"}],attrs:{icon:"icon-chakan1",tip:"查看"},nativeOn:{click:function(a){return e.handleClickShow2(t.row)}}}),e._v(" "),a("Icon",{directives:[{name:"stat",rawName:"v-stat",value:"edit",expression:"'edit'"}],attrs:{icon:"icon-bianji",tip:"编辑"},nativeOn:{click:function(a){return e.handleEdit(t.row)}}}),e._v(" "),a("Icon",{directives:[{name:"stat",rawName:"v-stat",value:"delete",expression:"'delete'"}],attrs:{icon:"icon-shanchu",tip:"删除"},nativeOn:{click:function(a){return e.handleDelete(t.row)}}})]}}])})],1)],1)]),e._v(" "),e.dialogVisible?a("Detail",{attrs:{options:e.options,dialogVisible:e.dialogVisible,selectedData:e.selectedData,doStatus:e.doStatus,justLook:e.justLook},on:{addAction:e.addAction,editAction:e.editAction,editCallback:e.editCallback}}):e._e(),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageNow,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalNum},on:{"size-change":e.$handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.pageNow=t},"update:current-page":function(t){e.pageNow=t}}})],1)}),[],!1,null,"34eb5d86",null);t.default=n.exports},"vP+m":function(e,t,a){"use strict";a("JM6m")},xJp7:function(e,t,a){},zg4R:function(e,t,a){"use strict";a("r059")}}]);