define(["jquery","knockout","modules/settings/config","modules/graph/graphConstants"],function(e,t,o,i){function n(){var t=this;t.initDialog=function(o){var i=e("#openFlowDialogId");i.dialog({autoOpen:!1,closeOnEscape:!1,width:380,height:218,show:{effect:"slideDown",duration:200},hide:{effect:"slideUp",duration:200},modal:!0,resizable:!1,title:"Open Flow Diagram",position:{my:"left top",at:"left bottom+4",of:e("#openId")},open:function(e,t){o.getFilesList()},buttons:[{text:"OK",click:function(){t.handleSelection(o),e(this).dialog("close")}},{text:"Cancel",click:function(){e(this).dialog("close")}}]}),e(".ui-dialog-titlebar-close").hide(),e(document).on("click",".ui-widget-overlay",function(){i.dialog("close")})},t.handleSelection=function(e){var t=e.getCaller().getSelectedFile();e.openDiagram(t)}}return new n});