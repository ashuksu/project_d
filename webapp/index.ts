import XMLView from "sap/ui/core/mvc/XMLView";

XMLView.create({
    viewName: "project_d.view.App"
}).then(function(oView) {
    oView.placeAt("content");
});