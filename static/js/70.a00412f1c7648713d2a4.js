(window.webpackJsonp=window.webpackJsonp||[]).push([[70,98],{"6iP3":function(e,t,l){"use strict";l.r(t);var a=l("Rgee"),o={name:"detail",props:{componyOptions:{type:Object,default:function(){}},justLook:{type:Boolean,default:!1},doStatus:{type:Boolean,default:!1},changeStatus:{type:Boolean,default:!1},areaSelected:{type:Object,default:function(){}},cOptions:{type:Array,default:function(){return[]}},options:{type:Array,default:function(){return[]}},dialogVisible:{type:Boolean,default:!1},parentId:"",isNewAdd:{type:Boolean,default:!0},selectedData:{type:Object,default:function(){}}},data:function(){return{enable:[{label:"启用",value:"Y"},{label:"不启用",value:"N"}],ruleForm2:this.selectedData,noshowArae:!0,topId:"",pID:this.parentId,visible:this.dialogVisible,rules:{cname:this.$rules.validate("请输入企业名称"),code:this.$rules.validate("请输入统一社会信用代码"),type:this.$rules.validate("请选择企业类型"),ownName:this.$rules.validate("请输入法人姓名"),pic:this.$rules.validate("请上传企业营业执照"),ownPhone:this.$rules.validate("请输入法人电话"),enable:this.$rules.validate("请选择是否启用")}}},mounted:function(){},methods:{changeSite:function(){var e=this;setTimeout((function(){e.$refs.cascaderHandle.dropDownVisible=!1}))},changeTree:function(e){var t=this,l=[];!function e(a){return a.forEach((function(a,o){a.label=a.portName,a.value=a.guid,a.level-0==2&&(a.disabled=!0),t.ruleForm2.guid&&t.ruleForm2.guid===a.guid&&(a.disabled=!0),!1===a.isChange&&(a.disabled=!0),a.children&&a.children.length&&e(a.children),l.push(a)})),l}(e)},closeCallback:function(){this.$emit("editCallback")},submitForm:function(e){var t=this;if(console.log(this.$refs.file.file),"Y"===e||"N"===e)return this.$message({type:"success",message:"操作成功！"}),this.ruleForm2.status="Y"===e?"审核通过":"审核不通过",this.$emit("editAction",this.ruleForm2),this.closeCallback(),!1;this.$refs.ruleForm.validate((function(e){e&&t.doAction()}))},doAction:function(){this.ruleForm2.guid?(this.$message({type:"success",message:"修改成功！"}),this.$emit("editAction",this.ruleForm2),this.closeCallback()):(this.ruleForm2.status="未审核",this.ruleForm2.man="admin",this.ruleForm2.operationMan="admin",this.ruleForm2.guid=(new Date).getTime(),this.$emit("addAction",this.ruleForm2),this.$message({type:"success",message:"添加成功！"}),this.closeCallback())},resetForm:function(e){this.$refs[e].resetFields()}},components:{Upload:a.default}},s=(l("U74z"),l("KHd+")),i=Object(s.a)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-dialog",{attrs:{"close-on-click-modal":!e.ruleForm2.guid,width:"800px",visible:e.visible,"destroy-on-close":""},on:{"update:visible":function(t){e.visible=t},close:e.closeCallback}},[l("div",{staticClass:"dialogTitleDiy"},[e._v("\n"+e._s(e.ruleForm2.guid?e.ruleForm2.guid&&e.doStatus?"企业审核":e.ruleForm2.guid&&!e.justLook?"编辑企业":"企业详情":"添加企业")+"\n      ")]),e._v(" "),l("el-form",{ref:"ruleForm",staticClass:"addArea",attrs:{model:e.ruleForm2,"status-icon":"",rules:e.rules,disabled:e.doStatus||e.justLook,"label-width":"140px"}},[l("el-form-item",{attrs:{label:"企业名称",prop:"cname"}},[l("el-input",{attrs:{placeholder:"请输入企业名称"},model:{value:e.ruleForm2.cname,callback:function(t){e.$set(e.ruleForm2,"cname",t)},expression:"ruleForm2.cname"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"统一社会信用代码",prop:"code"}},[l("el-input",{attrs:{placeholder:"请输入统一社会信用代码"},model:{value:e.ruleForm2.code,callback:function(t){e.$set(e.ruleForm2,"code",t)},expression:"ruleForm2.code"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"企业营业执照",prop:"pic"}},[l("Upload",{ref:"file",attrs:{disabledUpload:e.doStatus||e.justLook},model:{value:e.ruleForm2.pic,callback:function(t){e.$set(e.ruleForm2,"pic",t)},expression:"ruleForm2.pic"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"上级企业",prop:"lastC"}},[l("el-cascader",{attrs:{props:{label:"cname",value:"guid"},placeholder:"请选择上级企业",options:e.componyOptions},model:{value:e.ruleForm2.lastC,callback:function(t){e.$set(e.ruleForm2,"lastC",t)},expression:"ruleForm2.lastC"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"企业类型",prop:"type"}},[l("el-select",{attrs:{placeholder:"请选择企业类型"},model:{value:e.ruleForm2.type,callback:function(t){e.$set(e.ruleForm2,"type",t)},expression:"ruleForm2.type"}},e._l(e.cOptions,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),l("el-form-item",{attrs:{label:"法人姓名",prop:"ownName"}},[l("el-input",{attrs:{placeholder:"请输入法人姓名"},model:{value:e.ruleForm2.ownName,callback:function(t){e.$set(e.ruleForm2,"ownName",t)},expression:"ruleForm2.ownName"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"法人电话",prop:"ownPhone"}},[l("el-input",{attrs:{placeholder:"请输入法人电话"},model:{value:e.ruleForm2.ownPhone,callback:function(t){e.$set(e.ruleForm2,"ownPhone",t)},expression:"ruleForm2.ownPhone"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"是否启用",prop:"enable"}},[l("el-select",{attrs:{placeholder:"请选择是否启用"},model:{value:e.ruleForm2.enable,callback:function(t){e.$set(e.ruleForm2,"enable",t)},expression:"ruleForm2.enable"}},e._l(e.enable,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),e.ruleForm2.guid?l("el-form-item",{attrs:{label:"审核状态",prop:"status"}},[l("el-input",{attrs:{disabled:""},model:{value:e.ruleForm2.status,callback:function(t){e.$set(e.ruleForm2,"status",t)},expression:"ruleForm2.status"}})],1):e._e()],1),e._v(" "),e.doStatus?l("div",{staticClass:"btns",staticStyle:{"text-align":"center"}},[l("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("Y")}}},[e._v("通过")]),e._v(" "),l("el-button",{attrs:{type:"info"},on:{click:function(t){return e.submitForm("N")}}},[e._v("不通过")])],1):e._e(),e._v(" "),e.doStatus||e.justLook?e._e():l("div",{staticClass:"btns",staticStyle:{"text-align":"center"}},[l("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v(e._s(e.ruleForm2.guid?"编辑":"新增"))]),e._v(" "),l("el-button",{attrs:{type:"info"},on:{click:e.closeCallback}},[e._v("取消")])],1)],1)}),[],!1,null,"33ec32d4",null);t.default=i.exports},AT0W:function(e,t,l){},GJcW:function(e,t,l){},Rgee:function(e,t,l){"use strict";l.r(t);var a={data:function(){return{file:null,fileNow:this.value,dialogImageUrl:"",dialogVisible:!1,disabled:!1}},props:{disabledUpload:{type:Boolean,default:!1},value:{type:String,default:""}},methods:{changeFile:function(e,t){var l=e.target.files[0];if(l){this.file=l;var a=URL.createObjectURL(l);this.fileNow=a,this.$emit("input",a)}},handleRemove:function(e){console.log(e)},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},handleDownload:function(e){console.log(e)}}},o=(l("fdqI"),l("KHd+")),s=Object(o.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"uploadWrapComponey"},[this.fileNow?t("el-image",{staticClass:"imgView",attrs:{src:this.fileNow}}):t("div",{staticClass:"plusWrap"},[t("i",{staticClass:"el-icon-plus plus"})]),this._v(" "),this.disabledUpload?this._e():t("input",{ref:"files",staticClass:"uploadInput",attrs:{type:"file",accept:"image/*"},on:{change:this.changeFile}})],1)}),[],!1,null,"23761baa",null);t.default=s.exports},U74z:function(e,t,l){"use strict";l("GJcW")},fdqI:function(e,t,l){"use strict";l("AT0W")}}]);