var s=document.createElement('script');s.src=chrome.extension.getURL('autoroute.js');s.onload=function()
{this.parentNode.removeChild(this);};(document.head||document.documentElement).appendChild(s);var s=document.createElement('script');s.src=chrome.extension.getURL('task-script.js');s.onload=function()
{this.parentNode.removeChild(this);};(document.head||document.documentElement).appendChild(s);chrome.runtime.onMessage.addListener(function(request,sender,sendResponse)
{console.log('Task Content: Message posted');postMessage(request,'*');});