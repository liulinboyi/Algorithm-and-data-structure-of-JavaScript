/**
 * 第一种
 */

// let numobj = {
//   2: "abc",
//   3: "def",
//   4: "ghi",
//   5: "jkl",
//   6: "mno",
//   7: "pqrs",
//   8: "tuv",
//   9: "wxyz"
// };
// let numtostr = num => {
//   let a, b;
//   let res = [];
//   let arr: Array<any>;
//   if (typeof num === "string") {
//     if (num.length < 2) {
//       throw new Error("请输入长度为超过2的字符串");
//     }
//     arr = num.split("");
//     let flag = arr.every((element, index, array) => {
//       return Object.keys(numobj).includes(element);
//     });
//     if (!flag) {
//       throw new Error("请输入的字符串包含2-9");
//     }
//     a = numobj[arr[0]];
//     b = numobj[arr[1]];
//     // console.log(a, b);
//   } else if (num instanceof Array) {
//     arr = num;
//     a = num[0];
//     b = numobj[num[1]];
//   }

//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       res.push(a[i] + b[j]);
//     }
//   }
// //   console.log(arr);
//   arr.splice(0, 2, res);
//   if (arr.length > 1) {
//     numtostr(arr);
//     return arr[0];
//   } else {
//     return arr[0];
//   }
// };

/**
 * 第二种
 */

let numtostr = str => {
  let map = ["", 1, "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  let num = str.split("");
  let code = [];
  //将在输入的字符串映射为数组
  num.forEach(item => {
    //判断是否存在
    //边界情况
    if (map[item]) {
      code.push(map[item]);
    }
  });
  let comb = arr => {
    //临时变量 用来保存前两个 组合的结果
    let temp = [];
    for (let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j < arr[1].length; j++) {
        temp.push(`${arr[0][i]}${arr[1][j]}`);
      }
    }
    console.log(temp);
    arr.splice(0, 2, temp);
    console.log(arr);
    if (arr.length > 1) {
      comb(arr);
    } else {
      return temp;
    }
  };
  return comb(code);
};
export default numtostr;
