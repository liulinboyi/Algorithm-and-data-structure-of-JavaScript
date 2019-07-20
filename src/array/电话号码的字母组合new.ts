var letterCombinations = function (num){
    var numobj = {
2: "abc",
3: "def",
4: "ghi",
5: "jkl",
6: "mno",
7: "pqrs",
8: "tuv",
9: "wxyz"
}
    var a,b;
    var res = []
    console.log(num)
    if(num.length === 0) return []
    if(num.length === 1){
            let temp = numobj[num].split("")
            return temp
        }
    if(typeof num === "string"){
        var arr:Array<any> = num.split("")
        var flag = arr.every((element, index, array) => {
        return Object.keys(numobj).includes(element)
        })
        if(!flag){
            throw new Error("请输入的字符串包含2-9");
            return
        }
        a = numobj[arr[0]];
        b = numobj[arr[1]];
        console.log(a,b)
    }else if(num instanceof Array){
        var arr = num;
        a = num[0];
        b = numobj[num[1]];
    }
    
    for(var i = 0;i<a.length;i++){
        for(var j = 0;j<b.length;j++){
            res.push(a[i]+b[j])
        }
    }
    console.log(arr)
    arr.splice(0,2,res)
    if(arr.length>1){
        letterCombinations(arr)
        return arr[0]
    }else{
        return arr[0]
    }
}