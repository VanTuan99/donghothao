Array.prototype.indexOf=function(j,a){for(var d=this.length,a=a<0?a+d<0?0:a+d:a||0;a<d&&this[a]!==j;a++);return d<=a?-1:a};
$.fn.extend({flash:function(j){var a,d,l,e=navigator.plugins;if(e&&e.length){var b=e["Shockwave Flash"];b&&(a=true,b.description&&(d=b.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split(".")));e["Shockwave Flash 2.0"]&&(a=true,d="2.0.0.11")}else{try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(m){try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),d=[6,0,21],a=true}catch(n){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(o){}}b!=
null&&(d=b.GetVariable("$version").split(" ")[1].split(","),l=a=true)}$(this).each(function(){if(a){var b=$(this),c=$.extend({id:b.attr("id"),"class":b.attr("class"),width:b.width(),height:b.height(),src:b.attr("href"),classid:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",pluginspace:"http://get.adobe.com/flashplayer",availattrs:["id","class","width","height","src"],availparams:"src,bgcolor,quality,allowscriptaccess,allowfullscreen,flashvars,wmode".split(","),version:"9.0.24"},j),f=c.availattrs,h=
c.availparams,g=c.version.split("."),i="<object";if(!c.codebase)c.codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version="+g.join(",");if(c.express)for(var e in d){if(parseInt(d[e])>parseInt(g[e]))break;if(parseInt(d[e])<parseInt(g[e]))c.src=c.express}if(c.flashvars)c.flashvars=unescape($.param(c.flashvars));f=l?f.concat(["classid","codebase"]):f.concat(["pluginspage"]);for(k in f)g=k==f.indexOf("src")?"data":f[k],i+=c[f[k]]?" "+g+'="'+c[f[k]]+'"':"";i+=">";for(k in h)g=
k==h.indexOf("src")?"movie":h[k],i+=c[h[k]]?'<param name="'+g+'" value="'+c[h[k]]+'" />':"";i+="</object>";b.replaceWith(i)}return this})}});