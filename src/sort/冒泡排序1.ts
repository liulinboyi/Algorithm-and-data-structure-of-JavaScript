function pop(arr) {
  var count = 0;
  //两两排序 最大值 靠右
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
      count++;
    }
    console.log(arr);
  }
  if (count > 0) {
    arr = pop(arr);
  } else {
    return arr;
  }

  return arr;
}
export default pop;
// pop([10,2,3,5,6,8,0,9])
