# JavaScript 的算法与数据结构


## 所有代码均通过LeetCode 测试
[LeetCode](https://leetcode-cn.com/u/liu-lin-bo-yi)

[![CircleCI](https://circleci.com/gh/liulinboyi/Algorithm-and-data-structure-of-JavaScript/tree/master.svg?style=svg)](https://circleci.com/gh/liulinboyi/Algorithm-and-data-structure-of-JavaScript/tree/master)

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
  <code>/**
 * @param {number[]} deck
 * @return {boolean}
 */

var group = arr => {
  let single:Array<any> = [...new Set(arr)];
  let temp = [];
  let count:Array<any> = [];
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

var hasGroupsSizeX = function (arr) {
    arr = group(arr)
    function gcdout(arr){
    if(arr.length <= 1){
       return arr[0] % 2 === 0 ? true : false
    }
  //两个数才有 最大公约数
  if (arr.length > 1) {
    a = arr[0];
    b = arr[1];
    c = gcd(a, b);
    arr.splice(0, 2, c);
    gcdout(arr);
  } else {
    return;
  }
  if (c > 1) {
    return true;
  }
  return false;
    }
    
    return gcdout(arr)
 
}</code>

  </pre>
</details>

4. [电话号码的字母组合](https://github.com/liulinboyi/Algorithm-and-data-structure-of-JavaScript/blob/master/src/array/%E7%94%B5%E8%AF%9D%E5%8F%B7%E7%A0%81%E7%9A%84%E5%AD%97%E6%AF%8D%E7%BB%84%E5%90%88.ts)

<details>
  <summary>代码</summary>
  <pre>
  <code>/**
 * @param {string} num
 * @return {string[]}
 */

var letterCombinations = function (num){
    var numobj = {
2: "abc",
3: "def",
4: "ghi",
5: "jkl",
6: "mno",
7: "pqrs",
8: "tuv",
9: "wxyz"
}
    var a,b;
    var res = []
    if(num.length === 0) return []
    if(num.length === 1){
            let temp = numobj[num].split("")
            return temp
        }
    if(typeof num === "string"){
        var arr = num.split("")
        var flag = arr.every((element, index, array) => {
        return Object.keys(numobj).includes(element)
        })
        if(!flag){
            throw new Error("请输入的字符串包含2-9");
            return
        }
        a = numobj[arr[0]];
        b = numobj[arr[1]];
    }else if(num instanceof Array){
        var arr = num;
        a = num[0];
        b = numobj[num[1]];
    }
    
    for(var i = 0;i<a.length;i++){
        for(var j = 0;j<b.length;j++){
            res.push(a[i]+b[j])
        }
    }
    arr.splice(0,2,res)
    if(arr.length>1){
        letterCombinations(arr)
        return arr[0]
    }else{
        return arr[0]
    }
</code>

  </pre>
</details>

5. [种花问题](https://github.com/liulinboyi/Algorithm-and-data-structure-of-JavaScript/blob/master/src/array/%E7%A7%8D%E8%8A%B1%E9%97%AE%E9%A2%98.ts)

<details>
  <summary>代码</summary>
  <pre>
  <code>/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flower, n) {
  let max = 0;
    if(flower.length>2){
        flower = [...flower,0]
        for (let i = 0; i < flower.length - 1; i++) {
        if (flower[i] === 0) {
          if (i === 0 && flower[1] === 0) {
            max++;
            i++;
          } else if (flower[i - 1] === 0 && flower[i + 1] === 0) {
            max++;
            i++;
          }
        }
      }
    }else{
        if(!flower.includes(1)) max++
    }
  if (max >= n) return true;

  return false;
};</code>

  </pre>
</details>
