function actionRouteBOG()
{chrome.tabs.query({active:true,currentWindow:true},function(tabs)
{chrome.tabs.sendMessage(tabs[0].id,{type:"route",data:{ResolverName:'SD-BOG-L2',Resolver:'c75419a88490200069627d6d71c8d102'}},function(response){});});}
function actionRouteBUD()
{chrome.tabs.query({active:true,currentWindow:true},function(tabs)
{chrome.tabs.sendMessage(tabs[0].id,{type:"route",data:{ResolverName:'SD-BUD-L2',Resolver:'4b5419a88490200069627d6d71c8d106'}},function(response){});});}
function actionRouteAMS()
{chrome.tabs.query({active:true,currentWindow:true},function(tabs)
{chrome.tabs.sendMessage(tabs[0].id,{type:"route",data:{ResolverName:'SD-AMS-L2',Resolver:'4754d5a88490200069627d6d71c8d1fe'}},function(response){});});}
function actionRouteCGB()
{chrome.tabs.query({active:true,currentWindow:true},function(tabs)
{chrome.tabs.sendMessage(tabs[0].id,{type:"route",data:{ResolverName:'SD-CGB',Resolver:'0467dfec042191c01ffc5b9ec842f1dd'}},function(response){});});}
function actionRouteSHA()
{chrome.tabs.query({active:true,currentWindow:true},function(tabs)
{chrome.tabs.sendMessage(tabs[0].id,{type:"route",data:{ResolverName:'SD-SHA',Resolver:'d4fb9a043c460a0090c1f40c6d564842'}},function(response){});});}
function actionInProgress()
{chrome.tabs.query({active:true,currentWindow:true},function(tabs)
{chrome.tabs.sendMessage(tabs[0].id,{type:"action",data:{State:2}},function(response){});});}
function actionSelfAssign()
{chrome.tabs.query({active:true,currentWindow:true},function(tabs)
{chrome.tabs.sendMessage(tabs[0].id,{type:"self",data:{State:2}},function(response){});});}
function actionReset()
{chrome.tabs.query({active:true,currentWindow:true},function(tabs)
{chrome.tabs.sendMessage(tabs[0].id,{type:"reset",data:{}},function(response){});});}
function actionAutoroute()
{chrome.tabs.query({active:true,currentWindow:true},function(tabs)
{chrome.tabs.sendMessage(tabs[0].id,{type:"autoroute",data:{}},function(response){});});}
document.getElementById('actionRouteBOG').addEventListener('click',actionRouteBOG);document.getElementById('actionRouteBUD').addEventListener('click',actionRouteBUD);document.getElementById('actionRouteAMS').addEventListener('click',actionRouteAMS);document.getElementById('actionRouteCGB').addEventListener('click',actionRouteCGB);document.getElementById('actionRouteSHA').addEventListener('click',actionRouteSHA);document.getElementById('actionInProgress').addEventListener('click',actionInProgress);document.getElementById('actionSelfAssign').addEventListener('click',actionSelfAssign);document.getElementById('actionReset').addEventListener('click',actionReset);document.getElementById('actionAutoroute').addEventListener('click',actionAutoroute);