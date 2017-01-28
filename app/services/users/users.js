// Create module and factory of Users
angular.module('api.users', []).
  factory('Users', () => {

    const Users = {};

    // Array of users to ttest factory
    const userList = [
      {
        id: '0',
        name: 'Jane',
        role: 'Designer',
        location: 'New York',
        twitter: 'gijane'
      },
      {
        id: '1',
        name: 'Bob',
        role: 'Developer',
        location: 'New York',
        twitter: 'billybob'
      },
      {
        id: '2',
        name: 'Jim',
        role: 'Developer',
        location: 'Chicago',
        twitter: 'jimbo'
      }
    ];

    // Define all to pass test
    Users.all = () => {
      // Return array of users
      return userList;
    };

    return Users;
  });
