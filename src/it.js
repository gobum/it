//#include ./tagof.js
//#include ./print.js
//#include ./assert.js

/** -----------------------------------------------------------------------------------------------
 * it.js
 *   测试驱动框架
 */

var it = (function () {
  function it(any, func) {
    var job = it.job;

    if (typeof any === "string" && typeof func === "function") {
      var child = Job(func, job, any);
      job.addChild(child);
      return tagof(func) === "Function"
        ? {
          then(func) {
            child.callback = Job(func, job);
            return { in: child.in };
          }
        }
        : {
          in: child.in
        };
    }
    else {
      return Assert(job, any);
    }
  }

  it.log = function log() {
    it.job.out.apply(undefined, arguments);
  };

  it.delay = function (time, value) {
    return new Promise(function (resolve) {
      setTimeout(resolve, time, value);
    });
  };

  function Job(job, parent, topic) {
    job.parent = parent;
    var dent = job.dent = parent ? parent.dent + 2 : 0;
    var jobs = [];
    var totalJobs = 0;
    var asserts = [];
    var time = 0;
    job.addChild = jobs.push.bind(jobs);
    job.run = run;
    job.jobs = runs;
    job.out = out;
    job.in = function (_time) { time = _time };
    job.settle = settle;

    return job;

    function runs() {
      var job = it.job, i = 0;
      return Promise.resolve().then(function next(job) {
        if (job = jobs[i++]) {
          return job.run()
            .then(next);
        }
      }).then(
        function () {
          it.job = job;
        },
        function (error) {
          it.job = job;
          throw error;
        }
      );
    }

    function run() {
      var promise = new Promise(function (resolve, reject) {
        parent.out(topic);
        it.job = job;
        if (job.callback) {
          job(resolve, reject);
        }
        else {
          resolve(job());
        }
      });

      if (time) {
        var timeout;
        promise = Promise.race([
          promise.then(
            function (value) {
              clearTimeout(timeout);
              return value;
            },
            function (error) {
              clearTimeout(timeout);
              throw error;
            }
          ),
          new Promise(function (resolve, reject) {
            timeout = setTimeout(reject, time, Error("Timeout " + time + "ms!"));
          })
        ]);
      }

      if (job.callback) {
        promise = promise.then(job.callback);
      }
      promise = promise.catch(function (error) {
        out("#r⦸ %s", error && error.message || error);
      }).then(runs);
      if (job.callback) {
        promise = promise.then(job.callback.jobs);
      }
      return promise;
    }

    function out() {
      print(arguments, dent);
    }

    function settle() {

    }
  }

  return Job(it.job = it);
})();
