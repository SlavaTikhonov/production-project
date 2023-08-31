"use strict";(self.webpackChunkfirst_project_webpack_ts=self.webpackChunkfirst_project_webpack_ts||[]).push([[676],{8791:function(e,a,n){n.d(a,{I:function(){return i}});var r=n(7294),t=n(3007),s={InputWrapper:"p_6dRLUG",primary:"SBxOKW9p",secondary:"reg85lwi",placeholder:"uWIRRz2O",input:"Z6IBiNl_",readonly:"sFcbjx23"},l=n(5893);let o;!function(e){e.PRIMARY="primary",e.SECONDARY="secondary"}(o||(o={}));const i=(0,r.memo)((e=>{const{className:a,value:n,onChange:i,type:c="text",placeholder:d,autoFocus:u,readonly:h,theme:C=o.PRIMARY,...g}=e,x=(0,r.useRef)(null),[m,p]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{u&&(p(!0),x.current?.focus())}),[u]),(0,l.jsxs)("div",{className:(0,t.A)(s.InputWrapper,{[s[C]]:!0},[a]),children:[d&&(0,l.jsx)("div",{className:s.placeholder,children:`${d}:`}),(0,l.jsx)("input",{ref:x,type:c,value:n,onChange:e=>{i?.(e.target.value)},className:s.input,readOnly:h,...g})]})}))},6199:function(e,a,n){n.d(a,{n:function(){return s}});var r=n(7294),t=n(5893);const s=(0,r.memo)((e=>{const{className:a,src:n,alt:s="image",errorFallback:l,fallback:o,...i}=e,[c,d]=(0,r.useState)(!0),[u,h]=(0,r.useState)(!1);return(0,r.useLayoutEffect)((()=>{const e=new Image;e.src=n??"",e.onload=()=>{d(!1)},e.onerror=()=>{d(!1),h(!0)}}),[n]),c&&o?o:u&&l?l:(0,t.jsx)("img",{className:a,src:n,alt:s,...i})}))},6621:function(e,a,n){n.d(a,{q:function(){return h}});var r,t=n(7294),s=n(3007),l=n(6199);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var i=e=>t.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=t.createElement("path",{d:"M26.749 24.93C28.1851 23.2021 29.184 21.1537 29.661 18.9582C30.1381 16.7626 30.0793 14.4845 29.4897 12.3164C28.9001 10.1484 27.7969 8.15423 26.2736 6.50268C24.7504 4.85112 22.8517 3.59075 20.7383 2.82818C18.6248 2.06561 16.3588 1.82328 14.132 2.12168C11.9051 2.42008 9.78281 3.25043 7.94471 4.5425C6.10661 5.83457 4.60674 7.55034 3.57199 9.54467C2.53723 11.539 1.99803 13.7532 2 16C2.00075 19.2662 3.15174 22.4278 5.251 24.93L5.231 24.947C5.301 25.031 5.381 25.103 5.453 25.186C5.543 25.289 5.64 25.386 5.733 25.486C6.013 25.79 6.301 26.082 6.603 26.356C6.695 26.44 6.79 26.518 6.883 26.598C7.203 26.874 7.532 27.136 7.873 27.38C7.917 27.41 7.957 27.449 8.001 27.48V27.468C10.3431 29.1162 13.1371 30.0007 16.001 30.0007C18.8649 30.0007 21.6589 29.1162 24.001 27.468V27.48C24.045 27.449 24.084 27.41 24.129 27.38C24.469 27.135 24.799 26.874 25.119 26.598C25.212 26.518 25.307 26.439 25.399 26.356C25.701 26.081 25.989 25.79 26.269 25.486C26.362 25.386 26.458 25.289 26.549 25.186C26.62 25.103 26.701 25.031 26.771 24.946L26.749 24.93ZM16 8C16.89 8 17.76 8.26392 18.5001 8.75838C19.2401 9.25285 19.8169 9.95566 20.1575 10.7779C20.4981 11.6002 20.5872 12.505 20.4135 13.3779C20.2399 14.2508 19.8113 15.0526 19.182 15.682C18.5526 16.3113 17.7508 16.7399 16.8779 16.9135C16.005 17.0872 15.1002 16.998 14.2779 16.6575C13.4557 16.3169 12.7529 15.7401 12.2584 15.0001C11.7639 14.26 11.5 13.39 11.5 12.5C11.5 11.3065 11.9741 10.1619 12.818 9.31802C13.6619 8.4741 14.8065 8 16 8V8ZM8.007 24.93C8.02435 23.617 8.55795 22.3636 9.49236 21.4409C10.4268 20.5183 11.6869 20.0007 13 20H19C20.3131 20.0007 21.5732 20.5183 22.5076 21.4409C23.4421 22.3636 23.9757 23.617 23.993 24.93C21.7998 26.9063 18.9523 28.0001 16 28.0001C13.0477 28.0001 10.2002 26.9063 8.007 24.93V24.93Z",fill:"currentColor"}))),c=n(7650),d=n(6265),u=n(5893);const h=e=>{let{className:a,src:n,size:r=100,alt:o}=e;const h=(0,t.useMemo)((()=>({width:r,height:r})),[r]),C=(0,u.jsx)(d.O,{width:r,height:r,border:"50%"}),g=(0,u.jsx)(c.J,{width:r,height:r,Svg:i});return(0,u.jsx)(l.n,{fallback:C,errorFallback:g,src:n,alt:o,style:h,className:(0,s.A)("ydOM7p7Y",{},[a])})}},169:function(e,a,n){n.d(a,{I:function(){return c}});var r=n(7294),t=n(3007),s={InputWrapper:"ZyI7rxIe",s:"mKldd7L_",m:"IyQiG8hL",l:"j7JcqtN4",addonLeft:"OqwwYwm8",addonRight:"o_xLYaZC",withAddonLeft:"zVArqqw4",withAddonRight:"HxXya_r8",focused:"jUzuVRdk",input:"L2BiQ3jT",readonly:"xspqW3a0"},l=n(9244),o=n(8969),i=n(5893);const c=(0,r.memo)((e=>{const{className:a,value:n,onChange:c,type:d="text",placeholder:u,autofocus:h,readonly:C,addonLeft:g,addonRight:x,label:m,size:p="m",...f}=e,j=(0,r.useRef)(null),[R,v]=(0,r.useState)(!1);(0,r.useEffect)((()=>{h&&(v(!0),j.current?.focus())}),[h]);const y={[s.readonly]:C,[s.focused]:R,[s.withAddonLeft]:Boolean(g),[s.withAddonRight]:Boolean(x)},N=(0,i.jsxs)("div",{className:(0,t.A)(s.InputWrapper,y,[a,s[p]]),children:[(0,i.jsx)("div",{className:s.addonLeft,children:g}),(0,i.jsx)("input",{ref:j,type:d,value:n,onChange:e=>{c?.(e.target.value)},className:s.input,onFocus:()=>{v(!0)},onBlur:()=>{v(!1)},readOnly:C,placeholder:u,...f}),(0,i.jsx)("div",{className:s.addonRight,children:x})]});return m?(0,i.jsxs)(l.U,{max:!0,gap:"8",children:[(0,i.jsx)(o.x,{text:m}),N]}):N}))},2676:function(e,a,n){n.r(a),n.d(a,{default:function(){return le}});var r=n(9250),t=n(3007),s=n(1492),l=n(1326),o=n(5443),i=n(7294),c=n(743),d=n(526),u=n(7499),h={ProfileCard:"QTLlYN1L",loading:"TX39V40k",error:"bA_iT2GX",editing:"FmG40szU"},C=n(9244),g=n(9085),x=n(8791);let m;!function(e){e.RUB="RUB",e.EUR="EUR",e.USD="USD"}(m||(m={}));var p=n(3625),f=n(5108),j=n(5893);const R=[{value:m.RUB,content:m.RUB},{value:m.EUR,content:m.EUR},{value:m.USD,content:m.USD}],v=(0,i.memo)((e=>{let{className:a,value:n,onChange:r,readonly:t}=e;const{t:s}=(0,o.$)(),l=(0,i.useCallback)((e=>{r?.(e)}),[r]),c={className:a,value:n,defaultValue:s("Укажите валюту"),label:s("Укажите валюту"),items:R,onChange:l,readonly:t,direction:"top right"};return(0,j.jsx)(u.zJ,{feature:"isAppRedesigned",on:(0,j.jsx)(f.wb,{...c}),off:(0,j.jsx)(p.wb,{...c})})}));let y;!function(e){e.Russia="Russia",e.Belarus="Belarus",e.Ukraine="Ukraine",e.Kazakhstan="Kazahstan",e.Armenia="Armenia"}(y||(y={}));const N=[{value:y.Armenia,content:y.Armenia},{value:y.Russia,content:y.Russia},{value:y.Belarus,content:y.Belarus},{value:y.Kazakhstan,content:y.Kazakhstan},{value:y.Ukraine,content:y.Ukraine}],E=(0,i.memo)((e=>{let{className:a,value:n,onChange:r,readonly:t}=e;const{t:s}=(0,o.$)(),l=(0,i.useCallback)((e=>{r?.(e)}),[r]),c={onChange:l,value:n,defaultValue:s("Укажите страну"),label:s("Укажите страну"),items:N,readonly:t,direction:"top right"};return(0,j.jsx)(u.zJ,{feature:"isAppRedesigned",on:(0,j.jsx)(f.wb,{...c}),off:(0,j.jsx)(p.wb,{...c})})}));var A=n(7953);const b=()=>{const{t:e}=(0,o.$)();return(0,j.jsx)(C.U,{justify:"center",max:!0,className:(0,t.A)(h.ProfileCard,{},[h.error]),children:(0,j.jsx)(d.xv,{theme:d.lg.ERROR,title:e("Произошла ошибка при загрузке профиля"),text:e("Попробуйте обновить страницу"),align:d.PH.CENTER})})},O=()=>(0,j.jsx)(C.U,{justify:"center",max:!0,className:(0,t.A)(h.ProfileCard,{[h.loading]:!0}),children:(0,j.jsx)(A.a,{})}),U=(0,i.memo)((e=>{const{className:a,data:n,readonly:r,onChangeFirstname:s,onChangeLastname:l,onChangeAge:i,onChangeCity:c,onChangeAvatar:d,onChangeUsername:u,onChangeCountry:m,onChangeCurrency:p}=e,{t:f}=(0,o.$)(),R={[h.editing]:!r};return(0,j.jsxs)(C.g,{max:!0,gap:"16",className:(0,t.A)(h.ProfileCard,R,[a]),children:[n?.avatar&&(0,j.jsx)(C.U,{justify:"center",max:!0,className:h.avatarWrapper,children:(0,j.jsx)(g.q,{src:n?.avatar})}),(0,j.jsx)(x.I,{value:n?.first,placeholder:f("Ваше имя"),className:h.input,onChange:s,readonly:r}),(0,j.jsx)(x.I,{value:n?.lastname,placeholder:f("Ваша фамилия"),className:h.input,onChange:l,readonly:r}),(0,j.jsx)(x.I,{value:n?.age,placeholder:f("Ваш возраст"),className:h.input,onChange:i,readonly:r}),(0,j.jsx)(x.I,{value:n?.city,placeholder:f("Город"),className:h.input,onChange:c,readonly:r}),(0,j.jsx)(x.I,{value:n?.username,placeholder:f("Введите имя пользователя"),className:h.input,onChange:u,readonly:r}),(0,j.jsx)(x.I,{value:n?.avatar,placeholder:f("Введите ссылку на аватар"),className:h.input,onChange:d,readonly:r}),(0,j.jsx)(v,{className:h.input,value:n?.currency,onChange:p,readonly:r}),(0,j.jsx)(E,{className:h.input,value:n?.country,onChange:m,readonly:r})]})}));var w=n(6621),I=n(169),k=n(7231),T=n(6265),_=n(8969);const L=()=>{const{t:e}=(0,o.$)();return(0,j.jsx)(C.U,{justify:"center",max:!0,children:(0,j.jsx)(_.x,{variant:"error",title:e("Произошла ошибка при загрузке профиля"),text:e("Попробуйте обновить страницу"),align:"center"})})},z=()=>(0,j.jsx)(k.Z,{border:"lightly",padding:"24",max:!0,children:(0,j.jsxs)(C.g,{gap:"32",children:[(0,j.jsx)(C.U,{max:!0,justify:"center",children:(0,j.jsx)(T.O,{border:"100%",width:128,height:128})}),(0,j.jsxs)(C.U,{gap:"32",max:!0,children:[(0,j.jsxs)(C.g,{gap:"16",max:!0,children:[(0,j.jsx)(T.O,{width:"100%",height:38}),(0,j.jsx)(T.O,{width:"100%",height:38}),(0,j.jsx)(T.O,{width:"100%",height:38}),(0,j.jsx)(T.O,{width:"100%",height:38})]}),(0,j.jsxs)(C.g,{gap:"16",max:!0,children:[(0,j.jsx)(T.O,{width:"100%",height:38}),(0,j.jsx)(T.O,{width:"100%",height:38}),(0,j.jsx)(T.O,{width:"100%",height:38}),(0,j.jsx)(T.O,{width:"100%",height:38})]})]})]})}),S=(0,i.memo)((e=>{const{className:a,data:n,readonly:r,onChangeFirstname:t,onChangeLastname:s,onChangeAge:l,onChangeCity:i,onChangeAvatar:c,onChangeUsername:d,onChangeCountry:u,onChangeCurrency:h}=e,{t:g}=(0,o.$)();return(0,j.jsx)(k.Z,{border:"lightly",padding:"24",max:!0,className:a,children:(0,j.jsxs)(C.g,{gap:"32",children:[n?.avatar&&(0,j.jsx)(C.U,{justify:"center",max:!0,children:(0,j.jsx)(w.q,{size:128,src:n?.avatar})}),(0,j.jsxs)(C.U,{gap:"24",max:!0,children:[(0,j.jsxs)(C.g,{gap:"16",max:!0,children:[(0,j.jsx)(I.I,{value:n?.first,label:g("Имя"),onChange:t,readonly:r}),(0,j.jsx)(I.I,{value:n?.lastname,label:g("Фамилия"),onChange:s,readonly:r}),(0,j.jsx)(I.I,{value:n?.age,label:g("Возраст"),onChange:l,readonly:r}),(0,j.jsx)(I.I,{value:n?.city,label:g("Город"),onChange:i,readonly:r})]}),(0,j.jsxs)(C.g,{gap:"16",max:!0,children:[(0,j.jsx)(I.I,{value:n?.username,label:g("Имя пользователя"),onChange:d,readonly:r}),(0,j.jsx)(I.I,{value:n?.avatar,label:g("Cсылка на аватар"),onChange:c,readonly:r}),(0,j.jsx)(v,{value:n?.currency,onChange:h,readonly:r}),(0,j.jsx)(E,{value:n?.country,onChange:u,readonly:r})]})]})]})})})),P=e=>{const{isLoading:a,error:n}=e,{t:r}=(0,o.$)();return a?(0,j.jsx)(u.zJ,{feature:"isAppRedesigned",on:(0,j.jsx)(z,{}),off:(0,j.jsx)(O,{})}):n?(0,j.jsx)(u.zJ,{feature:"isAppRedesigned",on:(0,j.jsx)(L,{}),off:(0,j.jsx)(b,{})}):(0,j.jsx)(u.zJ,{feature:"isAppRedesigned",on:(0,j.jsx)(S,{...e}),off:(0,j.jsx)(U,{...e})})};var D=n(5401),B=n(9970),V=n(9864);let $;!function(e){e.INCORRECT_USER_DATA="INCORRECT_USER_DATA",e.INCORRECT_AGE="INCORRECT_AGE",e.INCORRECT_COUNTRY="INCORRECT_COUNTRY",e.NO_DATA="NO_DATA",e.SERVER_ERROR="SERVER_ERROR"}($||($={}));var M=n(8029),W=n(7702),Y=n(4268);const F=(0,Y.hg)("profile/fetchProfileData",(async(e,a)=>{const{extra:n,rejectWithValue:r}=a;try{const a=await n.api.get(`/profile/${e}`);if(!a.data)throw new Error;return a.data}catch(e){return console.log(e),r("error")}})),Z=e=>e.profile?.form,q=(0,Y.hg)("profile/updateProfileData",(async(e,a)=>{const{extra:n,rejectWithValue:r,getState:t}=a,s=Z(t()),l=(e=>{if(!e)return[$.NO_DATA];const{first:a,lastname:n,age:r,country:t}=e,s=[];return a&&n||s.push($.INCORRECT_USER_DATA),r&&Number.isInteger(r)||s.push($.INCORRECT_AGE),t||s.push($.INCORRECT_COUNTRY),s})(s);if(l.length)return r(l);try{const e=await n.api.put(`/profile/${s?.id}`,s);if(!e.data)throw new Error;return e.data}catch(e){return console.log(e),r([$.SERVER_ERROR])}})),G=(0,Y.oM)({name:"profile",initialState:{readonly:!0,isLoading:!1,error:void 0,data:void 0},reducers:{setReadonly:(e,a)=>{e.readonly=a.payload},cancelEdit:e=>{e.readonly=!0,e.validateErrors=void 0,e.form=e.data},updateProfile:(e,a)=>{e.form={...e.form,...a.payload}}},extraReducers:e=>{e.addCase(F.pending,(e=>{e.error=void 0,e.isLoading=!0})).addCase(F.fulfilled,((e,a)=>{e.isLoading=!1,e.data=a.payload,e.form=a.payload})).addCase(F.rejected,((e,a)=>{e.isLoading=!1,e.error=a.payload})).addCase(q.pending,(e=>{e.validateErrors=void 0,e.isLoading=!0})).addCase(q.fulfilled,((e,a)=>{e.isLoading=!1,e.data=a.payload,e.form=a.payload,e.readonly=!0,e.validateErrors=void 0})).addCase(q.rejected,((e,a)=>{e.isLoading=!1,e.validateErrors=a.payload}))}}),{actions:J}=G,{reducer:K}=G,Q=e=>e.profile?.readonly,H=e=>e.profile?.data;var X=n(8190);const ee=(0,i.memo)((e=>{const{className:a}=e,{t:n}=(0,o.$)(),r=(0,c.v9)(M.m5),s=(0,c.v9)(H),h=r?.id===s?.id,C=(0,c.v9)(Q),g=(0,D.T)(),x=(0,i.useCallback)((()=>{g(J.setReadonly(!1))}),[g]),m=(0,i.useCallback)((()=>{g(J.cancelEdit())}),[g]),p=(0,i.useCallback)((()=>{g(q())}),[g]);return(0,j.jsx)(u.zJ,{feature:"isAppRedesigned",on:(0,j.jsx)(k.Z,{border:"lightly",padding:"24",max:!0,children:(0,j.jsxs)(l.U,{max:!0,justify:"between",className:(0,t.A)("",{},[a]),children:[(0,j.jsx)(_.x,{title:n("Профиль")}),h&&(0,j.jsx)("div",{children:C?(0,j.jsx)(X.z,{variant:"outline",onClick:x,children:n("Редактировать")}):(0,j.jsxs)(l.U,{max:!0,gap:"8",children:[(0,j.jsx)(X.z,{color:"error",onClick:m,children:n("Отменить")}),(0,j.jsx)(X.z,{color:"success",onClick:p,children:n("Сохранить")})]})})]})}),off:(0,j.jsxs)(l.U,{max:!0,justify:"between",className:(0,t.A)("",{},[a]),children:[(0,j.jsx)(d.xv,{title:n("Профиль")}),h&&(0,j.jsx)("div",{children:C?(0,j.jsx)(W.zx,{theme:W.bn.OUTLINE,onClick:x,children:n("Редактировать")}):(0,j.jsxs)(l.U,{max:!0,gap:"8",children:[(0,j.jsx)(W.zx,{theme:W.bn.OUTLINE_RED,onClick:m,children:n("Отменить")}),(0,j.jsx)(W.zx,{theme:W.bn.OUTLINE,onClick:p,children:n("Сохранить")})]})})]})})})),ae=e=>e.profile?.isLoading,ne=e=>e.profile?.validateErrors,re=e=>e.profile?.error,te={profile:K},se=(0,i.memo)((e=>{const{className:a,id:n}=e,{t:r}=(0,o.$)(),s=(0,D.T)(),u=(0,c.v9)(Z),h=(0,c.v9)(ae),C=(0,c.v9)(re),g=(0,c.v9)(Q),x=(0,c.v9)(ne),m={[$.SERVER_ERROR]:r("Серверная ошибка при сохранении"),[$.INCORRECT_COUNTRY]:r("Некорректный регион"),[$.NO_DATA]:r("Данные не указаны"),[$.INCORRECT_USER_DATA]:r("Имя и фамилия обязательны"),[$.INCORRECT_AGE]:r("Некорректный возраст")};(0,B.Q)((()=>{n&&s(F(n))}));const p=(0,i.useCallback)((e=>{s(J.updateProfile({first:e||""}))}),[s]),f=(0,i.useCallback)((e=>{s(J.updateProfile({lastname:e||""}))}),[s]),R=(0,i.useCallback)((e=>{s(J.updateProfile({city:e||""}))}),[s]),v=(0,i.useCallback)((e=>{s(J.updateProfile({age:Number(e||0)}))}),[s]),y=(0,i.useCallback)((e=>{s(J.updateProfile({username:e||""}))}),[s]),N=(0,i.useCallback)((e=>{s(J.updateProfile({avatar:e||""}))}),[s]),E=(0,i.useCallback)((e=>{s(J.updateProfile({currency:e}))}),[s]),A=(0,i.useCallback)((e=>{s(J.updateProfile({country:e}))}),[s]);return(0,j.jsx)(V.W,{reducers:te,children:(0,j.jsxs)(l.g,{gap:"16",max:!0,className:(0,t.A)("",{},[a]),children:[(0,j.jsx)(ee,{}),x?.length&&x.map((e=>(0,j.jsx)(d.xv,{theme:d.lg.ERROR,text:m[e]},e))),(0,j.jsx)(P,{data:u,isLoading:h,error:C,readonly:g,onChangeFirstname:p,onChangeLastname:f,onChangeAge:v,onChangeCity:R,onChangeUsername:y,onChangeAvatar:N,onChangeCurrency:E,onChangeCountry:A})]})})}));var le=e=>{let{className:a}=e;const{id:n}=(0,r.UO)();return(0,j.jsx)(s.T,{className:(0,t.A)("",{},[a]),children:(0,j.jsx)(l.g,{gap:"16",children:(0,j.jsx)(se,{id:n})})})}},9864:function(e,a,n){n.d(a,{W:function(){return l}});var r=n(7294),t=n(743),s=n(5893);const l=e=>{const{children:a,reducers:n,removeAfterUnmount:l=!0}=e,o=(0,t.oR)(),i=(0,t.I0)();return(0,r.useEffect)((()=>{const e=o.reducerManager.getMountedReducers();return Object.entries(n).forEach((a=>{let[n,r]=a;e[n]||(o.reducerManager.add(n,r),i({type:`@INIT ${n} reducer`}))})),()=>{l&&Object.entries(n).forEach((e=>{let[a,n]=e;o.reducerManager.remove(a),i({type:`@DESTROY ${a} reducer`})}))}}),[]),(0,s.jsx)(s.Fragment,{children:a})}}}]);