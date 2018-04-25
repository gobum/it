//#include ./lib/dent.js

/** -----------------------------------------------------------------------------------------------
 * src.js
 */

var src = function(fs) {
  return function(file, head, tail) {
    var source;
    var rows = getrows(file);
    if(rows) {
      source = rows.slice(head, tail).join("\n");
      source = indent(source, -dentof(source));
    }
    return source || "<codeless>";
  }

  function getrows(file) {
    var rows;
    if (file in getrows) {
      rows = getrows[file];
    }
    else {
      rows = getrows[file] = get(file).split("\n");
    }
    return rows;
  }
  
  function get(file) {
    try {
      file = fs.readFileSync(file, "utf-8");
    }
    catch(e) {
      file = "";
    }
    return file;
  }
    
}(require("fs"));
