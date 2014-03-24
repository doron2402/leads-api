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

Lead.GetLeadByCampignRoute = {
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

Lead.GetLeadByFieldsRoute = {
	method: 'GET',
	path: '/Lead/{CampignId}/{Field}/{Value}',
	handler: function (request, reply) {
		var FieldArr = request.params.Field.split(','),
			ValueArr = request.params.Value.split(',');

		return reply({data: request.params, Values: ValueArr, Fields: FieldArr});
	}
};

exports.Lead = Lead;