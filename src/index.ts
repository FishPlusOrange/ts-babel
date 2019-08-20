let { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 }
console.log(rest)

// Babel 编译通过并无报错
rest = 'test'
console.log(rest)

// 以下 TypeScript 语法 Babel 无法编译

// Babel 命名空间
// namespace test {
//   export const name = 'test'
// }

// 常量枚举
// const enum Test { test }

// 默认导出
// export = 'test'
