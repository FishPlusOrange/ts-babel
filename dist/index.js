"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _a$b$c$d = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
},
    a = _a$b$c$d.a,
    b = _a$b$c$d.b,
    rest = _objectWithoutProperties(_a$b$c$d, ["a", "b"]);

console.log(rest); // Babel 编译通过无报错

rest = 'test';
console.log(rest); // 命名空间
// namespace test {
//   export const name = 'test'
// } 
// 类型断言

var Test = function Test() {
  _classCallCheck(this, Test);

  _defineProperty(this, "name", 'test');
};

var test = {};
test.name = 'test'; // 常量枚举
// const test: string = 'test'
// const enum Test { test }
// 默认导出
// export = 'test'