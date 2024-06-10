/**
 * 手写防抖
 * @param { Function } fn  - 函数
 * @param { number } delay  - 延迟时间
 */
function debounce(fn: Function, delay: number) {
    let timer = 0
    return function(...args: any[]) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(this,args)
        },delay)
    }
}

