(function () {
  var typenames = ["undefined", "boolean", "number", "string", "symbol", "object", "function"];

  function assert_typeof(assert, typename) {
    if(!~typenames.indexOf(typename)) {
      throw Error('Unknown type name: "'+typename+'"');
    }
    assert.state = typeof assert.any === typename && !this._not ? 1 : -1;
    assert.report();
  }

  var type_of_any = {};

  for(typename of typenames) {
    Object.defineProperty(type_of_any, typename, {
      get: getter_of(typename)
    })
  }

  function getter_of(typename) {
    return function() {
      assert_typeof(this, typename);
    }
  }

  Assert.define({
    // it().typeof
    get typeof() {
      return proxify(
        function (typename) {
          assert_typeof(this, typename);
        },
        Object.setPrototypeOf(this, Assert.prototype),
        type_of_any
      );
    },

    // it().type.of
    get type() {
      var me = Object.setPrototypeOf(this, Assert.prototype);
      return {
        get of() {
          return proxify(
            function (typename) {
              assert_typeof(me, typename);
            },
            me,
            type_of_any
          );
        }
      }
    }
  });

})();