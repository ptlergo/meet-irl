describe('Users factory', () => {

  let Users;

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

});
