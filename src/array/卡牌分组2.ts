// var hasGroupsSizeX = function(deck) {
//     if (deck.length === 1) {
//       return false
//     }
//     if (deck.length === 2) {
//       return true
//     }
//     let json = {}
  
//     for (let i = 0; i < deck.length; i++) {
//       if (!json[deck[i]]) {
//         json[deck[i]] = 0
//       }
//       json[deck[i]]++
//     }
//     let array = Object.values(json)
  
//     return array.reduce((x, y) => hcf(x, y)) > 1
//   }
  
//   function hcf(x, y) {
//     var res
//     var smaller = x > y ? y : x
  
//     for (var i = 1; i <= smaller + 1; i++) {
//       if (x % i == 0 && y % i == 0) res = i
//     }
  
//     return res
//   }