TypeScript Class Method Retry Decorator Demo
===========================================

定义一个retry decorator，并在其中调用另一个`retry`函数。 重点在于如何确保class method对于instance field的使用正确。

注意：需要在`tsconfig.json`中开启：`experimentalDecorators`

问题：为什么输出的`this.queryTimes`值总是`0`?

```
npm install
npm run demo
```

