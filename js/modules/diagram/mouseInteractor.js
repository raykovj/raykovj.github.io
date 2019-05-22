define("modules/diagram/mouseInteractor",["modules/flow/flowManager","modules/diagram/flowNode","modules/graph/graphEdge","modules/geometry/point","modules/graph/graphConstants","modules/settings/config","modules/flow/flowUtils","modules/diagram/diagramUtils","jqueryui","jqueryuictxm"],function(e,t,o,n,i,l,a,r){function g(e){function t(e){return[{title:"Edit...",action:function(t,o){w(e)},disabled:o(e)},{title:"----"},{title:"Rename...",action:function(t,o){var n=A.getBoundingClientRect();h(n.left+e.x+e.width/2,n.top+e.y+e.height/2,e)}},{title:"----"},{title:"Edit content...",action:function(t,o){var n=A.getBoundingClientRect();L(n.left+e.x,n.top+e.y+e.height,e)}},{title:"----"},{title:"Remove node",action:function(t,o){P.getFlowController().removeNode(e),P.refreshDiagram()}},{title:"----"},{title:"Show node info",action:function(t,o){var n="NODE: "+e.getName()+",  type: "+r.getFlowTypeName(e.getFlowType())+"\nlayer: "+e.getLevelNumber()+", lane: "+e.getLaneNumber();P.getCaller().showInfoMessage(n,"Node Info")}}]}function o(e){return e.getFlowType()!==i.flowType().DECISION}function g(e){return[{title:"Remove link",action:function(t,o){P.getFlowController().removeLink(e),P.refreshDiagram()}},{title:"----"},{title:"Clear segment edits",action:function(t,o){P.getFlowController().clearSegmentShifts([e]),P.refreshDiagram()},disabled:0===e.getTotalShifts().length},{title:"----"},{title:"Show link info",action:function(t,o){var n="LINK: "+e.printLink();P.getCaller().showInfoMessage(n,"Link Info")}}]}function d(){return[{title:"Add node<kbd/>",children:l.getLayoutMode()===i.layoutMode().AUTO?c():s(),disabled:E},{title:"----"},{title:"Undo",cmd:"undoCmd",action:function(e,t){P.getUndoManager().undo()},disabled:!0},{title:"Redo",cmd:"redoCmd",action:function(e,t){P.getUndoManager().redo()},disabled:!0},{title:"----"},{title:"Remove selections",cmd:"removeSelected",action:function(e,t){P.getFlowController().removeSelections(),P.getSelectionManager().clearSelections(),P.refreshDiagram()},disabled:!0}]}function u(){return[{title:"Add node<kbd/>",children:s(),disabled:E},{title:"----"},{title:"Insert layer",action:function(e,t){var o=a.getLevelPipeIndexAtPoint(D,P.getFlowLayout().getLevelPipes());P.getFlowController().addCorridor(o,-1),P.refreshDiagram()},disabled:C()},{title:"Insert lane",action:function(e,t){var o=a.getLanePipeIndexAtPoint(D,P.getFlowLayout().getLanePipes());P.getFlowController().addCorridor(-1,o),P.refreshDiagram()},disabled:O()},{title:"----"},{title:"Remove layer",action:function(e,t){var o=a.getLevelIndexAtPoint(D,P.getFlowLayout().getLevels());P.getFlowController().removeCorridor(o,-1),P.refreshDiagram()},disabled:F()},{title:"Remove lane",action:function(e,t){var o=a.getLaneIndexAtPoint(D,P.getFlowLayout().getLanes());P.getFlowController().removeCorridor(-1,o),P.refreshDiagram()},disabled:I()},{title:"----"},{title:"Clear all segment edits",action:function(e,t){P.getFlowController().clearAllShifts(),P.refreshDiagram()},disabled:!P.getModelHandler().haveLinksSegmentShifts()},{title:"----"},{title:"Undo",cmd:"undoCmd",action:function(e,t){P.getUndoManager().undo()},disabled:!0},{title:"Redo",cmd:"redoCmd",action:function(e,t){P.getUndoManager().redo()},disabled:!0}]}function c(){var e=[];return l.hasStartEndLevels()&&e.push({title:"Start Node",action:function(e,t){m(i.flowType().START)}}),e.push({title:"Process Node",action:function(e,t){m(i.flowType().PROCESS)}}),e.push({title:"Decision Node",action:function(e,t){m(i.flowType().DECISION)}}),e.push({title:"Input/Output Node",action:function(e,t){m(i.flowType().IN_OUT)}}),l.hasSideSwimLanes()&&(l.getFlowDirection()===i.flow().HORIZONTAL?(e.push({title:"Top Lane Node",action:function(e,t){m(i.flowType().LEFT_TOP)}}),e.push({title:"Bottom Lane Node",action:function(e,t){m(i.flowType().RIGHT_BOTTOM)}})):l.getFlowDirection()===i.flow().VERTICAL&&(e.push({title:"Left Lane Node",action:function(e,t){m(i.flowType().LEFT_TOP)}}),e.push({title:"Right Lane Node",action:function(e,t){m(i.flowType().RIGHT_BOTTOM)}}))),l.hasStartEndLevels()&&e.push({title:"End Node",action:function(e,t){m(i.flowType().END)}}),e}function s(){var e=P.getDnDHandler().getAcceptingCellAtPoint(D);if(!e)return E=!0,[];var t=[];return f(e,i.flowType().START)&&t.push({title:"Start Node",action:function(e,t){m(i.flowType().START)}}),f(e,i.flowType().PROCESS)&&t.push({title:"Process Node",action:function(e,t){m(i.flowType().PROCESS)}}),f(e,i.flowType().IN_OUT)&&t.push({title:"Input/Output Node",action:function(e,t){m(i.flowType().IN_OUT)}}),f(e,i.flowType().DECISION)&&t.push({title:"Decision Node",action:function(e,t){m(i.flowType().DECISION)}}),l.hasSideSwimLanes()&&(l.getFlowDirection()===i.flow().HORIZONTAL?(f(e,i.flowType().LEFT_TOP)&&t.push({title:"Top Lane Node",action:function(e,t){m(i.flowType().LEFT_TOP)}}),f(e,i.flowType().RIGHT_BOTTOM)&&t.push({title:"Bottom Lane Node",action:function(e,t){m(i.flowType().RIGHT_BOTTOM)}})):l.getFlowDirection()===i.flow().VERTICAL&&(f(e,i.flowType().LEFT_TOP)&&t.push({title:"Left Lane Node",action:function(e,t){m(i.flowType().LEFT_TOP)}}),f(e,i.flowType().RIGHT_BOTTOM)&&t.push({title:"Right Lane Node",action:function(e,t){m(i.flowType().RIGHT_BOTTOM)}}))),f(e,i.flowType().END)&&t.push({title:"End Node",action:function(e,t){m(i.flowType().END)}}),E=0==t.length,t}function f(e,t){var o=P.getFlowDiagram().getFlowLayout(),n=e.getLevelNumber(),a=e.getLaneNumber(),r=o.getLevels().length-1,g=o.getLanes().length-1;return t===i.flowType().START?0===n&&l.hasStartEndLevels()&&(!l.hasSideSwimLanes()||a>0&&a<g):t===i.flowType().END?n===r&&l.hasStartEndLevels()&&(!l.hasSideSwimLanes()||a>0&&a<g):t===i.flowType().PROCESS||t===i.flowType().DECISION||t===i.flowType().IN_OUT?l.hasStartEndLevels()?n>0&&n<r&&(!l.hasSideSwimLanes()||a>0&&a<g):!l.hasSideSwimLanes()||a>0&&a<g:t===i.flowType().LEFT_TOP?l.hasSideSwimLanes()&&0==a&&(!l.hasStartEndLevels()||n>0&&n<r):t===i.flowType().RIGHT_BOTTOM&&(l.hasSideSwimLanes()&&a==g&&(!l.hasStartEndLevels()||n>0&&n<r))}function m(e){if(l.getLayoutMode()===i.layoutMode().AUTO)P.getFlowController().addNodeByType(e,P.getNodeNamesMap());else if(l.getLayoutMode()===i.layoutMode().MANUAL){var t=P.getDnDHandler().getAcceptingCellAtPoint(D);P.getFlowController().addNodeOnCell(e,P.getNodeNamesMap(),t)}P.refreshDiagram()}function p(e){for(var t=P.getModelHandler().getFlowNodes(),o=0;o<t.length;o++)t[o].setHighlightedAtPoint(e);var n=P.getModelHandler().getFlowLinks();for(o=0;o<n.length;o++)n[o].highlightOnMouseMove(e)}function w(e){e.getFlowType()===i.flowType().DECISION&&P.getFlowController().editDecisionNode(e)}function h(e,t,o){k.show(),k.val(o.getName()),P.getCaller().setOldName(o.getName()),k.offset({top:t,left:e}),k.focus(),U=o,P.getSelectionManager().clearSelections()}function T(){k.hide(),k.val(""),U=void 0}function L(e,t,o){G.show(),X.value=o.getContentText(),G.offset({top:t,left:e}),G.focus(),V.show(),V.offset({top:t+84,left:e}),U=o,P.getSelectionManager().clearSelections()}function v(){G.hide(),V.hide(),G.val(""),U=void 0}function M(e){var t=A.getBoundingClientRect(),o=Math.floor(e.clientX-t.left),i=Math.floor(e.clientY-t.top);return new n(o,i)}function S(){var e=P.getSelectionManager().getSelections();return e.length>0?e[0]:void 0}function y(e,t){for(var o,n=P.getFlowDiagram().getFlowNodes(),i=0;i<n.length;i++){var l=n[i];l.isVisible()&&(o?l.clearEditing():(o=l.getSelectedAtPoint(e),o?P.getSelectionManager().addOrToggleSelection(o,t):l.clearEditing()))}return o}function N(e,t){for(var o=P.getFlowDiagram().getFlowLinks(),n=0;n<o.length;n++){var i=o[n];if(i.isVisible()&&i.containsPoint(e))return P.getSelectionManager().addOrToggleSelection(i,t),i}}function C(){var e=P.getFlowDiagram().getFlowLayout(),t=(a.getMinLevel(e),a.getMinLevelNumber()),o=(a.getMaxLevel(e),a.getMaxLevelNumber(e)),n=a.getLevelPipeIndexAtPoint(D,e.getLevelPipes());return n<t||n>o+1}function O(){var e=P.getFlowDiagram().getFlowLayout(),t=(a.getMinLane(e),a.getMinLaneNumber()),o=(a.getMaxLane(e),a.getMaxLaneNumber(e)),n=a.getLanePipeIndexAtPoint(D,e.getLanePipes());return n<t||n>o+1}function F(){var e=P.getFlowDiagram().getFlowLayout(),t=a.getMinLevelNumber(),o=a.getMaxLevelNumber(e),n=a.getLevelAtPoint(D,e.getLevels());return!(n&&n.getOrder()>=t&&n.getOrder()<=o)||n.getNodes().length>0}function I(){var e=P.getFlowDiagram().getFlowLayout(),t=a.getMinLaneNumber(),o=a.getMaxLaneNumber(e),n=a.getLaneAtPoint(D,e.getLanes());return!(n&&n.getOrder()>=t&&n.getOrder()<=o)||n.getNodes().length>0}var D,E,b=this,P=e,R=P.getSelectionManager(),A=P.getCanvas(),x=0,B=0,_=!1,U=void 0,H=$("#canvasId"),k=$("#editNameId"),G=$("#editContentId"),V=$("#contentSaveId"),X=document.getElementById("editContentId");b.getContextMenu=function(){return{menu:d(),uiMenuOptions:{classes:{"ui-menu":"ui-menu ctx-menu"}},beforeOpen:function(e,o){var n=S();n&&n.getId()===i.elementType().NODE&&_?H.contextmenu("replaceMenu",t(n)):n&&n.getId()===i.elementType().EDGE&&_?H.contextmenu("replaceMenu",g(n)):l.getLayoutMode()===i.layoutMode().MANUAL&&l.hasEnableAddCorridors()?H.contextmenu("replaceMenu",u()):H.contextmenu("replaceMenu",d()),H.contextmenu("enableEntry","undoCmd",P.canUndo()),H.contextmenu("enableEntry","redoCmd",P.canRedo()),H.contextmenu("enableEntry","removeSelected",P.getSelectionManager().hasSelections())}}},b.onMouseMove=function(e){var t=A.getBoundingClientRect(),o=Math.floor(e.clientX-t.left),n=Math.floor(e.clientY-t.top);if(Math.abs(x-o)>1||Math.abs(B-n)>1){x=o,B=n;var i=M(e);p(i),P.getFlowDiagram().setMousePoint(i),P.paintDiagram(),P.showTooltip(i)}},b.onMousePress=function(e){var t=M(e),o=P.isControlPressed(),n=P.getSelectionManager().getSelections();o&&2!==e.button||R.clearSelections();var i=y(t,o);i||(i=N(t,o)),i?_=!0:(_=!1,2===e.button&&P.getSelectionManager().addMultipleToSelections(n)),T(),v(),P.getCaller().updateWindow(),P.paintDiagram()},b.onMouseRelease=function(e){E=!1,D=M(e),P.getCaller().setTooltipBox("")},b.onMouseClick=function(e){},b.onMouseDoubleClick=function(e){for(var t,o=M(e),n=P.getModelHandler().getFlowNodes(),i=0;i<n.length;i++)if(n[i].containsPoint(o)){t=n[i];break}t?w(t):T()},b.onMouseExit=function(e){P.getFlowDiagram().setMousePoint(void 0),P.getFlowDiagram().clearMarkups(),P.paintDiagram(),P.getCaller().setTooltipBox("")},b.getEditingNode=function(){return U},b.isOverCanvas=function(e){var t=A.getBoundingClientRect(),o=Math.floor(t.left),n=Math.floor(t.top),i=Math.floor(t.width),l=Math.floor(t.height),a=Math.floor(e.clientX),r=Math.floor(e.clientY);return a>=o&&a<=o+i&&r>=n&&r<=n+l}}return g});