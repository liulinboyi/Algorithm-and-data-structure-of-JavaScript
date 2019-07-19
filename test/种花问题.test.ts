import flower from "../src/array/种花问题";

test("种花问题 [1, 0, 0, 0, 1], 1", () => {
  expect(flower([1, 0, 0, 0, 1, 0, 0, 1], 1)).toBe(true);
});
