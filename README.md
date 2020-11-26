# 自动化测试

- 每次写完代码提交后实现自动测试，测试代码

- 测试编写浪费大量时间，测试代码会比源代码更多

- 快速定位bug

## 测试分类

- 白盒测试(了解代码的具体逻辑)

- 黑盒测试(功能测试，主要验证功能是否OK)

- 单元测试(以最小的单元来实现测试功能，针对小的单元进行测试)

- 集成测试(合在一起进行测试，即多个单元测试集成)

- TDD(工具包、添加、删除  测试驱动开发，先写测试代码再写代码) && BDD(行为驱动开发，根据用户的行为进行测试)

## 常见的测试框架

- Karma 可以吧测试跑在真正的浏览器上，可以测试UI组件

- mocha 提供了测试环境 断言库(chai) sinon(mock一些方法)

- Jest 基于jsdom的 用js对象来模拟浏览器环境 默认具备chai sinon，并且0配置,不需要手写任何配置,缺陷是不能测试样式

单独执行某个test.js `npx parser.test.js`

监控所有测试文件 `npx jest --watchAll`

只监控改变的测试文件 `npx jest --watch`

## vue-test-utils Jest 集成

### vue-test-utils

### Jest

1、安装Jest和vue-test-utils

```bash
npm install --save-dev jest @vue/test-utils
```

package.json中写入命令

```bash
{
  "scripts": {
    "test:unit": "jest"
  }
}
```

2、为了告诉 Jest 如何处理 *.vue 文件，我们需要安装和配置 vue-jest 预处理器：

```bash
npm install --save-dev vue-jest
```

3、package.json 中创建一个 jest 块：

```json
{
  // ...
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      // 告诉 Jest 处理 `*.vue` 文件
      "vue"
    ],
    "transform": {
      // 用 `vue-jest` 处理 `*.vue` 文件
      ".*\\.(vue)$": "vue-jest"
    },
    "moduleNameMapper": {
      // 支持源代码中相同的 `@` -> `src` 别名
      "^@/(.*)$": "<rootDir>/src/$1"
    }
  }
}
```

4、为Jest配置babel
babel版本是6的，要安装babel-jest@21
`npm install babel-jest@21.0.2`
Requires Babel “^7.0.0-0”, but was loaded with “6.26.3”.
`cnpm i babel-core@^7.0.0-bridge.0 @babel/core regenerator-runtime`

```bash
npm install --save-dev babel-jest
```

package.json 的 jest.transform 里添加一个入口，来告诉 Jest 用 babel-jest 处理 JavaScript 测试文件：

```json
{
  // ...
  "jest": {
    // ...
    "transform": {
      // ...
      // 用 `babel-jest` 处理 js
      "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
    }
    // ...
  }
}

```

.babelrc配置

```json
{
  "presets": [["env", { "modules": false }]],
  "env": {
    "test": {
      "presets": [["env", { "targets": { "node": "current" } }]]
    }
  }
}
```

5、 example测试代码

```js
import { mount } from '@vue/test-utils';
import CommonTable from '@/components/CommonTable';

describe('CommonTable test', () => {
  it('测试公共table组件', () => {
    const wrapper = mount(CommonTable, {
      propsData: {
        list: ['a','b','c']
      }
    });
    expect(wrapper.props()).toContian('a');
  })
})

```

## vue-test-utils Mocha 集成

1、安装测试依赖

```bash
npm install --save-dev @vue/test-utils mocha mochapack
```

package.json

```json
{
  "scripts": {
    "test": "mochapack --webpack-config webpack.config.js --require test/setup.js test/**/*.spec.js"
  }
}
```

2、
