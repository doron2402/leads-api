var Users = {};
Users.Route = {};
Users.Route.createUser = {
    method: 'POST',
    path: '/User/Create',
    handler: function (request, reply) {
	console.log(request.payload);
        reply(request.payload);
    }
};

Users.Route.updateUser = {
    method: 'PUT',
    path: '/User/Update',
    handler: function (request, reply) {
    console.log(request.payload);
        reply(request.payload);
    }
};

//Get User Id return User Object
Users.Route.GetUserData = {
    method: 'GET',
    path: '/Users/{UserId}',
    handler: function (request, reply) {
        reply({'UserId': request.params.UserId});
    }
};

Users.Route.GetAllUsers = {
    method: 'GET',
    path: '/Users/All',
    handler: function (request, reply) {
        reply({data: 'all'});
    }
};

Users.Route.GetUserByUsername = {

};

Users.Route.GetUserByEmail = {

};

Users.getUserInfo = function(field,value){

};



exports.Users = Users;
