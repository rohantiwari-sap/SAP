sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("rt.sap.ui51.controller.countdown.Countdown", {
            onInit: function () {
                this.time = {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                }
                let myTilesModel = new JSONModel(this.time);
                this.getView().setModel(myTilesModel, "timer")
                setInterval(this.calculateTime.bind(this), 1000);
                // this.calculateTime();
            },
            calculateTime: function () {
                let techedDate = new Date("Nov 07 2021");
                let currentDate = new Date();
                let diff = techedDate.getTime() - currentDate.getTime();
                this.time.days = Math.floor(diff / (1000 * 60 * 60 * 24));
                this.time.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                this.time.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                this.time.seconds = Math.floor((diff % (1000 * 60)) / (1000));
                this.getView().getModel("timer").setData(this.time);
            },
            press: function () {
                MessageToast.show("What you want to see Next\nApplication was ended on previous screen itself :p");
            }
        });
    });
