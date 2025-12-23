/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["com/dp/zsalesorder/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
