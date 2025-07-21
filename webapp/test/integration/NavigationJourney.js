sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/App"
], (opaTest) => {
    "use strict";

    QUnit.module("Navigation");

    opaTest("Should open the Hello dialog", (Given, When, Then) => {
        // Arrangements
        Given.iStartMyUIComponent({
            componentConfig: {
                name: "project_d"
            }
        });

        //Actions
        When.onTheAppPage.iPressTheSayHelloWithDialogButton();

        // Assertions
        Then.onTheAppPage.iShouldSeeTheHelloDialog();

        // Cleanup
        Then.iTeardownMyApp();
    });
});