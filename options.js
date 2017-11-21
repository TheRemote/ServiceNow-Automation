function actionBackgroundColor()
{saveOptions();}
function actionTextColor()
{saveOptions();}
function actionLinkColor()
{saveOptions();}
function actionHoverColor()
{saveOptions();}
function saveOptions()
{console.log(document.getElementById('background-color').value);console.log(document.getElementById('text-color').value);console.log(document.getElementById('link-color').value);console.log(document.getElementById('hover-color').value);chrome.storage.sync.set({'colorBackground':document.getElementById('background-color').value,'colorText':document.getElementById('text-color').value,'colorLink':document.getElementById('link-color').value,'colorHover':document.getElementById('hover-color').value},function(obj)
{chrome.runtime.sendMessage({type:"options",data:{colorBackground:document.getElementById('background-color').value,colorText:document.getElementById('text-color').value,colorLink:document.getElementById('link-color').value,colorHover:document.getElementById('hover-color').value}},function(response){});console.log("Color saved");});}
document.getElementById('background-color').addEventListener('change',actionBackgroundColor);document.getElementById('text-color').addEventListener('change',actionTextColor);document.getElementById('link-color').addEventListener('change',actionLinkColor);document.getElementById('hover-color').addEventListener('change',actionHoverColor);chrome.storage.sync.get({'colorBackground':'#acd5ba','colorText':'#000000','colorLink':'#0000ff','colorHover':'#82bfbf'},function(obj)
{document.getElementById('background-color').value=obj.colorBackground;document.getElementById('text-color').value=obj.colorText;document.getElementById('link-color').value=obj.colorLink;document.getElementById('hover-color').value=obj.colorHover;});