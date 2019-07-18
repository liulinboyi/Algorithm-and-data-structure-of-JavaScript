export default s => {
  let last = 0; // last 上一次连续的个数
  let cur = 0; // cur  当前数字连续的个数
  let count = 0; // 符合规则子串的数量
  let len = s.length;
  for (let i = 0; i < len - 1; i++) {
    cur++;
    if (last >= cur) {
      count++;
    }
    if (s[i] != s[i + 1]) {
      last = cur;
      cur = 0;
    }
  }

  // 最后一位情况
  // cur ==0 <=> 后两位不同
  if (cur == 0) {
    cur = 1;
  } else {
    cur++;
  }

  if (last >= cur) {
    count++;
  }

  return count;
};
