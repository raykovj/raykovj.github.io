define("modules/model/setSegmentShiftUndoableAction",["modules/graph/graphConstants"],function(t){function e(t,e,n,i){var o=this,f=t,u=e,s=n,S=(e.getSegmentShift(n),i);o.getName=function(){return"[shift to step] "},o.execute=function(){f.setSegmentShift(u,s,S)},o.undo=function(){f.setSegmentShift(u,s,-S)},o.redo=function(){f.setSegmentShift(u,s,S)}}return e});