import sort from "../src/array/将数组分成几个递增序列";

test("将数组分成几个递增序列", () => {
  expect(sort([0, 0, 1, 2, 2, 2, 3, 3, 4, 4], 3)).toBe(false);
});
