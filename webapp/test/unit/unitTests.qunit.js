/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"rtsap./ui5_1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
