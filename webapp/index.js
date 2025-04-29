sap.ui.define([
    "sap/m/Text",
], (Text) => {
	"use strict";

    new Text({
        text: "Hello World 2",
    }).placeAt("content");
});