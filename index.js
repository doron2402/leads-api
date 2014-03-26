var Hapi = require('hapi'),
	models = require('./models'),
    routes = require('./routes'),
    server = new Hapi.Server('localhost', 9191, { cors: true });

//console.log(routes.Traffic);

server.route(
	[
		routes.Traffic.Route.setTraffic,
		routes.Traffic.Route.GetTrafficByDate,
		routes.Traffic.Route.GetTrafficByMedia,
		routes.Traffic.Route.GetTrafficByMultipleField,
		routes.Lead.Route.SetLead,
		routes.Lead.Route.GetLeadById,
		routes.Lead.Route.GetLeadByFields
	]
);


server.on('log', function (event, tags) {

    if (tags.error) {
        console.log(event);
    }
});

server.log(['dev', 'read', 'test', 'error'], 'Test event');

server.start(function () {
    console.log('Server started at: ' + server.info.uri);
});