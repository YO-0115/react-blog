(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{429:function(n,e,t){"use strict";t.r(e);var r,c,a,o,s,i,b=t(1),u=t(82),l=t.n(u),j=t(8),p=t(2),d=t(13),x=t(10),f=t(3),O=Object(f.a)(r||(r=Object(p.a)(["\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  \n  a {\n    text-decoration: none;\n    display: flex;\n  \n    &:hover {\n      text-decoration: none;\n    }\n  }\n  \n  a:hover {\n    cursor: pointer;\n  }\n\n  input {\n    outline: none;\n    border: none;\n  }\n  \n  button {\n    border: none;\n    cursor: pointer;\n  }\n  button:hover, button:focus {\n    outline: none;\n  }\n"]))),h=Object(b.createContext)(null),v=Object(b.createContext)(null),g="token",m=function(n){localStorage.setItem(g,n)},w=function(){return localStorage.getItem(g)};var y=f.b.div(c||(c=Object(p.a)(["\n  height: 64px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 0 32px;\n  background: white;\n  z-index: 50;\n"]))),k=Object(f.b)(d.b)(a||(a=Object(p.a)(["\n  font-size: 32px;\n  font-weight: bold;\n  color: black;\n\n  &:hover {\n    color: #145df6;\n  }\n"]))),S=f.b.div(o||(o=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  height: 64px;\n"]))),C=Object(f.b)(d.c)(s||(s=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100px;\n  color: black;\n\n  &:before {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    width: 0;\n    height: 2px;\n    background: #145df6;\n    transition: width 0.5s;\n  }\n\n  &:hover:before {\n    width: 100px;\n  }\n"]))),z=f.b.div(i||(i=Object(p.a)(["\n  display: flex;\n  align-items: center;\n\n  "," {\n    margin-left: 64px;\n  }\n"])),S),F=t(0),L={"font-weight":"600","border-bottom":"2px solid rgba(0, 0, 0, 0.5)"};var P,D,A,E,_,I,B,T,U,J,M=function(n){var e=n.isUser,t=Object(b.useContext)(h),r=t.user,c=t.setUser;return Object(F.jsx)(y,{children:e&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(z,{children:[Object(F.jsx)(k,{to:"/",children:"Blog"}),Object(F.jsxs)(S,{children:[Object(F.jsx)(C,{to:"/posts-list",activeStyle:L,children:"\u6587\u7ae0\u5217\u8868"}),Object(F.jsx)(C,{to:"/about",activeStyle:L,children:"\u95dc\u65bc\u6211"}),r&&Object(F.jsx)(C,{to:"/new-post",activeStyle:L,children:"\u767c\u5e03\u6587\u7ae0"})]})]}),Object(F.jsxs)(S,{children:[!r&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(C,{to:"/register",activeStyle:L,children:"\u8a3b\u518a"}),Object(F.jsx)(C,{to:"/login",activeStyle:L,children:"\u767b\u5165"})]}),r&&Object(F.jsx)(C,{to:"/",onClick:function(){m(""),c(null)},children:"\u767b\u51fa"})]})]})})},$=t(5),N=t.n($),Y=t(9),q=t(29),G="https://student-json-api.lidemy.me",H=function(){var n=Object(Y.a)(N.a.mark((function n(e,t,r){var c,a;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(G,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:e,username:t,password:r})});case 3:return c=n.sent,n.next=6,c.json();case 6:return a=n.sent,n.abrupt("return",a);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e,t,r){return n.apply(this,arguments)}}(),K=function(){var n=Object(Y.a)(N.a.mark((function n(e,t){var r,c;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(G,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:e,password:t})});case 3:return r=n.sent,c=r.json(),n.abrupt("return",c);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}(),Q=function(){var n=Object(Y.a)(N.a.mark((function n(){var e,t,r;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=w(),n.prev=1,n.next=4,fetch("".concat(G,"/me"),{headers:{authorization:"Bearer ".concat(e)}});case 4:return t=n.sent,r=t.json(),n.abrupt("return",r);case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(){return n.apply(this,arguments)}}(),R=function(){var n=Object(Y.a)(N.a.mark((function n(){var e,t;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(G,"/posts?_sort=createdAt&_order=desc"));case 3:return e=n.sent,n.next=6,e.json();case 6:return t=n.sent,n.abrupt("return",t);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),V=function(){var n=Object(Y.a)(N.a.mark((function n(e){var t,r,c;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(G,"/posts?&_page=").concat(e,"&_limit=").concat(5,"&_expand=user&_sort=createdAt&_order=desc"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,c=t.headers.get("x-total-count"),n.abrupt("return",{data:r,total:c});case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0.message);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}(),W=function(){var n=Object(Y.a)(N.a.mark((function n(e){var t,r;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(G,"/posts/").concat(e,"?_expand=user"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),X=function(){var n=Object(Y.a)(N.a.mark((function n(e){var t,r;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(G,"/users/").concat(e,"?_embed=posts"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,console.log(r),n.abrupt("return",r);case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0.message);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}(),Z=function(){var n=Object(Y.a)(N.a.mark((function n(e,t){var r,c,a;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=w(),n.prev=1,n.next=4,fetch("".concat(G,"/posts"),{method:"POST",headers:{authorization:"Bearer ".concat(r),"content-type":"application/json"},body:JSON.stringify({title:e,body:t})});case 4:return c=n.sent,a=c.json(),n.abrupt("return",a);case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e,t){return n.apply(this,arguments)}}(),nn=function(){var n=Object(Y.a)(N.a.mark((function n(e){var t,r,c;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=w(),n.prev=1,n.next=4,fetch("".concat(G,"/posts/").concat(e),{method:"DELETE",headers:{authorization:"Bearer ".concat(t),"content-type":"application/json"}});case 4:return r=n.sent,n.next=7,r.json;case 7:return c=n.sent,n.abrupt("return",c);case 11:n.prev=11,n.t0=n.catch(1),console.log(n.t0.message);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}(),en=f.b.div(P||(P=Object(p.a)(["\n  padding: 16px;\n  max-width: 800px;\n  margin: 40px auto;\n"]))),tn=Object(f.b)(d.b)(D||(D=Object(p.a)(["\n  border: 1px solid #ccc;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n  color: #333;\n\n  & + & {\n    margin-top: 24px;\n  }\n\n  &:hover {\n    color: blue;\n  }\n"]))),rn=f.b.div(A||(A=Object(p.a)(["\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),cn=f.b.div(E||(E=Object(p.a)(["\n  font-size: 18px;\n  line-height: 1.5;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n  color: #333;\n\n  word-wrap: break-word;\n  word-break: break-all;\n  white-space: pre-wrap;\n"]))),an=f.b.div(_||(_=Object(p.a)(["\n  font-size: 14px;\n  margin-bottom: 4px;\n  color: rgba(0, 0, 0, 0.5);\n"]))),on=f.b.div(I||(I=Object(p.a)(["\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 14px;\n  margin-bottom: 16px;\n"]))),sn=f.b.div(B||(B=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n  margin: 28px 0 8px;\n"]))),bn=f.b.div(T||(T=Object(p.a)(["\n  cursor: pointer;\n  font-weight: bold;\n\n  &:hover {\n    color: #145df6;\n  }\n"]))),un=f.b.div(U||(U=Object(p.a)(["\n  margin: 0 16px;\n"]))),ln=f.b.div(J||(J=Object(p.a)(["\n  text-align: center;\n"])));function jn(n){var e=n.post;return Object(F.jsxs)(tn,{to:"/posts/".concat(e.id),children:[Object(F.jsx)(rn,{children:e.title}),Object(F.jsx)(an,{children:e.user&&e.user.nickname}),Object(F.jsx)(on,{children:new Date(e.createdAt).toLocaleDateString()}),Object(F.jsx)(cn,{children:Object(F.jsx)(q.a.Markdown,{source:e.body})})]})}var pn,dn,xn,fn,On,hn,vn,gn,mn=function(){var n=Object(b.useContext)(v).setIsLoading,e=Object(b.useState)([]),t=Object(j.a)(e,2),r=t[0],c=t[1],a=Object(b.useState)(1),o=Object(j.a)(a,2),s=o[0],i=o[1],u=Object(b.useState)(0),l=Object(j.a)(u,2),p=l[0],d=l[1],x=Object(b.useState)(null),f=Object(j.a)(x,2),O=f[0],h=f[1];return Object(b.useLayoutEffect)((function(){var e=function(){var e=Object(Y.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),h(!1),e.next=4,V(s);case 4:t=e.sent,c(t.data),d(Math.ceil((t.total-1)/5)),n(!1),h(!0);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n,s,p]),Object(F.jsxs)(en,{children:[r.map((function(n){return Object(F.jsx)(jn,{post:n},n.id)})),O&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(sn,{children:[Object(F.jsx)(bn,{onClick:function(){s>1&&i(s-1),window.scrollTo(0,0)},children:"\uff1c"}),Object(F.jsx)(un,{children:s}),Object(F.jsx)(bn,{onClick:function(){s<p&&i(s+1),window.scrollTo(0,0)},children:"\uff1e"})]}),Object(F.jsxs)(ln,{children:[s," / ",p]})]})]})},wn=t(7),yn=t(92),kn=f.b.div(pn||(pn=Object(p.a)(["\n  padding: 16px;\n  max-width: 800px;\n  margin: 40px auto;\n"]))),Sn=f.b.div(dn||(dn=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Cn=f.b.div(xn||(xn=Object(p.a)(["\n  margin: 0 8px;\n  cursor: pointer;\n  color: ",";\n  font-weight: ",";\n\n  &:hover {\n    color: #145df6;\n  }\n"])),(function(n){return n.$active?"black":"gray"}),(function(n){return n.$active?"600":""})),zn=f.b.div(fn||(fn=Object(p.a)(["\n  padding-top: 32px;\n\n  & + & {\n    margin-top: 32px;\n  }\n"]))),Fn=f.b.span(On||(On=Object(p.a)(["\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 600;\n  margin-bottom: 24px;\n  border-bottom: 3px solid #145df6;\n"]))),Ln=Object(f.b)(d.b)(hn||(hn=Object(p.a)(["\n  padding: 8px 24px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  background: white;\n\n  &:hover {\n    transform: scale(1.1);\n    border: 1px solid #ccc;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n  }\n"]))),Pn=f.b.div(vn||(vn=Object(p.a)(["\n  font-size: 24px;\n  color: #333;\n  max-width: 600px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),Dn=f.b.div(gn||(gn=Object(p.a)(["\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 14px;\n"])));function An(n){var e=n.post;return Object(F.jsxs)(Ln,{to:"/posts/".concat(e.id),children:[Object(F.jsx)(Pn,{children:e.title}),Object(F.jsx)(Dn,{children:new Date(e.createdAt).toLocaleDateString().substring(5,10)})]})}var En,_n,In,Bn,Tn,Un,Jn,Mn,$n=function(){var n=Object(b.useContext)(h).user,e=Object(b.useContext)(v).setIsLoading,t=Object(b.useState)([]),r=Object(j.a)(t,2),c=r[0],a=r[1],o=Object(b.useState)("allPosts"),s=Object(j.a)(o,2),i=s[0],u=s[1],l=Object(b.useState)([]),p=Object(j.a)(l,2),d=p[0],x=p[1];Object(b.useLayoutEffect)((function(){var t=function(){var t=Object(Y.a)(N.a.mark((function t(){var r,c,o,s;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e(!0),!n){t.next=11;break}return r=n.id,t.next=5,X(r);case 5:return c=t.sent,o=c.posts.sort((function(n,e){return n.createdAt<e.createdAt?1:-1})),a(o),u("myPosts"),e(!1),t.abrupt("return");case 11:return t.next=13,R();case 13:s=t.sent,a(s),e(!1);case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e,n]),Object(b.useEffect)((function(){var n,e=[],t=Object(yn.a)(c);try{for(t.s();!(n=t.n()).done;){var r=n.value;e.push(new Date(r.createdAt).getFullYear())}}catch(a){t.e(a)}finally{t.f()}x(Object(wn.a)(new Set(e)))}),[c]);var f=function(){u("allPosts");var n=function(){var n=Object(Y.a)(N.a.mark((function n(){var t;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(!0),n.next=3,R();case 3:t=n.sent,a(t),e(!1);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()},O=function(){u("myPosts");var t=function(){var t=Object(Y.a)(N.a.mark((function t(){var r,c,o;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(!0),r=n.id,t.next=4,X(r);case 4:c=t.sent,o=c.posts.sort((function(n,e){return n.createdAt<e.createdAt?1:-1})),a(o),e(!1);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()};return Object(F.jsxs)(kn,{children:[n&&Object(F.jsxs)(Sn,{children:["allPosts"===i&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(Cn,{$active:!0,onClick:f,children:"all posts"})," ","/",Object(F.jsx)(Cn,{onClick:O,children:"my posts"})]}),"myPosts"===i&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(Cn,{onClick:f,children:"all posts"})," ","/",Object(F.jsx)(Cn,{$active:!0,onClick:O,children:"my posts"})]})]}),d.map((function(n,e){return Object(F.jsxs)(zn,{children:[Object(F.jsx)(Fn,{children:n}),c.filter((function(e){return new Date(e.createdAt).getFullYear()===n})).map((function(n){return Object(F.jsx)(An,{post:n},n.id)}))]},e)}))]})},Nn=f.b.div(En||(En=Object(p.a)(["\n  width: 70%;\n  margin: 56px auto;\n  position: relative;\n"]))),Yn=f.b.div(_n||(_n=Object(p.a)(["\n  position: absolute;\n  right: 0;\n  top: 10px;\n  cursor: pointer;\n\n  &:hover {\n    color: #145df6;\n    font-weight: 600;\n  }\n"]))),qn=f.b.div(In||(In=Object(p.a)(["\n  font-size: 28px;\n  font-weight: bold;\n  text-align: center;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #ccc;\n  word-wrap: break-word;\n  word-break: break-all;\n"]))),Gn=f.b.div(Bn||(Bn=Object(p.a)(["\n  padding: 16px 18px 0;\n  max-width: 800px;\n  margin: 0 auto;\n"]))),Hn=f.b.div(Tn||(Tn=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 24px;\n"]))),Kn=f.b.div(Un||(Un=Object(p.a)(["\n  font-size: 16px;\n  color: #333;\n  margin-bottom: 4px;\n"]))),Qn=f.b.div(Jn||(Jn=Object(p.a)(["\n  font-size: 14px;\n  text-align: right;\n  color: gray;\n"]))),Rn=f.b.div(Mn||(Mn=Object(p.a)(["\n  margin-bottom: 28px;\n  line-height: 1.7;\n  word-wrap: break-word;\n  word-break: break-all;\n  white-space: pre-wrap;\n"])));var Vn,Wn,Xn,Zn,ne,ee,te,re=function(){var n=Object(x.h)().id,e=Object(b.useContext)(h).user,t=Object(b.useContext)(v).setIsLoading,r=Object(x.f)(),c=Object(b.useState)({}),a=Object(j.a)(c,2),o=a[0],s=a[1],i=Object(b.useState)(null),u=Object(j.a)(i,2),l=u[0],p=u[1];return Object(b.useLayoutEffect)((function(){var e=function(){var e=Object(Y.a)(N.a.mark((function e(){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(!0),e.next=3,W(n);case 3:r=e.sent,s(r),p(r.user.id),t(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t,n]),Object(F.jsxs)(Nn,{children:[e&&e.id===l&&Object(F.jsx)(Yn,{onClick:function(){nn(n).then((function(){r.goBack()}))},children:"\u522a\u9664"}),Object(F.jsx)(qn,{children:o.title}),Object(F.jsxs)(Gn,{children:[Object(F.jsxs)(Hn,{children:[Object(F.jsx)(Kn,{children:o.user&&o.user.nickname}),Object(F.jsx)(Qn,{children:new Date(o.createdAt).toLocaleDateString()})]}),Object(F.jsx)(Rn,{children:Object(F.jsx)(q.a.Markdown,{source:o.body})})]})]})},ce=Object(f.c)(Vn||(Vn=Object(p.a)(["\n  0% {\n    border-bottom: 1px solid #ccc;\n  }\n\n  50% {\n    border-bottom: 1px solid #145df6;\n    color: #145df6;\n  }\n\n  100% {\n    border-bottom: 1px solid #ccc;\n  }\n"]))),ae=f.b.form(Wn||(Wn=Object(p.a)(["\n  width: 70%;\n  margin: 56px auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n"]))),oe=f.b.button(Xn||(Xn=Object(p.a)(["\n  font-size: 28px;\n  font-weight: bold;\n  text-align: center;\n  padding-bottom: 16px;\n  width: 100%;\n  margin-bottom: 54px;\n  border-bottom: 1px solid #ccc;\n  animation: "," 2s infinite;\n  background: none;\n"])),ce),se=f.b.label(Zn||(Zn=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  & + & {\n    margin-top: 48px;\n  }\n"]))),ie=f.b.div(ne||(ne=Object(p.a)(["\n  margin-right: 24px;\n  color: #333;\n  font-weight: 600;\n"]))),be=f.b.input(ee||(ee=Object(p.a)(["\n  display: block;\n  padding: 6px 0;\n\n  &::-webkit-input-placeholder {\n    text-align: center;\n  }\n\n  &:focus {\n    border-bottom: 1px solid #ccc;\n  }\n"]))),ue=f.b.div(te||(te=Object(p.a)(["\n  color: red;\n  position: absolute;\n  top: 70px;\n"])));var le,je,pe,de=function(){var n=Object(b.useContext)(h).setUser,e=Object(b.useState)(""),t=Object(j.a)(e,2),r=t[0],c=t[1],a=Object(b.useState)(""),o=Object(j.a)(a,2),s=o[0],i=o[1],u=Object(b.useState)(),l=Object(j.a)(u,2),p=l[0],d=l[1],f=Object(x.f)(),O=function(){var e=Object(Y.a)(N.a.mark((function e(t){var c,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),d(null),e.next=4,K(r,s);case 4:if((c=e.sent).ok){e.next=8;break}return d(c.message),e.abrupt("return");case 8:return m(c.token),e.next=11,Q();case 11:if(a=e.sent){e.next=16;break}return m(null),d(a.toString()),e.abrupt("return");case 16:n(a.data),f.push("/");case 18:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){d(null)};return Object(F.jsxs)(ae,{onSubmit:O,children:[Object(F.jsx)(oe,{children:"\u767b\u5165"}),p&&Object(F.jsx)(ue,{children:p}),Object(F.jsxs)(se,{children:[Object(F.jsx)(ie,{children:"username"}),Object(F.jsx)(be,{value:r,onChange:function(n){c(n.target.value)},onFocus:v})]}),Object(F.jsxs)(se,{children:[Object(F.jsx)(ie,{children:"password"}),Object(F.jsx)(be,{type:"password",value:s,onChange:function(n){i(n.target.value)},onFocus:v})]})]})},xe=Object(f.c)(le||(le=Object(p.a)(["\n  0% {\n    border-bottom: 3px solid #ccc;\n  }\n\n  50% {\n    border-bottom: 3px solid #145df6;\n    color: #333;\n  }\n\n  100% {\n    border-bottom: 3px solid #ccc;\n  }\n"]))),fe=f.b.div(je||(je=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: white;\n  z-index: 10;\n"]))),Oe=f.b.div(pe||(pe=Object(p.a)(["\n  font-size: 48px;\n  padding: 0 24px 16px;\n  color: #ccc;\n  animation: "," 2s infinite;\n"])),xe);var he=function(){return Object(F.jsx)(fe,{children:Object(F.jsx)(Oe,{children:"Loading"})})};var ve,ge,me,we,ye,ke,Se,Ce,ze=function(){var n=Object(b.useContext)(h).setUser,e=Object(b.useState)(""),t=Object(j.a)(e,2),r=t[0],c=t[1],a=Object(b.useState)(""),o=Object(j.a)(a,2),s=o[0],i=o[1],u=Object(b.useState)(""),l=Object(j.a)(u,2),p=l[0],d=l[1],f=Object(b.useState)(),O=Object(j.a)(f,2),v=O[0],g=O[1],w=Object(x.f)(),y=function(){var e=Object(Y.a)(N.a.mark((function e(t){var c,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),g(null),e.next=4,H(r,s,p);case 4:if((c=e.sent).ok){e.next=8;break}return g(c.message),e.abrupt("return");case 8:return m(c.token),e.next=11,Q();case 11:if(a=e.sent){e.next=16;break}return m(null),g(a.toString()),e.abrupt("return");case 16:n(a.data),w.push("/");case 18:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),k=function(){g(null)};return Object(F.jsxs)(ae,{onSubmit:y,children:[Object(F.jsx)(oe,{children:"\u8a3b\u518a"}),v&&Object(F.jsx)(ue,{children:v}),Object(F.jsxs)(se,{children:[Object(F.jsx)(ie,{children:"nickname"}),Object(F.jsx)(be,{value:r,onChange:function(n){c(n.target.value)},onFocus:k})]}),Object(F.jsxs)(se,{children:[Object(F.jsx)(ie,{children:"username"}),Object(F.jsx)(be,{value:s,onChange:function(n){i(n.target.value)},onFocus:k})]}),Object(F.jsxs)(se,{children:[Object(F.jsx)(ie,{children:"password"}),Object(F.jsx)(be,{type:"password",value:p,onChange:function(n){d(n.target.value)},onFocus:k})]})]})},Fe=Object(f.c)(ve||(ve=Object(p.a)(["\n  0% {\n    border-bottom: 1px solid #ccc;\n  }\n\n  50% {\n    border-bottom: 1px solid #145df6;\n    color: #145df6;\n  }\n\n  100% {\n    border-bottom: 1px solid #ccc;\n  }\n"]))),Le=f.b.div(ge||(ge=Object(p.a)(["\n  max-width: 800px;\n  margin: 56px auto;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n"]))),Pe=f.b.label(me||(me=Object(p.a)(["\n  margin-bottom: 54px;\n  width: 100%;\n"]))),De=f.b.input(we||(we=Object(p.a)(["\n  width: 100%;\n  padding: 4px 8px;\n  text-overflow: ellipsis;\n  overflow: auto;\n\n  &:focus {\n    border-bottom: 1px solid #333;\n  }\n"]))),Ae=f.b.label(ye||(ye=Object(p.a)(["\n  display: block;\n  margin-bottom: 54px;\n"]))),Ee=(f.b.textarea(ke||(ke=Object(p.a)(["\n  width: 100%;\n  padding: 16px 8px;\n"]))),f.b.button(Se||(Se=Object(p.a)(["\n  background: none;\n  padding-bottom: 4px;\n  font-size: 18px;\n  font-weight: bold;\n  animation: "," 2s infinite;\n"])),Fe)),_e=f.b.div(Ce||(Ce=Object(p.a)(["\n  color: red;\n  text-align: center;\n  margin-top: 16px;\n"])));var Ie,Be,Te=function(){var n=Object(b.useState)(""),e=Object(j.a)(n,2),t=e[0],r=e[1],c=Object(b.useState)(""),a=Object(j.a)(c,2),o=a[0],s=a[1],i=Object(b.useState)(),u=Object(j.a)(i,2),l=u[0],p=u[1],d=Object(x.f)(),f=function(){var n=Object(Y.a)(N.a.mark((function n(e){var r;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),p(null),t&&o){n.next=4;break}return n.abrupt("return",p("\u672a\u78ba\u5be6\u586b\u5beb"));case 4:return n.next=6,Z(t,o);case 6:(r=n.sent).id&&d.push("/posts/".concat(r.id));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(F.jsxs)(Le,{children:[Object(F.jsx)(Pe,{children:Object(F.jsx)(De,{onFocus:function(){p(null)},onChange:function(n){r(n.target.value)},placeholder:"\u8f38\u5165\u6a19\u984c..."})}),Object(F.jsx)(Ae,{children:Object(F.jsx)(q.a,{value:o,height:300,textareaProps:{placeholder:"Please enter Markdown text"},onChange:s})}),Object(F.jsx)(Ee,{onClick:f,children:"\u9001\u51fa"}),l&&Object(F.jsx)(_e,{children:l})]})},Ue=f.b.div(Ie||(Ie=Object(p.a)(["\n  max-width: 600px;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n"]))),Je=f.b.div(Be||(Be=Object(p.a)(["\n  text-align: center;\n  line-height: 2;\n  font-size: 32px;\n"])));var Me,$e=function(){return Object(F.jsx)(Ue,{children:Object(F.jsxs)(Je,{children:["\u6211\u662f YO",Object(F.jsx)("br",{}),"\u9019\u662f\u4e00\u500b\u6a21\u4eff [FE302]",Object(F.jsx)("br",{}),"\u518d\u52a0\u4e0a\u81ea\u5df1\u7684\u60f3\u6cd5",Object(F.jsx)("br",{}),"\u96c6\u5408\u800c\u6210\u7684\u90e8\u843d\u683c"]})})},Ne=f.b.div(Me||(Me=Object(p.a)(["\n  padding-top: 64px;\n"])));var Ye=function(){var n=Object(b.useState)(null),e=Object(j.a)(n,2),t=e[0],r=e[1],c=Object(b.useState)(null),a=Object(j.a)(c,2),o=a[0],s=a[1],i=Object(b.useState)(!1),u=Object(j.a)(i,2),l=u[0],p=u[1];return Object(b.useEffect)((function(){if(s(!1),!w())return s(!0);Q().then((function(n){n.ok&&(r(n.data),s(!0))}))}),[]),Object(F.jsx)(h.Provider,{value:{user:t,setUser:r},children:Object(F.jsx)(v.Provider,{value:{isLoading:l,setIsLoading:p},children:Object(F.jsx)(Ne,{children:Object(F.jsxs)(d.a,{children:[Object(F.jsx)(O,{}),Object(F.jsx)(M,{isUser:o}),l&&Object(F.jsx)(he,{}),Object(F.jsxs)(x.c,{children:[Object(F.jsx)(x.a,{exact:!0,path:"/",children:Object(F.jsx)(mn,{})}),Object(F.jsx)(x.a,{path:"/posts-list",children:Object(F.jsx)($n,{})}),Object(F.jsx)(x.a,{path:"/posts/:id",children:Object(F.jsx)(re,{})}),Object(F.jsx)(x.a,{path:"/new-post",children:Object(F.jsx)(Te,{})}),Object(F.jsx)(x.a,{path:"/about",children:Object(F.jsx)($e,{})}),Object(F.jsx)(x.a,{path:"/register",children:Object(F.jsx)(ze,{})}),Object(F.jsx)(x.a,{path:"/login",children:Object(F.jsx)(de,{})})]})]})})})})};l.a.render(Object(F.jsx)(Ye,{}),document.getElementById("root"))}},[[429,1,2]]]);
//# sourceMappingURL=main.789abedc.chunk.js.map