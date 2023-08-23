/*------Global------*/
//Variables
var sPageURL;


/*-------------Global Calling Functions--------------------*/

//Function to retrieve the current URL parameters and split them into each unique record
var getUrlpath = function getUrlpath() {

  sPageURL = $(location).attr('href')
  return sPageURL

}



//Function to get the page name without the extnesion, this will enable custom headers to be made later on
function getPageNameWithoutExtension(){
  return window.location.pathname.split('/').pop().split('.')[0];
}

function getGWTPageName(){
  var urlString = $(location).attr('href');
  var page = urlString.substring(
    urlString.indexOf("#") + 1, 
    urlString.indexOf(";")
  );
  return page;
}

//Function to copy the current URL into the users clipboard and notify
function dotheCopy(){

  getUrlpath();
    $("body").append(
      '<input type="text" value="' + sPageURL + '" id="currenturlval">'
    );
    var currentidval = document.getElementById("currenturlval");
    currentidval.select();
    currentidval.setSelectionRange(0, 99999);
    document.execCommand("copy");
    $("#currenturlval").remove();

    //Create the Toast and show on the screen that the URL has been copied to clipboard
    var toaster = document.getElementById("navbar-dropdown");
    toaster.insertAdjacentHTML(
      "beforeend",
      '<div tabindex="0" id="multiline-toast" class="ext_toast modal modal--show ember-view"><div class="modalbox panel panel-default -toast">\
	<div class="modal--content">\
		<div class="msg-container"> View URL Copied to Clipboard\
<!---->        </div>\
	</div>\
</div></div>'
    );
    //After 3 seconds auto remove the Toast
    setTimeout(() => {
      $(".ext_toast").remove();
    }, 3000);
}



//Function to check the current version of the extension and if has been known to the browser beforehand
function updatenotificationCheck(mainWindow) {


  let currentAppver = chrome.runtime.getManifest().version
  //console.log(currentAppver)
  if (typeof (Storage) !== "undefined") {
    localStorage.getItem("bdplatenhanUpdateNot" + currentAppver);
    if (localStorage.getItem("bdplatenhanUpdateNot" + currentAppver) === null || localStorage.getItem("bdplatenhanUpdateNot" + currentAppver) === '') {
      localStorage.setItem("bdplatenhanUpdateNot" + currentAppver, "done");
      updateNotificationfun(mainWindow)
    } else {
      //No action Required in that its actually already alerted
    }
  } else {
    alert('No Access to Local Storage')
  }

}


//Function to Display the Notification Window
function updateNotificationfun(mainWindow) {

let htmlUpdateContents = `
<ul>
<li>
<p><strong>Feature/Change:</strong> New update notification to advise of changes.</p>
</li>
<li>
<p><strong>Feature/Change:</strong> Addition of Copy Current View URL via the Context Menu Dropdown.</p>
</li>
</ul>
`

let updateHtml= `<div tabindex="0" id="ext_updateModal" class="create-view modal modal--show ember-view ext_updateModClose"><div class="modalbox ">
<div id="ext124" class="__modalbox--title panel-header ember-view">  BlueDolphin Platform Extension Update Notification


<span class="modalbox--close fa fa-times" title="Close" id="ext_updateModClose"></span>
</div>
<div id="ext_updateNotification" class="__modalbox--content show-overflow ember-view">`+htmlUpdateContents+
`</div>
</div>
</div>`



mainWindow.parentNode.insertAdjacentHTML(
  "beforeend",
  updateHtml
);



}
