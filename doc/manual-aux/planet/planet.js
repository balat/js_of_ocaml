// This program was compiled from OCaml by js_of_ocaml 2.0+git-883a1ec
(function(c){"use strict";var
bG=125,bJ=123,C=254,O=255,cU="x",cX=0.99,ae=".",c7=108,aX=65535,aY="+",aV='"',B=16777215,cT="g",bE="f",c2=250,V=105,c6=0.5,cS="%d",cW="jsError",c4=-88,av=110,bF=2147483,cQ="input",cV="copy",c1=785140586,aU="'",aw=115,aT="int_of_string",c0=-32,bN=102,cR=982028505,bL=111,bI=120,J=" ",au="e",bH=117,U="-",ad=-48,cZ="nan",g="",bD=116,at=600,cY="%.12g",aZ=100,bP=" : file already exists",v="0",f=248,bK="/",a0="planet.ml",aW=114,bM=103,c5="fd ",c3=101,bO="index out of bounds",A="number",as=1e3,af="src/core/lwt.ml";function
dj(a,b){throw[0,a,b]}function
bU(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
b=c.console;b&&b.error&&b.error(a)}var
j=[0];function
ay(a,b){if(!a)return g;if(a&1)return ay(a-1,b)+b;var
c=ay(a>>1,b);return c+c}function
r(a){if(a!=null){this.bytes=this.fullBytes=a;this.last=this.len=a.length}}function
dk(){dj(j[4],new
r(bO))}r.prototype={string:null,bytes:null,fullBytes:null,array:null,len:null,last:0,toJsString:function(){var
a=this.getFullBytes();try{return this.string=decodeURIComponent(escape(a))}catch(f){bU('MlString.toJsString: wrong encoding for "%s" ',a);return a}},toBytes:function(){if(this.string!=null)try{var
a=unescape(encodeURIComponent(this.string))}catch(f){bU('MlString.toBytes: wrong encoding for "%s" ',this.string);var
a=this.string}else{var
a=g,c=this.array,d=c.length;for(var
b=0;b<d;b++)a+=String.fromCharCode(c[b])}this.bytes=this.fullBytes=a;this.last=this.len=a.length;return a},getBytes:function(){var
a=this.bytes;if(a==null)a=this.toBytes();return a},getFullBytes:function(){var
a=this.fullBytes;if(a!==null)return a;a=this.bytes;if(a==null)a=this.toBytes();if(this.last<this.len){this.bytes=a+=ay(this.len-this.last,"\0");this.last=this.len}this.fullBytes=a;return a},toArray:function(){var
c=this.bytes;if(c==null)c=this.toBytes();var
b=[],d=this.last;for(var
a=0;a<d;a++)b[a]=c.charCodeAt(a);for(d=this.len;a<d;a++)b[a]=0;this.string=this.bytes=this.fullBytes=null;this.last=this.len;this.array=b;return b},getArray:function(){var
a=this.array;if(!a)a=this.toArray();return a},getLen:function(){var
a=this.len;if(a!==null)return a;this.toBytes();return this.len},toString:function(){var
a=this.string;return a?a:this.toJsString()},valueOf:function(){var
a=this.string;return a?a:this.toJsString()},blitToArray:function(a,b,c,d){var
g=this.array;if(g)if(c<=a)for(var
e=0;e<d;e++)b[c+e]=g[a+e];else
for(var
e=d-1;e>=0;e--)b[c+e]=g[a+e];else{var
f=this.bytes;if(f==null)f=this.toBytes();var
h=this.last-a;if(d<=h)for(var
e=0;e<d;e++)b[c+e]=f.charCodeAt(a+e);else{for(var
e=0;e<h;e++)b[c+e]=f.charCodeAt(a+e);for(;e<d;e++)b[c+e]=0}}},get:function(a){var
c=this.array;if(c)return c[a];var
b=this.bytes;if(b==null)b=this.toBytes();return a<this.last?b.charCodeAt(a):0},safeGet:function(a){if(this.len==null)this.toBytes();if(a<0||a>=this.len)dk();return this.get(a)},set:function(a,b){var
c=this.array;if(!c){if(this.last==a){this.bytes+=String.fromCharCode(b&O);this.last++;return 0}c=this.toArray()}else
if(this.bytes!=null)this.bytes=this.fullBytes=this.string=null;c[a]=b&O;return 0},safeSet:function(a,b){if(this.len==null)this.toBytes();if(a<0||a>=this.len)dk();this.set(a,b)},fill:function(a,b,c){if(a>=this.last&&this.last&&c==0)return;var
d=this.array;if(!d)d=this.toArray();else
if(this.bytes!=null)this.bytes=this.fullBytes=this.string=null;var
f=a+b;for(var
e=a;e<f;e++)d[e]=c},compare:function(a){if(this.string!=null&&a.string!=null){if(this.string<a.string)return-1;if(this.string>a.string)return 1;return 0}var
b=this.getFullBytes(),c=a.getFullBytes();if(b<c)return-1;if(b>c)return 1;return 0},equal:function(a){if(this.string!=null&&a.string!=null)return this.string==a.string;return this.getFullBytes()==a.getFullBytes()},lessThan:function(a){if(this.string!=null&&a.string!=null)return this.string<a.string;return this.getFullBytes()<a.getFullBytes()},lessEqual:function(a){if(this.string!=null&&a.string!=null)return this.string<=a.string;return this.getFullBytes()<=a.getFullBytes()}};function
X(a){this.string=a}X.prototype=new
r();function
bT(a,b){dj(a,new
X(b))}function
ag(a){bT(j[4],a)}function
c9(){ag(bO)}function
fp(a,b){if(b<0||b>=a.length-1)c9();return a[b+1]}function
fq(a,b,c){if(b<0||b>=a.length-1)c9();a[b+1]=c;return 0}function
c_(a,b,c,d,e){if(e===0)return;if(d===c.last&&c.bytes!=null){var
f=a.bytes;if(f==null)f=a.toBytes();if(b>0||a.last>e)f=f.slice(b,b+e);c.bytes+=f;c.last+=f.length;return}var
g=c.array;if(!g)g=c.toArray();else
c.bytes=c.string=null;a.blitToArray(b,g,d,e)}function
P(c,b){if(c.fun)return P(c.fun,b);var
a=c.length,d=a-b.length;if(d==0)return c.apply(null,b);else
if(d<0)return P(c.apply(null,b.slice(0,a)),b.slice(a));else
return function(a){return P(c,b.concat([a]))}}function
fr(a){if(isFinite(a)){if(Math.abs(a)>=2.22507385850720138e-308)return 0;if(a!=0)return 1;return 2}return isNaN(a)?4:3}function
ft(){return 0}function
c8(a){this.bytes=g;this.len=a}c8.prototype=new
r();function
c$(a){if(a<0)ag("String.create");return new
c8(a)}function
fv(a,b,c,d){a.fill(b,c,d)}function
bS(a){a=a.toString();var
e=a.length;if(e>31)ag("format_int: format too long");var
b={justify:aY,signstyle:U,filler:J,alternate:false,base:0,signedconv:false,width:0,uppercase:false,sign:1,prec:-1,conv:bE};for(var
d=0;d<e;d++){var
c=a.charAt(d);switch(c){case
U:b.justify=U;break;case
aY:case
J:b.signstyle=c;break;case
v:b.filler=v;break;case"#":b.alternate=true;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":b.width=0;while(c=a.charCodeAt(d)-48,c>=0&&c<=9){b.width=b.width*10+c;d++}d--;break;case
ae:b.prec=0;d++;while(c=a.charCodeAt(d)-48,c>=0&&c<=9){b.prec=b.prec*10+c;d++}d--;case"d":case"i":b.signedconv=true;case"u":b.base=10;break;case
cU:b.base=16;break;case"X":b.base=16;b.uppercase=true;break;case"o":b.base=8;break;case
au:case
bE:case
cT:b.signedconv=true;b.conv=c;break;case"E":case"F":case"G":b.signedconv=true;b.uppercase=true;b.conv=c.toLowerCase();break}}return b}function
bQ(a,b){if(a.uppercase)b=b.toUpperCase();var
e=b.length;if(a.signedconv&&(a.sign<0||a.signstyle!=U))e++;if(a.alternate){if(a.base==8)e+=1;if(a.base==16)e+=2}var
c=g;if(a.justify==aY&&a.filler==J)for(var
d=e;d<a.width;d++)c+=J;if(a.signedconv)if(a.sign<0)c+=U;else
if(a.signstyle!=U)c+=a.signstyle;if(a.alternate&&a.base==8)c+=v;if(a.alternate&&a.base==16)c+="0x";if(a.justify==aY&&a.filler==v)for(var
d=e;d<a.width;d++)c+=v;c+=b;if(a.justify==U)for(var
d=e;d<a.width;d++)c+=J;return new
X(c)}function
fw(a,b){var
c,f=bS(a),e=f.prec<0?6:f.prec;if(b<0){f.sign=-1;b=-b}if(isNaN(b)){c=cZ;f.filler=J}else
if(!isFinite(b)){c="inf";f.filler=J}else
switch(f.conv){case
au:var
c=b.toExponential(e),d=c.length;if(c.charAt(d-3)==au)c=c.slice(0,d-1)+v+c.slice(d-1);break;case
bE:c=b.toFixed(e);break;case
cT:e=e?e:1;c=b.toExponential(e-1);var
i=c.indexOf(au),h=+c.slice(i+1);if(h<-4||b.toFixed(0).length>e){var
d=i-1;while(c.charAt(d)==v)d--;if(c.charAt(d)==ae)d--;c=c.slice(0,d+1)+c.slice(i);d=c.length;if(c.charAt(d-3)==au)c=c.slice(0,d-1)+v+c.slice(d-1);break}else{var
g=e;if(h<0){g-=h+1;c=b.toFixed(g)}else
while(c=b.toFixed(g),c.length>e+1)g--;if(g){var
d=c.length-1;while(c.charAt(d)==v)d--;if(c.charAt(d)==ae)d--;c=c.slice(0,d+1)}}break}return bQ(f,c)}function
fx(a,b){if(a.toString()==cS)return new
X(g+b);var
c=bS(a);if(b<0)if(c.signedconv){c.sign=-1;b=-b}else
b>>>=0;var
d=b.toString(c.base);if(c.prec>=0){c.filler=J;var
e=c.prec-d.length;if(e>0)d=ay(e,v)+d}return bQ(c,d)}function
fz(){return 0}function
fD(a){return(a[3]|a[2]|a[1])==0}function
fG(a){return[O,a&B,a>>24&B,a>>31&aX]}function
fH(a,b){var
c=a[1]-b[1],d=a[2]-b[2]+(c>>24),e=a[3]-b[3]+(d>>24);return[O,c&B,d&B,e&aX]}function
db(a,b){if(a[3]>b[3])return 1;if(a[3]<b[3])return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
da(a){a[3]=a[3]<<1|a[2]>>23;a[2]=(a[2]<<1|a[1]>>23)&B;a[1]=a[1]<<1&B}function
fE(a){a[1]=(a[1]>>>1|a[2]<<23)&B;a[2]=(a[2]>>>1|a[3]<<23)&B;a[3]=a[3]>>>1}function
fJ(a,b){var
e=0,d=a.slice(),c=b.slice(),f=[O,0,0,0];while(db(d,c)>0){e++;da(c)}while(e>=0){e--;da(f);if(db(d,c)>=0){f[1]++;d=fH(d,c)}fE(c)}return[0,f,d]}function
fI(a){return a[1]|a[2]<<24}function
fC(a){return a[3]<<16<0}function
fF(a){var
b=-a[1],c=-a[2]+(b>>24),d=-a[3]+(c>>24);return[O,b&B,c&B,d&aX]}function
fB(a,b){var
c=bS(a);if(c.signedconv&&fC(b)){c.sign=-1;b=fF(b)}var
d=g,i=fG(c.base),h="0123456789abcdef";do{var
f=fJ(b,i);b=f[1];d=h.charAt(fI(f[2]))+d}while(!fD(b));if(c.prec>=0){c.filler=J;var
e=c.prec-d.length;if(e>0)d=ay(e,v)+d}return bQ(c,d)}function
f3(a){var
b=0,c=10,d=a.get(0)==45?(b++,-1):1;if(a.get(b)==48)switch(a.get(b+1)){case
bI:case
88:c=16;b+=2;break;case
bL:case
79:c=8;b+=2;break;case
98:case
66:c=2;b+=2;break}return[b,d,c]}function
dg(a){if(a>=48&&a<=57)return a-48;if(a>=65&&a<=90)return a-55;if(a>=97&&a<=122)return a-87;return-1}function
a1(a){bT(j[3],a)}function
fL(a){var
g=f3(a),f=g[0],h=g[1],d=g[2],i=-1>>>0,e=a.get(f),c=dg(e);if(c<0||c>=d)a1(aT);var
b=c;for(;;){f++;e=a.get(f);if(e==95)continue;c=dg(e);if(c<0||c>=d)break;b=d*b+c;if(b>i)a1(aT)}if(f!=a.getLen())a1(aT);b=h*b;if(d==10&&(b|0)!=b)a1(aT);return b|0}function
fM(a){return+(a>31&&a<127)}function
fN(a,b,c){return a.apply(b,c.slice(1))}function
fO(){var
b=c.console?c.console:{},d=["log","debug","info","warn","error","assert","dir","dirxml","trace","group","groupCollapsed","groupEnd","time","timeEnd"];function
e(){}for(var
a=0;a<d.length;a++)if(!b[d[a]])b[d[a]]=e;return b}var
a2={amp:/&/g,lt:/</g,quot:/\"/g,all:/[&<\"]/};function
fP(a){if(!a2.all.test(a))return a;return a.replace(a2.amp,"&amp;").replace(a2.lt,"&lt;").replace(a2.quot,"&quot;")}function
fQ(a){var
c=Array.prototype.slice;return function(){var
b=arguments.length>0?c.call(arguments):[undefined];return P(a,b)}}function
fR(a,b){var
d=[0];for(var
c=1;c<=a;c++)d[c]=b;return d}function
w(a){bT(j[2],a)}function
dc(a){if(!a.opened)w("Cannot flush a closed channel");if(a.buffer==g)return 0;if(a.output)switch(a.output.length){case
2:a.output(a,a.buffer);break;default:a.output(a.buffer)}a.buffer=g}function
di(a){a=a
instanceof
r?a.toString():a;w(a+": No such file or directory")}var
fu=bK;function
a3(a){a=a
instanceof
r?a.toString():a;if(a.charCodeAt(0)!=47)a=fu+a;var
d=a.split(bK),b=[];for(var
c=0;c<d.length;c++)switch(d[c]){case"..":if(b.length>1)b.pop();break;case
ae:case
g:if(b.length==0)b.push(g);break;default:b.push(d[c]);break}b.orig=a;return b}function
W(){this.content={}}W.prototype={exists:function(a){return this.content[a]?1:0},mk:function(a,b){this.content[a]=b},get:function(a){return this.content[a]},list:function(){var
a=[];for(var
b
in
this.content)a.push(b);return a},remove:function(a){delete
this.content[a]}};var
a5=new
W();a5.mk(g,new
W());function
bR(a){var
b=a5;for(var
c=0;c<a.length;c++){if(!(b.exists&&b.exists(a[c])))di(a.orig);b=b.get(a[c])}return b}function
gc(a){var
c=a3(a),b=bR(c);return b
instanceof
W?1:0}function
ax(a){this.data=a}ax.prototype={content:function(){return this.data},truncate:function(){this.data.length=0}};function
fy(a,b){var
e=a3(a),c=a5;for(var
f=0;f<e.length-1;f++){var
d=e[f];if(!c.exists(d))c.mk(d,new
W());c=c.get(d);if(!(c
instanceof
W))w(e.orig+bP)}var
d=e[e.length-1];if(c.exists(d))w(e.orig+bP);if(b
instanceof
W)c.mk(d,b);else
if(b
instanceof
ax)c.mk(d,b);else
if(b
instanceof
r)c.mk(d,new
ax(b.getArray()));else
if(b
instanceof
Array)c.mk(d,new
ax(b));else
if(b.toString)c.mk(d,new
ax(new
r(b.toString()).getArray()));else
ag("caml_fs_register")}function
ga(a){var
b=a5,d=a3(a),e;for(var
c=0;c<d.length;c++){if(b.auto)e=b.auto;if(!(b.exists&&b.exists(d[c])))return e?e(d.join(bK)):0;b=b.get(d[c])}return 1}function
az(a,b,c){if(j.fds===undefined)j.fds=new
Array();c=c?c:{};var
d={};d.array=b;d.offset=c.append?d.array.length:0;d.flags=c;j.fds[a]=d;j.fd_last_idx=a;return a}function
gk(a,b,c){var
d={};while(b){switch(b[1]){case
0:d.rdonly=1;break;case
1:d.wronly=1;break;case
2:d.append=1;break;case
3:d.create=1;break;case
4:d.truncate=1;break;case
5:d.excl=1;break;case
6:d.binary=1;break;case
7:d.text=1;break;case
8:d.nonblock=1;break}b=b[2]}var
f=a.toString(),h=a3(a);if(d.rdonly&&d.wronly)w(f+" : flags Open_rdonly and Open_wronly are not compatible");if(d.text&&d.binary)w(f+" : flags Open_text and Open_binary are not compatible");if(ga(a)){if(gc(a))w(f+" : is a directory");if(d.create&&d.excl)w(f+bP);var
g=j.fd_last_idx?j.fd_last_idx:0,e=bR(h);if(d.truncate)e.truncate();return az(g+1,e.content(),d)}else
if(d.create){var
g=j.fd_last_idx?j.fd_last_idx:0;fy(a,[]);var
e=bR(h);return az(g+1,e.content(),d)}else
di(a)}az(0,[]);az(1,[]);az(2,[]);function
fS(a){var
b=j.fds[a];if(b.flags.wronly)w(c5+a+" is writeonly");return{data:b,fd:a,opened:true}}function
gh(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
b=c.console;b&&b.log&&b.log(a)}var
a4=new
Array();function
f9(a,b){var
e=new
r(b),d=e.getLen();for(var
c=0;c<d;c++)a.data.array[a.data.offset+c]=e.get(c);a.data.offset+=d;return 0}function
fT(a){var
b;switch(a){case
1:b=gh;break;case
2:b=bU;break;default:b=f9}var
d=j.fds[a];if(d.flags.rdonly)w(c5+a+" is readonly");var
c={data:d,fd:a,opened:true,buffer:g,output:b};a4[c.fd]=c;return c}function
fU(){var
a=0;for(var
b
in
a4)if(a4[b].opened)a=[0,a4[b],a];return a}function
dd(a,b,c,d){if(!a.opened)w("Cannot output to a closed channel");var
f;if(c==0&&b.getLen()==d)f=b;else{f=c$(d);c_(b,c,f,0,d)}var
e=f.toString(),g=e.lastIndexOf("\n");if(g<0)a.buffer+=e;else{a.buffer+=e.substr(0,g+1);dc(a);a.buffer+=e.substr(g+1)}}function
df(a){return new
r(a)}function
fV(a,b){var
c=df(String.fromCharCode(b));dd(a,c,0,1)}function
dh(a){throw a}function
f5(){dh(j[6])}function
fW(a,b){if(b==0)f5();return a%b}if(!Math.imul)Math.imul=function(a,b){return((a>>16)*b<<16)+(a&aX)*b|0};var
fX=Math.imul;function
fA(a,b){var
c=a[3]<<16,d=b[3]<<16;if(c>d)return 1;if(c<d)return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
fK(a,b){if(a<b)return-1;if(a==b)return 0;return 1}function
fs(a,b,c){var
e=[];for(;;){if(!(c&&a===b))if(a
instanceof
r)if(b
instanceof
r){if(a!==b){var
d=a.compare(b);if(d!=0)return d}}else
return 1;else
if(a
instanceof
Array&&a[0]===(a[0]|0)){var
g=a[0];if(g===C)g=0;if(g===c2){a=a[1];continue}else
if(b
instanceof
Array&&b[0]===(b[0]|0)){var
h=b[0];if(h===C)h=0;if(h===c2){b=b[1];continue}else
if(g!=h)return g<h?-1:1;else
switch(g){case
f:var
d=fK(a[2],b[2]);if(d!=0)return d;break;case
251:ag("equal: abstract value");case
O:var
d=fA(a,b);if(d!=0)return d;break;default:if(a.length!=b.length)return a.length<b.length?-1:1;if(a.length>1)e.push(a,b,1)}}else
return 1}else
if(b
instanceof
r||b
instanceof
Array&&b[0]===(b[0]|0))return-1;else
if(typeof
a!=A&&a&&a.compare)return a.compare(b,c);else{if(a<b)return-1;if(a>b)return 1;if(a!=b){if(!c)return NaN;if(a==a)return 1;if(b==b)return-1}}if(e.length==0)return 0;var
i=e.pop();b=e.pop();a=e.pop();if(i+1<a.length)e.push(a,b,i+1);a=a[i];b=b[i]}}function
fZ(a,b){return+(fs(a,b,false)!=0)}function
f0(a){return+(a
instanceof
Array)}function
f1(a){return a
instanceof
Array?a[0]:as}function
f6(a,b){j[a+1]=b}var
de={};function
f7(a,b){de[a.toString()]=b;return 0}var
f2=0;function
f8(a){a[2]=f2++;return a}function
f_(){return 32}function
f$(a){if(c.quit)c.quit(a);ag("Function 'exit' not implemented")}function
f4(){dh(j[7])}function
gb(){f4()}function
gd(a){var
b=1;while(a&&a.joo_tramp){a=a.joo_tramp.apply(null,a.joo_args);b++}return a}function
ge(a,b){return{joo_tramp:a,joo_args:b}}function
gf(a,b){if(typeof
b==="function"){a.fun=b;return 0}if(b.fun){a.fun=b.fun;return 0}var
c=b.length;while(c--)a[c]=b[c];return 0}function
fY(a){return de[a]}function
gg(a){if(a
instanceof
Array)return a;if(c.RangeError&&a
instanceof
c.RangeError&&a.message&&a.message.match(/maximum call stack/i))return[0,j[9]];if(c.InternalError&&a
instanceof
c.InternalError&&a.message&&a.message.match(/too much recursion/i))return[0,j[9]];if(a
instanceof
c.Error)return[0,fY(cW),a];return[0,j[3],new
X(String(a))]}var
o=fp,h=fq,aq=c_,N=c$,by=fw,aO=fx,bz=fM,cP=fP,bC=fQ,z=fR,cM=dc,cL=fT,cN=fV,ar=fW,b=df,aP=f1,F=f6,bx=f7,G=f8,cO=gb,aS=gd,I=ge,ac=gg;function
i(a,b){return a.length==1?a(b):P(a,[b])}function
n(a,b,c){return a.length==2?a(b,c):P(a,[b,c])}function
q(a,b,c,d){return a.length==3?a(b,c,d):P(a,[b,c,d])}function
aQ(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):P(a,[b,c,d,e,f])}var
a8=[f,b("Failure"),-3],a6=[f,b("Invalid_argument"),-4],ai=[f,b("Not_found"),-7],ce=[f,b("Match_failure"),-8],cd=[f,b("Stack_overflow"),-9],s=[f,b("Assert_failure"),-11],cf=[f,b("Undefined_recursive_module"),-12],bg=b('File "%s", line %d, characters %d-%d: %s');F(11,cf);F(8,cd);F(7,ce);F(6,ai);F(5,[f,b("Division_by_zero"),-6]);F(4,[f,b("End_of_file"),-5]);F(3,a6);F(2,a8);F(1,[f,b("Sys_error"),-2]);bx(b("Pervasives.array_bound_error"),[0,a6,b(bO)]);var
ec=[f,b("Out_of_memory"),-1],dq=b(cY),dp=b(ae),dm=b("true"),dn=b("false"),dl=b("Pervasives.Exit"),dr=b("Pervasives.do_at_exit"),dt=b("Array.Bottom"),dw=b("\\b"),dx=b("\\t"),dy=b("\\n"),dz=b("\\r"),dv=b("\\\\"),du=b("\\'"),dC=b("String.contains_from"),dB=b("String.blit"),dA=b("String.sub"),dD=b("Sys.Break"),dE=b("Queue.Empty"),dG=b("CamlinternalLazy.Undefined"),dH=b("Buffer.add: cannot grow buffer"),dX=b(g),dY=b(g),d1=b(cY),d2=b(aV),d3=b(aV),dZ=b(aU),d0=b(aU),dW=b(cZ),dU=b("neg_infinity"),dV=b("infinity"),dT=b(ae),dS=b("printf: bad positional specification (0)."),dR=b("%_"),dQ=[0,b("printf.ml"),143,8],dO=b(aU),dP=b("Printf: premature end of format string '"),dK=b(aU),dL=b(" in format string '"),dM=b(", at char number "),dN=b("Printf: bad conversion %"),dI=b("Sformat.index_of_int: negative argument "),d8=b(g),d9=b(", %s%s"),eo=[1,1],ep=b("%s\n"),eq=b("(Program not linked with -g, cannot print stack backtrace)\n"),ei=b("Raised at"),el=b("Re-raised at"),em=b("Raised by primitive operation at"),en=b("Called from"),ej=b('%s file "%s", line %d, characters %d-%d'),ek=b("%s unknown location"),ed=b("Out of memory"),ee=b("Stack overflow"),ef=b("Pattern matching failed"),eg=b("Assertion failed"),eh=b("Undefined recursive module"),d_=b("(%s%s)"),d$=b(g),ea=b(g),eb=b("(%s)"),d7=b(cS),d5=b("%S"),d6=b("_"),fn=b("OCAMLRUNPARAM"),fl=b("CAMLRUNPARAM"),er=b(g),eu=b("Lwt_sequence.Empty"),eE=[0,b(af),814,20],eF=[0,b(af),816,8],eC=[0,b(af),648,20],eD=[0,b(af),651,8],eB=[0,b(af),498,8],eA=[0,b(af),487,9],ez=b("Lwt.wakeup_result"),ew=b("Fatal error: exception "),ev=b("Lwt.Canceled"),eJ=b("Js.Error"),eK=b(cW),eZ=b("canvas"),eW=b("img"),eV=b("br"),eU=b("p"),eT=b("div"),eS=b("label"),eR=b(cQ),eQ=b("select"),eP=b("option"),eL=b("mouseup"),eN=b("mousemove"),eX=b("Dom_html.Canvas_not_available"),e2=b("Exception during Lwt.async: "),fk=b("% 2.f"),fd=b("Resume"),fe=b("Pause"),ff=b("Fixed position"),fg=b("Follow rotation"),fh=[0,b("December solstice"),[0,b("Equinox"),[0,b("June solstice"),0]]],fi=b("Lighting"),fj=b("Clip"),fa=[0,b(a0),415,0],e$=[0,b(a0),416,0],e_=[0,b(a0),417,0],e9=[0,b(a0),418,0],fb=[C,0,0,1];function
a7(a){throw[0,a8,a]}function
Y(a){throw[0,a6,a]}G([f,dl,0]);function
k(a,b){var
c=a.getLen(),e=b.getLen(),d=N(c+e|0);aq(a,0,d,0,c);aq(b,0,d,c,e);return d}function
a9(a){return b(g+a)}fS(0);cL(1);var
ah=cL(2);function
bV(a,b){return dd(a,b,0,b.getLen())}function
bW(a){return bV(ah,a)}function
a_(a){var
b=fU(0);for(;;){if(b){var
c=b[2],d=b[1];try{cM(d)}catch(f){}var
b=c;continue}return 0}}bx(dr,a_);function
ds(a,b){return cN(a,b)}function
bX(a){return cM(a)}function
aA(a,b){var
d=b.length-1;if(0===d)return[0];var
e=z(d,i(a,b[0+1])),f=d-1|0,g=1;if(!(f<1)){var
c=g;for(;;){e[c+1]=i(a,b[c+1]);var
h=c+1|0;if(f!==c){var
c=h;continue}break}}return e}G([f,dt,0]);function
aB(a,b){var
c=N(a);fv(c,0,a,b);return c}function
aC(a,b,c){if(0<=b)if(0<=c)if(!((a.getLen()-c|0)<b)){var
d=N(c);aq(a,b,d,0,c);return d}return Y(dA)}function
a$(a,b,c,d,e){if(0<=e)if(0<=b)if(!((a.getLen()-e|0)<b))if(0<=d)if(!((c.getLen()-e|0)<d))return aq(a,b,c,d,e);return Y(dB)}var
ba=f_(0),aj=fX(ba/8|0,(1<<(ba-10|0))-1|0)-1|0;G([f,dD,0]);var
dF=G([f,dE,0]);G([f,dG,0]);function
bb(a){var
b=1<=a?a:1,c=aj<b?aj:b,d=N(c);return[0,d,0,c,d]}function
bc(a){return aC(a[1],0,a[2])}function
b0(a,b){var
c=[0,a[3]];for(;;){if(c[1]<(a[2]+b|0)){c[1]=2*c[1]|0;continue}if(aj<c[1])if((a[2]+b|0)<=aj)c[1]=aj;else
a7(dH);var
d=N(c[1]);a$(a[1],0,d,0,a[2]);a[1]=d;a[3]=c[1];return 0}}function
ak(a,b){var
c=a[2];if(a[3]<=c)b0(a,1);a[1].safeSet(c,b);a[2]=c+1|0;return 0}function
bd(a,b){var
c=b.getLen(),d=a[2]+c|0;if(a[3]<d)b0(a,c);aq(b,0,a[1],a[2],c);a[2]=d;return 0}function
be(a){return 0<=a?a:a7(k(dI,a9(a)))}function
b1(a,b){return be(a+b|0)}var
dJ=1;function
b2(a){return b1(dJ,a)}function
b3(a){return aC(a,0,a.getLen())}function
b4(a,b,c){var
d=k(dL,k(a,dK)),e=k(dM,k(a9(b),d));return Y(k(dN,k(aB(1,c),e)))}function
al(a,b,c){return b4(b3(a),b,c)}function
aE(a){return Y(k(dP,k(b3(a),dO)))}function
Q(f,b,c,d){function
j(a){if((f.safeGet(a)+ad|0)<0||9<(f.safeGet(a)+ad|0))return a;var
b=a+1|0;for(;;){var
c=f.safeGet(b);if(48<=c){if(!(58<=c)){var
b=b+1|0;continue}}else
if(36===c)return b+1|0;return a}}var
k=j(b+1|0),g=bb((c-k|0)+10|0);ak(g,37);var
e=d,i=0;for(;;){if(e){var
m=[0,e[1],i],e=e[2],i=m;continue}var
a=k,h=i;for(;;){if(a<=c){var
l=f.safeGet(a);if(42===l){if(h){var
n=h[2];bd(g,a9(h[1]));var
a=j(a+1|0),h=n;continue}throw[0,s,dQ]}ak(g,l);var
a=a+1|0;continue}return bc(g)}}}function
b5(a,b,c,d,e){var
f=Q(b,c,d,e);if(78!==a)if(av!==a)return f;f.safeSet(f.getLen()-1|0,bH);return f}function
b6(a){return function(d,b){var
k=d.getLen();function
l(a,b){var
m=40===a?41:bG,c=b;for(;;){if(k<=c)return aE(d);if(37===d.safeGet(c)){var
e=c+1|0;if(k<=e)return aE(d);var
f=d.safeGet(e),g=f-40|0;if(g<0||1<g){var
i=g-83|0;if(i<0||2<i)var
h=1;else
switch(i){case
1:var
h=1;break;case
2:var
j=1,h=0;break;default:var
j=0,h=0}if(h){var
c=e+1|0;continue}}else
var
j=0===g?0:1;if(j)return f===m?e+1|0:al(d,b,f);var
c=l(f,e+1|0)+1|0;continue}var
c=c+1|0;continue}}return l(a,b)}}function
b7(i,b,c){var
l=i.getLen()-1|0;function
s(a){var
k=a;a:for(;;){if(k<l){if(37===i.safeGet(k)){var
f=0,h=k+1|0;for(;;){if(l<h)var
e=aE(i);else{var
m=i.safeGet(h);if(58<=m){if(95===m){var
f=1,h=h+1|0;continue}}else
if(32<=m)switch(m+c0|0){case
1:case
2:case
4:case
5:case
6:case
7:case
8:case
9:case
12:case
15:break;case
0:case
3:case
11:case
13:var
h=h+1|0;continue;case
10:var
h=q(b,f,h,V);continue;default:var
h=h+1|0;continue}var
d=h;b:for(;;){if(l<d)var
e=aE(i);else{var
j=i.safeGet(d);if(126<=j)var
g=0;else
switch(j){case
78:case
88:case
aZ:case
V:case
bL:case
bH:case
bI:var
e=q(b,f,d,V),g=1;break;case
69:case
70:case
71:case
c3:case
bN:case
bM:var
e=q(b,f,d,bN),g=1;break;case
33:case
37:case
44:case
64:var
e=d+1|0,g=1;break;case
83:case
91:case
aw:var
e=q(b,f,d,aw),g=1;break;case
97:case
aW:case
bD:var
e=q(b,f,d,j),g=1;break;case
76:case
c7:case
av:var
t=d+1|0;if(l<t)var
e=q(b,f,d,V),g=1;else{var
p=i.safeGet(t)+c4|0;if(p<0||32<p)var
r=1;else
switch(p){case
0:case
12:case
17:case
23:case
29:case
32:var
e=n(c,q(b,f,d,j),V),g=1,r=0;break;default:var
r=1}if(r)var
e=q(b,f,d,V),g=1}break;case
67:case
99:var
e=q(b,f,d,99),g=1;break;case
66:case
98:var
e=q(b,f,d,66),g=1;break;case
41:case
bG:var
e=q(b,f,d,j),g=1;break;case
40:var
e=s(q(b,f,d,j)),g=1;break;case
bJ:var
u=q(b,f,d,j),v=n(b6(j),i,u),o=u;for(;;){if(o<(v-2|0)){var
o=n(c,o,i.safeGet(o));continue}var
d=v-1|0;continue b}default:var
g=0}if(!g)var
e=al(i,d,j)}break}}var
k=e;continue a}}var
k=k+1|0;continue}return k}}s(0);return 0}function
b8(a){var
d=[0,0,0,0];function
b(a,b,c){var
f=41!==c?1:0,g=f?bG!==c?1:0:f;if(g){var
e=97===c?2:1;if(aW===c)d[3]=d[3]+1|0;if(a)d[2]=d[2]+e|0;else
d[1]=d[1]+e|0}return b+1|0}b7(a,b,function(a,b){return a+1|0});return d[1]}function
b9(a,b,c){var
g=a.safeGet(c);if((g+ad|0)<0||9<(g+ad|0))return n(b,0,c);var
e=g+ad|0,d=c+1|0;for(;;){var
f=a.safeGet(d);if(48<=f){if(!(58<=f)){var
e=(10*e|0)+(f+ad|0)|0,d=d+1|0;continue}}else
if(36===f)return 0===e?a7(dS):n(b,[0,be(e-1|0)],d+1|0);return n(b,0,c)}}function
p(a,b){return a?b:b2(b)}function
b_(a,b){return a?a[1]:b}function
b$(aJ,b,c,d,e,f,g){var
A=i(b,g);function
ae(a){return n(d,A,a)}function
aK(a,b,h,aL){var
j=h.getLen();function
B(r,b){var
m=b;for(;;){if(j<=m)return i(a,A);var
d=h.safeGet(m);if(37===d){var
l=function(a,b){return o(aL,b_(a,b))},as=function(g,f,c,d){var
a=d;for(;;){var
_=h.safeGet(a)+c0|0;if(!(_<0||25<_))switch(_){case
1:case
2:case
4:case
5:case
6:case
7:case
8:case
9:case
12:case
15:break;case
10:return b9(h,function(a,b){var
d=[0,l(a,f),c];return as(g,p(a,f),d,b)},a+1|0);default:var
a=a+1|0;continue}var
o=h.safeGet(a);if(!(124<=o))switch(o){case
78:case
88:case
aZ:case
V:case
bL:case
bH:case
bI:var
a7=l(g,f),a9=aO(b5(o,h,m,a,c),a7);return q(p(g,f),a9,a+1|0);case
69:case
71:case
c3:case
bN:case
bM:var
a0=l(g,f),a1=by(Q(h,m,a,c),a0);return q(p(g,f),a1,a+1|0);case
76:case
c7:case
av:var
ab=h.safeGet(a+1|0)+c4|0;if(!(ab<0||32<ab))switch(ab){case
0:case
12:case
17:case
23:case
29:case
32:var
R=a+1|0,ad=o-108|0;if(ad<0||2<ad)var
af=0;else{switch(ad){case
1:var
af=0,ag=0;break;case
2:var
a6=l(g,f),aA=aO(Q(h,m,R,c),a6),ag=1;break;default:var
a5=l(g,f),aA=aO(Q(h,m,R,c),a5),ag=1}if(ag)var
az=aA,af=1}if(!af)var
a4=l(g,f),az=fB(Q(h,m,R,c),a4);return q(p(g,f),az,R+1|0)}var
a2=l(g,f),a3=aO(b5(av,h,m,a,c),a2);return q(p(g,f),a3,a+1|0);case
37:case
64:return q(f,aB(1,o),a+1|0);case
83:case
aw:var
w=l(g,f);if(aw===o)var
x=w;else{var
b=[0,0],am=w.getLen()-1|0,aM=0;if(!(am<0)){var
I=aM;for(;;){var
v=w.safeGet(I),bh=14<=v?34===v?1:92===v?1:0:11<=v?13<=v?1:0:8<=v?1:0,aQ=bh?2:bz(v)?1:4;b[1]=b[1]+aQ|0;var
aR=I+1|0;if(am!==I){var
I=aR;continue}break}}if(b[1]===w.getLen())var
aE=w;else{var
j=N(b[1]);b[1]=0;var
an=w.getLen()-1|0,aN=0;if(!(an<0)){var
H=aN;for(;;){var
u=w.safeGet(H),y=u-34|0;if(y<0||58<y)if(-20<=y)var
S=1;else{switch(y+34|0){case
8:j.safeSet(b[1],92);b[1]++;j.safeSet(b[1],98);var
G=1;break;case
9:j.safeSet(b[1],92);b[1]++;j.safeSet(b[1],bD);var
G=1;break;case
10:j.safeSet(b[1],92);b[1]++;j.safeSet(b[1],av);var
G=1;break;case
13:j.safeSet(b[1],92);b[1]++;j.safeSet(b[1],aW);var
G=1;break;default:var
S=1,G=0}if(G)var
S=0}else
var
S=(y-1|0)<0||56<(y-1|0)?(j.safeSet(b[1],92),b[1]++,j.safeSet(b[1],u),0):1;if(S)if(bz(u))j.safeSet(b[1],u);else{j.safeSet(b[1],92);b[1]++;j.safeSet(b[1],48+(u/aZ|0)|0);b[1]++;j.safeSet(b[1],48+((u/10|0)%10|0)|0);b[1]++;j.safeSet(b[1],48+(u%10|0)|0)}b[1]++;var
aP=H+1|0;if(an!==H){var
H=aP;continue}break}}var
aE=j}var
x=k(d3,k(aE,d2))}if(a===(m+1|0))var
aD=x;else{var
F=Q(h,m,a,c);try{var
T=0,s=1;for(;;){if(F.getLen()<=s)var
ao=[0,0,T];else{var
U=F.safeGet(s);if(49<=U)if(58<=U)var
ah=0;else
var
ao=[0,fL(aC(F,s,(F.getLen()-s|0)-1|0)),T],ah=1;else{if(45===U){var
T=1,s=s+1|0;continue}var
ah=0}if(!ah){var
s=s+1|0;continue}}var
X=ao;break}}catch(f){f=ac(f);if(f[1]!==a8)throw f;var
X=b4(F,0,aw)}var
J=X[1],z=x.getLen(),aS=X[2],K=0,aT=32;if(J===z)if(0===K)var
Y=x,ai=1;else
var
ai=0;else
var
ai=0;if(!ai)if(J<=z)var
Y=aC(x,K,z);else{var
W=aB(J,aT);if(aS)a$(x,K,W,0,z);else
a$(x,K,W,J-z|0,z);var
Y=W}var
aD=Y}return q(p(g,f),aD,a+1|0);case
67:case
99:var
r=l(g,f);if(99===o)var
ax=aB(1,r);else{if(39===r)var
t=du;else
if(92===r)var
t=dv;else{if(14<=r)var
C=0;else
switch(r){case
8:var
t=dw,C=1;break;case
9:var
t=dx,C=1;break;case
10:var
t=dy,C=1;break;case
13:var
t=dz,C=1;break;default:var
C=0}if(!C)if(bz(r)){var
aj=N(1);aj.safeSet(0,r);var
t=aj}else{var
D=N(4);D.safeSet(0,92);D.safeSet(1,48+(r/aZ|0)|0);D.safeSet(2,48+((r/10|0)%10|0)|0);D.safeSet(3,48+(r%10|0)|0);var
t=D}}var
ax=k(d0,k(t,dZ))}return q(p(g,f),ax,a+1|0);case
66:case
98:var
aX=a+1|0,aY=l(g,f)?dm:dn;return q(p(g,f),aY,aX);case
40:case
bJ:var
P=l(g,f),at=n(b6(o),h,a+1|0);if(bJ===o){var
L=bb(P.getLen()),ap=function(a,b){ak(L,b);return a+1|0};b7(P,function(a,b,c){if(a)bd(L,dR);else
ak(L,37);return ap(b,c)},ap);var
aU=bc(L);return q(p(g,f),aU,at)}var
au=p(g,f),bg=b1(b8(P),au);return aK(function(a){return B(bg,at)},au,P,aL);case
33:i(e,A);return B(f,a+1|0);case
41:return q(f,dX,a+1|0);case
44:return q(f,dY,a+1|0);case
70:var
$=l(g,f);if(0===c)var
ay=d1;else{var
Z=Q(h,m,a,c);if(70===o)Z.safeSet(Z.getLen()-1|0,bM);var
ay=Z}var
ar=fr($);if(3===ar)var
aa=$<0?dU:dV;else
if(4<=ar)var
aa=dW;else{var
O=by(ay,$),M=0,aV=O.getLen();for(;;){if(aV<=M)var
aq=k(O,dT);else{var
E=O.safeGet(M)-46|0,bi=E<0||23<E?55===E?1:0:(E-1|0)<0||21<(E-1|0)?1:0;if(!bi){var
M=M+1|0;continue}var
aq=O}var
aa=aq;break}}return q(p(g,f),aa,a+1|0);case
91:return al(h,a,o);case
97:var
aF=l(g,f),aG=b2(b_(g,f)),aH=l(0,aG),a_=a+1|0,ba=p(g,aG);if(aJ)ae(n(aF,0,aH));else
n(aF,A,aH);return B(ba,a_);case
aW:return al(h,a,o);case
bD:var
aI=l(g,f),be=a+1|0,bf=p(g,f);if(aJ)ae(i(aI,0));else
i(aI,A);return B(bf,be)}return al(h,a,o)}},f=m+1|0,g=0;return b9(h,function(a,b){return as(a,r,g,b)},f)}n(c,A,d);var
m=m+1|0;continue}}function
q(a,b,c){ae(b);return B(a,c)}return B(b,0)}var
q=be(0);function
j(a,b){return aK(f,q,a,b)}var
l=b8(g);if(l<0||6<l){var
m=function(f,b){if(l<=f){var
i=z(l,0),k=function(a,b){return h(i,(l-a|0)-1|0,b)},c=0,a=b;for(;;){if(a){var
d=a[2],e=a[1];if(d){k(c,e);var
c=c+1|0,a=d;continue}k(c,e)}return j(g,i)}}return function(a){return m(f+1|0,[0,a,b])}};return m(0,0)}switch(l){case
1:return function(a){var
b=z(1,0);h(b,0,a);return j(g,b)};case
2:return function(a,b){var
c=z(2,0);h(c,0,a);h(c,1,b);return j(g,c)};case
3:return function(a,b,c){var
d=z(3,0);h(d,0,a);h(d,1,b);h(d,2,c);return j(g,d)};case
4:return function(a,b,c,d){var
e=z(4,0);h(e,0,a);h(e,1,b);h(e,2,c);h(e,3,d);return j(g,e)};case
5:return function(a,b,c,d,e){var
f=z(5,0);h(f,0,a);h(f,1,b);h(f,2,c);h(f,3,d);h(f,4,e);return j(g,f)};case
6:return function(a,b,c,d,e,f){var
i=z(6,0);h(i,0,a);h(i,1,b);h(i,2,c);h(i,3,d);h(i,4,e);h(i,5,f);return j(g,i)};default:return j(g,[0])}}function
ca(d){function
e(a){return 0}function
b(a){return d}var
c=0;return function(a){return b$(c,b,ds,bV,bX,e,a)}}function
d4(a){return bb(2*a.getLen()|0)}function
u(a){function
b(a){var
b=bc(a);a[2]=0;return b}return b$(1,d4,ak,bd,function(a){return 0},b,a)}var
bf=[0,0];function
bh(a,b){var
c=a[b+1];if(f0(c)){if(aP(c)===252)return i(u(d5),c);if(aP(c)===253){var
e=by(dq,c),d=0,g=e.getLen();for(;;){if(g<=d)return k(e,dp);var
f=e.safeGet(d),h=48<=f?58<=f?0:1:45===f?1:0;if(h){var
d=d+1|0;continue}return e}}return d6}return i(u(d7),c)}function
cb(a,b){if(a.length-1<=b)return d8;var
c=cb(a,b+1|0),d=bh(a,b);return n(u(d9),d,c)}function
cc(a){var
b=bf[1];for(;;){if(b){var
r=b[2],t=b[1];try{var
v=i(t,a),e=v}catch(f){var
e=0}if(e)return e[1];var
b=r;continue}if(a===ec)return ed;if(a===cd)return ee;if(a[1]===ce){var
f=a[2],j=f[3],w=f[2],x=f[1];return aQ(u(bg),x,w,j,j+5|0,ef)}if(a[1]===s){var
g=a[2],l=g[3],y=g[2],z=g[1];return aQ(u(bg),z,y,l,l+6|0,eg)}if(a[1]===cf){var
h=a[2],m=h[3],A=h[2],B=h[1];return aQ(u(bg),B,A,m,m+6|0,eh)}if(0===aP(a)){var
d=a.length-1,C=a[0+1][0+1];if(d<0||2<d)var
o=cb(a,2),p=bh(a,1),c=n(u(d_),p,o);else
switch(d){case
1:var
c=ea;break;case
2:var
q=bh(a,1),c=i(u(eb),q);break;default:var
c=d$}return k(C,c)}return a[0+1]}}function
cg(a){var
h=ft(fz(0));if(h){var
d=h[1],f=d.length-1-1|0,q=0;if(!(f<0)){var
c=q;for(;;){if(fZ(o(d,c),eo)){var
b=o(d,c),j=0===b[0]?b[1]:b[1],e=j?0===c?ei:el:0===c?em:en;if(0===b[0])var
k=b[5],l=b[4],m=b[3],p=b[2],g=aQ(u(ej),e,p,m,l,k);else
var
g=i(u(ek),e);n(ca(a),ep,g)}var
r=c+1|0;if(f!==c){var
c=r;continue}break}}return 0}return i(ca(a),eq)}function
ch(a){bf[1]=[0,a,bf[1]];return 0}32===ba;try{var
fo=cO(fn),bi=fo}catch(f){f=ac(f);if(f!==ai)throw f;try{var
fm=cO(fl),ci=fm}catch(f){f=ac(f);if(f!==ai)throw f;var
ci=er}var
bi=ci}var
bY=bi.getLen(),es=82,bZ=0;if(0<=0)if(bY<bZ)var
aR=0;else
try{var
aD=bZ;for(;;){if(bY<=aD)throw ai;if(bi.safeGet(aD)!==es){var
aD=aD+1|0;continue}var
aR=1;break}}catch(f){f=ac(f);if(f!==ai)throw f;var
aR=1}else
var
aR=0;if(!aR)Y(dC);G([f,eu,0]);function
cj(a){var
b=[];gf(b,[0,b,b]);return b}var
bj=G([f,ev,0]),R=[0,0];function
bk(a){var
c=a[1];if(3===c[0]){var
d=c[1],b=bk(d);if(b!==d)a[1]=[3,b];return b}return a}function
_(a){return bk(a)}var
bl=[0,function(a){bW(ew);bW(cc(a));cN(ah,10);cg(ah);bX(ah);a_(0);return f$(2)}];function
ck(a,b){try{var
c=i(a,b)}catch(f){f=ac(f);return i(bl[1],f)}return c}function
bA(a,b,c,d){var
f=c,e=d;for(;;)if(typeof
f===A)return a<50?H(1+a,b,e):I(H,[0,b,e]);else
switch(f[0]){case
1:i(f[1],b);return a<50?H(1+a,b,e):I(H,[0,b,e]);case
2:var
h=[0,f[2],e],f=f[1],e=h;continue;default:var
g=f[1][1];if(g){i(g[1],b);return a<50?H(1+a,b,e):I(H,[0,b,e])}else
return a<50?H(1+a,b,e):I(H,[0,b,e])}}function
H(a,b,c){return c?a<50?bA(1+a,b,c[1],c[2]):I(bA,[0,b,c[1],c[2]]):0}function
ex(b,c,d){return aS(bA(0,b,c,d))}function
gi(b,c){return aS(H(0,b,c))}function
bB(a,b,c){var
e=b,d=c;for(;;)if(typeof
e===A)return a<50?T(1+a,d):I(T,[0,d]);else
switch(e[0]){case
1:var
f=e[1];if(f[4]){f[4]=0;f[1][2]=f[2];f[2][1]=f[1]}return a<50?T(1+a,d):I(T,[0,d]);case
2:var
h=[0,e[2],d],e=e[1],d=h;continue;default:var
g=e[2];R[1]=e[1];ck(g,0);return a<50?T(1+a,d):I(T,[0,d])}}function
T(a,b){return b?a<50?bB(1+a,b[1],b[2]):I(bB,[0,b[1],b[2]]):0}function
ey(b,c){return aS(bB(0,b,c))}function
gj(b){return aS(T(0,b))}function
aF(a,b){var
c=1===b[0]?b[1]===bj?(ey(a[4],0),1):0:0;return ex(b,a[2],0)}var
bm=[0,0],Z=[0,0,0];function
bn(a,b){var
h=[0,b],i=bk(a),e=i[1];switch(e[0]){case
1:if(e[1]===bj)return 0;break;case
2:var
k=e[1];i[1]=h;var
g=R[1],j=bm[1]?1:(bm[1]=1,0);aF(k,h);if(j){R[1]=g;return 0}for(;;){if(0===Z[1]){bm[1]=0;R[1]=g;return 0}if(0===Z[1])throw dF;Z[1]=Z[1]-1|0;var
c=Z[2],d=c[2];if(d===c)Z[2]=0;else
c[2]=d[2];var
f=d[1];aF(f[1],f[2]);continue}}return Y(ez)}function
cl(a,b){return typeof
a===A?b:typeof
b===A?a:[2,a,b]}function
bo(a){if(typeof
a!==A)switch(a[0]){case
2:var
b=a[1],c=bo(a[2]);return cl(bo(b),c);case
1:break;default:if(!a[1][1])return 0}return a}function
cm(a){var
b=[0,[2,[0,1,0,0,0]]];return[0,b,b]}function
cn(a,b){var
d=[1,b],c=a[2],e=typeof
c===A?d:[2,d,c];a[2]=e;return 0}function
bp(a,b){var
d=_(a),c=d[1];switch(c[0]){case
1:return[0,c];case
2:var
k=[0,[2,[0,[0,[0,d]],0,0,0]]],e=c[1],u=R[1];cn(e,function(a){switch(a[0]){case
0:var
v=a[1];R[1]=u;try{var
w=i(b,v),q=w}catch(f){f=ac(f);var
q=[0,[1,f]]}var
d=_(k),g=_(q),l=d[1];if(2===l[0]){var
c=l[1];if(d===g)return 0;var
e=g[1];if(2===e[0]){var
f=e[1];g[1]=[3,d];c[1]=f[1];var
m=cl(c[2],f[2]),n=c[3]+f[3]|0;if(42<n){c[3]=0;c[2]=bo(m)}else{c[3]=n;c[2]=m}var
h=f[4],j=c[4],r=typeof
j===A?h:typeof
h===A?j:[2,j,h];c[4]=r;return 0}d[1]=e;return aF(c,e)}throw[0,s,eA];case
1:var
o=_(k),p=o[1];if(2===p[0]){var
t=p[1];o[1]=a;return aF(t,a)}throw[0,s,eB];default:throw[0,s,eC]}});return k;case
3:throw[0,s,eD];default:return i(b,c[1])}}var
eG=[0,function(a){return 0}],x=cj(0),eH=[0,0],$=c,aG=null,co=undefined,D=true,bq=false,cp=Array,aH=Date;function
eI(a){var
e=1-(x[2]===x?1:0);if(e){var
b=cj(0);b[1][2]=x[2];x[2][1]=b[1];b[1]=x[1];x[1][2]=b;x[1]=x;x[2]=x;eH[1]=0;var
c=b[2];for(;;){var
d=c!==b?1:0;if(d){if(c[4])bn(c[3],0);var
c=c[2];continue}return d}}return e}var
cq=G([f,eJ,0]),br=[0,cq,{}],et=aP(br)===f?br:br[0+1];bx(eK,et);ch(function(a){return a[1]===cq?[0,new
X(a[2].toString())]:0});ch(function(a){return a
instanceof
cp?0:[0,new
X(a.toString())]});function
cr(a){return a}function
d(a,b){a.appendChild(b);return 0}function
E(d){return cr(bC(function(a){if(a){var
e=i(d,a);if(!(e|0))a.preventDefault();return e}var
c=event,b=i(d,c);if(!(b|0))c.returnValue=b;return b}))}function
cs(a){return a.toString()}function
ct(e,b,c,d){if(e.addEventListener===co){var
f="on".concat(b),g=function(a){var
d=[0,c,a,[0]];return function(a,b){return fN(d,a,b)}};e.attachEvent(f,g);return function(a){return e.detachEvent(f,g)}}e.addEventListener(b,c,d);return function(a){return e.removeEventListener(b,c,d)}}function
cu(a){return i(a,0)}var
eM=cs(eL),aI="2d",eO=cs(eN),e=$.document;function
aJ(a,b){return a?i(b,a[1]):0}function
bs(a,b){return a.createElement(b.toString())}function
S(a,b){return bs(a,b)}var
cv=[0,c1];function
cw(a,b,c,d){for(;;){if(0===a)if(0===b)return bs(c,d);var
i=cv[1];if(c1===i){try{var
k=e.createElement('<input name="x">'),l=k.tagName.toLowerCase()===cQ?1:0,n=l?k.name===cU?1:0:l,j=n}catch(f){var
j=0}var
m=j?cR:-1003883683;cv[1]=m;continue}if(cR<=i){var
f=new
cp();f.push("<",d.toString());aJ(a,function(a){f.push(' type="',cP(a),aV);return 0});aJ(b,function(a){f.push(' name="',cP(a),aV);return 0});f.push(">");return c.createElement(f.join(g))}var
h=bs(c,d);aJ(a,function(a){return h.type=a});aJ(b,function(a){return h.name=a});return h}}function
bt(a,b,c){return cw(a,b,c,eR)}function
cx(a){return S(a,eS)}function
aK(a){return S(a,eT)}var
eY=G([f,eX,0]);$.HTMLElement===co;var
e0=fO(0),e1=bF;eG[1]=function(a){return 1===a?($.setTimeout(bC(eI),0),0):0};function
cy(a){return e0.log(a.toString())}bl[1]=function(a){cy(e2);cy(cc(a));return cg(ah)};var
l=4*0.785398163397448279,am=23.5*l/180,cz="button",aL=at,bu=0.0400000000000000078;function
cA(a,b,c){var
d=[0,0],g=a.toString(),h=b.toString(),f=bt([0,cz],0,e);f.value=g;f.onclick=E(function(a){d[1]=1-d[1];var
b=d[1]?h:g;f.value=b;i(c,d[1]);return D});return f}function
cB(a,b,c){var
f=bt([0,"checkbox"],0,e);f.checked=!!b;f.onclick=E(function(a){i(c,f.checked|0);return D});var
g=cx(e);d(g,f);d(g,e.createTextNode(a.toString()));return g}function
m(a,b,c){return[C,a,b,c]}function
cC(a,b){return[C,b[1]-a[1],b[2]-a[2],b[3]-a[3]]}function
an(a,b){var
c=b[3],d=b[2],e=b[1],f=a[3],g=a[2],h=a[1];return[C,e*h[1]+d*h[2]+c*h[3],e*g[1]+d*g[2]+c*g[3],e*f[1]+d*f[2]+c*f[3]]}function
cD(a){var
b=a[3],c=a[2],d=a[1];return[0,[C,d[1],c[1],b[1]],[C,d[2],c[2],b[2]],[C,d[3],c[3],b[3]]]}function
aM(a,b){var
c=cD(b),d=an(c,a[3]),e=an(c,a[2]);return[0,an(c,a[1]),e,d]}function
bv(a){var
b=Math.cos(a),c=Math.sin(a),d=m(-c,0,b),e=m(0,1,0);return[0,m(b,0,c),e,d]}function
cE(a){var
b=Math.cos(a),c=Math.sin(a),d=m(0,0,1),e=m(-c,b,0);return[0,m(b,c,0),e,d]}var
cF=bv(0);function
ao(a,b,c){return[0,a,b,c]}function
aN(a,b){var
c=S(e,eZ);if(1-(c.getContext==aG?1:0)){c.width=a;c.height=b;return c}throw eY}function
ab(a,b){return a<b?a:b}function
t(a,b){return a<b?b:a}var
cG=l/8,y=8*12|0,K=z(y+2|0,m(0,0,0)),L=z(y*2|0,ao(0,0,0)),cH=y+1|0;h(K,y,m(0,-1,0));h(K,cH,m(0,1,0));var
cI=12-1|0,M=8,e3=2*l/12,e4=(l-cG)/2,e5=0;if(!(cI<0)){var
ap=e5;for(;;){var
cJ=M-1|0,e6=0;if(!(cJ<0)){var
aa=e6;for(;;){var
cK=ap*e3,bw=aa*cG-e4,a=(ap*M|0)+aa|0;h(K,a,m(Math.cos(cK)*Math.cos(bw),Math.sin(bw),Math.sin(cK)*Math.cos(bw)));if(0===aa){h(L,2*a|0,ao(y,a,ar(a+M|0,y)));h(L,(2*a|0)+1|0,ao(cH,ar((a+(2*M|0)|0)-1|0,y),(a+M|0)-1|0))}else{h(L,2*a|0,ao(a,ar(a+M|0,y),a-1|0));h(L,(2*a|0)+1|0,ao(a-1|0,ar(a+M|0,y),ar((a+M|0)-1|0,y)))}var
e8=aa+1|0;if(cJ!==aa){var
aa=e8;continue}break}}var
e7=ap+1|0;if(cI!==ap){var
ap=e7;continue}break}}var
fc="../planet/texture.jpg";$.onload=E(function(a){function
p(a){var
Y=a.width,Z=a.height,z=aN(Y,Z),f=z.getContext(aI),q=Z/8|0,h=Y/8|0,aa=f.getImageData(0,0,h,q),ac=aa.data,aj=c6;function
ad(a){var
d=q-1|0,m=Math.cos(a),n=-Math.sin(a),o=0;if(!(d<0)){var
b=o;for(;;){var
e=(h/2|0)-1|0,p=0;if(!(e<0)){var
c=p;for(;;){var
g=(b/q-c6)*l,i=Math.cos(c/h*2*l)*Math.cos(g)*m+Math.sin(g)*n,s=4*(c+b*h)|0,t=4*(h-c+b*h-1)|0,j=0<i?bu:bu-i*(1-bu)*1.2,u=j<=1?j:1,k=O-(255.99*Math.pow(u,aj)|0)|0;ac[s+3|0]=k;ac[t+3|0]=k;var
v=c+1|0;if(e!==c){var
c=v;continue}break}}var
r=b+1|0;if(d!==b){var
b=r;continue}break}}f.putImageData(aa,0,0);f.globalCompositeOperation=cV;f.save();f.scale(8*(h+2|0)/h,8*(q+2|0)/q);f.translate(-1,-1);f.drawImage(z,0,0);return f.restore()}ad(am);var
B=a.width,ae=aN(B,a.height),F=ae.getContext(aI),J=[0,0],M=aN(aL,aL),aq=aN(aL,aL);d(e.body,M);var
N=M.getContext(aI),c=aq.getContext(aI),b=a.width,r=a.height,k=300,P=aA(function(a){var
c=(b-Math.atan2(a[3],a[1])*((b/2-cX)/l)|0)%b,d=r/2+Math.asin(a[2])*((r-cX)/l)|0;if(0<=c){if(c<b){if(0<=d){if(d<r)return[0,c,d];throw[0,s,e9]}throw[0,s,e_]}throw[0,s,e$]}throw[0,s,fa]},K),aO=aA(function(a){var
j=o(K,a[1]),k=o(K,a[2]),b=cC(j,o(K,a[3])),c=cC(j,k),d=b[3],e=b[2],f=b[1],g=c[3],h=c[2],i=c[1];return[C,h*d-e*g,g*f-d*i,i*e-f*h]},L),Q=[0,0],ar=[0,0],au=[0,1],av=[0,1],af=[0,am],aP=aA(function(a){var
K=o(P,a[1]),k=K[2],L=K[1],M=o(P,a[2]),l=M[2],m=M[1],N=o(P,a[3]),n=N[2],f=N[1],c=b/2;if(L==0){if(c<m)var
C=1;else
if(c<f)var
C=1;else
var
B=0,C=0;if(C)var
g=b-2,B=1}else
var
B=0;if(!B)var
g=L;if(m==0){if(c<g)var
E=1;else
if(c<f)var
E=1;else
var
D=0,E=0;if(E)var
h=b-2,D=1}else
var
D=0;if(!D)var
h=m;if(f==0){if(c<h)var
G=1;else
if(c<g)var
G=1;else
var
F=0,G=0;if(G)var
i=b-2,F=1}else
var
F=0;if(!F)var
i=f;var
p=r-2;if(k==0)var
H=0;else
if(p<=k)var
H=0;else
var
j=g,H=1;if(!H)var
j=(h+i)/2;if(l==0)var
I=0;else
if(p<=l)var
I=0;else
var
q=h,I=1;if(!I)var
q=(j+i)/2;if(n==0)var
J=0;else
if(p<=n)var
J=0;else
var
O=i,J=1;if(!J)var
O=(q+j)/2;var
d=t(1,j),s=t(1,q),u=t(1,O),e=t(1,k),v=t(1,l),w=t(1,n),x=s-d,y=u-d,z=v-e,A=w-e,Q=z*y-A*x,R=x*A-y*z,S=t(0,ab(d,ab(s,u))-4),T=t(0,ab(e,ab(v,w))-4),U=ab(b,t(d,t(s,u))+4);return[0,d,e,x/Q,z/R,y/Q,A/R,S,T,U-S,ab(r,t(e,t(v,w))+4)-T]},L),aw=[0,cE(-am)],p=[0,cF],G=[0,0],ax=e.createTextNode(g),v=aK(e);v.className="controls";var
ag=aK(e);d(ag,e.createTextNode("Click and drag mouse to rotate."));d(v,ag);var
j=aK(e);function
w(a){return S(e,eV)}d(j,cA(fe,fd,function(a){Q[1]=a;return 0}));d(j,w(0));d(j,cA(fg,ff,function(a){ar[1]=a;return 0}));d(j,w(0));var
I=bt([0,cz],0,e);I.value="Reset orientation";I.onclick=E(function(a){p[1]=cF;G[1]=0;aw[1]=cE(-af[1]);return D});d(j,I);d(j,w(0));var
T=cx(e);d(T,e.createTextNode("Date:"));var
y=cw(0,0,e,eQ),x=fh;for(;;){if(x){var
ah=x[2],ai=x[1],W=S(e,eP);d(W,e.createTextNode(ai.toString()));y.add(W,aG);var
x=ah;continue}y.onchange=E(function(a){var
b=y.selectedIndex,c=0===b?am:1===b?0:-am;ad(c);af[1]=c;return D});d(T,y);d(j,T);d(v,j);var
n=aK(e);d(n,cB(fi,1,function(a){au[1]=a;return 0}));d(n,w(0));d(n,cB(fj,1,function(a){av[1]=a;return 0}));d(n,w(0));d(n,e.createTextNode("Frames per second: "));d(n,ax);d(v,n);d(e.body,v);var
X=S(e,eU);X.innerHTML="Credit: <a href='http://visibleearth.nasa.gov/'>Visual Earth</a>, Nasa";d(e.body,X);var
U=[0,0],V=[0,0];M.onmousedown=E(function(a){U[1]=a.clientX;V[1]=a.clientY;var
b=[0,aG],d=ct(e,eO,E(function(a){var
d=a.clientX,e=a.clientY,f=d-U[1]|0,g=e-V[1]|0;if(0!==g){var
h=2*g/at,b=Math.cos(h),c=Math.sin(h),l=p[1],i=m(0,-c,b),j=m(0,b,c);p[1]=aM([0,m(1,0,0),j,i],l)}if(0!==f){var
k=p[1];p[1]=aM(bv(2*f/at),k)}U[1]=d;V[1]=e;return D}),D);b[1]=cr(ct(e,eM,E(function(a){cu(d);var
c=b[1];if(c!=aG)cu(c);return D}),D));return bq});var
ay=[0,new
aH().getTime()],H=[0,0],az=function(aK,b){var
aL=bv(b-G[1]);if(au[1]){J[1]=0;F.drawImage(a,0,0);var
I=(2*l-b%(2*l))*B/2/l%B|0;F.drawImage(z,I,0);F.drawImage(z,I-B,0)}else
if(!J[1]){F.drawImage(a,0,0);J[1]=1}var
aN=aM(aw[1],aL),aB=aM(p[1],aN),n=aA(function(a){return an(aB,a)},K),m=an(cD(aB),fb);c.clearRect(0,0,at,at);c.save();if(av[1]){c.beginPath();c.arc(k,k,k*0.95,0,-2*l,D);c.clip()}c.setTransform(k-2,0,0,k-2,k,k);c.globalCompositeOperation="lighter";var
r=L.length-1-1|0,aF=0;if(!(r<0)){var
e=aF;for(;;){var
h=L[e+1],M=o(n,h[1]),f=M[2],g=M[1],O=o(n,h[2]),P=O[2],S=O[1],T=o(n,h[3]),U=T[2],V=T[1],q=o(aO,e);if(0<=q[1]*m[1]+q[2]*m[2]+q[3]*m[3]){c.beginPath();c.moveTo(g,f);c.lineTo(S,P);c.lineTo(V,U);c.closePath();c.save();c.clip();var
d=o(aP,e),W=d[10],X=d[9],Y=d[8],Z=d[7],aa=d[6],ab=d[5],ac=d[4],ad=d[3],af=d[2],ag=d[1],ah=S-g,ai=V-g,aj=P-f,ak=U-f,al=ah*aa-ai*ac,am=ah*ab-ai*ad,ao=aj*aa-ak*ac,ap=aj*ab-ak*ad;c.transform(al,ao,am,ap,g-al*ag-am*af,f-ao*ag-ap*af);c.drawImage(ae,Z,Y,X,W,Z,Y,X,W);c.restore()}var
aG=e+1|0;if(r!==e){var
e=aG;continue}break}}c.restore();N.globalCompositeOperation=cV;N.drawImage(aq,0,0);try{N.getImageData(0,0,1,1)}catch(f){}var
aC=new
aH().getTime(),aD=as/(aC-ay[1]),aQ=H[1]==0?aD:0.9*H[1]+0.1*aD;H[1]=aQ;var
aR=H[1];ax.data=i(u(fk),aR).toString();ay[1]=aC;function
aS(a){var
d=new
aH().getTime(),c=d-aK,f=c<0?0:as<c?0:c,e=2*l*f/as/10,h=Q[1]?0:ar[1]?(G[1]=G[1]+e,1):0,g=Q[1]?b:b+e;return az(d,g)}var
w=cm(0),x=w[1],y=[0,0],aT=0.01,aJ=w[2];function
C(a,b){var
c=bF<a?[0,e1,a-bF]:[0,a,0],d=c[2],e=c[1],f=d==0?function(a){return bn(aJ,a)}:function(a){return C(d,a)};y[1]=[0,$.setTimeout(bC(f),e*as)];return 0}C(aT,0);function
E(a){var
b=y[1];return b?$.clearTimeout(b[1]):0}var
j=_(x)[1];switch(j[0]){case
1:var
aE=j[1]===bj?(ck(E,0),1):0;break;case
2:var
s=j[1],t=[0,R[1],E],v=s[4],aI=typeof
v===A?t:[2,t,v];s[4]=aI;var
aE=1;break;default:var
aE=0}return bp(x,aS)};return az(new
aH().getTime(),0)}}var
c=S(e,eW);function
n(a){return[0,[0,c]]}var
f=cm(0),j=f[2],k=f[1];c.onload=E(function(a){bn(j,0);return bq});c.src=fc;var
b=_(bp(bp(k,n),p))[1];switch(b[0]){case
1:throw b[1];case
2:var
h=b[1];cn(h,function(a){switch(a[0]){case
0:return 0;case
1:return i(bl[1],a[1]);default:throw[0,s,eE]}});break;case
3:throw[0,s,eF]}return bq});a_(0);return}(this));
