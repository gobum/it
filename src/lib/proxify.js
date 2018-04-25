function proxify(proxy, self, proto) {
  var proto = Object.getOwnPropertyDescriptors(proto);
  var props = {};
  for (var key in proto) {
    var prop = proto[key];
    if (typeof prop.value === "function") {
      props[key] = {value: prop.value.bind(self)};
    }
    else if (prop.get || prop.set) {
      props[key] = {
        get: prop.get && prop.get.bind(self),
        set: prop.set && prop.set.bind(self)
      }
    }
  }
  return Object.defineProperties(proxy, props);
}
