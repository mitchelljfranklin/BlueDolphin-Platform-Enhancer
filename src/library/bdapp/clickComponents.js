$(document).ready(function() {
    /*Start of Sheet*/
    //This is the core sheet that is to be used to call functions required for this extension; listeners, functions etc are on others

    //Button Action for when Clicking Copy Current View Extenstion Button
    $(document).on("click", "#ext_copyView", function() {
        dotheCopy()
    });
    //As per above
    $(document).on("click", "#ext_contextcopy", function() {
        dotheCopy()
    });

    //Button Action for when Clicking Reload Page button
    $(document).on("click", "#ext_reload", function() {
        location.reload();
    });


    //If Short Cut Button clicked then display shortcut keys
    $(document).on("click", "#ext_shortCuts", function() {

        var shorty = document.getElementById("helpUnderlay");
        shorty.classList.add("help-isVisible");
    });


    //Remove the Update Modal if shown and the user Clicks the X
    $(document).on("click", "#ext_updateModClose", function() {

        $(".ext_updateModClose").remove()

    });


    //Remove the Update Modal if shown and the user Clicks the X
    $(document).on("click", "#ext_bpmn", function() {

        let bpmn_url = chrome.runtime.getURL("library/new.html");

        window.open(bpmn_url);


    });

    $(document).on("click", "#cusTemp", function() {
        var currentdate = new Date();
        getBDPath();
        getTenant();

        chrome.storage.local.get(["key"]).then((result) => {
            if (result.key) {
                let data = JSON.parse(result.key);
                for (i = 0; i < data.length; ++i) {
                    if (data[i].tenant == tenant) {
                        let entry = data[i];
                        let templates = entry.templates;
                        let apiKey = entry.apiKey;
                        let environment = entry.environment;
                        let tenantName = entry.tenant;
                        let bdId = $(this).attr("bdid");
                        for (i = 0; i < templates.length; ++i) {
                            if (templates[i].bdId == bdId) {
                                templateEntry = templates[i];
                                var templateName = templateEntry.templateName;
                                var childViews = templateEntry.childViews;
                                for (x = 0; x < childViews.length; ++x) {
                                    childViews[x].childViewName = childViews[x].childViewBaseName + " - " + currentdate;
                                }
                                fetch("https://bdmanagement.azurewebsites.net/api/views/" + environment + "/" + tenant + "/" + bdId, {
                                        method: "POST",
                                        body: JSON.stringify({
                                            mainViewName: templateName + " - " + currentdate,
                                            childViews: childViews
                                        }),
                                        headers: {
                                            "Content-type": "application/json; charset=UTF-8",
                                            "X-API-Key": apiKey
                                        }
                                    })
                                    .then((response) => window.location.href = page + 'drafts/' + response.headers.get('Location'));
                            }
                        }
                    }
                }
            }
        });
    });
});