(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"i/qp":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("MVZn")),s=n(a("o0o1")),u=a("dCQc"),c={namespace:"person",state:{data:{list:[],page:{}}},effects:{editPwd:s.default.mark(function e(t,a){var n,r,c,d;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,c="http://tms.clbs.cn/usercenter/user/modify",e.next=5,r(u.post,c,n,"login");case 5:return d=e.sent,e.abrupt("return",d);case 7:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){return(0,r.default)({},e,{data:t.payload})}}};t.default=c}}]);