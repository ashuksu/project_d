sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "project_d/model/Helpers"], function (Controller, MessageToast, __Helpers) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const Helpers = _interopRequireDefault(__Helpers);
  /**
   * @namespace project_d.controller
   */
  const HelloPanel = Controller.extend("project_d.controller.HelloPanel", {
    constructor: function constructor() {
      Controller.prototype.constructor.apply(this, arguments);
      this.formatting = Helpers.formatting;
    },
    onShowHello: function _onShowHello() {
      // read msg from i18n model
      // functions with generic return values require casting
      const resourceBundle = this.getView()?.getModel("i18n")?.getResourceBundle();
      const recipient = this.getView()?.getModel()?.getProperty("/recipient/name");
      const msg = resourceBundle.getText("helloMsg", [recipient]) || "no text defined";
      // show a message
      MessageToast.show(msg);
    },
    onOpenDialog: async function _onOpenDialog() {
      this.dialog ??= await this.loadFragment({
        name: "project_d.view.HelloDialog"
      });
      this.dialog.open();
    },
    onCloseDialog: function _onCloseDialog() {
      // note: We don't need to chain to the pDialog promise, since this event-handler
      // is only called from within the loaded dialog itself.
      this.byId("helloDialog")?.close();
    }
  });
  ;
  return HelloPanel;
});
//# sourceMappingURL=HelloPanel-dbg.controller.js.map
