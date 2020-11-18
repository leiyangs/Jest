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

监控`npx jest watchAll`
