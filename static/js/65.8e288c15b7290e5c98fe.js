(window.webpackJsonp=window.webpackJsonp||[]).push([[65,85],{LUaO:function(e,t,l){"use strict";l.r(t);var i={name:"Detail",components:{Upload:l("UtOM").default},props:{justLook:{type:Boolean,default:!1},doStatus:{type:Boolean,default:!1},changeStatus:{type:Boolean,default:!1},areaSelected:{type:Object,default:function(){}},options:{type:Array,default:function(){return[]}},dialogVisible:{type:Boolean,default:!1},isNewAdd:{type:Boolean,default:!0},selectedData:{type:Object,default:function(){}}},data:function(){return{enable:[{label:"启用",value:"Y"},{label:"不启用",value:"N"}],ruleForm2:this.selectedData,noshowArae:!0,topId:"",pID:this.parentId,visible:this.dialogVisible,rules:{upFile:this.$rules.validate("请上传核酸报告")}}},mounted:function(){},methods:{changeSite:function(){var e=this;setTimeout((function(){e.$refs.cascaderHandle.dropDownVisible=!1}))},changeTree:function(e){var t=this,l=[];!function e(i){return i.forEach((function(i,a){i.label=i.portName,i.value=i.guid,i.level-0==2&&(i.disabled=!0),t.ruleForm2.guid&&t.ruleForm2.guid===i.guid&&(i.disabled=!0),!1===i.isChange&&(i.disabled=!0),i.children&&i.children.length&&e(i.children),l.push(i)})),l}(e)},closeCallback:function(){this.$emit("editCallback")},submitForm:function(e){var t=this;this.$refs.ruleForm.validate((function(e){e&&t.$request.uploadReportImage({upFile:t.$refs.file.file}).then((function(e){t.$message({type:"success",message:"添加成功！"}),t.closeCallback(),t.$emit("getTableData")}))}))},resetForm:function(e){this.$refs[e].resetFields()}}},a=(l("kLrm"),l("KHd+")),s=Object(a.a)(i,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-dialog",{attrs:{"close-on-click-modal":!e.ruleForm2.guid,visible:e.visible,width:"800px","destroy-on-close":""},on:{"update:visible":function(t){e.visible=t},close:e.closeCallback}},[l("el-form",{ref:"ruleForm",staticClass:"addArea",attrs:{model:e.ruleForm2,rules:e.rules,disabled:e.doStatus||e.justLook,"status-icon":"","label-width":"140px"}},[l("el-form-item",{attrs:{label:"核酸结果照片",prop:"upFile"}},[l("Upload",{ref:"file",model:{value:e.ruleForm2.upFile,callback:function(t){e.$set(e.ruleForm2,"upFile",t)},expression:"ruleForm2.upFile"}})],1)],1),e._v(" "),l("div",{staticClass:"btns",staticStyle:{"text-align":"center"}},[l("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("新增")]),e._v(" "),l("el-button",{attrs:{type:"info"},on:{click:e.closeCallback}},[e._v("取消")])],1)],1)}),[],!1,null,"719756a0",null);t.default=s.exports},Mmru:function(e,t,l){"use strict";l("doK8")},UtOM:function(e,t,l){"use strict";l.r(t);var i={props:{disabledUpload:{type:Boolean,default:!1},value:{type:String,default:""}},data:function(){return{fileNow:this.value,dialogImageUrl:"",dialogVisible:!1,disabled:!1,file:null}},methods:{changeFile:function(e,t){var l=e.target.files[0];l&&(this.file=l,this.fileNow=URL.createObjectURL(l),this.$emit("input",URL.createObjectURL(l)))},handleRemove:function(e){console.log(e)},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},handleDownload:function(e){console.log(e)}}},a=(l("Mmru"),l("KHd+")),s=Object(a.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"uploadWrapComponey"},[this.fileNow?t("el-image",{staticClass:"imgView",attrs:{src:this.fileNow}}):t("div",{staticClass:"plusWrap"},[t("i",{staticClass:"el-icon-plus plus"})]),this._v(" "),this.disabledUpload?this._e():t("input",{ref:"files",staticClass:"uploadInput",attrs:{type:"file",accept:"image/*"},on:{change:this.changeFile}})],1)}),[],!1,null,"0f095466",null);t.default=s.exports},Yzl8:function(e,t,l){},doK8:function(e,t,l){},kLrm:function(e,t,l){"use strict";l("Yzl8")}}]);