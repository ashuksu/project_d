sap.ui.define([], function () {
  "use strict";

  var __exports = {
    name: "QUnit test suite for UI5 TypeScript Project D",
    defaults: {
      page: "ui5://test-resources/project_d/Test.qunit.html?testsuite={suite}&test={name}",
      qunit: {
        version: 2
      },
      ui5: {
        theme: "sap_horizon"
      },
      loader: {
        paths: {
          "project_d": "../"
        }
      }
    },
    tests: {
      "unit/unitTests": {
        title: "UI5 TypeScript Project D - Unit Tests"
      },
      "integration/opaTests": {
        title: "UI5 TypeScript Project D - Integration Tests"
      }
    }
  };
  return __exports;
});
//# sourceMappingURL=testsuite.qunit-dbg.js.map
