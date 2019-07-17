import s from "../src/二进制子串Other";

test("二进制子串Other ", () => {
  expect(s("00110011")).toStrictEqual([
    "0011",
    "01",
    "1100",
    "10",
    "0011",
    "01"
  ]);
});

test("二进制子串Other1 ", () => {
  expect(s("10101")).toStrictEqual(["10", "01", "10", "01"]);
});
