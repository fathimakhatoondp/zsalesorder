/*global QUnit*/

sap.ui.define([
	"com/dp/zsalesorder/controller/OverviewPage.controller"
], function (Controller) {
	"use strict";

	QUnit.module("OverviewPage Controller");

	QUnit.test("I should test the OverviewPage controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
