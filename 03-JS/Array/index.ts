function demoArray(arr) {
  return arr.reduce((pre,item) => item = pre + item)
}


console.log(demoArray([ 1, 2, 3, 4 ]));
let num = 0
function removeWithoutCopy(arr, item) {
    if(num > arr.length){return arr}
    arr[num] === item ? arr.splice(arr.indexOf(item), 1) : num += 1
    return removeWithoutCopy(arr,item)
}
console.log(removeWithoutCopy([1, 2, 2, 3, 4, 2, 2], 2));
