function getProp(any, name) {
  var prop;
  while(any && typeof any === "object" && !(prop = Object.getOwnPropertyDescriptor(any, name))) {
    any = any.__proto__;
  }
  return prop;
}
