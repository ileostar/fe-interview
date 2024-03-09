// @ts-nocheck
/**
 * 实现call
 * @param this
 * @param args
 */
Function.prototype.myCall = function(context, ...args) {
  if(typeof context !== 'object') context = new Object(context);


}

/**
 * 实现apply
 * @param this
 * @param args
 */
Function.prototype.myApply= function(this, ...args) {

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
