//写的不太好，不要见笑
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

export default gcdout;
