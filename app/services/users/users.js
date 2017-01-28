// Create module and factory of Users
angular.module('api.users', []).
  factory('Users', () => {
    const Users = {};

    return Users;
  });
