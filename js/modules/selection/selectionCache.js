define("modules/selection/selectionCache",["modules/selection/nodeSelections","modules/common/map"],function(e,t){function n(n){function o(e){for(var t=0;t<a.length;t++){var n=a[t];if(e.name===n.name&&e.type===n.type)return!0}return!1}function c(e){for(var t=0;t<u.length;t++){var n=u[t];if(e.source===n.source&&e.target===n.target)return!0}return!1}function r(){a=[],u=[],d.clear()}var i=this,l=n,s=!1,a=[],u=[],d=new t;i.cacheSelections=function(t){s||r();var n,o=t.getFlowNodes();for(n=0;n<o.length;n++)o[n].isSelected()&&a.push(o[n].getNodeObject()),o[n].hasSelections()&&d.put(o[n].getName(),new e(o[n]));var c=t.getFlowLinks();for(n=0;n<c.length;n++)c[n].isSelected()&&u.push(c[n].getLinkObject())},i.addNodeObject=function(e){a.push(e),s=!0},i.addLinkObject=function(e){u.push(e),s=!0},i.restoreSelections=function(e){var t,n=e.getFlowNodes();for(t=0;t<n.length;t++){o(n[t].getNodeObject())&&l.addToSelections(n[t]);var i=d.get(n[t].getName());if(i){var a=i.getCachedNodeSelections(n[t]);l.addMultipleToSelections(a)}}var u=e.getFlowLinks();for(t=0;t<u.length;t++)c(u[t].getLinkObject())&&l.addToSelections(u[t]);r(),s=!1}}return n});