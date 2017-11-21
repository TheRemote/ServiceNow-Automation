# ServiceNow-Automation

A Google Chrome extension with tools to automate many ServiceNow ticket tasks performed by agents.

Every ServiceNow implementation is different so don't expect to be able to drop this extension right in.  To use it will require modifications specific to your implementation of ServiceNow.

This tool was developed using the Chrome Developer Tools (Ctrl+Shift+I) to get fields and ids you will need to make the tool work.  I do not recommend even attempting to use this unless you are a fairly experienced web developer.

# Disclaimer

I am in no way affiliated with ServiceNow.  This is simply a suite of assisting and automation tools I developed when I was an agent for a large multinational corporation that handled thousands of tickets per day.  All trademarks and intellectual property are owned solely by ServiceNow.  This tool is simply a easy way to fill out some of the fields within the webpage to save agents/technicians a lot of time.

If you attempt to develop your own version of this tool you should use your test environment and not a live server.

# Features

<ul>
  <li>Ticket Autopopulation - Uses regular expressions (RegEx) to search ticket subject and text for common issues and presents a dialog to populate the ticket based on potential matches</li>
  <li>Chat notifications (sound and notification bubble) - Pops up a Google Chrome notification bubble when new chats are received and plays a sound</li>
  <li>Autorefresh & Notifications - Automatically refreshes incident and task lists and pops up a notification bubble when new ones appear</li>
  <li>One-click Routing - Allows you to put a ticket into the "In Progress" state and send it to a resolver group without filling out any fields (useful for routing to yourself to fill out later or foreign language resolvers)</li>
  <li>SLA monitoring - Incident list uses color coding going from Green to Orange to Red based on how close to SLA the ticket is</li>
  <li>Popup Menu - Programmable pop-up menu with quick functions to help agents perform tasks quickly</li>
</ul>

# Configuration - Getting Started

You will need to update the URLs in the manifest and the files.  By default they are *.servicenow.com*.  If you do not update the manifest before creating a Google extension Google will not run the code on any of the pages as the correct URLs are required in the manifest for any code to execute.

# Configuration - Autorouting with RegEx

To handle the most common tickets we use regular expressions to search the tickets for common issues.  This is done in an array located in autoroute.js.  Here is an example:
```
  {
    RegEx: ".*\\b(BOX|APP-BOX.COM|APP-BOX|BOX.COM)\\b.*",
    CI: "Box External File Sharing-PROD",
    Resolver: "APP-BOX.COM",
    Category: "application",
    SubCategory: "enterprise",
    SubCategoryType: "configure",
    INCCategory: "application",
    INCSubCategory: "configuration_error_single",
    INCSubCategoryType: "other_single",
    KB: "Attached Knowledge article:  [code]<a href='https://*.service-now.com/kb_view.do?sys_kb_id=909764ae8746f000297afb49c9434da6'>KB0018582</a>[/code]"
    Notice: "All Box issues should go to the Box resolver group"
    Label: "Box File Sharing Service"
  }
```

In this example we are looking for tickets submitted about the popular Box file sharing service.  The first line is the RegEx line and looks for Box, App-Box, Box.com, etc.  You can search for as many keywords as you want to and can use more advanced regular expressions to get fairly accurate results.

When you open up a ticket the extension will search the ticket and present possible matches at the top as little bubbles.  The agent/technician can then click the correct bubble.  If none of the bubbles match then no action is taken and you can fill out the ticket normally.

If a bubble is pressed the CI is filled in, all categories are selected, the relevant KB is attached, and the ticket is ready for review.  Nothing is saved until you submit the ticket.

You may also use the optional "Notice" and "Label" fields to provide specific labeling and instructions to the technician to help reduce routing errors.
