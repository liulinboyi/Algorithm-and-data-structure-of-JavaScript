import repeat from "../src/regexp/重复字符串子串";

test("重复字符串子串", () => {
  expect(repeat("abcabc")).toBe(true);
});

test("重复字符串子串", () => {
  expect(repeat("abcabcd")).toBe(false);
});
