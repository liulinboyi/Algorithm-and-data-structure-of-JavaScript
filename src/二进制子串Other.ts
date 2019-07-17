export default str => {
  //把数组用作 队列 或者 堆栈
  //建立数据结构 用来保存数据
  let r = [];
  let match = str => {
    //先找出两个 0 或者两个1
    let j = str.match(/^(0+|1+)/)[0];
    //将1或者0取反
    let o = (j[0] ^ 1).toString().repeat(j.length);
    let reg = new RegExp(`^(${j}${o})`);
    if (reg.test(str)) {
      return RegExp.$1;
    } else {
      return "";
    }
  };
  //通过for循环 控制 程序 运行流程
  for (let i = 0; i < str.length; i++) {
    let sub = match(str.slice(i));
    if (sub) {
      r.push(sub);
    }
  }
  return r;
};
