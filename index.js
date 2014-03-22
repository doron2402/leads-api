var Hapi = require('hapi'),
    routes = require('./routes'),
    server = new Hapi.Server('localhost', 9191, { cors: true });

//console.log(routes);

server.route(
	[
		routes.Traffic.GetTrafficByCampignRoute,
		routes.Traffic.setTrafficRoute,
		routes.Lead.SetLeadRoute,
		routes.Lead.GetLeadByCampign,
		routes.Lead.GetLeadByFields
	]
);

server.start(function () {
    console.log('Server started at: ' + server.info.uri);
});
