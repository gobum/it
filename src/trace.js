/** -----------------------------------------------------------------------------------------------
 * trace.js
 *   代码定位信息
 */

var tracehead = function (reWhere, reHere) {
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

function tracetail(file, row) {
  var reFile = RegExp(file + ":(\\d+):(\\d+)");
  var stack = Error().stack.split("\n"), ms;
  for (var i = 0, line; line = stack[i++];) {
    if (ms = line.match(reFile)) {
      if (ms[1] > row) {
        return { row: ms[1]-1 };
      }
    }
  }
}
