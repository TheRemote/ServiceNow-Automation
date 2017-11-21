(function()
{var oldResolver=g_form.getValue("incident.assignment_group");var oldResolverDisplay=g_form.getDisplayBox("incident.assignment_group").value;var oldCategory=g_form.getValue("incident.category");var oldSubCategory=g_form.getValue("incident.subcategory");var oldSubCategoryType=g_form.getValue("incident.u_subcategory_type");function routeTicket(request)
{var incNumber=g_form.getValue('number');var rec=new GlideRecord('incident');rec.addQuery('number',incNumber);rec.query();while(rec.next())
{if(rec.state==1)
{rec.state=9;rec.work_notes="In Progress";rec.update();rec.state=2;rec.assignment_group=request.data.data.Resolver;rec.work_notes="Routing ticket";rec.update();}
else
{rec.state=2;rec.assignment_group=request.data.data.Resolver;rec.work_notes="Routing ticket";rec.update();}}}
function actionTicket(request)
{var incNumber=g_form.getValue('number');var rec=new GlideRecord('incident');rec.addQuery('number',incNumber);rec.query();while(rec.next())
{if(rec.state==1)
{rec.state=9;rec.update();rec.impact=3;rec.urgency=3;rec.state=2;rec.work_notes="In Progress";rec.update();}
else
{rec.state=2;rec.work_notes="In Progress";rec.update();}}}
function actionSelfAssign(request)
{var incNumber=g_form.getValue('number');var rec=new GlideRecord('incident');rec.addQuery('number',incNumber);rec.query();while(rec.next())
{if(rec.state==1)
{rec.assignment_group='875419a88490200069627d6d71c8d118';rec.assigned_to=NOW.user_id;rec.state=9;rec.update();rec.impact=3;rec.urgency=3;rec.state=2;rec.work_notes="In Progress";rec.update();}
else
{rec.state=2;rec.assignment_group='875419a88490200069627d6d71c8d118';rec.assigned_to=NOW.user_id;rec.work_notes="In Progress";rec.update();}}}
function actionReset()
{g_form.setValue("incident.assignment_group",oldResolver,oldResolverDisplay);g_form.setValue("incident.category",oldCategory);g_form.setValue("incident.subcategory",oldSubCategory);g_form.setValue("incident.u_subcategory_type",oldSubCategoryType);}
function actionAutoroute()
{Autoroute(false);}
addEventListener('message',function(request)
{console.log("Incident Script message received from postMessage "+request);if(request.data&&request.data.data)
{if(request.data.type=="route")
{if(confirm("Route to "+request.data.data.ResolverName+"?"))
{routeTicket(request);}}
else if(request.data.type=="action")
{if(confirm("Put ticket into 'In Progress' state?"))
{actionTicket(request);}}
else if(request.data.type=="self")
{if(confirm("Assign to self and put In-Progress?"))
{actionSelfAssign(request);}}
else if(request.data.type=="reset")
{if(confirm("Reset Form?"))
{actionReset();}}
else if(request.data.type=="autoroute")
{actionAutoroute();}}});var _window_confirm=window.confirm;window.confirm=function(message,caption)
{if(message.startsWith("Changing the Category ")==true)
{console.log("Window confirm intercepted - "+message+" - "+caption);return true;}
else if(message.startsWith("Changing the Sub")==true)
{console.log("Window confirm intercepted - "+message+" - "+caption);return true;}
else if(message.startsWith(NOW.user.name)==true)
{console.log("Window confirm intercepted - "+message+" - "+caption);return true;}
else if(message.startsWith("Changing the CI ")==true)
{console.log("Window confirm intercepted - "+message+" - "+caption);return true;}
return _window_confirm(message,caption);};setTimeout(function()
{var incState=g_form.getValue("incident.state");if(incState==1&&oldResolverDisplay=="Service Desk")
{Autoroute(false);}},100);})();