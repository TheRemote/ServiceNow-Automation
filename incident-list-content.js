var checkNotifications=false;var colorBackground='#acd5ba';var colorText='#000000';var colorLink='#0000ff';var colorHover='#82bfbf';var incidentDiv=document.createElement("div");incidentDiv.id="incidentCount";incidentDiv.style.visibility="hidden";var node=document.createTextNode(" ");incidentDiv.appendChild(node);document.body.appendChild(incidentDiv);var s=document.createElement('script');s.src=chrome.extension.getURL('autoroute.js');s.onload=function()
{this.parentNode.removeChild(this);};(document.head||document.documentElement).appendChild(s);var s=document.createElement('script');s.src=chrome.extension.getURL('incident-list-script.js');s.onload=function()
{this.parentNode.removeChild(this);};(document.head||document.documentElement).appendChild(s);chrome.runtime.onMessage.addListener(function(request,sender,sendResponse)
{console.log('Content Incident List: Message received and posted');postMessage(request,'*');});console.log("Loading settings");chrome.storage.sync.get({'checkNotifications':checkNotifications,'colorBackground':'#acd5ba','colorText':'#000000','colorLink':'#0000ff','colorHover':'#82bfbf',},function(obj)
{colorBackground=obj.colorBackground;colorText=obj.colorText;colorLink=obj.colorLink;colorHover=obj.colorHover;chrome.runtime.sendMessage({type:"optionsIncident",data:{'colorBackground':colorBackground,'colorText':colorText,'colorLink':colorLink,'colorHover':colorHover}});});var i=0;window.setInterval(function()
{chrome.runtime.sendMessage({type:"update",data:{incCount:incidentDiv.textContent,checkNotifications:checkNotifications}});i++;},1000);