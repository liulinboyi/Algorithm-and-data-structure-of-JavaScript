export default (n) => {
    let arr = [0,1];
    var result = []
    var oresult = []
    var count = 0
    if(n === 0) return [0]
    if(n !== 0){
        for(let j = 0;j<n;j++){
            function inner(arr){
              console.log("函数里面",arr,count)
              for(let i = 0;i<Math.pow(2,j+1)/2;i++){
                result[i] = (`0${arr[i]}`)
                oresult[i] = (`1${arr[i]}`)
              }
                    count ++
                    console.log(count)
                    arr = result.concat(oresult.reverse())
                    console.log("arr赋值后",arr)
                    if(count < n-1){
                       console.log("函数里判断中",result,arr)
                       inner(arr) 
                    }
                    console.log("函数里面最后",result,arr)
                    return arr                    
            }
            console.log("函数外面",result,arr)
            arr = inner(arr)
        }
    }
    console.log(result,arr)
    arr = arr.map(item => parseInt(String(item),2)/2)
    return arr
};
