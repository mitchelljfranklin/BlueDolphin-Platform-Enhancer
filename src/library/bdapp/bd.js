
//Main Window Loaded - Check to see if this is a new version of the extension and is so advise of whats changed
document.arrive(".draftsnavbar__input", function (mainWindow) {
 
  updatenotificationCheck(mainWindow)

});


//Add Custom Buttons to the NavBar for Actions
    //Main Nav
      //1: Copy Current URL Button
      //2: Reload Page Button
    //Side Nav
      //1: BlueDolphin ShortCuts
document.arrive(".draftsnavbar--sharedusers", function (viewnavBar) {
  var barloaded = document.getElementById("ext_copyView");

  if (!barloaded) {
    var buttonBar = document.getElementsByClassName("draftsnavbar--itemgroup");
    buttonBar[0].insertAdjacentHTML(
      "beforeend",
      '<div id="ext_copyView" class="draftsnavbar--item ember-view"><div class="iconwrapper" style="display:flex;height:100%">\
    <i class="fa fa-clipboard" title="Copy Current View URL" style="margin:auto;line-height:40px;"></i>\
  </div>\
  </div>\
  <div id="ext_reload" class="draftsnavbar--item ember-view"><div class="iconwrapper" style="display:flex;height:100%">\
  <i class="fa fa-refresh" title="Reload Page" style="margin:auto;line-height:40px;"></i>'
    );
    buttonBar[1].insertAdjacentHTML(
      "beforeend",
      '<div id="ext_shortCuts" class="draftsnavbar--item ember-view"><div class="iconwrapper" style="display:flex;height:100%">\
  <i class="fa fa-keyboard-o" title="BD ShortCuts" style="margin:auto;line-height:40px;"></i>'
    );

  }
});


//Add in a reminder to the Busiess Process Modal Creation Modal that you need to create it in Objects First
document.arrive(".create-new-bpmn", function (bpmModal) {
  var bpmTitle = document.getElementById("bpmReminder");
  if (!bpmTitle) {
    bpmModal.children[0].children[0].insertAdjacentHTML(
      "beforeend",
      '<label id="bpmReminder"><b style="color:#FF0000";>Reminder:</b> BPM views need to be created in objects first</label>'
    );
  }
});



//Add buttons to the 3 dot context menu on the main bar
document.arrive(".context-menu-button", function (contextMenu) {
  //Copy Current URL
  contextMenu.children[0].insertAdjacentHTML(
    "beforeend",
    '<li id="ext_contextcopy" class="tooltip__li tooltip__li--action">Copy Current View URL</li>'
  );

});

