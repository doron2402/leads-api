var Traffic = {};
Traffic.Route = {};

Traffic.Route.setTraffic = {
    method: 'POST',
    path: '/Traffic/Set',
    handler: function (request, reply) {
	console.log(request.payload);
        reply(request.payload);
    }
};

Traffic.Route.GetTrafficByDate = {
    method: 'GET',
    path: '/Traffic/{CampignId}/Start/{StartDate}/End/{EndDate}',
    handler: function (request, reply) {
        var campign_id = parseInt(request.params.CampignId, 10),
            start_date = request.params.StartDate,
            end_date = request.params.EndDate;
        reply({'CampignId': campign_id, start_date: start_date, end_date: end_date});
    }
};

Traffic.Route.GetTrafficByMedia = {
  method: 'GET',
  path: '/Traffic/{CampignId}/Media/{Media}',
  handler: function (request, reply) {
    var campign_id = parseInt(request.params.CampignId, 10),
        media = request.params.Media;

    reply({campign_id: campign_id, media: media});
  }
};

Traffic.Route.GetTrafficByMultipleField = {
    method: 'GET',
    path: '/Traffic/{CampignId}/Fields/{Field*}',
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

exports.Traffic = Traffic;
