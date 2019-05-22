define(["modules/view/dndUtils","modules/diagram/flowNode","modules/graph/segment","modules/settings/config","modules/graph/graphConstants"],function(t,e,n,i,r){return{getNodeFootprint:function(t){var n=new e(t.getName(),t.getFlowType());return n.x=t.x,n.y=t.y,n.width=t.width,n.height=t.height,n.levelNum=t.getLevelNumber(),n.laneNum=t.getLaneNumber(),n},getNodeAtPoint:function(t,e){for(var n=0;n<t.length;n++)if(t[n].isVisible()&&t[n].containsPoint(e))return t[n]},getPortAtPoint:function(t,e){for(var n=0;n<t.length;n++)if(t[n].isVisible())for(var i=t[n].getAllPorts(),o=0;o<i.length;o++){var g=i[o];if(g.getType()===r.portType().LINK_CNX&&g.containsPoint(e))return g;if(g.getType()===r.portType().LINK_REF&&g.containsPoint(e))return g;if(g.getType()===r.portType().MARKUP&&g.hasPoint(e))return g;if(g.getType()===r.portType().REF&&g.hasPoint(e))return g}},getLinkAtPoint:function(t,e){for(var n=0;n<t.length;n++)if(t[n].isVisible()&&t[n].containsPoint(e))return t[n]},getRectangleAtPoint:function(t,e){for(var n=0;n<e.length;n++)if(e[n].hasPointInside(t))return e[n]},getRectangleIndexAtPoint:function(t,e){for(var n=0;n<e.length;n++)if(e[n].hasPointInside(t))return n;return-1},getRectangleIndex:function(t,e){for(var n=0;n<e.length;n++)if(e[n].equals(t))return n;return-1}}});