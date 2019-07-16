// const sum = require('../src/sum');
import sum from "../src/sum";
// 声明 测试用例 test
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
