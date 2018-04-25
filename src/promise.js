/** -----------------------------------------------------------------------------------------------
 * promise.js
 */

(function (prototype, define) {
  if (!prototype.finally) {
    define(prototype, {
      finally: {
        value(onFinally) {
          return this.then(
            function (value) {
              onFinally();
              return value;
            },
            function (error) {
              onFinally();
              throw error;
            }
          );
        }
      }
    });
  }
})(Promise.prototype, Object.defineProperties);