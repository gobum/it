//#include ./print.js
//#include ./trace.js
//#include ./src.js

/** -----------------------------------------------------------------------------------------------
 * it.js
 *   测试驱动框架
 */

function It(parent, topic, func) {
  var space = parent ? parent.space + "  " : "";
  var jobs = [];
  var totalJobs = 0;

  function it(value, func) {
    if (typeof func === "function") {
      jobs[totalJobs++] = It(it, value, func);
    }
    else {
      func = trace(1);
      func = src(func.file, func.row, 1);
      log(value ? "#g✔ %s" : "#r✘ %s", func);
    }
  }

  return Object.defineProperties(it, {
    space: { value: space },
    run: { value: run },
    log: { value: log },
    delay: { value: delay }
    // sum() log("#bΣ Total: %d, okey: %d, fail: %d", totalJobs, okeyJobs, failJobs);
  });

  function run() {
    var promise = Promise.resolve(), i = 0;
    if (func) {
      promise = promise.then(function () {
        parent.log(topic);
        return func(it);
      }).catch(function (error) {
        log("#r⦸ %s", error && error.message || error);
      });
    }

    return promise.then(function next(job) {
      if (job = jobs[i++]) {
        return job.run().then(next);
      }
    });
  }

  function log() {
    print(arguments, space);
  }

  function delay(time, value) {
    return new Promise(function (resolve) {
      setTimeout(resolve, time, value);
    });
  }
}