(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bac7ba8"],{"4c53":function(e,t,a){"use strict";var r=a("23e7"),n=a("857a"),i=a("af03");r({target:"String",proto:!0,forced:i("sub")},{sub:function(){return n(this,"sub","","")}})},5309:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("splitpanes",{ref:"mainSplit"},[a("pane",{attrs:{size:e.splitSize[0]}},[a("div",{staticClass:"split-container"},[a("h2",[e._v("菜單分類")]),a("TableView",{ref:"main",staticClass:"table",attrs:{data:e.data,"column-options":e.columnOptions[0],form:e.formBody[0],rules:e.rules[0],"table-options":{isCanSelection:!0},page:e.page[0],"page-size":e.pageSize[0],target:0,loading:e.loading[0]},on:{search:e.getDataset,refresh:e.getDataset,delete:e.deleteDataset,create:e.createDataset,edit:e.editDataset,"select-row":e.onSelectRow,"size-change":e.handlePageSizeChange,"page-change":e.handlePageChange}})],1)]),a("pane",{attrs:{size:e.splitSize[1]}},[e.selectRow&&Object.keys(e.selectRow).length>0?a("div",{staticClass:"split-container"},[a("h2",[e._v(e._s(e.selectRow.name)+" 菜單內容")]),a("TableView",{ref:"sub",staticClass:"table",attrs:{data:e.subData,"column-options":e.columnOptions[1],form:e.formBody[1],"table-options":{isCanUpload:!0},name:"/Menu/MenuItem/",page:e.page[1],"page-size":e.pageSize[1],rules:e.rules[1],loading:e.loading[1],target:1,"target-object":{menu:e.selectRow}},on:{search:function(t){return e.getSubDataset(e.selectRow.id,t)},refresh:function(t){return e.getSubDataset(e.selectRow.id)},delete:e.deleteSubDataset,create:e.createSubDataset,edit:e.editSubDataset,"size-change":e.handlePageSizeChange,"page-change":e.handlePageChange}})],1):e._e()])],1)],1)},n=[],i=(a("d3b7"),a("4c53"),a("4ec3")),s=a("512e"),c=a("0253"),o=a("6464"),l={name:"Menu",components:{Splitpanes:s["Splitpanes"],Pane:s["Pane"],TableView:c["a"]},data:function(){return{loading:[!1,!1],page:[1,1],pageSize:[10,10],splitSize:[50,50],data:[],selectRow:{},subData:[]}},computed:{columnOptions:function(){return[[{label:"ID",field:"id"},{label:"分類名稱",field:"name"},{label:"顧客操作",field:"customerAction"},{label:"顯示",field:"visible"}],[{label:"ID",field:"id"},{label:"餐點名稱",field:"name"},{label:"image",field:"image"},{label:"價格",field:"price"},{label:"描述",field:"description"},{label:"上架狀態",field:"status.name"}]]},rules:function(){return[{name:[{required:!0,message:"必填欄位",trigger:"blur"}]},{name:[{required:!0,message:"必填欄位",trigger:"blur"}],menu:[{required:!0,message:"必填欄位",trigger:"blur"}],price:[{required:!0,message:"必填欄位",trigger:"blur"}],description:[{required:!0,message:"必填欄位",trigger:"blur"}],status:[{required:!0,message:"必填欄位",trigger:"blur"}]}]},formBody:function(){return[[{label:"分類名稱",field:"name",type:"text",inputType:"el-input"},{label:"顧客操作",field:"customerAction",type:"boolean",inputType:"el-switch"},{label:"顯示",field:"visible",type:"boolean",inputType:"el-switch"}],[{label:"餐點名稱",field:"name",type:"text",inputType:"el-input"},{label:"目錄分類",field:"menu",type:"text",inputType:"el-select",dataset:this.getMenuSelection},{label:"價格",field:"price",type:"decimal",inputType:"el-input-number"},{label:"描述",field:"description",type:"text",inputType:"el-input"},{label:"上架狀態",field:"status",type:"text",inputType:"el-select",dataset:this.getMenuStatusSelection},{label:"食譜",field:"recipes",type:"select",inputType:"ItemValueField",options:{options:{master:"label",child:"material",append:"unit",combineField:"materialValue",value:"count"}},dataset:this.getMaterialSelection},{label:"套餐內容",field:"menuSet",type:"select",inputType:"el-select",dataset:this.getMenuItemSelection,options:{multiple:!0,filterable:!0}}]]}},mounted:function(){this.getDataset()},methods:{getDataset:function(e){var t=this;this.$set(this.loading,0,!0);var a="?page="+this.page[0]+"&page_size="+this.pageSize[0];e&&(a+="&search="+e),Object(i["y"])(a).then((function(e){t.data=e.data,t.$refs["main"].createDialog=!1,t.$refs["main"].formBody={},t.$refs["main"].editItem={}})).catch((function(e){Object(o["a"])("error","Error",e,!1)})).finally((function(){t.$set(t.loading,0,!1)}))},getMaterialSelection:function(){return Object(i["v"])("?selection=name&children=materials").then((function(e){return Promise.resolve(e.data)})).catch((function(e){return Object(o["a"])("error","Error",e,!1),Promise.reject()}))},getMenuSelection:function(){return Object(i["y"])("?selection=name").then((function(e){return Promise.resolve(e.data)})).catch((function(e){return Object(o["a"])("error","Error",e,!1),Promise.reject()}))},getMenuStatusSelection:function(){return Object(i["A"])("?selection=name").then((function(e){return Promise.resolve(e.data)})).catch((function(e){return Object(o["a"])("error","Error",e,!1),Promise.reject()}))},getMenuItemSelection:function(){return Object(i["x"])("?selection=name").then((function(e){return Promise.resolve(e.data)})).catch((function(e){return Object(o["a"])("error","Error",e,!1),Promise.reject()}))},deleteDataset:function(e){var t=this;Object(i["h"])(e.id).then((function(e){Object(o["a"])("success","Delete Success",e.data,!1),t.getDataset()})).catch((function(e){return e.response?Object(o["a"])("error","Error",e.response.data,!1):Object(o["a"])("error","Error",e,!1)}))},createDataset:function(e){var t=this;Object(i["R"])(e).then((function(e){Object(o["a"])("success","Create Success",e.data,!1),t.$refs["main"].createDialog=!1,t.$refs["main"].formBody={},t.$refs["main"].editItem={},t.getDataset()})).catch((function(e){return e.response?Object(o["a"])("error","Error",e.response.data,!1):Object(o["a"])("error","Error",e,!1)}))},editDataset:function(e){var t=this;Object(i["db"])(e.id,e.data).then((function(e){Object(o["a"])("success","Edit Success",e.data,!1),t.$refs["main"].createDialog=!1,t.$refs["main"].formBody={},t.$refs["main"].editItem={},t.getDataset()})).catch((function(e){return e.response?Object(o["a"])("error","Error",e.response.data,!1):Object(o["a"])("error","Error",e,!1)}))},onSelectRow:function(e){this.selectRow=e,e&&(this.splitSize=[30,70],this.getSubDataset(e.id))},getSubDataset:function(e,t){var a=this;this.$set(this.loading,1,!0);var r="?menu="+e+"&page="+this.page[1]+"&page_size="+this.pageSize[1];t&&(r+="&search="+t),Object(i["x"])(r).then((function(e){a.subData=e.data})).catch((function(e){Object(o["a"])("error","Error",e,!1)})).finally((function(){a.$set(a.loading,1,!1)}))},deleteSubDataset:function(e){var t=this;Object(i["i"])(e.id).then((function(e){Object(o["a"])("success","Delete Success",e.data,!1),t.getSubDataset(t.selectRow.id)})).catch((function(e){return e.response?Object(o["a"])("error","Error",e.response.data,!1):Object(o["a"])("error","Error",e,!1)}))},createSubDataset:function(e){var t=this;Object(i["S"])(e).then((function(e){Object(o["a"])("success","Create Success",e.data,!1),t.$refs["sub"].createDialog=!1,t.$refs["sub"].formBody={},t.$refs["sub"].editItem={},t.getSubDataset(t.selectRow.id)})).catch((function(e){return e.response?Object(o["a"])("error","Error",e.response.data,!1):Object(o["a"])("error","Error",e,!1)}))},editSubDataset:function(e){var t=this;Object(i["eb"])(e.id,e.data).then((function(e){Object(o["a"])("success","Edit Success",e.data,!1),t.$refs["sub"].createDialog=!1,t.$refs["sub"].formBody={},t.$refs["sub"].editItem={},t.getSubDataset(t.selectRow.id)})).catch((function(e){return e.response?Object(o["a"])("error","Error",e.response.data,!1):Object(o["a"])("error","Error",e,!1)}))},handlePageSizeChange:function(e){switch(this.$set(this.pageSize,e[0],e[1]),e[0]){case 0:return this.getDataset();case 1:return this.getSubDataset(this.selectRow.id);case 2:return this.getInnerDataset(this.selectSubRow.id)}},handlePageChange:function(e){switch(this.$set(this.page,e[0],e[1]),e[0]){case 0:return this.getDataset();case 1:return this.getSubDataset(this.selectRow.id);case 2:return this.getInnerDataset(this.selectSubRow.id)}}}},u=l,d=(a("586b"),a("2877")),b=Object(d["a"])(u,r,n,!1,null,null,null);t["default"]=b.exports},"586b":function(e,t,a){"use strict";a("cdaf")},"857a":function(e,t,a){var r=a("1d80"),n=/"/g;e.exports=function(e,t,a,i){var s=String(r(e)),c="<"+t;return""!==a&&(c+=" "+a+'="'+String(i).replace(n,"&quot;")+'"'),c+">"+s+"</"+t+">"}},af03:function(e,t,a){var r=a("d039");e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},cdaf:function(e,t,a){}}]);