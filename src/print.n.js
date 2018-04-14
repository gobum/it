/** -----------------------------------------------------------------------------------------------
 * print.js for nodejs
 */

var print = function (format, recolors, colors, redent) {
  return function print(args, space) {
    args = format.apply(undefined, args);

    args = args.replace(recolors, function (s, id) {
      return colors[id];
    }) + colors[0];

    args = args.replace(redent, space);

    console.log(args);
  }
}(
  /* format: */ require("util").format,
  /* recolors: */ /#([rgybmcs0#])/g,
  /* colors: */ {
    0: "\x1b[0m",   // RESET
    r: "\x1b[31m",  // red
    g: "\x1b[32m",  // green
    y: "\x1b[33m",  // yellow
    b: "\x1b[34m",  // blue
    m: "\x1b[35m",  // magenta
    c: "\x1b[36m",  // cyan
    s: "\x1b[90m",  // silver
    "#": "#"        // ESCAPE
  },
  /* redent: */ /^/gm
);
