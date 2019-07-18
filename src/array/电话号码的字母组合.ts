let numobj = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz"
};
let numtostr = num => {
  let a, b;
  let res = [];
  let arr: Array<any>;
  if (typeof num === "string") {
    if (num.length < 2) {
      throw new Error("请输入长度为超过2的字符串");
    }
    arr = num.split("");
    let flag = arr.every((element, index, array) => {
      return Object.keys(numobj).includes(element);
    });
    if (!flag) {
      throw new Error("请输入的字符串包含2-9");
    }
    a = numobj[arr[0]];
    b = numobj[arr[1]];
    // console.log(a, b);
  } else if (num instanceof Array) {
    arr = num;
    a = num[0];
    b = numobj[num[1]];
  }

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      res.push(a[i] + b[j]);
    }
  }
//   console.log(arr);
  arr.splice(0, 2, res);
  if (arr.length > 1) {
    numtostr(arr);
    return arr[0];
  } else {
    return arr[0];
  }
};

export default numtostr;
