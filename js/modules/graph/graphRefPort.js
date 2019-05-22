define("modules/graph/graphRefPort",["modules/geometry/rectangle","modules/graph/graphPort","modules/graph/graphNode","modules/graph/connector","modules/draw/draw","modules/graph/graphConstants","modules/graph/modelUtils","modules/settings/config","modules/html/iconLoader","modules/core/jsUtils"],function(e,o,t,n,i,r,c,d,a,h){function l(t){function n(){return new e(s.connector.globalX()-Math.floor(s.width/2)-u,s.connector.globalY()-Math.floor(s.height/2)-u,s.width+2*u,s.height+2*u)}function h(){return d.hasShowTooltip()?s.getPath():s.getDirection()===r.portDirection().REF_OUT?"Drag to create a reference connection":s.getDirection()===r.portDirection().REF_IN?"Drag to create a reference connection":void 0}function l(e){return(s.getSide()&e)>0}o.call(this,t);var s=this,g=r.colors().EDGE,f=r.colors().ACCEPT_PORT,u=1,R="";s.getType=function(){return r.portType().REF},s.init=function(){s.setRectSize(r.portDefSize().WIDTH,r.portDefSize().HEIGHT),s.setRectLocation(s.connector.globalX()-Math.floor(s.width/2),s.connector.globalY()-Math.floor(s.height/2)),s.setVisible(!1)},s.getAttachmentPoint=function(){return c.getEdgeConnectionPoint(s)},s.containsPoint=function(e){var o=s.isVisible()&&n().containsXY(e.x,e.y);return R=o?s.getPath():void 0,o},s.hasPoint=function(e){var o=n().containsXY(e.x,e.y);return R=o?h():void 0,o},s.getTooltip=function(){return R},s.getIcon=function(){var e,o=s.getDirection();return d.getFlowDirection()===r.flow().HORIZONTAL?l(r.nodeSide().FRONT)?e=o===r.portDirection().REF_OUT?a.eastRefNewIcon:a.westRefNewIcon:l(r.nodeSide().BACK)?e=o===r.portDirection().REF_OUT?a.westRefNewIcon:a.eastRefNewIcon:l(r.nodeSide().LEFT)?e=o===r.portDirection().REF_OUT?a.northRefNewIcon:a.southRefNewIcon:l(r.nodeSide().RIGHT)&&(e=o===r.portDirection().REF_OUT?a.southRefNewIcon:a.northRefNewIcon):l(r.nodeSide().FRONT)?e=o===r.portDirection().REF_OUT?a.southRefNewIcon:a.northRefNewIcon:l(r.nodeSide().BACK)?e=o===r.portDirection().REF_OUT?a.northRefNewIcon:a.southRefNewIcon:l(r.nodeSide().LEFT)?e=o===r.portDirection().REF_OUT?a.eastRefNewIcon:a.westRefNewIcon:l(r.nodeSide().RIGHT)&&(e=o===r.portDirection().REF_OUT?a.westRefNewIcon:a.eastRefNewIcon),s.setRectSize(e.width,e.height),e},s.drawPort=function(e){if(s.isVisible()){(s.isHighlighted()||s.dndMode===r.dndMode().ORIGIN||s.dndMode===r.dndMode().DESTINATION)&&w(e);var o=s.connector.globalX()-Math.floor(s.width/2),t=s.connector.globalY()-Math.floor(s.height/2);e.drawImage(s.getIcon(),o,t)}};var w=function(e){e.strokeStyle=g,e.fillStyle=s.dragMode===r.dragMode().ACCEPT_PORT?f:g;var o=n(),t=o.x,c=o.y,d=o.width,a=o.height;i.roundRect(e,t,c,d,a,4)};s.init()}return h.inherit(l,o),l});