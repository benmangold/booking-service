const db = require('../database/index.js')
var Promise = require("bluebird");

// bluebird seems to take care of opening and closing connection in db

describe('Test db connection', () => {
  test('db method should return a promise', () => {
      expect(typeof db.getListings()).toBe('object')
      return expect(db.getListings()).toBeInstanceOf(Promise)
  });
})