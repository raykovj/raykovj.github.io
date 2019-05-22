define("modules/view/dndHandler",["modules/view/dndTracker","modules/geometry/point","modules/geometry/rectangle","modules/draw/draw","modules/graph/graphConstants","modules/settings/config","modules/diagram/diagramUtils","modules/view/dndUtils","modules/flow/flowUtils","modules/dialogs/messageDialog"],function(e,t,o,r,a,n,g,l,i,d){function s(o){function d(){q.drawAcceptingLocations(),z.paintDiagram(),s()}function s(){var e=Q.getContext("2d");if(Z.getDragMode()===a.dragMode().MARKUP_PORT||Z.getDragMode()===a.dragMode().REF_PORT)e.lineWidth=2,e.setLineDash([0,0]),e.strokeStyle=a.colors().DND_LINE,e.beginPath(),e.moveTo(U.x,U.y),e.lineTo(Y.x,Y.y),e.stroke();else if(Z.getDragMode()===a.dragMode().LINK_PORT&&R&&Y){var t=n.getLinkStyle()===a.linkStyle().DOUBLE_ARROW?R.getAttachmentPoint():R.getConnectionPoint();e.lineWidth=2,R.getType()===a.portType().LINK_REF?e.setLineDash([4,2]):e.setLineDash([0,0]),e.strokeStyle=a.colors().DND_LINE,e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(Y.x,Y.y),e.stroke()}}function p(e){return!!q.getAcceptingCellAtPoint(e)||(O(e,E),X>-1||j>-1)}function T(e){var t=Q.getContext("2d");r.paintRectangle(t,e,a.colors().EMPTY_CORRIDOR,a.colors().GRID,1)}function L(e,t){var o=Q.getContext("2d");r.paintRectangle(o,e,t,a.colors().GRID,1)}function f(e){var t=z.getModelHandler().getFlowNodes();return l.getNodeAtPoint(t,e)}function v(e){var t=z.getModelHandler().getFlowNodes();return l.getPortAtPoint(t,e)}function M(e){var t=z.getModelHandler().getFlowLinks();return l.getLinkAtPoint(t,e)}function y(e){var t=M(e);return t?t.getSegmentAtPoint(e):void 0}function P(e){for(var t=z.getFlowDiagram().getFlowLinks(),o=0;o<t.length;o++)t[o].hasSegmentShifts()||t[o].highlightOnMouseMove(e)}function c(){for(var e=[],t=J.getEmptyCells(),o=0;o<t.length;o++)N(t[o].getLevelNumber(),t[o].getLaneNumber())&&e.push(t[o]);return e}function w(){for(var e=[],t=J.getEmptyCells(),o=J.getLevels().length-1,r=J.getLanes().length-1,a=n.hasSideSwimLanes()&&n.hasStartEndLevels(),g=0;g<t.length;g++){var l=t[g].getLevelNumber(),i=t[g].getLaneNumber();a&&(0===l&&0===i||0===l&&i===r||l===o&&0===i||l===o&&i===r)||e.push(t[g])}return e}function N(e,t){var o=J.getLevels().length-1,r=J.getLanes().length-1;return m&&m.getFlowType()===a.flowType().START||E===a.flowType().START?0===e&&n.hasStartEndLevels()&&(!n.hasSideSwimLanes()||t>0&&t<r):m&&m.getFlowType()===a.flowType().END||E===a.flowType().END?e===o&&n.hasStartEndLevels()&&(!n.hasSideSwimLanes()||t>0&&t<r):m&&m.getFlowType()===a.flowType().PROCESS||E===a.flowType().PROCESS||m&&m.getFlowType()===a.flowType().IN_OUT||E===a.flowType().IN_OUT||m&&m.getFlowType()===a.flowType().DECISION||E===a.flowType().DECISION?n.hasStartEndLevels()?e>0&&e<o&&(!n.hasSideSwimLanes()||t>0&&t<r):!n.hasSideSwimLanes()||t>0&&t<r:m&&m.getFlowType()===a.flowType().LEFT_TOP||E===a.flowType().LEFT_TOP?n.hasSideSwimLanes()&&0==t&&(!n.hasStartEndLevels()||e>0&&e<o):!!(m&&m.getFlowType()===a.flowType().RIGHT_BOTTOM||E===a.flowType().RIGHT_BOTTOM)&&(n.hasSideSwimLanes()&&t==r&&(!n.hasStartEndLevels()||e>0&&e<o))}function D(e){var t=J.getLevelPipes(),o=J.getLanePipes(),r=i.getMinLevelNumber(),a=i.getMaxLevelNumber(J),n=i.getMinLaneNumber(),g=i.getMaxLaneNumber(J);H=i.getRectangleAtPoint(e,t);var l=H?H.getOrder():-1;(l<r||l>a+1)&&(H=void 0),W=i.getRectangleAtPoint(e,o);var d=W?W.getOrder():-1;(d<n||d>g+1)&&(W=void 0)}function O(e,t){var o=J.getLevels(),r=J.getLevelPipes(),g=J.getLanes(),l=J.getLanePipes();H=i.getRectangleAtPoint(e,r),X=H?H.getOrder():-1,W=i.getRectangleAtPoint(e,l),j=W?W.getOrder():-1;var d=i.getRectangleAtPoint(e,o),s=d?d.getOrder():-1,p=i.getRectangleAtPoint(e,g),T=p?p.getOrder():-1,L=!1,f=!1,v=i.getMaxLevelNumber(J),M=i.getMaxLaneNumber(J),y=i.getMinLevelNumber(),P=i.getMinLaneNumber();t===a.flowType().START?(L=!0,n.hasStartEndLevels()?0!=s?f=!0:n.hasSideSwimLanes()&&(j<P||j>M+1)&&(f=!0):f=!0):t===a.flowType().END?(L=!0,n.hasStartEndLevels()?s!=v+1?f=!0:n.hasSideSwimLanes()&&(j<P||j>M+1)&&(f=!0):f=!0):t===a.flowType().PROCESS||t===a.flowType().DECISION||t===a.flowType().IN_OUT?(n.hasStartEndLevels()&&(0==X||X>v+1)&&(L=!0,f=!0),n.hasSideSwimLanes()&&(0==j||j>M+1)&&(L=!0,f=!0)):t===a.flowType().LEFT_TOP?(f=!0,n.hasSideSwimLanes()?0!=T?L=!0:n.hasStartEndLevels()&&(X<y||X>v+1)&&(L=!0):L=!0):t===a.flowType().RIGHT_BOTTOM&&(f=!0,n.hasSideSwimLanes()?T!=M+1?L=!0:n.hasStartEndLevels()&&(X<y||X>v+1)&&(L=!0):L=!0),L&&(H=void 0,X=-1),f&&(W=void 0,j=-1)}function u(e,t){var o=n.hasStartEndLevels()?1:0,r=n.hasStartEndLevels()?J.getLevels().length-2:J.getLevels().length-1,g=-1;if(t==a.flowType().START)g=0;else if(t==a.flowType().END)g=J.getLevels().length-1;else if(t==a.flowType().PROCESS||t==a.flowType().DECISION||t==a.flowType().IN_OUT)if(X>-1)g=X;else{var l=i.getLevelIndexAtPoint(e,J.getLevels());g=l>=o&&l<=r?l:o}else t!=a.flowType().LEFT_TOP&&t!=a.flowType().RIGHT_BOTTOM||(g=X);return g}function S(e,t){var o=n.hasSideSwimLanes()?1:0,r=n.hasSideSwimLanes()?J.getLanes().length-2:J.getLanes().length-1,g=-1;if(t==a.flowType().START||t==a.flowType().END)g=j;else if(t==a.flowType().PROCESS||t==a.flowType().DECISION||t==a.flowType().IN_OUT)if(j>-1)g=j;else{var l=i.getLaneIndexAtPoint(e,J.getLanes());g=l>=o&&l<=r?l:o}else t==a.flowType().LEFT_TOP?g=0:t==a.flowType().RIGHT_BOTTOM&&(g=J.getLanes().length-1);return g}var E,m,h,A,R,I,C,F,_,x,b,G,U,k,B,K,Y,V,H,X,W,j,q=this,z=o,J=z.getFlowDiagram().getFlowLayout(),Q=z.getCanvas(),Z=new e(o);q.dragStarted=function(e){var o=Q.getBoundingClientRect(),r=Math.floor(e.clientX-o.left),g=Math.floor(e.clientY-o.top);G=new t(r,g),Y=G,m=void 0;var i=v(G),s=f(G),p=M(G),T=y(G);if(i){var L=document.createElement("img");L.src=i.getIcon().getAttribute("src"),e.dataTransfer.setDragImage(L,2,6),U=i.getAttachmentPoint();var P=i.getEdgesList();i.getType()===a.portType().LINK_CNX?(I=P[0],I.setVisible(!1),A=i,R=I.getOtherSidePort(i),R.setDNDMode(a.dndMode().ORIGIN),Z.setDragMode(a.dragMode().LINK_PORT)):i.getType()===a.portType().LINK_REF?(I=P[0],I.setVisible(!1),A=i,R=I.getOtherSidePort(i),R.setDNDMode(a.dndMode().ORIGIN),Z.setDragMode(a.dragMode().LINK_PORT)):i.getType()===a.portType().MARKUP?(R=i,R.setVisible(!0),R.setDNDMode(a.dndMode().ORIGIN),Z.setDragMode(a.dragMode().MARKUP_PORT)):i.getType()===a.portType().REF&&(R=i,R.setVisible(!0),R.setDNDMode(a.dndMode().ORIGIN),Z.setDragMode(a.dragMode().REF_PORT))}else if(s){if(n.getLayoutMode()===a.layoutMode().AUTO)return e.preventDefault(),void q.resetDrag();m=s,K=s.getFlowType(),m.showMarkupPorts(!1),m.hideRefPorts(),m.setDrawState(a.drawState().DRAGGED),h=l.getNodeFootprint(s),Z.setDragMode(a.dragMode().NODE);var c=Q.cloneNode(!0);c.style.display="none",e.dataTransfer.setDragImage(c,16,16)}else if(p){var w=p.getSegmentOrder(T);if(!(w>0&&w<p.getSegments().length-1))return e.preventDefault(),void q.resetDrag();p.copySegments(),C=p,F=T,C.setDraggedOrder(w),C.setDrawMode(a.drawMode().SEGMENT_DRAGGED),b=F.getPipe(),_=new t(F.getStartPoint().x,F.getStartPoint().y),x=new t(F.getEndPoint().x,F.getEndPoint().y),Z.setDragMode(a.dragMode().SEGMENT);var N=Q.cloneNode(!0);N.style.display="none",e.dataTransfer.setDragImage(N,5,5)}else e.preventDefault();d()},q.dragOver=function(e,o){var r=Q.getBoundingClientRect(),l=Math.floor(e.clientX-r.left),i=Math.floor(e.clientY-r.top);Y=new t(l,i);var s;if(k=!0,B=!1,V&&V.setDragMode(a.dragMode().NONE),V=void 0,!m&&o){E||(E=g.getFlowTypeForGalleryId(o)),Z.setDragMode(a.dragMode().GALLERY);var T=!1;Z.canDropOnLink(o)&&(T=P(Y)),n.getLayoutMode()!==a.layoutMode().MANUAL||T||O(Y,E),p(Y)?e.dataTransfer.dropEffect="move":e.dataTransfer.dropEffect="none"}else if(K&&m&&h){var L=Y.x-G.x,f=Y.y-G.y;m.setLocationOnDrag(h.x+L,h.y+f),n.getLayoutMode()==a.layoutMode().MANUAL&&O(Y,K),s="Drag node to a new location"}else if(R)Z.setAcceptedDestinations(R,Y),R.setVisible(!0),A&&A.setVisible(!0),(V=Z.getDragMode()===a.dragMode().LINK_PORT?Z.getAcceptingPortForPoint3(R,Y,I.getOtherSidePort(R)):Z.getAcceptingPortForPoint2(R,Y))&&V.setDragMode(a.dragMode().ACCEPT_PORT);else if(C){var v=Y.x-G.x,M=Y.y-G.y,y=_.x+v,c=_.y+M,w=x.x+v,N=x.y+M;F.setStartPoint(y,c),F.setEndPoint(w,N),s="Drag segment to an accepting pipe"}d(),s&&z.getCaller().setTooltipBox(s,Y)},q.dragEnd=function(e){var t=Q.getBoundingClientRect();e.dataTransfer.getData("text"),Math.floor(e.clientX-t.left),Math.floor(e.clientY-t.top);q.resetDrag(),z.refreshDiagram()},q.drop=function(e){var o=Q.getBoundingClientRect(),r=e.dataTransfer.getData("text"),l=Math.floor(e.clientX-o.left),d=Math.floor(e.clientY-o.top);E=g.getFlowTypeForGalleryId(r),a.flowType().NONE;var s=new t(l,d),p=M(s),T=q.getAcceptingCellAtPoint(s);if(!m&&E)if(p&&!p.hasSegmentShifts()&&Z.canDropOnLink(r))if(n.getLayoutMode()===a.layoutMode().MANUAL){var L=i.getLevelIndexAtPoint(s,J.getLevels()),f=i.getLaneIndexAtPoint(s,J.getLanes()),v=i.getLevelPipeIndexAtPoint(s,J.getLevelPipes()),y=i.getLanePipeIndexAtPoint(s,J.getLanePipes());z.getFlowController().insertNodeOnDropOverLink(E,z.getNodeNamesMap(),p,L,f,v,y,T)}else z.getFlowController().addNodeOnDropOverLink(E,z.getNodeNamesMap(),p);else if(n.getLayoutMode()===a.layoutMode().MANUAL){if(T)z.getFlowController().addNodeOnCell(E,z.getNodeNamesMap(),T);else if(O(s,E),X>-1||j>-1){var P=u(s,E),c=S(s,E);z.getFlowController().insertNodeOnDropOnPipe(E,z.getNodeNamesMap(),P,c,X,j)}}else z.getFlowController().addNodeByType(E,z.getNodeNamesMap());else if(K&&m&&h){if(T){var w=J.getCellForNode(m);z.getFlowController().moveNodeToNewCell(m,w,T)}else if(O(s,m.getFlowType()),X>-1||j>-1){var N=u(s,m.getFlowType()),D=S(s,m.getFlowType());z.getFlowController().moveNodeToPipe(h,m,N,D,X,j)}}else if(R)(V=Z.getDragMode()===a.dragMode().LINK_PORT?Z.getAcceptingPortForPoint3(R,s,I.getOtherSidePort(R)):Z.getAcceptingPortForPoint2(R,s))&&(Z.getDragMode()===a.dragMode().LINK_PORT&&null!=I?V===R?q.resetDrag():z.getFlowController().moveLinkPort(I,R,V):z.getFlowController().addLink(R,V));else if(C){var A;if(b.getType()===a.pipeType().LEVEL_PIPE?A=H?i.getLevelPipeAtPoint(s,J.getLevelPipes()):void 0:b.getType()===a.pipeType().LANE_PIPE&&(A=W?i.getLanePipeAtPoint(s,J.getLanePipes()):void 0),A&&A.getOrder()!=b.getOrder()&&Z.isSegmentDropAllowed(C,F,_,x,b,A)){var G=A.getOrder()-b.getOrder();z.getFlowController().processSegmentShift(C,F.getOrder(),G)}}q.resetDrag(),z.refreshDiagram()},q.resetDrag=function(){k=!1,E=void 0,Y=void 0,R=void 0,I&&(I.setVisible(!0),I=void 0),A&&(A.setVisible(!0),A=void 0),V&&V.setDragMode(a.dragMode().NONE),V=void 0,K=void 0,m&&(m.setDrawState(a.drawState().IN_LAYOUT),h&&m.setLocationOnDrag(h.x,h.y)),C&&(C.setDrawMode(a.drawMode().SEGMENTS),C.setDraggedOrder(-1),F=void 0,C=void 0,b=void 0),m=void 0,h=void 0,H=void 0,X=-1,W=void 0,j=-1,Z.clearTracking(),z.getSelectionManager().clearSelections(),z.getCaller().setTooltipBox(""),d()},q.drawAcceptingLocations=function(){var e=!1;if(n.getLayoutMode()!=a.layoutMode().MANUAL||Z.getDragMode()!==a.dragMode().NODE&&Z.getDragMode()!==a.dragMode().GALLERY)if(n.getLayoutMode()==a.layoutMode().MANUAL&&Z.getDragMode()===a.dragMode().NONE&&n.hasEnableAddCorridors()){var t=z.getFlowDiagram().getMousePoint();if(t){D(t),H&&(T(H),e=!0),W&&(T(W),e=!0);var o=i.getLevelAtPoint(t,J.getLevels());i.getMinLevelNumber(),i.getMaxLevelNumber(J);L(o,a.colors().EMPTY_CORRIDOR);var r=i.getLaneAtPoint(t,J.getLanes());i.getMinLaneNumber(),i.getMaxLaneNumber(J);L(r,a.colors().EMPTY_CORRIDOR);var g=q.getAcceptingCellAtPoint(t);g&&(L(g,a.colors().EMPTY_CELL),e=!0)}}else Z.getDragMode()===a.dragMode().SEGMENT&&(D(Y),b.getType()===a.pipeType().LEVEL_PIPE?H&&H.getOrder()!==b.getOrder()&&Z.isSegmentDropAllowed(C,F,_,x,b,H)&&L(H,a.colors().PIPE_DROP):b.getType()===a.pipeType().LANE_PIPE&&W&&W.getOrder()!==b.getOrder()&&Z.isSegmentDropAllowed(C,F,_,x,b,W)&&L(W,a.colors().PIPE_DROP),e=!0);else{var l=q.getAcceptingCellAtPoint(Y);l&&T(l),!m&&E?(H&&T(H),W&&T(W)):m&&n.hasEnableAddCorridors()&&(H&&(T(H),e=!0),W&&(T(W),e=!0))}return e},q.getAcceptingCellAtPoint=function(e){var t,o;if(Z.getDragMode()===a.dragMode().NODE||Z.getDragMode()===a.dragMode().GALLERY?t=c():Z.getDragMode()===a.dragMode().NONE&&(t=w()),t)for(o=0;o<t.length;o++)if(t[o].hasPointInside(e))return t[o]}}return s});