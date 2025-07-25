sap.ui.define([], function () {
  "use strict";

  const Helpers = {
    formatting(sText, ...args) {
      return typeof sText === "string" ? sText.replace(/{(\d+)}/g, (match, i) => typeof args[i] !== "undefined" ? String(args[i]) : match) : "";
    }
  };
  return Helpers;
});
//# sourceMappingURL=Helpers-dbg.js.map
