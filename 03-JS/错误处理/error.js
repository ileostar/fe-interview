(() => {
  try {
    throw 'error message'
  } catch (err) {
    console.log(err)
  } finally {
    console.log("finally finish")
  }
})()
