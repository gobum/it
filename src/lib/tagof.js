/**
 * tagof(any): string
 *   获取任意值的标签
 */
var tagof = function(toString, reTag){
  return function(any) {
    return toString.call(any).match(reTag)[1];
  }
}(Object.prototype.toString, /\[object ([^\]]+)/);
