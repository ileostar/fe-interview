        /*
          数组的去重 
        */
          const ylbsz = [1, 35, 6, 78, 66, 6, 35]
          function _set(arr) {
              // 放一个新数组
              const newArr = []
              for (let i = 0; i < arr.length; i++) {
                  if (newArr.indexOf(arr[i]) == -1) {
                      newArr.push(arr[i])
                  }
              }
              return newArr
          }
          console.log(_set(ylbsz))
          console.log([...new Set([11, 11, 222, 222])])
  
          // 字符串去重
          let str = '123321你好你好'
          console.log([...new Set(str.split(''))].join(''))
  
  