sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("project_d.controller.App", {
      formatting(sText, ...args) {
        if (!sText) return;

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
