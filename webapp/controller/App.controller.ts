import Controller from "sap/ui/core/mvc/Controller";
import MessageToast from "sap/m/MessageToast";

/**
 * @name project_d.controller.App
 */
export default class AppController extends Controller {
    onShowHello(): void {
        MessageToast.show("Hello World from me!");
     }
};