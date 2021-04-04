function browserdetect(){var a=navigator.userAgent.toLowerCase();this.ieVer=(this.isIE=-1<a.indexOf("msie"))?/msie\s(\d\.\d)/.exec(a)[1]:0;this.isMoz=-1!=a.indexOf("firefox");this.isSafari=-1!=a.indexOf("safari");this.quirksMode=this.isIE&&(!document.compatMode||-1<document.compatMode.indexOf("BackCompat"));this.isOp="opera"in window;this.isWebKit=-1!=a.indexOf("webkit");this.get_style=this.isIE?function(a,c){if(!(c in a.currentStyle))return"";var d=/^([\d.]+)(\w*)/.exec(a.currentStyle[c]);if(!d)return a.currentStyle[c];
if(0==d[1])return"0";if(d[2]&&"px"!==d[2]){var e=a.style.left,f=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=d[1]+d[2];d[0]=a.style.pixelLeft;a.style.left=e;a.runtimeStyle.left=f}return d[0]}:function(a,c){c=c.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();return document.defaultView.getComputedStyle(a,"").getPropertyValue(c)}}var curvyBrowser=new browserdetect;if(curvyBrowser.isIE)try{document.execCommand("BackgroundImageCache",!1,!0)}catch(e$$5){}
function curvyCnrSpec(a){this.selectorText=a;this.tlR=this.trR=this.blR=this.brR=0;this.tlu=this.tru=this.blu=this.bru="";this.antiAlias=!0}curvyCnrSpec.prototype.setcorner=function(a,b,c,d){a?(propname=a.charAt(0)+b.charAt(0),this[propname+"R"]=parseInt(c),this[propname+"u"]=d):(this.tlR=this.trR=this.blR=this.brR=parseInt(c),this.tlu=this.tru=this.blu=this.bru=d)};
curvyCnrSpec.prototype.get=function(a){if(/^(t|b)(l|r)(R|u)$/.test(a))return this[a];if(/^(t|b)(l|r)Ru$/.test(a))return a=a.charAt(0)+a.charAt(1),this[a+"R"]+this[a+"u"];if(/^(t|b)Ru?$/.test(a)){var b=a.charAt(0),b=b+(this[b+"lR"]>this[b+"rR"]?"l":"r"),b=this[b+"R"];3===a.length&&"u"===a.charAt(2)&&(b+=this.u);return b}throw Error("Don't recognize property "+a);};
curvyCnrSpec.prototype.radiusdiff=function(a){if("t"!==a&&"b"!==a)throw Error("Param must be 't' or 'b'");return Math.abs(this[a+"lR"]-this[a+"rR"])};curvyCnrSpec.prototype.setfrom=function(a){this.tlu=this.tru=this.blu=this.bru="px";if("tl"in a)this.tlR=a.tl.radius;if("tr"in a)this.trR=a.tr.radius;if("bl"in a)this.blR=a.bl.radius;if("br"in a)this.brR=a.br.radius;if("antiAlias"in a)this.antiAlias=a.antiAlias};
curvyCnrSpec.prototype.cloneOn=function(a){var b=["tl","tr","bl","br"],c=0,d,e;for(d in b)if(!isNaN(d)&&(e=this[b[d]+"u"],""!==e&&"px"!==e)){c=new curvyCnrSpec;break}if(c){var f,g,h=curvyBrowser.get_style(a,"left");for(d in b)if(!isNaN(d)){f=b[d];e=this[f+"u"];g=this[f+"R"];if("px"!==e)h=a.style.left,a.style.left=g+e,g=a.style.pixelLeft,a.style.left=h;c[f+"R"]=g;c[f+"u"]="px"}a.style.left=h}else c=this;return c};
curvyCnrSpec.prototype.radiusSum=function(a){if("t"!==a&&"b"!==a)throw Error("Param must be 't' or 'b'");return this[a+"lR"]+this[a+"rR"]};curvyCnrSpec.prototype.radiusCount=function(a){var b=0;this[a+"lR"]&&++b;this[a+"rR"]&&++b;return b};curvyCnrSpec.prototype.cornerNames=function(){var a=[];this.tlR&&a.push("tl");this.trR&&a.push("tr");this.blR&&a.push("bl");this.brR&&a.push("br");return a};
function operasheet(a){var a=document.styleSheets.item(a).ownerNode.text,a=a.replace(/\/\*(\n|\r|.)*?\*\//g,""),b=RegExp("^s*([\\w.#][-\\w.#, ]+)[\\n\\s]*\\{([^}]+border-((top|bottom)-(left|right)-)?radius[^}]*)\\}","mg"),c;for(this.rules=[];null!==(c=b.exec(a));){for(var d=RegExp("(..)border-((top|bottom)-(left|right)-)?radius:\\s*([\\d.]+)(in|em|px|ex|pt)","g"),e,f=new curvyCnrSpec(c[1]);null!==(e=d.exec(c[2]));)"z-"!==e[1]&&f.setcorner(e[3],e[4],e[5],e[6]);this.rules.push(f)}}
operasheet.contains_border_radius=function(a){return/border-((top|bottom)-(left|right)-)?radius/.test(document.styleSheets.item(a).ownerNode.text)};
function curvyCorners(){var a,b,c,d,e;if("object"!==typeof arguments[0])throw curvyCorners.newError("First parameter of curvyCorners() must be an object.");if(arguments[0]instanceof curvyCnrSpec){if(d=arguments[0],!d.selectorText&&"string"===typeof arguments[1])d.selectorText=arguments[1]}else{if("object"!==typeof arguments[1]&&"string"!==typeof arguments[1])throw curvyCorners.newError("Second parameter of curvyCorners() must be an object or a class name.");b=arguments[1];"string"!==typeof b&&(b=
"");""!==b&&"."!==b.charAt(0)&&"autoPad"in arguments[0]&&(b="."+b);d=new curvyCnrSpec(b);d.setfrom(arguments[0])}if(d.selectorText){e=0;var f=d.selectorText.replace(/\s+$/,"").split(/,\s*/);c=[];for(a=0;a<f.length;++a){var g;b=f[a];b=b.split("#");g=(2===b.length?"#":"")+b.pop();var h=g.split(" ");switch(g.charAt(0)){case "#":b=1===h.length?g:h[0];b=document.getElementById(b.substr(1));null===b?curvyCorners.alert("No object with ID "+g+" exists yet.\nCall curvyCorners(settings, obj) when it is created."):
1===h.length?c.push(b):c=c.concat(curvyCorners.getElementsByClass(h[1],b));break;default:if(1===h.length)c=c.concat(curvyCorners.getElementsByClass(g));else{g=curvyCorners.getElementsByClass(h[0]);for(b=0;b<g.length;++b)c=c.concat(curvyCorners.getElementsByClass(h[1],g))}}}}else e=1,c=arguments;a=e;for(b=c.length;a<b;++a)if(c[a]&&(!("IEborderRadius"in c[a].style)||"set"!=c[a].style.IEborderRadius)){if(c[a].className&&-1!==c[a].className.indexOf("curvyRedraw")){if("undefined"===typeof curvyCorners.redrawList)curvyCorners.redrawList=
[];curvyCorners.redrawList.push({node:c[a],spec:d,copy:c[a].cloneNode(!1)})}c[a].style.IEborderRadius="set";(new curvyObject(d,c[a])).applyCorners()}}curvyCorners.prototype.applyCornersToAll=function(){curvyCorners.alert("This function is now redundant. Just call curvyCorners(). See documentation.")};
curvyCorners.redraw=function(){if(curvyBrowser.isOp||curvyBrowser.isIE){if(!curvyCorners.redrawList)throw curvyCorners.newError("curvyCorners.redraw() has nothing to redraw.");var a=curvyCorners.bock_redraw;curvyCorners.block_redraw=!0;for(var b in curvyCorners.redrawList)if(!isNaN(b)){var c=curvyCorners.redrawList[b];if(c.node.clientWidth){for(var d=c.copy.cloneNode(!1),e=c.node.firstChild;null!=e&&!("autoPadDiv"===e.className);e=e.nextSibling);if(!e){curvyCorners.alert("Couldn't find autoPad DIV");
break}for(c.node.parentNode.replaceChild(d,c.node);e.firstChild;)d.appendChild(e.removeChild(e.firstChild));c=new curvyObject(c.spec,c.node=d);c.applyCorners()}}curvyCorners.block_redraw=a}};
curvyCorners.adjust=function(a,b,c){if(curvyBrowser.isOp||curvyBrowser.isIE){if(!curvyCorners.redrawList)throw curvyCorners.newError("curvyCorners.adjust() has nothing to adjust.");var d,e=curvyCorners.redrawList.length;for(d=0;d<e&&!(curvyCorners.redrawList[d].node===a);++d);if(d===e)throw curvyCorners.newError("Object not redrawable");a=curvyCorners.redrawList[d].copy}-1===b.indexOf(".")?a[b]=c:eval("obj."+b+"='"+c+"'")};curvyCorners.handleWinResize=function(){curvyCorners.block_redraw||curvyCorners.redraw()};
curvyCorners.setWinResize=function(a){curvyCorners.block_redraw=!a};curvyCorners.newError=function(a){return Error("curvyCorners Error:\n"+a)};curvyCorners.alert=function(a){("undefined"===typeof curvyCornersVerbose||curvyCornersVerbose)&&alert(a)};
function curvyObject(a,b){var c;this.box=b;this.settings=a;this.topContainer=this.bottomContainer=this.shell=c=null;var d=this.box.clientWidth;if(!d&&curvyBrowser.isIE)this.box.style.zoom=1,d=this.box.clientWidth;if(!d){if(!this.box.parentNode)throw this.newError("box has no parent!");for(c=this.box;;c=c.parentNode){if(!c||"BODY"===c.tagName){this.applyCorners=function(){};curvyCorners.alert(this.errmsg("zero-width box with no accountable parent","warning"));return}if("none"===c.style.display)break}c.style.display=
"block";d=this.box.clientWidth}a instanceof curvyCnrSpec?this.spec=a.cloneOn(this.box):(this.spec=new curvyCnrSpec(""),this.spec.setfrom(this.settings));var e=curvyBrowser.get_style(this.box,"borderTopWidth"),f=curvyBrowser.get_style(this.box,"borderBottomWidth"),g=curvyBrowser.get_style(this.box,"borderLeftWidth"),h=curvyBrowser.get_style(this.box,"borderRightWidth"),n=curvyBrowser.get_style(this.box,"borderTopColor"),p=curvyBrowser.get_style(this.box,"borderBottomColor"),q=curvyBrowser.get_style(this.box,
"borderLeftColor"),A=curvyBrowser.get_style(this.box,"backgroundColor"),B=curvyBrowser.get_style(this.box,"backgroundImage"),C=curvyBrowser.get_style(this.box,"backgroundRepeat");if(this.box.currentStyle&&this.box.currentStyle.backgroundPositionX)var o=curvyBrowser.get_style(this.box,"backgroundPositionX"),s=curvyBrowser.get_style(this.box,"backgroundPositionY");else o=curvyBrowser.get_style(this.box,"backgroundPosition"),o=o.split(" "),s=o[1],o=o[0];var k=curvyBrowser.get_style(this.box,"position"),
D=curvyBrowser.get_style(this.box,"paddingTop"),E=curvyBrowser.get_style(this.box,"paddingBottom"),F=curvyBrowser.get_style(this.box,"paddingLeft"),G=curvyBrowser.get_style(this.box,"paddingRight");curvyBrowser.get_style(this.box,"border");filter=7<curvyBrowser.ieVer?curvyBrowser.get_style(this.box,"filter"):null;var t=this.spec.get("tR"),u=this.spec.get("bR"),r=function(a){if("number"===typeof a)return a;if("string"!==typeof a)throw Error("unexpected styleToNPx type "+typeof a);var c=/^[-\d.]([a-z]+)$/.exec(a);
if(c&&"px"!=c[1])throw Error("Unexpected unit "+c[1]);if(isNaN(a=parseInt(a)))a=0;return a};try{this.borderWidth=r(e),this.borderWidthB=r(f),this.borderWidthL=r(g),this.borderWidthR=r(h),this.boxColour=curvyObject.format_colour(A),this.topPadding=r(D),this.bottomPadding=r(E),this.leftPadding=r(F),this.rightPadding=r(G),this.boxWidth=d,this.boxHeight=this.box.clientHeight,this.borderColour=curvyObject.format_colour(n),this.borderColourB=curvyObject.format_colour(p),this.borderColourL=curvyObject.format_colour(q),
this.borderString=this.borderWidth+"px solid "+this.borderColour,this.borderStringB=this.borderWidthB+"px solid "+this.borderColourB,this.backgroundImage="none"!=B?B:"",this.backgroundRepeat=C}catch(y){throw this.newError("getMessage"in y?y.getMessage():y.message);}var v=this.boxHeight,w=d;curvyBrowser.isOp&&(o=r(o),s=r(s),o&&(d=w+this.borderWidthL+this.borderWidthR,o>d&&(o=d),o=100*(d/o)+"%"),s&&(d=v+this.borderWidth+this.borderWidthB,s>d&&(s=d),s=100*(d/s)+"%"));curvyBrowser.quirksMode||(this.boxWidth-=
this.leftPadding+this.rightPadding,this.boxHeight-=this.topPadding+this.bottomPadding);this.contentContainer=document.createElement("div");if(filter)this.contentContainer.style.filter=filter;for(;this.box.firstChild;)this.contentContainer.appendChild(this.box.removeChild(this.box.firstChild));if("absolute"!=k)this.box.style.position="relative";this.box.style.padding="0";this.box.style.border=this.box.style.backgroundImage="none";this.box.style.backgroundColor="transparent";this.box.style.width=w+
this.borderWidthL+this.borderWidthR+"px";this.box.style.height=v+this.borderWidth+this.borderWidthB+"px";k=document.createElement("div");k.style.position="absolute";if(filter)k.style.filter=filter;k.style.width=curvyBrowser.quirksMode?w+this.borderWidthL+this.borderWidthR+"px":w+"px";k.style.height=0>=v+this.borderWidth+this.borderWidthB-t-u?"0":v+this.borderWidth+this.borderWidthB-t-u+"px";k.style.padding="0";k.style.top=t+"px";k.style.left="0";if(this.borderWidthL)k.style.borderLeft=this.borderWidthL+
"px solid "+this.borderColourL;if(this.borderWidth&&!t)k.style.borderTop=this.borderWidth+"px solid "+this.borderColour;if(this.borderWidthR)k.style.borderRight=this.borderWidthR+"px solid "+this.borderColourL;if(this.borderWidthB&&!u)k.style.borderBottom=this.borderWidthB+"px solid "+this.borderColourB;k.style.backgroundColor=A;k.style.backgroundImage=this.backgroundImage;k.style.backgroundRepeat=this.backgroundRepeat;this.shell=this.box.appendChild(k);d=curvyBrowser.get_style(this.shell,"width");
if(""===d||"auto"===d||-1!==d.indexOf("%"))throw this.newError("Shell width is "+d);this.boxWidth=""!=d&&"auto"!=d&&-1==d.indexOf("%")?parseInt(d):this.shell.clientWidth;this.applyCorners=function(){if(this.backgroundObject){var a=function(a,c,b){return 0===a?0:"right"===a||"bottom"===a?b-c:"center"===a?(b-c)/2:0<a.indexOf("%")?100*(b-c)/parseInt(a):r(a)};this.backgroundPosX=a(o,this.backgroundObject.width,w);this.backgroundPosY=a(s,this.backgroundObject.height,v)}else if(this.backgroundImage)this.backgroundPosX=
r(o),this.backgroundPosY=r(s);if(t)a=document.createElement("div"),a.style.width=this.boxWidth+"px",a.style.fontSize="1px",a.style.overflow="hidden",a.style.position="absolute",a.style.paddingLeft=this.borderWidth+"px",a.style.paddingRight=this.borderWidth+"px",a.style.height=t+"px",a.style.top=-t+"px",a.style.left=-this.borderWidthL+"px",this.topContainer=this.shell.appendChild(a);if(u)a=document.createElement("div"),a.style.width=this.boxWidth+"px",a.style.fontSize="1px",a.style.overflow="hidden",
a.style.position="absolute",a.style.paddingLeft=this.borderWidthB+"px",a.style.paddingRight=this.borderWidthB+"px",a.style.height=u+"px",a.style.bottom=-u+"px",a.style.left=-this.borderWidthL+"px",this.bottomContainer=this.shell.appendChild(a);var a=this.spec.cornerNames(),b;for(b in a)if(!isNaN(b)){var d=a[b],e=this.spec[d+"R"],g,f,h;"tr"==d||"tl"==d?(g=this.borderColour,h=this.borderWidth):(g=this.borderColourB,h=this.borderWidthB);f=e-h;var m=document.createElement("div");m.style.height=this.spec.get(d+
"Ru");m.style.width=this.spec.get(d+"Ru");m.style.position="absolute";m.style.fontSize="1px";m.style.overflow="hidden";var l,i,n,k=filter?parseInt(/alpha\(opacity.(\d+)\)/.exec(filter)[1]):100;for(l=0;l<e;++l){var p=l+1>=f?-1:Math.floor(Math.sqrt(Math.pow(f,2)-Math.pow(l+1,2)))-1;if(f!=e)var j=l>=f?-1:Math.ceil(Math.sqrt(Math.pow(f,2)-Math.pow(l,2))),q=l+1>=e?-1:Math.floor(Math.sqrt(Math.pow(e,2)-Math.pow(l+1,2)))-1;var x=l>=e?-1:Math.ceil(Math.sqrt(Math.pow(e,2)-Math.pow(l,2)));-1<p&&this.drawPixel(l,
0,this.boxColour,k,p+1,m,!0,e);if(f!=e)if(this.spec.antiAlias){for(i=p+1;i<j;++i)""!=this.backgroundImage?(n=100*curvyObject.pixelFraction(l,i,f),this.drawPixel(l,i,g,k,1,m,30<=n,e)):"transparent"!==this.boxColour?(n=curvyObject.BlendColour(this.boxColour,g,curvyObject.pixelFraction(l,i,f)),this.drawPixel(l,i,n,k,1,m,!1,e)):this.drawPixel(l,i,g,k>>1,1,m,!1,e);q>=j&&(-1==j&&(j=0),this.drawPixel(l,j,g,k,q-j+1,m,!1,0));n=g;i=q}else q>p&&this.drawPixel(l,p+1,g,k,q-p,m,!1,0);else n=this.boxColour,i=p;
if(this.spec.antiAlias)for(;++i<x;)this.drawPixel(l,i,n,curvyObject.pixelFraction(l,i,e)*k,1,m,0>=h,e)}g=0;for(f=m.childNodes.length;g<f;++g){h=m.childNodes[g];l=parseInt(h.style.top);k=parseInt(h.style.left);x=parseInt(h.style.height);if("tl"==d||"bl"==d)h.style.left=e-k-1+"px";if("tr"==d||"tl"==d)h.style.top=e-x-l+"px";h.style.backgroundRepeat=this.backgroundRepeat;if(this.backgroundImage)switch(d){case "tr":h.style.backgroundPosition=this.backgroundPosX-this.borderWidthL+e-w-k+"px "+(this.backgroundPosY+
x+l+this.borderWidth-e)+"px";break;case "tl":h.style.backgroundPosition=this.backgroundPosX-e+k+this.borderWidthL+"px "+(this.backgroundPosY-e+x+l+this.borderWidth)+"px";break;case "bl":h.style.backgroundPosition=this.backgroundPosX-e+k+1+this.borderWidthL+"px "+(this.backgroundPosY-v-this.borderWidth+(curvyBrowser.quirksMode?l:-l)+e)+"px";break;case "br":h.style.backgroundPosition=curvyBrowser.quirksMode?this.backgroundPosX+this.borderWidthL-w+e-k+"px "+(this.backgroundPosY-v-this.borderWidth+l+
e)+"px":this.backgroundPosX-this.borderWidthL-w+e-k+"px "+(this.backgroundPosY-v-this.borderWidth+e-l)+"px"}}switch(d){case "tl":m.style.top=m.style.left="0";this.topContainer.appendChild(m);break;case "tr":m.style.top=m.style.right="0";this.topContainer.appendChild(m);break;case "bl":m.style.bottom=m.style.left="0";this.bottomContainer.appendChild(m);break;case "br":m.style.bottom=m.style.right="0",this.bottomContainer.appendChild(m)}}b={t:this.spec.radiusdiff("t"),b:this.spec.radiusdiff("b")};for(z in b)if("function"!==
typeof z&&this.spec.get(z+"R")){if(b[z])switch(this.backgroundImage&&this.spec.radiusSum(z)!==b[z]&&curvyCorners.alert(this.errmsg("Not supported: unequal non-zero top/bottom radii with background image")),i=this.spec[z+"lR"]<this.spec[z+"rR"]?z+"l":z+"r",j=document.createElement("div"),j.style.height=b[z]+"px",j.style.width=this.spec.get(i+"Ru"),j.style.position="absolute",j.style.fontSize="1px",j.style.overflow="hidden",j.style.backgroundColor=this.boxColour,i){case "tl":j.style.bottom=j.style.left=
"0";j.style.borderLeft=this.borderString;this.topContainer.appendChild(j);break;case "tr":j.style.bottom=j.style.right="0";j.style.borderRight=this.borderString;this.topContainer.appendChild(j);break;case "bl":j.style.top=j.style.left="0";j.style.borderLeft=this.borderStringB;this.bottomContainer.appendChild(j);break;case "br":j.style.top=j.style.right="0",j.style.borderRight=this.borderStringB,this.bottomContainer.appendChild(j)}i=document.createElement("div");if(filter)i.style.filter=filter;i.style.position=
"relative";i.style.fontSize="1px";i.style.overflow="hidden";i.style.width=this.fillerWidth(z);i.style.backgroundColor=this.boxColour;i.style.backgroundImage=this.backgroundImage;i.style.backgroundRepeat=this.backgroundRepeat;switch(z){case "t":if(this.topContainer){i.style.height=curvyBrowser.quirksMode?100+t+"px":100+t-this.borderWidth+"px";i.style.marginLeft=this.spec.tlR?this.spec.tlR-this.borderWidthL+"px":"0";i.style.borderTop=this.borderString;if(this.backgroundImage)j=this.spec.tlR?this.backgroundPosX-
(t-this.borderWidthL)+"px ":"0 ",i.style.backgroundPosition=j+this.backgroundPosY+"px",this.shell.style.backgroundPosition=this.backgroundPosX+"px "+(this.backgroundPosY-t+this.borderWidthL)+"px";this.topContainer.appendChild(i)}break;case "b":if(this.bottomContainer){i.style.height=curvyBrowser.quirksMode?u+"px":u-this.borderWidthB+"px";i.style.marginLeft=this.spec.blR?this.spec.blR-this.borderWidthL+"px":"0";i.style.borderBottom=this.borderStringB;if(this.backgroundImage)j=this.spec.blR?this.backgroundPosX+
this.borderWidthL-u+"px ":this.backgroundPosX+"px ",i.style.backgroundPosition=j+(this.backgroundPosY-v-this.borderWidth+u)+"px";this.bottomContainer.appendChild(i)}}}this.contentContainer.style.position="absolute";this.contentContainer.className="autoPadDiv";this.contentContainer.style.left=this.borderWidthL+"px";this.contentContainer.style.paddingTop=this.topPadding+"px";this.contentContainer.style.top=this.borderWidth+"px";this.contentContainer.style.paddingLeft=this.leftPadding+"px";this.contentContainer.style.paddingRight=
this.rightPadding+"px";z=w;curvyBrowser.quirksMode||(z-=this.leftPadding+this.rightPadding);this.contentContainer.style.width=z+"px";this.contentContainer.style.textAlign=curvyBrowser.get_style(this.box,"textAlign");this.box.style.textAlign="left";this.box.appendChild(this.contentContainer);if(c)c.style.display="none"};if(this.backgroundImage&&(o=this.backgroundCheck(o),s=this.backgroundCheck(s),this.backgroundObject))this.backgroundObject.holdingElement=this,this.dispatch=this.applyCorners,this.applyCorners=
function(){this.backgroundObject.complete?this.dispatch():this.backgroundObject.onload=new Function("curvyObject.dispatch(this.holdingElement);")}}curvyObject.prototype.backgroundCheck=function(a){if("top"===a||"left"===a||0===parseInt(a))return 0;if(!/^[-\d.]+px$/.test(a)&&!this.backgroundObject){var b=this.backgroundObject=new Image,c=this.backgroundImage,d=/url\("?([^'"]+)"?\)/.exec(c);b.src=d?d[1]:c}return a};
curvyObject.dispatch=function(a){if("dispatch"in a)a.dispatch();else throw a.newError("No dispatch function");};
curvyObject.prototype.drawPixel=function(a,b,c,d,e,f,g,h){var n=document.createElement("div");n.style.height=e+"px";n.style.width="1px";n.style.position="absolute";n.style.fontSize="1px";n.style.overflow="hidden";e=this.spec.get("tR");n.style.backgroundColor=c;if(g&&""!=this.backgroundImage)n.style.backgroundImage=this.backgroundImage,n.style.backgroundPosition="-"+(this.boxWidth-(h-a)+this.borderWidth)+"px -"+(this.boxHeight+e+b-this.borderWidth)+"px";100!=d&&curvyObject.setOpacity(n,d);n.style.top=
b+"px";n.style.left=a+"px";f.appendChild(n)};curvyObject.prototype.fillerWidth=function(a){var b=curvyBrowser.quirksMode?0:this.spec.radiusCount(a)*this.borderWidthL;return this.boxWidth-this.spec.radiusSum(a)+b+"px"};
curvyObject.prototype.errmsg=function(a,b){var c="\ntag: "+this.box.tagName;this.box.id&&(c+="\nid: "+this.box.id);this.box.className&&(c+="\nclass: "+this.box.className);var d;null===(d=this.box.parentNode)?c+="\n(box has no parent)":(c+="\nParent tag: "+d.tagName,d.id&&(c+="\nParent ID: "+d.id),d.className&&(c+="\nParent class: "+d.className));void 0===b&&(b="warning");return"curvyObject "+b+":\n"+a+c};curvyObject.prototype.newError=function(a){return Error(this.errmsg(a,"exception"))};
curvyObject.IntToHex=function(a){var b="0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F".split(",");return b[a>>>4]+""+b[a&15]};
curvyObject.BlendColour=function(a,b,c){if("transparent"===a||"transparent"===b)throw this.newError("Cannot blend with transparent");"#"!==a.charAt(0)&&(a=curvyObject.format_colour(a));"#"!==b.charAt(0)&&(b=curvyObject.format_colour(b));var d=parseInt(a.substr(1,2),16),e=parseInt(a.substr(3,2),16),a=parseInt(a.substr(5,2),16),f=parseInt(b.substr(1,2),16),g=parseInt(b.substr(3,2),16),b=parseInt(b.substr(5,2),16);if(1<c||0>c)c=1;d=Math.round(d*c+f*(1-c));255<d&&(d=255);0>d&&(d=0);e=Math.round(e*c+g*
(1-c));255<e&&(e=255);0>e&&(e=0);c=Math.round(a*c+b*(1-c));255<c&&(c=255);0>c&&(c=0);return"#"+curvyObject.IntToHex(d)+curvyObject.IntToHex(e)+curvyObject.IntToHex(c)};
curvyObject.pixelFraction=function(a,b,c){var c=c*c,d=Array(2),e=Array(2),f=0,g="",h=Math.sqrt(c-Math.pow(a,2));h>=b&&h<b+1&&(g="Left",d[f]=0,e[f]=h-b,++f);h=Math.sqrt(c-Math.pow(b+1,2));h>=a&&h<a+1&&(g+="Top",d[f]=h-a,e[f]=1,++f);h=Math.sqrt(c-Math.pow(a+1,2));h>=b&&h<b+1&&(g+="Right",d[f]=1,e[f]=h-b,++f);h=Math.sqrt(c-Math.pow(b,2));h>=a&&h<a+1&&(g+="Bottom",d[f]=h-a,e[f]=0);switch(g){case "LeftRight":a=Math.min(e[0],e[1])+(Math.max(e[0],e[1])-Math.min(e[0],e[1]))/2;break;case "TopRight":a=1-(1-
d[0])*(1-e[1])/2;break;case "TopBottom":a=Math.min(d[0],d[1])+(Math.max(d[0],d[1])-Math.min(d[0],d[1]))/2;break;case "LeftBottom":a=e[0]*d[1]/2;break;default:a=1}return a};curvyObject.rgb2Array=function(a){return a.substring(4,a.indexOf(")")).split(", ")};
curvyObject.rgb2Hex=function(a){try{var b=curvyObject.rgb2Array(a),c=parseInt(b[0]),d=parseInt(b[1]),e=parseInt(b[2]),f="#"+curvyObject.IntToHex(c)+curvyObject.IntToHex(d)+curvyObject.IntToHex(e)}catch(g){throw a="getMessage"in g?g.getMessage():g.message,Error("Error ("+a+") converting RGB value to Hex in rgb2Hex");}return f};
curvyObject.setOpacity=function(a,b){b=100==b?99.999:b;if(curvyBrowser.isSafari&&"IFRAME"!=a.tagName){var c=curvyObject.rgb2Array(a.style.backgroundColor),d=parseInt(c[0]),e=parseInt(c[1]),c=parseInt(c[2]);a.style.backgroundColor="rgba("+d+", "+e+", "+c+", "+b/100+")"}else if("undefined"!==typeof a.style.opacity)a.style.opacity=b/100;else if("undefined"!==typeof a.style.MozOpacity)a.style.MozOpacity=b/100;else if("undefined"!=typeof a.style.filter)a.style.filter="alpha(opacity="+b+")";else if("undefined"!=
typeof a.style.KHTMLOpacity)a.style.KHTMLOpacity=b/100};function addEvent(a,b,c,d){if(a.addEventListener)return a.addEventListener(b,c,d),!0;if(a.attachEvent)return a.attachEvent("on"+b,c);a["on"+b]=c;return!1}
curvyObject.getComputedColour=function(a){var b=document.createElement("DIV");b.style.backgroundColor=a;document.body.appendChild(b);if(window.getComputedStyle)return a=document.defaultView.getComputedStyle(b,null).getPropertyValue("background-color"),b.parentNode.removeChild(b),"rgb"===a.substr(0,3)&&(a=curvyObject.rgb2Hex(a)),a;var c=document.body.createTextRange();c.moveToElementText(b);c.execCommand("ForeColor",!1,a);a=c.queryCommandValue("ForeColor");a="rgb("+(a&255)+", "+((a&65280)>>8)+", "+
((a&16711680)>>16)+")";b.parentNode.removeChild(b);return curvyObject.rgb2Hex(a)};curvyObject.format_colour=function(a){""!=a&&"transparent"!=a&&("rgb"===a.substr(0,3)?a=curvyObject.rgb2Hex(a):"#"!==a.charAt(0)?a=curvyObject.getComputedColour(a):4===a.length&&(a="#"+a.charAt(1)+a.charAt(1)+a.charAt(2)+a.charAt(2)+a.charAt(3)+a.charAt(3)));return a};
curvyCorners.getElementsByClass=function(a,b){var c=[];void 0===b&&(b=document);var a=a.split("."),d="*";1===a.length?(d=a[0],a=!1):(a[0]&&(d=a[0]),a=a[1]);var e,f;if("#"===d.charAt(0))(e=document.getElementById(d.substr(1)))&&c.push(e);else if(e=b.getElementsByTagName(d),f=e.length,a)for(var g=RegExp("(^|\\s)"+a+"(\\s|$)"),d=0;d<f;++d)g.test(e[d].className)&&c.push(e[d]);else for(d=0;d<f;++d)c.push(e[d]);return c};
if(curvyBrowser.isMoz||curvyBrowser.isWebKit)var curvyCornersNoAutoScan=!0;else curvyCorners.scanStyles=function(){function a(a){return/^[\d.]+(\w+)$/.exec(a)[1]}var b,c,d;if(curvyBrowser.isIE){var e=function(c){var b=c.style;if(6<curvyBrowser.ieVer)var d=b["-webkit-border-radius"]||0,e=b["-webkit-border-top-right-radius"]||0,p=b["-webkit-border-top-left-radius"]||0,q=b["-webkit-border-bottom-right-radius"]||0,b=b["-webkit-border-bottom-left-radius"]||0;else d=b["webkit-border-radius"]||0,e=b["webkit-border-top-right-radius"]||
0,p=b["webkit-border-top-left-radius"]||0,q=b["webkit-border-bottom-right-radius"]||0,b=b["webkit-border-bottom-left-radius"]||0;if(d||p||e||q||b)c=new curvyCnrSpec(c.selectorText),d?c.setcorner(null,null,parseInt(d),a(d)):(e&&c.setcorner("t","r",parseInt(e),a(e)),p&&c.setcorner("t","l",parseInt(p),a(p)),b&&c.setcorner("b","l",parseInt(b),a(b)),q&&c.setcorner("b","r",parseInt(q),a(q))),curvyCorners(c)};for(b=0;b<document.styleSheets.length;++b){if(document.styleSheets[b].imports)for(c=0;c<document.styleSheets[b].imports.length;++c)for(d=
0;d<document.styleSheets[b].imports[c].rules.length;++d)e(document.styleSheets[b].imports[c].rules[d]);for(c=0;c<document.styleSheets[b].rules.length;++c)e(document.styleSheets[b].rules[c])}}else if(curvyBrowser.isOp)for(b=0;b<document.styleSheets.length;++b){if(operasheet.contains_border_radius(b))for(c in d=new operasheet(b),d.rules)isNaN(c)||curvyCorners(d.rules[c])}else curvyCorners.alert("Scanstyles does nothing in Webkit/Firefox")},curvyCorners.init=function(){if(!arguments.callee.done){arguments.callee.done=
!0;if(curvyBrowser.isWebKit&&curvyCorners.init.timer)clearInterval(curvyCorners.init.timer),curvyCorners.init.timer=null;curvyCorners.scanStyles()}};if("undefined"===typeof curvyCornersNoAutoScan||!1===curvyCornersNoAutoScan)curvyBrowser.isOp?document.addEventListener("DOMContentLoaded",curvyCorners.init,!1):addEvent(window,"load",curvyCorners.init,!1);
