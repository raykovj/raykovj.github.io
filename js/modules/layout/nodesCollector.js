define("modules/layout/nodesCollector",["modules/layout/nodesLayoutUtils","modules/common/utils","modules/graph/graphNode","modules/graph/connector","modules/graph/graphConstants"],function(e,t,o,n,s){function r(){var o=this;o.nodes=[],o.allNodes=[],o.getAllNodes=function(){return o.allNodes},o.startNodes=[],o.getStartNodes=function(){return o.startNodes},o.startNodesCenterTargets=[],o.getStartNodesCenterTargets=function(){return o.startNodesCenterTargets},o.startNodesLeftTargets=[],o.getStartNodesLeftTargets=function(){return o.startNodesLeftTargets},o.startNodesRightTargets=[],o.getStartNodesRightTargets=function(){return o.startNodesRightTargets},o.endNodes=[],o.getEndNodes=function(){return o.endNodes},o.leftTopNodes=[],o.getLeftTopNodes=function(){return o.leftTopNodes},o.rightBottomNodes=[],o.getRightBottomNodes=function(){return o.rightBottomNodes},o.middleNodes=[],o.getMiddleNodes=function(){return o.middleNodes},o.centerNodes=[],o.getCenterNodes=function(){return o.centerNodes},o.leftNoInputNodes=[],o.getLeftNoInputNodes=function(){return o.leftNoInputNodes},o.rightNoInputNodes=[],o.getRightNoInputNodes=function(){return o.rightNoInputNodes},o.centerNoInputNodes=[],o.getCenterNoInputNodes=function(){return o.centerNoInputNodes},o.centerNoCnxNodes=[],o.getCenterNoCnxNodes=function(){return o.centerNoCnxNodes},o.leftNoCnxNodes=[],o.getLeftTopNoCnxNodes=function(){return o.leftNoCnxNodes},o.rightNoCnxNodes=[],o.getRightBottomNoCnxNodes=function(){return o.rightNoCnxNodes},o.groupsRootNodes=[],o.collectNodes=function(n){if(o.nodes=n,0!==o.nodes.length){o.allNodes=e.getNonSuppressedNodes(o.nodes),o.startNodes=e.getStartNodes(o.allNodes),o.endNodes=e.getEndNodes(o.allNodes),o.leftTopNodes=e.getLeftLaneNodes(o.allNodes),o.rightBottomNodes=e.getRightLaneNodes(o.allNodes),o.middleNodes=t.subtractArrays(o.allNodes,o.startNodes),o.middleNodes=t.subtractArrays(o.middleNodes,o.endNodes),o.centerNodes=t.subtractArrays(o.middleNodes,o.leftTopNodes),o.centerNodes=t.subtractArrays(o.centerNodes,o.rightBottomNodes),o.centerNoCnxNodes=e.getUnconnectedNodes(o.centerNodes),o.leftNoCnxNodes=e.getUnconnectedNodes(o.leftTopNodes),o.rightNoCnxNodes=e.getUnconnectedNodes(o.rightBottomNodes),o.centerNodes=t.subtractArrays(o.centerNodes,o.centerNoCnxNodes),o.startNodesCenterTargets=o.collectStartNodesCenterTargets(o.centerNodes),o.startNodesLeftTargets=o.collectStartNodesSideTargets(s.flowType().LEFT_TOP),o.startNodesRightTargets=o.collectStartNodesSideTargets(s.flowType().RIGHT_BOTTOM),o.centerNoInputNodes=e.getNodesWithNoInputs(o.centerNodes),o.leftNoInputNodes=e.getNodesNoInputsWithOutputs(o.leftTopNodes),o.rightNoInputNodes=e.getNodesNoInputsWithOutputs(o.rightBottomNodes);var r=o.getStandaloneNodes(o.centerNodes);if(r.length>0){var d=o.getStandaloneGroups(r);o.groupsRootNodes=o.getCommonGroupsRoots(d)}}},o.getFirstLevelCandidates=function(){var e=[];return e=e.concat(o.startNodesCenterTargets),e=e.concat(o.startNodesLeftTargets),e=e.concat(o.startNodesRightTargets),e=t.mergeArrays(e,o.centerNoInputNodes),e=t.mergeArrays(e,o.leftNoInputNodes),e=t.mergeArrays(e,o.rightNoInputNodes),0===e.length&&o.centerNodes.length>0&&e.push(o.centerNodes[0]),e=t.mergeArrays(e,o.groupsRootNodes)},o.getConnectedSources=function(t,o){for(var n=[],s=0;s<t.length;s++)for(var r=t[s],d=e.getTargetNodesOfNode(r),N=0;N<d.length;N++)o.indexOf(d[N])>=0&&n.indexOf(r)<0&&n.push(r);return n},o.collectStartNodesCenterTargets=function(t){for(var n=[],s=e.getStartNodes(o.allNodes),r=0;r<s.length;r++)for(var d=e.getTargetNodesOfNode(s[r]),N=0;N<d.length;N++){var g=d[N];t.indexOf(g)>=0&&n.indexOf(g)<0&&n.push(g)}return n},o.collectStartNodesSideTargets=function(t){for(var n=[],s=e.getStartNodes(o.allNodes),r=0;r<s.length;r++)for(var d=e.getTargetNodesOfNode(s[r]),N=0;N<d.length;N++){var g=d[N];g.getFlowType()===t&&n.push(g)}return n},o.getNodesWithoutUpwardConnections=function(t){for(var o=[],n=0;n<t.length;n++){for(var s=t[n],r=!1,d=0;d<t.length;d++)if(n!==d){var N=t[d];if(e.hasFlowConnectionFromTo(N,s)&&!e.hasFlowConnectionFromTo(s,N)){r=!0;break}}r||o.push(s)}return o},o.getStandaloneNodes=function(t){var n=[],s=[];s=s.concat(o.startNodes),s=s.concat(o.startNodesCenterTargets),s=s.concat(o.leftTopNodes),s=s.concat(o.rightBottomNodes);for(var r=0;r<t.length;r++){for(var d=t[r],N=!1,g=0;g<s.length;g++)if(e.areNodesInSameTree(s[g],d)){N=!0;break}N||n.push(d)}return n},o.getStandaloneGroups=function(t){for(var o=[],n=0;n<t.length;n++){var s=t[n],r=[];r.push(s);for(var d=0;d<t.length;d++)if(n!==d){var N=t[d];e.areNodesInSameTree(s,N)&&r.indexOf(N)<0&&r.push(N)}o.push(r)}return o},o.getCommonGroupsRoots=function(t){for(var o=[],n=0;n<t.length;n++){var s=t[n];if(s.length>0){var r=[],d=e.getNodesWithNoInputs(s);d.length>0&&(r=r.concat(d));for(var N=0;N<s.length;N++){var g=s[N];r.indexOf(g)<0&&!e.isNodeInSameNodesTree(g,r)&&r.push(g)}0===r.length&&r.push(s[0]),o=o.concat(r)}}return o},o.getContentString=function(e,t){var o="";o+=e+": ";for(var n=0;n<t.length;n++)n>0&&(o+=", "),o+=t[n].getName();return o+="\n"},o.print=function(){var e=[];return e.push("== NODES COLLECTOR:\n"),e.push(getContentString("TOTAL",o.allNodes)),e.push(getContentString("- startNodes",o.startNodes)),e.push(getContentString("- startNodesCenterTargets",o.startNodesCenterTargets)),e.push(getContentString("- startNodesLeftTargets",o.startNodesLeftTargets)),e.push(getContentString("- startNodesRightTargets",o.startNodesRightTargets)),e.push(getContentString("- endNodes",o.endNodes)),e.push(getContentString("- leftTopNodes",o.leftTopNodes)),e.push(getContentString("- rightBottomNodes",o.rightBottomNodes)),e.push(getContentString("- centerNodes",o.centerNodes)),e.push(getContentString("- centerNoInputNodes",o.centerNoInputNodes)),e.push(getContentString("- centerNoCnxNodes",o.centerNoCnxNodes)),e.push(getContentString("- leftNoInputNodes",o.leftNoInputNodes)),e.push(getContentString("- leftNoCnxNodes",o.leftNoCnxNodes)),e.push(getContentString("- rightNoInputNodes",o.rightNoInputNodes)),e.push(getContentString("- rightNoCnxNodes",o.rightNoCnxNodes)),e.push(getContentString("- groupRootsNodes",o.groupsRootNodes)),e.toString()}}return r});