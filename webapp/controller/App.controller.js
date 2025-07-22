sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project_d.controller.App", {
        onInit() {
            this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
        }
    });
});
