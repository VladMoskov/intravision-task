(this["webpackJsonpintravision-task"]=this["webpackJsonpintravision-task"]||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(9),n=a.n(c),i=(a(76),a(77),a(12)),r=a.n(i),j=a(13),l=a.p+"static/media/logo.aa716609.svg",d=a.p+"static/media/settings.b92000e5.svg",m=a.p+"static/media/database.a0fac14b.svg",o=a.p+"static/media/analytics.29825213.svg",b=a.p+"static/media/clients.0759eab3.svg",h=a.p+"static/media/people.42720fc1.svg",u=a.p+"static/media/tasks.1f8dc0d3.svg",O=a(1),x=function(e){return Object(O.jsx)("div",{className:"navigation",children:Object(O.jsxs)("div",{className:r.a.nav,children:[Object(O.jsx)(j.b,{className:r.a.navItem,to:"/#",children:Object(O.jsx)("img",{src:l,alt:""})}),Object(O.jsxs)(j.b,{activeClassName:r.a.active,className:r.a.navItem,to:"/know-base",children:[Object(O.jsx)("img",{alt:"",className:r.a.navItemImage,src:m}),Object(O.jsx)("h4",{children:"\u0411\u0430\u0437\u0430 \u0437\u043d\u0430\u043d\u0438\u0439"})]}),Object(O.jsxs)(j.b,{activeClassName:r.a.active,className:r.a.navItem,to:"/tasks",children:[Object(O.jsx)("img",{alt:"",className:r.a.navItemImage,src:u}),Object(O.jsx)("h4",{children:"\u0417\u0430\u044f\u0432\u043a\u0438"})]}),Object(O.jsxs)(j.b,{activeClassName:r.a.active,className:r.a.navItem,to:"/people",children:[Object(O.jsx)("img",{alt:"",className:r.a.navItemImage,src:h}),Object(O.jsx)("h4",{children:"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438"})]}),Object(O.jsxs)(j.b,{activeClassName:r.a.active,className:r.a.navItem,to:"/clients",children:[Object(O.jsx)("img",{alt:"",className:r.a.navItemImage,src:b}),Object(O.jsx)("h4",{children:"\u041a\u043b\u0438\u0435\u043d\u0442\u044b"})]}),Object(O.jsxs)(j.b,{activeClassName:r.a.active,className:r.a.navItem,to:"/actives",children:[Object(O.jsx)("img",{alt:"",className:r.a.navItemImage,src:o}),Object(O.jsx)("h4",{children:"\u0410\u043a\u0442\u0438\u0432\u044b"})]}),Object(O.jsxs)(j.b,{activeClassName:r.a.active,className:r.a.navItem,to:"/settings",children:[Object(O.jsx)("img",{alt:"",className:r.a.navItemImage,src:d}),Object(O.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})]})]})})},_=a(60),v=a.n(_),g=a(47),p=a.n(g),N=a.p+"static/media/search.c18d7ddd.svg",f=function(e){return Object(O.jsxs)("form",{children:[Object(O.jsx)("input",{className:p.a.findForm,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424\u0430\u043c\u0438\u043b\u0438\u044e, \u0421\u0442\u0430\u0442\u0443\u0441, \u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442, \u0422\u0435\u0433 \u0438 \u0442.\u0434. \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0439\u0442\u0438 \u0437\u0430\u044f\u0432\u043a\u0438"}),Object(O.jsx)("button",{className:p.a.findFormButton,children:Object(O.jsx)("img",{src:N,alt:""})})]})},k=a(39),T=a.n(k),C=a.p+"static/media/avatarsvg.3527a0fe.svg",I=function(e){return Object(O.jsxs)("div",{className:T.a.user,children:[Object(O.jsx)("h5",{className:T.a.name,children:"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u043e\u0432 \u0421\u0435\u0440\u0433\u0435\u0439"}),Object(O.jsx)("img",{className:T.a.avatar,src:C,alt:""})]})},w=function(e){return Object(O.jsxs)("div",{className:"header ".concat(v.a.header),children:[Object(O.jsx)(f,{}),Object(O.jsx)(I,{})]})},P=a(15),S=a(11),E=a(28),D=a(40),F=a.n(D),L=a(21),y=a.n(L),B=a(61),H="f820a790-7c19-4f17-8856-f26836eb9a41",K=a.n(B).a.create({baseURL:"http://intravision-task.test01.intravision.ru/"}),W=function(){return K.get("odata/tasks?tenantguid=".concat(H))},A=function(){return K.get("api/".concat(H,"/Priorities"))},G=function(){return K.get("api/".concat(H,"/Statuses"))},M=function(e){return K.post("/api/".concat(H,"/Tasks"),e)},U=function(e){return K.get("/api/".concat(H,"/Tasks/").concat(e))},q=a(48),z=a.n(q),J=function(e){return Object(O.jsx)("div",{className:z.a.wrapper,style:{backgroundColor:e.status.rgb},children:Object(O.jsx)("h1",{className:z.a.statusTitle,children:e.status.name})})},Y=a.p+"static/media/preloader.56a6d21e.svg",$=function(e){return Object(O.jsx)("div",{className:"preloader",children:Object(O.jsx)("img",{src:Y,alt:""})})},Q=function(e){var t,a;return e.priorities.forEach((function(a){a.id===e.task.priorityId&&(t=a)})),e.statuses.forEach((function(t){t.id===e.task.statusId&&(a=t)})),Object(O.jsxs)("div",{className:y.a.task,children:[Object(O.jsx)("div",{className:y.a.priority,style:{backgroundColor:t.rgb}}),Object(O.jsx)("h1",{children:e.task.id.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1 ")}),Object(O.jsx)("h1",{children:e.task.name}),Object(O.jsx)(J,{status:a}),Object(O.jsx)("h1",{children:e.task.executorName})]})},V=function(e){var t=Object(s.useState)(""),a=Object(P.a)(t,2),c=a[0],n=a[1];return Object(s.useEffect)((function(){W().then((function(e){n(e.data.value)}))}),[]),Object(O.jsxs)("div",{className:y.a.wrapper,children:[Object(O.jsxs)("div",{className:y.a.tableHead,children:[Object(O.jsx)("h1",{className:y.a.headTitle,children:"ID"}),Object(O.jsx)("h1",{className:y.a.headTitle,children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(O.jsx)("h1",{className:y.a.headTitle,children:"\u0421\u0442\u0430\u0442\u0443\u0441"}),Object(O.jsx)("h1",{className:y.a.headTitle,children:"\u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c"})]}),Object(O.jsx)("div",{className:y.a.taskItemsList,children:c?c.map((function(t){return Object(O.jsx)(j.b,{to:"/tasks/edit-task/".concat(t.id),children:Object(O.jsx)(Q,Object(E.a)({task:t},e))},t.id)})):Object(O.jsx)($,{})})]})},X=function(e){return Object(O.jsxs)("div",{className:F.a.wrapper,children:[Object(O.jsx)(j.b,{to:"/tasks/create-new-task",children:Object(O.jsx)("button",{className:F.a.createButton,children:Object(O.jsx)("h3",{className:F.a.buttonTitle,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"})})}),Object(O.jsx)(V,Object(E.a)({},e))]})},Z=a(29),R=a.n(Z),ee=a.p+"static/media/close.c46f72ba.svg",te=function(e){var t=Object(s.useState)(""),a=Object(P.a)(t,2),c=a[0],n=a[1],i=Object(s.useState)(""),r=Object(P.a)(i,2),l=r[0],d=r[1];return Object(O.jsxs)("div",{className:R.a.wrapper,children:[Object(O.jsxs)("div",{className:R.a.header,children:[Object(O.jsx)("h1",{className:R.a.title,children:"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u044f\u0432\u043a\u0430"}),Object(O.jsx)(j.b,{to:"/tasks",children:Object(O.jsx)("img",{src:ee,alt:""})})]}),Object(O.jsxs)("form",{className:R.a.form,onSubmit:function(e,t,a){e.preventDefault(),M({name:t,description:a}),n(""),d("")},children:[Object(O.jsx)("label",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(O.jsx)("textarea",{name:"name",className:R.a.name,value:c,onChange:function(e){return n(e.target.value)}}),Object(O.jsx)("label",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(O.jsx)("textarea",{name:"description",className:R.a.description,value:l,onChange:function(e){return d(e.target.value)}}),Object(O.jsx)("button",{children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})},ae=a(7),se=a.n(ae),ce=a(22),ne=a.n(ce),ie=function(e){var t=new Date(e.commentData.createdAt);return Object(O.jsxs)("div",{className:ne.a.singleComment,children:[Object(O.jsxs)("div",{className:ne.a.user,children:[Object(O.jsx)("img",{className:ne.a.avatar,src:C,alt:""}),Object(O.jsxs)("div",{className:ne.a.userTitle,children:[Object(O.jsx)("h3",{className:ne.a.name,children:"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u043e\u0432 \u0421\u0435\u0440\u0433\u0435\u0439"}),Object(O.jsxs)("h2",{className:ne.a.createdAt,children:[t.getDate()," ",["\u042f\u043d\u0432\u0430\u0440\u044f","\u0424\u0435\u0432\u0440\u0430\u043b\u044f","\u041c\u0430\u0440\u0442\u0430","\u0410\u043f\u0440\u0435\u043b\u044f","\u041c\u0430\u044f","\u0418\u044e\u043d\u044f","\u0418\u044e\u043b\u044f","\u0410\u0432\u0433\u0443\u0441\u0442\u0430","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u041e\u043a\u0442\u044f\u0431\u0440\u044f","\u041d\u043e\u044f\u0431\u0440\u044f","\u0414\u0435\u043a\u0430\u0431\u0440\u044f"][t.getMonth()],", ",t.getHours(),":",t.getMinutes()," \u043f\u0440\u043e\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043b"]})]})]}),Object(O.jsx)("div",{className:ne.a.commentTextWrapper,children:Object(O.jsx)("h5",{className:ne.a.commentText,children:e.commentData.comment})})]})},re=function(e){return Object(O.jsx)("div",{className:ne.a.wrapper,children:e.comments.map((function(e){return Object(O.jsx)(ie,{commentData:e},e.id)}))})},je=a(41),le=a.n(je),de=a(137),me=a(138),oe=function(e){var t=Object(s.useState)({name:e.statusName}),a=Object(P.a)(t,2),c=a[0],n=a[1];return console.log(c),Object(O.jsx)("div",{className:le.a.wrapper,children:Object(O.jsx)(de.a,{value:c.name,onChange:function(e){n(e.target.value)},children:e.statuses.map((function(e){return Object(O.jsx)(me.a,{value:e.name,children:Object(O.jsxs)("div",{className:le.a.statusName,children:[Object(O.jsx)("div",{className:le.a.status,style:{backgroundColor:e.rgb}}),e.name]})},e.id)}))})})},be=function(e){return Object(O.jsx)("div",{})},he=a.p+"static/media/calendar.70baf16f.svg",ue=function(e){var t=Object(s.useState)(""),a=Object(P.a)(t,2),c=a[0],n=a[1];return Object(O.jsxs)("div",{className:se.a.addComment,children:[Object(O.jsx)("h2",{children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432"}),Object(O.jsx)("textarea",{className:se.a.commentForm,value:c,onChange:function(e){return n(e.target.value)}}),Object(O.jsx)("button",{onClick:function(){return n("")},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})},Oe=function(e){var t=new Date(e.task.resolutionDatePlan);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:se.a.header,children:[Object(O.jsxs)("h1",{className:se.a.title,children:["\u2116 ",e.task.id.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1 ")]}),Object(O.jsx)(j.b,{to:"/tasks",children:Object(O.jsx)("img",{src:ee,alt:""})})]}),Object(O.jsxs)("div",{className:se.a.content,children:[Object(O.jsxs)("div",{className:se.a.leftSide,children:[Object(O.jsxs)("div",{className:se.a.description,children:[Object(O.jsx)("h2",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(O.jsx)("h1",{children:e.task.description})]}),Object(O.jsx)(ue,{}),Object(O.jsx)(re,{comments:e.task.lifetimeItems})]}),Object(O.jsxs)("div",{className:se.a.rightSide,children:[Object(O.jsx)(oe,{statusName:e.task.statusName,statuses:e.statuses}),Object(O.jsxs)("div",{className:se.a.applicant,children:[Object(O.jsx)("h1",{className:se.a.rightTitle,children:"\u0417\u0430\u044f\u0432\u0438\u0442\u0435\u043b\u044c"}),Object(O.jsx)("h1",{className:se.a.rightName,children:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u0412\u043e\u0437\u043d\u0435\u0441\u0435\u043d\u0441\u043a\u0438\u0439"})]}),Object(O.jsxs)("div",{className:se.a.initiator,children:[Object(O.jsx)("h1",{className:se.a.rightTitle,children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0430"}),Object(O.jsx)("h1",{className:se.a.rightName,children:e.task.initiatorName})]}),Object(O.jsx)(be,{}),Object(O.jsxs)("div",{className:se.a.priority,children:[Object(O.jsx)("h1",{className:se.a.rightTitle,children:"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442"}),Object(O.jsx)("h1",{className:se.a.rightName,children:e.task.priorityName})]}),Object(O.jsxs)("div",{className:se.a.resolutionDatePlan,children:[Object(O.jsx)("h1",{className:se.a.rightTitle,children:"\u0421\u0440\u043e\u043a"}),Object(O.jsxs)("h1",{className:se.a.rightName,children:[Object(O.jsx)("img",{src:he,alt:""}),t.getDate(),".",t.getMonth(),".",t.getFullYear()," \u0433."]})]}),Object(O.jsxs)("div",{className:se.a.tags,children:[Object(O.jsx)("h1",{className:se.a.rightTitle,children:"\u0422\u0435\u0433\u0438"}),Object(O.jsx)("div",{className:se.a.tagsList,children:e.task.tags.map((function(e){return Object(O.jsx)("h1",{className:se.a.tag,children:e.name},e.id)}))})]})]})]})]})},xe=function(e){var t=Object(S.e)(),a=Object(s.useState)(null),c=Object(P.a)(a,2),n=c[0],i=c[1];return Object(s.useEffect)((function(){U(t.taskID).then((function(e){return i(e.data)}))}),[t.taskID]),Object(O.jsx)("div",{className:se.a.wrapper,children:n?Object(O.jsx)(Oe,Object(E.a)(Object(E.a)({},e),{},{task:n})):Object(O.jsx)($,{})})},_e=function(e){var t=Object(s.useState)([]),a=Object(P.a)(t,2),c=a[0],n=a[1],i=Object(s.useState)([]),r=Object(P.a)(i,2),j=r[0],l=r[1];return Object(s.useEffect)((function(){A().then((function(e){return n(e.data)})),G().then((function(e){return l(e.data)}))}),[]),Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)(S.a,{path:"/tasks",render:function(){return Object(O.jsx)(X,{priorities:c,statuses:j})}}),Object(O.jsx)(S.a,{exact:!0,path:"/tasks/create-new-task",render:function(){return Object(O.jsx)(te,{})}}),Object(O.jsx)(S.a,{exact:!0,path:"/tasks/edit-task/:taskID",render:function(){return Object(O.jsx)(xe,{statuses:j})}})]})};var ve=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(w,{}),Object(O.jsx)(x,{}),Object(O.jsx)(_e,{})]})},ge=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,140)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))};n.a.render(Object(O.jsx)(j.a,{children:Object(O.jsx)(ve,{})}),document.getElementById("root")),ge()},12:function(e,t,a){e.exports={nav:"Navigation_nav__1k4tB",navItem:"Navigation_navItem__bhtLJ",navItemImage:"Navigation_navItemImage__6G9eL",active:"Navigation_active__VrsPt"}},21:function(e,t,a){e.exports={taskItemsList:"TasksTable_taskItemsList__15vvH",tableHead:"TasksTable_tableHead__1dPm-",headTitle:"TasksTable_headTitle__2MKth",task:"TasksTable_task__3uk4k",priority:"TasksTable_priority__3WTgg"}},22:function(e,t,a){e.exports={wrapper:"Comments_wrapper__1qaj5",avatar:"Comments_avatar__26DAj",name:"Comments_name__UC3zB",user:"Comments_user__yoGWW",createdAt:"Comments_createdAt__3zggI",userTitle:"Comments_userTitle__30fn1",commentTextWrapper:"Comments_commentTextWrapper__PC5KP"}},29:function(e,t,a){e.exports={wrapper:"CreateTaskPage_wrapper__P7dZd",header:"CreateTaskPage_header__3Yd3t",title:"CreateTaskPage_title__WLKEx",name:"CreateTaskPage_name__1bkQH",description:"CreateTaskPage_description__3B7Ah",form:"CreateTaskPage_form__3Czou"}},39:function(e,t,a){e.exports={user:"User_user__hcIeH",name:"User_name__1evpo",avatar:"User_avatar__3P6fX"}},40:function(e,t,a){e.exports={createButton:"TasksListPage_createButton__2D2Lp",buttonTitle:"TasksListPage_buttonTitle__2hPGp",wrapper:"TasksListPage_wrapper__3qXYp"}},41:function(e,t,a){e.exports={status:"ChangeStatus_status__1KpQF",statusName:"ChangeStatus_statusName__2n9Yk",wrapper:"ChangeStatus_wrapper__3sKZq"}},47:function(e,t,a){e.exports={findForm:"FindForm_findForm__3i_yc",findFormButton:"FindForm_findFormButton__2XWOJ"}},48:function(e,t,a){e.exports={wrapper:"Status_wrapper__3tCcj"}},60:function(e,t,a){e.exports={header:"Header_header__1E8Dp"}},7:function(e,t,a){e.exports={wrapper:"EditTask_wrapper__1BBqy",header:"EditTask_header__15fk7",title:"EditTask_title__2i4dx",content:"EditTask_content__o1uMC",description:"EditTask_description__-GPht",addComment:"EditTask_addComment__29xQx",leftSide:"EditTask_leftSide__3VLO7",commentForm:"EditTask_commentForm__5z_o1",rightSide:"EditTask_rightSide__2LbZm",rightTitle:"EditTask_rightTitle__23sHh",rightName:"EditTask_rightName__1L11H",calendar:"EditTask_calendar__hS-IK",resolutionDatePlan:"EditTask_resolutionDatePlan__1gPK2",tagsList:"EditTask_tagsList__3rGKg",tag:"EditTask_tag__2wV8h"}},76:function(e,t,a){},77:function(e,t,a){}},[[106,1,2]]]);
//# sourceMappingURL=main.f10cc89d.chunk.js.map