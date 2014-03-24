var Hapi = require('hapi'),
	models = require('./models'),
    routes = require('./routes'),
    server = new Hapi.Server('localhost', 9191, { cors: true });

//console.log(routes);

server.route(
	[
		routes.Traffic.GetTrafficByCampignRoute,
		routes.Traffic.setTrafficRoute,
		routes.Lead.SetLeadRouteRoute,
		routes.Lead.GetLeadByCampignRoute,
		routes.Lead.GetLeadByFieldsRoute,
		routes.Campign.Route.getCampignPerformance,
		routes.Campign.Route.getCampignPerformanceByField
	]
);

server.start(function () {
    console.log('Server started at: ' + server.info.uri);
});
