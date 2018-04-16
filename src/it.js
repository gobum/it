//#include ./tagof.js
//#include ./print.js
//#include ./trace.js
//#include ./src.js

/** -----------------------------------------------------------------------------------------------
 * it.js
 *   测试驱动框架
 */

var it = (function () {
  function jobify(func, parent, topic) {
    func.parent = parent;
    func.space = parent ? parent.space + "  " : "";
    func.topic = topic;
    func.jobs = [];
    func.out = _out;
    return func;
  }

  function it(any, func) {
    var job = itsjob(it);

    if (typeof any === "string" && typeof func === "function") {
      job.jobs.push(jobify(func, job, any));
      return tagof(func) === "Function"
        ? {
          then(callback) {
            jobify(callback, job);
            func.callback = callback;
            return {
              in(time) {
                func.time = time;
              }
            };
          }
        }
        : {
          in(time) {
            func.time = time;
          }
        };
    }
    else {
      func = trace(1);
      func = src(func.file, func.row, 1);
      job.out(any ? "#g✓ %s" : "#r✗ %s", func);
    }
  }

  jobify(it);

  it.run = function () {
    runs(it.jobs);
  }

  it.log = function log() {
    var job = itsjob(log);
    print(arguments, job.space);
  };

  it.delay = function (time, value) {
    return new Promise(function (resolve) {
      setTimeout(resolve, time, value);
    });
  };

  function itsjob(it) {
    return it.caller ? it.caller.jobs ? it.caller : it : it;
  }

  function runs(jobs, i) {
    i = 0;
    return Promise.resolve().then(function next(job) {
      if (job = jobs[i++]) {
        return run(job).then(next);
      }
    });
  }

  function run(job) {
    var promise = new Promise(function(resolve, reject) {
      job.parent.out(job.topic);
      if(job.callback) {
        job(resolve, reject);
      }
      else {
        resolve(job());
      }
    });
    if(job.callback) {
      promise = promise.then(job.callback);
    }
    promise = promise.catch(function(error){
      job.out("#r⦸ %s", error && error.message || error);
    }).then(function(){
      return runs(job.jobs);
    });
    if(job.callback) {
      promise = promise.then(function(){
        return runs(job.callback.jobs);
      });
    }

    return promise;
  }

  function _out() {
    print(arguments, this.space);
  }

  return it;
})();
