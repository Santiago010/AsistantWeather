(this.webpackJsonpapiweather=this.webpackJsonpapiweather||[]).push([[0],{21:function(a,e,t){},28:function(a,e,t){},35:function(a,e,t){},37:function(a,e,t){},38:function(a,e,t){},39:function(a,e,t){},40:function(a,e,t){"use strict";t.r(e);var n=t(0),s=t.n(n),c=t(22),r=t.n(c),i=t(12),o=t(2),m=t(7),d=t(8),u=t(10),p=t(9),l=(t(28),t(1)),h=function(a){Object(u.a)(t,a);var e=Object(p.a)(t);function t(){return Object(m.a)(this,t),e.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return Object(l.jsxs)(i.b,{className:"pageHome__card",to:"/today",children:[Object(l.jsx)("h2",{className:"card__title",children:"Harry Da Clima Actual"}),Object(l.jsx)("span",{className:"card__description",children:"Preguntale a Harry cual es el clima actual de tu ciudad"})]})}}]),t}(n.Component),g=t.p+"static/media/ImageHome.a732c55e.svg",j=(t(35),function(a){Object(u.a)(t,a);var e=Object(p.a)(t);function t(){return Object(m.a)(this,t),e.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"pageHome",children:[Object(l.jsxs)("div",{className:"pageHome__cardAsistant",children:[Object(l.jsx)("img",{src:g,alt:"Image Asistant",className:"cardAsistant__image"}),Object(l.jsx)("h1",{className:"cardAsistant__name",children:"Asistant Harry"})]}),Object(l.jsx)("div",{className:"pageHome__cards",children:Object(l.jsx)(h,{})})]})}}]),t}(n.Component)),b=t(14),f=t.n(b),O=t(19),v=(t(37),t(21),n.Component,t(38),function(a){Object(u.a)(t,a);var e=Object(p.a)(t);function t(){return Object(m.a)(this,t),e.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return Object(l.jsx)("ul",{className:"chat",children:this.props.messages.map((function(a,e){return Object(l.jsxs)("li",{className:"chat__card--asistant",children:[Object(l.jsx)("img",{width:"100",src:a.image}),Object(l.jsx)("p",{children:a.paragraph})]},e)}))})}}]),t}(s.a.Component)),x=t.p+"static/media/ImageAsistant.3519ebb5.svg",w=t.p+"static/media/ImageUser.f08dfca4.svg",y=t.p+"static/media/ImageWeather.67a2d885.svg",_=function(a){Object(u.a)(t,a);var e=Object(p.a)(t);function t(a){var n;return Object(m.a)(this,t),(n=e.call(this,a)).renderInfo=function(a){var e=a.toLowerCase();if("a"===e||"b"===e||"c"===e){switch(e){case"a":n.setState({message:[].concat(n.state.message,{image:"http://openweathermap.org/img/wn/".concat(n.data.weather[0].icon,"@2x.png"),paragraph:"Humedad: ".concat(n.data.main.humidity,"\n              \nPresion: ").concat(n.data.main.pressure," \n Temperatura: ").concat(n.data.main.temp)})});break;case"b":n.setState({message:[].concat(n.state.message,{image:"http://openweathermap.org/img/wn/".concat(n.data.weather[0].icon,"@2x.png"),paragraph:"Descripcion: ".concat(n.data.weather[0].description,"\n              Principal: ").concat(n.data.weather[0].main)})});break;case"c":n.setState({message:[].concat(n.state.message,{image:"http://openweathermap.org/img/wn/".concat(n.data.weather[0].icon,"@2x.png"),paragraph:"Humedad: ".concat(n.data.main.humidity,"\n              \nPresion: ").concat(n.data.main.pressure," \n Temperatura: ").concat(n.data.main.temp,"\nDescripcion: ").concat(n.data.weather[0].description,"\n              Principal: ").concat(n.data.weather[0].main)})})}console.log(n.data)}},n.handleSubmit=function(){var a=Object(O.a)(f.a.mark((function a(e){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e.preventDefault(),n.instantsFormData=new FormData(e.target),n.setState({message:[].concat(n.state.message,{image:"",paragraph:n.instantsFormData.get("data")})}),n.renderInfo(n.instantsFormData.get("data")),!n.indicatorInfo){a.next=10;break}return a.next=7,n.getData(n.instantsFormData.get("data"));case 7:n.data=a.sent,console.log(n.data),"404"===n.data.cod?(console.log("Ciudad no encontrada"),n.setState({message:[].concat(n.state.message,{image:"",paragraph:n.data.message})})):(n.indicatorInfo=!1,n.setState({message:[].concat(n.state.message,{image:"",paragraph:"\xa1Muy bien!, ahora dime que tipo de informacion quieres ver, Ingresa a: si quieres ver informacion principal, Ingresa b: si quieres ver informacion exclusivamente del clima y Ingresa c: si quieres ver los dos tipos de informacion"})}));case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),n.getData=function(){var a=Object(O.a)(f.a.mark((function a(e){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise((function(a,t){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=3d060094da375105a7dd696078c59e0c&lang=es")).then((function(a){return a.json()})).then((function(e){return a(e)})).catch((function(a){return t(a)}))})));case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),n.state={message:[{image:x,paragraph:"\xa1Hola !Bienvenido, soy un asistente virtual que te puede ayudar a dar informaci\xf3n del clima de hoy."}]},n.time=void 0,n.instantsFormData=void 0,n.indicatorInfo=!0,n.data=null,n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var a=this;this.time=setTimeout((function(){a.setState({message:[].concat(a.state.message,{image:y,paragraph:"Si deseas mi ayuda debes ingresar tu ciudad en el campo que se encuentra abajo"})})}),1500),console.log(this.state.message)}},{key:"componentWillUnmount",value:function(){clearInterval(this.time)}},{key:"render",value:function(){var a=this;return Object(l.jsxs)("div",{className:"today",children:[Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)(i.b,{to:"/",className:"header__arrowBefore",children:Object(l.jsx)("i",{className:"fas fa-chevron-left"})}),Object(l.jsxs)("div",{className:"header__targetAsistant",children:[Object(l.jsx)("img",{src:w,alt:"Image User",className:"header__targetAsistant--image"}),Object(l.jsx)("span",{className:"header__targetAsistant--name",children:"Name Asistant"})]})]}),Object(l.jsx)(v,{messages:this.state.message}),Object(l.jsx)(n.Fragment,{children:Object(l.jsxs)("form",{className:"form",onSubmit:function(e){return a.handleSubmit(e)},children:[Object(l.jsx)("input",{className:"form__inputText",type:"text",name:"data",placeholder:"Datos",required:!0}),Object(l.jsx)("input",{className:"form__inputSubmit",type:"submit",value:">"})]})})]})}}]),t}(n.Component),N=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:j}),Object(l.jsx)(o.a,{exact:!0,path:"/Today",component:_})]})})};t(39);r.a.render(Object(l.jsx)(N,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.be027a47.chunk.js.map