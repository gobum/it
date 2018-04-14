//#include ./print.js
//#include ./src.js

/** -----------------------------------------------------------------------------------------------
 * job.js
 *   任务调度框架
 */

function Job(parent) {
  var chain = Promise.resolve();
  var job = {
    it: it,
    chain() {
      return chain;
    },
    space: parent ? parent.space + "  " : "",
    log() {
      print(arguments, this.space + "  ");
    },
    time: Date.now(),
    totalJobs: 0,
    okeyJobs: 0,
    failJobs: 0
  }

  function it(value, func) {
    if (typeof func === "function") {
      job.totalJobs ++;
      chain = chain.then(function () {
        it.log(value);
        var child = Job(job);
        value = func(child.it);
        return Promise.resolve(value).then(child.chain);
      }).then(function(){
        job.okeyJobs ++;
      }).catch(function (error) {
        job.failJobs ++;
        job.log("#r⦸ %s", error && error.message || error);
      });
    }
    else {
      it.log(value ? "#g✔ %s" : "#r✘ %s", source());
    }
  }

  it.log = function () {
    print(arguments, job.space);
  }

  it.delay = function (time, value) {
    return new Promise(function (resolve) {
      setTimeout(resolve, time, value);
    });
  }

  it.sum = function () {
    chain = chain.then(function(){
      // it.log("#b✈ Total: %d, okey: %d, fail: %d", job.totalJobs, job.okeyJobs, job.failJobs);
      it.log("#bΣ Total: %d, okey: %d, fail: %d", job.totalJobs, job.okeyJobs, job.failJobs);
    });
  }

  return job;
}