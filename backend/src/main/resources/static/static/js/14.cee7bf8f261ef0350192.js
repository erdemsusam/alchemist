webpackJsonp([14],{gexn:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("mvHQ"),i=t.n(a),o=t("Dd8w"),s=t.n(o),c=t("M4fF"),r=t.n(c),l=t("NYxO"),d={data:function(){return{activeName:"mail",notifications:{mail:{blocks:!1},desktop:{blocks:!1,sound:!1}}}},computed:s()({},Object(l.c)("settings",["mail","all"])),methods:s()({},Object(l.b)("settings",["save"]),{onSave:function(){var e={name:"MAIL",value:i()(this.form)};this.save(e)},init:function(){var e=r.a.cloneDeep(this.mail);e&&(this.form=e)}}),mounted:function(){this.init()}},u={render:function(){var e=this.$createElement,n=this._self._c||e;return n("el-row",{staticClass:"mailSettings-container",attrs:{justify:"center"}},[n("el-col",{attrs:{span:12,push:6}},[n("el-container",[n("el-header",[this._v("Coming Soon")])],1)],1)],1)},staticRenderFns:[]};var f=t("VU/8")(d,u,!1,function(e){t("js2e")},"data-v-3e13d8ce",null);n.default=f.exports},js2e:function(e,n,t){var a=t("u/sG");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t("rjj0")("d6738f0e",a,!0)},"u/sG":function(e,n,t){(e.exports=t("FZ+f")(!1)).push([e.i,"\n.mailSettings-container[data-v-3e13d8ce] {\n  padding: 40px 0;\n}\n.el-checkbox-group[data-v-3e13d8ce] {\n  width: 320px;\n}\n.el-header[data-v-3e13d8ce], .el-footer[data-v-3e13d8ce] {\n  background-color: #EAE9E1;\n  color: #908A82;\n  text-align: center;\n  line-height: 60px;\n  width: 100%;\n  border-radius: 5px;\n}\n\n",""])}});