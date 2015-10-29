var express = require("express");
var path = require("path");

var app = express();

app.configure(function () {

	app.set('port', process.env.PORT || 3000);

	app.set("views", path.join(__dirname, "../www/server/app/views/layouts"));
	app.set("view engine", "hbs");

	app.use("/css", express.static("www/client/css"));
	app.use("/js", express.static("www/client/js"));

});

var server = app.listen(app.get('port'), function () {

	var host = server.address().address || "localhost";
	var port = server.address().port;

	console.log("Example app listening at http://localhost:%s", host, port);
});
