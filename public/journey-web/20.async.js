(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{lMne:function(t,e,a){"use strict";var r=a("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("IzEo");var n=r(a("bx4M"));a("+L6B");var u=r(a("2/Rp"));a("Pwec");var l,c,o=r(a("CtXQ")),d=r(a("lwsE")),i=r(a("W8MJ")),s=r(a("a1gu")),p=r(a("Nsbk")),f=r(a("7W2i")),m=r(a("q1tI")),h=a("MuoO"),v=a("7DNP"),y=r(a("mDQx")),E=(l=(0,h.connect)(function(t){var e=t.contractdata;return{contractdata:e}}),l(c=function(t){function e(){var t,a;(0,d.default)(this,e);for(var r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return a=(0,s.default)(this,(t=(0,p.default)(e)).call.apply(t,[this].concat(n))),a.state={urlParams:""},a.returnDataList=function(){var t=a.props.dispatch;t(v.routerRedux.push({pathname:"/compact/contract-list"}))},a.returnCompactDetail=function(){var t=a.state.urlParams,e=a.props.dispatch;e(v.routerRedux.push({pathname:"/compact/contract-detail",query:{contractid:t.contractid}}))},a}return(0,f.default)(e,t),(0,i.default)(e,[{key:"componentDidMount",value:function(){var t=this.props.location;this.setState({urlParams:t.query})}},{key:"render",value:function(){var t=this;return m.default.createElement("div",{style:{marginTop:"24px"}},m.default.createElement(n.default,{bordered:!1,className:y.default.retCard},m.default.createElement("div",{className:y.default.successShow},m.default.createElement("div",{style:{borderBottom:"1px dashed #eee",marginTop:"20px"}},m.default.createElement(o.default,{type:"check-circle",theme:"filled"}),m.default.createElement("h3",null,"\u65b0\u589e\u5408\u540c\u6210\u529f")),m.default.createElement("div",{style:{marginTop:"20px",marginBottom:"30px"}},m.default.createElement(u.default,{type:"primary",onClick:function(){return t.returnDataList()}},"\u8fd4\u56de\u6570\u636e\u5217\u8868"),m.default.createElement(u.default,{onClick:function(){return t.returnCompactDetail()}},"\u67e5\u770b\u5408\u540c")))))}}]),e}(m.default.PureComponent))||c),w=E;e.default=w}}]);