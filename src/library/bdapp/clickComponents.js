$(document).ready(function () {
  /*Start of Sheet*/
  //This is the core sheet that is to be used to call functions required for this extension; listeners, functions etc are on others

  //Button Action for when Clicking Copy Current View Extenstion Button
  $(document).on("click", "#ext_copyView", function () {
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
  });




//Button Action for when Clicking Reload Page button
  $(document).on("click", "#ext_reload", function () {
    location.reload();
  });


  //If Short Cut Button clicked then display shortcut keys
  $(document).on("click", "#ext_shortCuts", function () {

    var shorty = document.getElementById("helpUnderlay");
    shorty.classList.add("help-isVisible");

  

});





});
