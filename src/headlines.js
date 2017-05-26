(function(exports) {
  function Headlines(text) {
    if ( typeof text === undefined ) {
      this.rawData = "";
    } else {
      this.rawData = text;
    }
  }

  Headlines.prototype.listHeadlines = function() {
    var headlineList = [];
    this.rawData.response.results.forEach(function(story) {
      headlineList.push(story.webTitle);
    });
    return headlineList;
  };

  exports.Headlines = Headlines;
})(this);
