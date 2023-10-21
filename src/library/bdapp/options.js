const save_options = () => {


    var value = document.getElementById("optionTempjson");
    value = value.value

    chrome.storage.local.set({ key: value }).then(() => {
        let status = document.getElementById('status');
        status.style.display = null
        setTimeout(() => {
            status.style.display = 'none'
        }, 750);   
      })




}

const restore_options = () => {

  

  chrome.storage.local.get(["key"]).then((result) => {
    //console.log("Value currently is " + result.key);
    var string = document.getElementById("optionTempjson");
    if (result.key) {

      string.value = result.key
    } else {

      var initialJson = `[
          {
            "templateName":"Template Name",
            "bdId":"Template BD URL ID Number",      
            "base64Image":"Base64 Encoded Image"    
          }
]`
      string.value = initialJson

    }
  });




}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);




var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

