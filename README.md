# JavaScript 的算法与数据结构

## 字符串

1. [翻转字符串](https://github.com/liulinboyi/Algorithm-and-data-structure-of-JavaScript/blob/master/src/%E7%BF%BB%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2.ts)

<details>
  <summary>代码</summary>
  <pre>
  <code>function sort(str) {
  let temp = str
    .split(/\s/g)
    .map(item => {
      return item
        .split("")
        .reverse()
        .join("");
    })
    .join(" ");
  console.log(temp);
  return temp;
}

// module.exports = sort;
export default sort;</code>
  </pre>
</details>

2. 二进制子串
   [二进制子串](https://github.com/liulinboyi/Algorithm-and-data-structure-of-JavaScript/blob/master/src/%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AD%90%E4%B8%B2.ts)

<details>
  <summary>代码</summary>
  <pre>
  <code>export default s => {
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
};</code>

  </pre>
</details>
