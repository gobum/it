(function () {
  Object.defineProperties(Assert.prototype, {
    not: {
      get() {
        var words = this.words;
        if(~words.indexOf("not"))
        this.words.push("not");
        this._not = ! this._not;
      }
    }
  });

  function aux() {
    
  }
})();