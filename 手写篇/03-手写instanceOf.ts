function instanceOf(instance, ClassOrFunc) {
    if(instance === null || typeof instance !== 'object') return false

    let proto = instance.__proto__
    while(proto) {
        if(proto === ClassOrFunc.prototype) return true
        proto = proto.__proto__
    }

    return false
}

console.log(instanceOf([], Array));
console.log(instanceOf([], Object));
console.log(instanceOf([], Function));
console.log(instanceOf(null, Array))
console.log(instanceOf([], Array))
console.log(instanceOf('', Array))
console.log(instanceOf({}, Object))
