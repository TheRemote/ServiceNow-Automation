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
{addStyle('dark','HTML[data-doctype=true] BODY { color: '+textColor+'; background-color: '+backgroundColor+';}');addStyle('dark','table, .table, .table td, .table th { color: '+linkColor+'; background-color: '+backgroundColor+';}');addStyle('dark','.container-fluid { color: '+textColor+'; background-color: '+backgroundColor+';}');addStyle('dark','.outputmsg, .outputmsg_info, .notification, .notification-info { color: '+textColor+'; background-color: '+backgroundColor+';}');addStyle('dark','.table > thead .table-btn-lg, .table td a.btn, .table th a.btn { color: '+linkColor+';}');addStyle('dark','.btn.disabled, .nav-segmented > li.disabled, .btn[disabled], .nav-segmented > li[disabled], fieldset[disabled] .btn, fieldset[disabled] .nav-segmented > li { opacity: 1.0;}');addStyle('dark','.form-control { color: '+textColor+'; background-color: '+backgroundColor+';}');addStyle('dark','.context_menu, .context_item { color: '+linkColor+'; background-color: '+backgroundColor+';}');addStyle('dark','.table.table-hover > tbody > tr:hover > td, .table.table-hover > tbody > tr:hover > th, .table.table-hover > tbody > tr.hover > td, .table.table-hover > tbody > tr.hover > th, .table.table-hover.table-striped.table-detail-row > tbody > tr:hover > td, .table.table-hover.table-striped.table-detail-row > tbody > tr:hover > th, .table.table-hover.table-striped.table-detail-row > tbody > tr.hover > td, .table.table-hover.table-striped.table-detail-row > tbody > tr.hover > th {background-color: '+hoverColor+' !important;}');addStyle('dark','.list_nav, .list_nav_top { color: '+linkColor+'; background-color: '+backgroundColor+';}');addStyle('dark','.popup { color: '+linkColor+'; background-color: '+backgroundColor+' !important;}');addStyle('dark','HTML[data-doctype=true] #hdr_incident TH { color: '+textColor+'; background-color: '+backgroundColor+';}');addStyle('dark','HTML[data-doctype=true] INPUT.list_row_number_input { color: '+textColor+' !important;}');addStyle('dark','.navbar .navbar-title { color: '+linkColor+'; background-color: '+backgroundColor+';}');addStyle('dark','.navbar-default .navbar-text { color: '+linkColor+'; background-color: '+backgroundColor+';}');addStyle('dark','a:hover, a:focus { color: '+hoverColor+';}');addStyle('dark','.table td a, .table th a { color: '+linkColor+';}');addStyle('dark','.table > tr > td { padding-bottom: 1em; })');addStyle('dark','.table > tbody > tr > th, .table > tbody > tr {border-collapse: separate !important; border-width: 3px !important; font-weight: bold; color: '+textColor+';}');addStyle('dark','a, a:visited { color: '+linkColor+';}');addStyle('dark','TABLE.list_nav { margin-top: 2px !important;}');addStyle('dark','.breadcrumb_container { background-color: '+backgroundColor+';}');addStyle('dark','.table th[sort_dir=DESC] a, .table th[sort_dir=ASC] a { color: '+textColor+';}');addStyle('dark','HTML[data-doctype=true] SPAN.list_row_number_input { color: '+linkColor+'; background-color: '+backgroundColor+';}');addStyle('dark','html[data-doctype=true] TD.breadcrumb_container, html[data-doctype=true] TD.breadcrumb_container SPAN, html[data-doctype=true] DIV.breadcrumb_container { color: '+textColor+'; background-color: '+backgroundColor+';}');addStyle('dark','HTML[data-doctype=true] TR.list_header th, HTML[data-doctype=true] TR.list_header.hierarchical th.hierarchical, HTML[data-doctype=true] TR.list_header td { color: '+textColor+'; background-color: '+backgroundColor+';}');addStyle('dark','HTML[data-doctype=true] tr.list_even td, HTML[data-doctype=true] tr.list_odd td, HTML[data-doctype=true] .drag_section_header, HTML[data-doctype=true] SELECT:not([readonly="readonly"]) { color: '+textColor+'; background-color: '+backgroundColor+';}');}
function addIncidentCSS()
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
{var list=GlideList2.getByName('incident');list._refreshAjax(1,{},true);}
if(remaining<0)
{if(refresh.textContent==='30')
{remaining=30;}}
if(remaining<-30)
{location.reload(true);refresh.textContent="Reload";return;}
setTimeout(function()
{countdown(remaining-1);},1000);if(remaining>=0)
refresh.textContent=remaining;}})(30);}
function setUpdatedTimeColors()
{var numIncidents=0;var list=GlideList2.getByName('incident');var rows=list.table.getElementsBySelector('tr.list_row');var sys_id;for(var i=0;i<rows.length;i++)
{sys_id=rows[i].getAttribute('sys_id');var error=false;try
{var u_affected_person=list.getCell(sys_id,'u_affected_person').innerText;}
catch(e)
{var u_affected_person='';error=true;console.log(e);}
try
{var opened_by=list.getCell(sys_id,'opened_by').innerText;}
catch(e)
{var opened_by='';error=true;console.log(e);}
try
{var contact_type=list.getCell(sys_id,'contact_type').innerText;}
catch(e)
{var contact_type='';error=true;console.log(e);}
var incident_number=list.getCell(sys_id,'number').innerText;try
{var u_affected_person_location=list.getCell(sys_id,'u_affected_person.location').innerText;}
catch(e)
{var u_affected_person_location='';console.log(e);}
try
{var opened=list.getCell(sys_id,'opened_at').innerText;}
catch(e)
{var opened='';error=true;console.log(e);}
try
{var updated=list.getCell(sys_id,'sys_updated_on').innerText;}
catch(e)
{var updated='';error=true;console.log(e);}
try
{var short_description=list.getCell(sys_id,'short_description').innerText;}
catch(e)
{var short_description='';error=true;console.log(e);}
try
{var state=list.getCell(sys_id,'state').innerText;}
catch(e)
{var state='';error=true;console.log(e);}
try
{var resolver=list.getCell(sys_id,'assignment_group').innerText;}
catch(e)
{var resolver='';error=true;console.log(e);}
try
{var assigned_to=list.getCell(sys_id,'assigned_to').innerText;}
catch(e)
{var assigned_to='';console.log(e);}
if(error==true)
{console.log("Please enable 'Caller Contact Type', 'Updated', 'Opened', 'Affected Person', 'Assigned To', 'Submitted By', 'Resolver Group, 'State' in your filter");return;}
var highlight=false;if(resolver=='MISROUTE'||resolver=='MISDIRECT')
{numIncidents++;rows[i].className+=' incMisroute';highlight=false;}
else if(contact_type==='Phone')
{var cell=list.getCell(sys_id,'contact_type');var icon=document.createElement("i");if(opened_by===u_affected_person)
{if(state=='In Progress'&&assigned_to=='')
{numIncidents++;rows[i].className+=' incMisroute';}
else
{cell.innerHTML='<s>Phone</s>Self-Service';icon.className="icon-livefeed";cell.insertBefore(icon,cell.firstChild);highlight=true;}}
else
{icon.className="icon-phone";cell.insertBefore(icon,cell.firstChild);if(state=='In Progress'&&assigned_to=='')
{numIncidents++;rows[i].className+=' incMisroute';}
highlight=false;}}
else if(contact_type==='Self-Service')
{var icon=document.createElement("i");icon.className="icon-livefeed";var cell=list.getCell(sys_id,'contact_type');cell.insertBefore(icon,cell.firstChild);highlight=true;}
else if(contact_type==='Chat')
{var icon=document.createElement("i");icon.className="icon-user-profile";var cell=list.getCell(sys_id,'contact_type');cell.insertBefore(icon,cell.firstChild);}
else if(contact_type==='Email')
{var icon=document.createElement("i");icon.className="icon-envelope-open";var cell=list.getCell(sys_id,'contact_type');cell.insertBefore(icon,cell.firstChild);}
if(highlight==true)
{if(state=='In Progress')
{highlight=false;}
else if(state=='New'||state=='Assigned')
{}
else
{highlight=false;}}
if(checkRoute(short_description.toUpperCase())===true)
{var icon=document.createElement("i");icon.className="icon-workflow-approved";var cell=list.getCell(sys_id,'short_description');cell.insertBefore(icon,cell.firstChild);}
if(highlight==true)
{numIncidents++;var timeSplit=opened.split("\n")[1].split(" ");if(timeSplit[0]=="just")
{rows[i].className+=" incSafe";}
else
{if(timeSplit[0].endsWith("m")==true)
{var timeMinutes=timeSplit[0].split("m");timeMinutes=timeMinutes[0];if(timeMinutes<9)
{rows[i].className+=" incSafe";}
else if(timeMinutes<18)
{rows[i].className+=" incAttention";}
else if(timeMinutes<25)
{rows[i].className+=" incWarning";}
else if(timeMinutes<60)
{rows[i].className+=" incCritical";}
else
{rows[i].className+=" incCritical";}}
else
{rows[i].className+=" incCritical";}}}}
var incidentCountDiv=document.getElementById("incidentCount");incidentCountDiv.textContent=numIncidents.toString();}
function recloned()
{var refresh=document.getElementById('refreshtime');refresh.textContent='30';console.log("reclone");setTimeout(function()
{setUpdatedTimeColors();},200);}
CustomEvent.observe('list2_init',recloned);addEventListener('message',function(request)
{console.log("Incident List Script: Message received from postMessage "+request.data.type);if(request.data&&request.data.data)
{if(request.data.type=="optionsIncident")
{backgroundColor=request.data.data.colorBackground;textColor=request.data.data.colorText;linkColor=request.data.data.colorLink;hoverColor=request.data.data.colorHover;console.log("Options received");addDarkTheme();addIncidentCSS();addRefreshTimer();setUpdatedTimeColors();}
elsec
{}}});})();