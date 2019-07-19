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

2. [二进制子串](https://github.com/liulinboyi/Algorithm-and-data-structure-of-JavaScript/blob/master/src/%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AD%90%E4%B8%B2.ts)

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


3. [卡牌分组](https://github.com/liulinboyi/Algorithm-and-data-structure-of-JavaScript/blob/master/src/array/%E5%8D%A1%E7%89%8C%E5%88%86%E7%BB%84new.ts)


<details>
  <summary>代码</summary>
  <pre>
  <code>//写的不太好，不要见笑
//遍历出 所有 相同 元素的 个数
var group = arr => {
  let single: Array<any> = [...new Set(arr)];
  let temp = [];
  let count = [];
  let a = 0;
  single.forEach(item => {
    count[item] = 0;
    for (let i = 0; i < arr.length; i++) {
      a = item;
      if (a === arr[i]) {
        count[a]++;
        temp.push(arr[i]);
      }
    }
  });
  count = count.filter(item => item !== "empty");
  console.log(count);
  return count;
};
//求出任意正整数的最大公约数
function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    //两个数 a b 的最大公约数
    return gcd(b, a % b);
  }
}
var a, b, c;
let gcdout = arr => {
  arr = group(arr);
  //两个数才有 最大公约数
  if (arr.length > 1) {
    console.log(arr);
    a = arr[0];
    b = arr[1];
    c = gcd(a, b);
    console.log(c);
    arr.splice(0, 2, c);
    console.log(arr);
    gcdout(arr);
  } else {
    console.log(c);
    return;
  }
  if (c > 1) {
    return true;
  }
  return false;
};

export default gcdout;</code>

  </pre>
</details>


4. [电话号码的字母组合](https://github.com/liulinboyi/Algorithm-and-data-structure-of-JavaScript/blob/master/src/array/%E7%94%B5%E8%AF%9D%E5%8F%B7%E7%A0%81%E7%9A%84%E5%AD%97%E6%AF%8D%E7%BB%84%E5%90%88.ts)

<details>
  <summary>代码</summary>
  <pre>
  <code>let numtostr = str => {
  let map = ["", 1, "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  let num = str.split("");
  let code = [];
  //将在输入的字符串映射为数组
  num.forEach(item => {
    //判断是否存在
    //边界情况
    if (map[item]) {
      code.push(map[item]);
    }
  });
  let comb = arr => {
    //临时变量 用来保存前两个 组合的结果
    let temp = [];
    for (let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j < arr[1].length; j++) {
        temp.push(`${arr[0][i]}${arr[1][j]}`);
      }
    }
    console.log(temp);
    arr.splice(0, 2, temp);
    console.log(arr);
    if (arr.length > 1) {
      comb(arr);
    } else {
      return temp;
    }
  };
  return comb(code);
};
export default numtostr;</code>

  </pre>
</details>


5. [种花问题](https://github.com/liulinboyi/Algorithm-and-data-structure-of-JavaScript/blob/master/src/array/%E7%A7%8D%E8%8A%B1%E9%97%AE%E9%A2%98.ts)

<details>
  <summary>代码</summary>
  <pre>
  <code>export default (flower, n) => {
  // flower = [1,0,0,0,1] 5
  // flower = [1,0,1,0,1] 5
  // flower = [1,0,10,0,0,1] 6
  // flower = [1,0,10,0,10,0,1] 7
  // flower = [1,0,10,0,10,0,10,0,1]

  // 几个0     几朵
  // 3个    1
  // 4个    1
  // 5个    2
  // 6个    2
  // 7个    3
  // 归纳法
  // 2n+1 n>=1
  // (n-1)/2
  //   function group(arr) {
  //     console.log(arr);
  //     var count = 0;
  //     for (var i = 0; i < arr.length; i++) {
  //       if (arr[i] === 0) {
  //         count++;
  //       }
  //     }
  //     console.log(count);
  //     return count;
  //   }
  //   var result = group(flower);

  var count = 0;
  for (var i = 0; i < flower.length; i++) {
    if (flower[i] === 0) {
      count++;
    }
  }
  console.log(count);
  //     return count
  if (count % 2 === 0) {
    count = count - 1;
    count = (count - 1) / 2;
  } else {
    count = (count - 1) / 2;
  }
  if (count === n) return true;
  return false;
};</code>
  </pre>
</details>