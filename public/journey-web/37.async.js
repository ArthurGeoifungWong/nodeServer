(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{"7CJS":function(e,t,a){e.exports={exception:"antd-pro\\components\\-exception\\index-exception",imgBlock:"antd-pro\\components\\-exception\\index-imgBlock",imgEle:"antd-pro\\components\\-exception\\index-imgEle",content:"antd-pro\\components\\-exception\\index-content",desc:"antd-pro\\components\\-exception\\index-desc",actions:"antd-pro\\components\\-exception\\index-actions"}},"f+e3":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403",desc:"\u62b1\u6b49\uff0c\u4f60\u65e0\u6743\u8bbf\u95ee\u8be5\u9875\u9762"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404",desc:"\u62b1\u6b49\uff0c\u4f60\u8bbf\u95ee\u7684\u9875\u9762\u4e0d\u5b58\u5728"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500",desc:"\u62b1\u6b49\uff0c\u670d\u52a1\u5668\u51fa\u9519\u4e86"}},n=l;t.default=n},"luV/":function(e,t,a){"use strict";var l=a("284h"),n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a("pVnL"));a("+L6B");var i=n(a("2/Rp")),o=n(a("QILm")),d=n(a("lwsE")),s=n(a("W8MJ")),u=n(a("a1gu")),r=n(a("Nsbk")),p=n(a("7W2i")),f=l(a("q1tI")),m=n(a("TSYQ")),v=n(a("f+e3")),g=n(a("7CJS")),E=function(e){function t(e){var a;return(0,d.default)(this,t),a=(0,u.default)(this,(0,r.default)(t).call(this,e)),a.state={},a}return(0,p.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.backText,l=e.linkElement,n=void 0===l?"a":l,d=e.type,s=e.title,u=e.desc,r=e.img,p=e.actions,E=e.redirect,x=(0,o.default)(e,["className","backText","linkElement","type","title","desc","img","actions","redirect"]),h=d in v.default?d:"404",b=(0,m.default)(g.default.exception,t);return f.default.createElement("div",(0,c.default)({className:b},x),f.default.createElement("div",{className:g.default.imgBlock},f.default.createElement("div",{className:g.default.imgEle,style:{backgroundImage:"url(".concat(r||v.default[h].img,")")}})),f.default.createElement("div",{className:g.default.content},f.default.createElement("h1",null,s||v.default[h].title),f.default.createElement("div",{className:g.default.desc},u||v.default[h].desc),f.default.createElement("div",{className:g.default.actions},p||(0,f.createElement)(n,{to:E,href:E},f.default.createElement(i.default,{type:"primary"},a)))))}}]),t}(f.default.PureComponent);E.defaultProps={backText:"\u8fd4\u56de\u9996\u9875",redirect:"/compact"};var x=E;t.default=x},w2l6:function(e,t,a){"use strict";var l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a("q1tI")),c=l(a("mOP9")),i=l(a("luV/")),o=function(){return n.default.createElement(i.default,{type:"404",style:{minHeight:500,height:"100%"},linkElement:c.default})};t.default=o}}]);