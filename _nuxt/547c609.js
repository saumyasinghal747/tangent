(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{383:function(t,e,r){var content=r(428);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("1930a9a0",content,!0,{sourceMap:!1})},384:function(t,e,r){var content=r(430);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("445c8038",content,!0,{sourceMap:!1})},385:function(t,e,r){var content=r(432);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("1b7833da",content,!0,{sourceMap:!1})},386:function(t,e,r){var content=r(434);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("7ba1bcaa",content,!0,{sourceMap:!1})},387:function(t,e,r){"use strict";r.r(e);r(16);var n={props:{size:Number,texture:String}},o=r(55),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("object3d",this._b({},"object3d",this.$attrs,!1),[e("Line3D",{attrs:{coord1:[-10,0,0],coord2:[10,0,0]}}),this._v(" "),e("Line3D",{attrs:{coord1:[0,-10,0],coord2:[0,10,0]}}),this._v(" "),e("Line3D",{attrs:{coord1:[0,0,-10],coord2:[0,0,10]}})],1)}),[],!1,null,"45317b9e",null);e.default=component.exports;installComponents(component,{Line3D:r(461).default})},394:function(t,e,r){t.exports=r.p+"img/favicon.55315d6.svg"},412:function(t,e){},427:function(t,e,r){"use strict";r(383)},428:function(t,e,r){(e=r(10)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{transform:rotateX(0deg)}}@keyframes turn{to{transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""]),t.exports=e},429:function(t,e,r){"use strict";r(384)},430:function(t,e,r){(e=r(10)(!1)).push([t.i,".VuetifyLogo{height:180px;width:180px;transform:rotateY(560deg);-webkit-animation:turn 3.5s ease-out 1s forwards;animation:turn 3.5s ease-out 1s forwards}@-webkit-keyframes turn{to{transform:rotateY(0deg)}}@keyframes turn{to{transform:rotateY(0deg)}}",""]),t.exports=e},431:function(t,e,r){"use strict";r(385)},432:function(t,e,r){(e=r(10)(!1)).push([t.i,".v-list-item{border-top:1px solid hsla(0,0%,39.2%,.9);border-bottom:1px solid hsla(0,0%,39.2%,.9)}.v-main{padding-left:64px!important}.v-navigation-drawer{width:350px!important}",""]),t.exports=e},433:function(t,e,r){"use strict";r(386)},434:function(t,e,r){(e=r(10)(!1)).push([t.i,".mq-editable-field[data-v-cd0dd40e],.mq-math-mode .mq-editable-field[data-v-cd0dd40e]{border:none}.mq-editable-field .mq-cursor[data-v-cd0dd40e]{border-left:1px solid #fff!important}",""]),t.exports=e},458:function(t,e,r){"use strict";r.r(e);var n={name:"mq-field",props:["model-value"],emits:["update:model-value"],data:function(){return{mathField:null}},mounted:function(){var t=this,e=this.$mq.MathField(this.$refs.field,{handlers:{edit:function(){var r=e.latex();t.value=r,t.$emit("update:model-value",r)}}});e.latex(this.modelValue),this.mathField=e},watch:{modelValue:function(t){this.mathField.latex(t)}}},o=(r(433),r(55)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"mqfield",staticStyle:{width:"100%",height:"100%"},on:{click:function(e){return t.mathField.focus()}}},[r("span",{ref:"field"},[t._v(t._s(t.modelValue))])])}),[],!1,null,"cd0dd40e",null);e.default=component.exports},459:function(t,e,r){"use strict";r.r(e);var n={components:{Cube:r(387).default},props:{pointSets:{type:Array}},data:function(){return{ui:this.getModel(),uiSetup:this.setupPanel,size:{w:window.innerWidth,h:window.innerHeight}}},created:function(){},methods:{getModel:function(){return{camera:{x:-10,y:1,z:8},ocean:{y:-200},sf03:{scale:1}}},setupPanel:function(t,e){var r=t.addFolder("Camera");r.add(e.camera,"x",-50,50).step(.01),r.add(e.camera,"y",-50,50).step(.01),r.add(e.camera,"z",-50,50).step(.01),r.open()}}},o=r(55),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"demo"}},[r("client-only",[r("renderer",{attrs:{size:t.size}},[r("scene",[r("orbit-controls",{attrs:{position:t.ui.camera,rotation:{x:2,y:0,z:3}}},[r("camera"),t._v(" "),r("audio-listener")],1),t._v(" "),r("light",{attrs:{hex:15724543,intensity:2,position:{x:50,y:50,z:50}}}),t._v(" "),r("light",{attrs:{hex:15724543,intensity:2,position:{x:-50,y:-50,z:-50}}}),t._v(" "),r("div",{key:t.ui.sysKey},[r("oimo-world",{attrs:{options:{gravity:[0,0,0]}}},[r("space-system",{attrs:{"m-scale":Math.pow(10,4)}},[r("space-object",[r("oimo-body",{attrs:{options:{move:!1,density:1}}},[r("cube"),t._v(" "),t._l(t.pointSets,(function(e,s){var n=e.x,o=e.y,c=e.c;return r("div",{key:s},[t._l(n,(function(t,i){return r("Line3DChain",{key:"x"+i+":"+s,attrs:{coords:t,color:c}})})),t._v(" "),t._l(o,(function(t,e){return r("Line3DChain",{key:"y"+e+":"+s,attrs:{coords:t,color:c}})}))],2)}))],2)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"140b6c79",null);e.default=component.exports;installComponents(component,{Cube:r(387).default,Line3DChain:r(460).default})},460:function(t,e,r){"use strict";r.r(e);r(36),r(16);var n=r(2),o=r(389),c=r(110),l=r(240);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var v={name:"Line3DChain",provide:function(){return{parentObj:this.curObj}},inject:{parentObj:{name:"parentObj",default:null}},props:{color:{type:Number,default:16777215},name:{type:String},obj:{type:Object},scale:{type:[Object,Number]},position:{type:Object},rotation:{type:Object},coords:{type:Array}},watch:{scale:{deep:!0,handler:function(t){this.setScale(t)}},position:{deep:!0,handler:function(t){Object.assign(this.curObj.position,t)}},rotation:{deep:!0,handler:function(t){Object.assign(this.curObj.rotation,t)}},obj:function(t){this.curObj=t},curObj:function(t,e){this.unsetObj(e),this.setObj(t)}},data:function(){var t=this.obj;if(!t){var e,r=[],n=d(this.coords);try{for(n.s();!(e=n.n()).done;){var f=e.value;r.push(Object(o.a)(l.Vector3,Object(c.a)(f)))}}catch(t){n.e(t)}finally{n.f()}var h=new l.LineBasicMaterial({color:this.color,linewidth:10}),m=(new l.BufferGeometry).setFromPoints(r);t=new l.Line(m,h)}return{curObj:t}},mounted:function(){this.setObj(this.curObj)},beforeDestroy:function(){this.unsetObj(this.curObj)},methods:{setObj:function(t){t.name=this.name||t.name||t.type,this.setScale(this.scale),Object.assign(t.position,this.position),Object.assign(t.rotation,this.rotation),this.parentObj&&this.parentObj.add(t),this.$emit("update:obj",t)},unsetObj:function(t){this.$emit("update:obj",null),this.parentObj&&this.parentObj.remove(t)},setScale:function(t){t&&"number"==typeof t&&(t={x:t,y:t,z:t}),Object.assign(this.curObj.scale,t)},dispatchEvent:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=new CustomEvent(t,h({detail:e,bubbles:!0,cancelable:!0},r));return this.$el.dispatchEvent(n)}}},y=r(55),component=Object(y.a)(v,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},461:function(t,e,r){"use strict";r.r(e);r(36),r(16);var n=r(2),o=r(389),c=r(110),l=r(240);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"Line3D",provide:function(){return{parentObj:this.curObj}},inject:{parentObj:{name:"parentObj",default:null}},props:{color:{type:Number,default:16777215},name:{type:String},obj:{type:Object},scale:{type:[Object,Number]},position:{type:Object},rotation:{type:Object},coord1:{type:Array},coord2:{type:Array}},watch:{scale:{deep:!0,handler:function(t){this.setScale(t)}},position:{deep:!0,handler:function(t){Object.assign(this.curObj.position,t)}},rotation:{deep:!0,handler:function(t){Object.assign(this.curObj.rotation,t)}},obj:function(t){this.curObj=t},curObj:function(t,e){this.unsetObj(e),this.setObj(t)}},data:function(){var t=this.obj;if(!t){var e=[];e.push(Object(o.a)(l.Vector3,Object(c.a)(this.coord1))),e.push(Object(o.a)(l.Vector3,Object(c.a)(this.coord2)));var r=new l.LineBasicMaterial({color:this.color,linewidth:10}),n=(new l.BufferGeometry).setFromPoints(e);t=new l.Line(n,r)}return{curObj:t}},mounted:function(){this.setObj(this.curObj)},beforeDestroy:function(){this.unsetObj(this.curObj)},methods:{setObj:function(t){t.name=this.name||t.name||t.type,this.setScale(this.scale),Object.assign(t.position,this.position),Object.assign(t.rotation,this.rotation),this.parentObj&&this.parentObj.add(t),this.$emit("update:obj",t)},unsetObj:function(t){this.$emit("update:obj",null),this.parentObj&&this.parentObj.remove(t)},setScale:function(t){t&&"number"==typeof t&&(t={x:t,y:t,z:t}),Object.assign(this.curObj.scale,t)},dispatchEvent:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=new CustomEvent(t,h({detail:e,bubbles:!0,cancelable:!0},r));return this.$el.dispatchEvent(n)}}},m=r(55),component=Object(m.a)(d,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},468:function(t,e,r){"use strict";r.r(e);r(47),r(75),r(18),r(66);var n=r(7),o=r(394),c=(r(20),r(16),r(395),r(110)),l=(r(108),r(241),r(22),r(92),r(49),r(175),function(input){var t,e,r,n,o,c,l,f,h,d;t=function(){var t=input;return t=(t=(t=(t=(t=(t=(t=t.replace(/\s/g,"")).replace(/\\times/g,"*")).replace(/\\div/g,"/")).replace(/([0-9a-zA-Z\.]+)\\pi/g,"$1*3.142")).replace(/\\pi([0-9a-zA-Z\.]+)/g,"3.142*$1")).replace(/([0-9a-zA-Z\.]+)\\pi([0-9a-zA-Z\.]+)/g,"$1*3.142*$2")).replace(/\\pi/g,"3.142"),t=e(t),t=r(t),t=n(t),t=o(t),t=c(t),t=f(t),t=(t=(t=l(t)).replace(/\\left\(/g,"(")).replace(/\\right\)/g,")")},e=function(input){for(;input.search(/\\frac\{(((?![\{\}]).)*)\}\{(((?![\{\}]).)*)\}/)>=0;)input=input.replace(/\\frac\{(((?![\{\}]).)*)\}\{(((?![\{\}]).)*)\}/g,"($1)/($3)");return input.search(/\\frac/)>=0&&(input=d("fraction",input)),input},r=function(input){for(;input.search(/\\sqrt\{(((?![\{\}]).)*)\}/)>=0;)input=input.replace(/\\sqrt\{(((?![\{\}]).)*)\}/g,"sqrt($1)");return input.search(/\\sqrt\{/)>=0&&(input=d("square root",input)),input},n=function(input){for(;input.search(/\\sqrt\[(((?![\{\}]).)*)\]\{(((?![\{\}]).)*)\}/)>=0;)input=input.replace(/\\sqrt\[(((?![\{\}]).)*)\]\{(((?![\{\}]).)*)\}/g,"pow($3,1/$1)");return input.search(/\\sqrt\[/)>=0&&(input=d("nth root",input)),input},o=function(input){for(;input.search(/([0-9a-zA-Z\.]+)\^\{(((?![\{\}]).)*)\}/)>=0;)input=input.replace(/([0-9a-zA-Z\.]+)\^\{(((?![\{\}]).)*)\}/g,"pow($1,$2)");for(;input.search(/([0-9a-zA-Z\.]+)\^([0-9a-zA-Z\.]+)/)>=0;)input=input.replace(/([0-9a-zA-Z\.]+)\^([0-9a-zA-Z\.]+)/g,"pow($1,$2)");for(;input.search(/\\left\(([0-9a-zA-Z\.\+\*\-\\]+)\\right\)\^([0-9a-zA-Z\.]+)/)>=0;)input=input.replace(/\\left\(([0-9a-zA-Z\.\+\*\-\\]+)\\right\)\^([0-9a-zA-Z\.]+)/g,"pow($1,$2)");for(;input.search(/\\left\(([0-9a-zA-Z\.\+\*\-\\]+)\\right\)\^\{(((?![\{\}]).)*)\}/)>=0;)input=input.replace(/\\left\(([0-9a-zA-Z\.\+\*\-\\]+)\\right\)\^\{(((?![\{\}]).)*)\}/g,"pow($1,$2)");for(;input.search(/\\left\(([0-9a-zA-Z\.\+\*\-\\\(\)\/]+)\\right\)\^\{(((?![\{\}]).)*)\}/)>=0;)input=input.replace(/\\left\(([0-9a-zA-Z\.\+\*\-\\\(\)\/]+)\\right\)\^\{(((?![\{\}]).)*)\}/g,"pow($1,$2)");return input.search(/\^/)>=0&&(input=d("nth power",input)),input},c=function(input){return h("sin",input)},f=function(input){return h("tan",input)},l=function(input){return h("cos",input)},h=function(t,input){for(var e=new RegExp("\\\\"+t+"\\\\left\\(([0-9a-zA-Z\\.\\+\\*\\-\\\\\\(\\)\\/]+)\\\\right\\)");input.search(e)>=0;)input=input.replace(e,t+"($1)");for(var r=new RegExp("\\\\"+t+"([0-9a-zA-Z]+)");input.search(r)>=0;)input=input.replace(r,t+"($1)");var n=new RegExp("\\\\"+t);return input.search(n)>=0&&(input=d(t,input)),input},d=function(t,input){var h,d,m,v,y,j,O;switch(t){case"fraction":(h=input.match(/\\frac.*/)[0]).search(/\\frac/);break;case"square root":(h=input.match(/\\sqrt\{.*/)[0]).search(/\\sqrt\{/);break;case"nth root":(h=input.match(/\\sqrt\[.*/)[0]).search(/\\sqrt\[/);break;case"nth power":(h=input.match(/\^.*/)[0]).search(/\^/);break;case"sin":(h=input.match(/\\sin\{.*/)[0]).search(/\\sin\{/);break;case"tan":(h=input.match(/\\tan\{.*/)[0]).search(/\\tan\{/);break;case"cos":(h=input.match(/\\cos\{.*/)[0]).search(/\\cos\{/);break;default:return}if(v=h.search(/\\frac/),y=h.search(/\\sqrt\{/),j=h.search(/\\sqrt\[/),O=h.search(/\^/),sin_pos=h.search(/\\sin\{/),tan_pos=h.search(/\\tan\{/),cos_pos=h.search(/\\cos\{/),(d=[v,j,y,O,sin_pos,tan_pos,cos_pos]).sort((function(a,b){return b-a})),(m=d[d.indexOf(0)-1])<=0||void 0===m)throw"syntax error";switch(m){case v:input=e(input);break;case y:input=r(input);break;case j:input=n(input);break;case O:input=o(input);break;case sin_pos:input=c(input);break;case tan_pos:input=f(input);break;case cos_pos:input=l(input)}switch(t){case"fraction":input=e(input);break;case"square root":input=r(input);break;case"nth root":input=n(input);break;case"nth power":input=o(input);break;case"sin":input=c(input);break;case"tan":input=f(input);break;case"cos":input=l(input)}return input};try{return t()}catch(t){throw"syntax error"}}),f=r(466),h=r(457),d=r(382);function m(t){return 0===Object(h.pb)(t).im}r(239),r(74);r(427);var v=r(55),y=Object(v.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null).exports,j=(r(429),{components:{Logo:y,VuetifyLogo:Object(v.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"VuetifyLogo",attrs:{alt:"Vuetify Logo",src:"/vuetify-logo.svg"}})}),[],!1,null,null,null).exports},layout:"calc",data:function(){return{Favicon:o,clipped:!0,drawer:!0,fixed:!0,miniVariant:!1,right:!0,rightDrawer:!1,title:"Tangent",e:"\\sqrt{ 36 -  x^2 - y^2}",equations:[{e:"\\sqrt{11-x^2-6x-9-y^2}",c:"#ff6688"},{e:"\\sqrt{11-x^2+6x-9-y^2}",c:"#ff6688"},{e:"2\\sqrt{x^2+y^2}-10",c:"#ff6688"}],graphKey:Date.now()}},methods:{generatePoints:function(t){var e,input=l(t);try{(e=Object(f.b)(Object(f.a)(input))).evaluate({x:0});d(t)}catch(t){return[]}return function t(e,a,b){var r,n=[e.evaluate({x:a}),e.evaluate({x:b})];try{r=[m(n[0]),m(n[1])]}catch(n){return[]}[].concat(n,Object(c.a)(r));if(r[0]&&r[1])return[[a,b]];if(!r[0]&&!r[1])return[];return[].concat(Object(c.a)(t(e,a,(a+b)/2-Number.EPSILON)),Object(c.a)(t(e,(a+b)/2,b)))}(e,-4,4)},brutePoints:function(t){var input,e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;console.log("================",t,"================");try{var n=localStorage.getItem(t);if(n)return JSON.parse(n)}catch(t){}try{input=l(t);(e=Object(f.b)(Object(f.a)(input))).evaluate({x:0,y:0});d(t)}catch(t){return[]}for(var o=Math.round(21/r),c=Array.from({length:o},(function(){return[]})),h=Array.from({length:o},(function(){return[]})),m=0,v=0,y=-10;y<=10;y+=r){for(var j=-10;j<=10;j+=r){var O=e.evaluate({x:j,y:y});if(O<=10&&O>=-10)try{c[v].push([j,y,O]),h[m].push([j,y,O])}catch(t){}v++}v=0,m++}try{localStorage.setItem(t,JSON.stringify([c,h]))}catch(t){}return[c,h]},hexToString:function(t){return"#"+t.toString(16)},stringToHex:function(t){return parseInt(t.slice(1),16)}},computed:{points:function(){var t=this.brutePoints(this.e),e=Object(n.a)(t,2);return{x:e[0],y:e[1]}},pointSets:function(){var t=this;return this.equations.map((function(e){var r=e.e,o=e.c,c=t.brutePoints(r),l=Object(n.a)(c,2);return{x:l[0],y:l[1],c:t.stringToHex(o)}}))}}}),O=(r(431),r(81)),w=r.n(O),x=r(359),_=r(354),k=r(182),$=r(467),S=r(360),A=r(355),z=r(159),V=r(160),P=r(102),D=r(161),L=r(67),C=r(356),E=r(469),T=r(358),Z=r(357),M=r(226),F=Object(v.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:!0,fixed:"",app:"",stateless:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",t._l(t.equations,(function(e,i){e.e;var n=e.c;return r("v-list-item",{key:i},[r("v-list-item-action",[r("v-menu",{attrs:{"offset-y":"","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,c=e.attrs;return[r("v-icon",t._g(t._b({style:"color:"+n},"v-icon",c,!1),o),[t._v("mdi-circle-outline")])]}}],null,!0)},[t._v(" "),r("v-color-picker",{attrs:{"show-swatches":"",mode:"hexa"},model:{value:t.equations[i].c,callback:function(e){t.$set(t.equations[i],"c",e)},expression:"equations[i].c"}})],1)],1),t._v(" "),r("v-list-item-content",[r("client-only",[r("mq-field",{attrs:{"model-value":t.equations[i].e},on:{"update:model-value":function(e){t.equations[i].e=e}}})],1)],1)],1)})),1)],1),t._v(" "),r("v-app-bar",{attrs:{"clipped-left":!0,fixed:"",app:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-app-bar-nav-icon",[r("img",{attrs:{height:"47px",src:t.Favicon}})]),t._v(" "),r("v-toolbar-title",{staticClass:"ml-3",domProps:{textContent:t._s(t.title)}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[r("v-icon",[t._v("mdi-menu")])],1)],1),t._v(" "),r("v-main",[r("v-container",[r("client-only",[r("graph",{attrs:{pointSets:t.pointSets}})],1)],1)],1),t._v(" "),r("v-footer",{attrs:{absolute:!t.fixed,app:""}},[r("span",[t._v("© "+t._s((new Date).getFullYear())+" Saumya Singhal")])])],1)}),[],!1,null,null,null);e.default=F.exports;w()(F,{MqField:r(458).default,Graph:r(459).default}),w()(F,{VAppBar:x.a,VAppBarNavIcon:_.a,VBtn:k.a,VColorPicker:$.a,VContainer:S.a,VFooter:A.a,VIcon:z.a,VList:V.a,VListItem:P.a,VListItemAction:D.a,VListItemContent:L.a,VMain:C.a,VMenu:E.a,VNavigationDrawer:T.a,VSpacer:Z.a,VToolbarTitle:M.a})}}]);