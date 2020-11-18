// 异步代码

const getDataByCallback = (cb) => {
  setTimeout(() => {
    cb({
      name: 'hello'
    })
  },3000)
}

const getDataByPromise = (cb) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve({name: 'hello'})
    },3000)
  })
}

export {
  getDataByCallback,
  getDataByPromise
}