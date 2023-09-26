
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
        <div class="css-1cy6r6h"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false"
        aria-hidden="true" viewBox="0 0 36 36">
        <path d="M33.49,26.28a1,1,0,0,0-1.2-.7l-2.49.67a14.23,14.23,0,0,0,2.4-6.75A14.48,14.48,0,0,0,27.37,7.35,1,1,0,0,0,26,7.44a1,1,0,0,0,.09,1.41,12.45,12.45,0,0,1,4.16,10.46,12.19,12.19,0,0,1-2,5.74L28,22.54a1,1,0,1,0-1.95.16l.5,6.44,6.25-1.66A1,1,0,0,0,33.49,26.28Z" class="clr-i-outline clr-i-outline-path-1"></path><path d="M4.31,17.08a1.06,1.06,0,0,0,.44.16,1,1,0,0,0,1.12-.85A12.21,12.21,0,0,1,18.69,5.84L16.45,7.37a1,1,0,0,0,.47,1.79A1,1,0,0,0,17.56,9l5.33-3.66L18.33.76a1,1,0,1,0-1.39,1.38l1.7,1.7A14.2,14.2,0,0,0,3.89,16.12,1,1,0,0,0,4.31,17.08Z" class="clr-i-outline clr-i-outline-path-2"></path><path d="M21.73,29.93a12,12,0,0,1-4.84.51,12.3,12.3,0,0,1-9.57-6.3l2.49.93a1,1,0,0,0,.69-1.84l-4.59-1.7h0L4.44,21,3.33,27.35a1,1,0,0,0,.79,1.13l.17,0a1,1,0,0,0,1-.81l.42-2.4a14.3,14.3,0,0,0,11,7.14,13.91,13.91,0,0,0,5.63-.6,1,1,0,0,0-.6-1.9Z" class="clr-i-outline clr-i-outline-path-3"></path><path d="M22,13H14a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V14A1,1,0,0,0,22,13Zm-1,8H15V15h6Z" class="clr-i-outline clr-i-outline-path-4"></path>
    </svg></div><span class="MuiTypography-root MuiTypography-button css-1lx5q9i">BPM 2.0</span>
    </a><span class="MuiTouchRipple-root css-w0pj6f"></span></button>`
  );


});