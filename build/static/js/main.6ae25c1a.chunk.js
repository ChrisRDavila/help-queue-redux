(this["webpackJsonpweek-3-redux-starter-project"]=this["webpackJsonpweek-3-redux-starter-project"]||[]).push([[0],{19:function(e,t,n){e.exports=n(33)},24:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(2),c=n.n(r);n(24);var l=function(){return i.a.createElement("h1",null,"Help Queue")},o=n(11),s=n(12),u=n(18),m=n(17),d=n(13);var T=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{onSubmit:e.formSubmissionHandler},i.a.createElement("input",{type:"text",name:"names",placeholder:"Pair Names"}),i.a.createElement("input",{type:"text",name:"location",placeholder:"Location"}),i.a.createElement("textarea",{name:"issue",placeholder:"Describe your issue."}),i.a.createElement("button",{type:"submit"},e.buttonText)))},p=n(6),E=n.n(p);var k=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(T,{formSubmissionHandler:function(t){t.preventDefault(),e.onNewTicketCreation({names:t.target.names.value,location:t.target.location.value,issue:t.target.issue.value,id:Object(d.v4)(),timeOpen:new E.a,formattedWaitTime:(new E.a).fromNow(!0)})},buttonText:"Help!"}))};var f=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{onClick:function(){return e.whenTicketClicked(e.id)}},i.a.createElement("h3",null,e.location," - ",e.names),i.a.createElement("p",null,i.a.createElement("em",null,e.issue)),i.a.createElement("p",null,i.a.createElement("em",null,e.formattedWaitTime))),i.a.createElement("hr",null))};var h=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("hr",null),Object.values(e.ticketList).map((function(t){return i.a.createElement(f,{whenTicketClicked:e.onTicketSelection,names:t.names,location:t.location,issue:t.issue,formattedWaitTime:t.formattedWaitTime,id:t.id,key:t.id})})))};var g=function(e){var t=e.ticket,n=e.onClickingDelete;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"Ticket Detail"),i.a.createElement("h3",null,t.location," - ",t.names),i.a.createElement("p",null,i.a.createElement("em",null,t.issue)),i.a.createElement("button",{onClick:e.onClickingEdit},"Update Ticket"),i.a.createElement("button",{onClick:function(){return n(t.id)}},"Close Ticket"),i.a.createElement("hr",null))};var v=function(e){var t=e.ticket;return i.a.createElement(i.a.Fragment,null,i.a.createElement(T,{formSubmissionHandler:function(n){n.preventDefault(),e.onEditTicket({names:n.target.names.value,location:n.target.location.value,issue:n.target.issue.value,id:t.id,timeOpen:t.timeOpen,formattedWaitTime:t.formattedWaitTime})},buttonText:"Update Ticket"}))},b=n(3),O=function(e){return{type:"ADD_TICKET",names:e.names,location:e.location,issue:e.issue,id:e.id,formattedWaitTime:e.formattedWaitTime,timeOpen:e.timeOpen}},C=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).updateTicketElapsedWaitTime=function(){var e=a.props.dispatch;Object.values(a.props.masterTicketList).forEach((function(t){var n=t.timeOpen.fromNow(!0),a={type:"UPDATE_TIME",id:t.id,formattedWaitTime:n};e(a)}))},a.handleClick=function(){var e=a.props.dispatch;null!=a.state.selectedTicket?a.setState({selectedTicket:null,editing:!1}):e({type:"TOGGLE_FORM"})},a.handleAddingNewTicketToList=function(e){var t=a.props.dispatch;t(O(e)),t({type:"TOGGLE_FORM"})},a.handleChangingSelectedTicket=function(e){var t=a.props.masterTicketList[e];a.setState({selectedTicket:t})},a.handleDeletingTicket=function(e){(0,a.props.dispatch)(function(e){return{type:"DELETE_TICKET",id:e}}(e)),a.setState({selectedTicket:null})},a.handleEditClick=function(){a.setState({editing:!0})},a.handleEditingTicketInList=function(e){(0,a.props.dispatch)(O(e)),a.setState({editing:!1,selectedTicket:null})},a.state={selectedTicket:null,editing:!1},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.waitTimeUpdateTimer=setInterval((function(){return e.updateTicketElapsedWaitTime()}),6e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.waitTimeUpdateTimer)}},{key:"render",value:function(){var e=null,t=null;return this.state.editing?(e=i.a.createElement(v,{ticket:this.state.selectedTicket,onEditTicket:this.handleEditingTicketInList}),t="Return to Ticket List"):null!=this.state.selectedTicket?(e=i.a.createElement(g,{ticket:this.state.selectedTicket,onClickingDelete:this.handleDeletingTicket,onClickingEdit:this.handleEditClick}),t="Return to Ticket List"):this.props.formVisibleOnPage?(e=i.a.createElement(k,{onNewTicketCreation:this.handleAddingNewTicketToList}),t="Return to Ticket List"):(e=i.a.createElement(h,{ticketList:this.props.masterTicketList,onTicketSelection:this.handleChangingSelectedTicket}),t="Add Ticket"),i.a.createElement(i.a.Fragment,null,e,i.a.createElement("button",{onClick:this.handleClick},t))}}]),n}(i.a.Component),w=C=Object(b.b)((function(e){return{masterTicketList:e.masterTicketList,formVisibleOnPage:e.formVisibleOnPage}}))(C);var j=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,null),i.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=n(4),D=n(16),y=n(1),W=Object(L.a)({formVisibleOnPage:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_FORM":return!e;default:return e}},masterTicketList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.names,a=t.location,i=t.issue,r=t.id,c=t.formattedWaitTime,l=t.timeOpen;switch(t.type){case"ADD_TICKET":return Object.assign({},e,Object(y.a)({},r,{names:n,location:a,issue:i,id:r,timeOpen:l,formattedWaitTime:c}));case"UPDATE_TICKET_ISSUE":var o=Object.assign({},e,Object(y.a)({},r,Object.assign({},e[r],{issue:i})));return o;case"DELETE_TICKET":var s=Object(D.a)({},e);return delete s[r],s;case"UPDATE_TIME":var u=Object.assign({},e[r],{formattedWaitTime:c}),m=Object.assign({},e,Object(y.a)({},r,u));return m;default:return e}}}),S=Object(L.b)(W);c.a.render(i.a.createElement(b.a,{store:S},i.a.createElement(j,null)),document.getElementById("root")),S.subscribe((function(){return console.log(S.getState())})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.6ae25c1a.chunk.js.map