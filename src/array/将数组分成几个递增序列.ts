// // 输入 nums = [1,2,2,3,3,4,4], k = 3
// // 输出 true

// // nums = [0,1,2,2,3,3,4,4]

// // 可以分成 两个子序列 [1,2,3,4] 和 [2,3,4] 每个子序列长度至少为 3

// // nums = [5,6,6,7,8]
// // false

// // nums = [5,6,6,7,7,8]
// var group = arr => {
//   let single: Array<any> = [...new Set(arr)];
//   let temp = [];
//   let count = [];
//   single.forEach(item => {
//     count[item] = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (item === arr[i]) {
//         count[item]++;
//         temp.push(arr[i]);
//       }
//     }
//   });
//   return (count = count.filter(item => item !== "empty"));
//   console.log(count);
//   //       var a = hcf(count[0],count[1])
//   //       console.log(a)
// };

// function sort(nums, k) {
//   let single: Array<any> = [...new Set(nums)];
//   let pure = group(nums);
//   let resA = 0;
//   let resB = 0;
//   let isA = false;
//   let isB = false;
//   //判断是否为递增数列
//   for (var i = 0; i < single.length - 1; i++) {
//     if ((single[i + 1] = single[i] + 1)) {
//       resA++;
//     }
//   }
//   //判断是否可以 拆分
//   for (var j = 0; j < pure.length; j++) {
//     if (pure[i] === 2) {
//       resB++;
//     }
//   }

//   if (resA === single.length - 1) {
//     isA = true;
//   }
//   console.log("isA", isA);
//   console.log(pure, single, k);
//   if (resB >= k - 1) {
//     isB = true;
//   }
//   if (isA && isB) {
//     return true;
//   }

//   return false;
// }

// export default sort;
// // sort([1,2,2,3,3,4],3)

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
function sort(A, K) {
  var pure = group(A);
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
  return n >= K * groups ? true : false;
}
// sort([0,0,1,2,2,2,3,3,4,4],3)
export default sort;
