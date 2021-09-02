define('modules/diagram/flowText',
    ['modules/graph/graphNode',
        'modules/diagram/flowNode',
        'modules/draw/draw',
        'modules/draw/drawUtils',
        'modules/geometry/rectangle',
        'modules/geometry/dimension',
        'modules/graph/graphConstants',
        'modules/diagram/diagramUtils',
        'modules/flow/flowUtils',
        'modules/html/iconLoader',
        'modules/settings/config',
        'modules/graph/modelUtils',
        'modules/core/jsUtils'],
    function(GraphNode,
             FlowNode,
             draw,
             drawUtils,
             Rectangle,
             Dimension,
             constants,
             diagramUtils,
             flowUtils,
             loader,
             config,
             modelUtils,
             jsUtils) {
        function FlowText(name, flowManager) {
            FlowNode.call(this, name, constants.flowType().TEXT, flowManager);

            var self = this,
                _flowManager = flowManager;

            //var _input = input ? input : constants.decisionInputs().BACK;
            var _input = constants.nodeSide().BACK,
                _output = constants.nodeSide().FRONT;
            self.getInput = function() { return _input; };
            self.getOutput = function() { return _output; };

            var _ARC = 4,
                _SHADE = constants.nodeSurface().SHADE,
                _FRAME = constants.nodeSurface().FRAME;

            var nColor = constants.colors().NODE_D,
                hltColor = constants.colors().NODE_HLT_D,
                selColor = constants.colors().NODE_SEL_D,
                tooltip,
                nameTooltip,
                _drawState = constants.drawState().NONE;

            var _myBgnColor = config.getTextBgnColor(),
                _useMyBgnColor,
                _myDefBgnColor = config.getTextBgnDefColor(),
                _myFgnColor = config.getTextFgnColor(),
                _useMyFgnColor,
                _myDefFgnColor = config.getTextFgnDefColor();
            ////
            self.setBgnColor = function(color) {
                _myBgnColor = color;
                _useMyBgnColor = true;
            };
            self.getBgnColor = function() { return _myBgnColor; };
            self.resetBgnColor = function() {
                _myBgnColor = _myDefBgnColor;
                _useMyBgnColor = true;
            };
            self.getDefBgnColor = function() { return _myDefBgnColor; };
            ////
            self.setFgnColor = function(color) {
                _myFgnColor = color;
                _useMyFgnColor = true;
            };
            self.getFgnColor = function() { return _myFgnColor; };
            self.resetFgnColor = function() {
                self.setFgnColor(constants.colors().NODE_FORCOLOR_DRK);
            };
            self.getDefFgnColor = function() { return _myDefFgnColor; };


            self.initNode = function() {}; // hide parent
            self.initFlowText = function() {
                _myDefBgnColor = _myBgnColor;
                self.setRectSize(constants.nodeSize().WIDTH, constants.nodeSize().HEIGHT);
                if (config.hasShowRefHandles()) {
                    self.createRefInPort(constants.portNames().REF_IN_PORT_LEFT_NAME, constants.nodeSide().LEFT);
                    self.createRefInPort(constants.portNames().REF_IN_PORT_RIGHT_NAME, constants.nodeSide().RIGHT);
                    self.createRefOutPort(constants.portNames().REF_OUT_PORT_LEFT_NAME, constants.nodeSide().LEFT);
                    self.createRefOutPort(constants.portNames().REF_OUT_PORT_RIGHT_NAME, constants.nodeSide().RIGHT);
                }
            };

            //////

            self.getTextDefaults = function() {
                return {
                    maxWidth: constants.contentTextSize().WIDTH,
                    maxHeight: constants.contentTextSize().HEIGHT,
                    maxLines: constants.contentTextSize().MAX_LINES,
                    extentWidth: constants.contentViewExt().WIDTH,
                    extentHeight: constants.contentViewExt().HEIGHT
                }
            };

            //////

            // initial size, set on parsing
            //self.setTerminatorInitialSize = function(w, h) {
            //    self.setSize(
            //        w ? w : config.getGlobalTerminatorWidth(),
            //        h ? h : config.getGlobalTerminatorHeight());
            //    if (self.getName() === "D1") {
            //        //console.log("++ 1 "+self.getName()+": "+w+", "+h+", text: "+box.width+", "+box.height+", cnt size: "+cntSize.width+", "+cntSize.height);
            //    }
            //
            //    modelUtils.adjustSize(self);
            //    if (self.getName() === "D1") {
            //        //console.log("++ 2 "+self.getName()+": "+self.width+", "+self.height+", text: "+box.width+", "+box.height+", cnt size: "+cntSize.width+", "+cntSize.height);
            //    }
            //};

            //self.getEffectiveWidth = function(w, h) {
            //    return w;
            //    //return config.getFlowDirection() === constants.flow().VERTICAL ? w : h;
            //};

            //self.getEffectiveHeight = function(w, h) {
            //    return h;
            //    //return config.getFlowDirection() === constants.flow().VERTICAL ? h : w;
            //};

            //self.setResizeW = function(d) {
                //var eWidth = self.getEffectiveWidth(config.getGlobalTerminatorWidth(), config.getGlobalTerminatorHeight()),
                //    diffW = self.width - eWidth;
                //if (d < 0 && diffW/2 < Math.abs(d)) {
                //    //_resizeW = 0;
                //} else {
                //    self.resizeW += d;
                //    self.resizeW = self.resizeW > 0 ? self.resizeW : 0;
                //}
            //};

            //self.setResizeDeltaW = function(d) {
                //var eWidth = self.getEffectiveWidth(config.getGlobalTerminatorWidth(), config.getGlobalTerminatorHeight()),
                //    diffW = self.width - eWidth;
                //if (d < 0 && diffW/2 < Math.abs(d)) {
                //    //self.resizeW = 0;
                //} else {
                //    self.resizeDeltaW = d;
                //}
            //};

            //self.setResizeH = function(d) {
                //var eHeight = self.getEffectiveHeight(config.getGlobalTerminatorWidth(), config.getGlobalTerminatorHeight()),
                //    diffH = self.height - eHeight;
                //if (d < 0 && diffH/2 < Math.abs(d)) {
                //    //_resizeH = 0;
                //} else {
                //    self.resizeH += d;
                //    self.resizeH = self.resizeH > 0 ? self.resizeH : 0;
                //}
            //};

            //self.setResizeDeltaH = function(d) {
                ////console.log("--- setResizeH: "+d+", H = "+self.height);
                //var eHeight = self.getEffectiveHeight(config.getGlobalTerminatorWidth(), config.getGlobalTerminatorHeight()),
                //    diffH = self.height - eHeight;
                //if (d < 0 && diffH/2 < Math.abs(d)) {
                //    //self.resizeH = 0;
                //} else {
                //    self.resizeDeltaH = d;
                //}
            //};

            //self.setResize = function(rW, rH) {
                ////console.log("+++ setResize: "+self.resizeW+", "+self.resizeH+", "+rW+", "+rH+", "+self.width+", "+self.height);
                //self.setResizeW(rW);
                //self.setResizeH(rH);
                //var eWidth = self.getEffectiveWidth(config.getGlobalTerminatorWidth(), config.getGlobalTerminatorHeight()),
                //    eHeight = self.getEffectiveHeight(config.getGlobalTerminatorWidth(), config.getGlobalTerminatorHeight()),
                //    ww = self.width + 2*rW > eWidth ? self.width + 2*rW : eWidth,
                //    hh = self.height + 2*rH > eHeight ? self.height + 2*rH : eHeight;
                //self.setSize(ww, hh);
                ////console.log("=== setResize: "+self.resizeW+", "+self.resizeH+", "+rW+", "+rH+", "+self.width+", "+self.height);
            //};

            //self.resetResize = function() {
            //    self.resizeW = 0;
            //    self.resizeH = 0;
            //    self.setSize(
            //        self.getEffectiveWidth(config.getGlobalTerminatorWidth(), config.getGlobalTerminatorHeight()),
            //        self.getEffectiveHeight(config.getGlobalTerminatorWidth(), config.getGlobalTerminatorHeight()));
            //};

            self.getNodeObject = function() {
                var node = self.getNodeObjectToSave();

                node.width = self.width;
                node.height = self.height;

                return node;
            };

            self.getNodeObjectToSave = function() {
                var node = {};
                node.id = constants.elementType().NODE;
                node.name = self.getName();
                node.hideName = self.isHideName();
                node.type = self.getFlowType();
                node.levelNum = self.getLevelNumber();
                node.laneNum = self.getLaneNumber();
                node.resizeW = self.getResizeW();
                node.resizeH = self.getResizeH();

                node.containerName = self.getContainerName();

                if (self.getContentText().length > 0) { node.contentText = self.getContentText(); }

                if (_useMyBgnColor && _myBgnColor.localeCompare(_myDefBgnColor) != 0 ||
                    _useMyFgnColor && _myFgnColor.localeCompare(_myDefFgnColor) != 0) {
                    node.bgnColor = _myBgnColor;
                    node.fgnColor = _myFgnColor;
                }

                return node;
            };

            self.allowsResize = function() { return false; };

            //self.getCellContainerOffsets = function() {
            //    var container = self.getContainerReference(),
            //        allNodes = _flowManager.getModelHandler().getFlowNodes(),
            //        levelsNum = flowUtils.getNestedContainersNumberAtNodeLevel(self, allNodes),
            //        lanesNum = flowUtils.getNestedContainersNumberAtNodeLane(self, allNodes),
            //        offsets = {
            //            front: levelsNum * constants.cellGap().HEIGHT,
            //            back: levelsNum * constants.cellGap().HEIGHT,
            //            left: lanesNum * constants.cellGap().WIDTH,
            //            right: lanesNum  * constants.cellGap().WIDTH
            //        };
            //    if (container) {
            //        if (config.getFlowDirection() === constants.flow().VERTICAL) {
            //            // VERTICAL
            //            if (self.getLevelNumber() === container.getEndLevelNumber()) {
            //                offsets.front = container.getOutlineSteps().front + constants.cellGap().HEIGHT;
            //            }
            //            if (self.getLaneNumber() === container.getStartLaneNumber()) {
            //                offsets.right = container.getOutlineSteps().right; // + constants.cellGap().WIDTH;
            //            }
            //            if (self.getLaneNumber() === container.getEndLaneNumber()) {
            //                offsets.left = container.getOutlineSteps().left; // + constants.cellGap().WIDTH;
            //            }
            //        } else {
            //            // HORIZONTAL
            //            if (self.getLevelNumber() === container.getEndLevelNumber()) {
            //                offsets.front = container.getOutlineSteps().front; // + constants.cellGap().WIDTH;
            //            }
            //            if (self.getLaneNumber() === container.getStartLaneNumber()) {
            //                offsets.left = container.getOutlineSteps().left; // + constants.cellGap().HEIGHT;
            //            }
            //            if (self.getLaneNumber() === container.getEndLaneNumber()) {
            //                offsets.right = container.getOutlineSteps().right; // + constants.cellGap().HEIGHT;
            //            }
            //        }
            //    }
            //    return offsets;
            //};

            self.getNodeBounds = function() {
                var r = self.clone();
                return new Rectangle(r.x-_SHADE, r.y-_SHADE, r.width+2*_SHADE, r.height+2*_SHADE);
            };

            self.getInnerShape = function() {
                var r = self.clone();
                return new Rectangle(r.x+_FRAME, r.y+_FRAME, r.width-2*_FRAME, r.height-2*_FRAME);
            };

            self.containsPoint = function(point) {
                return self.getNodeBounds().hasPointInside(point) && self.isVisible();
            };

            self.getSelectedAtPoint = function(point) {
                // TODO: ports may not need to be selectable
                if (self.containsPoint(point)) {
                    return this;
                }
                return undefined;
            };

            self.setHighlightedAtPoint = function(point) {
                //console.log("setHighlightedAtPoint - "+self.showBounds()+", point - "+point.showXY());
                var b = self.containsPoint(point);
                //self.showMarkupPorts(b, point);

                if (config.hasShowRefHandles()) {
                    self.showRefPorts(b, point);
                    self.locateRefPorts();
                }
                if (!b) {
                    return false;
                }

                //self.locateMarkupPorts(point);

                var port, i, found = false;
                var allPorts = self.getConnectionPorts();
                for (i = 0; i < allPorts.length; i++) {
                    port = allPorts[i];
                    if (port.isVisible() && port.containsPoint(point)) {
                        port.setHighlighted(true);
                        tooltip = port.getTooltip();
                        found = true;
                    } else {
                        port.setHighlighted(false);
                    }
                }
                //allPorts = self.getMarkupPorts();
                //for (i = 0; i < allPorts.length; i++) {
                //    port = allPorts[i];
                //    if (port.isVisible() && port.hasPoint(point)) {
                //        port.setHighlighted(true);
                //        tooltip = port.getTooltip();
                //        found = true;
                //    } else {
                //        port.setHighlighted(false);
                //    }
                //}
                allPorts = self.getRefPorts();
                for (i = 0; i < allPorts.length; i++) {
                    port = allPorts[i];
                    if (port.isVisible() && port.hasPoint(point)) {
                        port.setHighlighted(true);
                        tooltip = port.getTooltip();
                        found = true;
                    } else {
                        port.setHighlighted(false);
                    }
                }
                if (self.containsPoint(point)) {
                    self.setHighlighted(!found);
                    if (!found) {
                        tooltip = config.hasShowTooltip() ? self.getName() : undefined;
                        if (self.nameRect.hasPointInside(point)) {
                            nameTooltip = self.getName();
                        } else {
                            nameTooltip = undefined;
                        }
                        found = true;
                    }
                } else {
                    self.setHighlighted(false);
                    tooltip = undefined;
                    nameTooltip = undefined;
                }
                return found;
            };

            self.getTooltip = function() { return tooltip; };

            self.getNameTooltip = function() { return nameTooltip; };

            self.getCnxRestrictions = function() {
                var cnxSides = {};
                cnxSides.front = false;
                cnxSides.back = false;
                cnxSides.left = true;
                cnxSides.right = true;
                if (!self.getContainerReference()) {
                    return cnxSides;
                } else {
                    var container = self.getContainerReference();
                    if (self.getLevelNumber() === container.getEndLevelNumber()) { cnxSides.front = false; }
                    if (self.getLevelNumber() === container.getStartLevelNumber()) { cnxSides.back = false; }
                    if (self.getLaneNumber() === container.getStartLaneNumber()) { cnxSides.right = false; }
                    if (self.getLaneNumber() === container.getEndLaneNumber()) { cnxSides.left = false; }
                    return cnxSides;
                }
            };

            function isMarkInVisible() { return false; }

            function isMarkOutVisible() { return false; }

            self.locateMarkupPorts = function(pnt) {};

            function getMarkupInPortForPoint(pnt) {
                    return undefined;
            }

            function getMarkupOutPortForPoint(pnt) {
                    return undefined;
            }

            self.showMarkupPorts = function(b, pnt) {};

            //self.locateRefPorts = function() {};

            //self.showRefPorts = function(b, pnt) {};

            function setPortsVisible(ports, b) {
                for (var i = 0; i < ports.length; i++) {
                    ports[i].setVisible(b);
                }
            }

            self.hideRefPorts = function() {
                var refPorts = self.getRefPorts();
                for (var i = 0; i < refPorts.length; i++) {
                    refPorts[i].setVisible(false);
                }
            };

            self.hasSelections = function() {
                var i, inPorts = self.getInputPorts(), outPorts = self.getOutputPorts();
                for (i = 0; i < inPorts.length; i++) {
                    if (inPorts[i].isSelected()) {
                        return true;
                    }
                }
                for (i = 0; i < outPorts.length; i++) {
                    if (outPorts[i].isSelected()) {
                        return true;
                    }
                }
                return false;
            };

            self.isMarkupPortValid = function(port) {
                // subclass needs parent call
                return false;
            };


            self.setDNDAcceptingPorts = function(originPort, dragPoint) {
                var originDirection = originPort.getDirection(),
                    acceptingPorts = [];
                if (originPort.getType() === constants.portType().LINK_CNX ||
                    originPort.getType() === constants.portType().MARKUP ) {
                    if (originDirection === constants.portDirection().OUT ||
                        originDirection === constants.portDirection().MARK_OUT ||
                        originDirection === constants.portDirection().MARK_OUT_AUX) {
                        var inPort = getMarkupInPortForPoint(dragPoint);
                        if (inPort) {
                            acceptingPorts.push(inPort);
                        }
                    } else if (originDirection == constants.portDirection().IN ||
                        originDirection == constants.portDirection().MARK_IN ||
                        originDirection === constants.portDirection().MARK_IN_AUX) {
                        var outPort = getMarkupOutPortForPoint(dragPoint);
                        if (outPort) {
                            acceptingPorts.push(outPort);
                        }
                    }
                }
                //else if (originPort.getType() === constants.portType().LINK_REF ||
                //    originPort.getType() === constants.portType().REF ) {
                //    if (originDirection === constants.portDirection().REF_OUT ||
                //        originDirection === constants.portDirection().OUT  ) {
                //        //if (originDirection === constants.portDirection().OUT ) {
                //        var refInPort = getRefInPortForPoint(dragPoint);
                //        if (refInPort) {
                //            acceptingPorts.push(refInPort);
                //        }
                //    } else if (originDirection == constants.portDirection().REF_IN ||
                //        originDirection == constants.portDirection().IN) {
                //        //} else if (originDirection == constants.portDirection().IN) {
                //        var refOutPort = getRefOutPortForPoint(dragPoint);
                //        if (refOutPort) {
                //            acceptingPorts.push(refOutPort);
                //        }
                //    }
                //}
                for (var i = 0; i < acceptingPorts.length; i++) {
                    var port = acceptingPorts[i];
                    port.setDNDMode(constants.dndMode().DESTINATION);
                    port.setVisible(true);
                }
            };

            self.resetDNDFlags = function() {
                var ports = self.getAllPorts();
                for (var i = 0; i < ports.length; i++) {
                    ports[i].setDNDMode(constants.dndMode().NONE);
                }
            };

            self.getAcceptingPortForPoint = function(originPort, dragPoint) {
                var originDirection = originPort.getDirection(),
                    acceptingPorts = [];
                self.locateMarkupPorts(dragPoint);
                if (originDirection === constants.portDirection().OUT ||
                    originDirection === constants.portDirection().MARK_OUT ||
                    originDirection === constants.portDirection().MARK_OUT_AUX ||
                    originDirection === constants.portDirection().REF_OUT) {
                    var inPort = getMarkupInPortForPoint(dragPoint);
                    if (inPort) {
                        acceptingPorts.push(inPort);
                    }
                    //
                    //if (originPort.getType() == constants.portType().LINK_REF || originPort.getType() == constants.portType().REF ) {
                    //    var refInPort = getRefInPortForPoint(dragPoint);
                    //    if (refInPort) {
                    //        acceptingPorts.push(refInPort);
                    //    }
                    //}
                } else if (originDirection === constants.portDirection().IN ||
                    originDirection === constants.portDirection().MARK_IN ||
                    originDirection === constants.portDirection().MARK_IN_AUX ||
                    originDirection === constants.portDirection().REF_IN) {
                    var outPort = getMarkupOutPortForPoint(dragPoint);
                    if (outPort) {
                        acceptingPorts.push(outPort);
                    }
                    //
                    //if (originPort.getType() == constants.portType().LINK_REF || originPort.getType() == constants.portType().REF ) {
                    //    var refOutPort = getRefOutPortForPoint(dragPoint);
                    //    if (refOutPort) {
                    //        acceptingPorts.push(refOutPort);
                    //    }
                    //}
                }
                for (var i = 0; i < acceptingPorts.length; i++) {
                    var port = acceptingPorts[i];
                    if (port.getDNDShape().hasPointInside(dragPoint)) {
                        return port;
                    }
                }
                return undefined;
            };

            self.setDrawState = function(state) {
                _drawState = state;
                if (state === constants.drawState().DRAGGED) {
                    setLinksDrawMode(constants.drawMode().LINE);
                } else if (state === constants.drawState().IN_LAYOUT ||
                    state === constants.drawState().RESIZED) {
                    setLinksDrawMode(constants.drawMode().SEGMENTS);
                } else {  // DrawState.FOOTPRINT
                    setLinksDrawMode(constants.drawMode().NO_DRAW);
                }
            };

            self.getDrawState = function() {
                return _drawState;
            };

            function setLinksDrawMode(drawMode) {
                var ports = self.getConnectionPorts();
                for (var i = 0; i < ports.length; i++) {
                    var links = ports[i].getEdgesList();
                    for (var j = 0; j < links.length; j++) {
                        links[j].setDrawMode(drawMode);
                    }
                }
            }

            self.setSelected = function(b) {
                if (b) {
                    self.highlighted = false;
                }
                self.selected = b;
            };

            self.drawGraphics = function(ctx) {
                if (!self.isVisible()) {
                    return;
                }
                ctx.lineWidth = 1;
                ctx.setLineDash([0,0]);
                var outlineColor = nColor;
                if (self.isHighlighted()) {
                    outlineColor = hltColor;
                }
                if (self.isSelected()) {
                    outlineColor = selColor;
                }
                ctx.strokeStyle = outlineColor;
                ctx.font = constants.font().TEXT;

                ctx.fillStyle = _myBgnColor;

                draw.roundRect(ctx, self.x, self.y, self.getNodeWidth(), self.getNodeHeight(), _ARC);

                drawContentText(ctx);

                self.drawPorts(ctx);

                if (_drawState === constants.drawState().RESIZED) {
                    draw.selectedNodeFrame(
                        ctx, self.x, self.y, self.getNodeWidth(), self.getNodeHeight(), self.getResizeDeltaW(), self.getResizeDeltaH(),
                        config.getSelectFrameColor(), self);
                }
            };

            function drawContentText(ctx) {
                var cntSize = self.getContentSize();
                if (!cntSize.isNull()) {
                    var x, y,
                        textDms = self.getTextRectangle(),
                        cntW = textDms.width,
                        cntH = textDms.height,
                    //cvExt = constants.contentViewExt().WIDTH,
                        fontHeight = constants.font().HEIGHT, //self.getFontHeight(ctx),
                        leading = constants.textLeading().HEIGHT;
                    if (config.hasShowTitleOnContent()) {
                        // add a line for title -  NOP!
                        //cntH += fontHeight + leading;
                    }
                    x = self.x + Math.floor((self.getNodeWidth() - cntW)/2);
                    //y = self.y + Math.floor((self.getNodeHeight() - cntH)/2);
                    y = self.y + leading*2 + 16;
                    //ctx.fillStyle = constants.colors().CONTENT_TEXT;
                    ctx.fillStyle = _myFgnColor;
                    var lines = self.getContentArray().slice();
                    //console.log("+++ drawContent NODE: "+self.getName()+", lines: "+JSON.stringify(lines));
                    //if (config.hasShowTitleOnContent()) {
                        //var name = drawUtils.getTextTruncated(self.getName(), ctx, constants.contentSize().WIDTH);
                        //lines.splice(0, 0, "");
                    //}
                    for (var i = 0; i < lines.length; i++) {
                        var line = lines[i],
                            lineLen = Math.floor(ctx.measureText(line).width),
                            vX = x + Math.floor((cntW - lineLen)/2),
                        //vY = y + fontHeight -2 + (fontHeight + leading) * i;
                            vY = y + (fontHeight + leading) * i;
                        //console.log(">>> "+line);
                        ctx.fillText(line, vX, vY);
                        if (i == 0) {
                            //ctx.strokeRect(vX, vY-fontHeight, lineLen, fontHeight + leading);
                            self.nameRect.setRectBounds(self.x, vY-fontHeight, self.getNodeWidth(), fontHeight + leading);
                        }
                    }
                }

                //var cntSize = self.getContentSize();
                //if (!cntSize.isNull()) {
                //    var x, y,
                //        textDms = self.getTextRectangle(),
                //        cntW = textDms.width,
                //        cntH = textDms.height,
                //    //cvExt = constants.contentViewExt().WIDTH,
                //        fontHeight = constants.font().HEIGHT, //self.getFontHeight(ctx),
                //        leading = constants.textLeading().HEIGHT;
                //    if (config.hasShowTitleOnContent()) {
                //        // add a line for title -  NOP!
                //        //cntH += fontHeight + leading;
                //    }
                //    x = self.x + Math.floor((self.getNodeWidth() - cntW)/2);
                //    //y = self.y + Math.floor((self.getNodeHeight() - cntH)/2);
                //    y = self.y+16;
                //    //ctx.fillStyle = constants.colors().CONTENT_TEXT;
                //    ctx.fillStyle = _myFgnColor;
                //    var lines = self.getContentArray().slice();
                //    //console.log("+++ drawContent NODE: "+self.getName()+", lines: "+JSON.stringify(lines));
                //    //if (config.hasShowTitleOnContent()) {
                //    //    //var name = drawUtils.getTextTruncated(self.getName(), ctx, constants.contentSize().WIDTH);
                //    //    lines.splice(0, 0, "");
                //    //}
                //    for (var i = 0; i < lines.length; i++) {
                //        var line = lines[i],
                //            lineLen = Math.floor(ctx.measureText(line).width),
                //            vX = x + Math.floor((cntW - lineLen)/2),
                //        //vY = y + fontHeight -2 + (fontHeight + leading) * i;
                //            vY = y + (fontHeight + leading) * i;
                //        //console.log(">>> "+line);
                //        ctx.fillText(line, vX, vY);
                //        if (i == 0) {
                //            //ctx.strokeRect(vX, vY-fontHeight, lineLen, fontHeight + leading);
                //            self.nameRect.setRectBounds(self.x, vY-fontHeight, self.getNodeWidth(), fontHeight + leading);
                //        }
                //    }
                //    return true;
                //}
                //return false;
            }
            //function drawContentText(ctx) {
            //    //console.log("+++ drawContent NODE: "+self.getName()+", "+self.getContentText());
            //    var cntSize = self.getContentSize();
            //    if (!cntSize.isNull()) {
            //        var x, y,
            //            textDms = self.getTextRectangle(),
            //            cntW = textDms.width,
            //            cntH = textDms.height,
            //        //cvExt = constants.contentViewExt().WIDTH,
            //            fontHeight = constants.font().HEIGHT, //self.getFontHeight(ctx),
            //            leading = constants.textLeading().HEIGHT;
            //        if (config.hasShowTitleOnContent()) {
            //            // add a line for title -  NOP!
            //            //cntH += fontHeight + leading;
            //        }
            //        x = self.x + Math.floor((self.getNodeWidth() - cntW)/2);
            //        //y = self.y + Math.floor((self.getNodeHeight() - cntH)/2);
            //        y = self.y+16;
            //        //ctx.fillStyle = constants.colors().CONTENT_TEXT;
            //        ctx.fillStyle = _myFgnColor;
            //        var lines = self.getContentArray().slice();
            //        //console.log("+++ drawContent NODE: "+self.getName()+", lines: "+JSON.stringify(lines));
            //        if (config.hasShowTitleOnContent()) {
            //            //var name = drawUtils.getTextTruncated(self.getName(), ctx, constants.contentSize().WIDTH);
            //            lines.splice(0, 0, "");
            //        }
            //        for (var i = 0; i < lines.length; i++) {
            //            var line = lines[i],
            //                lineLen = Math.floor(ctx.measureText(line).width),
            //                vX = x + Math.floor((cntW - lineLen)/2),
            //            //vY = y + fontHeight -2 + (fontHeight + leading) * i;
            //                vY = y + (fontHeight + leading) * i;
            //            //console.log(">>> "+line);
            //            ctx.fillText(line, vX, vY);
            //            if (i == 0) {
            //                //ctx.strokeRect(vX, vY-fontHeight, lineLen, fontHeight + leading);
            //                self.nameRect.setRectBounds(self.x, vY-fontHeight, self.getNodeWidth(), fontHeight + leading);
            //            }
            //        }
            //        return true;
            //    }
            //    return false;
            //}

            // not used for text node
            self.drawName = function(ctx, maxLen, textY, color) {
                var name = self.getName();
                // TODO: here min size is square, need to monitor the width for dynamic text drawing
                //if (name.length > maxLen) {
                //	name = name.substring(0, maxLen)+"..";
                //}
                ctx.fillStyle = !color ? 'blue' : color;
                //ctx.fillStyle = constants.colors().CONTENT_TEXT;

                var charWidth = ctx.measureText("W").width,
                    maxChars = maxLen/charWidth;
                if (name.length > maxChars) {
                    //if (name.length > maxLen) {
                    name = name.substring(0, maxChars)+"..";
                }
                var tw = ctx.measureText(name).width;
                var tx = Math.round(self.x + Math.floor(self.getNodeWidth()/2) - Math.floor(tw/2));
                //var ty = Math.round(self.y + Math.floor(self.getNodeHeight()/2) + Math.floor(th/2));

                //var ty = Math.round(self.y + thPos + Math.floor(th/2));
                //var ty = self.y + Math.floor((self.getNodeHeight() - self.getFontHeight(ctx))/2);
                th = constants.font().HEIGHT; //self.getFontHeight(ctx);
                var ty = textY ? textY : self.y + Math.floor((self.getNodeHeight() + th/2)/2);

                //ctx.strokeRect(tx, ty-10, tw, 10);
                self.nameRect.setRectBounds(tx, ty-10, tw, 10);
                if (!config.hasHideNodeNames()) {
                    ctx.fillText(name, tx, ty);
                }
            };

            self.drawPorts = function(ctx) {
                var i, inPorts = self.getInputPorts();
                for (i = 0; i < inPorts.length; i++) {
                    inPorts[i].drawPort(ctx);
                }
                var outPorts = self.getOutputPorts();
                for (i = 0; i < outPorts.length; i++) {
                    outPorts[i].drawPort(ctx);
                }
                if (self.markupInPort) {
                    self.markupInPort.drawPort(ctx);
                }
                if (self.markupInAuxPort) {
                    self.markupInAuxPort.drawPort(ctx);
                }
                if (self.markupOutPort) {
                    self.markupOutPort.drawPort(ctx);
                }
                if (self.markupOutAuxPort) {
                    self.markupOutAuxPort.drawPort(ctx);
                }
                for(i = 0; i < self.getRefInPorts().length; i++) {
                    self.getRefInPorts()[i].drawPort(ctx);
                }
                for(i = 0; i < self.getRefOutPorts().length; i++) {
                    self.getRefOutPorts()[i].drawPort(ctx);
                }
            };

            self.initFlowText();

        }
        jsUtils.inherit(FlowText, FlowNode);
        return FlowText;
    }
);