(this["webpackJsonprj8-imoveis"]=this["webpackJsonprj8-imoveis"]||[]).push([[1],{24:function(e,t,c){},33:function(e,t,c){},42:function(e,t,c){},53:function(e,t,c){},83:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},93:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(23),r=c.n(s),i=c(3),o=c(29),l=c(43),u={data:!1};var j=c(9),d=!1;var b=c(52);var O={menuIcon:!1,menuAside:"hidden-aside"};var A={contador:[],listaNotificacoes:!1};var f=Object(o.createStore)(Object(o.combineReducers)({controleLoginCad:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ABRIR_FORM":return{data:t.payload};case"FECHAR_FORM":return{data:!1};default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"VALIDAR":return t.payload;case"CARREGAR_USUARIO":return Object(j.a)({},e);case"LOGOUT":return d;default:return e}},friendlist:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CARREGAR_AMIGOS":return t.payload;default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CARREGAR_POSTS":return t.payload;case"NOVA_PUBLICACAO":return[].concat(Object(b.a)(e),[t.payload]);default:return e}},controllerMenu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN-ASIDE":return{menuAside:"show-aside"};case"CLOSE-ASIDE":return{menuAside:!1};default:return e}},friend:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AMIGO_SELECIONADO":return t.payload;default:return e}},notifications:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CARREGAR_NOTIFICACOES":return t.payload;default:return e}}}),Object(l.composeWithDevTools)()),p=c(13),m=c(5),h=c(45),x=c.n(h),g=c(46),v=c.n(g),C=c(4),N=c.n(C),E=c(44),R=c.n(E),B=(c(42),"https://fakebooklucas.herokuapp.com"),w=c(1);function S(){Object(i.c)((function(e){return e.user})),Object(i.c)((function(e){return e.notifications})),Object(i.b)();return Object(w.jsxs)("span",{className:"container-notification",children:[Object(w.jsx)(R.a,{})," ",Object(w.jsx)("p",{children:"0"})]})}function y(){var e=Object(i.c)((function(e){return e.user})),t=Object(i.b)();return Object(w.jsxs)("header",{className:"container-fluid header-container",children:[Object(w.jsx)("span",{children:Object(w.jsx)(x.a,{})}),Object(w.jsxs)("div",{children:[Object(w.jsx)(S,{}),Object(w.jsx)("span",{onClick:function(){return e?t({type:"OPEN-ASIDE"}):alert("Efetue o login para usar esse recurso")},children:Object(w.jsx)(v.a,{})})]})]})}c(83);function D(e){var t=Object(i.c)((function(e){return e.user})),c=Object(m.f)();return!1===t&&c.push("/"),Object(w.jsx)("main",{className:"container-sm main-container",children:e.children})}c(86);function I(){return Object(w.jsxs)("footer",{className:"container-fluid footer-container",children:["Este \xe9 um projeto de estudos para portf\xf3lio, por favor n\xe3o coloque e-mail e senhas verdadeiras por mais que as senhas estejam criptografadas. Desenvolvido por ",Object(w.jsx)("span",{className:"badge bg-secondary",children:" \xa9 Lucas Romero "})]})}var L=c(16),M=c(8),H="data:image/png;base64,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",P=(c(33),Object(n.lazy)((function(){return c.e(0).then(c.bind(null,105))})));function T(e){var t=Object(n.useState)(!1),c=Object(M.a)(t,2),a=c[0],s=c[1],r=Object(i.b)();Object(n.useEffect)((function(){N.a.get("".concat(B,"/busca/").concat(e.busca)).then((function(e){return s(e.data)}))}),[]);var o=Object(m.f)(),l=!1;return l=a.length>0&&a.map((function(e){return Object(w.jsx)(n.Suspense,{fallback:Object(w.jsx)("img",{src:H,alt:"Carregando"}),children:Object(w.jsx)("span",{onClick:function(){return r({type:"AMIGO_SELECIONADO",payload:e}),r({type:"CLOSE-ASIDE"}),void o.push("/friend")},children:Object(w.jsx)(P,{dataAmigos:e,estilo:"friendicon-container-busca"},e.username)})})})),Object(w.jsx)("div",{className:"container-fluid friendlist-container-busca",children:l})}var U=c(47),k=c.n(U);c(24);function V(){var e=Object(n.useState)({}),t=Object(M.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(M.a)(s,2),i=r[0],o=r[1];return Object(w.jsxs)("div",{className:"container-busca",children:[Object(w.jsxs)("div",{className:"input-group mb-3",children:[Object(w.jsx)("input",{onChange:function(e){var t=e.target,n=t.id,s=t.value;a(Object(j.a)(Object(j.a)({},c),{},Object(L.a)({},n,s)))},className:"form-control",type:"text",placeholder:"Procure usuarios aqui",id:"perfilBuscado"}),Object(w.jsx)("button",{onClick:function(){return e=c.perfilBuscado,void o(Object(w.jsx)(T,{busca:e}));var e},className:"btn btn-outline-secondary",children:Object(w.jsx)(k.a,{})})]}),i]})}var z=c(49),Q=c.n(z),G=c(50),F=c.n(G),Z=c(48),J=c.n(Z);c(87);function q(){var e=Object(i.b)(),t=Object(m.f)(),c=Object(i.c)((function(e){return e.controllerMenu.menuAside})),n=function(c){e({type:c}),"LOGOUT"===c&&(e({type:"CLOSE-ASIDE"}),t.push("/"))};return Object(w.jsxs)("div",{className:"menu-big-container ".concat(c),children:[Object(w.jsx)("aside",{onClick:function(){return n("CLOSE-ASIDE")}}),Object(w.jsxs)("aside",{className:"aside-menu",children:[Object(w.jsx)(V,{}),Object(w.jsx)(p.b,{to:"/feed",children:Object(w.jsxs)("p",{onClick:function(){return e({type:"CLOSE-ASIDE"})},children:[Object(w.jsx)(J.a,{})," P\xc1GINA INICIAL"]})}),Object(w.jsx)(p.b,{to:"/perfil",children:Object(w.jsxs)("p",{onClick:function(){return e({type:"CLOSE-ASIDE"})},children:[Object(w.jsx)(Q.a,{})," MEU PERFIL"]})}),Object(w.jsxs)("p",{onClick:function(){return n("LOGOUT")},children:[Object(w.jsx)(F.a,{})," SAIR"]})]})]})}var K=c(28),Y=c.n(K);function X(){Object(i.c)((function(e){return e.user}));var e=Object(i.b)(),t=Object(m.f)(),c=Object(n.useState)({}),a=Object(M.a)(c,2),s=a[0],r=a[1],o=function(e){var t=e.target,c=t.name,n=t.value;r(Object(j.a)(Object(j.a)({},s),{},Object(L.a)({},c,n)))};return Object(w.jsxs)("form",{className:"container-form-homepage",children:[Object(w.jsxs)("span",{onClick:function(){e({type:"FECHAR_FORM"})},children:["VOLTAR ",Object(w.jsx)(Y.a,{})]}),Object(w.jsxs)("div",{className:"mb-3",children:[Object(w.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email"}),Object(w.jsx)("input",{onChange:o,type:"email",className:"form-control",name:"email",required:!0}),Object(w.jsx)("div",{id:"emailHelp",className:"form-text",children:"Cadastre um e-mail ficticio para usar!"})]}),Object(w.jsxs)("div",{className:"mb-3",children:[Object(w.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Senha"}),Object(w.jsx)("input",{onChange:o,type:"password",className:"form-control",name:"senha",required:!0}),Object(w.jsx)("div",{id:"emailHelp",className:"form-text",children:"Ao cadastrar n\xe3o coloque sua senha verdadeira!"})]}),Object(w.jsx)("div",{className:"mb-3",children:Object(w.jsx)("button",{onClick:function(c){c.preventDefault(),N.a.get("".concat(B,"/login/email=").concat(s.email,"/senha=").concat(s.senha)).then((function(t){return e({type:"VALIDAR",payload:t.data[0]})}),e({type:"FECHAR_FORM"})).then(t.push("/feed"))},className:"btn btn-success",children:"Entrar"})})]})}function W(){var e=Object(i.b)(),t=Object(n.useState)(!1),c=Object(M.a)(t,2),a=c[0],s=c[1],r=function(e){var t=e.target,c=t.id,n=t.value;s(Object(j.a)(Object(j.a)({},a),{},Object(L.a)({},c,n))),console.log(a)};Object(n.useEffect)((function(){console.log(a)}),[a]);var o={"Content-Type":"application/json",Authorization:"JWT fefege..."};Object(m.f)();return Object(w.jsxs)("form",{className:"container-form-homepage",children:[Object(w.jsxs)("span",{onClick:function(){e({type:"FECHAR_FORM"})},children:["VOLTAR ",Object(w.jsx)(Y.a,{})]}),Object(w.jsxs)("div",{className:"mb-3",children:[Object(w.jsx)("label",{htmlFor:"username-c",className:"form-label",children:"Usuario"}),Object(w.jsx)("input",{onChange:r,type:"text",className:"form-control",id:"username",required:!0}),Object(w.jsx)("div",{id:"emailHelp",className:"form-text",children:"Nome de usu\xe1rio que ser\xe1 exibido na plataforma"})]}),Object(w.jsxs)("div",{className:"mb-3",children:[Object(w.jsx)("label",{htmlFor:"email-c",className:"form-label",children:"Email"}),Object(w.jsx)("input",{onChange:r,type:"email",className:"form-control",id:"email",required:!0}),Object(w.jsx)("div",{id:"emailHelp",className:"form-text",children:"Cadastre um e-mail ficticio para usar!"})]}),Object(w.jsxs)("div",{className:"mb-3",children:[Object(w.jsx)("label",{htmlFor:"senha-c",className:"form-label",children:"Senha"}),Object(w.jsx)("input",{onChange:r,type:"password",className:"form-control",id:"senha",required:!0}),Object(w.jsx)("div",{id:"emailHelp",className:"form-text",children:"Ao cadastrar n\xe3o coloque sua senha verdadeira!"})]}),Object(w.jsx)("div",{className:"mb-3",children:Object(w.jsx)("button",{onClick:function(t){t.preventDefault(),N.a.post("".concat(B,"/cadastro/usuario"),a,{headers:o}).then((function(){alert("Usuario cadastrado com sucesso!"),e({type:"FECHAR_FORM"})}))},className:"btn btn-success",children:"Cadastrar-se"})})]})}c(88);function _(e){var t=Object(i.b)(),c=Object(i.c)((function(e){return e.controleLoginCad.data})),a=Object(n.useState)(!1),s=Object(M.a)(a,2),r=s[0],o=s[1];Object(n.useEffect)((function(){o(c)}),[c]);var l=function(e){var c=e.target.textContent;t("LOGIN"===c?{type:"ABRIR_FORM",payload:Object(w.jsx)(X,{})}:{type:"ABRIR_FORM",payload:Object(w.jsx)(W,{})})};return Object(w.jsxs)("div",{className:"homepage-container",children:[Object(w.jsxs)("p",{children:["Seja bem vindo ao ",Object(w.jsx)("span",{className:"badge bg-primary",children:"FakeBook"})," "]}),Object(w.jsx)("p",{children:"Entre j\xe1 ou fa\xe7a seu cadastro"}),Object(w.jsxs)("section",{children:[Object(w.jsx)("button",{onClick:l,className:"btn btn-primary",children:"LOGIN"}),Object(w.jsx)("button",{onClick:l,className:"btn btn-secondary",children:"Cadastro"}),r]})]})}var $=Object(n.lazy)((function(){return c.e(0).then(c.bind(null,105))}));function ee(e){Object(i.c)((function(e){return e.user}));var t=Object(i.c)((function(e){return e.friendlist})),c=Object(i.b)();Object(n.useEffect)((function(){N.a.get("".concat(B,"/amigos")).then((function(e){return c({type:"CARREGAR_AMIGOS",payload:e.data})}))}),[]);var a=Object(m.f)(),s=!1;return s=t.length>0?t.map((function(e){return Object(w.jsx)(n.Suspense,{fallback:Object(w.jsx)("img",{src:H,alt:"Carregando"}),children:Object(w.jsx)("span",{onClick:function(){return c({type:"AMIGO_SELECIONADO",payload:e}),void a.push("/friend")},children:Object(w.jsx)($,{dataAmigos:e,estilo:"friendicon-container"},e.username)})})})):Object(w.jsx)("p",{children:"Voc\xea ainda n\xe3o possui amigos"}),Object(w.jsx)("div",{className:"container-fluid friendlist-container",children:s})}function te(){var e=Object(i.c)((function(e){return e.user})),t=Object(n.useState)(!1),c=Object(M.a)(t,2),a=c[0],s=c[1],r={"Content-Type":"application/json",Authorization:"JWT fefege..."},o=Object(i.b)();return Object(w.jsx)("div",{className:"container-sm formpost-container",children:Object(w.jsxs)("div",{className:"mb-3",children:[Object(w.jsx)("textarea",{onChange:function(e){var t=e.target,c=t.name,n=t.value;s(Object(j.a)(Object(j.a)({},a),{},Object(L.a)({},c,n)))},name:"content",id:"userpub",className:"form-control",rows:"3",placeholder:"Diga o que est\xe1 pensando ".concat(e.username)}),Object(w.jsx)("button",{onClick:function(t){t.preventDefault(),N.a.post("".concat(B,"/publicar/id_user=").concat(e.id_user),a,{headers:r}).then((function(){s(!1),N.a.get("".concat(B,"/publicacoes")).then((function(e){return o({type:"CARREGAR_POSTS",payload:e.data})}))}))},className:"btn btn-primary form-control",id:"btn-postar",children:"POSTAR"})]})})}c(53);var ce=Object(n.lazy)((function(){return c.e(4).then(c.bind(null,106))}));function ne(){var e=Object(i.c)((function(e){return e.posts})),t=Object(i.b)();Object(n.useEffect)((function(){N.a.get("".concat(B,"/publicacoes")).then((function(e){return t({type:"CARREGAR_POSTS",payload:e.data})}))}),[]);var c=!1;return c=e.length>0?e.slice().reverse().map((function(e){return Object(w.jsx)(n.Suspense,{fallback:Object(w.jsx)("img",{src:H,alt:"Carregando"}),children:Object(w.jsx)(ce,{dados:e},e.username)})})):Object(w.jsx)("p",{children:"Nada a exibir"}),Object(w.jsx)("div",{className:".container-sm publist-container",children:c})}c(89);function ae(){var e=Object(i.c)((function(e){return e.user})),t=Object(i.b)();return Object(n.useEffect)((function(){N.a.get("".concat(B,"/login/email=").concat(e.email,"/senha=").concat(e.senha)).then((function(e){return t({type:"CARREGAR_USUARIO",payload:e.data[0]})}))}),[]),Object(n.useEffect)((function(){N.a.get("".concat(B,"/publicacoes")).then((function(e){return t({type:"CARREGAR_POSTS",payload:e.data})}))}),[]),Object(w.jsxs)("div",{className:"container feed-container",children:[Object(w.jsx)(ee,{estilo:"friendlist-container"}),Object(w.jsxs)("div",{className:"desk-view-pubs",children:[Object(w.jsx)(te,{}),Object(w.jsx)(ne,{dados:"".concat(B,"/publicacoes")})]})]})}var se=c(51),re=c.n(se);function ie(e){Object(i.c)((function(e){return e.user})),Object(i.c)((function(e){return e.friend}));var t=Object(n.useState)({status:"disabled",btn:!1}),c=Object(M.a)(t,2),a=c[0],s=c[1];return Object(w.jsxs)("form",{className:"container-perfil-form",children:[Object(w.jsxs)("div",{children:[Object(w.jsxs)("h1",{children:["Dados do usu\xe1rio ",e.dados.username]}),Object(w.jsxs)("span",{onClick:function(){s({status:!1,btn:Object(w.jsx)("button",{className:"btn btn-success",children:"Confirmar"})})},children:["Editar ",Object(w.jsx)(re.a,{})]})]}),Object(w.jsxs)("div",{className:"mb-3",children:[Object(w.jsx)("label",{htmlfor:"",children:"Seu nome de usu\xe1rio"}),Object(w.jsx)("input",{type:"text",className:"form-control",id:"",placeholder:e.dados.username,disabled:a.status})]}),Object(w.jsxs)("div",{className:"mb-3",children:[Object(w.jsx)("label",{htmlfor:"",children:"Seu endere\xe7o de e-mail"}),Object(w.jsx)("input",{type:"email",className:"form-control",id:"",placeholder:e.dados.email,disabled:a.status})]}),Object(w.jsxs)("div",{className:"mb-3",children:[Object(w.jsx)("label",{htmlfor:"",children:"Sua senha"}),Object(w.jsx)("input",{type:"password",className:"form-control",id:"",value:e.dados.senha,disabled:a.status})]}),Object(w.jsx)("div",{className:"mb-3",children:a.btn})]})}c(90);function oe(){var e=Object(i.c)((function(e){return e.user})),t=Object(i.b)();return Object(n.useEffect)((function(){N.a.get("".concat(B,"/login/email=").concat(e.email,"/senha=").concat(e.senha)).then((function(e){return t({type:"CARREGAR_USUARIO",payload:e.data[0]})}))})),Object(n.useEffect)((function(){N.a.get("".concat(B,"/id_user=").concat(e.id_user,"/publicacoes")).then((function(e){return t({type:"CARREGAR_POSTS",payload:e.data})}))}),[]),Object(w.jsxs)("div",{className:"container container-perfil",children:[Object(w.jsx)(ie,{dados:e}),Object(w.jsx)(ne,{dados:"id_user=".concat(e.id_user,"/publicacoes")})]})}function le(){Object(i.c)((function(e){return e.user}));var e=Object(i.c)((function(e){return e.friend})),t=Object(i.b)();return Object(n.useEffect)((function(){N.a.get("".concat(B,"/id_user=").concat(e.id_user,"/publicacoes")).then((function(e){return t({type:"CARREGAR_POSTS",payload:e.data})}))}),[]),Object(w.jsxs)("div",{className:"container container-perfil",children:[Object(w.jsx)(ie,{dados:e}),Object(w.jsx)(ne,{dados:"id_user=".concat(e.id_user,"/publicacoes")})]})}var ue=function(){return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(y,{}),Object(w.jsx)(q,{}),Object(w.jsx)(D,{children:Object(w.jsxs)(m.c,{children:[Object(w.jsx)(m.a,{path:"/perfil",component:oe}),Object(w.jsx)(m.a,{path:"/feed",component:ae}),Object(w.jsx)(m.a,{path:"/friend",component:le}),Object(w.jsx)(m.a,{path:"/",component:_})]})}),Object(w.jsx)(I,{})]})};c(91);r.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(i.a,{store:f,children:Object(w.jsx)(p.a,{children:Object(w.jsx)(ue,{})})})}),document.getElementById("root"))}},[[93,2,3]]]);
//# sourceMappingURL=main.5c7322cc.chunk.js.map