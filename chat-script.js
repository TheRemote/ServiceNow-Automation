var chatNew=function()
{postMessage({type:"chatNew",data:{}},'*');var date=new Date();document.title="Chats - Last at "+date.toLocaleTimeString();console.log("New chat was received - message sent to background script");};var chatDisconnected=function()
{console.log("Wowza, we got the disconnected event");};CustomEvent.observe(LiveEvents.NOTIFY_AUDIO_QUEUE_BEEP,chatNew);CustomEvent.observe(LiveEvents.MUX_DISCONNECTED,chatDisconnected);addEventListener('message',function(request)
{console.log("Chat Script: message received from postMessage "+request);if(request.data&&request.data.data)
{if(request.data.type=="chatNew")
{}
else
{chatNew();}}});