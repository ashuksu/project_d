sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel", "sap/ui/Device"], function (UIComponent, JSONModel, Device) {
  "use strict";

  /**
   * @namespace project_d
   */
  const Component = UIComponent.extend("project_d.Component", {
    metadata: {
      "interfaces": ["sap.ui.core.IAsyncContentCreation"],
      "manifest": "json"
    },
    init: function _init() {
      UIComponent.prototype.init.call(this);
      const data = {
        recipient: {
          name: "World"
        }
      };
      const model = new JSONModel(data);
      this.setModel(model);
      // set a device model
      const deviceModel = new JSONModel(Device);
      deviceModel.setDefaultBindingMode("OneWay");
      this.setModel(deviceModel, "device");

      // create the views based on the url/hash
      this.getRouter().initialize();
    },
    getContentDensityClass: function _getContentDensityClass() {
      return Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact";
    }
  });
  ;
  return Component;
});
//# sourceMappingURL=Component-dbg.js.map
