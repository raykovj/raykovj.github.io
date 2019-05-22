define(["modules/geometry/point","modules/graph/xPoint","modules/geometry/rectangle","modules/graph/cell","modules/graph/graphElement","modules/graph/graphNode","modules/graph/connector","modules/graph/corridor","modules/graph/pipe","modules/graph/graphConstants","modules/settings/config"],function(e,t,o,r,n,i,g,d,a,f,l){var u=function(e){for(var t=0,o=0;o<e.length;o++)t+=Math.abs(e[o].getOffsetStep());return t},s=function(t,o,r,n){var i=new g(new e(0,0),o,t,r,n),d=0,a="",u=0,s=0,h=0,L=0,T=0,p=0,S=0,O=0,c=[],y=t.getPortStep();if(l.getFlowDirection()===f.flow().VERTICAL){if(r==f.nodeSide().FRONT||r==f.nodeSide().BACK)if(O=r===f.nodeSide().FRONT?t.height:0,c=r==f.nodeSide().FRONT?t.getFrontConnectors():t.getBackConnectors(),u=c.length,i.setOrder(u),s=Math.floor(t.width/(u+2)),s<y&&(h=t.width+s,t.setSize(h,t.height)),t.getPortLayout()===f.portLayout().AUTO_ARRANGE){for(T=Math.floor(t.width/(u+2)),d=0;d<u;d++)a=c[d],a.moveToXY(T*(d+1),O);i.moveToXY(T*(u+1),O),c.push(i)}else if(t.getPortLayout()===f.portLayout().ALIGN_CENTER||t.getPortLayout()===f.portLayout().ALIGN_TOP_LEFT){for(p=t.getPortLayout()===f.portLayout().ALIGN_CENTER?Math.floor((t.width-y*(u-1))/2):y,d=0;d<u;d++)a=c[d],a.moveToXY(p+y*d,O);i.moveToXY(p+y*u,O),c.push(i)}else console.log("createConnector: port layout needs additional data: "+t.getPortLayout());else if(r===f.nodeSide().RIGHT||r===f.nodeSide().LEFT)if(S=r===f.nodeSide().RIGHT?0:t.width,c=r===f.nodeSide().RIGHT?t.getRightConnectors():t.getLeftConnectors(),u=c.length,i.setOrder(u),s=Math.floor(t.height/(u+2)),s<y&&(L=t.height+s,t.setSize(t.width,L)),t.getPortLayout()==f.portLayout().AUTO_ARRANGE){for(T=Math.floor(t.height/(u+2)),d=0;d<u;d++)a=c[d],a.moveToXY(S,T*(d+1));i.moveToXY(S,T*(u+1)),c.push(i)}else if(t.getPortLayout()==f.portLayout().ALIGN_CENTER||t.getPortLayout()==f.portLayout().ALIGN_TOP_LEFT){for(p=t.getPortLayout()==f.portLayout().ALIGN_CENTER?Math.floor((t.height-y*(u-1))/2):y,d=0;d<u;d++)a=c[d],a.moveToXY(S,p+y*d);i.moveToXY(S,p+y*u),c.push(i)}else console.log("createConnector: port layout needs additional data: "+t.getPortLayout())}else if(l.getFlowDirection()===f.flow().HORIZONTAL)if(r===f.nodeSide().FRONT||r===f.nodeSide().BACK)if(S=r===f.nodeSide().FRONT?t.width:0,c=r===f.nodeSide().FRONT?t.getFrontConnectors():t.getBackConnectors(),u=c.length,i.setOrder(u),s=Math.floor(t.height/(u+2)),s<y&&(L=t.height+s,t.setSize(t.width,L)),t.getPortLayout()==f.portLayout().AUTO_ARRANGE){for(T=Math.floor(t.height/(u+2)),d=0;d<u;d++)a=c[d],a.moveToXY(S,T*(d+1));i.moveToXY(S,T*(u+1)),c.push(i)}else if(t.getPortLayout()==f.portLayout().ALIGN_CENTER||t.getPortLayout()==f.portLayout().ALIGN_TOP_LEFT){for(p=t.getPortLayout()==f.portLayout().ALIGN_CENTER?Math.floor((t.height-y*(u-1))/2):y,d=0;d<u;d++)a=c[d],a.moveToXY(S,p+y*d);i.moveToXY(S,p+y*u),c.push(i)}else console.log("createConnector: port layout needs additional data: "+t.getPortLayout());else if(r===f.nodeSide().RIGHT||r===f.nodeSide().LEFT)if(O=r===f.nodeSide().RIGHT?t.height:0,c=r===f.nodeSide().RIGHT?t.getRightConnectors():t.getLeftConnectors(),u=c.length,i.setOrder(u),s=Math.floor(t.width/(u+2)),s<y&&(h=t.width+s,t.setSize(h,t.height)),t.getPortLayout()===f.portLayout().AUTO_ARRANGE){for(T=Math.floor(t.width/(u+2)),d=0;d<u;d++)a=c[d],a.moveToXY(T*(d+1),O);i.moveToXY(T*(u+1),O),c.push(i)}else if(t.getPortLayout()==f.portLayout().ALIGN_CENTER||t.getPortLayout()==f.portLayout().ALIGN_TOP_LEFT){for(p=t.getPortLayout()==f.portLayout().ALIGN_CENTER?Math.floor((t.width-y*(u-1))/2):y,d=0;d<u;d++)a=c[d],a.moveToXY(p+y*d,O);i.moveToXY(p+y*u,O),c.push(i)}else console.log("createConnector: port layout needs additional data: "+t.getPortLayout());return i},h=function(t,o,r,n){var i=new g(new e(0,0),o,t,r,n),d=0,a=0;return l.getFlowDirection()===f.flow().VERTICAL?r===f.nodeSide().FRONT||r===f.nodeSide().BACK?(a=r===f.nodeSide().FRONT?t.height:0,i.moveToXY(0,a)):r!==f.nodeSide().RIGHT&&r!==f.nodeSide().LEFT||(d=r===f.nodeSide().RIGHT?0:t.width,i.moveToXY(d,t.height)):l.getFlowDirection()===f.flow().HORIZONTAL&&(r===f.nodeSide().FRONT||r===f.nodeSide().BACK?(d=r===f.nodeSide().FRONT?t.width:0,i.moveToXY(d,t.height)):r!==f.nodeSide().RIGHT&&r!==f.nodeSide().LEFT||(a=r===f.nodeSide().RIGHT?t.height:0,i.moveToXY(0,a))),i},L=function(e,t){var o=0,r=0,n=!1,i=0,g=0,d=[],a=0,s=0,h=0,L="",T=0,p=0,S=0,O=0,c=e.isDecisionNode()?e.getCurrentWidth():e.width,y=e.isDecisionNode()?e.getCurrentHeight():e.height;if(l.getFlowDirection()===f.flow().VERTICAL){if(r=y,n=e.areConnectorsOrdered(f.nodeSide().FRONT),d=n?e.getSortedConnectors(f.nodeSide().FRONT):e.getFrontConnectors(),i=d.length,g=i+u(d),i>0)if(e.getPortLayout()==f.portLayout().AUTO_ARRANGE)for(a=Math.floor(c/(g+1)),s=0,S=0,h=0;h<i;h++)L=d[h],p=L.getOffsetStep()>0?1:0,p+=s,S+=p,s=-1==L.getOffsetStep()?1:0,L.moveToXY(a*(h+1+S),r),n||L.setOrder(h);else if(e.getPortLayout()==f.portLayout().ALIGN_CENTER||e.getPortLayout()==f.portLayout().ALIGN_TOP_LEFT)for(T=e.getPortLayout()==f.portLayout().ALIGN_CENTER?Math.floor((c-t*(g-1))/2):t,s=0,S=0,h=0;h<i;h++)L=d[h],p=L.getOffsetStep()>0?1:0,p+=s,S+=p,s=-1==L.getOffsetStep()?1:0,L.moveToXY(T+t*(h+S),r),n||L.setOrder(h);if(r=0,n=e.areConnectorsOrdered(f.nodeSide().BACK),d=n?e.getSortedConnectors(f.nodeSide().BACK):e.getBackConnectors(),i=d.length,g=i+u(d),i>0)if(e.getPortLayout()==f.portLayout().AUTO_ARRANGE)for(a=Math.floor(c/(g+1)),s=0,S=0,h=0;h<i;h++)L=d[h],p=L.getOffsetStep()>0?1:0,p+=s,S+=p,s=-1==L.getOffsetStep()?1:0,L.moveToXY(a*(h+1+S),r),n||L.setOrder(h);else if(e.getPortLayout()==f.portLayout().ALIGN_CENTER||e.getPortLayout()==f.portLayout().ALIGN_TOP_LEFT)for(T=e.getPortLayout()==f.portLayout().ALIGN_CENTER?Math.floor((c-t*(g-1))/2):t,s=0,S=0,h=0;h<i;h++)L=d[h],p=L.getOffsetStep()>0?1:0,p+=s,S+=p,s=-1==L.getOffsetStep()?1:0,L.moveToXY(T+t*(h+S),r),n||L.setOrder(h);if(o=0,n=e.areConnectorsOrdered(f.nodeSide().RIGHT),d=n?e.getSortedConnectors(f.nodeSide().RIGHT):e.getRightConnectors(),i=d.length,g=i+u(d),i>0)if(e.getPortLayout()==f.portLayout().AUTO_ARRANGE)for(a=Math.floor(y/(g+1)),s=0,S=0,h=0;h<i;h++)L=d[h],p=L.getOffsetStep()>0?1:0,p+=s,S+=p,s=-1==L.getOffsetStep()?1:0,L.moveToXY(o,a*(h+1+S)),n||L.setOrder(h);else if(e.getPortLayout()==f.portLayout().ALIGN_CENTER||e.getPortLayout()==f.portLayout().ALIGN_TOP_LEFT)for(T=e.getPortLayout()==f.portLayout().ALIGN_CENTER?Math.floor((y-t*(g-1))/2):t,s=0,S=0,h=0;h<i;h++)L=d[h],p=L.getOffsetStep()>0?1:0,p+=s,S+=p,s=-1==L.getOffsetStep()?1:0,L.moveToXY(o,T+t*(h+S)),n||L.setOrder(h);if(o=c,n=e.areConnectorsOrdered(f.nodeSide().LEFT),d=n?e.getSortedConnectors(f.nodeSide().LEFT):e.getLeftConnectors(),i=d.length,g=i+u(d),i>0)if(e.getPortLayout()==f.portLayout().AUTO_ARRANGE)for(a=Math.floor(y/(g+1)),s=0,S=0,h=0;h<i;h++)L=d[h],p=L.getOffsetStep()>0?1:0,p+=s,S+=p,s=-1==L.getOffsetStep()?1:0,L.moveToXY(o,a*(h+1+S)),n||L.setOrder(h);else if(e.getPortLayout()==f.portLayout().ALIGN_CENTER||e.getPortLayout()==f.portLayout().ALIGN_TOP_LEFT)for(T=e.getPortLayout()==f.portLayout().ALIGN_CENTER?Math.floor((y-t*(g-1))/2):t,s=0,S=0,h=0;h<i;h++)L=d[h],p=L.getOffsetStep()>0?1:0,p+=s,S+=p,s=-1==L.getOffsetStep()?1:0,L.moveToXY(o,T+t*(h+S)),n||L.setOrder(h);null!=e.getMarkupInPort()&&(L=e.getMarkupInPort().getConnector(),O=e.getPreferredInputSide(),O==f.nodeSide().FRONT||O==f.nodeSide().BACK?L.moveToXY(0,0):O==f.nodeSide().LEFT?L.moveToXY(c,0):O==f.nodeSide().RIGHT&&L.moveToXY(0,0)),null!=e.getMarkupOutPort()&&(L=e.getMarkupOutPort().getConnector(),O=e.getPreferredInputSide(),O==f.nodeSide().FRONT||O==f.nodeSide().BACK?L.moveToXY(0,y):O==f.nodeSide().LEFT?L.moveToXY(c,y):O==f.nodeSide().RIGHT&&L.moveToXY(0,y))}else if(l.getFlowDirection()===f.flow().HORIZONTAL){if(o=c,n=e.areConnectorsOrdered(f.nodeSide().FRONT),d=n?e.getSortedConnectors(f.nodeSide().FRONT):e.getFrontConnectors(),i=d.length,g=i+u(d),i>0)if(e.getPortLayout()==f.portLayout().AUTO_ARRANGE)for(a=Math.floor(y/(g+1)),s=0,S=0,h=0;h<i;h++)L=d[h],p=L.getOffsetStep()>0?1:0,p+=s,S+=p,s=-1==L.getOffsetStep()?1:0,L.moveToXY(o,a*(h+1+S)),n||L.setOrder(h);else if(e.getPortLayout()==f.portLayout().ALIGN_CENTER||e.getPortLayout()==f.portLayout().ALIGN_TOP_LEFT)for(T=e.getPortLayout()==f.portLayout().ALIGN_CENTER?Math.floor((y-t*(g-1))/2):t,s=0,S=0,h=0;h<i;h++)L=d[h],p=L.getOffsetStep()>0?1:0,p+=s,S+=p,s=-1==L.getOffsetStep()?1:0,L.moveToXY(o,T+t*(h+S)),n||L.setOrder(h);if(o=0,n=e.areConnectorsOrdered(f.nodeSide().BACK),d=n?e.getSortedConnectors(f.nodeSide().BACK):e.getBackConnectors(),i=d.length,g=i+u(d),i>0)if(e.getPortLayout()==f.portLayout().AUTO_ARRANGE)for(a=Math.floor(y/(g+1)),s=0,S=0,h=0;h<i;h++)L=d[h],p=L.getOffsetStep()>0?1:0,p+=s,S+=p,s=-1==L.getOffsetStep()?1:0,L.moveToXY(o,a*(h+1+S)),n||L.setOrder(h);else if(e.getPortLayout()==f.portLayout().ALIGN_CENTER||e.getPortLayout()==f.portLayout().ALIGN_TOP_LEFT)for(T=e.getPortLayout()==f.portLayout().ALIGN_CENTER?Math.floor((y-t*(g-1))/2):t,s=0,S=0,h=0;h<i;h++)L=d[h],p=L.getOffsetStep()>0?1:0,p+=s,S+=p,s=-1==L.getOffsetStep()?1:0,L.moveToXY(o,T+t*(h+S)),n||L.setOrder(h);if(r=y,n=e.areConnectorsOrdered(f.nodeSide().RIGHT),d=n?e.getSortedConnectors(f.nodeSide().RIGHT):e.getRightConnectors(),i=d.length,g=i+u(d),i>0)if(e.getPortLayout()==f.portLayout().AUTO_ARRANGE)for(a=Math.floor(c/(g+1)),s=0,S=0,h=0;h<i;h++)L=d[h],p=L.getOffsetStep()>0?1:0,p+=s,S+=p,s=-1==L.getOffsetStep()?1:0,L.moveToXY(a*(h+1+S),r),n||L.setOrder(h);else if(e.getPortLayout()==f.portLayout().ALIGN_CENTER||e.getPortLayout()==f.portLayout().ALIGN_TOP_LEFT)for(T=e.getPortLayout()==f.portLayout().ALIGN_CENTER?Math.floor((c-t*(g-1))/2):t,s=0,S=0,h=0;h<i;h++)L=d[h],p=L.getOffsetStep()>0?1:0,p+=s,S+=p,s=-1==L.getOffsetStep()?1:0,L.moveToXY(T+t*(h+S),r),n||L.setOrder(h);if(r=0,n=e.areConnectorsOrdered(f.nodeSide().LEFT),d=n?e.getSortedConnectors(f.nodeSide().LEFT):e.getLeftConnectors(),i=d.length,g=i+u(d),i>0)if(e.getPortLayout()==f.portLayout().AUTO_ARRANGE)for(a=Math.floor(c/(g+1)),s=0,S=0,h=0;h<i;h++)L=d[h],p=L.getOffsetStep()>0?1:0,p+=s,S+=p,s=-1==L.getOffsetStep()?1:0,L.moveToXY(a*(h+1+S),r),n||L.setOrder(h);else if(e.getPortLayout()==f.portLayout().ALIGN_CENTER||e.getPortLayout()==f.portLayout().ALIGN_TOP_LEFT)for(T=e.getPortLayout()==f.portLayout().ALIGN_CENTER?Math.floor((c-t*(g-1))/2):t,s=0,S=0,h=0;h<i;h++)L=d[h],p=L.getOffsetStep()>0?1:0,p+=s,S+=p,s=-1==L.getOffsetStep()?1:0,L.moveToXY(T+t*(h+S),r),n||L.setOrder(h);null!=e.getMarkupInPort()&&(L=e.getMarkupInPort().getConnector(),O=e.getPreferredInputSide(),O==f.nodeSide().FRONT||O==f.nodeSide().BACK?L.moveToXY(0,y):O==f.nodeSide().LEFT?L.moveToXY(0,0):O==f.nodeSide().RIGHT&&L.moveToXY(0,y)),null!=e.getMarkupOutPort()&&(L=e.getMarkupOutPort().getConnector(),O=e.getPreferredInputSide(),O==f.nodeSide().FRONT||O==f.nodeSide().BACK?L.moveToXY(c,y):O==f.nodeSide().LEFT?L.moveToXY(c,0):O==f.nodeSide().RIGHT&&L.moveToXY(c,y))}};return{getEdgeConnectionPoint:function(t){var o=t.getConnector();if(l.getFlowDirection()===f.flow().VERTICAL){if(0===t.height)return new e(o.globalX(),o.globalY());if(o.side===f.nodeSide().FRONT)return new e(o.globalX(),o.globalY()+Math.floor(t.height/2)+t.getOffset());if(o.side===f.nodeSide().BACK)return new e(o.globalX(),o.globalY()-Math.floor(t.height/2)-t.getOffset());if(o.side===f.nodeSide().LEFT)return new e(o.globalX()+Math.floor(t.width/2)+t.getOffset(),o.globalY());if(o.side===f.nodeSide().RIGHT)return new e(o.globalX()-Math.floor(t.width/2)-t.getOffset(),o.globalY())}else if(l.getFlowDirection()===f.flow().HORIZONTAL){if(0===t.width)return new e(o.globalX(),o.globalY());if(o.side===f.nodeSide().FRONT)return new e(o.globalX()+Math.floor(t.width/2)+t.getOffset(),o.globalY());if(o.side===f.nodeSide().BACK)return new e(o.globalX()-Math.floor(t.width/2)-t.getOffset(),o.globalY());if(o.side===f.nodeSide().LEFT)return new e(o.globalX(),o.globalY()-Math.floor(t.height/2)-t.getOffset());if(o.side===f.nodeSide().RIGHT)return new e(o.globalX(),o.globalY()+Math.floor(t.height/2)+t.getOffset())}return new e(0,0)},adjustSize:function(e){var t=e.getPortStep(),o=void 0,r=void 0,n=void 0;if(e.getFrontConnectors().length>0||e.getBackConnectors().length>0){var i=e.getFrontConnectors().length>=e.getBackConnectors().length,g=i?e.getFrontConnectors():e.getBackConnectors();o=g.length,r=o+u(g),n=t*(r+1),e.setSize(l.getFlowDirection()===f.flow().VERTICAL?n:e.width,l.getFlowDirection()===f.flow().VERTICAL?e.height:n)}if(e.getRightConnectors().length>0||e.getLeftConnectors().length>0){var d=e.getRightConnectors().length>=e.getLeftConnectors().length,a=d?e.getRightConnectors():e.getLeftConnectors();o=a.length,r=o+u(a),n=t*(r+1),e.setSize(l.getFlowDirection()===f.flow().VERTICAL?e.width:n,l.getFlowDirection()===f.flow().VERTICAL?n:e.height)}},isInputConnectionAccepted:function(e,t){return e.getInputStyle().hasBack()&&0!=(t&f.nodeSide().BACK)||e.getInputStyle().hasFront()&&0!=(t&f.nodeSide().FRONT)||e.getInputStyle().hasLeft()&&0!=(t&f.nodeSide().LEFT)||e.getInputStyle().hasRight()&&0!=(t&f.nodeSide().RIGHT)},isOutputConnectionAccepted:function(e,t){return e.getOutputStyle().hasBack()&&0!=(t&f.nodeSide().BACK)||e.getOutputStyle().hasFront()&&0!=(t&f.nodeSide().FRONT)||e.getOutputStyle().hasLeft()&&0!=(t&f.nodeSide().LEFT)||e.getOutputStyle().hasRight()&&0!=(t&f.nodeSide().RIGHT)},createConnector:function(e,t,o,r){return r===f.portDirection().IN||r===f.portDirection().OUT?s(e,t,o,r):h(e,t,o,r)},adjustConnectors:function(e){L(e,e.getPortStep())},getMaxNodeWidth:function(e){for(var t=0,o=0;o<e.length;o++){var r=e[o].getWrapper();t=Math.max(t,r.width)}return t},getMaxNodeHeight:function(e){for(var t=0,o=0;o<e.length;o++){var r=e[o].getWrapper();t=Math.max(t,r.height)}return t},getMaxCellWidth:function(e){for(var t=0,o=0;o<e.length;o++)t=Math.max(t,e[o].width);return t},getMaxCellHeight:function(e){for(var t=0,o=0;o<e.length;o++)t=Math.max(t,e[o].height);return t}}});