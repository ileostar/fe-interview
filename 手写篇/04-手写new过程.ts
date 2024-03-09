function myNew(constructor, ...args) {
  // 用原型对象创建一个对象
  const newObj = Object.create(constructor.prototype);

  // 执行构造函数，将this指向新创建的对象
  const res = constructor.apply(newObj, args);
  console.log(constructor);

  return res instanceof Object ? res : newObj;
}

// 构造函数
function Person(name, age) {
  this.name = name;
  this.age = age;

  // 私有属性
  this.eat = () => {
    console.log("color is "+this.color)
    return "eat";
  }
}

/** 静态方法 */
Person.kill = function(){
  return "kill"
}

/** 原型方法 */
Person.prototype.Jump = function() {
  return "jump"
}

const p = myNew(Person, "张三", 18);
const p2 = new Person("张三", 18);

console.log(p);

console.log(p.eat());
console.log(Person.kill());
console.log(p.Jump());

console.log(p2.eat());
console.log(p2.Jump());
