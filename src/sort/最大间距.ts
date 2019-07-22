var maximumGap = function(arr) {
  if (arr.length <= 1) return 0;
  arr.sort((a, b) => a - b);
  console.log(arr);
  var max = arr[1] - arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (max < arr[i + 1] - arr[i]) {
      max = arr[i + 1] - arr[i];
    }
  }
  return max;
};

export default maximumGap;
