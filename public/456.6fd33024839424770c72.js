(self.webpackChunktask_app=self.webpackChunktask_app||[]).push([[456],{1456:(e,r,t)=>{"use strict";t.r(r),t.d(r,{UserModule:()=>I});var i=t(1116),s=t(9069),n=t(1462),o=t(2290),a=t(7368),u=t(3796),l=t(4345),d=t(8445),c=t(8665),p=t(1146);const Z=function(){return["/user"]};let g=(()=>{class e{constructor(e,r,t,i,s){this.fb=e,this.authService=r,this.userService=t,this.router=i,this.messageService=s,this.blocked=!1,this.currentUser=null}ngOnInit(){this.currentUser=this.authService.currentUser.value,this.userForm=this.fb.group({name:new n.NI("",[n.kI.required]),email:new n.NI("",[n.kI.required]),oid:new n.NI(this.currentUser.uid,[n.kI.required]),role:new n.NI("Select Role",[n.kI.required]),password:new n.NI("123456",[n.kI.required])})}onSubmit(e){e.valid&&(this.blocked=!0,this.userService.addUser(e.value).then(e=>{this.messageService.add({severity:"success",summary:"User added successfully.",closable:!1}),this.userForm.reset(),this.blocked=!1}).catch(e=>{console.log(e)}))}}return e.\u0275fac=function(r){return new(r||e)(a.Y36(n.qu),a.Y36(u.e),a.Y36(l.K),a.Y36(s.F0),a.Y36(o.ez))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-add-user"]],features:[a._Bn([o.ez])],decls:55,vars:8,consts:[[1,"wd-page","wd-page-tabed"],[1,"wd-page-title"],[1,"wd-page-title-inner"],["aria-label","breadcrumb",1,"wd-breadcrumbs"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","#"],[3,"routerLink"],["aria-current","page",1,"breadcrumb-item","active"],[1,"wd-page-title-control"],[1,"btn","btn-primary","btn-rounded",3,"routerLink"],[1,"wd-page-body"],[1,"wd-panel"],[1,"wd-panel-body"],[1,"row"],[1,"col-lg-4"],[3,"formGroup","ngSubmit"],[1,"mb-3"],[1,"form-label"],["type","text","formControlName","name","placeholder","Name",1,"form-control"],["type","text","formControlName","email","placeholder","Email Address",1,"form-control"],["formControlName","role",1,"form-select"],["value",""],["value","Super Admin"],["value","Administrator"],["value","Manager"],["value","Developer"],["value","Designer"],["value","Testing"],[1,"btn","btn-primary","btn-rounded",3,"disabled"],[3,"blocked"],["strokeWidth","4"],["position","top-center",3,"showTransformOptions"]],template:function(e,r){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"h4"),a._uU(4,"Add User"),a.qZA(),a.TgZ(5,"nav",3),a.TgZ(6,"ol",4),a.TgZ(7,"li",5),a.TgZ(8,"a",6),a._uU(9,"Dashboard"),a.qZA(),a.qZA(),a.TgZ(10,"li",5),a.TgZ(11,"a",7),a._uU(12,"Users"),a.qZA(),a.qZA(),a.TgZ(13,"li",8),a._uU(14,"Add User"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(15,"div",9),a.TgZ(16,"button",10),a._uU(17,"Back"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(18,"div",11),a.TgZ(19,"div",12),a.TgZ(20,"div",13),a.TgZ(21,"div",14),a.TgZ(22,"div",15),a.TgZ(23,"form",16),a.NdJ("ngSubmit",function(){return r.onSubmit(r.userForm)}),a.TgZ(24,"div",17),a.TgZ(25,"label",18),a._uU(26,"Name"),a.qZA(),a._UZ(27,"input",19),a.qZA(),a.TgZ(28,"div",17),a.TgZ(29,"label",18),a._uU(30,"Email Address"),a.qZA(),a._UZ(31,"input",20),a.qZA(),a.TgZ(32,"div",17),a.TgZ(33,"label",18),a._uU(34,"Role"),a.qZA(),a.TgZ(35,"select",21),a.TgZ(36,"option",22),a._uU(37,"Select Role"),a.qZA(),a.TgZ(38,"option",23),a._uU(39,"Super Admin"),a.qZA(),a.TgZ(40,"option",24),a._uU(41,"Administrator"),a.qZA(),a.TgZ(42,"option",25),a._uU(43,"Manager"),a.qZA(),a.TgZ(44,"option",26),a._uU(45,"Developer"),a.qZA(),a.TgZ(46,"option",27),a._uU(47,"Designer"),a.qZA(),a.TgZ(48,"option",28),a._uU(49,"Testing"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(50,"button",29),a._uU(51,"Save"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(52,"p-blockUI",30),a._UZ(53,"p-progressSpinner",31),a.qZA(),a._UZ(54,"p-toast",32)),2&e&&(a.xp6(11),a.Q6J("routerLink",a.DdM(6,Z)),a.xp6(5),a.Q6J("routerLink",a.DdM(7,Z)),a.xp6(7),a.Q6J("formGroup",r.userForm),a.xp6(27),a.Q6J("disabled",r.userForm.invalid),a.xp6(2),a.Q6J("blocked",r.blocked),a.xp6(2),a.Q6J("showTransformOptions","translateX(100%)"))},directives:[s.yS,s.rH,n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,n.EJ,n.YN,n.Kr,d.b,c.G,p.FN],styles:[""]}),e})(),m=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-edit-user"]],decls:2,vars:0,template:function(e,r){1&e&&(a.TgZ(0,"p"),a._uU(1,"edit-user works!"),a.qZA())},styles:[""]}),e})();var v=t(5992),A=t(2949);function b(e,r){1&e&&(a.TgZ(0,"tr"),a.TgZ(1,"th",17),a._uU(2,"Name "),a._UZ(3,"p-sortIcon",18),a.qZA(),a.TgZ(4,"th"),a._uU(5,"Email"),a.qZA(),a.TgZ(6,"th"),a._uU(7,"On Created"),a.qZA(),a.TgZ(8,"th"),a._uU(9,"Role"),a.qZA(),a.qZA())}function q(e,r){if(1&e&&a._UZ(0,"p-tag",22),2&e){const e=a.oxw().$implicit;a.s9C("value",e.role)}}function T(e,r){if(1&e&&a._UZ(0,"p-tag",23),2&e){const e=a.oxw().$implicit;a.s9C("value",e.role)}}function h(e,r){if(1&e&&a._UZ(0,"p-tag",24),2&e){const e=a.oxw().$implicit;a.s9C("value",e.role)}}function f(e,r){if(1&e&&(a.TgZ(0,"tr"),a.TgZ(1,"td"),a._uU(2),a.qZA(),a.TgZ(3,"td"),a._uU(4),a.qZA(),a._UZ(5,"td"),a.TgZ(6,"td"),a.YNc(7,q,1,1,"p-tag",19),a.YNc(8,T,1,1,"p-tag",20),a.YNc(9,h,1,1,"p-tag",21),a.qZA(),a.qZA()),2&e){const e=r.$implicit;a.xp6(2),a.Oqu(e.displayName),a.xp6(2),a.Oqu(e.email),a.xp6(3),a.Q6J("ngIf","Manager"==e.role),a.xp6(1),a.Q6J("ngIf","Developer"==e.role),a.xp6(1),a.Q6J("ngIf","Designer"==e.role)}}const U=function(){return["/user/add"]},w=function(){return[10,25,50]},_=[{path:"",component:(()=>{class e{constructor(e,r,t,i,s){this.fb=e,this.authService=r,this.userService=t,this.router=i,this.messageService=s,this.currentUser=null,this.blocked=!1,this.loading=!0}ngOnInit(){this.currentUser=this.authService.currentUser.value,this.getAllUsers()}getAllUsers(){this.userService.getAllUsers(this.currentUser.uid).then(e=>{e.subscribe(e=>{console.log(e),this.users=e,this.loading=!1})})}}return e.\u0275fac=function(r){return new(r||e)(a.Y36(n.qu),a.Y36(u.e),a.Y36(l.K),a.Y36(s.F0),a.Y36(o.ez))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-list-user"]],features:[a._Bn([o.ez])],decls:22,vars:9,consts:[[1,"wd-page","wd-page-tabed"],[1,"wd-page-title"],[1,"wd-page-title-inner"],["aria-label","breadcrumb",1,"wd-breadcrumbs"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","#"],["aria-current","page",1,"breadcrumb-item","active"],[1,"wd-page-title-control"],[1,"btn","btn-primary","btn-rounded",3,"routerLink"],[1,"wd-page-body"],[1,"wd-panel"],[1,"wd-panel-body"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","paginator","rows","showCurrentPageReport","rowsPerPageOptions","loading"],["dt1",""],["pTemplate","header"],["pTemplate","body"],["pSortableColumn","displayName"],["field","code"],["severity","success",3,"value",4,"ngIf"],["severity","warning",3,"value",4,"ngIf"],["severity","info",3,"value",4,"ngIf"],["severity","success",3,"value"],["severity","warning",3,"value"],["severity","info",3,"value"]],template:function(e,r){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"h4"),a._uU(4,"Users"),a.qZA(),a.TgZ(5,"nav",3),a.TgZ(6,"ol",4),a.TgZ(7,"li",5),a.TgZ(8,"a",6),a._uU(9,"Dashboard"),a.qZA(),a.qZA(),a.TgZ(10,"li",7),a._uU(11,"Users"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(12,"div",8),a.TgZ(13,"button",9),a._uU(14,"Add User"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(15,"div",10),a.TgZ(16,"div",11),a.TgZ(17,"div",12),a.TgZ(18,"p-table",13,14),a.YNc(20,b,10,0,"ng-template",15),a.YNc(21,f,10,5,"ng-template",16),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(13),a.Q6J("routerLink",a.DdM(7,U)),a.xp6(5),a.Q6J("value",r.users)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",a.DdM(8,w))("loading",r.loading))},directives:[s.rH,v.iA,o.jx,v.lQ,v.fz,i.O5,A.V],styles:[""]}),e})()},{path:"add",component:g},{path:"edit/:id",component:m}];let y=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[s.Bz.forChild(_)],s.Bz]}),e})();var k=t(3176),S=t(2556);let I=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[i.ez,y,k.m,S.R]]}),e})()}}]);