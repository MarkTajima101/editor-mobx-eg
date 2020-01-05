(this["webpackJsonpeditor-mobx"]=this["webpackJsonpeditor-mobx"]||[]).push([[0],{124:function(e,t,a){e.exports=a(330)},129:function(e,t,a){},130:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},131:function(e,t,a){},296:function(e,t,a){},330:function(e,t,a){"use strict";a.r(t);var l,r,o,n,i,c,s,u,p,b,h,g,m=a(1),y=a.n(m),f=a(16),d=a.n(f),T=(a(129),a(130),a(131),a(32)),C=a(33),O=a(75),j=a(70),k=a(74),E=a(71),v=(a(296),a(17)),w=a(76),x=a(4),P=a(19),K=a(13),L=(a(317),a(318)),z=new(l=function(){function e(){Object(T.a)(this,e),Object(P.a)(this,"pageListTest",r,this),Object(P.a)(this,"testKeyArr",o,this),Object(P.a)(this,"pageList",n,this),Object(P.a)(this,"localTitle",i,this),Object(P.a)(this,"localSubTitle",c,this),Object(P.a)(this,"localTextColour",s,this),Object(P.a)(this,"localBackColour",u,this),Object(P.a)(this,"localKey",p,this),Object(P.a)(this,"localKeyArr",b,this)}return Object(C.a)(e,[{key:"addPage",value:function(e,t,a,l){this.pageList.push({key:L.generate(),title:e,subTitle:t,textColour:a,backColour:l})}},{key:"changePage",value:function(e){this.localKeyArr=this.pageList.find((function(t){return t.key===e})),this.localTitle=this.localKeyArr.title,this.localSubTitle=this.localKeyArr.subTitle,this.localTextColour=this.localKeyArr.textColour,this.localBackColour=this.localKeyArr.backColour}}]),e}(),r=Object(K.a)(l.prototype,"pageListTest",[x.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[{key:0,title:"Title",subTitle:"subTitle"},{key:1,title:"Title2",subTitle:"subTitle2"},{key:2,title:"Title3",subTitle:"subTitle3",backColour:"#cccccc",textColour:"#ffffff"}]}}),o=Object(K.a)(l.prototype,"testKeyArr",[x.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.pageListTest.find((function(e){return 0===e.key}))}}),n=Object(K.a)(l.prototype,"pageList",[x.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(K.a)(l.prototype,"addPage",[x.d],Object.getOwnPropertyDescriptor(l.prototype,"addPage"),l.prototype),i=Object(K.a)(l.prototype,"localTitle",[x.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),c=Object(K.a)(l.prototype,"localSubTitle",[x.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),s=Object(K.a)(l.prototype,"localTextColour",[x.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),u=Object(K.a)(l.prototype,"localBackColour",[x.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),p=Object(K.a)(l.prototype,"localKey",[x.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),b=Object(K.a)(l.prototype,"localKeyArr",[x.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Object(K.a)(l.prototype,"changePage",[x.d],Object.getOwnPropertyDescriptor(l.prototype,"changePage"),l.prototype),l),S=Object(w.a)(h=function(e){function t(){return Object(T.a)(this,t),Object(O.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.props.store;return y.a.createElement("div",null,y.a.createElement("div",{className:"card",style:{height:"50rem",width:"30rem",backgroundColor:e.localBackColour}},y.a.createElement("p",{className:"title1",style:{color:e.localTextColour}},e.localTitle),y.a.createElement("p",{className:"title1",style:{color:e.localTextColour}},e.localSubTitle),y.a.createElement("p",{className:"title1"},e.pageListTest[0].title),y.a.createElement("p",{className:"title1"},e.testKeyArr.subTitle)))}}]),t}(m.Component))||h,A=Object(w.a)(g=function(e){function t(){var e,a;Object(T.a)(this,t);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return(a=Object(O.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).handleChangeTitle=function(e){a.props.store.localTitle=e.target.value},a.handleChangeSubTitle=function(e){a.props.store.localSubTitle=e.target.value},a.handleChangeTextColour=function(e){a.props.store.localTextColour=e.hex},a.handleChangeBackColour=function(e){a.props.store.localBackColour=e.hex},a.handleChangeKey=function(e){a.props.store.localKey=e.target.value},a.onChangePage=function(e){a.props.store.changePage(a.props.store.localKey)},a.onNewPage=function(e){e.preventDefault(),a.props.store.addPage(a.props.store.localTitle,a.props.store.localSubTitle,a.props.store.localTextColour,a.props.store.localBackColour)},a}return Object(k.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.props.store;return y.a.createElement("div",null,y.a.createElement("div",{className:"card",style:{height:"50rem",width:"30rem"}},y.a.createElement("form",{style:{marginLeft:"7rem",marginTop:"2rem"}},y.a.createElement(v.g,{label:"Title",name:"title",id:"title",size:"lg",required:!0,value:e.localTitle,onChange:this.handleChangeTitle}),y.a.createElement("p",{className:"inputLabel3"},"Less than 100 characters"),y.a.createElement("p",{className:"inputLabel1"},"Background Colour"),y.a.createElement(E.CompactPicker,{onChange:this.handleChangeBackColour}),y.a.createElement(v.g,{label:"Subtitle",name:"subTitle",id:"subTitle",size:"lg",required:!0,value:e.localSubTitle,onChange:this.handleChangeSubTitle}),y.a.createElement("p",{className:"inputLabel1"},"Text Colour"),y.a.createElement(E.CompactPicker,{onChange:this.handleChangeTextColour}),y.a.createElement(v.g,{label:"Select Page",name:"keyLoader",id:"keyLoader",size:"lg",required:!0,value:e.localKey,onChange:this.handleChangeKey}),y.a.createElement("div",{style:{marginTop:"3rem"}},y.a.createElement(v.c,{onClick:this.onChangePage}," Change Page "),y.a.createElement(v.c,{onClick:this.onNewPage}," Submit ")))))}}]),t}(m.Component))||g;var B=function(){return y.a.createElement(v.e,null,y.a.createElement(v.j,null,y.a.createElement(v.d,{sm:5,style:{marginTop:"1rem",margin:"2.5rem"}},y.a.createElement(S,{store:z})),y.a.createElement(v.d,{sm:5,style:{marginTop:"1rem",margin:"2.5rem"}},y.a.createElement(A,{store:z}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(327),a(328),a(329);d.a.render(y.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[124,1,2]]]);
//# sourceMappingURL=main.9375ccc4.chunk.js.map