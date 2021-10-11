(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{46:function(n,e,t){"use strict";t.r(e);var r,c,a,o,i,s,b=t(1),l=t(23),u=t.n(l),j=t(5),d=t(2),p=t(9),x=t(6),O=t(3),h=Object(O.a)(r||(r=Object(d.a)(["\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  \n  a {\n    text-decoration: none;\n    display: flex;\n  \n    &:hover {\n      text-decoration: none;\n    }\n  }\n  \n  a:hover {\n    cursor: pointer;\n  }\n\n  input {\n    outline: none;\n    border: none;\n  }\n  \n  button {\n    border: none;\n    cursor: pointer;\n  }\n  button:hover, button:focus {\n    outline: none;\n  }\n"]))),f=Object(b.createContext)(null),g=Object(b.createContext)(null),v="token",m=function(n){localStorage.setItem(v,n)},w=function(){return localStorage.getItem(v)};var y=O.b.div(c||(c=Object(d.a)(["\n  height: 64px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 0 32px;\n  background: white;\n"]))),k=Object(O.b)(p.b)(a||(a=Object(d.a)(["\n  font-size: 32px;\n  font-weight: bold;\n  color: black;\n\n  &:hover {\n    color: #145df6;\n  }\n"]))),S=O.b.div(o||(o=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  height: 64px;\n"]))),z=Object(O.b)(p.c)(i||(i=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100px;\n  color: black;\n\n  &:before {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    width: 0;\n    height: 2px;\n    background: #145df6;\n    transition: width 0.5s;\n  }\n\n  &:hover:before {\n    width: 100px;\n  }\n"]))),C=O.b.div(s||(s=Object(d.a)(["\n  display: flex;\n  align-items: center;\n\n  "," {\n    margin-left: 64px;\n  }\n"])),S),F=t(0),L={"font-weight":"600","border-bottom":"2px solid rgba(0, 0, 0, 0.5)"};var D,_,A,I,E,U,J,P,T,B,N=function(n){var e=n.isUser,t=Object(b.useContext)(f),r=t.user,c=t.setUser;return Object(F.jsx)(y,{children:e&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(C,{children:[Object(F.jsx)(k,{to:"/",children:"Blog"}),Object(F.jsxs)(S,{children:[Object(F.jsx)(z,{to:"/posts-list",activeStyle:L,children:"\u6587\u7ae0\u5217\u8868"}),Object(F.jsx)(z,{to:"/about",activeStyle:L,children:"\u95dc\u65bc\u6211"}),r&&Object(F.jsx)(z,{to:"/new-post",activeStyle:L,children:"\u767c\u5e03\u6587\u7ae0"})]})]}),Object(F.jsxs)(S,{children:[!r&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(z,{to:"/register",activeStyle:L,children:"\u8a3b\u518a"}),Object(F.jsx)(z,{to:"/login",activeStyle:L,children:"\u767b\u5165"})]}),r&&Object(F.jsx)(z,{to:"/",onClick:function(){m(""),c(null)},children:"\u767b\u51fa"})]})]})})},Y=t(4),M=t.n(Y),q=t(7),G="https://student-json-api.lidemy.me",H=function(){var n=Object(q.a)(M.a.mark((function n(){var e,t;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(G,"/posts?_sort=createdAt&_order=desc"));case 3:return e=n.sent,n.next=6,e.json();case 6:return t=n.sent,n.abrupt("return",t);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),K=function(){var n=Object(q.a)(M.a.mark((function n(e){var t,r,c;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(G,"/posts?&_page=").concat(e,"&_limit=").concat(5,"&_expand=user&_sort=createdAt&_order=desc"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.next=9,t.headers.get("x-total-count");case 9:return c=n.sent,n.abrupt("return",{data:r,total:c});case 13:n.prev=13,n.t0=n.catch(0),console.log(n.t0.message);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(e){return n.apply(this,arguments)}}(),Q=function(){var n=Object(q.a)(M.a.mark((function n(e){var t,r;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(G,"/posts/").concat(e,"?_expand=user"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),R=function(){var n=Object(q.a)(M.a.mark((function n(e,t,r){var c,a;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(G,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:e,username:t,password:r})});case 3:return c=n.sent,a=c.json(),n.abrupt("return",a);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t,r){return n.apply(this,arguments)}}(),V=function(){var n=Object(q.a)(M.a.mark((function n(e,t){var r,c;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(G,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:e,password:t})});case 3:return r=n.sent,c=r.json(),n.abrupt("return",c);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}(),W=function(){var n=Object(q.a)(M.a.mark((function n(){var e,t,r;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=w(),n.prev=1,n.next=4,fetch("".concat(G,"/me"),{headers:{authorization:"Bearer ".concat(e)}});case 4:return t=n.sent,r=t.json(),n.abrupt("return",r);case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(){return n.apply(this,arguments)}}(),X=function(){var n=Object(q.a)(M.a.mark((function n(e,t){var r,c,a;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=w(),n.prev=1,n.next=4,fetch("".concat(G,"/posts"),{method:"POST",headers:{authorization:"Bearer ".concat(r),"content-type":"application/json"},body:JSON.stringify({title:e,body:t})});case 4:return c=n.sent,a=c.json(),n.abrupt("return",a);case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e,t){return n.apply(this,arguments)}}(),Z=O.b.div(D||(D=Object(d.a)(["\n  padding: 16px;\n  max-width: 800px;\n  margin: 40px auto;\n"]))),$=Object(O.b)(p.b)(_||(_=Object(d.a)(["\n  border: 1px solid #ccc;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n  color: #333;\n\n  & + & {\n    margin-top: 24px;\n  }\n\n  &:hover {\n    color: blue;\n  }\n"]))),nn=O.b.div(A||(A=Object(d.a)(["\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),en=O.b.div(I||(I=Object(d.a)(["\n  font-size: 18px;\n  line-height: 1.5;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n  color: #333;\n\n  word-wrap: break-word;\n  word-break: break-all;\n  white-space: pre-wrap;\n"]))),tn=O.b.div(E||(E=Object(d.a)(["\n  font-size: 14px;\n  margin-bottom: 4px;\n  color: rgba(0, 0, 0, 0.5);\n"]))),rn=O.b.div(U||(U=Object(d.a)(["\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 14px;\n  margin-bottom: 16px;\n"]))),cn=O.b.div(J||(J=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n  margin: 28px 0 8px;\n"]))),an=O.b.div(P||(P=Object(d.a)(["\n  cursor: pointer;\n  font-weight: bold;\n\n  &:hover {\n    color: #145df6;\n  }\n"]))),on=O.b.div(T||(T=Object(d.a)(["\n  margin: 0 16px;\n"]))),sn=O.b.div(B||(B=Object(d.a)(["\n  text-align: center;\n"])));function bn(n){var e=n.post;return Object(F.jsxs)($,{to:"/posts/".concat(e.id),children:[Object(F.jsx)(nn,{children:e.title}),Object(F.jsx)(tn,{children:e.user&&e.user.nickname}),Object(F.jsx)(rn,{children:new Date(e.createdAt).toLocaleDateString()}),Object(F.jsx)(en,{children:e.body})]})}var ln,un,jn,dn,pn,xn,On=function(){var n=Object(b.useContext)(g).setIsLoading,e=Object(b.useState)([]),t=Object(j.a)(e,2),r=t[0],c=t[1],a=Object(b.useState)(1),o=Object(j.a)(a,2),i=o[0],s=o[1],l=Object(b.useState)(0),u=Object(j.a)(l,2),d=u[0],p=u[1],x=Object(b.useState)(null),O=Object(j.a)(x,2),h=O[0],f=O[1];return Object(b.useLayoutEffect)((function(){var e=function(){var e=Object(q.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),f(!1),e.next=4,K(i);case 4:t=e.sent,c(t.data),p(Math.ceil((t.total-1)/5)),n(!1),f(!0);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n,i,d]),Object(F.jsxs)(Z,{children:[r.map((function(n){return Object(F.jsx)(bn,{post:n},n.id)})),h&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(cn,{children:[Object(F.jsx)(an,{onClick:function(){i>1&&s(i-1),window.scrollTo(0,0)},children:"\uff1c"}),Object(F.jsx)(on,{children:i}),Object(F.jsx)(an,{onClick:function(){i<d&&s(i+1),window.scrollTo(0,0)},children:"\uff1e"})]}),Object(F.jsxs)(sn,{children:[i," / ",d]})]})]})},hn=t(29),fn=t(28),gn=O.b.div(ln||(ln=Object(d.a)(["\n  padding: 16px;\n  max-width: 800px;\n  margin: 40px auto;\n"]))),vn=O.b.div(un||(un=Object(d.a)(["\n  padding-top: 32px;\n\n  & + & {\n    margin-top: 32px;\n  }\n"]))),mn=O.b.span(jn||(jn=Object(d.a)(["\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 600;\n  margin-bottom: 24px;\n  border-bottom: 3px solid #145df6;\n"]))),wn=Object(O.b)(p.b)(dn||(dn=Object(d.a)(["\n  padding: 8px 24px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  background: white;\n\n  &:hover {\n    transform: scale(1.1);\n    border: 1px solid #ccc;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n  }\n"]))),yn=O.b.div(pn||(pn=Object(d.a)(["\n  font-size: 24px;\n  color: #333;\n  max-width: 600px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),kn=O.b.div(xn||(xn=Object(d.a)(["\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 14px;\n"])));function Sn(n){var e=n.post;return Object(F.jsxs)(wn,{to:"/posts/".concat(e.id),children:[Object(F.jsx)(yn,{children:e.title}),Object(F.jsx)(kn,{children:new Date(e.createdAt).toLocaleDateString().substring(5,10)})]})}var zn,Cn,Fn,Ln,Dn,_n,An,In=function(){var n=Object(b.useContext)(g).setIsLoading,e=Object(b.useState)([]),t=Object(j.a)(e,2),r=t[0],c=t[1],a=Object(b.useState)([]),o=Object(j.a)(a,2),i=o[0],s=o[1];return Object(b.useLayoutEffect)((function(){var e=function(){var e=Object(q.a)(M.a.mark((function e(){var t,a,o,i,b;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.next=3,H();case 3:t=e.sent,c(t),a=[],o=Object(fn.a)(r);try{for(o.s();!(i=o.n()).done;)b=i.value,a.push(new Date(b.createdAt).getFullYear())}catch(l){o.e(l)}finally{o.f()}s(Object(hn.a)(new Set(a))),n(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n,r]),Object(F.jsx)(gn,{children:i.map((function(n){return Object(F.jsxs)(vn,{children:[Object(F.jsx)(mn,{children:n}),r.filter((function(e){return new Date(e.createdAt).getFullYear()===n})).map((function(n){return Object(F.jsx)(Sn,{post:n},n.id)}))]})}))})},En=O.b.div(zn||(zn=Object(d.a)(["\n  width: 70%;\n  margin: 56px auto;\n"]))),Un=O.b.div(Cn||(Cn=Object(d.a)(["\n  font-size: 28px;\n  font-weight: bold;\n  text-align: center;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #ccc;\n  word-wrap: break-word;\n  word-break: break-all;\n"]))),Jn=O.b.div(Fn||(Fn=Object(d.a)(["\n  padding: 16px 18px 0;\n  max-width: 800px;\n  margin: 0 auto;\n"]))),Pn=O.b.div(Ln||(Ln=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 24px;\n"]))),Tn=O.b.div(Dn||(Dn=Object(d.a)(["\n  font-size: 16px;\n  color: #333;\n  margin-bottom: 4px;\n"]))),Bn=O.b.div(_n||(_n=Object(d.a)(["\n  font-size: 14px;\n  text-align: right;\n  color: gray;\n"]))),Nn=O.b.div(An||(An=Object(d.a)(["\n  margin-bottom: 28px;\n  line-height: 1.7;\n  word-wrap: break-word;\n  word-break: break-all;\n  white-space: pre-wrap;\n"])));var Yn,Mn,qn,Gn,Hn,Kn,Qn,Rn=function(){var n=Object(x.h)().id,e=Object(b.useContext)(g).setIsLoading,t=Object(b.useState)({}),r=Object(j.a)(t,2),c=r[0],a=r[1];return Object(b.useLayoutEffect)((function(){var t=function(){var t=Object(q.a)(M.a.mark((function t(){var r;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(!0),t.next=3,Q(n);case 3:r=t.sent,a(r),e(!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e,n]),Object(F.jsxs)(En,{children:[Object(F.jsx)(Un,{children:c.title}),Object(F.jsxs)(Jn,{children:[Object(F.jsxs)(Pn,{children:[Object(F.jsx)(Tn,{children:c.user&&c.user.nickname}),Object(F.jsx)(Bn,{children:new Date(c.createdAt).toLocaleDateString()})]}),Object(F.jsx)(Nn,{children:c.body})]})]})},Vn=Object(O.c)(Yn||(Yn=Object(d.a)(["\n  0% {\n    border-bottom: 1px solid #ccc;\n  }\n\n  50% {\n    border-bottom: 1px solid #145df6;\n    color: #145df6;\n  }\n\n  100% {\n    border-bottom: 1px solid #ccc;\n  }\n"]))),Wn=O.b.form(Mn||(Mn=Object(d.a)(["\n  width: 70%;\n  margin: 56px auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n"]))),Xn=O.b.button(qn||(qn=Object(d.a)(["\n  font-size: 28px;\n  font-weight: bold;\n  text-align: center;\n  padding-bottom: 16px;\n  width: 100%;\n  margin-bottom: 54px;\n  border-bottom: 1px solid #ccc;\n  animation: "," 2s infinite;\n  background: none;\n"])),Vn),Zn=O.b.label(Gn||(Gn=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  & + & {\n    margin-top: 48px;\n  }\n"]))),$n=O.b.div(Hn||(Hn=Object(d.a)(["\n  margin-right: 24px;\n  color: #333;\n  font-weight: 600;\n"]))),ne=O.b.input(Kn||(Kn=Object(d.a)(["\n  display: block;\n  padding: 6px 0;\n\n  &::-webkit-input-placeholder {\n    text-align: center;\n  }\n\n  &:focus {\n    border-bottom: 1px solid #ccc;\n  }\n"]))),ee=O.b.div(Qn||(Qn=Object(d.a)(["\n  color: red;\n  position: absolute;\n  top: 70px;\n"])));var te,re,ce,ae=function(){var n=Object(b.useContext)(f).setUser,e=Object(b.useState)(""),t=Object(j.a)(e,2),r=t[0],c=t[1],a=Object(b.useState)(""),o=Object(j.a)(a,2),i=o[0],s=o[1],l=Object(b.useState)(),u=Object(j.a)(l,2),d=u[0],p=u[1],O=Object(x.f)(),h=function(){var e=Object(q.a)(M.a.mark((function e(t){var c,a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),p(null),e.next=4,V(r,i);case 4:if((c=e.sent).ok){e.next=8;break}return p(c.message),e.abrupt("return");case 8:return m(c.token),e.next=11,W();case 11:(a=e.sent)||(m(null),p(a.toString())),n(a.data),O.push("/");case 15:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),g=function(){p(null)};return Object(F.jsxs)(Wn,{onSubmit:h,children:[Object(F.jsx)(Xn,{children:"\u767b\u5165"}),d&&Object(F.jsx)(ee,{children:d}),Object(F.jsxs)(Zn,{children:[Object(F.jsx)($n,{children:"username"}),Object(F.jsx)(ne,{value:r,onChange:function(n){c(n.target.value)},onFocus:g})]}),Object(F.jsxs)(Zn,{children:[Object(F.jsx)($n,{children:"password"}),Object(F.jsx)(ne,{type:"password",value:i,onChange:function(n){s(n.target.value)},onFocus:g})]})]})},oe=Object(O.c)(te||(te=Object(d.a)(["\n  0% {\n    border-bottom: 3px solid #ccc;\n  }\n\n  50% {\n    border-bottom: 3px solid #145df6;\n    color: #333;\n  }\n\n  100% {\n    border-bottom: 3px solid #ccc;\n  }\n"]))),ie=O.b.div(re||(re=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: white;\n  z-index: 10;\n"]))),se=O.b.div(ce||(ce=Object(d.a)(["\n  font-size: 48px;\n  padding: 0 24px 16px;\n  color: #ccc;\n  animation: "," 2s infinite;\n"])),oe);var be=function(){return Object(F.jsx)(ie,{children:Object(F.jsx)(se,{children:"Loading"})})};var le,ue,je,de,pe,xe,Oe,he,fe=function(){var n=Object(b.useContext)(f).setUser,e=Object(b.useState)(""),t=Object(j.a)(e,2),r=t[0],c=t[1],a=Object(b.useState)(""),o=Object(j.a)(a,2),i=o[0],s=o[1],l=Object(b.useState)(""),u=Object(j.a)(l,2),d=u[0],p=u[1],O=Object(b.useState)(),h=Object(j.a)(O,2),g=h[0],v=h[1],w=Object(x.f)(),y=function(){var e=Object(q.a)(M.a.mark((function e(t){var c,a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),v(null),e.next=4,R(r,i,d);case 4:if((c=e.sent).ok){e.next=8;break}return v(c.message),e.abrupt("return");case 8:return m(c.token),e.next=11,W();case 11:(a=e.sent)||(m(null),v(a.toString())),n(a.data),w.push("/");case 15:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),k=function(){v(null)};return Object(F.jsxs)(Wn,{onSubmit:y,children:[Object(F.jsx)(Xn,{children:"\u8a3b\u518a"}),g&&Object(F.jsx)(ee,{children:g}),Object(F.jsxs)(Zn,{children:[Object(F.jsx)($n,{children:"nickname"}),Object(F.jsx)(ne,{value:r,onChange:function(n){c(n.target.value)},onFocus:k})]}),Object(F.jsxs)(Zn,{children:[Object(F.jsx)($n,{children:"username"}),Object(F.jsx)(ne,{value:i,onChange:function(n){s(n.target.value)},onFocus:k})]}),Object(F.jsxs)(Zn,{children:[Object(F.jsx)($n,{children:"password"}),Object(F.jsx)(ne,{type:"password",value:d,onChange:function(n){p(n.target.value)},onFocus:k})]})]})},ge=Object(O.c)(le||(le=Object(d.a)(["\n  0% {\n    border-bottom: 1px solid #ccc;\n  }\n\n  50% {\n    border-bottom: 1px solid #145df6;\n    color: #145df6;\n  }\n\n  100% {\n    border-bottom: 1px solid #ccc;\n  }\n"]))),ve=O.b.div(ue||(ue=Object(d.a)(["\n  max-width: 800px;\n  margin: 56px auto;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n"]))),me=O.b.label(je||(je=Object(d.a)(["\n  margin-bottom: 54px;\n  width: 100%;\n"]))),we=O.b.input(de||(de=Object(d.a)(["\n  width: 100%;\n  padding: 4px 8px;\n  text-overflow: ellipsis;\n  overflow: auto;\n\n  &:focus {\n    border-bottom: 1px solid #333;\n  }\n"]))),ye=O.b.label(pe||(pe=Object(d.a)(["\n  display: block;\n  margin-bottom: 54px;\n"]))),ke=O.b.textarea(xe||(xe=Object(d.a)(["\n  width: 100%;\n  padding: 16px 8px;\n"]))),Se=O.b.button(Oe||(Oe=Object(d.a)(["\n  background: none;\n  padding-bottom: 4px;\n  font-size: 18px;\n  font-weight: bold;\n  animation: "," 2s infinite;\n"])),ge),ze=O.b.div(he||(he=Object(d.a)(["\n  color: red;\n  text-align: center;\n  margin-top: 16px;\n"])));var Ce,Fe,Le=function(){var n=Object(b.useState)(""),e=Object(j.a)(n,2),t=e[0],r=e[1],c=Object(b.useState)(""),a=Object(j.a)(c,2),o=a[0],i=a[1],s=Object(b.useState)(),l=Object(j.a)(s,2),u=l[0],d=l[1],p=Object(x.f)(),O=function(){d(null)},h=function(){var n=Object(q.a)(M.a.mark((function n(e){var r;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),d(null),t&&o){n.next=4;break}return n.abrupt("return",d("\u672a\u78ba\u5be6\u586b\u5beb"));case 4:return n.next=6,X(t,o);case 6:(r=n.sent).id&&p.push("/posts/".concat(r.id));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(F.jsxs)(ve,{children:[Object(F.jsx)(me,{children:Object(F.jsx)(we,{onFocus:O,onChange:function(n){r(n.target.value)},placeholder:"\u8f38\u5165\u6a19\u984c..."})}),Object(F.jsx)(ye,{children:Object(F.jsx)(ke,{onFocus:O,onChange:function(n){i(n.target.value)},rows:"20",placeholder:"\u5beb\u9ede\u5167\u5bb9...",children:o})}),Object(F.jsx)(Se,{onClick:h,children:"\u9001\u51fa"}),u&&Object(F.jsx)(ze,{children:u})]})},De=O.b.div(Ce||(Ce=Object(d.a)(["\n  max-width: 600px;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n"]))),_e=O.b.div(Fe||(Fe=Object(d.a)(["\n  text-align: center;\n  line-height: 2;\n  font-size: 32px;\n"])));var Ae,Ie=function(){return Object(F.jsx)(De,{children:Object(F.jsxs)(_e,{children:["\u6211\u662f YO",Object(F.jsx)("br",{}),"\u9019\u662f\u4e00\u500b\u6a21\u4eff [FE302]",Object(F.jsx)("br",{}),"\u518d\u52a0\u4e0a\u81ea\u5df1\u7684\u60f3\u6cd5",Object(F.jsx)("br",{}),"\u96c6\u5408\u800c\u6210\u7684\u90e8\u843d\u683c"]})})},Ee=O.b.div(Ae||(Ae=Object(d.a)(["\n  padding-top: 64px;\n"])));var Ue=function(){var n=Object(b.useState)(null),e=Object(j.a)(n,2),t=e[0],r=e[1],c=Object(b.useState)(null),a=Object(j.a)(c,2),o=a[0],i=a[1],s=Object(b.useState)(!1),l=Object(j.a)(s,2),u=l[0],d=l[1];return Object(b.useEffect)((function(){if(i(!1),!w())return i(!0);W().then((function(n){n.ok&&r(n.data),i(!0)}))}),[]),Object(F.jsx)(f.Provider,{value:{user:t,setUser:r},children:Object(F.jsx)(g.Provider,{value:{isLoading:u,setIsLoading:d},children:Object(F.jsx)(Ee,{children:Object(F.jsxs)(p.a,{children:[Object(F.jsx)(h,{}),Object(F.jsx)(N,{isUser:o}),u&&Object(F.jsx)(be,{}),Object(F.jsxs)(x.c,{children:[Object(F.jsx)(x.a,{exact:!0,path:"/",children:Object(F.jsx)(On,{})}),Object(F.jsx)(x.a,{path:"/posts-list",children:Object(F.jsx)(In,{})}),Object(F.jsx)(x.a,{path:"/posts/:id",children:Object(F.jsx)(Rn,{})}),Object(F.jsx)(x.a,{path:"/new-post",children:Object(F.jsx)(Le,{})}),Object(F.jsx)(x.a,{path:"/about",children:Object(F.jsx)(Ie,{})}),Object(F.jsx)(x.a,{path:"/register",children:Object(F.jsx)(fe,{})}),Object(F.jsx)(x.a,{path:"/login",children:Object(F.jsx)(ae,{})})]})]})})})})};u.a.render(Object(F.jsx)(Ue,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.aeda6ef2.chunk.js.map