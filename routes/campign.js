'use strict';
var Campign = {},
	_ = require('lodash'),
	Hapi = require('hapi');

Campign.Route = {};

Campign.Route.createCampign = {
	method: 'POST',
	path: '/Campign/Create',
	config: {
		handler: function (request, reply) {
			console.log(request.payload.campign);
			return reply({response: 'OK', result: request.payload});
		},
		validate: {
    	    payload: {
    	        campign: Hapi.types.Object({
    				name: Hapi.types.String().min(1).max(10).required()
				})
    	    }
    	}
	}
};

Campign.Route.getCampignPerformance = {
	method: 'GET',
    path: '/Campign/Performance',
    handler: function (request, reply) {
        return reply(request.payload);
    }
};

Campign.Route.getCampignData = {
	method: 'GET',
    path: '/Campign/Data/{CampignId}',
    handler: function (request, reply) {
        return reply(request.payload);
    }
};

Campign.Route.getCampignPerformanceByField = {
	method: 'GET',
    path: '/Campign/Performance/{Field}',
    handler: function (request, reply) {
        return reply(request.payload);
    }
};

Campign.Route.deleteCampign = {
	method: 'DELETE',
	path: '/Campign/DELETE',
	handler: function (request, reply) {
		return reply({response: 'OK'});
	}
};

Campign.Route.updateCampign = {
	method: 'PUT',
	path: '/Campign/Update',
	handler: function (request, reply) {
		return reply({response: 'OK', result: {}});
	}
};


exports.Campign = Campign;