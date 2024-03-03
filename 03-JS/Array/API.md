# Array

## 属性

- Array: length

## 静态方法

- Array.isArray()
- Array.from()
- Array.of()

## 原型方法

- arr.slice()
- arr.toString
- arr.toLocaleString
- arr.some()
- arr.every()
- arr.join()
- arr.push()
- arr.shift()
- arr.pop()
- arr.unshift()
- arr.splice()
- arr.find()
- arr.fill()
- arr.filter()
- arr.sort()
- arr.reverse()
- arr.map()
- arr.forEach()
- arr.reduce()

## API分类

### 创建数组

> Array 构造函数还有两个 ES6 新增的用于创建数组的静态方法：from()和 of()。from()用于将 类数组结构转换为数组实例，而 of()用于将一组参数转换为数组实例

- Array.from()
- Array.of()

###  检测数组

- Array.isArray()

### 迭代器方法——检索数组内容

- arr.keys()
- arr.values()
- arr.entries()

```javascript
const a = ["foo", "bar", "baz", "qux"];
// 因为这些方法都返回迭代器，所以可以将它们的内容
// 通过 Array.from()直接转换为数组实例
const aKeys = Array.from(a.keys());
const aValues = Array.from(a.values());
const aEntries = Array.from(a.entries());
console.log(aKeys); // [0, 1, 2, 3]
console.log(aValues); // ["foo", "bar", "baz", "qux"]
console.log(aEntries); // [[0, "foo"], [1, "bar"], [2, "baz"], [3, "qux"]] 
```

### 复制和填充

- arr.fill()
- arr.copyWithin()

```javascript
const zeroes = [0, 0, 0, 0, 0];

// 用 5 填充整个数组
zeroes.fill(5);
console.log(zeroes); // [5, 5, 5, 5, 5]
zeroes.fill(0); // 重置

// 用 6 填充索引大于等于 3 的元素
zeroes.fill(6, 3);
console.log(zeroes); // [0, 0, 0, 6, 6]
zeroes.fill(0); // 重置

// 用 7 填充索引大于等于 1 且小于 3 的元素
zeroes.fill(7, 1, 3);
console.log(zeroes); // [0, 7, 7, 0, 0];
zeroes.fill(0); // 重置

// 用 8 填充索引大于等于 1 且小于 4 的元素
// (-4 + zeroes.length = 1)
// (-1 + zeroes.length = 4)
zeroes.fill(8, -4, -1);
console.log(zeroes); // [0, 8, 8, 8, 0];

// fill()静默忽略超出数组边界、零长度及方向相反的索引范围：
const zeroes = [0, 0, 0, 0, 0];

// 索引过低，忽略
zeroes.fill(1, -10, -6);
console.log(zeroes); // [0, 0, 0, 0, 0]

// 索引过高，忽略
zeroes.fill(1, 10, 15);
console.log(zeroes); // [0, 0, 0, 0, 0]

// 索引反向，忽略
zeroes.fill(2, 4, 2);
console.log(zeroes); // [0, 0, 0, 0, 0]

// 索引部分可用，填充可用部分
zeroes.fill(4, 3, 10)
console.log(zeroes); // [0, 0, 0, 4, 4] 
```

### 转换方法

- arr.toString()
- arr.valueOf()
- arr.toLocaleString()

```javascript
let colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组
alert(colors.toString()); // red,blue,green
alert(colors.valueOf()); // red,blue,green
alert(colors); // red,blue,green
```

### 栈方法

- arr.push()  添加方法
- arr.pop()   删除方法

```javascript
let colors = new Array(); // 创建一个数组
let count = colors.push("red", "green"); // 推入两项
alert(count); // 2
count = colors.push("black"); // 再推入一项
alert(count); // 3
let item = colors.pop(); // 取得最后一项
alert(item); // black
alert(colors.length); // 2 
```

### 队列方法

- arr.shift()  删除方法
- arr.unshift()  添加方法

```javascript
let colors = new Array(); // 创建一个数组
let count = colors.push("red", "green"); // 推入两项
alert(count); // 2
count = colors.push("black"); // 再推入一项
alert(count); // 3
let item = colors.shift(); // 取得第一项
alert(item); // red
alert(colors.length); // 2 

let colorTwo = new Array(); // 创建一个数组
let countTwo = colorTwo.unshift("red", "green"); // 从数组开头推入两项
alert(countTwo); // 2
countTwo = colorTwo.unshift("black"); // 再推入一项
alert(countTwo); // 3
let itemTwo = colorTwo.pop(); // 取得最后一项
alert(itemTwo); // green
alert(colorTwo.length); // 2 
```

### 排序方法

- arr.reverse()
- arr.sort()

```javascript
let values = [1, 2, 3, 4, 5];
values.reverse();
alert(values); // 5,4,3,2,1 

let valuesTwo = [0, 1, 5, 10, 15];
valuesTwo.sort();
alert(valuesTwo); // 0,1,10,15,5
```

### 操作方法

- arr.concat()   合并数组
- arr.slice() 切割数组
- arr.splice() 

```javascript
let colors = ["red", "green", "blue"];
let removed = colors.splice(0,1); // 删除第一项
alert(colors); // green,blue
alert(removed); // red，只有一个元素的数组
removed = colors.splice(1, 0, "yellow", "orange"); // 在位置 1 插入两个元素
alert(colors); // green,yellow,orange,blue
alert(removed); // 空数组
removed = colors.splice(1, 1, "red", "purple"); // 插入两个值，删除一个元素
alert(colors); // green,red,purple,orange,blue
alert(removed); // yellow，只有一个元素的数组
```

### 搜索和位置

- arr.indexOf()
- arr.lastLndexOf()
- arr.includes()
- arr.find()
- arr.findIndex()

### 迭代方法

- arr.every()
- arr.filter()
- arr.forEach()
- arr.map()
- arr.some()

### 归并方法

- arr.reduce()
- arr.reduceRight()

## 其他相关细节

### 创建一个数组的方式

> ```javascript
> new Array()
> new Array(element0)
> new Array(element0, element1)
> new Array(element0, element1, /* … ,*/ elementN)
> new Array(arrayLength)
> ```

1. new Array()
2. `[]`字面量
3. Array.of()、Array.from()

### 检测数组

1. value instanceof Array 原型检测
2. Array.isArray()