(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{106:function(e,a){},108:function(e,a){},109:function(e,a){},110:function(e,a){},111:function(e,a){},166:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(43),r=t.n(c),s=(t(84),t(85),t(7)),i=t(8),m=t(10),o=t(9),d=(t(49),t(25)),u=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"footer-content"},l.a.createElement("a",{href:"https://www.facebook.com/nguyen.wol"},l.a.createElement("i",{className:"icon-footer"},l.a.createElement("span",{className:"fa fa-facebook-square","aria-hidden":"true"},l.a.createElement("br",null),l.a.createElement("span",{className:"icon-name"},"Facebook")))),l.a.createElement("a",{href:"https://www.linkedin.com/in/thuy-nguyen-b97743b5/"},l.a.createElement("i",{className:"icon-footer"},l.a.createElement("span",{className:"fa fa-linkedin-square","aria-hidden":"true"},l.a.createElement("br",null),l.a.createElement("span",{className:"icon-name"},"Linkedin")))),l.a.createElement("a",{href:"https://github.com/milasido"},l.a.createElement("i",{className:"icon-footer"},l.a.createElement("span",{className:"fa fa-github","aria-hidden":"true"},l.a.createElement("br",null),l.a.createElement("span",{className:"icon-name"},"Github")))),l.a.createElement("a",{href:"mailto:wolnguyen98@gmail.com"},l.a.createElement("i",{className:"icon-footer"},l.a.createElement("span",{className:"fa fa-envelope","aria-hidden":"true"},l.a.createElement("br",null),l.a.createElement("span",{className:"icon-name"},"Email")))),l.a.createElement("a",{href:"tel:8328183390"},l.a.createElement("i",{className:"icon-footer"},l.a.createElement("span",{className:"fa fa-phone-square","aria-hidden":"true"},l.a.createElement("br",null),l.a.createElement("span",{className:"icon-name"},"Phone"))))))}}]),t}(n.Component),p=t(45),E=t.n(p),h=(t(90),t(37)),f=(t(53),function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={isOpen:!1},n}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"col bg-faded py-3 flex-grow-1 container-fluid home-home"},l.a.createElement("div",{className:"container home-div"},l.a.createElement("div",{className:"ava"},l.a.createElement("img",{className:"avatar",src:"https://avatars1.githubusercontent.com/u/35676333?s=460&u=40f4002fa99217f89d8b800c687fa8278da5ef9e&v=4",alt:"Avatar"})),l.a.createElement("div",{className:"stage greet"},l.a.createElement("div",{className:"thuy-wrapper"},l.a.createElement("div",{className:"sides"},l.a.createElement("div",{className:"side"}),l.a.createElement("div",{className:"side"}),l.a.createElement("div",{className:"side"}),l.a.createElement("div",{className:"side"})),l.a.createElement("div",{className:"text"},l.a.createElement("div",{className:"text--backing"},"I'm THUY nguyen"),l.a.createElement("div",{className:"text--left"},l.a.createElement("div",{className:"inner"},"i'm thuy nguyen"))))),l.a.createElement("div",{className:"home-content container"},l.a.createElement("div",{id:"animate"},l.a.createElement("div",{id:"flip"},l.a.createElement("div",null,"i am a ",l.a.createElement("div",null,"website developer")),l.a.createElement("div",null,"i am a ",l.a.createElement("div",null,"software engineer")),l.a.createElement("div",null,"i am a ",l.a.createElement("div",null,"Programmer")))),l.a.createElement("p",{className:"intro"},"Hi there, please call me \"th-wee nguyen\" :). I'm living in Houston, TX and I'm currently a senior computer science student at University of Houton. Being a programer is my dream when I was young, and I'm still pursuing my dream."),l.a.createElement("p",null,"I am especially interested in website development. Coding is my habbit, passion. I know that being a programmer is not easy, but I belive the more I try, the more success I will get. So, I will never stop learning to reach my dream."),l.a.createElement("div",{style:{float:"right",position:"relative"}},l.a.createElement("img",{style:{cursor:"pointer"},onClick:function(){return e.setState({isOpen:!0})},className:"device",src:E.a}),l.a.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"black",color:"white",paddingLeft:"10px",opacity:"0.5",paddingRight:"10px",pointerEvents:"none"}},"Click to zoom")),this.state.isOpen&&l.a.createElement(h.a,{mainSrc:E.a,onCloseRequest:function(){return e.setState({isOpen:!1})}}),l.a.createElement("p",null,"This website is a self-project I created during Covid-2019 ^^ using React, bootstrap, Github APIs, and EmailJS"),l.a.createElement("p",null),l.a.createElement(d.b,{to:"/contact"},l.a.createElement("button",{class:"contact100-form-btn"},"Contact Me")))),l.a.createElement(u,null))}}]),t}(n.Component)),v=t(3),b=(t(102),t(74)),g=t.n(b),N=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"col bg-faded py-3 flex-grow-1  container-fluid"},l.a.createElement("object",{clasName:"resume-frame",data:g.a,type:"application/pdf",width:"100%",height:"100%"}))}}]),t}(n.Component),y=t(75),w=t(30),k=t(76),O=t.n(k),j=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleChange=function(e){n.setState(Object(y.a)({},e.target.name,e.target.value))},n.handleValidate=function(){var e="",a="",t="";return n.state.name||(a="Please type your name"),n.state.email.includes(".")||(e="Valid email is required: abc@gmail.com"),n.state.message||(t="Please type your message"),a||e||t?(n.setState({emailError:e,nameError:a,messageError:t}),!1):(n.setState({emailError:"",nameError:"",messageError:""}),!0)},n.handleSubmit=function(e){e.preventDefault();n.handleValidate()&&O.a.send("default_service","template_MoT0GMKG",n.state,"user_pbUOXuIasdBW7d8NkHRiR").then((function(e){console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("FAILED...",e)}))},n.state={name:"",email:"",subject:"JOB-PORTFOLIO",message:"",nameError:"",emailError:"",messageError:""},n.handleChange=n.handleChange.bind(Object(w.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(w.a)(n)),n.handleValidate=n.handleValidate.bind(Object(w.a)(n)),n}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"contact col"},l.a.createElement("div",{className:"bg-contact2",style:{backgroundImage:'url("https://previews.123rf.com/images/canjoena/canjoena1701/canjoena170100618/68656839-businessman-hold-world-map-connect-international-network-with-cityscape-of-business-background-for-t.jpg")'}},l.a.createElement("div",{className:"container-contact2"},l.a.createElement("div",{className:"wrap-contact2"},l.a.createElement("form",{onSubmit:this.handleSubmit,className:"contact2-form validate-form"},l.a.createElement("span",{className:"contact2-form-title"},"Contact Me"),l.a.createElement("div",{className:"wrap-input2 validate-input"},this.state.nameError?l.a.createElement("div",null,l.a.createElement("div",{className:"alert-validate","data-validate":this.state.nameError,sign:"\\f128a"}),l.a.createElement("input",{onChange:this.handleChange,value:this.state.name,className:"input2",type:"text",name:"name",placeholder:"Name"})):l.a.createElement("input",{onChange:this.handleChange,value:this.state.name,className:"input2",type:"text",name:"name",placeholder:"Name"})),l.a.createElement("div",{className:"wrap-input2 validate-input"},this.state.emailError?l.a.createElement("div",null,l.a.createElement("div",{className:"alert-validate","data-validate":this.state.emailError}),l.a.createElement("input",{onChange:this.handleChange,value:this.state.email,className:"input2",type:"text",name:"email",placeholder:"Email"})):l.a.createElement("input",{onChange:this.handleChange,value:this.state.email,className:"input2",type:"text",name:"email",placeholder:"Email"})),l.a.createElement("div",{className:"wrap-input2 validate-input"},this.state.messageError?l.a.createElement("div",null,l.a.createElement("div",{className:"alert-validate","data-validate":this.state.messageError}),l.a.createElement("textarea",{onChange:this.handleChange,value:this.state.message,className:"input2",name:"message",placeholder:"Message"})):l.a.createElement("textarea",{onChange:this.handleChange,value:this.state.message,className:"input2",name:"message",placeholder:"Message"})),l.a.createElement("div",{className:"container-contact2-form-btn"},l.a.createElement("div",{className:"wrap-contact2-form-btn"},l.a.createElement("div",{className:"contact2-form-bgbtn"}),l.a.createElement("button",{type:"submmit",className:"contact2-form-btn"},"Send Your Message")))),l.a.createElement("div",{className:"contact-icon"},l.a.createElement("a",{href:"https://www.facebook.com/nguyen.wol"},l.a.createElement("i",{className:"icon-contact"},l.a.createElement("span",{className:"fa fa-facebook-square","aria-hidden":"true"},l.a.createElement("br",null),l.a.createElement("span",{className:"icon-name"},"Facebook")))),l.a.createElement("a",{href:"https://www.linkedin.com/in/thuy-nguyen-b97743b5/"},l.a.createElement("i",{className:"icon-contact"},l.a.createElement("span",{className:"fa fa-linkedin-square","aria-hidden":"true"},l.a.createElement("br",null),l.a.createElement("span",{className:"icon-name"},"Linkedin")))),l.a.createElement("a",{href:"https://github.com/milasido"},l.a.createElement("i",{className:"icon-contact"},l.a.createElement("span",{className:"fa fa-github","aria-hidden":"true"},l.a.createElement("br",null),l.a.createElement("span",{className:"icon-name"},"Github")))),l.a.createElement("a",{href:"mailto:wolnguyen98@gmail.com"},l.a.createElement("i",{className:"icon-contact"},l.a.createElement("span",{className:"fa fa-envelope","aria-hidden":"true"},l.a.createElement("br",null),l.a.createElement("span",{className:"icon-name"},"Email")))),l.a.createElement("a",{href:"tel:8328183390"},l.a.createElement("i",{className:"icon-contact"},l.a.createElement("span",{className:"fa fa-phone-square","aria-hidden":"true"},l.a.createElement("br",null),l.a.createElement("span",{className:"icon-name"},"Phone")))))))))}}]),t}(n.Component),x=t(77),C=t.n(x),I=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={data:[],isLoaded:!0,isOpen:!1,photoIndex:0},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.a.get("https://api.github.com/users/milasido/repos").then((function(a){e.setState({data:a.data}),console.log(a)}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.data;a.isLoaded,a.gif,atob("IyBFY29tbWVyY2Utd2Vic2l0ZQojIyBQcm9qZWN0IERlc2NyaXB0aW9uOiAK");return l.a.createElement("section",{class:"wrapper col bg-faded py-3 flex-grow-1 container-fluid"},l.a.createElement("div",{class:"container-fostrap"},l.a.createElement("div",null,l.a.createElement("h1",{class:"heading"},"Check Out My Projects ^^")),l.a.createElement("div",{class:"content"},l.a.createElement("div",{class:""},l.a.createElement("div",{class:"row"},t.map((function(a,n){return l.a.createElement("div",{class:"cardwrap col-xs-12 col-md-4",key:n},l.a.createElement("div",{class:"card"},l.a.createElement("div",{style:{position:"relative"}},l.a.createElement("a",{class:"img-card"},l.a.createElement("img",{style:{cursor:"pointer"},onClick:function(){return e.setState({isOpen:!0,photoIndex:n})},className:"device",src:a.homepage}),l.a.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"black",color:"white",paddingLeft:"10px",opacity:"0.5",paddingRight:"10px",pointerEvents:"none"}},"Click to zoom"))),e.state.isOpen&&l.a.createElement(h.a,{mainSrc:t[e.state.photoIndex].homepage,onCloseRequest:function(){return e.setState({isOpen:!1})}}),l.a.createElement("div",{class:"card-content"},l.a.createElement("h4",{class:"card-title"},l.a.createElement("a",{id:"project-name"},a.name)),l.a.createElement("p",{class:"card-intro"},a.description)),l.a.createElement("div",{class:"card-read-more"},l.a.createElement("a",{onClick:function(){return window.open(a.html_url)},class:"btn btn-link btn-block"},"Read More"))))})))))))}}]),t}(n.Component),S=t(78),R=t.n(S),M=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row min-vh-100 flex-column flex-md-row"},l.a.createElement("aside",{className:"col-12 col-md-2 p-0 flex-shrink-1"},l.a.createElement("nav",{className:"navbar navbar-expand navbar-dark flex-md-column flex-row align-items-start py-2"},l.a.createElement("div",{className:"collapse navbar-collapse"},l.a.createElement("ul",{className:"flex-md-column flex-row navbar-nav w-100 justify-content-between"},l.a.createElement("li",{className:"nav-logo"},l.a.createElement(d.b,{to:"/Portfolio",style:{textDecoration:"none"}},l.a.createElement("img",{className:"logo",src:R.a}))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/projects",style:{textDecoration:"none"}},l.a.createElement("a",{className:"nav-link pl-0 "},l.a.createElement("span",{className:"d-md-inline"},"Projects")))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/resume",style:{textDecoration:"none"}},l.a.createElement("a",{className:"nav-link pl-0"},l.a.createElement("span",{className:"d-md-inline"},"Resume")))),l.a.createElement("li",{className:"nav-item "},l.a.createElement(d.b,{to:"/contact",style:{textDecoration:"none"}},l.a.createElement("a",{className:"nav-link pl-0"},l.a.createElement("span",{className:"d-md-inline"},"Contact")))))))),l.a.createElement(v.c,null,l.a.createElement(v.a,{exact:!0,path:"/Portfolio",component:f}),l.a.createElement(v.a,{exact:!0,path:"/resume",component:N}),l.a.createElement(v.a,{exact:!0,path:"/projects",component:I}),l.a.createElement(v.a,{exact:!0,path:"/contact",component:j}))))}}]),t}(n.Component);t(164);var P=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(165);r.a.render(l.a.createElement(d.a,null,l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},34:function(e,a){function t(e){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=34},45:function(e,a,t){e.exports=t.p+"static/media/device .d8f2b7a5.png"},74:function(e,a,t){e.exports=t.p+"static/media/Resume.eff9713b.pdf"},78:function(e,a,t){e.exports=t.p+"static/media/logo.b2b51972.jpg"},79:function(e,a,t){e.exports=t(166)},84:function(e,a,t){},85:function(e,a,t){},90:function(e,a,t){}},[[79,1,2]]]);
//# sourceMappingURL=main.40a6784f.chunk.js.map