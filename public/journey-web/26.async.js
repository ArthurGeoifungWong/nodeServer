(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{LfbY:function(e,t,a){"use strict";var l=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("g9YV");var r=l(a("wCAj"));a("IzEo");var d=l(a("bx4M"));a("/zsF");var o=l(a("PArb"));a("14J3");var i=l(a("BMrR"));a("5Dmo");var u=l(a("3S7+"));a("+L6B");var c=l(a("2/Rp"));a("+BJd");var f=l(a("mr32"));a("jCWc");var m=l(a("kPKH")),s=l(a("lwsE")),p=l(a("W8MJ")),y=l(a("a1gu")),v=l(a("Nsbk")),h=l(a("7W2i"));a("2qtc");var E=l(a("kLXV"));a("T2oS");var g=l(a("W9HT"));a("giR+");var M=l(a("fyUT")),k=l(a("pVnL"));a("OaEy");var b=l(a("2fM7"));a("5NDa");var w=l(a("5rEg"));a("iQDF");var S=l(a("+eQT"));a("y8nQ");var x=l(a("Vl3Y")),C=n(a("q1tI")),D=a("MuoO"),R=a("7DNP"),I=a("4ZfN"),Y=l(a("zHco")),L=l(a("IkuO")),F=l(a("KGTK")),B=l(a("wd/R"));a("XDpg");var V,N,P,T=l(a("mNfy"));B.default.locale("zh-cn");var O=x.default.Item,A=S.default.MonthPicker,H=w.default.TextArea,q=b.default.Option,J=x.default.create({})(function(e){var t=e.form,a=e.showModal,l=e.showReciveModal,n=e.handleAdd,r=e.reciveModalLoading,d=e.itemRecord,o={labelCol:{span:7},wrapperCol:{span:13}},i="{}"===JSON.stringify(d)?"\u65b0\u5efa\u6536\u6b3e\u6570\u636e":"\u7f16\u8f91\u6536\u6b3e\u6570\u636e",u="{}"===JSON.stringify(d)?"add":"edit";return C.default.createElement(E.default,{destroyOnClose:!0,title:i,visible:l,maskClosable:!1,style:{paddingBottom:"200px"},onOk:function(){return n(e)},onCancel:function(){return a(!1,{},u)}},C.default.createElement(g.default,{spinning:r},C.default.createElement(x.default,{layout:"inline",className:T.default.addForm},C.default.createElement(O,(0,k.default)({label:"\u7ed3\u7b97\u6708\u4efd"},o),t.getFieldDecorator("paymentmonth",{initialValue:d.paymentmonth?(0,B.default)(d.paymentmonth):null})(C.default.createElement(A,{placeholder:"\u8bf7\u9009\u62e9\u6708\u4efd"}))),C.default.createElement(O,(0,k.default)({label:"\u5f00\u7968\u91d1\u989d"},o),t.getFieldDecorator("invoiceamount",{initialValue:d.invoiceamount?d.invoiceamount:0})(C.default.createElement(M.default,{style:{width:"100%"},step:100,min:0,formatter:function(e){return(0,I.filterRMB)(e,"formatter")},parser:function(e){return(0,I.filterRMB)(e,"parser")}}))),C.default.createElement(O,(0,k.default)({label:"\u5f00\u7968\u65e5\u671f"},o),t.getFieldDecorator("invoicedate",{initialValue:d.invoicedate?(0,B.default)(d.invoicedate):null})(C.default.createElement(S.default,null))),C.default.createElement(O,(0,k.default)({label:"\u6536\u6b3e\u91d1\u989d"},o),t.getFieldDecorator("paymentamount",{initialValue:d.invoiceamount?d.invoiceamount:0})(C.default.createElement(M.default,{style:{width:"100%"},step:100,min:0,formatter:function(e){return(0,I.filterRMB)(e,"formatter")},parser:function(e){return(0,I.filterRMB)(e,"parser")}}))),C.default.createElement(O,(0,k.default)({label:"\u6536\u6b3e\u65e5\u671f"},o),t.getFieldDecorator("paymentdate",{initialValue:d.paymentdate?(0,B.default)(d.paymentdate):null})(C.default.createElement(S.default,null))),C.default.createElement(O,(0,k.default)({label:"\u7ecf\u529e\u4eba"},o),t.getFieldDecorator("operator",{initialValue:d.operator})(C.default.createElement(w.default,{placeholder:"\u8bf7\u8f93\u5165\u7ecf\u529e\u4eba"}))),C.default.createElement(O,(0,k.default)({label:"\u5f00\u7968\u7c7b\u578b"},o),t.getFieldDecorator("billingtype",{initialValue:d.billingtype?"".concat(d.billingtype):""})(C.default.createElement(b.default,null,C.default.createElement(q,{value:""},"\u8bf7\u9009\u62e9"),C.default.createElement(q,{value:"1"},"\u6280\u672f\u670d\u52a1"),C.default.createElement(q,{value:"2"},"\u4ea7\u54c1\u9500\u552e"),C.default.createElement(q,{value:"3"},"\u5de5\u7a0b\u65bd\u5de5")))),C.default.createElement(O,(0,k.default)({label:"\u7a0e\u7387"},o),t.getFieldDecorator("taxrate",{initialValue:d.taxrate?"".concat(d.taxrate):""})(C.default.createElement(b.default,null,C.default.createElement(q,{value:""},"\u8bf7\u9009\u62e9"),C.default.createElement(q,{value:"1"},"0%"),C.default.createElement(q,{value:"3"},"3%"),C.default.createElement(q,{value:"6"},"6%"),C.default.createElement(q,{value:"10"},"10%"),C.default.createElement(q,{value:"16"},"16%")))),C.default.createElement(O,(0,k.default)({label:"\u5907\u6ce8"},o),t.getFieldDecorator("remark",{initialValue:d.remark})(C.default.createElement(H,{placeholder:"\u8bf7\u8f93\u5165\u5907\u6ce8"}))))))}),G=x.default.create({})(function(e){var t=e.form,a=e.showModal,l=e.showPaymentModal,n=e.handleAdd,r=e.paymentModalLoading,d=e.itemRecord,o={labelCol:{span:7},wrapperCol:{span:13}},i="{}"===JSON.stringify(d)?"\u65b0\u5efa\u4ed8\u6b3e\u6570\u636e":"\u7f16\u8f91\u4ed8\u6b3e\u6570\u636e",u="{}"===JSON.stringify(d)?"add":"edit";return C.default.createElement(E.default,{destroyOnClose:!0,title:i,visible:l,maskClosable:!1,style:{paddingBottom:"200px"},onOk:function(){return n(e)},onCancel:function(){return a(!1,{},u)}},C.default.createElement(g.default,{spinning:r},C.default.createElement(x.default,{layout:"inline",className:T.default.addForm},C.default.createElement(O,(0,k.default)({label:"\u7ed3\u7b97\u6708\u4efd"},o),t.getFieldDecorator("paymentmonth",{initialValue:d.paymentmonth?(0,B.default)(d.paymentmonth):null})(C.default.createElement(A,{placeholder:"\u8bf7\u9009\u62e9\u6708\u4efd"}))),C.default.createElement(O,(0,k.default)({label:"\u5230\u7968\u91d1\u989d"},o),t.getFieldDecorator("invoiceamount",{initialValue:d.invoiceamount?d.invoiceamount:0})(C.default.createElement(M.default,{style:{width:"100%"},step:100,min:0,formatter:function(e){return(0,I.filterRMB)(e,"formatter")},parser:function(e){return(0,I.filterRMB)(e,"parser")}}))),C.default.createElement(O,(0,k.default)({label:"\u53d1\u7968\u586b\u5355\u65e5\u671f"},o),t.getFieldDecorator("invoicedate",{initialValue:d.invoicedate?(0,B.default)(d.invoicedate):null})(C.default.createElement(S.default,null))),C.default.createElement(O,(0,k.default)({label:"\u4ed8\u6b3e\u91d1\u989d"},o),t.getFieldDecorator("paymentamount",{initialValue:d.paymentamount?d.paymentamount:0})(C.default.createElement(M.default,{style:{width:"100%"},step:100,min:0,formatter:function(e){return(0,I.filterRMB)(e,"formatter")},parser:function(e){return(0,I.filterRMB)(e,"parser")}}))),C.default.createElement(O,(0,k.default)({label:"\u4ed8\u6b3e\u4ea4\u5355\u65e5\u671f"},o),t.getFieldDecorator("paymentdate",{initialValue:d.paymentdate?(0,B.default)(d.paymentdate):null})(C.default.createElement(S.default,null))),C.default.createElement(O,(0,k.default)({label:"\u7ecf\u529e\u4eba"},o),t.getFieldDecorator("operator",{initialValue:d.operator})(C.default.createElement(w.default,{placeholder:"\u8bf7\u8f93\u5165\u7ecf\u529e\u4eba"}))),C.default.createElement(O,(0,k.default)({label:"\u5f00\u7968\u7c7b\u578b"},o),t.getFieldDecorator("billingtype",{initialValue:d.billingtype?"".concat(d.billingtype):""})(C.default.createElement(b.default,null,C.default.createElement(q,{value:""},"\u8bf7\u9009\u62e9"),C.default.createElement(q,{value:"1"},"\u6280\u672f\u670d\u52a1"),C.default.createElement(q,{value:"2"},"\u4ea7\u54c1\u9500\u552e"),C.default.createElement(q,{value:"3"},"\u5de5\u7a0b\u65bd\u5de5")))),C.default.createElement(O,(0,k.default)({label:"\u7a0e\u7387"},o),t.getFieldDecorator("taxrate",{initialValue:d.taxrate?"".concat(d.taxrate):""})(C.default.createElement(b.default,null,C.default.createElement(q,{value:""},"\u8bf7\u9009\u62e9"),C.default.createElement(q,{value:"1"},"0%"),C.default.createElement(q,{value:"3"},"3%"),C.default.createElement(q,{value:"6"},"6%"),C.default.createElement(q,{value:"10"},"10%"),C.default.createElement(q,{value:"16"},"16%")))),C.default.createElement(O,(0,k.default)({label:"\u5907\u6ce8"},o),t.getFieldDecorator("remark",{initialValue:d.remark})(C.default.createElement(H,{placeholder:"\u8bf7\u8f93\u5165\u5907\u6ce8"}))))))}),W=x.default.create()(function(e){var t=e.removeModal,a=e.showRemoveModal,l=e.handleRemove,n=e.removeModalLoading;return C.default.createElement(E.default,{destroyOnClose:!0,title:"\u5220\u9664\u8bb0\u5f55",visible:t,maskClosable:!1,style:{paddingBottom:"200px"},onOk:function(){return l()},onCancel:function(){return a(!1,"")}},C.default.createElement(g.default,{spinning:n},C.default.createElement("div",null,C.default.createElement("p",null,"\u786e\u5b9a\u8981\u5220\u9664\u6b64\u6761\u8bb0\u5f55\u5417\uff1f"))))}),j=(V=(0,D.connect)(function(e){var t=e.monthly;return{monthly:t}}),N=x.default.create(),V(P=N(P=function(e){function t(){var e,a;(0,s.default)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return a=(0,y.default)(this,(e=(0,v.default)(t)).call.apply(e,[this].concat(n))),a.state={loading:!1,urlParams:"",infoSource:{},showReciveModal:!1,showPaymentModal:!1,removeModal:!1,reciveModalLoading:!1,paymentModalLoading:!1,removeModalLoading:!1,statementType:1,listLoading:!1,provisionalId:"",listData:[],itemRecord:{},conType:"",showSelectModal:!1,linkContarct:""},a.currentSave=function(){var e=a.state,t=e.urlParams,l=e.linkContarct,n=a.props,r=n.dispatch,d=n.form;d.validateFields(function(e,n){if(!e){var d=n;d.paymentid=t.paymentid,d.relatedcontractname=l,a.setState({loading:!0}),r({type:"monthly/updateData",payload:d}).then(function(e){e.statusCode?(E.default.error({title:"\u9519\u8bef\u4fe1\u606f",content:"\u670d\u52a1\u7aef\u9519\u8bef\uff0c\u9519\u8bef\u4ee3\u7801\uff1a ".concat(e.statusCode)}),a.setState({loading:!1})):E.default.success({title:"\u64cd\u4f5c\u4fe1\u606f",content:e.msg,onOk:function(){a.publicGetData()}})})}})},a.returnBack=function(){var e=a.props.dispatch;e(R.routerRedux.push({pathname:"/compact/monthlystatement-list"}))},a.handleAdd=function(e){var t=e.form,l=a.props.dispatch,n=a.state,r=n.urlParams,d=n.statementType,o=n.conType,i=n.provisionalId;t.validateFields(function(e,t){if(!e){var n=t;n.paymentid=r.paymentid;var u="monthly/addPay";"edit"===o&&(u="monthly/updatePay",n.paymentmonthlyid=i),n.paymentmonth=n.paymentmonth?(0,B.default)(n.paymentmonth).format("YYYY-MM"):null,n.invoicedateLong=n.invoicedate?(0,B.default)(n.invoicedate).valueOf():0,n.paymentdateLong=n.paymentdate?(0,B.default)(n.paymentdate).valueOf():0,delete n.invoicedate,delete n.paymentdate,1===d?a.setState({reciveModalLoading:!0}):a.setState({paymentModalLoading:!0}),l({type:u,payload:n}).then(function(e){e.statusCode?E.default.error({title:"\u9519\u8bef\u4fe1\u606f",content:"\u670d\u52a1\u7aef\u9519\u8bef\uff0c\u9519\u8bef\u4ee3\u7801\uff1a ".concat(e.statusCode)}):E.default.success({title:"\u64cd\u4f5c\u4fe1\u606f",content:e.msg,onOk:function(){a.setState({listLoading:!0}),1===d?a.setState({showReciveModal:!1}):a.setState({showPaymentModal:!1}),a.publicGetList()}}),1===d?a.setState({reciveModalLoading:!1}):a.setState({paymentModalLoading:!1})})}})},a.handleRemove=function(){var e=a.props.dispatch,t=a.state.provisionalId;a.setState({removeModalLoading:!0}),e({type:"monthly/removePay",payload:{paymentmonthlyid:t}}).then(function(e){e.statusCode?E.default.error({title:"\u9519\u8bef\u4fe1\u606f",content:"\u670d\u52a1\u7aef\u9519\u8bef\uff0c\u9519\u8bef\u4ee3\u7801\uff1a ".concat(e.statusCode)}):E.default.success({title:"\u64cd\u4f5c\u4fe1\u606f",content:e.msg,onOk:function(){a.setState({listLoading:!0,removeModal:!1}),a.publicGetList()}}),a.setState({removeModalLoading:!1})})},a.showModal=function(e,t,l){var n=a.state.statementType;1===n?a.setState({showReciveModal:!!e}):a.setState({showPaymentModal:!!e}),a.setState({itemRecord:t,conType:l,provisionalId:"edit"===l?t.paymentmonthlyid:""})},a.showRemoveModal=function(e,t){a.setState({removeModal:!!e,provisionalId:t})},a.publicGetData=function(){var e=a.props,t=e.dispatch,l=e.location;t({type:"monthly/infoData",payload:{paymentid:l.query.paymentid}}).then(function(e){e.statusCode?(E.default.error({title:"\u9519\u8bef\u4fe1\u606f",content:"\u670d\u52a1\u7aef\u9519\u8bef\uff0c\u9519\u8bef\u4ee3\u7801\uff1a ".concat(e.statusCode)}),a.setState({loading:!1})):a.setState({infoSource:e.data,loading:!1})})},a.publicGetList=function(){var e=a.props,t=e.dispatch,l=e.location;t({type:"monthly/getPay",payload:{paymentid:l.query.paymentid}}).then(function(e){if(e.statusCode)E.default.error({title:"\u9519\u8bef\u4fe1\u606f",content:"\u670d\u52a1\u7aef\u9519\u8bef\uff0c\u9519\u8bef\u4ee3\u7801\uff1a ".concat(e.statusCode)}),a.setState({listLoading:!1});else{var t=e.list;t.map(function(e,a){return t[a].itemIndex=a+1,a}),a.setState({listData:t,listLoading:!1})}})},a.statementForm=function(e,t,l){var n=a.state,r=n.loading,d=n.statementType,o=n.linkContarct,s=a.props.form,p=s.getFieldDecorator;return C.default.createElement(g.default,{spinning:r},C.default.createElement(x.default,{layout:"inline",className:T.default.addForm},C.default.createElement("h3",{className:T.default.inputBlockTitle},"\u7ed3\u7b97\u5355\u4fe1\u606f"),C.default.createElement(i.default,null,C.default.createElement(m.default,l,C.default.createElement(O,(0,k.default)({label:"\u7ed3\u7b97\u5355\u7f16\u53f7"},t),C.default.createElement("div",null,e.paymentno))),C.default.createElement(m.default,l,C.default.createElement(O,(0,k.default)({label:"\u7ed3\u7b97\u5185\u5bb9"},t),p("settlementcontent",{initialValue:e.settlementcontent,rules:[{required:!0,message:"\u6b64\u9879\u4e3a\u5fc5\u586b\u9879\uff01"}]})(C.default.createElement(w.default,{placeholder:"\u8bf7\u8f93\u5165\u7ed3\u7b97\u5185\u5bb9"})))),C.default.createElement(m.default,l,C.default.createElement(x.default.Item,(0,k.default)({},t,{label:1===d?"\u5408\u4f5c\u65b9":"\u6536\u6b3e\u5355\u4f4d"}),p("receivablecompany",{initialValue:e.receivablecompany,rules:[{required:!0,message:"\u6b64\u9879\u4e3a\u5fc5\u586b\u9879\uff01"}]})(C.default.createElement(w.default,{placeholder:1===d?"\u8f93\u5165\u5408\u4f5c\u65b9":"\u8f93\u5165\u6536\u6b3e\u5355\u4f4d"})))),C.default.createElement(m.default,l,C.default.createElement(O,(0,k.default)({label:"\u8ba2\u5355\u7c7b\u578b"},t),C.default.createElement("div",null,1===e.paymenttype?"\u6536\u6b3e\u8ba2\u5355":"\u4ed8\u6b3e\u8ba2\u5355"))),C.default.createElement(m.default,{className:T.default.lineTextarea},C.default.createElement(O,{label:"\u5173\u8054\u5408\u540c"},C.default.createElement("div",{style:{lineHeight:"24px"}},""===o?"":o.split("\uff0c").map(function(e){return C.default.createElement(f.default,{color:"#108ee9",key:e},e)}),C.default.createElement("div",{style:{display:"inline-block",lineHeight:"26px"}},C.default.createElement(u.default,{placement:"topLeft",title:"\u70b9\u51fb\u9009\u62e9\u5173\u8054\u5408\u540c",arrowPointAtCenter:!0},C.default.createElement(c.default,{title:"\u9009\u62e9",onClick:function(){return a.openSelectContratc(!0)},size:"small",style:{marginRight:"10px",padding:"0px 20px"}},"\uff0b")),C.default.createElement("span",null,"\u5df2\u9009\u62e9:")," ",C.default.createElement("span",null,C.default.createElement("b",null,""===o?0:o.split("\uff0c").length)," \u4e2a"))))),C.default.createElement(m.default,l,C.default.createElement(O,(0,k.default)({label:"\u521b\u5efa\u65f6\u95f4"},t),C.default.createElement("div",null,(0,B.default)(e.createtime).format("YYYY-MM-DD HH:mm:ss")))),C.default.createElement(m.default,l,C.default.createElement(O,(0,k.default)({label:"\u66f4\u65b0\u65f6\u95f4"},t),C.default.createElement("div",null,(0,B.default)(e.updatetime).format("YYYY-MM-DD HH:mm:ss"))))),C.default.createElement("div",{style:{textAlign:"center"}},C.default.createElement(c.default,{className:T.default.listDataBtn,type:"primary",icon:"check",title:"\u4fdd\u5b58",onClick:function(){return a.currentSave()}},"\u4fdd\u5b58\u57fa\u672c\u4fe1\u606f"))))},a.openSelectContratc=function(e,t){var l=a.state.linkContarct;a.setState({showSelectModal:!!e}),t?(a.setState({linkContarct:t.join("\uff0c")}),a.selectData(t)):(a.child.getCon(),a.child.setState({condata:""===l?[]:l.split("\uff0c")}))},a.selectData=function(e){a.setState({linkContarct:e.join("\uff0c")})},a.onSelectRef=function(e){a.child=e},a}return(0,h.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.dispatch,l=t.location;this.setState({urlParams:l.query,loading:!0,listLoading:!0}),a({type:"monthly/infoData",payload:{paymentid:l.query.paymentid}}).then(function(t){t.statusCode?(E.default.error({title:"\u9519\u8bef\u4fe1\u606f",content:"\u670d\u52a1\u7aef\u9519\u8bef\uff0c\u9519\u8bef\u4ee3\u7801\uff1a ".concat(t.statusCode)}),e.setState({loading:!1})):e.setState({infoSource:t.data,loading:!1,statementType:t.data.paymenttype,linkContarct:t.data.relatedcontractname,conType:t.data.paymenttype})}),this.publicGetList()}},{key:"render",value:function(){var e=this,t=this.state,a=t.infoSource,l=t.statementType,n=t.listLoading,i=t.provisionalId,u=t.showReciveModal,f=t.showPaymentModal,m=t.removeModal,s=t.reciveModalLoading,p=t.paymentModalLoading,y=t.removeModalLoading,v=t.listData,h=t.itemRecord,E=t.conType,g=t.linkContarct,M=t.showSelectModal,b=this.props.rowKey,w=[];w=1===E?["\u5f00\u7968","\u6536\u6b3e"]:["\u5230\u7968","\u4ed8\u6b3e"];var S=[0,0],x={labelCol:{span:7},wrapperCol:{span:13}},D={md:12,sm:24},R="\u6536\u6b3e",V=[],N=[];if(v.length){var P=0,O=0;v.forEach(function(e){P+=Number(e.invoiceamount),O+=Number(e.paymentamount)}),S[0]=P,S[1]=O,v.concat({itemIndex:"\u603b\u8ba1",paymentmonthlyid:"total",invoiceamount:P,paymentamount:O})}var A=function(e,t,a){var l={children:e,props:{}};return a===v.length&&(l.props.colSpan=0),l};V=[{title:"\u5e8f\u53f7",dataIndex:"itemIndex",key:"itemIndex",render:function(e,t,a){return a===v.length?{children:C.default.createElement("span",{style:{fontWeight:600}},"\u603b\u8ba1"),props:{colSpan:1}}:e}},{title:"\u7ed3\u7b97\u6708\u4efd",dataIndex:"paymentmonth",key:"paymentmonth",render:function(e){return A(e?"".concat(e.replace(/-/,"\u5e74"),"\u6708"):"")}},{title:"\u5f00\u7968\u91d1\u989d",dataIndex:"invoiceamount",key:"invoiceamount",render:function(e){return A((0,I.filterRMB)(e,"formatter"))}},{title:"\u5f00\u7968\u65e5\u671f",dataIndex:"invoicedate",key:"invoicedate",render:function(e){return A(e?(0,B.default)(e).format("YYYY-MM-DD"):null)}},{title:"\u6536\u6b3e\u91d1\u989d",dataIndex:"paymentamount",key:"paymentamount",render:function(e){return A((0,I.filterRMB)(e,"formatter"))}},{title:"\u6536\u6b3e\u65e5\u671f",dataIndex:"paymentdate",key:"paymentdate",render:function(e){return A(e?(0,B.default)(e).format("YYYY-MM-DD"):null)}},{title:"\u7ecf\u529e\u4eba",dataIndex:"operator",key:"operator",render:function(e){return A(e)}},{title:"\u5f00\u7968\u7c7b\u578b",dataIndex:"billingtype",key:"billingtype",render:function(e){var t;switch(e){case 1:t="\u6280\u672f\u670d\u52a1";break;case 2:t="\u4ea7\u54c1\u9500\u552e";break;case 3:t="\u5de5\u7a0b\u65bd\u5de5";break;default:break}return t}},{title:"\u7a0e\u7387",dataIndex:"taxrate",key:"taxrate",render:function(e){return A(e?"".concat(e,"%"):null)}},{title:"\u5907\u6ce8",dataIndex:"remark",key:"remark",render:function(e){return A(e)}},{title:"\u66f4\u65b0\u65f6\u95f4",dataIndex:"updatetime",key:"updatetime",render:function(e){return A(e?(0,B.default)(e).format("YYYY-MM-DD HH:mm:ss"):null)}},{title:"\u64cd\u4f5c",render:function(t,a,l){return l<v.length&&C.default.createElement(C.Fragment,null,C.default.createElement("a",{style:{whiteSpace:"nowrap"},onClick:function(){return e.showModal(!0,a,"edit")}},"\u7f16\u8f91"),C.default.createElement(o.default,{type:"vertical"}),C.default.createElement("a",{style:{color:"red",whiteSpace:"nowrap"},onClick:function(){return e.showRemoveModal(!0,a.paymentmonthlyid)}},"\u5220\u9664"))}}],2===l&&(R="\u4ed8\u6b3e",N=[{title:"\u5e8f\u53f7",dataIndex:"itemIndex",key:"itemIndex",render:function(e,t,a){return a===v.length?{children:C.default.createElement("span",{style:{fontWeight:600}},"\u603b\u8ba1"),props:{colSpan:1}}:e}},{title:"\u7ed3\u7b97\u6708\u4efd",dataIndex:"paymentmonth",key:"paymentmonth",render:function(e){return A(e?"".concat(e.replace(/-/,"\u5e74"),"\u6708"):"")}},{title:"\u5230\u7968\u91d1\u989d",dataIndex:"invoiceamount",key:"invoiceamount",render:function(e){return A((0,I.filterRMB)(e,"formatter"))}},{title:"\u53d1\u7968\u586b\u5355\u65e5\u671f",dataIndex:"invoicedate",key:"invoicedate",render:function(e){return A(e?(0,B.default)(e).format("YYYY-MM-DD"):null)}},{title:"\u4ed8\u6b3e\u91d1\u989d",dataIndex:"paymentamount",key:"paymentamount",render:function(e){return A((0,I.filterRMB)(e,"formatter"))}},{title:"\u4ed8\u6b3e\u4ea4\u5355\u65e5\u671f",dataIndex:"paymentdate",key:"paymentdate",render:function(e){return A(e?(0,B.default)(e).format("YYYY-MM-DD"):null)}},{title:"\u7ecf\u529e\u4eba",dataIndex:"operator",key:"operator",render:function(e){return A(e)}},{title:"\u5f00\u7968\u7c7b\u578b",dataIndex:"billingtype",key:"billingtype",render:function(e){var t;switch(e){case 1:t="\u6280\u672f\u670d\u52a1";break;case 2:t="\u4ea7\u54c1\u9500\u552e";break;case 3:t="\u5de5\u7a0b\u65bd\u5de5";break;default:break}return t}},{title:"\u7a0e\u7387",dataIndex:"taxrate",key:"taxrate",render:function(e){return A(e?"".concat(e,"%"):null)}},{title:"\u5907\u6ce8",dataIndex:"remark",key:"remark",render:function(e){return A(e)}},{title:"\u66f4\u65b0\u65f6\u95f4",dataIndex:"updatetime",key:"updatetime",render:function(e){return A(e?(0,B.default)(e).format("YYYY-MM-DD HH:mm:ss"):null)}},{title:"\u64cd\u4f5c",render:function(t,a,l){return l<v.length&&C.default.createElement(C.Fragment,null,C.default.createElement("a",{style:{whiteSpace:"nowrap"},onClick:function(){return e.showModal(!0,a,"edit")}},"\u7f16\u8f91"),C.default.createElement(o.default,{type:"vertical"}),C.default.createElement("a",{style:{color:"red",whiteSpace:"nowrap"},onClick:function(){return e.showRemoveModal(!0,a.paymentmonthlyid)}},"\u5220\u9664"))}}]);var H={showReciveModal:u,reciveModalLoading:s,itemRecord:h},q={handleAdd:this.handleAdd,showModal:this.showModal},j={showPaymentModal:f,paymentModalLoading:p,itemRecord:h},z={handleAdd:this.handleAdd,showModal:this.showModal},K={provisionalId:i,removeModal:m,removeModalLoading:y},Q={handleRemove:this.handleRemove,showRemoveModal:this.showRemoveModal},X={showModal:M,linkContarct:g},_={openSelectContratc:this.openSelectContratc,onSelectRef:this.onSelectRef};return C.default.createElement(Y.default,{title:"\u7ed3\u7b97\u5355\u8be6\u60c5"},C.default.createElement(d.default,{bordered:!1},C.default.createElement("div",{className:T.default.tableList},C.default.createElement("div",{className:T.default.reBtnLine,style:{borderBottom:"1px dashed #eee"}},C.default.createElement(c.default,{className:T.default.reBtn,type:"danger",icon:"rollback",onClick:function(){e.returnBack()}},"\u8fd4\u56de\u4e0a\u4e00\u7ea7")),this.statementForm(a,x,D))),C.default.createElement(d.default,{style:{marginTop:"24px"},bordered:!1,title:R},C.default.createElement("div",null,C.default.createElement(c.default,{icon:"plus",type:"primary",onClick:function(){return e.showModal(!0,{},"add")}},"\u65b0\u589e".concat(R)),C.default.createElement(F.default,{titleArr:["".concat(w[0],"\u603b\u91d1\u989d"),"".concat(w[1],"\u603b\u91d1\u989d")],dataNot:[(0,I.filterRMB)(S[0],"formatter"),(0,I.filterRMB)(S[1],"formatter")]}),C.default.createElement(r.default,{loading:n,pagination:!1,rowKey:b||"paymentmonthlyid",dataSource:v,columns:1===l?V:N}))),C.default.createElement(J,(0,k.default)({},H,q)),C.default.createElement(G,(0,k.default)({},j,z)),C.default.createElement(W,(0,k.default)({},K,Q)),C.default.createElement(L.default,(0,k.default)({},X,_)))}}]),t}(C.PureComponent))||P)||P),z=j;t.default=z}}]);