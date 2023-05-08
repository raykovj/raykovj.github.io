define(["jquery","jqueryui","jqueryuictxm","knockout","modules/server/ioHandler","modules/fs/directories","modules/html/toolbar","modules/settings/config","modules/actions/frameActions","modules/graph/graphConstants","modules/gallery/components","modules/gallery/iconOptionsPicker","modules/gallery/portIconPicker","modules/gallery/cardinalityPicker","modules/gallery/decisionEnds","modules/gallery/dbTable","modules/flow/flowManager","modules/fs/fsBrowser","modules/diagram/mouseInteractor","modules/dialogs/newFlowDialog","modules/dialogs/newFolderDialog","modules/dialogs/openFlowDialog","modules/dialogs/createNodeDialog","modules/dialogs/nodePropsDialog","modules/dialogs/findDialog","modules/dialogs/linkPropsDialog","modules/dialogs/aboutDialog","modules/dialogs/infoDialog","modules/dialogs/confirmDialog","modules/dialogs/thumbnailDialog","modules/settings/settingsDialog","modules/dialogs/text1ViewDialog","modules/dialogs/text2ViewDialog","modules/geometry/point","modules/util/utils","modules/draw/draw","modules/controller/flowCache","modules/exportLayout/demoFlow","modules/util/integrationText"],function(e,t,n,i,o,a,s,r,l,d,u,c,g,p,b,m,f,v,I,w,h,T,N,D,M,y,C,L,E,k,x,F,P,S,V,A,O,R,B){function H(e){e===d.flow().VERTICAL?(pe.removeClass("block-extendV"),pe.addClass("block-extendH"),be.removeClass("block-extendH"),be.addClass("block-extendV"),me.removeClass("block-shrinkV"),me.addClass("block-shrinkH"),fe.removeClass("block-shrinkH"),fe.addClass("block-shrinkV")):e===d.flow().HORIZONTAL&&(pe.removeClass("block-extendH"),pe.addClass("block-extendV"),be.removeClass("block-extendV"),be.addClass("block-extendH"),me.removeClass("block-shrinkH"),me.addClass("block-shrinkV"),fe.removeClass("block-shrinkV"),fe.addClass("block-shrinkH"))}function _(e){e===d.flow().VERTICAL?(we.removeClass("block-extendV"),we.addClass("block-extendH"),he.removeClass("block-shrinkV"),he.addClass("block-shrinkH")):e===d.flow().HORIZONTAL&&(we.removeClass("block-extendH"),we.addClass("block-extendV"),he.removeClass("block-shrinkH"),he.addClass("block-shrinkV"))}function z(e){if(j.selectedFileType()===d.fileTypes().ALL)return e;var t=[],n=j.selectedFileType().split(".").pop();return e.forEach(function(e){e.split(".").pop()===n&&t.push(e)}),t}function K(){return Oe?Oe.getName():"[none]"}function W(e){r.setFlowDirection(e),j.setFlowDirectionChange(),H(e),_(e),j.getFlowManager().hasDiagramOpen()&&j.flowManager.setDirty(!0),j.setConfirmFlag(d.bValue().FALSE),j.getFlowManager().setSettingsChanged(!0),setTimeout(function(){j.getFlowManager().refreshDiagramOnEdit()},200)}function U(){e("#settingsDialogId").dialog({position:{my:"right top+10",at:"right top",of:"#topContainerId"}}),e("#nodePropsDialogId").dialog({position:{my:"right top+10",at:"right top",of:"#topContainerId"}}),e("#linkPropsDialogId").dialog({position:{my:"right top+10",at:"right top",of:"#topContainerId"}}),e("#thumbnailDialogId").dialog({position:{my:"right bottom",at:"right-17 bottom-4",of:window}}),e("#findDialogId").dialog({position:{my:"right top",at:"right-4 top-4",of:window}}),Z(),j.repaintDiagram()}function Z(){var t=e(window).height();e(window).scrollTop();ot.height(t-it)}var j=this,X=document.getElementById("canvasId"),q=document.getElementById("canvasThId"),J=X.getContext("2d"),$=document.getElementById("containerId"),Y=document.getElementById("topContainerId"),G=(document.getElementById("containerId"),e("#topContainerId"),e("#openFlowDialogId")),Q=e("#spinnerLevelsId"),ee=e("#spinnerLanesId"),te=e("#spinnerSpaceId"),ne=e("#confirmDialogId"),ie=(e("#thumbnailDialogId"),"[select 'New' or 'Open' from menus]"),oe=!1,ae=!1,se=!1;j.accHdrFlowTitle=i.observable(d.appTitles().FLOW_TITLE),j.accHdrSideTitle=i.observable(d.appTitles().SIDE_TITLE),j.accHdrMiscTitle=i.observable(d.appTitles().MISC_TITLE),j.accHdrPagesTitle=i.observable(d.appTitles().PAGES_TITLE),j.accHdrBpelTitle=i.observable(d.appTitles().BPEL_TITLE),j.accHdrK8sTitle=i.observable(d.appTitles().K8S_TITLE),j.getCanvas=function(){return X},j.getCanvasTh=function(){return q},j.getCanvasContext=function(){return J},j.getCanvasContainer=function(){return $},j.getTopContainer=function(){return Y},j.flowManager=new f(j),j.interactor=j.flowManager.getMouseInteractor(),j.dndHandler=j.flowManager.getDnDHandler(),j.updateTrigger=i.observable(!1);var re=new v(j);j.getFlowManager=function(){return j.flowManager};var le=Date.now(),de=!1;j.isConnectionOK=i.observable(de),j.cnxResultOK=function(){de=!0,j.showOverlayMessage("Connected",500),j.isConnectionOK(de),setTimeout(function(){j.updateWindow()},200),de&&j.flowManager.getInstallSettings()},j.cnxResultFAIL=function(e){Date.now()-le<3e3?(de=!1,console.log("*** connection FAIL: "+e.readyState),setTimeout(function(){j.showOverlayMessage("No server connection",500)},200)):(de=!0,j.showOverlayMessage("Connected",500)),j.isConnectionOK(de),setTimeout(function(){console.clear(),j.updateWindow()},200),de&&j.flowManager.getInstallSettings()},e(document).ready(function(){function t(t){return e("<img>",{style:"margin: 0 6px -2px -22px;",src:c.getIconURL(t.value)})}function n(t){return e("<img>",{style:"margin: 0 6px -2px 0;",src:c.getIconURL(t.value)})}function i(t){return e("<img>",{style:"margin: 0px 6px 2px 10px; ",src:g.getPortIconURL(t.value)})}function o(t){return e("<img>",{style:"margin: 0 6px -2px 6px; background-color: white; }",src:g.getPortIconURL(t.value)})}function a(t){return e("<img>",{style:"margin: 0 6px -2px -22px;",src:p.getCardinalityURL(t.value)})}function r(t){return e("<img>",{style:"margin: 0 6px -2px 0;",src:p.getCardinalityURL(t.value)})}J.canvas.width=0,J.canvas.height=0,w.initDialog(j.flowManager),h.initDialog(j.flowManager),T.initDialog(j.flowManager),x.initDialog(j.flowManager),F.initDialog(j.flowManager),P.initDialog(j.flowManager),N.initDialog(j.flowManager),D.initDialog(j.flowManager),M.initDialog(j.flowManager),y.initDialog(j.flowManager),C.initDialog(j.flowManager),L.initDialog(j.flowManager),E.initDialog(j.flowManager),k.initDialog(j.flowManager),s.initButtons(j),l.initActions(j),e("#canvasId").contextmenu(j.interactor.getContextMenu()),Y.addEventListener("mousemove",function(t){j.interactor.isOverCanvas(t)||(e("#canvasId").contextmenu("close"),j.flowManager.getFlowDiagram().setMousePoint(void 0))}),Y.addEventListener("mousedown",function(e){}),e("#paletteCtrId").show(),e("#paletteAccordionId").accordion({heightStyle:"fill",animate:{easing:"swing",duration:200},collapsible:!0,activate:function(e,t){j.updateWindow()}}),e("#accTableMiscsId").height(132),e("#accTableFlowId").height(210),e("#settingsTabId").tabs({}),e("#integrationTabId").tabs({}),e("#nodePropsTabId").tabs({activate:function(t,n){1===n.newTab.index()?e("#nodePropsTabId").css({overflow:"auto"}):e("#nodePropsTabId").css({overflow:"hidden"})}}),e("#infoTextId").attr("visibility","hidden"),Q.spinner({step:1,min:d.canvasRange().MIN,max:d.canvasRange().MAX,numberFormat:"n"}),Q.spinner("value",d.initial().LEVELS),Q.spinner("enable"),ee.spinner({step:1,min:d.canvasRange().MIN,max:d.canvasRange().MAX,numberFormat:"n"}),ee.spinner("value",d.initial().LANES),ee.spinner("enable"),te.spinner({step:1,min:d.canvasRange().MIN,max:d.canvasRange().MAX,numberFormat:"n"}),te.spinner("value",d.initial().LEVELS),te.spinner("enable");var u=e("#progressBarId");u.progressbar({value:!1}),u.height(14),e.widget("nodeIcons.iconselectmenu",e.ui.selectmenu,{_renderButtonItem:function(t){var i=e("<div>",{text:c.getIconLabel(t.value)});return n(t).prependTo(i),i},_renderItem:function(n,i){var o=e("<li>"),a=e("<div>",{text:c.getIconLabel(i.value)});return t(i).prependTo(a),o.append(a).appendTo(n)},_renderMenu:function(t,n){var i=this,o=c.getOptionItems(n);e.each(o,function(e,n){i._renderItemData(t,n)})},refreshButtonItem:function(e,t){var n=c.getIndexValue(e,t);this.element[0].selectedIndex=n,this.refresh()}}),e("#nodeIconItemsId").iconselectmenu().iconselectmenu("menuWidget").addClass("ui-menu-icons customicons"),e("#settingIconItemsId").iconselectmenu().iconselectmenu("menuWidget").addClass("ui-menu-icons customicons"),e.widget("portImages.porticonmenu",e.ui.selectmenu,{_renderButtonItem:function(t){var n=e("<div>",{style:"padding-left: 16px; height: 16px; width: 100px; background-color: white"});return i(t).prependTo(n),n},_renderItem:function(t,n){var i=e("<li>"),a=e("<div>",{style:"height: 16px; width: 120px"});return o(n).prependTo(a),i.append(a).appendTo(t)},_renderMenu:function(t,n){var i=this,o=g.getPortOptionItems(n);e.each(o,function(e,n){i._renderItemData(t,n)})},refreshButtonItem:function(e){var t=g.getPortIndexValue(e);this.element[0].selectedIndex=t,this.refresh()}}),e("#selectPortIconsId").porticonmenu().porticonmenu("menuWidget").addClass("ui-menu-icons porticons"),e.widget("ports.portcardinalitymenu",e.ui.selectmenu,{_renderButtonItem:function(t){var n=e("<div>",{text:p.getCardinalityLabel(t.value)});return r(t).prependTo(n),n},_renderItem:function(t,n){var i=e("<li>"),o=e("<div>",{text:p.getCardinalityLabel(n.value)});return a(n).prependTo(o),i.append(o).appendTo(t)},_renderMenu:function(t,n){var i=this,o=p.getCardinalityItems(n);e.each(o,function(e,n){i._renderItemData(t,n)})},refreshButtonItem:function(e,t){var n=p.getCardinalityIndex(e,t);this.element[0].selectedIndex=n,this.refresh()}}),e("#selectPartitionId").selectmenu({select:function(e,t){if(e.currentTarget){var n=e.currentTarget.textContent;console.log("$$$ disk select: "+n),j.selectedPartition(n)}},change:function(e,t){var n=e.currentTarget.textContent;console.log("### disk change: "+n)},create:function(e,t){setTimeout(function(){j.flowManager.getDiskNames()},1e3)}}).addClass("settingsDiskMenu").css("fontSize","16px"),e("#selectFileTypeId").selectmenu({create:function(t,n){setTimeout(function(){j.selectedFileType(d.fileTypes().JSON),e("#selectFileTypeId").selectmenu("refresh")},1e3)},select:function(e,t){if(e.currentTarget){var n=e.currentTarget.textContent;j.selectedFileType(n),j.flowManager.getDirContent()}}}).addClass("settingsDiskMenu"),e.widget("demomenu.demofilesmenu",e.ui.selectmenu,{_renderButtonItem:function(t){return e("<div>",{text:t.label?t.label:j.flowManager.getDemoList()[0].label})}}),e("#selectFileId").demofilesmenu().demofilesmenu("menuWidget").addClass("ui-menu-icons demofiles")}),j.isAutoLayoutAllowed=i.observable(r.isAllowAuto()),j.forceTestAutoMode=function(e){r.setLayoutMode(d.layoutMode().AUTO),j.flowManager.getSelectionManager().clearSelections(),j.flowManager.resetScale(),j.runTestAutoMode()},j.resetTestAutoMode=function(){j.flowManager.clearDiagram(),r.setLayoutMode(d.layoutMode().MANUAL)},j.runTestAutoMode=function(){},j.nodeEmojiItems=i.pureComputed(function(){return c.getNodeIconOptions()}),j.portIcons=i.pureComputed(function(){return g.getPortIconOptions()}),j.cardinalityItems=i.pureComputed(function(){return p.getCardinalityList()}),j.enableShowCardinality=i.observable(!1),j.setEnableShowCardinality=function(e){j.enableShowCardinality(e)},j.enableShowDB=i.observable(!1),j.setEnableShowDB=function(e){j.enableShowDB(e)},j.demoFilesItems=i.pureComputed(function(){return j.flowManager.getDemoList()}),j.nodeActionsList=i.pureComputed(function(){return D.getActionsList()}),j.nodeOperationsList=i.pureComputed(function(){return D.getOperationsList()}),j.nodeServicesList=i.pureComputed(function(){return D.getServicesList()}),j.nodePublishList=i.pureComputed(function(){return D.getPublishList()}),j.nodeSubscribeList=i.pureComputed(function(){return D.getSubscribeList()}),j.onOpsActionChange=function(e){},j.isProgressBarVisible=i.observable(!1),j.isProgressBarVisible.extend({notify:"always"}),j.setProgressBarVisible=function(e){j.isProgressBarVisible(e)},setTimeout(function(){e("#paletteAccordionId").accordion("option","icons",{header:"ui-icon-triangle-1-e",activeHeader:"ui-icon-triangle-1-s"})},100),j.showPageMode=i.observable(r.hasPageMode()),j.isCanvasVisible=i.observable(!1),j.setCanvasVisible=function(e){j.isCanvasVisible(e)},j.scaleValue=i.observable(r.getScale());var ue=document.getElementById("scaleId");ue.oninput=function(){r.setScale(this.value/d.scale().FACTOR),j.scaleValue(r.getScale()),j.flowManager.clearClipboard(),j.flowManager.getFlowDiagram().clearCanvas(),j.flowManager.paintDiagram()},ue.onchange=function(){j.flowManager.refreshDiagramOnEdit()},j.editModeText=i.observable(r.isEditMode()?d.editModeText().EDIT:d.editModeText().VIEW),j.setEditModeText=function(e){e===d.editMode().EDIT_ALL?j.editModeText(d.editModeText().EDIT):j.editModeText(d.editModeText().VIEW)},j.setTooltipBox=function(e,t){e.length>0&&r.isEditMode()&&A.drawTooltip(J,X.getBoundingClientRect(),t,e)},j.showTooltipBox=function(e){},j.getCurrentFileName=function(){var e=j.flowManager.getFileName(),t=e.indexOf(".json");return e.substring(0,t)};var ce,ge=document.getElementById("blockResizeId"),pe=e("#extendBlockAcrossId"),be=e("#extendBlockAlongId"),me=e("#shrinkBlockAcrossId"),fe=e("#shrinkBlockAlongId");j.showBlockResizeBar=function(e){var t=e.getExpandedShape(),n=r.getScale();ge.style.left=X.getBoundingClientRect().left+t.x*n+"px",ge.style.top=X.getBoundingClientRect().top+t.y*n-24+"px",pe.attr("disabled",!r.isEditMode()||!e.canExtendAcross()),be.attr("disabled",!r.isEditMode()||!e.canExtendAlong()),me.attr("disabled",!r.isEditMode()||!e.canShrinkAcross()),fe.attr("disabled",!r.isEditMode()||!e.canShrinkAlong()),ge.style.visibility="visible"},j.doResizeContainer=function(e){var t=j.getFlowManager().getSelectionManager().getSelections();t[0].getFlowType()===d.flowType().CONTAINER&&t[0].resizeOutline(e),ge.style.visibility="hidden",ce=!1},j.isBlockResizeBarVisible=function(){return ce},j.hideContainerBar=function(){ge.style.visibility="hidden"};var ve,Ie=document.getElementById("switchResizeId"),we=e("#extendSwitchAcrossId"),he=e("#shrinkSwitchAcrossId");j.showSwitchResizeBar=function(e){var t=e.getMenuBarPosition(),n=r.getScale();Ie.style.left=X.getBoundingClientRect().left+t.x*n+"px",Ie.style.top=X.getBoundingClientRect().top+t.y*n-24+"px",we.attr("disabled",!r.isEditMode()||!e.canExtendAcross()),he.attr("disabled",!r.isEditMode()||!e.canShrinkAcross()),Ie.style.visibility="visible"},j.doResizeSwitch=function(e){var t=j.getFlowManager().getSelectionManager().getSelections();t[0].getFlowType()===d.flowType().SWITCH&&t[0].resizeOutline(e),Ie.style.visibility="hidden",ve=!1},j.isSwitchResizeBarVisible=function(){return ve},j.hideSwitchBar=function(){Ie.style.visibility="hidden"},j.showSearchList=i.observable(!1),j.showFindOptions=i.observable(!0),j.searchContentList=i.observableArray(),j.foundMatches=i.observable(),j.onFindTableClick=function(e){var t=e.target.innerText;M.selectedNewDisk(t)},j.onFindTableDblClick=function(e){j.onFindTableClick(e)},j.onPasteSearchText=function(e){M.selectedNewDisk(label)},j.currentPath=i.observable(),j.fsContentList=i.observableArray(),j.selectedPath=i.observable(),j.isOpenMode=i.observable(),j.isSaveMode=i.observable(),j.showPartitions=i.observable(!1),j.partitionsList=i.observableArray([""]),j.selectedPartition=i.observable(),j.filesTypes=i.observableArray([d.fileTypes().JSON,d.fileTypes().ALL]),j.selectedFileType=i.observable(d.fileTypes().JSON);j.callOpenFlowDialog=function(){j.isConnectionOK()?G.dialog({height:440}):G.dialog({height:180}),j.flowManager.getRootDir(),G.dialog("open")},j.onDiskTableClick=function(e){var t=e.target.innerText;T.selectedNewDisk(t)},j.setFSDialogMode=function(e){re.setFSDialogMode(e)},j.getFSDialogMode=function(){return re.getFSDialogMode()},j.restoreWorkDir=function(){re.restoreWorkDir()},j.setWorkDir=function(e){re.setWorkDir(e)},j.getWorkDir=function(){return re.getWorkDir()},j.getSelectedFSDir=function(){return re.getSelectedFSDir()},j.getSelectedFSFile=function(){return re.getSelectedFSFile()},j.onDirTableClick=function(e){re.onDirTableClick(e)},j.deleteFSItem=function(){re.deleteFSItem()},j.onDirTableDblClick=function(e){re.onDirTableDblClick(e)},j.updateMainFSLocation=function(){re.updateMainFSLocation()},j.goOneDirBack=function(){re.goOneDirBack()},j.setDirsList=function(e,t){re.setDirsList(e,t)},j.setFolderContent=function(e,t){re.setFolderContent(e,t)},j.onFileTypeChange=function(e){re.onFileTypeChange(e)},j.showForegroundSelection=i.observable(!0),j.showBackgroundSelection=i.observable(!0),j.settingsSchemes=i.pureComputed(function(){return j.flowManager.getSettingsManager().getColorsSchemesList()});var Te;j.setNewAction=function(e){Te=e},j.isNewAction=function(){return Te},j.filesList=i.observableArray();var Ne=[];j.setFilesList=function(t){if(Ne=t,j.filesList(t),j.filesList(z(t)),Te)e("#newFlowDialogId").dialog("open");else;},j.selectedFile=i.observable(),j.getSelectedFile=function(){return j.isConnectionOK()?_selectedFile:j.selectedFile()},j.isInputInvalid=i.observable(!1),j.validateMessage=i.observable(""),j.newFSNameValue=i.observable(""),j.nameValueEmpty=i.observable(""),j.validateFSName=function(t,n){var i=j.newFSNameValue().trim(),o=n?a.getDirectoriesLabels():j.filesList();j.nameValueEmpty(0===i.length);var s=j.isInputInvalid(),r=V.containsFSName(o,i),l=V.isFSNameValid(j.newFSNameValue()),d=i.length>0&&(!l||r);j.isInputInvalid(d),s&&!d&&(e("#newFileNameId").blur(),e("#newFileNameId").focus()),e("#newFlowButtonOK").button("option","disabled",j.isInputInvalid()||j.nameValueEmpty()),e("#newFolderButtonOK").button("option","disabled",j.isInputInvalid()||j.nameValueEmpty()),l?r?j.validateMessage("Duplicate name"):j.validateMessage(""):j.validateMessage("Only alphanumeric characters, dots, dashes, and underscores"),t&&i.length>0&&l&&"Enter"===t.code&&(Te?(w.createNewDiagram(j.flowManager),e("#newFlowDialogId").dialog("close")):(h.createNewFolder(j.flowManager),e("#newFolderDialogId").dialog("close")))},e("#newFlowDialogId").on("dialogopen",function(e,t){j.validateFSName()}),e("#newFlowDialogId").on("dialogclose",function(e,t){j.newFSNameValue("")}),j.saveAsInputInvalid=i.observable(!1),j.saveAsMessage=i.observable(""),j.saveAsFileNameValue=i.observable(""),j.saveAsNameEmpty=i.observable(""),j.validateSaveAsFileName=function(t){var n=j.saveAsFileNameValue().trim();j.saveAsNameEmpty(0===n.length);var i=j.saveAsInputInvalid(),o=n!==j.getCurrentFileName()&&V.containsFSName(j.filesList(),n),a=V.isFSNameValid(j.saveAsFileNameValue()),s=n.length>0&&(!a||o);j.saveAsInputInvalid(s),i&&!s&&(e("#saveAsFileNameId").blur(),e("#saveAsFileNameId").focus()),e("#saveAsButtonSave").button("option","disabled",j.saveAsInputInvalid()||j.saveAsNameEmpty()),a?o?j.saveAsMessage("Duplicate name"):j.saveAsMessage(""):j.saveAsMessage("Only alphanumeric characters, dots, dashes, and underscores"),n.length>0&&a&&t.code};var De=i.observable();j.propsLinkSourceName=i.observable(),j.propsLinkSourceLabel=i.observable(),j.propsLinkTargetName=i.observable(),j.propsLinkTargetLabel=i.observable(),j.propsLinkLabel=i.observable(),j.getPropsLink=function(){return De()},j.getPropsLinkLabelValue=function(){return j.propsLinkLabel()},j.showLinkProps=function(t){De(t),j.propsLinkSourceName(De().getLinkSourcePortName()),j.propsLinkSourceLabel(De().getLinkSourcePortLabel()),j.propsLinkTargetName(De().getLinkTargetPortName()),j.propsLinkTargetLabel(De().getLinkTargetPortLabel()),j.propsLinkLabel(De().getLinkLabel()),e("#linkPropsDialogId").dialog("open")},j.editPropsLinkLabel=function(e){j.propsLinkLabel(document.getElementById("propsLinkLabelId").value)},j.propsFgndVisible=i.observable(!0),j.setPropsFgndVisible=function(e){j.propsFgndVisible(e)},j.propsNodeInputs=i.observableArray();var Me,ye;j.getPropsNodeInputsIdx=function(){return Me},j.getPropsNodeInputsValue=function(){return ye},j.propsNodeOutputs=i.observableArray();var Ce,Le;j.getPropsNodeOutputsIdx=function(){return Ce},j.getPropsNodeOutputsValue=function(){return Le},j.propsNodeRefInputs=i.observableArray();var Ee,ke;j.getPropsNodeRefInputsIdx=function(){return Ee},j.getPropsNodeRefInputsValue=function(){return ke},j.propsNodeRefOutputs=i.observableArray();var xe,Fe;j.getPropsNodeRefOutputsIdx=function(){return xe},j.getPropsNodeRefOutputsValue=function(){return Fe},j.isCardinalitySelected=i.observable(!0);var Pe=i.observable();j.getPropsNode=function(){return Pe()},j.showNodeProps=function(t){Pe(t),c.setNodeCategory(t.getNodeCategory()),j.propsNodeInputs(Pe().getInputPortsProperties()),j.propsNodeOutputs(Pe().getOutputPortsProperties()),j.propsNodeRefInputs(Pe().getRefInPortsProperties()),j.propsNodeRefOutputs(Pe().getRefOutPortsProperties()),j.dbNodeRecords(Pe().getDBRecords()),e("#nodePropsDialogId").dialog("open")},j.editPropsNodeInputLabel=function(e){Me=e.target.parentNode.parentNode.rowIndex;var t=document.getElementById("nodeInputsTableId"),n=t.getElementsByTagName("tr");ye=n[Me].cells[2].getElementsByTagName("input")[0].value},j.checkPortInputCardinality=function(e){D.editPortInputCardinality(e)},j.editPropsNodeOutputLabel=function(e){Ce=e.target.parentNode.parentNode.rowIndex;var t=document.getElementById("nodeOutputsTableId"),n=t.getElementsByTagName("tr");Le=n[Ce].cells[2].getElementsByTagName("input")[0].value},j.checkPortOutputCardinality=function(e){D.editPortOutputCardinality(e)},j.editPropsNodeRefInputLabel=function(e){Ee=e.target.parentNode.parentNode.rowIndex;var t=document.getElementById("nodeRefInputsTableId"),n=t.getElementsByTagName("tr");ke=n[Ee].cells[2].getElementsByTagName("input")[0].value},j.checkPortRefInputCardinality=function(e){D.editPortRefInputCardinality(e)},j.editPropsNodeRefOutputLabel=function(e){xe=e.target.parentNode.parentNode.rowIndex;var t=document.getElementById("nodeRefOutputsTableId"),n=t.getElementsByTagName("tr");Fe=n[xe].cells[2].getElementsByTagName("input")[0].value},j.checkPortRefOutputCardinality=function(e){D.editPortRefOutputCardinality(e)},j.dbNodeRecords=i.observableArray();j.editNodeTableKey=function(e){D.processTableClickKey(e)},j.editNodeTableField=function(e){D.processTableClickField(e)},j.editNodeTableType=function(e){D.processTableClickType(e)},j.editNodeTableLength=function(e){D.processTableClickLength(e)},j.isEditNameInvalid=i.observable(!1),j.editNameValue=i.observable(""),j.validateNameMessage=i.observable("");var Se;j.setOldName=function(e){Se=e},j.validateEditName=function(e){var t=j.editNameValue().trim();if(t.length>0){var n=V.getAllNames(j.flowManager.getNodeNamesMap()),i=V.isDuplicateName(Se,t,n),o=V.isNewNodeNameValid(t),a=!i&&o;j.isEditNameInvalid(!a)}else j.isEditNameInvalid(!0);i?j.validateNameMessage("Duplicate name"):o?j.validateNameMessage(""):j.validateNameMessage("Name should contain only alphanumericals, dots, dashes and underscores")},j.isLinkLabelInvalid=i.observable(!1),j.validateLinkMessage=i.observable("");var Ve;j.setOldLinkLabel=function(e){Ve=e},j.validateLinkLabel=function(e){var t=j.propsLinkLabel().trim();if(t.length>0){var n=V.getAllLinkLabels(j.flowManager.getLinkLabelsMap()),i=V.isDuplicateLabel(Ve,t,n),o=t===Ve||V.isNewLinkLabelValid(t),a=!i&&o;j.isLinkLabelInvalid(!a)}else j.isLinkLabelInvalid(!1);i?j.validateLinkMessage("Duplicate label"):o?j.validateLinkMessage(""):j.validateLinkMessage("Label should contain only alphanumericals, dots, dashes, underscores and spaces")},j.pictureURLValue=i.observable(""),j.isPictureURLInvalid=i.observable(!1),j.validatePictureURL=function(e){j.isPictureURLInvalid(!1)};var Ae=d.decisionRun().NONE,Oe=void 0;j.showNewFileName=i.observable(),j.showEditedInfo=i.observable(),j.showDecisionInfo=i.observable(),j.decisionInputPicture=i.observable(),j.decisionEndsPicture=i.observable(),j.isNodeNameInvalid=i.observable(!1),j.newNodeNameValue=i.observable(""),j.invalidNameMessage=i.observable(""),j.newDecisionInput=i.observable(b.getCurrentDecisionInput()),j.newDecisionEnds=i.observable(b.getCurrentDecisionEnds()),j.editedDecisionNodeName=i.observable("???"),j.setDecisionRun=function(e,t){if(Ae=t,t===d.decisionRun().CREATE){var n=O.getSelectedFlowType();j.showNewFileName(!0),j.showEditedInfo(!1),j.showDecisionInfo(n===d.flowType().DECISION)}else t===d.decisionRun().EDIT&&(Oe=e,b.setCurrentInput(e.getInput()),b.setCurrentEnds(e.getEnds()),j.editedDecisionNodeName(e.getName()),j.newDecisionInput(b.getCurrentDecisionInput()),j.newDecisionEnds(b.getCurrentDecisionEnds()),j.decisionInputPicture(b.getCurrentInputPicture()),j.decisionEndsPicture(b.getCurrentEndsPicture()),j.showNewFileName(!1),j.showEditedInfo(!0),j.showDecisionInfo(!0))},j.getEditedDecisionNode=function(){return Oe},j.getDecisionRun=function(){return Ae},j.validateNodeName=function(t){var n=j.newNodeNameValue().trim();O.getSelectedFlowType();if(n.length>0){var i=V.isNodeNameValid(n),o=V.getAllNames(j.flowManager.getNodeNamesMap()),a=V.isNodeNameDuplicate(n,o);if(j.isNodeNameInvalid(!i||a),i&&!a&&"Enter"===t.code)return N.proceed(j.flowManager),void e("#newNodeDialogId").dialog("close")}e("#newNodeButtonOK").button("option","disabled",j.isNodeNameInvalid()||0==n.length),i?a?j.invalidNameMessage("Duplicate name"):j.invalidNameMessage(""):j.invalidNameMessage("Only alphanumeric characters, dots, dashes, and underscores")},j.getDecisionIcon=function(){return j.updateTrigger(!j.updateTrigger()),b.getDecisionIcon()},j.resetDecisionIndices=function(){j.updateTrigger(!j.updateTrigger()),b.resetCurrentInputIndex(),b.resetCurrentEndsIndex(),j.decisionInputPicture(b.getCurrentInputPicture()),j.decisionEndsPicture(b.getCurrentEndsPicture()),j.newDecisionInput(b.getCurrentDecisionInput()),j.newDecisionEnds(b.getCurrentDecisionEnds())},j.moveDecisionInputNext=function(){j.updateTrigger(!j.updateTrigger()),b.moveInputNext(),j.newDecisionInput(b.getCurrentDecisionInput()),j.decisionInputPicture(b.getCurrentInputPicture()),j.decisionEndsPicture(b.getCurrentEndsPicture());var t=j.newNodeNameValue().trim();j.editedDecisionNodeName(K()),e("#newNodeButtonOK").button("option","disabled",j.getDecisionRun()!==d.decisionRun().EDIT&&(j.isNodeNameInvalid()||0==t.length))},j.moveDecisionInputPrev=function(){j.updateTrigger(!j.updateTrigger()),b.moveInputPrevious(),j.newDecisionInput(b.getCurrentDecisionInput()),j.decisionInputPicture(b.getCurrentInputPicture()),j.decisionEndsPicture(b.getCurrentEndsPicture());var t=j.newNodeNameValue().trim();j.editedDecisionNodeName(K()),e("#newNodeButtonOK").button("option","disabled",j.getDecisionRun()!==d.decisionRun().EDIT&&(j.isNodeNameInvalid()||0==t.length))},j.moveDecisionEndsNext=function(){j.updateTrigger(!j.updateTrigger()),b.moveEndsNext(),j.newDecisionEnds(b.getCurrentDecisionEnds()),j.decisionEndsPicture(b.getCurrentEndsPicture());var t=j.newNodeNameValue().trim();j.editedDecisionNodeName(K()),e("#newNodeButtonOK").button("option","disabled",j.getDecisionRun()!==d.decisionRun().EDIT&&(j.isNodeNameInvalid()||0==t.length))},j.moveDecisionEndsPrev=function(){j.updateTrigger(!j.updateTrigger()),b.moveEndsPrevious(),j.newDecisionEnds(b.getCurrentDecisionEnds()),j.decisionEndsPicture(b.getCurrentEndsPicture());var t=j.newNodeNameValue().trim();j.editedDecisionNodeName(K()),e("#newNodeButtonOK").button("option","disabled",j.getDecisionRun()!==d.decisionRun().EDIT&&(j.isNodeNameInvalid()||0==t.length))},j.btnFlowH2click=function(){j.changeFlowDirection(d.flow().VERTICAL)},j.btnFlowV2click=function(){j.changeFlowDirection(d.flow().HORIZONTAL)},j.changeFlowDirection=function(e){W(e)},j.isHorizontal=i.observable(!1),j.layoutModeText=i.observable(r.getLayoutModeText()),j.diagramModeText=i.observable(r.getDiagramModeText());var Re=(e("#newId"),e("#openId"),e("#importId")),Be=e("#undoId"),He=e("#redoId"),_e=e("#findId"),ze=e("#refreshId"),Ke=e("#clearId"),We=e("#leftId"),Ue=e("#rightId"),Ze=e("#deleteId"),je=e("#copyId"),Xe=e("#pasteId"),qe=e("#saveId"),Je=e("#saveAsId"),$e=e("#btnFlowVId");e("#btnThumbnailId");j.updateWindow=function(t){j.updateTrigger(!j.updateTrigger()),j.isHorizontal(r.getFlowDirection()===d.flow().HORIZONTAL),j.layoutModeText(r.getLayoutModeText()),j.diagramModeText(r.getDiagramModeText());var n=!r.isEditMode();s.updateMenus(j),Re.attr("disabled",!j.isConnectionOK()),Be.attr("disabled",n||!j.flowManager.canUndo()).attr("title",j.flowManager.getUndoName()),He.attr("disabled",n||!j.flowManager.canRedo()).attr("title",j.flowManager.getRedoName()),Ze.attr("disabled",n||!j.flowManager.getSelectionManager().hasSelections()),je.attr("disabled",n||!j.flowManager.canCopy()),Xe.attr("disabled",n||!j.flowManager.readyToPaste()),qe.attr("disabled",n||!j.isConnectionOK()||!j.flowManager.isDirty()),Je.attr("disabled",n||!j.isConnectionOK()||j.flowManager.getModelHandler().isDiagramEmpty()),ze.attr("disabled",!j.isCanvasVisible()),_e.attr("disabled",!j.isCanvasVisible()),Ke.attr("disabled",n||!j.isCanvasVisible()),We.attr("disabled",!j.flowManager.hasPreviousDiagram()),Ue.attr("disabled",!j.flowManager.hasNextDiagram()),$e.attr("disabled",r.getAppMode()!==d.appMode().FLOW_MODE),e("#btnFlowHId").attr("disabled",n),e("#btnFlowVId").attr("disabled",n),"visible"!==document.getElementById("blockResizeId").style.visibility||ce?ce&&(document.getElementById("blockResizeId").style.visibility="hidden",ce=!1):ce=!0,"visible"!==document.getElementById("switchResizeId").style.visibility||ve?ve&&(document.getElementById("switchResizeId").style.visibility="hidden",ve=!1):ve=!0,j.flowManager.isInitialResizeMode()&&j.flowManager.getModelHandler().isDiagramEmpty()?(Q.spinner("enable"),ee.spinner("enable")):(Q.spinner("disable"),ee.spinner("disable"))};var Ye=!1;j.hasFlowDirectionChange=function(){return Ye},j.setFlowDirectionChange=function(){Ye=!0},j.resetFlowDirectionChange=function(){Ye=!1},j.initData=function(){j.updateWindow()},j.galleryFlowNodes=i.pureComputed(function(){return j.updateTrigger(),r.getFlowDirection()===d.flow().HORIZONTAL?u.getFlowNodesH():u.getFlowNodesV()}),j.galleryMiscNodes=i.pureComputed(function(){return j.updateTrigger(),r.getFlowDirection()===d.flow().HORIZONTAL?u.getMiscNodesH():u.getMiscNodesV()}),j.pageNodes=i.pureComputed(function(){j.updateTrigger();for(var e=[],t=r.getFlowDirection()===d.flow().HORIZONTAL?u.getHPageItems():u.getVPageItems(),n=0;n<t.length;n++)e.push(t[n]);return e}),j.diagramDisplayName=i.observable(ie),j.setDiagramDisplayName=function(e){e&&e.length>0?j.diagramDisplayName(e):j.diagramDisplayName(ie)},j.aboutTitle=i.observable(""),j.aboutVersion=i.observable(""),j.aboutText=i.observable(""),j.aboutSources=i.observable(""),j.aboutCopyright=i.observable(""),j.showAboutBox=function(t,n,i,o,a){j.aboutTitle(t),j.aboutVersion(n),j.aboutText(i),j.aboutSources(o),j.aboutCopyright(a),e("#aboutDialogId").dialog("open")},j.integrationTitle=i.observable(B.getTopTitle()),j.integrationTopNotes=i.observable(B.getTopNotes()),j.integrationReactTitle=i.observable(B.getReactTitle()),j.integrationReactNotesTop=i.observable(B.getReactNotesTop()),j.integrationReactNotesBottom=i.observable(B.getReactNotesBottom()),j.integrationAngularTitle=i.observable(B.getAngularTitle()),j.integrationAngularNotesTop=i.observable(B.getAngularNotesTop()),j.infoMessage=i.observable(""),j.infoMessageVisible=i.observable(),j.showInfoMessage=function(t,n){j.infoMessage(t),j.infoMessageVisible(!1),e("#infoDialogId").dialog("open"),n&&e("#infoDialogId").dialog("option","title",n)},e("#infoDialogId").on("dialogopen",function(t,n){setTimeout(function(){j.infoMessageVisible(!0),e("#infoTextId").scrollTop(0)},200)});var Ge=e("#text1ViewDialogId");j.viewMessage1=i.observable(""),j.viewMessage1Visible=i.observable(),j.showText1ViewMessage=function(e,t){Ge.dialog("isOpen")&&Ge.dialog("close"),j.viewMessage1(e),j.viewMessage1Visible(!1),Ge.dialog("open"),t&&Ge.dialog("option","title",t)},Ge.on("dialogopen",function(t,n){setTimeout(function(){j.viewMessage1Visible(!0),e("#text1ViewId").scrollTop(0)},100)});var Qe=e("#text2ViewDialogId");j.viewMessage2=i.observable(""),j.viewMessage2Visible=i.observable(),j.showText2ViewMessage=function(e,t){Qe.dialog("isOpen")&&Qe.dialog("close"),j.viewMessage2(e),j.viewMessage2Visible(!1),Qe.dialog("open"),t&&Qe.dialog("option","title",t)},Qe.on("dialogopen",function(t,n){setTimeout(function(){j.viewMessage2Visible(!0),e("#text2ViewId").scrollTop(0)},100)});var et;j.getConfirmFlag=function(){return et},
j.setConfirmFlag=function(e){et=e},j.confirmMessage=i.observable(""),j.showConfirmMessage=function(t,n,i){E.initDialog(j.flowManager),j.confirmMessage(t),n&&ne.dialog("option","title",n),i&&(e(e("button",ne.parent())[1]).text(i.first),e(e("button",ne.parent())[2]).text(i.second)),ne.dialog("open")},j.isShowThumbnail=i.observable(),j.btnThumbnailShow=function(){j.isShowThumbnail(!0),e("#thumbnailDialogId").dialog("open"),j.repaintDiagram()},j.btnThumbnailHide=function(){j.isShowThumbnail(!1),j.repaintDiagram()},j.overlayText=i.observable("");var tt=e("#saveOverlayId");j.showOverlayMessage=function(e,t){var n=t||400;j.overlayText(e),tt.show(),setTimeout(function(){tt.fadeOut(n)},n+200)};var nt;j.getDraggedPaletteId=function(){return nt},j.setDraggedPaletteId=function(e){nt=e},j.onPaletteDragStart=function(e){nt=e.target.id,e.dataTransfer.setData("text",e.target.id)},j.onPaletteDragEnd=function(e){var t=X.getBoundingClientRect();e.clientX>t.left&&e.clientX<t.right&&e.clientY>t.top&&e.clientY<t.bottom||j.flowManager.getDnDHandler().resetDrag()},j.requestFocus=function(){},j.isControlPressed=function(){return oe},j.setControlPressed=function(e){oe=e},j.isEditControlPressed=function(){return se},j.setEditControlPressed=function(e){se=e},j.isShiftPressed=function(){return ae},j.setShiftPressed=function(e){ae=e},window.onresize=U,window.onscroll=function(){e("#thumbnailDialogId").dialog({position:{my:"right bottom",at:"right-17 bottom-4",of:window}}),e("#findDialogId").dialog({position:{my:"right top",at:"right-4 top-4",of:window}}),j.repaintDiagram()};var it=0,ot=e("#containerId");return j.repaintDiagram=function(){j.hideContainerBar(),j.hideSwitchBar(),j.flowManager.paintDiagram()},i.applyBindings(j),j.initData(),{initFlowDemo:function(){window.scrollTo(0,0),e(window).trigger("resize"),j.setProgressBarVisible(!1),j.showOverlayMessage("Connecting to server...",1e3),o.checkServerConnection(j.flowManager)}}});