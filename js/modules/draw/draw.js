define(["jquery","knockout","modules/settings/config","modules/geometry/point","modules/graph/graphConstants"],function(e,o,t,i,l){function n(){var e=this;e.paintRectangle=function(e,o,t,i,l){o&&(e.globalAlpha=.5,e.fillStyle=t,e.fillRect(o.x,o.y,o.width,o.height),e.globalAlpha=1,e.strokeStyle=i,e.lineWidth=l,e.setLineDash([0,0]),e.beginPath(),e.moveTo(o.x,o.y),e.lineTo(o.x+o.width,o.y),e.lineTo(o.x+o.width,o.y+o.height),e.lineTo(o.x,o.y+o.height),e.lineTo(o.x,o.y),e.stroke())},e.roundRect=function(e,o,t,i,l,n){e.beginPath(),e.moveTo(o+n,t),e.lineTo(o+i-n,t),e.quadraticCurveTo(o+i,t,o+i,t+n),e.lineTo(o+i,t+l-n),e.quadraticCurveTo(o+i,t+l,o+i-n,t+l),e.lineTo(o+n,t+l),e.quadraticCurveTo(o,t+l,o,t+l-n),e.lineTo(o,t+n),e.quadraticCurveTo(o,t,o+n,t),e.closePath(),e.fill(),e.stroke()},e.roundParallelogram=function(e,o,t,i,l,n,a){e.beginPath(),e.moveTo(o+a+n,t),e.lineTo(o+a+i-n,t),e.quadraticCurveTo(o+a+i,t,o+a+i,t+n),e.lineTo(o-a+i,t+l-n),e.quadraticCurveTo(o-a+i,t+l,o-a+i-n,t+l),e.lineTo(o-a+n,t+l),e.quadraticCurveTo(o-a,t+l,o-a,t+l-n),e.lineTo(o+a,t+n),e.quadraticCurveTo(o+a,t,o+a+n,t),e.closePath(),e.fill(),e.stroke()},e.decisionPolygon=function(e,o,t,i,l,n){e.beginPath(),e.moveTo(o,t+l/2),e.lineTo(o+i/2,t),e.lineTo(o+i,t+l/2),e.lineTo(o+i/2,t+l),e.closePath(),e.fill(),e.stroke()},e.drawTooltip=function(e,o,t){var l=e.getContext("2d"),n=e.getBoundingClientRect(),a=new i(o.x+5,o.y-5),r=a.x,u=a.y;l.save(),l.font="12px sans-serif";var T=Math.floor(l.measureText(t).width),h=Math.floor(n.width)-(r+T+6);h<0&&(r+=h);l.fillStyle="#82AAFA",l.fillRect(r,u-16,T+4,16),l.fillStyle="#fff",l.fillText(t,r+2,u-4),l.restore()}}return new n});