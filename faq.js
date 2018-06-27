"use strict";
var $ = function(id) { return document.getElementById(id); };


var toggle = function() {
    var link = this;
    var h2 = link.parentNode;
    var div = h2.nextElementSibling;

    if (h2.hasAttribute("class")) {

        h2.className = "";
    } else {

        h2.className = "minus";
    }

    if (div.hasAttribute("class")) {

        div.className = "";
    } else {

        div.className = "open";
    }
};

window.onload = function() {

    var faqs = $("faqs");
    var linkElements = faqs.getElementsByTagName("a");


    for (var i = 0; i < linkElements.length; i++) {
        linkElements[i].onclick = toggle;
    }

    linkElements[0].focus();
};