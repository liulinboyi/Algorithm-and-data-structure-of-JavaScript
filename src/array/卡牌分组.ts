/**
 * 卡牌分组
 */
// input [1,1,2,2,2,2]
// let group = arr => {
//   let a, b;
//   for (let i = 0; i < arr.length; i++) {
//     a = arr[i];
//   }
// };
//写的不太好 不要见笑
var group = arr => {
  arr.sort((a, b) => a - b);
  var min = Number.MAX_SAFE_INTEGER;
  var dst = [];
  var result = true;
  for (var i = 0; i < arr.length; i++) {
    var temp = [];
    temp.push(arr[i]);
    for (var j = i + 1; j < arr.length - 1; j++) {
      if (arr[i] === arr[j]) {
        temp.push(arr[j]);
      } else {
        if (min > temp.length) {
          min = temp.length;
        }
        //重新开辟一块内存 存储 临时变量
        dst.push([].concat(temp));
        console.log(dst);

        //清空数组
        temp.length = 0;
        i = j;
        break;
      }
    }
  }
  console.log(dst);
  dst.every(item => {
    if (item.length % min !== 0) {
      result = false;
      return false;
    }
  });
  return result;
};

group([1, 1, 2, 2]);
export default group;
