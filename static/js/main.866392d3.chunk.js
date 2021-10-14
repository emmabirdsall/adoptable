(this["webpackJsonpfinal-project"]=this["webpackJsonpfinal-project"]||[]).push([[0],{19:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(21),r=n.n(c),o=(n(19),n(7)),i=n(8),l=n(10),d=n(9),p=n(0),h=function(){return Object(p.jsx)("article",{className:"home__item",children:Object(p.jsxs)("div",{className:"home__container",children:[Object(p.jsx)("h1",{className:"home__header",children:"Welcome to Adoptable!"}),Object(p.jsx)("p",{className:"home__text",children:"We hope you are as passionate about adopting animals as we are! There are so many wonderful animals across the country that need loving homes so your choice to adopt makes a huge difference."}),Object(p.jsx)("p",{className:"home__text",children:"You can search adoptable animals in your area using the below form. All animals have links to the original Petfinder listings so you can learn more about any of the animals you see."}),Object(p.jsx)("p",{className:"home__text",children:"Happy Adopting!"})]})})},j=n(11),u=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={banner:e.props.banner},e.handleValidation=function(t){t.preventDefault(),0==e.state.banner&&alert("Please enter a zipcode and radius to view the animals!")},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(p.jsx)("header",{className:"header",children:Object(p.jsxs)("nav",{className:"nav",children:[Object(p.jsx)("h1",{className:"nav__title nav__container",children:Object(p.jsx)(j.b,{to:"/adoptable",className:"nav__link nav__title",children:"Adoptable"})}),Object(p.jsxs)("ul",{className:"nav__list",children:[Object(p.jsx)("li",{className:"nav__item",children:Object(p.jsx)(j.b,{to:"/dogs",onClick:this.handleValidation,className:"nav__link",children:"Dogs"})}),Object(p.jsx)("li",{className:"nav__item",children:Object(p.jsx)(j.b,{to:"/cats",onClick:this.handleValidation,className:"nav__link",children:"Cats"})}),Object(p.jsx)("li",{className:"nav__item",children:Object(p.jsx)(j.b,{to:"/bunnies",onClick:this.handleValidation,className:"nav__link",children:"Bunnies"})})]})]})})}}]),n}(s.a.Component),b=function(e){return Object(p.jsxs)("form",{className:"form home__item home__container",onSubmit:e.onSubmit,children:[Object(p.jsxs)("label",{className:"form__label",children:["Zip Code: ",Object(p.jsx)("input",{className:"form__input",type:"text",onChange:e.onChange})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{className:"form__label",children:["Radius (in miles): ",Object(p.jsx)("input",{className:"form__input",type:"text",onInput:e.onInput})]}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{className:"form__button",type:"submit",children:"Submit"})]})},m=function(){return Object(p.jsxs)("footer",{className:"footer",children:[Object(p.jsx)("p",{children:"Emma Birdsall"}),Object(p.jsx)("small",{children:"\xa9 2021, v1"})]})},_=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={newData:[]},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.petfinder.com/v2/oauth2/token",{method:"POST",body:"grant_type=client_credentials&client_id=nBbPPunbVg4VtwHbzj4sT34JcAwWIPTnBNQRTvtmroSOAy6oQw&client_secret=ypyAwTXGKc3scruPl8opOR0o59HzGRW86a9blyWU",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return e.json()})).then((function(t){return console.log("token",t),fetch("https://api.petfinder.com/v2/animals?type=dog&status=adoptable&location="+e.props.zipcode+"&distance="+e.props.radius,{headers:{Authorization:t.token_type+" "+t.access_token,"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return e.json()})).then((function(t){console.log("pets",t),e.setState({newData:[t]})}))}))}},{key:"render",value:function(){var e=this.state.newData[0];return console.log(e),e?Object(p.jsx)("article",{className:"pet",children:e.animals.map((function(e){return Object(p.jsxs)("div",{className:"pet__container",children:[Object(p.jsx)("h3",{className:"pet__header",children:e.name}),Object(p.jsxs)("p",{children:["Age: ",e.age]}),Object(p.jsxs)("p",{className:"pet__location",children:[e.contact.address.city,", ",e.contact.address.state]}),Object(p.jsx)("img",{src:null!==e.primary_photo_cropped?e.primary_photo_cropped.small:"",alt:"Sorry you can't see how cute this dog is!",className:"pet__photo"}),Object(p.jsx)("p",{className:"pet__info",children:e.Age}),Object(p.jsx)("p",{className:"pet__info",children:e.breeds.primary}),Object(p.jsx)("p",{className:"pet__info",children:e.description}),Object(p.jsxs)("p",{children:["Click to learn more about ",Object(p.jsx)("a",{href:e.url,className:"pet__link",children:e.name}),"."]})]},e.id)}))}):Object(p.jsx)("div",{className:"background--error",children:Object(p.jsx)("div",{className:"pet__container--error",children:Object(p.jsx)("p",{className:"pet__info",children:"Your dogs should load within a few seconds. If this message persists, try expanding your search radius."})})})}}]),n}(s.a.Component),O=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={newData:[]},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.petfinder.com/v2/oauth2/token",{method:"POST",body:"grant_type=client_credentials&client_id=nBbPPunbVg4VtwHbzj4sT34JcAwWIPTnBNQRTvtmroSOAy6oQw&client_secret=ypyAwTXGKc3scruPl8opOR0o59HzGRW86a9blyWU",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return e.json()})).then((function(t){return console.log("token",t),fetch("https://api.petfinder.com/v2/animals?type=cat&status=adoptable&location="+e.props.zipcode+"&distance="+e.props.radius,{headers:{Authorization:t.token_type+" "+t.access_token,"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return e.json()})).then((function(t){console.log("pets",t),e.setState({newData:[t]})}))}))}},{key:"render",value:function(){var e=this.state.newData[0];return console.log(e),e?Object(p.jsx)("article",{className:"pet",children:e.animals.map((function(e){return Object(p.jsxs)("div",{className:"pet__container",children:[Object(p.jsx)("h3",{className:"pet__header",children:e.name}),Object(p.jsxs)("p",{children:["Age: ",e.age]}),Object(p.jsxs)("p",{className:"pet__location",children:[e.contact.address.city,", ",e.contact.address.state]}),Object(p.jsx)("img",{src:null!==e.primary_photo_cropped?e.primary_photo_cropped.small:"",alt:"Sorry you can't see how cute this cat is!",className:"pet__photo"}),Object(p.jsx)("p",{className:"pet__info",children:e.Age}),Object(p.jsx)("p",{className:"pet__info",children:e.breeds.primary}),Object(p.jsx)("p",{className:"pet__info",children:e.description}),Object(p.jsxs)("p",{children:["Click to learn more about ",Object(p.jsx)("a",{href:e.url,className:"pet__link",children:e.name}),"."]})]},e.id)}))}):Object(p.jsx)("div",{className:"background--error",children:Object(p.jsx)("div",{className:"pet__container--error",children:Object(p.jsx)("p",{className:"pet__info",children:"Your cats should load within a few seconds. If this message persists, try expanding your search radius."})})})}}]),n}(s.a.Component),x=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={newData:[]},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.petfinder.com/v2/oauth2/token",{method:"POST",body:"grant_type=client_credentials&client_id=nBbPPunbVg4VtwHbzj4sT34JcAwWIPTnBNQRTvtmroSOAy6oQw&client_secret=ypyAwTXGKc3scruPl8opOR0o59HzGRW86a9blyWU",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return e.json()})).then((function(t){return console.log("token",t),fetch("https://api.petfinder.com/v2/animals?type=rabbit&status=adoptable&location="+e.props.zipcode+"&distance="+e.props.radius,{headers:{Authorization:t.token_type+" "+t.access_token,"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return e.json()})).then((function(t){console.log("pets",t),e.setState({newData:[t]})}))}))}},{key:"render",value:function(){var e=this.state.newData[0];return console.log(e),e?Object(p.jsx)("article",{className:"pet",children:e.animals.map((function(e){return Object(p.jsxs)("div",{className:"pet__container",children:[Object(p.jsx)("h3",{className:"pet__header",children:e.name}),Object(p.jsxs)("p",{children:["Age: ",e.age]}),Object(p.jsxs)("p",{className:"pet__location",children:[e.contact.address.city,", ",e.contact.address.state]}),Object(p.jsx)("img",{src:null!==e.primary_photo_cropped?e.primary_photo_cropped.small:"",alt:"Sorry you can't see how cute this bun bun is!",className:"pet__photo"}),Object(p.jsx)("p",{className:"pet__info",children:e.Age}),Object(p.jsx)("p",{className:"pet__info",children:e.breeds.primary}),Object(p.jsx)("p",{className:"pet__info",children:e.description}),Object(p.jsxs)("p",{children:["Click to learn more about ",Object(p.jsx)("a",{href:e.url,className:"pet__link",children:e.name}),"."]})]},e.id)}))}):Object(p.jsx)("div",{className:"background--error",children:Object(p.jsx)("div",{className:"pet__container--error",children:Object(p.jsx)("p",{className:"pet__info",children:"Your bunnies should load within a few seconds. If this message persists, try expanding your search radius."})})})}}]),n}(s.a.Component),f=function(){return Object(p.jsxs)("article",{className:"not-found container",children:[Object(p.jsx)("h1",{children:"404!"}),Object(p.jsxs)("p",{children:["Content not found.",Object(p.jsx)(j.b,{to:"/",children:" Return to Home."})]})]})},y=n(14),v=n.n(y),g=n(2),N=n(23),w=n.n(N),k=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={zipcode:"",radius:"",banner:!1,bannerCss:{backgroundColor:"#B0EEAF",border:"5px solid #AAE089",borderRadius:"5px"}},e.handleZipcode=function(t){e.setState({zipcode:t.target.value})},e.handleRadius=function(t){e.setState({radius:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.state.zipcode.length>5||e.state.zipcode.length<5||0===e.state.radius.length?alert("Please enter a valid 5 digit zipcode"):e.setState({banner:!0})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return console.log(this.state),Object(p.jsxs)(j.a,{children:[Object(p.jsx)(u,{banner:this.state.banner}),Object(p.jsxs)(g.c,{children:[Object(p.jsx)(g.a,{exact:!0,path:"/adoptable",render:function(){return Object(p.jsx)("div",{className:"background",children:Object(p.jsxs)("div",{className:"home",children:[Object(p.jsx)(v.a,{parent:e}),Object(p.jsx)(w.a,{showBanner:e.state.banner,css:e.state.bannerCss,title:"Your search will occur within ".concat(e.state.radius," miles of ").concat(e.state.zipcode,". Please use the links above to view the adoptable animals in your area.")}),Object(p.jsx)(h,{}),Object(p.jsx)(b,{onChange:e.handleZipcode,onInput:e.handleRadius,onSubmit:e.handleSubmit})]})})}}),Object(p.jsx)(g.a,{path:"/dogs",render:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(v.a,{parent:e}),Object(p.jsx)(_,{radius:e.state.radius,zipcode:e.state.zipcode})]})}}),Object(p.jsx)(g.a,{path:"/cats",render:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(v.a,{parent:e}),Object(p.jsx)(O,{radius:e.state.radius,zipcode:e.state.zipcode})]})}}),Object(p.jsx)(g.a,{path:"/bunnies",render:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(v.a,{parent:e}),Object(p.jsx)(x,{radius:e.state.radius,zipcode:e.state.zipcode})]})}}),Object(p.jsx)(g.a,{component:f})]}),Object(p.jsx)(m,{})]})}}]),n}(s.a.Component),A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root")),A()}},[[36,1,2]]]);
//# sourceMappingURL=main.866392d3.chunk.js.map