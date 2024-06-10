// @ts-nocheck
/**
 * 实现call
 * @params context call传入的this
 * @params ...arg 传递过来的参数
 * @description1 var obj = {fn: function(){console.log(this)}}
 * @description2 obj.fn() fn内部的this指向obj
 * @description3 call就是模拟了这个过程
 * @description4 context 相当于obj
 */
Function.prototype.myCall = function(context = window, ...args) {
  if(typeof context !== 'object') context = new Object(context); // 值类型，变为对象

  let fnKey = Symbol()
  context[fnKey] = this

  let result = context[fnKey](args)

  delete context[fnKey]

  return result
}

/**
 * 实现apply
 * @param this
 * @param args
 * @description 实现与call大致相同，传参不同
 */
Function.prototype.myApply= function(this, args) {
  if(typeof context !== 'object') context = new Object(context); // 值类型，变为对象

  let fnKey = Symbol()
  context[fnKey] = this

  let result = context[fnKey](...args)

  delete context[fnKey]

  return result
}

/**
 * 实现bind
 * @param this
 * @param args
 * @returns
 */
Function.prototype.myBind= function(this, ...args) {
  return function() {

  }
}
