var Traffic = {};

Traffic.setTrafficRoute = {
    method: 'POST',
    path: '/Traffic/Set',
    handler: function (request, reply) {
	console.log(request.payload);
        reply(request.payload);
    }
};

Traffic.GetTrafficByCampignRoute = {
    method: 'GET',
    path: '/Traffic/{CampignId}',
    handler: function (request, reply) {
        reply({'CampignId': request.params.CampignId});
    }
};

exports.Traffic = Traffic;
