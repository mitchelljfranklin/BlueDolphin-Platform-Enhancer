
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




//Add BPM2 Process modal button
document.arrive(".css-o3bizf", function (bdheader) {

  bdheader.insertAdjacentHTML(
    "afterbegin",
    `<button id="ext_bpmn" class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium  css-1gxptt8" tabindex="999" type="button"
    aria-label="BPM 2.0"><a class="header__process  css-1pn3rtu">
        <div class="css-1cy6r6h"><img src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABbklEQVRIS82VgU3DMBBF2w1gA9iAbpBuwAaUCYAJoBMAE5AN6AZ0A9iAjpAN4L/oLrKMUc7IAiyd7DjJ//++75Llos04Esy94kzBeq/YKg7LSvwTXsreAfDdgNNbgy5WtQQA7RSPCdGT1hvFm+LSiG41d4q+lgAbrk3mg+YbU09ma7OG21wjZqghwAqUOQFAZIPvAJ4mWbH3WkMAOFacm3qfUH2h2Jh6LILM93bRDJ4NHJ8ZKOwV7vl3h7yOEHQCeiFdxUrBNWfB+mCEqMY+MmHsjTxUpl4ld3qJ2sauK1sb3jR92GoSzsI384f9IbcnrRJIyKgJAf5iQVolBeyxurCOQflSxos0A1c8l1EJHP+xMB0jSSsCiqDLCLDwOHIGXw6ukILbmN6ipMdv0ZwlEYKSRVi2jfRBhADl+SH32gt9i6IEkPyoD/4Nwa/3wXTIuQVzVVVqtD/pg6aNlv5KPcPxl9qyD5wE5fxK+RYNnyV1aJUid6mzAAAAAElFTkSuQmCC" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false"
                aria-hidden="true" viewBox="0 0 24 24">
            </img></div><span class="MuiTypography-root MuiTypography-button css-1lx5q9i">BPM 2.0</span>
    </a><span class="MuiTouchRipple-root css-w0pj6f"></span></button>`
  );


});