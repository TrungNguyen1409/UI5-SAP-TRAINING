sap.ui.define(["./BaseController","sap/ui/model/json/JSONModel","sap/m/MessageToast"], function (BaseController, JSONModel,MessageToast) {
    "use strict";

    return BaseController.extend("com.myorg.myapp.controller.CustomerPanel", {
        onSaveData: function () {
            this.onOpenDialog();
        },
        onOpenDialog() {
            this.pDialog ??= this.loadFragment({
                name: "com.myorg.myapp.view.Confirmation"
            });
            this.pDialog.then(oDialog => oDialog.open());
        },
        onCloseDialog() {
            this.byId("confirmDialog").close()
        },
        onAccept(){
            const oModel = this.getView().getModel("customers");
            const aItems = oModel.getProperty("/customers");
            aItems.push(this.getView().getModel("customer").getData());
            oModel.setProperty("/customers",aItems);
            this.byId("confirmDialog").close()
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sCustomerName = this.getView().getModel("customer").getProperty("/firstName");
            const sMsg = oBundle.getText("saveMsg", [sCustomerName]);
            MessageToast.show(sMsg);
        }
    });
});
