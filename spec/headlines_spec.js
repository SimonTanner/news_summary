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

(function() {
  console.log("Unit test: Headlines can return a string of HTML formatted headlines");
  var headlines = new Headlines(guardianApiReq1);
  var singleheadline = [];
  singleheadline.push(headlines.listHeadlines()[0]);
  assert.isEqual(headlines.getHTML(singleheadline), "<ul><li><div>Theresa May plans anti-extremism drive if Tories win election</div></li></ul>");
})();
