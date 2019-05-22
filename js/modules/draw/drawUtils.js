define("modules/draw/drawUtils",["modules/graph/graphConstants","modules/geometry/dimension"],function(e,t){var n=function(e){for(var t=e.split(" "),n=[],r=0;r<t.length;r++)if(t[r].length>0)for(var h=t[r].split("\n"),a=0;a<h.length;a++)n.push(h[a]);return n},r=function(e,t,n){if(Math.floor(t.measureText(e).width)<=n)return e;for(var r=e;Math.floor(t.measureText(r).width)>n;)r=r.substring(0,r.length-2);return r},h=[];return{getTextTruncated:function(e,t,n){var h=r(e,t,n);return h.length<e.length&&(h+="..."),h},getTextRectangle:function(a,o,i,l,u){for(var s,g=a.getContentText(),f=e.contentSize().WIDTH+u,m=e.contentSize().HEIGHT+u,x=n(g),T="",c=0,d=0,M=[],w=0;w<x.length;w++){var p=r(x[w],o,f),v=Math.floor(o.measureText(p).width),H=Math.floor(o.measureText(T).width);if(v>f-H){if(M.push(T),c=Math.max(c,H),(d=i*M.length+l*(M.length-1))+i>m){M[M.length-1]+="...",s=!0;break}T=p+" ",H=Math.floor(o.measureText(T).width),c=Math.max(c,H)}else T+=p+" ",H=Math.floor(o.measureText(T).width),c=Math.max(c,H)}return s||M.push(T),d=i*M.length+l*(M.length>0?M.length-1:0),h=M.slice(),new t(c,d)},getDecisionTextRectangle:function(a,o,i,l,u){for(var s,g=a.getContentText(),f=e.contentDecisionSize().WIDTH+u,m=e.contentDecisionSize().HEIGHT,x=n(g),T="",c=0,d=0,M=[],w=0;w<x.length;w++){var p=f,v=r(x[w],o,p),H=Math.floor(o.measureText(v).width),D=Math.floor(o.measureText(T).width);if(H>p-D){if(M.push(T),c=Math.max(c,D),(d=i*M.length+l*(M.length-1))+i>m){M[M.length-1]+="...",s=!0;break}T=v+" ",D=Math.floor(o.measureText(T).width),c=Math.max(c,D)}else T+=v+" ",D=Math.floor(o.measureText(T).width),c=Math.max(c,D)}return s||M.push(T),d=i*M.length+l*(M.length>0?M.length-1:0),h=M.slice(),new t(c,d)},getContentLines:function(){return h}}});