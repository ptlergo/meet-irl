describe('Users factory', () => {

  let Users;

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

  // Single user expected result when calling findById(2)
  const singleUser = {
        id: '2',
        name: 'Jim',
        role: 'Developer',
        location: 'Chicago',
        twitter: 'jimbo'
      };

  // Before each test load our api.users module
  beforeEach(angular.mock.module('api.users'));

  // Before each test set our injected Users factory (_Users_) to our local Users variable
  beforeEach(inject((_Users_) => {
    Users = _Users_;
  }));

  // A simple test to verify the Users factory exists
  it('should exist', () => {
    expect(Users).toBeDefined();
  });

  // A set of tests for our Users.all() method
  describe('.all()', () => {

    // A simple test to verify the method all exists
    it('should exist', () => {
      expect(Users.all).toBeDefined();
    });

    // A test to verify all() returns array of users
    it('should return array of users', () => {
      expect(Users.all()).toEqual(userList);
    });

  });

  // A set of tests for our Users.findById() method
  describe('.findById(id)', () => {

    // Test if method exists
    it('should exist', () => {
      expect(Users.findById).toBeDefined();
    });

    // Test to verify findById() call with id '2' returns user of id '2'
    it('should return user object if exists', () => {
      expect(Users.findById('2')).toEqual(singleUser);
    });

  });

});
