define("modules/graph/corridor",["modules/geometry/rectangle","modules/core/jsUtils","modules/graph/graphConstants","modules/graph/nodeCell","modules/layout/layoutUtils"],function(e,n,t,r,o){function s(n){e.call(this,0,0,0,0),s.TYPE={UNDEF:0,LEVEL:1,LANE:2},s.MIN_COR_WIDTH=t.corridorMinSize().WIDTH,s.MIN_COR_HEIGHT=t.corridorMinSize().HEIGHT;var l=this;l.order=n,l.setOrder=function(e){l.order=e},l.getOrder=function(){return l.order},l.cells=[],l.getCells=function(){return l.cells},l.clearCells=function(){for(var e=0;e<l.cells.length;e++)l.cells[e].node&&(l.cells[e].node=void 0);l.cells=[]},l.extendedSegments=[],l.getType=function(){return s.TYPE.UNDEF},l.getExtent=function(){return 0},l.getNodes=function(){for(var e=[],n=0;n<l.cells.length;n++)l.cells[n]instanceof r&&l.cells[n].getNode()&&e.push(l.cells[n].getNode());return e},l.containsCell=function(e){for(var n=0;n<l.cells.length;n++)if(l.cells[n].equals(e))return!0;return!1},l.containsSegment=function(e){for(var n=0;n<l.extendedSegments.length;n++)if(l.extendedSegments[n].equals(e))return!0;return!1},l.addExtendedSegment=function(e){l.containsSegment(e)||l.extendedSegments.push(e)},l.clearSegments=function(){l.extendedSegments=[]},l.hasSegmentsViolations=function(){for(var e=!1,n=0;n<l.extendedSegments.length-1;n++)for(var r=l.extendedSegments[n],s=n+1;s<l.extendedSegments.length;s++){var d=l.extendedSegments[s];o.areSegmentsInClearanceViolation(r,d,Math.floor(t.segmentsGap.MIN/2))&&(r.getEdge().setOptimizationBlocked(!0),e=!0)}return e},l.print=function(){return l.constructor.name+": "+l.showBounds()+", order="+l.order+", type="+l.getType()},l.printShort=function(){return l.constructor.name+": order="+l.order+", nodes: "+l.getNodes().length+", "+l.showBounds()}}return n.inherit(s,e),s});