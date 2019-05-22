define("modules/diagram/diagramUtils",["modules/graph/graphConstants","modules/settings/config"],function(e,n){var d=function(n){return n===e.flowType().START?"S":n===e.flowType().END?"E":n===e.flowType().PROCESS?"P":n===e.flowType().IN_OUT?"IO":n===e.flowType().DECISION?"D":n===e.flowType().LEFT_TOP?"L":n===e.flowType().RIGHT_BOTTOM?"R":"X"};return{generateNextNodeName:function(e,n){var E=d(n),i=[],T=e.get(n);if(T)for(var o=E.length,t=0;t<T.length;t++){var s=T[t];if(s.startsWith(E)&&s.length>o){var r=s.substring(o),f=parseInt(r);i.push(f)}}if(i.length>0){i.sort(function(e,n){return e-n});var S=i[i.length-1];return E+ ++S}return E+1},getFlowType:function(n){return n===e.flowId().START?e.flowType().START:n===e.flowId().END?e.flowType().END:n===e.flowId().PROCESS?e.flowType().PROCESS:n===e.flowId().IN_OUT?e.flowType().IN_OUT:n===e.flowId().LEFT_TOP?e.flowType().LEFT_TOP:n===e.flowId().RIGHT_BOTTOM?e.flowType().RIGHT_BOTTOM:n===e.flowId().DECISION?e.flowType().DECISION:n===e.flowId().LINK?e.flowType().LINK:n===e.flowId().REF_LINK?e.flowType().REF_LINK:n===e.flowId().PORT?e.flowType().PORT:n===e.flowId().CONTAINER?e.flowType().CONTAINER:e.flowType().NONE},getFlowTypeName:function(n){return n===e.flowType().START?e.flowId().START:n===e.flowType().END?e.flowId().END:n===e.flowType().PROCESS?e.flowId().PROCESS:n===e.flowType().IN_OUT?e.flowId().IN_OUT:n===e.flowType().LEFT_TOP?e.flowId().LEFT_TOP:n===e.flowType().RIGHT_BOTTOM?e.flowId().RIGHT_BOTTOM:n===e.flowType().DECISION?e.flowId().DECISION:n===e.flowType().LINK?e.flowId().LINK:n===e.flowType().REF_LINK?e.flowId().REF_LINK:n===e.flowType().PORT?e.flowId().PORT:n===e.flowType().CONTAINER?e.flowId().CONTAINER:""},getFlowTypeForGalleryId:function(n){return n===e.flowId().START?e.flowType().START:n===e.flowId().END?e.flowType().END:n===e.flowId().PROCESS?e.flowType().PROCESS:n===e.flowId().IN_OUT?e.flowType().IN_OUT:n===e.flowId().LEFT_TOP?e.flowType().LEFT_TOP:n===e.flowId().RIGHT_BOTTOM?e.flowType().RIGHT_BOTTOM:n===e.flowId().DECISION?e.flowType().DECISION:e.flowType().NONE},getCrossingName:function(n){return n===e.pipeXing().SIDE_BOX?"SIDE BOX":n===e.pipeXing().CROSS_BOX?"CROSS BOX":"NONE"},getNodeSideName:function(n){return n===e.nodeSide().FRONT?"FRONT":n===e.nodeSide().BACK?"BACK":n===e.nodeSide().RIGHT?"RIGHT":n===e.nodeSide().LEFT?"LEFT":n===e.nodeSide().ANY?"ANY":""},getResultName:function(n){return n===e.result().OK?"OK":n===e.result().HAS_FIX?"HAS_FIX":n===e.result().RETRY_FIX?"RETRY_FIX":n===e.result().REDO_LAYOUT?"REDO_LAYOUT":n===e.result().FAILED?"FAILED":""},getLinkObjectName:function(e){return"["+e.source+"]-["+e.target+"]"},getLinkTypeName:function(n){return n===e.linkType().CNX_LINK?"CONNECTION":n===e.linkType().REF_LINK?"REFERENCE":"TBD"},getPortFootprint:function(e){},getDecisionInputSide:function(n){return n===e.decisionInputs().BACK?e.nodeSide().BACK:n===e.decisionInputs().LEFT?e.nodeSide().LEFT:n===e.decisionInputs().RIGHT?e.nodeSide().RIGHT:e.nodeSide().NONE},getDecisionTruePortSide:function(d){if(n.getFlowDirection()===e.flow().VERTICAL){if(d.getInput()===e.decisionInputs().BACK){if(d.getEnds()===e.decisionEnds().TRUE_FALSE_EMPTY)return e.nodeSide().RIGHT;if(d.getEnds()===e.decisionEnds().FALSE_TRUE_EMPTY)return e.nodeSide().FRONT;if(d.getEnds()===e.decisionEnds().TRUE_EMPTY_FALSE)return e.nodeSide().RIGHT;if(d.getEnds()===e.decisionEnds().FALSE_EMPTY_TRUE)return e.nodeSide().LEFT;if(d.getEnds()===e.decisionEnds().EMPTY_TRUE_FALSE)return e.nodeSide().FRONT;if(d.getEnds()===e.decisionEnds().EMPTY_FALSE_TRUE)return e.nodeSide().LEFT}else if(d.getInput()===e.decisionInputs().LEFT){if(d.getEnds()===e.decisionEnds().TRUE_FALSE_EMPTY)return e.nodeSide().BACK;if(d.getEnds()===e.decisionEnds().FALSE_TRUE_EMPTY)return e.nodeSide().RIGHT;if(d.getEnds()===e.decisionEnds().TRUE_EMPTY_FALSE)return e.nodeSide().BACK;if(d.getEnds()===e.decisionEnds().FALSE_EMPTY_TRUE)return e.nodeSide().FRONT;if(d.getEnds()===e.decisionEnds().EMPTY_TRUE_FALSE)return e.nodeSide().RIGHT;if(d.getEnds()===e.decisionEnds().EMPTY_FALSE_TRUE)return e.nodeSide().FRONT}else if(d.getInput()===e.decisionInputs().RIGHT){if(d.getEnds()===e.decisionEnds().TRUE_FALSE_EMPTY)return e.nodeSide().FRONT;if(d.getEnds()===e.decisionEnds().FALSE_TRUE_EMPTY)return e.nodeSide().LEFT;if(d.getEnds()===e.decisionEnds().TRUE_EMPTY_FALSE)return e.nodeSide().FRONT;if(d.getEnds()===e.decisionEnds().FALSE_EMPTY_TRUE)return e.nodeSide().BACK;if(d.getEnds()===e.decisionEnds().EMPTY_TRUE_FALSE)return e.nodeSide().LEFT;if(d.getEnds()===e.decisionEnds().EMPTY_FALSE_TRUE)return e.nodeSide().BACK}}else if(n.getFlowDirection()===e.flow().HORIZONTAL)if(d.getInput()===e.decisionInputs().BACK){if(d.getEnds()===e.decisionEnds().TRUE_FALSE_EMPTY)return e.nodeSide().LEFT;if(d.getEnds()===e.decisionEnds().FALSE_TRUE_EMPTY)return e.nodeSide().FRONT;if(d.getEnds()===e.decisionEnds().TRUE_EMPTY_FALSE)return e.nodeSide().LEFT;if(d.getEnds()===e.decisionEnds().FALSE_EMPTY_TRUE)return e.nodeSide().RIGHT;if(d.getEnds()===e.decisionEnds().EMPTY_TRUE_FALSE)return e.nodeSide().FRONT;if(d.getEnds()===e.decisionEnds().EMPTY_FALSE_TRUE)return e.nodeSide().RIGHT}else if(d.getInput()===e.decisionInputs().LEFT){if(d.getEnds()===e.decisionEnds().TRUE_FALSE_EMPTY)return e.nodeSide().FRONT;if(d.getEnds()===e.decisionEnds().FALSE_TRUE_EMPTY)return e.nodeSide().RIGHT;if(d.getEnds()===e.decisionEnds().TRUE_EMPTY_FALSE)return e.nodeSide().FRONT;if(d.getEnds()===e.decisionEnds().FALSE_EMPTY_TRUE)return e.nodeSide().BACK;if(d.getEnds()===e.decisionEnds().EMPTY_TRUE_FALSE)return e.nodeSide().RIGHT;if(d.getEnds()===e.decisionEnds().EMPTY_FALSE_TRUE)return e.nodeSide().BACK}else if(d.getInput()===e.decisionInputs().RIGHT){if(d.getEnds()===e.decisionEnds().TRUE_FALSE_EMPTY)return e.nodeSide().BACK;if(d.getEnds()===e.decisionEnds().FALSE_TRUE_EMPTY)return e.nodeSide().LEFT;if(d.getEnds()===e.decisionEnds().TRUE_EMPTY_FALSE)return e.nodeSide().BACK;if(d.getEnds()===e.decisionEnds().FALSE_EMPTY_TRUE)return e.nodeSide().FRONT;if(d.getEnds()===e.decisionEnds().EMPTY_TRUE_FALSE)return e.nodeSide().LEFT;if(d.getEnds()===e.decisionEnds().EMPTY_FALSE_TRUE)return e.nodeSide().FRONT}return e.nodeSide().NONE},getDecisionFalsePortSide:function(d){if(n.getFlowDirection()===e.flow().VERTICAL){if(d.getInput()===e.decisionInputs().BACK){if(d.getEnds()===e.decisionEnds().TRUE_FALSE_EMPTY)return e.nodeSide().FRONT;if(d.getEnds()===e.decisionEnds().FALSE_TRUE_EMPTY)return e.nodeSide().RIGHT;if(d.getEnds()===e.decisionEnds().TRUE_EMPTY_FALSE)return e.nodeSide().LEFT;if(d.getEnds()===e.decisionEnds().FALSE_EMPTY_TRUE)return e.nodeSide().RIGHT;if(d.getEnds()===e.decisionEnds().EMPTY_TRUE_FALSE)return e.nodeSide().LEFT;if(d.getEnds()===e.decisionEnds().EMPTY_FALSE_TRUE)return e.nodeSide().FRONT}else if(d.getInput()===e.decisionInputs().LEFT){if(d.getEnds()===e.decisionEnds().TRUE_FALSE_EMPTY)return e.nodeSide().RIGHT;if(d.getEnds()===e.decisionEnds().FALSE_TRUE_EMPTY)return e.nodeSide().BACK;if(d.getEnds()===e.decisionEnds().TRUE_EMPTY_FALSE)return e.nodeSide().FRONT;if(d.getEnds()===e.decisionEnds().FALSE_EMPTY_TRUE)return e.nodeSide().BACK;if(d.getEnds()===e.decisionEnds().EMPTY_TRUE_FALSE)return e.nodeSide().FRONT;if(d.getEnds()===e.decisionEnds().EMPTY_FALSE_TRUE)return e.nodeSide().RIGHT}else if(d.getInput()===e.decisionInputs().RIGHT){if(d.getEnds()===e.decisionEnds().TRUE_FALSE_EMPTY)return e.nodeSide().LEFT;if(d.getEnds()===e.decisionEnds().FALSE_TRUE_EMPTY)return e.nodeSide().FRONT;if(d.getEnds()===e.decisionEnds().TRUE_EMPTY_FALSE)return e.nodeSide().BACK;if(d.getEnds()===e.decisionEnds().FALSE_EMPTY_TRUE)return e.nodeSide().FRONT;if(d.getEnds()===e.decisionEnds().EMPTY_TRUE_FALSE)return e.nodeSide().BACK;if(d.getEnds()===e.decisionEnds().EMPTY_FALSE_TRUE)return e.nodeSide().LEFT}}else if(n.getFlowDirection()===e.flow().HORIZONTAL)if(d.getInput()===e.decisionInputs().BACK){if(d.getEnds()===e.decisionEnds().TRUE_FALSE_EMPTY)return e.nodeSide().FRONT;if(d.getEnds()===e.decisionEnds().FALSE_TRUE_EMPTY)return e.nodeSide().LEFT;if(d.getEnds()===e.decisionEnds().TRUE_EMPTY_FALSE)return e.nodeSide().RIGHT;if(d.getEnds()===e.decisionEnds().FALSE_EMPTY_TRUE)return e.nodeSide().LEFT;if(d.getEnds()===e.decisionEnds().EMPTY_TRUE_FALSE)return e.nodeSide().RIGHT;if(d.getEnds()===e.decisionEnds().EMPTY_FALSE_TRUE)return e.nodeSide().FRONT}else if(d.getInput()===e.decisionInputs().LEFT){if(d.getEnds()===e.decisionEnds().TRUE_FALSE_EMPTY)return e.nodeSide().RIGHT;if(d.getEnds()===e.decisionEnds().FALSE_TRUE_EMPTY)return e.nodeSide().FRONT;if(d.getEnds()===e.decisionEnds().TRUE_EMPTY_FALSE)return e.nodeSide().BACK;if(d.getEnds()===e.decisionEnds().FALSE_EMPTY_TRUE)return e.nodeSide().FRONT;if(d.getEnds()===e.decisionEnds().EMPTY_TRUE_FALSE)return e.nodeSide().BACK;if(d.getEnds()===e.decisionEnds().EMPTY_FALSE_TRUE)return e.nodeSide().RIGHT}else if(d.getInput()===e.decisionInputs().RIGHT){if(d.getEnds()===e.decisionEnds().TRUE_FALSE_EMPTY)return e.nodeSide().LEFT;if(d.getEnds()===e.decisionEnds().FALSE_TRUE_EMPTY)return e.nodeSide().BACK;if(d.getEnds()===e.decisionEnds().TRUE_EMPTY_FALSE)return e.nodeSide().FRONT;if(d.getEnds()===e.decisionEnds().FALSE_EMPTY_TRUE)return e.nodeSide().BACK;if(d.getEnds()===e.decisionEnds().EMPTY_TRUE_FALSE)return e.nodeSide().FRONT;if(d.getEnds()===e.decisionEnds().EMPTY_FALSE_TRUE)return e.nodeSide().LEFT}return e.nodeSide().NONE},getFlowTypeImageURL:function(d){var E=n.getFlowDirection()===e.flow().HORIZONTAL;return d===e.flowType().START?E?"images/dataflow/startH16.png":"images/dataflow/startV16.png":d===e.flowType().END?E?"images/dataflow/endH16.png":"images/dataflow/endV16.png":d===e.flowType().PROCESS?E?"images/dataflow/actionH16.png":"images/dataflow/actionV16.png":d===e.flowType().IN_OUT?E?"images/dataflow/actionSkewH16.png":"images/dataflow/actionSkewV16.png":d===e.flowType().LEFT_TOP?E?"images/dataflow/actionTopH16.png":"images/dataflow/actionLeftV16.png":d===e.flowType().RIGHT_BOTTOM?E?"images/dataflow/actionBottomH16.png":"images/dataflow/actionRightV16.png":d===e.flowType().DECISION?E?"images/dataflow/decisionH16.png":"images/dataflow/decisionV16.png":""}}});