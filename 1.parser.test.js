// .test.js .spec.js结尾

import {
  parser,
  stringify
} from './src/parser';

describe('测试parser', () => {
  it('测试parser是否正常解析', () => {
    // 断言
    expect(parser('a=1&b=2&c=3')).toEqual({
      a: '1',
      b: '2',
      c: '3'
    });
  })
})

describe('测试stringify', () => {
  it('测试stringify是否正常解析', () => {
    expect(stringify({a:1,b:2,c:3})).toEqual('a=1&b=2&c=3')
  })
})