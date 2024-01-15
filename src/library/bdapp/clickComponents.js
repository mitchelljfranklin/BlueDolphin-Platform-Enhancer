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
                        let masterView = $(this).attr("masterViewId");
                        for (i = 0; i < templates.length; ++i) {
                            if (templates[i].masterViewId == masterView) {
                                templateEntry = templates[i];
                                var templateName = templateEntry.templateName;
                                var childViews = templateEntry.childViews;
                                for (x = 0; x < childViews.length; ++x) {
                                    childViews[x].childViewName = childViews[x].childViewBaseName + " - " + currentdate;
                                }
                                fetch("https://bdmanagement.azurewebsites.net/api/views/" + environment + "/" + tenant, {
                                        method: "POST",
                                        body: JSON.stringify({
                                            masterViewId: masterView,
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

    $(document).on("click", "#addnewtemplate", function() {
        getBDPath();
        getTenant();
        var buttonTemplate = document.getElementById("addnewtemplate");
        var modalBox = buttonTemplate.parentElement.parentElement;
        // Remove other
        modalBox.children[2].remove();
        modalBox.children[0].remove();
        var templateBox = modalBox.children[0];
        templateBox.querySelector("div[data-ps-id]").remove();

        const breakLine = document.createElement("br");
        templateBox.insertAdjacentElement("afterend", breakLine);

        const inputViewIdLabel = document.createElement("label");
        inputViewIdLabel.id = "inputviewidlabel";
        inputViewIdLabel.textContent = "ViewId to add";
        inputViewIdLabel.className = "item-field--row--label--inner";
        templateBox.insertAdjacentElement("beforeend", inputViewIdLabel);

        const inputViewId = document.createElement("input");
        inputViewId.id = "inputviewid";
        inputViewId.textContent = "ViewId to add";
        inputViewId.className = "form-control ember-text-field";
        templateBox.insertAdjacentElement("beforeend", inputViewId);

        const inputTemplateNameLabel = document.createElement("label");
        inputTemplateNameLabel.id = "inputtemplatenamelabel";
        inputTemplateNameLabel.textContent = "Name of the new template";
        inputTemplateNameLabel.className = "item-field--row--label--inner";
        templateBox.insertAdjacentElement("beforeend", inputTemplateNameLabel);

        const inputTemplateName = document.createElement("input");
        inputTemplateName.id = "inputtemplatename";
        inputTemplateName.textContent = "Name of the new template";
        inputTemplateName.className = "form-control ember-text-field";
        templateBox.insertAdjacentElement("beforeend", inputTemplateName);

        const areaThumbNailLabel = document.createElement("label");
        areaThumbNailLabel.id = "areaThumbNailLabel";
        areaThumbNailLabel.textContent = "Base64 Data:Image/png";
        areaThumbNailLabel.className = "item-field--row--label--inner";
        templateBox.insertAdjacentElement("beforeend", areaThumbNailLabel);

        const areaThumbNail = document.createElement("textarea");
        areaThumbNail.id = "areaThumbNail";
        areaThumbNail.textContent = "";
        areaThumbNail.className = "inputfield form-control textarea ember-text-area ember-view";
        templateBox.insertAdjacentElement("beforeend", areaThumbNail);

        const createButton = document.createElement("button");
        createButton.title = "Create new template";
        createButton.type = "button";
        createButton.id = "createnewtemplate";
        createButton.className = "btn btn-default";
        const createButtonText = document.createTextNode("Create new template");
        createButton.appendChild(createButtonText);
        templateBox.insertAdjacentElement("beforeend", createButton);

    });

    $(document).on("click", "#createnewtemplate", function() {
        getBDPath();
        getTenant();
        console.log("Create new");


        chrome.storage.local.get(["key"]).then((result) => {
            if (result.key) {
                let data = JSON.parse(result.key);
                for (i = 0; i < data.length; ++i) {
                    if (data[i].tenant == tenant) {
                        let entry = data[i];
                        let apiKey = entry.apiKey;
                        let environment = entry.environment;
                        var viewInput = document.getElementById("inputviewid");
                        var templateNameInput = document.getElementById("inputtemplatename");
                        var imageInput = document.getElementById("areaThumbNail");

                        fetch("https://bdmanagement.azurewebsites.net/api/viewtemplate/" + environment + "/" + tenant, {
                                method: "POST",
                                body: JSON.stringify({
                                    viewId: viewInput.value,
                                    newTemplateName: templateNameInput.value,
                                    thumbNailImage: imageInput.value
                                }),
                                headers: {
                                    "Content-type": "application/json; charset=UTF-8",
                                    "X-API-Key": apiKey
                                }
                            })
                            .then((response) => window.location.href = page + 'drafts/');
                    }
                }
            }
        });
    });
});