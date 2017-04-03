'use strict';

describe('knowItAll.version module', function() {
  beforeEach(module('knowItAll.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
