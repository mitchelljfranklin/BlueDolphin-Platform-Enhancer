! function (e) {
    "use strict";

    function t(e) {
        e.classList.remove("help-isVisible")
    }

    function n(e) {
        return e.keyCode
    }

    var i = '<div id="helpUnderlay" class="help-underlay"> <div id="helpModal" class="help-modal"> <h1>BlueDolphin Keyboard Shortcuts <kbd class="help-key"><span>?</span></kbd></h1> <div id="helpClose" class="help-close">&times;</div> <div id="helpModalContent" class="help-modal-content"> <div id="helpListWrap" class="help-list-wrap"> <ul class="help-list"> <li class="help-key-unit"> <kbd class="help-key"><span>Ctrl+C</span></kbd> <span class="help-key-def">Copy an object (only ArchiMate) or Copy an image</span> </li> <li class="help-key-unit"> <kbd class="help-key"><span>Ctrl+V</span></kbd> <span class="help-key-def">Paste an object (only ArchiMate) or Paste an image</span> </li> <li class="help-key-unit"> <kbd class="help-key"><span>Ctrl+Z </span></kbd> <span class="help-key-def">Undo step</span> </li> <li class="help-key-unit"> <kbd class="help-key"><span>Delete</span></kbd> <span class="help-key-def">Delete from the canvas</span> </li> <li class="help-key-unit"> <kbd class="help-key"><span>Ctrl+G</span></kbd> <span class="help-key-def">Group objects (only ArchiMate)</span> </li> <li class="help-key-unit"> <kbd class="help-key"><span>Shift+H</span></kbd> <span class="help-key-def">Flip a free shape horizontally</span> </li> <li class="help-key-unit"> <kbd class="help-key"><span>Shift+V</span></kbd> <span class="help-key-def">Flip a free shape vertically</span> </li> <li class="help-key-unit"> <kbd class="help-key"><span>Ctrl+A</span></kbd> <span class="help-key-def">Select all</span> </li> <li class="help-key-unit"> <kbd class="help-key"><span>Esc</span></kbd> <span class="help-key-def">Deselect all</span> </li> <li class="help-key-unit"> <kbd class="help-key"><span>Spacebar</span></kbd> <span class="help-key-def">Scroll to the selected object</span> </li> </ul> <ul class="help-list"> <li class="help-key-unit"> <kbd class="help-key"><span>+ -</span></kbd> <span class="help-key-def">Zoom in and out</span> </li> <li class="help-key-unit"> <kbd class="help-key"><span>Ctrl+0</span></kbd> <span class="help-key-def">Reset zoom</span> </li> <li class="help-key-unit"> <kbd class="help-key"><span>Shift+Z</span></kbd> <span class="help-key-def">Zoom to fit</span> </li> <li class="help-key-unit"> <kbd class="help-key"><span>Ctrl+Shift+Z</span></kbd> <span class="help-key-def">Ungroup selection </span> </li> <li class="help-key-unit"> <kbd class="help-key"><span>F2</span></kbd> <span class="help-key-def">Edit text</span> </li> <li class="help-key-unit"> <kbd class="help-key"><span>Ctrl+scroll</span></kbd> <span class="help-key-def">Zoom in and out</span> </li> <li class="help-key-unit"> <kbd class="help-key"><span>Ctrl+drag/long press the left mouse button</span></kbd> <span class="help-key-def">Pan on canvas</span> </li> <li class="help-key-unit"> <kbd class="help-key"><span>Shift+scroll</span></kbd> <span class="help-key-def">(Fixed) scroll right to left/left to righ</span> </li> <li class="help-key-unit"> <kbd class="help-key"><span>Ctrl+Click</span></kbd> <span class="help-key-def">Open a view in a new tab</span> </li> <li class="help-key-unit"> <kbd class="help-key"><span>Shift+Click</span></kbd> <span class="help-key-def">Open a view in a new window</span> </li> </ul> <ul class="help-list"> <li class="help-key-unit"> <kbd class="help-key"><span>Ctrl+Alt+drag</span></kbd> <span class="help-key-def">Select multiple objects in a BPMN view without moving the swimlanes</span> </li> <li class="help-key-unit"> <kbd class="help-key"><span>Alt+Shift+drag</span></kbd> <span class="help-key-def">Move only the canvas in a BPMN view (and not swimlanes)</span> </li> <li class="help-key-unit"> <kbd class="help-key"><span>Alt+drag</span></kbd> <span class="help-key-def">Move an object to a group without putting it into a group-layer (remains a single object)</span> </li> </ul> </div> </div> </div> </div>'


        e.body.innerHTML += i,
            function () {
                let i = e.getElementById("helpUnderlay"),
                    d = e.getElementById("helpModal"),
                    s = e.getElementById("helpClose");
                e.addEventListener("keydown", function (e) {
                    191 === n(e) && !0 === e.shiftKey && i.classList.add("help-isVisible")
                }, !1), e.addEventListener("keyup", function (e) {
                    27 === n(e) && t(i)
                }, !1), i.addEventListener("click", function () {
                    t(i)
                }, !1), d.addEventListener("click", function (e) {
                    e.stopPropagation()
                }, !1), s.addEventListener("click", function () {
                    t(i)
                }, !1)
            }()

}(document);




