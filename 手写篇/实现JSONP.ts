function jsonp (url, data) {
    if (!url || !data) {
      return Promise.reject('参数缺失')
    }
    // 处理请求地址和参数
    const query = dataToUrl(data)
    const url = `${url}?${query}`
    return new Promise((resolve, reject) => {
      // 新建script标签
      const scriptE = document.createElement('script')
      // 回调函数方法名
      const cbFn = `jsonp${new Date()}`
      scriptE.src = `${url}callback=${cbFn}`
      const head = document.getElementsByTagName('head')[0]
      head.appendChild(scriptE)
      // 定义全局回调函数
      window[cbFn] = function (res) {
        res ? resolve(res) : reject('')
        head.removeChild(scriptE)
        window[cbFn] = null
      }
    })
  }
  function dataToUrl (data) {
    let result = ''
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        result += `${key}=${data[key]}&`
      }
    }
    return result
  }