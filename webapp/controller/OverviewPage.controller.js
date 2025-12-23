sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.dp.zsalesorder.controller.OverviewPage", {
        onInit() {
            this.oModel = new sap.ui.model.odata.ODataModel("/v2/northwind/northwind.svc/");
            this.getView().setModel(this.oModel);
        }
    });
});