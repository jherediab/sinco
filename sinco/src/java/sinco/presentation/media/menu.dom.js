// Title: Tigra Menu GOLD
// URL: http://www.softcomplex.com/products/tigra_menu_gold/
// Version: 2.6
// Date: 03-18-2004 (mm-dd-yyyy)
// Notes: Registration needed to use this script legally.
// Visit official site for details.

document.write('<style>.mlyri{position:absolute;left:0;top:0}.mlyrh{width:1;height:1;position:absolute;left:0;top:0;visibility:hidden}</style>');function TMl(){this.TMP=1;this.TM0G=navigator.userAgent.indexOf('MSIE 6')>-1;this.TM09=document.all?function(i){return document.all[i]}:function(i){return document.getElementById(i)};this.TMu=function(n,TM0E,TM0F){var TM1m={'x':TM0E,'y':TM0F};for(;n;n=n.offsetParent){TM1m.x+=n.offsetLeft;TM1m.y+=n.offsetTop}return TM1m;};this.TMv=function(TM1D,TMe){TM1D.style.visibility=TMe?'visible':'hidden'};this.TMw=function(TM1D,TMh){TM1D.style.left=TMh.x+'px';TM1D.style.top=TMh.y+'px';};this.TMt=function(TM1D,TMk){return TM1D[TMk?'offsetHeight':'offsetWidth']};}function TM0(TMO){var TMT=false;for(var i=0;i<menus.length;i++)if(menus[i].TM0L!=null)TMT=true;if(TMT&&TMO)return;for(i=0;i<this.TM6.length;i++)if(document.forms[i]){var TM1G=document.forms[i];for(var j=0;j<TM1G.elements.length;j++){var TM1F=TM1G.elements[j];if(TM1F.type.indexOf('select-')>-1)TM1F.style.visibility=TM1F.style.overflow=TMO?'visible':'hidden';}}}function TM0_(TM_){var TMj=this.TM1O.TM13+(this.TMi+1)*3,TM1B=this.TM9[0],TMD=TM1B.TM0A('table'),TM1Z=['<table cellpadding="',TMD[0],'" cellspacing="',TMD[1],'" border="',TMD[2],'" class="',TM1B.TM08('table'),this.TMi>-1?'" onmouseout="menus[\''+this.TM1O.id+'\'].exec(\''+this.id+'\',1)" onmouseover="menus[\''+this.TM1O.id+'\'].exec(\''+this.id+'\',2)':'','"><tr>',this.TM1l.join(''),'</tr></table>'].join('');if(TM_){var TM0y=TM1B.TM0A('block_top'),TM0u=TM1B.TM0A('block_left'),TM1W='';if(TM0y!=null||TM0u!=null)TM1W=';top:'+TM0y+';left:'+TM0u;if(top!=window&&!this.TM0H||this.TMW)TM1W+=';visibility:hidden';document.write('<div',TM1W?' style="z-index:'+TMj+TM1W+'" class=mlyri':'',' id="m',this.id,'c">',TM1Z,'</div>');this.TM0M=this.TM15=TM1E.TM09('m'+this.TM1O.id+'c');}else{this.TM15=document.createElement('div');document.body.appendChild(this.TM15);this.TM15.className='mlyrh';this.TM15.style.zIndex=TMj;this.TM15.innerHTML=TM1Z;}if(document.body.style.filter!=null){var filter='';if(t=this.TM19.be||TM1B.TM0A('transition')){if(this.TM07=t[0]!=null)filter+=t[0];if(t[1]!=null){filter+=' '+t[1];this.TM06=this.TM07?1:0;}}if(TM1P=TM1B.TM0A('shadow'))filter+=' progid:DXImageTransform.Microsoft.Shadow(strength=3,direction='+Math.atan2(TM1P.offY,-TM1P.offX)/Math.PI*180+',color='+TM1P.color+')';if(TM0i=TM1B.TM0A('opacity'))filter+=' alpha(opacity='+TM0i+')';if(filter)this.TM15.style.filter=filter;}if(TM1E.TM0G&&(!TM_||TM1W)){document.body.insertAdjacentHTML("afterBegin",['<iframe style="position:absolute;filter:alpha(opacity=0);z-index:',TMj-1,';width:',this.TM15.offsetWidth+(TM1B.TM1P?TM1B.TM1P.offX:0),';height:',this.TM15.offsetHeight+(TM1B.TM1P?TM1B.TM1P.offY:0),'" id="m',this.TM1O.id,'if',this.id,'" src="',TM1E.TM1T,'"></iframe>'].join(''));this.TM16=document.getElementById('m'+this.TM1O.id+'if'+this.id);}}function TM0X(w,h){return['<td style="position:relative" width="',w,'" nowrap><table cellpadding="0" cellspacing="0" border="0" width="100%" height="',h,'" class="',this.TM08('outer',0),'" id="m',this.TM1O.id,'tb',this.id,'"><tr><td><div class="',this.TM08('inner',0),'" id="m',this.TM1O.id,'td',this.id,'" style="width:100%">',this.TM03(typeof(this.TM4[0])=='object'?this.TM4[0][0]:this.TM4[0],0),'</div></td></tr></table><div class=mlyrh id="m',this.TM1O.id,'i',this.id,'"><table cellpadding="0" cellspacing="0" border="0" width="',w,'" height="',h,'" class="',this.TM08('outer',1),'"><tr><td class="',this.TM08('inner',1),'">',this.TM03(typeof(this.TM4[0])=='object'?this.TM4[0][1]:this.TM4[0],1),'</td></tr></table></div><div class=mlyri><a href="',this.TM4[1]?this.TM4[1]:'javascript:','"',this.TM19.tw?' target="'+this.TM19.tw+'"':'',' onclick="return menus[\'',this.TM1O.id,'\'].exec(\'',this.id,'\',0)" onmouseout="menus[\'',this.TM1O.id,'\'].exec(\'',this.id,'\',1)" onmouseover="menus[\'',this.TM1O.id,'\'].exec(\'',this.id,'\',2)"',this.TM19.ti!=null?' tabindex="'+this.TM19.ti+'"':'','><img src="',TM1E.TM1T,'" width="',w,'" height="',h,'" border="0"',this.TM19.tt?' alt="'+this.TM19.tt+'"':'','></a></div></td>',this.TMH[this.TMi]!=this.TM1M.TMg-1&&this.TM1M.TM9[0].TMd?'</tr><tr>':''].join('');}function TM0c(){this.elements=[TM1E.TM09(['m',this.TM1O.id,'tb',this.id].join('')),TM1E.TM09(['m',this.TM1O.id,'td',this.id].join('')),TM1E.TM09(['m',this.TM1O.id,'i',this.id].join(''))];}function TM0e(TM1j){if(TM1j==this.TM1j)return;if(this.TM1j==1)this.elements[2].style.visibility='hidden';else if(this.TM1j==2){if(typeof(this.TM4[0])=='object')this.elements[1].innerHTML=this.TM03(this.TM4[0][0],0);this.elements[0].className=this.TM08('outer',0);this.elements[1].className=this.TM08('inner',0);}if(TM1j==1)this.elements[2].style.visibility='visible';else if(TM1j==2){if(typeof(this.TM4[0])=='object')this.elements[1].innerHTML=this.TM03(this.TM4[0][2],2);this.elements[0].className=this.TM08('outer',2);this.elements[1].className=this.TM08('inner',2);}this.TM1j=TM1j;}function TM0Y(TM1q){if(this.TM15){for(var i=0;i<this.TM9.length;i++)this.TM9[i].TM1h(0);if(this.TM16)TM1E.TMv(this.TM16);if(this.TM1O.TM1r)try{this.TM1O.TM1r.stop()}catch(e){};if(this.TM06!=null)try{this.TM1O.TM1r=this.TM15.filters[this.TM06];this.TM15.filters[this.TM06].apply();}catch(e){};TM1E.TMv(this.TM15);if(this.TM06!=null)try{this.TM15.filters[this.TM06].play()}catch(e){};}if(TM1q>=this.TMi){if(this!=this.TM1O.TM1I&&this.TM1h)this.TM1h(0);}else this.TM1M.collapse(TM1q);}function TM0Z(){if(this.TM1O.TM00&&!this.TM1O.TM0L)this.TM1O.TM00();if(this.TM1O.TM0L&&this.TMi<=this.TM1O.TM0L.TMi)this.TM1O.TM0L.collapse((this.TM1O.TM0L.TM1M==this)*1+this.TMi);this.TM1O.TM0L=this;if(this.TMg>0){if(this.TM1O.TM1r)try{this.TM1O.TM1r.stop()}catch(e){};if(!this.TM15&&this.TMg>0)this.TMr();this.TM1U();if(this.TM07)try{this.TM1O.TM1r=this.TM15.filters[0];this.TM15.filters[0].apply();}catch(e){};if(!TM1E.TM0G)this.TM1O.TM1g();TM1E.TMv(this.TM15,true);if(this.TM07)try{this.TM15.filters[0].play()}catch(e){};if(this.TM16)TM1E.TMv(this.TM16,true);}}