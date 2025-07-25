sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  /**
   * @namespace project_d.controller
   */
  const App = Controller.extend("project_d.controller.App", {
    onInit: function _onInit() {
      this.getView()?.addStyleClass(this.getOwnerComponent()?.getContentDensityClass());
    }
  });
  ;
  return App;
});
//# sourceMappingURL=App-dbg.controller.js.map
