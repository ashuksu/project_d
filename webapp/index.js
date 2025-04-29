sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], (XMLView) => {
	"use strict";

    XMLView.create({
        viewName: "project_d.view.App",
    }).then((oView) => oView.placeAt("content"));
});