

function getHeadlines() {
  return "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?"
}

function getStories() {
  element = document.getElementById('headlines');
  element.innerHTML = headlines.getHTML(10);
}



function getSummary(id){
  var url = headlines.getUrl(id);
  return "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + url
}

function getResponse(method) {
  var Response = [];
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if(request.readyState === 4 && request.status === 200) {
      Response.push(JSON.parse(request.responseText));
      }
  };
  request.open('GET', method);
  request.send(null);

  return Response;
}

function showSummary(id) {
  var summary = getResponse(getSummary(id));
  setTimeout(function() {
    element = document.getElementById('summary');
    element.innerHTML = headlines.getSummaryHTML(summary);
  },2000);
}
var guardianNews = getResponse(getHeadlines());
var headlines;
setTimeout(function() {
  guardianNews = guardianNews[0];
  headlines = new Headlines(guardianNews);
}, 2000);

setTimeout(function() {
  getStories();
}, 3000);

// var headlines = new Headlines(guardianApiReq1);
