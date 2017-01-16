/*! banana-fusion - v1.6.16 - 2017-01-16
 * https://github.com/LucidWorks/banana/wiki
 * Copyright (c) 2017 Andrew Thanalertvisuti; Licensed Apache License */

var stopwords=["by","owing","anything","theirs","of","here","they're","theres","hed","contain","howbeit","more","once","appropriate","how","hereby","above","isn't","they","nothing","keep","old","i'll","pp","present","unlikely","give","tends","truly","let","sure","cant","you'd","very","im","why","therefore","if","other","announce","few","be","you've","herself","overall","h","affecting","ltd","ones","see","out","briefly","these","largely","are","according","she'll","k","really","ninety","made","que","until","quite","unless","fix","per","gotten","whereby","lately","i'm","should","might","potentially","may","mrs","sufficiently","better","definitely","results","nevertheless","up","going","useful","recent","he'll","ed","ignored","ourselves","perhaps","always","immediately","least","substantially","home","course","couldn't","use","slightly","to","towards","beginnings","was","became","hid","others","various","him","thanks","us","after","co","and","all","only","then","merely","wish","seriously","eighty","too","your","affects","specifically","thanx","hasn't","refs","there","further","she'd","as","ok","ord","eight","pages","that","know","previously","an","a's","inner","ought","nonetheless","everywhere","want","accordance","need","during","went","themselves","obviously","et-al","greetings","certainly","five","million","past","hes","significant","arise","most","whom","than","being","former","were","could","arent","apparently","considering","whenever","sub","come","id","tell","it'll","near","selves","twice","omitted","anyways","there's","anyway","also","whereas","anyhow","consider","done","available","cause","wherein","wasn't","itd","seeing","nearly","showed","due","thoroughly","that's","let's","taken","related","within","o","indicated","am","seen","primarily","whereupon","at","almost","presumably","we're","seem","wants","didn't","despite","where","neither","thereupon","upon","resulting","maybe","plus","over","able","everything","later","last","specify","biol","them","for","having","toward","regardless","followed","asking","via","who","following","onto","concerning","afterwards","i'd","on","novel","shall","where's","below","means","sorry","appear","nd","similar","name","necessarily","now","respectively","even","ca","it's","known","etc","mean","somehow","t's","well","becoming","along","although","you're","ending","act","found","line","aside","else","whither","willing","yourself","currently","un","insofar","indicate","her","under","heres","seemed","another","page","both","s","latter","never","thank","but","immediate","okay","uses","such","sometime","th","behind","shes","non","been","three","proud","about","added","yes","cannot","yours","wouldn't","thorough","gets","soon","suggest","edu","goes","mg","throughout","whence","everybody","into","in","meanwhile","shows","m","specified","no","adj","trying","each","noted","second","between","she","mustn't","moreover","showns","far","would","ever","tried","somebody","his","certain","using","instead","across","lest","described","take","'ll","our","first","or","yourselves","saw","third","must","looking","ours","e","mug","whatever","already","much","specifying","thus","somewhere","b","hereupon","six","giving","because","just","kg","re","several","saying","four","whoever","formerly","example","one","i","won't","away","contains","invention","right","best","causes","those","together","rd","significantly","somewhat","looks","ref","j","have","affected","alone","sometimes","little","say","it'd","provides","itself","thence","do","sent","section","though","either","becomes","quickly","exactly","you'll","said","actually","nos","ie","containing","therein","indicates","wonder","besides","www","every","happens","necessary","you","myself","own","end","thru","none","possibly","whole","thereby","resulted","through","placed","inasmuch","says","from","meantime","show","ff","my","successfully","beside","rather","unfortunately","eg","hereafter","ran","their","particular","think","shed","however","sec","brief","c's","needs","et","sup","himself","usually","viz","someone","why's","unto","hither","hello","doesn't","keeps","keep 	keeps","herein","different","hopefully","is","seven","nay","look","anywhere","while","so","c'mon","possible","information","with","allow","back","seeming","outside","n","normally","lets","it","they'll","p","given","g","we'd","when's","believe","beforehand","can","go","nowhere","off","liked","many","similarly","thereafter","particularly","vs","relatively","had","accordingly","what's","still","somethan","oh","what","stop","probably","inc","downwards","na","has","help","especially","make","put","latterly","mostly","appreciate","elsewhere","its","does","apart","which","noone","nor","indeed","like","strongly","they'd","we've","namely","regards","not","begins","poorly","they've","forth","way","something","gone","will","ain't","shown","before","ah","ml","less","whether","importance","me","furthermore","com","this","makes","self","aren't","getting","l","when","how's","gives","who's","allows","knows","again","value","reasonably","ex","i've","whose","c","tries","date","haven't","except","can't","welcome","likely","become","we'll","corresponding","changes","auth","wherever","seems","mr","did","r","secondly","he'd","begin","she's","new","readily","fifth","otherwise","don't","around","nine","sensible","predominantly","used","hers","part","against","a","inward","qv","doing","obtain","follows","kept","obtained","yet","effect","got","approximately","km","without","next","came","hadn't","consequently","get","entirely","beginning","q","same","serious","miss","associated","shouldn't","anyone","run","abst","clearly","thats","we","aren","often","shan't","here's","mainly","some","index","d","the","please","research","recently","among","couldnt","enough","hi","ask","he's","beyond","nobody","took","whereafter","hardly","comes","try","gave","hence","hundred","down","any","since","amongst","anybody","everyone","awfully","anymore","zero","two","weren't","he","regarding","important","promptly","f"];define("panels/tagcloud/stopWords",function(){}),define("panels/tagcloud/d3.layout.cloud",["d3"],function(a){"use strict";!function(){function b(){function b(a,b,c){for(var d,e,f,g=b.x,h=b.y,i=Math.sqrt(n[0]*n[0]+n[1]*n[1]),k=x(n),m=Math.random()<.5?1:-1,o=-m;(d=k(o+=m))&&(e=~~d[0],f=~~d[1],!(Math.min(e,f)>i));)if(b.x=g+e,b.y=h+f,!(b.x+b.x0<0||b.y+b.y0<0||b.x+b.x1>n[0]||b.y+b.y1>n[1])&&(!c||!j(b,a,n[0]))&&(!c||l(b,c))){for(var p,q=b.sprite,r=b.width>>5,s=n[0]>>5,t=b.x-(r<<4),u=127&t,v=32-u,w=b.y1-b.y0,y=(b.y+b.y0)*s+(t>>5),z=0;w>z;z++){p=0;for(var A=0;r>=A;A++)a[y+A]|=p<<v|(r>A?(p=q[z*r+A])>>>u:0);y+=s}return delete b.sprite,!0}return!1}var n=[256,256],p=c,q=d,r=f,s=e,t=e,u=g,w=h,x=m,y=[],z=1/0,A=a.dispatch("word","end"),B=null,C={};return C.start=function(){var a=function(){for(var a,j=+new Date;+new Date-j<z&&++f<e&&B;)a=h[f],a.x=n[0]*(Math.random()+.5)>>1,a.y=n[1]*(Math.random()+.5)>>1,i(a,h,f),a.hasText&&b(c,a,d)&&(g.push(a),A.word(a),d?k(d,a):d=[{x:a.x+a.x0,y:a.y+a.y0},{x:a.x+a.x1,y:a.y+a.y1}],a.x-=n[0]>>1,a.y-=n[1]>>1);f>=e&&(C.stop(),A.end(g,d))},c=o((n[0]>>5)*n[1]),d=null,e=y.length,f=-1,g=[],h=y.map(function(a,b){return a.text=p.call(this,a,b),a.font=q.call(this,a,b),a.style=s.call(this,a,b),a.weight=t.call(this,a,b),a.rotate=u.call(this,a,b),a.size=~~r.call(this,a,b),a.padding=w.call(this,a,b),a}).sort(function(a,b){return b.size-a.size});return B&&clearInterval(B),B=setInterval(a,0),a(),C},C.stop=function(){return B&&(clearInterval(B),B=null),C},C.timeInterval=function(a){return arguments.length?(z=null==a?1/0:a,C):z},C.words=function(a){return arguments.length?(y=a,C):y},C.size=function(a){return arguments.length?(n=[+a[0],+a[1]],C):n},C.font=function(b){return arguments.length?(q=a.functor(b),C):q},C.fontStyle=function(b){return arguments.length?(s=a.functor(b),C):s},C.fontWeight=function(b){return arguments.length?(t=a.functor(b),C):t},C.rotate=function(b){return arguments.length?(u=a.functor(b),C):u},C.text=function(b){return arguments.length?(p=a.functor(b),C):p},C.spiral=function(a){return arguments.length?(x=v[a+""]||a,C):x},C.fontSize=function(b){return arguments.length?(r=a.functor(b),C):r},C.padding=function(b){return arguments.length?(w=a.functor(b),C):w},a.rebind(C,A,"on")}function c(a){return a.text}function d(){return"serif"}function e(){return"normal"}function f(a){return Math.sqrt(a.value)}function g(){return 30*(~~(6*Math.random())-3)}function h(){return 1}function i(a,b,c){if(!a.sprite){u.clearRect(0,0,(r<<5)/t,s/t);var d=0,e=0,f=0,g=0,h=0,i=b.length;for(--c;++c<i;){if(a=b[c],u.save(),u.font=a.style+" "+a.weight+" "+~~((a.size+1)/t)+"px "+a.font,f=u.measureText(a.text+"m").width*t,g=a.size<<1,a.rotate){var j=Math.sin(a.rotate*q),k=Math.cos(a.rotate*q),l=f*k,m=f*j,n=g*k,o=g*j;f=Math.max(Math.abs(l+o),Math.abs(l-o))+31>>5<<5,g=~~Math.max(Math.abs(m+n),Math.abs(m-n))}else f=f+31>>5<<5;if(g>h&&(h=g),d+f>=r<<5&&(d=0,e+=h,h=0),e+g>=s)break;u.translate((d+(f>>1))/t,(e+(g>>1))/t),a.rotate&&u.rotate(a.rotate*q),u.fillText(a.text,0,0),a.padding&&(u.lineWidth=2*a.padding,u.strokeText(a.text,0,0)),u.restore(),a.width=f,a.height=g,a.xoff=d,a.yoff=e,a.x1=f>>1,a.y1=g>>1,a.x0=-a.x1,a.y0=-a.y1,a.hasText=!0,d+=f}for(var p=u.getImageData(0,0,(r<<5)/t,s/t).data,v=[];--c>=0;)if(a=b[c],a.hasText){f=a.width;var w=f>>5;g=a.y1-a.y0;for(var x=0;g*w>x;x++)v[x]=0;if(d=a.xoff,null==d)return;e=a.yoff;for(var y=0,z=-1,A=0;g>A;A++){for(x=0;f>x;x++){var B=w*A+(x>>5),C=p[(e+A)*(r<<5)+(d+x)<<2]?1<<31-x%32:0;v[B]|=C,y|=C}y?z=A:(a.y0++,g--,A--,e++)}a.y1=a.y0+z,a.sprite=v.slice(0,(a.y1-a.y0)*w)}}}function j(a,b,c){c>>=5;for(var d,e=a.sprite,f=a.width>>5,g=a.x-(f<<4),h=127&g,i=32-h,j=a.y1-a.y0,k=(a.y+a.y0)*c+(g>>5),l=0;j>l;l++){d=0;for(var m=0;f>=m;m++)if((d<<i|(f>m?(d=e[l*f+m])>>>h:0))&b[k+m])return!0;k+=c}return!1}function k(a,b){var c=a[0],d=a[1];b.x+b.x0<c.x&&(c.x=b.x+b.x0),b.y+b.y0<c.y&&(c.y=b.y+b.y0),b.x+b.x1>d.x&&(d.x=b.x+b.x1),b.y+b.y1>d.y&&(d.y=b.y+b.y1)}function l(a,b){return a.x+a.x1>b[0].x&&a.x+a.x0<b[1].x&&a.y+a.y1>b[0].y&&a.y+a.y0<b[1].y}function m(a){var b=a[0]/a[1];return function(a){return[b*(a*=.1)*Math.cos(a),a*Math.sin(a)]}}function n(a){var b=4,c=b*a[0]/a[1],d=0,e=0;return function(a){var f=0>a?-1:1;switch(Math.sqrt(1+4*f*a)-f&3){case 0:d+=c;break;case 1:e+=b;break;case 2:d-=c;break;default:e-=b}return[d,e]}}function o(a){for(var b=[],c=-1;++c<a;)b[c]=0;return b}var p,q=Math.PI/180,r=64,s=2048,t=1;"undefined"!=typeof document?(p=document.createElement("canvas"),p.width=1,p.height=1,t=Math.sqrt(p.getContext("2d").getImageData(0,0,1,1).data.length>>2),p.width=(r<<5)/t,p.height=s/t):p=new Canvas(r<<5,s);var u=p.getContext("2d"),v={archimedean:m,rectangular:n};u.fillStyle=u.strokeStyle="red",u.textAlign="center","object"==typeof module&&module.exports?module.exports=b:(a.layout||(a.layout={})).cloud=b}()}),define("panels/tagcloud/module",["angular","app","underscore","jquery","kbn","d3","./stopWords","./d3.layout.cloud"],function(a,b,c,d,e,f,g){"use strict";var h=a.module("kibana.panels.tagcloud",[]);b.useModule(h),h.controller("tagcloud",["$scope","querySrv","dashboard","filterSrv",function(b,d,e,f){b.panelMeta={modals:[{description:"Inspect",icon:"icon-info-sign",partial:"app/partials/inspector.html",show:b.panel.spyable}],editorTabs:[{title:"Queries",src:"app/partials/querySelect.html"}],status:"Experimental",description:"Display the tag cloud of the top N words from a specified field."};var h={queries:{mode:"all",ids:[],query:"*:*",custom:""},field:"",size:10,alignment:"vertical and horizontal",fontScale:1,ignoreStopWords:!1,spyable:!0,show_queries:!0,error:""};c.defaults(b.panel,h),b.init=function(){b.hits=0,b.$on("refresh",function(){b.get_data()}),b.get_data()},b.get_data=function(){if(0!==e.indices.length){delete b.panel.error,b.panelMeta.loading=!0;var h,i;b.sjs.client.server(e.current.solr.server+e.current.solr.core_name),h=b.sjs.Request().indices(e.indices),b.panel.queries.ids=d.idsByMode(b.panel.queries),b.inspector=a.toJson(JSON.parse(h.toString()),!0);var j="";f.getSolrFq()&&(j="&"+f.getSolrFq());var k="&wt=json",l="&rows=0",m="&facet=true&facet.field="+b.panel.field+"&facet.limit="+b.panel.size;b.panel.queries.query=d.getORquery()+k+l+j+m,h=null!=b.panel.queries.custom?h.setQuery(b.panel.queries.query+b.panel.queries.custom):h.setQuery(b.panel.queries.query),i=h.doSearch(),i.then(function(a){if(!c.isUndefined(a.error))return void(b.panel.error=b.parse_error(a.error.msg));var d=0,e=0;b.panelMeta.loading=!1,b.hits=a.response.numFound,b.data=[],b.maxRatio=0,b.yaxis_min=0,c.each(a.facet_counts.facet_fields,function(a){for(var c=0;c<a.length;c++){var f=a[c];c++;var h=a[c];if(d+=h,!(b.panel.ignoreStopWords&&g.indexOf(f.toLowerCase())>-1))if(null===f)e=h;else{if(0===h)continue;var i={label:f,data:h,actions:!0};h/b.hits>b.maxRatio&&(b.maxRatio=h/b.hits),b.data.push(i)}}}),b.$emit("render")})}},b.set_refresh=function(a){b.refresh=a,"count"===b.panel.mode&&(b.panel.decimal_points=0)},b.close_edit=function(){b.refresh&&b.get_data(),b.refresh=!1,b.$emit("render")}}]),h.directive("tagcloudChart",function(){return{restrict:"A",link:function(b,c){function d(){function a(a){f.select(d).append("svg").attr("width",e).attr("height",g).append("g").attr("transform","translate("+(e-20)/2+","+(g-20)/2+")").selectAll("text").data(a).enter().append("text").style("font-size",function(a){return a.size+"px"}).style("font-family","Impact, Haettenschweiler, 'Franklin Gothic Bold', Charcoal, 'Helvetica Inserat', 'Bitstream Vera Sans Bold', 'Arial Black', 'sans-serif'").style("fill",function(a,b){return h(b)}).attr("text-anchor","middle").attr("transform",function(a){return"translate("+[a.x,a.y]+")rotate("+a.rotate+")"}).text(function(a){return a.text})}c.html("");var d=c[0],e=c.parent().width(),g=parseInt(b.row.height),h=f.scale.category20(),i=f.scale.linear().domain([0,b.maxRatio]).range([0,30]),j=f.scale.linear().domain([0,1]).range([-90,90]);f.layout.cloud().size([e-20,g-20]).words(b.data.map(function(a){return{text:a.label,size:5+i(a.data/b.hits)+parseInt(b.panel.fontScale)}})).rotate(function(){return"vertical and horizontal"===b.panel.alignment?-90*~~(2*Math.random()):"horizontal"===b.panel.alignment?0:"vertical(+90)"===b.panel.alignment?90:"vertical(-90)"===b.panel.alignment?-90:j(Math.random())}).font("sans-serif").fontSize(function(a){return a.size}).on("end",a).start()}b.$on("render",function(){d()}),a.element(window).bind("resize",function(){d()})}}})});