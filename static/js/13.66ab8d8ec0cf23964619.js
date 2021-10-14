webpackJsonp([13],{"6TNe":function(t,e){},C4xv:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("vQ9I"),s={data:function(){return{tableData:[],form:{},formLabelWidth:"200px",dialogFormVisible:!1,dialogTitle:"",cellWidth:"",info:0,rules:{name:[{required:!0,message:"请输入会员等级名称",trigger:"blur"}],prdtDiscountRatio:[{required:!0,message:"请输入商品消费折扣",trigger:"blur"}],serveDiscountRatio:[{required:!0,message:"请输入服务消费折扣",trigger:"blur"}],entrustDiscountRatio:[{required:!0,message:"请输入寄养消费折扣",trigger:"blur"}]}}},mounted:function(){this.getVips()},methods:{getVips:function(){var t=this;Object(o.a)({url:"/api/userVip/list",method:"get",success:function(e){t.tableData=e.data.data},fail:function(t){console.log(t)}},this)},handleAdd:function(t){var e=this;this.$nextTick(function(){e.$refs.form.resetFields()}),this.info=2,this.dialogTitle="新增会员级别",this.dialogFormVisible=!0,this.form={}},handleEdit:function(t){var e=this;this.$nextTick(function(){e.$refs.form.resetFields()}),this.form={},this.info=1,this.dialogTitle="编辑会员级别",this.dialogFormVisible=!0,Object(o.a)({url:"/api/userVip/info",method:"get",params:{id:t},success:function(t){e.form=t.data.data},fail:function(t){console.log(t)}},this)},saveVipInfo:function(){var t=this;this.$refs.form.validate(function(e){e&&(1===t.info?Object(o.a)({url:"/api/userVip/edit",method:"post",data:{id:t.form.id,name:t.form.name,prdtDiscountRatio:t.form.prdtDiscountRatio,serveDiscountRatio:t.form.serveDiscountRatio,entrustDiscountRatio:t.form.entrustDiscountRatio},success:function(e){200===e.data.code?(t.$message({message:"修改成功",center:!0,type:"success"}),t.form={},t.dialogFormVisible=!1,t.getVips()):t.$message({message:"修改失败",center:!0,type:"error"})},fail:function(t){console.log(t)}},t):Object(o.a)({url:"/api/userVip/save",method:"post",data:{name:t.form.name,prdtDiscountRatio:t.form.prdtDiscountRatio,serveDiscountRatio:t.form.serveDiscountRatio,entrustDiscountRatio:t.form.entrustDiscountRatio},success:function(e){200===e.data.code?(t.$message({message:"添加成功",center:!0,type:"success"}),t.form={},t.dialogFormVisible=!1,t.getVips()):t.$message({message:"添加失败",center:!0,type:"error"})},fail:function(t){console.log(t)}},t))})},handleDelete:function(t){var e=this;this.$confirm("此操作将删除该会员级别, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(function(){Object(o.a)({url:"/api/userVip/del",method:"get",params:{id:t},success:function(t){e.$message({message:"已删除",center:!0,type:"success"}),e.getVips()},fail:function(t){console.log(t)}},e)}).catch(function(){e.$message({type:"info",center:!0,message:"已取消"})})}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",[i("div",{staticClass:"add_style"},[i("el-button",{attrs:{type:"danger",icon:"el-icon-plus",round:""},on:{click:t.handleAdd}},[t._v("新增")])],1),t._v(" "),i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[i("el-table-column",{attrs:{label:"会员级别",align:"center",width:t.cellWidth},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"商品消费折扣",align:"center",width:t.cellWidth},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.prdtDiscountRatio)+"%\n      ")]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"服务消费折扣",align:"center",width:t.cellWidth},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.serveDiscountRatio)+"%\n      ")]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"寄养消费折扣",align:"center",width:t.cellWidth},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.entrustDiscountRatio)+"%\n      ")]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作",align:"center",width:t.cellWidth},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{icon:"el-icon-edit",size:"small",round:""},on:{click:function(i){return t.handleEdit(e.row.id)}}},[t._v("编辑")]),t._v(" "),i("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"small",round:""},on:{click:function(i){return t.handleDelete(e.row.id)}}},[t._v("删除")])]}}])})],1),t._v(" "),i("el-dialog",{attrs:{title:t.dialogTitle,visible:t.dialogFormVisible,customClass:"elDialog35"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules}},[i("el-form-item",{attrs:{label:"会员级别：","label-width":t.formLabelWidth,prop:"name"}},[i("span",{staticClass:"right_input"},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)]),t._v(" "),i("el-form-item",{attrs:{label:"商品消费折扣：","label-width":t.formLabelWidth,prop:"prdtDiscountRatio"}},[i("span",{staticClass:"right_input"},[i("el-input",{attrs:{type:"number",maxlength:"3","auto-complete":"off"},model:{value:t.form.prdtDiscountRatio,callback:function(e){t.$set(t.form,"prdtDiscountRatio",e)},expression:"form.prdtDiscountRatio"}},[i("template",{slot:"append"},[t._v("%")])],2)],1)]),t._v(" "),i("el-form-item",{attrs:{label:"服务消费折扣：","label-width":t.formLabelWidth,prop:"serveDiscountRatio"}},[i("span",{staticClass:"right_input"},[i("el-input",{attrs:{type:"number",maxlength:"3","auto-complete":"off"},model:{value:t.form.serveDiscountRatio,callback:function(e){t.$set(t.form,"serveDiscountRatio",e)},expression:"form.serveDiscountRatio"}},[i("template",{slot:"append"},[t._v("%")])],2)],1)]),t._v(" "),i("el-form-item",{attrs:{label:"寄养消费折扣：","label-width":t.formLabelWidth,prop:"entrustDiscountRatio"}},[i("span",{staticClass:"right_input"},[i("el-input",{attrs:{type:"number",maxlength:"3","auto-complete":"off"},model:{value:t.form.entrustDiscountRatio,callback:function(e){t.$set(t.form,"entrustDiscountRatio",e)},expression:"form.entrustDiscountRatio"}},[i("template",{slot:"append"},[t._v("%")])],2)],1)])],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{round:""},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary",round:""},on:{click:t.saveVipInfo}},[t._v("确 定")])],1)],1)],1)])},staticRenderFns:[]};var n=i("C7Lr")(s,a,!1,function(t){i("6TNe")},"data-v-32a81dc7",null);e.default=n.exports}});