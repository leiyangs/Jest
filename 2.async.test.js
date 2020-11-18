import { getDataByCallback, getDataByPromise } from './src/async';

describe('测试异步数据方法',() => {
  it('测试回调函数，获取数据',(done) => {
    jest.useFakeTimers(); // 使用假定时器
    // 默认不会等待异步执行完再测试，要调用done
    getDataByCallback((data) => {
      expect(data).toEqual({name: 'hello'});
      done();
    })
    jest.runAllTimers(); // 运行定时器，相当于变为同步
    // jest.runOnlyPendingTimers(); //只运行当前等待的
    // jest.advanceTimersByTime(3000); // 快进多少秒
  })
  it.only('测试promi函数，获取数据', async (done) => {  // only只测试这一条
    // getDataByPromise().then(data => {
    //   expect(data).toEqual({name: 'hello'});
    //   done();
    // })
    const data = await getDataByPromise();
    expect(data).toEqual({name: 'hello'});
    done();
  })
})
