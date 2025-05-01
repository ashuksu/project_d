sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  (UIComponent, JSONModel, ResourceModel) => {
    "use strict";

    return UIComponent.extend("project_d.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        rootView: {
          viewName: "project_d.view.App",
          type: "XML",
          id: "app",
        },
      },
      init() {
        UIComponent.prototype.init.apply(this, arguments);

        const oData = {
          recipient: {
            name: "Name",
            do: "Press here",
          },
        };
        const oModel = new JSONModel(oData);
        this.setModel(oModel);

        const i18nModel = new ResourceModel({
          bundleName: "project_d.i18n.i18n",
        });
        this.setModel(i18nModel, "i18n");
      },
    });
  }
);
