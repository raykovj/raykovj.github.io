define(["modules/graph/graphConstants"],function(e){return{initActions:function(e){var t=e.getCanvas(),n=e.getFlowManager().getMouseInteractor(),o=e.getFlowManager().getDnDHandler(),d=e.getFlowManager();t.addEventListener("mousemove",function(e){n.onMouseMove(e)},!1),t.addEventListener("mousedown",function(e){n.onMousePress(e)},!1),t.addEventListener("mouseup",function(e){n.onMouseRelease(e)},!1),t.addEventListener("mouseout",function(e){n.onMouseExit(e)},!1),t.addEventListener("click",function(e){n.onMouseClick(e)},!1),t.addEventListener("dblclick",function(e){n.onMouseDoubleClick(e)},!1),t.addEventListener("dragstart",function(t){e.setDraggedPaletteId(void 0),t.dataTransfer.setData("text","anything"),o.dragStarted(t)},!1),t.addEventListener("dragover",function(t){t.preventDefault(),o.dragOver(t,e.getDraggedPaletteId())},!1),t.addEventListener("dragleave",function(e){o.dragLeave(e)},!1),t.addEventListener("dragend",function(e){o.dragEnd(e)},!1),t.addEventListener("drop",function(e){e.preventDefault(),o.drop(e)},!1),t.addEventListener("keydown",function(t){"ControlLeft"===t.code||"ControlRight"===t.code?e.setControlPressed(!0):"ShiftLeft"===t.code||"ShiftRight"===t.code?e.setShiftPressed(!0):"KeyZ"==t.code&&e.isControlPressed()&&!e.isShiftPressed()?d.getUndoManager().undo():"KeyY"==t.code&&e.isControlPressed()&&!e.isShiftPressed()||"KeyZ"==t.code&&e.isControlPressed()&&e.isShiftPressed()?d.getUndoManager().redo():"Delete"==t.code&&(e.clearAndHideEdit(),d.getFlowController().removeSelections(),d.getSelectionManager().clearSelections(),d.refreshDiagram())},!1),t.addEventListener("keyup",function(t){"ControlLeft"===t.code||"ControlRight"===t.code?e.setControlPressed(!1):"ShiftLeft"!==t.code&&"ShiftRight"!==t.code||e.setShiftPressed(!1)},!1),$("#editContentId").keydown(function(t){"Control"===t.key&&e.setEditControlPressed(!0)}),$("#editContentId").keyup(function(t){"Control"===t.key&&e.setEditControlPressed(!1)})}}});