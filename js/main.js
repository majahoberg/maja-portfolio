"use strict";

/* https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_scrollintoview */
function scrollDown() {
    let elmnt = document.getElementById("content");
    elmnt.scrollIntoView({
        behavior: "smooth" /* makes the scroll smooth */
    });
  }


