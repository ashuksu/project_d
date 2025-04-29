sap.ui.define([
   "sap/ui/core/mvc/Controller"
], (Controller) => {
   "use strict";

   return Controller.extend("project_d.controller.App", {
      onShowHello() {
         alert("Hello World 3");
      }
   });
});