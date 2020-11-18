// 匹配器一般分为三类

it('测试相等情况: 完全相等/是真/是假', () => {
  expect(1+1).toBe(2); // 全等 如果是object，还会判断是不是同一个对象
  expect({name: 1}).toEqual({name: 1}); // 全等 值是否相等
  expect(true).toBeTruthy(); // 是否真
  expect(false).toBeFalsy(); // 是否假
})

it('测试不相等情况', () => {
  expect(1+1).not.toBe(3); // 不相等
  expect(1+1).toBeLessThan(3); // 小于
  expect(1+1).toBeGreaterThanOrEqual(0); // 大于或等于
})

it('是否包含，是否匹配', () => {
  expect('hello').toContain('o'); // 包含
  expect('hello').toMatch(/hello/); // 正则匹配
})