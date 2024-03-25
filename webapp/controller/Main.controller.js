// sap.ui.define => module declaration (enables referencing in UI5)
// sap.ui.define(dependency array, function implementation)
// dependency array --> [dep_1, dep_2] --> dep_1: "sap/m/Text"
// function implementation --> function(Text)
sap.ui.define(["./BaseController",
			   "sap/ui/model/json/JSONModel"], function (BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("com.myorg.myapp.controller.Main", {
		// Called automatically upon loading
		onInit(){
			const jsonData = {
				firstName: 'Trung',
				lastName: 'Nguyen',
				street: "Dietmar-Hopp-Allee",
				number: 16,
				zip: 69190,
				city: "Walldorf",
				country: "Germany",
				mail: "trung.nguyen01@sap.com",
				phone: "+496227747474"
			};
			// create the model and pass the data
			const oModel = new JSONModel(jsonData);
			this.getView().setModel(oModel, "customer");
		}
	});
});
