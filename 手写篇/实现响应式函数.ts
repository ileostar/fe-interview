const render = (key, val) => {
    console.log(`SET key=${key} val=${val}`)
}

const defineReactive = (obj, key, val) => {
    reactive(val)
    Object.defineProperty(obj, key, {
        get() {
            return val
        },
        set(newVal) {
            if (val === newVal) return
            val = newVal
            render(key, val)
        }
    })
}
const reactive = obj => {
    if (typeof obj === 'object') {
        for (const key in obj) {
            defineReactive(obj, key, obj[key])
        }
    }
}
const data = {
    a: 1,
    b: 2,
    c: {
        c1: {
            af: 999
        },
        c2: 4
    }
}
