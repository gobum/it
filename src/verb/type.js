(function () {
  var typenames = ["undefined", "boolean", "number", "string", "symbol", "object", "function"];

  function assert_typeof(assert, typename) {
    if(!~typenames.indexOf(typename)) {
      throw Error('Unknown type name: "'+typename+'"');
    }
    assert.state = typeof assert.any === typename && !this._not ? 1 : -1;
    assert.report();
  }

  function assert_typeof(assert, typename) {
    if(!~typenames.indexOf(typename)) {
      throw Error('Unknown type name: "'+typename+'"');
    }
    assert.state = typeof assert.any === typename && !this._not ? 1 : -1;
    assert.report();
  }
})();