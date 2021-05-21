sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("rt.sap.ui51.controller.Tiles", {
            onInit: function () {
                let myTilesModel = new JSONModel("../model/Tiles.json");
                this.getView().setModel(myTilesModel, "Tiles")
            },
            press: function(oRoute){
                this.getOwnerComponent().getRouter().navTo(oRoute);
            }            
        });
    });
