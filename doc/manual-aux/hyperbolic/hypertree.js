// This program was compiled from OCaml by js_of_ocaml 2.0+git-883a1ec
(function(b){"use strict";var
c0=125,df=123,m=254,w=255,fl=108,fm=".jpg",fe="wikipedia-38.png",fk=-0.1,b3='"',aa=16777215,c1="=",fd='Content-Disposition: form-data; name="',$=250,fA=1.41421356237309515,fH=0.5,c7=65599,e8="jsError",b$="POST",cZ=2147483,cY="on",L="auto",e1=-550809787,ak=246,bm=115,c5=102,fj="&",e0="0px",e7="center",de=120,fG="block",eZ="--",fc="draw",c4=870530776,dd=117,fi="overlay",b_=126925477,d="",c$="transform",b0=781515420,aR=100,f="0",fs="info-38.png",n=248,b2=4204112,b6="48px",dj=103,fF="fd ",fr=936573133,bk="2px",x="absolute",di="_blank",fb=1e3,fq=0.25,al="src/core/lwt.ml",fE="table-cell",e6="meeting-point-38.png",dc="x",aT=".",bh="+",b5=65535,b9="36px",aH="en",fa="In English",bf="g",fp="ocsigen-powered.png",bW=1073741823,c_="f",aG=105,fu="%d",e5=443,bi=110,dh=3654627,fD=-88,bY="text",e$="80%",fo=124,fz=785140586,bZ="?",b1="'",bV="int_of_string",e_=-32,fC="table",c3=111,ft=982028505,fh="move",_=" ",e4="http://",c2="px",bl="e",fB="1",bj="pointer",fy="lastIndex",b7=891486873,b8="button",c9="hidden",cX="middle",aF="-",fn=":",e9="nan",aS=-48,cW=116,bX="\r\n",c8="lineWidth",Q="100%",fx=65520,fg="globe-38.png",c6=" : file already exists",db="text on",fw="%.12g",e3="off",at="/",b4=114,bg="#",eY=0.95,da="38px",dg="nowrap",dl=101,e2=0.1,dk="index out of bounds",ff="hyp_lang",fv="commons-38.png",B="number";function
fY(a,b){throw[0,a,b]}function
dr(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
c=b.console;c&&c.error&&c.error(a)}var
u=[0];function
bq(a,b){if(!a)return d;if(a&1)return bq(a-1,b)+b;var
c=bq(a>>1,b);return c+c}function
C(a){if(a!=null){this.bytes=this.fullBytes=a;this.last=this.len=a.length}}function
fZ(){fY(u[4],new
C(dk))}C.prototype={string:null,bytes:null,fullBytes:null,array:null,len:null,last:0,toJsString:function(){var
a=this.getFullBytes();try{return this.string=decodeURIComponent(escape(a))}catch(f){dr('MlString.toJsString: wrong encoding for "%s" ',a);return a}},toBytes:function(){if(this.string!=null)try{var
a=unescape(encodeURIComponent(this.string))}catch(f){dr('MlString.toBytes: wrong encoding for "%s" ',this.string);var
a=this.string}else{var
a=d,c=this.array,e=c.length;for(var
b=0;b<e;b++)a+=String.fromCharCode(c[b])}this.bytes=this.fullBytes=a;this.last=this.len=a.length;return a},getBytes:function(){var
a=this.bytes;if(a==null)a=this.toBytes();return a},getFullBytes:function(){var
a=this.fullBytes;if(a!==null)return a;a=this.bytes;if(a==null)a=this.toBytes();if(this.last<this.len){this.bytes=a+=bq(this.len-this.last,"\0");this.last=this.len}this.fullBytes=a;return a},toArray:function(){var
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
b=this.bytes;if(b==null)b=this.toBytes();return a<this.last?b.charCodeAt(a):0},safeGet:function(a){if(this.len==null)this.toBytes();if(a<0||a>=this.len)fZ();return this.get(a)},set:function(a,b){var
c=this.array;if(!c){if(this.last==a){this.bytes+=String.fromCharCode(b&w);this.last++;return 0}c=this.toArray()}else
if(this.bytes!=null)this.bytes=this.fullBytes=this.string=null;c[a]=b&w;return 0},safeSet:function(a,b){if(this.len==null)this.toBytes();if(a<0||a>=this.len)fZ();this.set(a,b)},fill:function(a,b,c){if(a>=this.last&&this.last&&c==0)return;var
d=this.array;if(!d)d=this.toArray();else
if(this.bytes!=null)this.bytes=this.fullBytes=this.string=null;var
f=a+b;for(var
e=a;e<f;e++)d[e]=c},compare:function(a){if(this.string!=null&&a.string!=null){if(this.string<a.string)return-1;if(this.string>a.string)return 1;return 0}var
b=this.getFullBytes(),c=a.getFullBytes();if(b<c)return-1;if(b>c)return 1;return 0},equal:function(a){if(this.string!=null&&a.string!=null)return this.string==a.string;return this.getFullBytes()==a.getFullBytes()},lessThan:function(a){if(this.string!=null&&a.string!=null)return this.string<a.string;return this.getFullBytes()<a.getFullBytes()},lessEqual:function(a){if(this.string!=null&&a.string!=null)return this.string<=a.string;return this.getFullBytes()<=a.getFullBytes()}};function
y(a){this.string=a}y.prototype=new
C();function
kb(a){var
c=[0];while(a!==0){var
d=a[1];for(var
b=1;b<d.length;b++)c.push(d[b]);a=a[2]}return c}function
dq(a,b){fY(a,new
y(b))}function
aV(a){dq(u[4],a)}function
fJ(){aV(dk)}function
kc(a,b){if(b<0||b>=a.length-1)fJ();return a[b+1]}function
kd(a,b,c){if(b<0||b>=a.length-1)fJ();a[b+1]=c;return 0}function
ke(a,b,c){return[0].concat(a.slice(b+1,b+1+c))}function
fK(a,b,c,d,e){if(e===0)return;if(d===c.last&&c.bytes!=null){var
f=a.bytes;if(f==null)f=a.toBytes();if(b>0||a.last>e)f=f.slice(b,b+e);c.bytes+=f;c.last+=f.length;return}var
g=c.array;if(!g)g=c.toArray();else
c.bytes=c.string=null;a.blitToArray(b,g,d,e)}function
au(c,b){if(c.fun)return au(c.fun,b);var
a=c.length,d=a-b.length;if(d==0)return c.apply(null,b);else
if(d<0)return au(c.apply(null,b.slice(0,a)),b.slice(a));else
return function(a){return au(c,b.concat([a]))}}function
kf(a){if(isFinite(a)){if(Math.abs(a)>=2.22507385850720138e-308)return 0;if(a!=0)return 1;return 2}return isNaN(a)?4:3}function
ks(a,b){var
c=a[3]<<16,d=b[3]<<16;if(c>d)return 1;if(c<d)return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
kD(a,b){if(a<b)return-1;if(a==b)return 0;return 1}function
bn(a,b,c){var
e=[];for(;;){if(!(c&&a===b))if(a
instanceof
C)if(b
instanceof
C){if(a!==b){var
d=a.compare(b);if(d!=0)return d}}else
return 1;else
if(a
instanceof
Array&&a[0]===(a[0]|0)){var
f=a[0];if(f===m)f=0;if(f===$){a=a[1];continue}else
if(b
instanceof
Array&&b[0]===(b[0]|0)){var
g=b[0];if(g===m)g=0;if(g===$){b=b[1];continue}else
if(f!=g)return f<g?-1:1;else
switch(f){case
n:var
d=kD(a[2],b[2]);if(d!=0)return d;break;case
251:aV("equal: abstract value");case
w:var
d=ks(a,b);if(d!=0)return d;break;default:if(a.length!=b.length)return a.length<b.length?-1:1;if(a.length>1)e.push(a,b,1)}}else
return 1}else
if(b
instanceof
C||b
instanceof
Array&&b[0]===(b[0]|0))return-1;else
if(typeof
a!=B&&a&&a.compare)return a.compare(b,c);else{if(a<b)return-1;if(a>b)return 1;if(a!=b){if(!c)return NaN;if(a==a)return 1;if(b==b)return-1}}if(e.length==0)return 0;var
h=e.pop();b=e.pop();a=e.pop();if(h+1<a.length)e.push(a,b,h+1);a=a[h];b=b[h]}}function
kg(a,b){return bn(a,b,true)}function
kh(){return 0}function
fI(a){this.bytes=d;this.len=a}fI.prototype=new
C();function
fL(a){if(a<0)aV("String.create");return new
fI(a)}function
kj(a,b){return+(bn(a,b,false)==0)}function
kk(a,b,c,d){a.fill(b,c,d)}function
dp(a){a=a.toString();var
e=a.length;if(e>31)aV("format_int: format too long");var
b={justify:bh,signstyle:aF,filler:_,alternate:false,base:0,signedconv:false,width:0,uppercase:false,sign:1,prec:-1,conv:c_};for(var
d=0;d<e;d++){var
c=a.charAt(d);switch(c){case
aF:b.justify=aF;break;case
bh:case
_:b.signstyle=c;break;case
f:b.filler=f;break;case
bg:b.alternate=true;break;case
fB:case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":b.width=0;while(c=a.charCodeAt(d)-48,c>=0&&c<=9){b.width=b.width*10+c;d++}d--;break;case
aT:b.prec=0;d++;while(c=a.charCodeAt(d)-48,c>=0&&c<=9){b.prec=b.prec*10+c;d++}d--;case"d":case"i":b.signedconv=true;case"u":b.base=10;break;case
dc:b.base=16;break;case"X":b.base=16;b.uppercase=true;break;case"o":b.base=8;break;case
bl:case
c_:case
bf:b.signedconv=true;b.conv=c;break;case"E":case"F":case"G":b.signedconv=true;b.uppercase=true;b.conv=c.toLowerCase();break}}return b}function
dn(a,b){if(a.uppercase)b=b.toUpperCase();var
g=b.length;if(a.signedconv&&(a.sign<0||a.signstyle!=aF))g++;if(a.alternate){if(a.base==8)g+=1;if(a.base==16)g+=2}var
c=d;if(a.justify==bh&&a.filler==_)for(var
e=g;e<a.width;e++)c+=_;if(a.signedconv)if(a.sign<0)c+=aF;else
if(a.signstyle!=aF)c+=a.signstyle;if(a.alternate&&a.base==8)c+=f;if(a.alternate&&a.base==16)c+="0x";if(a.justify==bh&&a.filler==f)for(var
e=g;e<a.width;e++)c+=f;c+=b;if(a.justify==aF)for(var
e=g;e<a.width;e++)c+=_;return new
y(c)}function
kl(a,b){var
c,g=dp(a),e=g.prec<0?6:g.prec;if(b<0){g.sign=-1;b=-b}if(isNaN(b)){c=e9;g.filler=_}else
if(!isFinite(b)){c="inf";g.filler=_}else
switch(g.conv){case
bl:var
c=b.toExponential(e),d=c.length;if(c.charAt(d-3)==bl)c=c.slice(0,d-1)+f+c.slice(d-1);break;case
c_:c=b.toFixed(e);break;case
bf:e=e?e:1;c=b.toExponential(e-1);var
j=c.indexOf(bl),i=+c.slice(j+1);if(i<-4||b.toFixed(0).length>e){var
d=j-1;while(c.charAt(d)==f)d--;if(c.charAt(d)==aT)d--;c=c.slice(0,d+1)+c.slice(j);d=c.length;if(c.charAt(d-3)==bl)c=c.slice(0,d-1)+f+c.slice(d-1);break}else{var
h=e;if(i<0){h-=i+1;c=b.toFixed(h)}else
while(c=b.toFixed(h),c.length>e+1)h--;if(h){var
d=c.length-1;while(c.charAt(d)==f)d--;if(c.charAt(d)==aT)d--;c=c.slice(0,d+1)}}break}return dn(g,c)}function
km(a,b){if(a.toString()==fu)return new
y(d+b);var
c=dp(a);if(b<0)if(c.signedconv){c.sign=-1;b=-b}else
b>>>=0;var
e=b.toString(c.base);if(c.prec>=0){c.filler=_;var
g=c.prec-e.length;if(g>0)e=bq(g,f)+e}return dn(c,e)}function
fV(a){throw a}function
fX(){fV(u[7])}function
dm(a){var
b=a.length;this.array=a;this.len=this.last=b}dm.prototype=new
C();function
aI(){this.content={}}aI.prototype={exists:function(a){return this.content[a]?1:0},mk:function(a,b){this.content[a]=b},get:function(a){return this.content[a]},list:function(){var
a=[];for(var
b
in
this.content)a.push(b);return a},remove:function(a){delete
this.content[a]}};var
ce=new
aI();ce.mk(d,new
aI());function
S(a){dq(u[2],a)}function
fW(a){a=a
instanceof
C?a.toString():a;S(a+": No such file or directory")}function
cb(a){var
b=ce;for(var
c=0;c<a.length;c++){if(!(b.exists&&b.exists(a[c])))fW(a.orig);b=b.get(a[c])}return b}var
ki=at;function
bo(a){a=a
instanceof
C?a.toString():a;if(a.charCodeAt(0)!=47)a=ki+a;var
e=a.split(at),b=[];for(var
c=0;c<e.length;c++)switch(e[c]){case"..":if(b.length>1)b.pop();break;case
aT:case
d:if(b.length==0)b.push(d);break;default:b.push(e[c]);break}b.orig=a;return b}function
aU(a){this.data=a}aU.prototype={content:function(){return this.data},truncate:function(){this.data.length=0}};function
kn(a){var
c=bo(a),b=cb(c);if(b
instanceof
aU)return new
dm(b.content());fX()}function
fM(a,b){var
e=bo(a),c=ce;for(var
f=0;f<e.length-1;f++){var
d=e[f];if(!c.exists(d))c.mk(d,new
aI());c=c.get(d);if(!(c
instanceof
aI))S(e.orig+c6)}var
d=e[e.length-1];if(c.exists(d))S(e.orig+c6);if(b
instanceof
aI)c.mk(d,b);else
if(b
instanceof
aU)c.mk(d,b);else
if(b
instanceof
C)c.mk(d,new
aU(b.getArray()));else
if(b
instanceof
Array)c.mk(d,new
aU(b));else
if(b.toString)c.mk(d,new
aU(new
C(b.toString()).getArray()));else
aV("caml_fs_register")}function
ko(){return 0}function
kp(a,b){return+(bn(a,b,false)>=0)}function
fN(a){if(!isFinite(a)){if(isNaN(a))return[w,1,0,fx];return a>0?[w,0,0,32752]:[w,0,0,fx]}var
f=a>=0?0:32768;if(f)a=-a;var
b=Math.floor(Math.LOG2E*Math.log(a))+1023;if(b<=0){b=0;a/=Math.pow(2,-1026)}else{a/=Math.pow(2,b-1027);if(a<16){a*=2;b-=1}if(b==0)a/=2}var
d=Math.pow(2,24),c=a|0;a=(a-c)*d;var
e=a|0;a=(a-e)*d;var
g=a|0;c=c&15|f|b<<4;return[w,g,e,c]}if(!Math.imul)Math.imul=function(a,b){return((a>>16)*b<<16)+(a&b5)*b|0};var
bp=Math.imul,kq=function(){var
q=256;function
c(a,b){return a<<b|a>>>32-b}function
g(a,b){b=bp(b,3432918353);b=c(b,15);b=bp(b,461845907);a^=b;a=c(a,13);return(a*5|0)+3864292196|0}function
t(a){a^=a>>>16;a=bp(a,2246822507);a^=a>>>13;a=bp(a,3266489909);a^=a>>>16;return a}function
u(a,b){var
d=b[1]|b[2]<<24,c=b[2]>>>8|b[3]<<16;a=g(a,d);a=g(a,c);return a}function
v(a,b){var
d=b[1]|b[2]<<24,c=b[2]>>>8|b[3]<<16;a=g(a,c^d);return a}function
y(a,b){var
e=b.length,c,d;for(c=0;c+4<=e;c+=4){d=b.charCodeAt(c)|b.charCodeAt(c+1)<<8|b.charCodeAt(c+2)<<16|b.charCodeAt(c+3)<<24;a=g(a,d)}d=0;switch(e&3){case
3:d=b.charCodeAt(c+2)<<16;case
2:d|=b.charCodeAt(c+1)<<8;case
1:d|=b.charCodeAt(c);a=g(a,d)}a^=e;return a}function
x(a,b){var
e=b.length,c,d;for(c=0;c+4<=e;c+=4){d=b[c]|b[c+1]<<8|b[c+2]<<16|b[c+3]<<24;a=g(a,d)}d=0;switch(e&3){case
3:d=b[c+2]<<16;case
2:d|=b[c+1]<<8;case
1:d|=b[c];a=g(a,d)}a^=e;return a}return function(a,b,c,d){var
k,l,m,i,h,f,e,j,p;i=b;if(i<0||i>q)i=q;h=a;f=c;k=[d];l=0;m=1;while(l<m&&h>0){e=k[l++];if(e
instanceof
Array&&e[0]===(e[0]|0))switch(e[0]){case
n:f=g(f,e[2]);h--;break;case
$:k[--l]=e[1];break;case
w:f=v(f,e);h--;break;default:var
s=e.length-1<<10|e[0];f=g(f,s);for(j=1,p=e.length;j<p;j++){if(m>=i)break;k[m++]=e[j]}break}else
if(e
instanceof
C){var
o=e.array;if(o)f=x(f,o);else{var
r=e.getFullBytes();f=y(f,r)}h--;break}else
if(e===(e|0)){f=g(f,e+e+1);h--}else
if(e===+e){f=u(f,fN(e));h--;break}}f=t(f);return f&bW}}();function
kA(a){return[a[3]>>8,a[3]&w,a[2]>>16,a[2]>>8&w,a[2]&w,a[1]>>16,a[1]>>8&w,a[1]&w]}function
kr(e,b,c){var
d=0;function
f(a){b--;if(e<0||b<0)return;if(a
instanceof
Array&&a[0]===(a[0]|0))switch(a[0]){case
n:e--;d=d*c7+a[2]|0;break;case
$:b++;f(a);break;case
w:e--;d=d*c7+a[1]+(a[2]<<24)|0;break;default:e--;d=d*19+a[0]|0;for(var
c=a.length-1;c>0;c--)f(a[c])}else
if(a
instanceof
C){e--;var
g=a.array,h=a.getLen();if(g)for(var
c=0;c<h;c++)d=d*19+g[c]|0;else{var
i=a.getFullBytes();for(var
c=0;c<h;c++)d=d*19+i.charCodeAt(c)|0}}else
if(a===(a|0)){e--;d=d*c7+a|0}else
if(a===+a){e--;var
j=kA(fN(a));for(var
c=7;c>=0;c--)d=d*19+j[c]|0}}f(c);return d&bW}function
kv(a){return(a[3]|a[2]|a[1])==0}function
ky(a){return[w,a&aa,a>>24&aa,a>>31&b5]}function
kz(a,b){var
c=a[1]-b[1],d=a[2]-b[2]+(c>>24),e=a[3]-b[3]+(d>>24);return[w,c&aa,d&aa,e&b5]}function
fP(a,b){if(a[3]>b[3])return 1;if(a[3]<b[3])return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
fO(a){a[3]=a[3]<<1|a[2]>>23;a[2]=(a[2]<<1|a[1]>>23)&aa;a[1]=a[1]<<1&aa}function
kw(a){a[1]=(a[1]>>>1|a[2]<<23)&aa;a[2]=(a[2]>>>1|a[3]<<23)&aa;a[3]=a[3]>>>1}function
kC(a,b){var
e=0,d=a.slice(),c=b.slice(),f=[w,0,0,0];while(fP(d,c)>0){e++;fO(c)}while(e>=0){e--;fO(f);if(fP(d,c)>=0){f[1]++;d=kz(d,c)}kw(c)}return[0,f,d]}function
kB(a){return a[1]|a[2]<<24}function
ku(a){return a[3]<<16<0}function
kx(a){var
b=-a[1],c=-a[2]+(b>>24),d=-a[3]+(c>>24);return[w,b&aa,c&aa,d&b5]}function
kt(a,b){var
c=dp(a);if(c.signedconv&&ku(b)){c.sign=-1;b=kx(b)}var
e=d,j=ky(c.base),i="0123456789abcdef";do{var
h=kC(b,j);b=h[1];e=i.charAt(kB(h[2]))+e}while(!kv(b));if(c.prec>=0){c.filler=_;var
g=c.prec-e.length;if(g>0)e=bq(g,f)+e}return dn(c,e)}function
k2(a){var
b=0,c=10,d=a.get(0)==45?(b++,-1):1;if(a.get(b)==48)switch(a.get(b+1)){case
de:case
88:c=16;b+=2;break;case
c3:case
79:c=8;b+=2;break;case
98:case
66:c=2;b+=2;break}return[b,d,c]}function
fU(a){if(a>=48&&a<=57)return a-48;if(a>=65&&a<=90)return a-55;if(a>=97&&a<=122)return a-87;return-1}function
ca(a){dq(u[3],a)}function
kE(a){var
g=k2(a),f=g[0],h=g[1],d=g[2],i=-1>>>0,e=a.get(f),c=fU(e);if(c<0||c>=d)ca(bV);var
b=c;for(;;){f++;e=a.get(f);if(e==95)continue;c=fU(e);if(c<0||c>=d)break;b=d*b+c;if(b>i)ca(bV)}if(f!=a.getLen())ca(bV);b=h*b;if(d==10&&(b|0)!=b)ca(bV);return b|0}function
kF(a){return+(a>31&&a<127)}function
kG(a,b,c){return a.apply(b,c.slice(1))}function
kH(a){return a.getFullBytes()}function
kI(){var
c=b.console?b.console:{},d=["log","debug","info","warn","error","assert","dir","dirxml","trace","group","groupCollapsed","groupEnd","time","timeEnd"];function
e(){}for(var
a=0;a<d.length;a++)if(!c[d[a]])c[d[a]]=e;return c}var
cc={amp:/&/g,lt:/</g,quot:/\"/g,all:/[&<\"]/};function
kJ(a){if(!cc.all.test(a))return a;return a.replace(cc.amp,"&amp;").replace(cc.lt,"&lt;").replace(cc.quot,"&quot;")}function
kK(){var
a=b.navigator?b.navigator.userAgent:d;return a.indexOf("MSIE")!=-1&&a.indexOf("Opera")!=0}function
kL(a){return a()}function
kM(a){return new
C(a)}function
kN(a){var
c=Array.prototype.slice;return function(){var
b=arguments.length>0?c.call(arguments):[undefined];return au(a,b)}}function
kO(a,b){return+(bn(a,b,false)<=0)}function
kP(a,b){var
d=[0];for(var
c=1;c<=a;c++)d[c]=b;return d}var
kQ=function(){function
m(a,b){return a+b|0}function
l(a,b,c,d,e,f){b=m(m(b,a),m(d,f));return m(b<<e|b>>>32-e,c)}function
h(a,b,c,d,e,f,g){return l(b&c|~b&d,a,b,e,f,g)}function
i(a,b,c,d,e,f,g){return l(b&d|c&~d,a,b,e,f,g)}function
j(a,b,c,d,e,f,g){return l(b^c^d,a,b,e,f,g)}function
k(a,b,c,d,e,f,g){return l(c^(b|~d),a,b,e,f,g)}function
n(a,b){var
g=b;a[g>>2]|=128<<8*(g&3);for(g=(g&~3)+8;(g&63)<60;g+=4)a[(g>>2)-1]=0;a[(g>>2)-1]=b<<3;a[g>>2]=b>>29&536870911;var
l=[1732584193,4023233417,2562383102,271733878];for(g=0;g<a.length;g+=16){var
c=l[0],d=l[1],e=l[2],f=l[3];c=h(c,d,e,f,a[g+0],7,3614090360);f=h(f,c,d,e,a[g+1],12,3905402710);e=h(e,f,c,d,a[g+2],17,606105819);d=h(d,e,f,c,a[g+3],22,3250441966);c=h(c,d,e,f,a[g+4],7,4118548399);f=h(f,c,d,e,a[g+5],12,1200080426);e=h(e,f,c,d,a[g+6],17,2821735955);d=h(d,e,f,c,a[g+7],22,4249261313);c=h(c,d,e,f,a[g+8],7,1770035416);f=h(f,c,d,e,a[g+9],12,2336552879);e=h(e,f,c,d,a[g+10],17,4294925233);d=h(d,e,f,c,a[g+11],22,2304563134);c=h(c,d,e,f,a[g+12],7,1804603682);f=h(f,c,d,e,a[g+13],12,4254626195);e=h(e,f,c,d,a[g+14],17,2792965006);d=h(d,e,f,c,a[g+15],22,1236535329);c=i(c,d,e,f,a[g+1],5,4129170786);f=i(f,c,d,e,a[g+6],9,3225465664);e=i(e,f,c,d,a[g+11],14,643717713);d=i(d,e,f,c,a[g+0],20,3921069994);c=i(c,d,e,f,a[g+5],5,3593408605);f=i(f,c,d,e,a[g+10],9,38016083);e=i(e,f,c,d,a[g+15],14,3634488961);d=i(d,e,f,c,a[g+4],20,3889429448);c=i(c,d,e,f,a[g+9],5,568446438);f=i(f,c,d,e,a[g+14],9,3275163606);e=i(e,f,c,d,a[g+3],14,4107603335);d=i(d,e,f,c,a[g+8],20,1163531501);c=i(c,d,e,f,a[g+13],5,2850285829);f=i(f,c,d,e,a[g+2],9,4243563512);e=i(e,f,c,d,a[g+7],14,1735328473);d=i(d,e,f,c,a[g+12],20,2368359562);c=j(c,d,e,f,a[g+5],4,4294588738);f=j(f,c,d,e,a[g+8],11,2272392833);e=j(e,f,c,d,a[g+11],16,1839030562);d=j(d,e,f,c,a[g+14],23,4259657740);c=j(c,d,e,f,a[g+1],4,2763975236);f=j(f,c,d,e,a[g+4],11,1272893353);e=j(e,f,c,d,a[g+7],16,4139469664);d=j(d,e,f,c,a[g+10],23,3200236656);c=j(c,d,e,f,a[g+13],4,681279174);f=j(f,c,d,e,a[g+0],11,3936430074);e=j(e,f,c,d,a[g+3],16,3572445317);d=j(d,e,f,c,a[g+6],23,76029189);c=j(c,d,e,f,a[g+9],4,3654602809);f=j(f,c,d,e,a[g+12],11,3873151461);e=j(e,f,c,d,a[g+15],16,530742520);d=j(d,e,f,c,a[g+2],23,3299628645);c=k(c,d,e,f,a[g+0],6,4096336452);f=k(f,c,d,e,a[g+7],10,1126891415);e=k(e,f,c,d,a[g+14],15,2878612391);d=k(d,e,f,c,a[g+5],21,4237533241);c=k(c,d,e,f,a[g+12],6,1700485571);f=k(f,c,d,e,a[g+3],10,2399980690);e=k(e,f,c,d,a[g+10],15,4293915773);d=k(d,e,f,c,a[g+1],21,2240044497);c=k(c,d,e,f,a[g+8],6,1873313359);f=k(f,c,d,e,a[g+15],10,4264355552);e=k(e,f,c,d,a[g+6],15,2734768916);d=k(d,e,f,c,a[g+13],21,1309151649);c=k(c,d,e,f,a[g+4],6,4149444226);f=k(f,c,d,e,a[g+11],10,3174756917);e=k(e,f,c,d,a[g+2],15,718787259);d=k(d,e,f,c,a[g+9],21,3951481745);l[0]=m(c,l[0]);l[1]=m(d,l[1]);l[2]=m(e,l[2]);l[3]=m(f,l[3])}var
o=[];for(var
g=0;g<4;g++)for(var
n=0;n<4;n++)o[g*4+n]=l[g]>>8*n&w;return o}return function(a,b,c){var
h=[];if(a.array){var
f=a.array;for(var
d=0;d<c;d+=4){var
e=d+b;h[d>>2]=f[e]|f[e+1]<<8|f[e+2]<<16|f[e+3]<<24}for(;d<c;d++)h[d>>2]|=f[d+b]<<8*(d&3)}else{var
g=a.getFullBytes();for(var
d=0;d<c;d+=4){var
e=d+b;h[d>>2]=g.charCodeAt(e)|g.charCodeAt(e+1)<<8|g.charCodeAt(e+2)<<16|g.charCodeAt(e+3)<<24}for(;d<c;d++)h[d>>2]|=g.charCodeAt(d+b)<<8*(d&3)}return new
dm(n(h,c))}}();function
fQ(a){if(!a.opened)S("Cannot flush a closed channel");if(a.buffer==d)return 0;if(a.output)switch(a.output.length){case
2:a.output(a,a.buffer);break;default:a.output(a.buffer)}a.buffer=d}function
lc(a){var
c=bo(a),b=cb(c);return b
instanceof
aI?1:0}function
la(a){var
b=ce,d=bo(a),e;for(var
c=0;c<d.length;c++){if(b.auto)e=b.auto;if(!(b.exists&&b.exists(d[c])))return e?e(d.join(at)):0;b=b.get(d[c])}return 1}function
br(a,b,c){if(u.fds===undefined)u.fds=new
Array();c=c?c:{};var
d={};d.array=b;d.offset=c.append?d.array.length:0;d.flags=c;u.fds[a]=d;u.fd_last_idx=a;return a}function
ll(a,b,c){var
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
f=a.toString(),h=bo(a);if(d.rdonly&&d.wronly)S(f+" : flags Open_rdonly and Open_wronly are not compatible");if(d.text&&d.binary)S(f+" : flags Open_text and Open_binary are not compatible");if(la(a)){if(lc(a))S(f+" : is a directory");if(d.create&&d.excl)S(f+c6);var
g=u.fd_last_idx?u.fd_last_idx:0,e=cb(h);if(d.truncate)e.truncate();return br(g+1,e.content(),d)}else
if(d.create){var
g=u.fd_last_idx?u.fd_last_idx:0;fM(a,[]);var
e=cb(h);return br(g+1,e.content(),d)}else
fW(a)}br(0,[]);br(1,[]);br(2,[]);function
kR(a){var
b=u.fds[a];if(b.flags.wronly)S(fF+a+" is writeonly");return{data:b,fd:a,opened:true}}function
li(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
c=b.console;c&&c.log&&c.log(a)}var
cd=new
Array();function
k7(a,b){var
e=new
C(b),d=e.getLen();for(var
c=0;c<d;c++)a.data.array[a.data.offset+c]=e.get(c);a.data.offset+=d;return 0}function
kS(a){var
b;switch(a){case
1:b=li;break;case
2:b=dr;break;default:b=k7}var
e=u.fds[a];if(e.flags.rdonly)S(fF+a+" is readonly");var
c={data:e,fd:a,opened:true,buffer:d,output:b};cd[c.fd]=c;return c}function
kT(){var
a=0;for(var
b
in
cd)if(cd[b].opened)a=[0,cd[b],a];return a}function
fR(a,b,c,d){if(!a.opened)S("Cannot output to a closed channel");var
f;if(c==0&&b.getLen()==d)f=b;else{f=fL(d);fK(b,c,f,0,d)}var
e=f.toString(),g=e.lastIndexOf("\n");if(g<0)a.buffer+=e;else{a.buffer+=e.substr(0,g+1);fQ(a);a.buffer+=e.substr(g+1)}}function
fT(a){return new
C(a)}function
kU(a,b){var
c=fT(String.fromCharCode(b));fR(a,c,0,1)}function
k3(){fV(u[6])}function
kV(a,b){if(b==0)k3();return a%b}function
kX(a,b){return+(bn(a,b,false)!=0)}function
kY(a){return+(a
instanceof
Array)}function
kZ(a,b){a[0]=b;return 0}function
k0(a){return a
instanceof
Array?a[0]:fb}function
k4(a,b){u[a+1]=b}var
fS={};function
k5(a,b){fS[a.toString()]=b;return 0}var
k1=0;function
k6(a){a[2]=k1++;return a}function
k8(a,b){var
c=a.fullBytes,d=b.fullBytes;if(c!=null&&d!=null)return c==d?1:0;return a.getFullBytes()==b.getFullBytes()?1:0}function
k9(a,b){return 1-k8(a,b)}function
k_(){return 32}function
k$(a){if(b.quit)b.quit(a);aV("Function 'exit' not implemented")}function
lb(){fX()}function
ld(){var
a=new
Date()^4294967295*Math.random();return{valueOf:function(){return a},0:0,1:a,length:2}}function
le(a){var
b=1;while(a&&a.joo_tramp){a=a.joo_tramp.apply(null,a.joo_args);b++}return a}function
lf(a,b){return{joo_tramp:a,joo_args:b}}function
lg(a,b){if(typeof
b==="function"){a.fun=b;return 0}if(b.fun){a.fun=b.fun;return 0}var
c=b.length;while(c--)a[c]=b[c];return 0}function
kW(a){return fS[a]}function
lh(a){if(a
instanceof
Array)return a;if(b.RangeError&&a
instanceof
b.RangeError&&a.message&&a.message.match(/maximum call stack/i))return[0,u[9]];if(b.InternalError&&a
instanceof
b.InternalError&&a.message&&a.message.match(/too much recursion/i))return[0,u[9]];if(a
instanceof
b.Error)return[0,kW(e8),a];return[0,u[3],new
y(String(a))]}var
i=kc,k=kd,ar=fK,bT=kg,ah=fL,cS=kl,bQ=km,cQ=fM,eU=kE,cT=kF,E=kH,eX=kJ,as=kM,be=kN,r=kP,eR=fQ,eQ=kS,eS=kU,eW=kV,eT=bp,c=fT,Y=k0,ag=k4,cR=k5,a=k6,Z=k9,eV=lb,bU=le,aj=lf,s=lh;function
j(a,b){return a.length==1?a(b):au(a,[b])}function
z(a,b,c){return a.length==2?a(b,c):au(a,[b,c])}function
K(a,b,c,d){return a.length==3?a(b,c,d):au(a,[b,c,d])}function
bR(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):au(a,[b,c,d,e,f])}cQ("/image_info.json",'[0,[0,"ovibos","Ovibos_moschatus_attackierend2_.jpg","By BS Thurner Hof [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a>]",800,489,[0,[0,"Ovibovini","fr",""],[0,"B\xc5\x93uf musqu\xc3\xa9","fr","B%C5%93uf_musqu%C3%A9"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Ovibos_moschatus_attackierend2_.jpg/800px-Ovibos_moschatus_attackierend2_.jpg"]],[0,"capra","Saanenziege.jpg","Author information on Wikimedia Commons [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/2.5-2.0-1.0\\">CC-BY-SA-2.5-2.0-1.0</a>]",332,257,[0,[0,"Tan (goat pattern)","en","Tan_(goat_pattern)"],[0,"Saanen goat","en","Saanen_goat"],[0,"Saanen (race caprine)","fr","Saanen_(race_caprine)"],[0,"Ch\xc3\xa8vre","fr","Ch%C3%A8vre"],[0,"P\xc3\xa9lardon","fr","P%C3%A9lardon"],[0,"Rocamadour (fromage)","fr","Rocamadour_(fromage)"]],[0,"http://upload.wikimedia.org/wikipedia/commons/f/f5/Saanenziege.jpg"]],[0,"rupicapra","Rupicapra_rupicapra_0.jpg","By Andreas Tille [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0\\">CC-BY-SA-3.0-2.5-2.0-1.0</a>]",800,640,[0,[0,"Rupicapra","en",""],[0,"Alps","en",""],[0,"Lac du Crachet","fr","Lac_du_Crachet"],[0,"Val Trupchun","fr","Val_Trupchun"],[0,"Chamois","fr",""],[0,"Alpes","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Rupicapra_rupicapra_0.jpg/800px-Rupicapra_rupicapra_0.jpg"]],[0,"mouton","Schaf_bei_Woodhenge1.jpg","Author information on Wikimedia Commons [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a>]",800,600,[0,[0,"Ovis","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Schaf_bei_Woodhenge1.jpg/800px-Schaf_bei_Woodhenge1.jpg"]],[0,"mouflon","Mouflon_2.jpg","<a target=\\"_blank\\" href=\\"http://en.wikipedia.org/wiki/User:Jdennett77\\">Jdennett77</a> [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by/2.5\\">CC-BY-2.5</a>]",800,598,[0,[0,"Ovis","en",""],[0,"Mouflon","en",""],[0,"Ovina","fr",""],[0,"Ovis orientalis","fr","Ovis_orientalis"],[0,"Ovis","fr",""],[0,"Mouflon m\xc3\xa9diterran\xc3\xa9en","fr","Mouflon_m%C3%A9diterran%C3%A9en"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mouflon_2.jpg/800px-Mouflon_2.jpg"]],[0,"connochaetes","Wildebeest_Steve_Evans.jpg","By Steve Evans from Citizen of the World (South Africa) [<a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by/2.0\\">CC-BY-2.0</a>]",800,533,[0,[0,"Gnou","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Wildebeest_Steve_Evans.jpg/800px-Wildebeest_Steve_Evans.jpg"]],[0,"oryx","Oryx_samburu.jpg","By \\"Daniel Fafard (Dreamdan)\\" (Auteur) [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0\\">CC-BY-SA-3.0-2.5-2.0-1.0</a>]",800,545,[0,[0,"Oryx","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Oryx_samburu.jpg/800px-Oryx_samburu.jpg"]],[0,"aepyceros","Serengeti_Impala3.jpg","By Ikiwaner [<a target=\\"_blank\\" href =\\"http://www.gnu.org/licenses/old-licenses/fdl-1.2.html\\">GFDL 1.2</a>]",800,800,[0,[0,"Impala","en",""],[0,"Parc national de l\'\xc3\xaele Ndere","fr","Parc_national_de_l%27%C3%AEle_Ndere"],[0,"Impala","fr",""],[0,"Gazelle","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Serengeti_Impala3.jpg/800px-Serengeti_Impala3.jpg"]],[0,"bison","Bison_bison_009.jpg","By Donnie from WV, USA (VAC2010 1236\\nUploaded by berichard) [<a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/2.0\\">CC-BY-SA-2.0</a>]",800,506,[0,[0,"Bison d\'Am\xc3\xa9rique du Nord","fr","Bison_d%27Am%C3%A9rique_du_Nord"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Bison_bison_009.jpg/800px-Bison_bison_009.jpg"]],[0,"bos","Kuh_in_transkei.jpg","By Amada44 [Public domain]",800,532,[0,[0,"Afrikaner cattle","en","Afrikaner_cattle"],[0,"\xc3\x89levage bovin en Afrique du Sud","fr","%C3%89levage_bovin_en_Afrique_du_Sud"],[0,"Sanga (rameau)","fr","Sanga_(rameau)"],[0,"Afrikaner (race bovine)","fr","Afrikaner_(race_bovine)"],[0,"Bos taurus","fr","Bos_taurus"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Kuh_in_transkei.jpg/800px-Kuh_in_transkei.jpg"]],[0,"syncerus","Syncerus_caffer.jpg","By PaulRae\\nderivative work: Berichard (talk)\\n\\n (African_Buffalo.JPG) [<a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by/2.5\\">CC-BY-2.5</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a> or <a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a>]",800,697,[0,[0,"Buffle d\'Afrique","fr","Buffle_d%27Afrique"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Syncerus_caffer.jpg/800px-Syncerus_caffer.jpg"]],[0,"cervus","Cervus_elaphus_Luc_Viatour_6.jpg","By Lviatour [<a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0\\">CC-BY-SA-3.0</a>]",800,533,[0,[0,"Cerf \xc3\xa9laphe","fr","Cerf_%C3%A9laphe"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Cervus_elaphus_Luc_Viatour_6.jpg/800px-Cervus_elaphus_Luc_Viatour_6.jpg"]],[0,"alces","Moose-Gustav.jpg","Author information on Wikimedia Commons [Attribution or <a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by/2.5\\">CC-BY-2.5</a>]",600,450,[0,[0,"Red Marsh Nature Reserve","en","Red_Marsh_Nature_Reserve"],[0,"Wolves and moose on Isle Royale","en","Wolves_and_moose_on_Isle_Royale"],[0,"Alces alces","fr","Alces_alces"]],[0,"http://upload.wikimedia.org/wikipedia/commons/c/c9/Moose-Gustav.jpg"]],[0,"capreolus","Chevreuil_repos.jpg","By Asabengurtza [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0\\">CC-BY-SA-3.0-2.5-2.0-1.0</a>]",800,600,[0,[0,"Felix Salten","fr","Felix_Salten"],[0,"Chevreuil","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Chevreuil_repos.jpg/800px-Chevreuil_repos.jpg"]],[0,"okapia","Okapi2.jpg","Author information on Wikimedia Commons [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a>]",800,695,[0,[0,"Donodon","en",""],[0,"Dorsetodon","en",""],[0,"Drescheratherium","en",""],[0,"Henkelotherium","en",""],[0,"Brancatherulum","en",""],[0,"Tragulina","en",""],[0,"Harbor seal","en","Harbor_seal"],[0,"Manzano Mountain Cottontail","en","Manzano_Mountain_Cottontail"],[0,"Mixodectidae","en",""],[0,"Robust Cottontail","en","Robust_Cottontail"],[0,"Euthlastus","en",""],[0,"Comotherium","en",""],[0,"Dryolestes","en",""],[0,"Laolestes","en",""],[0,"Miccylotyrans","en",""],[0,"Parcs nationaux congolais (RDC)","fr","Parcs_nationaux_congolais_(RDC)"],[0,"1901 en science","fr","1901_en_science"],[0,"G\xc3\xa9ographie de la R\xc3\xa9publique d\xc3\xa9mocratique du Congo","fr","G%C3%A9ographie_de_la_R%C3%A9publique_d%C3%A9mocratique_du_Congo"],[0,"Okapi","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Okapi2.jpg/800px-Okapi2.jpg"]],[0,"giraffa","Giraffa_camelopardalis_angolensis.jpg","<p>\xc2\xa9 Hans Hillewaert\xc2\xa0/\xc2\xa0<a target=\\"_blank\\" href=\\"http://creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a></p>",800,1067,[0,[0,"Giraffe","en",""],[0,"Oshikoto","fr",""],[0,"Girafe","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Giraffa_camelopardalis_angolensis.jpg/800px-Giraffa_camelopardalis_angolensis.jpg"]],[0,"hippopotamus","Hippo_pod_edit.jpg","By Paul Maritz [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a>]",800,533,[0,[0,"Mammalia in the 10th edition of Systema Naturae","en","Mammalia_in_the_10th_edition_of_Systema_Naturae"],[0,"Largest organisms","en","Largest_organisms"],[0,"Wildlife of Zambia","en","Wildlife_of_Zambia"],[0,"Cetruminantia","en",""],[0,"Whippomorpha","en",""],[0,"Kasungu National Park","en","Kasungu_National_Park"],[0,"South Luangwa National Park","en","South_Luangwa_National_Park"],[0,"Democratic Republic of the Congo","en","Democratic_Republic_of_the_Congo"],[0,"Hippopotamidae","en",""],[0,"Hippopotamus","en",""],[0,"Mammif\xc3\xa8re aquatique","fr","Mammif%C3%A8re_aquatique"],[0,"Gabon","fr",""],[0,"Hippopotamus amphibius","fr","Hippopotamus_amphibius"],[0,"Hippopotamidae","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Hippo_pod_edit.jpg/800px-Hippo_pod_edit.jpg"]],[0,"orcinus","Killerwhales_jumping.jpg","By Pittman [Public domain]",450,313,[0,[0,"Mammals of Olympic National Park","en","Mammals_of_Olympic_National_Park"],[0,"Captive killer whales","en","Captive_killer_whales"],[0,"Life (BBC TV series)","en","Life_(BBC_TV_series)"],[0,"Flora and fauna of Greenland","en","Flora_and_fauna_of_Greenland"],[0,"Mammals of Antarctica","en","Mammals_of_Antarctica"],[0,"Bluespotted stingray","en","Bluespotted_stingray"],[0,"Cosmopolitan distribution","en","Cosmopolitan_distribution"],[0,"Megafauna","en",""],[0,"Killer whale","en","Killer_whale"],[0,"Dolphin","en",""],[0,"Orientation bibliographique en zoologie (taxinomie)","fr","Orientation_bibliographique_en_zoologie_(taxinomie)"],[0,"Superpr\xc3\xa9dateur","fr","Superpr%C3%A9dateur"],[0,"Parc national Olympique","fr","Parc_national_Olympique"],[0,"Orque","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/3/37/Killerwhales_jumping.jpg"]],[0,"phocoena","Daan_Close_Up.PNG","By AVampireTear [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a>]",675,583,[0,[0,"Harbour porpoise","en","Harbour_porpoise"],[0,"Marsouin commun","fr","Marsouin_commun"],[0,"Phocoenidae","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/2/28/Daan_Close_Up.PNG"]],[0,"monodon","Narwhals_breach.jpg","By Glenn Williams (National Institute of Standards and Technology) [Public domain]",800,509,[0,[0,"Ivory trade","en","Ivory_trade"],[0,"Tusk","en",""],[0,"Narwhal","en",""],[0,"Corne de licorne","fr","Corne_de_licorne"],[0,"D\xc3\xa9fense (dent)","fr","D%C3%A9fense_(dent)"],[0,"Narval","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Narwhals_breach.jpg/800px-Narwhals_breach.jpg"]],[0,"delphinapterus","Delphinapterus_leucas_head_3.jpg","<a target=\\"_blank\\" href=\\"http://commons.wikimedia.org/wiki/User:Stan_Shebs\\">Stan Shebs</a> [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0\\">CC-BY-SA-3.0</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/2.5\\">CC-BY-SA-2.5</a>]",800,573,[0,[0,"B\xc3\xa9luga (baleine)","fr","B%C3%A9luga_(baleine)"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Delphinapterus_leucas_head_3.jpg/800px-Delphinapterus_leucas_head_3.jpg"]],[0,"balaenoptera","Humpback_stellwagen_edit.jpg","By Whit Welles Wwelles14 [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by/3.0\\">CC-BY-3.0</a>]",800,453,[0,[0,"Silas D. Alben","en","Silas_D._Alben"],[0,"Stellwagen Bank National Marine Sanctuary","en","Stellwagen_Bank_National_Marine_Sanctuary"],[0,"National Recording Registry","en","National_Recording_Registry"],[0,"Cetartiodactyla","en",""],[0,"Cetology","en",""],[0,"Whale surfacing behaviour","en","Whale_surfacing_behaviour"],[0,"Whale watching","en","Whale_watching"],[0,"Humpback whale","en","Humpback_whale"],[0,"Baleen whale","en","Baleen_whale"],[0,"Whale","en",""],[0,"Cetacea","en",""],[0,"Baleine \xc3\xa0 bosse","fr","Baleine_%C3%A0_bosse"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Humpback_stellwagen_edit.jpg/800px-Humpback_stellwagen_edit.jpg"]],[0,"phacochoerus","Tarangire_Warzenschwein1.jpg","By Ikiwaner [<a target=\\"_blank\\" href =\\"http://www.gnu.org/licenses/old-licenses/fdl-1.2.html\\">GFDL 1.2</a>]",800,600,[0,[0,"Warthog","en",""],[0,"Phacoch\xc3\xa8re","fr","Phacoch%C3%A8re"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Tarangire_Warzenschwein1.jpg/800px-Tarangire_Warzenschwein1.jpg"]],[0,"sus","WildZwijn_cropped.jpg","By nl:User:GerardM (Image:WildZwijn.jpg) [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a>]",800,606,[0,[0,"Sanglier","fr",""],[0,"Fenouill\xc3\xa8des","fr","Fenouill%C3%A8des"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/6/61/WildZwijn_cropped.jpg/800px-WildZwijn_cropped.jpg"]],[0,"camel","07._Camel_Profile,_near_Silverton,_NSW,_07.07.2007.jpg","By Jjron [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a>]",800,985,[0,[0,"Mandora Marsh","en","Mandora_Marsh"],[0,"Australian feral camel","en","Australian_feral_camel"],[0,"Taboo food and drink","en","Taboo_food_and_drink"],[0,"Invasive species in Australia","en","Invasive_species_in_Australia"],[0,"Dromedary","en",""],[0,"Camelid","en",""],[0,"Tylopoda","en",""],[0,"Camel","en",""],[0,"Dromadaire australien","fr","Dromadaire_australien"],[0,"Dromadaire","fr",""],[0,"Camelidae","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/4/43/07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg/800px-07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg"]],[0,"lama","Lama_animal.jpg","Author information on Wikimedia Commons [<a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/2.5\\">CC-BY-SA-2.5</a>]",800,600,[0,[0,"Lama (animal)","fr","Lama_(animal)"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Lama_animal.jpg/800px-Lama_animal.jpg"]],[0,"lutra","Loutre_des_pyrenees_baronnies_2004.jpg","Author information on Wikimedia Commons [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a>]",594,394,[0,[0,"Lac Arpi","fr","Lac_Arpi"],[0,"Petite Amazonie des Pyr\xc3\xa9n\xc3\xa9es","fr","Petite_Amazonie_des_Pyr%C3%A9n%C3%A9es"],[0,"G\xc3\xa9ographie de la Charente","fr","G%C3%A9ographie_de_la_Charente"],[0,"Vis (rivi\xc3\xa8re)","fr","Vis_(rivi%C3%A8re)"],[0,"Lutra","fr",""],[0,"Loutre d\'Europe","fr","Loutre_d%27Europe"],[0,"Loutre","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/c/c3/Loutre_des_pyrenees_baronnies_2004.jpg"]],[0,"procyon","Procyon_lotor_1.jpg","Author information on Wikimedia Commons [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a>]",800,927,[0,[0,"Procyonidae","fr",""],[0,"Am\xc3\xa9rique du Nord","fr","Am%C3%A9rique_du_Nord"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Procyon_lotor_1.jpg/800px-Procyon_lotor_1.jpg"]],[0,"simocyon","Red_Panda.JPG","By User Bernard Landgraf on de.wikipedia.org [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a>]",800,534,[0,[0,"Wildlife of India","en","Wildlife_of_India"],[0,"Red panda","en","Red_panda"],[0,"Ailuridae","fr",""],[0,"Petit panda","fr","Petit_panda"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Red_Panda.JPG/800px-Red_Panda.JPG"]],[0,"mephitis","Striped_skunk.jpg","Author information on Wikimedia Commons [Public domain]",300,437,[0,[0,"Mammals of the Indiana Dunes","en","Mammals_of_the_Indiana_Dunes"],[0,"Mammals of New England","en","Mammals_of_New_England"],[0,"P\xc3\xa9p\xc3\xa9 le putois","fr","P%C3%A9p%C3%A9_le_putois"],[0,"Mouffette","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/6/63/Striped_skunk.jpg"]],[0,"mirounga","Mirounga_leonina_male.JPG","By B.navez (self-made (scan of paper photo)) [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0\\">CC-BY-SA-3.0-2.5-2.0-1.0</a>]",800,544,[0,[0,"Southern elephant seal","en","Southern_elephant_seal"],[0,"Largest organisms","en","Largest_organisms"],[0,"Elephant seal","en","Elephant_seal"],[0,"Carnivora","en",""],[0,"\xc3\x89l\xc3\xa9phant de mer du sud","fr","%C3%89l%C3%A9phant_de_mer_du_sud"],[0,"Province de Santa Cruz","fr","Province_de_Santa_Cruz"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Mirounga_leonina_male.JPG/800px-Mirounga_leonina_male.JPG"]],[0,"arctocephalus","Arctocephalus_galapagoensis2.jpg","By Kelly J. Kane [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by/3.0\\">CC-BY-3.0</a>]",800,800,[0,[0,"Gal\xc3\xa1pagos Sea Lion","en","Gal%C3%A1pagos_Sea_Lion"],[0,"Arctocephalus galapagoensis","fr","Arctocephalus_galapagoensis"],[0,"Nageoire","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Arctocephalus_galapagoensis2.jpg/800px-Arctocephalus_galapagoensis2.jpg"]],[0,"odobenus","Noaa-walrus30.jpg","Author information on Wikimedia Commons [Public domain]",700,455,[0,[0,"Odobenus","fr",""],[0,"Odobenidae","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/d/de/Noaa-walrus30.jpg"]],[0,"ursus","Polar_Bear_2004-11-15.jpg","By Ansgar Walk [<a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/2.5\\">CC-BY-SA-2.5</a>]",800,606,[0,[0,"Nordic countries","en","Nordic_countries"],[0,"Polar seas","en","Polar_seas"],[0,"Wapusk National Park","en","Wapusk_National_Park"],[0,"Polar region","en","Polar_region"],[0,"Megafauna","en",""],[0,"Bear","en",""],[0,"Parcs nationaux du Canada","fr","Parcs_nationaux_du_Canada"],[0,"Embl\xc3\xa8mes des provinces et territoires du Canada","fr","Embl%C3%A8mes_des_provinces_et_territoires_du_Canada"],[0,"Parc national Wapusk","fr","Parc_national_Wapusk"],[0,"Ours blanc","fr","Ours_blanc"],[0,"Oc\xc3\xa9an Arctique","fr","Oc%C3%A9an_Arctique"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Polar_Bear_2004-11-15.jpg/800px-Polar_Bear_2004-11-15.jpg"]],[0,"tremarctos","Spectacled_Bear_-_Houston_Zoo.jpg","By en:User:Cburnett [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a>]",800,728,[0,[0,"Ichigkat muja \xe2\x80\x93 Cordillera del Condor National Park","en","Ichigkat_muja_%E2%80%93_Cordillera_del_Condor_National_Park"],[0,"Serran\xc3\xada de los Churumbelos","en","Serran%C3%ADa_de_los_Churumbelos"],[0,"Tremarctos","en",""],[0,"Spectacled bear","en","Spectacled_bear"],[0,"Ours \xc3\xa0 lunettes","fr","Ours_%C3%A0_lunettes"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Spectacled_Bear_-_Houston_Zoo.jpg/800px-Spectacled_Bear_-_Houston_Zoo.jpg"]],[0,"ailuropoda","Grosser_Panda.JPG","By J. Patrick Fischer [<a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0\\">CC-BY-SA-3.0</a>]",800,533,[0,[0,"World Wide Fund for Nature","en","World_Wide_Fund_for_Nature"],[0,"Giant panda","en","Giant_panda"],[0,"Panda g\xc3\xa9ant","fr","Panda_g%C3%A9ant"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/800px-Grosser_Panda.JPG"]],[0,"canis","Wolf._bei_Eekholt.jpg","By Volker.G [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by/3.0\\">CC-BY-3.0</a>]",800,600,[0,[0,"B\xc3\xaate du G\xc3\xa9vaudan","fr","B%C3%AAte_du_G%C3%A9vaudan"],[0,"Loup","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Wolf._bei_Eekholt.jpg/800px-Wolf._bei_Eekholt.jpg"]],[0,"vulpes","R%C3%B8d_r%C3%A6v_%28Vulpes_vulpes%29.jpg","I, <a target=\\"_blank\\" href=\\"http://commons.wikimedia.org/wiki/User:Malene\\">Malene</a> [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by/2.5\\">CC-BY-2.5</a>]",800,560,[0,[0,"Burns Inquiry","en","Burns_Inquiry"],[0,"Fox hunting","en","Fox_hunting"],[0,"Renard roux","fr","Renard_roux"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/R%C3%B8d_r%C3%A6v_%28Vulpes_vulpes%29.jpg/800px-R%C3%B8d_r%C3%A6v_%28Vulpes_vulpes%29.jpg"]],[0,"suricata","Suricata_suricatta18082009b.jpg","By Sylfred1977 [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0\\">CC-BY-SA-3.0-2.5-2.0-1.0</a>]",800,1198,[0,[0,"Suricate","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Suricata_suricatta18082009b.jpg/800px-Suricata_suricatta18082009b.jpg"]],[0,"parahyaena","Parahyaena_brunnea_3.jpg","By http://www.pistoleros.no (http://www.pistoleros.no) [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a>]",300,221,[0,[0,"Hy\xc3\xa8ne brune","fr","Hy%C3%A8ne_brune"],[0,"Parahyaena","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/0/04/Parahyaena_brunnea_3.jpg"]],[0,"neofelis","Neofelis_nebulosa.jpg","Author information on Wikimedia Commons [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a>]",432,252,[0,[0,"Kameng Elephant Reserve","en","Kameng_Elephant_Reserve"],[0,"Neofelis","en",""],[0,"Clouded leopard","en","Clouded_leopard"],[0,"Neofelis","fr",""],[0,"Panth\xc3\xa8re n\xc3\xa9buleuse","fr","Panth%C3%A8re_n%C3%A9buleuse"],[0,"Pardofelis","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/7/7d/Neofelis_nebulosa.jpg"]],[0,"panthera","Lion_waiting_in_Namibia.jpg","By yaaaay (Originally posted on Flickr at The King.) [<a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by/2.0\\">CC-BY-2.0</a>]",800,600,[0,[0,"Lion (color)","en","Lion_(color)"],[0,"Lion","en",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/800px-Lion_waiting_in_Namibia.jpg"]],[0,"felis","WhiteCat.jpg","By Icebooter at en.wikipedia Later versions were uploaded by JamesWeb, Pd THOR, Bean2020, Balls187, Persian Poet Gal at en.wikipedia. [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a> or <a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a>]",348,326,[0,[0,"Feline hip replacement","en","Feline_hip_replacement"],[0,"Kass","en",""],[0,"Cat","en",""],[0,"Carnivora","en",""],[0,"Chat","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/b/b2/WhiteCat.jpg"]],[0,"lynx","Linces10.jpg","By (c)\\"Programa de Conservaci\xc3\xb3n Ex-situ del Lince Ib\xc3\xa9rico www.lynxexsitu.es\\" [<a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by/2.5\\">CC-BY-2.5</a>]",294,420,[0,[0,"Genetic monitoring","en","Genetic_monitoring"],[0,"Lynx","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/f/f5/Linces10.jpg"]],[0,"acinonyx","TheCheethcat.jpg","By James Temple [<a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by/2.0\\">CC-BY-2.0</a>]",800,1200,[0,[0,"Cheetah","en",""],[0,"Mammal","en",""],[0,"Gu\xc3\xa9pard","fr","Gu%C3%A9pard"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/0/09/TheCheethcat.jpg/800px-TheCheethcat.jpg"]],[0,"ceratotherium","Rhinoc%C3%A9ros_blanc_JHE.jpg","By Coralie [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0\\">CC-BY-SA-3.0-2.5-2.0-1.0</a>]",800,434,[0,[0,"Rhinoc\xc3\xa9ros","fr","Rhinoc%C3%A9ros"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Rhinoc%C3%A9ros_blanc_JHE.jpg/800px-Rhinoc%C3%A9ros_blanc_JHE.jpg"]],[0,"equus_grevyi","Zebra_zoo-leipzig.jpg","By Thomas Lersch [<a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/2.5\\">CC-BY-SA-2.5</a>]",800,600,[0,[0,"Equus (genus)","en","Equus_(genus)"],[0,"Z\xc3\xa8bre de Gr\xc3\xa9vy","fr","Z%C3%A8bre_de_Gr%C3%A9vy"],[0,"Equidae","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Zebra_zoo-leipzig.jpg/800px-Zebra_zoo-leipzig.jpg"]],[0,"equus_asinus","Equus_asinus_Kadzid%C5%82owo_002.jpg","By Lilly M [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0\\">CC-BY-SA-3.0-2.5-2.0-1.0</a>]",800,516,[0,[0,"Asses\' milk (Donkey\'s milk)","en","Asses%27_milk_(Donkey%27s_milk)"],[0,"Lait d\'\xc3\xa2nesse","fr","Lait_d%27%C3%A2nesse"],[0,"Equidae","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Equus_asinus_Kadzid%C5%82owo_002.jpg/800px-Equus_asinus_Kadzid%C5%82owo_002.jpg"]],[0,"equus_caballus","Pferde_im_Galopp.jpg","Author information on Wikimedia Commons [<a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/2.5\\">CC-BY-SA-2.5</a>]",800,371,[0,[0,"Equine coat color","en","Equine_coat_color"],[0,"Cheval","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Pferde_im_Galopp.jpg/800px-Pferde_im_Galopp.jpg"]],[0,"plecotus","Plecotus_auritus_01.jpg","Author information on Wikimedia Commons [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/2.0\\">CC-BY-SA-2.0</a>]",800,600,[0,[0,"Mother Ludlam\'s Cave","en","Mother_Ludlam%27s_Cave"],[0,"Norfolk Roadside Nature Reserve","en","Norfolk_Roadside_Nature_Reserve"],[0,"Plecotus","en",""],[0,"Brown long-eared bat","en","Brown_long-eared_bat"],[0,"Chiroptera (classification phylog\xc3\xa9n\xc3\xa9tique)","fr","Chiroptera_(classification_phylog%C3%A9n%C3%A9tique)"],[0,"Plecotus auritus","fr","Plecotus_auritus"],[0,"For\xc3\xaat de Soignes","fr","For%C3%AAt_de_Soignes"],[0,"Oreillard","fr",""],[0,"Vespertilionidae","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Plecotus_auritus_01.jpg/800px-Plecotus_auritus_01.jpg"]],[0,"rhinolophus","Grand_Rhinolophe.jpg","By Marie Jullion [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0\\">CC-BY-SA-3.0-2.5-2.0-1.0</a>]",800,600,[0,[0,"Greater Horseshoe Bat","en","Greater_Horseshoe_Bat"],[0,"Plateau d\'Albion","fr","Plateau_d%27Albion"],[0,"Alpes dinariques","fr","Alpes_dinariques"],[0,"Rhinolophus ferrumequinum","fr","Rhinolophus_ferrumequinum"],[0,"Biosp\xc3\xa9ologie","fr","Biosp%C3%A9ologie"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Grand_Rhinolophe.jpg/800px-Grand_Rhinolophe.jpg"]],[0,"talpa","Talpa_europaea_hg.jpg","By Hannes Grobe, Hgrobe 21:20, 4 July 2006 (UTC) [<a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/2.5\\">CC-BY-SA-2.5</a>]",800,571,[0,[0,"European Mole","en","European_Mole"],[0,"Taupe d\'Europe","fr","Taupe_d%27Europe"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Talpa_europaea_hg.jpg/800px-Talpa_europaea_hg.jpg"]],[0,"erinaceus","Erinaceus_europaeus_LC0119.jpg","I, <a target=\\"_blank\\" href=\\"http://commons.wikimedia.org/wiki/User:LC-de\\">J\xc3\xb6rg Hempel</a> [<a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/2.0/de/deed.en\\">CC-BY-SA-2.0-de</a>]",800,599,[0,[0,"Erinaceus europaeus","fr","Erinaceus_europaeus"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Erinaceus_europaeus_LC0119.jpg/800px-Erinaceus_europaeus_LC0119.jpg"]],[0,"sorex","Common_Shrew.jpg","By Sjonge at en.wikipedia [Public domain]",800,600,[0,[0,"Common Shrew","en","Common_Shrew"],[0,"Raasay","fr",""],[0,"Musaraigne","fr",""],[0,"Sorex araneus","fr","Sorex_araneus"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Common_Shrew.jpg/800px-Common_Shrew.jpg"]],[0,"homo","Infant_smile.jpg","By Mehregan Javanmard [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by/2.5\\">CC-BY-2.5</a>]",800,1237,[0,[0,"Homo sapiens","fr","Homo_sapiens"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Infant_smile.jpg/800px-Infant_smile.jpg"]],[0,"pan","Schimpanse_zoo-leipig.jpg","By Thomas Lersch [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by/2.5\\">CC-BY-2.5</a>]",800,600,[0,[0,"Chimpanzee","en",""],[0,"Common chimpanzee","en","Common_chimpanzee"],[0,"Gabon","fr",""],[0,"Chimpanz\xc3\xa9","fr","Chimpanz%C3%A9"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Schimpanse_zoo-leipig.jpg/800px-Schimpanse_zoo-leipig.jpg"]],[0,"gorilla","Gorilla_gorilla_gorilla8.jpg","Author information on Wikimedia Commons [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a>]",800,1067,[0,[0,"Gabon","fr",""],[0,"Gorille","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Gorilla_gorilla_gorilla8.jpg/800px-Gorilla_gorilla_gorilla8.jpg"]],[0,"pongo","Kutai_Orangutan_2008.jpg","By Neil WWW.NEILSRTW.BLOGSPOT.COM (Wild Orangutan) [<a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by/2.0\\">CC-BY-2.0</a>]",800,977,[0,[0,"Kutai National Park","en","Kutai_National_Park"],[0,"Orang-outan de Born\xc3\xa9o","fr","Orang-outan_de_Born%C3%A9o"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Kutai_Orangutan_2008.jpg/800px-Kutai_Orangutan_2008.jpg"]],[0,"macaca","JapaneseMacaque1_CincinnatiZoo.jpg","By Ltshears [<a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0\\">CC-BY-SA-3.0</a> or <a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a>]",800,650,[0,[0,"Macaque japonais","fr","Macaque_japonais"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/JapaneseMacaque1_CincinnatiZoo.jpg/800px-JapaneseMacaque1_CincinnatiZoo.jpg"]],[0,"callitrix","Wei%C3%9Fb%C3%BCschelaffe_%28Callithrix_jacchus%29.jpg","<p>\xc2\xa9 Raimond Spekking\xc2\xa0/\xc2\xa0<a target=\\"_blank\\" href=\\"http://creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a></p>",800,620,[0,[0,"Common marmoset","en","Common_marmoset"],[0,"Ouistiti","fr",""],[0,"Simiiformes","fr",""],[0,"Callithrix","fr",""],[0,"Callithrix jacchus","fr","Callithrix_jacchus"],[0,"Primates","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Wei%C3%9Fb%C3%BCschelaffe_%28Callithrix_jacchus%29.jpg/800px-Wei%C3%9Fb%C3%BCschelaffe_%28Callithrix_jacchus%29.jpg"]],[0,"ateles","Ateles_fusciceps_robustus_moving.JPG","By Patrick M\xc3\xbcller [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a>]",800,533,[0,[0,"At\xc3\xa8le \xc3\xa0 t\xc3\xaate brune","fr","At%C3%A8le_%C3%A0_t%C3%AAte_brune"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Ateles_fusciceps_robustus_moving.JPG/800px-Ateles_fusciceps_robustus_moving.JPG"]],[0,"tarsius","Tarsier_Hugs_Mossy_Branch.jpg","By Kok Leng Yeo [<a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by/2.0\\">CC-BY-2.0</a>]",800,1067,[0,[0,"Wildlife of the Philippines","en","Wildlife_of_the_Philippines"],[0,"Philippine tarsier","en","Philippine_tarsier"],[0,"Tarsiiformes","en",""],[0,"Primate","en",""],[0,"Philippines","fr",""],[0,"Tarsius","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Tarsier_Hugs_Mossy_Branch.jpg/800px-Tarsier_Hugs_Mossy_Branch.jpg"]],[0,"lemur","Knuthenborg_Safaripark_-_en_lemur.jpg","By Hubertus45 [<a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0\\">CC-BY-SA-3.0</a> or <a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a>]",800,737,[0,[0,"Fourr\xc3\xa9 \xc3\xa9pineux de Madagascar","fr","Fourr%C3%A9_%C3%A9pineux_de_Madagascar"],[0,"L\xc3\xa9mur catta","fr","L%C3%A9mur_catta"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Knuthenborg_Safaripark_-_en_lemur.jpg/800px-Knuthenborg_Safaripark_-_en_lemur.jpg"]],[0,"platacanthomys","Malabar_spiny_dormouse.jpg","By Kalyanvarma [<a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0\\">CC-BY-SA-3.0</a>]",800,527,[0,[0,"Malabar Spiny Dormouse","en","Malabar_Spiny_Dormouse"],[0,"Platacanthomyidae","en",""],[0,"Loir \xc3\xa9pineux","fr","Loir_%C3%A9pineux"],[0,"Platacanthomyinae","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/6/61/Malabar_spiny_dormouse.jpg"]],[0,"synaptomys","Synaptomys_cooperi.jpg","By PaulT [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0\\">CC-BY-SA-3.0-2.5-2.0-1.0</a>]",800,611,[0,[0,"Synaptomys cooperi","fr","Synaptomys_cooperi"],[0,"Campagnol","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Synaptomys_cooperi.jpg/800px-Synaptomys_cooperi.jpg"]],[0,"mesocricetus","Hamster_im_Gras.jpg","By Tux [Public domain or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0\\">CC-BY-SA-3.0</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/2.0/de/deed.en\\">CC-BY-SA-2.0-de</a>]",800,600,[0,[0,"Hamster dor\xc3\xa9","fr","Hamster_dor%C3%A9"],[0,"Mesocricetus","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Hamster_im_Gras.jpg/800px-Hamster_im_Gras.jpg"]],[0,"mus","Mouse-19-Dec-2004.jpg","Author information on Wikimedia Commons [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a>]",800,484,[0,[0,"Stockage des c\xc3\xa9r\xc3\xa9ales","fr","Stockage_des_c%C3%A9r%C3%A9ales"],[0,"Souris","fr",""],[0,"Sibylline","fr",""],[0,"Mus (genre)","fr","Mus_(genre)"],[0,"Gris","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Mouse-19-Dec-2004.jpg/800px-Mouse-19-Dec-2004.jpg"]],[0,"castor","Beaver_pho34.jpg","By Per Harald Olsen (User made.) [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/2.5-2.0-1.0\\">CC-BY-SA-2.5-2.0-1.0</a>]",711,554,[0,[0,"Fauna of Scotland","en","Fauna_of_Scotland"],[0,"Dyke Marsh","en","Dyke_Marsh"],[0,"Waitoreke","en",""],[0,"Eurasian Beaver","en","Eurasian_Beaver"],[0,"Beaver","en",""],[0,"Monts d\'Arr\xc3\xa9e","fr","Monts_d%27Arr%C3%A9e"],[0,"Faune de l\'\xc3\x89cosse","fr","Faune_de_l%27%C3%89cosse"],[0,"Virenque","fr",""],[0,"Parc national de Fulufj\xc3\xa4llet","fr","Parc_national_de_Fulufj%C3%A4llet"],[0,"Castor fiber","fr","Castor_fiber"],[0,"Saint-Rambert-en-Bugey","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/c/cc/Beaver_pho34.jpg"]],[0,"eliomys","L%C3%A9rot.jpg","By Jctramasure [<a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0\\">CC-BY-SA-3.0</a>]",800,600,[0,[0,"Eliomys quercinus","fr","Eliomys_quercinus"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/0/08/L%C3%A9rot.jpg/800px-L%C3%A9rot.jpg"]],[0,"marmota","Marmotte_des_Pyr%C3%A9n%C3%A9es.jpg","By Sylvouille at fr.wikipedia [<a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/1.0\\">CC-BY-SA-1.0</a>]",800,533,[0,[0,"Alpine marmot","en","Alpine_marmot"],[0,"Marmota marmota","fr","Marmota_marmota"],[0,"Marmotte","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Marmotte_des_Pyr%C3%A9n%C3%A9es.jpg/800px-Marmotte_des_Pyr%C3%A9n%C3%A9es.jpg"]],[0,"sciurus","Red_Squirrel_-_Lazienki.JPG","By Pawel Ryszawa [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/2.5-2.0-1.0\\">CC-BY-SA-2.5-2.0-1.0</a>]",800,639,[0,[0,"\xc3\x89cureuil roux","fr","%C3%89cureuil_roux"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Red_Squirrel_-_Lazienki.JPG/800px-Red_Squirrel_-_Lazienki.JPG"]],[0,"hystrix","Westafrikanisches_Stachelschwein.jpg","By C-8 [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0\\">CC-BY-SA-3.0-2.5-2.0-1.0</a>]",800,537,[0,[0,"Crested Porcupine","en","Crested_Porcupine"],[0,"Hystrix cristata","fr","Hystrix_cristata"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Westafrikanisches_Stachelschwein.jpg/800px-Westafrikanisches_Stachelschwein.jpg"]],[0,"lepus","Li%C3%A8vre_en_%C3%A9t%C3%A9.jpg","Author information on Wikimedia Commons [<a target=\\"_blank\\" href =\\"http://www.artlibre.org/licence/lal/en\\">FAL</a>]",753,1013,[0,[0,"Li\xc3\xa8vres dans la Bible","fr","Li%C3%A8vres_dans_la_Bible"],[0,"Usagi","fr",""],[0,"Li\xc3\xa8vre","fr","Li%C3%A8vre"]],[0,"http://upload.wikimedia.org/wikipedia/commons/4/42/Li%C3%A8vre_en_%C3%A9t%C3%A9.jpg"]],[0,"myrmecophaga","Myresluger.jpg","Author information on Wikimedia Commons [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/2.5\\">CC-BY-SA-2.5</a>]",350,229,[0,[0,"Pilosa","en",""],[0,"R\xc3\xado Pl\xc3\xa1tano Biosphere Reserve","en","R%C3%ADo_Pl%C3%A1tano_Biosphere_Reserve"],[0,"Pantanal","fr",""],[0,"Fourmilier","fr",""],[0,"Tamanoir","fr",""],[0,"Myrmecophagidae","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/e/e1/Myresluger.jpg"]],[0,"bradypus","9092_-_Milano_-_Museo_storia_naturale_-_Diorama_-_Bradypus_trydactilus_-_Foto_Giovanni_Dall%27Orto_22-Apr-2007.jpg","Author information on Wikimedia Commons [<a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/2.5/it/deed.en\\">CC-BY-SA-2.5-it</a>]",800,531,[0,[0,"Sloth moth","en","Sloth_moth"],[0,"Paresseux \xc3\xa0 trois doigts","fr","Paresseux_%C3%A0_trois_doigts"],[0,"Province de Salta","fr","Province_de_Salta"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/9092_-_Milano_-_Museo_storia_naturale_-_Diorama_-_Bradypus_trydactilus_-_Foto_Giovanni_Dall%27Orto_22-Apr-2007.jpg/800px-9092_-_Milano_-_Museo_storia_naturale_-_Diorama_-_Bradypus_trydactilus_-_Foto_Giovanni_Dall%27Orto_22-Apr-2007.jpg"]],[0,"priodontes","Chubut-PeninsulaValdes-Armadillo-TatuCarreta-P2230729b.jpg","Author information on Wikimedia Commons [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a>]",800,580,[0,[0,"Valdes Peninsula","en","Valdes_Peninsula"],[0,"Priodontes maximus","fr","Priodontes_maximus"],[0,"Dasypodinae","fr",""],[0,"Dasypodidae","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Chubut-PeninsulaValdes-Armadillo-TatuCarreta-P2230729b.jpg/800px-Chubut-PeninsulaValdes-Armadillo-TatuCarreta-P2230729b.jpg"]],[0,"loxodonta","African_Bush_Elephants.jpg","By Gorgo (Photo taken by author) [Public domain]",800,600,[0,[0,"Seismic communication","en","Seismic_communication"],[0,"African Bush Elephant","en","African_Bush_Elephant"],[0,"Addo Elephant National Park","en","Addo_Elephant_National_Park"],[0,"Parc national des \xc3\x89l\xc3\xa9phants d\'Addo","fr","Parc_national_des_%C3%89l%C3%A9phants_d%27Addo"],[0,"\xc3\x89l\xc3\xa9phant d\'Afrique","fr","%C3%89l%C3%A9phant_d%27Afrique"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/African_Bush_Elephants.jpg/800px-African_Bush_Elephants.jpg"]],[0,"lamantins","Manatee_photo.jpg","By NASA [license on Wikimedia Commons]",800,571,[0,[0,"Manatee","en",""],[0,"Gabon","fr",""],[0,"Baie de Chetumal","fr","Baie_de_Chetumal"],[0,"Lamantin","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Manatee_photo.jpg/800px-Manatee_photo.jpg"]],[0,"macropus","Kangaroo_and_joey03.jpg","Author information on Wikimedia Commons [<a target=\\"_blank\\" href =\\"http://www.gnu.org/licenses/old-licenses/fdl-1.2.html\\">GFDL 1.2</a>]",800,1200,[0,[0,"Eden Park Kangaroo Cull","en","Eden_Park_Kangaroo_Cull"],[0,"Pouch (marsupial)","en","Pouch_(marsupial)"],[0,"Theria","en",""],[0,"Eastern Grey Kangaroo","en","Eastern_Grey_Kangaroo"],[0,"Marsupial","en",""],[0,"Kangaroo","en",""],[0,"Kangourou g\xc3\xa9ant","fr","Kangourou_g%C3%A9ant"],[0,"Macropodiformes","fr",""],[0,"Marsupium","fr",""],[0,"Kangourou","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Kangaroo_and_joey03.jpg/800px-Kangaroo_and_joey03.jpg"]],[0,"koala","Koala_climbing_tree.jpg","By Diliff [<a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0\\">CC-BY-SA-3.0</a> or <a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a>]",800,787,[0,[0,"Symbols of Queensland","en","Symbols_of_Queensland"],[0,"Outline of Australia","en","Outline_of_Australia"],[0,"Mammals of Australia","en","Mammals_of_Australia"],[0,"Australia","en",""],[0,"Phascolarctos","en",""],[0,"Vombatiformes","en",""],[0,"Phascolarctidae","en",""],[0,"Great Otway National Park","en","Great_Otway_National_Park"],[0,"Marsupial","en",""],[0,"Australidelphia","fr",""],[0,"Koala","fr",""],[0,"Orientation bibliographique en mammalogie","fr","Orientation_bibliographique_en_mammalogie"],[0,"Riverina","fr",""],[0,"Australie","fr",""],[0,"Marsupialia (classification phylog\xc3\xa9n\xc3\xa9tique)","fr","Marsupialia_(classification_phylog%C3%A9n%C3%A9tique)"],[0,"Mammalia (classification phylog\xc3\xa9n\xc3\xa9tique)","fr","Mammalia_(classification_phylog%C3%A9n%C3%A9tique)"],[0,"Guide phylog\xc3\xa9n\xc3\xa9tique illustr\xc3\xa9 du monde animal","fr","Guide_phylog%C3%A9n%C3%A9tique_illustr%C3%A9_du_monde_animal"],[0,"Phascolarctos","fr",""],[0,"Phascolarctidae","fr",""]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Koala_climbing_tree.jpg/800px-Koala_climbing_tree.jpg"]],[0,"ornithorynque","Platypus.jpg","By Stefan Kraft [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a>]",800,538,[0,[0,"Monotreme","en",""],[0,"Symbols of New South Wales","en","Symbols_of_New_South_Wales"],[0,"Phineas and Ferb","en","Phineas_and_Ferb"],[0,"Sydney Aquarium","en","Sydney_Aquarium"],[0,"Aquatic mammal","en","Aquatic_mammal"],[0,"Waitoreke","en",""],[0,"Artificial induction of immunity","en","Artificial_induction_of_immunity"],[0,"Electroreception","en",""],[0,"Ornithorhynchidae","en",""],[0,"Platypus","en",""],[0,"Mammif\xc3\xa8re aquatique","fr","Mammif%C3%A8re_aquatique"],[0,"Faune de l\'Australie","fr","Faune_de_l%27Australie"],[0,"Murray (fleuve)","fr","Murray_(fleuve)"],[0,"Monotremata","fr",""],[0,"Ornithorynque","fr",""],[0,"Mammif\xc3\xa8re","fr","Mammif%C3%A8re"]],[0,"http://upload.wikimedia.org/wikipedia/commons/f/f2/Platypus.jpg"]],[0,"echidne","Short-beaked_Echidna_Tasmania.jpg","I, <a target=\\"_blank\\" href=\\"http://commons.wikimedia.org/wiki/User:KeresH\\">KeresH</a> [<a target=\\"_blank\\" href =\\"http://www.gnu.org/copyleft/fdl.html\\">GFDL</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/3.0/\\">CC-BY-SA-3.0</a> or <a target=\\"_blank\\" href =\\"http://www.creativecommons.org/licenses/by-sa/2.5-2.0-1.0\\">CC-BY-SA-2.5-2.0-1.0</a>]",800,523,[0,[0,"\xc3\x89chidn\xc3\xa9 \xc3\xa0 nez court","fr","%C3%89chidn%C3%A9_%C3%A0_nez_court"]],[0,"http://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Short-beaked_Echidna_Tasmania.jpg/800px-Short-beaked_Echidna_Tasmania.jpg"]]]');cQ("/messages.json",'{\n"fr":\n{"info": "Informations",\n "recenter": "Recentrer",\n "close": "Cliquez n\'importe o\xc3\xb9 pour retourner \xc3\xa0 l\'arbre",\n "wikimediaCommons": "Voir la description de l\'image sur Wikimedia Commons",\n "language": "En fran\xc3\xa7ais",\n "noRef": "Aucune r\xc3\xa9f\xc3\xa9rence disponible.",\n "languages": "Langues",\n "ok": "OK"\n}\n}\n');cQ("/tree.json",'[0,[0,"Mammalia",[0,[0,"Monotremata",[0,[0,"|echidne",[0]],[0,"|ornithorynque",[0]]]],[0,"",[0,[0,"Marsupialia",[0,[0,"|koala",[0]],[0,"|macropus",[0]]]],[0,"",[0,[0,"",[0,[0,"|lamantins",[0]],[0,"|loxodonta",[0]]]],[0,"",[0,[0,"",[0,[0,"|priodontes",[0]],[0,"",[0,[0,"|bradypus",[0]],[0,"|myrmecophaga",[0]]]]]],[0,"",[0,[0,"",[0,[0,"",[0,[0,"|lepus",[0]],[0,"Rodentia",[0,[0,"|hystrix",[0]],[0,"",[0,[0,"",[0,[0,"|sciurus",[0]],[0,"|marmota",[0]]]],[0,"",[0,[0,"|eliomys",[0]],[0,"",[0,[0,"|castor",[0]],[0,"",[0,[0,"|mus",[0]],[0,"",[0,[0,"|mesocricetus",[0]],[0,"|synaptomys",[0]],[0,"|platacanthomys",[0]]]]]]]]]]]]]]]],[0,"Primates",[0,[0,"|lemur",[0]],[0,"",[0,[0,"|tarsius",[0]],[0,"",[0,[0,"",[0,[0,"|ateles",[0]],[0,"|callitrix",[0]]]],[0,"",[0,[0,"|macaca",[0]],[0,"",[0,[0,"|pongo",[0]],[0,"",[0,[0,"|gorilla",[0]],[0,"",[0,[0,"|pan",[0]],[0,"|homo",[0]]]]]]]]]]]]]]]]]],[0,"",[0,[0,"",[0,[0,"|sorex",[0]],[0,"",[0,[0,"|erinaceus",[0]],[0,"|talpa",[0]]]]]],[0,"",[0,[0,"Chiroptera",[0,[0,"|rhinolophus",[0]],[0,"|plecotus",[0]]]],[0,"",[0,[0,"",[0,[0,"",[0,[0,"",[0,[0,"|equus_caballus",[0]],[0,"|equus_asinus",[0]],[0,"|equus_grevyi",[0]]]],[0,"|ceratotherium",[0]]]],[0,"Carnivora",[0,[0,"",[0,[0,"Felidae",[0,[0,"|acinonyx",[0]],[0,"",[0,[0,"",[0,[0,"|lynx",[0]],[0,"|felis",[0]]]],[0,"",[0,[0,"|panthera",[0]],[0,"|neofelis",[0]]]]]]]],[0,"",[0,[0,"|parahyaena",[0]],[0,"|suricata",[0]]]]]],[0,"",[0,[0,"Canidae",[0,[0,"|vulpes",[0]],[0,"|canis",[0]]]],[0,"",[0,[0,"",[0,[0,"|ailuropoda",[0]],[0,"",[0,[0,"|tremarctos",[0]],[0,"|ursus",[0]]]]]],[0,"",[0,[0,"",[0,[0,"",[0,[0,"|odobenus",[0]],[0,"|arctocephalus",[0]]]],[0,"|mirounga",[0]]]],[0,"",[0,[0,"|mephitis",[0]],[0,"|simocyon",[0]],[0,"",[0,[0,"|procyon",[0]],[0,"|lutra",[0]]]]]]]]]]]]]]]],[0,"",[0,[0,"",[0,[0,"|lama",[0]],[0,"|camel",[0]]]],[0,"",[0,[0,"|sus",[0]],[0,"|phacochoerus",[0]]]],[0,"",[0,[0,"",[0,[0,"Cetacea",[0,[0,"|balaenoptera",[0]],[0,"",[0,[0,"",[0,[0,"|delphinapterus",[0]],[0,"|monodon",[0]]]],[0,"",[0,[0,"|phocoena",[0]],[0,"|orcinus",[0]]]]]]]],[0,"|hippopotamus",[0]]]],[0,"Ruminantia",[0,[0,"",[0,[0,"|giraffa",[0]],[0,"|okapia",[0]]]],[0,"",[0,[0,"Cervidae",[0,[0,"",[0,[0,"|capreolus",[0]],[0,"|alces",[0]]]],[0,"|cervus",[0]]]],[0,"Bovidae",[0,[0,"",[0,[0,"|syncerus",[0]],[0,"",[0,[0,"|bos",[0]],[0,"|bison",[0]]]]]],[0,"",[0,[0,"|aepyceros",[0]],[0,"",[0,[0,"",[0,[0,"|oryx",[0]],[0,"|connochaetes",[0]]]],[0,"",[0,[0,"",[0,[0,"",[0,[0,"|mouflon",[0]],[0,"|mouton",[0]]]],[0,"",[0,[0,"|rupicapra",[0]],[0,"|capra",[0]]]]]],[0,"|ovibos",[0]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]],[0,[0,"fr",[0,[0,"<TITLE>","Les mammif\xc3\xa8res"],[0,"Mammalia","Mammif\xc3\xa8res"],[0,"Monotremata","Monotr\xc3\xa8mes"],[0,"Marsupialia","Marsupiaux"],[0,"Rodentia","Rongeurs"],[0,"Primates","Primates"],[0,"Chiroptera","Chiropt\xc3\xa8res"],[0,"Carnivora","Carnivores"],[0,"Felidae","F\xc3\xa9lins"],[0,"Canidae","Canid\xc3\xa9s"],[0,"Cetacea","C\xc3\xa9tac\xc3\xa9s"],[0,"Ruminantia","Ruminants"],[0,"Cervidae","Cervid\xc3\xa9s"],[0,"Bovidae","Bovid\xc3\xa9s"]],"<h1>Un arbre des animaux</h1>\\n\\nCet <a target=\\"_blank\\"\\nhref=\\"http://fr.wikipedia.org/wiki/Arbre_phylog%C3%A9n%C3%A9tique\\">\\narbre <em>phylog\xc3\xa9n\xc3\xa9tique</em></a> repr\xc3\xa9sente les liens de parent\xc3\xa9\\nentre animaux.\\n\\n<h2>Utilisation</h2>\\n\\nParcourez l\'arbre en le faisant glisser avec la souris.  Cliquez\\nsur une image pour l\'afficher en grand.\\n\\n<h2>Cr\xc3\xa9dits</h2>\\n\\nCe logiciel et les images qu\'il utilise sont sous des licences libres.\\nLes images proviennent de <a target=\\"_blank\\"\\nhref=\\"http://commons.wikimedia.org/wiki/Main_Page?uselang=fr\\">Wikimedia\\nCommons</a>.  Vous pouvez cliquer sur chaque image pour plus de\\nd\xc3\xa9tails. Le logiciel a \xc3\xa9t\xc3\xa9 \xc3\xa9crit par J\xc3\xa9r\xc3\xb4me Vouillon (CNRS)."],[0,"en",[0,[0,"<TITLE>","Mammals"],[0,"Mammalia","Mammals"],[0,"Monotremata","Monotremes"],[0,"Marsupialia","Marsupials"],[0,"Rodentia","Rodents"],[0,"Primates","Primates"],[0,"Chiroptera","Bats"],[0,"Carnivora","Carnivorans"],[0,"Felidae","Felids"],[0,"Canidae","Canids"],[0,"Cetacea","Cetaceans"],[0,"Ruminantia","Ruminants"],[0,"Cervidae","Deer"],[0,"Bovidae","Bovids"]],"<h1>A Tree of Animals</h1>\\n\\nThis <a target=\\"_blank\\"\\nhref=\\"http://en.wikipedia.org/wiki/Phylogenetic_tree\\">\\n<em>phylogenetic</em> tree</a> displays the relationships among\\nanimals.\\n\\n<h2>Usage</h2>\\n\\nBrowse the tree by dragging it with the mouse. Click on any image to\\ndisplay a larger version.\\n\\n<h2>Credits</h2>\\n\\nThis software and the images it uses are under free licenses.  Images\\nare from <a target=\\"_blank\\"\\nhref=\\"http://commons.wikimedia.org/wiki/Main_Page\\">Wikimedia\\nCommons</a>.  You can click on each image for details.  The software\\nhas been written by J\xc3\xa9r\xc3\xb4me Vouillon (CNRS)."]]]');var
bs=[n,c("Failure"),-3],cf=[n,c("Invalid_argument"),-4],t=[n,c("Not_found"),-7],dP=[n,c("Match_failure"),-8],dO=[n,c("Stack_overflow"),-9],F=[n,c("Assert_failure"),-11],dQ=[n,c("Undefined_recursive_module"),-12],cr=c('File "%s", line %d, characters %d-%d: %s'),ec=c(b8),eL=[m,fq,0],D=[m,1,0],a$=[m,0,0];ag(11,dQ);ag(8,dO);ag(7,dP);ag(6,t);ag(5,[n,c("Division_by_zero"),-6]);ag(4,[n,c("End_of_file"),-5]);ag(3,cf);ag(2,bs);ag(1,[n,c("Sys_error"),-2]);cR(c("Pervasives.array_bound_error"),[0,cf,c(dk)]);var
gV=[n,c("Out_of_memory"),-1],f4=c(fw),f3=c(aT),f1=c("true"),f2=c("false"),f0=c("Pervasives.Exit"),f5=c("Pervasives.do_at_exit"),f8=c("Array.Bottom"),f$=c("\\b"),ga=c("\\t"),gb=c("\\n"),gc=c("\\r"),f_=c("\\\\"),f9=c("\\'"),gg=c("String.contains_from"),gf=c(d),ge=c("String.blit"),gd=c("String.sub"),gi=c("Sys.Break"),gj=c("Queue.Empty"),gl=c("CamlinternalLazy.Undefined"),go=c("Buffer.add: cannot grow buffer"),gE=c(d),gF=c(d),gI=c(fw),gJ=c(b3),gK=c(b3),gG=c(b1),gH=c(b1),gD=c(e9),gB=c("neg_infinity"),gC=c("infinity"),gA=c(aT),gz=c("printf: bad positional specification (0)."),gy=c("%_"),gx=[0,c("printf.ml"),143,8],gv=c(b1),gw=c("Printf: premature end of format string '"),gr=c(b1),gs=c(" in format string '"),gt=c(", at char number "),gu=c("Printf: bad conversion %"),gp=c("Sformat.index_of_int: negative argument "),gP=c(d),gQ=c(", %s%s"),g7=[1,1],g8=c("%s\n"),g9=c("(Program not linked with -g, cannot print stack backtrace)\n"),g1=c("Raised at"),g4=c("Re-raised at"),g5=c("Raised by primitive operation at"),g6=c("Called from"),g2=c('%s file "%s", line %d, characters %d-%d'),g3=c("%s unknown location"),gW=c("Out of memory"),gX=c("Stack overflow"),gY=c("Pattern matching failed"),gZ=c("Assertion failed"),g0=c("Undefined recursive module"),gR=c("(%s%s)"),gS=c(d),gT=c(d),gU=c("(%s)"),gO=c(fu),gM=c("%S"),gN=c("_"),g_=c(dc),j$=c("OCAMLRUNPARAM"),j9=c("CAMLRUNPARAM"),g$=c(d),hc=c("Lwt_sequence.Empty"),hr=[0,c(al),814,20],hs=[0,c(al),816,8],hq=[0,c(al),785,16],ho=[0,c(al),670,20],hp=[0,c(al),673,8],hm=[0,c(al),648,20],hn=[0,c(al),651,8],hj=[0,c(al),498,8],hi=[0,c(al),487,9],hh=c("Lwt.wakeup_result"),he=c("Fatal error: exception "),hd=c("Lwt.Canceled"),hk=[0,0],hx=c("Js.Error"),hy=c(e8),hU=c("canvas"),hS=c("dt"),hR=c("dd"),hQ=c("img"),hP=c("a"),hO=c("div"),hN=c("li"),hM=c("dl"),hL=c("ul"),hz=c("click"),hB=c("mouseup"),hD=c("mousemove"),hF=c("keydown"),hG=c("touchstart"),hI=c("touchmove"),hK=c("touchend"),hT=c("Dom_html.Canvas_not_available"),hZ=c("browser can't read file: unimplemented"),hY=[0,c("file.ml"),131,15],hW=c("can't retrieve file name: not implemented"),h1=c("Exception during Lwt.async: "),h3=c("[\\][()\\\\|+*.?{}^$]"),ie=[0,c(d),0],ig=c(d),iu=c(d),iD=c(d),iv=c(bg),iw=c(bZ),iC=c(d),ix=c(at),iy=c(at),iB=c(fn),iz=c(d),iA=c(e4),iE=c(d),iN=c(d),iF=c(bg),iG=c(bZ),iM=c(d),iH=c(at),iI=c(at),iL=c(fn),iJ=c(d),iK=c("https://"),iO=c(d),iU=c(d),iP=c(bg),iQ=c(bZ),iT=c(d),iR=c(at),iS=c("file://"),it=c(d),is=c(d),ir=c(d),iq=c(d),ip=c(d),io=c(d),ih=c(c1),ii=c(fj),h_=c("file"),h$=c("file:"),ia=c("http"),ib=c("http:"),ic=c("https"),id=c("https:"),h7=c("%2B"),h5=c("Url.Local_exn"),h6=c(bh),h8=c("Url.Not_an_http_protocol"),ij=c("^([Hh][Tt][Tt][Pp][Ss]?)://([0-9a-zA-Z.-]+|\\[[0-9a-zA-Z.-]+\\]|\\[[0-9A-Fa-f:.]+\\])?(:([0-9]+))?/([^\\?#]*)(\\?([^#]*))?(#(.*))?$"),il=c("^([Ff][Ii][Ll][Ee])://([^\\?#]*)(\\?([^#]*))?(#(.*))?$"),i$=c(b$),jb=c("multipart/form-data; boundary="),jc=c(b$),jd=[0,c(b$),[0,c("application/x-www-form-urlencoded")],b_],je=[0,c(b$),0,b_],jf=c("GET"),ja=c(bZ),i6=c(c1),i7=c(c1),i8=c(fj),i2=c('"; filename="'),i3=c(fd),i0=c(bX),i1=c(eZ),i4=c('"\r\n\r\n'),i5=c(fd),iY=c("--\r\n"),iZ=c(eZ),iX=c("js_of_ocaml-------------------"),iW=[0,c("xmlHttpRequest.ml"),85,2],i9=c("XmlHttpRequest.Wrong_headers"),j4=c(fs),j5=c(fg),j6=[0,[0,c("Fran\xc3\xa7ais"),c("fr")],[0,[0,c("English"),c(aH)],0]],j7=c(e6),jW=[m,0,0],jX=[m,e2,0],jY=[m,0,0],jZ=[m,0,e2],j0=[m,0,0],j1=[m,fk,0],j2=[m,0,0],j3=[m,0,fk],j8=c(fp),jP=c(".wikipedia.org/wiki/"),jQ=c(e4),jK=c(c2),jS=c(fm),jT=c("images/"),jL=c(d),jR=c("?uselang="),jM=c("http://commons.wikimedia.org/wiki/File:"),jN=c(fv),jO=c(fe),jD=c(c2),jE=c("px 3px"),jF=c("px 3px "),jG=c(cY),jI=c(e3),jH=c("filled_button "),jJ=c(c2),jB=c(cY),jC=c(e3),jA=c("image_info.json"),jv=[0,0,0,0],jw=[m,-1,0],ju=[0,c("hypertree.ml"),936,2],jt=c("<TITLE>"),js=c(d),jn=c(fm),jo=c("thumbnails/"),jk=c("messages.json"),jh=c("icons/"),jg=[0,c(fv),[0,c(fe),[0,c(fs),[0,c(e6),[0,c(fg),[0,c(fp),0]]]]]],jm=c("tree.json"),jp=c("\n"),jq=c("[^ ]"),jr=c("[|]"),jU=c('<h1>A tree of animals</h1> This <a target="_blank" href="http://en.wikipedia.org/wiki/Phylogenetic_tree"><em>phylogenetic</em> tree</a> displays the relationships among animals.<h2>Usage</h2>Browse the tree by dragging it with the mouse. Click on any image to display a larger version.<h2>Credits</h2>This software and the images it uses are under free licenses. Images are from <a target="_blank" href="http://commons.wikimedia.org/wiki/Main_Page">Wikimedia Commons</a>.  You can click on each image for details.  The software has been written by J\xc3\xa9r\xc3\xb4me Vouillon (CNRS).');function
aW(a){throw[0,bs,a]}function
aJ(a){throw[0,cf,a]}a([n,f0,0]);function
cg(a,b){return kO(a,b)?a:b}function
am(a,b){return kp(a,b)?a:b}function
bt(a){return 0<=a?a:-a|0}function
h(a,b){var
c=a.getLen(),e=b.getLen(),d=ah(c+e|0);ar(a,0,d,0,c);ar(b,0,d,c,e);return d}function
M(a){return c(d+a)}function
ds(a,b){if(a){var
c=a[1];return[0,c,ds(a[2],b)]}return b}kR(0);eQ(1);var
aX=eQ(2);function
dt(a,b){return fR(a,b,0,b.getLen())}function
du(a){return dt(aX,a)}function
ch(a){var
b=kT(0);for(;;){if(b){var
c=b[2],d=b[1];try{eR(d)}catch(f){}var
b=c;continue}return 0}}cR(f5,ch);function
f6(a,b){return eS(a,b)}function
dv(a){return eR(a)}function
bu(a,b){var
d=b.length-1-1|0,e=0;if(!(d<0)){var
c=e;for(;;){j(a,b[c+1]);var
f=c+1|0;if(d!==c){var
c=f;continue}break}}return 0}function
bv(a,b){var
d=b.length-1;if(0===d)return[0];var
e=r(d,j(a,b[0+1])),f=d-1|0,g=1;if(!(f<1)){var
c=g;for(;;){e[c+1]=j(a,b[c+1]);var
h=c+1|0;if(f!==c){var
c=h;continue}break}}return e}function
f7(a){var
b=a.length-1-1|0,c=0;for(;;){if(0<=b){var
d=[0,a[b+1],c],b=b-1|0,c=d;continue}return c}}function
bw(a,b,c){var
e=[0,b],f=c.length-1-1|0,g=0;if(!(f<0)){var
d=g;for(;;){e[1]=z(a,e[1],c[d+1]);var
h=d+1|0;if(f!==d){var
d=h;continue}break}}return e[1]}a([n,f8,0]);function
ci(a){var
b=a,c=0;for(;;){if(b){var
d=[0,b[1],c],b=b[2],c=d;continue}return c}}function
aK(a,b){if(b){var
c=b[2],d=j(a,b[1]);return[0,d,aK(a,c)]}return 0}function
av(a,b){var
c=b;for(;;){if(c){var
d=c[2];j(a,c[1]);var
c=d;continue}return 0}}function
bx(a,b){var
c=b;for(;;){if(c){var
d=c[1],e=c[2],f=d[2];if(d[1]===a)return f;var
c=e;continue}throw t}}function
aY(a,b){var
c=ah(a);kk(c,0,a,b);return c}function
an(a,b,c){if(0<=b)if(0<=c)if(!((a.getLen()-c|0)<b)){var
d=ah(c);ar(a,b,d,0,c);return d}return aJ(gd)}function
cj(a,b,c,d,e){if(0<=e)if(0<=b)if(!((a.getLen()-e|0)<b))if(0<=d)if(!((c.getLen()-e|0)<d))return ar(a,b,c,d,e);return aJ(ge)}function
aZ(d,b){if(b){var
a=b[1],g=[0,0],f=[0,0],h=b[2];av(function(a){g[1]++;f[1]=f[1]+a.getLen()|0;return 0},b);var
e=ah(f[1]+eT(d.getLen(),g[1]-1|0)|0);ar(a,0,e,0,a.getLen());var
c=[0,a.getLen()];av(function(a){ar(d,0,e,c[1],d.getLen());c[1]=c[1]+d.getLen()|0;ar(a,0,e,c[1],a.getLen());c[1]=c[1]+a.getLen()|0;return 0},h);return e}return gf}function
dw(a,b,c,d){var
e=c;for(;;){if(b<=e)throw t;if(a.safeGet(e)===d)return e;var
e=e+1|0;continue}}var
ck=k_(0),cl=(1<<(ck-10|0))-1|0,a0=eT(ck/8|0,cl)-1|0;a([n,gi,0]);var
gk=a([n,gj,0]),gm=a([n,gl,0]);function
gn(a){throw gm}function
a1(a){var
c=a[0+1];a[0+1]=gn;try{var
b=j(c,0);a[0+1]=b;kZ(a,$)}catch(f){f=s(f);a[0+1]=function(a){throw f};throw f}return b}function
cm(a){var
b=1<=a?a:1,c=a0<b?a0:b,d=ah(c);return[0,d,0,c,d]}function
cn(a){return an(a[1],0,a[2])}function
dz(a,b){var
c=[0,a[3]];for(;;){if(c[1]<(a[2]+b|0)){c[1]=2*c[1]|0;continue}if(a0<c[1])if((a[2]+b|0)<=a0)c[1]=a0;else
aW(go);var
d=ah(c[1]);cj(a[1],0,d,0,a[2]);a[1]=d;a[3]=c[1];return 0}}function
a2(a,b){var
c=a[2];if(a[3]<=c)dz(a,1);a[1].safeSet(c,b);a[2]=c+1|0;return 0}function
co(a,b){var
c=b.getLen(),d=a[2]+c|0;if(a[3]<d)dz(a,c);ar(b,0,a[1],a[2],c);a[2]=d;return 0}function
cp(a){return 0<=a?a:aW(h(gp,M(a)))}function
dA(a,b){return cp(a+b|0)}var
gq=1;function
dB(a){return dA(gq,a)}function
dC(a){return an(a,0,a.getLen())}function
dD(a,b,c){var
d=h(gs,h(a,gr)),e=h(gt,h(M(b),d));return aJ(h(gu,h(aY(1,c),e)))}function
a3(a,b,c){return dD(dC(a),b,c)}function
by(a){return aJ(h(gw,h(dC(a),gv)))}function
aw(e,b,c,d){function
h(a){if((e.safeGet(a)+aS|0)<0||9<(e.safeGet(a)+aS|0))return a;var
b=a+1|0;for(;;){var
c=e.safeGet(b);if(48<=c){if(!(58<=c)){var
b=b+1|0;continue}}else
if(36===c)return b+1|0;return a}}var
i=h(b+1|0),f=cm((c-i|0)+10|0);a2(f,37);var
a=i,g=ci(d);for(;;){if(a<=c){var
j=e.safeGet(a);if(42===j){if(g){var
k=g[2];co(f,M(g[1]));var
a=h(a+1|0),g=k;continue}throw[0,F,gx]}a2(f,j);var
a=a+1|0;continue}return cn(f)}}function
dE(a,b,c,d,e){var
f=aw(b,c,d,e);if(78!==a)if(bi!==a)return f;f.safeSet(f.getLen()-1|0,dd);return f}function
dF(a){return function(d,b){var
k=d.getLen();function
l(a,b){var
m=40===a?41:c0,c=b;for(;;){if(k<=c)return by(d);if(37===d.safeGet(c)){var
e=c+1|0;if(k<=e)return by(d);var
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
j=0===g?0:1;if(j)return f===m?e+1|0:a3(d,b,f);var
c=l(f,e+1|0)+1|0;continue}var
c=c+1|0;continue}}return l(a,b)}}function
dG(i,b,c){var
l=i.getLen()-1|0;function
q(a){var
k=a;a:for(;;){if(k<l){if(37===i.safeGet(k)){var
f=0,h=k+1|0;for(;;){if(l<h)var
e=by(i);else{var
m=i.safeGet(h);if(58<=m){if(95===m){var
f=1,h=h+1|0;continue}}else
if(32<=m)switch(m+e_|0){case
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
h=K(b,f,h,aG);continue;default:var
h=h+1|0;continue}var
d=h;b:for(;;){if(l<d)var
e=by(i);else{var
j=i.safeGet(d);if(126<=j)var
g=0;else
switch(j){case
78:case
88:case
aR:case
aG:case
c3:case
dd:case
de:var
e=K(b,f,d,aG),g=1;break;case
69:case
70:case
71:case
dl:case
c5:case
dj:var
e=K(b,f,d,c5),g=1;break;case
33:case
37:case
44:case
64:var
e=d+1|0,g=1;break;case
83:case
91:case
bm:var
e=K(b,f,d,bm),g=1;break;case
97:case
b4:case
cW:var
e=K(b,f,d,j),g=1;break;case
76:case
fl:case
bi:var
r=d+1|0;if(l<r)var
e=K(b,f,d,aG),g=1;else{var
o=i.safeGet(r)+fD|0;if(o<0||32<o)var
p=1;else
switch(o){case
0:case
12:case
17:case
23:case
29:case
32:var
e=z(c,K(b,f,d,j),aG),g=1,p=0;break;default:var
p=1}if(p)var
e=K(b,f,d,aG),g=1}break;case
67:case
99:var
e=K(b,f,d,99),g=1;break;case
66:case
98:var
e=K(b,f,d,66),g=1;break;case
41:case
c0:var
e=K(b,f,d,j),g=1;break;case
40:var
e=q(K(b,f,d,j)),g=1;break;case
df:var
s=K(b,f,d,j),t=z(dF(j),i,s),n=s;for(;;){if(n<(t-2|0)){var
n=z(c,n,i.safeGet(n));continue}var
d=t-1|0;continue b}default:var
g=0}if(!g)var
e=a3(i,d,j)}break}}var
k=e;continue a}}var
k=k+1|0;continue}return k}}q(0);return 0}function
dH(a){var
d=[0,0,0,0];function
b(a,b,c){var
f=41!==c?1:0,g=f?c0!==c?1:0:f;if(g){var
e=97===c?2:1;if(b4===c)d[3]=d[3]+1|0;if(a)d[2]=d[2]+e|0;else
d[1]=d[1]+e|0}return b+1|0}dG(a,b,function(a,b){return a+1|0});return d[1]}function
dI(a,b,c){var
g=a.safeGet(c);if((g+aS|0)<0||9<(g+aS|0))return z(b,0,c);var
e=g+aS|0,d=c+1|0;for(;;){var
f=a.safeGet(d);if(48<=f){if(!(58<=f)){var
e=(10*e|0)+(f+aS|0)|0,d=d+1|0;continue}}else
if(36===f)return 0===e?aW(gz):z(b,[0,cp(e-1|0)],d+1|0);return z(b,0,c)}}function
I(a,b){return a?b:dB(b)}function
dJ(a,b){return a?a[1]:b}function
dK(aD,b,c,d,e,f,g){var
A=j(b,g);function
ab(a){return z(d,A,a)}function
aE(a,b,k,aF){var
n=k.getLen();function
B(p,b){var
m=b;for(;;){if(n<=m)return j(a,A);var
d=k.safeGet(m);if(37===d){var
l=function(a,b){return i(aF,dJ(a,b))},ap=function(g,f,c,d){var
a=d;for(;;){var
Y=k.safeGet(a)+e_|0;if(!(Y<0||25<Y))switch(Y){case
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
10:return dI(k,function(a,b){var
d=[0,l(a,f),c];return ap(g,I(a,f),d,b)},a+1|0);default:var
a=a+1|0;continue}var
n=k.safeGet(a);if(!(fo<=n))switch(n){case
78:case
88:case
aR:case
aG:case
c3:case
dd:case
de:var
a1=l(g,f),a4=bQ(dE(n,k,m,a,c),a1);return o(I(g,f),a4,a+1|0);case
69:case
71:case
dl:case
c5:case
dj:var
aT=l(g,f),aU=cS(aw(k,m,a,c),aT);return o(I(g,f),aU,a+1|0);case
76:case
fl:case
bi:var
$=k.safeGet(a+1|0)+fD|0;if(!($<0||32<$))switch($){case
0:case
12:case
17:case
23:case
29:case
32:var
Q=a+1|0,aa=n-108|0;if(aa<0||2<aa)var
ac=0;else{switch(aa){case
1:var
ac=0,ad=0;break;case
2:var
a0=l(g,f),av=bQ(aw(k,m,Q,c),a0),ad=1;break;default:var
aZ=l(g,f),av=bQ(aw(k,m,Q,c),aZ),ad=1}if(ad)var
au=av,ac=1}if(!ac)var
aX=l(g,f),au=kt(aw(k,m,Q,c),aX);return o(I(g,f),au,Q+1|0)}var
aV=l(g,f),aW=bQ(dE(bi,k,m,a,c),aV);return o(I(g,f),aW,a+1|0);case
37:case
64:return o(f,aY(1,n),a+1|0);case
83:case
bm:var
v=l(g,f);if(bm===n)var
w=v;else{var
b=[0,0],ai=v.getLen()-1|0,aH=0;if(!(ai<0)){var
J=aH;for(;;){var
u=v.safeGet(J),a_=14<=u?34===u?1:92===u?1:0:11<=u?13<=u?1:0:8<=u?1:0,aK=a_?2:cT(u)?1:4;b[1]=b[1]+aK|0;var
aL=J+1|0;if(ai!==J){var
J=aL;continue}break}}if(b[1]===v.getLen())var
ay=v;else{var
i=ah(b[1]);b[1]=0;var
aj=v.getLen()-1|0,aI=0;if(!(aj<0)){var
H=aI;for(;;){var
t=v.safeGet(H),x=t-34|0;if(x<0||58<x)if(-20<=x)var
R=1;else{switch(x+34|0){case
8:i.safeSet(b[1],92);b[1]++;i.safeSet(b[1],98);var
G=1;break;case
9:i.safeSet(b[1],92);b[1]++;i.safeSet(b[1],cW);var
G=1;break;case
10:i.safeSet(b[1],92);b[1]++;i.safeSet(b[1],bi);var
G=1;break;case
13:i.safeSet(b[1],92);b[1]++;i.safeSet(b[1],b4);var
G=1;break;default:var
R=1,G=0}if(G)var
R=0}else
var
R=(x-1|0)<0||56<(x-1|0)?(i.safeSet(b[1],92),b[1]++,i.safeSet(b[1],t),0):1;if(R)if(cT(t))i.safeSet(b[1],t);else{i.safeSet(b[1],92);b[1]++;i.safeSet(b[1],48+(t/aR|0)|0);b[1]++;i.safeSet(b[1],48+((t/10|0)%10|0)|0);b[1]++;i.safeSet(b[1],48+(t%10|0)|0)}b[1]++;var
aJ=H+1|0;if(aj!==H){var
H=aJ;continue}break}}var
ay=i}var
w=h(gK,h(ay,gJ))}if(a===(m+1|0))var
ax=w;else{var
F=aw(k,m,a,c);try{var
S=0,q=1;for(;;){if(F.getLen()<=q)var
ak=[0,0,S];else{var
T=F.safeGet(q);if(49<=T)if(58<=T)var
ae=0;else
var
ak=[0,eU(an(F,q,(F.getLen()-q|0)-1|0)),S],ae=1;else{if(45===T){var
S=1,q=q+1|0;continue}var
ae=0}if(!ae){var
q=q+1|0;continue}}var
V=ak;break}}catch(f){f=s(f);if(f[1]!==bs)throw f;var
V=dD(F,0,bm)}var
K=V[1],y=w.getLen(),aM=V[2],L=0,aN=32;if(K===y)if(0===L)var
W=w,af=1;else
var
af=0;else
var
af=0;if(!af)if(K<=y)var
W=an(w,L,y);else{var
U=aY(K,aN);if(aM)cj(w,L,U,0,y);else
cj(w,L,U,K-y|0,y);var
W=U}var
ax=W}return o(I(g,f),ax,a+1|0);case
67:case
99:var
p=l(g,f);if(99===n)var
as=aY(1,p);else{if(39===p)var
r=f9;else
if(92===p)var
r=f_;else{if(14<=p)var
C=0;else
switch(p){case
8:var
r=f$,C=1;break;case
9:var
r=ga,C=1;break;case
10:var
r=gb,C=1;break;case
13:var
r=gc,C=1;break;default:var
C=0}if(!C)if(cT(p)){var
ag=ah(1);ag.safeSet(0,p);var
r=ag}else{var
D=ah(4);D.safeSet(0,92);D.safeSet(1,48+(p/aR|0)|0);D.safeSet(2,48+((p/10|0)%10|0)|0);D.safeSet(3,48+(p%10|0)|0);var
r=D}}var
as=h(gH,h(r,gG))}return o(I(g,f),as,a+1|0);case
66:case
98:var
aQ=a+1|0,aS=l(g,f)?f1:f2;return o(I(g,f),aS,aQ);case
40:case
df:var
P=l(g,f),aq=z(dF(n),k,a+1|0);if(df===n){var
M=cm(P.getLen()),al=function(a,b){a2(M,b);return a+1|0};dG(P,function(a,b,c){if(a)co(M,gy);else
a2(M,37);return al(b,c)},al);var
aO=cn(M);return o(I(g,f),aO,aq)}var
ar=I(g,f),a9=dA(dH(P),ar);return aE(function(a){return B(a9,aq)},ar,P,aF);case
33:j(e,A);return B(f,a+1|0);case
41:return o(f,gE,a+1|0);case
44:return o(f,gF,a+1|0);case
70:var
Z=l(g,f);if(0===c)var
at=gI;else{var
X=aw(k,m,a,c);if(70===n)X.safeSet(X.getLen()-1|0,dj);var
at=X}var
ao=kf(Z);if(3===ao)var
_=Z<0?gB:gC;else
if(4<=ao)var
_=gD;else{var
O=cS(at,Z),N=0,aP=O.getLen();for(;;){if(aP<=N)var
am=h(O,gA);else{var
E=O.safeGet(N)-46|0,a$=E<0||23<E?55===E?1:0:(E-1|0)<0||21<(E-1|0)?1:0;if(!a$){var
N=N+1|0;continue}var
am=O}var
_=am;break}}return o(I(g,f),_,a+1|0);case
91:return a3(k,a,n);case
97:var
az=l(g,f),aA=dB(dJ(g,f)),aB=l(0,aA),a5=a+1|0,a6=I(g,aA);if(aD)ab(z(az,0,aB));else
z(az,A,aB);return B(a6,a5);case
b4:return a3(k,a,n);case
cW:var
aC=l(g,f),a7=a+1|0,a8=I(g,f);if(aD)ab(j(aC,0));else
j(aC,A);return B(a8,a7)}return a3(k,a,n)}},f=m+1|0,g=0;return dI(k,function(a,b){return ap(a,p,g,b)},f)}z(c,A,d);var
m=m+1|0;continue}}function
o(a,b,c){ab(b);return B(a,c)}return B(b,0)}var
o=cp(0);function
l(a,b){return aE(f,o,a,b)}var
m=dH(g);if(m<0||6<m){var
n=function(f,b){if(m<=f){var
h=r(m,0),i=function(a,b){return k(h,(m-a|0)-1|0,b)},c=0,a=b;for(;;){if(a){var
d=a[2],e=a[1];if(d){i(c,e);var
c=c+1|0,a=d;continue}i(c,e)}return l(g,h)}}return function(a){return n(f+1|0,[0,a,b])}};return n(0,0)}switch(m){case
1:return function(a){var
b=r(1,0);k(b,0,a);return l(g,b)};case
2:return function(a,b){var
c=r(2,0);k(c,0,a);k(c,1,b);return l(g,c)};case
3:return function(a,b,c){var
d=r(3,0);k(d,0,a);k(d,1,b);k(d,2,c);return l(g,d)};case
4:return function(a,b,c,d){var
e=r(4,0);k(e,0,a);k(e,1,b);k(e,2,c);k(e,3,d);return l(g,e)};case
5:return function(a,b,c,d,e){var
f=r(5,0);k(f,0,a);k(f,1,b);k(f,2,c);k(f,3,d);k(f,4,e);return l(g,f)};case
6:return function(a,b,c,d,e,f){var
h=r(6,0);k(h,0,a);k(h,1,b);k(h,2,c);k(h,3,d);k(h,4,e);k(h,5,f);return l(g,h)};default:return l(g,[0])}}function
dL(d){function
e(a){return 0}function
b(a){return d}var
c=0;return function(a){return dK(c,b,f6,dt,dv,e,a)}}function
gL(a){return cm(2*a.getLen()|0)}function
T(a){function
b(a){var
b=cn(a);a[2]=0;return b}return dK(1,gL,a2,co,function(a){return 0},b,a)}var
cq=[0,0];function
cs(a,b){var
c=a[b+1];if(kY(c)){if(Y(c)===252)return j(T(gM),c);if(Y(c)===253){var
e=cS(f4,c),d=0,g=e.getLen();for(;;){if(g<=d)return h(e,f3);var
f=e.safeGet(d),i=48<=f?58<=f?0:1:45===f?1:0;if(i){var
d=d+1|0;continue}return e}}return gN}return j(T(gO),c)}function
dM(a,b){if(a.length-1<=b)return gP;var
c=dM(a,b+1|0),d=cs(a,b);return z(T(gQ),d,c)}function
dN(a){var
b=cq[1];for(;;){if(b){var
q=b[2],r=b[1];try{var
s=j(r,a),e=s}catch(f){var
e=0}if(e)return e[1];var
b=q;continue}if(a===gV)return gW;if(a===dO)return gX;if(a[1]===dP){var
f=a[2],k=f[3],t=f[2],u=f[1];return bR(T(cr),u,t,k,k+5|0,gY)}if(a[1]===F){var
g=a[2],l=g[3],v=g[2],w=g[1];return bR(T(cr),w,v,l,l+6|0,gZ)}if(a[1]===dQ){var
i=a[2],m=i[3],x=i[2],y=i[1];return bR(T(cr),y,x,m,m+6|0,g0)}if(0===Y(a)){var
d=a.length-1,A=a[0+1][0+1];if(d<0||2<d)var
n=dM(a,2),o=cs(a,1),c=z(T(gR),o,n);else
switch(d){case
1:var
c=gT;break;case
2:var
p=cs(a,1),c=j(T(gU),p);break;default:var
c=gS}return h(A,c)}return a[0+1]}}function
dR(a){var
h=kh(ko(0));if(h){var
d=h[1],f=d.length-1-1|0,p=0;if(!(f<0)){var
c=p;for(;;){if(kX(i(d,c),g7)){var
b=i(d,c),k=0===b[0]?b[1]:b[1],e=k?0===c?g1:g4:0===c?g5:g6;if(0===b[0])var
l=b[5],m=b[4],n=b[3],o=b[2],g=bR(T(g2),e,o,n,m,l);else
var
g=j(T(g3),e);z(dL(a),g8,g)}var
q=c+1|0;if(f!==c){var
c=q;continue}break}}return 0}return j(dL(a),g9)}function
dS(a){cq[1]=[0,a,cq[1]];return 0}32===ck;try{var
ka=eV(j$),ct=ka}catch(f){f=s(f);if(f!==t)throw f;try{var
j_=eV(j9),dT=j_}catch(f){f=s(f);if(f!==t)throw f;var
dT=g$}var
ct=dT}var
dx=ct.getLen(),ha=82,dy=0;if(0<=0)if(dx<dy)var
bS=0;else
try{dw(ct,dx,dy,ha);var
gh=1,cu=gh,bS=1}catch(f){f=s(f);if(f!==t)throw f;var
cu=0,bS=1}else
var
bS=0;if(!bS)var
cu=aJ(gg);var
bz=[ak,function(a){var
o=ld(0),b=[0,r(55,0),0],j=0===o.length-1?[0,0]:o,l=j.length-1,p=0;if(!0){var
d=p;for(;;){k(b[1],d,d);var
u=d+1|0;if(54!==d){var
d=u;continue}break}}var
f=[0,g_],m=54+am(55,l)|0,q=0;if(!(m<0)){var
c=q;for(;;){var
n=c%55|0,s=f[1],g=h(s,M(i(j,eW(c,l))));f[1]=kQ(g,0,g.getLen());var
e=f[1];k(b[1],n,(i(b[1],n)^(((e.safeGet(0)+(e.safeGet(1)<<8)|0)+(e.safeGet(2)<<16)|0)+(e.safeGet(3)<<24)|0))&bW);var
t=c+1|0;if(m!==c){var
c=t;continue}break}}b[2]=0;return b}];function
dU(a,b){var
j=a?a[1]:cu,d=16;for(;;){if(!(b<=d))if(!(cl<(d*2|0))){var
d=d*2|0;continue}if(j){var
g=Y(bz),c=$===g?bz[1]:ak===g?a1(bz):bz;c[2]=(c[2]+1|0)%55|0;var
e=i(c[1],c[2]),f=(i(c[1],(c[2]+24|0)%55|0)+(e^e>>>25&31)|0)&bW;k(c[1],c[2],f);var
h=f}else
var
h=0;return[0,0,r(d,0),h,d]}}function
cv(a,b){return 3<=a.length-1?kq(10,aR,a[3],b)&(a[2].length-1-1|0):eW(kr(10,aR,b),a[2].length-1)}function
dV(a,b){var
j=cv(a,b),d=i(a[2],j);if(d){var
e=d[3],k=d[2];if(0===bT(b,d[1]))return k;if(e){var
f=e[3],l=e[2];if(0===bT(b,e[1]))return l;if(f){var
m=f[3],n=f[2];if(0===bT(b,f[1]))return n;var
c=m;for(;;){if(c){var
g=c[3],h=c[2];if(0===bT(b,c[1]))return h;var
c=g;continue}throw t}}throw t}throw t}throw t}a([n,hc,0]);function
dW(a){var
b=[];lg(b,[0,b,b]);return b}var
cw=a([n,hd,0]),ab=[0,0];function
cx(a){var
c=a[1];if(3===c[0]){var
d=c[1],b=cx(d);if(b!==d)a[1]=[3,b];return b}return a}function
ao(a){return cx(a)}var
cy=[0,function(a){du(he);du(dN(a));eS(aX,10);dR(aX);dv(aX);ch(0);return k$(2)}];function
dX(a,b){try{var
c=j(a,b)}catch(f){f=s(f);return j(cy[1],f)}return c}function
cU(a,b,c,d){var
f=c,e=d;for(;;)if(typeof
f===B)return a<50?ai(1+a,b,e):aj(ai,[0,b,e]);else
switch(f[0]){case
1:j(f[1],b);return a<50?ai(1+a,b,e):aj(ai,[0,b,e]);case
2:var
h=[0,f[2],e],f=f[1],e=h;continue;default:var
g=f[1][1];if(g){j(g[1],b);return a<50?ai(1+a,b,e):aj(ai,[0,b,e])}else
return a<50?ai(1+a,b,e):aj(ai,[0,b,e])}}function
ai(a,b,c){return c?a<50?cU(1+a,b,c[1],c[2]):aj(cU,[0,b,c[1],c[2]]):0}function
hf(b,c,d){return bU(cU(0,b,c,d))}function
lj(b,c){return bU(ai(0,b,c))}function
cV(a,b,c){var
e=b,d=c;for(;;)if(typeof
e===B)return a<50?aE(1+a,d):aj(aE,[0,d]);else
switch(e[0]){case
1:var
f=e[1];if(f[4]){f[4]=0;f[1][2]=f[2];f[2][1]=f[1]}return a<50?aE(1+a,d):aj(aE,[0,d]);case
2:var
h=[0,e[2],d],e=e[1],d=h;continue;default:var
g=e[2];ab[1]=e[1];dX(g,0);return a<50?aE(1+a,d):aj(aE,[0,d])}}function
aE(a,b){return b?a<50?cV(1+a,b[1],b[2]):aj(cV,[0,b[1],b[2]]):0}function
hg(b,c){return bU(cV(0,b,c))}function
lk(b){return bU(aE(0,b))}function
bA(a,b){var
c=1===b[0]?b[1]===cw?(hg(a[4],0),1):0:0;return hf(b,a[2],0)}var
cz=[0,0],aL=[0,0,0];function
dY(a,b){var
h=cx(a),e=h[1];switch(e[0]){case
1:if(e[1]===cw)return 0;break;case
2:var
j=e[1];h[1]=b;var
g=ab[1],i=cz[1]?1:(cz[1]=1,0);bA(j,b);if(i){ab[1]=g;return 0}for(;;){if(0===aL[1]){cz[1]=0;ab[1]=g;return 0}if(0===aL[1])throw gk;aL[1]=aL[1]-1|0;var
c=aL[2],d=c[2];if(d===c)aL[2]=0;else
c[2]=d[2];var
f=d[1];bA(f[1],f[2]);continue}}return aJ(hh)}function
a4(a,b){return dY(a,[0,b])}function
dZ(a,b){return typeof
a===B?b:typeof
b===B?a:[2,a,b]}function
cA(a){if(typeof
a!==B)switch(a[0]){case
2:var
b=a[1],c=cA(a[2]);return dZ(cA(b),c);case
1:break;default:if(!a[1][1])return 0}return a}function
cB(a,b){var
c=ao(a),d=c[1];if(2===d[0]){var
e=d[1];c[1]=b;return bA(e,b)}throw[0,F,hj]}function
J(a){return[0,[0,a]]}var
hl=[0,hk];function
d0(a){return[0,[2,[0,[0,[0,a]],0,0,0]]]}function
bB(a){var
b=[0,[2,[0,1,0,0,0]]];return[0,b,b]}function
cC(a,b){var
d=[1,b],c=a[2],e=typeof
c===B?d:[2,d,c];a[2]=e;return 0}function
cD(a,b){var
c=ao(a)[1];switch(c[0]){case
1:if(c[1]===cw)return dX(b,0);break;case
2:var
d=c[1],e=[0,ab[1],b],f=d[4],g=typeof
f===B?e:[2,e,f];d[4]=g;return 0}return 0}function
N(a,b){var
d=ao(a),c=d[1];switch(c[0]){case
1:return[0,c];case
2:var
e=c[1],k=d0(d),q=ab[1];cC(e,function(a){switch(a[0]){case
0:var
r=a[1];ab[1]=q;try{var
t=j(b,r),o=t}catch(f){f=s(f);var
o=[0,[1,f]]}var
d=ao(k),g=ao(o),l=d[1];if(2===l[0]){var
c=l[1];if(d===g)return 0;var
e=g[1];if(2===e[0]){var
f=e[1];g[1]=[3,d];c[1]=f[1];var
m=dZ(c[2],f[2]),n=c[3]+f[3]|0;if(42<n){c[3]=0;c[2]=cA(m)}else{c[3]=n;c[2]=m}var
h=f[4],i=c[4],p=typeof
i===B?h:typeof
h===B?i:[2,i,h];c[4]=p;return 0}d[1]=e;return bA(c,e)}throw[0,F,hi];case
1:return cB(k,a);default:throw[0,F,hm]}});return k;case
3:throw[0,F,hn];default:return j(b,c[1])}}function
d1(a,b){return N(a,b)}function
d2(a,b){var
e=ao(a),c=e[1];switch(c[0]){case
1:return[0,c];case
2:var
i=c[1],d=d0(e),k=ab[1];cC(i,function(a){switch(a[0]){case
0:var
e=a[1];ab[1]=k;try{var
f=[0,j(b,e)],c=f}catch(f){f=s(f);var
c=[1,f]}return cB(d,c);case
1:return cB(d,a);default:throw[0,F,ho]}});return d;case
3:throw[0,F,hp];default:var
f=c[1];try{var
h=[0,j(b,f)],g=h}catch(f){f=s(f);var
g=[1,f]}return[0,g]}}function
d3(a){var
b=ao(a)[1];switch(b[0]){case
1:throw b[1];case
2:return 0;case
3:throw[0,F,hq];default:return[0,b[1]]}}var
ht=[0,function(a){return 0}],U=dW(0),hu=[0,0];function
hv(a){var
e=1-(U[2]===U?1:0);if(e){var
b=dW(0);b[1][2]=U[2];U[2][1]=b[1];b[1]=U[1];U[1][2]=b;U[1]=U;U[2]=U;hu[1]=0;var
c=b[2];for(;;){var
d=c!==b?1:0;if(d){if(c[4])a4(c[3],0);var
c=c[2];continue}return d}}return e}function
d4(c,b){if(b){var
d=b[2],a=b[1],e=function(a){return d4(c,d)};return d1(j(c,a),e)}return hl}var
v=b,O=null,ax=undefined;function
ay(a,b){return a==O?0:j(b,a)}function
bC(a,b,c){return a==O?j(b,0):j(c,a)}function
d5(a){function
b(a){return[0,a]}return bC(a,function(a){return 0},b)}function
aM(a){return a!==ax?1:0}function
ap(a,b){return a!==ax?j(b,a):0}function
a5(a,b,c){return a===ax?j(b,0):j(c,a)}function
G(a,b){return a===ax?j(b,0):a}function
bD(a){function
b(a){return[0,a]}return a5(a,function(a){return 0},b)}var
o=true,q=false,a6=RegExp,bE=Array;function
P(a,b){return a[b]}function
d6(a){return a}var
d7=Math,d8=a([n,hx,0]),cE=[0,d8,{}],hw=Date,hb=Y(cE)===n?cE:cE[0+1];cR(hy,hb);function
d9(a){return escape(a)}dS(function(a){return a[1]===d8?[0,new
y(a[2].toString())]:0});dS(function(a){return a
instanceof
bE?0:[0,new
y(a.toString())]});function
bF(a){return a}function
V(a){return a}function
g(a,b){a.appendChild(b);return 0}function
aN(a,b){a.removeChild(b);return 0}function
l(d){return V(be(function(a){if(a){var
e=j(d,a);if(!(e|0))a.preventDefault();return e}var
c=event,b=j(d,c);if(!(b|0))c.returnValue=b;return b}))}function
az(a){return a.toString()}function
ac(e,b,c,d){if(e.addEventListener===ax){var
f=cY.concat(b),g=function(a){var
d=[0,c,a,[0]];return function(a,b){return kG(d,a,b)}};e.attachEvent(f,g);return function(a){return e.detachEvent(f,g)}}e.addEventListener(b,c,d);return function(a){return e.removeEventListener(b,c,d)}}function
W(a){return j(a,0)}var
d_=kK(0)|0,hA=az(hz),hC=az(hB),hE=az(hD),d$=az(hF),hH=az(hG),hJ=az(hI),ea=az(hK),bG="2d",e=v.document;function
bH(a,b){return a?j(b,a[1]):0}function
a7(a,b){return a.createElement(b.toString())}function
aA(a,b){return a7(a,b)}var
eb=[0,fz];function
ed(a){return aA(a,hL)}function
ee(a){return aA(a,hM)}function
ef(a){return aA(a,hN)}function
p(a){return aA(a,hO)}function
bI(a){return aA(a,hP)}function
bJ(a){return aA(a,hQ)}function
eg(a){return a7(a,hR)}function
eh(a){return a7(a,hS)}var
ei=a([n,hT,0]);function
ej(a){var
b=aA(a,hU);if(1-(b.getContext==O?1:0))return b;throw ei}bF(v.HTMLElement)===ax;function
aO(b){function
a(a){return b.stopPropagation()}function
c(a){return b.cancelBubble=o}return a5(b.stopPropagation,c,a)}var
hV=kL(function(a){var
g=[0,v.requestAnimationFrame,[0,v.mozRequestAnimationFrame,[0,v.webkitRequestAnimationFrame,[0,v.oRequestAnimationFrame,[0,v.msRequestAnimationFrame,0]]]]];try{var
b=g;for(;;){if(!b)throw t;var
c=b[1],f=b[2];if(!aM(c)){var
b=f;continue}var
h=function(a){return c(a)};break}}catch(f){f=s(f);if(f===t){var
d=function(a){return new
hw().getTime()},e=[0,d(0)];return function(a){var
b=d(0),c=e[1]+16.6666666666666679-b,f=c<0?0:c;e[1]=b;v.setTimeout(a,f);return 0}}throw f}return h}),ad=kI(0),hX=v.FileReader,h0=cZ;function
ek(a){var
b=bB(0),c=b[1],d=[0,0],f=0,g=b[2];function
e(a,b){var
c=cZ<a?[0,h0,a-cZ]:[0,a,0],f=c[2],h=c[1],i=f==0?function(a){return a4(g,a)}:function(a){return e(f,a)};d[1]=[0,v.setTimeout(be(i),h*fb)];return 0}e(f,0);cD(c,function(a){var
b=d[1];return b?v.clearTimeout(b[1]):0});return c}ht[1]=function(a){return 1===a?(v.setTimeout(be(hv),0),0):0};function
el(a){return ad.log(a.toString())}cy[1]=function(a){el(h1);el(dN(a));return dR(aX)};function
a8(a){return new
a6(E(a),bf)}var
h2=new
a6("[$]",bf),h4=a8(h3);function
en(a,b){return b.split(aY(1,a).toString())}var
eo=a([n,h5,0]);function
aB(a){throw eo}var
em=a8(as(E(h6).replace(h4,"\\$&"))),ep=new
a6("\\+",bf);function
ae(a){ep[c(fy)]=0;return as(unescape(a.replace(ep,_)))}function
H(a,b){var
e=a?a[1]:1;if(e){var
f=as(d9(E(b)));em[c(fy)]=0;var
d=E(f);return as(d.replace(em,E(h7).replace(h2,"$$$$")))}return as(d9(E(b)))}var
h9=a([n,h8,0]);function
a9(a){try{var
c=a.getLen();if(0===c)var
d=ie;else{var
b=dw(a,a.getLen(),0,47);if(0===b)var
e=[0,ig,a9(an(a,1,c-1|0))];else
var
f=a9(an(a,b+1|0,(c-b|0)-1|0)),e=[0,an(a,0,b),f];var
d=e}}catch(f){f=s(f);if(f===t)return[0,a,0];throw f}return d}function
bK(a){return aZ(ii,aK(function(a){var
b=a[1],c=h(ih,H(0,a[2]));return h(H(0,b),c)},a))}function
cF(a){var
d=en(38,a),b=d.length;function
e(a,b){var
c=b;for(;;){if(0<=c){try{var
f=c-1|0,g=function(a){function
e(a){var
c=a[2],d=a[1];function
b(a){return ae(G(a,aB))}var
e=b(c);return[0,b(d),e]}var
b=en(61,a);if(2===b.length)var
d=P(b,1),c=bF([0,P(b,0),d]);else
var
c=ax;return a5(c,aB,e)},h=e([0,a5(P(d,c),aB,g),a],f)}catch(f){f=s(f);if(f===eo){var
c=c-1|0;continue}throw f}return h}return a}}return e(0,b-1|0)}var
ik=new
a6(E(ij)),im=new
a6(E(il));function
eq(a){switch(a[0]){case
1:var
c=a[1],i=c[6],j=c[5],k=c[2],v=c[3],w=c[1],x=Z(i,iE)?h(iF,H(0,i)):iN,y=j?h(iG,bK(j)):iM,z=h(y,x),A=h(iI,h(aZ(iH,aK(function(a){return H(0,a)},v)),z)),B=e5===k?iJ:h(iL,M(k)),C=h(B,A);return h(iK,h(H(0,w),C));case
2:var
d=a[1],l=d[4],m=d[3],D=d[1],E=Z(l,iO)?h(iP,H(0,l)):iU,F=m?h(iQ,bK(m)):iT,G=h(F,E);return h(iS,h(aZ(iR,aK(function(a){return H(0,a)},D)),G));default:var
b=a[1],e=b[6],f=b[5],g=b[2],n=b[3],o=b[1],p=Z(e,iu)?h(iv,H(0,e)):iD,q=f?h(iw,bK(f)):iC,r=h(q,p),s=h(iy,h(aZ(ix,aK(function(a){return H(0,a)},n)),r)),t=80===g?iz:h(iB,M(g)),u=h(t,s);return h(iA,h(H(0,o),u))}}var
a_=location;ae(a_.hostname);ae(a_.protocol);try{}catch(f){f=s(f);if(f[1]!==bs)throw f}a9(ae(a_.pathname));cF(a_.search);ae(a_.href);var
iV=v.FormData;function
er(a,b){if(b7<=a[1]){var
d=a[2];d[1]=[0,b,d[1]];return 0}var
e=a[2],c=b[2],f=b[1];return b0<=c[1]?e.append(f.toString(),c[2]):e.append(f.toString(),c[2])}function
cG(a){return ActiveXObject}var
i_=a([n,i9,0]);function
cH(a){return h(jh,a).toString()}var
cI="#794c0d";function
es(a){return G(a,function(a){return new
bE()})}var
R=es(window.hyp_style);function
A(a,b){return G(a,function(a){return b})}function
cJ(a,b){return[m,a[1]/b,a[2]/b]}function
aP(a){return a[1]*a[1]+a[2]*a[2]}function
cK(a){return Math.sqrt(aP(a))}function
ba(a){return[m,a[1],-a[2]]}function
aC(a){return[m,-a[1],-a[2]]}function
cL(a,b){return[m,a[1]+b[1],a[2]+b[2]]}function
cM(a,b){return[m,a[1]-b[1],a[2]-b[2]]}function
aq(a,b){return[m,a[1]*b[1]-a[2]*b[2],a[1]*b[2]+a[2]*b[1]]}function
et(a,b,c){return[m,a[1]*b[1]-a[2]*b[2]+c[1],a[1]*b[2]+a[2]*b[1]+c[2]]}function
cN(a,b){var
c=aP(b);return[m,(a[1]*b[1]+a[2]*b[2])/c,(a[2]*b[1]-a[1]*b[2])/c]}function
eu(a,b,c,d,e){var
f=et(c,e,d);return cN(et(a,e,b),f)}function
aD(b){var
c=aq(ba(b),D);return function(a){return eu(D,b,c,D,a)}}function
ev(a,b){var
d=b[2],e=b[1],i=a[2],f=aq(d,a[1]),c=cL(aq(f,ba(e)),D),j=cN(ba(c),c),g=aq(aq(i,d),j),h=cJ(g,cK(g));return[0,cN(cL(f,e),c),h]}function
aQ(a,b){var
c=cM(b,a),d=aq(a,b),e=1-aP(d);return cJ(cL(aq(d,ba(c)),c),e)}var
cO=JSON;function
cP(a){try{var
f=J(kn(a))}catch(f){f=s(f);if(f===t){var
aY=function(a){var
b=a[2],c=a[4];if(0!==b)if(200!==b)return[0,[2,[0,0,0,0,0]]];return J(c)},an=0,ao=0,aq=0,ar=0,at=0,au=0,k=0,A=0,aX=0,aJ=0?aX[1]:0,aL=au?au[1]:0,aN=ar?ar[1]:function(a,b){return 1};if(at){var
W=at[1];if(k){var
aO=k[1];av(function(a){return er(W,[0,a[1],a[2]])},aO)}var
c=[0,W]}else
if(k){var
aV=k[1],K=bD(bF(iV)),am=K?[0,808620462,new(K[1])()]:[0,b7,[0,0]];av(function(a){return er(am,[0,a[1],a[2]])},aV);var
c=[0,am]}else
var
c=0;if(c){var
X=c[1];if(A)var
Y=[0,i$,A,b_];else{if(b7<=X[1]){var
p=0,n=0,g=X[2][1];for(;;){if(g){var
C=g[2],r=g[1],aw=b0<=r[2][1]?0:1;if(aw){var
p=[0,r,p],g=C;continue}var
n=[0,r,n],g=C;continue}var
ax=ci(n);ci(p);if(ax)var
L=function(a){return M(d7.random()*1e9|0)},aF=L(0),Q=h(iX,h(L(0),aF)),ak=[0,jc,[0,h(jb,Q)],[0,164354597,Q]];else
var
ak=jd;var
al=ak;break}}else
var
al=je;var
Y=al}var
i=Y}else
var
i=[0,jf,A,b_];var
_=i[3],$=i[2],I=E(a),aP=i[1],ay=function(a){var
c=d6(a),b=as(G(P(c,1),aB).toLowerCase());if(Z(b,h_))if(Z(b,h$)){if(Z(b,ia))if(Z(b,ib)){if(Z(b,ic))if(Z(b,id))var
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
h=ae(G(P(c,5),aB)),k=function(a){return E(ip)},l=ae(G(P(c,9),k)),m=function(a){return E(iq)},n=cF(G(P(c,7),m)),o=a9(h),p=function(a){return E(ir)},i=as(G(P(c,4),p)),q=Z(i,io)?eU(i):e?e5:80,j=[0,ae(G(P(c,2),aB)),q,o,h,n,l],r=e?[1,j]:[0,j];return[0,r]}}throw h9},az=function(a){function
b(a){var
b=d6(a),c=ae(G(P(b,2),aB));function
d(a){return E(is)}var
e=as(G(P(b,6),d));function
f(a){return E(it)}var
g=cF(G(P(b,4),f));return[0,[2,[0,a9(c),c,g,e]]]}function
c(a){return 0}return bC(im.exec(I),c,b)},D=bC(ik.exec(I),az,ay);if(D){var
u=D[1];switch(u[0]){case
1:var
T=u[1],U=T.slice(),aI=T[5];U[5]=0;var
j=[0,eq([1,U]),aI],m=1;break;case
2:var
m=0;break;default:var
R=u[1],S=R.slice(),aH=R[5];S[5]=0;var
j=[0,eq([0,S]),aH],m=1}}else
var
m=0;if(!m)var
j=[0,a,0];var
aa=j[1],ab=ds(j[2],aL),ac=ab?h(aa,h(ja,bK(ab))):aa,ad=bB(0),af=ad[2],ag=ad[1];try{var
aE=new
XMLHttpRequest(),b=aE}catch(f){try{var
aD=new(cG(0))("Msxml2.XMLHTTP"),b=aD}catch(f){try{var
aC=new(cG(0))("Msxml3.XMLHTTP"),b=aC}catch(f){try{var
aA=new(cG(0))("Microsoft.XMLHTTP")}catch(f){throw[0,F,iW]}var
b=aA}}}if(an)b.overrideMimeType(an[1].toString());b.open(aP.toString(),ac.toString(),o);if($)b.setRequestHeader("Content-type",$[1].toString());av(function(a){return b.setRequestHeader(a[1].toString(),a[2].toString())},aJ);var
v=function(a){function
c(a){return[0,new
y(a)]}function
d(a){return 0}return bC(b.getResponseHeader(E(a)),d,c)},ah=[0,0],w=function(a){var
c=ah[1]?0:z(aN,b.status,v)?0:(dY(af,[1,[0,i_,[0,b.status,v]]]),b.abort(),1);ah[1]=1;return 0};b.onreadystatechange=be(function(a){switch(b.readyState){case
2:if(!d_)return w(0);break;case
3:if(d_)return w(0);break;case
4:w(0);var
c=function(a){var
c=d5(b.responseXML);if(c){var
d=c[1];return V(d.documentElement)===O?0:[0,d]}return 0};return a4(af,[0,ac,b.status,v,new
y(b.responseText),c])}return 0});if(aq){var
aQ=aq[1];b.onprogress=l(function(a){z(aQ,a.loaded,a.total);return o})}var
aR=function(a){if(ao){var
b=ao[1];return a.onprogress=l(function(a){z(b,a.loaded,a.total);return o})}return 0};ap(b.upload,aR);if(c){var
x=c[1];if(b7<=x[1]){var
ai=x[2];if(typeof
_===B){var
aS=ai[1];b.send(V(aZ(i8,aK(function(a){var
b=a[2],c=a[1];if(b0<=b[1]){var
d=h(i6,H(0,new
y(b[2].name)));return h(H(0,c),d)}var
e=h(i7,H(0,new
y(b[2])));return h(H(0,c),e)},aS)).toString()))}else{var
aj=_[2],aT=function(a){var
c=V(a.join(d));return aM(b.sendAsBinary)?b.sendAsBinary(c):b.send(c)},aU=ai[1],e=new
bE(),aG=function(a){e.push(h(iZ,h(aj,iY)).toString());return e};d2(d2(d4(function(a){e.push(h(i1,h(aj,i0)).toString());var
g=a[2],n=a[1];if(b0<=g[1]){var
b=g[2],s=function(a){var
c=bD(b.name),g="Content-Type: application/octet-stream\r\n",i='"\r\n';if(c)var
f=c[1];else
var
d=bD(b.fileName),f=d?d[1]:aW(hW);e.push(h(i3,h(n,i2)).toString(),f,i,g);e.push(bX,a,bX);return J(0)},k=bD(bF(hX)),d=-1041425454;if(k){var
c=new(k[1])(),i=bB(0),j=i[1],p=i[2];c.onloadend=l(function(a){if(2===c.readyState){var
b=c.result,e=kj(typeof
b,"string")?V(b):O,d=d5(e);if(!d)throw[0,F,hY];a4(p,d[1])}return q});cD(j,function(a){return c.abort()});if(typeof
d===B)if(e1===d)c.readAsDataURL(b);else
if(fr<=d)c.readAsText(b);else
c.readAsBinaryString(b);else
c.readAsText(b,d[2]);var
o=j}else{var
f=function(a){return aW(hZ)};if(typeof
d===B)var
m=e1===d?aM(b.getAsDataURL)?b.getAsDataURL():f(0):fr<=d?aM(b.getAsText)?b.getAsText("utf8"):f(0):aM(b.getAsBinary)?b.getAsBinary():f(0);else
var
r=d[2],m=aM(b.getAsText)?b.getAsText(r):f(0);var
o=J(m)}return d1(o,s)}var
t=g[2];e.push(h(i5,h(n,i4)).toString(),t,bX);return J(0)},aU),aG),aT)}}else
b.send(x[2])}else
b.send(O);cD(ag,function(a){return b.abort()});return N(ag,aY)}throw f}return f}function
ew(a){var
b=bJ(e);function
g(a){return J(b)}var
c=bB(0),d=c[2],f=c[1];b.onload=l(function(a){a4(d,0);return q});b.src=a;return N(f,g)}function
bL(a,b){var
c=ej(v.document);c.width=a;c.height=b;return c}var
bM=p(e);bM.style.position=x;bM.style.bottom=f;bM.style.left=f;bM.style.lineHeight="0.9em";var
bN=[ak,function(a){var
b=p(e);b.style.visibility=c9;b.style.position=x;b.style.whiteSpace=dg;g(e.body,b);return b}],ex=window.navigator;function
ey(a){function
b(a){function
b(a){return aH}return G(ex.userLanguage,b)}return G(ex.language,b).substring(0,2)}function
ji(a){var
b=a.getItem(ff);return b==O?ey(0):b}var
af=[0,a5(v.localStorage,ey,ji)];ad.log(af[1]);function
ez(a){return es(a[af[1]])}function
eA(a){var
e=A(R.padding,0),b=A(R.border,fH)+e,c=a.width,d=a.height,f=am(5,c/2-b);return[0,f,am(5,d/2-b),c/2,d/2]}function
bO(a,b,c){var
d=eA(a),e=[m,(b-d[3])/d[1],(c-d[4])/d[2]],f=cK(e);return f<=eY?e:cJ(e,f/eY)}var
bb=4*0.785398163397448279;function
eB(a,b,c,d,e,f,g,h){a.save();a.translate(b,c);a.scale(d,e);a.arc(0,0,1,f,g,h);return a.restore()}function
eC(a,b){return j(b,a)}function
eD(a){var
b=a[2],c=1;return bw(function(a,b){return a+eD(b)|0},c,b)}function
eE(a){var
b=a[2],c=0;return bw(function(a,b){return(a+1|0)+eE(b)|0},c,b)}function
eF(a){var
b=a[2],d=b.length-1-1|0;if(!(d<0)){var
c=d;for(;;){var
f=i(b,c),e=d7.random()*(c+1|0)|0;k(b,c,i(b,e));k(b,e,f);var
g=c-1|0;if(0!==c){var
c=g;continue}break}}return bu(eF,b)}var
bc=[0,0],eG=[0,function(a){return 0}];function
eH(a){bc[1]=0;return j(eG[1],0)}function
X(a){return bc[1]?0:(bc[1]=1,j(hV,be(function(a){return bc[1]?eH(0):0})))}a8(jp);a8(jq);a8(jr);function
eI(a,b){try{var
O=bx(af[1],a)[1],m=O}catch(f){f=s(f);if(f!==t)throw f;try{var
N=bx(aH,a)[1],u=N}catch(f){f=s(f);if(f!==t)throw f;var
u=dU(0,11)}var
m=u}try{var
M=dV(m,jt),v=M}catch(f){f=s(f);if(f!==t)throw f;var
v=js}e.title=v.toString();var
w=b.length-1-1|0,H=0;if(!(w<0)){var
l=H;for(;;){var
x=i(b,l),n=x[2],I=x[1];if(typeof
n===B)var
E=0;else
if(b2===n[1]){var
y=n[2],z=y[3],K=y[1];try{var
D=dV(m,z),q=A(R.nodeFont,"20px sans-serif"),o=Y(bN),j=$===o?bN[1]:ak===o?a1(bN):bN;j.style.font=q;var
p=e.createTextNode(D.toString());g(j,p);var
F=j.clientHeight,G=j.clientWidth;aN(j,p);var
f=G+8|0,h=F+8|0,r=bL(f,h),c=r.getContext(bG);c.fillStyle=A(R.nodeBackgroundColor,cI);var
d=cg(4,cg(f,h)/2);c.beginPath();c.moveTo(0+d,0);c.arcTo(0+f,0,0+f,0+d,d);c.arcTo(0+f,0+h,0+f-d,0+h,d);c.arcTo(0,0+h,0,0+h-d,d);c.arcTo(0,0,0+d,0,d);c.fill();c.font=q;c.fillStyle=A(R.nodeColor,"black");c.textAlign=e7;c.textBaseline=cX;c.fillText(D.toString(),f/2,h/2);var
L=[0,r],C=L}catch(f){f=s(f);if(f!==t)throw f;var
C=0}k(b,l,[0,I,[0,b2,[0,K,C,z]]]);var
E=1}else
var
E=0;var
J=l+1|0;if(w!==l){var
l=J;continue}break}}return 0}function
eJ(a){var
b=0;return bw(function(a,b){return a+b[1]},b,a)}function
eK(a){var
b=a[2];if(0===b.length-1)return[0,1,[0]];var
c=bv(eK,b);return[0,0.6*eJ(c),c]}function
eN(a){var
h=A(R.buttonColor,"#888888"),d=bL(32,32),b=d.getContext(bG);b.save();b[c(c8)]=2;b.strokeStyle=h;if(a){b[c("shadowBlur")]=4;b.shadowColor=h}b.beginPath();var
e=4+4/fA,g=28-4/fA;b.moveTo(e,e);b.lineTo(g,g);b.moveTo(e,g);b.lineTo(g,e);b.stroke();b.restore();var
i=a?jB:jC;d.className=i.toString();d.style.position=x;d.style.top=f;d.style.right=f;return d}function
bd(a,b,c){function
j(a){var
i=bJ(e);i.src=cH(c);var
d=p(e);d.style.position=x;d.style.width=da;var
j=d.style;j.height=h(M(am(38,b)),jD).toString();d.style.margin=bk;d.style.borderRadius=bk;var
f=am(6,44-b|0),k=d.style,l=h(jF,h(M(f-(f/2|0)|0),jE));k.padding=h(M(f/2|0),l).toString();var
m=a?jG:jI;d.className=h(jH,m).toString();g(d,i);return d}var
d=p(e);d.className=b8;d.style.width=b6;var
k=d.style;k.height=h(M(8+am(38,b)|0),jJ).toString();if(a){var
l=a[1],f=bI(e);f.target=di;f.href=l;g(d,f);var
i=f}else
var
i=d;g(i,j(1));g(i,j(0));return d}function
bP(a){var
b=p(e);b.style.position=x;b.className="tooltip on";b.innerHTML=a;return b}function
eO(a,b){var
c=[0,0];return a.onclick=l(function(a){if(!c[1]){c[1]=1;var
d=[0,O];d[1]=V(ac(e,hA,l(function(a){function
e(a){ay(d[1],W);b.className=db;c[1]=0;return J(0)}N(ek(0),e);return o}),o));b.className=bY}aO(a);return q})}function
eP(V,b,c,d){return N(b,function(a){var
z=ez(V),B=[0,-1],G=a.length-1-1|0,W=c.toString(),X=0;if(!(G<0)){var
w=X;for(;;){if(W===i(a,w)[1])B[1]=w;var
ag=w+1|0;if(G!==w){var
w=ag;continue}break}}if(0<=B[1]){var
k=i(a,B[1]);ad.log(c,B[1]);var
r=p(e);r.style.margin="10px";r.style.position=x;r.style.top=f;r.style.bottom=f;r.style.left=f;r.style.right=f;var
m=p(e);m.style.position=x;m.style.top=f;m.style.bottom="4em";m.style.left=da;m.style.right=da;var
H=function(a){var
b=p(e);b.style.position=x;b.style.top=f;b.style.bottom=f;b.style.left=f;b.style.right=f;b.style.margin=L;var
c=b.style;c.maxHeight=h(M(k[5]),jK).toString();g(b,a);return b},b=bJ(e),I=Y(d),Z=$===I?d[1]:ak===I?a1(d):d,K=d3(Z);if(K){var
_=K[1],s=bL(k[4],k[5]),aa=s.getContext(bG);aa.drawImage(_,0,0,k[4],k[5]);s.style.display=fG;s.style.height=L;s.style.width=L;s.style.maxWidth=Q;s.style.maxHeight=Q;s.style.marginLeft=L;s.style.marginRight=L;var
N=H(s);g(m,N);b.onload=l(function(a){aN(m,N);return q})}var
O=k[7],ab=O?O[1]:h(jT,h(c,jS)).toString();b.src=ab;b.width=k[4];b.height=k[5];b.style.display=fG;b.style.height=L;b.style.width=L;b.style.maxWidth=Q;b.style.maxHeight=Q;b.style.marginLeft=L;b.style.marginRight=L;var
P=H(b),R=function(a){aN(m,P);return q};b.onerror=l(R);b.onabort=l(R);g(m,P);g(r,m);var
u=p(e);u.innerHTML=k[3];u.onclick=l(function(a){aO(a);return o});u.className=bY;u.style.position=x;u.style.bottom=f;u.style.marginRight=L;u.style.marginLeft=L;g(r,u);var
j=p(e);g(j,r);j.className=fi;j.style.width=Q;j.style.height=Q;j.style.position=x;j.style.top=f;j.style.left=f;j.style.zIndex=fB;var
t=p(e);t.className=b8;t.style.position=x;t.style.top=f;t.style.right=f;t.style.cursor=bj;g(t,eN(1));g(t,eN(0));var
C=bP(A(z.close,"Click anywhere to return to the tree"));C.style.right="32px";C.style.top="20px";g(t,C);g(j,t);var
v=p(e);v.style.position=x;v.style.top=f;v.style.left=f;var
ac=af[1]===aH?jL:h(jR,new
y(af[1])),S=bd([0,h(jM,h(new
y(k[2]),ac)).toString()],52,jN),D=bP(A(z.wikimediaCommons,"See image description on Wikimedia Commons"));D.style.left=b6;D.style.top="12px";g(S,D);g(v,S);var
E=bd(0,34,jO),n=p(e),T=[0,0],F=ee(e),U=function(a,b){var
d=ed(e),f=[0,1],j=k[6];bu(function(a){var
i=a[1],l=a[3];if(a[2]===b){f[1]=0;var
c=bI(e);g(c,e.createTextNode(i));c.target=di;var
j=new
y(l),m=0===j.getLen()?new
y(i):j,n=h(jP,m);c.href=h(jQ,h(new
y(b),n)).toString();var
k=ef(e);g(k,c);return g(d,k)}return 0},j);if(f[1])return 0;T[1]++;var
c=eg(e);g(c,e.createTextNode(a));g(F,c);var
i=eh(e);g(i,d);return g(F,i)},ae=af[1];U(A(z.language,fa),ae);if(af[1]!==aH)U(fa,aH);if(0<T[1])g(n,F);else
g(n,e.createTextNode(A(z.noRef,"No reference found.")));n.className=db;n.style.position=x;n.style.left=b6;n.style.top="62px";n.style.whiteSpace=dg;g(E,n);g(v,E);n.onclick=l(function(a){aO(a);return o});eO(E,n);v.onclick=l(function(a){aO(a);return o});g(j,v);g(e.body,j);j.onclick=l(function(a){aN(e.body,j);return o})}return J(0)})}var
jV=jU.toString();av(function(a){ew(cH(a));return 0},jg);function
jj(a){return J(cO.parse(a.toString()))}var
jl=N(cP(jk),jj);function
jx(a){var
u=cO.parse(a.toString()),B=u[1],I=u[2];eF(B);function
K(a){var
c=a[3],d=a[2],e=a[1],b=dU(0,dl);bu(function(a){var
p=new
y(a[1]),t=new
y(a[2]),n=cv(b,p);k(b[2],n,[0,p,t,i(b[2],n)]);b[1]=b[1]+1|0;var
o=b[2].length-1<<1<b[1]?1:0;if(o){var
e=b[2],f=e.length-1,g=f*2|0,h=g<cl?1:0;if(h){var
d=r(g,0);b[2]=d;var
j=function(a){if(a){var
c=a[1],f=a[2];j(a[3]);var
e=cv(b,c);return k(d,e,[0,c,f,i(d,e)])}return 0},l=f-1|0,q=0;if(!(l<0)){var
c=q;for(;;){j(i(e,c));var
s=c+1|0;if(l!==c){var
c=s;continue}break}}var
m=0}else
var
m=h;return m}return o},d);return[0,e,[0,b,c]]}var
C=eC(eC(I,function(a){return bv(K,a)}),f7);function
o(a,b){var
c=new
y(b[1]),f=b[2];if(0===c.getLen())var
d=c4;else
if(fo===c.safeGet(0))var
e=an(c,1,c.getLen()-1|0),d=[0,dh,[0,[ak,function(a){function
b(a){function
b(a){X(0);return J(a)}return N(ew(h(jo,h(e,jn)).toString()),b)}return N(ek(0),b)}],e]];else
var
d=[0,b2,[0,a,0,c]];return[0,d,bv(function(a){return o(0,a)},f)]}var
d=o(1,B),c=eD(d),v=r(c,a$),w=r(eE(d),jv),g=r(c,[0,[0],c4]),x=[0,0],z=[0,0],H=eK(d);function
A(a,b,c,d,e,f){var
o=a[2],l=b[2],p=x[1],H=a[1];x[1]++;k(v,p,d[1]);if(0===o.length-1)var
y=[0];else{var
q=eJ(l),I=[0,0],J=c?(q-i(l,0)[1])/2:0,s=[0,J],B=function(a,b){var
h=b[1],c=Math.acos(f[1])*h/q,i=Math.acos(f[1])*((s[1]+h/2)/q*2-1);I[1]++;s[1]=s[1]+h;var
g=bb/3,l=[m,(Math.cos(c)-Math.cos(g))/(1-Math.cos(g+c)),0],r=[m,Math.cos(g),Math.sin(g)],n=fq<l[1]?[0,l,r]:[0,eL,j(aD(aC(eL)),[m,Math.cos(c),Math.sin(c)])],t=n[2],o=A(a,b,0,ev(ev([0,n[1],D],[0,a$,[m,Math.cos(i),Math.sin(i)]]),d),e*0.94,t),u=o[1],v=z[1];z[1]++;k(w,v,[0,p,u,e]);return o},n=o.length-1;if(l.length-1!==n)throw[0,F,ju];if(0===n)var
C=[0];else{var
t=r(n,B(i(o,0),i(l,0))),u=n-1|0,E=1;if(!(u<1)){var
h=E;for(;;){k(t,h,B(i(o,h),i(l,h)));var
G=h+1|0;if(u!==h){var
h=G;continue}break}}var
C=t}var
y=C}k(g,p,[0,[0],H]);return[0,p,y]}var
t=A(d,H,1,[0,a$,D],6,jw),f=r(g.length-1,[0,[0],[0]]);function
l(a){return a[1]}function
n(a){return[0,a,c4!==i(g,a)[2]?1:0]}function
e(a){var
b=a[2],c=a[1];bu(e,b);if(0===b.length-1)var
g=[0,n(c)],d=[0,[0,n(c)],g];else
var
h=i(f,l(i(b,b.length-1-1|0)))[2],d=[0,i(f,l(i(b,0)))[1],h];return k(f,c,d)}e(t);var
p=r(g.length-1,[0]);function
q(a,b,c,d){var
g=a[2],j=a[1];k(p,j,kb([0,b,[0,c,[0,d,[0,bv(function(a){return n(l(a))},g),0]]]]));var
m=0===b.length-1?1:0,h=g.length-1,o=h-1|0,r=0;if(!(o<0)){var
e=r;for(;;){var
s=0<e?i(f,l(i(g,e-1|0)))[2]:m?i(f,l(i(g,h-1|0)))[2]:c,t=e<(h-1|0)?i(f,l(i(g,e+1|0)))[1]:m?i(f,l(i(g,0)))[1]:d,u=[0,n(j)];q(i(g,e),u,s,t);var
v=e+1|0;if(o!==e){var
e=v;continue}break}}return 0}q(t,[0],[0],[0]);var
s=g.length-1-1|0,E=0;if(!(s<0)){var
b=E;for(;;){k(g,b,[0,i(p,b),i(g,b)[2]]);var
G=b+1|0;if(s!==b){var
b=G;continue}break}}eI(C,g);return J([0,[0,v,w,g,[0,r(c,0),r(c,0),r(c,0),r(c,0)]],C])}var
jy=N(cP(jm),jx);function
jz(a){return J(cO.parse(a.toString()))}var
eM=N(cP(jA),jz);v.onload=l(function(a){try{ej(v.document);var
r=ao(N(jy,function(a){var
E=a[2],b=a[1],r=b[4],C=b[3],aL=b[2],M=b[1];return N(jl,function(F){var
w=e.documentElement;w.style.overflow=c9;w.style.height=Q;e.body.style.overflow=c9;e.body.style.margin=e0;e.body.style.height=Q;var
h=bL(w.clientWidth,w.clientHeight);g(e.body,h);var
b=[0,[0,a$,D]],n=[0,b[1]],H=M.length-1,u=0===H?[0]:ke(M,0,H);eG[1]=function(a){bc[1]=0;ad.time(c$);var
aM=w.clientWidth,aN=w.clientHeight,a$=aM!==h.width?0:aN!==h.height?0:1;if(!a$){h.width=aM;h.height=aN}var
aO=n[1],ab=aO[2],ac=aO[1],ae=M.length-1-1|0,aS=aq(ba(ac),ab),aT=0;if(!(ae<0)){var
x=aT;for(;;){k(u,x,eu(ab,ac,aS,D,i(M,x)));var
aU=x+1|0;if(ae!==x){var
x=aU;continue}break}}ad.timeEnd(c$);ad.time(fc);var
b=h.getContext(bG),d=eA(h),E=d[4],F=d[3],aV=d[2],aW=d[1];b.clearRect(0,0,h.width,h.height);var
as=A(R.padding,0);b.beginPath();eB(b,F,E,aW+as,aV+as,0,7,q);function
aX(a){b.fillStyle=a;return b.fill()}ap(R.backgroundColor,aX);function
aY(a){b[c(c8)]=1;b.strokeStyle=a;return b.stroke()}ap(R.boundaryColor,aY);b[c(c8)]=2;b.lineCap="round";b.strokeStyle=A(R.treeColor,cI);var
l=d[2],o=d[1],at=aL.length-1-1|0,aZ=0;if(!(at<0)){var
K=aZ;for(;;){var
X=i(aL,K),e=i(u,X[1]),g=i(u,X[2]),_=e[1]-g[1],aa=e[2]-g[2],a9=X[3];if(4<o*l*(_*_+aa*aa)){b.lineWidth=a9;var
Q=2*(e[1]*g[2]-e[2]*g[1]);if(Math.abs(Q)<0.05){var
ai=d[4],aj=d[3],al=d[2],an=d[1];b.beginPath();b.moveTo(e[1]*an+aj,e[2]*al+ai);b.lineTo(g[1]*an+aj,g[2]*al+ai);b.stroke()}else{var
ao=aP(e)+1,ar=aP(g)+1,j=[m,(g[2]*ao-e[2]*ar)/Q,(e[1]*ar-g[1]*ao)/Q],af=d[4],ag=d[3],L=d[2],t=d[1],N=cK(cM(e,j)),O=Math.atan2(e[2]-j[2],e[1]-j[1]),P=Math.atan2(g[2]-j[2],g[1]-j[1]);b.beginPath();var
ah=(P-O+2*bb)%(2*bb);if(t==L)b.arc(j[1]*t+ag,j[2]*t+af,N*t,O,P,!!(bb<ah?1:0));else
eB(b,j[1]*t+ag,j[2]*L+af,N*t,N*L,O,P,!!(bb<ah?1:0));b.stroke()}}var
a_=K+1|0;if(at!==K){var
K=a_;continue}break}}var
au=[0,0],av=[0,0],aw=C.length-1-1|0,a0=0;if(!(aw<0)){var
f=a0;for(;;){var
ax=i(C,f),G=ax[2],S=ax[1];if(typeof
G===B)var
aQ=0;else{if(b2<=G[1]){var
ay=G[2],az=ay[2];if(az){var
T=az[1],p=i(u,f),a3=ay[1],a4=1,a5=bw(function(p){return function(a,b){return cg(a,aP(cM(i(u,b[1]),p)))}}(p),a4,S),U=T.width,V=T.height,H=Math.sqrt(U*U+V*V),aA=Math.sqrt(a5*o*l)*fH,aB=H/2<aA?H/2:aA,I=U/H*aB,J=V/H*aB;if(a3){b.beginPath();b.fillStyle=A(R.nodeBackgroundColor,cI);b.arc(p[1]*o+F,p[2]*l+E,Math.sqrt(I*I+J*J),0,7,q);b.fill()}b.drawImage(T,p[1]*o+F-I,p[2]*l+E-J,2*I,2*J);var
Z=1}else
var
aQ=0,Z=0}else{var
s=G[2][1];k(r[3],f,0);var
v=i(u,f),aC=function(v){return function(a,b,c,d){var
f=[0,d],g=a.length-1-1|0,o=0;if(!(g<0)){var
e=o;for(;;){var
h=i(a,e),j=h[1],k=Math.abs(i(u,j)[1]-v[1])/b,l=Math.abs(i(u,j)[2]-v[2])/c,p=h[2],m=l<k?k:l,n=p?m:1.9*m;if(n<f[1])f[1]=n;var
q=e+1|0;if(g!==e){var
e=q;continue}break}}return f[1]}}(v);if(Y(s)!==ak){var
aD=Y(s),a6=$===aD?s[1]:ak===aD?a1(s):s,aE=d3(a6);if(aE){var
W=aE[1],aF=W.width,aG=W.height,a7=aC(S,1,1,1),aH=a7/am(aF/o,aG/l),y=aF*aH/2,z=aG*aH/2;if(1<y)if(1<z){var
aI=v[1]*o+F,aJ=v[2]*l+E;b.drawImage(W,aI-y,aJ-z,2*y,2*z);k(r[1],f,aI);k(r[2],f,aJ);k(r[3],f,y);k(r[4],f,z);au[1]++;var
bd=2<=y?2<=z?(av[1]++,1):0:0,aR=1}else
var
aR=0;else
var
aR=0}}else{var
a8=aC(S,1,1,1);if(1<a8*am(o,l)){var
aK=Y(s);if($!==aK)if(ak===aK)a1(s)}}var
Z=1}if(Z)var
aQ=1}var
a2=f+1|0;if(aw!==f){var
f=a2;continue}break}}ad.timeEnd(fc);return ad.log(au[1],av[1])};eH(0);v.onresize=l(function(a){var
b=e.documentElement,c=b.clientHeight,d=b.clientWidth!==h.width?0:c!==h.height?0:1;if(!d)X(1);return o});function
G(a,b,c){var
e=[0,-1],f=a[3].length-1-1|0,g=0;if(!(f<0)){var
d=g;for(;;){var
i=0<a[3][d+1]?Math.abs(b-a[1][d+1])<a[3][d+1]?Math.abs(c-a[2][d+1])<a[4][d+1]?(e[1]=d,1):0:0:0,h=d+1|0;if(f!==d){var
d=h;continue}break}}return e[1]}var
y=[0,0];function
I(a,b){return-1===G(r,a,b)?y[1]?(h.style.cursor=d,y[1]=0,0):0:y[1]?0:(h.style.cursor=bj,y[1]=1,0)}h.onmousemove=l(function(a){I(a.clientX,a.clientY);return q});h.onmousedown=l(function(a){var
f=a.clientX,g=a.clientY,c=[0,0],k=[0,O],m=ac(e,hE,l(function(a){var
e=a.clientX,i=a.clientY;if(c[1])var
k=0;else{if(4<bt(e-f|0))var
d=1;else
if(4<bt(i-g|0))var
d=1;else
var
k=0,d=0;if(d){c[1]=1;h.style.cursor=fh;var
k=1}}if(c[1]){var
l=bO(h,f,g),m=bO(h,e,i);n[1]=[0,aQ(j(aD(aC(b[1][1])),l),m),D];X(1)}aO(a);return o}),o);k[1]=V(ac(e,hC,l(function(a){W(m);ay(k[1],W);if(c[1]){h.style.cursor=d;var
l=a.clientY,p=a.clientX;b[1]=n[1];y[1]=0;I(p,l)}else{var
f=G(r,a.clientX,a.clientY);if(0<f){var
e=i(C,f)[2];if(typeof
e===B)var
j=0;else
if(dh===e[1]){var
g=e[2];eP(F,eM,g[2],g[1]);var
j=1}else
var
j=0}}return o}),o));return o});ac(h,hH,l(function(a){function
c(a){var
f=a.identifier,m=a.clientX,p=a.clientY,c=[0,0],s=ac(e,hJ,l(function(a){var
e=a.changedTouches.length-1|0,g=0;if(!(e<0)){var
d=g;for(;;){var
i=function(a){if(a.identifier===f){var
e=a.clientX,g=a.clientY;if(c[1])var
i=0;else{if(4<bt(e-m|0))var
d=1;else
if(4<bt(g-p|0))var
d=1;else
var
i=0,d=0;if(d){c[1]=1;h.style.cursor=fh;var
i=1}}if(c[1]){ad.time(c$);var
k=bO(h,m,p),l=bO(h,e,g);n[1]=[0,aQ(j(aD(aC(b[1][1])),k),l),D];return X(1)}return 0}return 0};ap(a.changedTouches.item(d),i);var
k=d+1|0;if(e!==d){var
d=k;continue}break}}aO(a);return q}),o),g=[0,O],k=[0,O];g[1]=V(ac(e,ea,l(function(a){var
j=a.changedTouches.length-1|0,l=0;if(!(j<0)){var
e=l;for(;;){var
m=function(a){if(a.identifier===f){var
m=a.clientX,o=a.clientY;W(s);ay(g[1],W);ay(k[1],W);if(c[1]){h.style.cursor=d;b[1]=n[1];return 0}var
j=G(r,m,o);if(0<j){var
e=i(C,j)[2];if(typeof
e!==B)if(dh===e[1]){var
l=e[2];eP(F,eM,l[2],l[1]);return 0}return 0}return 0}return 0};ap(a.changedTouches.item(e),m);var
p=e+1|0;if(j!==e){var
e=p;continue}break}}return o}),o));k[1]=V(ac(e,ea,l(function(a){var
i=a.changedTouches.length-1|0,j=0;if(!(i<0)){var
e=j;for(;;){var
l=function(a){if(a.identifier===f){W(s);ay(g[1],W);ay(k[1],W);if(c[1])h.style.cursor=d;b[1]=n[1];return 0}return 0};ap(a.changedTouches.item(e),l);var
m=e+1|0;if(i!==e){var
e=m;continue}break}}return q}),o));return 0}ap(a.changedTouches.item(0),c);return q}),o);ac(e,d$,l(function(a){var
c=a.keyCode-37|0;if(c<0||3<c)return o;switch(c){case
1:n[1]=[0,aQ(j(aD(aC(b[1][1])),jY),jZ),D];b[1]=n[1];X(1);return q;case
2:n[1]=[0,aQ(j(aD(aC(b[1][1])),j0),j1),D];b[1]=n[1];X(1);return q;case
3:n[1]=[0,aQ(j(aD(aC(b[1][1])),j2),j3),D];b[1]=n[1];X(1);return q;default:n[1]=[0,aQ(j(aD(aC(b[1][1])),jW),jX),D];b[1]=n[1];X(1);return q}}),o);var
K=[0,0];function
N(a){var
y=K[1];if(y)aN(e.body,y[1]);var
c=p(e);c.style.position=x;c.style.right=f;c.style.bottom=f;var
m=ez(F),i=bd(0,38,j4);i.style.position=x;i.style.bottom=bk;i.style.right=f;i.style.cursor=bj;i.onclick=l(function(a){try{var
J=bx(af[1],E)[2],C=J}catch(f){f=s(f);if(f!==t)throw f;try{var
I=bx(aH,E)[2],B=I}catch(f){f=s(f);if(f!==t)throw f;var
B=jV}var
C=B}var
b=p(e);b.className=bY;b.style.width=e$;b.style.margin=L;b.innerHTML=C;var
i=p(e);i.style.display=fE;i.style.verticalAlign=cX;g(i,b);var
f=p(e);f.style.width=Q;f.style.height=Q;f.style.display=fC;g(f,i);var
j=p(e);j.className="overlay translucent";g(j,f);var
D=[0,O];function
F(a){aN(e.body,j);return ay(D[1],W)}D[1]=V(ac(e,d$,l(function(a){var
b=a.keyCode;if(13!==b)if(27!==b)return o;F(0);return q}),o));var
r=0,u=0;for(;;){if(0===u)if(0===r)var
h=a7(e,ec),v=1;else
var
v=0;else
var
v=0;if(!v){var
w=eb[1];if(fz===w){try{var
y=e.createElement('<input name="x">'),z=y.tagName.toLowerCase()==="input"?1:0,H=z?y.name===dc?1:0:z,x=H}catch(f){var
x=0}var
G=x?ft:-1003883683;eb[1]=G;continue}if(ft<=w){var
c=new
bE();c.push("<",b8);bH(u,function(a){c.push(' type="',eX(a),b3);return 0});bH(r,function(a){c.push(' name="',eX(a),b3);return 0});c.push(">");var
h=e.createElement(c.join(d))}else{var
n=a7(e,ec);bH(u,function(a){return n.type=a});bH(r,function(a){return n.name=a});var
h=n}}g(h,e.createTextNode(A(m.ok,"OK")));h.onclick=l(function(a){F(0);return q});var
k=p(e);k.style.textAlign=e7;k.style.margin="2em auto";g(k,h);g(b,k);g(e.body,j);return q}});var
r=bP(A(m.info,"Information"));r.style.right=b9;r.style.bottom=b9;g(i,r);g(c,i);var
j=bd(0,38,j5);j.style.position=x;j.style.bottom=bk;j.style.right=b6;j.style.cursor=bj;var
h=p(e),u=ee(e),z=ed(e);av(function(a){var
d=a[2],f=a[1],b=bI(e);g(b,e.createTextNode(f.toString()));b.href=bg;b.onclick=l(function(a){var
b=d.toString();function
c(a){return a.setItem(ff,b)}ap(v.localStorage,c);af[1]=b;N(0);eI(E,C);X(1);return q});var
c=ef(e);g(c,b);return g(z,c)},j6);var
B=eg(e);g(B,e.createTextNode(A(m.languages,"Languages")));g(u,B);var
G=eh(e);g(G,z);g(u,G);g(h,u);h.className=db;h.style.position=x;h.style.right=e0;h.style.bottom="46px";h.style.whiteSpace=dg;g(j,h);eO(j,h);g(c,j);var
k=bd(0,38,j7);k.style.position=x;k.style.bottom=bk;k.style.right="96px";k.style.cursor=bj;k.onclick=l(function(a){n[1]=[0,a$,D];b[1]=n[1];X(1);return q});var
w=bP(A(m.recenter,"Recenter"));w.style.right=b9;w.style.bottom=b9;g(k,w);g(c,k);g(e.body,c);K[1]=[0,c];return 0}N(0);var
P=bJ(e);P.src=cH(j8);var
z=bI(e);z.target=di;z.href="http://ocsigen.org/";g(z,P);var
a=p(e);a.style.position=x;a.style.left=f;a.style.bottom=f;g(a,z);g(e.body,a);return J(0)})}))[1];switch(r[0]){case
1:throw r[1];case
2:var
w=r[1];cC(w,function(a){switch(a[0]){case
0:return 0;case
1:return j(cy[1],a[1]);default:throw[0,F,hr]}});break;case
3:throw[0,F,hs]}}catch(f){f=s(f);if(f===ei){var
b=p(e);b.className=bY;b.style.width=e$;b.style.margin=L;b.innerHTML='Unfortunately, this browser is not supported. Please try again with another browser, such as <a href="http://www.mozilla.org/firefox/">Firefox</a>, <a href="http://www.google.com/chrome/">Chrome</a> or <a href="http://www.opera.com/">Opera</a>.';var
n=p(e);n.style.display=fE;n.style.verticalAlign=cX;g(n,b);var
h=p(e);h.style.width=Q;h.style.height=Q;h.style.display=fC;g(h,n);var
u=p(e);u.className=fi;g(u,h);g(e.body,u);return q}throw f}return q});ch(0);return}(this));
