(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(t,e,n){"use strict";n(326),n(335);var r=n(0);Object.defineProperty(r.default.prototype,"$mq",{value:window.MathQuill.getInterface(2)})},166:function(t,e){},167:function(t,e){var n;n=window.console},168:function(t,e,n){"use strict";var r=n(169);n(0).default.use(r),e.a=function(t,e){t.app;e("vthree",r)}},205:function(t,e,n){var content=n(263);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("7388ab72",content,!0,{sourceMap:!1})},225:function(t,e,n){"use strict";var r={data:function(){return{name:"calc",clipped:!0,drawer:!1,fixed:!1,items:[{icon:"mdi-chart-bell-curve-cumulative",title:"Calculator",to:"/"},{icon:"mdi-help",title:"Help",to:"/help"}],miniVariant:!0,right:!0,rightDrawer:!1,title:"Tangent"}}},o=n(54),c=n(81),l=n.n(c),v=n(347),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{dark:""}},[e("nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:v.a})},226:function(t,e,n){"use strict";var r={data:function(){return{clipped:!0,drawer:!0,fixed:!1,items:[{icon:"mdi-chart-bell-curve-cumulative",title:"Calculator",to:"/"},{icon:"mdi-help",title:"Help",to:"/help"}],miniVariant:!0,right:!0,rightDrawer:!1,title:"Tangent"}}},o=n(54),c=n(81),l=n.n(c),v=n(347),d=n(353),f=n(348),m=n(227),h=n(354),_=n(349),w=n(159),V=n(160),x=n(102),k=n(161),y=n(66),D=n(350),C=n(352),P=n(351),A=n(219),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,(function(e,i){return n("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),n("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[n("v-icon",[t._v("mdi-"+t._s("chevron-"+(t.miniVariant?"right":"left")))])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.clipped=!t.clipped}}},[n("v-icon",[t._v("mdi-application")])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.fixed=!t.fixed}}},[n("v-icon",[t._v("mdi-minus")])],1),t._v(" "),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[n("v-icon",[t._v("mdi-menu")])],1)],1),t._v(" "),n("v-main",[n("v-container",[n("nuxt")],1)],1),t._v(" "),n("v-navigation-drawer",{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[n("v-list",[n("v-list-item",{nativeOn:{click:function(e){t.right=!t.right}}},[n("v-list-item-action",[n("v-icon",{attrs:{light:""}},[t._v("\n            mdi-repeat\n          ")])],1),t._v(" "),n("v-list-item-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),n("v-footer",{attrs:{absolute:!t.fixed,app:""}},[n("span",[t._v("© "+t._s((new Date).getFullYear())+" Saumya Singhal")])])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:v.a,VAppBar:d.a,VAppBarNavIcon:f.a,VBtn:m.a,VContainer:h.a,VFooter:_.a,VIcon:w.a,VList:V.a,VListItem:x.a,VListItemAction:k.a,VListItemContent:y.a,VListItemTitle:y.b,VMain:D.a,VNavigationDrawer:C.a,VSpacer:P.a,VToolbarTitle:A.a})},236:function(t,e,n){n(237),t.exports=n(238)},262:function(t,e,n){"use strict";n(205)},263:function(t,e,n){(e=n(10)(!1)).push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=e},63:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(262),n(54)),c=n(81),l=n.n(c),v=n(347),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:v.a})}},[[236,5,1,6]]]);