/**
 * 手写节流——定时器版
 */
function throttle(fn:Function,delay: number) {
    let timer = 0
    return function(...args) {
        if(timer) return
        timer = setTimeout(()=>{
            fn.apply(this.args)
        },delay)
    }
}

/**
 * 手写节流——时间戳版
 */
const throttleTime = (func, wait = 50) => {
  let lastTime = 0;
  return function (...args) {
    const currentTime = Date.now();
    if (currentTime - lastTime > wait) {
      func.apply(this, args);
      lastTime = currentTime;
    }
  };
};
