var getSECCurveByName = require('../lib/ecc-named')

require('terst')

describe('+ getSECCurveByName(curveName)', function() {
  describe('> when the bitcoin curve is passed', function() {
    it('should return the proper curve', function() {
      var curve = getSECCurveByName('secp256k1')
      T (curve)
    })
  })
})




