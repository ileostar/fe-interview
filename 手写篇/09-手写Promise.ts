/**
 * @description 手写Promise
 * @author LeoStar
 */
class MyPromise {
  state = 'pending' // 状态 pending fulfilled rejected
  value = undefined // 成功后的值
  reason = undefined  // 失败后的原因
  onFulfilled: undefined | Function  = undefined // 成功后的回调
  onRejected: undefined | Function = undefined // 失败后的回调

  constructor(fn) {
    const resolverHandler = (value) => {
      if(this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
      }
    }
    const rejectHandler = (reason) => {
      if(this.state === 'pending') {
        this.state = 'rejected'
        this.reason = reason
        if(this.onRejected) this.onRejected(reason)
      }
    }
    try {
      fn(resolverHandler, rejectHandler)
    } catch (err) {
      rejectHandler(err)
    }
  }

  then(onFulfilled, onRejected?) {
    if (this.state === 'pending') {
      this.onFulfilled = onFulfilled
      this.onRejected = onRejected
      return new MyPromise((resolve, reject) => {
        this.onFulfilled = (value) => {
          resolve(onFulfilled(value))
        }
        this.onRejected = (reason) => {
          reject(onRejected(reason))
        }
      })
    }
    if (this.state === 'fulfilled') {
      return new MyPromise((resolve, reject) => {
        try {
          const result = onFulfilled(this.value)
          if (result instanceof MyPromise) {
            result.then(resolve, reject)
          } else {
            resolve(result)
          }
        }catch(err) {
          reject(err)
        }
      })
    }
    if (this.state === 'rejected') {
      return new MyPromise((resolve, reject) => {
        try {
          const result = onRejected(this.reason)
          if (result instanceof MyPromise) {
            result.then(resolve, reject)
          } else {
            resolve(result)
          }
        }catch(err) {
          reject(err)
        }
      })
    }
  }

  catch(onRejected) {
    this.then(null, onRejected)
  }

  static resolve(value) {
    return new MyPromise((resolve)=> {
      resolve(value)
    })
  }
  static reject(reason) {
    return new MyPromise((_resolve,reject) => {
      reject(reason)
    })
  }

  static all(promiseList: MyPromise[] = []) {
    const res: any[] = []
    let resolvedNum = 0

    return new MyPromise((resolve,reject) => {
      promiseList.forEach(p => {
        try {
          p.then(data=>{
            res.push(data)
            resolvedNum++
            if(resolvedNum === promiseList.length -1) {
              resolve(res)
            }
          })
        } catch(err) {
          reject(err)
        }
      })
    })
  }

  static race(promiseList: MyPromise[] = []) {
    let resolved = false

    return new MyPromise((resolve,reject) => {
      promiseList.forEach(p => {
        try {
          p.then(data=>{
            if(!resolved) {
              resolve(data)
            }
          })
        } catch(err) {
          reject(err)
        }
      })
    })
  }
}
