sap.ui.define(["sap/ui/core/ComponentContainer"], (ComponentContainer) => {
  "use strict";

  new ComponentContainer({
    name: "project_d",
    settings: {
      id: "project_d",
    },
    async: true,
  }).placeAt("content");
});
