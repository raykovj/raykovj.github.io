define("modules/model/removeLinkUndoableAction",["modules/diagram/diagramUtils"],function(e){function n(n,o){var i=this,t=n,d=o;i.getName=function(){return e.getLinkObjectName(d)},i.execute=function(){t.removeLinkFromModel(d)},i.undo=function(){t.addLinkToModel(d)},i.redo=function(){t.removeLinkFromModel(d)}}return n});