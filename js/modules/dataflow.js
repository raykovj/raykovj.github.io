define(["jquery","jqueryui","jqueryuictxm","knockout","modules/server/ioHandler","modules/fs/directories","modules/html/toolbar","modules/settings/config","modules/actions/frameActions","modules/graph/graphConstants","modules/gallery/components","modules/gallery/iconOptionsPicker","modules/gallery/portIconPicker","modules/gallery/cardinalityPicker","modules/gallery/decisionEnds","modules/db/dbRecords","modules/flow/flowManager","modules/fs/fsBrowser","modules/diagram/mouseInteractor","modules/dialogs/newFlowDialog","modules/dialogs/newFolderDialog","modules/dialogs/openFlowDialog","modules/dialogs/createNodeDialog","modules/dialogs/nodePropsDialog","modules/dialogs/findDialog","modules/dialogs/linkPropsDialog","modules/dialogs/aboutDialog","modules/util/welcomeText","modules/dialogs/welcomeDialog","modules/dialogs/infoDialog","modules/dialogs/confirmDialog","modules/dialogs/thumbnailDialog","modules/settings/settingsDialog","modules/dialogs/text1ViewDialog","modules/dialogs/text2ViewDialog","modules/geometry/point","modules/util/utils","modules/draw/draw","modules/controller/flowCache","modules/exportLayout/demoFlow","modules/util/integrationText"],function(e,t,n,o,i,a,s,r,l,d,u,c,g,p,b,m,f,v,I,w,h,T,N,D,y,M,C,L,E,x,k,F,P,S,O,V,A,B,R,H,W){function _(e){e===d.flow().VERTICAL?(be.removeClass("block-extendV"),be.addClass("block-extendH"),me.removeClass("block-extendH"),me.addClass("block-extendV"),fe.removeClass("block-shrinkV"),fe.addClass("block-shrinkH"),ve.removeClass("block-shrinkH"),ve.addClass("block-shrinkV")):e===d.flow().HORIZONTAL&&(be.removeClass("block-extendH"),be.addClass("block-extendV"),me.removeClass("block-extendV"),me.addClass("block-extendH"),fe.removeClass("block-shrinkH"),fe.addClass("block-shrinkV"),ve.removeClass("block-shrinkV"),ve.addClass("block-shrinkH"))}function z(e){e===d.flow().VERTICAL?(he.removeClass("block-extendV"),he.addClass("block-extendH"),Te.removeClass("block-shrinkV"),Te.addClass("block-shrinkH")):e===d.flow().HORIZONTAL&&(he.removeClass("block-extendH"),he.addClass("block-extendV"),Te.removeClass("block-shrinkH"),Te.addClass("block-shrinkV"))}function K(e){if(q.selectedFileType()===d.fileTypes().ALL)return e;var t=[],n=q.selectedFileType().split(".").pop();return e.forEach(function(e){e.split(".").pop()===n&&t.push(e)}),t}function U(){return Be?Be.getName():"[none]"}function G(e){r.setFlowDirection(e),q.setFlowDirectionChange(),_(e),z(e),q.getFlowManager().hasDiagramOpen()&&q.flowManager.setDirty(!0),q.setConfirmFlag(d.bValue().FALSE),q.getFlowManager().setSettingsChanged(!0),setTimeout(function(){q.getFlowManager().refreshDiagramOnEdit()},200)}function Z(){var e=L.getTitle(),t=L.getWelcome(),n=L.getWelcomeTo(),o=L.getText();q.showWelcomeBox(e,t,n,o)}function j(){var t=e(window).height();e(window).scrollTop();at.height(t-it)}var q=this,X=document.getElementById("canvasId"),J=document.getElementById("canvasThId"),$=X.getContext("2d"),Y=document.getElementById("containerId"),Q=document.getElementById("topContainerId"),ee=(document.getElementById("containerId"),e("#topContainerId"),e("#openFlowDialogId")),te=e("#spinnerLevelsId"),ne=e("#spinnerLanesId"),oe=(e("#spinnerSpaceId"),e("#confirmDialogId")),ie=(e("#thumbnailDialogId"),"[select 'New' or 'Open' from menus]"),ae=!1,se=!1,re=!1;q.accHdrFlowTitle=o.observable(d.appTitles().FLOW_TITLE),q.accHdrSideTitle=o.observable(d.appTitles().SIDE_TITLE),q.accHdrMiscTitle=o.observable(d.appTitles().MISC_TITLE),q.accHdrPagesTitle=o.observable(d.appTitles().PAGES_TITLE),q.accHdrBpelTitle=o.observable(d.appTitles().BPEL_TITLE),q.accHdrK8sTitle=o.observable(d.appTitles().K8S_TITLE),q.getCanvas=function(){return X},q.getCanvasTh=function(){return J},q.getCanvasContext=function(){return $},q.getCanvasContainer=function(){return Y},q.getTopContainer=function(){return Q},q.flowManager=new f(q),q.interactor=q.flowManager.getMouseInteractor(),q.dndHandler=q.flowManager.getDnDHandler(),q.updateTrigger=o.observable(!1);var le=new v(q);q.getFlowManager=function(){return q.flowManager};var de=Date.now(),ue=!1;q.isConnectionOK=o.observable(ue),q.cnxResultOK=function(){ue=!0,q.showOverlayMessage("Connected",500),q.isConnectionOK(ue),setTimeout(function(){q.updateWindow()},200),ue&&q.flowManager.getInstallSettings(),Z()},q.cnxResultFAIL=function(e){Date.now()-de<3e3?(ue=!1,console.log("*** connection FAIL: "+e.readyState),setTimeout(function(){q.showOverlayMessage("No server connection",500)},200)):(ue=!0,q.showOverlayMessage("Connected",500)),q.isConnectionOK(ue),setTimeout(function(){console.clear(),q.updateWindow()},200),ue&&q.flowManager.getInstallSettings(),Z()},e(document).ready(function(){function t(t){return e("<img>",{style:"margin: 0 6px -2px -22px;",src:c.getIconURL(t.value)})}function n(t){return e("<img>",{style:"margin: 0 6px -2px 0;",src:c.getIconURL(t.value)})}function o(t){return e("<img>",{style:"margin: 0px 6px 2px 10px; ",src:g.getPortIconURL(t.value)})}function i(t){return e("<img>",{style:"margin: 0 6px -2px 6px; background-color: white; }",src:g.getPortIconURL(t.value)})}function a(t){return e("<img>",{style:"margin: 0 6px -2px -22px;",src:p.getCardinalityURL(t.value)})}function r(t){return e("<img>",{style:"margin: 0 6px -2px 0;",src:p.getCardinalityURL(t.value)})}$.canvas.width=0,$.canvas.height=0,w.initDialog(q.flowManager),h.initDialog(q.flowManager),T.initDialog(q.flowManager),P.initDialog(q.flowManager),S.initDialog(q.flowManager),O.initDialog(q.flowManager),N.initDialog(q.flowManager),D.initDialog(q.flowManager),y.initDialog(q.flowManager),M.initDialog(q.flowManager),C.initDialog(q.flowManager),x.initDialog(q.flowManager),k.initDialog(q.flowManager),F.initDialog(q.flowManager),E.initDialog(q.flowManager),s.initButtons(q),l.initActions(q),e("#canvasId").contextmenu(q.interactor.getContextMenu()),Q.addEventListener("mousemove",function(t){q.interactor.isOverCanvas(t)||(e("#canvasId").contextmenu("close"),q.flowManager.getFlowDiagram().setMousePoint(void 0))}),Q.addEventListener("mousedown",function(e){}),e("#paletteCtrId").show(),e("#paletteAccordionId").accordion({heightStyle:"fill",animate:{easing:"swing",duration:200},collapsible:!0,activate:function(e,t){q.updateWindow()}}),e("#accTableMiscsId").height(158),e("#accTableFlowId").height(210),e("#settingsTabId").tabs({}),e("#integrationTabId").tabs({}),e("#nodePropsTabId").tabs({activate:function(t,n){1===n.newTab.index()?e("#nodePropsTabId").css({overflow:"auto"}):e("#nodePropsTabId").css({overflow:"hidden"})}}),e("#infoTextId").attr("visibility","hidden"),te.spinner({step:1,min:d.canvasRange().MIN,max:d.canvasRange().MAX,numberFormat:"n"}),te.spinner("value",d.initial().LEVELS),te.spinner("enable"),ne.spinner({step:1,min:d.canvasRange().MIN,max:d.canvasRange().MAX,numberFormat:"n"}),ne.spinner("value",d.initial().LANES),ne.spinner("enable");var u=e("#progressBarId");u.progressbar({value:!1}),u.height(14),e.widget("nodeIcons.iconselectmenu",e.ui.selectmenu,{_renderButtonItem:function(t){var o=e("<div>",{text:c.getIconLabel(t.value)});return n(t).prependTo(o),o},_renderItem:function(n,o){var i=e("<li>"),a=e("<div>",{text:c.getIconLabel(o.value)});return t(o).prependTo(a),i.append(a).appendTo(n)},_renderMenu:function(t,n){var o=this,i=c.getOptionItems(n);e.each(i,function(e,n){o._renderItemData(t,n)})},refreshButtonItem:function(e,t){var n=c.getIndexValue(e,t);this.element[0].selectedIndex=n,this.refresh()}}),e("#nodeIconItemsId").iconselectmenu().iconselectmenu("menuWidget").addClass("ui-menu-icons customicons"),e("#settingIconItemsId").iconselectmenu().iconselectmenu("menuWidget").addClass("ui-menu-icons customicons"),e.widget("portImages.porticonmenu",e.ui.selectmenu,{_renderButtonItem:function(t){var n=e("<div>",{style:"padding-left: 16px; height: 16px; width: 100px; background-color: white"});return o(t).prependTo(n),n},_renderItem:function(t,n){var o=e("<li>"),a=e("<div>",{style:"height: 16px; width: 120px"});return i(n).prependTo(a),o.append(a).appendTo(t)},_renderMenu:function(t,n){var o=this,i=g.getPortOptionItems(n);e.each(i,function(e,n){o._renderItemData(t,n)})},refreshButtonItem:function(e){var t=g.getPortIndexValue(e);this.element[0].selectedIndex=t,this.refresh()}}),e("#selectPortIconsId").porticonmenu().porticonmenu("menuWidget").addClass("ui-menu-icons porticons"),e.widget("ports.portcardinalitymenu",e.ui.selectmenu,{_renderButtonItem:function(t){var n=e("<div>",{text:p.getCardinalityLabel(t.value)});return r(t).prependTo(n),n},_renderItem:function(t,n){var o=e("<li>"),i=e("<div>",{text:p.getCardinalityLabel(n.value)});return a(n).prependTo(i),o.append(i).appendTo(t)},_renderMenu:function(t,n){var o=this,i=p.getCardinalityItems(n);e.each(i,function(e,n){o._renderItemData(t,n)})},refreshButtonItem:function(e,t){var n=p.getCardinalityIndex(e,t);this.element[0].selectedIndex=n,this.refresh()}}),e("#selectPartitionId").selectmenu({select:function(e,t){if(e.currentTarget){var n=e.currentTarget.textContent;console.log("$$$ disk select: "+n),q.selectedPartition(n)}},change:function(e,t){var n=e.currentTarget.textContent;console.log("### disk change: "+n)},create:function(e,t){setTimeout(function(){q.flowManager.getDiskNames()},1e3)}}).addClass("settingsDiskMenu").css("fontSize","16px"),e("#selectFileTypeId").selectmenu({create:function(t,n){setTimeout(function(){q.selectedFileType(d.fileTypes().JSON),e("#selectFileTypeId").selectmenu("refresh")},1e3)},select:function(e,t){if(e.currentTarget){var n=e.currentTarget.textContent;q.selectedFileType(n),q.flowManager.getDirContent()}}}).addClass("settingsDiskMenu"),e.widget("demomenu.demofilesmenu",e.ui.selectmenu,{_renderButtonItem:function(t){return e("<div>",{text:t.label?t.label:q.flowManager.getDemoList()[0].label})}}),e("#selectFileId").demofilesmenu().demofilesmenu("menuWidget").addClass("ui-menu-icons demofiles")}),q.isAutoLayoutAllowed=o.observable(r.isAllowAuto()),q.forceTestAutoMode=function(e){r.setLayoutMode(d.layoutMode().AUTO),q.flowManager.getSelectionManager().clearSelections(),q.flowManager.resetScale(),q.runTestAutoMode()},q.resetTestAutoMode=function(){q.flowManager.clearDiagram(),r.setLayoutMode(d.layoutMode().MANUAL)},q.runTestAutoMode=function(){},q.nodeEmojiItems=o.pureComputed(function(){return c.getNodeIconOptions()}),q.portIcons=o.pureComputed(function(){return g.getPortIconOptions()}),q.cardinalityItems=o.pureComputed(function(){return p.getCardinalityList()}),q.enableShowCardinality=o.observable(!1),q.setEnableShowCardinality=function(e){q.enableShowCardinality(e)},q.enableShowDB=o.observable(!1),q.setEnableShowDB=function(e){q.enableShowDB(e)},q.demoFilesItems=o.pureComputed(function(){return q.flowManager.getDemoList()}),q.nodeActionsList=o.pureComputed(function(){return D.getActionsList()}),q.nodeOperationsList=o.pureComputed(function(){return D.getOperationsList()}),q.nodeServicesList=o.pureComputed(function(){return D.getServicesList()}),q.nodePublishList=o.pureComputed(function(){return D.getPublishList()}),q.nodeSubscribeList=o.pureComputed(function(){return D.getSubscribeList()}),q.onOpsActionChange=function(e){},q.isProgressBarVisible=o.observable(!1),q.isProgressBarVisible.extend({notify:"always"}),q.setProgressBarVisible=function(e){q.isProgressBarVisible(e)},setTimeout(function(){e("#paletteAccordionId").accordion("option","icons",{header:"ui-icon-triangle-1-e",activeHeader:"ui-icon-triangle-1-s"})},100),q.showPageMode=o.observable(r.hasPageMode()),q.isCanvasVisible=o.observable(!1),q.setCanvasVisible=function(e){q.isCanvasVisible(e)},q.scaleValue=o.observable(r.getScale());var ce=document.getElementById("scaleId");ce.oninput=function(){r.setScale(this.value/d.scale().FACTOR),q.scaleValue(r.getScale()),q.flowManager.clearClipboard(),q.flowManager.getFlowDiagram().clearCanvas(),q.flowManager.paintDiagram()},ce.onchange=function(){q.flowManager.refreshDiagramOnEdit()},q.editModeText=o.observable(r.isEditMode()?d.editModeText().EDIT:d.editModeText().VIEW),q.setEditModeText=function(e){e===d.editMode().EDIT_ALL?q.editModeText(d.editModeText().EDIT):q.editModeText(d.editModeText().VIEW)},q.setTooltipBox=function(e,t){e.length>0&&r.isEditMode()&&B.drawTooltip($,X.getBoundingClientRect(),t,e)},q.showTooltipBox=function(e){},q.getCurrentFileName=function(){var e=q.flowManager.getFileName(),t=e.indexOf(".json");return e.substring(0,t)};var ge,pe=document.getElementById("blockResizeId"),be=e("#extendBlockAcrossId"),me=e("#extendBlockAlongId"),fe=e("#shrinkBlockAcrossId"),ve=e("#shrinkBlockAlongId");q.showBlockResizeBar=function(e){var t=e.getExpandedShape(),n=r.getScale();pe.style.left=X.getBoundingClientRect().left+t.x*n+"px",pe.style.top=X.getBoundingClientRect().top+t.y*n-24+"px",be.attr("disabled",!r.isEditMode()||!e.canExtendAcross()),me.attr("disabled",!r.isEditMode()||!e.canExtendAlong()),fe.attr("disabled",!r.isEditMode()||!e.canShrinkAcross()),ve.attr("disabled",!r.isEditMode()||!e.canShrinkAlong()),pe.style.visibility="visible"},q.doResizeContainer=function(e){var t=q.getFlowManager().getSelectionManager().getSelections();t[0].getFlowType()===d.flowType().CONTAINER&&t[0].resizeOutline(e),pe.style.visibility="hidden",ge=!1},q.isBlockResizeBarVisible=function(){return ge},q.hideContainerBar=function(){pe.style.visibility="hidden"};var Ie,we=document.getElementById("switchResizeId"),he=e("#extendSwitchAcrossId"),Te=e("#shrinkSwitchAcrossId");q.showSwitchResizeBar=function(e){var t=e.getMenuBarPosition(),n=r.getScale();we.style.left=X.getBoundingClientRect().left+t.x*n+"px",we.style.top=X.getBoundingClientRect().top+t.y*n-24+"px",he.attr("disabled",!r.isEditMode()||!e.canExtendAcross()),Te.attr("disabled",!r.isEditMode()||!e.canShrinkAcross()),we.style.visibility="visible"},q.doResizeSwitch=function(e){var t=q.getFlowManager().getSelectionManager().getSelections();t[0].getFlowType()===d.flowType().SWITCH&&t[0].resizeOutline(e),we.style.visibility="hidden",Ie=!1},q.isSwitchResizeBarVisible=function(){return Ie},q.hideSwitchBar=function(){we.style.visibility="hidden"},q.showSearchList=o.observable(!1),q.showFindOptions=o.observable(!0),q.searchContentList=o.observableArray(),q.foundMatches=o.observable(),q.onFindTableClick=function(e){var t=e.target.innerText;y.selectedNewDisk(t)},q.onFindTableDblClick=function(e){q.onFindTableClick(e)},q.onPasteSearchText=function(e){y.selectedNewDisk(label)},q.currentPath=o.observable(),q.fsContentList=o.observableArray(),q.selectedPath=o.observable(),q.isOpenMode=o.observable(),q.isSaveMode=o.observable(),q.showPartitions=o.observable(!1),q.partitionsList=o.observableArray([""]),q.selectedPartition=o.observable(),q.filesTypes=o.observableArray([d.fileTypes().JSON,d.fileTypes().ALL]),q.selectedFileType=o.observable(d.fileTypes().JSON);q.callOpenFlowDialog=function(){setTimeout(function(){q.isConnectionOK()?ee.dialog({height:440}):ee.dialog({height:180}),q.flowManager.getRootDir(),ee.dialog("open")},200)},q.onDiskTableClick=function(e){var t=e.target.innerText;T.selectedNewDisk(t)},q.setFSDialogMode=function(e){le.setFSDialogMode(e)},q.getFSDialogMode=function(){return le.getFSDialogMode()},q.restoreWorkDir=function(){le.restoreWorkDir()},q.setWorkDir=function(e){le.setWorkDir(e)},q.getWorkDir=function(){return le.getWorkDir()},q.getSelectedFSDir=function(){return le.getSelectedFSDir()},q.getSelectedFSFile=function(){return le.getSelectedFSFile()},q.onDirTableClick=function(e){le.onDirTableClick(e)},q.deleteFSItem=function(){le.deleteFSItem()},q.onDirTableDblClick=function(e){le.onDirTableDblClick(e)},q.updateMainFSLocation=function(){le.updateMainFSLocation()},q.goOneDirBack=function(){le.goOneDirBack()},q.setDirsList=function(e,t){le.setDirsList(e,t)},q.setFolderContent=function(e,t){le.setFolderContent(e,t)},q.onFileTypeChange=function(e){le.onFileTypeChange(e)},q.showForegroundSelection=o.observable(!0),q.showBackgroundSelection=o.observable(!0),q.settingsSchemes=o.pureComputed(function(){return q.flowManager.getSettingsManager().getColorsSchemesList()});var Ne;q.setNewAction=function(e){Ne=e},q.isNewAction=function(){return Ne},q.filesList=o.observableArray();var De=[];q.setFilesList=function(t){if(De=t,q.filesList(t),q.filesList(K(t)),Ne)e("#newFlowDialogId").dialog("open");else;},q.selectedFile=o.observable(),q.getSelectedFile=function(){return q.isConnectionOK()?_selectedFile:q.selectedFile()},q.isInputInvalid=o.observable(!1),q.validateMessage=o.observable(""),q.newFSNameValue=o.observable(""),q.nameValueEmpty=o.observable(""),q.validateFSName=function(t,n){var o=q.newFSNameValue().trim(),i=n?a.getDirectoriesLabels():q.filesList();q.nameValueEmpty(0===o.length);var s=q.isInputInvalid(),r=A.containsFSName(i,o),l=A.isFSNameValid(q.newFSNameValue()),d=o.length>0&&(!l||r);q.isInputInvalid(d),s&&!d&&(e("#newFileNameId").blur(),e("#newFileNameId").focus()),e("#newFlowButtonOK").button("option","disabled",q.isInputInvalid()||q.nameValueEmpty()),e("#newFolderButtonOK").button("option","disabled",q.isInputInvalid()||q.nameValueEmpty()),l?r?q.validateMessage("Duplicate name"):q.validateMessage(""):q.validateMessage("Only alphanumeric characters, dots, dashes, and underscores"),t&&o.length>0&&l&&"Enter"===t.code&&(Ne?(w.createNewDiagram(q.flowManager),e("#newFlowDialogId").dialog("close")):(h.createNewFolder(q.flowManager),e("#newFolderDialogId").dialog("close")))},e("#newFlowDialogId").on("dialogopen",function(e,t){q.validateFSName()}),e("#newFlowDialogId").on("dialogclose",function(e,t){q.newFSNameValue("")}),q.saveAsInputInvalid=o.observable(!1),q.saveAsMessage=o.observable(""),q.saveAsFileNameValue=o.observable(""),q.saveAsNameEmpty=o.observable(""),q.validateSaveAsFileName=function(t){var n=q.saveAsFileNameValue().trim();q.saveAsNameEmpty(0===n.length);var o=q.saveAsInputInvalid(),i=n!==q.getCurrentFileName()&&A.containsFSName(q.filesList(),n),a=A.isFSNameValid(q.saveAsFileNameValue()),s=n.length>0&&(!a||i);q.saveAsInputInvalid(s),o&&!s&&(e("#saveAsFileNameId").blur(),e("#saveAsFileNameId").focus()),e("#saveAsButtonSave").button("option","disabled",q.saveAsInputInvalid()||q.saveAsNameEmpty()),a?i?q.saveAsMessage("Duplicate name"):q.saveAsMessage(""):q.saveAsMessage("Only alphanumeric characters, dots, dashes, and underscores"),n.length>0&&a&&t.code};var ye=o.observable();q.propsLinkSourceName=o.observable(),q.propsLinkSourceLabel=o.observable(),q.propsLinkTargetName=o.observable(),q.propsLinkTargetLabel=o.observable(),q.propsLinkLabel=o.observable(),q.getPropsLink=function(){return ye()},q.getPropsLinkLabelValue=function(){return q.propsLinkLabel()},q.showLinkProps=function(t){ye(t),q.propsLinkSourceName(ye().getLinkSourcePortName()),q.propsLinkSourceLabel(ye().getLinkSourcePortLabel()),q.propsLinkTargetName(ye().getLinkTargetPortName()),q.propsLinkTargetLabel(ye().getLinkTargetPortLabel()),q.propsLinkLabel(ye().getLinkLabel()),e("#linkPropsDialogId").dialog("open")},q.editPropsLinkLabel=function(e){q.propsLinkLabel(document.getElementById("propsLinkLabelId").value)},q.propsFgndVisible=o.observable(!0),q.setPropsFgndVisible=function(e){q.propsFgndVisible(e)},q.propsNodeInputs=o.observableArray();var Me,Ce;q.getPropsNodeInputsIdx=function(){return Me},q.getPropsNodeInputsValue=function(){return Ce},q.propsNodeOutputs=o.observableArray();var Le,Ee;q.getPropsNodeOutputsIdx=function(){return Le},q.getPropsNodeOutputsValue=function(){return Ee},q.propsNodeRefInputs=o.observableArray();var xe,ke;q.getPropsNodeRefInputsIdx=function(){return xe},q.getPropsNodeRefInputsValue=function(){return ke},q.propsNodeRefOutputs=o.observableArray();var Fe,Pe;q.getPropsNodeRefOutputsIdx=function(){return Fe},q.getPropsNodeRefOutputsValue=function(){return Pe},q.isCardinalitySelected=o.observable(!0);var Se=o.observable();q.getPropsNode=function(){return Se()},q.showNodeProps=function(t){Se(t),c.setNodeCategory(t.getNodeCategory()),q.propsNodeInputs(Se().getInputPortsProperties()),q.propsNodeOutputs(Se().getOutputPortsProperties()),q.propsNodeRefInputs(Se().getRefInPortsProperties()),q.propsNodeRefOutputs(Se().getRefOutPortsProperties()),q.dbNodeRecords(Se().getDBRecords()),e("#nodePropsDialogId").dialog("open")},q.editPropsNodeInputLabel=function(e){Me=e.target.parentNode.parentNode.rowIndex;var t=document.getElementById("nodeInputsTableId"),n=t.getElementsByTagName("tr");Ce=n[Me].cells[2].getElementsByTagName("input")[0].value},q.checkPortInputCardinality=function(e){D.editPortInputCardinality(e)},q.editPropsNodeOutputLabel=function(e){Le=e.target.parentNode.parentNode.rowIndex;var t=document.getElementById("nodeOutputsTableId"),n=t.getElementsByTagName("tr");Ee=n[Le].cells[2].getElementsByTagName("input")[0].value},q.checkPortOutputCardinality=function(e){D.editPortOutputCardinality(e)},q.editPropsNodeRefInputLabel=function(e){xe=e.target.parentNode.parentNode.rowIndex;var t=document.getElementById("nodeRefInputsTableId"),n=t.getElementsByTagName("tr");ke=n[xe].cells[2].getElementsByTagName("input")[0].value},q.checkPortRefInputCardinality=function(e){D.editPortRefInputCardinality(e)},q.editPropsNodeRefOutputLabel=function(e){Fe=e.target.parentNode.parentNode.rowIndex;var t=document.getElementById("nodeRefOutputsTableId"),n=t.getElementsByTagName("tr");Pe=n[Fe].cells[2].getElementsByTagName("input")[0].value},q.checkPortRefOutputCardinality=function(e){D.editPortRefOutputCardinality(e)},q.dbNodeRecords=o.observableArray();q.dbTableErrorMsg=o.observable(!1),q.editNodeTableKey=function(e){D.processTableClickKey(e)},q.editNodeTableField=function(e){D.processTableClickField(e)},q.editNodeTableType=function(e){D.processTableClickType(e)},q.editNodeTableLength=function(e){D.processTableClickLength(e)},q.isEditNameInvalid=o.observable(!1),q.editNameValue=o.observable(""),q.validateNameMessage=o.observable("");var Oe;q.setOldName=function(e){Oe=e},q.validateEditName=function(e){var t=q.editNameValue().trim();if(t.length>0){var n=A.getAllNames(q.flowManager.getNodeNamesMap()),o=A.isDuplicateName(Oe,t,n),i=A.isNewNodeNameValid(t),a=!o&&i;q.isEditNameInvalid(!a)}else q.isEditNameInvalid(!0);o?q.validateNameMessage("Duplicate name"):i?q.validateNameMessage(""):q.validateNameMessage("Name should contain only alphanumericals, dots, dashes and underscores")},q.isLinkLabelInvalid=o.observable(!1),q.validateLinkMessage=o.observable("");var Ve;q.setOldLinkLabel=function(e){Ve=e},q.validateLinkLabel=function(e){var t=q.propsLinkLabel().trim();if(t.length>0){var n=A.getAllLinkLabels(q.flowManager.getLinkLabelsMap()),o=A.isDuplicateLabel(Ve,t,n),i=t===Ve||A.isNewLinkLabelValid(t),a=!o&&i;q.isLinkLabelInvalid(!a)}else q.isLinkLabelInvalid(!1);o?q.validateLinkMessage("Duplicate label"):i?q.validateLinkMessage(""):q.validateLinkMessage("Label should contain only alphanumericals, dots, dashes, underscores and spaces")},q.pictureURLValue=o.observable(""),q.isPictureURLInvalid=o.observable(!1),q.validatePictureURL=function(e){q.isPictureURLInvalid(!1)};var Ae=d.decisionRun().NONE,Be=void 0;q.showNewFileName=o.observable(),q.showEditedInfo=o.observable(),q.showDecisionInfo=o.observable(),q.decisionInputPicture=o.observable(),q.decisionEndsPicture=o.observable(),q.isNodeNameInvalid=o.observable(!1),q.newNodeNameValue=o.observable(""),q.invalidNameMessage=o.observable(""),q.newDecisionInput=o.observable(b.getCurrentDecisionInput()),q.newDecisionEnds=o.observable(b.getCurrentDecisionEnds()),q.editedDecisionNodeName=o.observable("???"),q.setDecisionRun=function(e,t){if(Ae=t,t===d.decisionRun().CREATE){var n=R.getSelectedFlowType();q.showNewFileName(!0),q.showEditedInfo(!1),q.showDecisionInfo(n===d.flowType().DECISION)}else t===d.decisionRun().EDIT&&(Be=e,b.setCurrentInput(e.getInput()),b.setCurrentEnds(e.getEnds()),q.editedDecisionNodeName(e.getName()),q.newDecisionInput(b.getCurrentDecisionInput()),q.newDecisionEnds(b.getCurrentDecisionEnds()),q.decisionInputPicture(b.getCurrentInputPicture()),q.decisionEndsPicture(b.getCurrentEndsPicture()),q.showNewFileName(!1),q.showEditedInfo(!0),q.showDecisionInfo(!0))},q.getEditedDecisionNode=function(){return Be},q.getDecisionRun=function(){return Ae},q.validateNodeName=function(t){var n=q.newNodeNameValue().trim();R.getSelectedFlowType();if(n.length>0){var o=A.isNodeNameValid(n),i=A.getAllNames(q.flowManager.getNodeNamesMap()),a=A.isNodeNameDuplicate(n,i);if(q.isNodeNameInvalid(!o||a),o&&!a&&"Enter"===t.code)return N.proceed(q.flowManager),void e("#newNodeDialogId").dialog("close")}e("#newNodeButtonOK").button("option","disabled",q.isNodeNameInvalid()||0==n.length),o?a?q.invalidNameMessage("Duplicate name"):q.invalidNameMessage(""):q.invalidNameMessage("Only alphanumeric characters, dots, dashes, and underscores")},q.getDecisionIcon=function(){return q.updateTrigger(!q.updateTrigger()),b.getDecisionIcon()},q.resetDecisionIndices=function(){q.updateTrigger(!q.updateTrigger()),b.resetCurrentInputIndex(),b.resetCurrentEndsIndex(),q.decisionInputPicture(b.getCurrentInputPicture()),q.decisionEndsPicture(b.getCurrentEndsPicture()),q.newDecisionInput(b.getCurrentDecisionInput()),q.newDecisionEnds(b.getCurrentDecisionEnds())},q.moveDecisionInputNext=function(){q.updateTrigger(!q.updateTrigger()),b.moveInputNext(),q.newDecisionInput(b.getCurrentDecisionInput()),q.decisionInputPicture(b.getCurrentInputPicture()),q.decisionEndsPicture(b.getCurrentEndsPicture());var t=q.newNodeNameValue().trim();q.editedDecisionNodeName(U()),e("#newNodeButtonOK").button("option","disabled",q.getDecisionRun()!==d.decisionRun().EDIT&&(q.isNodeNameInvalid()||0==t.length))},q.moveDecisionInputPrev=function(){q.updateTrigger(!q.updateTrigger()),b.moveInputPrevious(),q.newDecisionInput(b.getCurrentDecisionInput()),q.decisionInputPicture(b.getCurrentInputPicture()),q.decisionEndsPicture(b.getCurrentEndsPicture());var t=q.newNodeNameValue().trim();q.editedDecisionNodeName(U()),e("#newNodeButtonOK").button("option","disabled",q.getDecisionRun()!==d.decisionRun().EDIT&&(q.isNodeNameInvalid()||0==t.length))},q.moveDecisionEndsNext=function(){q.updateTrigger(!q.updateTrigger()),b.moveEndsNext(),q.newDecisionEnds(b.getCurrentDecisionEnds()),q.decisionEndsPicture(b.getCurrentEndsPicture());var t=q.newNodeNameValue().trim();q.editedDecisionNodeName(U()),e("#newNodeButtonOK").button("option","disabled",q.getDecisionRun()!==d.decisionRun().EDIT&&(q.isNodeNameInvalid()||0==t.length))},q.moveDecisionEndsPrev=function(){q.updateTrigger(!q.updateTrigger()),b.moveEndsPrevious(),q.newDecisionEnds(b.getCurrentDecisionEnds()),q.decisionEndsPicture(b.getCurrentEndsPicture());var t=q.newNodeNameValue().trim();q.editedDecisionNodeName(U()),e("#newNodeButtonOK").button("option","disabled",q.getDecisionRun()!==d.decisionRun().EDIT&&(q.isNodeNameInvalid()||0==t.length))},q.btnFlowH2click=function(){q.changeFlowDirection(d.flow().VERTICAL)},q.btnFlowV2click=function(){q.changeFlowDirection(d.flow().HORIZONTAL)},q.changeFlowDirection=function(e){G(e)},q.isHorizontal=o.observable(!1),q.layoutModeText=o.observable(r.getLayoutModeText()),q.diagramModeText=o.observable(r.getDiagramModeText());var Re=(e("#newId"),e("#openId"),e("#importId")),He=e("#undoId"),We=e("#redoId"),_e=e("#findId"),ze=e("#refreshId"),Ke=e("#clearId"),Ue=e("#leftId"),Ge=e("#rightId"),Ze=e("#deleteId"),je=e("#copyId"),qe=e("#pasteId"),Xe=e("#saveId"),Je=e("#saveAsId"),$e=e("#btnFlowVId");e("#btnThumbnailId");q.updateWindow=function(t){q.updateTrigger(!q.updateTrigger()),q.isHorizontal(r.getFlowDirection()===d.flow().HORIZONTAL),q.layoutModeText(r.getLayoutModeText()),q.diagramModeText(r.getDiagramModeText());var n=!r.isEditMode();s.updateMenus(q),Re.attr("disabled",!q.isConnectionOK()),He.attr("disabled",n||!q.flowManager.canUndo()).attr("title",q.flowManager.getUndoName()),We.attr("disabled",n||!q.flowManager.canRedo()).attr("title",q.flowManager.getRedoName()),Ze.attr("disabled",n||!q.flowManager.getSelectionManager().hasSelections()),je.attr("disabled",n||!q.flowManager.canCopy()),qe.attr("disabled",n||!q.flowManager.readyToPaste()),Xe.attr("disabled",n||!q.isConnectionOK()||!q.flowManager.isDirty()),Je.attr("disabled",n||!q.isConnectionOK()||q.flowManager.getModelHandler().isDiagramEmpty()),ze.attr("disabled",!q.isCanvasVisible()),_e.attr("disabled",!q.isCanvasVisible()),Ke.attr("disabled",n||!q.isCanvasVisible()),Ue.attr("disabled",!q.flowManager.hasPreviousDiagram()),Ge.attr("disabled",!q.flowManager.hasNextDiagram()),$e.attr("disabled",r.getAppMode()!==d.appMode().FLOW_MODE),e("#btnFlowHId").attr("disabled",n),e("#btnFlowVId").attr("disabled",n),"visible"!==document.getElementById("blockResizeId").style.visibility||ge?ge&&(document.getElementById("blockResizeId").style.visibility="hidden",ge=!1):ge=!0,"visible"!==document.getElementById("switchResizeId").style.visibility||Ie?Ie&&(document.getElementById("switchResizeId").style.visibility="hidden",Ie=!1):Ie=!0,q.flowManager.isInitialResizeMode()&&q.flowManager.getModelHandler().isDiagramEmpty()?(te.spinner("enable"),ne.spinner("enable")):(te.spinner("disable"),ne.spinner("disable"))};var Ye=!1;q.hasFlowDirectionChange=function(){return Ye},q.setFlowDirectionChange=function(){Ye=!0},q.resetFlowDirectionChange=function(){Ye=!1},q.initData=function(){q.updateWindow()},q.galleryFlowNodes=o.pureComputed(function(){return q.updateTrigger(),r.getFlowDirection()===d.flow().HORIZONTAL?u.getFlowNodesH():u.getFlowNodesV()}),q.galleryMiscNodes=o.pureComputed(function(){return q.updateTrigger(),r.getFlowDirection()===d.flow().HORIZONTAL?u.getMiscNodesH():u.getMiscNodesV()}),q.pageNodes=o.pureComputed(function(){q.updateTrigger();for(var e=[],t=r.getFlowDirection()===d.flow().HORIZONTAL?u.getHPageItems():u.getVPageItems(),n=0;n<t.length;n++)e.push(t[n]);return e}),q.diagramDisplayName=o.observable(ie),q.setDiagramDisplayName=function(e){e&&e.length>0?q.diagramDisplayName(e):q.diagramDisplayName(ie)},q.aboutTitle=o.observable(""),q.aboutVersion=o.observable(""),q.aboutText=o.observable(""),q.aboutSources=o.observable(""),q.aboutCopyright=o.observable(""),q.showAboutBox=function(t,n,o,i,a){q.aboutTitle(t),q.aboutVersion(n),q.aboutText(o),q.aboutSources(i),q.aboutCopyright(a),e("#aboutDialogId").dialog("open")},q.welcomeTitle=o.observable(""),q.welcomeGreeting=o.observable(""),q.welcomeTo=o.observable(""),q.welcomeTip=o.observable(""),q.showWelcomeBox=function(t,n,o,i){q.welcomeTitle(t),q.welcomeGreeting(n),q.welcomeTo(o),q.welcomeTip(i),e("#welcomeDialogId").dialog("open")},q.integrationTitle=o.observable(W.getTopTitle()),q.integrationTopNotes=o.observable(W.getTopNotes()),q.integrationReactTitle=o.observable(W.getReactTitle()),q.integrationReactNotesTop=o.observable(W.getReactNotesTop()),q.integrationReactNotesBottom=o.observable(W.getReactNotesBottom()),q.integrationAngularTitle=o.observable(W.getAngularTitle()),q.integrationAngularNotesTop=o.observable(W.getAngularNotesTop()),q.infoMessage=o.observable(""),q.infoMessageVisible=o.observable(),q.showInfoMessage=function(t,n){q.infoMessage(t),q.infoMessageVisible(!1),e("#infoDialogId").dialog("open"),n&&e("#infoDialogId").dialog("option","title",n)},e("#infoDialogId").on("dialogopen",function(t,n){setTimeout(function(){q.infoMessageVisible(!0),e("#infoTextId").scrollTop(0)},200)});var Qe=e("#text1ViewDialogId");q.viewMessage1=o.observable(""),q.viewMessage1Visible=o.observable(),q.showText1ViewMessage=function(e,t){Qe.dialog("isOpen")&&Qe.dialog("close"),q.viewMessage1(e),q.viewMessage1Visible(!1),Qe.dialog("open"),t&&Qe.dialog("option","title",t)},Qe.on("dialogopen",function(t,n){setTimeout(function(){q.viewMessage1Visible(!0),e("#text1ViewId").scrollTop(0)},100)});var et=e("#text2ViewDialogId");q.viewMessage2=o.observable(""),q.viewMessage2Visible=o.observable(),q.showText2ViewMessage=function(e,t){et.dialog("isOpen")&&et.dialog("close"),q.viewMessage2(e),q.viewMessage2Visible(!1),et.dialog("open"),t&&et.dialog("option","title",t)},et.on("dialogopen",function(t,n){setTimeout(function(){q.viewMessage2Visible(!0),e("#text2ViewId").scrollTop(0)},100)});var tt;q.getConfirmFlag=function(){return tt},q.setConfirmFlag=function(e){tt=e},q.confirmMessage=o.observable(""),q.showConfirmMessage=function(t,n,o){
k.initDialog(q.flowManager),q.confirmMessage(t),n&&oe.dialog("option","title",n),o&&(e(e("button",oe.parent())[1]).text(o.first),e(e("button",oe.parent())[2]).text(o.second)),oe.dialog("open")},q.isShowThumbnail=o.observable(),q.btnThumbnailShow=function(){q.isShowThumbnail(!0),e("#thumbnailDialogId").dialog("open"),q.repaintDiagram()},q.btnThumbnailHide=function(){q.isShowThumbnail(!1),q.repaintDiagram()},q.overlayText=o.observable("");var nt=e("#saveOverlayId");q.showOverlayMessage=function(e,t){var n=t||400;q.overlayText(e),nt.show(),setTimeout(function(){nt.fadeOut(n)},n+200)};var ot;q.getDraggedPaletteId=function(){return ot},q.setDraggedPaletteId=function(e){ot=e},q.onPaletteDragStart=function(e){ot=e.target.id,e.dataTransfer.setData("text",e.target.id)},q.onPaletteDragEnd=function(e){var t=X.getBoundingClientRect();e.clientX>t.left&&e.clientX<t.right&&e.clientY>t.top&&e.clientY<t.bottom||q.flowManager.getDnDHandler().resetDrag()},q.requestFocus=function(){},q.isControlPressed=function(){return ae},q.setControlPressed=function(e){ae=e},q.isEditControlPressed=function(){return re},q.setEditControlPressed=function(e){re=e},q.isShiftPressed=function(){return se},q.setShiftPressed=function(e){se=e},window.onresize=function(){e("#settingsDialogId").dialog({position:{my:"right top+10",at:"right top",of:"#topContainerId"}}),e("#nodePropsDialogId").dialog({position:{my:"right top+10",at:"right top",of:"#topContainerId"}}),e("#linkPropsDialogId").dialog({position:{my:"right top+10",at:"right top",of:"#topContainerId"}}),e("#thumbnailDialogId").dialog({position:{my:"right bottom",at:"right-8 bottom-6",of:window}}),e("#findDialogId").dialog({position:{my:"right top",at:"right-4 top-4",of:window}}),j();var t=document.getElementById("diagramNameId").offsetLeft,n=document.getElementById("diagramNameId").offsetTop;t>300?document.getElementById("navbarGapId").style.marginTop="20px":t<20&&n<60?document.getElementById("navbarGapId").style.marginTop="52px":t<2&&t<300&&n<60?document.getElementById("navbarGapId").style.marginTop="52px":n>60&&(document.getElementById("navbarGapId").style.marginTop="84px"),q.repaintDiagram()},window.onscroll=function(){document.getElementById("navbarId").style.top="0",e("#thumbnailDialogId").dialog({position:{my:"right bottom",at:"right-8 bottom-6",of:window}}),e("#findDialogId").dialog({position:{my:"right top",at:"right-4 top-4",of:window}}),q.repaintDiagram()};var it=0,at=e("#containerId");return q.repaintDiagram=function(){q.hideContainerBar(),q.hideSwitchBar(),q.flowManager.paintDiagram()},o.applyBindings(q),q.initData(),{initFlowDemo:function(){window.scrollTo(0,0),e(window).trigger("resize"),q.setProgressBarVisible(!1),q.showOverlayMessage("Connecting to server...",1e3),i.checkServerConnection(q.flowManager)}}});