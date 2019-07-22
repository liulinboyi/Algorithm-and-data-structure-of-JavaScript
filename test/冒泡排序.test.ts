import pop from "../src/sort/冒泡排序";

test("冒泡排序", () => {
  expect(pop([10, 2, 3, 5, 6, 8, 0, 9])).toStrictEqual([0, 2, 3, 5, 6, 8, 9, 10]);
});
