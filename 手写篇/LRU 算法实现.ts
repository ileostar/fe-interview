class LRUCahe {
    constructor(capacity) {
      this.cache = new Map();
      this.capacity = capacity;
    }
  
    get(key) {
      if (this.cache.has(key)) {
        const temp = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, temp);
        return temp;
      }
      return undefined;
    }
  
    set(key, value) {
      if (this.cache.has(key)) {
        this.cache.delete(key);
      } else if (this.cache.size >= this.capacity) {
        // map.keys() 会返回 Iterator 对象
        this.cache.delete(this.cache.keys().next().value);
      }
      this.cache.set(key, value);
    }
  }