//#include ../lib/proxify.js

(function () {

  var is_any = Object.setPrototypeOf({
    get null() {
      this.state = this.any === null && !this._not ? 1 : -1;
      this.report();
    },
    get undefined() {
      this.state = this.any === undefined && !this._not ? 1 : -1;
      this.report();
    },
    get ok() {
      this.state = this.any && !this._not ? 1 : -1;
      this.report();
    },
    get true() {
      this.state = this.any === true && !this._not ? 1 : -1;
      this.report();
    },
    get false() {
      this.state = this.any === false && !this._not ? 1 : -1;
      this.report();
    },
    get boolean() {
      this.state = typeof this.any === "boolean" && !this._not ? 1 : -1;
      this.report();
    },
    get number() {
      this.state = typeof this.any === "number" && !this._not ? 1 : -1;
      this.report();
    },
    get string() {
      this.state = typeof this.any === "string" && !this._not ? 1 : -1;
      this.report();
    },
    get symbol() {
      this.state = typeof this.any === "symbol" && !this._not ? 1 : -1;
      this.report();
    },
    get object() {
      var any = this.any;
      this.state = any && ( typeof any === "object" || typeof any === "function" ) && !this._not ? 1 : -1;
      this.report();
    },
    get function() {
      this.state = typeof this.any === "function" && !this._not ? 1 : -1;
      this.report();
    },
}, Assert.prototype);

  Assert.define({
    get is() {
      return Object.setPrototypeOf(this, is_any);
    }
  });
})();