import group from "../src/array/卡牌分组new";

test("卡牌分组new ", () => {
  expect(group([1, 1, 2, 2, 3])).toBe(false);
});

test("卡牌分组new ", () => {
  expect(group([1, 1, 2, 2, 3, 3])).toBe(true);
});
