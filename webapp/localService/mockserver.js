sap.ui.define([
    "sap/ui/core/util/MockServer"
], (MockServer) => {
    "use strict";

    return {
        init() {
            // create
            const oMockServer = new MockServer({
                rootUri: sap.ui.require.toUrl("project_d") + "/V2/Northwind/Northwind.svc/"
            });

            const oUrlParams = new URLSearchParams(window.location.search);

            // configure mock server with a delay
            MockServer.config({
                autoRespond: true,
                autoRespondAfter: oUrlParams.get("serverDelay") || 500
            });

            // simulate
            const sPath = sap.ui.require.toUrl("project_d/localService");
            oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");

            // start
            oMockServer.start();
        }
    };
});
