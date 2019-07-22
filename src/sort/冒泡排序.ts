function pop(arr) {
  //两两排序 最大值 靠右
  //控制遍历多少次
  for (var i = arr.length - 1; i > 0; i--) {
    //控制 遍历 对比 情况
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
    console.log(arr);
  }
  return arr;
}

export default pop;
// pop([10,2,3,5,6,8,0,9])
