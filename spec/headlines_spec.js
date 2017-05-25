(function() {
  console.log("Unit test: Headlines model can store a string");

  var headlines = new Headlines("Hello world");

  assert.isEqual(headlines.rawData, "Hello world");

})();
