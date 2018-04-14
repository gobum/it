/** -----------------------------------------------------------------------------------------------
 * src.js
 */

var src = function(fs) {
  return function(file, row, len) {
    var rows = getrows(file);
    var source = rows[row];
    return source ? source.trim() : "< no topic >";
  }

  function getrows(file) {
    if (file in getrows) {
      file = getrows[file];
    }
    else {
      file = getrows[file] = get(file).split("\n");
    }
    return file;
  }
  
  function get(file) {
    return fs.readFileSync(file, "utf-8");
  }
    
}(require("fs"));
