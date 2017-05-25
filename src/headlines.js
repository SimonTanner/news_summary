(function(exports) {
  function Headlines(text) {
    if ( typeof text === undefined ) {
      this.rawData = "";
    } else {
      this.rawData = text;
    }

  }
  exports.Headlines = Headlines;
})(this);
