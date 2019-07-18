import sort from "../src/string/翻转字符串";
// 声明 测试用例 test
test("翻转字符串", () => {
  expect(sort("你好 今天 天气不错")).toBe("好你 天今 错不气天");
});
