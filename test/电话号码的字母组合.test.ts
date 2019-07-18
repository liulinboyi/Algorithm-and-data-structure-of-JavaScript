import numtostr from "../src/array/电话号码的字母组合";

test("电话号码的字母组合", () => {
  expect(numtostr("23")).toStrictEqual([
    "ad",
    "ae",
    "af",
    "bd",
    "be",
    "bf",
    "cd",
    "ce",
    "cf"
  ]);
});

test("抛出错误 请输入的字符串包含2-9", () => {
  function getIntArrayWrapFn() {
    numtostr("12");
  }
  expect(getIntArrayWrapFn).toThrow("请输入的字符串包含2-9");
});

test("抛出错误 请输入长度为超过2的字符串", () => {
  function getIntArrayWrapFn() {
    numtostr("3");
  }
  expect(getIntArrayWrapFn).toThrow("请输入长度为超过2的字符串");
});
