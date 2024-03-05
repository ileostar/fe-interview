// 手写ts

function myPromise(executor) {
  let self = this;
  self.status = 'pending';
  self.value = undefined;
  self.reason = undefined;
  self.onResolvedCallbacks = [];
  self.onRejectedCallbacks = [];

  function resolve(value) {
    if (self.status === 'pending') {
      self.status = 'resolved';
      self.value = value;
      self.onResolvedCallbacks.forEach(fn => fn());
    }
  }

  function reject(reason) {
    if (self.status === 'pending') {
      self.status = 'rejected';
      self.reason = reason;
      self.onRejectedCallbacks.forEach(fn => fn());
    }
  }

  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}
