(function(e){function t(t){for(var a,l,s=t[0],r=t[1],b=t[2],i=0,g=[];i<s.length;i++)l=s[i],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&g.push(o[l][0]),o[l]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);d&&d(t);while(g.length)g.shift()();return n.push.apply(n,b||[]),c()}function c(){for(var e,t=0;t<n.length;t++){for(var c=n[t],a=!0,s=1;s<c.length;s++){var r=c[s];0!==o[r]&&(a=!1)}a&&(n.splice(t--,1),e=l(l.s=c[0]))}return e}var a={},o={app:0},n=[];function l(t){if(a[t])return a[t].exports;var c=a[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.m=e,l.c=a,l.d=function(e,t,c){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(l.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(c,a,function(t){return e[t]}.bind(null,a));return c},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/RPG-Blogger/blog/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var b=0;b<s.length;b++)t(s[b]);var d=r;n.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"0943":function(e,t,c){},"2cc0":function(e,t,c){"use strict";c("da56")},3205:function(e,t,c){},"56d7":function(e,t,c){"use strict";c.r(t);var a=c("7a23");const o={id:"app"};function n(e,t,c,n,l,s){const r=Object(a["x"])("navbar"),b=Object(a["x"])("router-view");return Object(a["q"])(),Object(a["d"])("div",o,[Object(a["g"])(r),Object(a["g"])(b)])}const l=Object(a["F"])("data-v-73e402ad");Object(a["t"])("data-v-73e402ad");const s={class:"navbar navbar-expand-lg navbar-dark bg-dark"},r=Object(a["g"])("div",{class:"d-flex flex-column align-items-center"},null,-1),b=Object(a["g"])("div",{class:"text-danger text-shadow",id:"logo"},[Object(a["g"])("h3",null,"RPG Blogger")],-1),d=Object(a["g"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["g"])("span",{class:"navbar-toggler-icon"})],-1),i={class:"collapse navbar-collapse",id:"navbarText"},g={class:"navbar-nav mr-auto"},u={class:"nav-item"},m=Object(a["g"])("i",{class:"fas fa-dungeon"},null,-1),O=Object(a["f"])(" Home "),j={class:"nav-item"},p=Object(a["g"])("i",{class:"fas fa-dungeon"},null,-1),v=Object(a["f"])(" Profile "),f={class:"navbar-text"},y={key:1,class:"dropdown"},h={class:"mx-3"},w=Object(a["g"])("div",{class:"list-group-item list-group-item-action hoverable"}," Profile ",-1);Object(a["r"])();const C=l((function(e,t,c,o,n,C){const B=Object(a["x"])("router-link");return Object(a["q"])(),Object(a["d"])("nav",s,[Object(a["g"])(B,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:l(()=>[r,b]),_:1}),d,Object(a["g"])("div",i,[Object(a["g"])("ul",g,[Object(a["g"])("li",u,[Object(a["g"])(B,{to:{name:"Home"},class:"nav-link"},{default:l(()=>[m,O]),_:1})]),Object(a["g"])("li",j,[Object(a["g"])(B,{to:{name:"Profile"},class:"nav-link"},{default:l(()=>[p,v]),_:1})])]),Object(a["g"])("span",f,[o.user.isAuthenticated?(Object(a["q"])(),Object(a["d"])("div",y,[Object(a["g"])("div",{class:"btn btn-light dropdown-toggle",onClick:t[2]||(t[2]=e=>o.state.dropOpen=!o.state.dropOpen)},[Object(a["g"])("img",{src:o.user.picture,alt:"user photo",height:"40",class:"rounded"},null,8,["src"]),Object(a["g"])("span",h,Object(a["z"])(o.user.name),1)]),Object(a["g"])("div",{class:["dropdown-menu p-0 list-group w-100",{show:o.state.dropOpen}],onClick:t[4]||(t[4]=e=>o.state.dropOpen=!1)},[Object(a["g"])(B,{to:{name:"Profile"}},{default:l(()=>[w]),_:1}),Object(a["g"])("div",{class:"list-group-item list-group-item-action hoverable",onClick:t[3]||(t[3]=(...e)=>o.logout(...e))}," logout ")],2)])):(Object(a["q"])(),Object(a["d"])("button",{key:0,class:"btn btn-success",onClick:t[1]||(t[1]=(...e)=>o.login(...e))}," Login "))])])])}));var B=c("8816");const x=Object(a["u"])({user:{},profile:{},blogs:[],activeBlog:{},activeBlogComments:[],activeBlogId:""}),k="codeworksclassroom.auth0.com",_="pOXw2OGv1LsYi7LEBmDF04RLkXQvldml",P="https://codeworksclassroom.com";var A=c("6c02");const q=Object(a["F"])("data-v-d7c17a66");Object(a["t"])("data-v-d7c17a66");const T={class:"home container-fluid"},I={class:"row"},E={class:"col-1",id:"border"},z={class:"col-7 overflow-auto",id:"blog"},M=Object(a["g"])("div",{class:"col",id:"border"},null,-1),L=Object(a["g"])("div",{class:"row",id:"footer"},[Object(a["g"])("i",{class:"fas fa-dice-d20 fa-5x m-3"})],-1);Object(a["r"])();const F=q((function(e,t,c,o,n,l){const s=Object(a["x"])("CreateBlog"),r=Object(a["x"])("Blog");return Object(a["q"])(),Object(a["d"])("div",T,[Object(a["g"])("div",I,[Object(a["g"])("div",E,[Object(a["g"])(s,{class:"mt-5"})]),Object(a["g"])("div",z,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(o.blogs,e=>(Object(a["q"])(),Object(a["d"])(r,{"blog-props":e,key:e.id},null,8,["blog-props"]))),128))]),M]),L])}));var S=c("bc3a"),U=c.n(S);const H=U.a.create({baseURL:"https://cw-bloggr.herokuapp.com/api",timeout:3e3}),D=function(e){H.defaults.headers.authorization=e};class R{async getBlogs(){try{const e=await H.get("/blogs");x.blogs=e.data}catch(e){}}async createBlogs(e){try{await H.post("/blogs",e)}catch(t){}}async getActiveBlog(e){try{const t=await H.get("/blogs/"+e);x.activeBlog=t.data}catch(t){}}async removeActiveBlog(e){try{await H.delete("/blogs/"+e)}catch(t){}}}const G=new R,N=Object(a["F"])("data-v-601f64c8");Object(a["t"])("data-v-601f64c8");const V={class:"Blog p-1 bg-gray my-3"},J={class:"d-flex justify-content-end bg-gray"};Object(a["r"])();const W=N((function(e,t,c,o,n,l){return Object(a["q"])(),Object(a["d"])("div",V,[Object(a["g"])("h3",{onClick:t[1]||(t[1]=(...e)=>o.setActiveBlog(...e))},Object(a["z"])(o.blog.title),1),Object(a["g"])("h5",J," User: "+Object(a["z"])(o.blog.creatorEmail),1)])}));var X={name:"Blog",props:{blogProps:Object},setup(e){const t=Object(A["d"])();return{blog:Object(a["b"])(()=>e.blogProps),setActiveBlog(){t.push({name:"ActiveBlog",params:{blogId:e.blogProps._id}})}}},components:{}};c("7a5e");X.render=W,X.__scopeId="data-v-601f64c8";var Q=X;const Y=Object(a["F"])("data-v-22deaad4");Object(a["t"])("data-v-22deaad4");const K={class:"create-blog"},Z=Object(a["g"])("button",{type:"button",class:"btn btn-dark","data-toggle":"modal","data-target":"#exampleModalLong"},[Object(a["g"])("i",{class:"fas fa-scroll"}),Object(a["f"])(" Post ")],-1),$={class:"modal fade",id:"exampleModalLong",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"},ee={class:"modal-dialog",role:"document"},te={class:"modal-content"},ce=Object(a["g"])("div",{class:"modal-header"},[Object(a["g"])("h5",{class:"modal-title",id:"exampleModalLongTitle"}," Create a Post... "),Object(a["g"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(a["g"])("span",{"aria-hidden":"true"},"×")])],-1),ae={class:"modal-body"},oe=Object(a["g"])("div",{class:"modal-footer"},[Object(a["g"])("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close "),Object(a["g"])("button",{type:"submit",class:"btn btn-primary"},"Post")],-1);Object(a["r"])();const ne=Y((function(e,t,c,o,n,l){return Object(a["q"])(),Object(a["d"])("div",K,[Z,Object(a["g"])("div",$,[Object(a["g"])("div",ee,[Object(a["g"])("div",te,[Object(a["g"])("form",{class:"form-group",onSubmit:t[3]||(t[3]=Object(a["E"])((...e)=>o.createBlog(...e),["prevent"]))},[ce,Object(a["g"])("div",ae,[Object(a["D"])(Object(a["g"])("input",{type:"text",class:"form-control",name:"",id:"","aria-describedby":"titleId",placeholder:"Title...","onUpdate:modelValue":t[1]||(t[1]=e=>o.state.newBlog.title=e)},null,512),[[a["B"],o.state.newBlog.title]]),Object(a["D"])(Object(a["g"])("textarea",{class:"form-control rounded-0 mt-3",rows:"15",name:"",id:"","aria-describedby":"Body",placeholder:"Content goes here...","onUpdate:modelValue":t[2]||(t[2]=e=>o.state.newBlog.body=e)},null,512),[[a["B"],o.state.newBlog.body]])]),oe],32)])])])])}));var le={name:"CreateBlog",setup(){const e=Object(a["u"])({newBlog:{}});return{state:e,blogs:Object(a["b"])(()=>x.blogs),createBlog(){G.createBlogs(e.newBlog)}}},components:{}};le.render=ne,le.__scopeId="data-v-22deaad4";var se=le,re={name:"Home",components:{Blog:Q,CreateBlog:se},setup(){return Object(a["o"])(()=>{G.getBlogs()}),{blogs:Object(a["b"])(()=>x.blogs)}}};c("2cc0");re.render=F,re.__scopeId="data-v-d7c17a66";var be=re;const de=Object(a["F"])("data-v-7c6b5f10");Object(a["t"])("data-v-7c6b5f10");const ie={class:"about text-center"};Object(a["r"])();const ge=de((function(e,t,c,o,n,l){return Object(a["q"])(),Object(a["d"])("div",ie,[Object(a["g"])("h1",null,"Welcome "+Object(a["z"])(o.profile.name),1),Object(a["g"])("img",{class:"rounded",src:o.profile.picture,alt:""},null,8,["src"]),Object(a["g"])("p",null,Object(a["z"])(o.profile.email),1)])}));var ue={name:"Profile",setup(){return{profile:Object(a["b"])(()=>x.profile)}}};c("f8af");ue.render=ge,ue.__scopeId="data-v-7c6b5f10";var me=ue;const Oe=Object(a["F"])("data-v-9b65d64c");Object(a["t"])("data-v-9b65d64c");const je={class:"container-fluid"},pe={class:"row"},ve={class:"col-1",id:"border"},fe={class:"btn btn-dark mt-5"},ye={class:"col-7 overflow-auto",id:"post"},he={key:0,class:"activeBlog d-flex flex-column align-items-center"},we=Object(a["g"])("div",{class:"col",id:"border"},null,-1),Ce=Object(a["g"])("div",{class:"row",id:"footer"},[Object(a["g"])("i",{class:"fas fa-dice-d20 fa-5x m-3"})],-1);Object(a["r"])();const Be=Oe((function(e,t,c,o,n,l){const s=Object(a["x"])("CreateBlog"),r=Object(a["x"])("CreateComment"),b=Object(a["x"])("Comment");return Object(a["q"])(),Object(a["d"])("div",je,[Object(a["g"])("div",pe,[Object(a["g"])("div",ve,[Object(a["g"])(s,{class:"mt-5"}),Object(a["g"])(r,{class:"mt-5"}),Object(a["g"])("button",fe,[Object(a["g"])("i",{class:"fas fa-skull-crossbones",onClick:t[1]||(t[1]=e=>o.deleteActiveBlog(o.blog._id))}," Delete")])]),Object(a["g"])("div",ye,[o.blog.title?(Object(a["q"])(),Object(a["d"])("div",he,[Object(a["g"])("h2",null,Object(a["z"])(o.blog.title),1),Object(a["g"])("h4",null,Object(a["z"])(o.blog.body),1),Object(a["g"])("h6",null,"By: "+Object(a["z"])(o.blog.creatorEmail),1)])):Object(a["e"])("",!0),(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(o.comments,e=>(Object(a["q"])(),Object(a["d"])(b,{"comment-props":e,key:e.id},null,8,["comment-props"]))),128))]),we]),Ce])}));class xe{async getComments(e){try{const t=await H.get("/blogs/"+e+"/comments");x.activeBlogComments=t.data}catch(t){}}async createComment(e){try{await H.post("/comments",e);const t=e.blog;this.getComments(t)}catch(t){}}async removeActiveComment(e){try{const t=e.blog,c=e._id;await H.delete("/comments/"+c),this.getComments(t)}catch(t){}}}const ke=new xe,_e=Object(a["F"])("data-v-a29dfdec");Object(a["t"])("data-v-a29dfdec");const Pe={class:"Comment row py-2"},Ae={class:"col-7 bg-gray"},qe={class:" p-2 my-auto"},Te={class:"my-auto d-flex justify-content-end bg-gray rounded-top pr-2"},Ie={class:"col-1 my-auto"},Ee={key:0,class:"btn-dark"};Object(a["r"])();const ze=_e((function(e,t,c,o,n,l){return Object(a["q"])(),Object(a["d"])("div",Pe,[Object(a["g"])("div",Ae,[Object(a["g"])("h5",qe,Object(a["z"])(o.comment.body),1),Object(a["g"])("div",Te,[Object(a["g"])("h5",null,Object(a["z"])(o.comment.creatorEmail),1)])]),Object(a["g"])("div",Ie,[o.comment.creator.id==o.profile.id?(Object(a["q"])(),Object(a["d"])("button",Ee,[Object(a["g"])("i",{class:"fas fa-skull-crossbones",onClick:t[1]||(t[1]=e=>o.deleteActiveComment(o.comment))})])):Object(a["e"])("",!0)])])}));var Me={name:"Comment",props:{commentProps:Object},setup(e){return{comment:Object(a["b"])(()=>e.commentProps),profile:Object(a["b"])(()=>x.profile),deleteActiveComment(e){ke.removeActiveComment(e)}}},components:{}};c("9851");Me.render=ze,Me.__scopeId="data-v-a29dfdec";var Le=Me;const Fe=Object(a["F"])("data-v-0e90e927");Object(a["t"])("data-v-0e90e927");const Se={class:"create-comment"},Ue=Object(a["g"])("button",{type:"button",class:"btn btn-dark","data-toggle":"modal","data-target":"#createModal"},[Object(a["g"])("i",{class:"fas fa-scroll"}),Object(a["f"])(" Reply ")],-1),He={class:"modal fade",id:"createModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"},De={class:"modal-dialog",role:"document"},Re={class:"modal-content"},Ge=Object(a["g"])("div",{class:"modal-header"},[Object(a["g"])("h5",{class:"modal-title",id:"exampleModalLongTitle"}," Create a Comment... "),Object(a["g"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(a["g"])("span",{"aria-hidden":"true"},"×")])],-1),Ne={class:"modal-body"},Ve=Object(a["g"])("div",{class:"modal-footer"},[Object(a["g"])("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close "),Object(a["g"])("button",{type:"submit",class:"btn btn-primary"},"Comment")],-1);Object(a["r"])();const Je=Fe((function(e,t,c,o,n,l){return Object(a["q"])(),Object(a["d"])("div",Se,[Ue,Object(a["g"])("div",He,[Object(a["g"])("div",De,[Object(a["g"])("div",Re,[Object(a["g"])("form",{class:"form-group",onSubmit:t[2]||(t[2]=Object(a["E"])(e=>o.createComment(o.blog._id),["prevent"]))},[Ge,Object(a["g"])("div",Ne,[Object(a["D"])(Object(a["g"])("textarea",{class:"form-control rounded-0 mt-3",rows:"15",name:"",id:"","aria-describedby":"Body",placeholder:"Content goes here...","onUpdate:modelValue":t[1]||(t[1]=e=>o.state.newComment.body=e)},null,512),[[a["B"],o.state.newComment.body]])]),Ve],32)])])])])}));var We={name:"CreateBlog",setup(){const e=Object(a["u"])({newComment:{}});return{state:e,blog:Object(a["b"])(()=>x.activeBlog),comments:Object(a["b"])(()=>x.activeBlogComments),createComment(t){e.newComment.blog=t,ke.createComment(e.newComment,t)}}},components:{}};We.render=Je,We.__scopeId="data-v-0e90e927";var Xe=We,Qe={name:"ActiveBlog",components:{Comment:Le,CreateComment:Xe,CreateBlog:se},setup(){const e=Object(A["c"])();return Object(a["o"])(()=>{G.getActiveBlog(e.params.blogId),ke.getComments(e.params.blogId)}),{blog:Object(a["b"])(()=>x.activeBlog),comments:Object(a["b"])(()=>x.activeBlogComments),deleteActiveBlog(e){G.removeActiveBlog(e)}}}};c("cfca");Qe.render=Be,Qe.__scopeId="data-v-9b65d64c";var Ye=Qe;const Ke=[{path:"/blog",name:"Home",component:be,beforeEnter:B["a"].authGuard},{path:"/blog/:blogId",name:"ActiveBlog",component:Ye},{path:"/profile",name:"Profile",component:me,beforeEnter:B["a"].authGuard}],Ze=Object(A["a"])({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:Object(A["b"])(),routes:Ke});var $e=Ze;class et{async getProfile(){try{const e=await H.get("/profile");x.profile=e.data}catch(e){}}}const tt=new et,ct=B["a"].initialize({domain:k,clientId:_,audience:P,onRedirectCallback:e=>{$e.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}});ct.on(ct.AUTH_EVENTS.AUTHENTICATED,(async function(){D(ct.bearer),await tt.getProfile(),x.user=ct.user}));var at={name:"Navbar",setup(){const e=Object(a["u"])({dropOpen:!1});return{state:e,user:Object(a["b"])(()=>x.user),async login(){ct.loginWithPopup()},async logout(){await ct.logout({returnTo:window.location.origin})}}}};c("c908");at.render=C,at.__scopeId="data-v-73e402ad";var ot=at,nt={name:"App",setup(){return{appState:Object(a["b"])(()=>x)}},components:{Navbar:ot}};c("9cdc");nt.render=n;var lt=nt;Object(a["c"])(lt).use($e).mount("#app")},"7a5e":function(e,t,c){"use strict";c("87ad")},"87ad":function(e,t,c){},"918a":function(e,t,c){},9851:function(e,t,c){"use strict";c("0943")},"9cdc":function(e,t,c){"use strict";c("c701")},b41f:function(e,t,c){},c701:function(e,t,c){},c908:function(e,t,c){"use strict";c("3205")},cfca:function(e,t,c){"use strict";c("918a")},da56:function(e,t,c){},f8af:function(e,t,c){"use strict";c("b41f")}});