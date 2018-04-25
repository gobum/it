var indent = function (regexp) {
  return function (text, dent) {
    text = String(text);
    dent = dent | 0;
    if (dent > 0) {
      text = text.replace(regexp, " ".repeat(dent));
    }
    else if (dent < 0) {
      dent = RegExp("^ {1," + -dent + "}", "gm");
      text = text.replace(dent, "");
    }
    return text;
  }
}(/^/gm);

var dentof = function (regexp) {
  return function (text) {
    text = String(text);
    var dents = text.match(regexp);
    return dents
      ? dents.reduce(function (min, str) {
        return (str = str.length) < min ? str : min;
      }, text.length)
      : 0;
  }
}(/^ *(?=\S)/gm);
