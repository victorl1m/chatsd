"use strict";(self.webpackChunkLiveHelperChat=self.webpackChunkLiveHelperChat||[]).push([[335],{2335:function(e,t,o){o.r(t),o.d(t,{zoomImage:function(){return d}});var n=o(5671),i=o(9466),d=(o(2137),new(function(){function e(){(0,n.Z)(this,e),this.params={},this.attributes=null,this.chatEvents=null}return(0,i.Z)(e,[{key:"cleanup",value:function(){this.removeById("lhc-co-browsing-modal"),this.removeById("lhc-zoom-style")}},{key:"setParams",value:function(e,t,o){var n=this;this.params=e,this.attributes=t,this.chatEvents=o,this.addCss("body{overflow:hidden;}.lhc-modal *{box-sizing: border-box;}.lhc-modal { display: none; position: fixed; z-index: 2147483641 !important;padding-top: "+(1==t.isMobile?0:20)+"px;left: 0;top: 0;  width: 100%;height: 100%; overflow: auto; background-color: rgb(0,0,0);  background-color: rgba(0,0,0,0.4); }.lhc-modal-content {background-color: #fefefe; margin: auto; border: 1px solid #888; width: "+(1==t.isMobile?100:80)+"%;border-radius:5px; }#lhc-close { color: #aaaaaa;    font-size: 34px;    font-weight: bold;  }#lhc-close:hover,#lhc-close:focus {color: #000; text-decoration: none; cursor: pointer;}"),this.appendHTML('<div id="lhc-co-browsing-modal" style="display: block" class="lhc-modal"><div class="lhc-modal-content"><div style="padding:5px 20px;clear: both; text-align: right"><span id="lhc-close">&times;</span></div><div style="text-align: center;background-color:#cecece"><img id="lhc-zoom-image" src="'+e.src+'" style="max-width:100%;max-height: '+(window.innerHeight-140)+'px;" title="" /></div><div><div style="height: 49px; padding:10px;" ><span style="font-family: Arial; font-size: 18px;font-weight: bold;">'+e.title+'&nbsp;</span> <a target="_blank" href="'+e.src+'" style="font-family: Arial; text-decoration: none;background-color: #dddddd; display: inline-block; padding:5px; border:1px solid #CECECE; color: #6d6d6d; float: right">'+e.txt_download+"</a></div></div></div></div>");var i=document.getElementById("lhc-close"),d=document.getElementById("lhc-co-browsing-modal"),l=this;function a(e){e.target==d&&(l.cleanup(),window.removeEventListener("click",a),window.removeEventListener("resize",c))}function c(e){document.getElementById("lhc-zoom-image").style.maxHeight=window.innerHeight-140+"px"}i.onclick=function(){n.cleanup(),window.removeEventListener("click",a),window.removeEventListener("resize",c)},window.addEventListener("click",a),window.addEventListener("resize",c)}},{key:"removeById",value:function(e){var t=null;return!!(t=document.getElementById(e))&&t.parentNode.removeChild(t)}},{key:"appendHTML",value:function(e){var t=document.createDocumentFragment(),o=document.createElement("div");for(o.innerHTML=e;o.firstChild;)t.appendChild(o.firstChild);document.body.insertBefore(t,document.body.childNodes[0])}},{key:"addCss",value:function(e){var t=document.getElementsByTagName("head")[0],o=document.createElement("style");if(o.type="text/css",o.id="lhc-zoom-style",o.styleSheet)o.styleSheet.cssText=e;else{var n=document.createTextNode(e);o.appendChild(n)}t.appendChild(o)}}]),e}()))}}]);
//# sourceMappingURL=3f9e3c4f0187fdfaa568.js.map