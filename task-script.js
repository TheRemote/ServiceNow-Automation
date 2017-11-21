var oldResolver=g_form.getValue("sc_task.assignment_group");var oldResolverDisplay=g_form.getDisplayBox("sc_task.assignment_group").value;var oldCategory=g_form.getValue("sc_task.category");var oldSubCategory=g_form.getValue("sc_task.subcategory");var oldSubCategoryType=g_form.getValue("sc_task.u_subcategory_type");if(oldResolverDisplay=="Service Desk")
{setTimeout(function()
{Autoroute(true);},100);}
function routeTicket(request)
{var numTask=g_form.getValue('number');var rec=new GlideRecord('sc_task');rec.addQuery('number',numTask);rec.query();while(rec.next())
{rec.assignment_group=request.data.data.Resolver;rec.work_notes="Routing ticket";rec.update();}}
function actionSelfAssign(request)
{var numTask=g_form.getValue('number');var rec=new GlideRecord('sc_task');rec.addQuery('number',numTask);rec.query();while(rec.next())
{rec.assignment_group='875419a88490200069627d6d71c8d118';rec.assigned_to=NOW.user_id;rec.update();}
g_form.setValue("sc_task.assigned_to",NOW.user_id,NOW.user_display_name);Autorouting=false;}
function actionReset()
{g_form.setValue("sc_task.assignment_group",oldResolver,oldResolverDisplay);g_form.setValue("sc_task.category",oldCategory);g_form.setValue("sc_task.subcategory",oldSubCategory);g_form.setValue("sc_task.u_subcategory_type",oldSubCategoryType);}
function actionAutoroute()
{Autoroute(true);}
addEventListener('message',function(request)
{console.log("Task Script: message received from postMessage "+request);if(request.data&&request.data.data)
{if(request.data.type=="route")
{if(confirm("Route to "+request.data.data.ResolverName+"?"))
{routeTicket(request);}}
else if(request.data.type=="self")
{if(confirm("Assign to self and put In-Progress?"))
{actionSelfAssign(request);}}
else if(request.data.type=="reset")
{if(confirm("Reset Form?"))
{actionReset();}}
else if(request.data.type=="autoroute")
{actionAutoroute();}}});