// 闭包
function once(fn) {
    let called = false;
    return function _once() {
      if (called) {
        return _once.value;
      }
      called = true;
      _once.value = fn.apply(this, arguments);
    }
  }
  
  //ES6 的元编程 Reflect API 将其定义为函数的行为
  Reflect.defineProperty(Function.prototype, 'once', {
    value () {
      return once(this);
    },
    configurable: true,
  })
  