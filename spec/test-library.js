var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },

  isFalse: function(assertionToCheck) {
    if (!!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not falsey");
    }
  },

  isEqual: function(a, b) {
    if (a !== b) {
      throw new Error("Assertion failed: " + a + " is not equal to " + b);
    }
  },

  isNotEqual: function(a, b) {
    if (a === b) {
      throw new Error("Assertion failed: " + a + " is equal to " + b);
    }
  },

  isConstructedFrom: function(a, b) {
    if ( a instanceof b !== true) {
      throw new Error("Assertion failed: " + a + "is not an instance of " + b);
    }
  },

  isArrayEqual: function(a, b) {
    if (a.join("") !== b.join("")) {
      throw new Error("Assertion failed: " + a + " is not equal to " + b);
    }
  }

};
