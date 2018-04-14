/** -----------------------------------------------------------------------------------------------
 * src.js
 */

var fs = require("fs");

function source() {
  var trace = _where_(2);
  var lines = getlines(trace.loc);
  var source = lines[trace.row];
  return source ? source.trim() : "< no topic >";
}

function _where_(deep) {
  var stack = Error().stack.split("\n"), ms;
  for (var i = 0, line; line = stack[i++];) {
    if (line.match(reWhere)) break;
  }
  if (i < stack.length && (ms = String(stack[i + deep]).match(reHere))) {
    return {
      loc: ms[1],
      row: ms[2] - 1
    };
  }
}
var reWhere = RegExp('\\b' + _where_.name + '\\b');
var reHere = /((?:https?:\/\/[\w.-]+(?::\d+)?|)[\w./@-]+(?:\?.*|)):(\d+):(\d+)/;

function getlines(path) {
  if (path in getlines) {
    path = getlines[path];
  }
  else {
    path = getlines[path] = get(path).split("\n");
  }
  return path;
}

function get(path) {
  return fs.readFileSync(path, "utf-8");
}
