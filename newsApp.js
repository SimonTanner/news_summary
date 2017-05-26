var headlines = new Headlines(guardianApiReq1);

function getStories() {
  element = document.getElementById('headlines');
  element.innerHTML = headlines.getHTML(6);
}

getStories();

function getSummary(id){
  var url = headlines.getUrl(id);
  return "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + url
}

function getResponse(id) {
  var summaryResponse = [];
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if(request.readyState === 4 && request.status === 200) {
      summaryResponse.push(JSON.parse(request.responseText));
      }
  };
  request.open('GET', getSummary(id));
  request.send(null);
  return summaryResponse;
}

function showSummary(id) {
  var summary = getResponse(id);
  setTimeout(function() {
    element = document.getElementById('summary');
    element.innerHTML = headlines.getSummaryHTML(summary);
  },2000);
}
