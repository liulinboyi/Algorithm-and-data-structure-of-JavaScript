var group = arr => {
  let single: Array<any> = [...new Set(arr)];
  let temp = [];
  let count = [];
  single.forEach(item => {
    count[item] = 0;
    for (let i = 0; i < arr.length; i++) {
      if (item === arr[i]) {
        count[item]++;
        temp.push(arr[i]);
      }
    }
  });
  return (count = count.filter(item => item !== "empty"));
  console.log(count);
  //       var a = hcf(count[0],count[1])
  //       console.log(a)
};
function checkmin(pure) {
  var min = pure[0];
  var point = [];
  for (var i = 0; i < pure.length; i++) {
    //     console.log(pure[i])
    if (min > pure[i]) {
      console.log(pure[i]);
      min = pure[i];
    }
  }
  //找出 数组最小值 的序列号
  for (var i = 0; i < pure.length; i++) {
    if (min === pure[i]) {
      point[i] = min;
    } else {
      point[i] = "";
    }
  }
  console.log("最小值为", min, point);
  return point;
}
function checkin(min) {
  var nonull = min.filter(item => item !== "");
  //   计数 最小值 前后为空的 次数
  var count = 0;
  console.log("nonull", nonull, min);
  min = [nonull[0], ...min, nonull[0]];
  for (var i = 0; i < min.length; i++) {
    //     console.log("找到了",min)
    if (min[i + 1] === nonull[0]) {
      //       console.log("找到了",i)
      if (min[i] === "" && min[i + 2] === "") {
        console.log("找到了", i);
        count++;
      }
    }
  }
  return count > 0 ? false : true;
}
function sort(A, K) {
  var pure = group(A);
  var min = checkmin(pure);
  //  查看 数组里面 数字出现 次数 找到 出现最小的次数
  //  查看 最小次数 前面是空和后面为空 的情况 有的话 则不能 分成 递增的数组
  var res = checkin(min);
  console.log("所有的函数结果", pure, min, res);
  if (pure[0] > pure[1] || pure[pure.length - 1] > pure[pure.length - 2]) {
    return false;
  }
  var cur = 1,
    groups = 1,
    n = A.length;
  for (var i = 1; i < n; i++) {
    cur = A[i - 1] < A[i] ? 1 : cur + 1;
    groups = Math.max(groups, cur);
  }
  console.log(K, groups, n);
  if (n >= K * groups && res) {
    return true;
  }
  return false;
  //         n >= (K * groups) ? true : false && res
}

export default sort;
