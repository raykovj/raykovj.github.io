define(["jquery","knockout","modules/graph/graphConstants"],function(i,o,e){function t(){function o(i){i.getCaller().setConfirmFlag(e.bValue().TRUE)}this.initDialog=function(e){var t=i("#confirmDialogId");t.dialog({autoOpen:!1,closeOnEscape:!1,width:420,height:200,show:{effect:"slideDown",duration:200},hide:{effect:"slideUp",duration:200},modal:!0,resizable:!1,title:"Confirm",open:function(o,e){i(".ui-dialog-titlebar-close").hide()},buttons:[{text:"OK",click:function(){o(e),i(this).dialog("close")}},{text:"Cancel",click:function(){i(this).dialog("close")}}],close:function(i,o){}}),i(".ui-dialog-titlebar-close").hide(),i(document).on("click",".ui-widget-overlay",function(){t.dialog("close")})}}return new t});