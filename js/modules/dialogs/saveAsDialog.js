define(["jquery","knockout","modules/settings/config","modules/graph/graphConstants"],function(e,o,a,t){function i(){var o=this;o.initDialog=function(a){var t=e("#saveAsDialogId");t.dialog({autoOpen:!1,closeOnEscape:!1,width:406,show:{effect:"slideDown",duration:200},hide:{effect:"slideUp",duration:200},modal:!0,resizable:!1,title:"Save As...",position:{my:"left top",at:"left bottom+4",of:e("#saveAsId")},open:function(o,t){var i=a.getCaller().getCurrentFileName();e("#saveAsFileNameId").val(i)},buttons:[{id:"saveAsButtonSave",text:"Save",click:function(){o.saveToName(a),e(this).dialog("close")}},{text:"Cancel",click:function(){e(this).dialog("close")}}]}),e(".ui-dialog-titlebar-close").hide(),e(document).on("click",".ui-widget-overlay",function(){t.dialog("close")})},o.saveToName=function(e){var o=e.getCaller().saveAsFileNameValue();console.log("OK: SaveAsDialog - saveToName, name='"+o+"'"),o&&o.length>0?e.saveFlowDataAs(o+".json"):console.log("SaveAsDialog - can't proceed, empty value")}}return new i});