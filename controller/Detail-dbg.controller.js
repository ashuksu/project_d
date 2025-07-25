sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/UIComponent", "sap/ui/core/routing/History", "sap/m/MessageToast", "sap/ui/model/json/JSONModel"], function (Controller, UIComponent, History, MessageToast, JSONModel) {
  "use strict";

  /**
   * @namespace project_d.controller
   */
  const Detail = Controller.extend("project_d.controller.Detail", {
    onInit: function _onInit() {
      const viewModel = new JSONModel({
        currency: "EUR"
      });
      this.getView().setModel(viewModel, "view");
      const router = UIComponent.getRouterFor(this);
      router.getRoute("detail").attachPatternMatched(this.onObjectMatched, this);
    },
    onObjectMatched: function _onObjectMatched(event) {
      this.byId("rating").reset();
      this.getView().bindElement({
        path: "/" + window.decodeURIComponent(event.getParameter("arguments").invoicePath),
        model: "invoice"
      });
    },
    onNavBack: function _onNavBack() {
      const history = History.getInstance();
      const previousHash = history.getPreviousHash();
      if (previousHash !== undefined) {
        window.history.go(-1);
      } else {
        const router = UIComponent.getRouterFor(this);
        router.navTo("overview", {}, true);
      }
    },
    onRatingChange: function _onRatingChange(event) {
      const value = event.getParameter("value");
      const resourceBundle = this?.getView().getModel("i18n")?.getResourceBundle();
      MessageToast.show(resourceBundle.getText("ratingConfirmation", [value]));
    }
  });
  ;
  return Detail;
});
//# sourceMappingURL=Detail-dbg.controller.js.map
