/** -----------------------------------------------------------------------------------------------
 * trace.js
 *   代码定位信息
 */

var trace = function (reWhere, reHere) {
  return function _where_(deep) {
    var stack = Error().stack.split("\n"), ms;
    for (var i = 0, line; line = stack[i++];) {
      if (line.match(reWhere)) break;
    }
    if (i < stack.length && (ms = String(stack[i + deep]).match(reHere))) {
      return {
        file: ms[1],
        row: ms[2] - 1
      };
    }
  };
}(
  /* reWhere: */ /\b_where_\b/,
  /* reHere: */ /((?:https?:\/\/[\w.-]+(?::\d+)?|)[\w./@-]+(?:\?.*|)):(\d+):(\d+)/
);
