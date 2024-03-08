    /*
      实现一个类型判断
        []     返回 array
        {}     返回object
        /^$/   RegExp
        1      number
   */


    //   第一种方案
    function type_of(obj) {
        let res = Object.prototype.toString.call(obj).split(' ')[1] // 输出 RegExp]
        /*
        res.substring(0, res.length - 1) 从第 0 项开始截取 截取到它的长度 -1 
        也就是最后一项的前一项 把最后的一项  ] 给干掉
        */
        return res.substring(0, res.length - 1).toLowerCase()
    }


    // 第二种方案
    function type_of(obj) {
        // .slice(8, -1) 从 第 8项开始截取 -1 不要最后一项
        return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
    }

