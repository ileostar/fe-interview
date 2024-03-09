// 手写节流
function throttle(fn, delay) {
    let timer: null | number = null;
    return function () {
        if (!timer) {
            timer = setTimeout(function () {
                fn();
                timer = null;
            }, delay);
        }
    }
}

let count = 0;


