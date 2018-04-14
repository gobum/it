//#include ./print.js
//#include ./src.js

/** -----------------------------------------------------------------------------------------------
 * it.js
 *   测试驱动框架
 */

function It(parent) {
  function it(value, func) {
    if (typeof func === "function") {
      it.promise = it.promise.then(function () {
        it.log(value);
        var child = It(it);
        return Promise.resolve(func(child)).then(function(){
          return child.promise;
        });
      }).catch(function (error) {
        // it.log("#r⦸ %s", error && error.message || error);
        print(["#r⦸ %s", error && error.message || error], it.space + "  ");
      });
    }
    else {
      it.log(value ? "#g✔ %s" : "#r✘ %s", source());
    }
  }

  it.space = parent ? parent.space + "  " : "";

  it.promise = Promise.resolve();

  it.log = function() {
    print(arguments, it.space);
  }

  it.delay = function (time, value) {
    return new Promise(function (resolve) {
      setTimeout(resolve, time, value);
    });
  }

  return it;
}