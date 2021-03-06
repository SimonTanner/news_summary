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

  Headlines.prototype.getHTML = function(index) {
    var headlinelist = this.listHeadlines().slice(0, index);
    string = "";
    counter = 0;
    headlinelist.forEach(function(headline) {
      string += `<li><div><a href='javascript:showSummary(${counter})'>` + headline + "</a></div></li>";
      counter ++;
    });
    return "<ul>" + string + "</ul>";
  };

  Headlines.prototype.getUrl = function(index){
    return this.rawData.response.results[index].webUrl;
  };

  Headlines.prototype.getSummaryHTML = function(summary) {
    return "<h2>Summary</h2><div>" + summary[0].text + "</div>";
  };

  exports.Headlines = Headlines;
})(this);
