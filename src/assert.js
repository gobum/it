//#include ./lib/nop.js
//#include ./trace.js
//#include ./src.js

/** -----------------------------------------------------------------------------------------------
 * assert.js
 *   原始断言类
 */

var Assert = function (setPrototype) {

  function Assert(args) {
    return setPrototype({
      any: args[0],
      topic: "",
      _not: 0,
      args: args,
      head: tracehead(2),
      state: 0
    }, it_proto);
  }

  Assert.prototype = {
    get desc() {
      return this.topic || this.source;
    },

    get source() {
      var head = this.head;
      if (head) {
        var file = head.file;
        head = head.row;
        var tail = tracetail(file, head);
        if (tail) {
          tail = tail.row;
        }
        else {
          tail = head + 1;
        }
        if (tail <= head) {
          tail = head + 1;
        }
        return src(file, head, tail);
      }
      return "<codeless>";
    },

    report() {
      var state = this.state;
      var desc = indent(this.desc, 2).trim();
      if (state > 0) {
        desc = "#g√ " + desc;
      }
      else if (state < 0) {
        desc = "#r☓ " + desc;
        if (this.reason) {
          desc += "\n#s" + indent(this.reason, 2);
        }
      }
      else {
        desc = "#y⚠ " + desc;
      }
      it.job.log(desc);
    },

    settle() {
      this.report();
    },

    get not() {
      this._not = !this._not;
      return Object.setPrototypeOf(this, Assert.prototype); 
    }
  }

  var it_proto = Object.setPrototypeOf({
    settle() {
      var args = this.args;
      if (args.length === 1) {
        this.state = args[0] ? 1 : -1;
      }
      else if (typeof args[1] === "function") {
        this.topic = args[0];
        try {
          args[1]();
          this.state = 1;
        }
        catch (error) {
          this.state = -1;
          this.reason = error && error.mesage || error;
        }
      }
      this.report();
    }
  }, Assert.prototype);

  Assert.define = function (props) {
    Object.defineProperties(Assert.prototype, Object.getOwnPropertyDescriptors(props));
  };

  return Assert;
}(Object.setPrototypeOf);

//#include ./verb/typeof.js
//#include ./verb/instanceof.js
//#include ./verb/is.js
