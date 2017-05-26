var headlines = new Headlines(guardianApiReq1);

function controller() {
  element = document.getElementById('headlines');
  element.innerHTML = headlines.getHTML(6);
}

controller();
