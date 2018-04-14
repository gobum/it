/** -----------------------------------------------------------------------------------------------
 * assert.js
 *   原始断言类
 */

function Assert(value) {
  return Object.setPrototypeOf({
    value: value,
    trace: trace(2)
  }, Assert.prototype);
}
