import ComponentContainer from "sap/ui/core/ComponentContainer";

new ComponentContainer({
    id: "container",
    name: "project_d",
    settings: {
        id: "project_d"
    },
    autoPrefixId: true,
    async: true
}).placeAt("content");