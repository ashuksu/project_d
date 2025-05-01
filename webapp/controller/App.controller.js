sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("project_d.controller.App", {
      onInit() {
        const oData = {
          recipient: {
            name: "worldName",
          },
        };
        const oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
        // this.getView().setModel(new JSONModel({}), "ui");
      },
      onShowHello() {
        MessageToast.show("Hello World 4");
      },
    });
  }
);
