function getProps(any) {
  var props
  if (any && any !== Object.prototype && any !== Function.prototype) {
    props = getProps(any.__proto__);
    for(var key of Object.getOwnPropertyNames(any)) {
      props[key] = Object.getOwnPropertyDescriptor(any, key);
    }
  }
  else {
    props = Object.create(null);
  }
  return props;
}
