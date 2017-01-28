// Create module and factory of Users
angular.module('api.users', []).
  factory('Users', () => {
    const Users = {};

    // Define all to pass test
    Users.all = () => {

    };

    return Users;
  });
