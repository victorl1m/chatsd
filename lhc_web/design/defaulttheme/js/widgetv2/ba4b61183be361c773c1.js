"use strict";(self.webpackChunkLiveHelperChat=self.webpackChunkLiveHelperChat||[]).push([[417],{9417:function(e,t,n){n.r(t),n.d(t,{nodeJSChat:function(){return p}});var r=n(5861),s=n(5671),a=n(9466),i=n(4687),c=n.n(i),u=n(2137);function o(e){var t,n,r,s=2;for("undefined"!=typeof Symbol&&(n=Symbol.asyncIterator,r=Symbol.iterator);s--;){if(n&&null!=(t=e[n]))return t.call(e);if(r&&null!=(t=e[r]))return new h(t.call(e));n="@@asyncIterator",r="@@iterator"}throw new TypeError("Object is not async iterable")}function h(e){function t(e){if(Object(e)!==e)return Promise.reject(new TypeError(e+" is not an object."));var t=e.done;return Promise.resolve(e.value).then((function(e){return{value:e,done:t}}))}return h=function(e){this.s=e,this.n=e.next},h.prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(e){var n=this.s.return;return void 0===n?Promise.resolve({value:e,done:!0}):t(n.apply(this.s,arguments))},throw:function(e){var n=this.s.return;return void 0===n?Promise.reject(e):t(n.apply(this.s,arguments))}},new h(e)}var l=function(e){function t(){(0,s.Z)(this,t),this.params={},this.attributes=null,this.chatEvents=null}return(0,a.Z)(t,[{key:"setParams",value:function(t,s,a){return(e=e||(0,r.Z)(c().mark((function e(t,s,a){var i,h,l,p,v,f,b,k,m,x,d,w,y,_,g;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g=function(){return(i=i||(0,r.Z)(c().mark((function e(){var t,n,r,a,i,u,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=null==k,k=v.subscribe("uo_"+h),1!=t){e.next=36;break}e.prev=3,n=!1,r=!1,e.prev=6,i=o(k);case 8:return e.next=10,i.next();case 10:if(!(n=!(u=e.sent).done)){e.next=16;break}"check_message"==(l=u.value).op?s.eventEmitter.emitEvent("checkMessageOperator"):"is_online"==l.op&&v.transmitPublish("ous_"+b,{op:"vi_online",status:!0,vid:h});case 13:n=!1,e.next=8;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(6),r=!0,a=e.t0;case 22:if(e.prev=22,e.prev=23,!n||null==i.return){e.next=27;break}return e.next=27,i.return();case 27:if(e.prev=27,!r){e.next=30;break}throw a;case 30:return e.finish(27);case 31:return e.finish(22);case 32:e.next=36;break;case 34:e.prev=34,e.t1=e.catch(3);case 36:case"end":return e.stop()}}),e,null,[[3,34],[6,18,22,32],[23,,27,31]])})))).apply(this,arguments)},_=function(){var e;u.a.makeRequest(s.LHC_API.args.lhc_base_url+s.lang+"nodejshelper/tokenvisitor",{params:{ts:(new Date).getTime()}},(function(t){return(e=e||(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b=t.instance_id,e.next=3,Promise.all([v.invoke("login",{hash:t.hash,chanelName:f,instance_id:t.instance_id}),v.listener("authenticate").once()]);case 3:g();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}))},this.params=t,this.attributes=s,this.chatEvents=a,h=this.attributes.userSession.getVID(),l={protocolVersion:1,hostname:t.hostname,path:t.path,authTokenName:"socketCluster.authToken_vi"},""!=t.port&&(l.port=parseInt(t.port)),1==t.secure&&(l.secure=!0),p=n(3502),v=p.create(l),f="uo_"+h,b=this.attributes.instance_id,k=null,e.next=16,v.listener("connect").once();case 16:e.sent.isAuthenticated?(g(),s.LHC_API.args.check_messages=!1):_(),e.prev=18,m=!1,x=!1,e.prev=21,w=o(v.listener("deauthenticate"));case 23:return e.next=25,w.next();case 25:if(!(m=!(y=e.sent).done)){e.next=31;break}y.value,_();case 28:m=!1,e.next=23;break;case 31:e.next=37;break;case 33:e.prev=33,e.t0=e.catch(21),x=!0,d=e.t0;case 37:if(e.prev=37,e.prev=38,!m||null==w.return){e.next=42;break}return e.next=42,w.return();case 42:if(e.prev=42,!x){e.next=45;break}throw d;case 45:return e.finish(42);case 46:return e.finish(37);case 47:e.next=51;break;case 49:e.prev=49,e.t1=e.catch(18);case 51:case"end":return e.stop()}}),e,this,[[18,49],[21,33,37,47],[38,,42,46]])})))).apply(this,arguments)}}]),t}(),p=new l}}]);
//# sourceMappingURL=ba4b61183be361c773c1.js.map