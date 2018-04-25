(function(){
  var types = [Object, Function, String, RegExp, Array, Boolean, Number, Date, Symbol, Error,
    Promise, Map, Set, WeakMap, WeakSet, Proxy,
    ArrayBuffer, DataView, Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array,
    Float32Array, Float64Array, 
    EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError];

  function assert_instanceof(assert, type) {
    assert.state = assert.any instanceof type && !this._not ? 1 : -1;
    assert.report();
  }

  var instance_of_any = {
  };

  for(type of types) {
    Object.defineProperty(instance_of_any, type.name, {
      get: getter_of(type)
    })
  }

  function getter_of(type) {
    return function() {
      assert_instanceof(this, type);
    }
  }

  function asserter_of(assert) {
    return proxify(
      function(type) {
        assert_instanceof(assert, type);
      },
      assert,
      instance_of_any
    )
  }

  Assert.define({
    // it().instanceof
    get instanceof() {
      Object.setPrototypeOf(this, Assert.prototype);
      return asserter_of(this);
    },

    // it().instance.of
    get instance() {
      var me = Object.setPrototypeOf(this, Assert.prototype);
      return {
        of: asserter_of(this) 
      }
    }
  });

})();