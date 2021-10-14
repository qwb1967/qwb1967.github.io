webpackJsonp([17],{QBhu:function(e,t){},"fm/v":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("IHPB"),o=s.n(a),i=s("vQ9I"),l={data:function(){return{searchValue:"",select:"",goods:{},tableData:[],dialogTitle:"",dialogFormVisible:!1,category:[],searchType:[{key:"",value:"全部"}],cellWidth:"",form:{},formLabelWidth:"120px",info:0,pageNum:1,pageSize:10,serType:0,rules:{serType:[{required:!0,message:"请选择服务类别",trigger:"blur"}],name:[{required:!0,message:"请输入服务名称",trigger:"blur"}],price:[{required:!0,message:"请输入销售价格",trigger:"blur"}]}}},mounted:function(){this.getGoods(),this.getPrimaryBusiness()},methods:{getGoods:function(){var e=this;Object(i.a)({url:"/api/petSer/list",method:"get",params:{pageNum:this.pageNum,pageSize:this.pageSize,name:this.searchValue,type:this.select},success:function(t){e.goods=t.data.data,e.tableData=t.data.data.list},fail:function(e){console.log(e)}},this)},goodsEdit:function(e){var t=this;this.$nextTick(function(){t.$refs.form.resetFields()}),this.form={},this.info=1,this.dialogTitle="编辑服务",this.dialogFormVisible=!0,Object(i.a)({url:"/api/petSer/info",method:"get",params:{id:e},success:function(e){t.form=e.data.data},fail:function(e){console.log(e)}},this)},saveGoodssInfo:function(){var e=this;this.$refs.form.validate(function(t){t&&(1===e.info?Object(i.a)({url:"/api/petSer/edit",method:"post",data:e.form,success:function(t){200===t.data.code?(e.$message({message:"编辑成功",center:!0,type:"success"}),e.form={},e.dialogFormVisible=!1,e.getGoods()):e.$message({message:"编辑失败",center:!0,type:"error"})},fail:function(e){console.log(e)}},e):Object(i.a)({url:"/api/petSer/save",method:"post",data:e.form,success:function(t){200===t.data.code?(e.$message({message:"新增成功",center:!0,type:"success"}),e.form={},e.dialogFormVisible=!1,e.getGoods()):e.$message({message:"新增失败",center:!0,type:"error"})},fail:function(e){console.log(e)}},e))})},goodsAdd:function(){var e=this;this.$nextTick(function(){e.$refs.form.resetFields()}),this.form={},this.info=2,this.dialogTitle="新增服务",this.dialogFormVisible=!0,this.form={}},getPrimaryBusiness:function(){var e=this;Object(i.a)({url:"/api/store/getPrimaryBusiness",method:"get",success:function(t){var s;e.category=t.data.data,(s=e.searchType).push.apply(s,o()(t.data.data)),console.log(e.category)},fail:function(e){console.log(e)}},this)},handleCurrentChange:function(e){this.pageNum=e,this.getGoods()},handleSizeChange:function(e){this.pageSize=e,this.getGoods()},goodsDelete:function(e){var t=this;this.$confirm("此操作将删除该服务, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(function(){Object(i.a)({url:"/api/petSer/del",method:"get",params:{id:e},success:function(e){t.$message({message:"已删除",center:!0,type:"success"}),t.getGoods()},fail:function(e){console.log(e)}},t)}).catch(function(){t.$message({type:"info",center:!0,message:"已取消"})})}}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page"},[s("div",{staticClass:"search"},[s("div",{staticClass:"frame"},[s("el-input",{attrs:{size:"medium",placeholder:"服务名称、拼音简称"},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}},[s("el-select",{staticClass:"select-left",attrs:{slot:"prepend",size:"medium",placeholder:"请选择"},on:{change:e.getGoods},slot:"prepend",model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},e._l(e.searchType,function(e){return s("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})}),1)],1)],1),e._v(" "),s("div",{staticClass:"frame-btn"},[s("el-button",{attrs:{size:"medium",type:"primary",icon:"el-icon-search",round:""},on:{click:e.getGoods}},[e._v("查询")]),e._v(" "),s("el-button",{attrs:{size:"medium",type:"danger",round:"",icon:"el-icon-plus"},on:{click:e.goodsAdd}},[e._v("新增")])],1)]),e._v(" "),s("div",{staticClass:"table"},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[s("el-table-column",{attrs:{label:"类别",align:"center",width:e.cellWidth},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.serTypeDesc))])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"名称",align:"center",width:e.cellWidth},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n      "+e._s(t.row.name)+"\n    ")]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"售价",align:"center",width:e.cellWidth},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n      "+e._s(t.row.price)+"\n    ")]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"打折",align:"center",width:e.cellWidth},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n      "+e._s(t.row.discount?"是":"否")+"\n    ")]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"操作",align:"center",width:e.cellWidth},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{icon:"el-icon-edit",size:"small",round:""},on:{click:function(s){return e.goodsEdit(t.row.id)}}},[e._v("编辑")]),e._v(" "),s("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"small",round:""},on:{click:function(s){return e.goodsDelete(t.row.id)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),s("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogFormVisible,width:"500px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[s("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[s("el-form-item",{attrs:{label:"类别：","label-width":e.formLabelWidth,prop:"serType"}},[s("span",{staticClass:"right_input"},[s("el-select",{staticStyle:{width:"230px"},attrs:{size:"medium",placeholder:"请选择"},model:{value:e.form.serType,callback:function(t){e.$set(e.form,"serType",t)},expression:"form.serType"}},e._l(e.category,function(e){return s("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})}),1)],1)]),e._v(" "),s("el-form-item",{attrs:{label:"名称：","label-width":e.formLabelWidth,prop:"name"}},[s("span",{staticClass:"right_input"},[s("el-input",{attrs:{size:"medium","auto-complete":"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)]),e._v(" "),s("el-form-item",{attrs:{label:"售价：","label-width":e.formLabelWidth,prop:"price"}},[s("span",{staticClass:"right_input"},[s("el-input",{attrs:{size:"medium",type:"number","auto-complete":"off"},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1)])],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{size:"medium",round:""},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{size:"medium",type:"primary",round:""},on:{click:e.saveGoodssInfo}},[e._v("确 定")])],1)],1),e._v(" "),s("div",{staticClass:"block"},[s("el-pagination",{attrs:{"page-size":10,background:"",layout:"total, prev, pager, next",total:e.goods.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var r=s("C7Lr")(l,n,!1,function(e){s("QBhu")},"data-v-16698460",null);t.default=r.exports}});