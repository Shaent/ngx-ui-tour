"use strict";(self.webpackChunkngx_ui_tour=self.webpackChunkngx_ui_tour||[]).push([[882],{8882:(W,s,n)=>{n.r(s),n.d(s,{ConsoleModule:()=>D});var i=n(8583),d=n(3423),h=n(9579),c=n(9413),g=n(3564),v=n(6845),t=n(7716);let f=(()=>{class e{static forRoot(){return{ngModule:e,providers:[c.Q,g.Y]}}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({imports:[[v.oW,i.ez,h.dT]]}),e})();var u=n(7367),y=n(7297),a=n(1570),C=n(8388),m=n(9337),p=n(3737),x=n(9470),I=n(9282),S=n(8055),A=n(6130),T=n(3480),M=n(6004),E=n(4589),P=n(8240),B=n(5171),j=n(5104);function N(e,r){if(1&e){const o=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"p"),t.\u0275\u0275elementStart(1,"code"),t.\u0275\u0275text(2,"ngx-ui-tour"),t.\u0275\u0275elementEnd(),t.\u0275\u0275text(3," is a UI tour library built for Angular. It's inspired by "),t.\u0275\u0275elementStart(4,"a",2),t.\u0275\u0275text(5,"angular-ui-tour"),t.\u0275\u0275elementEnd(),t.\u0275\u0275text(6,". "),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(7,"p"),t.\u0275\u0275elementStart(8,"code"),t.\u0275\u0275text(9,"TourConsoleModule"),t.\u0275\u0275elementEnd(),t.\u0275\u0275text(10," is a minimal implementation of the tour UI that uses only the browser's JavaScript console to display tour steps. "),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(11,"p",3),t.\u0275\u0275text(12,"Use left/right arrow keys to navigate through the tour and escape key to end the tour."),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(13,"p"),t.\u0275\u0275elementStart(14,"button",4),t.\u0275\u0275listener("click",function(){return t.\u0275\u0275restoreView(o),t.\u0275\u0275nextContext().tourService.start()}),t.\u0275\u0275text(15," Start Demo Tour "),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd()}}function b(e,r){1&e&&(t.\u0275\u0275elementStart(0,"app-header",5),t.\u0275\u0275text(1,"Installation"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(2,"ol"),t.\u0275\u0275elementStart(3,"li"),t.\u0275\u0275elementStart(4,"code"),t.\u0275\u0275text(5,"npm install ngx-ui-tour-core ngx-ui-tour-console"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(6,"li"),t.\u0275\u0275text(7," Import "),t.\u0275\u0275elementStart(8,"code"),t.\u0275\u0275text(9,"TourConsoleModule.forRoot()"),t.\u0275\u0275elementEnd(),t.\u0275\u0275text(10," into your app module "),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(11,"li"),t.\u0275\u0275text(12," Make sure "),t.\u0275\u0275elementStart(13,"code"),t.\u0275\u0275text(14,"RouterModule"),t.\u0275\u0275elementEnd(),t.\u0275\u0275text(15," is imported in your app module "),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(16,"app-usage",6))}const F=function(){return["above","below","after","before"]};function O(e,r){1&e&&(t.\u0275\u0275elementStart(0,"app-step-config"),t.\u0275\u0275element(1,"app-placement-config",7),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(2,"app-tour-service-api"),t.\u0275\u0275element(3,"app-events")),2&e&&(t.\u0275\u0275advance(1),t.\u0275\u0275property("values",t.\u0275\u0275pureFunction0(1,F)))}function R(e,r){1&e&&t.\u0275\u0275element(0,"app-faq")}function U(e,r){1&e&&(t.\u0275\u0275element(0,"app-hotkeys"),t.\u0275\u0275element(1,"app-defaults"),t.\u0275\u0275element(2,"app-styling-active-tour-anchor"))}let Y=(()=>{class e{constructor(o,l){this.tourService=o,this.delayAfterNavigation=l,this.tourSteps=[{anchorId:"start.tour",content:"Welcome to the Ngx-UI-Tour tour!",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour",isAsync:!0},{anchorId:"installation",content:"First, install the library...",title:"Installation",route:"console/Setup",isAsync:!0},{anchorId:"usage",content:"...then use it.",title:"Usage",route:"console/Setup",isAsync:!0},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour",route:"console/Setup",isAsync:!0},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor",route:"console/API",isAsync:!0},{anchorId:"config.enableBackdrop",content:"You can enable backdrop to highlight active element.",title:"Backdrop",enableBackdrop:!0,route:"console/API"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route",route:"console/API"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End",route:"console/API"},{anchorId:"config.isAsync",content:"Mark your step as async if anchor element is added to DOM with a delay",title:"Wait for async event",route:"console/API"},{anchorId:"events",content:"You can subscribe to events",title:"Events",route:"console/API",isAsync:!0},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys",route:"console/Misc",isAsync:!0}]}ngOnInit(){this.tourService.initialize(this.tourSteps,{route:"console",delayAfterNavigation:this.delayAfterNavigation})}}return e.\u0275fac=function(o){return new(o||e)(t.\u0275\u0275directiveInject(c.Q),t.\u0275\u0275directiveInject(y.h1))},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["app-console"]],decls:7,vars:0,consts:[["header","Console","package","ngx-ui-tour-console"],["pageTab",""],["tuiLink","","target","_blank","tourAnchor","angular-ui-tour","href","http://benmarch.github.io/angular-ui-tour"],[1,"strong"],["tuiButton","","type","button","tourAnchor","start.tour",3,"click"],["tourAnchor","installation","id","installation"],["moduleName","TourConsoleModule"],["value","above",3,"values"]],template:function(o,l){1&o&&(t.\u0275\u0275elementStart(0,"tui-doc-page",0),t.\u0275\u0275template(1,N,16,0,"ng-template",1),t.\u0275\u0275template(2,b,17,0,"ng-template",1),t.\u0275\u0275template(3,O,4,2,"ng-template",1),t.\u0275\u0275template(4,R,1,0,"ng-template",1),t.\u0275\u0275template(5,U,3,0,"ng-template",1),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(6,"tour-hotkey-listener"))},directives:[a.qo,a.nj,C.Z,m.V,u.p,p.v,x.G,I.e,S.t,A.s,T.A,M.H,E.v,P.Q,B.w,j.J],styles:["app-header[_ngcontent-%COMP%]{margin-top:0}.strong[_ngcontent-%COMP%]{font-weight:bold}[_nghost-%COMP%]  .touranchor--is-active{outline:2px solid var(--tui-negative)}"]}),e})();var z=n(4466);let D=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({imports:[[i.ez,d.Bz.forChild((0,a.iY)(Y)),f.forRoot(),z.m.withAnchorDirectiveType(u.p),a.Lq,m.j,p.f]]}),e})()}}]);