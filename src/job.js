//#include ./print.js
//#include ./trace.js
//#include ./src.js
//#include ./assert.js

/** -----------------------------------------------------------------------------------------------
 * job.js
 *   任务调度框架
 */

function Job(parent) {
  var space = parent ? parent.space + "  " : "";
  var jobspace = space + "  ";
  var assert = null;
  var job = {
    it: it,
    
    chain() { return chain; },
    reassert: reassert,
    space: space,

    time: Date.now(),
    totalJobs: 0,
    okeyJobs: 0,
    failJobs: 0
  }

  var chain = Promise.resolve();  //.then(reassert, reassert);

  function it(value, func) {
    reassert();
    if (typeof func === "function") {
      job.totalJobs++;
      chain = chain.then(function () {
        log(value);
        var child = Job(job);
        value = func(child.it);
        return Promise.resolve(value)
          .then(child.reassert, child.reassert)
          .then(child.chain);
      }).then(function () {
        job.okeyJobs++;
      }).catch(function (error) {
        job.failJobs++;
        joblog("#r⦸ %s", error && error.message || error);
      });
    }
    else {
      assert = Assert(value);
    }
  }

  function reassert(error) {
    if(assert) {
      if(assert instanceof Assert) {
        var topic = src(assert.trace.file, assert.trace.row, 1);
        log(assert.value ? "#g✔ %s" : "#r✘ %s", topic);            
      }
      assert = null;
    }
    if(error) {
      throw error;
    }
  }

  it.log = function () {
    reassert();
    print(arguments, space);
  }

  it.delay = function (time, value) {
    reassert();
    return new Promise(function (resolve) {
      setTimeout(resolve, time, value);
    });
  }

  it.sum = function () {
    reassert();
    chain = chain.then(function () {
      // it.log("#b✈ Total: %d, okey: %d, fail: %d", job.totalJobs, job.okeyJobs, job.failJobs);
      log("#bΣ Total: %d, okey: %d, fail: %d", job.totalJobs, job.okeyJobs, job.failJobs);
    });
  }

  function log() {
    print(arguments, space);
  }

  function joblog() {
    print(arguments, jobspace);
  }
   
  return job;
}