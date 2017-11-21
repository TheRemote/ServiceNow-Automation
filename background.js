var incCount=0;var taskCount=0;var lastUpdate=0;var lastUpdateTask=0;chrome.extension.onMessage.addListener(function(request,sender,sendResponse)
{switch(request.type)
{case"update":{var incNew=request.data.incCount-incCount;if(request.data.checkNotifications==true&&incNew>0&&request.data.incCount>incCount)
{function incNotification()
{var opt={type:"basic",title:"New Incidents",message:String(incNew)+" new incidents ("+request.data.incCount+" total not in progress)",iconUrl:"sn_38.png"}
chrome.notifications.create("incnotification",opt,function(){});setTimeout(function()
{chrome.notifications.clear("incnotification",function(){});},8000);}
incNotification();}
incCount=request.data.incCount;chrome.browserAction.setBadgeText({text:String(incCount)+' INC'});lastUpdate=Date.now();}
break;case"updateTask":{var taskNew=request.data.taskCount-taskCount;if(request.data.checkNotifications==true&&taskNew>0&&request.data.taskCount>taskCount)
{function taskNotification()
{var opt={type:"basic",title:"New Tasks",message:String(taskNew)+" new tasks ("+request.data.taskCount+" total not in progress)",iconUrl:"sn_38.png"}
chrome.notifications.create("taskNotification",opt,function(){});setTimeout(function()
{chrome.notifications.clear("taskNotification",function(){});},8000);}
taskNotification();}
taskCount=request.data.taskCount;chrome.browserAction.setBadgeText({text:String(taskCount)+' TSK'});lastUpdateTask=Date.now();}
break;case"route":chrome.tabs.query({active:true,currentWindow:true},function(tabs)
{chrome.tabs.sendMessage(tabs[0].id,request,function(response){});});break;case"optionsTask":{chrome.tabs.query({url:"https://amgen.service-now.com/sc_task_list.do*"},function(tabs)
{var i=0;for(i=0;i<tabs.length;i++)
{chrome.tabs.sendMessage(tabs[i].id,{type:"optionsTask",data:{colorBackground:request.data.colorBackground,colorText:request.data.colorText,colorLink:request.data.colorLink,colorHover:request.data.colorHover}},function(response){});}});chrome.tabs.query({url:"https://amgentrain.service-now.com/sc_task_list.do*"},function(tabs)
{var i=0;for(i=0;i<tabs.length;i++)
{chrome.tabs.sendMessage(tabs[i].id,{type:"optionsTask",data:{colorBackground:request.data.colorBackground,colorText:request.data.colorText,colorLink:request.data.colorLink,colorHover:request.data.colorHover}},function(response){});}});}
break;case"optionsIncident":{chrome.tabs.query({url:"https://amgen.service-now.com/incident_list.do*"},function(tabs)
{var i=0;for(i=0;i<tabs.length;i++)
{chrome.tabs.sendMessage(tabs[i].id,{type:"optionsIncident",data:{colorBackground:request.data.colorBackground,colorText:request.data.colorText,colorLink:request.data.colorLink,colorHover:request.data.colorHover}},function(response){});}});chrome.tabs.query({url:"https://amgentrain.service-now.com/incident_list.do*"},function(tabs)
{var i=0;for(i=0;i<tabs.length;i++)
{chrome.tabs.sendMessage(tabs[i].id,{type:"optionsIncident",data:{colorBackground:request.data.colorBackground,colorText:request.data.colorText,colorLink:request.data.colorLink,colorHover:request.data.colorHover}},function(response){});}});}
break;case"chatNew":{var notifySound=new Audio('notify.mp3');notifySound.play();var notifyNewChat={type:"basic",title:"New Chat",message:"A new chat is waiting in Service-Now",iconUrl:"sn_38.png"}
chrome.notifications.create("notifyNewChat",notifyNewChat,function(){});setTimeout(function()
{chrome.notifications.clear("notifyNewChat",function(){});},8000);}
break;case"chatdisconnected":{}
break;}});var i=0;window.setInterval(function()
{var timeDifferenceInc=Date.now()-lastUpdate;var timeDifferenceTask=Date.now()-lastUpdateTask;if(timeDifferenceInc>10000&&timeDifferenceTask>10000)
{chrome.browserAction.setBadgeText({text:''});}
i++;},2000);