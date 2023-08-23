$(document).ready(function () {
  /*Start of Sheet*/
  //This is the core sheet that is to be used to call functions required for this extension; listeners, functions etc are on others

  //Button Action for when Clicking Copy Current View Extenstion Button
  $(document).on("click", "#ext_copyView", function () {
    dotheCopy()
  });
    //As per above
  $(document).on("click", "#ext_contextcopy", function () {
    dotheCopy()
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


//Remove the Update Modal if shown and the user Clicks the X
$(document).on("click", "#ext_updateModClose", function () {

  $(".ext_updateModClose").remove()

});



});
