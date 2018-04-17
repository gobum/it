//#include ./trace.js
//#include ./src.js

/** -----------------------------------------------------------------------------------------------
 * assert.js
 *   原始断言类
 */

function Assert(job, any) {
  return Object.setPrototypeOf({
    job: job,
    any: any,
    _not: 0,
    head: tracehead(2),
    state: 0
  }, Assert.prototype);
}

Assert.prototype = {
  get desc() {
    return this.topic || this.source;
  },

  get source() {
    var head = this.head;
    if(head) {
      var file = head.file, row = head.row;
      var tail = tracetail(file, row);
      if(tail) {
        return src(file, row, tail.row);
      }
    }
    return "<codeless>";
  },

  get ok() {
    if(this.any && !this._not) {
      this.state = 1;
    }
    else {
      this.state = -1;
      // this.reason = inspect(this.any) + as_is_ok(this._not);
    }
    this.report();
  },

  report() {
    var state = this.state;
    var desc = indent(this.desc, 2).trim();
    if(state>0) {
      desc = "#g✓ " + desc;
    }
    else if(state<0) {
      desc = "#r✗ " + desc;
      if(this.reason) {
        desc += "\n#s" + ident(this.reson, 2);
      }
    }
    else {
      desc = "#y " + desc;
    }
    this.job.out(desc);
  }
}

