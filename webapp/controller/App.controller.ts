import Controller from "sap/ui/core/mvc/Controller";
import MessageToast from "sap/m/MessageToast";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";

/**
 * @name project_d.controller.App
 */
export default class AppController extends Controller {
    onInit(): void {
        const data = {
            recipient: {
                name: "WORLD"
            }
        };

        const dataModel = new JSONModel(data);
        this.getView()?.setModel(dataModel);

        const i18nModel = new ResourceModel({
            bundleName: "project_d.i18n.i18n"
        });

        this.getView()?.setModel(i18nModel, "i18n");
    }

    onShowHello(): void {
        const recipient = (this.getView()?.getModel() as JSONModel)?.getProperty("/recipient/name");
        const resourceBundle = (this.getView()?.getModel("i18n") as ResourceModel)?.getResourceBundle() as ResourceBundle;
        const msg = resourceBundle.getText("helloMsg", [recipient]) || "no text defined";

        MessageToast.show(msg);
    }
};