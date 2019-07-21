import sort from "../src/array/new 数组递增";

test("new 数组递增", () => {
  expect(sort([0, 1, 2, 2, 2, 3, 4, 4, 5, 5], 3)).toBe(false);
});
