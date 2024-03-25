sap.ui.define(["./BaseController", "sap/m/MessageToast"], function (BaseController, MessageToast) {
	"use strict";

	return BaseController.extend("com.myorg.myapp.controller.CustomerPanel", {
        onSaveData: function() {
			const oBundle = this.getView().getModel("i18n").getResourceBundle();
			const sCustomerName = this.getView().getModel("customer").getProperty("/firstName");
			const sMsg = oBundle.getText("saveMsg",[sCustomerName]);
			//MessageToast.show(sMsg);
            this.onOpenDialog()
		},
        onOpenDialog(){
            this.pDialog ??= this.loadFragment({
                name: "com.myorg.myapp.view.Confirmation"
            });
            this.pDialog.then(oDialog => oDialog.open());
        },
        onCloseDialog(){
            this.byId("confirmDialog").close()
        }
	});
});
