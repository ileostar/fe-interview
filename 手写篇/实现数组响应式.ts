
const render = (action,...args)=>{
    console.log(`Action=${action} args=${args.join(',')}`)
}
const arrPrototype = Array.prototype
const newArrPrototype = Object.create(arrPrototype)

const methods = ['push','pop','shift','unshift','sort','splice','reverse']
methods.forEach(methodName=>{
    newArrPrototype[methodName] = function(){
        // 执行原数组的方法
        arrPrototype[methodName].call(this,...arguments)
        // 触发渲染 
        render(methodName,...arguments)
    }
})

const reactive = obj=>{
    if(Array.isArray(obj)){
        obj.__proto__ = newArrPrototype
    }
}
const data = [1,2,3,4]
reactive(data)
data.push(5) // Action = push, args = 5
data.splice(0,2) // Action=splice,args=0,2

