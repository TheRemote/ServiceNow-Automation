(function()
{var textColor="#000000";var backgroundColor="#acd5ba";var linkColor="#0000ff";var hoverColor="#82bfbf";function addGlobalStyle(css)
{var head,style;head=document.getElementsByTagName('head')[0];if(!head)
{return;}
style=document.createElement('style');style.type='text/css';style.innerHTML=css;head.appendChild(style);}
function addStyle(styleClass,css)
{var head,style;head=document.getElementsByTagName('head')[0];if(!head)
{return;}
style=document.createElement('style');style.type='text/css';style.innerHTML=css;style.class=styleClass;head.appendChild(style);}
function removeStyle(styleClass)
{var styleList;styleList=document.getElementsByClassName(styleClass);if(!styleList)
{return;}
var i;for(i=0;i<styleList.length;i++)
{styleList.remove();}}
function addDarkTheme()
{addStyle('dark','HTML[data-doctype=true] BODY { color: '+textColor+'; background-color: '+backgroundColor+';}');addStyle('dark','table, .table, .table td, .table th { color: '+linkColor+'; background-color: '+backgroundColor+';}');addStyle('dark','.container-fluid { color: '+textColor+'; background-color: '+backgroundColor+';}');addStyle('dark','.outputmsg, .outputmsg_info, .notification, .notification-info { color: '+textColor+'; background-color: '+backgroundColor+';}');addStyle('dark','.table > thead .table-btn-lg, .table td a.btn, .table th a.btn { color: '+linkColor+';}');addStyle('dark','.btn.disabled, .nav-segmented > li.disabled, .btn[disabled], .nav-segmented > li[disabled], fieldset[disabled] .btn, fieldset[disabled] .nav-segmented > li { opacity: 1.0;}');addStyle('dark','.form-control { color: '+textColor+'; background-color: '+backgroundColor+';}');addStyle('dark','.context_menu, .context_item { color: '+linkColor+'; background-color: '+backgroundColor+';}');addStyle('dark','.table.table-hover > tbody > tr:hover > td, .table.table-hover > tbody > tr:hover > th, .table.table-hover > tbody > tr.hover > td, .table.table-hover > tbody > tr.hover > th, .table.table-hover.table-striped.table-detail-row > tbody > tr:hover > td, .table.table-hover.table-striped.table-detail-row > tbody > tr:hover > th, .table.table-hover.table-striped.table-detail-row > tbody > tr.hover > td, .table.table-hover.table-striped.table-detail-row > tbody > tr.hover > th {background-color: '+hoverColor+' !important;}');addStyle('dark','.list_nav, .list_nav_top { color: '+linkColor+'; background-color: '+backgroundColor+';}');addStyle('dark','.popup { color: '+linkColor+'; background-color: '+backgroundColor+' !important;}');addStyle('dark','HTML[data-doctype=true] #hdr_task TH { color: '+textColor+'; background-color: '+backgroundColor+';}');addStyle('dark','HTML[data-doctype=true] INPUT.list_row_number_input { color: '+textColor+' !important;}');addStyle('dark','.navbar .navbar-title { color: '+linkColor+'; background-color: '+backgroundColor+';}');addStyle('dark','.navbar-default .navbar-text { color: '+linkColor+'; background-color: '+backgroundColor+';}');addStyle('dark','a:hover, a:focus { color: '+hoverColor+';}');addStyle('dark','.table td a, .table th a { color: '+linkColor+';}');addStyle('dark','.table > tr > td { padding-bottom: 1em; })');addStyle('dark','.table > tbody > tr > th, .table > tbody > tr {border-collapse: separate !important; border-width: 3px !important; font-weight: bold; color: '+textColor+';}');addStyle('dark','a, a:visited { color: '+linkColor+';}');addStyle('dark','TABLE.list_nav { margin-top: 2px !important;}');addStyle('dark','.breadcrumb_container { background-color: '+backgroundColor+';}');addStyle('dark','.table th[sort_dir=DESC] a, .table th[sort_dir=ASC] a { color: '+textColor+';}');addStyle('dark','HTML[data-doctype=true] SPAN.list_row_number_input { color: '+linkColor+'; background-color: '+backgroundColor+';}');addStyle('dark','html[data-doctype=true] TD.breadcrumb_container, html[data-doctype=true] TD.breadcrumb_container SPAN, html[data-doctype=true] DIV.breadcrumb_container { color: '+textColor+'; background-color: '+backgroundColor+';}');addStyle('dark','HTML[data-doctype=true] TR.list_header th, HTML[data-doctype=true] TR.list_header.hierarchical th.hierarchical, HTML[data-doctype=true] TR.list_header td { color: '+textColor+'; background-color: '+backgroundColor+';}');addStyle('dark','HTML[data-doctype=true] tr.list_even td, HTML[data-doctype=true] tr.list_odd td, HTML[data-doctype=true] .drag_section_header, HTML[data-doctype=true] SELECT:not([readonly="readonly"]) { color: '+textColor+'; background-color: '+backgroundColor+';}');}
function addTaskCSS()
{addGlobalStyle('HTML.date-both DIV.date-timeago { font-size: 90%; color: '+textColor+'; }');addGlobalStyle('DIV.date-calendar { font-size: 70%; }');addGlobalStyle('DIV.incSafe { font-size: 120%; border-style: solid; border-color: #00FF00;}');addGlobalStyle('DIV.incAttention { font-size: 120%; border-style: solid; border-color: #FFFF00;}');addGlobalStyle('DIV.incWarning { font-size: 120%; border-style: solid; border-color: #FFAA00;}');addGlobalStyle('DIV.incCritical { font-size: 120%; border-style: solid; border-color: #FF0000;}');addGlobalStyle('DIV.incMisroute { font-size: 120%; border-style: solid; border-color: #0000FF;}');addGlobalStyle('TR.incSafe { border-style: solid !important; border-color: #00FF00 !important;}');addGlobalStyle('TR.incAttention { border-style: solid !important; border-color: #FFFF00 !important;}');addGlobalStyle('TR.incWarning { border-style: solid !important; border-color: #FFAA00 !important;}');addGlobalStyle('TR.incCritical { border-style: solid !important; border-color: #FF0000 !important;}');addGlobalStyle('TR.incMisroute { border-style: solid !important; border-color: #0000FF !important;}');}
function addRefreshTimer()
{function timerPause()
{var refreshDiv=document.getElementById("refreshtime");if(refreshDiv.textContent==="Paused")
{refreshDiv.textContent="30";}
else
{refreshDiv.textContent="Paused";}}
var para=document.createElement("div");para.className="navbar-title list_title";var node=document.createTextNode("Enhanced Dashboard - Amgen - by James A. Chambers  ");para.appendChild(node);var element=document.getElementsByClassName("container-fluid");element[0].appendChild(para);var autorefresh=document.createElement("div");autorefresh.className="navbar-title list_title";autorefresh.id="autorefresh";para=document.createElement("i");para.className="pointerhand icon-stop-watch btn-lg";para.addEventListener("click",timerPause,true);autorefresh.appendChild(para);node=document.createTextNode("Auto-Refresh in:");node.className="navbar-title list_title";autorefresh.appendChild(node);para=document.createElement("div");para.id="refreshtime";para.className="navbar-title list_title";node=document.createTextNode("30");node.className="navbar-title list_title";para.appendChild(node);element[0].appendChild(autorefresh);element[0].appendChild(para);(function countdown(remaining)
{var refresh=document.getElementById('refreshtime');if(refresh.textContent==="Paused")
{setTimeout(function()
{countdown(30);},1000);}
else
{if(remaining===0)
{var list=GlideList2.getByName('sc_task');list._refreshAjax(list.firstRow,{},true);}
if(remaining<0)
{if(refresh.textContent==='30')
{remaining=30;}}
if(remaining<-30)
{location.reload(true);refresh.textContent="Reload";return;}
setTimeout(function()
{countdown(remaining-1);},1000);if(remaining>=0)
refresh.textContent=remaining;}})(30);}
function setUpdatedTimeColors()
{var numTasks=0;var list=GlideList2.getByName('sc_task');numTasks=list.grandTotalRows;var rows=list.table.getElementsBySelector('tr.list_row');var sys_id;for(var i=0;i<rows.length;i++)
{sys_id=rows[i].getAttribute('sys_id');var error=false;try
{var opened_by=list.getCell(sys_id,'opened_by').innerText;}
catch(e)
{var opened_by='';error=true;console.log(e);}
var task_number=list.getCell(sys_id,'number').innerText;try
{var opened=list.getCell(sys_id,'opened_at').innerText;}
catch(e)
{var opened='';error=true;console.log(e);}
try
{var short_description=list.getCell(sys_id,'short_description').innerText.toUpperCase();}
catch(e)
{var short_description='';error=true;console.log(e);}
try
{var resolver=list.getCell(sys_id,'assignment_group').innerText;}
catch(e)
{var resolver='';error=true;console.log(e);}
if(error==true)
{console.log("Please enable 'Caller Contact Type', 'Updated', 'Opened', 'Affected Person', 'Assigned To', 'Submitted By', 'Resolver Group, 'State' in your filter");return;}
var highlight=false;if(resolver=='MISROUTE')
{rows[i].className+=' incMisroute';}
if(checkRoute(short_description)===true)
{var icon=document.createElement("i");icon.className="icon-workflow-approved";var cell=list.getCell(sys_id,'short_description');cell.insertBefore(icon,cell.firstChild);}}
var taskCountDiv=document.getElementById("taskCount");taskCountDiv.textContent=numTasks.toString();}
function recloned()
{setUpdatedTimeColors();var refresh=document.getElementById('refreshtime');refresh.textContent='30';console.log("reclone");}
CustomEvent.observe('list2_init',recloned);addEventListener('message',function(request)
{console.log("Task List Script: Message received from postMessage "+request.data.type);if(request.data&&request.data.data)
{if(request.data.type=="optionsTask")
{backgroundColor=request.data.data.colorBackground;textColor=request.data.data.colorText;linkColor=request.data.data.colorLink;hoverColor=request.data.data.colorHover;console.log("Options received");addDarkTheme();addTaskCSS();addRefreshTimer();setUpdatedTimeColors();}
else
{}}});})();