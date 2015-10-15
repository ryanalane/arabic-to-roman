var assert = require("assert");
var arabicToRoman = require("../arabic-to-roman");

describe("arabicToRoman", function() {
  // Single Roman primitives
  it("returns a single Roman primitive when its Arabic analog is the input", function() {
    assert.equal(arabicToRoman(1), "I");
    assert.equal(arabicToRoman(5), "V");
    assert.equal(arabicToRoman(10), "X");
    assert.equal(arabicToRoman(50), "L");
    assert.equal(arabicToRoman(100), "C");
    assert.equal(arabicToRoman(500), "D");
    assert.equal(arabicToRoman(1000), "M");
  });
});
