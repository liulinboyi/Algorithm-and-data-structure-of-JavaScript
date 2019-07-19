/**
 * 卡牌分组
 */
// input [1,1,2,2,2,2]
// let group = arr => {
//   let a, b;
//   for (let i = 0; i < arr.length; i++) {
//     a = arr[i];
//   }
// };
//写的不太好 不要见笑
let group = arr => {
    arr = arr.sort()
    let single:Array<any> = [...new Set(arr)]
    let a, b,temp = [],count= [];
    let flag;
    console.log(single)
    single.forEach((item) => {
        count[item] = 0;
        for (let i = 0; i < arr.length; i++) {
          a = item;
          if(a === arr[i]){
              count[a]++
              temp.push(arr[i])
          }
        }
    })
  
    count = count.filter(item => item !== 'empty')
    console.log(count)
    count.forEach(item => {
        if(item < 2){
            flag = false
            return
        }else{
             count = count.sort().reverse()
              console.log(count)
              for(let i = 0;i<count.length;i++){
                  console.log(count[i])
                      if(count[i]%count[i+1] === 0){
                      flag = true
                      return flag
                      }else{
                          flag = false
                          return flag
                      }
              }
        }
    })
  
    console.log(temp,count,flag)
    return flag
  }
  
// var group = arr => {
//   arr.sort((a, b) => a - b);
//   var min = Number.MAX_SAFE_INTEGER;
//   var dst = [];
//   var result = true;
//   for (var i = 0; i < arr.length; i++) {
//     var temp = [];
//     temp.push(arr[i]);
//     for (var j = i + 1; j < arr.length - 1; j++) {
//       if (arr[i] === arr[j]) {
//         temp.push(arr[j]);
//       } else {
//         if (min > temp.length) {
//           min = temp.length;
//         }
//         //重新开辟一块内存 存储 临时变量
//         dst.push([].concat(temp));
//         console.log(dst);

//         //清空数组
//         temp.length = 0;
//         i = j;
//         break;
//       }
//     }
//   }
//   console.log(dst);
//   dst.every(item => {
//     if (item.length % min !== 0) {
//       result = false;
//       return false;
//     }
//   });
//   return result;
// };

// group([1, 1, 2, 2]);
export default group;
