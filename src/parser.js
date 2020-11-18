// 对url参数进行解析 a=1&b=2&c=3 => {a:1,b:2,c:3}
const parser = (str) => {
  const obj = {};
  str.replace(/([^&=]+)=([^&=]+)/g, function () {
    obj[arguments[1]] = arguments[2];
  });
  return obj;
}

const stringify = (obj) => {
  const arr = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push(`${key}=${obj[key]}`);
    }
  }
  return arr.join('&');
}

// console.log(parser('a=1&b=2&c=3'));
// console.log(stringify({a:1,b:2,c:3}));

export {
  parser,
  stringify,
}
