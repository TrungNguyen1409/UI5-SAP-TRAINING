sap.ui.define(["./BaseController"], function (BaseController) {
	"use strict";

	return BaseController.extend("com.myorg.myapp.controller.Detail", {
		onInit: function () {
			// apply content density mode to root view
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
            this.getRouter().getRoute("detail").attachPatternMatched(this.onObjectMatched, this);
		},
        onObjectMatched(oEvent){
            const customerId = oEvent.getParameter("arguments").customerId;
            this.getView().bindElement("/customers/" + customerId);
        }
	});
});
