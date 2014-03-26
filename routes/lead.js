'use strict';
var Lead = {},
	_ = require('lodash');

Lead.Route = {};

Lead.Route.SetLead = {
	method: 'POST',
    path: '/Lead/Set',
    handler: function (request, reply) {
        return reply(request.payload);
    }
};

Lead.Route.GetLeadById = {
	method: 'GET',
    path: '/Lead/{CampignId}/{LeadId}',
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

Lead.Route.GetLeadByFields = {
	method: 'GET',
	path: '/Lead/{CampignId}/Fields/{Field*}',
	handler: function (request, reply) {
		var campign_id = parseInt(request.params.CampignId,10),
			field_array = request.params.Field.split('/'),
			key_arr = [],
			val_arr = [];

		for (var i = 0; i < field_array.length; i++) {
			if (i % 2 == 0)
				key_arr.push(field_array[i]);
			else
				val_arr.push(field_array[i]);
		};
		return reply({campign_id: campign_id, key: key_arr, val: val_arr});
	}
};

exports.Lead = Lead;