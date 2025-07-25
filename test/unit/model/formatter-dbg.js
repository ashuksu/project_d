sap.ui.define(["sap/ui/model/resource/ResourceModel", "project_d/model/CurrencyStatus"], function (ResourceModel, __formatter) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const formatter = _interopRequireDefault(__formatter);
  QUnit.module("Formatting function", {});
  QUnit.test("Should return the translated texts", assert => {
    const resourceModel = new ResourceModel({
      bundleUrl: sap.ui.require.toUrl("project_d/i18n/i18n.properties"),
      supportedLocales: [""],
      fallbackLocale: ""
    });
    const controllerMock = {
      getOwnerComponent() {
        return {
          getModel() {
            return resourceModel;
          }
        };
      }
    };

    // System under test
    const fnIsolatedFormatter = formatter.statusText.bind(controllerMock);

    // Assert
    assert.strictEqual(fnIsolatedFormatter("A"), "New", "The long text for status A is correct");
    assert.strictEqual(fnIsolatedFormatter("B"), "In Progress", "The long text for status B is correct");
    assert.strictEqual(fnIsolatedFormatter("C"), "Done", "The long text for status C is correct");
    assert.strictEqual(fnIsolatedFormatter("Foo"), "Foo", "The long text for status Foo is correct");
  });
});
//# sourceMappingURL=formatter-dbg.js.map
