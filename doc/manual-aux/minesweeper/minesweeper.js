// This program was compiled from OCaml by js_of_ocaml 2.0+git-883a1ec
(function(c){"use strict";var
aM=254,G=255,aE="x",aG='"',J=1073741823,aJ=250,aD="sprites/normal.png",aF="jsError",aL="sprites/flag.png",Y="input",aH=785140586,H="int_of_string",ac="sprites/bomb.png",aC=982028505,aB=0.001,j="",ab=" : file already exists",f=248,$="/",aK="fd ",aa="index out of bounds",aI=1e3;function
aT(a,b){throw[0,a,b]}function
ah(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
b=c.console;b&&b.error&&b.error(a)}var
e=[0];function
ag(a,b){if(!a)return j;if(a&1)return ag(a-1,b)+b;var
c=ag(a>>1,b);return c+c}function
h(a){if(a!=null){this.bytes=this.fullBytes=a;this.last=this.len=a.length}}function
aV(){aT(e[4],new
h(aa))}h.prototype={string:null,bytes:null,fullBytes:null,array:null,len:null,last:0,toJsString:function(){var
a=this.getFullBytes();try{return this.string=decodeURIComponent(escape(a))}catch(f){ah('MlString.toJsString: wrong encoding for "%s" ',a);return a}},toBytes:function(){if(this.string!=null)try{var
a=unescape(encodeURIComponent(this.string))}catch(f){ah('MlString.toBytes: wrong encoding for "%s" ',this.string);var
a=this.string}else{var
a=j,c=this.array,d=c.length;for(var
b=0;b<d;b++)a+=String.fromCharCode(c[b])}this.bytes=this.fullBytes=a;this.last=this.len=a.length;return a},getBytes:function(){var
a=this.bytes;if(a==null)a=this.toBytes();return a},getFullBytes:function(){var
a=this.fullBytes;if(a!==null)return a;a=this.bytes;if(a==null)a=this.toBytes();if(this.last<this.len){this.bytes=a+=ag(this.len-this.last,"\0");this.last=this.len}this.fullBytes=a;return a},toArray:function(){var
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
b=this.bytes;if(b==null)b=this.toBytes();return a<this.last?b.charCodeAt(a):0},safeGet:function(a){if(this.len==null)this.toBytes();if(a<0||a>=this.len)aV();return this.get(a)},set:function(a,b){var
c=this.array;if(!c){if(this.last==a){this.bytes+=String.fromCharCode(b&G);this.last++;return 0}c=this.toArray()}else
if(this.bytes!=null)this.bytes=this.fullBytes=this.string=null;c[a]=b&G;return 0},safeSet:function(a,b){if(this.len==null)this.toBytes();if(a<0||a>=this.len)aV();this.set(a,b)},fill:function(a,b,c){if(a>=this.last&&this.last&&c==0)return;var
d=this.array;if(!d)d=this.toArray();else
if(this.bytes!=null)this.bytes=this.fullBytes=this.string=null;var
f=a+b;for(var
e=a;e<f;e++)d[e]=c},compare:function(a){if(this.string!=null&&a.string!=null){if(this.string<a.string)return-1;if(this.string>a.string)return 1;return 0}var
b=this.getFullBytes(),c=a.getFullBytes();if(b<c)return-1;if(b>c)return 1;return 0},equal:function(a){if(this.string!=null&&a.string!=null)return this.string==a.string;return this.getFullBytes()==a.getFullBytes()},lessThan:function(a){if(this.string!=null&&a.string!=null)return this.string<a.string;return this.getFullBytes()<a.getFullBytes()},lessEqual:function(a){if(this.string!=null&&a.string!=null)return this.string<=a.string;return this.getFullBytes()<=a.getFullBytes()}};function
u(a){this.string=a}u.prototype=new
h();function
af(a,b){aT(a,new
u(b))}function
L(a){af(e[4],a)}function
aP(){L(aa)}function
bB(a,b){if(b<0||b>=a.length-1)aP();return a[b+1]}function
bC(a,b,c){if(b<0||b>=a.length-1)aP();a[b+1]=c;return 0}function
bD(a,b,c,d,e){if(e===0)return;if(d===c.last&&c.bytes!=null){var
f=a.bytes;if(f==null)f=a.toBytes();if(b>0||a.last>e)f=f.slice(b,b+e);c.bytes+=f;c.last+=f.length;return}var
g=c.array;if(!g)g=c.toArray();else
c.bytes=c.string=null;a.blitToArray(b,g,d,e)}function
z(c,b){if(c.fun)return z(c.fun,b);var
a=c.length,d=a-b.length;if(d==0)return c.apply(null,b);else
if(d<0)return z(c.apply(null,b.slice(0,a)),b.slice(a));else
return function(a){return z(c,b.concat([a]))}}function
bL(a,b){var
c=a[3]<<16,d=b[3]<<16;if(c>d)return 1;if(c<d)return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
bM(a,b){if(a<b)return-1;if(a==b)return 0;return 1}function
ad(a,b,c){var
e=[];for(;;){if(!(c&&a===b))if(a
instanceof
h)if(b
instanceof
h){if(a!==b){var
d=a.compare(b);if(d!=0)return d}}else
return 1;else
if(a
instanceof
Array&&a[0]===(a[0]|0)){var
g=a[0];if(g===aM)g=0;if(g===aJ){a=a[1];continue}else
if(b
instanceof
Array&&b[0]===(b[0]|0)){var
i=b[0];if(i===aM)i=0;if(i===aJ){b=b[1];continue}else
if(g!=i)return g<i?-1:1;else
switch(g){case
f:var
d=bM(a[2],b[2]);if(d!=0)return d;break;case
251:L("equal: abstract value");case
G:var
d=bL(a,b);if(d!=0)return d;break;default:if(a.length!=b.length)return a.length<b.length?-1:1;if(a.length>1)e.push(a,b,1)}}else
return 1}else
if(b
instanceof
h||b
instanceof
Array&&b[0]===(b[0]|0))return-1;else
if(typeof
a!="number"&&a&&a.compare)return a.compare(b,c);else{if(a<b)return-1;if(a>b)return 1;if(a!=b){if(!c)return NaN;if(a==a)return 1;if(b==b)return-1}}if(e.length==0)return 0;var
j=e.pop();b=e.pop();a=e.pop();if(j+1<a.length)e.push(a,b,j+1);a=a[j];b=b[j]}}function
bE(a,b){return ad(a,b,true)}function
aN(a){this.bytes=j;this.len=a}aN.prototype=new
h();function
bF(a){if(a<0)L("String.create");return new
aN(a)}function
b4(a){throw a}function
aU(){b4(e[6])}function
bH(a,b){if(b==0)aU();return a/b|0}function
bJ(a,b){return+(ad(a,b,false)>=0)}function
b3(a){var
b=0,c=10,d=a.get(0)==45?(b++,-1):1;if(a.get(b)==48)switch(a.get(b+1)){case
120:case
88:c=16;b+=2;break;case
111:case
79:c=8;b+=2;break;case
98:case
66:c=2;b+=2;break}return[b,d,c]}function
aR(a){if(a>=48&&a<=57)return a-48;if(a>=65&&a<=90)return a-55;if(a>=97&&a<=122)return a-87;return-1}function
K(a){af(e[3],a)}function
bN(a){var
g=b3(a),f=g[0],h=g[1],d=g[2],i=-1>>>0,e=a.get(f),c=aR(e);if(c<0||c>=d)K(H);var
b=c;for(;;){f++;e=a.get(f);if(e==95)continue;c=aR(e);if(c<0||c>=d)break;b=d*b+c;if(b>i)K(H)}if(f!=a.getLen())K(H);b=h*b;if(d==10&&(b|0)!=b)K(H);return b|0}var
M={amp:/&/g,lt:/</g,quot:/\"/g,all:/[&<\"]/};function
bO(a){if(!M.all.test(a))return a;return a.replace(M.amp,"&amp;").replace(M.lt,"&lt;").replace(M.quot,"&quot;")}function
bP(a){var
c=Array.prototype.slice;return function(){var
b=arguments.length>0?c.call(arguments):[undefined];return z(a,b)}}function
bQ(a,b){return+(ad(a,b,false)<=0)}function
bR(a,b){var
d=[0];for(var
c=1;c<=a;c++)d[c]=b;return d}function
aO(a){var
b=a.length;this.array=a;this.len=this.last=b}aO.prototype=new
h();var
bS=function(){function
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
n=0;n<4;n++)o[g*4+n]=l[g]>>8*n&G;return o}return function(a,b,c){var
h=[];if(a.array){var
f=a.array;for(var
d=0;d<c;d+=4){var
e=d+b;h[d>>2]=f[e]|f[e+1]<<8|f[e+2]<<16|f[e+3]<<24}for(;d<c;d++)h[d>>2]|=f[d+b]<<8*(d&3)}else{var
g=a.getFullBytes();for(var
d=0;d<c;d+=4){var
e=d+b;h[d>>2]=g.charCodeAt(e)|g.charCodeAt(e+1)<<8|g.charCodeAt(e+2)<<16|g.charCodeAt(e+3)<<24}for(;d<c;d++)h[d>>2]|=g.charCodeAt(d+b)<<8*(d&3)}return new
aO(n(h,c))}}();function
m(a){af(e[2],a)}function
bT(a){if(!a.opened)m("Cannot flush a closed channel");if(a.buffer==j)return 0;if(a.output)switch(a.output.length){case
2:a.output(a,a.buffer);break;default:a.output(a.buffer)}a.buffer=j}function
aS(a){a=a
instanceof
h?a.toString():a;m(a+": No such file or directory")}var
bG=$;function
N(a){a=a
instanceof
h?a.toString():a;if(a.charCodeAt(0)!=47)a=bG+a;var
d=a.split($),b=[];for(var
c=0;c<d.length;c++)switch(d[c]){case"..":if(b.length>1)b.pop();break;case".":case
j:if(b.length==0)b.push(j);break;default:b.push(d[c]);break}b.orig=a;return b}function
q(){this.content={}}q.prototype={exists:function(a){return this.content[a]?1:0},mk:function(a,b){this.content[a]=b},get:function(a){return this.content[a]},list:function(){var
a=[];for(var
b
in
this.content)a.push(b);return a},remove:function(a){delete
this.content[a]}};var
P=new
q();P.mk(j,new
q());function
ae(a){var
b=P;for(var
c=0;c<a.length;c++){if(!(b.exists&&b.exists(a[c])))aS(a.orig);b=b.get(a[c])}return b}function
b$(a){var
c=N(a),b=ae(c);return b
instanceof
q?1:0}function
y(a){this.data=a}y.prototype={content:function(){return this.data},truncate:function(){this.data.length=0}};function
bI(a,b){var
e=N(a),c=P;for(var
f=0;f<e.length-1;f++){var
d=e[f];if(!c.exists(d))c.mk(d,new
q());c=c.get(d);if(!(c
instanceof
q))m(e.orig+ab)}var
d=e[e.length-1];if(c.exists(d))m(e.orig+ab);if(b
instanceof
q)c.mk(d,b);else
if(b
instanceof
y)c.mk(d,b);else
if(b
instanceof
h)c.mk(d,new
y(b.getArray()));else
if(b
instanceof
Array)c.mk(d,new
y(b));else
if(b.toString)c.mk(d,new
y(new
h(b.toString()).getArray()));else
L("caml_fs_register")}function
b_(a){var
b=P,d=N(a),e;for(var
c=0;c<d.length;c++){if(b.auto)e=b.auto;if(!(b.exists&&b.exists(d[c])))return e?e(d.join($)):0;b=b.get(d[c])}return 1}function
A(a,b,c){if(e.fds===undefined)e.fds=new
Array();c=c?c:{};var
d={};d.array=b;d.offset=c.append?d.array.length:0;d.flags=c;e.fds[a]=d;e.fd_last_idx=a;return a}function
cd(a,b,c){var
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
g=a.toString(),i=N(a);if(d.rdonly&&d.wronly)m(g+" : flags Open_rdonly and Open_wronly are not compatible");if(d.text&&d.binary)m(g+" : flags Open_text and Open_binary are not compatible");if(b_(a)){if(b$(a))m(g+" : is a directory");if(d.create&&d.excl)m(g+ab);var
h=e.fd_last_idx?e.fd_last_idx:0,f=ae(i);if(d.truncate)f.truncate();return A(h+1,f.content(),d)}else
if(d.create){var
h=e.fd_last_idx?e.fd_last_idx:0;bI(a,[]);var
f=ae(i);return A(h+1,f.content(),d)}else
aS(a)}A(0,[]);A(1,[]);A(2,[]);function
bU(a){var
b=e.fds[a];if(b.flags.wronly)m(aK+a+" is writeonly");return{data:b,fd:a,opened:true}}function
cc(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
b=c.console;b&&b.log&&b.log(a)}var
O=new
Array();function
b8(a,b){var
e=new
h(b),d=e.getLen();for(var
c=0;c<d;c++)a.data.array[a.data.offset+c]=e.get(c);a.data.offset+=d;return 0}function
bV(a){var
b;switch(a){case
1:b=cc;break;case
2:b=ah;break;default:b=b8}var
d=e.fds[a];if(d.flags.rdonly)m(aK+a+" is readonly");var
c={data:d,fd:a,opened:true,buffer:j,output:b};O[c.fd]=c;return c}function
bW(){var
a=0;for(var
b
in
O)if(O[b].opened)a=[0,O[b],a];return a}function
bX(a,b){if(b==0)aU();return a%b}if(!Math.imul)Math.imul=function(a,b){return((a>>16)*b<<16)+(a&65535)*b|0};var
bY=Math.imul;function
b0(a){return new
h(a)}function
b1(a){return a
instanceof
Array?a[0]:aI}function
b5(a,b){e[a+1]=b}var
aQ={};function
b6(a,b){aQ[a.toString()]=b;return 0}var
b2=0;function
b7(a){a[2]=b2++;return a}function
b9(){return 32}var
bK=new
Date()*aB;function
ca(){return new
Date()*aB-bK}function
bZ(a){return aQ[a]}function
cb(a){if(a
instanceof
Array)return a;if(c.RangeError&&a
instanceof
c.RangeError&&a.message&&a.message.match(/maximum call stack/i))return[0,e[9]];if(c.InternalError&&a
instanceof
c.InternalError&&a.message&&a.message.match(/too much recursion/i))return[0,e[9]];if(a
instanceof
c.Error)return[0,bZ(aF),a];return[0,e[3],new
u(String(a))]}var
d=bB,p=bC,ay=bD,aA=bO,I=bR,az=bV,_=bX,Z=bY,b=b0,a=b5,X=b6,w=b7,bA=cb;function
x(a,b){return a.length==1?a(b):z(a,[b])}var
B=[f,b("Invalid_argument"),-4],ar=b(Y),at=[0,10,10,15];a(11,[f,b("Undefined_recursive_module"),-12]);a(8,[f,b("Stack_overflow"),-9]);a(7,[f,b("Match_failure"),-8]);a(6,[f,b("Not_found"),-7]);a(5,[f,b("Division_by_zero"),-6]);a(4,[f,b("End_of_file"),-5]);a(3,B);a(2,[f,b("Failure"),-3]);a(1,[f,b("Sys_error"),-2]);X(b("Pervasives.array_bound_error"),[0,B,b(aa)]);w([f,b("Pervasives.Exit"),0]);var
aY=[f,b("Assert_failure"),-11],aW=b("Pervasives.do_at_exit"),aX=b("Array.Bottom"),a0=b("Sys.Break"),a2=b("Random.int"),a1=b(aE),a3=[0,987910699,495797812,364182224,414272206,318284740,990407751,383018966,270373319,840823159,24560019,536292337,512266505,189156120,730249596,143776328,51606627,140166561,366354223,1003410265,700563762,981890670,913149062,526082594,1021425055,784300257,667753350,630144451,949649812,48546892,415514493,258888527,511570777,89983870,283659902,308386020,242688715,482270760,865188196,1027664170,207196989,193777847,619708188,671350186,149669678,257044018,87658204,558145612,183450813,28133145,901332182,710253903,510646120,652377910,409934019,801085050],a7=b("Js.Error"),a8=b(aF),ba=b("img"),a$=b("br"),a_=b("div"),bb=b("Dom_html.Canvas_not_available"),br=b("YOU LOSE"),bo=b(ac),bn=b(aL),bl=b("Mode : "),bm=b(ac),bq=b(aD),bp=b("0"),bk=b("YOU WIN"),bj=b("GAME OVER"),bd=b(aL),be=b(ac),bf=b("sprites/empty.png"),bg=b(".png"),bh=b("sprites/"),bi=b(aD),bc=[0,0,0],bu=[0,b("main.ml"),42,17],bv=b("main"),bw=b("Number of columns"),bx=b("Number of rows"),by=b("Number of mines"),bz=b("nouvelle partie"),bt=b("submit"),bs=b("text");function
C(a,b){return bJ(a,b)?a:b}function
Q(a,b){var
c=a.getLen(),e=b.getLen(),d=bF(c+e|0);ay(a,0,d,0,c);ay(b,0,d,c,e);return d}function
D(a){return b(j+a)}function
R(a,b){if(a){var
c=a[1];return[0,c,R(a[2],b)]}return b}bU(0);az(1);az(2);function
ai(a){var
b=bW(0);for(;;){if(b){var
c=b[2],d=b[1];try{bT(d)}catch(f){}var
b=c;continue}return 0}}X(aW,ai);function
aj(a,b,c){var
e=I(a,[0]),f=a-1|0,g=0;if(!(f<0)){var
d=g;for(;;){e[d+1]=I(b,c);var
h=d+1|0;if(f!==d){var
d=h;continue}break}}return e}w([f,aX,0]);function
ak(a){var
b=a,c=0;for(;;){if(b){var
d=[0,b[1],c],b=b[2],c=d;continue}return c}}function
S(a,b){var
c=b;for(;;){if(c){var
d=c[2];x(a,c[1]);var
c=d;continue}return 0}}w([f,a0,0]);var
al=[0,0],aZ=b9(0);function
am(a){al[1]=[0,a,al[1]];return 0}32===aZ;var
i=[0,a3.slice(),0],n=c,r=false,an=Array,ao=w([f,a7,0]),T=[0,ao,{}],a5=null,a6=undefined,a4=b1(T)===f?T:T[0+1];X(a8,a4);am(function(a){return a[1]===ao?[0,new
u(a[2].toString())]:0});am(function(a){return a
instanceof
an?0:[0,new
u(a.toString())]});function
g(a,b){a.appendChild(b);return 0}function
s(d){return bP(function(a){if(a){var
e=x(d,a);if(!(e|0))a.preventDefault();return e}var
c=event,b=x(d,c);if(!(b|0))c.returnValue=b;return b})}var
a9=n.document;function
E(a,b){return a?x(b,a[1]):0}function
U(a,b){return a.createElement(b.toString())}function
V(a,b){return U(a,b)}var
ap=[0,aH];function
aq(a,b,c){for(;;){if(0===a)if(0===b)return U(c,ar);var
f=ap[1];if(aH===f){try{var
h=a9.createElement('<input name="x">'),i=h.tagName.toLowerCase()===Y?1:0,l=i?h.name===aE?1:0:i,g=l}catch(f){var
g=0}var
k=g?aC:-1003883683;ap[1]=k;continue}if(aC<=f){var
d=new
an();d.push("<",Y);E(a,function(a){d.push(' type="',aA(a),aG);return 0});E(b,function(a){d.push(' name="',aA(a),aG);return 0});d.push(">");return c.createElement(d.join(j))}var
e=U(c,ar);E(a,function(a){return e.type=a});E(b,function(a){return e.name=a});return e}}function
v(a){return V(a,a$)}function
as(a){return V(a,ba)}w([f,bb,0]);n.HTMLElement===a6;function
k(a){return a.toString()}var
t=n.document;function
au(a,b){var
e=a[1]-1|0,g=0;if(!(e<0)){var
c=g;for(;;){var
f=a[2]-1|0,h=0;if(!(f<0)){var
d=h;for(;;){x(b,[0,c,d]);var
j=d+1|0;if(f!==d){var
d=j;continue}break}}var
i=c+1|0;if(e!==c){var
c=i;continue}break}}return 0}function
av(a,b){var
c=b[2],d=b[1],f=0,e=[0,[0,d-1|0,c-1|0],[0,[0,d-1|0,c],[0,[0,d-1|0,c+1|0],[0,[0,d,c-1|0],[0,[0,d,c+1|0],[0,[0,d+1|0,c-1|0],[0,[0,d+1|0,c],[0,[0,d+1|0,c+1|0],0]]]]]]]];for(;;){if(e){var
i=e[2],g=e[1],j=g[2],k=g[1],l=0<=k?1:0;if(l){var
m=k<a[1]?1:0;if(m)var
n=0<=j?1:0,h=n?j<a[2]?1:0:n;else
var
h=m}else
var
h=l;if(h){var
f=[0,g,f],e=i;continue}var
e=i;continue}return ak(f)}}function
F(a,b){var
c=b[3]?bd:b[1]?be:b[2]?0===b[4]?bf:Q(bh,Q(D(b[4]),bg)):bi;return a.src=k(c)}function
aw(a){var
e=a[3][2]-1|0,g=0;if(!(e<0)){var
b=g;for(;;){var
f=a[3][1]-1|0,h=0;if(!(f<0)){var
c=h;for(;;){F(d(d(a[2],b),c),d(d(a[1],c),b));var
j=c+1|0;if(f!==c){var
c=j;continue}break}}var
i=b+1|0;if(e!==b){var
b=i;continue}break}}return 0}function
ax(a){var
e=a[3][2]-1|0,g=0;if(!(e<0)){var
b=g;for(;;){var
f=a[3][1]-1|0,h=0;if(!(f<0)){var
c=h;for(;;){var
j=d(d(a[2],b),c);j.onclick=s(function(a){n.alert(k(bj));return r});var
l=c+1|0;if(f!==c){var
c=l;continue}break}}var
i=b+1|0;if(e!==b){var
b=i;continue}break}}return 0}function
o(a){return a.toString()}var
l=n.document;function
W(a,b){var
d=l.createDocumentFragment();g(d,l.createTextNode(o(a)));var
c=aq([0,o(bs)],0,l);c.value=o(D(b[1]));c.onchange=s(function(a){try{b[1]=bN(new
u(c.value))}catch(f){f=bA(f);if(f[1]!==B)throw f}c.value=o(D(b[1]));return r});g(d,c);return d}n.onload=s(function(a){var
j=l.getElementById(o(bv));if(j==a5)throw[0,aY,bu];var
ay=[0,15],az=[0,12],aA=[0,10];g(j,W(bw,aA));g(j,v(l));g(j,W(bx,az));g(j,v(l));g(j,W(by,ay));g(j,v(l));function
e(a){var
W=V(l,a_);g(j,W);var
aY=ay[1],aZ=aA[1],am=C(at[1],az[1]),X=C(at[2],aZ),an=C(1,aY),ao=Z(am,X),aO=bQ(ao,an)?ao:an,h=[0,am,X,aO],ah=[0,(ca(0)*aI|0)%1e5|0],ac=0===ah.length-1?[0,0]:ah,ad=ac.length-1,aF=0;if(!0){var
u=aF;for(;;){p(i[1],u,u);var
aK=u+1|0;if(54!==u){var
u=aK;continue}break}}var
P=[0,a1],ae=54+C(55,ad)|0,aG=0;if(!(ae<0)){var
q=aG;for(;;){var
af=q%55|0,aH=P[1],ab=Q(aH,D(d(ac,_(q,ad))));P[1]=bS(ab,0,ab.getLen());var
A=P[1];p(i[1],af,(d(i[1],af)^(((A.safeGet(0)+(A.safeGet(1)<<8)|0)+(A.safeGet(2)<<16)|0)+(A.safeGet(3)<<24)|0))&J);var
aJ=q+1|0;if(ae!==q){var
q=aJ;continue}break}}i[2]=0;var
aP=0,aQ=Z(h[2],h[1])-h[3]|0,aR=0,aS=I(X,[0]);function
al(a){return[0,0,0,0,0]}var
E=Z(h[1],h[2]),w=[0,0],aM=h[3];a:for(;;){var
O=0,N=w[1];for(;;){if(N){var
O=O+1|0,N=N[2];continue}if(O<aM){if(!(J<E))if(0<E)for(;;){i[2]=(i[2]+1|0)%55|0;var
ag=d(i[1],i[2]),T=(d(i[1],(i[2]+24|0)%55|0)+(ag^ag>>>25&31)|0)&J;p(i[1],i[2],T);var
U=_(T,E);if(((J-E|0)+1|0)<(T-U|0))continue;var
z=w[1];for(;;){if(z){var
aE=z[2],aa=0===bE(z[1],U)?1:0;if(!aa){var
z=aE;continue}var
ai=aa}else
var
ai=0;if(!ai)w[1]=[0,U,w[1]];continue a}}throw[0,B,a2]}var
aL=w[1],aN=al(0),m=aj(h[1],h[2],aN);au(h,function(a){var
b=a[2],c=a[1],e=al(0);return p(d(m,c),b,e)});S(function(a){d(d(m,bH(a,h[2])),_(a,h[2]))[1]=1;return 0},aL);au(h,function(a){var
b=a[2],c=a[1];if(d(d(m,c),b)[1])return 0;var
e=[0,0];function
f(a){return d(d(m,a[1]),a[2])[1]?(e[1]++,0):0}S(f,av(h,[0,c,b]));d(d(m,c),b)[4]=e[1];return 0});var
e=[0,m,aS,h,aR,aQ,aP],G=[0,0],o=t.createDocumentFragment();g(o,t.createTextNode(k(bl)));var
x=as(t);g(o,x);x.src=k(bm);x.onclick=s(function(a){if(0===G[1]){G[1]=1;x.src=k(bn)}else{G[1]=0;x.src=k(bo)}return r});g(o,v(t));var
ap=e[3][2]-1|0,aT=0;if(!(ap<0)){var
f=aT;for(;;){var
Y=[0,0],aq=e[3][1]-1|0,aV=0;if(!(aq<0)){var
b=aV;for(;;){var
c=as(t);Y[1]=[0,c,Y[1]];c.src=k(bq);c.onclick=s(function(f,b,c){return function(a){if(0===G[1]){if(!d(d(e[1],b),f)[2])if(e[6]){if(d(d(e[1],b),f)[3]){e[4]=e[4]-1|0;d(d(e[1],b),f)[3]=0}else{e[4]=e[4]+1|0;d(d(e[1],b),f)[3]=1}F(d(d(e[2],f),b),d(d(e[1],b),f))}else
if(!d(d(e[1],b),f)[3])if(d(d(e[1],b),f)[1]){aw(e);ax(e);n.alert(k(br))}else{var
l=function(a){var
b=a[2],c=a[1];d(d(e[1],c),b)[2]=1;F(d(d(e[2],b),c),d(d(e[1],c),b));e[5]=e[5]-1|0;return 0},i=e[3],o=e[1],g=aj(i[1],i[2],0),j=function(a){var
b=a;for(;;){if(b){var
i=b[2],c=b[1],f=c[2],h=c[1],e=d(d(o,h),f);if(!e[1])if(!e[3])if(!e[2])if(!d(d(g,h),f)){var
k=j(i),l=k[2],m=k[1];p(d(g,h),f,1);return 0===e[4]?[0,m,[0,c,l]]:[0,[0,c,m],l]}var
b=i;continue}return bc}},h=function(a){if(a){var
c=a[2],b=a[1];if(0===d(d(o,b[1]),b[2])[4]){var
e=j(av(i,b)),f=e[1];return R([0,b,f],h(R(e[2],c)))}return[0,b,h(c)]}return 0};p(d(g,b),f,1);S(l,h([0,[0,b,f],0]));if(0===e[5]){aw(e);ax(e);n.alert(k(bk))}}}else{d(d(e[1],b),f)[3]=1-d(d(e[1],b),f)[3];F(c,d(d(e[1],b),f))}return r}}(f,b,c));g(o,c);var
aX=b+1|0;if(aq!==b){var
b=aX;continue}break}}g(o,v(t));var
H=ak(Y[1]);if(H){var
L=0,K=H,aB=H[2],aC=H[1];for(;;){if(K){var
L=L+1|0,K=K[2];continue}var
$=I(L,aC),M=1,y=aB;for(;;){if(y){var
aD=y[2];$[M+1]=y[1];var
M=M+1|0,y=aD;continue}var
ar=$;break}break}}else
var
ar=[0];p(e[2],f,ar);var
aW=f+1|0;if(ap!==f){var
f=aW;continue}break}}var
aU=W.style;aU.lineHeight=k(bp);g(W,o);return r}}}var
c=l.createDocumentFragment(),b=aq([0,o(bt)],0,l);b.value=o(bz);b.onclick=s(e);g(c,b);g(j,c);return r});ai(0);return}(this));
