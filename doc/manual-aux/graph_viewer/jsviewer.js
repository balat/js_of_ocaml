// This program was compiled from OCaml by js_of_ocaml 2.0+git-883a1ec
(function(A){"use strict";var
dt=125,dx=123,fE=254,ak=255,fD=108,fi='"',bG="Map.bal",T=16777215,E=-659372076,dw="=",fh="function",fs='Content-Disposition: form-data; name="',ft="step_increment",fu=250,an=0.5,fg="jsError",bF="POST",ds=2147483,fb=-550809787,a4=115,dA=102,fC="&",fa="0px",dv=120,e$="--",e_=122,du=117,bE=126925477,g="",bv=781515420,aY=307110897,a1=100,O="0",n=248,ff="set_bounds",fB="upper",dz=103,fA="fd ",e9=936573133,fr="absolute",a0=-292814788,aX="viewer_common.ml",fq=1e3,aA="src/core/lwt.ml",e8="10px",az=".",bC=65535,aZ="+",aW="g",dr="f",t=834174833,e7="onmousewheel",am=105,fe="%d",fd=443,fz=-88,a3=110,fc="lower",bu="?",bx="'",bw="int_of_string",fp=-32,fo="page_size",dy=111,fy="1px",S=" ",a2="e",fn="lastIndex",bD=891486873,e6="hidden",e5=":",al="-",ay=-48,fm="nan",dq=116,bB="\r\n",fl="value",fk="%.12g",dD=" : file already exists",dC=-635267918,fx="set_value",bA=675223906,ac="/",bz=114,by="#",fw=101,fv="page_increment",dB="index out of bounds",fj=-2147483648,z="number";function
fV(a,b){throw[0,a,b]}function
dH(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
b=A.console;b&&b.error&&b.error(a)}var
q=[0];function
a7(a,b){if(!a)return g;if(a&1)return a7(a-1,b)+b;var
c=a7(a>>1,b);return c+c}function
w(a){if(a!=null){this.bytes=this.fullBytes=a;this.last=this.len=a.length}}function
fW(){fV(q[4],new
w(dB))}w.prototype={string:null,bytes:null,fullBytes:null,array:null,len:null,last:0,toJsString:function(){var
a=this.getFullBytes();try{return this.string=decodeURIComponent(escape(a))}catch(f){dH('MlString.toJsString: wrong encoding for "%s" ',a);return a}},toBytes:function(){if(this.string!=null)try{var
a=unescape(encodeURIComponent(this.string))}catch(f){dH('MlString.toBytes: wrong encoding for "%s" ',this.string);var
a=this.string}else{var
a=g,c=this.array,d=c.length;for(var
b=0;b<d;b++)a+=String.fromCharCode(c[b])}this.bytes=this.fullBytes=a;this.last=this.len=a.length;return a},getBytes:function(){var
a=this.bytes;if(a==null)a=this.toBytes();return a},getFullBytes:function(){var
a=this.fullBytes;if(a!==null)return a;a=this.bytes;if(a==null)a=this.toBytes();if(this.last<this.len){this.bytes=a+=a7(this.len-this.last,"\0");this.last=this.len}this.fullBytes=a;return a},toArray:function(){var
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
b=this.bytes;if(b==null)b=this.toBytes();return a<this.last?b.charCodeAt(a):0},safeGet:function(a){if(this.len==null)this.toBytes();if(a<0||a>=this.len)fW();return this.get(a)},set:function(a,b){var
c=this.array;if(!c){if(this.last==a){this.bytes+=String.fromCharCode(b&ak);this.last++;return 0}c=this.toArray()}else
if(this.bytes!=null)this.bytes=this.fullBytes=this.string=null;c[a]=b&ak;return 0},safeSet:function(a,b){if(this.len==null)this.toBytes();if(a<0||a>=this.len)fW();this.set(a,b)},fill:function(a,b,c){if(a>=this.last&&this.last&&c==0)return;var
d=this.array;if(!d)d=this.toArray();else
if(this.bytes!=null)this.bytes=this.fullBytes=this.string=null;var
f=a+b;for(var
e=a;e<f;e++)d[e]=c},compare:function(a){if(this.string!=null&&a.string!=null){if(this.string<a.string)return-1;if(this.string>a.string)return 1;return 0}var
b=this.getFullBytes(),c=a.getFullBytes();if(b<c)return-1;if(b>c)return 1;return 0},equal:function(a){if(this.string!=null&&a.string!=null)return this.string==a.string;return this.getFullBytes()==a.getFullBytes()},lessThan:function(a){if(this.string!=null&&a.string!=null)return this.string<a.string;return this.getFullBytes()<a.getFullBytes()},lessEqual:function(a){if(this.string!=null&&a.string!=null)return this.string<=a.string;return this.getFullBytes()<=a.getFullBytes()}};function
P(a){this.string=a}P.prototype=new
w();function
jM(a,b,c,d,e){if(d<=b)for(var
f=1;f<=e;f++)c[d+f]=a[b+f];else
for(var
f=e;f>=1;f--)c[d+f]=a[b+f]}function
dG(a,b){fV(a,new
P(b))}function
aC(a){dG(q[4],a)}function
fH(){aC(dB)}function
jN(a,b){if(b<0||b>=a.length-1)fH();return a[b+1]}function
jO(a,b,c){if(b<0||b>=a.length-1)fH();a[b+1]=c;return 0}function
fI(a,b,c,d,e){if(e===0)return;if(d===c.last&&c.bytes!=null){var
f=a.bytes;if(f==null)f=a.toBytes();if(b>0||a.last>e)f=f.slice(b,b+e);c.bytes+=f;c.last+=f.length;return}var
g=c.array;if(!g)g=c.toArray();else
c.bytes=c.string=null;a.blitToArray(b,g,d,e)}function
U(c,b){if(c.fun)return U(c.fun,b);var
a=c.length,d=a-b.length;if(d==0)return c.apply(null,b);else
if(d<0)return U(c.apply(null,b.slice(0,a)),b.slice(a));else
return function(a){return U(c,b.concat([a]))}}function
jP(a){if(isFinite(a)){if(Math.abs(a)>=2.22507385850720138e-308)return 0;if(a!=0)return 1;return 2}return isNaN(a)?4:3}function
j2(a,b){var
c=a[3]<<16,d=b[3]<<16;if(c>d)return 1;if(c<d)return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
fN(a,b){if(a<b)return-1;if(a==b)return 0;return 1}function
a5(a,b,c){var
e=[];for(;;){if(!(c&&a===b))if(a
instanceof
w)if(b
instanceof
w){if(a!==b){var
d=a.compare(b);if(d!=0)return d}}else
return 1;else
if(a
instanceof
Array&&a[0]===(a[0]|0)){var
f=a[0];if(f===fE)f=0;if(f===fu){a=a[1];continue}else
if(b
instanceof
Array&&b[0]===(b[0]|0)){var
g=b[0];if(g===fE)g=0;if(g===fu){b=b[1];continue}else
if(f!=g)return f<g?-1:1;else
switch(f){case
n:var
d=fN(a[2],b[2]);if(d!=0)return d;break;case
251:aC("equal: abstract value");case
ak:var
d=j2(a,b);if(d!=0)return d;break;default:if(a.length!=b.length)return a.length<b.length?-1:1;if(a.length>1)e.push(a,b,1)}}else
return 1}else
if(b
instanceof
w||b
instanceof
Array&&b[0]===(b[0]|0))return-1;else
if(typeof
a!=z&&a&&a.compare)return a.compare(b,c);else{if(a<b)return-1;if(a>b)return 1;if(a!=b){if(!c)return NaN;if(a==a)return 1;if(b==b)return-1}}if(e.length==0)return 0;var
h=e.pop();b=e.pop();a=e.pop();if(h+1<a.length)e.push(a,b,h+1);a=a[h];b=b[h]}}function
jQ(a,b){return a5(a,b,true)}function
jR(){return 0}function
fF(a){this.bytes=g;this.len=a}fF.prototype=new
w();function
fJ(a){if(a<0)aC("String.create");return new
fF(a)}function
fT(a){throw a}function
ky(){fT(q[6])}function
jT(a,b){if(b==0)ky();return a/b|0}function
jU(a,b){return+(a5(a,b,false)==0)}function
jV(a,b,c,d){a.fill(b,c,d)}function
dF(a){a=a.toString();var
e=a.length;if(e>31)aC("format_int: format too long");var
b={justify:aZ,signstyle:al,filler:S,alternate:false,base:0,signedconv:false,width:0,uppercase:false,sign:1,prec:-1,conv:dr};for(var
d=0;d<e;d++){var
c=a.charAt(d);switch(c){case
al:b.justify=al;break;case
aZ:case
S:b.signstyle=c;break;case
O:b.filler=O;break;case
by:b.alternate=true;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":b.width=0;while(c=a.charCodeAt(d)-48,c>=0&&c<=9){b.width=b.width*10+c;d++}d--;break;case
az:b.prec=0;d++;while(c=a.charCodeAt(d)-48,c>=0&&c<=9){b.prec=b.prec*10+c;d++}d--;case"d":case"i":b.signedconv=true;case"u":b.base=10;break;case"x":b.base=16;break;case"X":b.base=16;b.uppercase=true;break;case"o":b.base=8;break;case
a2:case
dr:case
aW:b.signedconv=true;b.conv=c;break;case"E":case"F":case"G":b.signedconv=true;b.uppercase=true;b.conv=c.toLowerCase();break}}return b}function
dE(a,b){if(a.uppercase)b=b.toUpperCase();var
e=b.length;if(a.signedconv&&(a.sign<0||a.signstyle!=al))e++;if(a.alternate){if(a.base==8)e+=1;if(a.base==16)e+=2}var
c=g;if(a.justify==aZ&&a.filler==S)for(var
d=e;d<a.width;d++)c+=S;if(a.signedconv)if(a.sign<0)c+=al;else
if(a.signstyle!=al)c+=a.signstyle;if(a.alternate&&a.base==8)c+=O;if(a.alternate&&a.base==16)c+="0x";if(a.justify==aZ&&a.filler==O)for(var
d=e;d<a.width;d++)c+=O;c+=b;if(a.justify==al)for(var
d=e;d<a.width;d++)c+=S;return new
P(c)}function
jW(a,b){var
c,f=dF(a),e=f.prec<0?6:f.prec;if(b<0){f.sign=-1;b=-b}if(isNaN(b)){c=fm;f.filler=S}else
if(!isFinite(b)){c="inf";f.filler=S}else
switch(f.conv){case
a2:var
c=b.toExponential(e),d=c.length;if(c.charAt(d-3)==a2)c=c.slice(0,d-1)+O+c.slice(d-1);break;case
dr:c=b.toFixed(e);break;case
aW:e=e?e:1;c=b.toExponential(e-1);var
i=c.indexOf(a2),h=+c.slice(i+1);if(h<-4||b.toFixed(0).length>e){var
d=i-1;while(c.charAt(d)==O)d--;if(c.charAt(d)==az)d--;c=c.slice(0,d+1)+c.slice(i);d=c.length;if(c.charAt(d-3)==a2)c=c.slice(0,d-1)+O+c.slice(d-1);break}else{var
g=e;if(h<0){g-=h+1;c=b.toFixed(g)}else
while(c=b.toFixed(g),c.length>e+1)g--;if(g){var
d=c.length-1;while(c.charAt(d)==O)d--;if(c.charAt(d)==az)d--;c=c.slice(0,d+1)}}break}return dE(f,c)}function
jX(a,b){if(a.toString()==fe)return new
P(g+b);var
c=dF(a);if(b<0)if(c.signedconv){c.sign=-1;b=-b}else
b>>>=0;var
d=b.toString(c.base);if(c.prec>=0){c.filler=S;var
e=c.prec-d.length;if(e>0)d=a7(e,O)+d}return dE(c,d)}function
kx(){fT(q[7])}function
fG(a){var
b=a.length;this.array=a;this.len=this.last=b}fG.prototype=new
w();function
ao(){this.content={}}ao.prototype={exists:function(a){return this.content[a]?1:0},mk:function(a,b){this.content[a]=b},get:function(a){return this.content[a]},list:function(){var
a=[];for(var
b
in
this.content)a.push(b);return a},remove:function(a){delete
this.content[a]}};var
bL=new
ao();bL.mk(g,new
ao());function
Q(a){dG(q[2],a)}function
fU(a){a=a
instanceof
w?a.toString():a;Q(a+": No such file or directory")}function
bI(a){var
b=bL;for(var
c=0;c<a.length;c++){if(!(b.exists&&b.exists(a[c])))fU(a.orig);b=b.get(a[c])}return b}var
jS=ac;function
a6(a){a=a
instanceof
w?a.toString():a;if(a.charCodeAt(0)!=47)a=jS+a;var
d=a.split(ac),b=[];for(var
c=0;c<d.length;c++)switch(d[c]){case"..":if(b.length>1)b.pop();break;case
az:case
g:if(b.length==0)b.push(g);break;default:b.push(d[c]);break}b.orig=a;return b}function
aB(a){this.data=a}aB.prototype={content:function(){return this.data},truncate:function(){this.data.length=0}};function
jY(a){var
c=a6(a),b=bI(c);if(b
instanceof
aB)return new
fG(b.content());kx()}function
fK(a,b){var
e=a6(a),c=bL;for(var
f=0;f<e.length-1;f++){var
d=e[f];if(!c.exists(d))c.mk(d,new
ao());c=c.get(d);if(!(c
instanceof
ao))Q(e.orig+dD)}var
d=e[e.length-1];if(c.exists(d))Q(e.orig+dD);if(b
instanceof
ao)c.mk(d,b);else
if(b
instanceof
aB)c.mk(d,b);else
if(b
instanceof
w)c.mk(d,new
aB(b.getArray()));else
if(b
instanceof
Array)c.mk(d,new
aB(b));else
if(b.toString)c.mk(d,new
aB(new
w(b.toString()).getArray()));else
aC("caml_fs_register")}function
jZ(){return 0}var
bJ=[];function
j0(a,b,c){var
e=a[1],i=bJ[c];if(i===null)for(var
h=bJ.length;h<c;h++)bJ[h]=0;else
if(e[i]===b)return e[i-1];var
d=3,g=e[1]*2+1,f;while(d<g){f=d+g>>1|1;if(b<e[f+1])g=f-2;else
d=f}bJ[c]=d+1;return b==e[d+1]?e[d]:0}function
j1(a,b){return+(a5(a,b,false)>=0)}function
j5(a){return(a[3]|a[2]|a[1])==0}function
j8(a){return[ak,a&T,a>>24&T,a>>31&bC]}function
j9(a,b){var
c=a[1]-b[1],d=a[2]-b[2]+(c>>24),e=a[3]-b[3]+(d>>24);return[ak,c&T,d&T,e&bC]}function
fM(a,b){if(a[3]>b[3])return 1;if(a[3]<b[3])return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
fL(a){a[3]=a[3]<<1|a[2]>>23;a[2]=(a[2]<<1|a[1]>>23)&T;a[1]=a[1]<<1&T}function
j6(a){a[1]=(a[1]>>>1|a[2]<<23)&T;a[2]=(a[2]>>>1|a[3]<<23)&T;a[3]=a[3]>>>1}function
j$(a,b){var
e=0,d=a.slice(),c=b.slice(),f=[ak,0,0,0];while(fM(d,c)>0){e++;fL(c)}while(e>=0){e--;fL(f);if(fM(d,c)>=0){f[1]++;d=j9(d,c)}j6(c)}return[0,f,d]}function
j_(a){return a[1]|a[2]<<24}function
j4(a){return a[3]<<16<0}function
j7(a){var
b=-a[1],c=-a[2]+(b>>24),d=-a[3]+(c>>24);return[ak,b&T,c&T,d&bC]}function
j3(a,b){var
c=dF(a);if(c.signedconv&&j4(b)){c.sign=-1;b=j7(b)}var
d=g,i=j8(c.base),h="0123456789abcdef";do{var
f=j$(b,i);b=f[1];d=h.charAt(j_(f[2]))+d}while(!j5(b));if(c.prec>=0){c.filler=S;var
e=c.prec-d.length;if(e>0)d=a7(e,O)+d}return dE(c,d)}function
kw(a){var
b=0,c=10,d=a.get(0)==45?(b++,-1):1;if(a.get(b)==48)switch(a.get(b+1)){case
dv:case
88:c=16;b+=2;break;case
dy:case
79:c=8;b+=2;break;case
98:case
66:c=2;b+=2;break}return[b,d,c]}function
fS(a){if(a>=48&&a<=57)return a-48;if(a>=65&&a<=90)return a-55;if(a>=97&&a<=e_)return a-87;return-1}function
bH(a){dG(q[3],a)}function
ka(a){var
g=kw(a),f=g[0],h=g[1],d=g[2],i=-1>>>0,e=a.get(f),c=fS(e);if(c<0||c>=d)bH(bw);var
b=c;for(;;){f++;e=a.get(f);if(e==95)continue;c=fS(e);if(c<0||c>=d)break;b=d*b+c;if(b>i)bH(bw)}if(f!=a.getLen())bH(bw);b=h*b;if(d==10&&(b|0)!=b)bH(bw);return b|0}function
kb(a){return+(a>31&&a<127)}function
kc(a,b,c){return a.apply(b,c.slice(1))}function
kd(a){return a.getFullBytes()}function
ke(){var
b=A.console?A.console:{},c=["log","debug","info","warn","error","assert","dir","dirxml","trace","group","groupCollapsed","groupEnd","time","timeEnd"];function
d(){}for(var
a=0;a<c.length;a++)if(!b[c[a]])b[c[a]]=d;return b}function
kf(){var
a=A.navigator?A.navigator.userAgent:g;return a.indexOf("MSIE")!=-1&&a.indexOf("Opera")!=0}function
kg(a){return a()}function
kh(a){return new
w(a)}function
ki(a){var
c=Array.prototype.slice;return function(){var
b=arguments.length>0?c.call(arguments):[undefined];return U(a,b)}}function
kj(a,b){return+(a5(a,b,false)<=0)}function
kk(a,b){var
d=[0];for(var
c=1;c<=a;c++)d[c]=b;return d}function
fO(a){if(!a.opened)Q("Cannot flush a closed channel");if(a.buffer==g)return 0;if(a.output)switch(a.output.length){case
2:a.output(a,a.buffer);break;default:a.output(a.buffer)}a.buffer=g}function
kJ(a){var
c=a6(a),b=bI(c);return b
instanceof
ao?1:0}function
kI(a){var
b=bL,d=a6(a),e;for(var
c=0;c<d.length;c++){if(b.auto)e=b.auto;if(!(b.exists&&b.exists(d[c])))return e?e(d.join(ac)):0;b=b.get(d[c])}return 1}function
a8(a,b,c){if(q.fds===undefined)q.fds=new
Array();c=c?c:{};var
d={};d.array=b;d.offset=c.append?d.array.length:0;d.flags=c;q.fds[a]=d;q.fd_last_idx=a;return a}function
kR(a,b,c){var
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
f=a.toString(),h=a6(a);if(d.rdonly&&d.wronly)Q(f+" : flags Open_rdonly and Open_wronly are not compatible");if(d.text&&d.binary)Q(f+" : flags Open_text and Open_binary are not compatible");if(kI(a)){if(kJ(a))Q(f+" : is a directory");if(d.create&&d.excl)Q(f+dD);var
g=q.fd_last_idx?q.fd_last_idx:0,e=bI(h);if(d.truncate)e.truncate();return a8(g+1,e.content(),d)}else
if(d.create){var
g=q.fd_last_idx?q.fd_last_idx:0;fK(a,[]);var
e=bI(h);return a8(g+1,e.content(),d)}else
fU(a)}a8(0,[]);a8(1,[]);a8(2,[]);function
kl(a){var
b=q.fds[a];if(b.flags.wronly)Q(fA+a+" is writeonly");return{data:b,fd:a,opened:true}}function
kO(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
b=A.console;b&&b.log&&b.log(a)}var
bK=new
Array();function
kC(a,b){var
e=new
w(b),d=e.getLen();for(var
c=0;c<d;c++)a.data.array[a.data.offset+c]=e.get(c);a.data.offset+=d;return 0}function
km(a){var
b;switch(a){case
1:b=kO;break;case
2:b=dH;break;default:b=kC}var
d=q.fds[a];if(d.flags.rdonly)Q(fA+a+" is readonly");var
c={data:d,fd:a,opened:true,buffer:g,output:b};bK[c.fd]=c;return c}function
kn(){var
a=0;for(var
b
in
bK)if(bK[b].opened)a=[0,bK[b],a];return a}function
fP(a,b,c,d){if(!a.opened)Q("Cannot output to a closed channel");var
f;if(c==0&&b.getLen()==d)f=b;else{f=fJ(d);fI(b,c,f,0,d)}var
e=f.toString(),g=e.lastIndexOf("\n");if(g<0)a.buffer+=e;else{a.buffer+=e.substr(0,g+1);fO(a);a.buffer+=e.substr(g+1)}}function
fR(a){return new
w(a)}function
ko(a,b){var
c=fR(String.fromCharCode(b));fP(a,c,0,1)}if(!Math.imul)Math.imul=function(a,b){return((a>>16)*b<<16)+(a&bC)*b|0};var
kp=Math.imul;function
kr(a,b){return+(a5(a,b,false)!=0)}function
ks(a,b){var
d=[a];for(var
c=1;c<=b;c++)d[c]=0;return d}function
kt(a){return+(a
instanceof
Array)}function
ku(a){return a
instanceof
Array?a[0]:fq}function
kz(a,b){q[a+1]=b}var
fQ={};function
kA(a,b){fQ[a.toString()]=b;return 0}var
kv=0;function
kB(a){a[2]=kv++;return a}function
kD(a,b){return a.compare(b)}function
kE(a,b){var
c=a.fullBytes,d=b.fullBytes;if(c!=null&&d!=null)return c==d?1:0;return a.getFullBytes()==b.getFullBytes()?1:0}function
kF(a,b){return 1-kE(a,b)}function
kG(){return 32}function
kH(a){if(A.quit)A.quit(a);aC("Function 'exit' not implemented")}function
kK(a){var
b=1;while(a&&a.joo_tramp){a=a.joo_tramp.apply(null,a.joo_args);b++}return a}function
kL(a,b){return{joo_tramp:a,joo_args:b}}function
kM(a,b){if(typeof
b===fh){a.fun=b;return 0}if(b.fun){a.fun=b.fun;return 0}var
c=b.length;while(c--)a[c]=b[c];return 0}function
kq(a){return fQ[a]}function
kN(a){if(a
instanceof
Array)return a;if(A.RangeError&&a
instanceof
A.RangeError&&a.message&&a.message.match(/maximum call stack/i))return[0,q[9]];if(A.InternalError&&a
instanceof
A.InternalError&&a.message&&a.message.match(/too much recursion/i))return[0,q[9]];if(a
instanceof
A.Error)return[0,kq(fg),a];return[0,q[3],new
P(String(a))]}var
H=jN,k=jO,aa=fI,Z=fJ,e3=jT,e4=jU,dj=jW,bq=jX,f=j0,e0=ka,dk=kb,v=kd,ab=kh,aV=ki,M=kk,eY=fO,eX=km,eZ=ko,di=kp,e=fR,e2=ks,br=ku,Y=kz,dh=kA,D=kB,e1=kD,N=kF,bt=kK,$=kL,I=kN;function
h(a,b){return a.length==1?a(b):U(a,[b])}function
i(a,b,c){return a.length==2?a(b,c):U(a,[b,c])}function
o(a,b,c,d){return a.length==3?a(b,c,d):U(a,[b,c,d])}function
bs(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):U(a,[b,c,d,e,f])}function
dn(a,b,c,d,e,f,g){return a.length==6?a(b,c,d,e,f,g):U(a,[b,c,d,e,f,g])}function
dp(a,b,c,d,e,f,g,h){return a.length==7?a(b,c,d,e,f,g,h):U(a,[b,c,d,e,f,g,h])}fK("/scene.json",'[0,[0,0,0,2810,3930],\n [0,[0,6,3880.68,304,3919.68],[0,53.5,3887.87,256.5,3911.87],\n  [0,596,3880.68,882,3919.68],[0,641.5,3887.87,836.5,3911.87],\n  [0,96,3804.67,214,3843.67],[0,117.5,3811.87,192.5,3832.87],\n  [0,680,3804.67,798,3843.67],[0,701.5,3811.87,776.5,3832.87],\n  [0,95,3729.67,215,3768.67],[0,115.5,3736.87,194.5,3757.87],\n  [0,679,3729.67,799,3768.67],[0,699.5,3736.87,778.5,3757.87],\n  [0,74,3653.67,236,3692.67],[0,100.5,3660.87,209.5,3684.87],\n  [0,696,3653.67,782,3692.67],[0,712,3660.87,766,3681.87],\n  [0,34,3578.67,276,3617.67],[0,73,3585.87,237,3609.87],\n  [0,520,3578.67,958,3617.67],[0,589,3585.87,889,3609.87],\n  [0,49,3502.67,261,3541.67],[0,82,3509.87,228,3530.87],\n  [0,633,3502.67,845,3541.67],[0,666,3509.87,812,3530.87],\n  [0,47,3427.67,263,3466.67],[0,81,3434.87,229,3458.87],\n  [0,631,3427.67,847,3466.67],[0,665,3434.87,813,3458.87],\n  [0,2763,2099.7,2805,2142.7],[0,2774,2110.3,2794,2130.3],\n  [0,2266,2101.7,2466,2140.7],[0,2298,2108.9,2434,2129.9],\n  [0,2258,2176.7,2474,2215.7],[0,2292.5,2183.9,2439.5,2204.9],\n  [0,2261,2252.7,2471,2291.7],[0,2294,2259.9,2438,2280.9],\n  [0,2262,1950.7,2470,1989.7],[0,2295,1957.9,2437,1978.9],\n  [0,2225,2025.7,2507,2064.7],[0,2268.5,2032.9,2463.5,2056.9],\n  [0,1243,2987.67,1425,3026.67],[0,1273,2994.87,1395,3015.87],\n  [0,1723,2987.67,1957,3026.67],[0,1762,2994.87,1918,3017.87],\n  [0,64,2410.7,246,2449.7],[0,93,2417.9,217,2441.9],\n  [0,648,2410.7,830,2449.7],[0,677,2417.9,801,2441.9],\n  [0,62,2334.7,248,2373.7],[0,92.5,2341.9,217.5,2365.9],\n  [0,650,2334.7,828,2373.7],[0,679,2341.9,799,2365.9],\n  [0,73,2259.7,237,2298.7],[0,101,2266.9,209,2287.9],\n  [0,623,2259.7,855,2298.7],[0,660.5,2266.9,817.5,2290.9],\n  [0,1730,2642.7,1950,2681.7],[0,1766.5,2649.9,1913.5,2673.9],\n  [0,2295,2642.7,2437,2681.7],[0,2318.5,2649.9,2413.5,2673.9],\n  [0,41,2183.7,269,2222.7],[0,78.5,2190.9,231.5,2214.9],\n  [0,664,2183.7,814,2222.7],[0,690.5,2190.9,787.5,2214.9],\n  [0,79,2108.7,231,2147.7],[0,103.5,2115.9,206.5,2136.9],\n  [0,662,2108.7,816,2147.7],[0,687.5,2115.9,790.5,2136.9],\n  [0,76,2032.7,234,2071.7],[0,103,2039.9,207,2063.9],\n  [0,628,2032.7,850,2071.7],[0,664.5,2039.9,813.5,2063.9],\n  [0,1222,1857.7,1446,1896.7],[0,1259,1864.9,1409,1888.9],\n  [0,1711,1859.7,1969,1898.7],[0,1753.5,1866.9,1926.5,1890.9],\n  [0,1761,2551.7,1919,2590.7],[0,1787,2558.9,1893,2582.9],\n  [0,2268,2403.7,2464,2442.7],[0,2300,2410.9,2432,2434.9],\n  [0,73,1622.7,237,1661.7],[0,101.5,1629.9,208.5,1652.9],\n  [0,670,1622.7,808,1661.7],[0,693.5,1629.9,784.5,1653.9],\n  [0,54,1547.7,256,1586.7],[0,88.5,1554.9,221.5,1578.9],\n  [0,638,1547.7,840,1586.7],[0,672.5,1554.9,805.5,1578.9],\n  [0,1236,3169.67,1432,3208.67],[0,1269,3176.87,1399,3199.87],\n  [0,1742,3234.67,1938,3273.67],[0,1775,3241.87,1905,3264.87],\n  [0,1711,2817.7,1969,2856.7],[0,1752,2824.9,1928,2848.9],\n  [0,2257,2817.7,2475,2856.7],[0,2291,2824.9,2441,2848.9],\n  [0,1819,1779.7,1861,1822.7],[0,1830,1790.3,1850,1810.3],\n  [0,1223,1687.7,1445,1726.7],[0,1259.5,1694.9,1408.5,1717.9],\n  [0,1172,1782.7,1496,1821.7],[0,1223.5,1789.9,1444.5,1813.9],\n  [0,1172,1953.7,1496,1992.7],[0,1223.5,1960.9,1444.5,1984.9],\n  [0,35,1471.7,275,1510.7],[0,72,1478.9,238,1502.9],\n  [0,619,1471.7,859,1510.7],[0,656,1478.9,822,1502.9],\n  [0,52,1396.7,258,1435.7],[0,85,1403.9,225,1424.9],\n  [0,636,1396.7,842,1435.7],[0,669,1403.9,809,1424.9],\n  [0,74,1320.7,236,1359.7],[0,102,1327.9,208,1351.9],\n  [0,663,1320.7,815,1359.7],[0,688.5,1327.9,789.5,1351.9],\n  [0,64,1245.7,246,1284.7],[0,95.5,1252.9,214.5,1276.9],\n  [0,679,1245.7,799,1284.7],[0,699,1252.9,779,1276.9],\n  [0,45,1169.7,265,1208.7],[0,82,1176.9,228,1200.9],\n  [0,619,1169.7,859,1208.7],[0,656.5,1176.9,821.5,1200.9],\n  [0,119,1094.7,191,1133.7],[0,134,1101.9,176,1122.9],\n  [0,651,1094.7,827,1133.7],[0,680,1101.9,798,1125.9],\n  [0,120,792.699,190,831.699],[0,133.5,799.9,176.5,823.9],\n  [0,649,792.699,829,831.699],[0,678,799.9,800,823.9],\n  [0,718,904.699,760,947.699],[0,729,915.3,749,935.3],\n  [0,68,867.699,242,906.699],[0,96,874.9,214,898.9],\n  [0,54,943.699,256,982.699],[0,88,950.9,222,974.9],\n  [0,106,1018.7,204,1057.7],[0,122.5,1025.9,187.5,1049.9],\n  [0,1771,2221.7,1909,2260.7],[0,1793.5,2228.9,1886.5,2249.9],\n  [0,2184,2327.7,2548,2366.7],[0,2238,2334.9,2494,2358.9],\n  [0,125,716.699,185,755.699],[0,138,723.9,172,744.9],\n  [0,691,716.699,787,755.699],[0,709,723.9,769,744.9],\n  [0,11,641.699,299,680.699],[0,58.5,648.9,251.5,672.9],\n  [0,603,576.699,875,615.699],[0,647,583.9,831,607.9],\n  [0,1740,611.699,1940,650.699],[0,1773,618.9,1907,642.9],\n  [0,2295,611.699,2437,650.699],[0,2321,618.9,2411,642.9],\n  [0,100,501.699,210,540.699],[0,119.5,509.9,190.5,529.9],\n  [0,662,501.699,816,540.699],[0,688,509.9,790,529.9],\n  [0,67,425.699,243,464.699],[0,95,432.9,215,456.9],\n  [0,664,425.699,814,464.699],[0,688.5,432.9,789.5,453.9],\n  [0,718,272.699,760,315.699],[0,729,283.3,749,303.3],\n  [0,9,199.699,301,238.699],[0,54,206.9,256,230.9],\n  [0,12,274.699,298,313.699],[0,56,281.9,254,305.9],\n  [0,4,350.699,306,389.699],[0,51.5,357.9,258.5,381.9],\n  [0,42,3287.67,268,3326.67],[0,77.5,3294.87,232.5,3318.87],\n  [0,617,3351.67,861,3390.67],[0,655.5,3358.87,822.5,3382.87],\n  [0,1819,84.6992,1861,127.699],[0,1830,95.3,1850,115.3],\n  [0,1222,10.6992,1446,49.6992],[0,1257,17.9,1411,41.9],\n  [0,1188,86.6992,1480,125.699],[0,1233.5,93.9,1434.5,117.9],\n  [0,1215,161.699,1453,200.699],[0,1252,168.9,1416,192.9],\n  [0,52,48.6992,258,87.6992],[0,87.5,55.9,222.5,78.9],\n  [0,75,123.699,235,162.699],[0,101.5,130.9,208.5,154.9],\n  [0,716,120.199,762,166.199],[0,727,134.6,751,152.6],\n  [0,33,1723.7,277,1762.7],[0,72.5,1730.9,237.5,1753.9],\n  [0,8,1808.7,302,1847.7],[0,53.5,1815.9,256.5,1839.9],\n  [0,8,1936.7,302,1975.7],[0,53.5,1943.9,256.5,1967.9],\n  [0,668,2684.7,810,2723.7],[0,691.5,2691.9,786.5,2712.9],\n  [0,648,2817.7,830,2856.7],[0,679.5,2824.9,798.5,2848.9],\n  [0,639,2565.7,839,2604.7],[0,671,2572.9,807,2596.9],\n  [0,652,2485.7,826,2524.7],[0,679.5,2492.9,798.5,2516.9],\n  [0,675,3017.67,803,3056.67],[0,696,3024.87,782,3045.87],\n  [0,675,3140.67,803,3179.67],[0,696,3147.87,782,3171.87],\n  [0,1244,2157.7,1424,2196.7],[0,1274,2164.9,1394,2188.9],\n  [0,1243,2359.7,1425,2398.7],[0,1273,2366.9,1395,2387.9],\n  [0,303.121,3899.18,596.828,3901.18],[0,213.129,3823.17,680.672,3825.17],\n  [0,214.75,3748.17,679.328,3750.17],[0,235.59,3672.17,696.328,3674.17],\n  [0,275.301,3597.17,520.871,3599.17],[0,260.762,3521.17,633.039,3523.17],\n  [0,262.109,3446.17,631.578,3448.17],[0,2465.1,2120.2,2763.2,2122.2],\n  [0,2439.62,2123.82,2763.98,2183.88],[0,2427.96,2129.3,2766.04,2258.57],\n  [0,2428.86,1983.43,2766.04,2113],[0,2446.92,2058.91,2763.88,2118.48],\n  [0,1424.2,3006.17,1723.9,3008.17],[0,245.289,2429.2,648.551,2431.2],\n  [0,247.539,2353.2,650.238,2355.2],[0,236.512,2278.2,623.422,2280.2],\n  [0,1949.6,2661.2,2295.2,2663.2],[0,268.289,2202.2,664.891,2204.2],\n  [0,230.75,2127.2,662.461,2129.2],[0,233.762,2051.2,628.391,2053.2],\n  [0,1445,1876.6,1711.3,1879.7],[0,1889.23,2437.34,2312.67,2558.26],\n  [0,236.512,1641.2,670.828,1643.2],[0,255.73,1566.2,638.078,1568.2],\n  [0,1414.07,3198.48,1759.93,3244.86],[0,1968.7,2836.2,2257.7,2838.2],\n  [0,1406.82,1719.71,1819.98,1798.38],[0,1495.1,1800.2,1819.3,1802.9],\n  [0,1384.07,1806.86,1820.93,1957.05],[0,274.59,1490.2,619.32,1492.2],\n  [0,257.73,1415.2,636.359,1417.2],[0,235.281,1339.2,663.309,1341.2],\n  [0,245.289,1264.2,679.301,1266.2],[0,264.5,1188.2,619.969,1190.2],\n  [0,190.648,1113.2,651.969,1115.2],[0,189.352,811.199,649.809,813.199],\n  [0,187.039,817.52,719.07,923.18],[0,237.363,891.703,718.516,925.797],\n  [0,249.738,926.504,718.473,958.195],[0,197.754,929.02,718.996,1030.88],\n  [0,1894.6,2251.22,2285.9,2331.98],[0,184.359,735.199,691.32,737.199],\n  [0,262.34,606.707,635.25,650.191],[0,1939.6,630.199,2295.9,632.199],\n  [0,209.68,520.199,662.191,522.199],[0,242.121,444.199,664.789,446.199],\n  [0,255.93,231.207,718.777,292.594],[0,297.121,293.199,718.43,295.199],\n  [0,256.602,295.809,718.59,357.891],[0,247.75,3316.36,641.281,3361.44],\n  [0,1415.75,41.5117,1819.75,104.09],[0,1479.3,105.199,1819.1,107.199],\n  [0,1418.55,108.211,1819.55,169.59],[0,1732.44,3252.65,1746.62,3262.46],\n  [0,265.527,3256.52,1733.63,3304.7],[0,1767.35,3266.04,1782.11,3275.61],\n  [0,858.574,3269.62,1769.62,3368.91],[0,1192.57,110.066,1206.9,119.863],\n  [0,761.176,113.898,1193.96,142.801],[0,1213.52,168.641,1227.8,178.441],\n  [0,761.176,143.605,1214.86,174.598],[0,705.75,138.289,719.781,148.109],\n  [0,234.059,142.199,706.75,144.199],[0,1729.4,628.211,1743.53,638.027],\n  [0,297.191,632.102,1730.52,659.602],[0,1730.45,622.766,1744.62,632.578],\n  [0,870.41,599.398,1731.63,628.699],[0,1231.03,1860.61,1245.54,1870.36],\n  [0,251.367,1753.11,1232.71,1866.59],[0,1213.95,1705.92,1228.12,1715.73],\n  [0,274.23,1709.8,1215.13,1740.5],[0,1164.61,1801.02,1178.73,1810.83],\n  [0,299.246,1804.9,1165.72,1826],[0,1214.81,1867.36,1229.02,1877.17],\n  [0,293.957,1833,1216.04,1873.3],[0,1162.7,1965.77,1176.82,1975.59],\n  [0,300.734,1957.3,1163.82,1971.7],[0,1219.47,1879.97,1233.8,1889.77],\n  [0,283.633,1883.8,1220.87,1948.6],[0,1722.11,2661.73,1736.32,2671.55],\n  [0,809.09,2665.6,1723.34,2702.5],[0,1730.73,2819.21,1745.24,2828.96],\n  [0,802.828,2710.91,1732.42,2825.19],[0,1700.2,2832.29,1714.23,2842.11],\n  [0,829.57,2836.2,1701.2,2838.2],[0,1745.66,2987.88,1760.28,2997.58],\n  [0,810.656,2847.31,1747.55,2993.87],[0,1749.33,2671.61,1763.96,2681.3],\n  [0,809.812,2675.31,1751.26,2826.89],[0,1750.95,2567.4,1765.03,2577.22],\n  [0,838.148,2571.3,1752.01,2584.9],[0,1727.37,2649.44,1741.7,2659.23],\n  [0,831.379,2590.61,1728.77,2655.39],[0,2260.46,2423.54,2274.71,2433.35],\n  [0,823.277,2427.4,2261.75,2501.9],[0,1745.99,2643.7,1760.58,2653.41],\n  [0,810.801,2514.31,1747.84,2649.69],[0,1749.73,2848.55,1764.42,2858.21],\n  [0,792.301,2852.21,1751.78,3028.45],[0,1776.56,3230.96,1791.41,3240.38],\n  [0,796.605,3043.79,1779.18,3236.91],[0,1732.71,3245.53,1746.91,3255.34],\n  [0,794.543,3167.67,1733.94,3251.47],[0,1741.53,3015.89,1756.11,3025.62],\n  [0,795.742,3019.63,1743.34,3153.26],[0,2293.6,2401.59,2308.38,2411.15],\n  [0,1390.87,2190.13,2295.93,2407.57],[0,2283.51,2323,2298.31,2332.51],\n  [0,1421.48,2171.56,2285.95,2328.97],[0,2254.79,2054.46,2269.32,2064.2],\n  [0,1409.38,2058.21,2256.52,2168.49],[0,2259.31,2413.75,2273.52,2423.57],\n  [0,1422.86,2382,2260.54,2419.7],[0,2181.51,2348.03,2195.71,2357.85],\n  [0,1423.77,2351.9,2182.73,2377.4]],\n [0,[2,155,3900.17,148,18.5,0,[0,"#000000"]],\n  [3,155,3903.87,"ubiquity-slideshow-kubuntu","14px serif",[0,"#000000"],0],\n  [2,739,3900.17,141.998,18.5,0,[0,"#000000"]],\n  [3,739,3903.87,"ubiquity-slideshow-ubuntu","14px serif",[0,"#000000"],0],\n  [2,155,3824.17,57.9996,18.5,0,[0,"#000000"]],\n  [3,155,3827.87,"tk8.4-doc","14px serif",[0,"#000000"],0],\n  [2,739,3824.17,57.9996,18.5,0,[0,"#000000"]],\n  [3,739,3827.87,"tk8.5-doc","14px serif",[0,"#000000"],0],\n  [2,155,3749.17,59.0004,18.5,0,[0,"#000000"]],\n  [3,155,3752.87,"tcl8.4-doc","14px serif",[0,"#000000"],0],\n  [2,739,3749.17,59.0004,18.5,0,[0,"#000000"]],\n  [3,739,3752.87,"tcl8.5-doc","14px serif",[0,"#000000"],0],\n  [2,155,3673.17,79.9992,18.5,0,[0,"#000000"]],\n  [3,155,3676.87,"openbsd-inetd","14px serif",[0,"#000000"],0],\n  [2,739,3673.17,42.0012,18.5,0,[0,"#000000"]],\n  [3,739,3676.87,"xinetd","14px serif",[0,"#000000"],0],\n  [2,155,3598.17,119.999,18.5,0,[0,"#000000"]],\n  [3,155,3601.87,"network-manager-kde","14px serif",[0,"#000000"],0],\n  [2,739,3598.17,218.002,18.5,0,[0,"#000000"]],\n  [3,739,3601.87,"plasma-widget-networkmanagement (x 2)","14px serif",\n   [0,"#000000"],0],\n  [2,155,3522.17,105.001,18.5,0,[0,"#000000"]],\n  [3,155,3525.87,"libstdc++6-4.4-doc","14px serif",[0,"#000000"],0],\n  [2,739,3522.17,105.001,18.5,0,[0,"#000000"]],\n  [3,739,3525.87,"libstdc++6-4.5-doc","14px serif",[0,"#000000"],0],\n  [2,155,3447.17,106.999,18.5,0,[0,"#000000"]],\n  [3,155,3450.87,"libstdc++6-4.4-dbg","14px serif",[0,"#000000"],0],\n  [2,739,3447.17,106.999,18.5,0,[0,"#000000"]],\n  [3,739,3450.87,"libstdc++6-4.5-dbg","14px serif",[0,"#000000"],0],\n  [2,2784,2121.2,20.0002,20.4998,0,[0,"#ff0000"]],\n  [3,2784,2125.3,"#","14px serif",[0,"#ff0000"],0],\n  [2,2366,2121.2,99,18.5,0,[0,"#000000"]],\n  [3,2366,2124.9,"libsdl1.2debian-all","14px serif",[0,"#000000"],0],\n  [2,2366,2196.2,106.999,18.5,0,[0,"#000000"]],\n  [3,2366,2199.9,"libsdl1.2debian-alsa","14px serif",[0,"#000000"],0],\n  [2,2366,2272.2,104,18.5,0,[0,"#000000"]],\n  [3,2366,2275.9,"libsdl1.2debian-esd","14px serif",[0,"#000000"],0],\n  [2,2366,1970.2,103,18.5,0,[0,"#000000"]],\n  [3,2366,1973.9,"libsdl1.2debian-oss","14px serif",[0,"#000000"],0],\n  [2,2366,2045.2,140,18.5,0,[0,"#000000"]],\n  [3,2366,2048.9,"libsdl1.2debian-pulseaudio","14px serif",[0,"#000000"],0],\n  [2,1334,3007.17,90,18.5,0,[0,"#000000"]],\n  [3,1334,3010.87,"libreadline5-dev","14px serif",[0,"#000000"],0],\n  [2,1840,3007.17,115.999,18.5,0,[0,"#000000"]],\n  [3,1840,3010.87,"libreadline6-dev (x 6)","14px serif",[0,"#000000"],0],\n  [2,155,2430.2,90,18.5,0,[0,"#000000"]],\n  [3,155,2433.9,"libreadline5-dbg","14px serif",[0,"#000000"],0],\n  [2,739,2430.2,90,18.5,0,[0,"#000000"]],\n  [3,739,2433.9,"libreadline6-dbg","14px serif",[0,"#000000"],0],\n  [2,155,2354.2,92.0016,18.5,0,[0,"#000000"]],\n  [3,155,2357.9,"libqt4-dbg (x 24)","14px serif",[0,"#000000"],0],\n  [2,739,2354.2,87.9984,18.5,0,[0,"#000000"]],\n  [3,739,2357.9,"qt-x11-free-dbg","14px serif",[0,"#000000"],0],\n  [2,155,2279.2,81,18.5,0,[0,"#000000"]],\n  [3,155,2282.9,"libneon27-dev","14px serif",[0,"#000000"],0],\n  [2,739,2279.2,114.998,18.5,0,[0,"#000000"]],\n  [3,739,2282.9,"libneon27-gnutls-dev","14px serif",[0,"#000000"],0],\n  [2,1840,2662.2,109.001,18.5,0,[0,"#000000"]],\n  [3,1840,2665.9,"libjpeg62-dev (x 23)","14px serif",[0,"#000000"],0],\n  [2,2366,2662.2,69.9984,18.5,0,[0,"#000000"]],\n  [3,2366,2665.9,"libjpeg8-dev","14px serif",[0,"#000000"],0],\n  [2,155,2203.2,113,18.5,0,[0,"#000000"]],\n  [3,155,2206.9,"libjack-jackd2-0 (x 2)","14px serif",[0,"#000000"],0],\n  [2,739,2203.2,74.0016,18.5,0,[0,"#000000"]],\n  [3,739,2206.9,"libjack0 (x 3)","14px serif",[0,"#000000"],0],\n  [2,155,2128.2,74.9988,18.5,0,[0,"#000000"]],\n  [3,155,2131.9,"libiodbc2-dev","14px serif",[0,"#000000"],0],\n  [2,739,2128.2,75.9996,18.5,0,[0,"#000000"]],\n  [3,739,2131.9,"unixodbc-dev","14px serif",[0,"#000000"],0],\n  [2,155,2052.2,78.0012,18.5,0,[0,"#000000"]],\n  [3,155,2055.9,"libgpod4 (x 9)","14px serif",[0,"#000000"],0],\n  [2,739,2052.2,110.002,18.5,0,[0,"#000000"]],\n  [3,739,2055.9,"libgpod4-nogtk (x 2)","14px serif",[0,"#000000"],0],\n  [2,1334,1877.2,110.999,18.5,0,[0,"#000000"]],\n  [3,1334,1880.9,"libgl1-mesa-glx (x 8)","14px serif",[0,"#000000"],0],\n  [2,1840,1879.2,128.002,18.5,0,[0,"#000000"]],\n  [3,1840,1882.9,"libgl1-mesa-swx11 (x 3)","14px serif",[0,"#000000"],0],\n  [2,1840,2571.2,78.0012,18.5,0,[0,"#000000"]],\n  [3,1840,2574.9,"libgd2-noxpm","14px serif",[0,"#000000"],0],\n  [2,2366,2423.2,96.9984,18.5,0,[0,"#000000"]],\n  [3,2366,2426.9,"libgd2-xpm (x 10)","14px serif",[0,"#000000"],0],\n  [2,155,1642.2,81,18.5,0,[0,"#000000"]],\n  [3,155,1645.9,"libelf-dev (x 3)","14px serif",[0,"#000000"],0],\n  [2,739,1642.2,68.0004,18.5,0,[0,"#000000"]],\n  [3,739,1645.9,"libelfg0-dev","14px serif",[0,"#000000"],0],\n  [2,155,1567.2,100.001,18.5,0,[0,"#000000"]],\n  [3,155,1570.9,"libdb4.7-java (x 3)","14px serif",[0,"#000000"],0],\n  [2,739,1567.2,100.001,18.5,0,[0,"#000000"]],\n  [3,739,1570.9,"libdb4.8-java (x 3)","14px serif",[0,"#000000"],0],\n  [2,1334,3189.17,96.9984,18.5,0,[0,"#000000"]],\n  [3,1334,3192.87,"libdb4.7-dev (x 2)","14px serif",[0,"#000000"],0],\n  [2,1840,3254.17,96.9984,18.5,0,[0,"#000000"]],\n  [3,1840,3257.87,"libdb4.8-dev (x 5)","14px serif",[0,"#000000"],0],\n  [2,1840,2837.2,128.002,18.5,0,[0,"#000000"]],\n  [3,1840,2840.9,"libcurl4-gnutls-dev (x 4)","14px serif",[0,"#000000"],0],\n  [2,2366,2837.2,108,18.5,0,[0,"#000000"]],\n  [3,2366,2840.9,"libcurl4-openssl-dev","14px serif",[0,"#000000"],0],\n  [2,1840,1801.2,20.0002,20.4998,0,[0,"#ff0000"]],\n  [3,1840,1805.3,"#","14px serif",[0,"#ff0000"],0],\n  [2,1334,1707.2,110.002,18.5,0,[0,"#000000"]],\n  [3,1334,1710.9,"libclutter-1.0-0 (x 2)","14px serif",[0,"#000000"],0],\n  [2,1334,1802.2,160.999,18.5,0,[0,"#000000"]],\n  [3,1334,1805.9,"libclutter-eglx-es11-1.0-0 (x 2)","14px serif",\n   [0,"#000000"],0],\n  [2,1334,1973.2,160.999,18.5,0,[0,"#000000"]],\n  [3,1334,1976.9,"libclutter-eglx-es20-1.0-0 (x 2)","14px serif",\n   [0,"#000000"],0],\n  [2,155,1491.2,119.002,18.5,0,[0,"#000000"]],\n  [3,155,1494.9,"lib64stdc++6-4.4-dbg","14px serif",[0,"#000000"],0],\n  [2,739,1491.2,119.002,18.5,0,[0,"#000000"]],\n  [3,739,1494.9,"lib64stdc++6-4.5-dbg","14px serif",[0,"#000000"],0],\n  [2,155,1416.2,101.999,18.5,0,[0,"#000000"]],\n  [3,155,1419.9,"lib64readline5-dev","14px serif",[0,"#000000"],0],\n  [2,739,1416.2,101.999,18.5,0,[0,"#000000"]],\n  [3,739,1419.9,"lib64readline6-dev","14px serif",[0,"#000000"],0],\n  [2,155,1340.2,79.9992,18.5,0,[0,"#000000"]],\n  [3,155,1343.9,"hunspell-tools","14px serif",[0,"#000000"],0],\n  [2,739,1340.2,74.9988,18.5,0,[0,"#000000"]],\n  [3,739,1343.9,"myspell-tools","14px serif",[0,"#000000"],0],\n  [2,155,1265.2,90,18.5,0,[0,"#000000"]],\n  [3,155,1268.9,"hunspell-fr (x 3)","14px serif",[0,"#000000"],0],\n  [2,739,1265.2,59.0004,18.5,0,[0,"#000000"]],\n  [3,739,1268.9,"myspell-fr","14px serif",[0,"#000000"],0],\n  [2,155,1189.2,109.001,18.5,0,[0,"#000000"]],\n  [3,155,1192.9,"hunspell-de-de (x 3)","14px serif",[0,"#000000"],0],\n  [2,739,1189.2,119.002,18.5,0,[0,"#000000"]],\n  [3,739,1192.9,"myspell-de-de-oldspell","14px serif",[0,"#000000"],0],\n  [2,155,1114.2,34.9999,18.5,0,[0,"#000000"]],\n  [3,155,1117.9,"hello","14px serif",[0,"#000000"],0],\n  [2,739,1114.2,87.0012,18.5,0,[0,"#000000"]],\n  [3,739,1117.9,"hello-debhelper","14px serif",[0,"#000000"],0],\n  [2,155,812.2,33.9998,18.5,0,[0,"#000000"]],\n  [3,155,815.9,"grub","14px serif",[0,"#000000"],0],\n  [2,739,812.2,88.9992,18.5,0,[0,"#000000"]],\n  [3,739,815.9,"grub-legacy-ec2","14px serif",[0,"#000000"],0],\n  [2,739,926.2,20.0002,20.4998,0,[0,"#ff0000"]],\n  [3,739,930.3,"#","14px serif",[0,"#ff0000"],0],\n  [2,155,887.2,86.0004,18.5,0,[0,"#000000"]],\n  [3,155,890.9,"grub-efi-amd64","14px serif",[0,"#000000"],0],\n  [2,155,963.2,100.001,18.5,0,[0,"#000000"]],\n  [3,155,966.9,"grub-efi-ia32 (x 2)","14px serif",[0,"#000000"],0],\n  [2,155,1038.2,47.9988,18.5,0,[0,"#000000"]],\n  [3,155,1041.9,"grub-pc","14px serif",[0,"#000000"],0],\n  [2,1840,2241.2,68.0004,18.5,0,[0,"#000000"]],\n  [3,1840,2244.9,"foomatic-db","14px serif",[0,"#000000"],0],\n  [2,2366,2347.2,181.001,18.5,0,[0,"#000000"]],\n  [3,2366,2350.9,"foomatic-db-compressed-ppds (x 4)","14px serif",\n   [0,"#000000"],0],\n  [2,155,736.2,29.0002,18.5,0,[0,"#000000"]],\n  [3,155,739.9,"flex","14px serif",[0,"#000000"],0],\n  [2,739,736.2,47.0016,18.5,0,[0,"#000000"]],\n  [3,739,739.9,"flex-old","14px serif",[0,"#000000"],0],\n  [2,155,661.2,142.999,18.5,0,[0,"#000000"]],\n  [3,155,664.9,"exim4-daemon-heavy (x 2)","14px serif",[0,"#000000"],0],\n  [2,739,596.2,135,18.5,0,[0,"#000000"]],\n  [3,739,599.9,"exim4-daemon-light (x 2)","14px serif",[0,"#000000"],0],\n  [2,1840,631.2,99,18.5,0,[0,"#000000"]],\n  [3,1840,634.9,"exim4-config (x 5)","14px serif",[0,"#000000"],0],\n  [2,2366,631.2,69.9984,18.5,0,[0,"#000000"]],\n  [3,2366,634.9,"postfix (x 9)","14px serif",[0,"#000000"],0],\n  [2,155,521.2,54,18.5,0,[0,"#000000"]],\n  [3,155,524.9,"emacs23","14px serif",[0,"#000000"],0],\n  [2,739,521.2,75.9996,18.5,0,[0,"#000000"]],\n  [3,739,524.9,"emacs23-nox","14px serif",[0,"#000000"],0],\n  [2,155,445.2,87.0012,18.5,0,[0,"#000000"]],\n  [3,155,448.9,"debconf-english","14px serif",[0,"#000000"],0],\n  [2,739,445.2,74.0016,18.5,0,[0,"#000000"]],\n  [3,739,448.9,"debconf-i18n","14px serif",[0,"#000000"],0],\n  [2,739,294.2,20.0002,20.4998,0,[0,"#ff0000"]],\n  [3,739,298.3,"#","14px serif",[0,"#ff0000"],0],\n  [2,155,219.2,145.001,18.5,0,[0,"#000000"]],\n  [3,155,222.9,"bacula-common-mysql (x 3)","14px serif",[0,"#000000"],0],\n  [2,155,294.2,141.998,18.5,0,[0,"#000000"]],\n  [3,155,297.9,"bacula-common-pgsql (x 3)","14px serif",[0,"#000000"],0],\n  [2,155,370.2,150.001,18.5,0,[0,"#000000"]],\n  [3,155,373.9,"bacula-common-sqlite3 (x 3)","14px serif",[0,"#000000"],0],\n  [2,155,3307.17,112,18.5,0,[0,"#000000"]],\n  [3,155,3310.87,"apache2-prefork-dev","14px serif",[0,"#000000"],0],\n  [2,739,3371.17,121,18.5,0,[0,"#000000"]],\n  [3,739,3374.87,"apache2-threaded-dev","14px serif",[0,"#000000"],0],\n  [2,1840,106.2,20.0002,20.4998,0,[0,"#ff0000"]],\n  [3,1840,110.3,"#","14px serif",[0,"#ff0000"],0],\n  [2,1334,30.2,110.999,18.5,0,[0,"#000000"]],\n  [3,1334,33.9,"apache2-mpm-event","14px serif",[0,"#000000"],0],\n  [2,1334,106.2,145.001,18.5,0,[0,"#000000"]],\n  [3,1334,109.9,"apache2-mpm-prefork (x 2)","14px serif",[0,"#000000"],0],\n  [2,1334,181.2,118.001,18.5,0,[0,"#000000"]],\n  [3,1334,184.9,"apache2-mpm-worker","14px serif",[0,"#000000"],0],\n  [2,155,68.2,101.999,18.5,0,[0,"#000000"]],\n  [3,155,71.9,"abrowser (x 7049)","14px serif",[0,"#000000"],0],\n  [2,155,143.2,78.9984,18.5,0,[0,"#000000"]],\n  [3,155,146.9,"eucalyptus-nc","14px serif",[0,"#000000"],0],\n  [2,739,143.2,22,22,0,[0,"#0000ff"]],\n  [3,739,147.6,"or","14px serif",[0,"#0000ff"],0],\n  [2,155,1743.2,121,18.5,0,[0,"#000000"]],\n  [3,155,1746.9,"libclutter-1.0-dev (x 2)","14px serif",[0,"#000000"],0],\n  [2,155,1828.2,146.002,18.5,0,[0,"#000000"]],\n  [3,155,1831.9,"libclutter-eglx-es11-1.0-dev","14px serif",[0,"#000000"],0],\n  [2,155,1956.2,146.002,18.5,0,[0,"#000000"]],\n  [3,155,1959.9,"libclutter-eglx-es20-1.0-dev","14px serif",[0,"#000000"],0],\n  [2,739,2704.2,69.9984,18.5,0,[0,"#000000"]],\n  [3,739,2707.9,"libecore-dev","14px serif",[0,"#000000"],0],\n  [2,739,2837.2,90,18.5,0,[0,"#000000"]],\n  [3,739,2840.9,"libedje-dev (x 2)","14px serif",[0,"#000000"],0],\n  [2,739,2585.2,99,18.5,0,[0,"#000000"]],\n  [3,739,2588.9,"libgd2-noxpm-dev","14px serif",[0,"#000000"],0],\n  [2,739,2505.2,86.0004,18.5,0,[0,"#000000"]],\n  [3,739,2508.9,"libgd2-xpm-dev","14px serif",[0,"#000000"],0],\n  [2,739,3037.17,63,18.5,0,[0,"#000000"]],\n  [3,739,3040.87,"librdf0-dev","14px serif",[0,"#000000"],0],\n  [2,739,3160.17,63,18.5,0,[0,"#000000"]],\n  [3,739,3163.87,"librpm-dev","14px serif",[0,"#000000"],0],\n  [2,1334,2177.2,88.9992,18.5,0,[0,"#000000"]],\n  [3,1334,2180.9,"ubuntu-desktop","14px serif",[0,"#000000"],0],\n  [2,1334,2379.2,90,18.5,0,[0,"#000000"]],\n  [3,1334,2382.9,"ubuntu-netbook","14px serif",[0,"#000000"],0],\n  [0,[0,[0,303.12,3900.17],[1,393.26,3900.17,507.79,3900.17,596.83,3900.17]],\n   0,[0,"#ff0000"]],\n  [0,[0,[0,213.13,3824.17],[1,324.93,3824.17,568.72,3824.17,680.67,3824.17]],\n   0,[0,"#ff0000"]],\n  [0,[0,[0,214.75,3749.17],[1,326.82,3749.17,567.33,3749.17,679.33,3749.17]],\n   0,[0,"#ff0000"]],\n  [0,[0,[0,235.59,3673.17],[1,361.22,3673.17,599.38,3673.17,696.33,3673.17]],\n   0,[0,"#ff0000"]],\n  [0,[0,[0,275.3,3598.17],[1,346.08,3598.17,437.75,3598.17,520.87,3598.17]],\n   0,[0,"#ff0000"]],\n  [0,[0,[0,260.76,3522.17],[1,366.27,3522.17,527.46,3522.17,633.04,3522.17]],\n   0,[0,"#ff0000"]],\n  [0,[0,[0,262.11,3447.17],[1,367.16,3447.17,526.43,3447.17,631.58,3447.17]],\n   0,[0,"#ff0000"]],\n  [0,[0,[0,2465.1,2121.2],[1,2564.3,2121.2,2709.7,2121.2,2763.2,2121.2]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,2439.8,2182.9],[1,2538,2165.3,2706,2135.2,2763.8,2124.8]],0,\n   [0,"#ff0000"]],\n  [0,\n   [0,[0,2428.2,2257.6],[1,2463.5,2248.9,2508.1,2236.7,2547,2223.2],\n    [1,2630.5,2194.1,2726.2,2149.2,2765.6,2130.2]],\n   0,[0,"#ff0000"]],\n  [0,\n   [0,[0,2429.1,1984.4],[1,2464.2,1993,2508.5,2004.8,2547,2018.2],\n    [1,2630.7,2047.3,2726.3,2092.8,2765.6,2112.1]],\n   0,[0,"#ff0000"]],\n  [0,[0,[0,2447.1,2059.9],[1,2546.1,2077.9,2707.3,2107.2,2763.7,2117.5]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,1424.2,3007.17],[1,1507.8,3007.17,1632.8,3007.17,1723.9,3007.17]],\n   0,[0,"#ff0000"]],\n  [0,[0,[0,245.29,2430.2],[1,354.95,2430.2,538.82,2430.2,648.55,2430.2]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,247.54,2354.2],[1,358.01,2354.2,541.46,2354.2,650.24,2354.2]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,236.51,2279.2],[1,337.2,2279.2,509.15,2279.2,623.42,2279.2]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,1949.6,2662.2],[1,2053.5,2662.2,2206.4,2662.2,2295.2,2662.2]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,268.29,2203.2],[1,385.38,2203.2,564.77,2203.2,664.89,2203.2]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,230.75,2128.2],[1,342.47,2128.2,550.28,2128.2,662.46,2128.2]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,233.76,2052.2],[1,335.49,2052.2,513.15,2052.2,628.39,2052.2]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,1445,1877.6],[1,1523.6,1877.9,1629.1,1878.3,1711.3,1878.7]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,1889.5,2557.3],[1,1988.5,2529.4,2210.1,2467.1,2312.4,2438.3]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,236.51,1642.2],[1,352.41,1642.2,562.73,1642.2,670.83,1642.2]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,255.73,1567.2],[1,362.75,1567.2,530.98,1567.2,638.08,1567.2]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,1414.2,3199.47],[1,1508.8,3211.63,1665.2,3231.71,1759.8,3243.87]],\n   0,[0,"#ff0000"]],\n  [0,[0,[0,1968.7,2837.2],[1,2057.3,2837.2,2173.8,2837.2,2257.7,2837.2]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,1407,1720.7],[1,1525,1742.7,1751.2,1784.7,1819.8,1797.4]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,1495.1,1801.9],[1,1614.3,1801.6,1765,1801.3,1819.3,1801.2]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,1384.4,1956.1],[1,1493.6,1918.9,1748.3,1832.3,1820.6,1807.8]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,274.59,1491.2],[1,375.29,1491.2,518.6,1491.2,619.32,1491.2]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,257.73,1416.2],[1,364.26,1416.2,529.85,1416.2,636.36,1416.2]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,235.28,1340.2],[1,348.31,1340.2,552.84,1340.2,663.31,1340.2]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,245.29,1265.2],[1,365.99,1265.2,576.62,1265.2,679.3,1265.2]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,264.5,1189.2],[1,365.73,1189.2,515.8,1189.2,619.97,1189.2]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,190.65,1114.2],[1,281.11,1114.2,521.56,1114.2,651.97,1114.2]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,189.35,812.2],[1,278.29,812.2,518.28,812.2,649.81,812.2]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,187.23,818.5],[1,293.76,839.3,632.65,905.4,718.88,922.2]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,237.43,892.7],[1,374.68,901.8,642.46,919.7,718.45,924.8]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,249.8,957.2],[1,390.15,948.3,644.6,932.2,718.41,927.5]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,197.94,1029.9],[1,314.77,1007.5,635.17,946.1,718.81,930]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,1894.8,2252.2],[1,1988,2271,2177.5,2309.2,2285.7,2331]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,184.36,736.2],[1,278.73,736.2,574.9,736.2,691.32,736.2]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,262.45,649.2],[1,368.7,637.4,530.17,619.4,635.14,607.7]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,1939.6,631.2],[1,2043.6,631.2,2204.3,631.2,2295.9,631.2]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,209.68,521.2],[1,314.17,521.2,542.44,521.2,662.19,521.2]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,242.12,445.2],[1,356.9,445.2,556.84,445.2,664.79,445.2]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,256.06,232.2],[1,397.74,250.3,646.23,282.3,718.65,291.6]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,297.12,294.2],[1,441.28,294.2,652.33,294.2,718.43,294.2]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,256.73,356.9],[1,398.39,338.5,645.89,306.3,718.46,296.8]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,247.86,3317.35],[1,355.35,3329.13,531.6,3348.45,641.17,3360.45]],\n   0,[0,"#ff0000"]],\n  [0,[0,[0,1415.9,42.5],[1,1535.9,60.5,1752.5,93,1819.6,103.1]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,1479.3,106.2],[1,1600.5,106.2,1762.2,106.2,1819.1,106.2]],0,\n   [0,"#ff0000"]],\n  [0,[0,[0,1418.7,168.6],[1,1539.1,150.8,1752.6,119.1,1819.4,109.2]],0,\n   [0,"#ff0000"]],\n  [1,\n   [0,[0,1733.6,3257.52],[0,1733.49,3254.02],[0,1743.59,3257.2],\n    [0,1733.71,3261.02]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,[0,[0,265.56,3303.7],[1,572.42,3294.04,1431.9,3267.01,1733.6,3257.52]],\n   0,[0,"#0000ff"]],\n  [1,\n   [0,[0,1769.4,3270.6],[0,1768.63,3267.19],[0,1779.16,3268.4],\n    [0,1770.17,3274.01]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,\n   [0,[0,858.61,3367.91],[1,1008,3362.76,1271.3,3350.18,1495,3321.17],\n    [1,1590.7,3308.76,1699.9,3286.1,1769.4,3270.6]],\n   0,[0,"#0000ff"]],\n  [1,\n   [0,[0,1193.9,114.9],[0,1193.66,111.408],[0,1203.88,114.222],\n    [0,1194.14,118.392]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,[0,[0,761.24,141.8],[1,830.72,137.5,1047.8,124,1193.9,114.9]],0,\n   [0,"#0000ff"]],\n  [1,\n   [0,[0,1214.8,173.6],[0,1215,170.106],[0,1224.78,174.182],\n    [0,1214.6,177.094]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,[0,[0,761.24,144.6],[1,834.12,149.2,1069.4,164.3,1214.8,173.6]],0,\n   [0,"#0000ff"]],\n  [1,[0,[0,706.75,143.2],[0,706.75,139.7],[0,716.75,143.2],[0,706.75,146.7]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,[0,[0,234.06,143.2],[1,364.02,143.2,617.28,143.2,706.75,143.2]],0,\n   [0,"#0000ff"]],\n  [1,\n   [0,[0,1730.5,633.1],[0,1730.43,629.601],[0,1740.5,632.904],\n    [0,1730.57,636.599]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,[0,[0,297.21,658.6],[1,626.54,652.8,1435.9,638.4,1730.5,633.1]],0,\n   [0,"#0000ff"]],\n  [1,\n   [0,[0,1731.6,627.7],[0,1731.7,624.202],[0,1741.6,627.997],\n    [0,1731.5,631.198]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,[0,[0,870.44,600.4],[1,1090.2,607.3,1528.2,621.3,1731.6,627.7]],0,\n   [0,"#0000ff"]],\n  [1,\n   [0,[0,1232.6,1865.6],[0,1233.01,1862.12],[0,1242.53,1866.78],\n    [0,1232.19,1869.08]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,[0,[0,251.48,1754.1],[1,471.39,1779.1,1008.1,1840.1,1232.6,1865.6]],0,\n   [0,"#0000ff"]],\n  [1,\n   [0,[0,1215.1,1710.8],[0,1215,1707.3],[0,1225.1,1710.51],[0,1215.2,1714.3]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,[0,[0,274.26,1739.5],[1,500.42,1732.6,989.15,1717.7,1215.1,1710.8]],0,\n   [0,"#0000ff"]],\n  [1,\n   [0,[0,1165.7,1805.9],[0,1165.63,1802.4],[0,1175.7,1805.7],\n    [0,1165.77,1809.4]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,[0,[0,299.27,1825],[1,518.19,1820.2,933.33,1811,1165.7,1805.9]],0,\n   [0,"#0000ff"]],\n  [1,\n   [0,[0,1216,1872.3],[0,1216.14,1868.8],[0,1225.99,1872.69],\n    [0,1215.86,1875.8]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,[0,[0,294,1834],[1,528.11,1843.7,996.91,1863.2,1216,1872.3]],0,\n   [0,"#0000ff"]],\n  [1,\n   [0,[0,1163.8,1970.7],[0,1163.87,1967.2],[0,1173.8,1970.9],\n    [0,1163.73,1974.2]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,[0,[0,300.75,1958.3],[1,519.45,1961.4,931.55,1967.4,1163.8,1970.7]],0,\n   [0,"#0000ff"]],\n  [1,\n   [0,[0,1220.8,1884.8],[0,1220.56,1881.31],[0,1230.78,1884.12],\n    [0,1221.04,1888.29]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,[0,[0,283.7,1947.6],[1,515.75,1932,1000.55,1899.5,1220.8,1884.8]],0,\n   [0,"#0000ff"]],\n  [1,\n   [0,[0,1723.3,2666.6],[0,1723.16,2663.1],[0,1733.29,2666.2],\n    [0,1723.44,2670.1]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,[0,[0,809.13,2701.5],[1,993.71,2694.5,1494.5,2675.4,1723.3,2666.6]],0,\n   [0,"#0000ff"]],\n  [1,\n   [0,[0,1732.3,2824.2],[0,1732.71,2820.72],[0,1742.23,2825.37],\n    [0,1731.89,2827.68]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,[0,[0,802.95,2711.9],[1,984.66,2733.8,1505.4,2796.8,1732.3,2824.2]],0,\n   [0,"#0000ff"]],\n  [1,\n   [0,[0,1701.2,2837.2],[0,1701.2,2833.7],[0,1711.2,2837.2],\n    [0,1701.2,2840.7]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,[0,[0,829.57,2837.2],[1,1021.9,2837.2,1472.3,2837.2,1701.2,2837.2]],0,\n   [0,"#0000ff"]],\n  [1,\n   [0,[0,1747.4,2992.88],[0,1747.93,2989.42],[0,1757.28,2994.4],\n    [0,1746.87,2996.34]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,[0,[0,810.81,2848.3],[1,1003.63,2878,1532.6,2959.7,1747.4,2992.88]],0,\n   [0,"#0000ff"]],\n  [1,\n   [0,[0,1751.1,2676.3],[0,1750.54,2672.84],[0,1760.97,2674.7],\n    [0,1751.66,2679.76]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,[0,[0,809.97,2825.9],[1,1003.19,2795.2,1538.4,2710.1,1751.1,2676.3]],0,\n   [0,"#0000ff"]],\n  [1,\n   [0,[0,1752,2572.3],[0,1751.96,2568.8],[0,1762,2572.2],[0,1752.04,2575.8]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,[0,[0,838.16,2583.9],[1,1051.2,2581.2,1549.4,2574.9,1752,2572.3]],0,\n   [0,"#0000ff"]],\n  [1,\n   [0,[0,1728.7,2654.4],[0,1728.94,2650.91],[0,1738.68,2655.08],\n    [0,1728.46,2657.89]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,[0,[0,831.45,2591.6],[1,1033,2605.7,1511.2,2639.2,1728.7,2654.4]],0,\n   [0,"#0000ff"]],\n  [1,\n   [0,[0,2261.7,2428.4],[0,2261.53,2424.9],[0,2271.69,2427.91],\n    [0,2261.87,2431.9]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,[0,[0,823.33,2500.9],[1,1097.2,2487.1,1961.2,2443.6,2261.7,2428.4]],0,\n   [0,"#0000ff"]],\n  [1,\n   [0,[0,1747.7,2648.7],[0,1748.21,2645.24],[0,1757.59,2650.17],\n    [0,1747.19,2652.16]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,\n   [0,[0,810.94,2515.3],[1,945.34,2534.2,1243.7,2576.2,1495,2612.2],\n    [1,1580.7,2624.4,1678.2,2638.6,1747.7,2648.7]],\n   0,[0,"#0000ff"]],\n  [1,\n   [0,[0,1751.6,2853.2],[0,1750.97,2849.76],[0,1761.44,2851.41],\n    [0,1752.23,2856.64]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,[0,[0,792.48,3027.46],[1,968.7,2995.45,1532.4,2893.1,1751.6,2853.2]],0,\n   [0,"#0000ff"]],\n  [1,\n   [0,[0,1778.9,3235.95],[0,1779.88,3232.59],[0,1788.5,3238.75],\n    [0,1777.92,3239.31]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,\n   [0,[0,796.74,3044.78],[1,923.72,3061.92,1236.5,3106.48,1495,3162.17],\n    [1,1595.4,3183.8,1710.2,3215.94,1778.9,3235.95]],\n   0,[0,"#0000ff"]],\n  [1,\n   [0,[0,1733.9,3250.47],[0,1734.04,3246.97],[0,1743.89,3250.86],\n    [0,1733.76,3253.97]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,\n   [0,[0,794.69,3168.66],[1,877.15,3180.92,1036.6,3203.51,1173,3216.17],\n    [1,1370.7,3234.53,1602.2,3245.33,1733.9,3250.47]],\n   0,[0,"#0000ff"]],\n  [1,\n   [0,[0,1743.2,3020.62],[0,1742.72,3017.15],[0,1753.11,3019.25],\n    [0,1743.68,3024.09]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,[0,[0,795.88,3152.27],[1,973.57,3127.58,1519.8,3051.67,1743.2,3020.62]],\n   0,[0,"#0000ff"]],\n  [1,\n   [0,[0,2295.7,2406.6],[0,2296.5,2403.19],[0,2305.44,2408.88],\n    [0,2294.9,2410.01]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,\n   [0,[0,1391.1,2191.1],[1,1465,2209,1597.5,2241.1,1711,2268.2],\n    [1,1923.8,2319,2175.7,2378.4,2295.7,2406.6]],\n   0,[0,"#0000ff"]],\n  [1,\n   [0,[0,2285.7,2328],[0,2286.57,2324.61],[0,2295.38,2330.49],\n    [0,2284.83,2331.39]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,\n   [0,[0,1421.5,2173.6],[1,1545,2170.5,1777,2171.9,1969,2214.2],\n    [1,2069.8,2236.3,2087,2267,2185,2299.2],\n    [1,2217.6,2309.9,2254.1,2319.9,2285.7,2328]],\n   0,[0,"#0000ff"]],\n  [1,\n   [0,[0,2256.4,2059.2],[0,2255.96,2055.73],[0,2266.32,2057.94],\n    [0,2256.84,2062.67]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,[0,[0,1409.5,2167.5],[1,1589.7,2144.5,2045.9,2086.1,2256.4,2059.2]],0,\n   [0,"#0000ff"]],\n  [1,\n   [0,[0,2260.5,2418.7],[0,2260.64,2415.2],[0,2270.49,2419.1],\n    [0,2260.36,2422.2]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,[0,[0,1422.9,2383],[1,1612.7,2391.1,2056.8,2410,2260.5,2418.7]],0,\n   [0,"#0000ff"]],\n  [1,\n   [0,[0,2182.7,2352.9],[0,2182.56,2349.4],[0,2192.69,2352.5],\n    [0,2182.84,2356.4]],\n   [0,"#0000ff"],[0,"#0000ff"]],\n  [0,[0,[0,1423.8,2376.4],[1,1592.5,2371.2,1959.7,2359.8,2182.7,2352.9]],0,\n   [0,"#0000ff"]]]]\n');var
a9=[n,e("Failure"),-3],bM=[n,e("Invalid_argument"),-4],K=[n,e("Not_found"),-7],d5=[n,e("Match_failure"),-8],d4=[n,e("Stack_overflow"),-9],r=[n,e("Assert_failure"),-11],d6=[n,e("Undefined_recursive_module"),-12],bV=e('File "%s", line %d, characters %d-%d: %s'),c7=[0,0,0,0,0],dg=e("scene.json"),aU=[0,e(fx),e(ff),e(ft),e(fv),e(fc),e(fo),e(fB),e(fl)],eL=[0,e("_value"),e("_lower"),e("_upper"),e("_step_incr"),e("_page_incr"),e("_page_size")],eM=[0,e(fl),e(fB),e(ft),e(fx),e(ff),e(fo),e(fv),e(fc)];Y(11,d6);Y(8,d4);Y(7,d5);Y(6,K);Y(5,[n,e("Division_by_zero"),-6]);Y(4,[n,e("End_of_file"),-5]);Y(3,bM);Y(2,a9);Y(1,[n,e("Sys_error"),-2]);dh(e("Pervasives.array_bound_error"),[0,bM,e(dB)]);var
gY=[n,e("Out_of_memory"),-1],f1=e(fk),f0=e(az),fY=e("true"),fZ=e("false"),fX=e("Pervasives.Exit"),f2=e("Pervasives.do_at_exit"),f4=e("Array.blit"),f7=e("Array.Bottom"),f_=e("\\b"),f$=e("\\t"),ga=e("\\n"),gb=e("\\r"),f9=e("\\\\"),f8=e("\\'"),ge=e(g),gd=e("String.blit"),gc=e("String.sub"),gf=e("Sys.Break"),gk=e("Map.remove_min_elt"),gl=[0,0,0,0],gm=[0,e("map.ml"),270,10],gn=[0,0,0],gg=e(bG),gh=e(bG),gi=e(bG),gj=e(bG),go=e("Queue.Empty"),gq=e("CamlinternalLazy.Undefined"),gr=e("Buffer.add: cannot grow buffer"),gH=e(g),gI=e(g),gL=e(fk),gM=e(fi),gN=e(fi),gJ=e(bx),gK=e(bx),gG=e(fm),gE=e("neg_infinity"),gF=e("infinity"),gD=e(az),gC=e("printf: bad positional specification (0)."),gB=e("%_"),gA=[0,e("printf.ml"),143,8],gy=e(bx),gz=e("Printf: premature end of format string '"),gu=e(bx),gv=e(" in format string '"),gw=e(", at char number "),gx=e("Printf: bad conversion %"),gs=e("Sformat.index_of_int: negative argument "),gS=e(g),gT=e(", %s%s"),g_=[1,1],g$=e("%s\n"),ha=e("(Program not linked with -g, cannot print stack backtrace)\n"),g4=e("Raised at"),g7=e("Re-raised at"),g8=e("Raised by primitive operation at"),g9=e("Called from"),g5=e('%s file "%s", line %d, characters %d-%d'),g6=e("%s unknown location"),gZ=e("Out of memory"),g0=e("Stack overflow"),g1=e("Pattern matching failed"),g2=e("Assertion failed"),g3=e("Undefined recursive module"),gU=e("(%s%s)"),gV=e(g),gW=e(g),gX=e("(%s)"),gR=e(fe),gP=e("%S"),gQ=e("_"),hg=e(g),hn=e("Lwt_sequence.Empty"),hz=[0,e(aA),670,20],hA=[0,e(aA),673,8],hx=[0,e(aA),648,20],hy=[0,e(aA),651,8],hu=[0,e(aA),498,8],ht=[0,e(aA),487,9],hs=e("Lwt.wakeup_result"),hp=e("Fatal error: exception "),ho=e("Lwt.Canceled"),hv=[0,0],hG=e("Js.Error"),hH=e(fg),hV=e("canvas"),hS=e("p"),hR=e("div"),hI=e("mouseup"),hK=e("mousemove"),hM=e("mousewheel"),hO=e("DOMMouseScroll"),hT=e("Dom_html.Canvas_not_available"),h0=e("browser can't read file: unimplemented"),hZ=[0,e("file.ml"),131,15],hX=e("can't retrieve file name: not implemented"),h3=e("Exception during Lwt.async: "),h5=e("[\\][()\\\\|+*.?{}^$]"),ih=[0,e(g),0],ii=e(g),iw=e(g),iF=e(g),ix=e(by),iy=e(bu),iE=e(g),iz=e(ac),iA=e(ac),iD=e(e5),iB=e(g),iC=e("http://"),iG=e(g),iP=e(g),iH=e(by),iI=e(bu),iO=e(g),iJ=e(ac),iK=e(ac),iN=e(e5),iL=e(g),iM=e("https://"),iQ=e(g),iW=e(g),iR=e(by),iS=e(bu),iV=e(g),iT=e(ac),iU=e("file://"),iv=e(g),iu=e(g),it=e(g),is=e(g),ir=e(g),iq=e(g),ij=e(dw),ik=e(fC),ia=e("file"),ib=e("file:"),ic=e("http"),id=e("http:"),ie=e("https"),ig=e("https:"),h9=e("%2B"),h7=e("Url.Local_exn"),h8=e(aZ),h_=e("Url.Not_an_http_protocol"),il=e("^([Hh][Tt][Tt][Pp][Ss]?)://([0-9a-zA-Z.-]+|\\[[0-9a-zA-Z.-]+\\]|\\[[0-9A-Fa-f:.]+\\])?(:([0-9]+))?/([^\\?#]*)(\\?([^#]*))?(#(.*))?$"),io=e("^([Ff][Ii][Ll][Ee])://([^\\?#]*)(\\?([^#]*))?(#(.*))?$"),jb=e(bF),jd=e("multipart/form-data; boundary="),je=e(bF),jf=[0,e(bF),[0,e("application/x-www-form-urlencoded")],bE],jg=[0,e(bF),0,bE],jh=e("GET"),jc=e(bu),i8=e(dw),i9=e(dw),i_=e(fC),i4=e('"; filename="'),i5=e(fs),i2=e(bB),i3=e(e$),i6=e('"\r\n\r\n'),i7=e(fs),i0=e("--\r\n"),i1=e(e$),iZ=e("js_of_ocaml-------------------"),iY=[0,e("xmlHttpRequest.ml"),85,2],i$=e("XmlHttpRequest.Wrong_headers"),jk=[0,0,0],jn=[0,e(aX),260,8],jo=[0,e(aX),263,8],jl=[0,e(aX),269,6],jm=[0,e(aX),272,6],jj=[0,e(aX),e_,63],jL=e("%dpx"),jH=[0,0],jI=[0,0],jJ=[0,1],jK=[0,20],jq=[0,e("viewer_js.ml"),90,26];function
aD(a){throw[0,a9,a]}function
J(a){throw[0,bM,a]}D([n,fX,0]);function
ap(a,b){return kj(a,b)?a:b}function
aq(a,b){return j1(a,b)?a:b}function
j(a,b){var
c=a.getLen(),e=b.getLen(),d=Z(c+e|0);aa(a,0,d,0,c);aa(b,0,d,c,e);return d}function
ar(a){return e(g+a)}function
dI(a,b){if(a){var
c=a[1];return[0,c,dI(a[2],b)]}return b}kl(0);eX(1);var
aE=eX(2);function
dJ(a,b){return fP(a,b,0,b.getLen())}function
dK(a){return dJ(aE,a)}function
bN(a){var
b=kn(0);for(;;){if(b){var
c=b[2],d=b[1];try{eY(d)}catch(f){}var
b=c;continue}return 0}}dh(f2,bN);function
f3(a,b){return eZ(a,b)}function
dL(a){return eY(a)}function
dO(a,b){var
d=b.length-1-1|0,e=0;if(!(d<0)){var
c=e;for(;;){i(a,c,b[c+1]);var
f=c+1|0;if(d!==c){var
c=f;continue}break}}return 0}D([n,f7,0]);function
a_(a){var
b=a,c=0;for(;;){if(b){var
d=[0,b[1],c],b=b[2],c=d;continue}return c}}function
as(a,b){if(b){var
c=b[2],d=h(a,b[1]);return[0,d,as(a,c)]}return 0}function
aG(a,b){var
c=b;for(;;){if(c){var
d=c[2];h(a,c[1]);var
c=d;continue}return 0}}function
aH(a,b){var
c=Z(a);jV(c,0,a,b);return c}function
ad(a,b,c){if(0<=b)if(0<=c)if(!((a.getLen()-c|0)<b)){var
d=Z(c);aa(a,b,d,0,c);return d}return J(gc)}function
bP(a,b,c,d,e){if(0<=e)if(0<=b)if(!((a.getLen()-e|0)<b))if(0<=d)if(!((c.getLen()-e|0)<d))return aa(a,b,c,d,e);return J(gd)}function
aI(d,b){if(b){var
a=b[1],g=[0,0],f=[0,0],h=b[2];aG(function(a){g[1]++;f[1]=f[1]+a.getLen()|0;return 0},b);var
e=Z(f[1]+di(d.getLen(),g[1]-1|0)|0);aa(a,0,e,0,a.getLen());var
c=[0,a.getLen()];aG(function(a){aa(d,0,e,c[1],d.getLen());c[1]=c[1]+d.getLen()|0;aa(a,0,e,c[1],a.getLen());c[1]=c[1]+a.getLen()|0;return 0},h);return e}return ge}var
at=kG(0),aJ=di(at/8|0,(1<<(at-10|0))-1|0)-1|0;D([n,gf,0]);function
a$(k){function
j(a){return a?a[5]:0}function
e(a,b,c,d){var
e=j(a),f=j(d),g=f<=e?e+1|0:f+1|0;return[0,a,b,c,d,g]}function
q(a,b){return[0,0,a,b,0,1]}function
f(a,b,c,d){var
h=a?a[5]:0,i=d?d[5]:0;if((i+2|0)<h){if(a){var
f=a[4],m=a[3],n=a[2],k=a[1],q=j(f);if(q<=j(k))return e(k,n,m,e(f,b,c,d));if(f){var
r=f[3],s=f[2],t=f[1],u=e(f[4],b,c,d);return e(e(k,n,m,t),s,r,u)}return J(gg)}return J(gh)}if((h+2|0)<i){if(d){var
l=d[4],o=d[3],p=d[2],g=d[1],v=j(g);if(v<=j(l))return e(e(a,b,c,g),p,o,l);if(g){var
w=g[3],x=g[2],y=g[1],z=e(g[4],p,o,l);return e(e(a,b,c,y),x,w,z)}return J(gi)}return J(gj)}var
A=i<=h?h+1|0:i+1|0;return[0,a,b,c,d,A]}var
a=0;function
G(a){return a?0:1}function
s(a,b,c){if(c){var
d=c[4],h=c[3],e=c[2],g=c[1],l=c[5],j=i(k[1],a,e);return 0===j?[0,g,a,b,d,l]:0<=j?f(g,e,h,s(a,b,d)):f(s(a,b,g),e,h,d)}return[0,0,a,b,0,1]}function
H(a,b){var
c=b;for(;;){if(c){var
e=c[4],f=c[3],g=c[1],d=i(k[1],a,c[2]);if(0===d)return f;var
h=0<=d?e:g,c=h;continue}throw K}}function
I(a,b){var
c=b;for(;;){if(c){var
f=c[4],g=c[1],d=i(k[1],a,c[2]),e=0===d?1:0;if(e)return e;var
h=0<=d?f:g,c=h;continue}return 0}}function
n(a){var
b=a;for(;;){if(b){var
c=b[1];if(c){var
b=c;continue}return[0,b[2],b[3]]}throw K}}function
L(a){var
b=a;for(;;){if(b){var
c=b[4],d=b[3],e=b[2];if(c){var
b=c;continue}return[0,e,d]}throw K}}function
t(a){if(a){var
b=a[1];if(b){var
c=a[4],d=a[3],e=a[2];return f(t(b),e,d,c)}return a[4]}return J(gk)}function
u(a,b){if(b){var
c=b[4],h=b[3],e=b[2],d=b[1],j=i(k[1],a,e);if(0===j){if(d){if(c){var
g=n(c),l=g[2],m=g[1];return f(d,m,l,t(c))}return d}return c}return 0<=j?f(d,e,h,u(a,c)):f(u(a,d),e,h,c)}return 0}function
y(a,b){var
c=b;for(;;){if(c){var
d=c[4],e=c[3],f=c[2];y(a,c[1]);i(a,f,e);var
c=d;continue}return 0}}function
c(a,b){if(b){var
d=b[5],e=b[4],f=b[3],g=b[2],i=c(a,b[1]),j=h(a,f);return[0,i,g,j,c(a,e),d]}return 0}function
v(a,b){if(b){var
c=b[2],d=b[5],e=b[4],f=b[3],g=v(a,b[1]),h=i(a,c,f);return[0,g,c,h,v(a,e),d]}return 0}function
z(a,b,c){var
d=b,e=c;for(;;){if(d){var
f=d[4],g=d[3],h=d[2],i=o(a,h,g,z(a,d[1],e)),d=f,e=i;continue}return e}}function
A(a,b){var
c=b;for(;;){if(c){var
g=c[4],h=c[1],d=i(a,c[2],c[3]);if(d){var
e=A(a,h);if(e){var
c=g;continue}var
f=e}else
var
f=d;return f}return 1}}function
B(a,b){var
c=b;for(;;){if(c){var
g=c[4],h=c[1],d=i(a,c[2],c[3]);if(d)var
e=d;else{var
f=B(a,h);if(!f){var
c=g;continue}var
e=f}return e}return 0}}function
C(a,b,c){if(c){var
d=c[4],e=c[3],g=c[2];return f(C(a,b,c[1]),g,e,d)}return q(a,b)}function
D(a,b,c){if(c){var
d=c[3],e=c[2],g=c[1];return f(g,e,d,D(a,b,c[4]))}return q(a,b)}function
g(a,b,c,d){if(a){if(d){var
h=d[5],i=a[5],j=d[4],k=d[3],l=d[2],m=d[1],n=a[4],o=a[3],p=a[2],q=a[1];return(h+2|0)<i?f(q,p,o,g(n,b,c,d)):(i+2|0)<h?f(g(a,b,c,m),l,k,j):e(a,b,c,d)}return D(b,c,a)}return C(b,c,d)}function
p(a,b){if(a){if(b){var
c=n(b),d=c[2],e=c[1];return g(a,e,d,t(b))}return a}return b}function
E(a,b,c,d){return c?g(a,b,c[1],d):p(a,d)}function
l(a,b){if(b){var
c=b[4],d=b[3],e=b[2],f=b[1],m=i(k[1],a,e);if(0===m)return[0,f,[0,d],c];if(0<=m){var
h=l(a,c),n=h[3],o=h[2];return[0,g(f,e,d,h[1]),o,n]}var
j=l(a,f),p=j[2],q=j[1];return[0,q,p,g(j[3],e,d,c)]}return gl}function
m(a,b,c){if(b){var
d=b[2],h=b[5],i=b[4],k=b[3],n=b[1];if(j(c)<=h){var
e=l(d,c),p=e[2],q=e[1],s=m(a,i,e[3]),t=o(a,d,[0,k],p);return E(m(a,n,q),d,t,s)}}else
if(!c)return 0;if(c){var
f=c[2],u=c[4],v=c[3],w=c[1],g=l(f,b),x=g[2],y=g[1],z=m(a,g[3],u),A=o(a,f,x,[0,v]);return E(m(a,y,w),f,A,z)}throw[0,r,gm]}function
w(a,b){if(b){var
c=b[3],d=b[2],h=b[4],e=w(a,b[1]),j=i(a,d,c),f=w(a,h);return j?g(e,d,c,f):p(e,f)}return 0}function
x(a,b){if(b){var
c=b[3],d=b[2],m=b[4],e=x(a,b[1]),f=e[2],h=e[1],n=i(a,d,c),j=x(a,m),k=j[2],l=j[1];if(n){var
o=p(f,k);return[0,g(h,d,c,l),o]}var
q=g(f,d,c,k);return[0,p(h,l),q]}return gn}function
d(a,b){var
c=a,d=b;for(;;){if(c){var
e=[0,c[2],c[3],c[4],d],c=c[1],d=e;continue}return d}}function
M(a,b,c){var
r=d(c,0),f=d(b,0),e=r;for(;;){if(f){if(e){var
j=e[4],l=e[3],m=e[2],n=f[4],o=f[3],p=f[2],g=i(k[1],f[1],e[1]);if(0===g){var
h=i(a,p,m);if(0===h){var
q=d(l,j),f=d(o,n),e=q;continue}return h}return g}return 1}return e?-1:0}}function
N(a,b,c){var
s=d(c,0),f=d(b,0),e=s;for(;;){if(f){if(e){var
l=e[4],m=e[3],n=e[2],o=f[4],p=f[3],q=f[2],g=0===i(k[1],f[1],e[1])?1:0;if(g){var
h=i(a,q,n);if(h){var
r=d(m,l),f=d(p,o),e=r;continue}var
j=h}else
var
j=g;return j}return 0}return e?0:1}}function
b(a){if(a){var
c=a[1],d=b(a[4]);return(b(c)+1|0)+d|0}return 0}function
F(a,b){var
d=a,c=b;for(;;){if(c){var
e=c[3],f=c[2],g=c[1],d=[0,[0,f,e],F(d,c[4])],c=g;continue}return d}}return[0,a,G,I,s,q,u,m,M,N,y,z,A,B,w,x,b,function(a){return F(0,a)},n,L,n,l,H,c,v]}var
gp=D([n,go,0]);D([n,gq,0]);function
bQ(a){var
b=1<=a?a:1,c=aJ<b?aJ:b,d=Z(c);return[0,d,0,c,d]}function
bR(a){return ad(a[1],0,a[2])}function
dP(a,b){var
c=[0,a[3]];for(;;){if(c[1]<(a[2]+b|0)){c[1]=2*c[1]|0;continue}if(aJ<c[1])if((a[2]+b|0)<=aJ)c[1]=aJ;else
aD(gr);var
d=Z(c[1]);bP(a[1],0,d,0,a[2]);a[1]=d;a[3]=c[1];return 0}}function
aK(a,b){var
c=a[2];if(a[3]<=c)dP(a,1);a[1].safeSet(c,b);a[2]=c+1|0;return 0}function
bS(a,b){var
c=b.getLen(),d=a[2]+c|0;if(a[3]<d)dP(a,c);aa(b,0,a[1],a[2],c);a[2]=d;return 0}function
bT(a){return 0<=a?a:aD(j(gs,ar(a)))}function
dQ(a,b){return bT(a+b|0)}var
gt=1;function
dR(a){return dQ(gt,a)}function
dS(a){return ad(a,0,a.getLen())}function
dT(a,b,c){var
d=j(gv,j(a,gu)),e=j(gw,j(ar(b),d));return J(j(gx,j(aH(1,c),e)))}function
aL(a,b,c){return dT(dS(a),b,c)}function
ba(a){return J(j(gz,j(dS(a),gy)))}function
ae(e,b,c,d){function
h(a){if((e.safeGet(a)+ay|0)<0||9<(e.safeGet(a)+ay|0))return a;var
b=a+1|0;for(;;){var
c=e.safeGet(b);if(48<=c){if(!(58<=c)){var
b=b+1|0;continue}}else
if(36===c)return b+1|0;return a}}var
i=h(b+1|0),f=bQ((c-i|0)+10|0);aK(f,37);var
a=i,g=a_(d);for(;;){if(a<=c){var
j=e.safeGet(a);if(42===j){if(g){var
k=g[2];bS(f,ar(g[1]));var
a=h(a+1|0),g=k;continue}throw[0,r,gA]}aK(f,j);var
a=a+1|0;continue}return bR(f)}}function
dU(a,b,c,d,e){var
f=ae(b,c,d,e);if(78!==a)if(a3!==a)return f;f.safeSet(f.getLen()-1|0,du);return f}function
dV(a){return function(d,b){var
k=d.getLen();function
l(a,b){var
m=40===a?41:dt,c=b;for(;;){if(k<=c)return ba(d);if(37===d.safeGet(c)){var
e=c+1|0;if(k<=e)return ba(d);var
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
j=0===g?0:1;if(j)return f===m?e+1|0:aL(d,b,f);var
c=l(f,e+1|0)+1|0;continue}var
c=c+1|0;continue}}return l(a,b)}}function
dW(j,b,c){var
m=j.getLen()-1|0;function
s(a){var
l=a;a:for(;;){if(l<m){if(37===j.safeGet(l)){var
f=0,h=l+1|0;for(;;){if(m<h)var
e=ba(j);else{var
n=j.safeGet(h);if(58<=n){if(95===n){var
f=1,h=h+1|0;continue}}else
if(32<=n)switch(n+fp|0){case
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
h=o(b,f,h,am);continue;default:var
h=h+1|0;continue}var
d=h;b:for(;;){if(m<d)var
e=ba(j);else{var
k=j.safeGet(d);if(126<=k)var
g=0;else
switch(k){case
78:case
88:case
a1:case
am:case
dy:case
du:case
dv:var
e=o(b,f,d,am),g=1;break;case
69:case
70:case
71:case
fw:case
dA:case
dz:var
e=o(b,f,d,dA),g=1;break;case
33:case
37:case
44:case
64:var
e=d+1|0,g=1;break;case
83:case
91:case
a4:var
e=o(b,f,d,a4),g=1;break;case
97:case
bz:case
dq:var
e=o(b,f,d,k),g=1;break;case
76:case
fD:case
a3:var
t=d+1|0;if(m<t)var
e=o(b,f,d,am),g=1;else{var
q=j.safeGet(t)+fz|0;if(q<0||32<q)var
r=1;else
switch(q){case
0:case
12:case
17:case
23:case
29:case
32:var
e=i(c,o(b,f,d,k),am),g=1,r=0;break;default:var
r=1}if(r)var
e=o(b,f,d,am),g=1}break;case
67:case
99:var
e=o(b,f,d,99),g=1;break;case
66:case
98:var
e=o(b,f,d,66),g=1;break;case
41:case
dt:var
e=o(b,f,d,k),g=1;break;case
40:var
e=s(o(b,f,d,k)),g=1;break;case
dx:var
u=o(b,f,d,k),v=i(dV(k),j,u),p=u;for(;;){if(p<(v-2|0)){var
p=i(c,p,j.safeGet(p));continue}var
d=v-1|0;continue b}default:var
g=0}if(!g)var
e=aL(j,d,k)}break}}var
l=e;continue a}}var
l=l+1|0;continue}return l}}s(0);return 0}function
dX(a){var
d=[0,0,0,0];function
b(a,b,c){var
f=41!==c?1:0,g=f?dt!==c?1:0:f;if(g){var
e=97===c?2:1;if(bz===c)d[3]=d[3]+1|0;if(a)d[2]=d[2]+e|0;else
d[1]=d[1]+e|0}return b+1|0}dW(a,b,function(a,b){return a+1|0});return d[1]}function
dY(a,b,c){var
g=a.safeGet(c);if((g+ay|0)<0||9<(g+ay|0))return i(b,0,c);var
e=g+ay|0,d=c+1|0;for(;;){var
f=a.safeGet(d);if(48<=f){if(!(58<=f)){var
e=(10*e|0)+(f+ay|0)|0,d=d+1|0;continue}}else
if(36===f)return 0===e?aD(gC):i(b,[0,bT(e-1|0)],d+1|0);return i(b,0,c)}}function
B(a,b){return a?b:dR(b)}function
dZ(a,b){return a?a[1]:b}function
d0(aE,b,c,d,e,f,g){var
z=h(b,g);function
ac(a){return i(d,z,a)}function
aF(a,b,k,aG){var
l=k.getLen();function
A(o,b){var
n=b;for(;;){if(l<=n)return h(a,z);var
d=k.safeGet(n);if(37===d){var
m=function(a,b){return H(aG,dZ(a,b))},ar=function(g,f,c,d){var
a=d;for(;;){var
Y=k.safeGet(a)+fp|0;if(!(Y<0||25<Y))switch(Y){case
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
10:return dY(k,function(a,b){var
d=[0,m(a,f),c];return ar(g,B(a,f),d,b)},a+1|0);default:var
a=a+1|0;continue}var
o=k.safeGet(a);if(!(124<=o))switch(o){case
78:case
88:case
a1:case
am:case
dy:case
du:case
dv:var
a5=m(g,f),a6=bq(dU(o,k,n,a,c),a5);return p(B(g,f),a6,a+1|0);case
69:case
71:case
fw:case
dA:case
dz:var
aV=m(g,f),aW=dj(ae(k,n,a,c),aV);return p(B(g,f),aW,a+1|0);case
76:case
fD:case
a3:var
aa=k.safeGet(a+1|0)+fz|0;if(!(aa<0||32<aa))switch(aa){case
0:case
12:case
17:case
23:case
29:case
32:var
Q=a+1|0,ab=o-108|0;if(ab<0||2<ab)var
af=0;else{switch(ab){case
1:var
af=0,ag=0;break;case
2:var
a2=m(g,f),ax=bq(ae(k,n,Q,c),a2),ag=1;break;default:var
a0=m(g,f),ax=bq(ae(k,n,Q,c),a0),ag=1}if(ag)var
aw=ax,af=1}if(!af)var
aZ=m(g,f),aw=j3(ae(k,n,Q,c),aZ);return p(B(g,f),aw,Q+1|0)}var
aX=m(g,f),aY=bq(dU(a3,k,n,a,c),aX);return p(B(g,f),aY,a+1|0);case
37:case
64:return p(f,aH(1,o),a+1|0);case
83:case
a4:var
v=m(g,f);if(a4===o)var
w=v;else{var
b=[0,0],ak=v.getLen()-1|0,aI=0;if(!(ak<0)){var
J=aI;for(;;){var
u=v.safeGet(J),bb=14<=u?34===u?1:92===u?1:0:11<=u?13<=u?1:0:8<=u?1:0,aN=bb?2:dk(u)?1:4;b[1]=b[1]+aN|0;var
aO=J+1|0;if(ak!==J){var
J=aO;continue}break}}if(b[1]===v.getLen())var
az=v;else{var
l=Z(b[1]);b[1]=0;var
al=v.getLen()-1|0,aJ=0;if(!(al<0)){var
H=aJ;for(;;){var
t=v.safeGet(H),x=t-34|0;if(x<0||58<x)if(-20<=x)var
R=1;else{switch(x+34|0){case
8:l.safeSet(b[1],92);b[1]++;l.safeSet(b[1],98);var
G=1;break;case
9:l.safeSet(b[1],92);b[1]++;l.safeSet(b[1],dq);var
G=1;break;case
10:l.safeSet(b[1],92);b[1]++;l.safeSet(b[1],a3);var
G=1;break;case
13:l.safeSet(b[1],92);b[1]++;l.safeSet(b[1],bz);var
G=1;break;default:var
R=1,G=0}if(G)var
R=0}else
var
R=(x-1|0)<0||56<(x-1|0)?(l.safeSet(b[1],92),b[1]++,l.safeSet(b[1],t),0):1;if(R)if(dk(t))l.safeSet(b[1],t);else{l.safeSet(b[1],92);b[1]++;l.safeSet(b[1],48+(t/a1|0)|0);b[1]++;l.safeSet(b[1],48+((t/10|0)%10|0)|0);b[1]++;l.safeSet(b[1],48+(t%10|0)|0)}b[1]++;var
aM=H+1|0;if(al!==H){var
H=aM;continue}break}}var
az=l}var
w=j(gN,j(az,gM))}if(a===(n+1|0))var
ay=w;else{var
F=ae(k,n,a,c);try{var
S=0,r=1;for(;;){if(F.getLen()<=r)var
an=[0,0,S];else{var
T=F.safeGet(r);if(49<=T)if(58<=T)var
ah=0;else
var
an=[0,e0(ad(F,r,(F.getLen()-r|0)-1|0)),S],ah=1;else{if(45===T){var
S=1,r=r+1|0;continue}var
ah=0}if(!ah){var
r=r+1|0;continue}}var
V=an;break}}catch(f){f=I(f);if(f[1]!==a9)throw f;var
V=dT(F,0,a4)}var
K=V[1],y=w.getLen(),aP=V[2],L=0,aQ=32;if(K===y)if(0===L)var
W=w,ai=1;else
var
ai=0;else
var
ai=0;if(!ai)if(K<=y)var
W=ad(w,L,y);else{var
U=aH(K,aQ);if(aP)bP(w,L,U,0,y);else
bP(w,L,U,K-y|0,y);var
W=U}var
ay=W}return p(B(g,f),ay,a+1|0);case
67:case
99:var
q=m(g,f);if(99===o)var
au=aH(1,q);else{if(39===q)var
s=f8;else
if(92===q)var
s=f9;else{if(14<=q)var
C=0;else
switch(q){case
8:var
s=f_,C=1;break;case
9:var
s=f$,C=1;break;case
10:var
s=ga,C=1;break;case
13:var
s=gb,C=1;break;default:var
C=0}if(!C)if(dk(q)){var
aj=Z(1);aj.safeSet(0,q);var
s=aj}else{var
D=Z(4);D.safeSet(0,92);D.safeSet(1,48+(q/a1|0)|0);D.safeSet(2,48+((q/10|0)%10|0)|0);D.safeSet(3,48+(q%10|0)|0);var
s=D}}var
au=j(gK,j(s,gJ))}return p(B(g,f),au,a+1|0);case
66:case
98:var
aT=a+1|0,aU=m(g,f)?fY:fZ;return p(B(g,f),aU,aT);case
40:case
dx:var
P=m(g,f),as=i(dV(o),k,a+1|0);if(dx===o){var
M=bQ(P.getLen()),ao=function(a,b){aK(M,b);return a+1|0};dW(P,function(a,b,c){if(a)bS(M,gB);else
aK(M,37);return ao(b,c)},ao);var
aR=bR(M);return p(B(g,f),aR,as)}var
at=B(g,f),ba=dQ(dX(P),at);return aF(function(a){return A(ba,as)},at,P,aG);case
33:h(e,z);return A(f,a+1|0);case
41:return p(f,gH,a+1|0);case
44:return p(f,gI,a+1|0);case
70:var
_=m(g,f);if(0===c)var
av=gL;else{var
X=ae(k,n,a,c);if(70===o)X.safeSet(X.getLen()-1|0,dz);var
av=X}var
aq=jP(_);if(3===aq)var
$=_<0?gE:gF;else
if(4<=aq)var
$=gG;else{var
O=dj(av,_),N=0,aS=O.getLen();for(;;){if(aS<=N)var
ap=j(O,gD);else{var
E=O.safeGet(N)-46|0,bc=E<0||23<E?55===E?1:0:(E-1|0)<0||21<(E-1|0)?1:0;if(!bc){var
N=N+1|0;continue}var
ap=O}var
$=ap;break}}return p(B(g,f),$,a+1|0);case
91:return aL(k,a,o);case
97:var
aA=m(g,f),aB=dR(dZ(g,f)),aC=m(0,aB),a7=a+1|0,a8=B(g,aB);if(aE)ac(i(aA,0,aC));else
i(aA,z,aC);return A(a8,a7);case
bz:return aL(k,a,o);case
dq:var
aD=m(g,f),a_=a+1|0,a$=B(g,f);if(aE)ac(h(aD,0));else
h(aD,z);return A(a$,a_)}return aL(k,a,o)}},f=n+1|0,g=0;return dY(k,function(a,b){return ar(a,o,g,b)},f)}i(c,z,d);var
n=n+1|0;continue}}function
p(a,b,c){ac(b);return A(a,c)}return A(b,0)}var
o=bT(0);function
l(a,b){return aF(f,o,a,b)}var
m=dX(g);if(m<0||6<m){var
n=function(f,b){if(m<=f){var
h=M(m,0),i=function(a,b){return k(h,(m-a|0)-1|0,b)},c=0,a=b;for(;;){if(a){var
d=a[2],e=a[1];if(d){i(c,e);var
c=c+1|0,a=d;continue}i(c,e)}return l(g,h)}}return function(a){return n(f+1|0,[0,a,b])}};return n(0,0)}switch(m){case
1:return function(a){var
b=M(1,0);k(b,0,a);return l(g,b)};case
2:return function(a,b){var
c=M(2,0);k(c,0,a);k(c,1,b);return l(g,c)};case
3:return function(a,b,c){var
d=M(3,0);k(d,0,a);k(d,1,b);k(d,2,c);return l(g,d)};case
4:return function(a,b,c,d){var
e=M(4,0);k(e,0,a);k(e,1,b);k(e,2,c);k(e,3,d);return l(g,e)};case
5:return function(a,b,c,d,e){var
f=M(5,0);k(f,0,a);k(f,1,b);k(f,2,c);k(f,3,d);k(f,4,e);return l(g,f)};case
6:return function(a,b,c,d,e,f){var
h=M(6,0);k(h,0,a);k(h,1,b);k(h,2,c);k(h,3,d);k(h,4,e);k(h,5,f);return l(g,h)};default:return l(g,[0])}}function
d1(d){function
e(a){return 0}function
b(a){return d}var
c=0;return function(a){return d0(c,b,f3,dJ,dL,e,a)}}function
gO(a){return bQ(2*a.getLen()|0)}function
L(a){function
b(a){var
b=bR(a);a[2]=0;return b}return d0(1,gO,aK,bS,function(a){return 0},b,a)}var
bU=[0,0];function
bW(a,b){var
c=a[b+1];if(kt(c)){if(br(c)===252)return h(L(gP),c);if(br(c)===253){var
e=dj(f1,c),d=0,g=e.getLen();for(;;){if(g<=d)return j(e,f0);var
f=e.safeGet(d),i=48<=f?58<=f?0:1:45===f?1:0;if(i){var
d=d+1|0;continue}return e}}return gQ}return h(L(gR),c)}function
d2(a,b){if(a.length-1<=b)return gS;var
c=d2(a,b+1|0),d=bW(a,b);return i(L(gT),d,c)}function
d3(a){var
b=bU[1];for(;;){if(b){var
s=b[2],t=b[1];try{var
u=h(t,a),e=u}catch(f){var
e=0}if(e)return e[1];var
b=s;continue}if(a===gY)return gZ;if(a===d4)return g0;if(a[1]===d5){var
f=a[2],l=f[3],v=f[2],w=f[1];return bs(L(bV),w,v,l,l+5|0,g1)}if(a[1]===r){var
g=a[2],m=g[3],x=g[2],y=g[1];return bs(L(bV),y,x,m,m+6|0,g2)}if(a[1]===d6){var
k=a[2],n=k[3],z=k[2],A=k[1];return bs(L(bV),A,z,n,n+6|0,g3)}if(0===br(a)){var
d=a.length-1,B=a[0+1][0+1];if(d<0||2<d)var
o=d2(a,2),p=bW(a,1),c=i(L(gU),p,o);else
switch(d){case
1:var
c=gW;break;case
2:var
q=bW(a,1),c=h(L(gX),q);break;default:var
c=gV}return j(B,c)}return a[0+1]}}function
d7(a){var
j=jR(jZ(0));if(j){var
d=j[1],f=d.length-1-1|0,p=0;if(!(f<0)){var
c=p;for(;;){if(kr(H(d,c),g_)){var
b=H(d,c),k=0===b[0]?b[1]:b[1],e=k?0===c?g4:g7:0===c?g8:g9;if(0===b[0])var
l=b[5],m=b[4],n=b[3],o=b[2],g=bs(L(g5),e,o,n,m,l);else
var
g=h(L(g6),e);i(d1(a),g$,g)}var
q=c+1|0;if(f!==c){var
c=q;continue}break}}return 0}return h(d1(a),ha)}function
d8(a){bU[1]=[0,a,bU[1]];return 0}32===at;var
hc=2;function
d9(a){var
b=[0,0],d=a.getLen()-1|0,e=0;if(!(d<0)){var
c=e;for(;;){b[1]=(223*b[1]|0)+a.safeGet(c)|0;var
g=c+1|0;if(d!==c){var
c=g;continue}break}}b[1]=b[1]&(fj-1|0);var
f=1073741823<b[1]?b[1]-fj|0:b[1];return f}var
bX=a$([0,function(a,b){return e1(a,b)}]),bb=a$([0,function(a,b){return e1(a,b)}]),bc=a$([0,function(a,b){return fN(a,b)}]),d_=e2(0,0),hd=[0,0];function
d$(a){return 2<a?d$((a+1|0)/2|0)*2|0:a}function
ea(a){hd[1]++;var
c=a.length-1,d=M((c*2|0)+2|0,d_);k(d,0,c);k(d,1,(di(d$(c),at)/8|0)-1|0);var
e=c-1|0,f=0;if(!(e<0)){var
b=f;for(;;){k(d,(b*2|0)+3|0,H(a,b));var
g=b+1|0;if(e!==b){var
b=g;continue}break}}return[0,hc,d,bb[1],bc[1],0,0,bX[1],0]}function
bY(a,b){var
c=a[2].length-1,g=c<b?1:0;if(g){var
d=M(b,d_),h=a[2],e=0,f=0,j=0<=c?0<=f?(h.length-1-c|0)<f?0:0<=e?(d.length-1-c|0)<e?0:(jM(h,f,d,e,c),1):0:0:0;if(!j)J(f4);a[2]=d;var
i=0}else
var
i=g;return i}var
eb=[0,0],he=[0,0];function
bZ(a){var
b=a[2].length-1;bY(a,b+1|0);return b}function
bd(a){var
b=bZ(a);if(0===(b%2|0))var
d=0;else
if((2+e3(H(a[2],1)*16|0,at)|0)<b)var
d=0;else
var
c=bZ(a),d=1;if(!d)var
c=b;k(a[2],c,0);return c}D([n,hn,0]);function
ek(a){var
b=[];kM(b,[0,b,b]);return b}var
cU=D([n,ho,0]),V=[0,a$([0,function(a,b){return jQ(a,b)}])[1]];function
cV(a){var
c=a[1];if(3===c[0]){var
d=c[1],b=cV(d);if(b!==d)a[1]=[3,b];return b}return a}function
av(a){return cV(a)}var
el=[0,function(a){dK(hp);dK(d3(a));eZ(aE,10);d7(aE);dL(aE);bN(0);return kH(2)}];function
em(a,b){try{var
c=h(a,b)}catch(f){f=I(f);return h(el[1],f)}return c}function
dl(a,b,c,d){var
f=c,e=d;for(;;)if(typeof
f===z)return a<50?_(1+a,b,e):$(_,[0,b,e]);else
switch(f[0]){case
1:h(f[1],b);return a<50?_(1+a,b,e):$(_,[0,b,e]);case
2:var
i=[0,f[2],e],f=f[1],e=i;continue;default:var
g=f[1][1];if(g){h(g[1],b);return a<50?_(1+a,b,e):$(_,[0,b,e])}else
return a<50?_(1+a,b,e):$(_,[0,b,e])}}function
_(a,b,c){return c?a<50?dl(1+a,b,c[1],c[2]):$(dl,[0,b,c[1],c[2]]):0}function
hq(b,c,d){return bt(dl(0,b,c,d))}function
kP(b,c){return bt(_(0,b,c))}function
dm(a,b,c){var
e=b,d=c;for(;;)if(typeof
e===z)return a<50?aj(1+a,d):$(aj,[0,d]);else
switch(e[0]){case
1:var
f=e[1];if(f[4]){f[4]=0;f[1][2]=f[2];f[2][1]=f[1]}return a<50?aj(1+a,d):$(aj,[0,d]);case
2:var
h=[0,e[2],d],e=e[1],d=h;continue;default:var
g=e[2];V[1]=e[1];em(g,0);return a<50?aj(1+a,d):$(aj,[0,d])}}function
aj(a,b){return b?a<50?dm(1+a,b[1],b[2]):$(dm,[0,b[1],b[2]]):0}function
hr(b,c){return bt(dm(0,b,c))}function
kQ(b){return bt(aj(0,b))}function
bg(a,b){var
c=1===b[0]?b[1]===cU?(hr(a[4],0),1):0:0;return hq(b,a[2],0)}var
cW=[0,0],au=[0,0,0];function
en(a,b){var
h=cV(a),e=h[1];switch(e[0]){case
1:if(e[1]===cU)return 0;break;case
2:var
j=e[1];h[1]=b;var
g=V[1],i=cW[1]?1:(cW[1]=1,0);bg(j,b);if(i){V[1]=g;return 0}for(;;){if(0===au[1]){cW[1]=0;V[1]=g;return 0}if(0===au[1])throw gp;au[1]=au[1]-1|0;var
c=au[2],d=c[2];if(d===c)au[2]=0;else
c[2]=d[2];var
f=d[1];bg(f[1],f[2]);continue}}return J(hs)}function
bh(a,b){return en(a,[0,b])}function
eo(a,b){return typeof
a===z?b:typeof
b===z?a:[2,a,b]}function
cX(a){if(typeof
a!==z)switch(a[0]){case
2:var
b=a[1],c=cX(a[2]);return eo(cX(b),c);case
1:break;default:if(!a[1][1])return 0}return a}function
cY(a,b){var
c=av(a),d=c[1];if(2===d[0]){var
e=d[1];c[1]=b;return bg(e,b)}throw[0,r,hu]}function
af(a){return[0,[0,a]]}var
hw=[0,hv];function
ep(a){return[0,[2,[0,[0,[0,a]],0,0,0]]]}function
cZ(a){var
b=[0,[2,[0,1,0,0,0]]];return[0,b,b]}function
eq(a,b){var
d=[1,b],c=a[2],e=typeof
c===z?d:[2,d,c];a[2]=e;return 0}function
c0(a,b){var
c=av(a)[1];switch(c[0]){case
1:if(c[1]===cU)return em(b,0);break;case
2:var
d=c[1],e=[0,V[1],b],f=d[4],g=typeof
f===z?e:[2,e,f];d[4]=g;return 0}return 0}function
bi(a,b){var
d=av(a),c=d[1];switch(c[0]){case
1:return[0,c];case
2:var
e=c[1],k=ep(d),q=V[1];eq(e,function(a){switch(a[0]){case
0:var
s=a[1];V[1]=q;try{var
t=h(b,s),o=t}catch(f){f=I(f);var
o=[0,[1,f]]}var
d=av(k),g=av(o),l=d[1];if(2===l[0]){var
c=l[1];if(d===g)return 0;var
e=g[1];if(2===e[0]){var
f=e[1];g[1]=[3,d];c[1]=f[1];var
m=eo(c[2],f[2]),n=c[3]+f[3]|0;if(42<n){c[3]=0;c[2]=cX(m)}else{c[3]=n;c[2]=m}var
i=f[4],j=c[4],p=typeof
j===z?i:typeof
i===z?j:[2,j,i];c[4]=p;return 0}d[1]=e;return bg(c,e)}throw[0,r,ht];case
1:return cY(k,a);default:throw[0,r,hx]}});return k;case
3:throw[0,r,hy];default:return h(b,c[1])}}function
er(a,b){return bi(a,b)}function
es(a,b){var
e=av(a),c=e[1];switch(c[0]){case
1:return[0,c];case
2:var
j=c[1],d=ep(e),k=V[1];eq(j,function(a){switch(a[0]){case
0:var
e=a[1];V[1]=k;try{var
f=[0,h(b,e)],c=f}catch(f){f=I(f);var
c=[1,f]}return cY(d,c);case
1:return cY(d,a);default:throw[0,r,hz]}});return d;case
3:throw[0,r,hA];default:var
f=c[1];try{var
i=[0,h(b,f)],g=i}catch(f){f=I(f);var
g=[1,f]}return[0,g]}}var
hB=[0,function(a){return 0}],R=ek(0),hC=[0,0];function
hD(a){var
e=1-(R[2]===R?1:0);if(e){var
b=ek(0);b[1][2]=R[2];R[2][1]=b[1];b[1]=R[1];R[1][2]=b;R[1]=R;R[2]=R;hC[1]=0;var
c=b[2];for(;;){var
d=c!==b?1:0;if(d){if(c[4])bh(c[3],0);var
c=c[2];continue}return d}}return e}function
et(c,b){if(b){var
d=b[2],a=b[1],e=function(a){return et(c,d)};return er(h(c,a),e)}return hw}var
u=A,ag=null,ah=undefined;function
bj(a,b,c){return a==ag?h(b,0):h(c,a)}function
eu(a){function
b(a){return[0,a]}return bj(a,function(a){return 0},b)}function
aw(a){return a!==ah?1:0}function
c1(a,b,c){return a===ah?h(b,0):h(c,a)}function
F(a,b){return a===ah?h(b,0):a}function
bk(a){function
b(a){return[0,a]}return c1(a,function(a){return 0},b)}var
x=true,W=false,aQ=RegExp,ev=Array;function
G(a,b){return a[b]}function
ew(a){return a}var
ex=D([n,hG,0]),c2=[0,ex,{}],hE=Date,hF=Math,hb=br(c2)===n?c2:c2[0+1];dh(hH,hb);function
ey(a){return escape(a)}d8(function(a){return a[1]===ex?[0,new
P(a[2].toString())]:0});d8(function(a){return a
instanceof
ev?0:[0,new
P(a.toString())]});function
bl(a){return a}function
ax(a){return a}function
bm(a,b){a.appendChild(b);return 0}function
C(d){return ax(aV(function(a){if(a){var
e=h(d,a);if(!(e|0))a.preventDefault();return e}var
c=event,b=h(d,c);if(!(b|0))c.returnValue=b;return b}))}function
bn(a){return a.toString()}function
bo(e,b,c,d){if(e.addEventListener===ah){var
f="on".concat(b),g=function(a){var
d=[0,c,a,[0]];return function(a,b){return kc(d,a,b)}};e.attachEvent(f,g);return function(a){return e.detachEvent(f,g)}}e.addEventListener(b,c,d);return function(a){return e.removeEventListener(b,c,d)}}function
ez(a){return h(a,0)}var
eA=kf(0)|0,hJ=bn(hI),hL=bn(hK),hN=bn(hM),hP=bn(hO),p=u.document,hQ="2d";function
c3(a,b){return a.createElement(b.toString())}function
c4(a){return c3(a,hR)}var
hU=D([n,hT,0]);function
eB(a){var
b=c3(a,hV);if(1-(b.getContext==ag?1:0))return b;throw hU}bl(u.HTMLElement)===ah;function
eC(a){var
b=a.getBoundingClientRect(),c=p.body,d=p.documentElement;return[0,((b.left|0)-c.clientLeft|0)-d.clientLeft|0,((b.top|0)-c.clientTop|0)-d.clientTop|0]}var
hW=kg(function(a){var
g=[0,u.requestAnimationFrame,[0,u.mozRequestAnimationFrame,[0,u.webkitRequestAnimationFrame,[0,u.oRequestAnimationFrame,[0,u.msRequestAnimationFrame,0]]]]];try{var
b=g;for(;;){if(!b)throw K;var
c=b[1],f=b[2];if(!aw(c)){var
b=f;continue}var
h=function(a){return c(a)};break}}catch(f){f=I(f);if(f===K){var
d=function(a){return new
hE().getTime()},e=[0,d(0)];return function(a){var
b=d(0),c=e[1]+16.6666666666666679-b,f=c<0?0:c;e[1]=b;u.setTimeout(a,f);return 0}}throw f}return h}),hY=u.FileReader,h1=ke(0),h2=ds;hB[1]=function(a){return 1===a?(u.setTimeout(aV(hD),0),0):0};function
eD(a){return h1.log(a.toString())}el[1]=function(a){eD(h3);eD(d3(a));return d7(aE)};function
eE(a){return new
aQ(v(a),aW)}var
h4=new
aQ("[$]",aW),h6=eE(h5);function
eG(a,b){return b.split(aH(1,a).toString())}var
eH=D([n,h7,0]);function
ai(a){throw eH}var
eF=eE(ab(v(h8).replace(h6,"\\$&"))),eI=new
aQ("\\+",aW);function
X(a){eI[e(fn)]=0;return ab(unescape(a.replace(eI,S)))}function
y(a,b){var
d=a?a[1]:1;if(d){var
f=ab(ey(v(b)));eF[e(fn)]=0;var
c=v(f);return ab(c.replace(eF,v(h9).replace(h4,"$$$$")))}return ab(ey(v(b)))}var
h$=D([n,h_,0]);function
aR(a){try{var
c=a.getLen();if(0===c)var
d=ih;else{var
b=0,g=47,f=a.getLen();for(;;){if(f<=b)throw K;if(a.safeGet(b)!==g){var
b=b+1|0;continue}if(0===b)var
e=[0,ii,aR(ad(a,1,c-1|0))];else
var
h=aR(ad(a,b+1|0,(c-b|0)-1|0)),e=[0,ad(a,0,b),h];var
d=e;break}}}catch(f){f=I(f);if(f===K)return[0,a,0];throw f}return d}function
bp(a){return aI(ik,as(function(a){var
b=a[1],c=j(ij,y(0,a[2]));return j(y(0,b),c)},a))}function
c5(a){var
d=eG(38,a),b=d.length;function
e(a,b){var
c=b;for(;;){if(0<=c){try{var
f=c-1|0,g=function(a){function
e(a){var
c=a[2],d=a[1];function
b(a){return X(F(a,ai))}var
e=b(c);return[0,b(d),e]}var
b=eG(61,a);if(2===b.length)var
d=G(b,1),c=bl([0,G(b,0),d]);else
var
c=ah;return c1(c,ai,e)},h=e([0,c1(G(d,c),ai,g),a],f)}catch(f){f=I(f);if(f===eH){var
c=c-1|0;continue}throw f}return h}return a}}return e(0,b-1|0)}var
im=new
aQ(v(il)),ip=new
aQ(v(io));function
eJ(a){switch(a[0]){case
1:var
c=a[1],h=c[6],i=c[5],k=c[2],v=c[3],w=c[1],x=N(h,iG)?j(iH,y(0,h)):iP,z=i?j(iI,bp(i)):iO,A=j(z,x),B=j(iK,j(aI(iJ,as(function(a){return y(0,a)},v)),A)),C=fd===k?iL:j(iN,ar(k)),D=j(C,B);return j(iM,j(y(0,w),D));case
2:var
d=a[1],l=d[4],m=d[3],E=d[1],F=N(l,iQ)?j(iR,y(0,l)):iW,G=m?j(iS,bp(m)):iV,H=j(G,F);return j(iU,j(aI(iT,as(function(a){return y(0,a)},E)),H));default:var
b=a[1],e=b[6],f=b[5],g=b[2],n=b[3],o=b[1],p=N(e,iw)?j(ix,y(0,e)):iF,q=f?j(iy,bp(f)):iE,r=j(q,p),s=j(iA,j(aI(iz,as(function(a){return y(0,a)},n)),r)),t=80===g?iB:j(iD,ar(g)),u=j(t,s);return j(iC,j(y(0,o),u))}}var
aS=location;X(aS.hostname);X(aS.protocol);try{}catch(f){f=I(f);if(f[1]!==a9)throw f}aR(X(aS.pathname));c5(aS.search);X(aS.href);var
iX=u.FormData;function
eK(a,b){if(bD<=a[1]){var
d=a[2];d[1]=[0,b,d[1]];return 0}var
e=a[2],c=b[2],f=b[1];return bv<=c[1]?e.append(f.toString(),c[2]):e.append(f.toString(),c[2])}function
c6(a){return ActiveXObject}var
ja=D([n,i$,0]),ji=4*0.785398163397448279,jp="white";function
eN(a){return a.save()}function
eO(a){return a.restore()}function
eP(a,b,c){return a.scale(b,c)}function
eQ(a,b,c){return a.translate(b,c)}function
eR(a){return a.beginPath()}function
eS(a,b,c){return a.moveTo(b,c)}function
eT(a,b){a.fillStyle=b;return a.fill()}function
eU(a){var
b=a.getContext(hQ);b[e("lineWidth")]=2;return[0,a,b]}function
eV(a){return a}function
c_(a,b,c,d,e,f,g,h){return a[2].drawImage(h[1],d,e,f,g,b,c,f,g)}function
c8(a){var
b=a[1];if(b)return b[1];throw[0,r,jj]}function
c9(a,b,c){if(b)eT(a,b[1]);return c?(a.strokeStyle=c[1],a.stroke()):0}function
aT(a,b,c,d,e,f,g,h){var
i=c8(a[8])[2];eN(i);if(0===a[1].length-1)if(0<a[2].length-1)throw[0,r,jq];eR(i);i.rect(e,f,g,h);eT(i,jp);i.clip();var
B=c/b,C=d/b;eP(i,b,b);eQ(i,-a[4]-B,-a[5]-C);var
D=a[4]+B+e/b,E=a[5]+C+f/b,F=a[2].length-1-1|0,X=E+a[8][3]/b,Y=D+a[8][2]/b,Z=0;if(!(F<0)){var
l=Z;for(;;){var
n=H(a[1],l),j=H(a[2],l),y=n[1]<=Y?1:0,U=n[4],V=n[3],W=n[2];if(y){var
z=W<=X?1:0;if(z)var
A=D<=V?1:0,o=A?E<=U?1:0:A;else
var
o=z}else
var
o=y;if(o){eR(i);switch(j[0]){case
1:var
L=j[3],M=j[2],N=j[1];dO(function(a,b){var
c=b[2],d=b[1];return 0===a?eS(i,d,c):i.lineTo(d,c)},N);i.closePath();c9(i,M,L);break;case
2:var
O=j[6],P=j[5],Q=j[4],R=j[3],S=j[2],T=j[1];eN(i);eQ(i,T,S);eP(i,R,Q);i.arc(0,0,1,0,2*ji,x);eO(i);c9(i,P,O);break;case
3:var
s=j[6],t=j[5],u=j[3],v=j[2],w=j[1];i.font=j[4];i.textAlign="center";i.textBaseline="middle";if(t){i.fillStyle=t[1];i.fillText(u,w,v)}if(s){i.strokeStyle=s[1];i.strokeText(u,w,v)}break;default:var
q=j[1],p=q.length-1-1|0,J=j[3],K=j[2],G=0;if(!(p<0)){var
m=G;for(;;){var
k=q[m+1];if(0===k[0])eS(i,k[1],k[2]);else
i.bezierCurveTo(k[1],k[2],k[3],k[4],k[5],k[6]);var
I=m+1|0;if(p!==m){var
m=I;continue}break}}c9(i,K,J)}}var
_=l+1|0;if(F!==l){var
l=_;continue}break}}return eO(i)}var
jr=JSON;if(aU===0)var
l=ea([0]);else{var
bO=aU.length-1;if(0===bO)var
ej=[0];else{var
dM=M(bO,d9(aU[0+1])),dN=bO-1|0,f5=1;if(!(dN<1)){var
aF=f5;for(;;){dM[aF+1]=d9(aU[aF+1]);var
f6=aF+1|0;if(dN!==aF){var
aF=f6;continue}break}}var
ej=dM}var
aO=ea(ej);dO(function(a,b){var
c=(a*2|0)+2|0;aO[3]=o(bb[4],b,c,aO[3]);aO[4]=o(bc[4],c,1,aO[4]);return 0},aU);var
l=aO}var
ec=e4(eM,0)?[0]:eM,b2=ec.length-1,ed=eL.length-1,s=M(b2+ed|0,0),ee=b2-1|0,hi=0;if(!(ee<0)){var
aN=hi;for(;;){var
eh=H(ec,aN);try{var
hf=i(bb[22],eh,l[3]),ei=hf}catch(f){f=I(f);if(f!==K)throw f;var
b0=bZ(l);l[3]=o(bb[4],eh,b0,l[3]);l[4]=o(bc[4],b0,1,l[4]);var
ei=b0}k(s,aN,ei);var
hl=aN+1|0;if(ee!==aN){var
aN=hl;continue}break}}var
ef=ed-1|0,hj=0;if(!(ef<0)){var
aM=hj;for(;;){var
b3=H(eL,aM);try{var
hh=i(bX[22],b3,l[7]),eg=hh}catch(f){f=I(f);if(f!==K)throw f;var
b1=l[1];l[1]=b1+1|0;if(N(b3,hg))l[7]=o(bX[4],b3,b1,l[7]);var
eg=b1}k(s,aM+b2|0,eg);var
hk=aM+1|0;if(ef!==aM){var
aM=hk;continue}break}}var
c$=s[9],da=s[10],db=s[11],dc=s[12],dd=s[13],de=s[14],js=s[1],jt=s[2],ju=s[3],jv=s[4],jw=s[5],jx=s[6],jy=s[7],jz=s[8];function
jA(a,b,c,d,e,f,g){if(b)a[da+1]=b[1];if(c)a[db+1]=c[1];if(d)a[dc+1]=d[1];if(e)a[dd+1]=e[1];return f?(a[de+1]=f[1],0):0}function
jB(a,b){a[c$+1]=b;return 0}function
jC(a){return a[de+1]}function
jD(a){return a[dd+1]}function
jE(a){return a[dc+1]}function
jF(a){return a[db+1]}function
jG(a){return a[da+1]}var
df=[0,js,function(a){return a[c$+1]},jz,jG,jt,jF,ju,jE,jy,jD,jx,jC,jv,jB,jw,jA],aP=[0,0],hm=df.length-1;for(;;){if(aP[1]<hm){var
bf=H(df,aP[1]),a=function(a){aP[1]++;return H(df,aP[1])},b5=a(0);if(typeof
b5===z)switch(b5){case
1:var
b7=a(0),m=function(b7){return function(a){return a[b7+1]}}(b7);break;case
2:var
b8=a(0),b=a(0),m=function(b8,b){return function(a){return a[b8+1][b+1]}}(b8,b);break;case
3:var
b9=a(0),m=function(b9){return function(a){return h(a[1][b9+1],a)}}(b9);break;case
4:var
b_=a(0),m=function(b_){return function(a,b){a[b_+1]=b;return 0}}(b_);break;case
5:var
b$=a(0),ca=a(0),m=function(b$,ca){return function(a){return h(b$,ca)}}(b$,ca);break;case
6:var
cb=a(0),cc=a(0),m=function(cb,cc){return function(a){return h(cb,a[cc+1])}}(cb,cc);break;case
7:var
cd=a(0),ce=a(0),c=a(0),m=function(cd,ce,c){return function(a){return h(cd,a[ce+1][c+1])}}(cd,ce,c);break;case
8:var
cf=a(0),cg=a(0),m=function(cf,cg){return function(a){return h(cf,h(a[1][cg+1],a))}}(cf,cg);break;case
9:var
ch=a(0),ci=a(0),cj=a(0),m=function(ch,ci,cj){return function(a){return i(ch,ci,cj)}}(ch,ci,cj);break;case
10:var
ck=a(0),cl=a(0),cm=a(0),m=function(ck,cl,cm){return function(a){return i(ck,cl,a[cm+1])}}(ck,cl,cm);break;case
11:var
cn=a(0),co=a(0),cp=a(0),d=a(0),m=function(cn,co,cp,d){return function(a){return i(cn,co,a[cp+1][d+1])}}(cn,co,cp,d);break;case
12:var
cq=a(0),cr=a(0),cs=a(0),m=function(cq,cr,cs){return function(a){return i(cq,cr,h(a[1][cs+1],a))}}(cq,cr,cs);break;case
13:var
ct=a(0),cu=a(0),cv=a(0),m=function(ct,cu,cv){return function(a){return i(ct,a[cu+1],cv)}}(ct,cu,cv);break;case
14:var
cw=a(0),cx=a(0),cy=a(0),cz=a(0),m=function(cw,cx,cy,cz){return function(a){return i(cw,a[cx+1][cy+1],cz)}}(cw,cx,cy,cz);break;case
15:var
cA=a(0),cB=a(0),cC=a(0),m=function(cA,cB,cC){return function(a){return i(cA,h(a[1][cB+1],a),cC)}}(cA,cB,cC);break;case
16:var
cD=a(0),cE=a(0),m=function(cD,cE){return function(a){return i(a[1][cD+1],a,cE)}}(cD,cE);break;case
17:var
cF=a(0),cG=a(0),m=function(cF,cG){return function(a){return i(a[1][cF+1],a,a[cG+1])}}(cF,cG);break;case
18:var
cH=a(0),cI=a(0),cJ=a(0),m=function(cH,cI,cJ){return function(a){return i(a[1][cH+1],a,a[cI+1][cJ+1])}}(cH,cI,cJ);break;case
19:var
cK=a(0),cL=a(0),m=function(cK,cL){return function(a){var
b=h(a[1][cL+1],a);return i(a[1][cK+1],a,b)}}(cK,cL);break;case
20:var
cM=a(0),be=a(0);bd(l);var
m=function(cM,be){return function(a){return h(f(be,cM,0),be)}}(cM,be);break;case
21:var
cN=a(0),cO=a(0);bd(l);var
m=function(cN,cO){return function(a){var
b=a[cO+1];return h(f(b,cN,0),b)}}(cN,cO);break;case
22:var
cP=a(0),cQ=a(0),cR=a(0);bd(l);var
m=function(cP,cQ,cR){return function(a){var
b=a[cQ+1][cR+1];return h(f(b,cP,0),b)}}(cP,cQ,cR);break;case
23:var
cS=a(0),cT=a(0);bd(l);var
m=function(cS,cT){return function(a){var
b=h(a[1][cT+1],a);return h(f(b,cS,0),b)}}(cS,cT);break;default:var
b6=a(0),m=function(b6){return function(a){return b6}}(b6)}else
var
m=b5;he[1]++;if(i(bc[22],bf,l[4])){bY(l,bf+1|0);k(l[2],bf,m)}else
l[6]=[0,[0,bf,m],l[6]];aP[1]++;continue}eb[1]=(eb[1]+l[1]|0)-1|0;l[8]=a_(l[8]);bY(l,3+e3(H(l[2],1)*16|0,at)|0);var
b4=function(d,b){var
e=b?b[1]:0;return function(a){var
f=a?a[1]:0;return function(a){var
g=a?a[1]:a1;return function(a){var
h=a?a[1]:1;return function(a){var
i=a?a[1]:10;return function(a){var
j=a?a[1]:10;return function(a){if(d)var
b=d;else{var
c=e2(n,l[1]);c[0+1]=l[2];var
b=D(c)}b[c$+1]=e;b[da+1]=f;b[db+1]=g;b[dc+1]=h;b[dd+1]=i;b[de+1]=j;return b}}}}}}},eW=function(c,b){var
d=[0,0],e=[0,0];return c.onmousedown=C(function(a){d[1]=a.clientX;e[1]=a.clientY;c.style.cursor="move";var
f=[0,ag],h=bo(p,hL,C(function(a){var
c=a.clientX,f=a.clientY,g=d[1],h=e[1];d[1]=c;e[1]=f;i(b,c-g|0,f-h|0);return x}),x);f[1]=ax(bo(p,hJ,C(function(a){ez(h);var
b=f[1];if(b!=ag)ez(b);c.style.cursor=g;return x}),x));return x})};u.onload=C(function(a){var
M=p.documentElement;M.style.overflow=e6;p.body.style.overflow=e6;p.body.style.margin=fa;var
aQ=[0,0],n=c3(p,hS);n.innerHTML="Loading graph...";n.style.display="none";bm(p.body,n);function
bw(a){if(!aQ[1])n.style.display="inline";return af(0)}var
Q=cZ(0),R=Q[1],S=[0,0],bx=an,aX=Q[2];function
T(a,b){var
c=ds<a?[0,h2,a-ds]:[0,a,0],d=c[2],e=c[1],f=d==0?function(a){return bh(aX,a)}:function(a){return T(d,a)};S[1]=[0,u.setTimeout(aV(f),e*fq)];return 0}T(bx,0);c0(R,function(a){var
b=S[1];return b?u.clearTimeout(b[1]):0});bi(R,bw);function
by(a){var
z=jr.parse(a.toString()),y=z[1],K=y[2],N=y[1],U=z[3],V=z[2],X=y[4],Y=y[3];aQ[1]=1;p.body.removeChild(n);var
g=[0,V,U,0.05,N,K,Y-N,X-K,[0,0,0,0,c7]],Z=M.clientHeight,_=M.clientWidth,j=eB(p);j.width=_;j.height=Z;bm(p.body,j);function
A(a){return[0,0,0,j.width,j.height]}var
c=dn(b4(0,0),0,0,0,0,0,0),d=dn(b4(0,0),0,0,0,0,0,0),e=dn(b4(0,0),0,jK,jJ,jI,jH,0);function
v(a){var
b=g[3];return Math.pow(2,h(f(e,t,311),e)/8)/b}var
G=[0,0];function
k(a){var
k=A(0),l=v(0),b=Math.ceil(k[3]/l),e=Math.ceil(k[4]/l),o=[0,ap(b,g[6])];dp(f(c,dC,312),c,0,[0,g[6]],[0,b/20],[0,b/2],o,0);var
q=h(f(c,aY,313),c),m=g[6]-q;if(h(f(c,t,314),c)<0)i(f(c,E,315),c,0);if(m<h(f(c,t,316),c))i(f(c,E,317),c,m);var
s=[0,ap(e,g[7])];dp(f(d,dC,318),d,0,[0,g[7]],[0,e/20],[0,e/2],s,0);var
u=h(f(d,aY,319),d),n=g[7]-u;if(h(f(d,t,320),d)<0)i(f(d,E,321),d,0);if(n<h(f(d,t,322),d))i(f(d,E,323),d,n);return G[1]?0:(G[1]=1,h(hW,aV(function(a){G[1]=0;var
aa=h(f(d,t,324),d),ab=h(f(c,t,325),c),m=v(0),e=j.width,i=j.height,b=g[8],C=aq(e,b[2]),D=aq(i,b[3]),z=0,A=0,ac=b[2]<C?0:b[3]<D?0:1;if(!ac){var
H=b[1],E=eB(p);E.width=C;E.height=D;var
R=eU(E),I=b[4];if(H){var
U=H[1],V=I[4],W=I[3];c_(eV(R),0,0,0,0,W,V,U)}b[1]=[0,R];b[2]=C;b[3]=D}function
u(a){return a*m+an|0}var
X=u(ab),J=u((e/m-g[6])/2),k=0<J?-J|0:X,Y=u(aa),K=u((i/m-g[7])/2),l=0<K?-K|0:Y,q=b[4][1]-k|0,s=b[4][2]-l|0,ad=0<q?(b[4][3]+q|0)<e?1:0:0;if(ad)var
B=0;else{if(0<s)if((b[4][4]+s|0)<i)var
B=0,F=0;else
var
F=1;else
var
F=1;if(F){var
M=b[4],S=0===M[3]?1:0,T=S||(0===M[4]?1:0);if(T)var
B=1;else{var
N=c8(b),w=b[4],ae=0===q?0===s?1:0:0;if(!ae){var
_=w[4],$=w[3];c_(eV(N),q,s,0,0,$,_,N)}var
O=function(a,b,c,d){return 0<((a+c|0)+b|0)?0<=(a+c|0)?d<=(a+c|0)?[0,d,0]:d<((a+c|0)+b|0)?[0,a+c|0,(d-a|0)-c|0]:[0,a+c|0,b]:[0,0,(b+a|0)+c|0]:jk},P=O(0,w[3],q,b[2]),x=P[2],y=P[1],Q=O(0,w[4],s,b[3]),n=Q[2],o=Q[1];if(0<n)if(0<y){if(!(e<=(y+x|0)))throw[0,r,jn];aT(g,m,k,l,0,o,y,n)}else{if(0!==y)throw[0,r,jo];if(x<e)aT(g,m,k,l,x,o,e-x|0,n)}if(0<o){if(!(i<=(o+n|0)))throw[0,r,jl];aT(g,m,k,l,0,0,e,o)}else{if(0!==o)throw[0,r,jm];if(n<i)aT(g,m,k,l,0,n,e,i-n|0)}b[4]=[0,k,l,e,i];var
B=1}}}if(!B)b[4]=c7;var
L=b[4],af=0<=A?0<=z?L[3]<(A+e|0)?0:L[4]<(z+i|0)?0:1:0:0;if(!af){aT(g,m,k,l,0,0,e,i);b[4]=[0,k,l,e,i]}var
Z=c8(b);return c_(eU(j),A,z,A,z,e,i,Z)})))}var
P=A(0),O=Math.ceil(Math.log(aq(g[6]/P[3],g[7]/P[4]))/0.693147180559945286*8);dp(f(e,dC,310),e,0,[0,O],0,0,0,0);g[3]=Math.pow(2,O/8);var
Q=[0,v(0)];function
B(a,b){var
e=v(0),j=1-Q[1]/e,l=h(f(c,aY,326),c)*j*a;i(f(c,E,328),c,h(f(c,t,327),c)+l);var
m=h(f(d,aY,329),d)*j*b;i(f(d,E,331),d,h(f(d,t,330),d)+m);Q[1]=e;g[8][4]=c7;return k(0)}var
$=16,l=284;function
o(a){return h(L(jL),a).toString()}var
D=o($),q=[0,l],s=c4(p),b=s.style;b.position=fr;b.width=D;b.height=D;b.top=o(q[1]);b.left=fa;b.margin=fy;b.backgroundColor="black";var
w=c4(p),m=w.style;m.position=fr;m.width=D;m.height=o(l+16|0);m.border="2px solid black";m.padding=fy;m.top=e8;m.left=e8;bm(w,s);bm(p.body,w);function
R(a){if(a!==q[1]){var
b=s.style;b.top=o(a);q[1]=a;i(f(e,E,352),e,(l-a|0)*h(f(e,bA,351),e)/l);return B(an,an)}return 0}eW(s,function(a,b){return R(ap(l,aq(0,q[1]+b|0)))});w.onmousedown=C(function(a){var
b=a.clientY;R(aq(0,ap(l,(b-eC(w)[2]|0)-8|0)));return W});u.onresize=C(function(a){var
b=p.documentElement;j.width=b.clientWidth;j.height=b.clientHeight;k(1);return x});eW(j,function(a,b){var
g=v(0);function
e(a,b){var
c=h(f(a,aY,365),a),d=h(f(a,bA,366),a)-c;return i(f(a,E,368),a,ap(h(f(a,t,367),a)-b/g,d))}e(c,a);e(d,b);return k(1)});function
S(a,b,c){var
k=A(0),d=a/k[3],g=b/k[4],m=h(f(e,t,369),e),u=m+c*h(f(e,a0,370),e),v=aq(h(f(e,-117442047,371),e),u),n=ap(h(f(e,bA,372),e),v);if(n!=m){i(f(e,E,373),e,n);var
p=h(f(e,bA,355),e),j=l-(h(f(e,t,356),e)*l/p+an|0)|0,r=s.style;r.top=o(j);q[1]=j;var
w=0<=d?d<=1?0<=g?g<=1?(B(d,g),1):0:0:0:0;if(!w)B(an,an)}return W}function
H(a,b,c){var
d=eC(j),e=a.clientX-d[1]|0,f=a.clientY-d[2]|0;return 0<=c?0<c?S(e,f,-1):W:S(e,f,1)}var
J=c4(p);J.setAttribute(e7,"return;");if(typeof
J[e7]===fh)bo(j,hN,C(function(b){function
a(a){return 0}var
c=(-F(b.wheelDeltaX,a)|0)/40|0;function
d(a){return b.wheelDelta}return H(b,c,(-F(b.wheelDeltaY,d)|0)/40|0)}),x);else
bo(j,hP,C(function(a){var
b=a.detail;return a.axis===a.HORIZONTAL?H(a,b,0):H(a,0,b)}),x);function
T(a){var
b=a.keyCode-37|0;if(b<0||3<b)return x;switch(b){case
1:var
g=h(f(d,a0,380),d);i(f(d,E,382),d,h(f(d,t,381),d)-g);k(0);return W;case
2:var
j=h(f(c,a0,383),c);i(f(c,E,385),c,h(f(c,t,384),c)+j);k(0);return W;case
3:var
l=h(f(d,a0,386),d);i(f(d,E,388),d,h(f(d,t,387),d)+l);k(0);return W;default:var
e=h(f(c,a0,377),c);i(f(c,E,379),c,h(f(c,t,378),c)-e);k(0);return W}}var
I=[0,-1];p.onkeydown=C(function(a){I[1]=a.keyCode;return T(a)});p.onkeypress=C(function(a){var
b=I[1];I[1]=-1;return a.keyCode===b?x:T(a)});k(1);return af(0)}try{var
bu=af(jY(dg)),aS=bu}catch(f){f=I(f);if(f!==K)throw f;var
bt=function(a){var
b=a[2],c=a[4];if(0!==b)if(200!==b)return[0,[2,[0,0,0,0,0]]];return af(c)},aK=0,aL=0,aM=0,aN=0,aO=0,aP=0,m=0,J=0,bs=0,a$=0?bs[1]:0,ba=aP?aP[1]:0,bb=aN?aN[1]:function(a,b){return 1};if(aO){var
ae=aO[1];if(m){var
bc=m[1];aG(function(a){return eK(ae,[0,a[1],a[2]])},bc)}var
c=[0,ae]}else
if(m){var
br=m[1],Y=bk(bl(iX)),aJ=Y?[0,808620462,new(Y[1])()]:[0,bD,[0,0]];aG(function(a){return eK(aJ,[0,a[1],a[2]])},br);var
c=[0,aJ]}else
var
c=0;if(c){var
aj=c[1];if(J)var
ak=[0,jb,J,bE];else{if(bD<=aj[1]){var
s=0,q=0,d=aj[2][1];for(;;){if(d){var
O=d[2],w=d[1],aU=bv<=w[2][1]?0:1;if(aU){var
s=[0,w,s],d=O;continue}var
q=[0,w,q],d=O;continue}var
aW=a_(q);a_(s);if(aW)var
Z=function(a){return ar(hF.random()*1e9|0)},a6=Z(0),_=j(iZ,j(Z(0),a6)),aF=[0,je,[0,j(jd,_)],[0,164354597,_]];else
var
aF=jf;var
aH=aF;break}}else
var
aH=jg;var
ak=aH}var
k=ak}else
var
k=[0,jh,J,bE];var
al=k[3],am=k[2],V=v(dg),bd=k[1],aZ=function(a){var
c=ew(a),b=ab(F(G(c,1),ai).toLowerCase());if(N(b,ia))if(N(b,ib)){if(N(b,ic))if(N(b,id)){if(N(b,ie))if(N(b,ig))var
d=1,f=0;else
var
f=1;else
var
f=1;if(f)var
e=1,d=2}else
var
d=0;else
var
d=0;switch(d){case
1:var
g=0;break;case
2:var
g=1;break;default:var
e=0,g=1}if(g){var
h=X(F(G(c,5),ai)),k=function(a){return v(ir)},l=X(F(G(c,9),k)),m=function(a){return v(is)},n=c5(F(G(c,7),m)),o=aR(h),p=function(a){return v(it)},i=ab(F(G(c,4),p)),q=N(i,iq)?e0(i):e?fd:80,j=[0,X(F(G(c,2),ai)),q,o,h,n,l],r=e?[1,j]:[0,j];return[0,r]}}throw h$},a1=function(a){function
b(a){var
b=ew(a),c=X(F(G(b,2),ai));function
d(a){return v(iu)}var
e=ab(F(G(b,6),d));function
f(a){return v(iv)}var
g=c5(F(G(b,4),f));return[0,[2,[0,aR(c),c,g,e]]]}function
c(a){return 0}return bj(ip.exec(V),c,b)},U=bj(im.exec(V),a1,aZ);if(U){var
A=U[1];switch(A[0]){case
1:var
ac=A[1],ad=ac.slice(),a9=ac[5];ad[5]=0;var
l=[0,eJ([1,ad]),a9],o=1;break;case
2:var
o=0;break;default:var
$=A[1],aa=$.slice(),a8=$[5];aa[5]=0;var
l=[0,eJ([0,aa]),a8],o=1}}else
var
o=0;if(!o)var
l=[0,dg,0];var
ao=l[1],at=dI(l[2],ba),au=at?j(ao,j(jc,bp(at))):ao,av=cZ(0),ay=av[2],az=av[1];try{var
a5=new
XMLHttpRequest(),b=a5}catch(f){try{var
a4=new(c6(0))("Msxml2.XMLHTTP"),b=a4}catch(f){try{var
a3=new(c6(0))("Msxml3.XMLHTTP"),b=a3}catch(f){try{var
a2=new(c6(0))("Microsoft.XMLHTTP")}catch(f){throw[0,r,iY]}var
b=a2}}}if(aK)b.overrideMimeType(aK[1].toString());b.open(bd.toString(),au.toString(),x);if(am)b.setRequestHeader("Content-type",am[1].toString());aG(function(a){return b.setRequestHeader(a[1].toString(),a[2].toString())},a$);var
B=function(a){function
c(a){return[0,new
P(a)]}function
d(a){return 0}return bj(b.getResponseHeader(v(a)),d,c)},aA=[0,0],D=function(a){var
c=aA[1]?0:i(bb,b.status,B)?0:(en(ay,[1,[0,ja,[0,b.status,B]]]),b.abort(),1);aA[1]=1;return 0};b.onreadystatechange=aV(function(a){switch(b.readyState){case
2:if(!eA)return D(0);break;case
3:if(eA)return D(0);break;case
4:D(0);var
c=function(a){var
c=eu(b.responseXML);if(c){var
d=c[1];return ax(d.documentElement)===ag?0:[0,d]}return 0};return bh(ay,[0,au,b.status,B,new
P(b.responseText),c])}return 0});if(aM){var
be=aM[1];b.onprogress=C(function(a){i(be,a.loaded,a.total);return x})}var
aB=b.upload;if(aB!==ah)if(aL){var
bf=aL[1];aB.onprogress=C(function(a){i(bf,a.loaded,a.total);return x})}if(c){var
H=c[1];if(bD<=H[1]){var
aC=H[2];if(typeof
al===z){var
bg=aC[1];b.send(ax(aI(i_,as(function(a){var
b=a[2],c=a[1];if(bv<=b[1]){var
d=j(i8,y(0,new
P(b[2].name)));return j(y(0,c),d)}var
e=j(i9,y(0,new
P(b[2])));return j(y(0,c),e)},bg)).toString()))}else{var
aE=al[2],bn=function(a){var
c=ax(a.join(g));return aw(b.sendAsBinary)?b.sendAsBinary(c):b.send(c)},bq=aC[1],e=new
ev(),a7=function(a){e.push(j(i1,j(aE,i0)).toString());return e};es(es(et(function(a){e.push(j(i3,j(aE,i2)).toString());var
g=a[2],m=a[1];if(bv<=g[1]){var
b=g[2],q=function(a){var
c=bk(b.name),g="Content-Type: application/octet-stream\r\n",h='"\r\n';if(c)var
f=c[1];else
var
d=bk(b.fileName),f=d?d[1]:aD(hX);e.push(j(i5,j(m,i4)).toString(),f,h,g);e.push(bB,a,bB);return af(0)},k=bk(bl(hY)),d=-1041425454;if(k){var
c=new(k[1])(),h=cZ(0),i=h[1],o=h[2];c.onloadend=C(function(a){if(2===c.readyState){var
b=c.result,e=e4(typeof
b,"string")?ax(b):ag,d=eu(e);if(!d)throw[0,r,hZ];bh(o,d[1])}return W});c0(i,function(a){return c.abort()});if(typeof
d===z)if(fb===d)c.readAsDataURL(b);else
if(e9<=d)c.readAsText(b);else
c.readAsBinaryString(b);else
c.readAsText(b,d[2]);var
n=i}else{var
f=function(a){return aD(h0)};if(typeof
d===z)var
l=fb===d?aw(b.getAsDataURL)?b.getAsDataURL():f(0):e9<=d?aw(b.getAsText)?b.getAsText("utf8"):f(0):aw(b.getAsBinary)?b.getAsBinary():f(0);else
var
p=d[2],l=aw(b.getAsText)?b.getAsText(p):f(0);var
n=af(l)}return er(n,q)}var
s=g[2];e.push(j(i7,j(m,i6)).toString(),s,bB);return af(0)},bq),a7),bn)}}else
b.send(H[2])}else
b.send(ag);c0(az,function(a){return b.abort()});var
aS=bi(az,bt)}bi(aS,by);return W});bN(0);return}}(this));
