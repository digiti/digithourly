var assert = require('assert')
var Digitime = require('../javascripts/digi_time.js');
describe('Digitime', function () {
  describe('#convert()', function() {

    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });

  });
});
