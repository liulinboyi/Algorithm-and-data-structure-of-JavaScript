function repeat(str) {
  var reg = /^(\w+)\1+$/;
  return reg.test(str);
}

export default repeat;
