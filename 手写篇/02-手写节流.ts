/**
 * 手写节流——定时器版
 */
function throttle(fn:Function,delay: number) {
    let timer = 0
    return function(...args) {
        if(timer) return
        timer = setTimeout(()=>{
            fn.apply(this, args)
        },delay)
    }
}

/**
 * 手写节流——时间戳版
 */
const throttleTime = (func, wait = 50) => {
  let lastTime = 0;
  return function (...args) {
    const currentTime = Date.now();
    if (currentTime - lastTime > wait) {
      func.apply(this, args);
      lastTime = currentTime;
    }
  };
};
const demo = [
{ "type": "Feature", "properties": { "ObjID": 1, "窨井编号": 5.1070400101100001e+18, "窨井类型": "雨水", "井盖材质": "树脂", "窨井深度(米)": 2.0, "井盖直径(厘米)": 80, "埋管材质": "水泥", "埋管直径(厘米)": 80, "区域名称": "东津桥-三江大坝主干道", "设备定位地址名": "四川省绵阳市游仙区三星路145-38号南城水岸" }, "geometry": { "type": "Point", "coordinates": [ 482149.1, 3476813.1 ] } },
{ "type": "Feature", "properties": { "ObjID": 2, "窨井编号": 5.1070400102099999e+18, "窨井类型": "污水", "井盖材质": "树脂", "窨井深度(米)": 4.3, "井盖直径(厘米)": 80, "埋管材质": "水泥", "埋管直径(厘米)": 80, "区域名称": "东津桥-三江大坝主干道", "设备定位地址名": "四川省绵阳市游仙区三星路145-38号南城水岸" }, "geometry": { "type": "Point", "coordinates": [ 482165.2, 3476870.9 ] } }]
