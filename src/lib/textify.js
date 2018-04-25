
function textify(any) {
  var type = typeof any;
  if (type === "string" || type === "boolean") {
    any = stringify(any);
  }
  else if (type === "number" || type === "symbol") {
    any = String(any);
  }
  else if (type === "undefined") {
    any = type;
  }
  else if (any === null) {
    any = "null";
  }
  else {
    if (type = any.constructor) {
      if (type.prototype === any.__proto__) {
        if(!(type = type.name)) {
          type = tagof(any);
        }
      }
      else {
        type = tagof(any);
      }
    }
    else {
      type = tagof(any);
    }

    if (type === "String" || type === "Number" || type === "Boolean") {
      any = type + " object " + textify(any.valueOf());
    }
    else if (type === "Date" || type === "RegExp") {
      any = type + " object " + any.toString();
    }
    else {
      any = type + " object";
    }
  }
}