var s=document.createElement('script');s.src=chrome.extension.getURL('chat-script.js');s.onload=function()
{this.parentNode.removeChild(this);};(document.head||document.documentElement).appendChild(s);chrome.runtime.onMessage.addListener(function(request,sender,sendResponse)
{console.log('Chat Content: Message posted');postMessage(request,'*');});addEventListener('message',function(request)
{console.log("Chat Content: message received from postMessage "+request);if(request.data&&request.data.data)
{if(request.data.type=="chatNew")
{chrome.runtime.sendMessage({type:"chatNew",data:{}},function(response){});}}});