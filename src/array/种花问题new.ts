export default (flower: Array<any>, n: Number) => {
  let max = 0;
  for (let i = 0; i < flower.length - 1; i++) {
    if (flower[i] === 0) {
      if (i === 0 && flower[1] === 0) {
        max++;
        i++;
      } else if (flower[i - 1] === 0 && flower[i + 1] === 0) {
        max++;
        i++;
      }
    }
  }
  if (max >= n) return true;

  return false;
};
