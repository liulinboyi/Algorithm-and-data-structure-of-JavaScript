# JavaScript 的算法与数据结构

## 字符串

1. [翻转字符串](https://github.com/liulinboyi/Algorithm-and-data-structure-of-JavaScript/blob/master/src/%E7%BF%BB%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2.js)

```javascript
function sort(str) {
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
export default sort;
```
