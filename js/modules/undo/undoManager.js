define("modules/undo/undoManager",["modules/undo/undoableStack","modules/graph/graphConstants","modules/settings/config","modules/core/jsUtils"],function(e,n,t,o){function r(e){function n(){var e=o.length;if(e>0&&a<e){var n=e-a;o.splice(a,n)}}var t=this,o=[],r=e,a=0;t.addStack=function(e){n(),o.push(e),a=o.length,r.setUndoName(e.getUndoName()),r.setRedoName(e.getRedoName()),r.setDirty(!0)},t.undo=function(){if(a>0){o[--a].undo(),r.refreshDiagram(),0===a&&(r.resetUndoProperties(),r.setDirty(!1))}},t.redo=function(){if(a<o.length){o[a++].redo(),r.setDirty(!0),r.refreshDiagram()}},t.canUndo=function(){return a>0},t.canRedo=function(){return a<o.length},t.isUndoBufferEmpty=function(){return 0===o.length},t.clearAll=function(){for(var e=0;e<o.length;e++)o[e].clear();o=[],a=0,r.setUndoName(""),r.setRedoName("")}}return r});