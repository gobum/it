//#include ./lib/tagof.js
//#include @gobum/go
//#include ./promise.js
//#include ./print.js
//#include ./assert.js

/** -----------------------------------------------------------------------------------------------
 * it.js
 *   测试驱动框架
 */

var it = (function () {
  function it(any) {
    return it.job.settle().assert = Assert(arguments);
  }

  it.do = it.does = function (topic, job) {
    it.job.settle();
    if (typeof job === "function") {
      Job(job, topic);
      it.job.add(job);

      return tagof(job) === "Function"
        ? {
          then(func) {
            job.callback = Job(func, job);
            return { in: job.in };
          }
        }
        : { in: job.in };
    }
  }

  it.log = function () {
    var job = it.job;
    job.settle();
    job.log.apply(undefined, arguments);
  };

  it.delay = function (time, value) {
    it.job.settle();
    return new Promise(function (resolve) {
      setTimeout(resolve, time, value);
    });
  };

  function Job(job, topic) {
    var dent = job.dent = job === it ?  0 : it.job.dent + 2;
    var jobs = [];
    var totalJobs = 0;
    var asserts = [];
    var time = 0;
    job.add = add;
    job.run = run;
    job.jobs = runs;
    job.log = log;
    job.in = function (_time) { time = _time };
    job.assert = null;
    job.settle = settle;

    return job;

    function add(job) {
      return jobs[totalJobs++] = job;
    }

    function runs() {
      var job = it.job, i = 0;
      return Promise.resolve().then(function next(job) {
        if (job = jobs[i++]) {
          return job.run()
            .then(next);
        }
      }).finally(function () {
        it.job = job;
      });
    }

    function run() {
      var promise = new Promise(function (resolve, reject) {
        out(topic);
        it.job = job;
        if (job.callback) {
          job(resolve, reject);
        }
        else {
          resolve(go(job()));
        }
      });

      if (time) {
        var timeout;
        promise = Promise.race([
          promise.finally(function () {
            clearTimeout(timeout);
          }),
          new Promise(function (resolve, reject) {
            timeout = setTimeout(reject, time, Error("Timeout " + time + "ms!"));
          })
        ]);
      }

      promise = promise.finally(settle);
      if (job.callback) {
        promise = promise.then(job.callback);
      }
      promise = promise.finally(settle);
      promise = promise.catch(function (error) {
        log("#m⦸ %s", error && error.message || error);
      }).then(runs);
      if (job.callback) {
        promise = promise.then(job.callback.jobs);
      }
      return promise;
    }

    function out() {
      print(arguments, dent-2);
    }
    
    function log() {
      print(arguments, dent);
    }

    function settle() {
      var assert = job.assert;
      if (assert) {
        if (!assert.state) {
          assert.settle();
        }
        job.assert = null;
      }
      return job;
    }
  }

  return Job(it.job = it);
})();
