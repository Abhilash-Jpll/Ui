

//                          map()
// let arr1 = [1, 2, 3, 4, 5];

// let arr2 = arr1.map((element, index)=>{
//     return element *10;
// });
// console.log(arr1, arr2);
// // [ 1, 2, 3, 4, 5 ] [ 10, 20, 30, 40, 50 ]


// console.log([1, 2, 3, 4].map(
//     (element, index)=>{
//         console.log(element+10);
//     }
// ));
// // 11
// // 12
// // 13
// // 14



//                       filter()

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(
    (element, index)=>{
        if(element%2 == 0)
            console.log(element)
    }
))
// 2
// 4
// 6
// 8
// 10
// []



/*
    map --> On every Element
*/