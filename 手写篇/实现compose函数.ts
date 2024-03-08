function fn1(x){
    return x+1
}
function fn2(x){
    return x+2
}
function fn3(x){
    return x+3
}
function fn4(x){
    return x+4
}

const a = compose(fn1,fn2,fn3,fn4)
console.log(a(1))

function compose(){
    const argFnList = [...arguments]
    return (num)=>{
        return argFnList.reduce((prev,next)=>{
            return next(prev)
        },num)
    }
}



/**
 * 实现一个基于洋葱模型的compose
 */
// 洋葱模型
function composeTwo(middlewares){
    const copyMiddlewares = [...middlewares]
    let index = 0
    const fn = ()=>{
        if(index > copyMiddlewares.length){
            return
        }
        const middleware = copyMiddlewares[index]
        index++
        return middleware(fn)
    }
    return fn
}
