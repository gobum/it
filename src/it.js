//#include ./print.js
//#include ./trace.js
//#include ./src.js
//#include ./assert.js

/** -----------------------------------------------------------------------------------------------
 * it.js
 *   测试驱动框架
 */

function It(parent) {
  var space = parent ? parent.space + "  " : "";
  var time = 0;
  var totalJobs = 0;
  var okeyJobs = 0;
  var failJobs = 0;
  var assert = null;
  var chain = Promise.resolve();

  function it(value, func) {
    reassert();
    if (typeof func === "function") {
      totalJobs++;
      chain = chain.then(function () {
        log(value);
        var child = It(it);
        try {
          value = Promise.resolve(func(child));
        }
        catch(error) {
          value = Promise.reject(error);
        }
        return value.then(child.fulfill, child.reject)
          .then(child.chain);
      }).then(function () {
        okeyJobs++;
      }).catch(function (error) {
        failJobs++;
        log("#r⦸ %s", error && error.message || error);
      });
      return {
        in(_time) {
          time = _time
        }
      };
    }
    else {
      assert = Assert(value);
    }
  }

  function reassert() {
    if (assert) {
      if (assert instanceof Assert) {
        var topic = src(assert.trace.file, assert.trace.row, 1);
        log(assert.value ? "#g✔ %s" : "#r✘ %s", topic);
      }
      assert = null;
    }
  }

  function log() {
    print(arguments, space);
  }

  return Object.defineProperties(it, {
    space: { value: space },

    fulfill: { value: reassert },

    reject: { value(error) { reassert(); throw error; } },

    chain: { value() { return chain; } },
    
    log: { value() { reassert(); print(arguments, space); } },
    
    delay: {
      value(time, value) {
        reassert();
        return new Promise(function (resolve) {
          setTimeout(resolve, time, value);
        });
      }
    },
    
    sum: {
      value() {
        reassert();
        chain = chain.then(function () {
          log("#bΣ Total: %d, okey: %d, fail: %d", totalJobs, okeyJobs, failJobs);
        });
      }
    }
  });
}