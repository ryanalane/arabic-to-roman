module.exports = function(arabicNumeral) {
  var arabicToRomanPrimitives = {
    "1": "I",
    "5": "V",
    "10": "X",
    "50": "L",
    "100": "C",
    "500": "D",
    "1000": "M"
  };

  var arabicPrimitives = [1000, 500, 100, 50, 10, 5, 1];

  function generateRoman(arabicInput, arabicPrimitiveIndex) {
    if(!arabicInput) {
      return "";
    }

    var arabicNumeral, arabicString;

    if(typeof arabicInput == 'number') {
      arabicNumeral = arabicInput;
      arabicString = arabicInput.toString();
    } else if(typeof arabicInput == 'string') {
      arabicNumeral = parseInt(arabicInput);
      arabicString = arabicInput;
    }
    arabicPrimitiveIndex = (typeof arabicPrimitiveIndex !== "undefined") ? arabicPrimitiveIndex : 0;

    var i = arabicPrimitiveIndex;
    for (i; i < arabicPrimitives.length; ++i) {
      var primitive = arabicPrimitives[i];

      if(arabicNumeral / primitive >= 1) {
        break;
      }
    }

    var highestDigit = parseInt(arabicString.charAt(0));
    var highestDigitRomanString;
    var restOfArabicString = arabicString.slice(1);

    if(arabicNumeral < 4000) {
       // if numeral is less than 4000
      
      var nextSmallestPrimitive = arabicPrimitives[i + 1] ? arabicPrimitives[i + 1] : -1;
      var nextLargestPrimitive = arabicPrimitives[i - 1]; // No check needed because numeral has already been checked to be less than 1000 (ie. i > 0)

      if(highestDigit == 9) {
          // The arabic numeral must be expressed in the form of "one [lower roman primitive] less than [higher roman primitive]" (ie. 90 => XC) 

        highestDigitRomanString = arabicToRomanPrimitives[nextSmallestPrimitive.toString()] +
          arabicToRomanPrimitives[nextLargestPrimitive.toString()];

      } else if(highestDigit == 4) {
          // The arabic numeral must be expressed in the form of "one [current roman primitive] less than [higher roman primitive]" (ie. 4 => IV) 

        highestDigitRomanString = arabicToRomanPrimitives[primitive.toString()] +
          arabicToRomanPrimitives[nextLargestPrimitive.toString()];

      } else if(highestDigit == 5) {
      // The arabic numeral can be expressed with a single primitive that begins with 5 (ie. 5 => V) 

        highestDigitRomanString = arabicToRomanPrimitives[primitive.toString()];
      } else if(highestDigit < 4) {
      // The arabic numeral can be expressed with repeated primitive (ie. 30 => XXX) 

        highestDigitRomanString = arabicToRomanPrimitives[primitive.toString()].repeat(highestDigit);
      } else if (highestDigit > 5) {
      // The arabic numeral can be expressed with single primitive and a repeated lower primitive (ie. 8 => VIII) 

        var repeatFactor = highestDigit - 5;
        highestDigitRomanString = arabicToRomanPrimitives[primitive.toString()] +
          arabicToRomanPrimitives[nextSmallestPrimitive.toString()].repeat(repeatFactor);
      }
    } else {
      // else if numeral is greater than or equal to 1000, and must be expressed in multiples of "M" 
    }

    return highestDigitRomanString + generateRoman(restOfArabicString);
  };

  return generateRoman(arabicNumeral);
};
