(function() {
  console.log("Unit test: Headlines model can store a string");

  var headlines = new Headlines("Hello world");

  assert.isEqual(headlines.rawData, "Hello world");

})();

(function() {
  console.log("Unit test: Headlines can format the text from an api request to the Guardian website");
  var headlines = new Headlines(guardianApiReq1);
  assert.isArrayEqual(headlines.listHeadlines(), headlineArray1);
})();
