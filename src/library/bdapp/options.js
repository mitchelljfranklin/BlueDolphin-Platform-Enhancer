const save_options = () => {
    var value = document.getElementById("optionTempjson");
    value = value.value;
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
        console.log("Value currently is " + JSON.stringify(result));
        var string = document.getElementById("optionTempjson");
        if (result.key) {

            string.value = result.key
        } else {

            var initialJson = `[{
                "tenant": " Name of the tenant that this definition is for",
                "apiKey": "API key for the DataCollector API",
                "environment": "Environment: prdeu00, prdeu01, prdus00",
                "templates": [{
                  "templateName": "Name of the template",
                  "bdId": "ID of the main view",
                  "childViews": [{
                      "childViewOrgId": "ID of the first child view to be created",
                      "childViewBaseName": "Base name of the first child view to be created"
                    },
                    {
                      "childViewOrgId": "ID of the second child view to be created",
                      "childViewBaseName": "Base name of the second child view to be created"
                    }
                  ],
                  "base64Image": "Base64 Encoded Image"
                }]
              }]`
            string.value = initialJson

        }
    });




}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})