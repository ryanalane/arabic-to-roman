var assert = require("assert");
var arabicToRoman = require("../arabic-to-roman");

describe("arabicToRoman", function() {
  // Single roman primitives
  it("returns a single roman primitive when its arabic analog is the input", function() {
    assert.equal(arabicToRoman(1), "I");
    assert.equal(arabicToRoman(5), "V");
    assert.equal(arabicToRoman(10), "X");
    assert.equal(arabicToRoman(50), "L");
    assert.equal(arabicToRoman(100), "C");
    assert.equal(arabicToRoman(500), "D");
    assert.equal(arabicToRoman(1000), "M");
  });
  
  // Repeated roman primitives for individual digits
  it("digits less than 4 should be represented by repeated primitives", function() {
    assert.equal(arabicToRoman(2), "II");
    assert.equal(arabicToRoman(30), "XXX");
  });

  // Mixed roman primitives for individual digits
  it("digits greater than 5, less than 9, should be represented by a 5-leading primitive like 'V' followed by repeating the next lowest 1-leading primitive like 'I's", function() {
    assert.equal(arabicToRoman(7), "VII");
    assert.equal(arabicToRoman(80), "LXXX");
    assert.equal(arabicToRoman(600), "DC");
  });

  // Mixed roman primitives for digits equal to 4
  it("digit equal to 4 should be represented by a 1-leading primitive like 'I' followed by the next greatest 5-leading primitive like 'V's", function() {
    assert.equal(arabicToRoman(40), "XL");
    assert.equal(arabicToRoman(400), "CD");

    assert.notEqual(arabicToRoman(4), "IIII");
  });
  
  // Mixed roman primitives for digits equal to 9 
  it("digit equal to 9 should be represented by a 1-leading primitive like 'X' followed by the next greatest 1-leading primitive like 'C's", function() {
    assert.equal(arabicToRoman(40), "XL");
    assert.equal(arabicToRoman(400), "CD");

    assert.notEqual(arabicToRoman(4), "IIII");
  });

  // Compound roman primitives
  it("arabic numerals not multiples of roman primitives > 1 are expressed as compound primitives", function() {
    assert.equal(arabicToRoman(463), "CDLXIII");
    assert.equal(arabicToRoman(12), "XII");
    assert.equal(arabicToRoman(2894), "MMDCCCXCIV");
  });
  // Numbers greater than 1000 
  // Input validation
});
