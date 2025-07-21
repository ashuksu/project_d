sap.ui.define(() => {
    "use strict";
    return {
        name: "QUnit test suite for Project D",
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
                title: "Project D - Unit Tests",
                module: "./unit/model/formatter"
            },
            "integration/opaTests": {
                title: "Project D - Integration Tests"
            }
        }
    };
});