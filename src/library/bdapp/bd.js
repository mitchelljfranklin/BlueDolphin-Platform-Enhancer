//Main Window Loaded - Check to see if this is a new version of the extension and is so advise of whats changed
document.arrive(".draftsnavbar__input", function(mainWindow) {

    updatenotificationCheck(mainWindow)

});


//Add Custom Buttons to the NavBar for Actions
//Main Nav
//1: Copy Current URL Button
//2: Reload Page Button
//Side Nav
//1: BlueDolphin ShortCuts
document.arrive(".draftsnavbar--sharedusers", function(viewnavBar) {
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
document.arrive(".create-new-bpmn", function(bpmModal) {
    var bpmTitle = document.getElementById("bpmReminder");
    if (!bpmTitle) {
        bpmModal.children[0].children[0].insertAdjacentHTML(
            "beforeend",
            '<label id="bpmReminder"><b style="color:#FF0000";>Reminder:</b> BPM views need to be created in objects first</label>'
        );
    }
});



//Add buttons to the 3 dot context menu on the main bar
document.arrive(".context-menu-button", function(contextMenu) {
    //Copy Current URL
    contextMenu.children[0].insertAdjacentHTML(
        "beforeend",
        '<li id="ext_contextcopy" class="tooltip__li tooltip__li--action">Copy Current View URL</li>'
    );

});

//Add custom templates to screen
document.arrive(".create-template-view", function(archtemplate) {
    var html = '';
    getTenant();

    chrome.storage.local.get(["key"]).then((result) => {
        if (result.key) {
            let data = JSON.parse(result.key);
            for (i = 0; i < data.length; ++i) {
                let entry = data[i];
                if (entry.tenant == tenant) {
                    let templates = entry.templates;
                    for (i = 0; i < templates.length; ++i) {
                        let li = '<div class="col-sm-6 col-md-4"><div id="cusTemp" bdid="' + templates[i].bdId + '" class="ember-view"><div class="thumbnail" title="' + templates[i].templateName + '"><img src="' + templates[i].base64Image + '" alt="' + templates[i].templateName + '"><div class="caption"><h3 class="text-center">' + templates[i].templateName + '</h3></div></div></div></div>'
                        html = html + li;
                    }

                    archtemplate.firstChild.children[1].children[2].insertAdjacentHTML(
                        "beforeend", html);
                }
            }
        }
    });
});

// Check existing templates
document.arrive(".thumbnail", function(archView) {
    getTenant();
    if (archView.title == "Blank") {
        let templateList = archView.parentElement.parentElement.parentElement.children
        for (i = 0; i < templateList.length; ++i) {
            let templateNode = templateList[i];
            if (templateNode.children.length > 0) {
                if (templateNode.children[0].children.length > 0) {
                    if (templateNode.children[0].children[0].children.length > 0) {
                        let templateImage = templateNode.children[0].children[0].children[0]
                        if (templateImage.src != null) {
                            if (templateImage.src.includes("https://cdn.bluedolphin.app/data:image/png;base64,")) {
                                let src = templateImage.src.replace("https://cdn.bluedolphin.app/", "");
                                templateImage.src = src;
                            }
                        }
                    }
                }
            }
        }
    }
});

// Add screen to add new template
document.arrive(".go-back-button", function(backButton) {
    const tempButton = document.createElement("button");
    tempButton.title = "Add new template";
    tempButton.type = "button";
    tempButton.id = "addnewtemplate";
    tempButton.className = "btn btn-default";
    const tempButtonText = document.createTextNode("Add new template");
    tempButton.appendChild(tempButtonText);
    backButton.insertAdjacentElement("afterend", tempButton);
});