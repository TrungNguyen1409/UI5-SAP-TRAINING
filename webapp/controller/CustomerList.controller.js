sap.ui.define(["./BaseController","sap/ui/model/Filter","sap/ui/model/FilterOperator"], function (BaseController,Filter,FilterOperator) {
	"use strict";

	return BaseController.extend("com.myorg.myapp.controller.ControllerList", {
		onFilterCustomers(oEvent){
            // create some filters to filter data
            const aFilter = [];
            // get the query that is provided by the search field
            const sQuery = oEvent.getParameter("query");
            if(sQuery){
                const combinedFilter = new Filter({
                    filters: [
                        new Filter("lastName", FilterOperator.Contains, sQuery),
                        new Filter("firstName", FilterOperator.Contains, sQuery),
                        new Filter("city", FilterOperator.Contains, sQuery),
                        new Filter("street", FilterOperator.Contains, sQuery),
                    ],
                    and: false
                });
                aFilter.push(combinedFilter);
            }
            // get the reference to the table
            const oTable = this.byId("customers");
            //get the data from the table
            const oBinding = oTable.getBinding("items");
            console.log(aFilter)
            oBinding.filter(aFilter);
        },
        onCustomerChange(oEvent){
            // oBindingContext contains one row of our table (so one customer)
            const oBindingContext = oEvent.getParameter("listItem").getBindingContext();
            this.byId("ordersTable").setBindingContext(oBindingContext);
        },
        onPressCustomer(){
            this.getRouter().navTo("detail");
        }
	});
});
