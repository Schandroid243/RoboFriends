(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{27:function(e,t,n){},30:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(16),s=n.n(a),o=(n(27),n(6)),i=n.n(o),h=n(17),l=n(7),u=n(0),b=function(e){var t=e.name,n=e.email,c=e.id;return Object(u.jsxs)("div",{className:" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(u.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(c,"?200x200")}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)("p",{children:n})]})]})},j=function(e){var t=e.robots;return Object(u.jsx)("div",{children:t.map((function(e,t){return Object(u.jsx)(b,{id:e.id,name:e.name,email:e.email},t)}))})},d=function(e){var t=e.searchfield,n=e.searchChange;return Object(u.jsx)("div",{className:"pa2",children:Object(u.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search a robots",onChange:n,value:t||""})})},f=(n(30),n(18)),O=n.n(f),p=function(e){return Object(u.jsx)("div",{style:{overflowX:"scroll",border:"1px solid black",height:"600px"},children:e.children})},g=n(19),x=n(20),m=n(22),v=n(21),w=function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(e){var c;return Object(g.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(x.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"Oooooooops. That is not good !"}):this.props.children}}]),n}(c.Component),C=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(l.a)(a,2),o=s[0],b=s[1];Object(c.useEffect)((function(){f()}),[]);var f=function(){var e=Object(h.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){r(e.data),console.log("Response: ",n)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=n.filter((function(e){return e.name.toLocaleLowerCase().includes(o.toLocaleLowerCase())}));return n.length?Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{className:"f1",children:"Robot Friends"}),Object(u.jsx)(d,{searchfield:o,searchChange:function(e){b(e.target.value)}}),Object(u.jsx)(p,{children:Object(u.jsx)(w,{children:Object(u.jsx)(j,{robots:g})})})]}):Object(u.jsx)("h1",{className:"tc",children:"Loading..."})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};n(49);s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root")),y()}},[[50,1,2]]]);
//# sourceMappingURL=main.9f134c53.chunk.js.map