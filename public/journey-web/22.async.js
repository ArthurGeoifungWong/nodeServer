(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{FVYX:function(e,t,a){"use strict";var l=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("T2oS");var d=l(a("W9HT"));a("IzEo");var u=l(a("bx4M"));a("miYZ");var r=l(a("tsqr")),o=l(a("lwsE")),c=l(a("W8MJ")),f=l(a("a1gu")),i=l(a("Nsbk")),s=l(a("7W2i"));a("2qtc");var m=l(a("kLXV"));a("giR+");var p=l(a("fyUT"));a("5Dmo");var E=l(a("3S7+"));a("+BJd");var h=l(a("mr32"));a("14J3");var g=l(a("BMrR"));a("iQDF");var v=l(a("+eQT")),b=l(a("pVnL"));a("jCWc");var y=l(a("kPKH"));a("+L6B");var k=l(a("2/Rp"));a("FJo9");var S=l(a("L41K"));a("OaEy");var M=l(a("2fM7"));a("5NDa");var C=l(a("5rEg"));a("y8nQ");var N=l(a("Vl3Y")),w=n(a("q1tI")),T=a("MuoO"),x=a("7DNP"),Y=l(a("zHco")),D=l(a("IkuO")),B=a("d9J6"),F=l(a("wd/R"));a("XDpg");var L,P,V=a("Vj/G"),O=l(a("yBck")),R=l(a("mNfy")),q=l(a("mZ2g"));F.default.locale("zh-cn");var H=N.default.Item,J=C.default.TextArea,I=M.default.Option,j=S.default.Step,A=N.default.create({})(function(e){var t=e.form.getFieldDecorator,a=e.currentSave,l=(e.returnBack,e.infoSource),n=e.conType,d=e.linkContarct,u=e.openSelectContratc,r=e.showStampModal,o=e.showPlaceFileModel,c=e.showFinishModel,f=e.modelNum,i={md:12,sm:24},s={labelCol:{span:7},wrapperCol:{span:13}},m=function(e){var t="";switch(e){case 1:t=w.default.createElement(k.default,{type:"primary",className:R.default.listDataBtn,title:"\u76d6\u7ae0",icon:"caret-right",onClick:function(){return r()}},"\u7528\u5370");break;case 2:t=w.default.createElement(k.default,{type:"primary",className:R.default.listDataBtn,title:"\u5f52\u6863",icon:"caret-right",onClick:function(){return o()}},"\u5f52\u6863");break;case 3:t=w.default.createElement(k.default,{type:"primary",className:R.default.listDataBtn,title:"\u5b8c\u6210",icon:"caret-right",onClick:function(){return c()}},"\u5b8c\u6210");break;default:break}return t};return w.default.createElement(N.default,{layout:"inline",className:R.default.addForm},"edit"===n?w.default.createElement("div",null,w.default.createElement("h3",{className:R.default.inputBlockTitle},"\u6d41\u7a0b\u72b6\u6001"),w.default.createElement(S.default,{style:{margin:"24px 0px",padding:"0px 24px"},current:l.protocolstatus-1},w.default.createElement(j,{title:"\u5f85\u76d6\u7ae0",description:"\u521b\u5efa\u5b8c\u6210\uff0c\u7b49\u5f85\u76d6\u7ae0"}),w.default.createElement(j,{title:"\u5f85\u5f52\u6863",description:"\u5df2\u76d6\u7ae0\uff0c\u7b49\u5f85\u5f52\u6863"}),w.default.createElement(j,{title:"\u6267\u884c\u4e2d",description:"\u8be5\u5408\u540c\u6b63\u5728\u6267\u884c"}),w.default.createElement(j,{title:"\u5df2\u5b8c\u6210",description:"\u8be5\u5408\u540c\u5df2\u7ecf\u5b8c\u6210"}))):"",w.default.createElement("h3",{className:R.default.inputBlockTitle},"\u534f\u8bae\u6982\u51b5"),w.default.createElement(g.default,null,w.default.createElement(y.default,{className:R.default.lineTextarea},w.default.createElement(H,{label:"\u534f\u8bae\u540d\u79f0"},t("protocolname",{initialValue:l.protocolname,rules:[{required:!0,message:"\u6b64\u9879\u4e3a\u5fc5\u586b\u9879\uff01"}]})(w.default.createElement(C.default,{placeholder:"\u8bf7\u8f93\u5165\u534f\u8bae\u540d\u79f0"})))),w.default.createElement(y.default,i,w.default.createElement(H,(0,b.default)({label:"\u534f\u8bae\u7f16\u53f7"},s),t("protocolno",{initialValue:"edit"===n?l.protocolno:f,rules:[{required:!0,message:"\u6b64\u9879\u4e3a\u5fc5\u586b\u9879\uff01"}]})(w.default.createElement(C.default,{placeholder:"\u8bf7\u8f93\u5165\u534f\u8bae\u7f16\u53f7",disabled:!0,style:{color:"rgba(0,0,0,1)"}})))),w.default.createElement(y.default,i,w.default.createElement(H,(0,b.default)({label:"\u4e1a\u52a1\u7c7b\u578b"},s),t("businesstype",{initialValue:l.businesstype?l.businesstype:""})(w.default.createElement(M.default,null,w.default.createElement(I,{value:""},"\u8bf7\u9009\u62e9"),w.default.createElement(I,{value:"1"},"\u5408\u4f5c"),w.default.createElement(I,{value:"2"},"\u519b\u5de5"),w.default.createElement(I,{value:"3"},"\u5176\u4ed6"),w.default.createElement(I,{value:"4"},"\u533b\u7597"),w.default.createElement(I,{value:"5"},"\u667a\u80fd\u7a7f\u6234"))))),w.default.createElement(y.default,i,w.default.createElement(H,(0,b.default)({label:"\u8d23\u4efb\u90e8\u95e8"},s),t("responsibledepartment",{initialValue:l.responsibledepartment})(w.default.createElement(C.default,{placeholder:"\u8bf7\u8f93\u5165\u8d23\u4efb\u90e8\u95e8"})))),w.default.createElement(y.default,i,w.default.createElement(H,(0,b.default)({label:"\u7ecf\u529e\u4eba"},s),t("responsibleperson",{initialValue:"add"===n?(0,B.getReal)():l.responsibleperson})(w.default.createElement(C.default,{placeholder:"\u8bf7\u8f93\u5165\u7ecf\u529e\u4eba"})))),w.default.createElement(y.default,i,w.default.createElement(H,(0,b.default)({label:"\u5408\u4f5c\u65b9\u8d1f\u8d23\u4eba"},s),t("supplierresponsibleperson",{initialValue:l.supplierresponsibleperson})(w.default.createElement(C.default,{placeholder:"\u8bf7\u8f93\u5165\u5408\u4f5c\u65b9\u8d1f\u8d23\u4eba"})))),w.default.createElement(y.default,i,w.default.createElement(H,(0,b.default)({label:"\u8054\u7cfb\u7535\u8bdd"},s),t("suppliertelephone",{initialValue:l.suppliertelephone})(w.default.createElement(C.default,{placeholder:"\u8bf7\u8f93\u5165\u8054\u7cfb\u7535\u8bdd"})))),w.default.createElement(y.default,i,w.default.createElement(H,(0,b.default)({label:"\u7b7e\u7ea6\u65e5\u671f"},s),t("protocoldateLong",{initialValue:l.protocoldateLong?(0,F.default)(l.protocoldateLong):null})(w.default.createElement(v.default,null))))),w.default.createElement("h3",{className:R.default.inputBlockTitle},"\u534f\u8bae\u5185\u5bb9"),w.default.createElement(g.default,null,w.default.createElement(y.default,{className:R.default.lineTextarea},w.default.createElement(H,{label:"\u5408\u4f5c\u65b9"},t("partners",{initialValue:l.partners,rules:[{required:!0,message:"\u6b64\u9879\u4e3a\u5fc5\u586b\u9879\uff01"}]})(w.default.createElement(C.default,{placeholder:"\u8bf7\u8f93\u5165\u5408\u4f5c\u65b9"})))),w.default.createElement(y.default,{className:R.default.lineTextarea},w.default.createElement(H,{label:"\u5408\u540c\u6807\u7684"},t("protocolcontent",{initialValue:l.protocolcontent})(w.default.createElement(J,{placeholder:"\u8bf7\u8f93\u5165\u5408\u540c\u6807\u7684"})))),w.default.createElement(y.default,{className:R.default.lineTextarea},w.default.createElement(H,{label:"\u8d39\u7528\u7ea6\u5b9a"},t("costagreement",{initialValue:l.costagreement})(w.default.createElement(J,{placeholder:"\u8bf7\u8f93\u5165\u8d39\u7528\u7ea6\u5b9a"})))),w.default.createElement(y.default,{className:R.default.lineTextarea},w.default.createElement(H,{label:"\u534f\u8bae\u671f\u9650"},t("protocolterm",{initialValue:l.protocolterm})(w.default.createElement(C.default,{placeholder:"\u8bf7\u8f93\u5165\u534f\u8bae\u671f\u9650"})))),w.default.createElement(y.default,{className:R.default.lineTextarea},w.default.createElement(H,{label:"\u5907\u6ce8"},t("remark",{initialValue:l.remark})(w.default.createElement(J,{placeholder:"\u8bf7\u8f93\u5165\u5907\u6ce8"}))))),1===l.protocolstatus?"":w.default.createElement("div",{className:q.default.showParams},w.default.createElement("h3",{className:R.default.inputBlockTitle},"\u7528\u5370\u5ba1\u6279"),w.default.createElement(g.default,null,w.default.createElement(y.default,i,w.default.createElement(H,(0,b.default)({label:"\u7528\u5370\u65e5\u671f"},s),w.default.createElement("div",null,l.usesealdateLong?(0,F.default)(l.usesealdateLong).format("YYYY-MM-DD"):null))),w.default.createElement(y.default,i,w.default.createElement(H,(0,b.default)({label:"\u7528\u5370\u4eba"},s),w.default.createElement("div",null,l.usesealperson))),w.default.createElement(y.default,i,w.default.createElement(H,(0,b.default)({label:"\u5ba1\u6279\u65b9\u5f0f"},s),w.default.createElement("div",null,(0,V.auditingsealtypeFilter)(l.auditingsealtype)))),w.default.createElement(y.default,i,w.default.createElement(H,(0,b.default)({label:"\u4efd\u6570"},s),w.default.createElement("div",null,l.sealnumber))))),w.default.createElement("h3",{className:R.default.inputBlockTitle},"\u5408\u540c\u5173\u8054"),w.default.createElement(g.default,null,w.default.createElement(y.default,{className:R.default.lineTextarea},w.default.createElement(H,{label:"\u5408\u540c\u5173\u8054\u60c5\u51b5"},""===d?"":d.split("\uff0c").map(function(e){return w.default.createElement(h.default,{color:"#108ee9",key:e},e)}),w.default.createElement(E.default,{placement:"topLeft",title:"\u70b9\u51fb\u9009\u62e9\u5173\u8054\u5408\u540c",arrowPointAtCenter:!0},w.default.createElement(k.default,{title:"\u9009\u62e9",onClick:function(){return u(!0)},size:"small",style:{marginRight:"10px",padding:"0px 20px"}},"\uff0b")),w.default.createElement("span",null,"\u5df2\u9009\u62e9:")," ",w.default.createElement("span",null,w.default.createElement("b",null,""===d?0:d.split("\uff0c").length)," \u4e2a"))),"edit"===n?w.default.createElement("div",null,w.default.createElement(y.default,i,w.default.createElement(H,(0,b.default)({label:"\u521b\u5efa\u65f6\u95f4"},s),w.default.createElement("div",null,(0,F.default)(l.createtime).format("YYYY-MM-DD HH:mm:ss")))),w.default.createElement(y.default,i,w.default.createElement(H,(0,b.default)({label:"\u66f4\u65b0\u65f6\u95f4"},s),w.default.createElement("div",null,(0,F.default)(l.updatetime).format("YYYY-MM-DD HH:mm:ss"))))):""),w.default.createElement("div",{style:{textAlign:"center",marginTop:"10px"}},3===l.contractstatus||4===l.contractstatus?"":w.default.createElement(k.default,{className:R.default.listDataBtn,type:"primary",icon:"check",title:"\u4fdd\u5b58",onClick:function(){return a(e)}},"\u4fdd\u5b58\u57fa\u672c\u4fe1\u606f"),m(l.protocolstatus)))}),_=N.default.create()(function(e){var t=e.form,a=e.stampModal,l=e.handleAddStamp,n=e.showStampModal,d=e.infoSource,u=t.getFieldDecorator,r={labelCol:{span:7},wrapperCol:{span:13}};return w.default.createElement(m.default,{destroyOnClose:!0,title:"\u7528\u5370\u5ba1\u6279",visible:a,maskClosable:!1,style:{paddingBottom:"200px"},onOk:function(){return l(e)},onCancel:function(){return n()}},w.default.createElement(N.default,{layout:"inline",className:R.default.addForm},w.default.createElement(H,(0,b.default)({label:"\u7528\u5370\u65e5\u671f"},r),u("usesealdateLong",{initialValue:d.usesealdateLong?(0,F.default)(d.usesealdateLong):null})(w.default.createElement(v.default,null))),w.default.createElement(H,(0,b.default)({label:"\u7528\u5370\u4eba"},r),u("usesealperson",{initialValue:d.usesealperson})(w.default.createElement(C.default,{placeholder:"\u8bf7\u8f93\u5165\u7528\u5370\u4eba"}))),w.default.createElement(H,(0,b.default)({label:"\u5ba1\u6279\u65b9\u5f0f"},r),u("auditingsealtype",{initialValue:d.auditingsealtype?d.auditingsealtype:""})(w.default.createElement(M.default,null,w.default.createElement(I,{value:""},"\u8bf7\u9009\u62e9"),w.default.createElement(I,{value:"1"},"\u4e8c\u7ef4\u7801"),w.default.createElement(I,{value:"2"},"\u4e0d\u4f7f\u7528\u4e8c\u7ef4\u7801"),w.default.createElement(I,{value:"3"},"\u7eb8\u8d28")))),w.default.createElement(H,(0,b.default)({label:"\u4efd\u6570"},r),u("sealnumber",{initialValue:d.sealnumber?d.sealnumber:0})(w.default.createElement(p.default,{min:0,style:{width:"100%"}})))))}),z=(L=(0,T.connect)(function(e){var t=e.listdata,a=e.drawbill,l=e.recivepayment,n=e.loading;return{listdata:t,drawbill:a,recivepayment:l,loading:n.models.listdata}}),L(P=function(e){function t(){var e,a;(0,o.default)(this,t);for(var l=arguments.length,n=new Array(l),d=0;d<l;d++)n[d]=arguments[d];return a=(0,f.default)(this,(e=(0,i.default)(t)).call.apply(e,[this].concat(n))),a.state={urlParams:"",loading:!1,infoSource:{},conType:"",showSelectModal:!1,linkContarct:"",stampModal:!1,modelNum:""},a.getModelNum=function(){var e=a.props.dispatch;a.setState({loading:!0}),e({type:"modelutil/getConNum",payload:{}}).then(function(e){if(e.statusCode)m.default.error({title:"\u9519\u8bef\u4fe1\u606f",content:"\u670d\u52a1\u7aef\u9519\u8bef\uff0c\u9519\u8bef\u4ee3\u7801\uff1a ".concat(e.statusCode)});else{var t=(0,F.default)().format("YYYYMMDD"),l="";l="GCI-11-XY-".concat(t,"-").concat(e.data),a.setState({modelNum:l})}a.setState({loading:!1})})},a.currentSave=function(e){var t=a.state,l=t.urlParams,n=t.conType,d=t.linkContarct,u=a.props.dispatch,r=e.form;r.validateFields(function(e,t){if(!e){var r=t,o="";"add"===n?o="protocoldata/addData":(r.protocolid=l.protocolid,o="protocoldata/updateData"),r.protocoldateLong=t.protocoldateLong?(0,F.default)(t.protocoldateLong).valueOf():0,r.usesealdateLong=t.usesealdateLong?(0,F.default)(t.usesealdateLong).valueOf():0,r.relatedcontractname=d,a.setState({loading:!0}),u({type:o,payload:r}).then(function(e){e.statusCode?(m.default.error({title:"\u9519\u8bef\u4fe1\u606f",content:"\u670d\u52a1\u7aef\u9519\u8bef\uff0c\u9519\u8bef\u4ee3\u7801\uff1a ".concat(e.statusCode)}),a.setState({loading:!1})):(-1===e.code?m.default.error({title:"\u9519\u8bef\u4fe1\u606f",content:"\u670d\u52a1\u7aef\u9519\u8bef\uff0c\u9519\u8bef\u4ee3\u7801\uff1a ".concat(e.msg,"\u8bf7\u70b9\u51fb\u786e\u5b9a\u6309\u94ae\u91cd\u65b0\u83b7\u53d6\u534f\u8bae\u7f16\u53f7\u3002"),okText:"\u786e\u5b9a",onOk:function(){return a.getModelNum()}}):u(x.routerRedux.push({pathname:"/result/result-success",query:{resultType:"2"}})),a.setState({loading:!1}))})}})},a.returnBack=function(){var e=a.props.dispatch;e(x.routerRedux.push({pathname:"/compact/protocol-list"}))},a.openSelectContratc=function(e,t){var l=a.state.linkContarct;a.setState({showSelectModal:!!e}),t?(a.setState({linkContarct:t.join("\uff0c")}),a.selectData(t)):(a.child.getCon(),a.child.setState({condata:""===l?[]:l.split("\uff0c")}))},a.showStampModal=function(){var e=a.state.stampModal;a.setState({stampModal:!e})},a.handleAddStamp=function(e){var t=e.form,l=a.props.dispatch,n=a.state.urlParams;t.validateFields(function(e,t){if(!e){var d=t;d.protocolid=n.protocolid,d.usesealdateLong=t.usesealdateLong?(0,F.default)(t.usesealdateLong).valueOf():0,d.protocolstatus=2,l({type:"protocoldata/updateData",payload:d}).then(function(e){l({type:"protocoldata/getInfo",payload:{protocolid:d.protocolid}}).then(function(e){e.statusCode?(m.default.error({title:"\u9519\u8bef\u4fe1\u606f",content:"\u670d\u52a1\u7aef\u9519\u8bef\uff0c\u9519\u8bef\u4ee3\u7801\uff1a ".concat(e.statusCode)}),a.setState({loading:!1})):(r.default.success("\u4fdd\u5b58\u5370\u7ae0\u4fe1\u606f\u6210\u529f\uff01"),a.setState({infoSource:e.data,loading:!1}))})}),a.showStampModal()}})},a.showPlaceFileModel=function(){m.default.confirm({title:"\u5f52\u6863\u5408\u540c",content:"\u786e\u5b9a\u8981\u5c06\u8be5\u5408\u540c\u5f52\u6863\u5417\uff08\u5f52\u6863\u540e\u5408\u540c\u4fe1\u606f\u5c06\u4e0d\u5141\u8bb8\u518d\u4fee\u6539\uff09\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){return a.placeFile()}})},a.showRevicePlaceFileModal=function(){var e=a.state.recivePlaceFileModal;a.setState({recivePlaceFileModal:!e})},a.showFinishModel=function(){m.default.confirm({title:"\u5b8c\u6210\u5408\u540c",content:"\u786e\u5b9a\u8981\u5c06\u5b8c\u6210\u8be5\u5408\u540c\u5417\uff08\u5b8c\u6210\u540e\u7684\u5408\u540c\u6240\u6709\u4fe1\u606f\u5c06\u4e0d\u5141\u8bb8\u518d\u4fee\u6539\uff09\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){return a.finishFile()}})},a.placeFile=function(e){var t=a.props.dispatch,l=a.state,n=l.urlParams,d=l.infoSource,u={};u.protocolid=n.protocolid,u.protocolstatus=3,"1"===d.bigcategory&&(u.statisticalmonth=e),t({type:"protocoldata/updateData",payload:u}).then(function(e){r.default.success("\u5f52\u6863\u6210\u529f\uff01"),a.setState({recivePlaceFileModal:!1}),t({type:"protocoldata/getInfo",payload:{protocolid:u.protocolid}}).then(function(e){e.statusCode?(m.default.error({title:"\u9519\u8bef\u4fe1\u606f",content:"\u670d\u52a1\u7aef\u9519\u8bef\uff0c\u9519\u8bef\u4ee3\u7801\uff1a ".concat(e.statusCode)}),a.setState({loading:!1})):a.setState({infoSource:e.data,loading:!1})})})},a.finishFile=function(){var e=a.props.dispatch,t=a.state.urlParams,l={};l.protocolid=t.protocolid,l.protocolstatus=4,e({type:"protocoldata/updateData",payload:l}).then(function(t){r.default.success("\u5408\u540c\u5df2\u6210\u529f\u5b8c\u6210\uff01"),e({type:"protocoldata/getInfo",payload:{protocolid:l.protocolid}}).then(function(e){e.statusCode?(m.default.error({title:"\u9519\u8bef\u4fe1\u606f",content:"\u670d\u52a1\u7aef\u9519\u8bef\uff0c\u9519\u8bef\u4ee3\u7801\uff1a ".concat(e.statusCode)}),a.setState({loading:!1})):a.setState({infoSource:e.data,loading:!1})})})},a.selectData=function(e){a.setState({linkContarct:e.join("\uff0c")})},a.onSelectRef=function(e){a.child=e},a}return(0,s.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.location,l=t.dispatch;"{}"!==JSON.stringify(a.query)?(this.setState({urlParams:a.query,loading:!0,conType:"edit"}),l({type:"protocoldata/getInfo",payload:{protocolid:a.query.protocolid}}).then(function(t){t.statusCode?(m.default.error({title:"\u9519\u8bef\u4fe1\u606f",content:"\u670d\u52a1\u7aef\u9519\u8bef\uff0c\u9519\u8bef\u4ee3\u7801\uff1a ".concat(t.statusCode)}),e.setState({loading:!1})):e.setState({infoSource:t.data,linkContarct:t.data.relatedcontractname,loading:!1})})):(this.setState({conType:"add"}),this.getModelNum())}},{key:"render",value:function(){var e=this,t=this.state,a=t.infoSource,l=t.loading,n=t.conType,r=t.linkContarct,o=t.showSelectModal,c=t.stampModal,f=t.modelNum,i="\u534f\u8bae\u8be6\u60c5";"add"===n&&(i="\u65b0\u5efa\u534f\u8bae");var s={infoSource:a,conType:n,linkContarct:r,modelNum:f},m={currentSave:this.currentSave,returnBack:this.returnBack,openSelectContratc:this.openSelectContratc,showStampModal:this.showStampModal,showPlaceFileModel:this.showPlaceFileModel,showFinishModel:this.showFinishModel},p={showModal:o,linkContarct:r},E={openSelectContratc:this.openSelectContratc,onSelectRef:this.onSelectRef},h={stampModal:c,infoSource:a,showStampModal:this.showStampModal,handleAddStamp:this.handleAddStamp},g={infoSource:a,linkContarct:r};return w.default.createElement(Y.default,{title:i},w.default.createElement(d.default,{spinning:l},w.default.createElement(u.default,{bordered:!1},w.default.createElement("div",{className:R.default.tableList},w.default.createElement("div",{className:R.default.reBtnLine,style:{borderBottom:"1px dashed #eee"}},w.default.createElement(k.default,{className:R.default.reBtn,type:"danger",icon:"rollback",onClick:function(){e.returnBack()}},"\u8fd4\u56de\u4e0a\u4e00\u7ea7")),void 0===a.protocolstatus||a.protocolstatus<3?w.default.createElement(A,(0,b.default)({},s,m)):w.default.createElement(O.default,g)))),w.default.createElement(D.default,(0,b.default)({},p,E)),w.default.createElement(_,h))}}]),t}(w.PureComponent))||P),W=z;t.default=W},"Vj/G":function(e,t,a){"use strict";function l(e){var t="";switch(e){case"1":t="\u5408\u4f5c";break;case"2":t="\u519b\u5de5";break;case"3":t="\u5176\u4ed6";break;case"4":t="\u533b\u7597";break;case"5":t="\u667a\u80fd\u7a7f\u6234";break;default:break}return t}function n(e){var t="";switch(e){case"1":t="\u4e8c\u7ef4\u7801";break;case"2":t="\u4e0d\u4f7f\u7528\u4e8c\u7ef4\u7801";break;case"3":t="\u7eb8\u8d28";break;default:break}return t}function d(){}Object.defineProperty(t,"__esModule",{value:!0}),t.businesstypeFilter=l,t.auditingsealtypeFilter=n,t.test=d},mZ2g:function(e,t,a){e.exports={showParams:"antd-pro\\pages\\-compact-manage\\-protocol-manage\\-protocol-add-showParams",steps:"antd-pro\\pages\\-compact-manage\\-protocol-manage\\-protocol-add-steps",clearCard:"antd-pro\\pages\\-compact-manage\\-protocol-manage\\-protocol-add-clearCard",retCard:"antd-pro\\pages\\-compact-manage\\-protocol-manage\\-protocol-add-retCard",successShow:"antd-pro\\pages\\-compact-manage\\-protocol-manage\\-protocol-add-successShow",reBtnLine:"antd-pro\\pages\\-compact-manage\\-protocol-manage\\-protocol-add-reBtnLine",reBtn:"antd-pro\\pages\\-compact-manage\\-protocol-manage\\-protocol-add-reBtn",addForm:"antd-pro\\pages\\-compact-manage\\-protocol-manage\\-protocol-add-addForm"}},yBck:function(e,t,a){"use strict";var l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+BJd");var n=l(a("mr32"));a("14J3");var d=l(a("BMrR")),u=l(a("pVnL"));a("jCWc");var r=l(a("kPKH"));a("FJo9");var o=l(a("L41K"));a("y8nQ");var c=l(a("Vl3Y")),f=l(a("q1tI")),i=l(a("wd/R"));a("XDpg");var s=a("Vj/G"),m=l(a("A4CJ")),p=l(a("mZ2g")),E=l(a("mNfy"));i.default.locale("zh-cn");var h=c.default.Item,g=o.default.Step,v={md:12,sm:24},b={labelCol:{span:7},wrapperCol:{span:13}},y=function(e){var t=e.infoSource,a=e.linkContarct;return f.default.createElement(c.default,{layout:"inline",className:[m.default.addForm,p.default.showParams]},f.default.createElement("h3",{className:m.default.inputBlockTitle},"\u6d41\u7a0b\u72b6\u6001"),f.default.createElement(o.default,{style:{margin:"24px 0px",padding:"0px 24px"},current:t.protocolstatus-1},f.default.createElement(g,{title:"\u5f85\u76d6\u7ae0",description:"\u521b\u5efa\u5b8c\u6210\uff0c\u7b49\u5f85\u76d6\u7ae0"}),f.default.createElement(g,{title:"\u5f85\u5f52\u6863",description:"\u5df2\u76d6\u7ae0\uff0c\u7b49\u5f85\u5f52\u6863"}),f.default.createElement(g,{title:"\u6267\u884c\u4e2d",description:"\u8be5\u5408\u540c\u6b63\u5728\u6267\u884c"}),f.default.createElement(g,{title:"\u5df2\u5b8c\u6210",description:"\u8be5\u5408\u540c\u5df2\u7ecf\u5b8c\u6210"})),f.default.createElement("h3",{className:m.default.inputBlockTitle},"\u534f\u8bae\u6982\u51b5"),f.default.createElement(d.default,null,f.default.createElement(r.default,{className:E.default.lineTextarea},f.default.createElement(h,{label:"\u534f\u8bae\u540d\u79f0"},f.default.createElement("div",null,t.protocolname))),f.default.createElement(r.default,v,f.default.createElement(h,(0,u.default)({label:"\u534f\u8bae\u7f16\u53f7"},b),f.default.createElement("div",null,t.protocolno))),f.default.createElement(r.default,v,f.default.createElement(h,(0,u.default)({label:"\u4e1a\u52a1\u7c7b\u578b"},b),f.default.createElement("div",null,(0,s.businesstypeFilter)(t.businesstype)))),f.default.createElement(r.default,v,f.default.createElement(h,(0,u.default)({label:"\u8d23\u4efb\u90e8\u95e8"},b),f.default.createElement("div",null,t.responsibledepartment))),f.default.createElement(r.default,v,f.default.createElement(h,(0,u.default)({label:"\u7ecf\u529e\u4eba"},b),f.default.createElement("div",null,t.responsibleperson))),f.default.createElement(r.default,v,f.default.createElement(h,(0,u.default)({label:"\u5408\u4f5c\u65b9\u8d1f\u8d23\u4eba"},b),f.default.createElement("div",null,t.supplierresponsibleperson))),f.default.createElement(r.default,v,f.default.createElement(h,(0,u.default)({label:"\u8054\u7cfb\u7535\u8bdd"},b),f.default.createElement("div",null,t.suppliertelephone))),f.default.createElement(r.default,v,f.default.createElement(h,(0,u.default)({label:"\u7b7e\u7ea6\u65e5\u671f"},b),f.default.createElement("div",null,t.protocoldateLong?(0,i.default)(t.protocoldateLong).format("YYYY-MM-DD"):null)))),f.default.createElement("h3",{className:m.default.inputBlockTitle},"\u534f\u8bae\u5185\u5bb9"),f.default.createElement(d.default,null,f.default.createElement(r.default,{className:E.default.lineTextarea},f.default.createElement(h,{label:"\u5408\u4f5c\u65b9"},f.default.createElement("div",null,t.partners))),f.default.createElement(r.default,{className:E.default.lineTextarea},f.default.createElement(h,{label:"\u5408\u540c\u6807\u7684"},f.default.createElement("div",null,t.protocolcontent))),f.default.createElement(r.default,{className:E.default.lineTextarea},f.default.createElement(h,{label:"\u8d39\u7528\u7ea6\u5b9a"},f.default.createElement("div",null,t.costagreement))),f.default.createElement(r.default,{className:E.default.lineTextarea},f.default.createElement(h,{label:"\u534f\u8bae\u671f\u9650"},f.default.createElement("div",null,t.protocolterm))),f.default.createElement(r.default,{className:E.default.lineTextarea},f.default.createElement(h,{label:"\u5907\u6ce8"},f.default.createElement("div",null,t.remark)))),f.default.createElement("h3",{className:m.default.inputBlockTitle},"\u7528\u5370\u5ba1\u6279"),f.default.createElement(d.default,null,f.default.createElement(r.default,v,f.default.createElement(h,(0,u.default)({label:"\u7528\u5370\u65e5\u671f"},b),f.default.createElement("div",null,t.usesealdateLong?(0,i.default)(t.usesealdateLong).format("YYYY-MM-DD"):null))),f.default.createElement(r.default,v,f.default.createElement(h,(0,u.default)({label:"\u7528\u5370\u4eba"},b),f.default.createElement("div",null,t.usesealperson))),f.default.createElement(r.default,v,f.default.createElement(h,(0,u.default)({label:"\u5ba1\u6279\u65b9\u5f0f"},b),f.default.createElement("div",null,(0,s.auditingsealtypeFilter)(t.auditingsealtype)))),f.default.createElement(r.default,v,f.default.createElement(h,(0,u.default)({label:"\u4efd\u6570"},b),f.default.createElement("div",null,t.sealnumber)))),f.default.createElement("h3",{className:m.default.inputBlockTitle},"\u5408\u540c\u5173\u8054"),f.default.createElement(d.default,null,f.default.createElement(r.default,{className:E.default.lineTextarea},f.default.createElement(h,{label:"\u5408\u540c\u5173\u8054\u60c5\u51b5"},""===a?"":a.split("\uff0c").map(function(e){return f.default.createElement(n.default,{color:"#108ee9",key:e},e)}))),f.default.createElement(r.default,v,f.default.createElement(h,(0,u.default)({label:"\u521b\u5efa\u65f6\u95f4"},b),f.default.createElement("div",null,(0,i.default)(t.createtime).format("YYYY-MM-DD HH:mm:ss")))),f.default.createElement(r.default,v,f.default.createElement(h,(0,u.default)({label:"\u66f4\u65b0\u65f6\u95f4"},b),f.default.createElement("div",null,(0,i.default)(t.updatetime).format("YYYY-MM-DD HH:mm:ss"))))))},k=y;t.default=k}}]);