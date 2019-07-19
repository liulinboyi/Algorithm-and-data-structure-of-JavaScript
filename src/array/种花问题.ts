export default (flower, n) => {
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
  if (count >= n) return true;
  return false;
};
