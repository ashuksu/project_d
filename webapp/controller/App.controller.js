sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  (Controller, MessageToast, JSONModel, ResourceModel) => {
    "use strict";

    return Controller.extend("project_d.controller.App", {
      onInit() {
        const oView = this.getView();
        const oData = {
          recipient: {
            name: "Name",
            do: "Press here",
          },
        };
        const oModel = new JSONModel(oData);
        oView.setModel(oModel);

        const i18nModel = new ResourceModel({
          bundleName: "project_d.i18n.i18n",
        });
        oView.setModel(i18nModel, "i18n");
      },
      formatting(sText, ...args) {
        if (!sText) {
          return;
        }

        for (let i = 0; i < args.length; i++) {
          if (sText.includes(`{${i}}`)) {
            sText = sText.replace(`{${i}}`, args[i]);
          }
        }

        return sText;
      },
      onShowHello() {
        const oView = this.getView();
        const oData = oView.getModel();
        const oBundl = oView.getModel("i18n").getResourceBundle();

        const sRecipientName = oData.getProperty("/recipient/name");
        const sMsg = oBundl.getText("buttonTextsMsg", [sRecipientName]);

        MessageToast.show(sMsg);
      },
    });
  }
);
