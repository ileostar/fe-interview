const cache = new Map();

async function swr(cacheKey, fetcher, cacheTime) {
  let data = cache.get(cacheKey) || { value: null, time: 0, promise: null };
  cache.set(cacheKey, data);
  
  // 是否过期
  const isStaled = Date.now() - data.time > cacheTime;
  if (isStaled && !data.promise) {
    data.promise = fetcher()
      .then((val) => {
        data.value = val;
        data.time = Date.now();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        data.promise = null;
      });
  }
  
  if (data.promise && !data.value) await data.promise;
  return data.value;
}

const data = await fetcher();
const data = await swr('cache-key', fetcher, 3000);