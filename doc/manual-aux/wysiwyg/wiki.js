// This program was compiled from OCaml by js_of_ocaml 2.0+git-883a1ec
(function(n){"use strict";var
bd=125,bg=123,cG=254,L=255,cF=108,aB='"',v=16777215,cd="\\\\",cx=250,cn="jsError",bc=2147483,cc="input",ad=115,bl=102,bf=120,ay="formatblock",be=117,e="",cw="^",aF=100,q="0",cE="</a>",d=248,bk=103,cC="p",cD="fd ",aH="inserthtml",cv="[[",cu=1e3,aG="src/core/lwt.ml",bj="main.ml",cm="x",S=".",aD=65535,aE="+",cl="g",bb="f",cb="\n\n",N=105,ck="%d",cB=-88,ac=110,ct=785140586,aA="'",az="int_of_string",cs=-32,cj=982028505,bi=111,ca="cols",C=" ",ab="e",cr="I",cA="h1",ci="h3",cz="]]",M="-",R=-48,cq="nan",ba=116,ch='<a href="',cp="%.12g",bn=" : file already exists",cg="rows",bh="/",b$="5px",aC=114,co="#",cy=101,cf="h2",bm="index out of bounds",ce="B",u="number";function
cU(a,b){throw[0,a,b]}function
bs(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
b=n.console;b&&b.error&&b.error(a)}var
f=[0];function
af(a,b){if(!a)return e;if(a&1)return af(a-1,b)+b;var
c=af(a>>1,b);return c+c}function
g(a){if(a!=null){this.bytes=this.fullBytes=a;this.last=this.len=a.length}}function
cV(){cU(f[4],new
g(bm))}g.prototype={string:null,bytes:null,fullBytes:null,array:null,len:null,last:0,toJsString:function(){var
a=this.getFullBytes();try{return this.string=decodeURIComponent(escape(a))}catch(f){bs('MlString.toJsString: wrong encoding for "%s" ',a);return a}},toBytes:function(){if(this.string!=null)try{var
a=unescape(encodeURIComponent(this.string))}catch(f){bs('MlString.toBytes: wrong encoding for "%s" ',this.string);var
a=this.string}else{var
a=e,c=this.array,d=c.length;for(var
b=0;b<d;b++)a+=String.fromCharCode(c[b])}this.bytes=this.fullBytes=a;this.last=this.len=a.length;return a},getBytes:function(){var
a=this.bytes;if(a==null)a=this.toBytes();return a},getFullBytes:function(){var
a=this.fullBytes;if(a!==null)return a;a=this.bytes;if(a==null)a=this.toBytes();if(this.last<this.len){this.bytes=a+=af(this.len-this.last,"\0");this.last=this.len}this.fullBytes=a;return a},toArray:function(){var
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
b=this.bytes;if(b==null)b=this.toBytes();return a<this.last?b.charCodeAt(a):0},safeGet:function(a){if(this.len==null)this.toBytes();if(a<0||a>=this.len)cV();return this.get(a)},set:function(a,b){var
c=this.array;if(!c){if(this.last==a){this.bytes+=String.fromCharCode(b&L);this.last++;return 0}c=this.toArray()}else
if(this.bytes!=null)this.bytes=this.fullBytes=this.string=null;c[a]=b&L;return 0},safeSet:function(a,b){if(this.len==null)this.toBytes();if(a<0||a>=this.len)cV();this.set(a,b)},fill:function(a,b,c){if(a>=this.last&&this.last&&c==0)return;var
d=this.array;if(!d)d=this.toArray();else
if(this.bytes!=null)this.bytes=this.fullBytes=this.string=null;var
f=a+b;for(var
e=a;e<f;e++)d[e]=c},compare:function(a){if(this.string!=null&&a.string!=null){if(this.string<a.string)return-1;if(this.string>a.string)return 1;return 0}var
b=this.getFullBytes(),c=a.getFullBytes();if(b<c)return-1;if(b>c)return 1;return 0},equal:function(a){if(this.string!=null&&a.string!=null)return this.string==a.string;return this.getFullBytes()==a.getFullBytes()},lessThan:function(a){if(this.string!=null&&a.string!=null)return this.string<a.string;return this.getFullBytes()<a.getFullBytes()},lessEqual:function(a){if(this.string!=null&&a.string!=null)return this.string<=a.string;return this.getFullBytes()<=a.getFullBytes()}};function
l(a){this.string=a}l.prototype=new
g();function
br(a,b){cU(a,new
l(b))}function
T(a){br(f[4],a)}function
cI(){T(bm)}function
fz(a,b){if(b<0||b>=a.length-1)cI();return a[b+1]}function
fA(a,b,c){if(b<0||b>=a.length-1)cI();a[b+1]=c;return 0}function
cJ(a,b,c,d,e){if(e===0)return;if(d===c.last&&c.bytes!=null){var
f=a.bytes;if(f==null)f=a.toBytes();if(b>0||a.last>e)f=f.slice(b,b+e);c.bytes+=f;c.last+=f.length;return}var
g=c.array;if(!g)g=c.toArray();else
c.bytes=c.string=null;a.blitToArray(b,g,d,e)}function
E(c,b){if(c.fun)return E(c.fun,b);var
a=c.length,d=a-b.length;if(d==0)return c.apply(null,b);else
if(d<0)return E(c.apply(null,b.slice(0,a)),b.slice(a));else
return function(a){return E(c,b.concat([a]))}}function
fB(a){if(isFinite(a)){if(Math.abs(a)>=2.22507385850720138e-308)return 0;if(a!=0)return 1;return 2}return isNaN(a)?4:3}function
fC(){return 0}function
cH(a){this.bytes=e;this.len=a}cH.prototype=new
g();function
cL(a){if(a<0)T("String.create");return new
cH(a)}function
fE(a,b,c,d){a.fill(b,c,d)}function
bq(a){a=a.toString();var
e=a.length;if(e>31)T("format_int: format too long");var
b={justify:aE,signstyle:M,filler:C,alternate:false,base:0,signedconv:false,width:0,uppercase:false,sign:1,prec:-1,conv:bb};for(var
d=0;d<e;d++){var
c=a.charAt(d);switch(c){case
M:b.justify=M;break;case
aE:case
C:b.signstyle=c;break;case
q:b.filler=q;break;case
co:b.alternate=true;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":b.width=0;while(c=a.charCodeAt(d)-48,c>=0&&c<=9){b.width=b.width*10+c;d++}d--;break;case
S:b.prec=0;d++;while(c=a.charCodeAt(d)-48,c>=0&&c<=9){b.prec=b.prec*10+c;d++}d--;case"d":case"i":b.signedconv=true;case"u":b.base=10;break;case
cm:b.base=16;break;case"X":b.base=16;b.uppercase=true;break;case"o":b.base=8;break;case
ab:case
bb:case
cl:b.signedconv=true;b.conv=c;break;case"E":case"F":case"G":b.signedconv=true;b.uppercase=true;b.conv=c.toLowerCase();break}}return b}function
bo(a,b){if(a.uppercase)b=b.toUpperCase();var
f=b.length;if(a.signedconv&&(a.sign<0||a.signstyle!=M))f++;if(a.alternate){if(a.base==8)f+=1;if(a.base==16)f+=2}var
c=e;if(a.justify==aE&&a.filler==C)for(var
d=f;d<a.width;d++)c+=C;if(a.signedconv)if(a.sign<0)c+=M;else
if(a.signstyle!=M)c+=a.signstyle;if(a.alternate&&a.base==8)c+=q;if(a.alternate&&a.base==16)c+="0x";if(a.justify==aE&&a.filler==q)for(var
d=f;d<a.width;d++)c+=q;c+=b;if(a.justify==M)for(var
d=f;d<a.width;d++)c+=C;return new
l(c)}function
fF(a,b){var
c,f=bq(a),e=f.prec<0?6:f.prec;if(b<0){f.sign=-1;b=-b}if(isNaN(b)){c=cq;f.filler=C}else
if(!isFinite(b)){c="inf";f.filler=C}else
switch(f.conv){case
ab:var
c=b.toExponential(e),d=c.length;if(c.charAt(d-3)==ab)c=c.slice(0,d-1)+q+c.slice(d-1);break;case
bb:c=b.toFixed(e);break;case
cl:e=e?e:1;c=b.toExponential(e-1);var
i=c.indexOf(ab),h=+c.slice(i+1);if(h<-4||b.toFixed(0).length>e){var
d=i-1;while(c.charAt(d)==q)d--;if(c.charAt(d)==S)d--;c=c.slice(0,d+1)+c.slice(i);d=c.length;if(c.charAt(d-3)==ab)c=c.slice(0,d-1)+q+c.slice(d-1);break}else{var
g=e;if(h<0){g-=h+1;c=b.toFixed(g)}else
while(c=b.toFixed(g),c.length>e+1)g--;if(g){var
d=c.length-1;while(c.charAt(d)==q)d--;if(c.charAt(d)==S)d--;c=c.slice(0,d+1)}}break}return bo(f,c)}function
fG(a,b){if(a.toString()==ck)return new
l(e+b);var
c=bq(a);if(b<0)if(c.signedconv){c.sign=-1;b=-b}else
b>>>=0;var
d=b.toString(c.base);if(c.prec>=0){c.filler=C;var
f=c.prec-d.length;if(f>0)d=af(f,q)+d}return bo(c,d)}function
fI(){return 0}function
fK(a,b){var
c=a[3]<<16,d=b[3]<<16;if(c>d)return 1;if(c<d)return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
fU(a,b){if(a<b)return-1;if(a==b)return 0;return 1}function
cK(a,b,c){var
f=[];for(;;){if(!(c&&a===b))if(a
instanceof
g)if(b
instanceof
g){if(a!==b){var
e=a.compare(b);if(e!=0)return e}}else
return 1;else
if(a
instanceof
Array&&a[0]===(a[0]|0)){var
h=a[0];if(h===cG)h=0;if(h===cx){a=a[1];continue}else
if(b
instanceof
Array&&b[0]===(b[0]|0)){var
i=b[0];if(i===cG)i=0;if(i===cx){b=b[1];continue}else
if(h!=i)return h<i?-1:1;else
switch(h){case
d:var
e=fU(a[2],b[2]);if(e!=0)return e;break;case
251:T("equal: abstract value");case
L:var
e=fK(a,b);if(e!=0)return e;break;default:if(a.length!=b.length)return a.length<b.length?-1:1;if(a.length>1)f.push(a,b,1)}}else
return 1}else
if(b
instanceof
g||b
instanceof
Array&&b[0]===(b[0]|0))return-1;else
if(typeof
a!=u&&a&&a.compare)return a.compare(b,c);else{if(a<b)return-1;if(a>b)return 1;if(a!=b){if(!c)return NaN;if(a==a)return 1;if(b==b)return-1}}if(f.length==0)return 0;var
j=f.pop();b=f.pop();a=f.pop();if(j+1<a.length)f.push(a,b,j+1);a=a[j];b=b[j]}}function
fJ(a,b){return+(cK(a,b,false)>=0)}function
fN(a){return(a[3]|a[2]|a[1])==0}function
fQ(a){return[L,a&v,a>>24&v,a>>31&aD]}function
fR(a,b){var
c=a[1]-b[1],d=a[2]-b[2]+(c>>24),e=a[3]-b[3]+(d>>24);return[L,c&v,d&v,e&aD]}function
cN(a,b){if(a[3]>b[3])return 1;if(a[3]<b[3])return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
cM(a){a[3]=a[3]<<1|a[2]>>23;a[2]=(a[2]<<1|a[1]>>23)&v;a[1]=a[1]<<1&v}function
fO(a){a[1]=(a[1]>>>1|a[2]<<23)&v;a[2]=(a[2]>>>1|a[3]<<23)&v;a[3]=a[3]>>>1}function
fT(a,b){var
e=0,d=a.slice(),c=b.slice(),f=[L,0,0,0];while(cN(d,c)>0){e++;cM(c)}while(e>=0){e--;cM(f);if(cN(d,c)>=0){f[1]++;d=fR(d,c)}fO(c)}return[0,f,d]}function
fS(a){return a[1]|a[2]<<24}function
fM(a){return a[3]<<16<0}function
fP(a){var
b=-a[1],c=-a[2]+(b>>24),d=-a[3]+(c>>24);return[L,b&v,c&v,d&aD]}function
fL(a,b){var
c=bq(a);if(c.signedconv&&fM(b)){c.sign=-1;b=fP(b)}var
d=e,i=fQ(c.base),h="0123456789abcdef";do{var
g=fT(b,i);b=g[1];d=h.charAt(fS(g[2]))+d}while(!fN(b));if(c.prec>=0){c.filler=C;var
f=c.prec-d.length;if(f>0)d=af(f,q)+d}return bo(c,d)}function
f$(a){var
b=0,c=10,d=a.get(0)==45?(b++,-1):1;if(a.get(b)==48)switch(a.get(b+1)){case
bf:case
88:c=16;b+=2;break;case
bi:case
79:c=8;b+=2;break;case
98:case
66:c=2;b+=2;break}return[b,d,c]}function
cS(a){if(a>=48&&a<=57)return a-48;if(a>=65&&a<=90)return a-55;if(a>=97&&a<=122)return a-87;return-1}function
aI(a){br(f[3],a)}function
fV(a){var
g=f$(a),f=g[0],h=g[1],d=g[2],i=-1>>>0,e=a.get(f),c=cS(e);if(c<0||c>=d)aI(az);var
b=c;for(;;){f++;e=a.get(f);if(e==95)continue;c=cS(e);if(c<0||c>=d)break;b=d*b+c;if(b>i)aI(az)}if(f!=a.getLen())aI(az);b=h*b;if(d==10&&(b|0)!=b)aI(az);return b|0}function
fW(a){return+(a>31&&a<127)}function
fX(){var
b=n.console?n.console:{},c=["log","debug","info","warn","error","assert","dir","dirxml","trace","group","groupCollapsed","groupEnd","time","timeEnd"];function
d(){}for(var
a=0;a<c.length;a++)if(!b[c[a]])b[c[a]]=d;return b}var
aJ={amp:/&/g,lt:/</g,quot:/\"/g,all:/[&<\"]/};function
fY(a){if(!aJ.all.test(a))return a;return a.replace(aJ.amp,"&amp;").replace(aJ.lt,"&lt;").replace(aJ.quot,"&quot;")}function
fZ(a){var
c=Array.prototype.slice;return function(){var
b=arguments.length>0?c.call(arguments):[undefined];return E(a,b)}}function
f0(a,b){var
d=[0];for(var
c=1;c<=a;c++)d[c]=b;return d}function
r(a){br(f[2],a)}function
cO(a){if(!a.opened)r("Cannot flush a closed channel");if(a.buffer==e)return 0;if(a.output)switch(a.output.length){case
2:a.output(a,a.buffer);break;default:a.output(a.buffer)}a.buffer=e}function
cT(a){a=a
instanceof
g?a.toString():a;r(a+": No such file or directory")}var
fD=bh;function
aK(a){a=a
instanceof
g?a.toString():a;if(a.charCodeAt(0)!=47)a=fD+a;var
d=a.split(bh),b=[];for(var
c=0;c<d.length;c++)switch(d[c]){case"..":if(b.length>1)b.pop();break;case
S:case
e:if(b.length==0)b.push(e);break;default:b.push(d[c]);break}b.orig=a;return b}function
O(){this.content={}}O.prototype={exists:function(a){return this.content[a]?1:0},mk:function(a,b){this.content[a]=b},get:function(a){return this.content[a]},list:function(){var
a=[];for(var
b
in
this.content)a.push(b);return a},remove:function(a){delete
this.content[a]}};var
aM=new
O();aM.mk(e,new
O());function
bp(a){var
b=aM;for(var
c=0;c<a.length;c++){if(!(b.exists&&b.exists(a[c])))cT(a.orig);b=b.get(a[c])}return b}function
gk(a){var
c=aK(a),b=bp(c);return b
instanceof
O?1:0}function
ae(a){this.data=a}ae.prototype={content:function(){return this.data},truncate:function(){this.data.length=0}};function
fH(a,b){var
e=aK(a),c=aM;for(var
f=0;f<e.length-1;f++){var
d=e[f];if(!c.exists(d))c.mk(d,new
O());c=c.get(d);if(!(c
instanceof
O))r(e.orig+bn)}var
d=e[e.length-1];if(c.exists(d))r(e.orig+bn);if(b
instanceof
O)c.mk(d,b);else
if(b
instanceof
ae)c.mk(d,b);else
if(b
instanceof
g)c.mk(d,new
ae(b.getArray()));else
if(b
instanceof
Array)c.mk(d,new
ae(b));else
if(b.toString)c.mk(d,new
ae(new
g(b.toString()).getArray()));else
T("caml_fs_register")}function
gj(a){var
b=aM,d=aK(a),e;for(var
c=0;c<d.length;c++){if(b.auto)e=b.auto;if(!(b.exists&&b.exists(d[c])))return e?e(d.join(bh)):0;b=b.get(d[c])}return 1}function
ag(a,b,c){if(f.fds===undefined)f.fds=new
Array();c=c?c:{};var
d={};d.array=b;d.offset=c.append?d.array.length:0;d.flags=c;f.fds[a]=d;f.fd_last_idx=a;return a}function
gs(a,b,c){var
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
g=a.toString(),i=aK(a);if(d.rdonly&&d.wronly)r(g+" : flags Open_rdonly and Open_wronly are not compatible");if(d.text&&d.binary)r(g+" : flags Open_text and Open_binary are not compatible");if(gj(a)){if(gk(a))r(g+" : is a directory");if(d.create&&d.excl)r(g+bn);var
h=f.fd_last_idx?f.fd_last_idx:0,e=bp(i);if(d.truncate)e.truncate();return ag(h+1,e.content(),d)}else
if(d.create){var
h=f.fd_last_idx?f.fd_last_idx:0;fH(a,[]);var
e=bp(i);return ag(h+1,e.content(),d)}else
cT(a)}ag(0,[]);ag(1,[]);ag(2,[]);function
f1(a){var
b=f.fds[a];if(b.flags.wronly)r(cD+a+" is writeonly");return{data:b,fd:a,opened:true}}function
gp(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
b=n.console;b&&b.log&&b.log(a)}var
aL=new
Array();function
gd(a,b){var
e=new
g(b),d=e.getLen();for(var
c=0;c<d;c++)a.data.array[a.data.offset+c]=e.get(c);a.data.offset+=d;return 0}function
f2(a){var
b;switch(a){case
1:b=gp;break;case
2:b=bs;break;default:b=gd}var
d=f.fds[a];if(d.flags.rdonly)r(cD+a+" is readonly");var
c={data:d,fd:a,opened:true,buffer:e,output:b};aL[c.fd]=c;return c}function
f3(){var
a=0;for(var
b
in
aL)if(aL[b].opened)a=[0,aL[b],a];return a}function
cP(a,b,c,d){if(!a.opened)r("Cannot output to a closed channel");var
f;if(c==0&&b.getLen()==d)f=b;else{f=cL(d);cJ(b,c,f,0,d)}var
e=f.toString(),g=e.lastIndexOf("\n");if(g<0)a.buffer+=e;else{a.buffer+=e.substr(0,g+1);cO(a);a.buffer+=e.substr(g+1)}}function
cR(a){return new
g(a)}function
f4(a,b){var
c=cR(String.fromCharCode(b));cP(a,c,0,1)}if(!Math.imul)Math.imul=function(a,b){return((a>>16)*b<<16)+(a&aD)*b|0};var
f5=Math.imul;function
f7(a,b){return+(cK(a,b,false)!=0)}function
f8(a){return+(a
instanceof
Array)}function
f9(a){return a
instanceof
Array?a[0]:cu}function
ga(a,b){f[a+1]=b}var
cQ={};function
gb(a,b){cQ[a.toString()]=b;return 0}var
f_=0;function
gc(a){a[2]=f_++;return a}function
ge(a,b){return a.compare(b)}function
gf(a,b){var
c=a.fullBytes,d=b.fullBytes;if(c!=null&&d!=null)return c==d?1:0;return a.getFullBytes()==b.getFullBytes()?1:0}function
gg(a,b){return 1-gf(a,b)}function
gh(){return 32}function
gi(a){if(n.quit)n.quit(a);T("Function 'exit' not implemented")}function
gl(a){var
b=1;while(a&&a.joo_tramp){a=a.joo_tramp.apply(null,a.joo_args);b++}return a}function
gm(a,b){return{joo_tramp:a,joo_args:b}}function
gn(a,b){if(typeof
b==="function"){a.fun=b;return 0}if(b.fun){a.fun=b.fun;return 0}var
c=b.length;while(c--)a[c]=b[c];return 0}function
f6(a){return cQ[a]}function
go(a){if(a
instanceof
Array)return a;if(n.RangeError&&a
instanceof
n.RangeError&&a.message&&a.message.match(/maximum call stack/i))return[0,f[9]];if(n.InternalError&&a
instanceof
n.InternalError&&a.message&&a.message.match(/too much recursion/i))return[0,f[9]];if(a
instanceof
n.Error)return[0,f6(cn),a];return[0,f[3],new
l(String(a))]}var
a6=fz,j=fA,D=cJ,z=cL,a7=fF,at=fG,a8=fW,b_=fY,a$=fZ,J=f0,b7=cO,b6=f2,b8=f4,b9=f5,b=cR,av=f9,y=ga,a5=gb,a=gc,c=gg,ax=gl,B=gm,au=go;function
h(a,b){return a.length==1?a(b):E(a,[b])}function
o(a,b,c){return a.length==2?a(b,c):E(a,[b,c])}function
k(a,b,c,d){return a.length==3?a(b,c,d):E(a,[b,c,d])}function
aw(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):E(a,[b,c,d,e,f])}var
aP=[d,b("Failure"),-3],aN=[d,b("Invalid_argument"),-4],bN=[d,b("Match_failure"),-8],bM=[d,b("Stack_overflow"),-9],w=[d,b("Assert_failure"),-11],bO=[d,b("Undefined_recursive_module"),-12],aW=b('File "%s", line %d, characters %d-%d: %s');y(11,bO);y(8,bM);y(7,bN);y(6,[d,b("Not_found"),-7]);y(5,[d,b("Division_by_zero"),-6]);y(4,[d,b("End_of_file"),-5]);y(3,aN);y(2,aP);y(1,[d,b("Sys_error"),-2]);a5(b("Pervasives.array_bound_error"),[0,aN,b(bm)]);var
dN=[d,b("Out_of_memory"),-1],c0=b(cp),cZ=b(S),cX=b("true"),cY=b("false"),cW=b("Pervasives.Exit"),c1=b("Pervasives.do_at_exit"),c3=b("Array.Bottom"),c6=b("\\b"),c7=b("\\t"),c8=b("\\n"),c9=b("\\r"),c5=b(cd),c4=b("\\'"),da=b(e),c$=b("String.blit"),c_=b("String.sub"),db=b("Sys.Break"),dc=b("Queue.Empty"),de=b("CamlinternalLazy.Undefined"),df=b("Buffer.add: cannot grow buffer"),dw=b(e),dx=b(e),dA=b(cp),dB=b(aB),dC=b(aB),dy=b(aA),dz=b(aA),dv=b(cq),dt=b("neg_infinity"),du=b("infinity"),ds=b(S),dr=b("printf: bad positional specification (0)."),dq=b("%_"),dp=[0,b("printf.ml"),143,8],dm=b(aA),dn=b("Printf: premature end of format string '"),di=b(aA),dj=b(" in format string '"),dk=b(", at char number "),dl=b("Printf: bad conversion %"),dg=b("Sformat.index_of_int: negative argument "),dH=b(e),dI=b(", %s%s"),dZ=[1,1],d0=b("%s\n"),d1=b("(Program not linked with -g, cannot print stack backtrace)\n"),dT=b("Raised at"),dW=b("Re-raised at"),dX=b("Raised by primitive operation at"),dY=b("Called from"),dU=b('%s file "%s", line %d, characters %d-%d'),dV=b("%s unknown location"),dO=b("Out of memory"),dP=b("Stack overflow"),dQ=b("Pattern matching failed"),dR=b("Assertion failed"),dS=b("Undefined recursive module"),dJ=b("(%s%s)"),dK=b(e),dL=b(e),dM=b("(%s)"),dG=b(ck),dE=b("%S"),dF=b("_"),d3=b("Lwt_sequence.Empty"),d$=[0,b(aG),648,20],ea=[0,b(aG),651,8],d_=[0,b(aG),498,8],d9=[0,b(aG),487,9],d8=b("Lwt.wakeup_result"),d5=b("Fatal error: exception "),d4=b("Lwt.Canceled"),ef=b("Js.Error"),eg=b(cn),ek=b("iframe"),ej=b("br"),ei=b("textarea"),eh=b(cc),el=b("Dom_html.Canvas_not_available"),eo=b("Exception during Lwt.async: "),eW=b("^error_in_anchor^"),eL=[0,b(bj),72,76],eM=b("global"),eN=b("wiki"),eP=[0,b(cz),0],eQ=b(cv),eR=b(e),eS=[0,b(cz),0],eT=b("|"),eU=b(cv),eV=b(e),eO=b("^error2_in_anchor^"),eK=[0,b(bj),67,35],er=b("H1"),eD=b("#text"),eE=b("A"),eF=b(ce),eG=b("BR"),eH=b("DIV"),eI=b(cd),eJ=[0,b("**")],es=b("H2"),et=b("H3"),eu=b("HR"),ev=b(cr),ew=b("P"),ez=b(cb),eA=[0,b("//")],eB=b("----"),ex=b(cw),ey=b(cw),eC=b(cb),eq=b(e),fs=b("lololo"),ft=b("Enter a wikipage"),fu=b(e),fv=[0,b(cE),0],fw=b('" wysitype="wiki">'),fx=b(ch),fi=b("http://google.ru"),fj=b("Enter a link"),fk=b("desc"),fl=b("Enter description"),fm=[0,b(cE),0],fn=b('" wysitype="global">'),fo=b(ch),fp=b(e),eY=b("inserthorizontalrule"),eZ=b("hr"),e0=b("removeformat"),e1=b("remove format"),e2=b("bold"),e3=b(ce),e4=b("italic"),e5=b(cr),e6=b(ay),e7=b(cC),e8=[0,[0,b(cC)]],e9=b(ay),e_=b(cA),e$=[0,[0,b(cA)]],fa=b(ay),fb=b(cf),fc=[0,[0,b(cf)]],fd=b(ay),fe=b(ci),ff=[0,[0,b(ci)]],fg=b(aH),fh=b("link"),fq=b(aH),fr=b("link2wiki"),fy=b(e),eX=[0,b(bj),96,17],ep=b("Main.Break");function
aO(a){throw[0,aP,a]}function
U(a){throw[0,aN,a]}a([d,cW,0]);function
i(a,b){var
c=a.getLen(),e=b.getLen(),d=z(c+e|0);D(a,0,d,0,c);D(b,0,d,c,e);return d}function
aQ(a){return b(e+a)}f1(0);b6(1);var
V=b6(2);function
bt(a,b){return cP(a,b,0,b.getLen())}function
bu(a){return bt(V,a)}function
aR(a){var
b=f3(0);for(;;){if(b){var
c=b[2],d=b[1];try{b7(d)}catch(f){}var
b=c;continue}return 0}}a5(c1,aR);function
c2(a,b){return b8(a,b)}function
bv(a){return b7(a)}a([d,c3,0]);function
bw(a,b){var
c=b;for(;;){if(c){var
d=c[2];h(a,c[1]);var
c=d;continue}return 0}}function
W(a,b){var
c=z(a);fE(c,0,a,b);return c}function
ah(a,b,c){if(0<=b)if(0<=c)if(!((a.getLen()-c|0)<b)){var
d=z(c);D(a,b,d,0,c);return d}return U(c_)}function
aS(a,b,c,d,e){if(0<=e)if(0<=b)if(!((a.getLen()-e|0)<b))if(0<=d)if(!((c.getLen()-e|0)<d))return D(a,b,c,d,e);return U(c$)}function
ai(d,b){if(b){var
a=b[1],g=[0,0],f=[0,0],h=b[2];bw(function(a){g[1]++;f[1]=f[1]+a.getLen()|0;return 0},b);var
e=z(f[1]+b9(d.getLen(),g[1]-1|0)|0);D(a,0,e,0,a.getLen());var
c=[0,a.getLen()];bw(function(a){D(d,0,e,c[1],d.getLen());c[1]=c[1]+d.getLen()|0;D(a,0,e,c[1],a.getLen());c[1]=c[1]+a.getLen()|0;return 0},h);return e}return da}var
aT=gh(0),X=b9(aT/8|0,(1<<(aT-10|0))-1|0)-1|0;a([d,db,0]);var
dd=a([d,dc,0]);a([d,de,0]);function
aj(a){var
b=1<=a?a:1,c=X<b?X:b,d=z(c);return[0,d,0,c,d]}function
ak(a){return ah(a[1],0,a[2])}function
bx(a,b){var
c=[0,a[3]];for(;;){if(c[1]<(a[2]+b|0)){c[1]=2*c[1]|0;continue}if(X<c[1])if((a[2]+b|0)<=X)c[1]=X;else
aO(df);var
d=z(c[1]);aS(a[1],0,d,0,a[2]);a[1]=d;a[3]=c[1];return 0}}function
Y(a,b){var
c=a[2];if(a[3]<=c)bx(a,1);a[1].safeSet(c,b);a[2]=c+1|0;return 0}function
m(a,b){var
c=b.getLen(),d=a[2]+c|0;if(a[3]<d)bx(a,c);D(b,0,a[1],a[2],c);a[2]=d;return 0}function
aU(a){return 0<=a?a:aO(i(dg,aQ(a)))}function
by(a,b){return aU(a+b|0)}var
dh=1;function
bz(a){return by(dh,a)}function
bA(a){return ah(a,0,a.getLen())}function
bB(a,b,c){var
d=i(dj,i(a,di)),e=i(dk,i(aQ(b),d));return U(i(dl,i(W(1,c),e)))}function
Z(a,b,c){return bB(bA(a),b,c)}function
al(a){return U(i(dn,i(bA(a),dm)))}function
F(f,b,c,d){function
j(a){if((f.safeGet(a)+R|0)<0||9<(f.safeGet(a)+R|0))return a;var
b=a+1|0;for(;;){var
c=f.safeGet(b);if(48<=c){if(!(58<=c)){var
b=b+1|0;continue}}else
if(36===c)return b+1|0;return a}}var
k=j(b+1|0),g=aj((c-k|0)+10|0);Y(g,37);var
e=d,i=0;for(;;){if(e){var
n=[0,e[1],i],e=e[2],i=n;continue}var
a=k,h=i;for(;;){if(a<=c){var
l=f.safeGet(a);if(42===l){if(h){var
o=h[2];m(g,aQ(h[1]));var
a=j(a+1|0),h=o;continue}throw[0,w,dp]}Y(g,l);var
a=a+1|0;continue}return ak(g)}}}function
bC(a,b,c,d,e){var
f=F(b,c,d,e);if(78!==a)if(ac!==a)return f;f.safeSet(f.getLen()-1|0,be);return f}function
bD(a){return function(d,b){var
k=d.getLen();function
l(a,b){var
m=40===a?41:bd,c=b;for(;;){if(k<=c)return al(d);if(37===d.safeGet(c)){var
e=c+1|0;if(k<=e)return al(d);var
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
j=0===g?0:1;if(j)return f===m?e+1|0:Z(d,b,f);var
c=l(f,e+1|0)+1|0;continue}var
c=c+1|0;continue}}return l(a,b)}}function
bE(i,b,c){var
m=i.getLen()-1|0;function
s(a){var
l=a;a:for(;;){if(l<m){if(37===i.safeGet(l)){var
f=0,h=l+1|0;for(;;){if(m<h)var
e=al(i);else{var
n=i.safeGet(h);if(58<=n){if(95===n){var
f=1,h=h+1|0;continue}}else
if(32<=n)switch(n+cs|0){case
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
h=k(b,f,h,N);continue;default:var
h=h+1|0;continue}var
d=h;b:for(;;){if(m<d)var
e=al(i);else{var
j=i.safeGet(d);if(126<=j)var
g=0;else
switch(j){case
78:case
88:case
aF:case
N:case
bi:case
be:case
bf:var
e=k(b,f,d,N),g=1;break;case
69:case
70:case
71:case
cy:case
bl:case
bk:var
e=k(b,f,d,bl),g=1;break;case
33:case
37:case
44:case
64:var
e=d+1|0,g=1;break;case
83:case
91:case
ad:var
e=k(b,f,d,ad),g=1;break;case
97:case
aC:case
ba:var
e=k(b,f,d,j),g=1;break;case
76:case
cF:case
ac:var
t=d+1|0;if(m<t)var
e=k(b,f,d,N),g=1;else{var
q=i.safeGet(t)+cB|0;if(q<0||32<q)var
r=1;else
switch(q){case
0:case
12:case
17:case
23:case
29:case
32:var
e=o(c,k(b,f,d,j),N),g=1,r=0;break;default:var
r=1}if(r)var
e=k(b,f,d,N),g=1}break;case
67:case
99:var
e=k(b,f,d,99),g=1;break;case
66:case
98:var
e=k(b,f,d,66),g=1;break;case
41:case
bd:var
e=k(b,f,d,j),g=1;break;case
40:var
e=s(k(b,f,d,j)),g=1;break;case
bg:var
u=k(b,f,d,j),v=o(bD(j),i,u),p=u;for(;;){if(p<(v-2|0)){var
p=o(c,p,i.safeGet(p));continue}var
d=v-1|0;continue b}default:var
g=0}if(!g)var
e=Z(i,d,j)}break}}var
l=e;continue a}}var
l=l+1|0;continue}return l}}s(0);return 0}function
bF(a){var
d=[0,0,0,0];function
b(a,b,c){var
f=41!==c?1:0,g=f?bd!==c?1:0:f;if(g){var
e=97===c?2:1;if(aC===c)d[3]=d[3]+1|0;if(a)d[2]=d[2]+e|0;else
d[1]=d[1]+e|0}return b+1|0}bE(a,b,function(a,b){return a+1|0});return d[1]}function
bG(a,b,c){var
g=a.safeGet(c);if((g+R|0)<0||9<(g+R|0))return o(b,0,c);var
e=g+R|0,d=c+1|0;for(;;){var
f=a.safeGet(d);if(48<=f){if(!(58<=f)){var
e=(10*e|0)+(f+R|0)|0,d=d+1|0;continue}}else
if(36===f)return 0===e?aO(dr):o(b,[0,aU(e-1|0)],d+1|0);return o(b,0,c)}}function
p(a,b){return a?b:bz(b)}function
bH(a,b){return a?a[1]:b}function
bI(aQ,b,c,d,e,f,g){var
C=h(b,g);function
am(a){return o(d,C,a)}function
aR(a,b,j,aT){var
k=j.getLen();function
D(q,b){var
n=b;for(;;){if(k<=n)return h(a,C);var
d=j.safeGet(n);if(37===d){var
l=function(a,b){return a6(aT,bH(a,b))},aA=function(g,f,c,d){var
a=d;for(;;){var
ae=j.safeGet(a)+cs|0;if(!(ae<0||25<ae))switch(ae){case
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
10:return bG(j,function(a,b){var
d=[0,l(a,f),c];return aA(g,p(a,f),d,b)},a+1|0);default:var
a=a+1|0;continue}var
q=j.safeGet(a);if(!(124<=q))switch(q){case
78:case
88:case
aF:case
N:case
bi:case
be:case
bf:var
bd=l(g,f),bh=at(bC(q,j,n,a,c),bd);return r(p(g,f),bh,a+1|0);case
69:case
71:case
cy:case
bl:case
bk:var
a5=l(g,f),a6=a7(F(j,n,a,c),a5);return r(p(g,f),a6,a+1|0);case
76:case
cF:case
ac:var
ai=j.safeGet(a+1|0)+cB|0;if(!(ai<0||32<ai))switch(ai){case
0:case
12:case
17:case
23:case
29:case
32:var
T=a+1|0,al=q-108|0;if(al<0||2<al)var
an=0;else{switch(al){case
1:var
an=0,ao=0;break;case
2:var
bc=l(g,f),aI=at(F(j,n,T,c),bc),ao=1;break;default:var
bb=l(g,f),aI=at(F(j,n,T,c),bb),ao=1}if(ao)var
aH=aI,an=1}if(!an)var
a$=l(g,f),aH=fL(F(j,n,T,c),a$);return r(p(g,f),aH,T+1|0)}var
a9=l(g,f),a_=at(bC(ac,j,n,a,c),a9);return r(p(g,f),a_,a+1|0);case
37:case
64:return r(f,W(1,q),a+1|0);case
83:case
ad:var
x=l(g,f);if(ad===q)var
y=x;else{var
b=[0,0],as=x.getLen()-1|0,aU=0;if(!(as<0)){var
L=aU;for(;;){var
w=x.safeGet(L),bq=14<=w?34===w?1:92===w?1:0:11<=w?13<=w?1:0:8<=w?1:0,aX=bq?2:a8(w)?1:4;b[1]=b[1]+aX|0;var
aY=L+1|0;if(as!==L){var
L=aY;continue}break}}if(b[1]===x.getLen())var
aK=x;else{var
k=z(b[1]);b[1]=0;var
av=x.getLen()-1|0,aV=0;if(!(av<0)){var
K=aV;for(;;){var
v=x.safeGet(K),A=v-34|0;if(A<0||58<A)if(-20<=A)var
U=1;else{switch(A+34|0){case
8:k.safeSet(b[1],92);b[1]++;k.safeSet(b[1],98);var
J=1;break;case
9:k.safeSet(b[1],92);b[1]++;k.safeSet(b[1],ba);var
J=1;break;case
10:k.safeSet(b[1],92);b[1]++;k.safeSet(b[1],ac);var
J=1;break;case
13:k.safeSet(b[1],92);b[1]++;k.safeSet(b[1],aC);var
J=1;break;default:var
U=1,J=0}if(J)var
U=0}else
var
U=(A-1|0)<0||56<(A-1|0)?(k.safeSet(b[1],92),b[1]++,k.safeSet(b[1],v),0):1;if(U)if(a8(v))k.safeSet(b[1],v);else{k.safeSet(b[1],92);b[1]++;k.safeSet(b[1],48+(v/aF|0)|0);b[1]++;k.safeSet(b[1],48+((v/10|0)%10|0)|0);b[1]++;k.safeSet(b[1],48+(v%10|0)|0)}b[1]++;var
aW=K+1|0;if(av!==K){var
K=aW;continue}break}}var
aK=k}var
y=i(dC,i(aK,dB))}if(a===(n+1|0))var
aJ=y;else{var
I=F(j,n,a,c);try{var
V=0,t=1;for(;;){if(I.getLen()<=t)var
aw=[0,0,V];else{var
X=I.safeGet(t);if(49<=X)if(58<=X)var
ap=0;else
var
aw=[0,fV(ah(I,t,(I.getLen()-t|0)-1|0)),V],ap=1;else{if(45===X){var
V=1,t=t+1|0;continue}var
ap=0}if(!ap){var
t=t+1|0;continue}}var
$=aw;break}}catch(f){f=au(f);if(f[1]!==aP)throw f;var
$=bB(I,0,ad)}var
M=$[1],B=y.getLen(),aZ=$[2],O=0,a0=32;if(M===B)if(0===O)var
aa=y,aq=1;else
var
aq=0;else
var
aq=0;if(!aq)if(M<=B)var
aa=ah(y,O,B);else{var
_=W(M,a0);if(aZ)aS(y,O,_,0,B);else
aS(y,O,_,M-B|0,B);var
aa=_}var
aJ=aa}return r(p(g,f),aJ,a+1|0);case
67:case
99:var
s=l(g,f);if(99===q)var
aE=W(1,s);else{if(39===s)var
u=c4;else
if(92===s)var
u=c5;else{if(14<=s)var
E=0;else
switch(s){case
8:var
u=c6,E=1;break;case
9:var
u=c7,E=1;break;case
10:var
u=c8,E=1;break;case
13:var
u=c9,E=1;break;default:var
E=0}if(!E)if(a8(s)){var
ar=z(1);ar.safeSet(0,s);var
u=ar}else{var
G=z(4);G.safeSet(0,92);G.safeSet(1,48+(s/aF|0)|0);G.safeSet(2,48+((s/10|0)%10|0)|0);G.safeSet(3,48+(s%10|0)|0);var
u=G}}var
aE=i(dz,i(u,dy))}return r(p(g,f),aE,a+1|0);case
66:case
98:var
a3=a+1|0,a4=l(g,f)?cX:cY;return r(p(g,f),a4,a3);case
40:case
bg:var
S=l(g,f),aB=o(bD(q),j,a+1|0);if(bg===q){var
P=aj(S.getLen()),ax=function(a,b){Y(P,b);return a+1|0};bE(S,function(a,b,c){if(a)m(P,dq);else
Y(P,37);return ax(b,c)},ax);var
a1=ak(P);return r(p(g,f),a1,aB)}var
aD=p(g,f),bp=by(bF(S),aD);return aR(function(a){return D(bp,aB)},aD,S,aT);case
33:h(e,C);return D(f,a+1|0);case
41:return r(f,dw,a+1|0);case
44:return r(f,dx,a+1|0);case
70:var
af=l(g,f);if(0===c)var
aG=dA;else{var
ab=F(j,n,a,c);if(70===q)ab.safeSet(ab.getLen()-1|0,bk);var
aG=ab}var
az=fB(af);if(3===az)var
ag=af<0?dt:du;else
if(4<=az)var
ag=dv;else{var
R=a7(aG,af),Q=0,a2=R.getLen();for(;;){if(a2<=Q)var
ay=i(R,ds);else{var
H=R.safeGet(Q)-46|0,br=H<0||23<H?55===H?1:0:(H-1|0)<0||21<(H-1|0)?1:0;if(!br){var
Q=Q+1|0;continue}var
ay=R}var
ag=ay;break}}return r(p(g,f),ag,a+1|0);case
91:return Z(j,a,q);case
97:var
aL=l(g,f),aM=bz(bH(g,f)),aN=l(0,aM),bj=a+1|0,bm=p(g,aM);if(aQ)am(o(aL,0,aN));else
o(aL,C,aN);return D(bm,bj);case
aC:return Z(j,a,q);case
ba:var
aO=l(g,f),bn=a+1|0,bo=p(g,f);if(aQ)am(h(aO,0));else
h(aO,C);return D(bo,bn)}return Z(j,a,q)}},f=n+1|0,g=0;return bG(j,function(a,b){return aA(a,q,g,b)},f)}o(c,C,d);var
n=n+1|0;continue}}function
r(a,b,c){am(b);return D(a,c)}return D(b,0)}var
q=aU(0);function
k(a,b){return aR(f,q,a,b)}var
l=bF(g);if(l<0||6<l){var
n=function(f,b){if(l<=f){var
h=J(l,0),i=function(a,b){return j(h,(l-a|0)-1|0,b)},c=0,a=b;for(;;){if(a){var
d=a[2],e=a[1];if(d){i(c,e);var
c=c+1|0,a=d;continue}i(c,e)}return k(g,h)}}return function(a){return n(f+1|0,[0,a,b])}};return n(0,0)}switch(l){case
1:return function(a){var
b=J(1,0);j(b,0,a);return k(g,b)};case
2:return function(a,b){var
c=J(2,0);j(c,0,a);j(c,1,b);return k(g,c)};case
3:return function(a,b,c){var
d=J(3,0);j(d,0,a);j(d,1,b);j(d,2,c);return k(g,d)};case
4:return function(a,b,c,d){var
e=J(4,0);j(e,0,a);j(e,1,b);j(e,2,c);j(e,3,d);return k(g,e)};case
5:return function(a,b,c,d,e){var
f=J(5,0);j(f,0,a);j(f,1,b);j(f,2,c);j(f,3,d);j(f,4,e);return k(g,f)};case
6:return function(a,b,c,d,e,f){var
h=J(6,0);j(h,0,a);j(h,1,b);j(h,2,c);j(h,3,d);j(h,4,e);j(h,5,f);return k(g,h)};default:return k(g,[0])}}function
bJ(d){function
e(a){return 0}function
b(a){return d}var
c=0;return function(a){return bI(c,b,c2,bt,bv,e,a)}}function
dD(a){return aj(2*a.getLen()|0)}function
s(a){function
b(a){var
b=ak(a);a[2]=0;return b}return bI(1,dD,Y,m,function(a){return 0},b,a)}var
aV=[0,0];function
aX(a,b){var
c=a[b+1];if(f8(c)){if(av(c)===252)return h(s(dE),c);if(av(c)===253){var
e=a7(c0,c),d=0,g=e.getLen();for(;;){if(g<=d)return i(e,cZ);var
f=e.safeGet(d),j=48<=f?58<=f?0:1:45===f?1:0;if(j){var
d=d+1|0;continue}return e}}return dF}return h(s(dG),c)}function
bK(a,b){if(a.length-1<=b)return dH;var
c=bK(a,b+1|0),d=aX(a,b);return o(s(dI),d,c)}function
bL(a){var
b=aV[1];for(;;){if(b){var
r=b[2],t=b[1];try{var
u=h(t,a),e=u}catch(f){var
e=0}if(e)return e[1];var
b=r;continue}if(a===dN)return dO;if(a===bM)return dP;if(a[1]===bN){var
f=a[2],k=f[3],v=f[2],x=f[1];return aw(s(aW),x,v,k,k+5|0,dQ)}if(a[1]===w){var
g=a[2],l=g[3],y=g[2],z=g[1];return aw(s(aW),z,y,l,l+6|0,dR)}if(a[1]===bO){var
j=a[2],m=j[3],A=j[2],B=j[1];return aw(s(aW),B,A,m,m+6|0,dS)}if(0===av(a)){var
d=a.length-1,C=a[0+1][0+1];if(d<0||2<d)var
n=bK(a,2),p=aX(a,1),c=o(s(dJ),p,n);else
switch(d){case
1:var
c=dL;break;case
2:var
q=aX(a,1),c=h(s(dM),q);break;default:var
c=dK}return i(C,c)}return a[0+1]}}function
bP(a){var
i=fC(fI(0));if(i){var
d=i[1],f=d.length-1-1|0,p=0;if(!(f<0)){var
c=p;for(;;){if(f7(a6(d,c),dZ)){var
b=a6(d,c),j=0===b[0]?b[1]:b[1],e=j?0===c?dT:dW:0===c?dX:dY;if(0===b[0])var
k=b[5],l=b[4],m=b[3],n=b[2],g=aw(s(dU),e,n,m,l,k);else
var
g=h(s(dV),e);o(bJ(a),d0,g)}var
q=c+1|0;if(f!==c){var
c=q;continue}break}}return 0}return h(bJ(a),d1)}function
bQ(a){aV[1]=[0,a,aV[1]];return 0}32===aT;a([d,d3,0]);function
bR(a){var
b=[];gn(b,[0,b,b]);return b}var
aY=a([d,d4,0]),G=[0,0];function
aZ(a){var
c=a[1];if(3===c[0]){var
d=c[1],b=aZ(d);if(b!==d)a[1]=[3,b];return b}return a}function
_(a){return aZ(a)}var
bS=[0,function(a){bu(d5);bu(bL(a));b8(V,10);bP(V);bv(V);aR(0);return gi(2)}];function
bT(a,b){try{var
c=h(a,b)}catch(f){f=au(f);return h(bS[1],f)}return c}function
a9(a,b,c,d){var
f=c,e=d;for(;;)if(typeof
f===u)return a<50?A(1+a,b,e):B(A,[0,b,e]);else
switch(f[0]){case
1:h(f[1],b);return a<50?A(1+a,b,e):B(A,[0,b,e]);case
2:var
i=[0,f[2],e],f=f[1],e=i;continue;default:var
g=f[1][1];if(g){h(g[1],b);return a<50?A(1+a,b,e):B(A,[0,b,e])}else
return a<50?A(1+a,b,e):B(A,[0,b,e])}}function
A(a,b,c){return c?a<50?a9(1+a,b,c[1],c[2]):B(a9,[0,b,c[1],c[2]]):0}function
d6(b,c,d){return ax(a9(0,b,c,d))}function
gq(b,c){return ax(A(0,b,c))}function
a_(a,b,c){var
e=b,d=c;for(;;)if(typeof
e===u)return a<50?K(1+a,d):B(K,[0,d]);else
switch(e[0]){case
1:var
f=e[1];if(f[4]){f[4]=0;f[1][2]=f[2];f[2][1]=f[1]}return a<50?K(1+a,d):B(K,[0,d]);case
2:var
h=[0,e[2],d],e=e[1],d=h;continue;default:var
g=e[2];G[1]=e[1];bT(g,0);return a<50?K(1+a,d):B(K,[0,d])}}function
K(a,b){return b?a<50?a_(1+a,b[1],b[2]):B(a_,[0,b[1],b[2]]):0}function
d7(b,c){return ax(a_(0,b,c))}function
gr(b){return ax(K(0,b))}function
am(a,b){var
c=1===b[0]?b[1]===aY?(d7(a[4],0),1):0:0;return d6(b,a[2],0)}var
a0=[0,0],P=[0,0,0];function
bU(a,b){var
h=[0,b],i=aZ(a),e=i[1];switch(e[0]){case
1:if(e[1]===aY)return 0;break;case
2:var
k=e[1];i[1]=h;var
g=G[1],j=a0[1]?1:(a0[1]=1,0);am(k,h);if(j){G[1]=g;return 0}for(;;){if(0===P[1]){a0[1]=0;G[1]=g;return 0}if(0===P[1])throw dd;P[1]=P[1]-1|0;var
c=P[2],d=c[2];if(d===c)P[2]=0;else
c[2]=d[2];var
f=d[1];am(f[1],f[2]);continue}}return U(d8)}function
bV(a,b){return typeof
a===u?b:typeof
b===u?a:[2,a,b]}function
a1(a){if(typeof
a!==u)switch(a[0]){case
2:var
b=a[1],c=a1(a[2]);return bV(a1(b),c);case
1:break;default:if(!a[1][1])return 0}return a}var
eb=[0,function(a){return 0}],t=bR(0),ec=[0,0],Q=n,an=null;function
ed(a){var
e=1-(t[2]===t?1:0);if(e){var
b=bR(0);b[1][2]=t[2];t[2][1]=b[1];b[1]=t[1];t[1][2]=b;t[1]=t;t[2]=t;ec[1]=0;var
c=b[2];for(;;){var
d=c!==b?1:0;if(d){if(c[4])bU(c[3],0);var
c=c[2];continue}return d}}return e}var
ee=undefined;function
bW(a,b){return a==an?0:h(b,a)}function
bX(a,b,c){return a==an?h(b,0):h(c,a)}function
ao(a,b){return a==an?h(b,0):a}var
$=true,ap=false,bY=Array,bZ=a([d,ef,0]),a2=[0,bZ,{}],d2=av(a2)===d?a2:a2[0+1];a5(eg,d2);bQ(function(a){return a[1]===bZ?[0,new
l(a[2].toString())]:0});bQ(function(a){return a
instanceof
bY?0:[0,new
l(a.toString())]});function
aa(a){return a}function
H(a,b){a.appendChild(b);return 0}function
aq(d){return aa(a$(function(a){if(a){var
e=h(d,a);if(!(e|0))a.preventDefault();return e}var
c=event,b=h(d,c);if(!(b|0))c.returnValue=b;return b}))}var
x=Q.document;function
ar(a,b){return a?h(b,a[1]):0}function
a3(a,b){return a.createElement(b.toString())}function
b0(a,b){return a3(a,b)}var
b1=[0,ct];function
b2(a,b,c,d){for(;;){if(0===a)if(0===b)return a3(c,d);var
h=b1[1];if(ct===h){try{var
j=x.createElement('<input name="x">'),k=j.tagName.toLowerCase()===cc?1:0,m=k?j.name===cm?1:0:k,i=m}catch(f){var
i=0}var
l=i?cj:-1003883683;b1[1]=l;continue}if(cj<=h){var
f=new
bY();f.push("<",d.toString());ar(a,function(a){f.push(' type="',b_(a),aB);return 0});ar(b,function(a){f.push(' name="',b_(a),aB);return 0});f.push(">");return c.createElement(f.join(e))}var
g=a3(c,d);ar(a,function(a){return g.type=a});ar(b,function(a){return g.name=a});return g}}function
b3(a,b,c){return b2(a,b,c,ei)}function
a4(a){return b0(a,ej)}a([d,el,0]);Q.HTMLElement===ee;var
em=fX(0),en=bc;eb[1]=function(a){return 1===a?(Q.setTimeout(a$(ed),0),0):0};function
b4(a){return em.log(a.toString())}bS[1]=function(a){b4(eo);b4(bL(a));return bP(V)};function
as(a,b){return h(b,a)}var
b5=a([d,ep,0]);function
I(a,b){var
d=aj(10);function
f(a,b){var
f=a?a[1]:eq,e=b.getLen();try{var
c=0;for(;;){if(!(e<=c)){if(92===b.safeGet(c))if(c<(e-1|0))if(92===b.safeGet(c+1|0)){var
c=c+2|0;continue}if(10===b.safeGet(c)){var
c=c+1|0;continue}throw[0,b5,1]}var
h=0,g=h;break}}catch(f){f=au(f);if(f[1]!==b5)throw f;var
g=f[2]}return g?m(d,i(f,i(b,f))):0}var
g=b.childNodes,h=g.length-1|0,j=0;if(!(h<0)){var
e=j;for(;;){var
k=function(b){var
a=new
l(b.nodeName),h=ge(a,er);if(0<=h){if(0<h)if(c(a,es))if(c(a,et)){if(!c(a,eu))return m(d,eB);if(!c(a,ev))return f(eA,I(0,b));if(!c(a,ew))return f(0,i(I(0,b),ez));var
e=0}else
var
e=1;else
var
e=1;else
var
e=1;if(e){var
n=W((a.safeGet(1)-48|0)+1|0,61);return m(d,i(n,i(I(0,b),eC)))}}else{if(!c(a,eD)){var
r=b.nodeValue,k=function(a){return[0,a]},g=bX(r,function(a){return 0},k);return g?m(d,new
l(g[1])):0}if(!c(a,eE)){var
o=aa(b),j=ao(o,function(a){throw[0,w,eK]}),p=function(a){function
g(a){return new
l(a)}function
h(a){throw[0,w,eL]}var
e=as(ao(j.getAttribute("href"),h),g),f=new
l(a);if(c(f,eM)){if(c(f,eN))return m(d,eO);var
i=function(a){return m(d,a)};return as(ai(eR,[0,eQ,[0,e,eP]]),i)}return m(d,ai(eV,[0,eU,[0,e,[0,eT,[0,I(0,b),eS]]]]))},q=function(a){return m(d,eW)};return bX(j.getAttribute("wysitype"),q,p)}if(!c(a,eF))return f(eJ,I(0,b));if(!c(a,eG))return m(d,eI);if(!c(a,eH))return m(d,I(0,b))}return m(d,i(ey,i(a,ex)))};bW(g.item(e),k);var
n=e+1|0;if(h!==e){var
e=n;continue}break}}return ak(d)}Q.onload=aq(function(a){function
d(a){throw[0,w,eX]}var
f=ao(x.getElementById("wiki_demo"),d),g=b0(x,ek);g.style.border="2px green solid";g.src=co;g.id="wysiFrame";H(f,g);function
e(e){e.open();e.write("<html><body><p><b>Camelus</b><i>bactrianus</i></p></body></html>");e.close();e.designMode="On";var
i=g.contentWindow;H(f,a4(x));function
a(a,b,c,d){var
j=a?a[1]:ap,h=b?b[1]:0,g=b2([0,"submit"],0,x,eh);g.value=c.toString();g.onclick=aq(function(a){i.focus();var
b=h?aa(h[1].toString()):an;e.execCommand(d.toString(),j,b);return $});H(f,g);return g}a(0,0,eZ,eY);a(0,0,e1,e0);a(0,0,e3,e2);a(0,0,e5,e4);H(f,a4(x));a(0,e8,e7,e6);a(0,e$,e_,e9);a(0,fc,fb,fa);a(0,ff,fe,fd);function
j(a,b){function
c(a){return new
l(a)}function
d(a){return b.toString()}return as(ao(i.prompt(a.toString(),b.toString()),d),c)}var
k=a(0,0,fh,fg);k.onclick=aq(function(a){var
c=j(fj,fi),b=ai(fp,[0,fo,[0,c,[0,fn,[0,j(fl,fk),fm]]]]);i.alert(b.toString());e.execCommand(aH,ap,aa(b.toString()));return $});var
m=a(0,0,fr,fq);m.onclick=aq(function(a){var
b=j(ft,fs),c=as([0,fx,[0,b,[0,fw,[0,b,fv]]]],function(a){return ai(fu,a)});i.alert(c.toString());e.execCommand(aH,ap,aa(c.toString()));return $});H(f,a4(x));var
d=b3(0,0,x);d.readOnly=$;d[b(ca)]=34;d[b(cg)]=10;d.style.border="1px black solid";d.style.padding=b$;H(f,d);var
h=b3(0,0,x);h.id="wikiFrame";h.readOnly=$;h[b(ca)]=34;h[b(cg)]=10;d.style.border="2px blue solid";d.style.padding=b$;H(f,h);function
z(a,b){var
k=new
l(e.body.innerHTML);if(c(k,a)){try{d.value=k.toString();h.value=I(0,e.body).toString()}catch(f){}var
m=20}else
var
B=b-1|0,J=0,K=fJ(0,B)?J:B,m=K;function
A(a){return z(k,m)}var
H=0===m?0.5:0.1,g=[0,[2,[0,1,0,0,0]]],v=[0,0];function
x(a,b){var
c=bc<a?[0,en,a-bc]:[0,a,0],d=c[2],e=c[1],f=d==0?function(a){return bU(g,a)}:function(a){return x(d,a)};v[1]=[0,Q.setTimeout(a$(f),e*cu)];return 0}x(H,0);function
y(a){var
b=v[1];return b?Q.clearTimeout(b[1]):0}var
j=_(g)[1];switch(j[0]){case
1:var
C=j[1]===aY?(bT(y,0),1):0;break;case
2:var
p=j[1],q=[0,G[1],y],r=p[4],E=typeof
r===u?q:[2,q,r];p[4]=E;var
C=1;break;default:var
C=0}var
s=_(g),f=s[1];switch(f[0]){case
1:return[0,f];case
2:var
t=f[1],i=[0,[2,[0,[0,[0,s]],0,0,0]]],F=G[1],o=[1,function(a){switch(a[0]){case
0:var
r=a[1];G[1]=F;try{var
s=A(r),o=s}catch(f){f=au(f);var
o=[0,[1,f]]}var
c=_(i),f=_(o),j=c[1];if(2===j[0]){var
b=j[1];if(c===f)return 0;var
d=f[1];if(2===d[0]){var
e=d[1];f[1]=[3,c];b[1]=e[1];var
k=bV(b[2],e[2]),l=b[3]+e[3]|0;if(42<l){b[3]=0;b[2]=a1(k)}else{b[3]=l;b[2]=k}var
g=e[4],h=b[4],p=typeof
h===u?g:typeof
g===u?h:[2,h,g];b[4]=p;return 0}c[1]=d;return am(b,d)}throw[0,w,d9];case
1:var
m=_(i),n=m[1];if(2===n[0]){var
q=n[1];m[1]=a;return am(q,a)}throw[0,w,d_];default:throw[0,w,d$]}}],n=t[2],D=typeof
n===u?o:[2,o,n];t[2]=D;return i;case
3:throw[0,w,ea];default:return A(f[1])}}z(fy,0);return 0}bW(g.contentDocument,e);return ap});aR(0);return}(this));
