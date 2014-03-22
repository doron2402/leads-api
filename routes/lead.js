'use strict';
var Lead = {},
	_ = require('lodash');

Lead.SetLeadRoute = {
	method: 'POST',
    path: '/Lead/Set',
    handler: function (request, reply) {
        return reply(request.payload);
    }
};

Lead.GetLeadByCampign = {
	method: 'GET',
    path: '/Lead/{CampignId}/{LeadId?}',
    handler: function (request, reply) {
		if (request.params && request.params.LeadId) {
			//return a single lead object
			return reply({
				'CampignId': request.params.CampignId,
				'LeadId': request.params.LeadId
			});
		}
		//return all leads by campign Id
		return reply({
			'CampignId': request.params.CampignId,
        });
    }
};

Lead.GetLeadByFields = {
	method: 'GET',
	path: '/Lead/{CampignId}/{Field}/{Value}',
	handler: function (request, reply) {
		if (request.params && request.params.Field.length == request.params.Value.length) {
			console.log('yay');

		}
		var d = JSON.stringify(request.params.Field);
			console.log(d.length);
			console.log(d);
		return reply({data: request.params, len: request.params.Field.length});
	}
};

exports.Lead = Lead;