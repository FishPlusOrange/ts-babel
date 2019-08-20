# TS Babel

## TypeScript VS Babel

TypeScript 和 Babel 都能把 `ts(x)` 编译成 `ES3/5/6` 以及其他更高版本。

TypeScript 优势是为我们提供了**静态类型检查**功能，而 Babel 优势则是其**插件更加丰富、周边生态系统更加完善**。

## With Babel 7+

不使用 TypeScript 进行编译（比如使用 Webpack 搭配 `ts-loader` 或 `awesome-typescript-loader` 对 TS 进行编译），完全基于 Babel 生态写 TS 大致思路可以是：

```text
TS => Babel => JS
|_______________|
        |
tsc for type checking
```

在整个流程中，TypeScript 仅提供目前 Babel 相比于其还不支持的一个重要功能——**静态类型检查**：

- 可以使用 VSCode TypeScript 插件

- 或者安装 TypeScript 依赖包，开启 `tsconfig.json` 配置项 `noEmit`，再使用命令 `tsc --watch` 开启监听模式，让 TypeScript 不输出任何文件仅做静态类型检查

这样就不需要也没必要同时配置两个编译器，使得整个构建系统更加统一、更加可维护。

> 以上基于 Babel 7+，因为 Babel 7 之前并不支持 TS。

## Tips for Using Babel

Babel 编译 TS 存在一些小缺陷，其不支持个别 TS 语法，比如：

- 命名空间

- 常量枚举

- 默认导出

## How to Choose

- 如果没有使用 Babel，首选还是 TypeScript 编译器，可使用 `ts-loader` 进行编译

- 工程中已经使用了 Babel，可使用 `@babel/preset-typescript` 进行编译，并使用 TypeScript 配合做静态类型检查

- 建议不要混用 TypeScript 和 Babel 进行编译

- 个人更喜欢使用 TypeScript 作为编译器，毕竟 Babel 目前还不支持个别 TS 语法
