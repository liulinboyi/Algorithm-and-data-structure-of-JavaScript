var count = 0;
function pop(arr) {
  //两两排序 最大值 靠右
  count++;
  for (var i = 0; i < arr.length - count; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
    }
    console.log(arr);
  }
  if (arr.length - count > 0) {
    arr = pop(arr);
  } else {
    return arr;
  }

  return arr;
}
export default pop;
// pop([10,2,3,5,6,8,0,9])
